import Link from 'next/link';
import { getAllBriefs } from '@/lib/briefs';
import { SectionRule } from '@/components/design/SectionRule';
import { Pill } from '@/components/design/Pill';

export const metadata = {
  title: 'Archive — ME War Intel Brief',
};

export default function ArchivePage() {
  const briefs = getAllBriefs();
  return (
    <div>
      <SectionRule
        number={1}
        label="Archive"
        right={`${briefs.length} briefs`}
      />
      <p className="mb-[18px] max-w-[640px] font-sans text-[13px] leading-[1.55] text-paper-ink-soft">
        One MDX file per day, committed to{' '}
        <span className="font-mono text-paper-ink">content/briefs/</span> by the
        morning Routine at 09:00 Asia/Taipei (01:00 UTC). Flash notes from the
        18:00 run are folded into the next morning&apos;s brief.
      </p>
      {briefs.length === 0 ? (
        <p className="text-paper-ink-mute">No briefs published yet.</p>
      ) : (
        <div className="border border-paper-rule-soft">
          <div
            className="hidden border-b-2 border-paper-ink bg-paper-card px-[14px] py-2 font-mono text-[10px] uppercase tracking-label text-paper-ink-mute md:grid"
            style={{
              gridTemplateColumns:
                '70px 100px minmax(0,1fr) 120px 120px 100px',
            }}
          >
            <div>Day</div>
            <div>Date</div>
            <div>Title</div>
            <div>Direction</div>
            <div>Risk / 7d</div>
            <div>C/F 30d</div>
          </div>
          {briefs.map((b) => (
            <Link
              key={b.slug}
              href={`/brief/${b.slug}`}
              className="block border-b border-paper-rule-soft border-l-[3px] border-l-transparent px-[14px] py-3 transition-colors hover:border-l-accent hover:bg-paper-card md:grid md:items-baseline md:gap-2"
              style={{
                gridTemplateColumns:
                  '70px 100px minmax(0,1fr) 120px 120px 100px',
              }}
            >
              <div className="font-mono text-[13px] tabular text-accent">
                {String(b.frontmatter.day).padStart(3, '0')}
              </div>
              <div className="font-mono text-[12px] tabular text-paper-ink-soft">
                {b.frontmatter.date}
              </div>
              <div className="font-display text-[16px] font-medium leading-[1.3] text-paper-ink">
                {b.frontmatter.title}
              </div>
              <div className="mt-1 md:mt-0">
                <Pill value={b.frontmatter.escalation_direction} />
              </div>
              <div className="mt-1 md:mt-0">
                <Pill value={b.frontmatter.escalation_risk_7d} />
              </div>
              <div className="mt-1 font-mono text-[13px] tabular text-paper-ink-soft md:mt-0">
                {b.frontmatter.ceasefire_probability_30d}%
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
