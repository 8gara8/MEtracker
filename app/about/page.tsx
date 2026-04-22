import React from 'react';
import { SectionRule } from '@/components/design/SectionRule';

export const metadata = {
  title: 'About — ME War Intel Brief',
};

export default function AboutPage() {
  return (
    <div className="max-w-[780px]">
      <SectionRule number={1} label="What this is" />
      <p className="mb-[18px] font-display text-[20px] leading-[1.5] text-paper-ink">
        A public twice-daily intelligence brief on the 2026 US–Israeli war on
        Iran (Operation Epic Fury), researched and written autonomously by two
        scheduled Routines and published to a Next.js site on Vercel. Git is
        the audit trail. Produced by 3D (
        <a
          className="font-mono text-accent"
          href="https://x.com/8gara8"
          target="_blank"
          rel="noreferrer noopener"
        >
          @8gara8
        </a>
        ).
      </p>

      <SectionRule number={2} label="Cadence" />
      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
        <CadenceCard
          label="Morning — full brief"
          time="09:00 Asia/Taipei · 01:00 UTC"
          body="Full research, canonical MDX written, casualty figures updated, all six clocks reassessed, context.md rewritten in full. Minimum 8 cited sources unless quiet_day is flagged."
        />
        <CadenceCard
          label="Evening — flash"
          time="18:00 Asia/Taipei · 10:00 UTC"
          body="Targeted research on the ~9-hour window since the morning run. One time-stamped flash note appended to context.md. No casualty or clock revisions. Folded into the next morning's brief."
        />
      </div>

      <SectionRule number={3} label="What this is not" />
      <ul className="list-disc pl-[18px] font-sans text-[14px] leading-[1.65] text-paper-ink-soft">
        <li>Not a news wire. Briefs are analytical, not real-time.</li>
        <li>
          Not authoritative casualty accounting. Figures are open-source
          estimates; revisions are explicit.
        </li>
        <li>
          Not predictive. Probability assessments are analytical priors, not
          forecasts.
        </li>
        <li>
          Not partisan. Every call that can cut either way is annotated in the
          rationale field.
        </li>
      </ul>

      <SectionRule number={4} label="Methodology" />
      <p className="font-sans text-[14px] leading-[1.65] text-paper-ink-soft">
        Each brief is a single MDX file with a strictly-typed frontmatter
        schema and a sibling{' '}
        <span className="font-mono text-paper-ink">.data.ts</span> sidecar.
        GitHub Actions validate every PR: frontmatter schema, day continuity,
        date/filename match, casualty monotonicity, source count floor, URL
        liveness, and length sanity. Passing PRs auto-merge; failing PRs are
        flagged <span className="font-mono text-accent">needs-review</span>.
      </p>

      <SectionRule number={5} label="Contact" />
      <p className="font-sans text-[14px] leading-[1.65] text-paper-ink-soft">
        Corrections, missing sources, methodology complaints →{' '}
        <span className="font-mono text-paper-ink">@8gara8</span> on X or the
        repo&apos;s <span className="font-mono text-paper-ink">Issues</span>{' '}
        tab. Code MIT; prose CC-BY 4.0.
      </p>
    </div>
  );
}

function CadenceCard({
  label,
  time,
  body,
}: {
  label: string;
  time: string;
  body: string;
}) {
  return (
    <div className="border border-paper-rule-soft bg-paper-card p-4">
      <div className="mb-1.5 font-mono text-[10px] uppercase tracking-label text-accent">
        {label}
      </div>
      <div className="mb-2.5 font-display text-[22px] font-semibold text-paper-ink">
        {time}
      </div>
      <p className="m-0 font-sans text-[13.5px] leading-[1.55] text-paper-ink-soft">
        {body}
      </p>
    </div>
  );
}
