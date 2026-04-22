import React from 'react';

export function SectionRule({
  number,
  label,
  right,
}: {
  number?: number;
  label: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="mt-7 mb-4 flex items-baseline gap-3 border-t border-paper-rule pt-2">
      {number != null && (
        <span className="font-mono text-[10px] tracking-label text-paper-ink-mute">
          §{String(number).padStart(2, '0')}
        </span>
      )}
      <span className="font-sans text-[11px] font-semibold uppercase tracking-section text-paper-ink">
        {label}
      </span>
      {right != null && (
        <span className="ml-auto font-mono text-[10px] uppercase tracking-metalabel text-paper-ink-mute">
          {right}
        </span>
      )}
    </div>
  );
}
