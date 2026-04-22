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

export function getBriefData(slug: string): BriefData | null {
  return briefDataBySlug[slug] ?? null;
}
