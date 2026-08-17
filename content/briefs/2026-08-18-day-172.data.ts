import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed, still tilting toward a longer war rather than a settlement. Day 172 was the day the lapsed-deadline morning's abstractions began converting into machinery: Kushner and Netanyahu agreed a Hamas 'demilitarization' should begin with a US-general-supervised weapons handover, the US 'economic isolation' rollout stayed pending within the week, and the Houthis claimed a strike on a Saudi military landing ship off Mokha (NBC News, Bloomberg, Turkiye Today). Per §3.5.3 the motion is real but the hardening runs underneath: the Gaza mechanism is a US-Israel agreement on terms Hamas has not accepted, and Iran's Araghchi paired an Oman deal 'very close' with a flat 'no decision' on talks and a charge that Trump 'miscalculated' on Hormuz (Al Jazeera, CNBC). It is not cleanly escalating — the US-Iran shooting stayed paused and no fresh mass-casualty strike hit Iranian soil — but not de-escalating either, with the deadline gone and both capitals building apparatus. Mixed holds, the de-escalation leg still resting on a Gaza track and an indirect channel neither side will call talks.",
      risk7d:
        "Seven-day risk holds critical. The tracked tail — a Gulf export-node hit or a laden-tanker sinking — stayed untriggered, keeping the gauge off 'extreme,' but the coalition front moved: the Houthis claimed a direct strike on a Saudi military landing ship and four patrol boats off Mokha, the first claimed Houthi hit on a Saudi naval asset, even as the shut port left some 1,300 workers idled (Turkiye Today, Arab News). The 'economic isolation' rollout, expected this week, risks an Iranian counter just as Tehran holds and legislates the closure; Israel and Hezbollah stayed locked in a retaliation-threat exchange after the Aug 15 Lebanon strike, with Israel naming a second commander it killed (Asharq Al-Awsat). Hormuz transits held near three-month lows and Brent firmed near $88–90 (EIA, Al Jazeera). A resumed US-Israeli strike, a Hezbollah reprisal that breaks the June truce, a Saudi kinetic answer to the Mokha strike, an Iranian answer to the isolation plan, or a confirmed American combat death remain the dominant seven-day risks.",
      spillover:
        "Spillover holds critical. The war spans Iranian soil, both maritime chokepoints, the Israel-Gaza and Israel-Lebanon seams and an open Houthi front now reaching Saudi naval targets. Day 172's spillover pressure came from the coalition edge: the Houthis' claimed strike on a Saudi military landing ship off Mokha pushed the Yemen front from commercial shipping toward the kingdom's armed forces, precisely the tripwire the untested Mecca pact was built for, while Saudi Arabia and the UAE publicly faulted Israel for obstructing the Gaza roadmap (Turkiye Today, France 24). The Lebanon truce stayed frayed to a threat exchange and the Netanyahu-Kushner agreement on a US-general-supervised Hamas disarmament kept the Gaza seam live. That no Saudi kinetic answer and no Gulf-Arab military response followed is why spillover did not worsen outright; that a Saudi warship was claimed hit and Lebanon stays primed is why it did not ease.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'NBC News / Manila Times',
      event:
        "After a rare Sunday meeting with Hamas's leader in Egypt, Jared Kushner met Netanyahu on Monday and the two agreed that Gaza's 'demilitarization' should begin with a Hamas weapons handover supervised by a US military general — a concrete mechanism grafted onto Trump's 15-point plan, even though Hamas has accepted only the roadmap's second phase, not a US-run disarmament.",
      summary:
        "Per §3.5.3 the 'agreement' narrows the US-Israel gap but on terms Hamas has not signed — a Washington-Jerusalem bilateral fix presented as a Gaza breakthrough.",
      impact:
        "It keeps the Gaza track in motion while shifting the unresolved veto from Netanyahu to Hamas; the demilitarization mechanism becomes the new point of failure, and the US-Israel seam holds only as long as Hamas stays silent.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'Bloomberg / Fortune',
      event:
        "Treasury Secretary Bessent's 'economic isolation' plan — cast as two pillars, unprecedented economic measures plus the continued Hormuz blockade, with reporting flagging Iran's China ties as the key lever — stayed readied for rollout this week, layered onto a blockade critics note has already failed to bend Tehran.",
      summary:
        "Per §3.5.3 a government answering a lapsed military deadline with a sanctions package is signaling the limits of its kinetic options; the China-lever framing concedes the plan's ceiling runs through Beijing.",
      impact:
        "The political-will and negotiation-capacity clocks move to the center; layering more siege onto an already-blockaded economy tests whether economic pressure alone can do what the strike threat did not.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'medium',
      source: 'Al Jazeera / CNBC',
      event:
        "Foreign Minister Araghchi said Iran has made 'no decision' to restart talks — Qatari and Pakistani contacts 'do not mean negotiations' — and that an Oman shipping arrangement was 'very close' but a full Hormuz reopening depends on the US honoring the June memorandum it 'violated,' adding that Trump 'miscalculated due to intelligence failures' on the strait.",
      summary:
        "Per §3.5.3 Araghchi's 'very close' is the optimistic-actor tell to discount — set beside a flat 'no decision' on talks and a maximalist condition set, it is signaling, not progress.",
      impact:
        "The Oman joint-statement pulse is real but claim-level; Iran keeps a legislated closure and an internationalized price while denying the channel is negotiation, holding its floor rather than moving toward a deal.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Turkiye Today / Arab News',
      event:
        "The Houthis claimed a strike on a Saudi military landing ship and four accompanying patrol boats off Mokha, saying they burned the landing ship and sank or set several boats alight — the first claimed Houthi hit on a Saudi naval asset — as the shut Mokha port left some 1,300 workers idled; Riyadh did not confirm the losses.",
      summary:
        "Per §3.5.3 the Houthi battle-damage claim is unverified and met by Saudi silence, so the confirmed toll holds — but the target class is the escalation: from commercial shipping to the kingdom's armed forces.",
      impact:
        "A claimed strike on a Saudi warship is the tripwire the untested Mecca pact was built for; a confirmed Saudi loss or a kinetic Saudi answer would widen the war along its most dangerous seam.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'Asharq Al-Awsat / Bloomberg',
      event:
        "Israel vowed again to go after Hezbollah and named a second commander it said it killed in the Aug 15 southern-Lebanon strike that killed eleven including three children, while Hezbollah repeated the attacks would be 'met with what they deserve' — a threat exchange, not yet a battle, over the fraying June truce.",
      summary:
        "Per §3.5.6 the Lebanon front runs on its own clock, independent of the US-Iran channel, and hardened again without a fresh confirmed toll.",
      impact:
        "The June truce is the thinnest it has been; a Hezbollah reprisal that lands would open a second Israeli front no Oman corridor can mediate.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series; the US-Iran shooting stayed paused and the day's American pressure was economic and declaratory — a coming 'economic isolation' rollout atop the blockade and the Kushner-brokered Gaza mechanism — with no reported US casualty; DCAS holds 18/687, a counting-scope difference, not a confirmed hostile loss; the Kuwait Ahmad al-Jaber death stays denied by CENTCOM and unconfirmed",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 the brief keeps the combat figure and flags DCAS; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule, which is keyed to a verified combat death. The US-Iran shooting stayed paused; the day's American action was economic and declaratory — Bessent's coming 'economic isolation' plan atop the indefinite blockade — while Kushner brokered the Gaza demilitarization mechanism with Netanyahu. Reporting ties the economic pivot to a munitions shortfall and midterm-year opposition; the Joint Chiefs chairman is still pressing for an off-ramp, and the $67 billion supplemental and 50-48 Senate war-powers rebuke stay unresolved in August recess.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0; no new Israeli fatalities or wounded reported in the 24–48h; Israel was again the striker and declarant — vowing to go after Hezbollah and naming a second commander killed in the Aug 15 Lebanon strike — and agreed with Kushner on a US-general-supervised Hamas disarmament while still holding outside the Oman channel on its October 27 election clock",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA. The day's Israeli posture was offensive and diplomatic rather than costly: Israel vowed again to strike Hezbollah if threatened and named a second commander it says it killed in the Aug 15 southern-Lebanon strike (carried in the 'other' ledger), while Netanyahu and Kushner agreed that Gaza's demilitarization should begin with a US-general-supervised Hamas weapons handover. Per §3.5.6 the Lebanon-gap prior holds — Israel is not party to the US-Iran framework and widens the seam on its own clock — even as, on Gaza, it moved toward the US position on terms Hamas has not accepted. Israel held at highest readiness and unbound by the Oman channel; Saudi Arabia and the UAE publicly faulted it for obstructing the roadmap.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll on Day 172; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; the day's Iranian action was diplomatic and declaratory — Araghchi's 'no decision' on talks, an Oman arrangement 'very close,' and a charge that Trump 'miscalculated' on Hormuz — with no reported new Iranian casualties; a separate rights thread of reported continued executions is noted but not folded into the war toll",
      status:
        "No updated official Iranian toll on Day 172. The Qeshm Island deaths and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. The day's Iranian moves were diplomatic — Araghchi ruling out a decision to negotiate while calling an Oman shipping arrangement 'very close' and conditioning any Hormuz reopening on US adherence to the violated June MoU — with no reported new Iranian casualties. Per §3.1's dual-sourcing a separate rights thread of reported continued executions on security charges is noted but kept out of the war-casualty cumulative. The IAEA has run no verification since February 28 and remains locked out of Isfahan; the 60% HEU stock (~440.9 kg) stays unverified and likely at Isfahan, with ISIS flagging enough for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        'Lebanon source-split: Health Ministry ~4,265 / 12,190+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA (Kuwait 10 killed / 115 injured; Saudi Arabia 11 civilians injured, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded per Yemen government (Houthis unconfirmed) · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing',
      delta:
        "+0 confirmed deaths in a 24–48h dominated by a claimed but unconfirmed strike: the Houthis said they hit a Saudi military landing ship and four patrol boats off Mokha, burning the landing ship, but Riyadh did not confirm losses and no verified new toll followed; the Israel-Hezbollah exchange stayed at threats; Hormuz transits held near three-month lows",
      status:
        "The 'other' ledger held on confirmed deaths even as the coalition front escalated. The Houthis claimed a strike on a Saudi military landing ship and four accompanying patrol boats off Mokha — the first claimed Houthi hit on a Saudi naval asset — saying they burned the landing ship and sank or set several boats alight; Riyadh did not confirm the losses, so per §3.5.3 the claim is logged, not counted. The shut Mokha port left about 1,300 workers idled. In Lebanon the Aug 15 strike that killed at least eleven including three children (Health Ministry cumulative ~4,265 / 12,190+, the Wikipedia series 3,371 / 10,129 lagging) hardened into a Hezbollah-Israel threat exchange with no fresh toll. The Bab al-Mandeb Tihamah toll (Aug 12) holds at least six killed — four crew (three Pakistani, one Indonesian) and two Yemeni rescuers — and ten wounded per Yemen's government. Hormuz transits ran near three-month lows; the maritime toll holds ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; the Mecca pact stayed untested with the Saudi warning of imminent coordinated attacks carrying. Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7).",
    },
  },
  exec:
    "Day 172 was the day the lapsed deadline's abstractions began hardening into mechanisms. On Gaza, Jared Kushner — fresh from a rare Sunday meeting with Hamas's leader in Egypt — met Netanyahu on Monday and the two agreed that the enclave's 'demilitarization' should begin with a Hamas weapons handover supervised by a US military general, a concrete scheme grafted onto Trump's 15-point plan even though Hamas has accepted only the roadmap's second phase, not a US-run disarmament (NBC News, Manila Times). On Iran, Treasury Secretary Bessent's 'economic isolation' plan — two pillars, unprecedented sanctions plus the continued Hormuz blockade, with Iran's China ties flagged as the key lever — stayed readied for rollout this week (Bloomberg, Fortune). Tehran answered from its floor: Foreign Minister Araghchi said Iran has made 'no decision' to restart talks, called an Oman shipping arrangement 'very close' but conditioned any Hormuz reopening on the US honoring the June memorandum it 'violated,' and said Trump 'miscalculated' on the strait (Al Jazeera, CNBC). The coalition front escalated: the Houthis claimed the first strike on a Saudi military landing ship off shut Mokha port, unconfirmed by Riyadh, while Israel vowed again to hit Hezbollah and named a second commander killed in the Aug 15 Lebanon strike (Turkiye Today, Asharq Al-Awsat). Brent firmed near $88–90 (EIA). Direction holds mixed; seven-day and spillover risk hold critical; the thirty-day ceasefire probability holds at 6 as motion on paper masks hardening underneath.",
  implications: [
    {
      title: "Motion on paper, hardening underneath — the mechanisms arrive but move the failure points, not the war",
      body:
        "Day 172 turned the lapsed-deadline morning's abstractions into machinery, and the striking thing is that each mechanism moves a point of failure without moving the war toward settlement. On Gaza, Kushner and Netanyahu agreed that demilitarization should begin with a Hamas weapons handover supervised by a US military general (NBC News). Analytical judgment: per §3.5.3 this is a US-Israel bilateral fix presented as a breakthrough — it narrows the Washington-Jerusalem gap that stalled the plan, but on terms Hamas has accepted only in part, so the unresolved veto simply migrates from Netanyahu to Hamas and the demilitarization mechanism becomes the new tripwire. On Iran, Bessent's 'economic isolation' rollout stayed pending, with reporting conceding the plan's ceiling runs through Iran's China ties (Bloomberg, Fortune). Under the multi-clock framework the active-deadline clock is gone and the political-will and negotiation-capacity clocks dominate: Washington is choosing the instrument it can sustain, layering siege onto an already-blockaded economy. Tehran answered from its floor — Araghchi's 'no decision' on talks paired with an Oman arrangement 'very close,' a tell §3.5.3 says to discount when it sits beside a maximalist condition set (Al Jazeera). The through-line from Day 171 holds: both capitals, unable to force each other at the deadline, are building durable architecture — a demilitarization scheme, a sanctions apparatus, a legislated closure — rather than an off-ramp. Machinery is not momentum toward peace; it is the standoff acquiring moving parts.",
    },
    {
      title: "The coalition seam is where the war widened today",
      body:
        "The escalation Day 172 produced came not from the US-Iran core but from its edges, and the sharpest was the coalition front. The Houthis claimed a strike on a Saudi military landing ship and four patrol boats off Mokha — the first claimed Houthi hit on a Saudi naval asset, not a merchant hull (Turkiye Today). Analytical judgment: per §3.5.3 the battle-damage claim is unverified and met by Saudi silence, so the confirmed toll holds — but the target class is the signal. A Yemen front that had been shutting ports and sinking cargo ships reached for the kingdom's armed forces, precisely the contingency the untested Mecca defense pact (Saudi-Turkey-Pakistan, nuclear-armed Pakistan included) was built to answer. Per §3.5.6 the coalition-cohesion prior now has a live test: a confirmed Saudi loss, or a Saudi kinetic reply, would trip a wider war along its most dangerous seam. Around it, the other seams stayed primed: the Israel-Hezbollah truce held only as a threat exchange after the Aug 15 strike, with Israel naming a second commander killed (Asharq Al-Awsat), and Saudi Arabia and the UAE publicly faulted Israel for obstructing the Gaza roadmap even as Kushner brokered its demilitarization terms (France 24). The Oman channel and the economic-isolation plan aim at the strait; the war's kinetic energy keeps migrating to Lebanon, the Red Sea and the Gulf littoral — fronts no Hormuz corridor can bind, and each one incident from a larger fire.",
    },
    {
      title: "Taiwan: an institutionalized squeeze with a 2027 calendar",
      body:
        "For Taipei, Day 172 reinforces the duration story more than the price. Per §3.5.10 there was no Taiwan-specific development today; what the day added is that the pressure architecture on both sides is now being wired to last. Analytical judgment: per §3.5.5 the arithmetic is unchanged and unforgiving — Taiwan imports 99% of its natural gas, roughly a third of its 23.6 Mt of LNG transits Hormuz, nearly 8 Mt of it Qatari, against about eleven days of gas cover versus some 120 days of oil (CSIS, ISIS). A US 'economic isolation' apparatus, an Iranian legislated closure, and a Houthi campaign now reaching Saudi naval targets are not a spike to wait out but a structural condition to plan around, and the EIA's expectation that Middle East output will not near pre-conflict levels until early 2027 puts a calendar on the squeeze (EIA). Brent near $88–90 still understates Taiwan's exposure, because its vulnerability is priced in the molecule, not the barrel, and the molecule's route is the one being blockaded, legislated over and shot at (Al Jazeera). The realized damage carries — no Qatari or UAE cargoes since April, roughly 17% of Ras Laffan capacity cut, US backfill at a premium — and Day 172 stretches the clock on all of it into 2027. Nothing on Taipei's winter-gas checklist got shorter; the list only acquired more mechanisms that must fail before the strait reopens.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. The US-Iran shooting stayed paused; the day's American moves were economic and diplomatic — Bessent's pending 'economic isolation' plan and the Kushner-Netanyahu Gaza mechanism. The $67B supplemental and 50-48 rebuke stay unresolved in recess.",
    israel:
      "Casualties hold at 56 KIA / 8,652+ WIA; no new Israeli toll reported. Israel was the striker and declarant — vowing to hit Hezbollah again and naming a second commander killed in the Aug 15 Lebanon strike (carried in the 'other' ledger) — and agreed with Kushner on a US-general-supervised Hamas disarmament. Per §3.5.6 the Lebanon-gap prior holds; Israel stays outside the Oman channel at highest readiness as Saudi Arabia and the UAE fault it over the Gaza roadmap.",
    iran:
      "No fresh official MOH toll; Qeshm deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. The day's Iranian action was diplomatic — Araghchi's 'no decision' on talks, an Oman arrangement 'very close,' Hormuz conditioned on the violated June MoU — with no reported new Iranian casualties. A rights thread of reported continued executions is noted but not folded into the war toll. IAEA no verification since Feb 28; ~440.9 kg 60% HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "+0 confirmed deaths in a 24–48h dominated by an unconfirmed claim: the Houthis said they struck a Saudi military landing ship and four patrol boats off Mokha, burning the landing ship, but Riyadh did not confirm losses — per §3.5.3 logged, not counted. Mokha stays shut, ~1,300 workers idled. Lebanon's Aug 15 eleven-death strike (Health Ministry ~4,265 / 12,190+, Wikipedia 3,371 / 10,129 lags) hardened into a threat exchange with no fresh toll. Bab al-Mandeb Tihamah holds at least 6 killed / 10 wounded. Maritime toll ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mecca pact untested; Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7).",
  },
};

export default data;
