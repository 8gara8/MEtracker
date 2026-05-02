import { getLatestBrief } from '@/lib/briefs';
import {
  loadClocksHistory,
  loadEscalationHistory,
  loadIndex,
} from '@/lib/data-aggregation';
import { ClocksGrid } from '@/components/charts/ClocksGrid';
import { ClocksHeatmap } from '@/components/ClocksHeatmap';
import { CeasefireProbabilityTrail } from '@/components/charts/CeasefireProbabilityTrail';
import { SectionRule } from '@/components/design/SectionRule';

export const metadata = {
  title: 'Clocks — ME War Intel Brief',
};

export default function ClocksPage() {
  const data = loadClocksHistory();
  const escalation = loadEscalationHistory();
  const slugByDay: Record<number, string> = Object.fromEntries(
    loadIndex().map((b) => [b.day, b.slug]),
  );
  const latest = getLatestBrief();

  return (
    <div>
      <SectionRule
        number={1}
        label="Ceasefire probability — trailing 15 days"
        right={latest ? `Day ${latest.frontmatter.day}` : undefined}
      />
      <p className="mb-[14px] max-w-[680px] font-sans text-[13px] leading-[1.55] text-paper-ink-soft">
        30-day ceasefire-stability estimate, one point per published brief over
        the last 15 days. Tap a dot to open that day&apos;s brief.
      </p>
      {escalation.length === 0 ? (
        <p className="text-paper-ink-mute">No briefs published yet.</p>
      ) : (
        <CeasefireProbabilityTrail data={escalation} slugByDay={slugByDay} />
      )}

      <SectionRule
        number={2}
        label="Multi-clock dashboard"
        right={latest ? `Day ${latest.frontmatter.day} state` : undefined}
      />
      <p className="mb-[14px] max-w-[680px] font-sans text-[13px] leading-[1.55] text-paper-ink-soft">
        Six analytical clocks track the pressures that govern the war&apos;s
        pace. The pattern across dials matters more than any single one; see the
        sparkline for trajectory.
      </p>
      {!latest || data.length === 0 ? (
        <p className="text-paper-ink-mute">No data yet.</p>
      ) : (
        <>
          <ClocksGrid clocks={latest.frontmatter.clocks} history={data} />
          <SectionRule
            number={3}
            label="State history (heatmap)"
            right={`${data.length} days`}
          />
          <ClocksHeatmap data={data} />
        </>
      )}
    </div>
  );
}
