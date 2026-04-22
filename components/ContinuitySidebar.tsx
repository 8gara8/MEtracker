import React from 'react';
import Link from 'next/link';
import type { Brief } from '@/lib/types';

type BriefLike = Pick<Brief, 'slug'> & { frontmatter: Pick<Brief['frontmatter'], 'day' | 'date' | 'title'> };

export function ContinuitySidebar({
  previous,
  weekAgo,
}: {
  previous: BriefLike | null;
  weekAgo: BriefLike | null;
}) {
  return (
    <aside className="mt-8 rounded border border-gray-200 bg-white p-4 text-sm lg:mt-0">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-navy">
        Continuity
      </h3>
      <ul className="space-y-2">
        {previous && (
          <li>
            <div className="text-xs text-muted">Previous brief</div>
            <Link
              href={`/brief/${previous.slug}`}
              className="text-accent hover:underline"
            >
              Day {previous.frontmatter.day} — {previous.frontmatter.title}
            </Link>
          </li>
        )}
        {weekAgo && (
          <li>
            <div className="text-xs text-muted">One week ago</div>
            <Link
              href={`/brief/${weekAgo.slug}`}
              className="text-accent hover:underline"
            >
              Day {weekAgo.frontmatter.day} — {weekAgo.frontmatter.title}
            </Link>
          </li>
        )}
        <li>
          <div className="text-xs text-muted">Full history</div>
          <Link href="/archive" className="text-accent hover:underline">
            Archive →
          </Link>
        </li>
      </ul>
    </aside>
  );
}
