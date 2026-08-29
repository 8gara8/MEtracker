import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed, and the mix is the one that set in on Day 182, now hardening: real de-escalation continues on the energy and maritime axis while the core standoff stays frozen and the connected fronts worsen. Across the Aug 28-30 window the Iran-Oman Hormuz corridor firmed from announcement into a phased technical framework — seven-nautical-mile two-way lanes, a revenue-sharing arrangement, joint mine-clearance — and Qatar's prime minister moved to back it, while the mediation channels (Pakistan's China-initiated push, Qatar) kept warming. It is not de-escalating cleanly: the US-Iran track stayed closed, Tehran's deputy foreign minister stressed the corridor implies no immediate reopening, Rezaei's threat to the Gulf export routes carries, and Gaza kept sliding. It is not escalating: no shot was fired on the US-Iran front, the bank blow stayed deferred behind the late-September Xi summit rather than landing, and the chokepoint risk kept easing. Mixed holds — the energy clock steady-to-easing, the humanitarian clock worsening, the decisive economic collision deferred, not defused.",
      risk7d:
        "Seven-day risk holds critical despite a second easing weekend. The firming corridor and Rubio's standing no-new-strikes line cap near-term Hormuz kinetic risk, but the tails that define the gauge stay loaded and are now indexed to a calendar. Bessent's major-bank blow is deferred behind the September Xi summit, not cancelled; the secondary-sanctions and CIPS collision, a Chinese counter-move, an Iranian 'seismic' answer, an interdiction of the CENTCOM escort convoy the corridor excludes, a strike on a Saudi or Emirati bypass route, or a Hezbollah reprisal breaking the June truce could each fire inside the week. Gaza is the nearer risk: Israeli strikes since the October ceasefire have now killed at least 1,273, the disarmament sequencing is deadlocked, and Israel has told Washington it has 'serious concerns' with the deal. The corridor cools one axis; it does not clear the others.",
      spillover:
        "Spillover holds critical. The war still spans Iranian soil, both maritime chokepoints, the Israel-Gaza and Israel-Lebanon seams, an open Houthi front reaching Saudi and Emirati targets, the Israel-Turkey friction over Syria, and a formalized economic front now wired to a US-China summit. The Aug 28-30 window eased the strait node further — the corridor firming, Qatar backing it, oil plateaued near $88 — while the others held or worsened: Gaza escalated, the disarmament deal stalled, and the bank collision was pushed past the summit rather than resolved. The corridor's exclusion of military vessels leaves the US convoy operating alongside, not inside, the arrangement, and Rezaei's threat to the Gulf-neighbor bypass routes still aims to deter the alignment the plan demands. No new front opened, which is why spillover did not worsen outright; too many fronts stayed hot for it to ease.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'CNBC / Washington Post / The Hill',
      event:
        "Pre-summit maneuver intensified: US Ambassador David Perdue met Foreign Minister Wang Yi and three Chinese officials in Beijing to prepare Xi Jinping's late-September Washington visit, and Trump told reporters he 'didn't have to announce everything' on bank sanctions — read as restraint to protect a fragile US-China trade truce — while Beijing said 'economic war and maximum pressure will only further escalate tensions.'",
      summary:
        "Per §3.5.3 read Washington's restraint against Beijing's framing: China cast the sanctions as self-defeating and, in state-linked commentary, argued Washington is positioning Beijing to take the blame if the plan fails — a narrative pre-position, not a concession.",
      impact:
        "The political-will clock now reads against a summit calendar: zero major Chinese banks named for roughly ten days, the decisive blow hostage to a handshake Washington wants for its own trade reasons.",
    },
    {
      id: 2,
      direction: 'de-escalating',
      importance: 'high',
      source: 'US News / Euronews / Al Jazeera',
      event:
        "The Iran-Oman Hormuz corridor firmed into a phased technical framework: two-way lanes about seven nautical miles wide separated by roughly two miles, a revenue-sharing arrangement, and joint mine-clearance, with Iran's deputy foreign minister Gharibabadi saying the deal would close the UN-authorized southern route along Oman's coast that Tehran opposes — while stressing it implies no immediate reopening.",
      summary:
        "Per §3.5.6 the toll-institutionalization and mine-clearance priors keep resolving toward Tehran — the framework writes Iranian gating, revenue, and administration into the strait and moves to shut the internationally sanctioned lane, a sovereignty claim dressed as traffic management.",
      impact:
        "The energy-infrastructure clock's structural picture keeps shifting Iran's way even as the price easing paused; the US escort convoy is left further outside a hardening Iranian-administered regime.",
    },
    {
      id: 3,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Al Jazeera / Express Tribune / regional readouts',
      event:
        "Qatar entered the corridor diplomacy: Doha's prime minister prepared to visit Tehran to voice support for the Oman-Iran effort on the strait, joining Oman as a second Gulf backer, while Pakistan's China-initiated push to reopen a US-Iran track continued through intermediaries without a US counterparty.",
      summary:
        "Per §3.5.3 a widening mediation bench is not a track: Qatar's backing lends the Iranian-administered corridor a second Gulf-state endorsement, but none of the warming channels (Oman, Qatar, Pakistan, China) has moved Washington to the table.",
      impact:
        "The negotiation-capacity clock ticks up on activated interlocutors, but the decisive US-Iran seam is unmoved; the warming is real and marginal, not a reopening.",
    },
    {
      id: 4,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'CNBC / Trading Economics / Goldman Sachs',
      event:
        "Oil plateaued after a week of easing: Brent settled near $88 at Friday's close, off the ~$89 area, with traders reading the confrontation as an economic and sanctions standoff rather than an imminent supply shock; Goldman Sachs pegged Gulf exports recovering to ~15-16 mb/d, still well below the 22-24 mb/d pre-war norm but far above the March low of ~5-6 mb/d.",
      summary:
        "Per §3.5.5 quantify: Brent near $88 and Gulf exports around 15-16 mb/d price a cooling rupture tail and a partial flow recovery — even as Hormuz itself runs ~8-9 mb/d under US escort, ~2-3 VLCC transits a day versus roughly eight pre-war.",
      impact:
        "The energy clock's relief stays conditional on a drained stock base: a corridor re-gating, a named major-Chinese-bank designation, or a convoy loss still reprices past $100 in a session.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'PBS / Al Jazeera / NPR',
      event:
        "On the connected fronts the picture darkened further: Israeli strikes since the October ceasefire have now killed at least 1,273 Palestinians per Gaza health officials, Israel told Washington it has 'serious concerns' with the White House's Hamas-disarmament deal, and the disarm-first / withdraw-first sequencing stayed deadlocked as strikes continued.",
      summary:
        "Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold: the Hormuz and sanctions diplomacy freed no pressure on Gaza, where Israel acts on its own clock and now openly questions the deal Washington is brokering.",
      impact:
        "The humanitarian clock worsens off-stage from the maritime easing: the connected theaters escalate independently of the sanctions and corridor tracks, a widening no corridor can bind.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series across the Aug 28-30 window; the weekend was diplomacy and markets — the pre-summit US-China maneuver, the firming Hormuz corridor, and a plateaued oil market, not shooting — and no American casualty was reported; Rubio's no-new-strikes line still caps the kinetic track; DCAS holds 18/687, a wider scope, not a confirmed hostile loss; the Kuwait Ahmad al-Jaber death stays denied by CENTCOM",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 the brief keeps the combat figure and flags DCAS; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule. The US-Iran shooting stayed paused across the window as Washington held its major-bank blow behind the late-September Xi summit and prepared the visit through Ambassador Perdue's Beijing meetings, and Secretary Rubio's word that no new Iran strikes were expected still holds. The Iran-Oman corridor pointedly bars military vessels, leaving CENTCOM's escort convoy — more than 660 million barrels and ~1,300 vessels since May, moving ~8-9 mb/d through the strait under escort — operating alongside rather than inside the arrangement, and it remains a standing daily maritime exposure with enforcement holding at ~55 blockade-runners rerouted, three disabled, two boarded since mid-July; the USS George Washington is on station. The $67 billion supplemental and the 50-48 Senate war-powers rebuke stay unresolved in August recess.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front; no new Israeli fatalities or wounded reported there. Israel stayed offstage on the US-China and Hormuz tracks while escalating on its own fronts — strikes on Gaza continued toward pre-ceasefire rules of engagement (a connected theater, not folded into the war cumulative), the toll since the October ceasefire reaching at least 1,273, and Israel told Washington it has 'serious concerns' with the Hamas-disarmament deal; it held its Gaza line — no IDF redeployment until Hamas disarms under a US general on Kushner's 30-day / 60-90-day timeline — at highest readiness",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA on the Iran front. Israel was offstage on the weekend's US-China and Hormuz diplomacy but escalated on its own fronts: strikes on Gaza continued, with the death toll since the October ceasefire reaching at least 1,273 per Gaza health officials (PBS, Al Jazeera) — a connected theater the series does not fold into the war-casualty cumulative. Its posture stayed political and hard: Jerusalem told Washington it has 'serious concerns' with the White House's Hamas-disarmament deal, holds that Hamas must fully disarm and Gaza be demilitarized under a US general before any IDF redeployment, and works Kushner's 30-day weapons-handover and 60-90-day tunnel-closure timeline against a roadmap Netanyahu still calls 'problematic' before the October 27 election; the sequencing dispute — Hamas will surrender weapons only if Israel halts strikes and withdraws, which Netanyahu refuses — is unresolved. In Lebanon Israel kept striking Hezbollah and Hamas 'targets,' Hezbollah's threatened Aug 15 reprisal stayed unexecuted, and UNIFIL's handover of its Khardali-Litani position to the Lebanese Army's 7th Brigade carries as strategy shifts to LAF 'pilot zones.' Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold — Israel acts on its own clock, outside the US-Iran framework.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll across the window; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154. Tehran's weekend ran through diplomacy, not the battlefield — the firming Iran-Oman corridor, Gharibabadi's 'no immediate reopening' framing, Pezeshkian's 'position of strength' line, and warming Pakistan, Qatar and China channels — with no reported new casualties; the standing Rezaei 'seismic' and 70-million-barrel claims and the Hormuz fine/detain/confiscate threat carry, now partly overtaken by the corridor's permit logic; the UN rights chief's alarm over an execution spike (HRANA at least 444 Jan-Jul) is noted but not folded into the war toll",
      status:
        "No updated official Iranian toll across the Aug 28-30 window. The Qeshm Island deaths and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. Tehran's weekend was diplomatic rather than kinetic — the corridor firming into a phased framework, Deputy FM Gharibabadi's insistence that it implies no immediate reopening, Pezeshkian's line on ending the war 'from a position of strength,' and warming Pakistan, Qatar and Chinese channels — with no reported new casualties. The standing Rezaei 'seismic'-retaliation and 70-million-barrel loading claims and the threat to fine, detain, or confiscate vessels defying the Hormuz permit regime carry, now partly overtaken by the corridor's own permit logic. Per §3.1's dual-sourcing a separate rights thread — the UN rights chief's renewed alarm over a sharp rise in executions, with HRANA logging at least 444 for January-July — is noted but kept out of the war-casualty cumulative. The IAEA has run no verification since February 28 and remains locked out of Isfahan; the ~440.9 kg of 60% HEU plus ~184.1 kg of 20% stays unverified and likely at Isfahan, with ISIS flagging enough for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        "Lebanon source-split: Health Ministry ~4,265 / 12,190+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA (Kuwait 10 killed / 115 injured; Saudi Arabia 11 civilians injured, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded per Yemen government (Houthis unconfirmed) · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing",
      delta:
        "+0 confirmed deaths on the tracked theaters across a window dominated by the pre-summit US-China maneuver, the firming Hormuz corridor, and a plateaued oil market; no fresh Houthi-Saudi, UAE-missile, Lebanon or maritime toll was verified; the corridor and joint mine-clearance, if implemented, would lower near-term maritime-casualty risk on the strait; the Aug 15 Lebanon strike and the Aug 12 Tihamah toll carry, as does the standing maritime ledger",
      status:
        "The 'other' ledger held on confirmed deaths across a diplomacy-dominated window. No fresh Houthi-Saudi, UAE-missile, Lebanon or maritime toll was verified — per §3.5.3 the standing Houthi Saudi-warship claim and the UAE ballistic-missile threat stay logged, not counted. The Iran-Oman corridor's joint mine-clearance, if implemented, would lower the near-term maritime-casualty risk on the strait itself, though the framework is still phased and 30-to-60 days from any permanent form. In Lebanon the Aug 15 strike that killed at least eleven including three children (Health Ministry cumulative ~4,265 / 12,190+, the Wikipedia series 3,371 / 10,129 lagging) holds as an unfulfilled Hezbollah-Israel threat exchange as UNIFIL's Khardali-Litani handover to the Lebanese Army's 7th Brigade carries. The Bab al-Mandeb Tihamah toll (Aug 12) holds at least six killed and ten wounded per Yemen's government. Hormuz commercial transit stays effectively shut outside the US convoy pending the corridor's implementation; the maritime toll holds ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mokha shut, ~1,300 workers idled. Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7). Rezaei's threat to the Gulf-neighbor bypass routes remains the most acute widening path against this ledger.",
    },
  },
  exec:
    "Day 184 brought a quiet battlefield and a busy diplomatic weekend, and the shape held from Friday: de-escalation institutionalizing on the water, the decisive economic blow still holstered, and the connected fronts worsening. The dominant movement was pre-summit maneuver. With Trump set to host Xi Jinping in Washington in late September, US Ambassador David Perdue met Foreign Minister Wang Yi and three Chinese officials in Beijing to prepare the visit, while Trump told reporters he 'didn't have to announce everything' on bank sanctions — restraint the Washington Post read as guarding a fragile trade truce (CNBC, Washington Post). Per §3.5.3, set that against Beijing's framing: China's foreign ministry said 'economic war and maximum pressure will only further escalate tensions,' and Chinese commentary argued Washington is positioning Beijing to take the blame if the sanctions fail (The Hill, China-Global South Project). The Hormuz corridor firmed into detail — a phased framework, two-way lanes about seven nautical miles wide, a revenue-sharing arrangement, and Iranian insistence on closing the UN-authorized southern route — even as Tehran's deputy foreign minister stressed it means no immediate reopening and Qatar's prime minister prepared to visit Tehran to back the Oman-Iran effort (US News, Euronews, Al Jazeera). Oil plateaued: Brent settled near $88 at Friday's close after four easing sessions (CNBC, Trading Economics). On the connected fronts the humanitarian clock kept worsening — Israeli strikes since the October ceasefire have now killed at least 1,273 in Gaza as the disarmament deal stalls and Israel voices 'serious concerns' (PBS, Al Jazeera). Direction holds mixed; seven-day and spillover risk hold critical; the thirty-day ceasefire probability holds at 5.",
  implications: [
    {
      title: "The bank blow stays holstered — and the pre-summit choreography explains the delay",
      body:
        "The weekend's dominant thread was choreography around a date. With Trump scheduled to host Xi Jinping in Washington in late September, US Ambassador David Perdue met Foreign Minister Wang Yi and three other officials in Beijing to prepare the visit, and Trump told reporters he 'didn't have to announce everything' on bank sanctions — restraint the Washington Post read as guarding a fragile trade truce (CNBC, Washington Post). Per §3.5.5 quantify the shape: more than a third of the ~60 designated entities are China-based, yet zero major Chinese banks now for roughly ten days, the one blow the plan is engineered to reach still deferred behind a summit rather than Iran's behavior. Per §3.5.3 set Washington's restraint against Beijing's framing: China called economic war and maximum pressure self-defeating, and state-linked commentary argued Washington is positioning Beijing to take the blame if the sanctions fail (The Hill, China-Global South Project). Under the multi-clock framework the political-will clock is the one on trial, and it now reads against a calendar: leverage-by-week has become leverage-postponed-past-a-summit. Analytical judgment: the coercion instrument is hostage to a handshake Washington wants for its own trade reasons, and Beijing is pre-positioning to win the narrative if the blow never lands — naming a major bank a month before a state visit is harder, not easier, and China is already writing the epitaph for a plan that flinched.",
    },
    {
      title: "The corridor firms into an architecture — Iran writes the rules, Qatar underwrites them",
      body:
        "The weekend's real movement was on the water. The Iran-Oman corridor firmed from announcement into a phased technical framework — two-way lanes about seven nautical miles wide, a revenue-sharing arrangement, and joint mine-clearance — with Iran's deputy foreign minister saying the deal would close the UN-authorized southern route along Oman's coast that Tehran opposes, while stressing it implies no immediate reopening (US News, Euronews). Per §3.5.6 the toll-institutionalization and mine-clearance priors keep resolving toward Tehran: the framework writes Iranian gating, revenue, and administration into the strait and moves to shut the internationally sanctioned lane. Per §3.5.3 read it against its shape — this is a permit-and-revenue regime Washington calls a blockade to break, now gaining a second Gulf endorsement as Qatar's prime minister prepares to visit Tehran to back it alongside Oman (Al Jazeera). Per §3.5.5 the market plateaued rather than fell further, Brent near $88 at Friday's close. Under the multi-clock framework the energy-infrastructure clock's structural picture keeps shifting Iran's way even as the price easing paused. Analytical judgment: this is the frozen-conflict-on-the-water hardening — each week of 'phased framework' makes Iranian administration of the strait more of a fact and the US convoy more of an outlier, and a corridor that closes the UN southern route is a sovereignty claim dressed as traffic management, now with two Gulf states lending it cover.",
    },
    {
      title: "Taiwan: a hardening reprieve on the water, a deferred blow on the ledger",
      body:
        "Per §3.5.10 there was no Taiwan-specific development across the window; the exposure is structural, and both of Taipei's clocks stayed in its favor — for now. The physical clock kept easing: a firming Iran-Oman corridor, Qatar's backing, and Brent near $88 lower the odds of a near-term Hormuz shock to the LNG lane Taiwan's grid rides (US News, CNBC). The financial clock stayed deferred, not defused: holding the major Chinese banks a month before the Xi summit keeps the cross-border settlement plumbing that clears much of Asia's energy trade intact, but only postpones the collision Bessent himself called capable of 'blowing up the global financial system' (Washington Post). Per §3.5.5 the arithmetic is unchanged: 99% import dependence, roughly a third of Taiwan's 23.6 Mt of LNG through Hormuz — nearly 8 Mt of it Qatari — about eleven days of gas cover against some 120 of oil (CSIS). The new wrinkle cuts both ways: Qatar, Taipei's largest single supplier through this lane, is now personally invested in the corridor — a stakeholder in keeping the strait moving, but one bound into an Iranian-administered regime. Analytical judgment: bank the interval — winter-gas stockpiling, supplier diversification, and settlement-rail contingency for a shock both capitals concede is coming — rather than mistake a calm week for a safe one.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. The Aug 28-30 window was diplomacy and markets — the pre-summit US-China maneuver, the firming Hormuz corridor, a plateaued oil market — with no US-Iran shooting, no reported American casualty, and Rubio's no-new-strikes line holding while the bank blow stayed behind the late-September Xi summit. The Iran-Oman corridor bars military vessels, leaving CENTCOM's escort convoy (~660M+ barrels / ~1,300 vessels since May, ~8-9 mb/d) outside the arrangement and a standing exposure, enforcement holding at ~55 rerouted, three disabled, two boarded since mid-July; the USS George Washington is on station. The $67B supplemental and 50-48 rebuke stay unresolved in recess.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new Iran-front toll. Israel was offstage on the US-China and Hormuz tracks but escalated on its own fronts — strikes on Gaza continued toward pre-ceasefire rules of engagement (a connected theater, not folded into the war cumulative), the toll since the October ceasefire reaching at least 1,273, and Israel told Washington it has 'serious concerns' with the disarmament deal. Posture stayed political and hard — the IDF stays until Hamas disarms under a US general on Kushner's 30-day / 60-90-day timeline, roadmap Netanyahu still calls 'problematic' before the October 27 election, the Hamas-disarm-first / Israel-withdraw-first sequencing unresolved, UNIFIL's Khardali-Litani handover to the Lebanese Army carrying. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold; Israel stays at highest readiness.",
    iran:
      "No fresh official MOH toll; Qeshm deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. Tehran's weekend was diplomatic — the corridor firming into a phased framework, Gharibabadi's 'no immediate reopening' line, Pezeshkian's 'position of strength' framing, and warming Pakistan, Qatar and China channels — with no reported new casualties. The standing 'seismic' and 70M-barrel claims and the Hormuz seizure threat carry, now partly overtaken by the corridor's permit logic. A rights thread — the UN rights chief's alarm over an execution spike, HRANA at least 444 in Jan-Jul — is noted but not folded into the war toll. IAEA no verification since Feb 28; ~440.9 kg 60% + ~184.1 kg 20% HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "+0 confirmed deaths on the tracked theaters across a window dominated by the pre-summit US-China maneuver, the firming Hormuz corridor, and a plateaued oil market. No fresh Houthi-Saudi, UAE-missile, Lebanon or maritime toll was verified — per §3.5.3 the standing Mokha and UAE-missile claims stay logged, not counted. The corridor's joint mine-clearance, if implemented, would lower near-term maritime-casualty risk on the strait, though a permanent form is still 30-to-60 days out. Lebanon's Aug 15 eleven-death strike (Health Ministry ~4,265 / 12,190+, Wikipedia 3,371 / 10,129 lags) holds as an unfulfilled threat exchange as UNIFIL's Khardali-Litani handover to the Lebanese Army carries. Bab al-Mandeb Tihamah (Aug 12) holds at least 6 killed / 10 wounded. Maritime toll ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mokha shut, ~1,300 workers idled; Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7). Rezaei's bypass-route threat is the most acute widening path.",
  },
};

export default data;
