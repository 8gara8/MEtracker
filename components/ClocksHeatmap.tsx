import React from 'react';
import type { ClocksHistoryEntry } from '@/lib/types';
import {
  CLOCK_LABELS,
  CLOCK_ORDER,
  clockScore,
  clockTone,
  toneColor,
} from '@/lib/design-tokens';

export function ClocksHeatmap({ data }: { data: ClocksHistoryEntry[] }) {
  return (
    <div className="overflow-x-auto border border-paper-rule-soft bg-paper-card p-[14px]">
      <table className="w-full border-collapse">
        <thead>
          <tr className="font-mono text-[9px] uppercase tracking-label text-paper-ink-mute">
            <th className="min-w-[180px] px-2 py-1 text-left font-normal">Clock</th>
            {data.map((d) => (
              <th
                key={d.day}
                className="w-[34px] px-[2px] py-1 text-center font-normal"
              >
                D{String(d.day).padStart(2, '0')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {CLOCK_ORDER.map((k) => (
            <tr key={k}>
              <td className="border-r border-paper-rule-soft px-2 py-2 font-sans text-[13px] text-paper-ink">
                {CLOCK_LABELS[k]}
              </td>
              {data.map((d) => {
                const clock = d.clocks[k];
                const tone = clockTone(k, clock.state);
                const color = toneColor(tone);
                const score = clockScore(clock.state);
                return (
                  <td
                    key={d.day}
                    className="p-[2px] text-center"
                    title={`${clock.state} · ${clock.trajectory}`}
                  >
                    <div
                      className="mx-auto h-[22px] w-[28px]"
                      style={{
                        background: color,
                        opacity: 0.25 + 0.65 * (score / 5),
                        border: `1px solid ${color}40`,
                      }}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
