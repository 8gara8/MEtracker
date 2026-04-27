/**
 * normalize-sources.ts — URL archive-wrap helper (v1.8, SPEC §7.2)
 *
 * Rewrites every URL in a brief's frontmatter `sources:` array AND its
 * `## Sources` body section to `https://web.archive.org/web/2026/<original>`.
 * Idempotent: URLs that are already wrapped are left untouched.
 *
 * The validator (`scripts/validate-brief.ts`) HEAD-checks every URL in the
 * frontmatter `sources[].url` field, so the frontmatter is the primary
 * archive-wrap target. The body section is wrapped too, in case briefs ever
 * embed bare URLs there (current briefs use prose-form attribution).
 *
 * Usage:
 *   # Pipe form
 *   npx tsx scripts/normalize-sources.ts < content/briefs/<slug>.mdx > /tmp/out.mdx
 *
 *   # In-place form
 *   npx tsx scripts/normalize-sources.ts --in-place content/briefs/<slug>.mdx
 *
 * The skill (Step 4b) is expected to perform the equivalent transform in-process
 * before write. This script is a backup utility for manual fixes.
 */

import fs from 'node:fs';
import path from 'node:path';

const ARCHIVE_PREFIX = 'https://web.archive.org/web/2026/';

// Body-section URL match. Allows `(` and `)` inside the path so that URLs like
// https://en.wikipedia.org/wiki/Iran_(country) round-trip cleanly. Trailing
// punctuation that's clearly not part of a URL is trimmed post-match.
const BODY_URL_RE = /https?:\/\/[^\s<>"'`]+/g;

export function wrapUrl(url: string): string {
  if (url.startsWith(ARCHIVE_PREFIX)) return url;
  if (url.includes('web.archive.org/web/')) return url;
  return `${ARCHIVE_PREFIX}${url}`;
}

/**
 * Strip trailing characters that are unlikely to be part of a URL when the
 * URL appears in prose. A trailing `)` is preserved if there's a matching
 * unbalanced `(` inside the URL (so Wikipedia-style URLs keep their suffix).
 */
function trimTrailingPunctuation(url: string): { url: string; trailer: string } {
  let trailer = '';
  let cur = url;
  // Trim simple trailing punctuation first.
  const simpleTrail = cur.match(/[.,;:!?\]]+$/);
  if (simpleTrail) {
    trailer = simpleTrail[0] + trailer;
    cur = cur.slice(0, -simpleTrail[0].length);
  }
  // Balance trailing `)` against `(` count inside the URL.
  while (cur.endsWith(')')) {
    const opens = (cur.match(/\(/g) || []).length;
    const closes = (cur.match(/\)/g) || []).length;
    if (closes > opens) {
      trailer = ')' + trailer;
      cur = cur.slice(0, -1);
    } else break;
  }
  return { url: cur, trailer };
}

/**
 * Locate the YAML frontmatter region. Returns [start, end] indices into
 * `lines` such that lines[start..end] are the frontmatter body (between the
 * opening and closing `---` fences). Returns null if no frontmatter.
 */
function findFrontmatterRange(lines: string[]): [number, number] | null {
  if (lines.length === 0 || lines[0].trim() !== '---') return null;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === '---') return [1, i];
  }
  return null;
}

/**
 * Within [fmStart, fmEnd), locate the indented child block under a top-level
 * `sources:` key. Returns [start, end] of the child lines, or null if no
 * sources block exists. The block ends at the next non-indented YAML key or
 * at fmEnd.
 */
function findFrontmatterSourcesBlock(
  lines: string[],
  fmStart: number,
  fmEnd: number,
): [number, number] | null {
  let start = -1;
  for (let i = fmStart; i < fmEnd; i++) {
    if (/^sources:\s*$/.test(lines[i])) {
      start = i + 1;
      break;
    }
  }
  if (start === -1) return null;
  let end = fmEnd;
  for (let i = start; i < fmEnd; i++) {
    // A new top-level YAML key (column-0 letter followed by a colon) ends the
    // sources block.
    if (/^\S.*:/.test(lines[i])) {
      end = i;
      break;
    }
  }
  return [start, end];
}

/**
 * Locate the `## Sources` body section and return [startLine, endLine]
 * (exclusive). Matches `## Sources` and variants like `## Sources & Attribution`.
 * Returns null if no such section exists.
 */
function findSourcesBodyRange(lines: string[]): [number, number] | null {
  const headingRe = /^##\s+Sources\b/i;
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
  return [start, end];
}

/**
 * Rewrite a YAML `url:` line, preserving quote style and surrounding
 * whitespace. The URL value is bounded by the closing quote (or by line end
 * for unquoted scalars), so parentheses inside the URL path round-trip safely.
 */
function rewriteYamlUrlLine(line: string): string {
  const m = line.match(/^(\s+url:\s*)(.*)$/);
  if (!m) return line;
  const prefix = m[1];
  let valuePart = m[2];

  let openQuote = '';
  let url = valuePart;
  if (url.startsWith('"') || url.startsWith("'")) {
    openQuote = url[0];
    const close = url.lastIndexOf(openQuote);
    if (close <= 0) return line; // malformed; leave alone
    url = url.slice(1, close);
  } else {
    // Unquoted scalar: strip a trailing YAML inline comment if any.
    const trimmed = url.replace(/\s+#.*$/, '').trimEnd();
    url = trimmed;
  }

  if (!/^https?:\/\//.test(url)) return line;
  const wrapped = wrapUrl(url);
  if (wrapped === url) return line;

  if (openQuote) {
    return `${prefix}${openQuote}${wrapped}${openQuote}`;
  }
  return `${prefix}${wrapped}`;
}

function rewriteFrontmatterUrls(lines: string[], start: number, end: number): void {
  for (let i = start; i < end; i++) {
    lines[i] = rewriteYamlUrlLine(lines[i]);
  }
}

function rewriteBodyUrls(lines: string[], start: number, end: number): void {
  for (let i = start; i < end; i++) {
    lines[i] = lines[i].replace(BODY_URL_RE, (match) => {
      const { url, trailer } = trimTrailingPunctuation(match);
      return `${wrapUrl(url)}${trailer}`;
    });
  }
}

export function normalizeSources(input: string): string {
  const lines = input.split(/\r?\n/);

  // 1. Frontmatter `sources:` block — primary target (validator reads this).
  const fm = findFrontmatterRange(lines);
  if (fm) {
    const fmSources = findFrontmatterSourcesBlock(lines, fm[0], fm[1]);
    if (fmSources) rewriteFrontmatterUrls(lines, fmSources[0], fmSources[1]);
  }

  // 2. Body `## Sources [& ...]` section — best-effort for any embedded URLs.
  const body = findSourcesBodyRange(lines);
  if (body) rewriteBodyUrls(lines, body[0], body[1]);

  // Preserve original trailing newline behaviour.
  const joined = lines.join('\n');
  return input.endsWith('\n') && !joined.endsWith('\n') ? `${joined}\n` : joined;
}

function readStdin(): Promise<string> {
  return new Promise((resolve, reject) => {
    let data = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (chunk) => {
      data += chunk;
    });
    process.stdin.on('end', () => resolve(data));
    process.stdin.on('error', reject);
  });
}

async function main() {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    process.stdout.write(
      [
        'normalize-sources.ts — wrap URLs in ## Sources with web.archive.org/web/2026/',
        '',
        'Usage:',
        '  npx tsx scripts/normalize-sources.ts < in.mdx > out.mdx',
        '  npx tsx scripts/normalize-sources.ts --in-place <file>.mdx [<file>.mdx ...]',
        '',
      ].join('\n'),
    );
    return;
  }

  const inPlaceIdx = args.indexOf('--in-place');
  if (inPlaceIdx !== -1) {
    const files = args.filter((_, i) => i !== inPlaceIdx);
    if (files.length === 0) {
      console.error('--in-place requires at least one file path');
      process.exit(2);
    }
    for (const f of files) {
      const abs = path.resolve(process.cwd(), f);
      const original = fs.readFileSync(abs, 'utf8');
      const next = normalizeSources(original);
      if (next !== original) {
        fs.writeFileSync(abs, next, 'utf8');
        console.log(`[normalize-sources] rewrote ${path.relative(process.cwd(), abs)}`);
      } else {
        console.log(`[normalize-sources] no changes ${path.relative(process.cwd(), abs)}`);
      }
    }
    return;
  }

  const input = await readStdin();
  process.stdout.write(normalizeSources(input));
}

main().catch((err) => {
  console.error('[normalize-sources] failure:', err);
  process.exit(1);
});
