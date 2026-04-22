import React from 'react';
import { pillTone, toneBadgeBg, toneColor, type Tone } from '@/lib/design-tokens';

export function Pill({ value, tone }: { value: string; tone?: Tone }) {
  const resolvedTone = tone ?? pillTone(value);
  const color = toneColor(resolvedTone);
  const bg = toneBadgeBg(resolvedTone);
  return (
    <span
      className="inline-flex items-center gap-1.5 border px-2 py-[3px] font-mono text-[11px] uppercase tracking-pill leading-none"
      style={{
        color,
        background: bg,
        borderColor: `${color}40`,
      }}
    >
      <span
        aria-hidden
        className="inline-block h-[6px] w-[6px]"
        style={{ background: color }}
      />
      {value}
    </span>
  );
}
