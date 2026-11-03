/**
 * Finds or saves a Wayback Machine snapshot for every source of the given
 * briefs and records it in content/archive.json (original URL → snapshot).
 * The site links the publisher's page and adds an [archived] link from this
 * map. Failures are logged and skipped; the script always exits 0 unless the
 * arguments are wrong.
 *
 * Usage:
 *   tsx scripts/archive-sources.ts content/briefs/<slug>.mdx [more...]
 *   tsx scripts/archive-sources.ts --lookup-only --from-day 68   # backfill from existing snapshots
 *
 * Runs in GitHub Actions after each brief lands on main (.github/workflows/archive.yml).
 */

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { ARCHIVE_MAP_PATH, archiveKey, originalUrl } from '../lib/sources';

const USER_AGENT = 'MEtracker/1.0 (+https://metracker.vercel.app)';
const SAVE_GAP_MS = 15_000;
const SAVE_TIMEOUT_MS = 60_000;
const LOOKUP_TIMEOUT_MS = 20_000;
// archive.org answers 429 to bursts; space lookups and back off once on 429.
const LOOKUP_GAP_MS = 2_000;
const RATE_LIMIT_WAIT_MS = 60_000;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function lookup(url: string, date: string): Promise<string | null> {
  const stamp = date.replaceAll('-', '');
  const api = `https://archive.org/wayback/available?url=${encodeURIComponent(url)}&timestamp=${stamp}`;
  const get = () =>
    fetch(api, { headers: { 'User-Agent': USER_AGENT }, signal: AbortSignal.timeout(LOOKUP_TIMEOUT_MS) });
  await sleep(LOOKUP_GAP_MS);
  let res = await get();
  if (res.status === 429) {
    await sleep(RATE_LIMIT_WAIT_MS);
    res = await get();
  }
  if (!res.ok) throw new Error(`availability API ${res.status}`);
  const body = (await res.json()) as {
    archived_snapshots?: { closest?: { available?: boolean; url?: string; status?: string } };
  };
  const c = body.archived_snapshots?.closest;
  if (!c?.available || !c.url || c.status !== '200') return null;
  return c.url.replace(/^http:/, 'https:');
}

async function save(url: string): Promise<string | null> {
  const res = await fetch(`https://web.archive.org/save/${url}`, {
    headers: { 'User-Agent': USER_AGENT },
    redirect: 'manual',
    signal: AbortSignal.timeout(SAVE_TIMEOUT_MS),
  });
  if (res.status !== 200 && res.status !== 302) return null;
  const where = res.headers.get('content-location') ?? res.headers.get('location');
  if (!where || !/\/web\/\d{14}/.test(where)) return null;
  return where.startsWith('http') ? where : `https://web.archive.org${where}`;
}

function briefFiles(args: string[]): string[] {
  const fromIdx = args.indexOf('--from-day');
  const files = args.filter((a, i) => !a.startsWith('--') && (fromIdx < 0 || i !== fromIdx + 1));
  if (files.length > 0) return files;
  if (fromIdx < 0) return [];
  const fromDay = Number(args[fromIdx + 1]);
  const dir = path.join(process.cwd(), 'content', 'briefs');
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .filter((f) => Number(f.match(/-day-(\d+)\.mdx$/)?.[1] ?? 0) >= fromDay)
    .map((f) => path.join(dir, f));
}

async function main(): Promise<number> {
  const args = process.argv.slice(2);
  const lookupOnly = args.includes('--lookup-only');
  const files = briefFiles(args);
  if (files.length === 0) {
    console.error('usage: archive-sources.ts <brief.mdx...> | --from-day N [--lookup-only]');
    return 2;
  }
  const map: Record<string, string> = fs.existsSync(ARCHIVE_MAP_PATH)
    ? JSON.parse(fs.readFileSync(ARCHIVE_MAP_PATH, 'utf8'))
    : {};
  const write = () => {
    const sorted = Object.fromEntries(Object.entries(map).sort(([a], [b]) => a.localeCompare(b)));
    fs.writeFileSync(ARCHIVE_MAP_PATH, `${JSON.stringify(sorted, null, 2)}\n`);
  };

  let saved = 0;
  let found = 0;
  let missed = 0;
  let lastSave = 0;
  for (const file of files) {
    const fm = matter(fs.readFileSync(file, 'utf8')).data as {
      date?: string;
      sources?: Array<{ url?: string }>;
    };
    const date = fm.date ?? new Date().toISOString().slice(0, 10);
    for (const s of fm.sources ?? []) {
      if (!s.url) continue;
      const url = originalUrl(s.url);
      const key = archiveKey(url);
      if (map[key] || !/^https?:\/\//.test(url)) continue;
      try {
        let snap = await lookup(url, date);
        if (snap) found++;
        else if (!lookupOnly) {
          const wait = lastSave + SAVE_GAP_MS - Date.now();
          if (wait > 0) await sleep(wait);
          lastSave = Date.now();
          snap = await save(url);
          if (snap) saved++;
        }
        if (snap) {
          map[key] = snap;
          write();
        } else {
          missed++;
          console.log(`no snapshot: ${url}`);
        }
      } catch (e) {
        missed++;
        console.log(`failed: ${url}: ${(e as Error).message}`);
      }
    }
  }
  console.log(`[archive-sources] ${found} found, ${saved} saved, ${missed} without a snapshot`);
  return 0;
}

main().then((code) => {
  process.exitCode = code;
});
