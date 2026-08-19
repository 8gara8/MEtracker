import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed, still tilting toward a longer war rather than a settlement. Day 174's escalation ran on the economic axis, not the kinetic one: Washington unveiled the trailed 'economic isolation' plan — a 'one-two punch' of unprecedented sanctions plus the continued Hormuz blockade — and Trump ruled out talks with Iran, while Brent broke toward $92 (Bloomberg, CNN, OilPrice). Per §3.5.3 the motion is real but one-directional — a lapsed military deadline answered with an apparatus to collapse Iran's economy, not a resumed strike and not a settlement track. It is not cleanly escalating: the US-Iran shooting stayed paused, no fresh mass-casualty strike hit Iranian soil, and Iran and Oman were reported 'close' to a Hormuz-management deal. But it is not de-escalating either, with the US negotiating track explicitly closed, the mediator still under bomb-threat and the oil market repricing the standoff longer. Mixed holds; the de-escalation leg now rests almost entirely on an Oman maritime channel to which the US is not a party.",
      risk7d:
        "Seven-day risk holds critical. The tracked tails — a Gulf export-node hit, a laden-tanker sinking, or a confirmed Saudi naval loss — stayed untriggered, keeping the gauge off 'extreme,' but the aperture narrowed further: Washington's 'economic isolation' rollout invites an Iranian counter, Trump ruled out talks and hardened his threat to bomb Oman, and the UAE reported a fresh 'missile threat' after the Aug 8 ADNOC strike (Bloomberg, CNN, Al Jazeera). The Houthis' claimed strike on a Saudi military landing ship off Mokha stayed unconfirmed by Riyadh, and Israel and Hezbollah remained locked in a retaliation-threat exchange after the Aug 15 Lebanon strike (Türkiye Today, France 24). Brent broke toward $92 on a fourth straight up session and Hormuz transits ran near three a day (OilPrice). An Iranian answer to the isolation plan, a US strike on Oman or a resumed strike on Iran, a Saudi kinetic reply to the Mokha claim, a Hezbollah reprisal that breaks the June truce, or a confirmed American combat death remain the dominant seven-day risks.",
      spillover:
        "Spillover holds critical. The war spans Iranian soil, both maritime chokepoints, the Israel-Gaza and Israel-Lebanon seams and an open Houthi front now reaching Saudi naval targets — and Day 174 kept the pressure on the Gulf-Arab partners: the UAE reported a fresh 'missile threat' after the Aug 8 ADNOC tanker strike, the Houthis' claimed Saudi-warship hit stayed unconfirmed, and Trump's threat to bomb Oman carried (Al Jazeera, Türkiye Today, CNN). A US 'economic isolation' plan whose ceiling runs through Beijing widens the confrontation's economic front, even as Saudi Arabia and the UAE already fault Israel over Gaza and the Mecca pact stays untested. The Lebanon truce stayed frayed to a threat exchange and the Gaza demilitarization mechanism kept that seam live. That no kinetic US-Iran, US-Oman or Saudi action followed the day's threats and claims is why spillover did not worsen outright; that two Gulf partners are now under direct or claimed fire, and the mediator remains threatened, is why it did not ease.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'Bloomberg / Washington Times / Townhall',
      event:
        "President Trump and Treasury Secretary Bessent unveiled the 'economic isolation' plan trailed all week — cast by allies as 'economic D-Day' — combining sanctions Bessent says will be 'like the world has never seen' with the continued Strait of Hormuz blockade in a 'one-two punch' to force Tehran's capitulation after nearly six months of war; Trump said no talks are underway or scheduled with Iran.",
      summary:
        "Per §3.5.3 answering a lapsed military deadline with a sanctions apparatus signals the limits of the kinetic option, and the China-lever framing concedes the plan's ceiling runs through Beijing.",
      impact:
        "The negotiation-capacity and political-will clocks now dominate: with the US track explicitly closed and the economic-war machinery live, the standoff hardens into an endurance contest rather than a deal.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / CNBC / OilPrice',
      event:
        "Brent crude broke toward $92 a barrel, extending gains for a fourth consecutive session from the prior $88-89 hold, as the US-Iran stalemate, the isolation rollout and fresh Hormuz attacks kept a supply-risk premium bid; crossings through the strait ran near three a day around Aug 16, down some 19.5% from 19 on Aug 11 and a fraction of the ~120/day pre-crisis norm.",
      summary:
        "Per §3.5.5 the move quantifies the squeeze — a ~$3-4 session climb onto a draining inventory base, with the EIA seeing no Mideast-output recovery until early 2027.",
      impact:
        "The energy-infrastructure clock tightens: a Gulf export-node hit or a laden-tanker sinking now reprices past $100 from a higher, thinner starting point, and Goldman's $120 Q4 tail stays intact.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'CNN / Al Jazeera / CBS News',
      event:
        "Trump hardened rather than walked back his threat to bomb Oman — 'if Oman gets in the way, we'll bomb the [expletive] out of them,' he told Fox — and ruled out negotiations with Iran, even as Iran and Oman were reported 'close' to a Strait-of-Hormuz management agreement expected within days and indirect US-Iran contacts continued through Pakistan.",
      summary:
        "Per §3.5.3 the gap between Trump's stated aim (reopen the strait) and his instrument (menace the mediator brokering it) widened; a threat is not a strike, and no kinetic US-Oman action followed.",
      impact:
        "The negotiation-capacity clock degrades by the principal's own hand; a US move on Oman would open a front against a Gulf-Arab partner and end the war's main diplomatic channel.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: 'CNN / Al Jazeera / Türkiye Today',
      event:
        "The UAE reported a fresh 'missile threat' days after accusing Iran's IRGC of 'piracy' over the Aug 8 ADNOC tanker strike — one of 15 ADNOC vessels hit since February, with one crew member killed and 20 wounded — while the Houthis' claimed first strike on a Saudi military landing ship and four boats off shut Mokha port stayed unconfirmed by Riyadh.",
      summary:
        "Per §3.5.3 the ADNOC and Houthi claims sit against Emirati condemnation and Saudi silence; the confirmed toll holds and the Saudi loss is logged, not counted.",
      impact:
        "Two Gulf-Arab partners are now under direct or claimed fire; a confirmed Saudi loss or a kinetic reply would trip the untested Mecca pact, the war's most dangerous coalition-widening seam.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'NBC News / France 24 / Asharq Al-Awsat',
      event:
        "The US-general-supervised Hamas demilitarization mechanism agreed by Kushner and Netanyahu stayed unaccepted by Hamas, which ties any handover to a full Israeli withdrawal and statehood, while Israel and Hezbollah held their threat exchange after the Aug 15 southern-Lebanon strike that killed eleven including three children — Israel naming a Radwan Force commander and vowing to strike again, Hezbollah warning of an 'appropriate response.'",
      summary:
        "Per §3.5.6 both seams run on clocks independent of the US-Iran track — Gaza's veto sits with Hamas, Lebanon's with an Israeli campaign outside the June truce.",
      impact:
        "Neither front de-escalated: the Gaza mechanism's central obstacle is unmoved and a Hezbollah reprisal that lands would open a second Israeli front no Hormuz deal can bind.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series; Day 174's American pressure was economic and rhetorical — the 'economic isolation' rollout, the continued Hormuz blockade, a hardened Oman bomb-threat and a flat refusal of talks — with no reported US casualty; DCAS holds 18/687, a wider counting scope, not a confirmed hostile loss; the Kuwait Ahmad al-Jaber death stays denied by CENTCOM",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 the brief keeps the combat figure and flags DCAS; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule, which is keyed to a verified combat death. The US-Iran shooting stayed paused; the day's escalation was economic — Bessent's 'economic isolation' plan unveiled atop the indefinite blockade, Trump ruling out talks and doubling his threat against Oman. Reporting still ties the economic pivot to a munitions shortfall and midterm-year opposition; the Joint Chiefs chairman presses for an off-ramp, and the $67 billion supplemental and 50-48 Senate war-powers rebuke stay unresolved in August recess.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0; no new Israeli fatalities or wounded reported in the 24-48h; Israel's posture stayed diplomatic-offensive on Gaza — the IDF to remain until Hamas fully disarms under a US general — while its threat exchange with Hezbollah carried after the Aug 15 Lebanon strike, Israel vowing to hit again",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA. The day's Israeli posture was again offensive rather than costly: Jerusalem held to the Kushner-Netanyahu line that Gaza's demilitarization must precede any IDF redeployment and be supervised by a US general, while keeping its threat exchange with Hezbollah live after the Aug 15 southern-Lebanon strike (carried in the 'other' ledger), naming a Radwan Force commander and vowing further strikes. Per §3.5.6 the Lebanon-gap prior holds — Israel is not party to the US-Iran framework and widens that seam on its own clock. Israel stayed at highest readiness, unbound by the Oman channel and the economic-isolation track, on its October 27 election clock, with Saudi Arabia and the UAE still faulting it over the Gaza roadmap.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll on Day 174; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; the day's Iranian action was diplomatic and economic-defensive — a claimed near-final Hormuz transit-route deal with Oman and the wait-out against the US isolation plan — with no reported new Iranian casualties; a separate rights thread of reported continued executions is noted but not folded into the war toll",
      status:
        "No updated official Iranian toll on Day 174. The Qeshm Island deaths and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. Tehran's Day 174 moves were economic and diplomatic — absorbing the unveiled 'economic isolation' plan while pressing a near-final Hormuz transit-route arrangement with Oman and conditioning any reopening on sanctions relief and reparations — with no reported new Iranian casualties. Per §3.1's dual-sourcing a separate rights thread of reported continued executions on security charges is noted but kept out of the war-casualty cumulative. The IAEA has run no verification since February 28 and remains locked out of Isfahan; the ~440.9 kg of 60% HEU stays unverified and likely at Isfahan, with ISIS flagging enough for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        'Lebanon source-split: Health Ministry ~4,265 / 12,190+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA (Kuwait 10 killed / 115 injured; Saudi Arabia 11 civilians injured, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded per Yemen government (Houthis unconfirmed) · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing',
      delta:
        "+0 confirmed deaths in a 24-48h dominated by economic escalation and unverified claims: the UAE reported a fresh 'missile threat' after the Aug 8 ADNOC strike, and the Houthis' claimed strike on a Saudi landing ship off Mokha stayed unconfirmed by Riyadh; the Israel-Hezbollah exchange stayed at threats; Hormuz transits held near three a day",
      status:
        "The 'other' ledger held on confirmed deaths on a day dominated by economic pressure and unverified claims. The Houthis' claimed first strike on a Saudi military landing ship and four patrol boats off Mokha stayed unconfirmed by Riyadh, so per §3.5.3 it is logged, not counted; shut Mokha left about 1,300 workers idled. The UAE reported a fresh 'missile threat' after the Aug 8 ADNOC tanker strike — one of 15 ADNOC vessels hit since February, one crew killed and 20 wounded. In Lebanon the Aug 15 strike that killed at least eleven including three children (Health Ministry cumulative ~4,265 / 12,190+, the Wikipedia series 3,371 / 10,129 lagging) held as a Hezbollah-Israel threat exchange with no fresh toll. The Bab al-Mandeb Tihamah toll (Aug 12) holds at least six killed and ten wounded per Yemen's government. Hormuz transits ran near three a day; the maritime toll holds ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; the Mecca pact stayed untested. Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7).",
    },
  },
  exec:
    "Day 174 was the day the economic war moved from threat to instrument. President Trump and Treasury Secretary Bessent unveiled the promised 'economic isolation' plan — cast by allies as 'economic D-Day' — pairing sanctions Bessent says will be 'like the world has never seen' with the continued Hormuz blockade in a 'one-two punch' meant to force Tehran's capitulation after nearly six months of war, and Trump said no talks are underway or scheduled with Iran (Bloomberg, Washington Times, Townhall, CNN). Per §3.5.3 the rollout answers a lapsed military deadline with economic pressure whose ceiling runs through Beijing, not a settlement track. The market moved with it: Brent broke toward $92 a barrel — a fourth straight session higher, up from the $88–89 hold — as the stalemate and the isolation plan kept supply fears elevated and Hormuz transits ran near three a day, down from 19 on Aug 11 (Al Jazeera, CNBC, OilPrice). Trump also hardened, not walked back, his threat against Oman — 'if Oman gets in the way, we'll bomb the [expletive] out of them' — even as Iran and Oman were reported 'close' to a Hormuz-management deal within days and indirect US-Iran contacts continued through Pakistan (CNN, Al Jazeera, CBS News). The UAE reported a fresh 'missile threat' after the Aug 8 ADNOC strikes; the Houthis' claimed hit on a Saudi warship off Mokha stayed Riyadh-unconfirmed; the Gaza disarmament mechanism stayed unaccepted by Hamas; and Israel and Hezbollah held their post-Aug 15 threat exchange (Türkiye Today, NBC News, France 24). Direction holds mixed; seven-day and spillover risk hold critical; the thirty-day ceasefire probability eases to 5.",
  implications: [
    {
      title: "The economic war goes live — the standoff hardens into an endurance contest",
      body:
        "Day 174 turned the trailed 'economic isolation' plan into a live instrument. Trump and Bessent rolled out the sanctions package — allies branding it 'economic D-Day' — as a 'one-two punch' with the continued Hormuz blockade, and Trump flatly ruled out talks with Iran (Bloomberg, Townhall, CNN). Analytical judgment: under the multi-clock framework the negotiation-capacity and political-will clocks now govern — Washington has answered a lapsed military deadline not with a resumed strike but with an apparatus meant to collapse Iran's economy, and per §3.5.3 the China-lever framing concedes the plan's ceiling runs through Beijing, whose banks and yuan rails are the target and the limit at once. This is escalation on the economic axis, not the kinetic one: no new mass-casualty strike hit Iranian soil and the shooting stayed paused. But an economic-war machine is harder to switch off than an operational posture, and with the US negotiating track explicitly closed the standoff hardens into an endurance contest — Iran's capital flight, 65.8% inflation and collapsing China exports against Washington's munitions shortfall, ~24% 'worth-it' polling and an unresolved $67B supplemental. The lapsed-deadline dynamic from Day 172 is now structural: pressure instruments in place of a settlement track, on both sides, with the mediator still under threat.",
    },
    {
      title: "The market breaks the $88–89 hold — the energy clock tightens",
      body:
        "For four sessions the price stopped merely holding and started climbing: Brent broke toward $92 from the $88–89 shelf as the isolation rollout, the ruled-out talks and fresh Hormuz attacks bid the supply-risk premium (Al Jazeera, CNBC, OilPrice). Analytical judgment: per §3.5.5 the move quantifies a squeeze the market had been discounting — Hormuz crossings near three a day around Aug 16, down some 19.5% from 19 on Aug 11 and a fraction of the ~120/day pre-crisis norm, with the EIA seeing no Mideast-output recovery until early 2027. The energy-infrastructure clock tightens on a draining base: global inventories drawing down (IEA ~1.8 mb/d Q3 shortfall), US petroleum reserves at recent lows, and a ~$3–4 session climb that lifts the floor under any future shock. The tail is now closer and cheaper to trigger — a Gulf export-node hit or a laden-tanker sinking reprices past $100 in a session from a higher start, and Goldman's $120 Q4 call and the dual-closure $150–200 tail both stay intact. The market is voting the standoff a longer war, and Day 174's break is the clearest price signal since the shut-in began that the premium is rebuilding rather than bleeding out.",
    },
    {
      title: "Taiwan: the squeeze gets formalized and repriced, and keeps its 2027 calendar",
      body:
        "For Taipei, Day 174 converts the duration story into a price story. Per §3.5.10 there was no Taiwan-specific development today; what changed is that the squeeze is now being formalized — an unveiled 'economic isolation' apparatus, a ruled-out negotiating track and a legislated, blockaded strait — and the market repriced it, with Brent breaking toward $92. Analytical judgment: per §3.5.5 the arithmetic is unforgiving — Taiwan imports 99% of its natural gas, roughly a third of its 23.6 Mt of LNG transits Hormuz, nearly 8 Mt of it Qatari, against about eleven days of gas cover versus some 120 days of oil (CSIS, ISIS). A formal economic-war machine, an Iranian legislated closure, a Houthi campaign now reaching Saudi naval targets and a mediator under bomb-threat are not a spike to wait out but a structural condition to plan around, and the EIA's early-2027 recovery call puts a calendar on it (EIA). Brent near $92 still understates the exposure, because Taiwan's vulnerability is priced in the molecule, not the barrel, and the molecule's route is the one being blockaded, legislated over and now formally besieged (OilPrice). Nothing on Taipei's winter-gas checklist got shorter; the oil break just raised the price of every item on it.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. The US-Iran shooting stayed paused; Day 174's American escalation was economic — the 'economic isolation' plan unveiled, talks ruled out, the Oman threat doubled. The $67B supplemental and 50-48 rebuke stay unresolved in recess.",
    israel:
      "Casualties hold at 56 KIA / 8,652+ WIA; no new Israeli toll reported. Israel stayed diplomatic-offensive — holding the Kushner-Netanyahu line that the IDF stays in Gaza until Hamas fully disarms under a US general — while the Hezbollah threat exchange carried after the Aug 15 Lebanon strike (carried in the 'other' ledger), Israel naming a Radwan Force commander and vowing to strike again. Per §3.5.6 the Lebanon-gap prior holds; Israel stays outside the Oman channel at highest readiness on its October 27 election clock as Saudi Arabia and the UAE fault it over the roadmap.",
    iran:
      "No fresh official MOH toll; Qeshm deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. The day's Iranian action was economic-defensive and diplomatic — absorbing the unveiled 'economic isolation' plan while pressing a near-final Oman transit-route deal, with Hormuz conditioned on sanctions relief and reparations — and no reported new Iranian casualties. A rights thread of reported continued executions is noted but not folded into the war toll. IAEA no verification since Feb 28; ~440.9 kg 60% HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "+0 confirmed deaths in a 24-48h dominated by economic escalation and unverified claims: the UAE reported a fresh 'missile threat' after the Aug 8 ADNOC strike, and the Houthis said they struck a Saudi military landing ship off Mokha, but Riyadh did not confirm losses — per §3.5.3 logged, not counted. Mokha stays shut, ~1,300 workers idled. Lebanon's Aug 15 eleven-death strike (Health Ministry ~4,265 / 12,190+, Wikipedia 3,371 / 10,129 lags) held as a threat exchange with no fresh toll. Bab al-Mandeb Tihamah holds at least 6 killed / 10 wounded. Maritime toll ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mecca pact untested; Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7).",
  },
};

export default data;
