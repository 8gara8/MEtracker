import type { EscalationGaugeProps } from '@/components/EscalationGauge';
import type { EventRow } from '@/components/EventsTable';
import type { CasualtiesTableProps } from '@/components/CasualtiesTable';

import day001 from '@/content/briefs/2026-02-28-day-001.data';
import day055 from '@/content/briefs/2026-04-23-day-055.data';
import day056 from '@/content/briefs/2026-04-24-day-056.data';

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
};

export function getBriefData(slug: string): BriefData | null {
  return briefDataBySlug[slug] ?? null;
}
