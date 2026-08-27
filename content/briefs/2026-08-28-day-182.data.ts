import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed, but the mix shifted: for the first time in weeks a real de-escalation landed on the energy and maritime axis even as the core standoff stayed unresolved. Iran and Oman announced a temporary joint Hormuz corridor and a joint mine-clearance project, Brent slid a fourth straight session toward $86, and the mediation channels warmed — Oman in Tehran, Pakistan reporting 'significant progress,' China urging implementation. It is not de-escalating cleanly — the US-Iran track stayed closed, Pezeshkian spoke 'from a position of strength,' the corridor pointedly excludes the US convoy, and Gaza slid back toward pre-ceasefire rules of engagement after Kushner's departure. It is not escalating — no shot was fired, the bank blow lapsed rather than landed, and the chokepoint risk eased. Mixed holds: the energy clock improves, the humanitarian clock worsens, and the decisive economic collision is deferred, not defused.",
      risk7d:
        "Seven-day risk holds critical despite the day's easing. The Iran-Oman corridor and mine-clearance lower near-term Hormuz kinetic risk, and Rubio's no-new-strikes line still caps the shooting — but the tails that define the gauge stay loaded. Bessent's bank blow was deferred behind the September 24 Xi summit, not cancelled, and the secondary-sanctions/CIPS collision, a Chinese counter-move, an Iranian 'seismic' answer, an interdiction of the CENTCOM escort convoy the new corridor ignores, a strike on a Saudi or Emirati bypass route, or a Hezbollah reprisal breaking the June truce could each fire inside the week. Gaza is the nearer risk: with Israel escalating toward pre-ceasefire rules of engagement and the disarmament sequencing deadlocked, the connected theater is worsening. The corridor cools one axis; it does not clear the others.",
      spillover:
        "Spillover holds critical. The war still spans Iranian soil, both maritime chokepoints, the Israel-Gaza and Israel-Lebanon seams, an open Houthi front reaching Saudi and Emirati targets, the Israel-Turkey friction over Syria, and a formalized economic front. Day 182 eased exactly one node — the strait, via the Iran-Oman corridor — while the others held or worsened: Gaza escalated after Kushner left, Israel kept striking Hezbollah and Hamas 'targets' in Lebanon, and the bank collision was pushed past a summit rather than resolved. The corridor's exclusion of military vessels leaves the US convoy operating alongside, not inside, the new arrangement, and Iran's threat to the Gulf-neighbor bypass routes still aims to deter the alignment the plan demands. No new front opened, which is why spillover did not worsen outright; too many fronts stayed hot for it to ease.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'Washington Post / SCMP / Newsweek / IBTimes',
      event:
        "Bessent's self-imposed deadline lapsed: the 'major financial institution' he pledged to sanction 'before the end of this week' went unnamed as the week closed, and reporting crystallized the reason — Trump is set to host Xi Jinping at the White House on September 24, and analysts judged he would not hit a major Chinese bank a month before the state visit.",
      summary:
        "Per §3.5.5 quantify: more than a third of the ~60 designated entities are China-based, yet zero major Chinese banks a full week running — the one blow the plan is built to reach is now deferred behind a summit date rather than Iran's behavior.",
      impact:
        "The political-will clock reads against a calendar: leverage-by-week becomes leverage-postponed-past-a-summit, a bargaining chip Beijing can see and wait out, and the market has priced the later answer.",
    },
    {
      id: 2,
      direction: 'de-escalating',
      importance: 'high',
      source: 'Al Jazeera / Africanews / CNN',
      event:
        "Iran and Oman announced a temporary joint maritime corridor through the Strait of Hormuz and a joint mine-clearance project: inbound commercial vessels routing through Iranian waters, outbound through both, military vessels barred, with a 30-to-60-day window to negotiate a permanent arrangement and a mechanism for traffic management and information-sharing.",
      summary:
        "Per §3.5.6 the toll-institutionalization and mine-clearance priors resolve toward Tehran — the deal writes Iranian gating and administration into the strait and pairs it with the physical clearing any reopening required, while CNN judges it an agreement 'not one Trump wants' because it excludes the US escort convoy.",
      impact:
        "The energy-infrastructure clock eases for the first time in weeks, but the arrangement institutionalizes the standoff — Iran secures gated control and revenue, the US convoy is left outside it, and neither side needs to concede.",
    },
    {
      id: 3,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'CNBC / Fox News',
      event:
        "The oil market extended the de-escalation: Brent slid to a fourth straight session toward $86 a barrel, off the ~$89 one-week low, as traders read calibrated sanctions that spared Iran's main counterparties alongside the Iran-Oman Hormuz diplomacy as lowering near-term supply-shock risk.",
      summary:
        "Per §3.5.5 quantify: Brent near $86 (a fourth down session) prices the twin read — a bank blow deferred past a summit and a chokepoint arrangement taking shape — as a cooling of the immediate rupture tail.",
      impact:
        "The energy clock's relief remains conditional on a draining stock base: a re-gating of the corridor, a named major-Chinese-bank designation, or a convoy loss still reprices past $100 in a session.",
    },
    {
      id: 4,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Al Jazeera / regional readouts',
      event:
        "Diplomacy warmed at the margins: Oman's foreign minister delivered the corridor agreement in Tehran, Pakistan reported 'significant progress' in its mediation with Pezeshkian, and China urged all parties to 'truly implement their commitments,' even as the US-Iran track stayed officially closed and Pezeshkian framed any end to the war as coming 'from a position of strength.'",
      summary:
        "Per §3.5.3 a cluster of mediation activity is not a reopening: three channels warmed (Oman, Pakistan, China) but none has a US counterparty, and Tehran still speaks with two voices — a corridor deal and a 'position of strength' posture.",
      impact:
        "The negotiation-capacity clock ticks up on activated interlocutors, but the decisive US-Iran seam is unmoved; the warming is real and marginal, not a track.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'PBS / Al Jazeera',
      event:
        "On the connected fronts the picture darkened: after envoy Kushner's departure, Israeli strikes on Gaza intensified toward pre-ceasefire rules of engagement, senior officers describing a return to prior targeting, while the disarmament sequencing stayed deadlocked and Israel kept striking Hezbollah and Hamas 'targets' in Lebanon.",
      summary:
        "Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold: the US-Iran diplomacy freed no pressure on Gaza or Lebanon, where Israel acts on its own clock and the Hamas-disarm-first / Israel-withdraw-first impasse is unresolved.",
      impact:
        "The humanitarian clock worsens off-stage from the Hormuz easing: the connected theaters escalate independently of the sanctions and corridor tracks, a widening the maritime deal cannot bind.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series; Day 182 was a diplomacy-and-markets day — the lapsed bank deadline, the Iran-Oman Hormuz corridor, and a softening oil market, not shooting — and no American casualty was reported; Rubio's no-new-strikes line still caps the kinetic track; DCAS holds 18/687, a wider scope, not a confirmed hostile loss; the Kuwait Ahmad al-Jaber death stays denied by CENTCOM",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 the brief keeps the combat figure and flags DCAS; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule. The US-Iran shooting stayed paused as Washington let its own this-week bank deadline lapse behind the September 24 Xi summit, and Secretary Rubio's word that no new Iran strikes were expected still holds. The new Iran-Oman corridor pointedly bars military vessels, leaving CENTCOM's escort convoy — more than 660 million barrels and ~1,300 vessels since May, moving ~10 mb/d — operating alongside rather than inside the arrangement, and it remains a standing daily maritime exposure with enforcement holding at ~55 blockade-runners rerouted, three disabled, two boarded since mid-July; the USS George Washington is on station. The $67 billion supplemental and the 50-48 Senate war-powers rebuke stay unresolved in August recess.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front; no new Israeli fatalities or wounded reported there. Israel stayed offstage on the US-Iran economic and Hormuz tracks while escalating on its own fronts — after Kushner's departure Israeli strikes on Gaza intensified toward pre-ceasefire rules of engagement (a connected theater, not folded into the war cumulative), and Israel kept striking Hezbollah and Hamas 'targets' in Lebanon; it held its Gaza line — no IDF redeployment until Hamas disarms under a US general on Kushner's 30-day / 60-90-day timeline — at highest readiness",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA on the Iran front. Israel was offstage on Day 182's US-Iran economic and Hormuz diplomacy but escalated on its own fronts: after envoy Kushner departed, Israeli strikes on Gaza intensified, with senior officers describing a return to pre-ceasefire rules of engagement (PBS, Al Jazeera) — a connected theater the series does not fold into the war-casualty cumulative. Its posture stayed political and hard: Jerusalem and the Board of Peace hold that Hamas must fully disarm and Gaza be demilitarized under a US general before any IDF redeployment, with Kushner's 30-day weapons-handover and 60-90-day tunnel-closure timeline and a roadmap Netanyahu still calls 'problematic' before the October 27 election; the sequencing dispute — Hamas will surrender weapons only if Israel halts strikes and withdraws, which Netanyahu refuses — is unresolved. In Lebanon Israel kept striking Hezbollah and Hamas 'targets,' Hezbollah's threatened Aug 15 reprisal stayed unexecuted, and UNIFIL's handover of its Khardali-Litani position to the Lebanese Army's 7th Brigade carries as strategy shifts to LAF 'pilot zones.' Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold — Israel acts on its own clock, outside the US-Iran framework.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154. Tehran's day ran through diplomacy, not the battlefield — the Iran-Oman corridor and joint mine-clearance, Pezeshkian's 'position of strength' framing, and warming Pakistan and China channels — with no reported new casualties; the standing Rezaei 'seismic' and 70-million-barrel claims and the Hormuz fine/detain/confiscate threat carry, now partly overtaken by the corridor's permit logic; the UN rights chief's alarm over an execution spike (HRANA at least 444 Jan–Jul) is noted but not folded into the war toll",
      status:
        "No updated official Iranian toll on Day 182. The Qeshm Island deaths and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. Tehran's day was diplomatic rather than kinetic — the Iran-Oman temporary corridor and joint mine-clearance, Pezeshkian's insistence on ending the war 'from a position of strength,' and warming Pakistan and Chinese channels — with no reported new casualties. The standing Rezaei 'seismic'-retaliation and 70-million-barrel loading claims and the threat to fine, detain, or confiscate vessels defying the Hormuz permit regime carry, now partly overtaken by the corridor's own permit logic. Per §3.1's dual-sourcing a separate rights thread — the UN rights chief's renewed alarm over a sharp rise in executions, with HRANA logging at least 444 for January–July — is noted but kept out of the war-casualty cumulative. The IAEA has run no verification since February 28 and remains locked out of Isfahan; the ~440.9 kg of 60% HEU stays unverified and likely at Isfahan, with ISIS flagging enough for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        "Lebanon source-split: Health Ministry ~4,265 / 12,190+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA (Kuwait 10 killed / 115 injured; Saudi Arabia 11 civilians injured, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded per Yemen government (Houthis unconfirmed) · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing",
      delta:
        "+0 confirmed deaths on the tracked theaters in a 24-48h dominated by the lapsed bank deadline, the Hormuz corridor, and a softening oil market; no fresh Houthi-Saudi, UAE-missile, Lebanon or maritime toll was verified; the Iran-Oman corridor and joint mine-clearance, if implemented, would lower near-term maritime-casualty risk on the strait; the Aug 15 Lebanon strike and the Aug 12 Tihamah toll carry, as does the standing maritime ledger",
      status:
        "The 'other' ledger held on confirmed deaths on a diplomacy-dominated day. No fresh Houthi-Saudi, UAE-missile, Lebanon or maritime toll was verified — per §3.5.3 the standing Houthi Saudi-warship claim and the UAE ballistic-missile threat stay logged, not counted. The Iran-Oman temporary corridor and joint mine-clearance project, if implemented, would lower the near-term maritime-casualty risk on the strait itself — though the arrangement is 30-to-60 days from any permanent form. In Lebanon the Aug 15 strike that killed at least eleven including three children (Health Ministry cumulative ~4,265 / 12,190+, the Wikipedia series 3,371 / 10,129 lagging) holds as an unfulfilled Hezbollah-Israel threat exchange as UNIFIL's Khardali-Litani handover to the Lebanese Army's 7th Brigade carries. The Bab al-Mandeb Tihamah toll (Aug 12) holds at least six killed and ten wounded per Yemen's government. Hormuz commercial transit stays effectively shut outside the US convoy pending the corridor's implementation; the maritime toll holds ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mokha shut, ~1,300 workers idled. Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7). Rezaei's threat to the Gulf-neighbor bypass routes remains the most acute widening path against this ledger.",
    },
  },
  exec:
    "Day 182 closed the week Treasury Secretary Bessent set for himself — and the 'major financial institution' he pledged to sanction 'before the end of this week' went unnamed, the deadline lapsing into the walk-back the market had already priced. Reporting crystallized why: Trump is set to host Xi Jinping at the White House on September 24, and analysts judged he would not hit a major Chinese bank a month before the state visit (Washington Post, South China Morning Post, Newsweek). The day's genuine movement came on the water. Iran and Oman announced a temporary joint maritime corridor through the Strait of Hormuz and a joint mine-clearance project — inbound commercial ships routing through Iranian waters, outbound through both, military vessels barred — with a 30-to-60-day window to negotiate a permanent arrangement (Al Jazeera, Africanews). Per §3.5.3, set the movement against its shape: CNN's read is that an agreement is taking form, but not the one Washington wants, since it entrenches Iranian gating and excludes the US escort convoy. The oil market extended the de-escalation, Brent sliding to a fourth straight session toward $86 on the twin read of calibrated sanctions and Hormuz diplomacy (CNBC, Fox News). Diplomacy warmed at the margins — Oman's foreign minister delivered the corridor in Tehran, Pakistan reported 'significant progress' with Pezeshkian, China pressed all parties to 'implement their commitments' — even as the US-Iran track stayed closed and Pezeshkian spoke 'from a position of strength.' On the connected fronts the picture darkened: after Kushner's departure Israel escalated Gaza strikes toward pre-ceasefire rules of engagement (PBS, Al Jazeera). Direction holds mixed — the energy clock easing, the humanitarian clock worsening; seven-day and spillover risk hold critical; the thirty-day ceasefire probability holds at 5.",
  implications: [
    {
      title: "Washington lets the deadline lapse — and the deferral finally has a name: September 24",
      body:
        "For three days the 'major financial institution' stayed unnamed; on Day 182, the week Bessent set for it ran out with no designation, and the reason came into focus. Trump is scheduled to host Xi Jinping at the White House on September 24, and the consensus read is that he will not hit a major Chinese bank a month before the state visit (Washington Post, South China Morning Post, Newsweek, IBTimes). Per §3.5.5 quantify the shape: more than a third of the ~60 designated entities are China-based, yet zero major Chinese banks — now a full week — and the one blow the plan is engineered to reach is deferred behind a summit date. Under the multi-clock framework the political-will clock is the one on trial, and it now reads against a calendar: leverage-by-week has become leverage-postponed-past-a-summit. Analytical judgment: the deferral is no longer just nerve, it is scheduling — the credibility question moves from 'this week' to 'before or after September 24,' and the market has priced the later answer. The risk in a named date is that it converts the threat into a bargaining chip Beijing can see and wait out; naming the bank after a warm summit is harder, not easier. The round the world watched Washington chamber is now holstered against a handshake — the plan's decisive act indexed to the diplomacy it was meant to coerce, not to Iran's behavior.",
    },
    {
      title: "Iran gets its Hormuz on paper — a corridor that eases the market and sidelines Washington",
      body:
        "The day's real movement was maritime. Iran and Oman announced a temporary joint corridor through the strait and a joint mine-clearance project — inbound commercial ships through Iranian waters, outbound through both, military vessels barred — with a 30-to-60-day window toward a permanent deal (Al Jazeera, Africanews). Per §3.5.6 the toll-institutionalization and mine-clearance priors resolve toward Tehran: the arrangement writes Iranian gating, administration, and information-sharing into the strait's management and pairs it with the physical mine-clearing that any reopening required. Per §3.5.3 read the movement against its shape — CNN's judgment is that this is an agreement taking form but 'not one Trump wants,' because it excludes the US escort convoy and legitimizes the permit regime Washington calls a blockade to break (CNN, China-Global South Project). Per §3.5.5 the market read it cleanly: Brent slid a fourth straight session toward $86, off the ~$89 low, pricing lower near-term rupture risk on the chokepoint (CNBC, Fox News). Under the multi-clock framework the energy-infrastructure clock eases for the first time in weeks while the negotiation-capacity clock ticks up — Oman in Tehran, Pakistan's 'significant progress,' China urging implementation. Analytical judgment: this is de-escalation that institutionalizes the standoff rather than ending it — Iran secures gated control and revenue, the US keeps a convoy the corridor ignores, and neither needs to concede, a frozen-conflict architecture on the water that lowers the temperature without closing the war.",
    },
    {
      title: "Taiwan: the maritime reprieve firms, the financial tail is deferred, not defused",
      body:
        "Per §3.5.10 there was no Taiwan-specific development on Day 182; the exposure is structural, and the day moved both of Taipei's clocks in its favor — for now. The physical clock eased: an Iran-Oman corridor plus mine-clearance and Brent near $86 lower the odds of a near-term Hormuz shock that would strike the LNG lane Taiwan's grid rides (Al Jazeera, CNBC). The financial clock was deferred, not defused: sparing the major Chinese banks a month before the Xi summit keeps the cross-border settlement plumbing that clears much of Asia's energy trade intact — but only postpones the collision Bessent himself called capable of 'blowing up the global financial system' (Washington Post, SCMP). Per §3.5.5 the arithmetic is unchanged: 99% import dependence, roughly a third of Taiwan's 23.6 Mt of LNG through Hormuz — nearly 8 Mt of it Qatari — about eleven days of gas cover against some 120 days of oil (CSIS). Analytical judgment: a diplomacy day bought Taipei margin on both clocks, but a corridor that can be re-gated at Iranian discretion and a bank blow merely pushed past September 24 are reprieves, not resolutions. The prudent read of a double deferral is to bank the interval — winter-gas stockpiling, supplier diversification, and settlement-rail contingency for a shock both capitals concede is coming — rather than mistake a calm week for a safe one.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. Day 182 was a diplomacy-and-markets day — no US-Iran shooting, no reported American casualty, Rubio's no-new-strikes line holding, and the week's bank deadline lapsing behind the September 24 Xi summit. The new Iran-Oman corridor bars military vessels, leaving CENTCOM's escort convoy (~660M+ barrels / ~1,300 vessels since May, ~10 mb/d) outside the arrangement and a standing exposure, enforcement holding at ~55 rerouted, three disabled, two boarded since mid-July; the USS George Washington is on station. The $67B supplemental and 50-48 rebuke stay unresolved in recess.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new Iran-front toll. Israel was offstage on the US-Iran economic and Hormuz tracks but escalated on its own fronts — after Kushner's departure Israeli strikes on Gaza intensified toward pre-ceasefire rules of engagement (a connected theater, not folded into the war cumulative), and it kept striking Hezbollah and Hamas 'targets' in Lebanon. Posture stayed political and hard — the IDF stays until Hamas disarms under a US general on Kushner's 30-day / 60-90-day timeline, roadmap Netanyahu still calls 'problematic' before the October 27 election, the Hamas-disarm-first / Israel-withdraw-first sequencing unresolved, UNIFIL's Khardali-Litani handover to the Lebanese Army carrying. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold; Israel stays at highest readiness.",
    iran:
      "No fresh official MOH toll; Qeshm deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. Tehran's day was diplomatic — the Iran-Oman corridor and joint mine-clearance, Pezeshkian's 'position of strength' line, and warming Pakistan and China channels — with no reported new casualties. The standing 'seismic' and 70M-barrel claims and the Hormuz seizure threat carry, now partly overtaken by the corridor's permit logic. A rights thread — the UN rights chief's alarm over an execution spike, HRANA at least 444 in Jan–Jul — is noted but not folded into the war toll. IAEA no verification since Feb 28; ~440.9 kg 60% HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "+0 confirmed deaths on the tracked theaters in a 24-48h dominated by the lapsed bank deadline, the Hormuz corridor, and a softening oil market. No fresh Houthi-Saudi, UAE-missile, Lebanon or maritime toll was verified — per §3.5.3 the standing Mokha and UAE-missile claims stay logged, not counted. The Iran-Oman corridor and joint mine-clearance, if implemented, would lower near-term maritime-casualty risk on the strait, though a permanent form is 30-to-60 days out. Lebanon's Aug 15 eleven-death strike (Health Ministry ~4,265 / 12,190+, Wikipedia 3,371 / 10,129 lags) holds as an unfulfilled threat exchange as UNIFIL's Khardali-Litani handover to the Lebanese Army carries. Bab al-Mandeb Tihamah (Aug 12) holds at least 6 killed / 10 wounded. Maritime toll ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mokha shut, ~1,300 workers idled; Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7). Rezaei's bypass-route threat is the most acute widening path.",
  },
};

export default data;
