import React from 'react';
import Link from 'next/link';
import { getLatestBrief } from '@/lib/briefs';

export function SiteHeader() {
  const latest = getLatestBrief();
  const day = latest?.frontmatter.day;
  return (
    <header className="bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-bold tracking-tight">
            ME War Intel Brief
          </Link>
          {typeof day === 'number' && (
            <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-xs uppercase">
              Day {day}
            </span>
          )}
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-sm">
          <Link href="/archive" className="hover:underline">
            Archive
          </Link>
          <Link href="/timeline" className="hover:underline">
            Timeline
          </Link>
          <Link href="/casualties" className="hover:underline">
            Casualties
          </Link>
          <Link href="/clocks" className="hover:underline">
            Clocks
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
