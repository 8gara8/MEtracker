import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { getAllBriefs } from '@/lib/briefs';
import { EscalationBadge } from '@/components/EscalationBadge';

export const metadata = {
  title: 'Archive — ME War Intel Brief',
};

export default function ArchivePage() {
  const briefs = getAllBriefs();
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-navy">Archive</h1>
      {briefs.length === 0 ? (
        <p className="text-muted">No briefs published yet.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {briefs.map((b) => {
            const date = format(parseISO(b.frontmatter.date), 'MMM d, yyyy');
            return (
              <li key={b.slug} className="py-3">
                <div className="flex flex-wrap items-baseline gap-2 text-sm text-muted">
                  <span className="rounded bg-navy px-2 py-0.5 font-mono text-xs font-bold text-white">
                    Day {b.frontmatter.day}
                  </span>
                  <span>{date}</span>
                  <EscalationBadge value={b.frontmatter.escalation_direction} />
                  <EscalationBadge value={b.frontmatter.escalation_risk_7d} />
                  <EscalationBadge value={b.frontmatter.spillover_risk} />
                  <span className="text-xs text-muted">
                    · Ceasefire 30d: {b.frontmatter.ceasefire_probability_30d}%
                  </span>
                </div>
                <Link
                  href={`/brief/${b.slug}`}
                  className="mt-1 block text-lg font-medium text-navy hover:text-accent"
                >
                  {b.frontmatter.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
