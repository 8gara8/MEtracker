import React from 'react';

export function EscalationBadge({ value }: { value: string }) {
  const classes = (() => {
    switch (value) {
      case 'escalating':
      case 'critical':
      case 'extreme':
        return 'bg-escalating-bg text-escalating border-escalating/40';
      case 'mixed':
      case 'conditional':
        return 'bg-mixed-bg text-mixed border-mixed/40';
      case 'de-escalating':
      case 'low':
      case 'contained':
        return 'bg-deescalating-bg text-deescalating border-deescalating/40';
      default:
        return 'bg-gray-100 text-body border-gray-200';
    }
  })();
  return (
    <span
      className={`inline-block rounded border px-2 py-0.5 text-xs font-semibold uppercase tracking-wide ${classes}`}
    >
      {value}
    </span>
  );
}
