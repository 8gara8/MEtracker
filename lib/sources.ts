import fs from 'node:fs';
import path from 'node:path';

/**
 * The twelve source categories of the sourcing rubric (DESIGN §3.1). Every
 * source in a brief carries one of these ids from day SOURCE_RULES_FROM_DAY on.
 */
export const SOURCE_CATEGORIES = [
  'western_press',
  'regional_press',
  'iran_state_media',
  'iran_officials',
  'israel_official',
  'arab_regional_gov',
  'russia_china_other',
  'monitors_humanitarian',
  'us_government',
  'europe_international',
  'think_tanks_experts',
  'markets_maritime_data',
] as const;
export type SourceCategory = (typeof SOURCE_CATEGORIES)[number];

/** Category floor and per-category ceiling, enforced by the validator from this day on. */
export const SOURCE_RULES_FROM_DAY = 250;
export const MIN_SOURCE_CATEGORIES = 6;
export const MAX_CATEGORY_SHARE = 0.5;

// Older briefs wrap every URL as https://web.archive.org/web/2026/<original>
// without ever saving a snapshot, so most of those links land on "not
// archived". A real snapshot URL carries a full timestamp (web/20261103…/).
const BARE_ARCHIVE_RE = /^https?:\/\/web\.archive\.org\/web\/\d{1,4}\*?\/(.+)$/;
const SNAPSHOT_RE = /^https?:\/\/web\.archive\.org\/web\/\d{14}(?:id_)?\/(.+)$/;

/** The publisher URL behind a source link, with any Wayback prefix removed. */
export function originalUrl(url: string): string {
  const m = url.match(SNAPSHOT_RE) ?? url.match(BARE_ARCHIVE_RE);
  return m ? m[1] : url;
}

/** Key for the archive map: the original URL without fragment or trailing slash. */
export function archiveKey(url: string): string {
  return originalUrl(url).replace(/#.*$/, '').replace(/\/+$/, '');
}

export const ARCHIVE_MAP_PATH = path.join(process.cwd(), 'content', 'archive.json');

let cached: Record<string, string> | null = null;

/** content/archive.json: original URL → saved Wayback snapshot URL. */
export function loadArchiveMap(): Record<string, string> {
  if (cached) return cached;
  cached = fs.existsSync(ARCHIVE_MAP_PATH)
    ? (JSON.parse(fs.readFileSync(ARCHIVE_MAP_PATH, 'utf8')) as Record<string, string>)
    : {};
  return cached;
}

/** A saved snapshot of the source, if one exists. Never a bare /web/2026/ link. */
export function archivedCopy(url: string): string | null {
  if (SNAPSHOT_RE.test(url)) return url;
  return loadArchiveMap()[archiveKey(url)] ?? null;
}
