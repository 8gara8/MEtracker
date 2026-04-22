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
  const totalDays = index.length || day || 0;
  const displayDate = latest?.frontmatter.date
    ? format(parseISO(latest.frontmatter.date), 'yyyy-MM-dd')
    : '';

  return (
    <div className="mb-2">
      <div className="mb-[14px] flex items-center gap-[14px] border-b-[3px] border-double border-paper-rule pb-2">
        <div className="font-display text-[32px] font-semibold text-paper-ink"
          style={{ letterSpacing: '-0.02em', lineHeight: 1 }}
        >
          <span className="italic">ME</span> WAR — Intel Brief
        </div>
        <div className="hidden border-l border-paper-rule-soft pl-3 font-mono text-[10px] uppercase tracking-metalabel text-paper-ink-mute md:block">
          Twice daily · Asia/Taipei 09:00 · 18:00
          <br />
          Autonomous research · Git-audited · 3D @8gara8
        </div>
        <div className="ml-auto flex items-center gap-[10px]">
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
