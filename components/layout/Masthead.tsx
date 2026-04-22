import React from 'react';
import { format, parseISO } from 'date-fns';
import { getLatestBrief } from '@/lib/briefs';
import { loadIndex } from '@/lib/data-aggregation';
import { Stamp } from '@/components/design/Stamp';
import { MastheadNav } from './MastheadNav';

export function Masthead() {
  const latest = getLatestBrief();
  const index = loadIndex();
  const day = latest?.frontmatter.day;
  const maxIndexDay = index.reduce((m, e) => (e.day > m ? e.day : m), 0);
  const totalDays = Math.max(maxIndexDay, day ?? 0);
  const displayDate = latest?.frontmatter.date
    ? format(parseISO(latest.frontmatter.date), 'yyyy-MM-dd')
    : '';

  return (
    <div className="mb-2">
      <div className="mb-[10px] flex items-baseline gap-5 border-b-[3px] border-double border-paper-rule pb-[10px]">
        <div
          className="flex-shrink-0 whitespace-nowrap font-display text-[26px] font-semibold text-paper-ink"
          style={{ letterSpacing: '-0.02em', lineHeight: 1 }}
        >
          <span className="italic">ME</span> WAR
          <span className="font-normal text-paper-ink-mute"> · Intel Brief</span>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <span className="hidden whitespace-nowrap font-mono text-[10px] uppercase tracking-label text-paper-ink-mute sm:inline">
            Twice daily · 3D @8gara8
          </span>
          <Stamp text="Unclassified · OSINT" angle={-3} />
        </div>
      </div>
      <MastheadNav
        date={displayDate}
        day={day ?? 0}
        totalDays={totalDays}
      />
    </div>
  );
}
