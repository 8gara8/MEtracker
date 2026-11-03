import React from 'react';
import { archivedCopy, originalUrl } from '@/lib/sources';

/** Links the publisher's page, plus the saved Wayback copy when one exists. */
export function SourceLink({ url, className }: { url: string; className?: string }) {
  const href = originalUrl(url);
  const archived = archivedCopy(url);
  return (
    <>
      <a className={className} href={href} target="_blank" rel="noreferrer noopener">
        ↳ {href}
      </a>
      {archived && (
        <>
          {' '}
          <a
            className="text-paper-ink-mute underline hover:text-accent"
            href={archived}
            target="_blank"
            rel="noreferrer noopener"
          >
            [archived]
          </a>
        </>
      )}
    </>
  );
}
