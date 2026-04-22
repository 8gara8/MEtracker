'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import type { EscalationHistoryEntry } from '@/lib/types';
import { COLORS } from '@/lib/design-tokens';

const DIRECTION_SCORE: Record<string, number> = {
  'de-escalating': -1,
  mixed: 0,
  escalating: 1,
};

function directionColor(d: string): string {
  switch (d) {
    case 'escalating':
      return COLORS.accent;
    case 'mixed':
      return COLORS.accentAmber;
    case 'de-escalating':
      return COLORS.accentGreen;
    default:
      return COLORS.inkMute;
  }
}

export function EscalationTimeline({
  data,
  slugByDay,
}: {
  data: EscalationHistoryEntry[];
  slugByDay: Record<number, string>;
}) {
  const router = useRouter();
  const W = 1000;
  const H = 260;
  const pad = { l: 50, r: 24, t: 30, b: 40 };
  const iw = W - pad.l - pad.r;
  const ih = H - pad.t - pad.b;
  const xs = (i: number) => pad.l + (i / Math.max(1, data.length - 1)) * iw;
  const ys = (score: number) => pad.t + ih - ((score + 1) / 2) * ih;

  const points = data.map((b, i) => ({
    x: xs(i),
    y: ys(DIRECTION_SCORE[b.direction] ?? 0),
    b,
  }));
  const labelEvery = Math.max(1, Math.ceil(data.length / 30));

  return (
    <div className="border border-paper-rule-soft bg-paper-card p-[14px]">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" className="block">
        <rect
          x={pad.l}
          y={ys(1)}
          width={iw}
          height={ys(0) - ys(1)}
          fill={COLORS.accent}
          opacity={0.06}
        />
        <rect
          x={pad.l}
          y={ys(0)}
          width={iw}
          height={ys(-1) - ys(0)}
          fill={COLORS.accentAmber}
          opacity={0.06}
        />
        {[-1, 0, 1].map((s) => (
          <line
            key={s}
            x1={pad.l}
            x2={W - pad.r}
            y1={ys(s)}
            y2={ys(s)}
            stroke={COLORS.ruleSoft}
            strokeDasharray="2 3"
          />
        ))}
        <path
          d={points
            .map(
              (p, i) =>
                `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`,
            )
            .join(' ')}
          stroke={COLORS.ink}
          strokeWidth={1.5}
          fill="none"
        />
        {points.map((p, i) => {
          const slug = slugByDay[p.b.day];
          return (
            <g
              key={i}
              className={slug ? 'cursor-pointer' : ''}
              onClick={() => {
                if (slug) router.push(`/brief/${slug}`);
              }}
            >
              <circle
                cx={p.x}
                cy={p.y}
                r={5}
                fill={directionColor(p.b.direction)}
                stroke={COLORS.ink}
                strokeWidth={1}
              />
              {i % labelEvery === 0 && (
                <text
                  x={p.x}
                  y={H - pad.b + 16}
                  textAnchor="middle"
                  fontFamily="var(--font-plex-mono)"
                  fontSize="10"
                  fill={COLORS.inkMute}
                >
                  D{String(p.b.day).padStart(2, '0')}
                </text>
              )}
            </g>
          );
        })}
        <text
          x={pad.l - 8}
          y={ys(1) + 3}
          textAnchor="end"
          fontFamily="var(--font-plex-mono)"
          fontSize="10"
          fill={COLORS.inkMute}
        >
          ESC
        </text>
        <text
          x={pad.l - 8}
          y={ys(0) + 3}
          textAnchor="end"
          fontFamily="var(--font-plex-mono)"
          fontSize="10"
          fill={COLORS.inkMute}
        >
          MIX
        </text>
        <text
          x={pad.l - 8}
          y={ys(-1) + 3}
          textAnchor="end"
          fontFamily="var(--font-plex-mono)"
          fontSize="10"
          fill={COLORS.inkMute}
        >
          DE
        </text>
      </svg>
    </div>
  );
}
