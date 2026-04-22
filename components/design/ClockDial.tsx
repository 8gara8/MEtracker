import React from 'react';
import type { ClockKey, ClockState, ClockTrajectory } from '@/lib/types';
import {
  CLOCK_LABELS,
  COLORS,
  clockScore,
  clockTone,
  toneColor,
  trajArrow,
} from '@/lib/design-tokens';

export function ClockDial({
  clockKey,
  state,
  trajectory,
  sparkData,
}: {
  clockKey: ClockKey;
  state: ClockState;
  trajectory: ClockTrajectory;
  sparkData?: number[];
}) {
  const label = CLOCK_LABELS[clockKey];
  const tone = clockTone(clockKey, state);
  const color = toneColor(tone);
  const score = clockScore(state);
  const pct = Math.max(0, Math.min(1, score / 5));

  const SEGS = 12;
  const filled = Math.round(pct * SEGS);
  const cx = 60;
  const cy = 56;
  const r0 = 44;
  const r1 = 56;

  const segments = Array.from({ length: SEGS }).map((_, i) => {
    const a0 = Math.PI + (i / SEGS) * Math.PI;
    const a1 = Math.PI + ((i + 0.85) / SEGS) * Math.PI;
    const x00 = cx + r0 * Math.cos(a0);
    const y00 = cy + r0 * Math.sin(a0);
    const x01 = cx + r1 * Math.cos(a0);
    const y01 = cy + r1 * Math.sin(a0);
    const x10 = cx + r0 * Math.cos(a1);
    const y10 = cy + r0 * Math.sin(a1);
    const x11 = cx + r1 * Math.cos(a1);
    const y11 = cy + r1 * Math.sin(a1);
    const active = i < filled;
    return { d: `M ${x00} ${y00} L ${x01} ${y01} L ${x11} ${y11} L ${x10} ${y10} Z`, active, i };
  });

  const needleAngle = Math.PI + pct * Math.PI;
  const needleX = 60 + 40 * Math.cos(needleAngle);
  const needleY = 56 + 40 * Math.sin(needleAngle);

  return (
    <div
      className="relative flex flex-col gap-2 border border-paper-rule-soft bg-paper-card px-[14px] pt-[14px] pb-[12px]"
    >
      <div className="flex items-baseline justify-between gap-2">
        <div className="font-mono text-[10px] uppercase tracking-metalabel text-paper-ink-mute">
          {label}
        </div>
        <div className="font-mono text-[10px] text-paper-ink-mute">
          {trajArrow(trajectory)} {trajectory.replace(/_/g, ' ')}
        </div>
      </div>
      <svg viewBox="0 0 120 64" width="100%" height={64} className="block">
        {segments.map((s) => (
          <path
            key={s.i}
            d={s.d}
            fill={s.active ? color : COLORS.ruleSoft}
            opacity={s.active ? 0.55 + 0.4 * (s.i / SEGS) : 0.5}
          />
        ))}
        <line
          x1={60}
          y1={56}
          x2={needleX}
          y2={needleY}
          stroke={COLORS.ink}
          strokeWidth={1.4}
        />
        <circle cx={60} cy={56} r={2.5} fill={COLORS.ink} />
      </svg>
      <div className="flex items-baseline gap-2">
        <span
          className="font-display text-[22px] font-medium uppercase leading-none"
          style={{ color: COLORS.ink, letterSpacing: '-0.01em' }}
        >
          {state.replace(/_/g, ' ')}
        </span>
      </div>
      {sparkData && sparkData.length > 1 && (
        <svg viewBox="0 0 120 18" width="100%" height={18} className="block">
          {(() => {
            const max = 5;
            const min = 0;
            const n = sparkData.length - 1;
            const path = sparkData
              .map((s, i) => {
                const x = (i / n) * 120;
                const y = 16 - ((s - min) / (max - min)) * 14;
                return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
              })
              .join(' ');
            return (
              <>
                <path d={path} fill="none" stroke={color} strokeWidth={1.2} />
                {sparkData.map((s, i) => {
                  const x = (i / n) * 120;
                  const y = 16 - ((s - min) / (max - min)) * 14;
                  return <circle key={i} cx={x} cy={y} r={1.2} fill={color} />;
                })}
              </>
            );
          })()}
        </svg>
      )}
    </div>
  );
}
