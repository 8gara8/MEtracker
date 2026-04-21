import fs from 'node:fs';
import path from 'node:path';
import { getAllBriefs } from './briefs';
import type {
  BriefIndexEntry,
  CasualtiesHistoryEntry,
  EscalationHistoryEntry,
  ClocksHistoryEntry,
} from './types';

const DATA_DIR = path.join(process.cwd(), 'data');

function writeJSON(filename: string, data: unknown) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(path.join(DATA_DIR, filename), JSON.stringify(data, null, 2));
}

export function aggregateAll() {
  const briefs = getAllBriefs().sort((a, b) => a.frontmatter.day - b.frontmatter.day);

  const index: BriefIndexEntry[] = briefs.map((b) => ({
    day: b.frontmatter.day,
    date: b.frontmatter.date,
    slug: b.slug,
    title: b.frontmatter.title,
    escalation_direction: b.frontmatter.escalation_direction,
    escalation_risk_7d: b.frontmatter.escalation_risk_7d,
    spillover_risk: b.frontmatter.spillover_risk,
    ceasefire_probability_30d: b.frontmatter.ceasefire_probability_30d,
    quiet_day: b.frontmatter.quiet_day,
    key_developments: b.frontmatter.key_developments,
  }));

  const escalation: EscalationHistoryEntry[] = briefs.map((b) => ({
    day: b.frontmatter.day,
    date: b.frontmatter.date,
    direction: b.frontmatter.escalation_direction,
    risk7d: b.frontmatter.escalation_risk_7d,
    spillover: b.frontmatter.spillover_risk,
    ceasefire_probability_30d: b.frontmatter.ceasefire_probability_30d,
  }));

  const casualties: CasualtiesHistoryEntry[] = briefs.map((b) => ({
    day: b.frontmatter.day,
    date: b.frontmatter.date,
    us: {
      killed: b.frontmatter.casualties_snapshot.us.killed,
      wounded: b.frontmatter.casualties_snapshot.us.wounded,
    },
    israel: {
      killed: b.frontmatter.casualties_snapshot.israel.killed,
      wounded: b.frontmatter.casualties_snapshot.israel.wounded,
    },
    iran: {
      killed: b.frontmatter.casualties_snapshot.iran.killed,
      wounded: b.frontmatter.casualties_snapshot.iran.wounded,
    },
    other: {
      killed: b.frontmatter.casualties_snapshot.other.killed,
      wounded: b.frontmatter.casualties_snapshot.other.wounded,
    },
  }));

  const clocks: ClocksHistoryEntry[] = briefs.map((b) => ({
    day: b.frontmatter.day,
    date: b.frontmatter.date,
    clocks: b.frontmatter.clocks,
  }));

  writeJSON('index.json', index);
  writeJSON('escalation-history.json', escalation);
  writeJSON('casualties-history.json', casualties);
  writeJSON('clocks-history.json', clocks);

  return {
    briefs: briefs.length,
    outputs: [
      'index.json',
      'escalation-history.json',
      'casualties-history.json',
      'clocks-history.json',
    ],
  };
}

function readJSON<T>(filename: string): T | null {
  const p = path.join(DATA_DIR, filename);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, 'utf8')) as T;
}

export function loadIndex(): BriefIndexEntry[] {
  return readJSON<BriefIndexEntry[]>('index.json') ?? [];
}

export function loadEscalationHistory(): EscalationHistoryEntry[] {
  return readJSON<EscalationHistoryEntry[]>('escalation-history.json') ?? [];
}

export function loadCasualtiesHistory(): CasualtiesHistoryEntry[] {
  return readJSON<CasualtiesHistoryEntry[]>('casualties-history.json') ?? [];
}

export function loadClocksHistory(): ClocksHistoryEntry[] {
  return readJSON<ClocksHistoryEntry[]>('clocks-history.json') ?? [];
}
