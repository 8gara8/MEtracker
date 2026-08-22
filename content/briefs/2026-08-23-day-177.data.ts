import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed, still tilting toward a longer war. Day 177 was a rhetorical eve-of-plan day: no US-Iran shooting, no fresh strike on Iranian soil, no new bodies — but both capitals hardened their scripts before Bessent's Monday (Aug 24) isolation-plan rollout. Iran chose victory-and-defiance — Pezeshkian's 'the world recognizes our victory' and 'position of power,' the Foreign Ministry's 'declaration of war on all nations,' the IRGC's 'will not submit' and 'offensive aspect' — while Bessent said markets are 'misinterpreting' the plan and there would 'likely not be a large-scale kinetic restart,' and Trump called Hormuz 'American territory' (CBS News, Al Jazeera, Fox News, Bloomberg). It is not de-escalating: the negotiating track stays closed, the plan meets a declared Chinese refusal, Brent held near $94, and Iran's own loadings collapsed to ~287k b/d. It is not cleanly escalating either — the day's moves were words, not munitions, and Tehran granted Iraqi tankers Hormuz permits. Mixed holds; the exit narratives on both sides are for domestic audiences, and the real test is Monday.",
      risk7d:
        "Seven-day risk holds critical. The tracked tails — a Gulf export-node hit, a laden-tanker sinking, a lost escort convoy, a confirmed Saudi naval loss, a Hezbollah reprisal that breaks the June truce, or a confirmed American combat death — stayed untriggered, keeping the gauge off 'extreme,' but the aperture stayed wide with the isolation plan's Monday rollout looming over a China that again refused it (CNN, Fox News). Iran answered with rhetoric rather than a kinetic move — Pezeshkian's 'position of power,' the FM's 'declaration of war on all nations,' the IRGC's 'offensive aspect,' Araghchi's 'doomed to fail' — but warned of a 'devastating' response to the sanctions barrage. A secondary-sanctions strike on Chinese banks, a US move on Oman, a resumed strike on Iran, a convoy loss, a Saudi kinetic reply to the standing Mokha claim, or an Iranian maritime/cyber/proxy answer to the Monday plan remain the dominant seven-day risks.",
      spillover:
        "Spillover holds critical. The war still spans Iranian soil, both maritime chokepoints, the Israel-Gaza and Israel-Lebanon seams, an open Houthi front reaching Saudi and Emirati targets, the Israel-Turkey friction over Syria, and an economic front now widened onto Iran's Gulf flank by the UAE's severance of all trade with Iran (carried). Day 177 added no new kinetic front but sharpened the economic one: Iran's 'declaration of war on all nations' frame is a bid to convert the plan into a multilateral sovereignty grievance, and Beijing again rejected it, calling sanctions 'not the solution' (Al Jazeera, CNN). The CENTCOM escort corridor keeps Washington in daily maritime custody of Gulf exports, a standing exposure. The Lebanon truce stayed frayed to a threat exchange and the Gaza demilitarization mechanism kept that seam live with no firm pre-election Israeli commitment. That no kinetic clash followed the day's words is why spillover did not worsen outright; that the plan's China collision looms and a second Gulf partner has already cut ties is why it did not ease.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'CBS News / Al Jazeera / Euronews',
      event:
        "On the eve of Bessent's 2 p.m. ET Monday (Aug 24) news conference to detail the 'economic isolation' plan, President Pezeshkian declared 'the world recognizes our victory' and urged ending the war 'from a position of power and dignity' — an exit narrative on Tehran's own terms as the negotiating track stays closed.",
      summary:
        "Per §3.5.3 cite the 'victory' framing as Pezeshkian's claim to a domestic audience, not a verified outcome; it is a bid to justify ending the war without conceding to Washington.",
      impact:
        "The negotiation-capacity and political-will clocks govern: a victory-and-exit narrative that still keeps the demand set maximal narrows the off-ramp to Iran's terms, hardening rather than easing the standoff before Monday.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / CNN',
      event:
        "Iran's Foreign Ministry branded the coming US sanctions a 'declaration of war on all nations' and an attempt to 'exert extraterritorial sovereignty over all independent UN member states,' while the IRGC vowed Tehran 'will not submit' and would 'adopt an offensive aspect.'",
      summary:
        "The frame is aimed less at Washington than at Beijing and the Global South — recasting the plan as a multilateral sovereignty grievance to raise the political cost of compliance before the first designation.",
      impact:
        "The coalition-cohesion and negotiation-capacity clocks tighten: internationalizing the plan's ceiling pre-loads the enforcement collision Monday's rollout must survive and makes Iran's position harder to trade down.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'Fox News / Bloomberg / Al Jazeera',
      event:
        "Bessent pushed back that oil markets are 'misinterpreting' the plan and that under maximum economic pressure there would 'likely not be a large-scale kinetic restart,' reaffirming the kinetic cap, while Trump called the Strait of Hormuz 'American territory right now' and said Iran is 'not ready to make the right deal.'",
      summary:
        "Per §3.5.3 treat 'markets misinterpreting' and 'American territory' as administration claims: the plan is still a Monday promise, and the market has not backed off despite the reassurance.",
      impact:
        "The political-will clock dominates: the kinetic cap holds even as the sanctions machine advances, and the war's off-ramp narrows to Iran's economic endurance against Washington's will to enforce secondary sanctions on China.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'GlobalSecurity / Kpler / Trading Economics',
      event:
        "The economics cut against the rhetoric: Iranian crude loadings collapsed to about 287,000 barrels a day this month — roughly a seventh of the ~2 million pre-war and below the ~550,000 of early July — even as Tehran granted Iraqi tankers Hormuz permits, Brent held near $94, and Kpler logged 236 Hormuz transits in Aug 1–19 with 148 going dark.",
      summary:
        "Per §3.5.5 quantify: the market is not mispricing missing Iranian barrels, which are already gone, but the enforcement risk on Chinese rails and the fragility of a US escort corridor still moving ~10 mb/d under fire.",
      impact:
        "The energy-infrastructure clock stays hot: a secondary-sanctions strike on Chinese rails or a lost convoy reprices past $100 from a base that has stopped discounting the flow; Iraqi-tanker permits show the strait is selectively gated, not open.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'CNN / Fox News',
      event:
        "Beijing again refused, its foreign ministry calling 'sanctions and pressure tactics… not the solution' and urging a 'political and diplomatic approach,' as US pump prices ran about $1 a gallon above a year ago with Hormuz traffic still low and the carrier USS George Washington relieved the USS Abraham Lincoln after more than 250 days on station.",
      summary:
        "Per §3.5.3 China's refusal converts the plan's ceiling into a declared red line before designation one; the pump-price and carrier-rotation lines show the home-front and force-posture costs accruing on the US side.",
      impact:
        "The coalition-cohesion and political-will clocks tighten: the plan's bite runs through a defiant Beijing, and the enforcement collision — not the restored barrels — is the vector the market and both capitals are watching.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series; Day 177 was rhetorical and economic — no US-Iran shooting, no reported American casualty on the eve of Bessent's Monday plan; DCAS holds 18/687, a wider scope, not a confirmed hostile loss; the Kuwait Ahmad al-Jaber death stays denied by CENTCOM",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 the brief keeps the combat figure and flags DCAS; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule, which is keyed to a verified combat death. The US-Iran shooting stayed paused through a day of messaging: Bessent set a 2 p.m. ET Monday date to detail the isolation plan, said markets are 'misinterpreting' it and there would 'likely not be a large-scale kinetic restart,' and Trump called Hormuz 'American territory.' CENTCOM's escort corridor — ~660 million barrels and ~1,300 vessels since May — remains a standing daily maritime exposure, and the USS George Washington relieved the USS Abraham Lincoln after more than 250 days at sea. The $67 billion supplemental and the 50-48 Senate war-powers rebuke stay unresolved in August recess.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0; no new Israeli fatalities or wounded reported in the 24-48h; Israel stayed offstage on a day dominated by the US-Iran economic standoff, holding its Gaza posture and keeping its Hezbollah threat exchange live at highest readiness",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA. Israel was largely offstage on Day 177 as the action ran through the US-Iran economic track. Its posture stayed political rather than costly: Jerusalem holds the demand that Gaza be demilitarized under a US general before any IDF redeployment, with the Kushner-Netanyahu roadmap Netanyahu still calls 'problematic' before the October 27 election, and it keeps its Hezbollah threat exchange live after the Aug 15 southern-Lebanon strike (carried in the 'other' ledger). Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold — Israel acts on its own clock, outside the US-Iran framework — and it stayed at highest readiness.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; Iran's Day 177 action was rhetorical and diplomatic — Pezeshkian's 'we won / position of power' exit framing, the Foreign Ministry's 'declaration of war on all nations,' the IRGC's 'will not submit,' and Araghchi's 'doomed to fail' — with no reported new casualties; a rights thread of reported continued executions is noted but not folded into the war toll",
      status:
        "No updated official Iranian toll on Day 177. The Qeshm Island deaths and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. Tehran's Day 177 moves were rhetorical and diplomatic — Pezeshkian's 'the world recognizes our victory' and call to end the war 'from a position of power,' the Foreign Ministry's 'declaration of war on all nations,' the IRGC's 'will not submit' and 'offensive aspect,' and Araghchi's 'doomed to fail' — with no reported new casualties. Per §3.1's dual-sourcing a separate rights thread of reported continued executions on security charges is noted but kept out of the war-casualty cumulative. The IAEA has run no verification since February 28 and remains locked out of Isfahan; the ~440.9 kg of 60% HEU stays unverified and likely at Isfahan, with ISIS flagging enough for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        "Lebanon source-split: Health Ministry ~4,265 / 12,190+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA (Kuwait 10 killed / 115 injured; Saudi Arabia 11 civilians injured, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded per Yemen government (Houthis unconfirmed) · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing",
      delta:
        "+0 confirmed deaths in a 24-48h dominated by pre-plan messaging; no fresh Houthi-Saudi, UAE-missile, Lebanon or maritime toll was verified; the Aug 15 Lebanon strike and the Aug 12 Tihamah toll carry, as does the standing maritime ledger",
      status:
        "The 'other' ledger held on confirmed deaths on a rhetorical eve-of-plan day. No fresh Houthi-Saudi, UAE-missile, Lebanon or maritime toll was verified — per §3.5.3 the standing Houthi Saudi-warship claim and the UAE ballistic-missile threat stay logged, not counted. In Lebanon the Aug 15 strike that killed at least eleven including three children (Health Ministry cumulative ~4,265 / 12,190+, the Wikipedia series 3,371 / 10,129 lagging) holds as a Hezbollah-Israel threat exchange with no fresh toll. The Bab al-Mandeb Tihamah toll (Aug 12) holds at least six killed and ten wounded per Yemen's government. Hormuz commercial transit stays effectively shut outside the US convoy; the maritime toll holds ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; the Mecca pact stayed untested; Mokha shut, ~1,300 workers idled. Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7).",
    },
  },
  exec:
    "Day 177 was the pause before Monday's plunge. Twenty-four hours before Treasury Secretary Scott Bessent details the 'economic isolation' plan at a 2 p.m. ET Monday (Aug 24) news conference, both capitals hardened their scripts. Iran chose a victory-and-defiance posture: President Pezeshkian declared 'the world recognizes our victory' and urged ending the war 'from a position of power and dignity,' while the Foreign Ministry branded the coming sanctions a 'declaration of war on all nations' — an attempt at extraterritorial sovereignty over every UN member — and the IRGC vowed Tehran 'will not submit' and would 'adopt an offensive aspect' (CBS News, Al Jazeera, CNN). Bessent pushed back that oil markets are 'misinterpreting' the plan and that under maximum economic pressure there would 'likely not be a large-scale kinetic restart,' as Trump called the Strait of Hormuz 'American territory' and said Iran is 'not ready to make the right deal' (Fox News, Bloomberg). The economics kept cutting against the rhetoric: Iranian crude loadings collapsed to about 287,000 barrels a day this month — roughly a seventh of the ~2 million pre-war — even as Tehran granted Iraqi tankers Hormuz permits, Brent held near $94, and US pump prices ran about $1 higher than a year ago (globalsecurity/Kpler, Trading Economics, CNN). Beijing again refused, calling 'sanctions and pressure tactics… not the solution.' Direction holds mixed; seven-day and spillover risk hold critical; the thirty-day ceasefire probability holds at 5.",
  implications: [
    {
      title: "Both capitals harden their scripts on the eve of the plan",
      body:
        "Iran's victory-and-defiance framing — Pezeshkian's 'the world recognizes our victory' and 'position of power and dignity,' the Foreign Ministry's 'declaration of war on all nations,' the IRGC's 'will not submit' and 'offensive aspect' — is aimed less at Washington than at Beijing and the Global South, recasting the plan as an assault on the sovereignty of every state that trades with Iran and raising the political cost of compliance before the first designation (CBS News, Al Jazeera, CNN). Bessent's counter — markets 'misinterpreting' the plan, no 'large-scale kinetic restart' — reaffirms the kinetic cap while betting the squeeze bites through finance. Per §3.5.3 both are pre-event positioning claims, not outcomes: the plan is still a Monday promise meeting a declared Chinese refusal. Under the multi-clock framework the negotiation-capacity and political-will clocks govern — the negotiating track stays closed, Pezeshkian's 'we won, so let's stop' is an exit narrative for a domestic audience, and Trump's 'not ready for the right deal' keeps the US demand set maximal. Analytical judgment: the internationalization of Iran's position — anchoring its defiance to a veto-wielding patron and to a 'war on all nations' frame — is the structural tell, making the standoff harder to trade down and pre-loading the enforcement collision Monday's plan must survive. The day added no barrels and no bodies but hardened the two narratives that will collide Monday, tilting the eve toward a longer war.",
    },
    {
      title: "Bessent says the market misreads; the market, and Iran's own tankers, say otherwise",
      body:
        "Bessent's claim that oil markets are 'misinterpreting' the plan — that economic pressure, unlike a kinetic war, removes no barrels — ran straight into the tape. Per §3.5.5 quantify: Brent held near $94 after a second straight weekly gain above 5%, US pump prices sat about $1 a gallon above a year ago, and Iran's own crude loadings collapsed to ~287,000 barrels a day this month, roughly a seventh of the ~2 million pre-war and below the ~550,000 of early July (Trading Economics, CNN, globalsecurity/Kpler). The market is not mispricing missing Iranian barrels — those are already gone; it is pricing the enforcement risk on the Chinese banks and yuan rails the plan must hit and the fragility of a US escort corridor still moving ~10 million barrels a day under fire (Fortune, CNBC). That Tehran simultaneously granted Iraqi tankers Hormuz permits shows the strait is selectively gated by Iran, not open — a permit regime, not a reopening. Per §3.5.3 the claim-versus-reality gap is the signal: Washington frames the plan as painless to oil and Hormuz as 'American territory,' while the barrels move under Iranian permits and the price refuses to fall. Analytical judgment: a secondary-sanctions strike on Chinese rails or a lost convoy reprices past $100 from a base that has stopped discounting the flow — Goldman's $120 fourth-quarter call and the dual-closure $150–200 tail hold on a thinner cushion.",
    },
    {
      title: "Taiwan: the plan's ceiling and Taipei's supplier run through the same rails",
      body:
        "Per §3.5.10 there was no Taiwan-specific development today; the relevance is structural and sharpening. Monday's plan is built to bite through the Chinese banks and yuan-clearing rails that finance much of Asian energy trade — the very plumbing through which Taipei's own suppliers and shippers settle — so a secondary-sanctions escalation aimed at Iran could ripple into the financing of unrelated Gulf-to-Asia cargoes (Fortune, Bloomberg). Analytical judgment: per §3.5.5 the arithmetic is unchanged and unforgiving — Taiwan imports 99% of its natural gas, roughly a third of its 23.6 Mt of LNG transits Hormuz, nearly 8 Mt of it Qatari, against about eleven days of gas cover versus some 120 days of oil (CSIS, ISIS). Today's tell is that the corridor is selectively gated by Tehran — Iraqi tankers get permits while normal commercial transit stays dead — and priced at war-risk rates near $94, while the isolation plan could sever the China rails Asian energy finance runs on. For Taipei that is a two-sided exposure — a physical chokepoint under Iranian permit control and a financial chokepoint under US sanctions threat — neither of which a winter-gas stockpile fully offsets. Nothing on the checklist got shorter today; the eve of the plan is a condition to plan around, not a spike to wait out.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. Day 177 was rhetorical and economic — no US-Iran shooting, no reported American casualty; Bessent set a 2 p.m. ET Monday date to detail the plan and said there would 'likely not be a large-scale kinetic restart.' The CENTCOM escort corridor (~660M barrels / ~1,300 vessels since May) remains a standing exposure; the USS George Washington relieved the USS Abraham Lincoln. The $67B supplemental and 50-48 rebuke stay unresolved in recess.",
    israel:
      "Casualties hold at 56 KIA / 8,652+ WIA; no new Israeli toll reported. Israel was largely offstage as the action ran through the US-Iran economic track. Its posture stayed political — holding the line that the IDF stays in Gaza until Hamas disarms under a US general, with the Kushner-Netanyahu roadmap Netanyahu still calls 'problematic' before the October 27 election, and keeping the Hezbollah threat exchange live after the Aug 15 Lebanon strike (carried in 'other'). Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold; Israel stays at highest readiness on its October 27 election clock.",
    iran:
      "No fresh official MOH toll; Qeshm deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. The day's Iranian action was rhetorical and diplomatic — Pezeshkian's 'we won / position of power' framing, the Foreign Ministry's 'declaration of war on all nations,' the IRGC's 'will not submit,' and Araghchi's 'doomed to fail' — with no reported new casualties. A rights thread of reported continued executions is noted but not folded into the war toll. IAEA no verification since Feb 28; ~440.9 kg 60% HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "+0 confirmed deaths in a 24-48h dominated by pre-plan messaging. No fresh Houthi-Saudi, UAE-missile, Lebanon or maritime toll was verified — per §3.5.3 the standing Mokha claim and the UAE ballistic-missile threat stay logged, not counted. Lebanon's Aug 15 eleven-death strike (Health Ministry ~4,265 / 12,190+, Wikipedia 3,371 / 10,129 lags) holds as a threat exchange. Bab al-Mandeb Tihamah (Aug 12) holds at least 6 killed / 10 wounded. Maritime toll ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mecca pact untested; Mokha shut, ~1,300 workers idled; Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7).",
  },
};

export default data;
