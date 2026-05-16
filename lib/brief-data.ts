import type { EscalationGaugeProps } from '@/components/EscalationGauge';
import type { EventRow } from '@/components/EventsTable';
import type { CasualtiesTableProps } from '@/components/CasualtiesTable';

import day001 from '@/content/briefs/2026-02-28-day-001.data';
import day055 from '@/content/briefs/2026-04-23-day-055.data';
import day056 from '@/content/briefs/2026-04-24-day-056.data';
import day057 from '@/content/briefs/2026-04-25-day-057.data';
import day058 from '@/content/briefs/2026-04-26-day-058.data';
import day059 from '@/content/briefs/2026-04-27-day-059.data';
import day060 from '@/content/briefs/2026-04-28-day-060.data';
import day061 from '@/content/briefs/2026-04-29-day-061.data';
import day062 from '@/content/briefs/2026-04-30-day-062.data';
import day063 from '@/content/briefs/2026-05-01-day-063.data';
import day064 from '@/content/briefs/2026-05-02-day-064.data';
import day065 from '@/content/briefs/2026-05-03-day-065.data';
import day066 from '@/content/briefs/2026-05-04-day-066.data';
import day067 from '@/content/briefs/2026-05-05-day-067.data';
import day068 from '@/content/briefs/2026-05-06-day-068.data';
import day069 from '@/content/briefs/2026-05-07-day-069.data';
import day070 from '@/content/briefs/2026-05-08-day-070.data';
import day071 from '@/content/briefs/2026-05-09-day-071.data';
import day072 from '@/content/briefs/2026-05-10-day-072.data';
import day073 from '@/content/briefs/2026-05-11-day-073.data';
import day074 from '@/content/briefs/2026-05-12-day-074.data';
import day075 from '@/content/briefs/2026-05-13-day-075.data';
import day076 from '@/content/briefs/2026-05-14-day-076.data';
import day077 from '@/content/briefs/2026-05-15-day-077.data';
import day078 from '@/content/briefs/2026-05-16-day-078.data';

export type Implication = { title: string; body: string };

export type ActorCasualtyNotes = {
  us?: string;
  israel?: string;
  iran?: string;
  other?: string;
};

export type BriefData = {
  escalation: EscalationGaugeProps;
  events: EventRow[];
  casualties: CasualtiesTableProps;
  // v3 additions — optional so uncurated briefs fall back gracefully.
  exec?: string;
  implications?: Implication[];
  flash?: string;
  casualtyNotes?: ActorCasualtyNotes;
};

const briefDataBySlug: Record<string, BriefData> = {
  '2026-02-28-day-001': day001,
  '2026-04-23-day-055': day055,
  '2026-04-24-day-056': day056,
  '2026-04-25-day-057': day057,
  '2026-04-26-day-058': day058,
  '2026-04-27-day-059': day059,
  '2026-04-28-day-060': day060,
  '2026-04-29-day-061': day061,
  '2026-04-30-day-062': day062,
  '2026-05-01-day-063': day063,
  '2026-05-02-day-064': day064,
  '2026-05-03-day-065': day065,
  '2026-05-04-day-066': day066,
  '2026-05-05-day-067': day067,
  '2026-05-06-day-068': day068,
  '2026-05-07-day-069': day069,
  '2026-05-08-day-070': day070,
  '2026-05-09-day-071': day071,
  '2026-05-10-day-072': day072,
  '2026-05-11-day-073': day073,
  '2026-05-12-day-074': day074,
  '2026-05-13-day-075': day075,
  '2026-05-14-day-076': day076,
  '2026-05-15-day-077': day077,
  '2026-05-16-day-078': day078,
};

export function getBriefData(slug: string): BriefData | null {
  return briefDataBySlug[slug] ?? null;
}
