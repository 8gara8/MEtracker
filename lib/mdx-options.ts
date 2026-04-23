import type { MDXComponents } from 'mdx/types';

// v3 layout renders escalation, events, and casualties in the page chrome
// (BriefView). The MDX shortcodes are kept for backward compatibility with
// existing briefs but render nothing so sections don't duplicate.
const NoopShortcode = () => null;

export const mdxComponents: MDXComponents = {
  EscalationGauge: NoopShortcode,
  EventsTable: NoopShortcode,
  CasualtiesTable: NoopShortcode,
};
