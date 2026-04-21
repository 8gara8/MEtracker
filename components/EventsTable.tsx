import React from 'react';

type EventDirection = 'escalating' | 'de-escalating' | 'neutral' | 'pivotal';
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

function directionBadge(direction: EventDirection): string {
  switch (direction) {
    case 'escalating':
    case 'pivotal':
      return 'bg-escalating-bg text-escalating border-escalating/40';
    case 'neutral':
      return 'bg-mixed-bg text-mixed border-mixed/40';
    case 'de-escalating':
      return 'bg-deescalating-bg text-deescalating border-deescalating/40';
    default:
      return 'bg-gray-100 text-body border-gray-200';
  }
}

export function EventsTable({ events }: EventsTableProps) {
  return (
    <div className="my-6">
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-navy">
              <th className="w-10 px-2 py-2 text-left font-semibold text-navy">#</th>
              <th className="w-28 px-2 py-2 text-left font-semibold text-navy">Direction</th>
              <th className="w-24 px-2 py-2 text-left font-semibold text-navy">Importance</th>
              <th className="w-32 px-2 py-2 text-left font-semibold text-navy">Source</th>
              <th className="px-2 py-2 text-left font-semibold text-navy">Event</th>
              <th className="px-2 py-2 text-left font-semibold text-navy">Summary</th>
              <th className="px-2 py-2 text-left font-semibold text-navy">Impact</th>
            </tr>
          </thead>
          <tbody>
            {events.map((e) => (
              <tr key={e.id} className="border-b border-gray-200 align-top">
                <td className="px-2 py-3 font-mono text-muted">{e.id}</td>
                <td className="px-2 py-3">
                  <span
                    className={`inline-block rounded border px-2 py-0.5 text-xs font-semibold uppercase ${directionBadge(e.direction)}`}
                  >
                    {e.direction}
                  </span>
                </td>
                <td
                  className={`px-2 py-3 uppercase text-xs ${e.importance === 'pivotal' ? 'font-bold text-navy' : 'text-body'}`}
                >
                  {e.importance}
                </td>
                <td className="px-2 py-3 text-muted">{e.source}</td>
                <td className="px-2 py-3 font-medium text-body">{e.event}</td>
                <td className="px-2 py-3 leading-relaxed text-body">{e.summary}</td>
                <td className="px-2 py-3 leading-relaxed text-body">{e.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="space-y-4 md:hidden">
        {events.map((e) => (
          <div key={e.id} className="rounded border border-gray-200 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-muted text-xs">#{e.id}</span>
              <span
                className={`inline-block rounded border px-2 py-0.5 text-xs font-semibold uppercase ${directionBadge(e.direction)}`}
              >
                {e.direction}
              </span>
            </div>
            <div className="mb-1 text-xs uppercase text-muted">
              <span className={e.importance === 'pivotal' ? 'font-bold text-navy' : ''}>
                {e.importance}
              </span>{' '}
              · {e.source}
            </div>
            <div className="mb-1 font-medium text-body">{e.event}</div>
            <div className="mb-1 text-sm text-body">
              <span className="text-muted">Summary: </span>
              {e.summary}
            </div>
            <div className="text-sm text-body">
              <span className="text-muted">Impact: </span>
              {e.impact}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
