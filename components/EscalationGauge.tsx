import React from 'react';

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

function badgeClassesFor(value: string): string {
  const red = 'bg-escalating-bg text-escalating border-escalating/40';
  const amber = 'bg-mixed-bg text-mixed border-mixed/40';
  const green = 'bg-deescalating-bg text-deescalating border-deescalating/40';
  switch (value) {
    case 'escalating':
    case 'critical':
    case 'extreme':
      return red;
    case 'mixed':
    case 'conditional':
      return amber;
    case 'de-escalating':
    case 'low':
    case 'contained':
      return green;
    default:
      return 'bg-gray-100 text-body border-gray-200';
  }
}

function Badge({ value }: { value: string }) {
  return (
    <span
      className={`inline-block rounded border px-2 py-0.5 text-xs font-semibold uppercase tracking-wide ${badgeClassesFor(
        value,
      )}`}
    >
      {value}
    </span>
  );
}

export function EscalationGauge({ direction, risk7d, spillover, rationale }: EscalationGaugeProps) {
  const rows: Array<{ label: string; value: string; rationale: string }> = [
    { label: 'Direction', value: direction, rationale: rationale.direction },
    { label: '7-day risk', value: risk7d, rationale: rationale.risk7d },
    { label: 'Spillover', value: spillover, rationale: rationale.spillover },
  ];

  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b-2 border-navy">
            <th className="w-32 px-2 py-2 text-left font-semibold text-navy">Indicator</th>
            <th className="w-40 px-2 py-2 text-left font-semibold text-navy">Status</th>
            <th className="px-2 py-2 text-left font-semibold text-navy">Rationale</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-gray-200 align-top">
              <td className="px-2 py-3 font-medium text-body">{row.label}</td>
              <td className="px-2 py-3">
                <Badge value={row.value} />
              </td>
              <td className="px-2 py-3 text-body leading-relaxed">{row.rationale}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
