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
import type { EscalationHistoryEntry } from '@/lib/types';

const DIRECTION_SCORE: Record<string, number> = {
  'de-escalating': -1,
  mixed: 0,
  escalating: 1,
};

const RISK_SCORE: Record<string, number> = {
  low: 1,
  conditional: 2,
  extreme: 3,
  critical: 4,
};

export function EscalationTimeline({ data }: { data: EscalationHistoryEntry[] }) {
  const rows = data.map((d) => ({
    day: d.day,
    date: d.date,
    direction: DIRECTION_SCORE[d.direction] ?? 0,
    risk7d: RISK_SCORE[d.risk7d] ?? 0,
    ceasefire: d.ceasefire_probability_30d,
  }));

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={rows} margin={{ top: 16, right: 24, bottom: 16, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="day" tickFormatter={(v) => `D${v}`} stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip
            formatter={(value: number, key: string) => [value, key]}
            labelFormatter={(label) => `Day ${label}`}
          />
          <Line
            type="monotone"
            dataKey="risk7d"
            name="7-day risk"
            stroke="#CC0000"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
          <Line
            type="monotone"
            dataKey="direction"
            name="Direction (-1 de, 0 mixed, 1 esc)"
            stroke="#2E75B6"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
          <Line
            type="monotone"
            dataKey="ceasefire"
            name="Ceasefire 30d (%)"
            stroke="#006600"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
