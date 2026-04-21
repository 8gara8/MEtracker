import React from 'react';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
        <div>
          By{' '}
          <a
            className="text-accent hover:underline"
            href="https://x.com/8gara8"
            target="_blank"
            rel="noreferrer noopener"
          >
            @8gara8
          </a>
          . Source on{' '}
          <a
            className="text-accent hover:underline"
            href="https://github.com/8gara8/me-war-intel-brief"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
          .
        </div>
        <div className="text-muted">
          Not investment, military, or policy advice.{' '}
          <Link href="/about" className="text-accent hover:underline">
            Read methodology
          </Link>
          .
        </div>
      </div>
    </footer>
  );
}
