// Design tokens + shared UI primitives (themed).
// Three themes: paper (default), classified (dark), terminal (mono).

const THEMES = {
  paper: {
    label: "Paper",
    bg: "#F3EEE3",
    bgDeep: "#EAE2D0",
    ink: "#14161A",
    inkSoft: "#3B3E45",
    inkMute: "#6B6A62",
    rule: "#14161A",
    ruleSoft: "#C9BFA8",
    accent: "#B33A2E",          // classified red
    accentAmber: "#C48416",
    accentGreen: "#3E6B3A",
    badgeEscBg: "#F1D9D5",
    badgeMixBg: "#F3E3C6",
    badgeDeBg:  "#D9E3D3",
    cardBg: "#FBF8F0",
    stamp: "#B33A2E",
    font: {
      display: "'Newsreader', 'Source Serif Pro', Georgia, serif",
      sans: "'IBM Plex Sans', 'Söhne', system-ui, sans-serif",
      mono: "'IBM Plex Mono', 'JetBrains Mono', monospace",
    },
  },
  classified: {
    label: "Classified",
    bg: "#0E0F12",
    bgDeep: "#17181C",
    ink: "#E8E6DF",
    inkSoft: "#B9B6AC",
    inkMute: "#7C7A72",
    rule: "#E8E6DF",
    ruleSoft: "#2A2B30",
    accent: "#E04A3C",
    accentAmber: "#D99530",
    accentGreen: "#6BA366",
    badgeEscBg: "#3A1A17",
    badgeMixBg: "#3A2B14",
    badgeDeBg:  "#1C2B1A",
    cardBg: "#15171B",
    stamp: "#E04A3C",
    font: {
      display: "'Newsreader', 'Source Serif Pro', Georgia, serif",
      sans: "'IBM Plex Sans', 'Söhne', system-ui, sans-serif",
      mono: "'IBM Plex Mono', 'JetBrains Mono', monospace",
    },
  },
  terminal: {
    label: "Terminal",
    bg: "#0A0A0A",
    bgDeep: "#121212",
    ink: "#D8FF9B",
    inkSoft: "#9BC96D",
    inkMute: "#4F6A3B",
    rule: "#3E5A2A",
    ruleSoft: "#1F2D17",
    accent: "#FF5D4A",
    accentAmber: "#FFC14A",
    accentGreen: "#9BFF7A",
    badgeEscBg: "#2A1410",
    badgeMixBg: "#2A2310",
    badgeDeBg:  "#14240E",
    cardBg: "#101610",
    stamp: "#FF5D4A",
    font: {
      display: "'IBM Plex Mono', monospace",
      sans: "'IBM Plex Mono', monospace",
      mono: "'IBM Plex Mono', monospace",
    },
  },
};

// State -> color token (accent kind)
function stateTone(state) {
  switch (state) {
    case "critical": return "esc";
    case "low": return "esc";
    case "degraded": return "mix";
    case "none": return "neutral";
    case "moderate": return "mix";
    case "high": return "ok";
    case "ample": return "ok";
    default: return "neutral";
  }
}

// For clocks: higher score = better. Inverts meaning for some clocks.
// political_will, active_deadlines (high/critical = bad for peace)
// energy_infrastructure, interceptor_capacity, negotiation_capacity, oil_reserves (high = good)
const CLOCK_POLARITY = {
  political_will: "invert",         // high = war keeps going
  active_deadlines: "invert",       // high = ticking ultimatums
  energy_infrastructure: "normal",
  interceptor_capacity: "normal",
  negotiation_capacity: "normal",
  oil_reserves: "normal",
};

function clockToneFor(key, state) {
  const polarity = CLOCK_POLARITY[key];
  const base = stateTone(state);
  if (polarity === "invert") {
    if (base === "ok") return "esc";
    if (base === "esc") return "ok";
  }
  return base;
}

function toneColor(theme, tone) {
  switch (tone) {
    case "esc": return theme.accent;
    case "mix": return theme.accentAmber;
    case "ok":  return theme.accentGreen;
    default:    return theme.inkMute;
  }
}

function toneBadgeBg(theme, tone) {
  switch (tone) {
    case "esc": return theme.badgeEscBg;
    case "mix": return theme.badgeMixBg;
    case "ok":  return theme.badgeDeBg;
    default:    return "transparent";
  }
}

const RiskPill = ({ value, theme }) => {
  const tone = ["critical","extreme","escalating"].includes(value) ? "esc"
    : ["conditional","mixed"].includes(value) ? "mix"
    : ["contained","low","de-escalating"].includes(value) ? "ok"
    : "neutral";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "3px 8px",
      fontFamily: theme.font.mono, fontSize: 11,
      letterSpacing: "0.08em", textTransform: "uppercase",
      color: toneColor(theme, tone),
      background: toneBadgeBg(theme, tone),
      border: `1px solid ${toneColor(theme, tone)}40`,
      borderRadius: 0,
    }}>
      <span style={{ width: 6, height: 6, background: toneColor(theme, tone), display: "inline-block" }} />
      {value}
    </span>
  );
};

const SectionRule = ({ theme, label, number, right }) => (
  <div style={{
    display: "flex", alignItems: "baseline", gap: 12,
    borderTop: `1px solid ${theme.rule}`,
    paddingTop: 8, marginTop: 28, marginBottom: 16,
  }}>
    {number != null && (
      <span style={{
        fontFamily: theme.font.mono, fontSize: 10, letterSpacing: "0.14em",
        color: theme.inkMute,
      }}>§{String(number).padStart(2,"0")}</span>
    )}
    <span style={{
      fontFamily: theme.font.sans, fontSize: 11, letterSpacing: "0.22em",
      textTransform: "uppercase", fontWeight: 600, color: theme.ink,
    }}>{label}</span>
    {right && <span style={{ marginLeft: "auto",
      fontFamily: theme.font.mono, fontSize: 10, color: theme.inkMute,
      letterSpacing: "0.1em", textTransform: "uppercase" }}>{right}</span>}
  </div>
);

// Monospaced number with consistent width
const Num = ({ children, theme, dim }) => (
  <span style={{
    fontFamily: theme.font.mono,
    fontVariantNumeric: "tabular-nums",
    color: dim ? theme.inkMute : theme.ink,
  }}>{children}</span>
);

const Stamp = ({ text, theme, angle = -6 }) => (
  <span style={{
    display: "inline-block",
    transform: `rotate(${angle}deg)`,
    border: `2px solid ${theme.stamp}`,
    color: theme.stamp,
    padding: "4px 10px",
    fontFamily: theme.font.mono,
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    opacity: 0.9,
  }}>{text}</span>
);

// Trajectory arrow glyph
function trajArrow(t) {
  switch (t) {
    case "improving": return "↗";
    case "worsening": return "↘";
    case "draining":  return "↘";
    case "stable":    return "→";
    default:          return "·";
  }
}

Object.assign(window, {
  THEMES, stateTone, CLOCK_POLARITY, clockToneFor, toneColor, toneBadgeBg,
  RiskPill, SectionRule, Num, Stamp, trajArrow,
});
