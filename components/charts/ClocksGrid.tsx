import React from 'react';
import type { ClocksHistoryEntry, BriefFrontmatter } from '@/lib/types';
import { CLOCK_ORDER, clockScore } from '@/lib/design-tokens';
import { ClockDial } from '@/components/design/ClockDial';

export function ClocksGrid({
  clocks,
  history,
}: {
  clocks: BriefFrontmatter['clocks'];
  history: ClocksHistoryEntry[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 min-[901px]:grid-cols-3">
      {CLOCK_ORDER.map((k) => {
        const clock = clocks[k];
        const spark = history.map((h) => clockScore(h.clocks[k].state));
        return (
          <ClockDial
            key={k}
            clockKey={k}
            state={clock.state}
            trajectory={clock.trajectory}
            sparkData={spark}
          />
        );
      })}
    </div>
  );
}
