import React from 'react';
import { format, parseISO } from 'date-fns';
import type { BriefFrontmatter } from '@/lib/types';

export function BriefHeader({ frontmatter }: { frontmatter: BriefFrontmatter }) {
  const weekday = format(parseISO(frontmatter.date), 'EEE');
  return (
    <div>
      <div
        className="mb-2.5 font-mono text-[10px] uppercase text-accent"
        style={{ letterSpacing: '0.2em' }}
      >
        <span className="mr-1 text-accent">▮</span>
        Daily Brief · Day {String(frontmatter.day).padStart(3, '0')} · {weekday}{' '}
        {frontmatter.date}
      </div>
      <h1
        className="brief-h1 m-0 mb-7 font-display font-semibold text-paper-ink"
        style={{
          letterSpacing: '-0.025em',
          textWrap: 'balance',
          maxWidth: '24ch',
        }}
      >
        {frontmatter.title}
      </h1>
    </div>
  );
}
