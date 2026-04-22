import type { EscalationGaugeProps } from '@/components/EscalationGauge';
import type { EventRow } from '@/components/EventsTable';
import type { CasualtiesTableProps } from '@/components/CasualtiesTable';

import day001 from '@/content/briefs/2026-02-28-day-001.data';

export type BriefData = {
  escalation: EscalationGaugeProps;
  events: EventRow[];
  casualties: CasualtiesTableProps;
};

const briefDataBySlug: Record<string, BriefData> = {
  '2026-02-28-day-001': day001,
};

export function getBriefData(slug: string): BriefData {
  const data = briefDataBySlug[slug];
  if (!data) {
    throw new Error(
      `Missing brief data for slug "${slug}". Create content/briefs/${slug}.data.ts and register it in lib/brief-data.ts.`,
    );
  }
  return data;
}
