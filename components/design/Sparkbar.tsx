import React from 'react';

export function Sparkbar({ values, color }: { values: number[]; color: string }) {
  if (values.length === 0) return null;
  const max = Math.max(...values, 1);
  const W = Math.max(values.length * 10, 10);
  return (
    <svg
      viewBox={`0 0 ${W} 24`}
      width="100%"
      height="24"
      preserveAspectRatio="none"
      className="mt-2 block"
    >
      {values.map((v, i) => {
        const h = Math.max(1, (v / max) * 22);
        const denom = Math.max(1, values.length - 1);
        return (
          <rect
            key={i}
            x={i * 10 + 1}
            y={24 - h}
            width={7}
            height={h}
            fill={color}
            opacity={0.35 + 0.6 * (i / denom)}
          />
        );
      })}
    </svg>
  );
}
