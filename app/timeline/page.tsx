import { loadEscalationHistory, loadIndex } from '@/lib/data-aggregation';
import { EscalationTimeline } from '@/components/charts/EscalationTimeline';
import { MiniLine } from '@/components/design/MiniLine';
import { SectionRule } from '@/components/design/SectionRule';
import { COLORS } from '@/lib/design-tokens';

export const metadata = {
  title: 'Escalation timeline — ME War Intel Brief',
};

const RISK_SCORE: Record<string, number> = {
  low: 1,
  conditional: 2,
  extreme: 3,
  critical: 4,
};

export default function TimelinePage() {
  const data = loadEscalationHistory();
  const index = loadIndex();
  const slugByDay: Record<number, string> = {};
  for (const entry of index) slugByDay[entry.day] = entry.slug;

  const riskRows = data.map((d) => ({
    day: d.day,
    value: RISK_SCORE[d.risk7d] ?? 0,
  }));
  const ceasefireRows = data.map((d) => ({
    day: d.day,
    value: d.ceasefire_probability_30d,
  }));

  return (
    <div>
      <SectionRule
        number={1}
        label="Escalation timeline"
        right="Direction by day"
      />
      <p className="mb-[14px] max-w-[640px] font-sans text-[13px] leading-[1.55] text-paper-ink-soft">
        The canonical analytical arc: each brief&apos;s{' '}
        <em className="italic">direction</em> assessment (escalating / mixed /
        de-escalating) plotted over the life of the conflict. Click any node to
        open that day&apos;s brief.
      </p>
      {data.length === 0 ? (
        <p className="text-paper-ink-mute">
          No data yet. Run <code className="font-mono">npm run build:data</code>{' '}
          locally or wait for the first routine run.
        </p>
      ) : (
        <>
          <EscalationTimeline data={data} slugByDay={slugByDay} />
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <MiniLine
              title="7-day risk (ordinal)"
              rows={riskRows}
              max={4}
              labels={['low', 'cond', 'ext', 'crit', '—']}
              color={COLORS.accent}
            />
            <MiniLine
              title="Ceasefire probability / 30d (%)"
              rows={ceasefireRows}
              max={100}
              labels={['0', '25', '50', '75', '100']}
              color={COLORS.accentGreen}
            />
          </div>
        </>
      )}
    </div>
  );
}
