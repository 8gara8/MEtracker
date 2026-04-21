import React from 'react';
import { format, parseISO } from 'date-fns';
import type { BriefFrontmatter } from '@/lib/types';

export function BriefHeader({ frontmatter }: { frontmatter: BriefFrontmatter }) {
  const formattedDate = format(parseISO(frontmatter.date), 'EEEE, MMMM d, yyyy');
  return (
    <header className="mb-6 border-b-2 border-navy pb-4">
      <div className="mb-2 flex items-center gap-3 text-xs uppercase tracking-wide text-muted">
        <span className="rounded bg-navy px-2 py-0.5 font-mono font-bold text-white">
          Day {frontmatter.day}
        </span>
        <span>{formattedDate}</span>
      </div>
      <h1 className="text-2xl font-bold leading-tight text-navy md:text-3xl">
        {frontmatter.title}
      </h1>
      {frontmatter.key_developments.length > 0 && (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-body">
          {frontmatter.key_developments.map((k, i) => (
            <li key={i}>{k}</li>
          ))}
        </ul>
      )}
    </header>
  );
}
