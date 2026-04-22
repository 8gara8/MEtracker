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
  { key: 'us', label: 'United States' },
  { key: 'israel', label: 'Israel' },
  { key: 'iran', label: 'Iran & Proxies' },
  { key: 'other', label: 'Other' },
];

export function CasualtiesTable(props: CasualtiesTableProps) {
  return (
    <div className="my-6 border border-paper-rule-soft bg-paper-card">
      <table className="w-full border-collapse font-sans text-[13px]">
        <thead>
          <tr className="border-b-2 border-paper-ink font-mono text-[10px] uppercase tracking-label text-paper-ink-mute">
            <th className="w-36 px-[10px] py-2 text-left font-normal">Actor</th>
            <th className="px-[10px] py-2 text-left font-normal">Cumulative</th>
            <th className="w-36 px-[10px] py-2 text-left font-normal">24–48h Δ</th>
            <th className="px-[10px] py-2 text-left font-normal">Status</th>
          </tr>
        </thead>
        <tbody>
          {ACTOR_LABELS.map(({ key, label }) => {
            const block = props[key];
            return (
              <tr key={key} className="border-b border-paper-rule-soft align-top">
                <td className="px-[10px] py-[10px] font-medium text-paper-ink">
                  {label}
                </td>
                <td className="px-[10px] py-[10px] font-mono tabular text-paper-ink">
                  {block.cumulative}
                </td>
                <td className="px-[10px] py-[10px] font-mono tabular text-paper-ink">
                  {block.delta}
                </td>
                <td className="px-[10px] py-[10px] leading-[1.5] text-paper-ink-soft">
                  {block.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
