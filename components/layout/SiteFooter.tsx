import React from 'react';
import { format, parseISO } from 'date-fns';
import { getLatestBrief } from '@/lib/briefs';

export function SiteFooter() {
  const latest = getLatestBrief();
  const stamp = latest?.frontmatter.date
    ? `${format(parseISO(latest.frontmatter.date), 'yyyy-MM-dd')}T01:00Z`
    : '';
  return (
    <footer className="mt-12 border-t border-paper-rule-soft pt-4 font-mono text-[10px] uppercase tracking-metalabel text-paper-ink-mute">
      <div className="flex flex-wrap items-center gap-4">
        <span>© 2026 3D · @8gara8</span>
        <span>·</span>
        <span>Git audit trail: /content/briefs/</span>
        <span>·</span>
        <span>Next.js 15 · Vercel · MIT</span>
        {stamp && <span className="ml-auto">Brief timestamp: {stamp}</span>}
      </div>
    </footer>
  );
}
