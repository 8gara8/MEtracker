import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Brief } from '@/lib/types';
import { mdxComponents } from '@/lib/mdx-options';
import { getBriefData } from '@/lib/brief-data';
import {
  loadCasualtiesHistory,
  loadClocksHistory,
} from '@/lib/data-aggregation';
import { BriefHeader } from './BriefHeader';
import { BriefFooter } from './BriefFooter';
import { EscalationGauge } from './EscalationGauge';
import { EventsTable } from './EventsTable';
import { CasualtiesTable } from './CasualtiesTable';
import { ClocksStrip } from './ClocksStrip';
import { CasualtiesBlock } from './CasualtiesBlock';
import { SectionRule } from './design/SectionRule';

export function BriefView({ brief }: { brief: Brief }) {
  const data = getBriefData(brief.slug);
  const casualtiesHistory = loadCasualtiesHistory().filter(
    (h) => h.day <= brief.frontmatter.day,
  );
  const clocksHistory = loadClocksHistory().filter(
    (h) => h.day <= brief.frontmatter.day,
  );

  const components = {
    ...mdxComponents,
    ...(data && {
      EscalationGauge: () => <EscalationGauge {...data.escalation} />,
      EventsTable: () => <EventsTable events={data.events} />,
      CasualtiesTable: () => <CasualtiesTable {...data.casualties} />,
    }),
  };

  return (
    <article>
      <BriefHeader frontmatter={brief.frontmatter} />

      <SectionRule number={1} label="Multi-clock state" right="6 indicators" />
      <ClocksStrip clocks={brief.frontmatter.clocks} history={clocksHistory} />

      <SectionRule
        number={2}
        label="Key developments"
        right={`${brief.frontmatter.key_developments.length} items`}
      />
      <ol className="m-0 list-none p-0">
        {brief.frontmatter.key_developments.map((h, i) => (
          <li
            key={i}
            className="grid gap-3 border-b border-paper-rule-soft py-[10px]"
            style={{ gridTemplateColumns: 'auto 1fr' }}
          >
            <span
              className="font-mono text-[11px] text-accent"
              style={{ letterSpacing: '0.08em' }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="font-sans text-[14px] leading-[1.45] text-paper-ink">{h}</span>
          </li>
        ))}
      </ol>

      <SectionRule number={3} label="Executive narrative" />
      <div className="prose-brief max-w-none">
        <MDXRemote source={brief.content} components={components} />
      </div>

      <SectionRule
        number={4}
        label="Casualties snapshot"
        right="Cumulative · ±24–48h Δ"
      />
      <CasualtiesBlock
        snapshot={brief.frontmatter.casualties_snapshot}
        history={casualtiesHistory}
      />

      <SectionRule
        number={5}
        label="Sources"
        right={`${brief.frontmatter.sources.length} citations`}
      />
      <BriefFooter frontmatter={brief.frontmatter} />
    </article>
  );
}
