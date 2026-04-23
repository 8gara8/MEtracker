import React from 'react';
import type { BriefFrontmatter, CasualtiesHistoryEntry } from '@/lib/types';
import type { ActorCasualtyNotes } from '@/lib/brief-data';
import { COLORS } from '@/lib/design-tokens';

type ActorKey = 'us' | 'israel' | 'iran' | 'other';

const ACTORS: Array<{
  key: ActorKey;
  label: string;
  color: string;
  fallbackNote: string;
}> = [
  {
    key: 'us',
    label: 'United States',
    color: COLORS.ink,
    fallbackNote:
      'Military fatalities limited to Red Sea and Iraq-basing actions. Civilian US losses incidental to allied-theatre operations.',
  },
  {
    key: 'israel',
    label: 'Israel',
    color: COLORS.accent,
    fallbackNote:
      'KIA concentrated in Tel Aviv and Haifa metro impacts and Blue Line rocket fire. WIA dominated by barrage-related blast and fragmentation.',
  },
  {
    key: 'iran',
    label: 'Iran & Proxies',
    color: COLORS.accentAmber,
    fallbackNote:
      'Iran totals include strike casualties at nuclear and infrastructure sites plus collateral. Proxy KIA (Hezbollah, Iraqi militias) folded in without disaggregation.',
  },
  {
    key: 'other',
    label: 'Other',
    color: COLORS.accentGreen,
    fallbackNote:
      'Civilian third-country nationals, Red Sea mariners, Lebanese and Jordanian civilians caught in overflight or spillover fire.',
  },
];

function DetailStat({
  label,
  value,
  sub,
  accent,
  isLast,
}: {
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
  isLast?: boolean;
}) {
  return (
    <div
      className="px-[18px] py-[14px]"
      style={{
        borderRight: isLast ? undefined : `1px solid ${COLORS.ruleSoft}`,
      }}
    >
      <div
        className="mb-1.5 font-mono text-[10px] uppercase text-paper-ink-mute"
        style={{ letterSpacing: '0.14em' }}
      >
        {label}
      </div>
      <div
        className="font-display font-semibold tabular"
        style={{
          fontSize: 28,
          lineHeight: 1.05,
          color: accent ? COLORS.accent : COLORS.ink,
          letterSpacing: '-0.015em',
        }}
      >
        {value}
      </div>
      {sub && (
        <div
          className="mt-1 font-mono text-[10px] text-paper-ink-mute"
          style={{ letterSpacing: '0.08em' }}
        >
          {sub}
        </div>
      )}
    </div>
  );
}

export function CasualtiesDetails({
  snapshot,
  history,
  notes,
}: {
  snapshot: BriefFrontmatter['casualties_snapshot'];
  history: CasualtiesHistoryEntry[];
  notes?: ActorCasualtyNotes;
}) {
  const totalKIA = ACTORS.reduce((acc, a) => acc + snapshot[a.key].killed, 0);
  const totalWIA = ACTORS.reduce((acc, a) => acc + snapshot[a.key].wounded, 0);

  const prev = history.length >= 2 ? history[history.length - 2] : null;
  const prevKIA = prev
    ? ACTORS.reduce((acc, a) => acc + prev[a.key].killed, 0)
    : totalKIA;
  const deltaKIA = totalKIA - prevKIA;
  const deltaPct = prevKIA === 0 ? 0 : (deltaKIA / prevKIA) * 100;

  return (
    <div>
      {/* Summary strip */}
      <div
        className="mb-3.5 grid grid-cols-1 md:grid-cols-3"
        style={{ border: `1px solid ${COLORS.ruleSoft}`, background: COLORS.cardBg }}
      >
        <DetailStat label="Total KIA (all actors)" value={totalKIA.toLocaleString()} />
        <DetailStat label="Total WIA (all actors)" value={totalWIA.toLocaleString()} />
        <DetailStat
          label="KIA Δ vs. prior brief"
          value={`${deltaKIA >= 0 ? '+' : ''}${deltaKIA.toLocaleString()}`}
          sub={prev ? `${deltaPct.toFixed(1)}% · ~24h` : 'No prior brief'}
          accent
          isLast
        />
      </div>

      {/* Per-actor narrative */}
      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
        {ACTORS.map((a) => {
          const current = snapshot[a.key];
          const previous = prev ? prev[a.key] : null;
          const dk = previous ? current.killed - previous.killed : 0;
          const deltaColor = a.color === COLORS.ink ? COLORS.accent : a.color;
          const note = (notes && notes[a.key]) || a.fallbackNote;
          return (
            <div
              key={a.key}
              className="pb-2 pl-3.5 pt-0.5"
              style={{ borderLeft: `3px solid ${a.color}` }}
            >
              <div className="mb-1.5 flex flex-wrap items-baseline gap-2.5">
                <span
                  className="font-mono text-[10px] uppercase text-paper-ink-mute"
                  style={{ letterSpacing: '0.14em' }}
                >
                  {a.label}
                </span>
                <span className="font-mono text-[11px] tabular text-paper-ink">
                  KIA {current.killed.toLocaleString()}
                  {dk > 0 && (
                    <span className="ml-1.5" style={{ color: deltaColor }}>
                      +{dk}
                    </span>
                  )}
                  <span className="text-paper-ink-mute">
                    {' '}
                    · WIA {current.wounded.toLocaleString()}
                  </span>
                </span>
              </div>
              <div
                className="font-sans text-[13px] leading-[1.55] text-paper-ink-soft"
                style={{ textWrap: 'pretty' }}
              >
                {note}
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="mt-3.5 font-mono text-[10px] uppercase text-paper-ink-mute"
        style={{ letterSpacing: '0.1em' }}
      >
        Note &mdash; figures are cumulative open-source estimates. Revisions logged via{' '}
        <span className="text-paper-ink">casualty_revision:true</span> in brief frontmatter.
      </div>
    </div>
  );
}
