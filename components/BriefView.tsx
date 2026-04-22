import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Brief } from '@/lib/types';
import { mdxComponents } from '@/lib/mdx-options';
import { getBriefData } from '@/lib/brief-data';
import { EscalationGauge } from './EscalationGauge';
import { EventsTable } from './EventsTable';
import { CasualtiesTable } from './CasualtiesTable';
import { BriefHeader } from './BriefHeader';
import { BriefFooter } from './BriefFooter';
import { ContinuitySidebar } from './ContinuitySidebar';
import { getContinuityLinks } from '@/lib/briefs';

export function BriefView({ brief }: { brief: Brief }) {
  const { previous, weekAgo } = getContinuityLinks(brief.frontmatter.day);
  const data = getBriefData(brief.slug);
  const components = {
    ...mdxComponents,
    ...(data && {
      EscalationGauge: () => <EscalationGauge {...data.escalation} />,
      EventsTable: () => <EventsTable events={data.events} />,
      CasualtiesTable: () => <CasualtiesTable {...data.casualties} />,
    }),
  };
  return (
    <article className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_16rem]">
      <div className="min-w-0">
        <BriefHeader frontmatter={brief.frontmatter} />
        <div className="prose-brief">
          <MDXRemote source={brief.content} components={components} />
        </div>
        <BriefFooter frontmatter={brief.frontmatter} />
      </div>
      <ContinuitySidebar previous={previous} weekAgo={weekAgo} />
    </article>
  );
}
