/**
 * normalize-sources.ts — URL archive-wrap helper (v1.8, SPEC §7.2)
 *
 * Rewrites every URL in an MDX brief's `## Sources` section to its
 * `https://web.archive.org/web/2026/<original>` form. Idempotent: URLs that
 * are already wrapped are left untouched.
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

// Match http(s) URLs. Trailing punctuation that is unlikely to be part of a URL
// is excluded from the match so we don't wrap a comma or period at end-of-line.
const URL_RE = /https?:\/\/[^\s<>()\[\]"'`]+[^\s<>()\[\]"'`.,;:!?]/g;

export function wrapUrl(url: string): string {
  if (url.startsWith(ARCHIVE_PREFIX)) return url;
  if (url.includes('web.archive.org/web/')) return url;
  return `${ARCHIVE_PREFIX}${url}`;
}

/**
 * Locate the `## Sources` section and return [startLine, endLine] (exclusive).
 * Returns null if no sources section exists.
 */
function findSourcesRange(lines: string[]): [number, number] | null {
  const headingRe = /^##\s+Sources\s*$/i;
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

export function normalizeSources(input: string): string {
  const lines = input.split(/\r?\n/);
  const range = findSourcesRange(lines);
  if (!range) return input;
  const [start, end] = range;
  for (let i = start; i < end; i++) {
    lines[i] = lines[i].replace(URL_RE, (match) => wrapUrl(match));
  }
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
