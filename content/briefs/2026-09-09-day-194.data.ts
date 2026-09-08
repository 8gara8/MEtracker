import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds escalating on Day 194 as the war jumped fronts. Iran-aligned Houthi forces launched their heaviest barrage on Saudi Arabia in years — dozens of ballistic missiles and drones at Aramco energy sites in Abha, Khamis Mushait, Jazan and Najran, hitting the 400,000-barrel-a-day Jazan refinery and King Khalid airbase, igniting fires and wounding 73 — the first mass-casualty strike on Saudi soil of the war and the effective end of the 2022 truce. At Hormuz the chokepoint hardened rather than quieted: Iran's SNSC pressed its coming 'restricted zone' and the IRGC struck a remotely-operated US vessel that had entered a restricted portion, while the tanker war carried. Nothing on Day 194 reversed the return to force; the fighting instead widened to a second Arab-state energy front.",
      risk7d:
        "Seven-day risk holds extreme. A direct Houthi strike on Saudi energy heartland, a vowed Saudi reprisal into Yemen, a coming Iranian restricted zone layered on the debut of anti-ship ballistic missiles, and a live escort corridor in a mined strait multiply the flashpoints. Brent touched $99.16 with a session high near $99.46, its closest approach to $100 since the war began, on a drawn-down stock base — a second strike on an export node, a laden-tanker loss, a lost convoy, or a US casualty from a salvo the next evasion does not dodge each sends it through triple digits. The Yanbu reroute that hedged a closed Hormuz is now itself under Houthi fire, and the IAEA's declaration of a year of 'complete blindness' removes the last verification floor.",
      spillover:
        "Spillover holds critical and arguably sharpened. The map now burns at both ends of the Arabian Peninsula: Iranian soil under a continuing campaign, both maritime chokepoints, the Gulf host states directly targeted, an open and now escalating Saudi-Yemen front, the Israel-Gaza and Israel-Lebanon seams, and a formalized economic front wired to the September 24 US-China summit. Per §3.5.5 the Houthi barrage converted a would-be sanctions partner into a live battlefield and reopened the Red Sea blockade threat to the Yanbu workaround. The reach again outran the damage on the Iran front — the IRGC's vessel strike hit an unmanned drone boat — but the 73 wounded on Saudi soil, the collapse of Hormuz throughput to a fifth of pre-war flow, China's open defiance and Iran's deepening execution wave are the standing worsening signals.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'US News / The National / NPR / CNN / Al Jazeera',
      event:
        "Iran-aligned Houthi forces launched their heaviest barrage on Saudi Arabia in years, firing dozens of ballistic missiles and drones at Aramco energy sites in Abha, Khamis Mushait, Jazan and Najran — including the 400,000-barrel-a-day Jazan refinery and King Khalid airbase — igniting fires that halted operations at several facilities and wounding 73 people, among them women and children. The Saudi-led coalition's Turki al-Malki called it a 'serious escalation' and vowed 'all necessary operational measures.'",
      summary:
        "Per §3.5.5 this is the first mass-casualty strike on Saudi soil of the war and the effective end of the 2022 truce, converting a would-be sanctions partner into a live battlefield and reopening a second energy front alongside Hormuz.",
      impact:
        "The energy-infrastructure and coalition-cohesion clocks move together: with Jazan alight and the Houthis blockading Saudi-linked Red Sea shipping, the Yanbu reroute that hedged a closed Hormuz is itself under fire, and Brent's approach to $100 loads the rupture tail on a Saudi reprisal or a second strike on an export node.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'CNBC / NBC News / Trading Economics',
      event:
        "The market priced the widening war toward rupture: Brent crude touched $99.16 a barrel with a session high near $99.46 — its closest approach to $100 since the war began and up more than 8% in September — driven by the Houthi strikes on Saudi energy sites, fresh US tanker action near Kharg Island, and Hormuz throughput near a fifth of pre-war flow; Goldman flagged a $120 tail into 2027 if Gulf output stays depressed.",
      summary:
        "Per §3.5.5 the gap between claim and record persists — Washington's 'oil is flowing' line against a chokepoint at a fifth of normal and a second energy front now alight — while war-risk insurance sits multiples above baseline and global stocks draw down.",
      impact:
        "The energy-infrastructure clock stays dominant and the rupture tail loaded: a Saudi reprisal, a second export-node strike, a laden-tanker loss, or a named Chinese bank sends Brent past $100 in a session on a drawn-down base.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'GlobalSecurity / Washington Times / Al Jazeera',
      event:
        "The Hormuz chokepoint hardened both ways: Iran's Supreme National Security Council pressed the 'restricted zone' beyond the strait that Rezaei promised 'in the coming days,' and the IRGC said it struck a remotely-operated US vessel that had entered a restricted portion of the strait, while the two-way tanker war carried and Washington claimed rising volumes against independent reads near a fifth of pre-war flow.",
      summary:
        "Per §3.5.3 hold the IRGC's account as a claim: the target was an unmanned drone boat, signaling intent to interdict ahead of any formal declaration without yet crossing the line that draws a US casualty and Trump's reprisal rule.",
      impact:
        "The energy-infrastructure clock moves: a declared Iranian zone with insurance and blacklist penalties, backed by a first interdiction, deepens the throughput collapse and hands the IRGC a pretext to seize or strike a crewed vessel — a mass-casualty and >$100 Brent trigger in one.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: 'Euronews / Jerusalem Post / Al Jazeera / Amnesty International / Newsweek',
      event:
        "The nuclear file sharpened and the connected fronts held: at the IAEA's Vienna Board of Governors, director-general Grossi said the agency has been 'completely blind' for more than a year, with over twenty sites and about 440 kg of 60% uranium unverified and a 'serious proliferation concern'; Gaza stayed deadlocked on disarmament-before-withdrawal; Iran's execution wave deepened (Amnesty: at least 26 protesters executed since January, 60-plus at risk); and the major-Chinese-bank sanction stayed pinned behind the September 24 Xi summit as Washington hit a Turkish bank instead.",
      summary:
        "Per §3.5.6 the standing priors hold unresolved — the unverified nuclear stockpile, the Gaza sequencing deadlock, the Israeli-independence and Lebanon-gap priors — and per §3.1 the deepening rights thread stays outside the war toll.",
      impact:
        "The humanitarian-escalation and negotiation-capacity clocks move: the war widens on the nuclear, Gaza and human-rights vectors while the economic D-Day stays deferred, each track formalized into standing leverage rather than resolved.",
    },
  ],
  casualties: {
    us: {
      cumulative:
        'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 confirmed on the AP/CENTCOM combat series into Day 194 — a seventh day with no verified new US combat casualty. The IRGC said it struck a remotely-operated (unmanned) US vessel that entered a restricted portion of the strait — no crew, no casualty — and fresh US tanker strikes near Kharg drew no reported US losses. Per §3.5.3 the 18th DCAS death stays unconfirmed as hostile, Trump's 'per ship' rule untriggered, and Iran's claim of American service members killed stays denied and uncounted. The escort corridor (~8-9 mb/d) runs amid live fire with the USS George Washington on station; the blockade holds at eighty-six vessels rerouted, three disabled, two boarded; Iran's coming restricted zone and its anti-ship ballistic missiles keep the next salvo one event from a first Navy casualty.",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 keep the combat figure and flag DCAS. Day 194 added no US count — a seventh quiet day — but the exposure profile shifted: the IRGC's move to interdict shipping in a self-declared restricted portion of the strait was tested against an unmanned US vessel, the low-cost rehearsal of a doctrine that against a crewed ship draws Trump's reprisal rule. The escort corridor (~660 million barrels and ~1,300 vessels since May, moving ~8-9 mb/d) runs amid live fire; the $67 billion supplemental and the 50-48 Senate war-powers rebuke stay unresolved in recess ahead of the November midterms, now against a war that has struck a Gulf partner's oil heartland.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front and no new Israeli military fatalities on the Lebanon front. Israel again stayed offstage on the US-Iran maritime fight and the Saudi-Houthi escalation while holding its Gaza campaign deadlocked and lethal — the Board of Peace's disarmament-before-withdrawal roadmap unimplemented, Netanyahu's office opposed — and its Lebanon reprisal cycle live; the standing Lebanese dead are logged under 'other,' not folded into the war cumulative.",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA on the Iran front; no new Israeli toll on Day 194. Israel's own fronts stayed hot but produced no new Israeli count: the Gaza roadmap holds deadlocked — the Board of Peace insists on no Israeli withdrawal before Hamas disarms, Hamas conditions any move on withdrawal and reconstruction, and Netanyahu's office opposes the plan, with 1,100-1,200+ Palestinians killed since the October 2025 ceasefire, a connected theater the series does not fold into the war cumulative. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold — Israel continues to act on its own clock, outside the US-Iran framework, offstage on a day whose escalation ran through Riyadh and the strait.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No update to the official war toll; the weekend-into-Monday tanker exchange produced no released Iranian count, and casualties from the Iranian tankers the US struck near Kharg are unreleased. The rights thread deepened: Amnesty counts at least 26 protesters executed since the January 2026 unrest — including the public executions of Amir Hossein Safari and Abolfazl Sepahi — with 60-plus at risk including three arrested as children, kept out of the war toll per §3.1. The contested September 1 Kuhestak wedding strike carries per §3.1 dual-sourcing (NYT-corroborated US bomb; Iranian-source toll of up to five killed and 68+ wounded held pending verification).",
      status:
        "The official Iranian war toll carries pending an update; Day 194 added no new war-front count. The movement was again on the rights thread, kept out of the war cumulative per §3.1: Amnesty reports at least 26 people executed over the January 2026 protests since the year began — including the public executions of Amir Hossein Safari and Abolfazl Sepahi, arrested in Esfahan on January 8 — with more than 60 sentenced to death and at risk, including three arrested as children, and the UN's Türk warning the death penalty is being used to instil fear. The contested civilian figure holds: the September 1 Kuhestak wedding strike is independently corroborated as a US-released bomb, but the toll of up to five killed and 68+ wounded remains an Iranian-source count not folded into the MOH aggregate. Cumulative HRANA stands at 3,636+ with its understatement caveat, Foundation ~3,468, MOH ~3,559 / 27,400+, US and Israeli estimates to 6,000+. The IAEA says it has been 'completely blind' for more than a year; ~440.9 kg of 60% plus ~184.1 kg of 20% HEU stays unverified and likely at Isfahan.",
    },
    other: {
      cumulative:
        "Lebanon source-split: Health Ministry ~4,265 / 12,190+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 158+ WIA (Kuwait 10 killed / 115 injured; Saudi Arabia ~84 injured — 11 on Aug 7, 73 on Sep 8) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing",
      delta:
        "The connected-theater ledger took its first mass-casualty delta in weeks: the Houthi barrage on Saudi Arabia wounded 73, including women and children, and ignited fires at Aramco energy sites in Abha, Khamis Mushait, Jazan and Najran — no fatalities reported, but the Gulf breakout rises to 33+ killed / 158+ wounded (Saudi ~84 injured across Aug 7 and Sep 8). On the Iran front interceptors and ship evasions held; the US struck Iranian tankers near Kharg with no released Iranian count, and the IRGC's strike on an unmanned US vessel produced no casualty. The standing Lebanon, maritime, Bab al-Mandeb and Iraq tolls carry; the Houthi Red Sea blockade of Saudi-linked shipping threatens the Yanbu reroute.",
      status:
        "The 'other' ledger took its first verified mass-casualty delta in weeks: the Houthi drone-and-missile barrage on Saudi Arabia's southern energy heartland wounded 73, including women and children, with fires and halted operations at Aramco sites in Abha, Khamis Mushait, Jazan and Najran, and the 400,000-barrel-a-day Jazan refinery among the targets — no fatalities reported, but the Gulf breakout rises to 33+ killed / 158+ wounded. On the Iran front the interceptors and ship evasions held: the US struck Iranian tankers near Kharg (Iranian casualties unreleased) and the IRGC's strike on a remotely-operated US vessel produced no casualty. Per §3.5.3 the Houthi Saudi-warship claim, the UAE-missile threat and Iran's downed-MQ-9 claims stay logged, not counted. Hormuz throughput held near a fifth of pre-war flow with four-to-six vessels a day, many AIS-dark, and Iran's coming restricted zone would sharpen the squeeze; the Houthi Red Sea blockade of Saudi-linked shipping now directly threatens the Yanbu pipeline reroute. The Lebanon reprisal cycle carries (Health Ministry ~4,265 / 12,190+, the Wikipedia series 3,371 / 10,129 lagging); Bab al-Mandeb Tihamah (Aug 12) holds at least six killed / ten wounded; the maritime toll holds ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mokha shut, ~1,300 idled; Kuwait 10/115; Iraq 148+/402+.",
    },
  },
  exec:
    "Day 194 widened the war south. Iran-aligned Houthi forces launched their heaviest barrage on Saudi Arabia in years — dozens of ballistic missiles and drones striking Aramco energy sites across Abha, Khamis Mushait, Jazan and Najran, hitting the 400,000-barrel-a-day Jazan refinery and igniting fires that halted operations and wounded 73 people, including women and children (US News, The National, NPR, CNN). The Saudi-led coalition called it a 'serious escalation' and vowed 'all necessary operational measures,' reopening the Yemen front the 2022 truce had frozen. The market read it toward rupture: Brent touched $99.16 and a session high near $99.46 — its closest approach to $100 since the war began, up more than 8% in September (CNBC, NBC News, Trading Economics). At Hormuz the chokepoint hardened both ways: Iran's SNSC pressed its coming 'restricted zone,' and the IRGC said it struck a remotely-operated US vessel that had entered a restricted portion of the strait, even as the two-way tanker war carried (GlobalSecurity, Al Jazeera). At the IAEA's Vienna board, Grossi called the agency 'completely blind' for more than a year, with over twenty sites and ~440 kg of 60% uranium unverified — a 'serious proliferation concern' (Al Jazeera, Euronews, Jerusalem Post). The connected fronts held: Gaza deadlocked on disarmament-before-withdrawal, Iran's execution wave deepening (Amnesty: 26+ since January), the China bank blow still pinned behind the September 24 Xi summit. Direction holds escalating; seven-day risk extreme; spillover critical; the thirty-day ceasefire probability holds at 3.",
  implications: [
    {
      title: 'The war widens south — the Houthi barrage reopens the Saudi front and puts Brent at $100 door',
      body:
        "The most consequential move of Day 194 came not from Hormuz but from Yemen. Iran-aligned Houthi forces fired dozens of ballistic missiles and drones at Saudi Arabia's southern energy heartland — Aramco sites at Abha, Khamis Mushait, Jazan and Najran, the 400,000-barrel-a-day Jazan refinery, and King Khalid airbase — igniting fires, halting operations and wounding 73, including women and children (US News, The National, NPR, CNN). Per §3.5.5 quantify the shift: this is the first mass-casualty strike on Saudi soil of the war and the effective end of the 2022 truce, converting a would-be sanctions partner into a live battlefield and reopening a second energy front alongside Hormuz. The Saudi-led coalition's Turki al-Malki called it a 'serious escalation' and vowed 'all necessary operational measures' (Daily Caller, Gulf News). Under the multi-clock framework the energy-infrastructure clock is dominant and reinforcing: with Jazan alight and the Houthis blockading Saudi-linked Red Sea shipping, the Yanbu reroute that was Riyadh's workaround for a closed Hormuz is itself now under fire, and Brent touched $99.16 with a session high near $99.46 (CNBC, NBC News). Analytical judgment: the war's center of gravity moved to a front the sanctions coalition assumed was rear area. A Saudi reprisal into Yemen, a second strike on an export node, or a laden-tanker loss at Hormuz each sends Brent past $100 on a stock base already drawn thin.",
    },
    {
      title: "The chokepoint hardens both ways — a coming Iranian zone, an IRGC interdiction, and an IAEA gone 'completely blind'",
      body:
        "Hormuz did not quiet; it institutionalized. Iran's SNSC pressed the 'restricted zone' Rezaei promised 'in the coming days,' and the IRGC said it struck a remotely-operated US vessel that had entered a restricted portion of the strait — an enforcement action, if an unmanned one, ahead of any formal declaration (GlobalSecurity, Washington Times, Al Jazeera). Per §3.5.3 hold the claim as Tehran's: the target was a drone boat, not a crewed ship, so the move signals intent to interdict without yet crossing the line that draws a US casualty and Trump's reprisal rule. Running beneath it, the nuclear file hardened at the IAEA's Vienna board, where Grossi called the agency 'completely blind' for more than a year — over twenty sites and about 440 kg of 60% uranium unverified, a 'serious proliferation concern' pressed with 'the utmost urgency' (Euronews, Jerusalem Post, Al Jazeera). Under the multi-clock framework the negotiation-capacity clock moves without advancing: Pezeshkian again offered to 'immediately reciprocate' under the lapsed Islamabad memorandum, but there is still no US counterparty, and the major-Chinese-bank sanction that would rupture the oil-for-money channel stays pinned behind the September 24 Xi summit as Washington spares Beijing and hits a Turkish bank instead (Washington Times, Newsweek, CNBC). Analytical judgment: both coercive tracks — the strait and the stockpile — are being formalized into standing leverage rather than resolved, each raising the cost of the eventual off-ramp and each one incident from a step-change.",
    },
    {
      title: 'Taiwan: a second energy front on the sea lane its buffer must bridge',
      body:
        "Per §3.5.10 no development aimed at Taipei landed on Day 194, but the Houthi strikes on Saudi energy sharpen the exposure by opening a second front on the very supply chain Taiwan's hedge relies on. Roughly a third of Taiwan's LNG still transits Hormuz (~8 Mt of Qatari gas), and the reroute logic that would move Gulf crude and gas around a closed strait runs through Red Sea and Yanbu infrastructure the Houthis are now attacking and blockading (US News, CNN, Al Jazeera). Per §3.5.5 the arithmetic is unchanged and unforgiving: 95-99% import dependence, about eleven days of gas cover against some 120 of oil, in the month Taipei itself flagged its buffer runs down. The financial clock points to the same fortnight: the Chinese-bank designation and the IAEA access question both sit the September 24 window (Newsweek, Euronews). Analytical judgment: a war that now burns at both ends of the Arabian Peninsula — Hormuz hardening into competing blockades, the Red Sea reroute under Houthi fire — removes the geographic escape valve Taiwan's buffer was built to exploit. The banked hedge (a shift toward ~60% US crude and a 25%-US-LNG-by-2029 goal) is the right direction, but Day 194 is a reminder that the transition window and the war's widening are running against each other.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. A seventh quiet day for US casualties: the IRGC's strike hit a remotely-operated (unmanned) US vessel that entered a restricted portion of the strait, and fresh US tanker strikes near Kharg drew no US losses. Iran's earlier claim of American service members killed stays denied and uncounted; Trump's 'per ship' rule stays untriggered. The blockade holds at ~86 vessels rerouted, three disabled, two boarded; the escort convoy (~660M+ barrels / ~1,300 vessels since May, ~8-9 mb/d) runs amid live fire with the USS George Washington on station. The $67B supplemental and 50-48 rebuke stay unresolved in recess ahead of the November midterms.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new Israeli toll. Israel stayed offstage on the US-Iran maritime fight and the Saudi-Houthi escalation while its Gaza campaign held deadlocked and lethal — the Board of Peace insists on no Israeli withdrawal before Hamas disarms, Hamas conditions any move on withdrawal and reconstruction, and Netanyahu's office opposes the plan (a connected theater, not folded into the war cumulative; 1,100-1,200+ killed since the October 2025 ceasefire). The standing Lebanese dead are logged under 'other.' Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold.",
    iran:
      "Official MOH war toll carries pending an update; no new war-front count from the weekend's naval exchange, and casualties from the Iranian tankers the US struck near Kharg are unreleased. The day's movement was on the rights thread, kept out of the war toll per §3.1: Amnesty counts at least 26 protesters executed since the January 2026 unrest — including the public executions of Amir Hossein Safari and Abolfazl Sepahi, arrested in Esfahan on January 8 — with 60-plus at risk including three arrested as children, and the UN's Türk warning the death penalty is being used to instil fear. The Sep 1 Kuhestak wedding strike stays independently corroborated as a US-released bomb, but the toll — up to five killed, 68+ wounded — remains an Iranian-source count not folded into the MOH aggregate. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. IAEA says it has been 'completely blind' for more than a year; ~440.9 kg 60% + ~184.1 kg 20% HEU likely at Isfahan (§3.5.3).",
    other:
      "The spillover ledger took its first verified mass-casualty delta in weeks: the Houthi barrage on Saudi Arabia wounded 73, including women and children, with fires and halted operations at Aramco sites in Abha, Khamis Mushait, Jazan and Najran (the 400,000-bpd Jazan refinery among the targets) — no fatalities reported, but the Gulf breakout rises to 33+ killed / 158+ wounded (Saudi ~84 injured across Aug 7 and Sep 8). On the Iran front the interceptors and ship evasions held; the US struck Iranian tankers near Kharg (crew casualties unreleased) and the IRGC's strike on an unmanned US vessel produced no casualty. Per §3.5.3 the Houthi Saudi-warship claim, the UAE-missile threat and Iran's downed-MQ-9 claims stay logged, not counted. Hormuz throughput near a fifth of pre-war flow with four-to-six vessels a day (many AIS-dark); Iran's coming restricted zone would sharpen the squeeze; the Houthi Red Sea blockade of Saudi-linked shipping now threatens the Yanbu reroute; war-risk premiums multiples above normal. The Lebanon reprisal cycle carries (Health Ministry ~4,265 / 12,190+, Wikipedia 3,371 / 10,129 lags); Bab al-Mandeb Tihamah (Aug 12) holds at least 6 killed / 10 wounded; maritime toll ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mokha shut, ~1,300 idled; Kuwait 10/115; Iraq 148+/402+.",
  },
};

export default data;
