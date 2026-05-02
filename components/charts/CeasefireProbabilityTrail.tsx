'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import type { EscalationHistoryEntry } from '@/lib/types';
import { COLORS } from '@/lib/design-tokens';

const WINDOW_DAYS = 15;

function dotColor(pct: number): string {
  if (pct >= 60) return COLORS.accentGreen;
  if (pct >= 30) return COLORS.accentAmber;
  return COLORS.accent;
}

export function CeasefireProbabilityTrail({
  data,
  slugByDay,
}: {
  data: EscalationHistoryEntry[];
  slugByDay: Record<number, string>;
}) {
  const router = useRouter();
  const trail = data.slice(-WINDOW_DAYS);

  if (trail.length === 0) {
    return (
      <div className="border border-paper-rule-soft bg-paper-card p-[14px]">
        <p className="font-mono text-[11px] text-paper-ink-mute">
          No briefs published yet.
        </p>
      </div>
    );
  }

  const W = 1000;
  const H = 220;
  const pad = { l: 50, r: 24, t: 30, b: 40 };
  const iw = W - pad.l - pad.r;
  const ih = H - pad.t - pad.b;
  const xs = (i: number) => pad.l + (i / Math.max(1, trail.length - 1)) * iw;
  const ys = (pct: number) => pad.t + ih - (pct / 100) * ih;

  const points = trail.map((b, i) => ({
    x: xs(i),
    y: ys(b.ceasefire_probability_30d),
    b,
  }));

  const latest = trail[trail.length - 1];

  return (
    <div className="border border-paper-rule-soft bg-paper-card p-[14px]">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" className="block">
        {[0, 25, 50, 75, 100].map((t) => (
          <line
            key={t}
            x1={pad.l}
            x2={W - pad.r}
            y1={ys(t)}
            y2={ys(t)}
            stroke={COLORS.ruleSoft}
            strokeDasharray="2 3"
          />
        ))}
        {[0, 25, 50, 75, 100].map((t) => (
          <text
            key={t}
            x={pad.l - 8}
            y={ys(t) + 3}
            textAnchor="end"
            fontFamily="var(--font-plex-mono)"
            fontSize="10"
            fill={COLORS.inkMute}
          >
            {t}
          </text>
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
              <title>{`Day ${p.b.day} · ${p.b.date} · ${p.b.ceasefire_probability_30d}%`}</title>
              <circle
                cx={p.x}
                cy={p.y}
                r={5}
                fill={dotColor(p.b.ceasefire_probability_30d)}
                stroke={COLORS.ink}
                strokeWidth={1}
              />
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
            </g>
          );
        })}
        <text
          x={W - pad.r}
          y={pad.t + 6}
          textAnchor="end"
          fontFamily="var(--font-newsreader)"
          fontSize="36"
          fill={COLORS.ink}
        >
          {latest.ceasefire_probability_30d}%
        </text>
        <text
          x={W - pad.r}
          y={pad.t + 22}
          textAnchor="end"
          fontFamily="var(--font-plex-mono)"
          fontSize="10"
          fill={COLORS.inkMute}
        >
          DAY {latest.day} · 30-DAY HORIZON
        </text>
      </svg>
    </div>
  );
}
