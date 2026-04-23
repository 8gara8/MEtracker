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
import { HeadlineBar } from './HeadlineBar';
import { ClocksStrip } from './ClocksStrip';
import { OverallRead } from './OverallRead';
import { GaugeExplanations } from './GaugeExplanations';
import { KeyDevelopments } from './KeyDevelopments';
import { ImplicationsGrid } from './ImplicationsGrid';
import { CasualtiesBlock } from './CasualtiesBlock';
import { CasualtiesDetails } from './CasualtiesDetails';
import { FlashCard } from './FlashCard';
import { SourcesList } from './SourcesList';
import { SectionRule } from './design/SectionRule';

export function BriefView({ brief }: { brief: Brief }) {
  const data = getBriefData(brief.slug);
  const casualtiesHistory = loadCasualtiesHistory().filter(
    (h) => h.day <= brief.frontmatter.day,
  );
  const clocksHistory = loadClocksHistory().filter(
    (h) => h.day <= brief.frontmatter.day,
  );

  const events = data?.events;
  const keyDevCount = events?.length ?? brief.frontmatter.key_developments.length;
  const showImplications = Boolean(data?.implications?.length);
  const showMdxNarrative = !showImplications;

  return (
    <article>
      <BriefHeader frontmatter={brief.frontmatter} />
      <HeadlineBar frontmatter={brief.frontmatter} />

      {/* §01 Escalation gauge — clocks + overall read + per-gauge explanations */}
      <SectionRule
        number={1}
        label="Escalation gauge"
        right="6 clocks · overall assessment"
      />
      <ClocksStrip clocks={brief.frontmatter.clocks} history={clocksHistory} />
      {data?.exec && <OverallRead exec={data.exec} />}
      <GaugeExplanations clocks={brief.frontmatter.clocks} />

      {/* §02 Key developments — color-scan cues + full write-ups */}
      <SectionRule
        number={2}
        label="Key developments"
        right={`${keyDevCount} items · color + detail`}
      />
      <KeyDevelopments
        events={events}
        headlines={brief.frontmatter.key_developments}
        fallbackDirection={brief.frontmatter.escalation_direction}
      />

      {/* §03 Strategic implications (curated) OR analyst narrative (MDX) */}
      {showImplications && data?.implications ? (
        <>
          <SectionRule
            number={3}
            label="Strategic implications"
            right={`${data.implications.length} threads`}
          />
          <ImplicationsGrid implications={data.implications} />
        </>
      ) : null}

      {showMdxNarrative && (
        <>
          <SectionRule number={3} label="Analyst narrative" />
          <div className="prose-brief max-w-none">
            <MDXRemote source={brief.content} components={mdxComponents} />
          </div>
        </>
      )}

      {/* §04 Casualties snapshot */}
      <SectionRule
        number={4}
        label="Casualties snapshot"
        right="Cumulative · ±24–48h Δ"
      />
      <CasualtiesBlock
        snapshot={brief.frontmatter.casualties_snapshot}
        history={casualtiesHistory}
      />

      {/* §05 Casualties details — per-actor notes directly below the snapshot */}
      <SectionRule number={5} label="Casualties details" right="Per-actor notes" />
      <CasualtiesDetails
        snapshot={brief.frontmatter.casualties_snapshot}
        history={casualtiesHistory}
        notes={data?.casualtyNotes}
      />

      {/* §06 Evening flash (optional) */}
      {data?.flash && (
        <>
          <SectionRule
            number={6}
            label="Evening flash (18:00 TPE)"
            right="+9h delta"
          />
          <FlashCard flash={data.flash} />
        </>
      )}

      {/* §07 Sources — always last */}
      <SectionRule
        number={7}
        label="Sources"
        right={`${brief.frontmatter.sources.length} citations`}
      />
      <SourcesList frontmatter={brief.frontmatter} />
    </article>
  );
}
