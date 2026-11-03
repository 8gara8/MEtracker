import fs from 'node:fs';
import path from 'node:path';

// Day numbers, file names and the lib/brief-data.ts registry, so the script (not the agent) does the
// mechanical parts of adding a brief.

export const WAR_START = '2026-02-28'; // Day 1

export function taipeiToday(now = Date.now()): string {
  return new Date(now + 8 * 3_600_000).toISOString().slice(0, 10);
}

export function dayFor(date: string): number {
  return Math.round((Date.parse(`${date}T00:00:00Z`) - Date.parse(`${WAR_START}T00:00:00Z`)) / 86_400_000) + 1;
}

export function slugFor(date: string): string {
  return `${date}-day-${String(dayFor(date)).padStart(3, '0')}`;
}

export function briefPaths(root: string, slug: string) {
  return {
    mdx: path.join(root, 'content', 'briefs', `${slug}.mdx`),
    data: path.join(root, 'content', 'briefs', `${slug}.data.ts`),
    context: path.join(root, 'content', 'context.md'),
    registry: path.join(root, 'lib', 'brief-data.ts'),
  };
}

/** The newest brief slug in content/briefs, or null. */
export function latestSlug(root: string): string | null {
  const dir = path.join(root, 'content', 'briefs');
  const slugs = fs
    .readdirSync(dir)
    .filter((f) => /^\d{4}-\d{2}-\d{2}-day-\d+\.mdx$/.test(f))
    .map((f) => f.replace(/\.mdx$/, ''))
    .sort((a, b) => Number(a.split('-day-')[1]) - Number(b.split('-day-')[1]));
  return slugs.at(-1) ?? null;
}

/**
 * Adds the import and the map entry for `slug` to the registry source. Idempotent. The import goes
 * after the last day import and the entry before the map's closing `};`.
 */
export function registerBrief(source: string, slug: string): string {
  const day = Number(slug.split('-day-')[1]);
  const ident = `day${day}`;
  if (source.includes(`'${slug}': ${ident},`)) return source;
  const importLine = `import ${ident} from '@/content/briefs/${slug}.data';`;
  const lines = source.split('\n');
  let lastImport = -1;
  lines.forEach((l, i) => {
    if (/^import day\d+ from '@\/content\/briefs\//.test(l)) lastImport = i;
  });
  const mapStart = lines.findIndex((l) => /briefDataBySlug\b.*=\s*\{\s*$/.test(l));
  if (lastImport < 0 || mapStart < 0) throw new Error('lib/brief-data.ts: could not find the brief imports or briefDataBySlug.');
  let mapEnd = -1;
  for (let i = mapStart + 1; i < lines.length; i++) {
    if (lines[i] === '};') {
      mapEnd = i;
      break;
    }
  }
  if (mapEnd < 0) throw new Error('lib/brief-data.ts: could not find the end of briefDataBySlug.');
  lines.splice(mapEnd, 0, `  '${slug}': ${ident},`);
  if (!source.includes(importLine)) lines.splice(lastImport + 1, 0, importLine);
  return lines.join('\n');
}
