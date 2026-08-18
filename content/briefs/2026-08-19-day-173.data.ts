import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed, still tilting toward a longer war rather than a settlement. Day 173 was a day of coercive diplomacy and hardening mechanisms, not fresh combat: Trump threatened to bomb Oman — the neutral mediator of every US-Iran channel — over its near-deal with Iran on the Strait of Hormuz, while on Gaza the Kushner-Netanyahu demilitarization scheme tightened on Israel's terms (Washington Post, Time, NBC News). Per §3.5.3 the motion is real but one-directional: Washington answered a lapsed deadline by menacing the interlocutor rather than resuming strikes, and Iran kept a claimed Oman transit-route map and a published joint statement short of a reopening. It is not cleanly escalating — the US-Iran shooting stayed paused and no fresh mass-casualty strike hit Iranian soil — but not de-escalating either, with the mediator threatened, the Gaza veto migrated to Hamas, and both capitals building apparatus. Mixed holds, the de-escalation leg now resting on an Oman channel Washington is threatening and a Gaza track whose central obstacle is unmoved.",
      risk7d:
        "Seven-day risk holds critical. The tracked tails — a Gulf export-node hit, a laden-tanker sinking, or a confirmed Saudi naval loss — stayed untriggered, keeping the gauge off 'extreme,' but the diplomatic aperture narrowed: Trump's threat to bomb Oman puts the war's principal mediator under coercion just as the 'economic isolation' rollout, expected this week, risks an Iranian counter (Washington Post, Bloomberg). The Houthis' claimed strike on a Saudi military landing ship off Mokha stayed unconfirmed by Riyadh, and Israel and Hezbollah remained locked in a retaliation-threat exchange after the Aug 15 Lebanon strike (Türkiye Today, France 24). Hormuz transits held near three-month lows and Brent firmed near $88–89 (OilPrice). A US strike on Oman or a resumed strike on Iran, a Hezbollah reprisal that breaks the June truce, a Saudi kinetic answer to the Mokha claim, an Iranian answer to the isolation plan, or a confirmed American combat death remain the dominant seven-day risks.",
      spillover:
        "Spillover holds critical. The war spans Iranian soil, both maritime chokepoints, the Israel-Gaza and Israel-Lebanon seams and an open Houthi front now reaching Saudi naval targets — and Day 173 added a vector by turning US coercion on Oman itself. A threat to bomb the neutral sultanate that mediates the Hormuz channel risks widening the confrontation to a Gulf-Arab partner that has stayed out of the fighting, even as Saudi Arabia and the UAE already fault Israel over Gaza and the Mecca pact stays untested against the claimed Saudi-warship strike (Washington Post, Türkiye Today). The Lebanon truce stayed frayed to a threat exchange and the Gaza demilitarization mechanism kept that seam live. That no kinetic US-Iran or US-Oman action followed the threats is why spillover did not worsen outright; that the mediator itself is now a target is why it did not ease.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'Washington Post / Time / CNN',
      event:
        "President Trump threatened to bomb Oman because he is unhappy that Muscat is close to a deal with Iran to manage traffic through the Strait of Hormuz, warning Omani officials against getting 'in the way' of the US in the negotiations; the threat angered Omanis and left observers puzzled, and it targeted the neutral sultanate that has hosted every US-Iran channel of this war.",
      summary:
        "Per §3.5.3 the threat exposes the gap between Trump's stated aim — reopen the strait — and his instrument — menace the mediator brokering the reopening.",
      impact:
        "It degrades the negotiation-capacity clock by the principal's own hand and signals to every prospective mediator that neutrality earns coercion; a US move against Oman would open a new front against a Gulf-Arab partner.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'Oman FM / Al Jazeera',
      event:
        "Iran said a Hormuz transit-route map has been agreed with Oman and Oman's foreign ministry published a joint statement reaffirming safe passage and establishing a joint working group on the future administration of navigation, its services and costs — but a final agreement and an actual reopening stayed unfinalized amid US pressure, and Iran still conditions any reopening on sanctions relief and reparations.",
      summary:
        "Per §3.5.3 a published reaffirmation-and-working-group statement that defers the substance — administration, services, costs — is signaling, not a reopening; the 'very close' framing has been live since Day 167.",
      impact:
        "The maritime engineering advances on paper while the political track stays dead-in-place: the US is not a party, the strait stays shut near three-month-low transits, and the working-group deferral keeps the reopening a claim.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'NBC News / Axios / Times of Israel',
      event:
        "After Kushner's rare talks with Hamas's Khalil al-Hayya in Egypt, he and Netanyahu agreed the IDF will not redeploy from Gaza until Hamas is fully disarmed under a US general's supervision, with joint working groups on demilitarization and basic needs to stand up immediately and weapons removal floated within 30 days and tunnel closures within 60–90; Netanyahu doubled down on an open-ended presence conditioned on total disarmament.",
      summary:
        "Per §3.5.3 the sharpening is real but one-sided — the terms are the maximal reading Hamas has rejected for months, and the group ties any handover to a full Israeli withdrawal and statehood.",
      impact:
        "The mechanism meant to close the US-Israel gap migrates the veto intact from Jerusalem to Gaza and arms it with a timeline Hamas never agreed to; per §3.5.6 a scheme depending on Hamas accepting bilaterally-set terms is structurally fragile.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: 'Bloomberg / Fortune / OilPrice',
      event:
        "Treasury Secretary Bessent's 'economic isolation' plan — unprecedented economic measures plus the continued Hormuz blockade, with Iran's China ties flagged as the ceiling — stayed readied for rollout this week, layered onto a blockade critics note has already failed to bend Tehran, while Brent held near $88–89 amid the US-Iran stalemate.",
      summary:
        "Per §3.5.3 answering a lapsed military deadline with a sanctions package signals the limits of the kinetic option; the China-lever framing concedes the plan's ceiling runs through Beijing.",
      impact:
        "The political-will and negotiation-capacity clocks stay central; oil holds firm on the isolation threat and the shut strait, with the EIA's 2027-recovery call putting a calendar on the squeeze.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'Türkiye Today / France 24',
      event:
        "The Houthis' claimed first strike on a Saudi military landing ship and four patrol boats off shut Mokha port stayed unconfirmed by Riyadh with no verified toll, while Israel's threat exchange with Hezbollah carried after the Aug 15 southern-Lebanon strike that killed eleven including three children, with Israel vowing to strike again.",
      summary:
        "Per §3.5.3 the Houthi battle-damage claim is unverified and met by Saudi silence, so the confirmed toll holds; per §3.5.6 the Lebanon front runs on its own clock, independent of the US-Iran channel.",
      impact:
        "A confirmed Saudi loss or a kinetic Saudi reply would trip the untested Mecca pact; a Hezbollah reprisal that lands would open a second Israeli front — the two most dangerous widening seams stayed primed but unbroken.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series; the US-Iran shooting stayed paused and the day's American pressure was coercive-diplomatic — a threat to bomb Oman, a pending 'economic isolation' rollout, and a standing reparations demand — with no reported US casualty; DCAS holds 18/687, a counting-scope difference, not a confirmed hostile loss; the Kuwait Ahmad al-Jaber death stays denied by CENTCOM and unconfirmed",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 the brief keeps the combat figure and flags DCAS; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule, which is keyed to a verified combat death. The US-Iran shooting stayed paused; the day's American action was coercive and declaratory — a threat to bomb Oman over the Hormuz deal, Bessent's pending 'economic isolation' plan atop the indefinite blockade, and a standing demand that Iran pay reparations. Reporting still ties the economic pivot to a munitions shortfall and midterm-year opposition; the Joint Chiefs chairman presses for an off-ramp, and the $67 billion supplemental and 50-48 Senate war-powers rebuke stay unresolved in August recess.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0; no new Israeli fatalities or wounded reported in the 24–48h; Israel's posture was diplomatic-offensive — Netanyahu doubling down with Kushner that the IDF will not leave Gaza until Hamas is fully disarmed under a US general, while the Hezbollah threat exchange carried after the Aug 15 Lebanon strike",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA. The day's Israeli posture was diplomatic and offensive rather than costly: with Kushner, Netanyahu doubled down that Gaza's demilitarization must precede any IDF redeployment and be supervised by a US general, while Israel kept its threat exchange with Hezbollah live after the Aug 15 southern-Lebanon strike (carried in the 'other' ledger). Per §3.5.6 the Lebanon-gap prior holds — Israel is not party to the US-Iran framework and widens that seam on its own clock — even as, on Gaza, it hardened the US-brokered mechanism on terms Hamas has not accepted. Israel held at highest readiness and unbound by the Oman channel, on its October 27 election clock, with Saudi Arabia and the UAE still faulting it over the roadmap.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll on Day 173; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; the day's Iranian action was diplomatic — a claimed Hormuz transit-route map with Oman and a published joint statement short of a reopening — with no reported new Iranian casualties; a separate rights thread of reported continued executions is noted but not folded into the war toll",
      status:
        "No updated official Iranian toll on Day 173. The Qeshm Island deaths and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. The day's Iranian moves were diplomatic — a claimed transit-route map with Oman and a published joint statement reaffirming safe passage while conditioning any Hormuz reopening on sanctions relief and reparations — with no reported new Iranian casualties. Per §3.1's dual-sourcing a separate rights thread of reported continued executions on security charges is noted but kept out of the war-casualty cumulative. The IAEA has run no verification since February 28 and remains locked out of Isfahan; the 60% HEU stock (~440.9 kg) stays unverified and likely at Isfahan, with ISIS flagging enough for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        'Lebanon source-split: Health Ministry ~4,265 / 12,190+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA (Kuwait 10 killed / 115 injured; Saudi Arabia 11 civilians injured, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded per Yemen government (Houthis unconfirmed) · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing',
      delta:
        "+0 confirmed deaths in a 24–48h dominated by rhetoric and an unconfirmed claim: Trump threatened to bomb Oman, and the Houthis' claimed strike on a Saudi landing ship off Mokha stayed unconfirmed by Riyadh; the Israel-Hezbollah exchange stayed at threats; Hormuz transits held near three-month lows",
      status:
        "The 'other' ledger held on confirmed deaths on a day dominated by coercive rhetoric. The Houthis' claimed first strike on a Saudi military landing ship and four patrol boats off Mokha stayed unconfirmed by Riyadh, so per §3.5.3 it is logged, not counted; the shut Mokha port left about 1,300 workers idled. In Lebanon the Aug 15 strike that killed at least eleven including three children (Health Ministry cumulative ~4,265 / 12,190+, the Wikipedia series 3,371 / 10,129 lagging) held as a Hezbollah-Israel threat exchange with no fresh toll. The Bab al-Mandeb Tihamah toll (Aug 12) holds at least six killed — four crew and two Yemeni rescuers — and ten wounded per Yemen's government. Hormuz transits ran near three-month lows; the maritime toll holds ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; the Mecca pact stayed untested. Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7).",
    },
  },
  exec:
    "Day 173 was the day Washington turned on its own mediator. President Trump threatened to bomb Oman — the neutral Gulf sultanate that has hosted every US-Iran channel of this war — because Muscat is close to a deal with Tehran to manage traffic through the Strait of Hormuz, warning Omani officials not to get 'in the way' (Washington Post, Time, CNN). The threat angered Omanis and puzzled observers, and it was aimed at the one interlocutor both sides still use. Iran said a transit-route map is agreed and Oman's foreign ministry published joint-statement language reaffirming safe passage and a joint working group on future navigation, but a final agreement stayed unfinalized amid the US pressure (Oman FM, Al Jazeera) — per §3.5.3 the 'very close' framing is still signaling, not a reopening. On Gaza, the demilitarization mechanism hardened on Israel's terms: after Kushner's rare talks with Hamas's leader, he and Netanyahu agreed the IDF will not leave Gaza until Hamas fully disarms under a US general's supervision, with weapons removal floated within 30 days and tunnel closures in 60–90 (NBC News, Axios, Times of Israel) — terms Hamas, which ties any handover to a full withdrawal and statehood, has not accepted. Bessent's 'economic isolation' plan stayed pending its rollout this week; Brent held near $88–89; the Houthis' claimed strike on a Saudi warship stayed unconfirmed; and Israel's Lebanon threat exchange with Hezbollah carried (Bloomberg, OilPrice, Türkiye Today, France 24). Direction holds mixed; seven-day and spillover risk hold critical; the thirty-day ceasefire probability holds at 6.",
  implications: [
    {
      title: "Washington threatens the mediator — the negotiation-capacity clock takes the hit",
      body:
        "Day 173's sharpest move was directed not at Tehran but at Muscat: Trump threatened to bomb Oman, the neutral sultanate that has hosted every US-Iran channel of this war, for the offense of nearing a Hormuz arrangement with Iran (Washington Post, Time). Analytical judgment: under the multi-clock framework this is the negotiation-capacity clock degrading by the principal's own hand — the United States menacing the one interlocutor both belligerents still trust narrows the diplomatic aperture rather than widening it, and per §3.5.3 it exposes the gap between Trump's stated aim (reopen the strait) and his chosen instrument (threaten the mediator brokering the reopening). Muscat has branded itself neutral throughout, keeping lines to Tehran even under Iranian missile salvos at its neighbors; turning a bomb threat on it signals to every prospective mediator that neutrality earns coercion. The through-line from Day 172 holds and sharpens: with the active-deadline clock gone and the June MoU lapsed, Washington is reaching for pressure instruments — an 'economic isolation' rollout still pending this week, the Oman threat, a standing demand that Iran pay reparations for a '50-year period' — in place of a settlement track (Bloomberg, Al Jazeera). Iran, for its part, keeps the strait legislated shut and its price internationalized through Beijing. The machinery both capitals built around the fight is now being aimed at the few remaining off-ramps, and today the mediator itself was the target.",
    },
    {
      title: "The Gaza mechanism hardens on one side while its veto stays on the other",
      body:
        "On Gaza the demilitarization scheme gained detail, and every new detail tightened it on Israel's terms. After Kushner's rare talks with Hamas's Khalil al-Hayya, he and Netanyahu agreed the IDF will not redeploy from Gaza until Hamas is fully disarmed under a US general's supervision, with joint working groups on demilitarization and basic needs to stand up immediately and weapons removal floated to begin within 30 days, tunnel closures within 60–90 (NBC News, Axios, Times of Israel). Analytical judgment: per §3.5.3 the sharpening is real but one-sided — Netanyahu doubled down on an open-ended presence conditioned on total disarmament, precisely the maximal reading Hamas has rejected for months, tying any handover to a full Israeli withdrawal and a path to statehood and refusing the language of disarmament itself (CNBC, Chatham House). The mechanism meant to close the US-Israel gap has instead migrated the veto intact from Jerusalem to Gaza and armed it with a timeline Hamas never agreed to. Per §3.5.6 the standing prior holds: Israel acts on its own October-27 election clock, outside the US-Iran framework, and a US-brokered scheme that depends on Hamas accepting terms set bilaterally by Washington and Jerusalem is structurally fragile. The Gaza track keeps the appearance of forward motion while its central obstacle — who disarms whom, and in what order — sits exactly where it was, now with a clock attached that can be missed.",
    },
    {
      title: "Taiwan: the squeeze gains a coercive edge and keeps its 2027 calendar",
      body:
        "For Taipei, Day 173 sharpens the duration story with a coercive edge. Per §3.5.10 there was no Taiwan-specific development today; what changed is the character of the pressure — the United States is now willing to threaten force against a neutral Gulf state to keep the strait contested on its terms, which tells Taiwan the chokepoint's status is a matter of great-power coercion, not just Iranian obstruction. Analytical judgment: per §3.5.5 the arithmetic is unchanged and unforgiving — Taiwan imports 99% of its natural gas, roughly a third of its 23.6 Mt of LNG transits Hormuz, nearly 8 Mt of it Qatari, against about eleven days of gas cover versus some 120 days of oil (CSIS, ISIS). A bomb-threatened mediator, a pending 'economic isolation' apparatus, an Iranian legislated closure and a Houthi campaign now reaching Saudi naval targets are not a spike to wait out but a structural condition to plan around, and the EIA's expectation that Middle East output will not near pre-conflict levels until early 2027 puts a calendar on it (EIA). Brent near $88–89 still understates the exposure, because Taiwan's vulnerability is priced in the molecule, not the barrel, and the molecule's route is the one being blockaded, legislated over and now fought over by threat (OilPrice). Nothing on Taipei's winter-gas checklist got shorter; the list only gained another actor who might have to be deterred before the strait reopens.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. The US-Iran shooting stayed paused; the day's American moves were coercive and diplomatic — the threat to bomb Oman, Bessent's pending 'economic isolation' plan, and a reparations demand. The $67B supplemental and 50-48 rebuke stay unresolved in recess.",
    israel:
      "Casualties hold at 56 KIA / 8,652+ WIA; no new Israeli toll reported. Israel was diplomatic-offensive — Netanyahu doubling down with Kushner that the IDF stays in Gaza until Hamas fully disarms under a US general — while the Hezbollah threat exchange carried after the Aug 15 Lebanon strike (carried in the 'other' ledger). Per §3.5.6 the Lebanon-gap prior holds; Israel stays outside the Oman channel at highest readiness on its October 27 election clock as Saudi Arabia and the UAE fault it over the roadmap.",
    iran:
      "No fresh official MOH toll; Qeshm deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. The day's Iranian action was diplomatic — a claimed Oman transit-route map and a published joint statement short of a reopening, with Hormuz conditioned on sanctions relief and reparations — with no reported new Iranian casualties. A rights thread of reported continued executions is noted but not folded into the war toll. IAEA no verification since Feb 28; ~440.9 kg 60% HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "+0 confirmed deaths in a 24–48h dominated by rhetoric and an unconfirmed claim: Trump threatened to bomb Oman, and the Houthis said they struck a Saudi military landing ship off Mokha, but Riyadh did not confirm losses — per §3.5.3 logged, not counted. Mokha stays shut, ~1,300 workers idled. Lebanon's Aug 15 eleven-death strike (Health Ministry ~4,265 / 12,190+, Wikipedia 3,371 / 10,129 lags) held as a threat exchange with no fresh toll. Bab al-Mandeb Tihamah holds at least 6 killed / 10 wounded. Maritime toll ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mecca pact untested; Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7).",
  },
};

export default data;
