import React from 'react';
import type { Implication } from '@/lib/brief-data';
import { COLORS } from '@/lib/design-tokens';

export function ImplicationsGrid({ implications }: { implications: Implication[] }) {
  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
      {implications.map((im, i) => (
        <div key={i} className="pt-3" style={{ borderTop: `2px solid ${COLORS.ink}` }}>
          <div
            className="mb-1.5 font-mono text-[10px] uppercase text-accent"
            style={{ letterSpacing: '0.16em' }}
          >
            Implication {String(i + 1).padStart(2, '0')}
          </div>
          <h3
            className="m-0 mb-2 font-display text-[22px] font-semibold leading-[1.15] text-paper-ink"
            style={{ textWrap: 'balance' }}
          >
            {im.title}
          </h3>
          <p className="m-0 font-sans text-[13.5px] leading-[1.55] text-paper-ink-soft">
            {im.body}
          </p>
        </div>
      ))}
    </div>
  );
}
