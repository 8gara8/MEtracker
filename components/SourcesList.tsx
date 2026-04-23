import React from 'react';
import type { BriefFrontmatter } from '@/lib/types';

export function SourcesList({ frontmatter }: { frontmatter: BriefFrontmatter }) {
  const sources = frontmatter.sources ?? [];
  if (sources.length === 0) return null;

  return (
    <ol
      className="m-0 list-none p-0"
      style={{ columnCount: 2, columnGap: 40 }}
    >
      {sources.map((s, i) => (
        <li
          key={i}
          className="grid gap-2.5 border-b border-dotted border-paper-rule-soft py-1.5 font-mono text-[11px] text-paper-ink-soft"
          style={{
            gridTemplateColumns: 'auto 1fr',
            breakInside: 'avoid',
          }}
        >
          <span className="text-paper-ink-mute">[{String(i + 1).padStart(2, '0')}]</span>
          <span>
            <span className="text-paper-ink">{s.name}</span>
            {s.url && (
              <>
                <br />
                <a
                  className="break-all text-paper-ink-mute hover:text-accent"
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  ↳ {s.url}
                </a>
              </>
            )}
          </span>
        </li>
      ))}
    </ol>
  );
}
