// The "Today" brief view — hero + body.

const Masthead = ({ theme, brief, day, totalDays, onNav, view }) => {
  return (
    <div style={{ marginBottom: 8 }}>
      {/* Masthead bar */}
      <div style={{
        display: "flex", alignItems: "center", gap: 14,
        borderBottom: `3px double ${theme.rule}`,
        paddingBottom: 8, marginBottom: 14,
      }}>
        <div style={{
          fontFamily: theme.font.display,
          fontSize: 32, fontWeight: 600, letterSpacing: "-0.02em",
          color: theme.ink,
        }}>
          <span style={{ fontStyle: "italic" }}>ME</span> WAR — Intel Brief
        </div>
        <div style={{
          fontFamily: theme.font.mono, fontSize: 10, color: theme.inkMute,
          letterSpacing: "0.12em", textTransform: "uppercase",
          borderLeft: `1px solid ${theme.ruleSoft}`, paddingLeft: 12,
        }}>
          Twice daily · Asia/Taipei 09:00 · 18:00<br/>
          Autonomous research · Git-audited · 3D @8gara8
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
          <window.Stamp text="Unclassified · OSINT" theme={theme} angle={-3} />
        </div>
      </div>

      {/* Sub-bar: nav */}
      <div style={{
        display: "flex", alignItems: "center", gap: 0,
        borderBottom: `1px solid ${theme.ruleSoft}`,
        fontFamily: theme.font.sans, fontSize: 12,
        letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600,
      }}>
        {[
          ["today","Today"], ["archive","Archive"], ["timeline","Escalation"],
          ["casualties","Casualties"], ["clocks","Clocks"], ["about","About"],
        ].map(([k,l]) => (
          <NavTab key={k} id={k} label={l} theme={theme} onNav={onNav} view={view} />
        ))}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "baseline", gap: 10, padding: "8px 0" }}>
          <window.Num theme={theme}>{brief.date}</window.Num>
          <span style={{ color: theme.inkMute, fontFamily: theme.font.mono, fontSize: 11 }}>·</span>
          <span style={{ fontFamily: theme.font.mono, fontSize: 11, color: theme.inkMute }}>
            DAY {String(day).padStart(3,"0")} / {String(totalDays).padStart(3,"0")}
          </span>
        </div>
      </div>
    </div>
  );
};

const NavTab = ({ id, label, theme, onNav, view }) => {
  const active = view === id;
  return (
    <button
      onClick={() => onNav(id)}
      style={{
        background: active ? theme.ink : "transparent",
        color: active ? theme.bg : theme.ink,
        border: "none", borderRight: `1px solid ${theme.ruleSoft}`,
        padding: "10px 16px", cursor: "pointer",
        fontFamily: "inherit", fontSize: "inherit",
        letterSpacing: "inherit", textTransform: "inherit", fontWeight: "inherit",
      }}
    >{label}</button>
  );
};

const TodayView = ({ brief, history, theme, onNav, totalDays }) => {
  return (
    <div>
      {/* Dateline / title */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "end", marginBottom: 18 }}>
        <div>
          <div style={{
            fontFamily: theme.font.mono, fontSize: 10, letterSpacing: "0.2em",
            textTransform: "uppercase", color: theme.accent, marginBottom: 8,
          }}>
            ▮ Daily Brief · Day {String(brief.day).padStart(3,"0")} · {brief.weekday} {brief.date}
          </div>
          <h1 style={{
            fontFamily: theme.font.display,
            fontSize: 52, lineHeight: 1.02, letterSpacing: "-0.025em",
            fontWeight: 600, color: theme.ink, margin: 0,
            textWrap: "balance",
          }}>
            {brief.title}
          </h1>
        </div>
        <div style={{ textAlign: "right", minWidth: 220 }}>
          <div style={{
            fontFamily: theme.font.mono, fontSize: 10, color: theme.inkMute,
            letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 6,
          }}>Headline indicators</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
            <IndicatorRow label="Direction" value={brief.direction} theme={theme} />
            <IndicatorRow label="7-day risk" value={brief.risk7d} theme={theme} />
            <IndicatorRow label="Spillover" value={brief.spillover} theme={theme} />
            <IndicatorRow label="Ceasefire / 30d" value={`${brief.ceasefire30d}%`} theme={theme} raw />
          </div>
        </div>
      </div>

      {/* 6-clock strip */}
      <div style={{ marginTop: 10 }}>
        <window.SectionRule theme={theme} number={1} label="Multi-clock state" right="6 indicators" />
        <window.ClocksStrip brief={brief} history={history} theme={theme} />
      </div>

      {/* Key developments + Exec summary layout */}
      <div style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: 40, marginTop: 8 }}>
        <div>
          <window.SectionRule theme={theme} number={2} label="Executive summary" right={`${brief.exec ? brief.exec.split(/\s+/).length + " words" : "—"}`} />
          <p style={{
            fontFamily: theme.font.display,
            fontSize: 18, lineHeight: 1.52, color: theme.ink,
            margin: 0, textWrap: "pretty",
            columnCount: 1,
          }}>
            <span style={{
              float: "left", fontSize: 58, lineHeight: 0.9, fontWeight: 600,
              marginRight: 8, marginTop: 6, color: theme.accent,
            }}>{brief.exec?.[0] || "O"}</span>
            {brief.exec?.slice(1) || ""}
          </p>
        </div>
        <div>
          <window.SectionRule theme={theme} number={3} label="Key developments" right={`${brief.headlines.length} items`} />
          <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {brief.headlines.map((h,i) => (
              <li key={i} style={{
                display: "grid", gridTemplateColumns: "auto 1fr",
                gap: 12, padding: "10px 0",
                borderBottom: `1px solid ${theme.ruleSoft}`,
              }}>
                <span style={{
                  fontFamily: theme.font.mono, fontSize: 11, color: theme.accent,
                  letterSpacing: "0.08em",
                }}>{String(i+1).padStart(2,"0")}</span>
                <span style={{
                  fontFamily: theme.font.sans, fontSize: 14, lineHeight: 1.45,
                  color: theme.ink,
                }}>{h}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Events table */}
      {brief.events && (
        <div>
          <window.SectionRule theme={theme} number={4} label="Key events (timeline)" right={`${brief.events.length} entries`} />
          <EventsTable events={brief.events} theme={theme} />
        </div>
      )}

      {/* Casualties */}
      <div>
        <window.SectionRule theme={theme} number={5} label="Casualties snapshot" right="Cumulative · ±24–48h Δ" />
        <CasualtiesBlock brief={brief} history={history} theme={theme} />
      </div>

      {/* Strategic Implications */}
      {brief.implications && (
        <div>
          <window.SectionRule theme={theme} number={6} label="Strategic implications" right={`${brief.implications.length} threads`} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 28 }}>
            {brief.implications.map((im, i) => (
              <div key={i} style={{ borderTop: `2px solid ${theme.ink}`, paddingTop: 12 }}>
                <div style={{
                  fontFamily: theme.font.mono, fontSize: 10, letterSpacing: "0.16em",
                  color: theme.accent, marginBottom: 6, textTransform: "uppercase",
                }}>Implication {String(i+1).padStart(2,"0")}</div>
                <h3 style={{
                  fontFamily: theme.font.display, fontSize: 22, lineHeight: 1.15,
                  margin: "0 0 8px", fontWeight: 600, color: theme.ink,
                  textWrap: "balance",
                }}>{im.title}</h3>
                <p style={{
                  fontFamily: theme.font.sans, fontSize: 13.5, lineHeight: 1.55,
                  color: theme.inkSoft, margin: 0,
                }}>{im.body}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Flash note + sources */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginTop: 12 }}>
        {brief.flash && (
          <div>
            <window.SectionRule theme={theme} number={7} label="Evening flash (18:00 TPE)" right="+9h delta" />
            <div style={{
              border: `1px solid ${theme.ruleSoft}`,
              borderLeft: `3px solid ${theme.accent}`,
              background: theme.cardBg, padding: 14,
              fontFamily: theme.font.display, fontSize: 15, lineHeight: 1.55,
              color: theme.ink,
            }}>
              {brief.flash}
            </div>
          </div>
        )}
        {brief.sources && (
          <div>
            <window.SectionRule theme={theme} number={8} label="Sources" right={`${brief.sources.length} citations`} />
            <ol style={{ columnCount: 1, padding: 0, margin: 0, listStyle: "none" }}>
              {brief.sources.map((s, i) => (
                <li key={i} style={{
                  display: "grid", gridTemplateColumns: "auto 1fr",
                  gap: 10, padding: "6px 0",
                  borderBottom: `1px dotted ${theme.ruleSoft}`,
                  fontFamily: theme.font.mono, fontSize: 11,
                  color: theme.inkSoft,
                }}>
                  <span style={{ color: theme.inkMute }}>[{String(i+1).padStart(2,"0")}]</span>
                  <span>
                    <span style={{ color: theme.ink }}>{s.name}</span>
                    <br/>
                    <span style={{ color: theme.inkMute }}>↳ {s.url}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

const IndicatorRow = ({ label, value, theme, raw }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <span style={{
      fontFamily: theme.font.mono, fontSize: 10, color: theme.inkMute,
      letterSpacing: "0.12em", textTransform: "uppercase",
    }}>{label}</span>
    {raw
      ? <window.Num theme={theme}>{value}</window.Num>
      : <window.RiskPill value={value} theme={theme} />}
  </div>
);

const EventsTable = ({ events, theme }) => {
  return (
    <div style={{ border: `1px solid ${theme.ruleSoft}`, background: theme.cardBg }}>
      <table style={{
        width: "100%", borderCollapse: "collapse",
        fontFamily: theme.font.sans, fontSize: 13,
      }}>
        <thead>
          <tr style={{
            borderBottom: `2px solid ${theme.ink}`,
            fontFamily: theme.font.mono, fontSize: 10,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: theme.inkMute,
          }}>
            <th style={{ textAlign: "left", padding: "8px 10px", width: 36 }}>#</th>
            <th style={{ textAlign: "left", padding: "8px 10px", width: 110 }}>Dir.</th>
            <th style={{ textAlign: "left", padding: "8px 10px", width: 90 }}>Impt.</th>
            <th style={{ textAlign: "left", padding: "8px 10px", width: 120 }}>Source</th>
            <th style={{ textAlign: "left", padding: "8px 10px" }}>Event</th>
            <th style={{ textAlign: "left", padding: "8px 10px" }}>Summary</th>
            <th style={{ textAlign: "left", padding: "8px 10px" }}>Impact</th>
          </tr>
        </thead>
        <tbody>
          {events.map(e => (
            <tr key={e.id} style={{ borderBottom: `1px solid ${theme.ruleSoft}`, verticalAlign: "top" }}>
              <td style={{ padding: "10px", fontFamily: theme.font.mono, color: theme.inkMute }}>{String(e.id).padStart(2,"0")}</td>
              <td style={{ padding: "10px" }}><window.RiskPill value={e.direction} theme={theme} /></td>
              <td style={{ padding: "10px", fontFamily: theme.font.mono, fontSize: 11,
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: e.importance === "pivotal" ? theme.accent : theme.inkSoft,
                fontWeight: e.importance === "pivotal" ? 700 : 400,
              }}>{e.importance}</td>
              <td style={{ padding: "10px", color: theme.inkMute, fontStyle: "italic" }}>{e.source}</td>
              <td style={{ padding: "10px", color: theme.ink, fontWeight: 500 }}>{e.event}</td>
              <td style={{ padding: "10px", color: theme.inkSoft, lineHeight: 1.5 }}>{e.summary}</td>
              <td style={{ padding: "10px", color: theme.inkSoft, lineHeight: 1.5 }}>{e.impact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CasualtiesBlock = ({ brief, history, theme }) => {
  const actors = [
    { key:"us",     label:"United States",    color: theme.ink },
    { key:"israel", label:"Israel",           color: theme.accent },
    { key:"iran",   label:"Iran & Proxies",   color: theme.accentAmber },
    { key:"other",  label:"Other",            color: theme.accentGreen },
  ];
  // Delta 24–48h: current - previous brief
  const prev = history[history.length - 2] || brief;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12 }}>
      {actors.map(a => {
        const [k, w] = brief.casualties[a.key];
        const [pk, pw] = prev.casualties[a.key];
        const dk = k - pk, dw = w - pw;
        return (
          <div key={a.key} style={{
            background: theme.cardBg,
            border: `1px solid ${theme.ruleSoft}`,
            borderTop: `3px solid ${a.color}`,
            padding: "14px 14px 12px",
          }}>
            <div style={{
              fontFamily: theme.font.mono, fontSize: 10, letterSpacing: "0.14em",
              textTransform: "uppercase", color: theme.inkMute, marginBottom: 8,
            }}>{a.label}</div>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "2px 10px", alignItems: "baseline" }}>
              <span style={{ fontFamily: theme.font.mono, fontSize: 10, color: theme.inkMute, letterSpacing: "0.08em", textTransform: "uppercase" }}>KIA</span>
              <span style={{ fontFamily: theme.font.display, fontSize: 30, fontWeight: 600, color: theme.ink, letterSpacing: "-0.02em" }}>
                <window.Num theme={theme}>{k.toLocaleString()}</window.Num>
                {dk > 0 && <span style={{ fontFamily: theme.font.mono, fontSize: 12, color: theme.accent, marginLeft: 6 }}>+{dk}</span>}
              </span>
              <span style={{ fontFamily: theme.font.mono, fontSize: 10, color: theme.inkMute, letterSpacing: "0.08em", textTransform: "uppercase" }}>WIA</span>
              <span style={{ fontFamily: theme.font.display, fontSize: 22, fontWeight: 500, color: theme.inkSoft }}>
                <window.Num theme={theme} dim>{w.toLocaleString()}</window.Num>
                {dw > 0 && <span style={{ fontFamily: theme.font.mono, fontSize: 11, color: theme.accentAmber, marginLeft: 6 }}>+{dw}</span>}
              </span>
            </div>
            {/* Mini bar showing proportion of KIA run */}
            <Sparkbar
              values={history.map(h => h.casualties[a.key][0])}
              color={a.color}
              theme={theme}
            />
          </div>
        );
      })}
    </div>
  );
};

const Sparkbar = ({ values, color, theme }) => {
  const max = Math.max(...values, 1);
  return (
    <svg viewBox={`0 0 ${values.length * 10} 24`} width="100%" height="24" style={{ marginTop: 10, display: "block" }}>
      {values.map((v, i) => {
        const h = Math.max(1, (v / max) * 22);
        return (
          <rect key={i}
            x={i * 10 + 1} y={24 - h}
            width={7} height={h}
            fill={color} opacity={0.35 + 0.6 * (i / Math.max(1, values.length - 1))}
          />
        );
      })}
    </svg>
  );
};

Object.assign(window, { TodayView, Masthead, NavTab, EventsTable, CasualtiesBlock });
