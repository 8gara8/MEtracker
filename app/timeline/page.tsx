import { loadEscalationHistory } from '@/lib/data-aggregation';
import { EscalationTimeline } from '@/components/charts/EscalationTimeline';

export const metadata = {
  title: 'Timeline — ME War Intel Brief',
};

export default function TimelinePage() {
  const data = loadEscalationHistory();
  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold text-navy">Escalation timeline</h1>
      <p className="mb-6 max-w-prose text-sm text-muted">
        Daily escalation indicators since Day 1. Direction is scored from −1 (de-escalating)
        to +1 (escalating); 7-day risk is scored from 1 (low) to 4 (critical). Ceasefire
        probability (30d) is plotted as a percentage.
      </p>
      {data.length === 0 ? (
        <p className="text-muted">No data yet. Run <code>npm run build:data</code> locally or wait for the first routine run.</p>
      ) : (
        <EscalationTimeline data={data} />
      )}
    </div>
  );
}
