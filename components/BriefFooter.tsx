import React from 'react';
import { format, parseISO } from 'date-fns';
import type { BriefFrontmatter } from '@/lib/types';

export function BriefFooter({ frontmatter }: { frontmatter: BriefFrontmatter }) {
  return (
    <footer className="mt-10 border-t border-gray-200 pt-6">
      <h2 className="mb-3 text-lg font-semibold text-navy">Sources</h2>
      <ol className="list-decimal space-y-1 pl-5 text-sm text-body">
        {frontmatter.sources.map((s, i) => {
          let accessed = s.accessed_at;
          try {
            accessed = format(parseISO(s.accessed_at), 'yyyy-MM-dd HH:mm') + ' UTC';
          } catch {
            // keep raw string
          }
          return (
            <li key={i}>
              <a
                className="text-accent hover:underline"
                href={s.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {s.name}
              </a>{' '}
              <span className="text-muted">— accessed {accessed}</span>
            </li>
          );
        })}
      </ol>
    </footer>
  );
}
