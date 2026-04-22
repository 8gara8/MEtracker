import React from 'react';
import { COLORS } from '@/lib/design-tokens';

type Row = { day: number; value: number };

export function MiniLine({
  title,
  rows,
  max,
  labels,
  color,
}: {
  title: string;
  rows: Row[];
  max: number;
  labels: string[];
  color: string;
}) {
  const W = 480;
  const H = 160;
  const pad = { l: 46, r: 14, t: 24, b: 28 };
  const iw = W - pad.l - pad.r;
  const ih = H - pad.t - pad.b;
  const xs = (i: number) => pad.l + (i / Math.max(1, rows.length - 1)) * iw;
  const ys = (v: number) => pad.t + ih - (v / max) * ih;
  const d = rows
    .map((r, i) => `${i === 0 ? 'M' : 'L'} ${xs(i).toFixed(1)} ${ys(r.value).toFixed(1)}`)
    .join(' ');

  return (
    <div
      className="border border-paper-rule-soft bg-paper-card px-[14px] py-[12px]"
    >
      <div className="mb-2 font-mono text-[10px] uppercase tracking-label text-paper-ink-mute">
        {title}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" className="block">
        {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
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
              {labels[4 - Math.round(t * 4)]}
            </text>
          </g>
        ))}
        <path d={d} fill="none" stroke={color} strokeWidth={1.6} />
        {rows.map((r, i) => (
          <circle key={i} cx={xs(i)} cy={ys(r.value)} r={2.5} fill={color} />
        ))}
        {rows.map(
          (r, i) =>
            i % 2 === 0 && (
              <text
                key={`l${i}`}
                x={xs(i)}
                y={H - pad.b + 14}
                textAnchor="middle"
                fontFamily="var(--font-plex-mono)"
                fontSize="9"
                fill={COLORS.inkMute}
              >
                D{r.day}
              </text>
            ),
        )}
      </svg>
    </div>
  );
}
