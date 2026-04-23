import React from 'react';
import { COLORS } from '@/lib/design-tokens';

export function OverallRead({ exec }: { exec: string }) {
  const wordCount = exec.trim().split(/\s+/).length;
  const first = exec.charAt(0);
  const rest = exec.slice(1);

  return (
    <div
      className="mt-5 grid gap-7 pt-[18px] lg:grid-cols-[160px_1fr]"
      style={{ borderTop: `1px solid ${COLORS.ruleSoft}` }}
    >
      <div>
        <div
          className="mb-1.5 font-mono text-[10px] uppercase text-paper-ink-mute"
          style={{ letterSpacing: '0.16em' }}
        >
          Overall read
        </div>
        <div
          className="font-display text-[18px] font-semibold leading-[1.2] text-paper-ink"
          style={{ letterSpacing: '-0.015em', textWrap: 'balance' }}
        >
          How the six gauges compose into today&rsquo;s posture.
        </div>
        <div
          className="mt-2.5 font-mono text-[10px] uppercase text-paper-ink-mute"
          style={{ letterSpacing: '0.08em' }}
        >
          {wordCount} words
        </div>
      </div>
      <div
        className="font-display text-[17px] leading-[1.55] text-paper-ink"
        style={{ textWrap: 'pretty' }}
      >
        <span
          className="float-left mr-2.5 mt-1.5 font-display font-semibold"
          style={{
            fontSize: 56,
            lineHeight: 0.88,
            color: COLORS.accent,
          }}
        >
          {first}
        </span>
        {rest}
        <div style={{ clear: 'both' }} />
      </div>
    </div>
  );
}
