import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { renderTemplate } from '../lib/agent';
import { dayFor, registerBrief, slugFor, taipeiToday } from '../lib/brief-files';
import { isBriefFile } from '../lib/git';
import { acquireLock, releaseLock } from '../lib/lock';
import { evidence, parseTranscript, urlKey } from '../lib/transcript';
import { renderSummary, stampAccessed, taipeiStamp } from '../daily';

test('day numbers and slugs', () => {
  assert.equal(dayFor('2026-02-28'), 1);
  assert.equal(dayFor('2026-11-03'), 249);
  assert.equal(slugFor('2026-11-04'), '2026-11-04-day-250');
  assert.equal(slugFor('2028-11-23'), '2028-11-23-day-1000');
  assert.equal(taipeiToday(Date.parse('2026-11-03T16:30:00Z')), '2026-11-04');
});

const REGISTRY = `import type { X } from 'y';
import day248 from '@/content/briefs/2026-11-02-day-248.data';
import day249 from '@/content/briefs/2026-11-03-day-249.data';

const briefDataBySlug: Record<string, BriefData> = {
  '2026-11-02-day-248': day248,
  '2026-11-03-day-249': day249,
};
`;

test('registerBrief adds the import and entry once', () => {
  const once = registerBrief(REGISTRY, '2026-11-04-day-250');
  assert.match(once, /import day249 from .*\nimport day250 from '@\/content\/briefs\/2026-11-04-day-250\.data';/);
  assert.match(once, /'2026-11-03-day-249': day249,\n  '2026-11-04-day-250': day250,\n\};/);
  assert.equal(registerBrief(once, '2026-11-04-day-250'), once);
});

test('registerBrief works on the real registry', () => {
  const real = fs.readFileSync(path.join(__dirname, '..', '..', 'lib', 'brief-data.ts'), 'utf8');
  const out = registerBrief(real, '2099-01-01-day-9999');
  assert.equal(out.split('\n').length, real.split('\n').length + 2);
});

test('registerBrief refuses an unknown layout', () => {
  assert.throws(() => registerBrief('const x = 1;\n', '2026-11-04-day-250'));
});

test('only brief files may be pushed automatically', () => {
  assert.ok(isBriefFile('content/briefs/a.mdx'));
  assert.ok(isBriefFile('lib/brief-data.ts'));
  assert.ok(!isBriefFile('lib/types.ts'));
  assert.ok(!isBriefFile('scripts/daily.ts'));
});

test('transcript evidence covers fetches and result URLs', () => {
  const jsonl = [
    JSON.stringify({ type: 'system', subtype: 'init', session_id: 's1', model: 'claude-opus' }),
    JSON.stringify({ type: 'assistant', message: { content: [{ type: 'tool_use', name: 'WebFetch', input: { url: 'https://www.reuters.com/world/a/' } }, { type: 'tool_use', name: 'WebSearch', input: { query: 'iran' } }] } }),
    JSON.stringify({ type: 'user', message: { content: [{ type: 'tool_result', content: 'see https://apnews.com/article/b?utm=1.' }] } }),
    JSON.stringify({ type: 'result', is_error: false, num_turns: 7, total_cost_usd: 1.5 }),
  ].join('\n');
  const t = parseTranscript(jsonl);
  assert.equal(t.sessionId, 's1');
  assert.equal(t.searches, 1);
  assert.equal(t.numTurns, 7);
  const seen = evidence([t]);
  assert.ok(seen.has(urlKey('http://reuters.com/world/a')));
  assert.ok(seen.has(urlKey('https://apnews.com/article/b')));
  assert.ok(!seen.has(urlKey('https://apnews.com/article/c')));
});

test('lock: one holder at a time, stale locks replaced', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'me-lock-'));
  const file = path.join(dir, '.lock');
  assert.deepEqual(acquireLock(file), { acquired: true, replacedStale: null });
  assert.equal(acquireLock(file).acquired, false);
  releaseLock(file);
  fs.writeFileSync(file, JSON.stringify({ pid: 999_999, started: new Date().toISOString() }));
  const r = acquireLock(file);
  assert.equal(r.acquired, true);
  assert.ok(r.acquired && r.replacedStale);
  fs.writeFileSync(file, 'RETIRED');
  assert.equal(acquireLock(file).acquired, true);
});

test('templates refuse unfilled variables', () => {
  assert.equal(renderTemplate('Day {{DAY}}', { DAY: '250' }), 'Day 250');
  assert.throws(() => renderTemplate('{{DAY}} {{DATE}}', { DAY: '1' }), /DATE/);
});

test('summary lines', () => {
  const base = { date: '2026-11-04', day: 250, slug: '2026-11-04-day-250', started: '', repairs: 1 };
  const ok = renderSummary({ ...base, outcome: 'published', sources: 18, categories: 7, commit: 'abc1234', live: true, model: 'opus', turns: 50, searches: 20, fetches: 15 });
  assert.match(ok, /^ME Tracker Day 250 — 2026-11-04: published\n/);
  assert.match(ok, /metracker\.vercel\.app\/brief\/2026-11-04-day-250/);
  const bad = renderSummary({ ...base, outcome: 'failed', code: 'E_INVALID', message: 'x' });
  assert.match(bad, /FAILED \(E_INVALID\)/);
});

test('accessed_at is set to the research time in the frontmatter only', () => {
  const mdx = '---\nsources:\n  - name: "A"\n    accessed_at: "2026-11-04T06:34:00+08:00"\n---\n\n    accessed_at: body\n';
  const stamp = taipeiStamp(Date.parse('2026-11-03T23:21:30Z'));
  assert.equal(stamp, '2026-11-04T07:21:00+08:00');
  const out = stampAccessed(mdx, stamp);
  assert.match(out, /    accessed_at: "2026-11-04T07:21:00\+08:00"\n---/);
  assert.match(out, /accessed_at: body/);
});
