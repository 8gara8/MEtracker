/**
 * The morning run: preflight → research agent → stage + validate (with repairs) → one commit + push →
 * live check → run summary. The script owns the lock, git, validation and the failure path; the
 * headless agent only researches and writes three draft files in drafts/DATE/. Ported from
 * EuropeTracker's pipeline (November 2026).
 *
 *   tsx scripts/daily.ts [--date YYYY-MM-DD] [--dry-run] [--drafts DIR]
 *
 * --dry-run   do everything except commit and push, then put the tree back
 * --drafts    skip the agent and use drafts already in DIR (for testing the publish path)
 */

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import matter from 'gray-matter';
import { originalUrl } from '../lib/sources';
import { runAgent, renderTemplate, type AgentConfig } from './lib/agent';
import { briefPaths, dayFor, latestSlug, registerBrief, slugFor, taipeiToday } from './lib/brief-files';
import { git, isClean, onOrigin, pushWithRetry, syncMain, type Git } from './lib/git';
import { CLAUDE_TOKEN_SERVICE, readSecret } from './lib/keychain';
import { acquireLock, releaseLock } from './lib/lock';
import { sidecarProblems } from './lib/sidecar-check';
import { RunLog } from './lib/log';
import { run } from './lib/run';
import { evidence, urlKey, type Transcript } from './lib/transcript';

const MIN = 60_000;
const env = process.env;
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TSX = path.join(ROOT, 'node_modules', '.bin', 'tsx');
const TSC = path.join(ROOT, 'node_modules', '.bin', 'tsc');

export const CONFIG = {
  agentTimeout: 40 * MIN,
  repairTimeout: 8 * MIN,
  maxRepairs: 2,
  liveWaitMax: 8 * MIN,
  model: env.ME_MODEL ?? 'opus',
  fallbackModel: env.ME_FALLBACK_MODEL ?? 'sonnet',
  claudeBin: env.ME_CLAUDE_BIN ?? '/Users/kobol/.europetracker/cli/node_modules/.bin/claude',
  configDir: env.ME_CLAUDE_CONFIG_DIR ?? path.join(os.homedir(), '.metracker', 'claude'),
  needsReview: env.ME_NEEDS_REVIEW ?? path.join(os.homedir(), 'Documents', 'MEwar', 'needs-review'),
  siteUrl: 'https://metracker.vercel.app',
};

type Outcome = 'published' | 'failed' | 'skipped' | 'dry_run';

class RunFailure extends Error {
  constructor(readonly code: string, message: string) {
    super(message);
  }
}

interface Facts {
  date: string;
  day: number;
  slug: string;
  started: string;
  outcome: Outcome;
  code?: string;
  message?: string;
  repairs: number;
  sources?: number;
  categories?: number;
  commit?: string;
  live?: boolean;
  model?: string | null;
  turns?: number;
  searches?: number;
  fetches?: number;
  costUsd?: number;
  needsReview?: string;
}

/** Errors from the validator and type check for one staged brief; empty when it passes. */
async function validate(slug: string, transcripts: Transcript[], log: RunLog): Promise<string[]> {
  const p = briefPaths(ROOT, slug);
  const errors: string[] = [];
  const v = await run(TSX, ['scripts/validate-brief.ts', path.relative(ROOT, p.mdx)], { cwd: ROOT, timeoutMs: 5 * MIN });
  if (v.code !== 0) {
    errors.push(...`${v.stdout}\n${v.stderr}`.split('\n').filter((l) => /^\s*error:/.test(l)).map((l) => l.trim()));
    if (errors.length === 0) errors.push(`validate-brief failed: ${(v.stderr || v.stdout).trim().slice(0, 500)}`);
  }
  const t = await run(TSC, ['--noEmit', '--incremental', 'false'], { cwd: ROOT, timeoutMs: 5 * MIN });
  if (t.code !== 0) {
    errors.push(...t.stdout.split('\n').filter((l) => l.includes('error TS')).slice(0, 20).map((l) => `tsc: ${l.trim()}`));
  }
  // Every cited source must be a page the agent saw this run, in a search result or a fetch.
  // (Skipped only when no agent ran, i.e. --drafts.)
  const seen = evidence(transcripts);
  if (transcripts.length > 0) {
    const fm = matter(fs.readFileSync(p.mdx, 'utf8')).data as { sources?: Array<{ url?: string }> };
    for (const s of fm.sources ?? []) {
      if (s.url && !seen.has(urlKey(originalUrl(s.url)))) {
        errors.push(`error: Source not opened or found this run: ${s.url}. Cite only pages you saw today.`);
      }
    }
  }
  log.line(errors.length ? `Validation: ${errors.length} error(s).` : 'Validation passed.');
  return errors;
}

/** ISO 8601 in Asia/Taipei, to the minute: 2026-11-04T07:21:00+08:00. */
export function taipeiStamp(ms: number): string {
  return `${new Date(ms + 8 * 3_600_000).toISOString().slice(0, 16)}:00+08:00`;
}

/**
 * Sets every frontmatter `accessed_at` to the time the research finished. The agent can't know when it
 * read each page, and the times it wrote before were invented; one honest timestamp per run is better.
 */
export function stampAccessed(mdx: string, stamp: string): string {
  const end = mdx.indexOf('\n---', 4);
  if (!mdx.startsWith('---') || end < 0) return mdx;
  return mdx.slice(0, end).replace(/^(\s+accessed_at:\s*).*$/gm, `$1"${stamp}"`) + mdx.slice(end);
}

/**
 * Copies the drafts into place and registers the brief. Returns the problems that stopped it instead:
 * missing files, or a sidecar that isn't pure data (the validator imports the sidecar, which would run
 * any code in it, so it is checked by parsing before it is staged).
 */
function stage(draftDir: string, slug: string, log: RunLog, researchedAt: number): string[] {
  const p = briefPaths(ROOT, slug);
  const files = { mdx: path.join(draftDir, 'brief.mdx'), data: path.join(draftDir, 'brief.data.ts'), context: path.join(draftDir, 'context.md') };
  const missing = Object.values(files).filter((f) => !fs.existsSync(f));
  if (missing.length) {
    log.line(`Draft incomplete: missing ${missing.map((f) => path.basename(f)).join(', ')}.`);
    return [`error: The draft is incomplete: write ${missing.map((f) => path.basename(f)).join(', ')}.`];
  }
  const unsafe = sidecarProblems(fs.readFileSync(files.data, 'utf8'));
  if (unsafe.length) {
    log.line(`Sidecar rejected before staging: ${unsafe[0]}`);
    return unsafe.map((u) => `error: brief.data.ts: ${u}`);
  }
  fs.writeFileSync(p.mdx, stampAccessed(fs.readFileSync(files.mdx, 'utf8'), taipeiStamp(researchedAt)));
  fs.copyFileSync(files.data, p.data);
  fs.copyFileSync(files.context, p.context);
  fs.writeFileSync(p.registry, registerBrief(fs.readFileSync(p.registry, 'utf8'), slug));
  return [];
}

/** Puts the index and working tree back as they were before staging (also after a failed commit). */
async function unstage(g: Git, slug: string): Promise<void> {
  const p = briefPaths(ROOT, slug);
  await g(['reset', '-q', 'HEAD', '--', path.relative(ROOT, p.mdx), path.relative(ROOT, p.data), 'content/context.md', 'lib/brief-data.ts']);
  fs.rmSync(p.mdx, { force: true });
  fs.rmSync(p.data, { force: true });
  await g(['checkout', '--', 'content/context.md', 'lib/brief-data.ts']);
}

function sourceStats(slug: string): { sources: number; categories: number } {
  const fm = matter(fs.readFileSync(briefPaths(ROOT, slug).mdx, 'utf8')).data as { sources?: Array<{ category?: string }> };
  const sources = fm.sources ?? [];
  return { sources: sources.length, categories: new Set(sources.map((s) => s.category).filter(Boolean)).size };
}

/** Confirms GitHub's main is the commit just pushed. */
async function verifyPushed(g: Git, commit: string): Promise<void> {
  const remote = (await g(['ls-remote', 'origin', 'refs/heads/main'])).split(/\s/)[0];
  if (!remote.startsWith(commit)) {
    throw new RunFailure('E_PUSH', `GitHub main is ${remote.slice(0, 7)}, not ${commit}. The commit stays local and goes out with the next run.`);
  }
}

async function waitLive(url: string, maxMs: number, log: RunLog): Promise<boolean> {
  const until = Date.now() + maxMs;
  while (Date.now() < until) {
    try {
      const res = await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(20_000) });
      if (res.ok) return true;
    } catch {
      /* not yet */
    }
    await new Promise((r) => setTimeout(r, 20_000));
  }
  log.line(`Not live after ${Math.round(maxMs / MIN)} min: ${url}`);
  return false;
}

export function renderSummary(f: Facts): string {
  const head = `ME Tracker Day ${f.day} — ${f.date}`;
  const stats = `${f.repairs} repair(s); agent ${f.model ?? '?'}, ${f.turns ?? '?'} turns, ${f.searches ?? 0} searches, ${f.fetches ?? 0} fetches${f.costUsd ? `, ~$${f.costUsd.toFixed(2)}` : ''}.`;
  switch (f.outcome) {
    case 'published':
      return [
        `${head}: published${f.live ? '' : ' (not live yet)'}`,
        `Sources: ${f.sources} across ${f.categories} categories. Commit ${f.commit}.`,
        `Live: ${CONFIG.siteUrl}/brief/${f.slug}`,
        stats,
      ].join('\n');
    case 'dry_run':
      return [`${head}: dry run, not pushed`, `Sources: ${f.sources} across ${f.categories} categories.`, stats].join('\n');
    case 'skipped':
      return `${head}: skipped. ${f.message}`;
    default:
      return [
        `${head}: FAILED (${f.code})`,
        f.message ?? '',
        f.needsReview ? `Drafts: ${f.needsReview}` : '',
        `Log: logs/${f.date}.daily.log`,
      ].filter(Boolean).join('\n');
  }
}

export async function main(argv = process.argv.slice(2)): Promise<number> {
  const { values } = parseArgs({
    args: argv,
    options: { date: { type: 'string' }, 'dry-run': { type: 'boolean' }, drafts: { type: 'string' } },
  });
  const date = values.date ?? taipeiToday();
  const slug = slugFor(date);
  const facts: Facts = { date, day: dayFor(date), slug, started: new Date().toISOString(), outcome: 'failed', repairs: 0 };
  fs.mkdirSync(path.join(ROOT, 'logs'), { recursive: true });
  const log = new RunLog(path.join(ROOT, 'logs', `${date}.daily.log`));
  const lockFile = path.join(ROOT, '.lock');
  const g = git(ROOT);
  const draftDir = values.drafts ? path.resolve(values.drafts) : path.join(ROOT, 'drafts', date);
  let staged = false;

  const lock = acquireLock(lockFile);
  if (!lock.acquired) {
    facts.outcome = 'skipped';
    facts.message = `Another run holds the lock (pid ${lock.holder.pid} since ${lock.holder.started}).`;
    return finish(facts, log, lockFile, false);
  }
  if (lock.replacedStale) log.line(`Replaced a stale lock: ${lock.replacedStale}.`);

  const transcripts: Transcript[] = [];
  let researchedAt = Date.now();
  try {
    log.line(`Run for Day ${facts.day} (${date}) started${values['dry-run'] ? ' — dry run' : ''}.`);

    // Preflight
    if (!(await isClean(g))) throw new RunFailure('E_GIT', `The working tree has uncommitted changes: ${(await g(['status', '--porcelain'])).split('\n').slice(0, 3).join('; ')}`);
    if (values['dry-run']) {
      log.line('Dry run: using the current branch as it is, without syncing main.');
    } else {
      if ((await g(['rev-parse', '--abbrev-ref', 'HEAD'])) !== 'main') throw new RunFailure('E_GIT', 'The checkout is not on main.');
      await syncMain(g).catch((e) => {
        throw new RunFailure('E_GIT', (e as Error).message);
      });
    }
    if (fs.existsSync(briefPaths(ROOT, slug).mdx)) {
      // A brief committed by an earlier run whose push failed: push it now instead of skipping.
      const rel = path.relative(ROOT, briefPaths(ROOT, slug).mdx);
      if (!values['dry-run'] && !(await onOrigin(g, rel))) {
        log.line(`Day ${facts.day} is committed here but not on GitHub; pushing it.`);
        await pushWithRetry(g, ['origin', 'main']);
        facts.commit = await g(['rev-parse', '--short', 'HEAD']);
        await verifyPushed(g, facts.commit);
        facts.outcome = 'published';
        Object.assign(facts, sourceStats(slug));
        facts.live = await waitLive(`${CONFIG.siteUrl}/brief/${slug}`, CONFIG.liveWaitMax, log);
        return finish(facts, log, lockFile, true);
      }
      facts.outcome = 'skipped';
      facts.message = `Day ${facts.day} is already published.`;
      return finish(facts, log, lockFile, true);
    }
    const prev = latestSlug(ROOT);

    // Research
    let agent: AgentConfig | null = null;
    if (!values.drafts) {
      const token = readSecret(CLAUDE_TOKEN_SERVICE);
      if (!token) throw new RunFailure('E_TOKEN', `No agent token in the keychain (${CLAUDE_TOKEN_SERVICE}).`);
      fs.mkdirSync(CONFIG.configDir, { recursive: true, mode: 0o700 });
      agent = { bin: CONFIG.claudeBin, configDir: CONFIG.configDir, model: CONFIG.model, fallbackModel: CONFIG.fallbackModel, repo: ROOT, token };
      fs.rmSync(draftDir, { recursive: true, force: true });
      fs.mkdirSync(draftDir, { recursive: true });
      const prompt = renderTemplate(fs.readFileSync(path.join(ROOT, 'routine', 'RUN_PROMPT.md'), 'utf8'), {
        DATE: date,
        DAY: String(facts.day),
        SLUG: slug,
        PREV_SLUG: prev ?? '(none)',
        DRAFT_DIR: path.relative(ROOT, draftDir),
      });
      log.line(`Agent started (${CONFIG.model}).`);
      const r = await runAgent(prompt, agent, { timeoutMs: CONFIG.agentTimeout, transcriptFile: path.join(ROOT, 'logs', `${date}.agent.jsonl`) });
      transcripts.push(r.transcript);
      researchedAt = Date.now();
      log.line(`Agent finished: exit ${r.run.code}${r.run.timedOut ? ' (timed out)' : ''}, ${r.transcript.numTurns ?? '?'} turns, ${r.transcript.searches} searches, ${r.transcript.fetched.length} fetches.`);
      if (r.transcript.authFailed) throw new RunFailure('E_TOKEN', 'The agent token was refused. Renew it (see ~/.europetracker/save-token.zsh).');
    }

    // Stage, validate, repair
    let errors: string[] = [];
    for (let attempt = 0; ; attempt++) {
      errors = stage(draftDir, slug, log, researchedAt);
      staged = errors.length === 0;
      if (staged) errors = await validate(slug, transcripts, log);
      if (errors.length === 0) break;
      if (staged) {
        await unstage(g, slug);
        staged = false;
      }
      if (!agent || attempt >= CONFIG.maxRepairs) break;
      facts.repairs++;
      const repair = renderTemplate(fs.readFileSync(path.join(ROOT, 'routine', 'REPAIR.md'), 'utf8'), {
        DRAFT_DIR: path.relative(ROOT, draftDir),
        ERRORS: errors.join('\n'),
      });
      log.line(`Repair ${facts.repairs}: ${errors.length} error(s).`);
      const r = await runAgent(repair, agent, {
        timeoutMs: CONFIG.repairTimeout,
        transcriptFile: path.join(ROOT, 'logs', `${date}.repair${facts.repairs}.jsonl`),
        resume: transcripts[0]?.sessionId ?? undefined,
      });
      transcripts.push(r.transcript);
    }
    if (errors.length) {
      fs.writeFileSync(path.join(draftDir, 'validator-report.txt'), `${errors.join('\n')}\n`);
      throw new RunFailure('E_INVALID', `The draft failed validation after ${facts.repairs} repair(s): ${errors.slice(0, 3).join(' | ')}`);
    }
    Object.assign(facts, sourceStats(slug));

    if (values['dry-run']) {
      facts.outcome = 'dry_run';
      await unstage(g, slug);
      staged = false;
      return finish(facts, log, lockFile, true, transcripts);
    }

    // Publish: one commit, pushed; a rejected push is rebased onto GitHub's main and retried.
    await g(['add', '--', path.relative(ROOT, briefPaths(ROOT, slug).mdx), path.relative(ROOT, briefPaths(ROOT, slug).data), 'content/context.md', 'lib/brief-data.ts']);
    staged = true;
    await g(['commit', '-m', `brief: Day ${facts.day} — ${date}`]);
    staged = false;
    facts.commit = (await g(['rev-parse', '--short', 'HEAD']));
    try {
      await pushWithRetry(g, ['origin', 'main']);
    } catch {
      log.line('Push rejected; rebasing onto GitHub main and retrying.');
      await syncMain(g);
      await pushWithRetry(g, ['origin', 'main']);
      facts.commit = await g(['rev-parse', '--short', 'HEAD']);
    }
    await verifyPushed(g, facts.commit);
    log.line(`Pushed ${facts.commit}.`);
    facts.outcome = 'published';
    facts.live = await waitLive(`${CONFIG.siteUrl}/brief/${slug}`, CONFIG.liveWaitMax, log);
    return finish(facts, log, lockFile, true, transcripts);
  } catch (e) {
    facts.outcome = 'failed';
    facts.code = e instanceof RunFailure ? e.code : 'E_INTERNAL';
    facts.message = (e as Error).message;
    log.line(`FAILED ${facts.code}: ${facts.message}`);
    if (staged) await unstage(g, slug).catch(() => {});
    if (fs.existsSync(draftDir) && fs.readdirSync(draftDir).length) {
      const dest = path.join(CONFIG.needsReview, `day-${String(facts.day).padStart(3, '0')}-${date}`);
      fs.mkdirSync(dest, { recursive: true });
      fs.cpSync(draftDir, dest, { recursive: true });
      facts.needsReview = dest;
    }
    return finish(facts, log, lockFile, true, transcripts);
  }
}

function finish(f: Facts, log: RunLog, lockFile: string, ownLock: boolean, transcripts: Transcript[] = []): number {
  const first = transcripts[0];
  if (first) {
    f.model = first.model;
    f.turns = transcripts.reduce((n, t) => n + (t.numTurns ?? 0), 0);
    f.searches = transcripts.reduce((n, t) => n + t.searches, 0);
    f.fetches = transcripts.reduce((n, t) => n + t.fetched.length, 0);
    f.costUsd = transcripts.reduce((n, t) => n + (t.costUsd ?? 0), 0);
  }
  const summary = renderSummary(f);
  fs.writeFileSync(path.join(ROOT, 'logs', `${f.date}.summary.md`), `${summary}\n`);
  fs.appendFileSync(path.join(ROOT, 'logs', 'runs.jsonl'), `${JSON.stringify({ ...f, finished: new Date().toISOString() })}\n`);
  log.line(`Outcome: ${f.outcome}.`);
  if (ownLock) releaseLock(lockFile);
  return f.outcome === 'failed' ? 1 : 0;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().then((code) => {
    process.exitCode = code;
  });
}
