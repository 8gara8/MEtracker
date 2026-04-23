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
      <div className="mb-[10px] flex flex-wrap items-center gap-x-5 gap-y-2 border-b-[3px] border-double border-paper-rule pb-[10px] md:items-baseline">
        <div
          className="flex-1 whitespace-nowrap font-display text-[22px] font-semibold text-paper-ink md:flex-none md:text-[26px]"
          style={{ letterSpacing: '-0.02em', lineHeight: 1 }}
        >
          <span className="italic">ME</span> WAR
          <span className="font-normal text-paper-ink-mute"> · Intel Brief</span>
        </div>
        <div className="flex items-center gap-3 md:ml-auto">
          <span className="hidden whitespace-nowrap font-mono text-[10px] uppercase tracking-label text-paper-ink-mute md:inline">
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
