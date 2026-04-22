import { getLatestBrief } from '@/lib/briefs';
import { loadCasualtiesHistory } from '@/lib/data-aggregation';
import {
  CasualtiesArea,
  CasualtiesLegend,
} from '@/components/charts/CasualtiesArea';
import { CasualtiesBlock } from '@/components/CasualtiesBlock';
import { SectionRule } from '@/components/design/SectionRule';

export const metadata = {
  title: 'Casualties — ME War Intel Brief',
};

export default function CasualtiesPage() {
  const data = loadCasualtiesHistory();
  const latest = getLatestBrief();
  const maxTotal =
    data.length === 0
      ? 0
      : Math.max(
          ...data.map(
            (d) =>
              d.us.killed + d.israel.killed + d.iran.killed + d.other.killed,
          ),
        );

  return (
    <div>
      <SectionRule
        number={1}
        label="Cumulative casualties — KIA by actor"
        right={maxTotal ? `max ${maxTotal.toLocaleString()}` : undefined}
      />
      <p className="mb-[14px] max-w-[680px] font-sans text-[13px] leading-[1.55] text-paper-ink-soft">
        Stacked area. Figures are analytical estimates drawn from open-source
        reporting; casualty revisions are flagged in the frontmatter of
        individual briefs. No counts decrease without an explicit{' '}
        <span className="font-mono text-paper-ink">casualty_revision: true</span>{' '}
        acknowledgment.
      </p>
      {data.length === 0 ? (
        <p className="text-paper-ink-mute">No data yet.</p>
      ) : (
        <>
          <CasualtiesArea data={data} />
          <CasualtiesLegend data={data} />
          {latest && (
            <>
              <SectionRule number={2} label="Latest brief snapshot" />
              <CasualtiesBlock
                snapshot={latest.frontmatter.casualties_snapshot}
                history={data}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}
