import { loadClocksHistory } from '@/lib/data-aggregation';
import { ClocksGrid } from '@/components/charts/ClocksGrid';

export const metadata = {
  title: 'Clocks — ME War Intel Brief',
};

export default function ClocksPage() {
  const data = loadClocksHistory();
  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold text-navy">Multi-clock dashboard</h1>
      <p className="mb-6 max-w-prose text-sm text-muted">
        Six analytical clocks tracked across every brief. Each panel shows the state
        trajectory on an ordinal scale (critical → ample). Hover for the raw state label.
      </p>
      {data.length === 0 ? (
        <p className="text-muted">No data yet.</p>
      ) : (
        <ClocksGrid data={data} />
      )}
    </div>
  );
}
