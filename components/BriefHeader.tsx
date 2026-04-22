import React from 'react';
import { format, parseISO } from 'date-fns';
import type { BriefFrontmatter } from '@/lib/types';
import { Pill } from './design/Pill';

export function BriefHeader({ frontmatter }: { frontmatter: BriefFrontmatter }) {
  const weekday = format(parseISO(frontmatter.date), 'EEE');
  return (
    <div className="mb-5 grid grid-cols-1 items-end gap-6 md:grid-cols-[1fr_auto]">
      <div>
        <div className="mb-2 font-mono text-[10px] uppercase text-accent"
          style={{ letterSpacing: '0.2em' }}
        >
          <span className="mr-1 text-accent">▮</span>
          Daily Brief · Day {String(frontmatter.day).padStart(3, '0')} · {weekday}{' '}
          {frontmatter.date}
        </div>
        <h1
          className="m-0 font-display font-semibold text-paper-ink"
          style={{
            fontSize: 52,
            lineHeight: 1.02,
            letterSpacing: '-0.025em',
            textWrap: 'balance',
          }}
        >
          {frontmatter.title}
        </h1>
      </div>
      <div className="min-w-[220px] md:text-right">
        <div className="mb-1.5 font-mono text-[10px] uppercase tracking-label text-paper-ink-mute">
          Headline indicators
        </div>
        <div className="flex flex-col items-start gap-1.5 md:items-end">
          <IndicatorRow label="Direction" value={frontmatter.escalation_direction} />
          <IndicatorRow label="7-day risk" value={frontmatter.escalation_risk_7d} />
          <IndicatorRow label="Spillover" value={frontmatter.spillover_risk} />
          <IndicatorRow
            label="Ceasefire / 30d"
            value={`${frontmatter.ceasefire_probability_30d}%`}
            raw
          />
        </div>
      </div>
    </div>
  );
}

function IndicatorRow({
  label,
  value,
  raw,
}: {
  label: string;
  value: string;
  raw?: boolean;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="font-mono text-[10px] uppercase tracking-metalabel text-paper-ink-mute">
        {label}
      </span>
      {raw ? (
        <span className="font-mono text-[12px] tabular text-paper-ink">{value}</span>
      ) : (
        <Pill value={value} />
      )}
    </div>
  );
}
