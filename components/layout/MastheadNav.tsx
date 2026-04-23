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
    <div className="flex items-center overflow-x-auto border-b border-paper-rule-soft font-sans text-[11px] font-semibold uppercase tracking-stamp [scrollbar-width:none] min-[901px]:overflow-visible min-[901px]:text-[12px] [&::-webkit-scrollbar]:hidden">
      {TABS.map((t) => {
        const active = t.match(pathname);
        return (
          <Link
            key={t.href}
            href={t.href}
            className="whitespace-nowrap border-r border-paper-rule-soft px-3 py-[10px] min-[901px]:px-4"
            style={{
              background: active ? '#14161A' : 'transparent',
              color: active ? '#F3EEE3' : '#14161A',
            }}
          >
            {t.label}
          </Link>
        );
      })}
      <div className="ml-auto hidden items-baseline gap-[10px] whitespace-nowrap px-2 py-[8px] font-mono text-[11px] tabular text-paper-ink-mute min-[901px]:flex">
        <span className="text-paper-ink">{date}</span>
        <span>·</span>
        <span>
          DAY {String(day).padStart(3, '0')} / {String(totalDays).padStart(3, '0')}
        </span>
      </div>
    </div>
  );
}
