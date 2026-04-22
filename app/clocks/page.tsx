import { getLatestBrief } from '@/lib/briefs';
import { loadClocksHistory } from '@/lib/data-aggregation';
import { ClocksGrid } from '@/components/charts/ClocksGrid';
import { ClocksHeatmap } from '@/components/ClocksHeatmap';
import { SectionRule } from '@/components/design/SectionRule';

export const metadata = {
  title: 'Clocks — ME War Intel Brief',
};

export default function ClocksPage() {
  const data = loadClocksHistory();
  const latest = getLatestBrief();

  return (
    <div>
      <SectionRule
        number={1}
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
            number={2}
            label="State history (heatmap)"
            right={`${data.length} days`}
          />
          <ClocksHeatmap data={data} />
        </>
      )}
    </div>
  );
}
