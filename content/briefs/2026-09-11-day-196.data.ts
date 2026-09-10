import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds escalating on Day 196 as the war acquired a timeline set in Washington, not Tehran: President Trump said he is 'not looking for a deal with Iran' and does not expect oil to fall until 'right after' the November midterms, and the market repriced Brent to $105 — its highest since May, up nearly 6% on the session and near $107 intraday. The Saudi–Yemen front turned to mass-casualty ground war over Bab al-Mandeb, the IAEA referred Iran to the UN Security Council, and the Hormuz 'restricted zone' gained coordinates. Nothing on Day 196 pointed toward de-escalation; the US principal put a floor under the war's duration.",
      risk7d:
        "Seven-day risk holds extreme. The US president has publicly ruled out a near-term deal and dated any relief to after the midterms, removing the political incentive to de-escalate while a mass-casualty Saudi–Yemen ground war, a coordinated Houthi offensive toward Bab al-Mandeb, a live escort corridor in a mined strait, and Brent above $105 on a drawn-down stock base multiply the flashpoints. A second strike on a Gulf export node, a laden-tanker loss, a lost convoy, an unevaded anti-ship salvo with a first US Navy casualty, or a named major-Chinese-bank designation each sends oil sharply higher from a fresh post-May high. The IAEA's Security Council referral adds a legal-diplomatic escalation with no near-term resolution.",
      spillover:
        "Spillover holds critical and widened. The map burns at both ends of the Arabian Peninsula and along the connected seams: Iranian soil under a continuing campaign, both maritime chokepoints contested, the Gulf host states directly targeted, an open mass-casualty Saudi–Yemen war now with hundreds reportedly killed in a day, the Israel-Gaza and Israel-Lebanon fronts lethal, and a formalized economic front wired to the September 24 US-China summit. Per §3.5.5 the Yemen fighting over Bab al-Mandeb threatens the Red Sea reroute that hedged a closed Hormuz, and the IRGC's abandon-ship warnings near Kuwaiti and Bahraini ports extend the reach. China's open defiance, Iran's deepening execution wave and the IAEA's Security Council referral are the standing worsening signals.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'UPI / CNBC / Al Jazeera / NBC News',
      event:
        "The war acquired a timeline set in Washington: President Trump said Wednesday night he is 'not looking for a deal with Iran' and does not expect oil prices to fall until 'right after' the November midterm elections, as US retail gasoline hit a Labor Day record. The market repriced at once — Brent jumped to $105 and touched roughly $107 intraday, its highest since May and a near-6% session gain, with WTI up about 6% toward $102 and analysts flagging the spike as a live input to a possible US interest-rate increase.",
      summary:
        "Per §3.5.3 hold the forecast as the principal's own framing — but the content is the story: the actor best able to stop the war has publicly foreclosed a near-term deal and tied relief to a date beyond the thirty-day window this series scores.",
      impact:
        "The negotiation-capacity clock moves backward and the energy-infrastructure clock prices a war with no political incentive to end before November; the thirty-day ceasefire probability slips from 3 to 2.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / NPR / CNN',
      event:
        "The Saudi–Yemen front Day 195 had opened turned to mass-casualty ground war: government-aligned forces counterattacked in Taiz and Hodeidah as the Houthis pressed an offensive to control Bab al-Mandeb, with hundreds reportedly killed in twenty-four hours, the Houthis alleging 54 Saudi airstrikes in twelve hours and a prison strike that killed seven, and fresh Houthi salvos on Aramco sites at Abha, Najran and Jizan. The UN's Yemen envoy Hans Grundberg warned of a slide into full-scale war.",
      summary:
        "Per §3.5.3 the Yemeni tolls are fog-of-war and single-attributed — logged and quantified as reported, not yet folded into the aggregate — but the escalation is unambiguous: a would-be sanctions partner is now waging open two-way war on the oil market's export geography.",
      impact:
        "The coalition-cohesion and humanitarian clocks move together; the Houthi push on Bab al-Mandeb threatens the Red Sea reroute that hedged a closed Hormuz, loading a second-chokepoint tail onto an already-triple-digit oil market.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'CNN / FDD',
      event:
        "After more than a year of 'complete blindness' — cameras disabled and inspectors blocked across 22 sites, with ~440 kg of 60% uranium unverified — the IAEA referred Iran's nuclear file to the UN Security Council, asking the body to hold Tehran to its safeguards obligations. Iran conditions any access on a final deal, and is assessed to hold enough highly enriched uranium for potentially up to ten weapons if further enriched.",
      summary:
        "Per §3.5.6 the standing nuclear prior holds unresolved and now escalates a rung: the file moves from a Board-of-Governors warning to a Security Council process, layered onto the September 24 US-China summit window.",
      impact:
        "The active-deadline clock gains a Security Council track; the referral hardens the diplomatic standoff without producing access, adding a legal-escalation vector with no near-term off-ramp.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: 'GlobalSecurity/IRNA / Newsweek / CNBC',
      event:
        "The IRGC's coming Hormuz 'restricted zone' gained coordinates — extending from Chabahar into parts of the Gulf of Oman and the Arabian Sea, precise limits to follow — while the major-Chinese-bank sanction stayed pinned behind the September 24 Xi summit: Washington's substitute blow hit Turkey's Golden Global bank, and Beijing kept President Pezeshkian at arm's length after only a brief SCO-sideline exchange. The Israel-Gaza, Israel-Lebanon and Iranian-execution threads carried.",
      summary:
        "Per §3.5.3 hold the zone as declared intent, not a verified enforcement regime; per §3.5.6 the deferred bank blow and the connected fronts remain standing priors formalized rather than resolved.",
      impact:
        "The negotiation-capacity clock stays stopped short of a deal while the economic front waits on the summit; the zone's geography extends the maritime squeeze beyond the strait itself.",
    },
  ],
  casualties: {
    us: {
      cumulative:
        'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 confirmed on the AP/CENTCOM combat series into Day 196 — a ninth day with no verified new US combat casualty. Iranian claims of a 'second undisclosed attack' on US Navy ships and of strikes on two US destroyers in the Hormuz restricted zone stay uncorroborated by any operator, flag state, protection-and-indemnity club or maritime authority; per §3.5.3 they stay logged and uncounted. The 18th DCAS death stays unconfirmed as hostile and Trump's 'per ship' rule untriggered. The escort corridor (~8-9 mb/d) runs amid live fire with the USS George Washington on station; the blockade holds at eighty-six vessels rerouted, three disabled, two boarded.",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 keep the combat figure and flag DCAS. Day 196 added no US count — a ninth quiet day — but the exposure profile hardened around it: the IRGC's restricted zone now has coordinates from Chabahar into the Gulf of Oman, the tanker war continues, and Iranian claims of strikes on US Navy vessels stay uncorroborated but signal a doctrine that against a crewed ship draws Trump's reprisal rule. The escort corridor (~660 million barrels and ~1,300 vessels since May, moving ~8-9 mb/d) runs amid live fire; the $67 billion supplemental and the 50-48 Senate war-powers rebuke stay unresolved in recess ahead of the November midterms — now against a war the president says he expects to run past that election, with oil above $105.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front and no new Israeli military fatality; Israel stayed offstage on the US-Iran maritime fight, the Saudi–Yemen war and the day's oil break. Its own fronts carried without a new Israeli count: the Gaza roadmap held deadlocked with Israeli officials alleging Hamas is rebuilding, and the Lebanon reprisal cycle stayed lethal (the Kfar Reman toll of at least twelve carried from Day 195). The standing Lebanese dead are logged under 'other,' not folded into the war cumulative.",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA on the Iran front; no new Israeli toll on Day 196. Israel's own fronts stayed hot but produced no new Israeli count: the Gaza roadmap holds deadlocked — the Board of Peace insists on no Israeli withdrawal before Hamas disarms, Hamas conditions any move on withdrawal and reconstruction, Netanyahu's office opposes the plan, and Israeli officials say Hamas is rebuilding its military presence despite the ceasefire, with 1,100-1,200+ Palestinians killed since the October 2025 ceasefire, a connected theater the series does not fold into the war cumulative. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold — Israel continues to act on its own clock, offstage on a day whose escalation ran through Washington, the oil tape, Riyadh and Vienna.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No update to the official war toll; casualties from the Iranian tankers the US struck near Kharg stay unreleased. The nuclear file moved instead: after more than a year of 'complete blindness,' the IAEA referred Iran to the UN Security Council, with ~440.9 kg of 60% plus ~184.1 kg of 20% HEU unverified and likely at Isfahan, and Tehran conditioning access on a final deal. The rights thread carries per §3.1 — Amnesty's at least 36 executed since February 28 and 78 under sentence of death stay outside the war toll — as does the contested September 1 Kuhestak wedding-strike count (up to five killed, 68+ wounded, not folded into MOH).",
      status:
        "The official Iranian war toll carries pending an update; Day 196 added no new war-front count. The movement was on the nuclear and rights tracks. On the nuclear file, Grossi's IAEA — 'completely blind' for more than a year across 22 sites, with ~440.9 kg of 60% plus ~184.1 kg of 20% HEU unverified and likely at Isfahan, enough for up to ten weapons if further enriched — referred Iran to the UN Security Council, which Tehran answers by conditioning access on a final deal. On the rights thread, kept out of the war cumulative per §3.1: Amnesty reports at least 36 people executed since the February 28 start of the war on politically-motivated charges, with at least 78 under sentence of death including at least five who were children at the time of the alleged offence, and Iran HRM flags a September surge. The September 1 Kuhestak wedding strike stays NYT-corroborated as a US-released bomb, its Iranian-source toll (up to five killed, 68+ wounded) not folded into MOH. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+.",
    },
    other: {
      cumulative:
        "Lebanon source-split: Health Ministry ~4,300+ / 12,200+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 158+ WIA (Kuwait 10 killed / 115 injured; Saudi Arabia ~84 injured — 11 on Aug 7, 73 on Sep 8) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing",
      delta:
        "The Saudi–Yemen front turned to open mass-casualty war: government-aligned forces counterattacked in Taiz and Hodeidah as the Houthis pressed an offensive toward Bab al-Mandeb, with hundreds reportedly killed in twenty-four hours, the Houthis alleging 54 Saudi airstrikes in twelve hours and a prison strike that killed seven, and fresh Houthi strikes on Aramco sites at Abha, Najran and Jizan. Per §3.5.3 those Yemeni tolls are fog-of-war and single-attributed — logged and quantified as reported, not yet folded into the aggregate pending firmer counts. The Lebanon (~4,300+/12,200+), Gulf (33+/158+), Iraq (148+/402+), Bab al-Mandeb and maritime tolls carry; the UN's Yemen envoy warned of a slide into full-scale war.",
      status:
        "The 'other' ledger's live fronts intensified sharply on Day 196. The Saudi–Yemen war turned to open mass-casualty ground fighting: government-aligned forces counterattacked in Taiz and Hodeidah as the Houthis pressed an offensive to control Bab al-Mandeb, with hundreds reportedly killed in twenty-four hours, the Houthis alleging 54 Saudi airstrikes in twelve hours and a prison strike that killed seven, and fresh Houthi salvos on Aramco sites at Abha, Najran and Jizan; the UN's Yemen envoy warned of a slide into full-scale war. Per §3.5.3 those Yemeni tolls are fog-of-war and single-attributed — logged and quantified as reported, not yet folded into the aggregate pending firmer counts. The Lebanon reprisal cycle carries (Health Ministry ~4,300+ / 12,200+; Wikipedia 3,371 / 10,129 lags). Per §3.5.3 the IRGC's claimed strikes on US vessels and tankers stay logged, not counted; the zone now has coordinates from Chabahar into the Gulf of Oman. Hormuz throughput holds near a fifth of pre-war flow with four-to-six vessels a day, many AIS-dark. Gulf breakout 33+/158+; Bab al-Mandeb Tihamah (Aug 12) at least 6 killed / 10 wounded; maritime toll ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers; Mokha shut, ~1,300 idled; Kuwait 10/115; Iraq 148+/402+.",
    },
  },
  exec:
    "Day 196 was the day the war acquired a date, and it did not come from Tehran. Pressed on the fighting he has spent weeks calling 'small potatoes,' President Trump said Wednesday night that he is 'not looking for a deal with Iran' and does not expect oil prices to fall until 'right after' the November midterm elections — the US principal publicly foreclosing the near-term off-ramp and pinning relief to the electoral calendar (UPI, CNBC). The market repriced at once: Brent jumped to $105 and touched roughly $107 intraday, its highest since May and a near-6% session gain from the ~$101–102 it held on Day 195, with WTI up about 6% toward $102 and analysts flagging rising odds of a US rate increase (Al Jazeera, NBC News). The Saudi–Yemen front Day 195 had opened turned to mass-casualty ground war: government-aligned forces counterattacked in Taiz and Hodeidah as the Houthis pressed an offensive toward Bab al-Mandeb, with hundreds reportedly killed in twenty-four hours, fresh Houthi strikes on Aramco sites, and the UN's Yemen envoy warning of a slide into full-scale war (Al Jazeera). And the nuclear file left the shadows: after a year of 'complete blindness,' the IAEA referred Iran to the UN Security Council (CNN, FDD). The Hormuz 'restricted zone' gained coordinates from Chabahar into the Gulf of Oman, and the major-Chinese-bank blow stayed pinned behind the September 24 Xi summit. Direction holds escalating; seven-day risk extreme; spillover critical; the thirty-day ceasefire probability slips to 2.",
  implications: [
    {
      title: 'The US principal dates the war to the midterms — and the market reprices to $105',
      body:
        "The war acquired a timeline on Day 196, and it did not come from Tehran. Pressed on the fighting he has spent weeks calling 'small potatoes,' President Trump said Wednesday night he is 'not looking for a deal with Iran' and did not expect oil to fall until 'right after' the November midterms (UPI, CNBC). Per §3.5.3 hold it as the principal's own framing, not an independent forecast — but its content is the story: the party with the most leverage to stop the war has publicly foreclosed the near-term off-ramp and tied relief to a date roughly two months out, beyond the thirty-day window this series scores. The market took him at his word — Brent jumped to $105 and touched about $107 intraday, its highest since May, a near-6% move from the ~$101–102 of Day 195, with WTI up about 6% and the spike now flagged as a live input to a US rate decision (Al Jazeera, NBC News). Per §3.5.5 quantify it: US retail gasoline hit a Labor Day record, and the barrel has cleared three thresholds in a week. Under the multi-clock framework the negotiation-capacity clock did not merely stall — it moved backward — while the energy-infrastructure clock priced a war with no political incentive to end before November. Analytical judgment: when the actor best able to stop the fighting says out loud he would rather run it past an election, the thirty-day ceasefire probability has to move, and it slips to 2.",
    },
    {
      title: 'The second front turns to open war, and the nuclear file goes to the Security Council',
      body:
        "Two of the war's slower-burning tracks broke into the open on Day 196. In Yemen, the Saudi front Day 195 had only just reopened turned to mass-casualty ground war: government-aligned forces counterattacked in Taiz and Hodeidah as the Houthis pressed an offensive to control Bab al-Mandeb, with hundreds reportedly killed in twenty-four hours, the Houthis alleging 54 Saudi airstrikes in twelve hours and a prison strike that killed seven, and fresh Houthi salvos on Aramco sites at Abha, Najran and Jizan (Al Jazeera, NPR). Per §3.5.3 the tolls are fog-of-war and single-attributed — logged and quantified as reported, not yet folded into the ledger — but the UN Yemen envoy's warning of a slide into full-scale war is the signal. On the nuclear track, the IAEA stopped waiting: after more than a year of 'complete blindness' across 22 sites with ~440 kg of 60% uranium unverified, Grossi's agency referred Iran to the UN Security Council, which Tehran answers by conditioning any access on a final deal (CNN, FDD). Under the multi-clock framework the coalition-cohesion and humanitarian clocks move together as a would-be sanctions partner sinks deeper into its own war, while the active-deadline clock gains a Security Council process layered onto the September 24 summit. Analytical judgment: both fronts are being formalized — one into open two-way war on the oil market's export geography, the other into a UNSC file — each harder to unwind than to start, and each a fresh path to the rupture the market is now pricing.",
    },
    {
      title: 'Taiwan: the escape valve narrows as the war dates itself to November',
      body:
        "Per §3.5.10 no development aimed at Taipei landed on Day 196, but the day the barrel hit $105 and the US president dated the war to the midterms is the day Taiwan's energy math got worse, not merely no better. Roughly a third of Taiwan's LNG still transits Hormuz (~8 Mt of Qatari gas), and the reroute logic that would move Gulf energy around a closed strait runs through the Red Sea and the Bab al-Mandeb the Houthis are now fighting to control (Al Jazeera). Per §3.5.5 the arithmetic is unchanged and unforgiving: 95–99% import dependence, about eleven days of gas cover against some 120 of oil, in the month Taipei itself flagged its buffer runs down. What changed on Day 196 is duration — Brent above $105 is the price signal the hedge was meant to pre-empt, and Trump's 'not until after the midterms' puts a two-month floor under it, longer than Taiwan's gas cover by an order of magnitude. Analytical judgment: the geographic escape valve Taiwan's buffer was built to exploit narrows precisely as the war acquires a minimum duration; the banked hedge toward ~60% US crude and a 25%-US-LNG-by-2029 goal is the right direction, but Day 196 is the reminder that the transition window and the war's now-dated persistence are running openly against each other, with the oil tape keeping score.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series); DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. A ninth quiet day for US casualties: Iranian claims of a 'second undisclosed attack' on US Navy ships and of strikes on two US destroyers in the restricted zone stay uncorroborated by any operator, flag state, P&I club or maritime authority — logged and uncounted. Trump's 'per ship' rule stays untriggered. The blockade holds at ~86 vessels rerouted, three disabled, two boarded; the escort convoy (~660M+ barrels / ~1,300 vessels since May, ~8-9 mb/d) runs amid live fire with the USS George Washington on station. The $67B supplemental and 50-48 rebuke stay unresolved in recess ahead of the November midterms — now against a war the president says he expects to run past that election.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new Israeli toll. Israel stayed offstage on the US-Iran maritime fight, the Saudi–Yemen war and the day's oil break while its Gaza campaign held deadlocked and lethal — the Board of Peace insists on no Israeli withdrawal before Hamas disarms, Hamas conditions any move on withdrawal and reconstruction, Netanyahu's office opposes the plan, and Israeli officials say Hamas is rebuilding its military presence despite the ceasefire (a connected theater, not folded into the war cumulative; 1,100-1,200+ killed since the October 2025 ceasefire). The standing Lebanese dead are logged under 'other.' Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold.",
    iran:
      "Official MOH war toll carries pending an update; no new war-front count, and casualties from the Iranian tankers the US struck near Kharg stay unreleased. The nuclear file moved: after a year of 'complete blindness,' the IAEA referred Iran to the UN Security Council, ~440.9 kg 60% + ~184.1 kg 20% HEU unverified and likely at Isfahan, enough for up to ten weapons if further enriched; Tehran conditions access on a final deal. The rights thread carries per §3.1 — Amnesty ≥36 executed since Feb 28, ≥78 under sentence of death (incl ≥5 who were children), Iran HRM flags a September surge — kept out of the war toll. The Sep 1 Kuhestak wedding strike stays NYT-corroborated (US bomb); its toll (up to five killed, 68+ wounded) not folded into MOH. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+.",
    other:
      "The Saudi–Yemen war turned to open mass-casualty ground fighting: government-aligned forces counterattacked in Taiz and Hodeidah as the Houthis pressed an offensive to control Bab al-Mandeb, with hundreds reportedly killed in twenty-four hours, the Houthis alleging 54 Saudi airstrikes in twelve hours and a prison strike that killed seven, and fresh Houthi salvos on Aramco sites at Abha, Najran and Jizan; the UN's Yemen envoy warned of a slide into full-scale war. Per §3.5.3 those Yemeni tolls are fog-of-war and single-attributed — logged and quantified as reported, not yet folded into the aggregate. The Lebanon reprisal cycle carries (Health Ministry ~4,300+ / 12,200+; Wikipedia 3,371 / 10,129 lags). Per §3.5.3 the IRGC's claimed strikes on US vessels and tankers stay logged, not counted; the restricted zone now has coordinates from Chabahar into the Gulf of Oman. Hormuz throughput near a fifth of pre-war with four-to-six vessels a day (many AIS-dark). Gulf 33+/158+; Bab al-Mandeb Tihamah (Aug 12) ≥6 killed / 10 wounded; maritime ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers; Mokha shut, ~1,300 idled; Kuwait 10/115; Iraq 148+/402+.",
  },
};

export default data;
