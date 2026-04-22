import React from 'react';
import { Pill } from './design/Pill';

type Direction = 'escalating' | 'mixed' | 'de-escalating';
type Risk7d = 'critical' | 'extreme' | 'conditional' | 'low';
type Spillover = 'critical' | 'conditional' | 'contained';

export type EscalationGaugeProps = {
  direction: Direction;
  risk7d: Risk7d;
  spillover: Spillover;
  rationale: {
    direction: string;
    risk7d: string;
    spillover: string;
  };
};

export function EscalationGauge({
  direction,
  risk7d,
  spillover,
  rationale,
}: EscalationGaugeProps) {
  const rows = [
    { label: 'Direction', value: direction, rationale: rationale.direction },
    { label: '7-day risk', value: risk7d, rationale: rationale.risk7d },
    { label: 'Spillover', value: spillover, rationale: rationale.spillover },
  ];

  return (
    <div className="my-6 border border-paper-rule-soft bg-paper-card">
      <table className="w-full border-collapse font-sans text-[13px]">
        <thead>
          <tr className="border-b-2 border-paper-ink font-mono text-[10px] uppercase tracking-label text-paper-ink-mute">
            <th className="w-32 px-[10px] py-2 text-left font-normal">Indicator</th>
            <th className="w-40 px-[10px] py-2 text-left font-normal">Status</th>
            <th className="px-[10px] py-2 text-left font-normal">Rationale</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-paper-rule-soft align-top">
              <td className="px-[10px] py-[10px] font-medium text-paper-ink">
                {row.label}
              </td>
              <td className="px-[10px] py-[10px]">
                <Pill value={row.value} />
              </td>
              <td className="px-[10px] py-[10px] leading-[1.5] text-paper-ink-soft">
                {row.rationale}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
