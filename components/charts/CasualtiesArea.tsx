'use client';

import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { CasualtiesHistoryEntry } from '@/lib/types';

export function CasualtiesArea({ data }: { data: CasualtiesHistoryEntry[] }) {
  const rows = data.map((d) => ({
    day: d.day,
    date: d.date,
    US: d.us.killed,
    Israel: d.israel.killed,
    Iran: d.iran.killed,
    Other: d.other.killed,
  }));

  return (
    <div className="h-96 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={rows} margin={{ top: 16, right: 24, bottom: 16, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="day" tickFormatter={(v) => `D${v}`} stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip labelFormatter={(label) => `Day ${label}`} />
          <Legend />
          <Area
            type="monotone"
            dataKey="Iran"
            stackId="1"
            stroke="#CC0000"
            fill="#CC0000"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="Israel"
            stackId="1"
            stroke="#2E75B6"
            fill="#2E75B6"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="US"
            stackId="1"
            stroke="#1B2A4A"
            fill="#1B2A4A"
            fillOpacity={0.6}
          />
          <Area
            type="monotone"
            dataKey="Other"
            stackId="1"
            stroke="#8A5A00"
            fill="#8A5A00"
            fillOpacity={0.6}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
