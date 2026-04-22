import React from 'react';

export function Stamp({
  text,
  angle = -3,
}: {
  text: string;
  angle?: number;
}) {
  return (
    <span
      className="inline-block border-2 border-accent px-[10px] py-[4px] font-mono text-[11px] font-bold uppercase tracking-stamp text-accent opacity-90"
      style={{ transform: `rotate(${angle}deg)` }}
    >
      {text}
    </span>
  );
}
