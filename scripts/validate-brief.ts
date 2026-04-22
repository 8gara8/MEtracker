/**
 * Validate one or more brief MDX files against SPEC.md §10.
 *
 * Usage:
 *   tsx scripts/validate-brief.ts content/briefs/2026-02-28-day-001.mdx [more-files...]
 *
 * Exit code 0 on pass, 1 on fail.
 */

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const SCHEMA_PATH = path.join(
  process.cwd(),
  'routine',
  'schemas',
  'brief-frontmatter.schema.json',
);
const BRIEFS_DIR = path.join(process.cwd(), 'content', 'briefs');

type ValidationResult = {
  file: string;
  errors: string[];
  warnings: string[];
};

type LoadedBrief = {
  file: string;
  data: Record<string, unknown>;
  body: string;
};

function loadBrief(filePath: string): LoadedBrief {
  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(raw);
  return {
    file: filePath,
    data: parsed.data,
    body: parsed.content,
  };
}

function loadAllBriefs(): LoadedBrief[] {
  if (!fs.existsSync(BRIEFS_DIR)) return [];
  return fs
    .readdirSync(BRIEFS_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => loadBrief(path.join(BRIEFS_DIR, f)));
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function extractSection(body: string, heading: string): string | null {
  const lines = body.split(/\r?\n/);
  const headingRe = new RegExp(`^##\\s+${heading}\\s*$`, 'i');
  const anyHeadingRe = /^##\s+/;
  let start = -1;
  for (let i = 0; i < lines.length; i++) {
    if (headingRe.test(lines[i])) {
      start = i + 1;
      break;
    }
  }
  if (start === -1) return null;
  let end = lines.length;
  for (let i = start; i < lines.length; i++) {
    if (anyHeadingRe.test(lines[i])) {
      end = i;
      break;
    }
  }
  return lines.slice(start, end).join('\n').trim();
}

async function checkUrl(url: unknown): Promise<boolean> {
  if (typeof url !== 'string' || url.length === 0) return false;
  if (url.includes('web.archive.org')) return true;
  try {
    const ctrl = new AbortController();
    const timeout = setTimeout(() => ctrl.abort(), 8000);
    const res = await fetch(url, { method: 'HEAD', signal: ctrl.signal });
    clearTimeout(timeout);
    if (res.ok) return true;
    if (res.status === 405 || res.status === 403) {
      const ctrl2 = new AbortController();
      const t2 = setTimeout(() => ctrl2.abort(), 8000);
      const res2 = await fetch(url, { method: 'GET', signal: ctrl2.signal });
      clearTimeout(t2);
      return res2.ok;
    }
    return false;
  } catch {
    return false;
  }
}

async function validateOne(
  target: LoadedBrief,
  allBriefs: LoadedBrief[],
  ajvValidate: (d: unknown) => boolean,
  ajvErrors: () => string,
): Promise<ValidationResult> {
  const errors: string[] = [];
  const warnings: string[] = [];
  const data = target.data;

  if (!ajvValidate(data)) {
    errors.push(`Frontmatter schema: ${ajvErrors()}`);
  }

  const day = data.day as number | undefined;
  const date = data.date as string | undefined;
  const filename = path.basename(target.file);
  if (date && day !== undefined) {
    const expected = `${date}-day-${String(day).padStart(3, '0')}.mdx`;
    if (filename !== expected && filename !== expected.replace('.mdx', '.md')) {
      errors.push(
        `Filename mismatch: expected "${expected}" from frontmatter, got "${filename}".`,
      );
    }
  }

  const peers = allBriefs
    .filter((b) => b.file !== target.file)
    .map((b) => ({ ...b, day: b.data.day as number | undefined }))
    .filter((b): b is LoadedBrief & { day: number } => typeof b.day === 'number')
    .sort((a, b) => a.day - b.day);

  if (day !== undefined) {
    const duplicates = peers.filter((b) => b.day === day);
    for (const dup of duplicates) {
      errors.push(
        `Duplicate day: day ${day} already exists at ${path.relative(process.cwd(), dup.file)}. Every brief must claim a unique day number.`,
      );
    }
  }

  const prev = peers.filter((b) => b.day < (day ?? 0)).pop();

  if (prev && day !== undefined) {
    if (day !== prev.day + 1 && data.gap_acknowledged !== true) {
      errors.push(
        `Day continuity: current day ${day} is not previous (${prev.day}) + 1. Set \`gap_acknowledged: true\` if the gap is intentional.`,
      );
    }
    const actors: Array<'us' | 'israel' | 'iran' | 'other'> = [
      'us',
      'israel',
      'iran',
      'other',
    ];
    const currentSnap = data.casualties_snapshot as
      | Record<string, { killed: number; wounded: number }>
      | undefined;
    const prevSnap = prev.data.casualties_snapshot as
      | Record<string, { killed: number; wounded: number }>
      | undefined;
    if (currentSnap && prevSnap && data.casualty_revision !== true) {
      for (const a of actors) {
        if (!currentSnap[a] || !prevSnap[a]) continue;
        if (currentSnap[a].killed < prevSnap[a].killed) {
          errors.push(
            `Casualties regressed: ${a}.killed went from ${prevSnap[a].killed} to ${currentSnap[a].killed}. Set \`casualty_revision: true\` with an explanation in the body.`,
          );
        }
        if (currentSnap[a].wounded < prevSnap[a].wounded) {
          errors.push(
            `Casualties regressed: ${a}.wounded went from ${prevSnap[a].wounded} to ${currentSnap[a].wounded}. Set \`casualty_revision: true\` with an explanation in the body.`,
          );
        }
      }
    }
  }

  const sources = (data.sources as Array<{ url: string }> | undefined) ?? [];
  if (data.quiet_day !== true && sources.length < 8) {
    errors.push(
      `Sources floor: need >= 8 sources for non-quiet days; got ${sources.length}. Set \`quiet_day: true\` to waive.`,
    );
  }

  if (sources.length > 0) {
    const results = await Promise.all(sources.map((s) => checkUrl(s.url)));
    const broken = results
      .map((ok, i) => ({ ok, url: sources[i].url }))
      .filter((r) => !r.ok);
    if (broken.length > 2) {
      errors.push(
        `URL resolution: ${broken.length} sources failed HEAD/GET (max 2 allowed). Broken: ${broken
          .map((b) => b.url)
          .join(', ')}`,
      );
    } else if (broken.length > 0) {
      warnings.push(
        `URL resolution: ${broken.length} broken link(s): ${broken
          .map((b) => b.url)
          .join(', ')}`,
      );
    }
  }

  const exec = extractSection(target.body, 'Executive Summary');
  if (!exec) {
    errors.push('Missing "## Executive Summary" section.');
  } else {
    const wc = countWords(exec);
    if (wc < 150 || wc > 300) {
      errors.push(`Executive Summary word count ${wc}; expected 150–300.`);
    }
  }

  const strategic = extractSection(target.body, 'Strategic Implications');
  if (!strategic) {
    errors.push('Missing "## Strategic Implications" section.');
  } else {
    const wc = countWords(strategic);
    if (wc < 400 || wc > 800) {
      errors.push(`Strategic Implications word count ${wc}; expected 400–800.`);
    }
  }

  const bodyWc = countWords(target.body);
  if (bodyWc < 1500 || bodyWc > 4000) {
    errors.push(`Total body word count ${bodyWc}; expected 1500–4000.`);
  }

  return { file: target.file, errors, warnings };
}

async function main() {
  const args = process.argv.slice(2);
  const targetFiles = args.length > 0
    ? args.map((a) => path.resolve(process.cwd(), a))
    : loadAllBriefs().map((b) => b.file);

  if (targetFiles.length === 0) {
    console.log('[validate-brief] no brief files to validate.');
    return;
  }

  const schema = JSON.parse(fs.readFileSync(SCHEMA_PATH, 'utf8'));
  const ajv = new Ajv({ allErrors: true });
  addFormats(ajv);
  const validator = ajv.compile(schema);

  const allBriefs = loadAllBriefs();

  let hadError = false;
  for (const filePath of targetFiles) {
    if (!fs.existsSync(filePath)) {
      console.error(`[validate-brief] FAIL ${filePath}: file not found`);
      hadError = true;
      continue;
    }
    const target = loadBrief(filePath);
    const result = await validateOne(
      target,
      allBriefs,
      (d) => validator(d) as boolean,
      () => ajv.errorsText(validator.errors),
    );
    if (result.errors.length === 0) {
      console.log(
        `[validate-brief] PASS ${path.relative(process.cwd(), result.file)}${result.warnings.length ? ` (${result.warnings.length} warning(s))` : ''}`,
      );
      for (const w of result.warnings) {
        console.warn(`  warning: ${w}`);
      }
    } else {
      hadError = true;
      console.error(`[validate-brief] FAIL ${path.relative(process.cwd(), result.file)}`);
      for (const e of result.errors) {
        console.error(`  error: ${e}`);
      }
      for (const w of result.warnings) {
        console.warn(`  warning: ${w}`);
      }
    }
  }

  process.exit(hadError ? 1 : 0);
}

main().catch((err) => {
  console.error('[validate-brief] unexpected failure:', err);
  process.exit(1);
});
