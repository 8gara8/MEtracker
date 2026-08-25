import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed but tightens toward escalation-scheduled. Day 180 is the day the deferred blow got a deadline: Treasury Secretary Bessent said a sanction on 'a major financial institution' would land 'before the end of this week,' that Iran's backers would be 'cut off from the US dollar system,' and that Chinese banks facilitating Iranian oil revenue would be hit (Bloomberg, CNBC). It is not cleanly escalating — he still declined to name a Chinese bank, his own team called the rollout a 'warning shot,' and the actual list (Bank Melli for global shutdown, dozens of Chinese and Hong Kong intermediaries, teapot refineries) again spared the big banks and yuan rails. It is not de-escalating either — the US track to Tehran stays closed, Rezaei told Pakistan's mediating army chief the US 'must change its behavior' first, and Washington put its decisive escalation on a calendar. Mixed holds; the plan did not fire its round on Day 180 but scheduled it, hardening the siege by the clock rather than the deed.",
      risk7d:
        "Seven-day risk holds critical. The tracked tails — a Gulf export-node hit, a laden-tanker sinking, a lost escort convoy, a confirmed Saudi naval loss, a Hezbollah reprisal that breaks the June truce, or a confirmed American combat death — stayed untriggered, keeping the gauge off 'extreme.' But Bessent's self-imposed 'this week' deadline for a major-financial-institution sanction loads the very confrontation the rollout deferred: a US secondary-sanctions strike on a major Chinese bank, an enforcement action against Beijing's CIPS rails, an Iranian 'seismic' answer converted from rhetoric to a maritime, cyber, proxy or oil move, a Hormuz seizure escalating under the renewed fine-detain-confiscate threat, an interdiction of the CENTCOM escort corridor, or a strike on a Saudi or Emirati export route are the dominant seven-day risks. Munir's mediation is the one countervailing signal, but it runs against a closed US track and a bank deadline.",
      spillover:
        "Spillover holds critical. The war still spans Iranian soil, both maritime chokepoints, the Israel-Gaza and Israel-Lebanon seams, an open Houthi front reaching Saudi and Emirati targets, the Israel-Turkey friction over Syria, and an economic front now formalized on both sides — a US designation campaign with a scheduled bank escalation met by a Chinese blocking statute and a CIPS build-out. The plan internationalizes the fight by design: its bite runs through the Chinese banks and yuan rails Beijing is legally and structurally shielding, and Iran's threat to the Gulf-neighbor bypass routes still aims to deter the allied alignment the plan demands. The CENTCOM escort corridor keeps Washington in daily maritime custody of Gulf exports; the Lebanon truce stayed frayed — no new Israeli operation and no executed Hezbollah reprisal through Aug 25, with UNIFIL handing its Khardali-Litani position to the Lebanese Army — and the Gaza demilitarization mechanism kept that seam live with no firm pre-election Israeli commitment. No new kinetic front opened, which is why spillover did not worsen outright; that the China collision is now on a clock is why it did not ease.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'Bloomberg / CNBC / ABC News',
      event:
        "A day after 'Operation Economic Outcast' spared China's major banks, Treasury Secretary Bessent said a sanction on 'a major financial institution' would come 'before the end of this week,' warned that Iran's backers would be 'cut off from the US dollar system,' and said Chinese banks would be sanctioned if they 'facilitate transactions and are part of the ecosystem that turns Iranian oil into money' — while still declining to name a Chinese bank.",
      summary:
        "Per §3.5.3 treat 'major financial institution this week' and 'cut off from the dollar system' as a scheduled threat, not an executed action — the reserved China-bank collision now has a calendar, but Bessent named no bank and his own team called the rollout a 'warning shot.'",
      impact:
        "The political-will clock is on trial: the deadline is leverage-by-calendar, a this-week test the administration manufactured and can still walk back, meant to see whether the threat alone moves Beijing or Tehran before the costly designation is spent.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'TechTimes / Forbes / Washington Post',
      event:
        "The designation list's contours sharpened: Iran's largest state bank, Bank Melli, was named for mandatory global shutdown of every branch; digital assets were added as a secondary-sanctions sector for the first time (alongside technology, gold, aviation and shipping); and dozens of mainland-Chinese and Hong Kong intermediaries plus teapot refineries were hit — but the major Chinese banks and yuan-clearing rails were again left standing.",
      summary:
        "Per §3.5.5 quantify the shape: 60-plus entities across five secondary-sanctions sectors, a first-ever digital-assets tranche, and Iran's flagship state bank marked for closure — real breadth, but the one target the plan is engineered to reach stays untouched a second day.",
      impact:
        "The coalition-cohesion clock stays loaded: Washington widened the net and shuttered an Iranian state bank while keeping the decisive Chinese-bank escalation in reserve, the calibration the oil market again read as less than the maximal China confrontation.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'Forbes / CNBC / China-Global South Project',
      event:
        "Analysts judged that without Beijing's cooperation Iran will not face an 'economic D-Day': China buys more than 80% of Iran's exported oil, its teapot refineries do not need dollar access, and it is scaling its yuan-based CIPS payment system as a dollar-clearing alternative precisely to blunt the collision Washington is threatening — atop the 2021 blocking statute it invoked on Day 179.",
      summary:
        "Per §3.5.6 the China-dependency and institutionalization priors deepen — Beijing is converting refusal from rhetoric into infrastructure (blocking statute plus CIPS), building the off-ramp the plan's central bet is designed to close.",
      impact:
        "The plan's hinge is also its trap: naming a major Chinese bank risks the very crisis of confidence in the dollar system that would hand CIPS its use case, which is why the deferral persisted and the market read a warning shot rather than a collision.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: 'Arab News / Al Jazeera / Bloomberg',
      event:
        "Pakistan's army chief Field Marshal Asim Munir ended a Tehran mission aimed at reviving the lapsed Islamabad memorandum and brokering between Washington and Tehran, meeting President Pezeshkian, Foreign Minister Araghchi, Speaker Ghalibaf and security chief Rezaei — who told him the US 'must change its behavior and take concrete steps toward fulfilling the conditions of the memorandum' first.",
      summary:
        "Per §3.5.3 read Munir's mission as a mediation attempt, not a track reopening — the lapsed MoU has no US counterparty, and Rezaei's precondition keeps Iran's stance hard even as a new channel reappears alongside Egypt's.",
      impact:
        "The negotiation-capacity clock gets a jolt without resetting: a fresh mediator is active on the war's economic phase, but against a closed US track and a self-imposed US bank deadline it eased supply-shock fears more than it moved the standoff.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'CNBC / Mansfield Energy',
      event:
        "The oil market kept selling the news: Brent fell about 3% to below $90 a barrel, extending the previous session's loss, as traders judged the sanctions 'less severe than markets anticipated' and Munir's mediation eased near-term supply-shock fears, even as the CENTCOM escort corridor kept flowing under a standing enforcement regime.",
      summary:
        "Per §3.5.5 quantify: Brent slid roughly 3% below $90 on a plan that scheduled the China-bank blow rather than striking it, plus a mediation signal — a 'sell-the-news' read that the immediate secondary-sanctions-on-China tail eased.",
      impact:
        "The energy and political-will clocks diverge again: the price relief signals the market discounted the deferred collision, while the this-week bank deadline and the corridor's rising exposure keep the repricing risk chambered above a draining stock base.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series; Day 180 was again a plan-and-diplomacy day — sanctions aftermath, a Pakistani mediation mission, and a selling oil market, not shooting — and no American casualty was reported; DCAS holds 18/687, a wider scope, not a confirmed hostile loss; the Kuwait Ahmad al-Jaber death stays denied by CENTCOM",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 the brief keeps the combat figure and flags DCAS; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule, which is keyed to a verified combat death. The US-Iran shooting stayed paused as Washington played its economic hand — Bessent scheduling a major-financial-institution sanction for this week — and reaffirmed there would likely be no large-scale kinetic restart. CENTCOM's escort corridor — more than 660 million barrels and ~1,300 vessels since May, moving ~10 mb/d — remains a standing daily maritime exposure, with enforcement holding at ~55 blockade-runners rerouted, three disabled, two boarded since mid-July. The USS George Washington is on station after relieving the USS Abraham Lincoln. The $67 billion supplemental and the 50-48 Senate war-powers rebuke stay unresolved in August recess.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0; no new Israeli fatalities or wounded reported in the 24-48h; Israel stayed offstage again as the action ran through the US-Iran economic and mediation tracks, holding its Gaza posture — no IDF redeployment until Hamas fully disarms under a US general, on Kushner's 30-day weapons-handover / 60-90-day tunnel-closure timeline — and keeping its Hezbollah threat exchange live at highest readiness",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA. Israel was largely offstage again on Day 180 as the action ran through the US-Iran economic and mediation tracks. Its posture stayed political rather than costly: Jerusalem and the Board of Peace hold that Hamas must fully disarm and Gaza be demilitarized under a US general before any IDF redeployment or reconstruction, with Kushner floating a 30-day weapons handover and 60-90-day tunnel closures, and the roadmap Netanyahu still calls 'problematic' before the October 27 election. In Lebanon no new Israeli operation was reported through Aug 25, Hezbollah had not executed its threatened retaliation for the Aug 15 strike, and UNIFIL handed its Khardali-Litani position to the Lebanese Army's 7th Brigade on Aug 20 as international strategy shifts to LAF 'pilot zones' for disarming Hezbollah. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold — Israel acts on its own clock, outside the US-Iran framework — and it stayed at highest readiness.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; Iran's Day 180 action was rhetorical, legal, and diplomatic — Rezaei telling Munir the US 'must change its behavior,' the standing 'seismic'-answer and 70-million-barrel claims, the renewed Hormuz seizure warning, and the Pezeshkian memorandum-revival track — with no reported new casualties; the UN rights chief's alarm over a sharp rise in executions (HRANA at least 444 Jan–Jul) is noted but not folded into the war toll",
      status:
        "No updated official Iranian toll on Day 180. The Qeshm Island deaths and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. Tehran's Day 180 moves were rhetorical, legal, and diplomatic — Rezaei telling Pakistan's Munir the US 'must change its behavior and take concrete steps' before the memorandum can revive, the standing 'seismic'-retaliation and 70-million-barrel loading claims, the renewed threat to fine, detain, or confiscate vessels defying the Hormuz permit regime, and Pezeshkian's continued defense of the lapsed memorandum — with no reported new casualties. Per §3.1's dual-sourcing a separate rights thread — the UN rights chief's renewed alarm over a sharp rise in executions, with HRANA logging at least 444 for January–July — is noted but kept out of the war-casualty cumulative. The IAEA has run no verification since February 28 and remains locked out of Isfahan; the ~440.9 kg of 60% HEU stays unverified and likely at Isfahan, with ISIS flagging enough for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        "Lebanon source-split: Health Ministry ~4,265 / 12,190+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA (Kuwait 10 killed / 115 injured; Saudi Arabia 11 civilians injured, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded per Yemen government (Houthis unconfirmed) · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing",
      delta:
        "+0 confirmed deaths in a 24-48h dominated by the sanctions aftermath, China's structural leverage, and the Pakistani mediation; no fresh Houthi-Saudi, UAE-missile, Lebanon or maritime toll was verified; the Aug 15 Lebanon strike and the Aug 12 Tihamah toll carry, as does the standing maritime ledger",
      status:
        "The 'other' ledger held on confirmed deaths on another plan-and-diplomacy day. No fresh Houthi-Saudi, UAE-missile, Lebanon or maritime toll was verified — per §3.5.3 the standing Houthi Saudi-warship claim and the UAE ballistic-missile threat stay logged, not counted. In Lebanon the Aug 15 strike that killed at least eleven including three children (Health Ministry cumulative ~4,265 / 12,190+, the Wikipedia series 3,371 / 10,129 lagging) holds as an unfulfilled Hezbollah-Israel threat exchange — no new Israeli operation and no executed reprisal through Aug 25 — as UNIFIL handed its Khardali-Litani position to the Lebanese Army's 7th Brigade and strategy shifts to LAF 'pilot zones.' The Bab al-Mandeb Tihamah toll (Aug 12) holds at least six killed and ten wounded per Yemen's government. Hormuz commercial transit stays effectively shut outside the US convoy; the maritime toll holds ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; the Mecca pact stayed untested; Mokha shut, ~1,300 workers idled. Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7). Rezaei's threat to the Gulf-neighbor bypass routes remains the most acute new widening path against this ledger.",
    },
  },
  exec:
    "Day 180 is the day the deferred blow got a deadline. Twenty-four hours after 'Operation Economic Outcast' landed as roughly sixty designations that spared China's major banks, Treasury Secretary Scott Bessent said a sanction on 'a major financial institution' would come 'before the end of this week,' warned that Iran's backers would be 'cut off from the US dollar system,' and told Chinese banks they would be sanctioned if they 'facilitate transactions and are part of the ecosystem that turns Iranian oil into money' (Bloomberg, CNBC, ABC News). He still declined to name a Chinese bank — his own team called the Day 179 rollout a 'warning shot' (Yahoo News) — so per §3.5.3 the 'this week' pledge is a scheduled threat, not an executed one. The list's contours sharpened: Iran's largest state bank, Bank Melli, was named for mandatory global shutdown, digital assets were added as a secondary-sanctions sector for the first time, and dozens of Chinese and Hong Kong intermediaries and teapot refineries were hit — but the big banks and yuan rails were left standing (TechTimes, Forbes). A new mediator moved: Pakistan's army chief Asim Munir ended a Tehran mission carrying a memorandum-revival proposal, though security chief Rezaei told him the US 'must change its behavior' first (Arab News, Bloomberg). The market kept selling — Brent fell about 3% below $90 on the calibration read and the mediation (CNBC, Mansfield Energy). Direction holds mixed, now tightening as the collision is put on a clock; seven-day and spillover risk hold critical; the thirty-day ceasefire probability holds at 5.",
  implications: [
    {
      title: "The deferred blow gets a deadline — but a scheduled threat is not a struck one",
      body:
        "On Day 179 Washington kept the China-bank collision in reserve; on Day 180 it put it on a clock. Bessent said a sanction on 'a major financial institution' would land 'before the end of this week,' that Iran's backers would be 'cut off from the US dollar system,' and that Chinese banks would be hit if they 'facilitate transactions and are part of the ecosystem that turns Iranian oil into money' (Bloomberg, CNBC). That is a real tightening — the reserved escalation now has a calendar. But per §3.5.3 read the pledge as a claim, not an act: Bessent still declined to name a Chinese bank, his own team called the rollout a 'warning shot' (Yahoo News), and the actual list — Bank Melli marked for global shutdown, dozens of Chinese and Hong Kong intermediaries, the teapot refineries — again spared the big banks and yuan rails the plan is built to break (TechTimes, Washington Post). Under the multi-clock framework the political-will clock is the one on trial. Analytical judgment: this is leverage-by-calendar — a this-week test the administration manufactured and can still walk back, meant to see whether the threat alone moves Beijing or Tehran before the costly designation is spent. The gap between 'cut off from the dollar system' and a list that spares the dollar-clearing banks remains the intelligence. The round is now scheduled, but still chambered.",
    },
    {
      title: "China is the plan's hinge — and it is building the door out",
      body:
        "The plan's arithmetic runs through Beijing, and Beijing is engineering an exit. Analysts converged on Day 180 that without China's cooperation Iran will not face an 'economic D-Day': China buys more than 80% of Iran's exported oil, its teapot refineries do not need dollar access, and it is scaling the yuan-based CIPS as a dollar-clearing alternative precisely to blunt the collision Washington is threatening (Forbes, CNBC, China-Global South Project). Per §3.5.6 the China-dependency and institutionalization priors deepen: Beijing's Day 179 blocking statute plus its CIPS build-out converts refusal from rhetoric into infrastructure. Under the multi-clock framework the coalition-cohesion clock tightens. Analytical judgment: the plan's central bet — that fear of dollar exclusion coerces Chinese banks — runs into a counterparty actively building the off-ramp, and naming a major Chinese bank risks the very crisis of confidence in the dollar system that would hand CIPS its use case. That two-sided trap is why Washington deferred and why the market read a 'warning shot' rather than a collision. The siege hardens on paper while the pillar it targets pours the foundation of its exit — the configuration that lengthens the war rather than forcing its economic climax.",
    },
    {
      title: "Taiwan: a new mediator and a lower Brent extend the reprieve on the same two clocks",
      body:
        "Per §3.5.10 there was no Taiwan-specific development on Day 180; the exposure is structural, and the day extended Taipei's reprieve on both channels. The financial channel: Washington's continued sparing of the major Chinese banks and yuan rails — and China's CIPS build-out — leaves intact, for now, the settlement plumbing that clears much of Asia's energy trade, so the spillover into Gulf-to-Asia cargo financing again did not materialize (CNBC, Forbes). The gathering risk is unchanged: the 'this week' bank deadline signals the collision is scheduled, not cancelled, and when it lands it hits the rail Taipei's imports also ride. The physical channel: Brent below $90 and Munir's mediation eased the near-term supply-shock premium, but Rezaei's threat to the Gulf's bypass export routes still shadows the corridor carrying roughly a third of Taiwan's 23.6 Mt of LNG, nearly 8 Mt of it Qatari (CSIS). Per §3.5.5 the arithmetic stays unforgiving: 99% import dependence, about eleven days of gas cover versus some 120 days of oil. Analytical judgment: Day 180 bought Taipei more time on both clocks, but a deadline is not a cancellation and a mediation is not yet a track. The prudent read of an extended reprieve is to use the interval — winter-gas stockpiling, supplier diversification, settlement-rail contingency — not to price the market's relief as an all-clear.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. Day 180 was again a plan-and-diplomacy day — no US-Iran shooting, no reported American casualty as Bessent scheduled a major-financial-institution sanction for this week. The CENTCOM escort corridor (~660M+ barrels / ~1,300 vessels since May, ~10 mb/d) remains a standing exposure with enforcement holding at ~55 ships rerouted, three disabled, two boarded since mid-July; the USS George Washington is on station. The $67B supplemental and 50-48 rebuke stay unresolved in recess.",
    israel:
      "Casualties hold at 56 KIA / 8,652+ WIA; no new Israeli toll reported. Israel was largely offstage again as the action ran through the US-Iran economic and mediation tracks. Its posture stayed political — the IDF stays until Hamas disarms under a US general, with Kushner floating a 30-day weapons handover and 60-90-day tunnel closures and the roadmap Netanyahu still calls 'problematic' before the October 27 election, and the Hezbollah threat exchange live but unfulfilled after the Aug 15 Lebanon strike (carried in 'other'), with UNIFIL handing its Khardali-Litani position to the Lebanese Army as strategy shifts to LAF 'pilot zones.' Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold; Israel stays at highest readiness on its October 27 election clock.",
    iran:
      "No fresh official MOH toll; Qeshm deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. The day's Iranian action was rhetorical, legal, and diplomatic — Rezaei telling Munir the US 'must change its behavior,' the standing 'seismic' and 70M-barrel claims, the renewed Hormuz seizure warning, and the Pezeshkian memorandum-revival track — with no reported new casualties. A rights thread — the UN rights chief's alarm over a sharp rise in executions, HRANA at least 444 in Jan–Jul — is noted but not folded into the war toll. IAEA no verification since Feb 28; ~440.9 kg 60% HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "+0 confirmed deaths in a 24-48h dominated by the sanctions aftermath, China's structural leverage, and the Pakistani mediation. No fresh Houthi-Saudi, UAE-missile, Lebanon or maritime toll was verified — per §3.5.3 the standing Mokha claim and the UAE ballistic-missile threat stay logged, not counted. Lebanon's Aug 15 eleven-death strike (Health Ministry ~4,265 / 12,190+, Wikipedia 3,371 / 10,129 lags) holds as an unfulfilled threat exchange — no new Israeli operation, no executed reprisal through Aug 25 — as UNIFIL hands Khardali-Litani to the Lebanese Army and strategy shifts to LAF 'pilot zones.' Bab al-Mandeb Tihamah (Aug 12) holds at least 6 killed / 10 wounded. Maritime toll ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mecca pact untested; Mokha shut, ~1,300 workers idled; Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7). Rezaei's bypass-route threat is the most acute new widening path.",
  },
};

export default data;
