import React from 'react';
import { Pill } from './design/Pill';

type EventDirection = 'escalating' | 'de-escalating' | 'neutral' | 'pivotal' | 'mixed';
type EventImportance = 'pivotal' | 'high' | 'medium' | 'low';

export type EventRow = {
  id: number;
  direction: EventDirection;
  importance: EventImportance;
  source: string;
  event: string;
  summary: string;
  impact: string;
};

export type EventsTableProps = {
  events: EventRow[];
};

export function EventsTable({ events }: EventsTableProps) {
  return (
    <div>
      <div className="hidden overflow-x-auto border border-paper-rule-soft bg-paper-card md:block">
        <table className="w-full min-w-[900px] border-collapse font-sans text-[13px]">
          <thead>
            <tr className="border-b-2 border-paper-ink font-mono text-[10px] uppercase tracking-label text-paper-ink-mute">
              <th className="w-9 px-[10px] py-2 text-left font-normal">#</th>
              <th className="w-[110px] px-[10px] py-2 text-left font-normal">Dir.</th>
              <th className="w-[90px] px-[10px] py-2 text-left font-normal">Impt.</th>
              <th className="w-[120px] px-[10px] py-2 text-left font-normal">Source</th>
              <th className="px-[10px] py-2 text-left font-normal">Event</th>
              <th className="px-[10px] py-2 text-left font-normal">Summary</th>
              <th className="px-[10px] py-2 text-left font-normal">Impact</th>
            </tr>
          </thead>
          <tbody>
            {events.map((e) => (
              <tr
                key={e.id}
                className="border-b border-paper-rule-soft align-top"
              >
                <td className="px-[10px] py-[10px] font-mono tabular text-paper-ink-mute">
                  {String(e.id).padStart(2, '0')}
                </td>
                <td className="px-[10px] py-[10px]">
                  <Pill value={e.direction} />
                </td>
                <td
                  className="px-[10px] py-[10px] font-mono text-[11px] uppercase tracking-pill"
                  style={{
                    color: e.importance === 'pivotal' ? '#B33A2E' : '#3B3E45',
                    fontWeight: e.importance === 'pivotal' ? 700 : 400,
                  }}
                >
                  {e.importance}
                </td>
                <td className="px-[10px] py-[10px] italic text-paper-ink-mute">
                  {e.source}
                </td>
                <td className="px-[10px] py-[10px] font-medium text-paper-ink">
                  {e.event}
                </td>
                <td className="px-[10px] py-[10px] leading-[1.5] text-paper-ink-soft">
                  {e.summary}
                </td>
                <td className="px-[10px] py-[10px] leading-[1.5] text-paper-ink-soft">
                  {e.impact}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="space-y-3 md:hidden">
        {events.map((e) => (
          <div
            key={e.id}
            className="border border-paper-rule-soft bg-paper-card p-3"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-[11px] tabular text-paper-ink-mute">
                #{String(e.id).padStart(2, '0')}
              </span>
              <Pill value={e.direction} />
            </div>
            <div className="mb-1 font-mono text-[10px] uppercase tracking-pill text-paper-ink-mute">
              <span
                style={{
                  color: e.importance === 'pivotal' ? '#B33A2E' : undefined,
                  fontWeight: e.importance === 'pivotal' ? 700 : 400,
                }}
              >
                {e.importance}
              </span>{' '}
              · <span className="italic">{e.source}</span>
            </div>
            <div className="mb-1 font-medium text-paper-ink">{e.event}</div>
            <div className="mb-1 text-[13px] leading-[1.5] text-paper-ink-soft">
              {e.summary}
            </div>
            <div className="text-[13px] leading-[1.5] text-paper-ink-soft">
              {e.impact}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
