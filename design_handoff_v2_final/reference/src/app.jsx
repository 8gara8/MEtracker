// App shell + Tweaks panel. Wires everything together.

const { useState, useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "paper",
  "density": "comfortable",
  "day": 14,
  "showStamp": true
}/*EDITMODE-END*/;

const App = () => {
  const persisted = (() => {
    try {
      return JSON.parse(localStorage.getItem("mewar:state") || "{}");
    } catch { return {}; }
  })();
  const [themeKey, setThemeKey] = useState(persisted.theme || TWEAK_DEFAULTS.theme);
  const [density, setDensity]   = useState(persisted.density || TWEAK_DEFAULTS.density);
  const [day, setDay]           = useState(persisted.day ?? TWEAK_DEFAULTS.day);
  const [view, setView]         = useState(persisted.view || "today");
  const [tweaksOpen, setTweaksOpen] = useState(false);
  const [tweaksAvailable, setTweaksAvailable] = useState(false);

  // Persist
  useEffect(() => {
    localStorage.setItem("mewar:state", JSON.stringify({ theme: themeKey, density, day, view }));
    window.__view = view;
  }, [themeKey, density, day, view]);

  // Edit-mode protocol
  useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === "__activate_edit_mode") setTweaksOpen(true);
      if (d.type === "__deactivate_edit_mode") setTweaksOpen(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    setTweaksAvailable(true);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const setTweak = (patch) => {
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*");
  };

  const theme = window.THEMES[themeKey];
  const briefs = window.BRIEFS;
  const brief = briefs.find(b => b.day === day) || briefs[briefs.length - 1];
  const historyUpTo = briefs.filter(b => b.day <= brief.day);

  const contentPad = density === "compact" ? "18px 28px" : density === "roomy" ? "36px 56px" : "28px 44px";
  const maxW = density === "compact" ? 1200 : density === "roomy" ? 1400 : 1280;

  return (
    <div style={{
      minHeight: "100vh",
      background: theme.bg,
      color: theme.ink,
      fontFamily: theme.font.sans,
      // Subtle paper grain via radial gradients only on paper theme
      backgroundImage: themeKey === "paper"
        ? `radial-gradient(circle at 20% 10%, ${theme.bgDeep}22 0%, transparent 40%), radial-gradient(circle at 80% 90%, ${theme.bgDeep}22 0%, transparent 50%)`
        : themeKey === "terminal"
        ? "repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 3px)"
        : "none",
    }}>
      <div data-screen-label={`View ${view}`} style={{ maxWidth: maxW, margin: "0 auto", padding: contentPad }}>
        <window.Masthead theme={theme} brief={brief} day={brief.day} totalDays={briefs.length} onNav={setView} view={view} />

        {view === "today" && (
          <window.TodayView brief={brief} history={historyUpTo} theme={theme} onNav={setView} totalDays={briefs.length} />
        )}
        {view === "archive" && (
          <window.ArchiveView briefs={briefs} theme={theme} onNav={setView} currentDay={day} setDay={setDay} />
        )}
        {view === "timeline" && (
          <window.TimelineView briefs={briefs} theme={theme} onNav={setView} setDay={setDay} />
        )}
        {view === "casualties" && (
          <window.CasualtiesView briefs={briefs} theme={theme} />
        )}
        {view === "clocks" && (
          <window.ClocksDashboardView briefs={briefs} theme={theme} />
        )}
        {view === "about" && (
          <window.AboutView theme={theme} />
        )}

        {/* Footer */}
        <div style={{
          marginTop: 48, paddingTop: 16,
          borderTop: `1px solid ${theme.ruleSoft}`,
          display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap",
          fontFamily: theme.font.mono, fontSize: 10, letterSpacing: "0.12em",
          textTransform: "uppercase", color: theme.inkMute,
        }}>
          <span>© 2026 3D · @8gara8</span>
          <span>·</span>
          <span>Git audit trail: /content/briefs/</span>
          <span>·</span>
          <span>Next.js 15 · Vercel · MIT</span>
          <span style={{ marginLeft: "auto" }}>
            Brief timestamp: <window.Num theme={theme}>{brief.date}T01:00Z</window.Num>
          </span>
        </div>
      </div>

      {/* Day scrubber — persistent bottom bar */}
      <DayScrubber briefs={briefs} day={day} setDay={setDay} theme={theme} view={view} setView={setView} />

      {/* Tweaks panel */}
      {tweaksOpen && (
        <TweaksPanel
          themeKey={themeKey} setThemeKey={(v) => { setThemeKey(v); setTweak({ theme: v }); }}
          density={density} setDensity={(v) => { setDensity(v); setTweak({ density: v }); }}
          day={day} setDay={(v) => { setDay(v); setTweak({ day: v }); }}
          briefs={briefs} onClose={() => setTweaksOpen(false)}
        />
      )}
    </div>
  );
};

const DayScrubber = ({ briefs, day, setDay, theme, view, setView }) => {
  return (
    <div style={{
      position: "fixed", left: 0, right: 0, bottom: 0,
      background: theme.bgDeep, borderTop: `1px solid ${theme.rule}`,
      padding: "10px 20px", display: "flex", alignItems: "center", gap: 14,
      zIndex: 50, backdropFilter: "blur(4px)",
    }}>
      <span style={{ fontFamily: theme.font.mono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: theme.inkMute }}>
        Day scrubber
      </span>
      <div style={{ display: "flex", gap: 2, flex: 1, alignItems: "center" }}>
        {briefs.map(b => {
          const active = b.day === day;
          const color = b.direction === "escalating" ? theme.accent :
                        b.direction === "mixed" ? theme.accentAmber : theme.accentGreen;
          return (
            <button key={b.day}
              onClick={() => { setDay(b.day); if (view !== "today") setView("today"); }}
              title={`Day ${b.day} — ${b.date} — ${b.title}`}
              style={{
                flex: 1, background: active ? color : theme.cardBg,
                border: `1px solid ${active ? color : theme.ruleSoft}`,
                height: active ? 36 : 24, cursor: "pointer",
                transition: "height 0.12s",
                position: "relative",
              }}>
              <span style={{
                position: "absolute", inset: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: theme.font.mono, fontSize: 10, color: active ? theme.bg : theme.inkMute,
                fontWeight: active ? 700 : 400,
              }}>{b.day}</span>
            </button>
          );
        })}
      </div>
      <span style={{ fontFamily: theme.font.mono, fontSize: 11, color: theme.ink, minWidth: 130, textAlign: "right" }}>
        Day {String(day).padStart(3,"0")} · {briefs.find(b => b.day === day)?.date}
      </span>
    </div>
  );
};

const TweaksPanel = ({ themeKey, setThemeKey, density, setDensity, day, setDay, briefs, onClose }) => {
  const theme = window.THEMES[themeKey];
  return (
    <div style={{
      position: "fixed", top: 20, right: 20, width: 300, zIndex: 100,
      background: theme.cardBg, border: `1px solid ${theme.rule}`,
      boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
      fontFamily: theme.font.sans, color: theme.ink,
    }}>
      <div style={{
        padding: "10px 14px", borderBottom: `1px solid ${theme.rule}`,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: theme.bgDeep,
      }}>
        <span style={{ fontFamily: theme.font.mono, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase" }}>
          Tweaks
        </span>
        <button onClick={onClose} style={{
          background: "none", border: "none", color: theme.inkMute,
          cursor: "pointer", fontFamily: theme.font.mono, fontSize: 14,
        }}>×</button>
      </div>

      <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 16 }}>
        <TweakGroup label="Theme" theme={theme}>
          {Object.entries(window.THEMES).map(([k, t]) => (
            <TweakOption key={k} active={themeKey === k} onClick={() => setThemeKey(k)} theme={theme}>
              <span style={{
                display: "inline-block", width: 10, height: 10,
                background: t.accent, marginRight: 8,
              }} />{t.label}
            </TweakOption>
          ))}
        </TweakGroup>

        <TweakGroup label="Density" theme={theme}>
          {["compact","comfortable","roomy"].map(d => (
            <TweakOption key={d} active={density === d} onClick={() => setDensity(d)} theme={theme}>
              {d}
            </TweakOption>
          ))}
        </TweakGroup>

        <TweakGroup label={`Day (${day})`} theme={theme}>
          <input type="range" min={1} max={briefs.length} value={day}
            onChange={e => setDay(+e.target.value)}
            style={{ width: "100%", accentColor: theme.accent }}
          />
        </TweakGroup>
      </div>
    </div>
  );
};

const TweakGroup = ({ label, theme, children }) => (
  <div>
    <div style={{
      fontFamily: theme.font.mono, fontSize: 10, letterSpacing: "0.14em",
      textTransform: "uppercase", color: theme.inkMute, marginBottom: 6,
    }}>{label}</div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{children}</div>
  </div>
);

const TweakOption = ({ active, onClick, children, theme }) => (
  <button onClick={onClick} style={{
    background: active ? theme.ink : "transparent",
    color: active ? theme.bg : theme.ink,
    border: `1px solid ${active ? theme.ink : theme.ruleSoft}`,
    padding: "6px 10px", cursor: "pointer",
    fontFamily: theme.font.mono, fontSize: 11,
    letterSpacing: "0.08em", textTransform: "uppercase",
  }}>{children}</button>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
