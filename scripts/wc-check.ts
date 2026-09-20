// Local pre-emit word-count checker (DESIGN §3.5.13). Not part of the validator.
import fs from 'node:fs';
import path from 'node:path';

const countWords = (s: string) => (s.trim() ? s.trim().split(/\s+/).length : 0);

async function main() {
  const mdxPath = process.argv[2];
  const raw = fs.readFileSync(mdxPath, 'utf8');
  const m = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n([\s\S]*)$/);
  const body = m ? m[1] : raw;

  function section(heading: string): string {
    const lines = body.split(/\r?\n/);
    const h = new RegExp(`^##\\s+${heading}\\s*$`, 'i');
    let start = -1;
    for (let i = 0; i < lines.length; i++) if (h.test(lines[i])) { start = i + 1; break; }
    if (start === -1) return '';
    let end = lines.length;
    for (let i = start; i < lines.length; i++) if (/^##\s+/.test(lines[i])) { end = i; break; }
    return lines.slice(start, end).join('\n');
  }

  const sidecarPath = mdxPath.replace(/\.mdx$/, '.data.ts');
  const mod = await import(path.resolve(sidecarPath));
  const data: any = mod.default;

  const parts: string[] = [];
  const r = data.escalation?.rationale;
  if (r) parts.push(r.direction ?? '', r.risk7d ?? '', r.spillover ?? '');
  for (const e of data.events ?? []) parts.push(e.event ?? '', e.summary ?? '', e.impact ?? '', e.source ?? '');
  for (const a of ['us', 'israel', 'iran', 'other']) {
    const c = data.casualties?.[a];
    if (c) parts.push(c.cumulative ?? '', c.status ?? '');
  }
  const sidecarProse = parts.filter(Boolean).join(' ');

  const exec = countWords(section('Executive Summary'));
  const impl = countWords(section('Strategic Implications'));
  const total = countWords(`${body} ${sidecarProse}`);
  const execSidecar = countWords(data.exec ?? '');

  const band = (n: number, lo: number, hi: number) => (n >= lo && n <= hi ? 'OK  ' : 'FAIL');
  console.log(`${band(exec, 150, 300)} Executive Summary      ${exec}   [150-300]`);
  console.log(`${band(impl, 400, 800)} Strategic Implications ${impl}   [400-800]`);
  console.log(`${band(total, 1200, 4000)} body + sidecarProse    ${total}  [1200-4000]`);
  console.log(`${band(execSidecar, 200, 400)} sidecar exec           ${execSidecar}   [200-400]`);
  console.log(`     (body alone ${countWords(body)}, sidecarProse ${countWords(sidecarProse)})`);
}

main();
