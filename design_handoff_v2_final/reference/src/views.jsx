// Cross-brief views: Archive, Escalation Timeline, Casualties, Clocks Dashboard, About.

const ArchiveView = ({ briefs, theme, onNav, currentDay, setDay }) => {
  const sorted = [...briefs].sort((a,b) => b.day - a.day);
  return (
    <div>
      <window.SectionRule theme={theme} number={1} label="Archive" right={`${briefs.length} briefs`} />
      <div style={{
        fontFamily: theme.font.sans, fontSize: 13, color: theme.inkSoft,
        marginBottom: 18, maxWidth: 640, lineHeight: 1.55,
      }}>
        One MDX file per day, committed to <span style={{ fontFamily: theme.font.mono, color: theme.ink }}>content/briefs/</span> by
        the morning Routine at 09:00 Asia/Taipei (01:00 UTC). Flash notes from the 18:00 run are folded into the next morning's brief.
      </div>
      <div style={{ border: `1px solid ${theme.ruleSoft}` }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "70px 100px 1fr 120px 120px 100px",
          padding: "8px 14px",
          borderBottom: `2px solid ${theme.ink}`,
          fontFamily: theme.font.mono, fontSize: 10,
          letterSpacing: "0.14em", textTransform: "uppercase", color: theme.inkMute,
          background: theme.cardBg,
        }}>
          <div>Day</div><div>Date</div><div>Title</div>
          <div>Direction</div><div>Risk / 7d</div><div>C/F 30d</div>
        </div>
        {sorted.map(b => {
          const active = b.day === currentDay;
          return (
            <button key={b.day}
              onClick={() => { setDay(b.day); onNav("today"); }}
              style={{
                display: "grid",
                gridTemplateColumns: "70px 100px 1fr 120px 120px 100px",
                padding: "12px 14px", alignItems: "baseline", gap: 8,
                background: active ? theme.cardBg : "transparent",
                borderBottom: `1px solid ${theme.ruleSoft}`,
                borderLeft: active ? `3px solid ${theme.accent}` : "3px solid transparent",
                width: "100%", textAlign: "left", cursor: "pointer",
                fontFamily: "inherit", color: theme.ink,
              }}>
              <span style={{ fontFamily: theme.font.mono, fontSize: 13, color: theme.accent }}>
                {String(b.day).padStart(3,"0")}
              </span>
              <span style={{ fontFamily: theme.font.mono, fontSize: 12, color: theme.inkSoft }}>
                {b.date}
              </span>
              <span style={{ fontFamily: theme.font.display, fontSize: 16, lineHeight: 1.3, fontWeight: 500 }}>
                {b.title}
              </span>
              <span><window.RiskPill value={b.direction} theme={theme} /></span>
              <span><window.RiskPill value={b.risk7d} theme={theme} /></span>
              <span style={{ fontFamily: theme.font.mono, fontSize: 13, color: theme.inkSoft }}>{b.ceasefire30d}%</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const TimelineView = ({ briefs, theme, onNav, setDay }) => {
  const W = 1000, H = 260, pad = { l: 50, r: 24, t: 30, b: 40 };
  const iw = W - pad.l - pad.r, ih = H - pad.t - pad.b;
  const xs = (i) => pad.l + (i / Math.max(1, briefs.length - 1)) * iw;
  const ys = (score) => pad.t + ih - ((score + 1) / 2) * ih; // dir score -1..1 -> ih..0

  const points = briefs.map((b, i) => ({ x: xs(i), y: ys(window.DIR_SCORE[b.direction]), b }));

  return (
    <div>
      <window.SectionRule theme={theme} number={1} label="Escalation timeline" right="Direction by day" />
      <div style={{ fontFamily: theme.font.sans, fontSize: 13, color: theme.inkSoft, marginBottom: 14, maxWidth: 640, lineHeight: 1.55 }}>
        The canonical analytical arc: each brief's <em>direction</em> assessment (escalating / mixed / de-escalating) plotted over the life of the conflict. Click any node to open that day's brief.
      </div>
      <div style={{ border: `1px solid ${theme.ruleSoft}`, background: theme.cardBg, padding: 14 }}>
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }}>
          {/* Bands */}
          {[
            { lo: 1, label: "ESCALATING", color: theme.accent, y: ys(1), h: ys(0) - ys(1) },
            { lo: 0, label: "MIXED",      color: theme.accentAmber, y: ys(0), h: ys(-1) - ys(0) + 1 },
          ].map((band, i) => (
            <g key={i}>
              <rect x={pad.l} y={band.y} width={iw} height={band.h} fill={band.color} opacity="0.06" />
              <text x={W - pad.r - 4} y={band.y + 14} textAnchor="end"
                style={{ fontFamily: theme.font.mono, fontSize: 9, letterSpacing: "0.14em", fill: band.color, opacity: 0.7 }}>
                {band.label}
              </text>
            </g>
          ))}
          <rect x={pad.l} y={ys(-1)} width={iw} height={ys(-1.5) - ys(-1)} fill={theme.accentGreen} opacity="0.06" />
          {/* Gridlines */}
          {[-1, 0, 1].map(s => (
            <line key={s} x1={pad.l} x2={W - pad.r} y1={ys(s)} y2={ys(s)}
              stroke={theme.ruleSoft} strokeDasharray="2 3" />
          ))}
          {/* Path */}
          <path d={points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ")}
            stroke={theme.ink} strokeWidth="1.5" fill="none" />
          {/* Points */}
          {points.map((p, i) => (
            <g key={i} style={{ cursor: "pointer" }} onClick={() => { setDay(p.b.day); onNav("today"); }}>
              <circle cx={p.x} cy={p.y} r="5"
                fill={p.b.direction === "escalating" ? theme.accent :
                      p.b.direction === "mixed" ? theme.accentAmber : theme.accentGreen}
                stroke={theme.ink} strokeWidth="1" />
              <text x={p.x} y={H - pad.b + 16} textAnchor="middle"
                style={{ fontFamily: theme.font.mono, fontSize: 10, fill: theme.inkMute }}>
                D{String(p.b.day).padStart(2,"0")}
              </text>
            </g>
          ))}
          {/* Y labels */}
          <text x={pad.l - 8} y={ys(1) + 3} textAnchor="end" style={{ fontFamily: theme.font.mono, fontSize: 10, fill: theme.inkMute }}>ESC</text>
          <text x={pad.l - 8} y={ys(0) + 3} textAnchor="end" style={{ fontFamily: theme.font.mono, fontSize: 10, fill: theme.inkMute }}>MIX</text>
          <text x={pad.l - 8} y={ys(-1) + 3} textAnchor="end" style={{ fontFamily: theme.font.mono, fontSize: 10, fill: theme.inkMute }}>DE</text>
        </svg>
      </div>

      {/* Risk / Ceasefire small multiples */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 20 }}>
        <MiniLine title="7-day risk (ordinal)" theme={theme} briefs={briefs}
          y={b => window.RISK_SCORE[b.risk7d]} max={4} labels={["low","cond","ext","crit"]} color={theme.accent} />
        <MiniLine title="Ceasefire probability / 30d (%)" theme={theme} briefs={briefs}
          y={b => b.ceasefire30d} max={100} labels={["0","25","50","75","100"]} color={theme.accentGreen} />
      </div>
    </div>
  );
};

const MiniLine = ({ title, theme, briefs, y, max, labels, color }) => {
  const W = 480, H = 160, pad = { l: 46, r: 14, t: 24, b: 28 };
  const iw = W - pad.l - pad.r, ih = H - pad.t - pad.b;
  const xs = i => pad.l + (i / Math.max(1, briefs.length - 1)) * iw;
  const ys = v => pad.t + ih - (v / max) * ih;
  const d = briefs.map((b, i) => `${i === 0 ? "M" : "L"} ${xs(i)} ${ys(y(b))}`).join(" ");
  return (
    <div style={{ border: `1px solid ${theme.ruleSoft}`, background: theme.cardBg, padding: "12px 14px" }}>
      <div style={{ fontFamily: theme.font.mono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: theme.inkMute, marginBottom: 6 }}>{title}</div>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%">
        {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
          <g key={i}>
            <line x1={pad.l} x2={W - pad.r} y1={pad.t + t * ih} y2={pad.t + t * ih}
              stroke={theme.ruleSoft} strokeDasharray="1 3" />
            <text x={pad.l - 6} y={pad.t + t * ih + 3} textAnchor="end"
              style={{ fontFamily: theme.font.mono, fontSize: 9, fill: theme.inkMute }}>
              {labels[4 - Math.round(t * 4)]}
            </text>
          </g>
        ))}
        <path d={d} fill="none" stroke={color} strokeWidth="1.6" />
        {briefs.map((b, i) => (
          <circle key={i} cx={xs(i)} cy={ys(y(b))} r="2.5" fill={color} />
        ))}
        {briefs.map((b, i) => i % 2 === 0 && (
          <text key={i} x={xs(i)} y={H - pad.b + 14} textAnchor="middle"
            style={{ fontFamily: theme.font.mono, fontSize: 9, fill: theme.inkMute }}>D{b.day}</text>
        ))}
      </svg>
    </div>
  );
};

const CasualtiesView = ({ briefs, theme }) => {
  const actors = [
    { key:"iran",   label:"Iran & Proxies",   color: theme.accentAmber },
    { key:"israel", label:"Israel",           color: theme.accent },
    { key:"other",  label:"Other",            color: theme.accentGreen },
    { key:"us",     label:"United States",    color: theme.ink },
  ];

  // Stacked area data
  const W = 1000, H = 320, pad = { l: 54, r: 24, t: 20, b: 40 };
  const iw = W - pad.l - pad.r, ih = H - pad.t - pad.b;
  const xs = i => pad.l + (i / Math.max(1, briefs.length - 1)) * iw;
  // Compute stacks
  const stacks = briefs.map((b, i) => {
    let acc = 0;
    const out = {};
    for (const a of actors) {
      const v = b.casualties[a.key][0];
      out[a.key] = { y0: acc, y1: acc + v };
      acc += v;
    }
    out._total = acc;
    return out;
  });
  const maxTotal = Math.max(...stacks.map(s => s._total));
  const ys = v => pad.t + ih - (v / maxTotal) * ih;

  return (
    <div>
      <window.SectionRule theme={theme} number={1} label="Cumulative casualties — KIA by actor" right={`max ${maxTotal.toLocaleString()}`} />
      <div style={{ fontFamily: theme.font.sans, fontSize: 13, color: theme.inkSoft, marginBottom: 14, maxWidth: 680, lineHeight: 1.55 }}>
        Stacked area. Figures are analytical estimates drawn from open-source reporting; casualty revisions are flagged in the frontmatter of individual briefs.
        No counts decrease without an explicit <span style={{ fontFamily: theme.font.mono, color: theme.ink }}>casualty_revision: true</span> acknowledgment.
      </div>
      <div style={{ border: `1px solid ${theme.ruleSoft}`, background: theme.cardBg, padding: 14 }}>
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }}>
          {[0, 0.25, 0.5, 0.75, 1].map((t, i) => {
            const v = Math.round(maxTotal * (1 - t));
            return (
              <g key={i}>
                <line x1={pad.l} x2={W - pad.r} y1={pad.t + t * ih} y2={pad.t + t * ih} stroke={theme.ruleSoft} strokeDasharray="1 3" />
                <text x={pad.l - 6} y={pad.t + t * ih + 3} textAnchor="end" style={{ fontFamily: theme.font.mono, fontSize: 9, fill: theme.inkMute }}>
                  {v.toLocaleString()}
                </text>
              </g>
            );
          })}
          {actors.map((a, ai) => {
            const pathTop = stacks.map((s, i) => `${i === 0 ? "M" : "L"} ${xs(i)} ${ys(s[a.key].y1)}`).join(" ");
            const pathBot = stacks.map((s, i) => ` L ${xs(stacks.length - 1 - i)} ${ys(stacks[stacks.length - 1 - i][a.key].y0)}`).join("");
            return <path key={a.key} d={pathTop + pathBot + " Z"} fill={a.color} opacity="0.5" stroke={a.color} strokeWidth="1" />;
          })}
          {briefs.map((b, i) => i % 2 === 0 && (
            <text key={i} x={xs(i)} y={H - pad.b + 14} textAnchor="middle" style={{ fontFamily: theme.font.mono, fontSize: 9, fill: theme.inkMute }}>D{b.day}</text>
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div style={{ display: "flex", gap: 20, marginTop: 14, flexWrap: "wrap" }}>
        {actors.map(a => {
          const latest = briefs[briefs.length - 1].casualties[a.key];
          return (
            <div key={a.key} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 14, height: 14, background: a.color, opacity: 0.65, border: `1px solid ${a.color}` }} />
              <span style={{ fontFamily: theme.font.sans, fontSize: 13, color: theme.ink }}>{a.label}</span>
              <span style={{ fontFamily: theme.font.mono, fontSize: 12, color: theme.inkMute }}>
                KIA {latest[0].toLocaleString()} · WIA {latest[1].toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>

      {/* Table of latest */}
      <window.SectionRule theme={theme} number={2} label="Latest brief snapshot" />
      <window.CasualtiesBlock brief={briefs[briefs.length - 1]} history={briefs} theme={theme} />
    </div>
  );
};

const ClocksDashboardView = ({ briefs, theme }) => {
  const latest = briefs[briefs.length - 1];
  return (
    <div>
      <window.SectionRule theme={theme} number={1} label="Multi-clock dashboard" right={`Day ${latest.day} state`} />
      <div style={{ fontFamily: theme.font.sans, fontSize: 13, color: theme.inkSoft, marginBottom: 14, maxWidth: 680, lineHeight: 1.55 }}>
        Six analytical clocks track the pressures that govern the war's pace. The pattern across dials matters more than any single one; see the sparkline for trajectory.
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {window.CLOCK_ORDER.map(k => {
          const spark = briefs.map(b => window.ClockScore(b.clocks[k]));
          return (
            <window.ClockDial
              key={k} clockKey={k}
              state={latest.clocks[k]}
              trajectory={latest.trajectory[k]}
              theme={theme}
              sparkData={spark}
            />
          );
        })}
      </div>

      {/* Heatmap history */}
      <window.SectionRule theme={theme} number={2} label="State history (heatmap)" right={`${briefs.length} days`} />
      <div style={{ border: `1px solid ${theme.ruleSoft}`, background: theme.cardBg, padding: 14, overflow: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ fontFamily: theme.font.mono, fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: theme.inkMute }}>
              <th style={{ textAlign: "left", padding: "4px 8px", minWidth: 180 }}>Clock</th>
              {briefs.map(b => (
                <th key={b.day} style={{ padding: "4px 2px", textAlign: "center", width: 34 }}>
                  D{String(b.day).padStart(2,"0")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {window.CLOCK_ORDER.map(k => (
              <tr key={k}>
                <td style={{
                  padding: "8px 8px", fontFamily: theme.font.sans, fontSize: 13,
                  color: theme.ink, borderRight: `1px solid ${theme.ruleSoft}`,
                }}>{window.CLOCK_LABELS[k]}</td>
                {briefs.map(b => {
                  const tone = window.clockToneFor(k, b.clocks[k]);
                  const c = window.toneColor(theme, tone);
                  const score = window.ClockScore(b.clocks[k]);
                  return (
                    <td key={b.day} title={`${b.clocks[k]} · ${b.trajectory[k]}`}
                      style={{
                        padding: 2, textAlign: "center",
                      }}>
                      <div style={{
                        background: c,
                        opacity: 0.25 + 0.65 * (score / 5),
                        height: 22, width: 28, margin: "0 auto",
                        border: `1px solid ${c}40`,
                      }} />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AboutView = ({ theme }) => (
  <div style={{ maxWidth: 780 }}>
    <window.SectionRule theme={theme} number={1} label="What this is" />
    <p style={{ fontFamily: theme.font.display, fontSize: 20, lineHeight: 1.5, color: theme.ink, margin: "0 0 18px" }}>
      A public twice-daily intelligence brief on the 2026 US–Israeli war on Iran (Operation Epic Fury), researched and written autonomously
      by two scheduled Routines and published to a Next.js site on Vercel. Git is the audit trail. Produced by 3D (<span style={{ fontFamily: theme.font.mono, color: theme.accent }}>@8gara8</span>).
    </p>

    <window.SectionRule theme={theme} number={2} label="Cadence" />
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
      <CadenceCard theme={theme} label="Morning — full brief" time="09:00 Asia/Taipei · 01:00 UTC"
        body="Full research, canonical MDX written, casualty figures updated, all six clocks reassessed, context.md rewritten in full. Minimum 8 cited sources unless quiet_day is flagged." />
      <CadenceCard theme={theme} label="Evening — flash" time="18:00 Asia/Taipei · 10:00 UTC"
        body="Targeted research on the ~9-hour window since the morning run. One time-stamped flash note appended to context.md. No casualty or clock revisions. Folded into the next morning's brief." />
    </div>

    <window.SectionRule theme={theme} number={3} label="What this is not" />
    <ul style={{ fontFamily: theme.font.sans, fontSize: 14, lineHeight: 1.65, color: theme.inkSoft, paddingLeft: 18 }}>
      <li>Not a news wire. Briefs are analytical, not real-time.</li>
      <li>Not authoritative casualty accounting. Figures are open-source estimates; revisions are explicit.</li>
      <li>Not predictive. Probability assessments are analytical priors, not forecasts.</li>
      <li>Not partisan. Every call that can cut either way is annotated in the rationale field.</li>
    </ul>

    <window.SectionRule theme={theme} number={4} label="Methodology" />
    <p style={{ fontFamily: theme.font.sans, fontSize: 14, lineHeight: 1.65, color: theme.inkSoft }}>
      Each brief is a single MDX file with a strictly-typed frontmatter schema and a sibling <span style={{ fontFamily: theme.font.mono, color: theme.ink }}>.data.ts</span> sidecar. GitHub Actions validate
      every PR: frontmatter schema, day continuity, date/filename match, casualty monotonicity, source count floor, URL liveness, and
      length sanity. Passing PRs auto-merge; failing PRs are flagged <span style={{ fontFamily: theme.font.mono, color: theme.accent }}>needs-review</span>.
    </p>

    <window.SectionRule theme={theme} number={5} label="Contact" />
    <p style={{ fontFamily: theme.font.sans, fontSize: 14, color: theme.inkSoft, lineHeight: 1.65 }}>
      Corrections, missing sources, methodology complaints → <span style={{ fontFamily: theme.font.mono, color: theme.ink }}>@8gara8</span> on X or the repo's
      <span style={{ fontFamily: theme.font.mono, color: theme.ink }}> Issues</span> tab. Code MIT; prose CC-BY 4.0.
    </p>
  </div>
);

const CadenceCard = ({ theme, label, time, body }) => (
  <div style={{ border: `1px solid ${theme.ruleSoft}`, background: theme.cardBg, padding: 16 }}>
    <div style={{ fontFamily: theme.font.mono, fontSize: 10, letterSpacing: "0.14em", color: theme.accent, textTransform: "uppercase", marginBottom: 6 }}>{label}</div>
    <div style={{ fontFamily: theme.font.display, fontSize: 22, fontWeight: 600, color: theme.ink, marginBottom: 10 }}>{time}</div>
    <p style={{ fontFamily: theme.font.sans, fontSize: 13.5, lineHeight: 1.55, color: theme.inkSoft, margin: 0 }}>{body}</p>
  </div>
);

Object.assign(window, { ArchiveView, TimelineView, CasualtiesView, ClocksDashboardView, AboutView, MiniLine });
