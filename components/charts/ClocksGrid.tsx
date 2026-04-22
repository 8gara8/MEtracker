'use client';

import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { ClocksHistoryEntry, ClockKey } from '@/lib/types';
import { ClockKeys } from '@/lib/types';

const STATE_SCORE: Record<string, number> = {
  critical: 0,
  low: 1,
  degraded: 2,
  moderate: 3,
  high: 4,
  ample: 5,
  none: 2.5,
};

const CLOCK_LABELS: Record<ClockKey, string> = {
  political_will: 'Political will',
  active_deadlines: 'Active deadlines',
  energy_infrastructure: 'Energy infrastructure',
  interceptor_capacity: 'Interceptor capacity',
  negotiation_capacity: 'Negotiation capacity',
  oil_reserves: 'Oil reserves',
};

function SmallMultiple({
  clockKey,
  data,
}: {
  clockKey: ClockKey;
  data: ClocksHistoryEntry[];
}) {
  const rows = data.map((d) => ({
    day: d.day,
    state: STATE_SCORE[d.clocks[clockKey].state] ?? 0,
    label: d.clocks[clockKey].state,
  }));
  const latest = rows[rows.length - 1];
  return (
    <div className="rounded border border-gray-200 bg-white p-3">
      <div className="mb-2 flex items-baseline justify-between">
        <h3 className="text-sm font-semibold text-navy">{CLOCK_LABELS[clockKey]}</h3>
        {latest && (
          <span className="font-mono text-xs uppercase text-muted">{latest.label}</span>
        )}
      </div>
      <div className="h-28">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={rows} margin={{ top: 4, right: 8, bottom: 4, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="day" tickFormatter={(v) => `D${v}`} hide={rows.length < 2} />
            <YAxis domain={[0, 5]} hide />
            <Tooltip
              formatter={(_: number, __: string, entry) => [
                (entry.payload as { label: string }).label,
                CLOCK_LABELS[clockKey],
              ]}
              labelFormatter={(label) => `Day ${label}`}
            />
            <Line
              type="stepAfter"
              dataKey="state"
              stroke="#2E75B6"
              strokeWidth={2}
              dot={{ r: 3, fill: '#2E75B6' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function ClocksGrid({ data }: { data: ClocksHistoryEntry[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {ClockKeys.map((key) => (
        <SmallMultiple key={key} clockKey={key} data={data} />
      ))}
    </div>
  );
}
