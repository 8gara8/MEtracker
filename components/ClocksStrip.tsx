import React from 'react';
import type { BriefFrontmatter, ClocksHistoryEntry } from '@/lib/types';
import { CLOCK_ORDER, clockScore } from '@/lib/design-tokens';
import { ClockDial } from './design/ClockDial';

export function ClocksStrip({
  clocks,
  history,
}: {
  clocks: BriefFrontmatter['clocks'];
  history: ClocksHistoryEntry[];
}) {
  return (
    <div className="grid grid-cols-2 gap-[10px] md:grid-cols-3 lg:grid-cols-6">
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
