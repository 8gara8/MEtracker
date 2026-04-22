import React from 'react';

export type ActorBlock = {
  cumulative: string;
  delta: string;
  status: string;
};

export type CasualtiesTableProps = {
  us: ActorBlock;
  israel: ActorBlock;
  iran: ActorBlock;
  other: ActorBlock;
};

const ACTOR_LABELS: Array<{ key: keyof CasualtiesTableProps; label: string }> = [
  { key: 'us', label: 'US' },
  { key: 'israel', label: 'Israel' },
  { key: 'iran', label: 'Iran & Proxies' },
  { key: 'other', label: 'Other' },
];

export function CasualtiesTable(props: CasualtiesTableProps) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b-2 border-navy">
            <th className="w-32 px-2 py-2 text-left font-semibold text-navy">Actor</th>
            <th className="px-2 py-2 text-left font-semibold text-navy">Cumulative</th>
            <th className="w-36 px-2 py-2 text-left font-semibold text-navy">24–48h Δ</th>
            <th className="px-2 py-2 text-left font-semibold text-navy">Status</th>
          </tr>
        </thead>
        <tbody>
          {ACTOR_LABELS.map(({ key, label }) => {
            const block = props[key];
            return (
              <tr key={key} className="border-b border-gray-200 align-top">
                <td className="px-2 py-3 font-medium text-body">{label}</td>
                <td className="px-2 py-3 font-mono text-body">{block.cumulative}</td>
                <td className="px-2 py-3 font-mono text-body">{block.delta}</td>
                <td className="px-2 py-3 leading-relaxed text-body">{block.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
