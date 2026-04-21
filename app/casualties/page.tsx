import { loadCasualtiesHistory } from '@/lib/data-aggregation';
import { CasualtiesArea } from '@/components/charts/CasualtiesArea';

export const metadata = {
  title: 'Casualties — ME War Intel Brief',
};

export default function CasualtiesPage() {
  const data = loadCasualtiesHistory();
  const latest = data[data.length - 1];
  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold text-navy">Cumulative casualties (KIA)</h1>
      <p className="mb-6 max-w-prose text-sm text-muted">
        Stacked cumulative killed-in-action figures by actor, pulled from each brief&apos;s
        frontmatter snapshot. Figures are the brief&apos;s reported cumulative total;
        individual briefs provide the sourcing and dual-count detail where available.
      </p>
      {data.length === 0 ? (
        <p className="text-muted">No data yet.</p>
      ) : (
        <>
          <CasualtiesArea data={data} />
          {latest && (
            <p className="mt-4 font-mono text-xs text-muted">
              Latest snapshot (Day {latest.day}, {latest.date}): US {latest.us.killed} · Israel{' '}
              {latest.israel.killed} · Iran {latest.iran.killed} · Other {latest.other.killed}
            </p>
          )}
        </>
      )}
    </div>
  );
}
