'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TABS: Array<{ href: string; label: string; match: (p: string) => boolean }> = [
  { href: '/', label: 'Today', match: (p) => p === '/' || p.startsWith('/brief/') },
  { href: '/archive', label: 'Archive', match: (p) => p.startsWith('/archive') },
  { href: '/timeline', label: 'Escalation', match: (p) => p.startsWith('/timeline') },
  { href: '/casualties', label: 'Casualties', match: (p) => p.startsWith('/casualties') },
  { href: '/clocks', label: 'Clocks', match: (p) => p.startsWith('/clocks') },
  { href: '/about', label: 'About', match: (p) => p.startsWith('/about') },
];

export function MastheadNav({
  date,
  day,
  totalDays,
}: {
  date: string;
  day: number;
  totalDays: number;
}) {
  const pathname = usePathname() ?? '/';
  return (
    <div className="flex flex-wrap items-center border-b border-paper-rule-soft font-sans text-[12px] font-semibold uppercase tracking-stamp">
      {TABS.map((t) => {
        const active = t.match(pathname);
        return (
          <Link
            key={t.href}
            href={t.href}
            className="border-r border-paper-rule-soft px-4 py-[10px]"
            style={{
              background: active ? '#14161A' : 'transparent',
              color: active ? '#F3EEE3' : '#14161A',
            }}
          >
            {t.label}
          </Link>
        );
      })}
      <div className="ml-auto flex items-baseline gap-[10px] px-2 py-[8px] font-mono text-[11px] tabular text-paper-ink-mute">
        <span className="text-paper-ink">{date}</span>
        <span>·</span>
        <span>
          DAY {String(day).padStart(3, '0')} / {String(totalDays).padStart(3, '0')}
        </span>
      </div>
    </div>
  );
}
