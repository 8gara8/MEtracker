import React from 'react';
import type { CasualtiesHistoryEntry } from '@/lib/types';
import { COLORS } from '@/lib/design-tokens';

type ActorKey = 'iran' | 'israel' | 'other' | 'us';

const ACTORS: Array<{ key: ActorKey; label: string; color: string }> = [
  { key: 'iran', label: 'Iran & Proxies', color: COLORS.accentAmber },
  { key: 'israel', label: 'Israel', color: COLORS.accent },
  { key: 'other', label: 'Other', color: COLORS.accentGreen },
  { key: 'us', label: 'United States', color: COLORS.ink },
];

export function CasualtiesArea({ data }: { data: CasualtiesHistoryEntry[] }) {
  const W = 1000;
  const H = 320;
  const pad = { l: 54, r: 24, t: 20, b: 40 };
  const iw = W - pad.l - pad.r;
  const ih = H - pad.t - pad.b;
  const xs = (i: number) => pad.l + (i / Math.max(1, data.length - 1)) * iw;

  const stacks = data.map((b) => {
    let acc = 0;
    const out: Record<ActorKey, { y0: number; y1: number }> = {
      us: { y0: 0, y1: 0 },
      israel: { y0: 0, y1: 0 },
      iran: { y0: 0, y1: 0 },
      other: { y0: 0, y1: 0 },
    };
    for (const a of ACTORS) {
      const v = b[a.key].killed;
      out[a.key] = { y0: acc, y1: acc + v };
      acc += v;
    }
    return { stack: out, total: acc };
  });
  const maxTotal = Math.max(1, ...stacks.map((s) => s.total));
  const ys = (v: number) => pad.t + ih - (v / maxTotal) * ih;
  const labelEvery = Math.max(1, Math.ceil(data.length / 30));

  return (
    <div className="border border-paper-rule-soft bg-paper-card p-[14px]">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" className="block">
        {[0, 0.25, 0.5, 0.75, 1].map((t, i) => {
          const v = Math.round(maxTotal * (1 - t));
          return (
            <g key={i}>
              <line
                x1={pad.l}
                x2={W - pad.r}
                y1={pad.t + t * ih}
                y2={pad.t + t * ih}
                stroke={COLORS.ruleSoft}
                strokeDasharray="1 3"
              />
              <text
                x={pad.l - 6}
                y={pad.t + t * ih + 3}
                textAnchor="end"
                fontFamily="var(--font-plex-mono)"
                fontSize="9"
                fill={COLORS.inkMute}
              >
                {v.toLocaleString()}
              </text>
            </g>
          );
        })}
        {ACTORS.map((a) => {
          const top = stacks
            .map(
              (s, i) =>
                `${i === 0 ? 'M' : 'L'} ${xs(i).toFixed(1)} ${ys(s.stack[a.key].y1).toFixed(1)}`,
            )
            .join(' ');
          const bot = stacks
            .map(
              (_, i) =>
                ` L ${xs(stacks.length - 1 - i).toFixed(1)} ${ys(
                  stacks[stacks.length - 1 - i].stack[a.key].y0,
                ).toFixed(1)}`,
            )
            .join('');
          return (
            <path
              key={a.key}
              d={`${top}${bot} Z`}
              fill={a.color}
              opacity={0.5}
              stroke={a.color}
              strokeWidth={1}
            />
          );
        })}
        {data.map(
          (b, i) =>
            i % labelEvery === 0 && (
              <text
                key={i}
                x={xs(i)}
                y={H - pad.b + 14}
                textAnchor="middle"
                fontFamily="var(--font-plex-mono)"
                fontSize="9"
                fill={COLORS.inkMute}
              >
                D{b.day}
              </text>
            ),
        )}
      </svg>
    </div>
  );
}

export function CasualtiesLegend({ data }: { data: CasualtiesHistoryEntry[] }) {
  const latest = data[data.length - 1];
  return (
    <div className="mt-[14px] flex flex-wrap gap-5">
      {ACTORS.map((a) => (
        <div key={a.key} className="flex items-center gap-2.5">
          <span
            className="inline-block h-[14px] w-[14px]"
            style={{ background: a.color, opacity: 0.65, border: `1px solid ${a.color}` }}
          />
          <span className="font-sans text-[13px] text-paper-ink">{a.label}</span>
          {latest && (
            <span className="font-mono text-[12px] tabular text-paper-ink-mute">
              KIA {latest[a.key].killed.toLocaleString()} · WIA{' '}
              {latest[a.key].wounded.toLocaleString()}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
