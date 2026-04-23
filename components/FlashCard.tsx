import React from 'react';
import { COLORS } from '@/lib/design-tokens';

export function FlashCard({ flash }: { flash: string }) {
  return (
    <div
      className="font-display text-[15px] leading-[1.55] text-paper-ink"
      style={{
        border: `1px solid ${COLORS.ruleSoft}`,
        borderLeft: `3px solid ${COLORS.accent}`,
        background: COLORS.cardBg,
        padding: 14,
        maxWidth: 900,
      }}
    >
      {flash}
    </div>
  );
}
