// The clocks strip — 6 small dials + state + trajectory.
// Used on Today hero and Clocks dashboard.

function ClockScore(state) {
  return window.CLOCK_SCORE[state] ?? 0;
}

const ClockDial = ({ clockKey, state, trajectory, theme, sparkData }) => {
  const label = window.CLOCK_LABELS[clockKey];
  const tone = window.clockToneFor(clockKey, state);
  const color = window.toneColor(theme, tone);
  const score = ClockScore(state);
  const pct = score / 5; // 0..1

  // Dial: 180° arc, 12 segments, filled proportional to score
  const SEGS = 12;
  const filled = Math.round(pct * SEGS);

  return (
    <div style={{
      background: theme.cardBg,
      border: `1px solid ${theme.ruleSoft}`,
      padding: "14px 14px 12px",
      display: "flex", flexDirection: "column", gap: 8,
      position: "relative",
    }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8 }}>
        <div style={{
          fontFamily: theme.font.mono, fontSize: 10, letterSpacing: "0.12em",
          textTransform: "uppercase", color: theme.inkMute,
        }}>{label}</div>
        <div style={{
          fontFamily: theme.font.mono, fontSize: 10, color: theme.inkMute,
        }}>{window.trajArrow(trajectory)} {trajectory}</div>
      </div>

      {/* Segmented arc */}
      <svg viewBox="0 0 120 64" width="100%" height="64" style={{ display: "block" }}>
        {Array.from({ length: SEGS }).map((_, i) => {
          const a0 = Math.PI + (i / SEGS) * Math.PI;
          const a1 = Math.PI + ((i + 0.85) / SEGS) * Math.PI;
          const r0 = 44, r1 = 56;
          const cx = 60, cy = 56;
          const x00 = cx + r0 * Math.cos(a0), y00 = cy + r0 * Math.sin(a0);
          const x01 = cx + r1 * Math.cos(a0), y01 = cy + r1 * Math.sin(a0);
          const x10 = cx + r0 * Math.cos(a1), y10 = cy + r0 * Math.sin(a1);
          const x11 = cx + r1 * Math.cos(a1), y11 = cy + r1 * Math.sin(a1);
          const active = i < filled;
          return (
            <path key={i}
              d={`M ${x00} ${y00} L ${x01} ${y01} L ${x11} ${y11} L ${x10} ${y10} Z`}
              fill={active ? color : theme.ruleSoft}
              opacity={active ? (0.55 + 0.4 * (i / SEGS)) : 0.5}
            />
          );
        })}
        {/* Needle */}
        {(() => {
          const a = Math.PI + pct * Math.PI;
          const x = 60 + 40 * Math.cos(a), y = 56 + 40 * Math.sin(a);
          return <line x1="60" y1="56" x2={x} y2={y} stroke={theme.ink} strokeWidth="1.4" />;
        })()}
        <circle cx="60" cy="56" r="2.5" fill={theme.ink} />
      </svg>

      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <span style={{
          fontFamily: theme.font.display, fontSize: 22, fontWeight: 500,
          color: theme.ink, letterSpacing: "-0.01em", textTransform: "uppercase",
        }}>{state}</span>
      </div>

      {/* Sparkline if history passed */}
      {sparkData && sparkData.length > 1 && (
        <svg viewBox="0 0 120 18" width="100%" height="18" style={{ display: "block" }}>
          {(() => {
            const max = 5, min = 0;
            const path = sparkData.map((s, i) => {
              const x = (i / (sparkData.length - 1)) * 120;
              const y = 16 - ((s - min) / (max - min)) * 14;
              return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
            }).join(" ");
            return <>
              <path d={path} fill="none" stroke={color} strokeWidth="1.2" />
              {sparkData.map((s, i) => {
                const x = (i / (sparkData.length - 1)) * 120;
                const y = 16 - ((s - min) / (max - min)) * 14;
                return <circle key={i} cx={x} cy={y} r="1.2" fill={color} />;
              })}
            </>;
          })()}
        </svg>
      )}
    </div>
  );
};

const ClocksStrip = ({ brief, history, theme }) => {
  return (
    <div className="mw-clocks-strip">
      {window.CLOCK_ORDER.map(k => {
        const spark = history.map(b => ClockScore(b.clocks[k]));
        return (
          <ClockDial
            key={k}
            clockKey={k}
            state={brief.clocks[k]}
            trajectory={brief.trajectory[k]}
            theme={theme}
            sparkData={spark}
          />
        );
      })}
    </div>
  );
};

Object.assign(window, { ClockDial, ClocksStrip, ClockScore });
