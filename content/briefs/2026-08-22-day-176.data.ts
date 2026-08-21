import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed, still tilting toward a longer war rather than a settlement. Day 176's defining disclosure — that CENTCOM has escorted ~660 million barrels through Hormuz since May at roughly half pre-war volume — cuts both ways: it eases the absolute-shortage tail because oil is demonstrably moving, but it institutionalizes a militarized, contested convoy corridor Tehran has neither stopped nor endorsed, running under fire at war-risk-insurance rates (CNBC, Axios, Stars and Stripes). The economic axis escalated around it: the UAE cut all trade with Iran, Treasury sanctioned a Hezbollah cash network, Bessent set a Monday date to detail the isolation plan and urged China to comply, and Beijing again refused (Gulf News, Fox News). It is not cleanly escalating — the US-Iran shooting stayed paused, no fresh mass-casualty strike hit Iranian soil, and Iran-Oman Hormuz talks were reported 'advancing positively.' It is not de-escalating either, with the negotiating track closed, a new front of allied trade-severance opening, and Brent topping $93. Mixed holds; the de-escalation leg now rests partly on a US-run convoy that a single strike could halt.",
      risk7d:
        "Seven-day risk holds critical. The tracked tails — a Gulf export-node hit, a laden-tanker sinking, a lost escort convoy, or a confirmed Saudi naval loss — stayed untriggered, keeping the gauge off 'extreme,' but the aperture stayed wide: the isolation plan's Monday rollout looms over a China that has ordered firms to ignore it, the UAE severed trade after fresh missile fire, and the Hormuz corridor kept moving oil under an IMO-logged campaign of 17 attacks (CNN, Fox News, CNBC). Iran answered with defiance and diplomacy rather than a kinetic move — Araghchi's 'bound to fail,' Pezeshkian's 'position of power,' the 'positive' Oman talks — while the IRGC warned any restart would bring 'completely different' weapons (Euronews, Al Jazeera). A secondary-sanctions strike on Chinese banks, a US move on Oman, a resumed strike on Iran, a convoy loss, a Saudi kinetic reply to the Mokha claim, a Hezbollah reprisal that breaks the June truce, or a confirmed American combat death remain the dominant seven-day risks.",
      spillover:
        "Spillover holds critical. The war spans Iranian soil, both maritime chokepoints, the Israel-Gaza and Israel-Lebanon seams, an open Houthi front reaching Saudi and Emirati targets, a fresh Israel-Turkey friction over Syria, and now an economic front widening onto Iran's Gulf flank: the UAE suspended all trade and financial transactions with Iran after ballistic-missile fire triggered nationwide shelter warnings (CNN, Washington Post). The isolation plan whose ceiling China openly rejects widens the economic war further, with Beijing ordering firms to defy the coming designations (Fox News). The CENTCOM convoy disclosure draws Washington deeper into daily maritime custody of Gulf exports, a standing exposure of its own. The Lebanon truce stayed frayed to a threat exchange and the Gaza demilitarization mechanism kept that seam live with no firm pre-election Israeli commitment. That no kinetic US-Iran, US-Oman or Israel-Turkey clash followed the day's moves is why spillover did not worsen outright; that a second Gulf partner has now severed ties and the mediator remains under bomb-threat is why it did not ease.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'CNBC / Axios / Jerusalem Post',
      event:
        "US Central Command disclosed it has escorted more than 660 million barrels of crude — about 10 million barrels a day, roughly half the pre-war flow — through the Strait of Hormuz since early May, aiding some 1,300 vessels in nightly convoys down a southern channel under US warships and fighter cover, after a two-week campaign degraded Iran's coastal radar and maritime surveillance.",
      summary:
        "The disclosure reframes the 'shut strait' the briefs tracked: the prior ~3-transits-a-day figure was unescorted commercial traffic, while the escorted convoy is the actual throughput at ~half pre-war volume — neither a clean shut nor a reopening.",
      impact:
        "The energy-infrastructure and negotiation-capacity clocks govern: the absolute-shortage tail eases as oil moves, but a militarized, open-ended corridor neither capital can politically own hardens into a longer-war structure.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'OilPrice / Trading Economics / CNBC',
      event:
        "Brent crude topped $93 and traded near $94 on Friday, a second straight weekly gain of more than 5%, giving the CENTCOM-restored flow no discount as Washington pressed its economic war and the Monday isolation-plan rollout loomed over a defiant Beijing.",
      summary:
        "Per §3.5.5 the premium is no longer a pure barrels-missing story — half the flow is restored — but a risk-and-duration premium on a contested ~10 mb/d convoy against ~20 mb/d pre-war, at war-risk insurance near thirty times the norm.",
      impact:
        "The market prices the corridor's fragility, not its success: a Gulf export-node hit, a lost convoy, or a secondary-sanctions strike on Chinese rails reprices past $100 from a base that has stopped discounting the flow.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Gulf News / The National / Just Security',
      event:
        "Treasury Secretary Bessent set a Monday news conference to detail the 'economic isolation' plan and urged China to 'get with the program,' while Treasury sanctioned a Hezbollah cash-courier network moving hundreds of millions between Lebanon, Turkey, the UAE and Iran; Bessent called it 'the greatest coordinated economic isolation in the history of the world.'",
      summary:
        "Per §3.5.3 cite Bessent's framing as an administration claim, not a delivered result — the apparatus meets a declared Chinese refusal before its first designations, so its bite runs through an enforcement collision with Beijing.",
      impact:
        "The negotiation-capacity and political-will clocks dominate: the sanctions machine advances toward a China wall, and the war's off-ramp narrows to Iran's economic endurance against Washington's will to enforce secondary sanctions.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: 'Fox News / Euronews / Al Jazeera',
      event:
        "Beijing again refused, ordering firms to ignore US sanctions, as Araghchi — fresh from Beijing talks with Wang Yi — called the 'Economic D-Day' 'bound to fail' and listed prior US 'failures,' President Pezeshkian pressed to end the war 'from a position of power,' and Tehran said Iran-Oman Hormuz talks were advancing 'positively.'",
      summary:
        "Per §3.5.3 Iran answered with defiance and diplomacy rather than a kinetic move; the Oman 'positive' framing is Tehran's claim and, per §3.5.3, treated as signaling until transits actually rise.",
      impact:
        "The Iran-China counter hardens on paper before the plan lands: a maximalist Iranian position anchored to a veto-wielding patron is harder to trade down, keeping the standoff institutionalized.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'CNN / Washington Post / Denver Gazette',
      event:
        "The UAE suspended all trade and financial transactions with Iran after fresh ballistic-missile fire triggered nationwide shelter warnings — a second Gulf partner severing ties — while on Gaza the Kushner-Netanyahu demilitarization plan advanced to two working groups but Netanyahu called the roadmap 'problematic' before the October 27 election, and the IRGC warned any restart would bring 'completely different' weapons.",
      summary:
        "Per §3.5.6 the Israeli-independence and Lebanon-gap priors hold: Israel keeps its own clock on Gaza; the UAE cut widens the economic war onto Iran's Gulf flank without a kinetic trigger.",
      impact:
        "The coalition-cohesion and humanitarian clocks tighten: a second Gulf severance and an unmoved pre-election Israel keep two of the war's widening seams — the Gulf economic front and the Gaza veto — live and unbound.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series; Day 176's American action was economic and maritime-logistical — CENTCOM's disclosure that it has escorted ~660 million barrels through Hormuz since May, Bessent's Monday date to detail the isolation plan, and fresh Hezbollah cash-network sanctions — with no reported US casualty; DCAS holds 18/687, a wider scope, not a confirmed hostile loss; the Kuwait Ahmad al-Jaber death stays denied by CENTCOM",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 the brief keeps the combat figure and flags DCAS; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule, which is keyed to a verified combat death. The US-Iran shooting stayed paused, and CENTCOM's own disclosure this week reframed the Hormuz picture — ~660 million barrels and ~1,300 vessels escorted since May under US warships and fighters, a standing maritime custody of Gulf exports that is itself an exposure. The $67 billion supplemental and the 50-48 Senate war-powers rebuke stay unresolved in August recess, and the Joint Chiefs chairman still presses for an off-ramp.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0; no new Israeli fatalities or wounded reported in the 24-48h; Israel's posture stayed political rather than costly — advancing the Kushner-Netanyahu demilitarization plan to two working groups while Netanyahu called the roadmap 'problematic' before the October 27 election, holding the line that the IDF stays in Gaza until Hamas fully disarms under a US general, and keeping its Hezbollah threat exchange live",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA. The day's Israeli posture was political rather than costly: Jerusalem advanced the Board of Peace's demilitarization plan to two working groups after Kushner's meetings, but Netanyahu called the roadmap 'problematic' and was unwilling to concede on Gaza before the October 27 election, holding the demand that Gaza be demilitarized under a US general before any IDF redeployment and keeping its Hezbollah threat exchange live after the Aug 15 southern-Lebanon strike (carried in the 'other' ledger). Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold — Israel acts on its own clock, outside the US-Iran framework. Israel stayed at highest readiness, with Saudi Arabia and the UAE still faulting it over the Gaza roadmap even as the UAE moved to sever trade with Iran.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; Iran's Day 176 action was diplomatic and economic-defensive — Araghchi's 'bound to fail' rejection of the isolation plan after Beijing talks with Wang Yi, Pezeshkian's call to end the war 'from a position of power,' and Tehran's report of 'positive' Iran-Oman Hormuz talks — with no reported new Iranian casualties; a rights thread of reported continued executions is noted but not folded into the war toll",
      status:
        "No updated official Iranian toll on Day 176. The Qeshm Island deaths and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. Tehran's Day 176 moves were diplomatic and economic-defensive — Araghchi dismissing the isolation plan as 'bound to fail' after meeting Wang Yi in Beijing, Pezeshkian pressing to end the war 'from a position of power,' and Tehran reporting Iran-Oman Hormuz talks 'advancing positively' — with no reported new Iranian casualties. Per §3.1's dual-sourcing a separate rights thread of reported continued executions on security charges is noted but kept out of the war-casualty cumulative. The IAEA has run no verification since February 28 and remains locked out of Isfahan; the ~440.9 kg of 60% HEU stays unverified and likely at Isfahan, with ISIS flagging enough for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        "Lebanon source-split: Health Ministry ~4,265 / 12,190+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA (Kuwait 10 killed / 115 injured; Saudi Arabia 11 civilians injured, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded per Yemen government (Houthis unconfirmed) · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing",
      delta:
        "+0 confirmed deaths in a 24-48h dominated by economic escalation and the CENTCOM corridor disclosure; the Minoan Dignity killing and the Amara seizure cited in the disclosure are prior enforcement events already inside the maritime ledger, not fresh deaths, and the IMO's ~17 Jul-Aug attacks / four sailors killed likewise carry; the UAE trade suspension and the Houthi/Saudi and UAE-missile vectors produced no verified new toll",
      status:
        "The 'other' ledger held on confirmed deaths on a day dominated by economic pressure and the Hormuz-escort disclosure. The Minoan Dignity killing and the Amara seizure cited in CENTCOM's account are prior enforcement events already inside the maritime ledger, and the IMO's roughly 17 attacks with four sailors killed in July–August carry rather than adding fresh deaths. The UAE's suspension of all trade with Iran, the standing Houthi Saudi-warship claim and the UAE ballistic-missile threat produced no verified new toll — per §3.5.3 logged, not counted; shut Mokha left about 1,300 workers idled. In Lebanon the Aug 15 strike that killed at least eleven including three children (Health Ministry cumulative ~4,265 / 12,190+, the Wikipedia series 3,371 / 10,129 lagging) held as a Hezbollah-Israel threat exchange with no fresh toll. The Bab al-Mandeb Tihamah toll (Aug 12) holds at least six killed and ten wounded per Yemen's government. Hormuz commercial transit stays effectively shut outside the US convoy; the maritime toll holds ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; the Mecca pact stayed untested. Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7).",
    },
  },
  exec:
    "Day 176 recast the Hormuz picture. US Central Command disclosed that it has escorted more than 660 million barrels of crude — about 10 million barrels a day, roughly half the pre-war flow — through the Strait of Hormuz since early May, aiding some 1,300 vessels in nightly convoys down a southern channel under US warships and fighter cover after a two-week campaign degraded Iran's coastal radar and maritime surveillance (CNBC, Axios, Jerusalem Post). The disclosure reframes the 'shut strait' rather than reopening it: normal commercial transit is still dead — Iran killed the bulk carrier Minoan Dignity and seized the tanker Amara enforcing its permit regime, and the IMO logged at least 17 attacks in July–August that killed four sailors — but the US is running a militarized convoy corridor Tehran has neither stopped nor endorsed (Stars and Stripes, CNBC). The market gave the restored flow no discount: Brent topped $93 and traded near $94 on Friday, a second straight weekly gain of more than 5%, as Washington pressed its economic war — Bessent set a Monday news conference to detail the 'economic isolation' plan and urged China to 'get with the program,' Treasury sanctioned a Hezbollah cash-courier network, and the UAE suspended all trade with Iran after fresh missile fire (Gulf News, CNN, OilPrice). Beijing again refused, ordering firms to ignore the sanctions as Araghchi called the plan 'bound to fail' and Pezeshkian pressed to end the war 'from a position of power' (Fox News, Euronews). Direction holds mixed; seven-day and spillover risk hold critical; the thirty-day ceasefire probability holds at 5.",
  implications: [
    {
      title: "The strait is neither shut nor reopened — it is escorted",
      body:
        "CENTCOM's own numbers reframe the closure the briefs have tracked as a hard shut: more than 660 million barrels and roughly 1,300 vessels aided since early May, about 10 million barrels a day down a southern channel in nightly convoys under US warships and fighters, made possible by a two-week campaign that degraded Iran's coastal radar and surveillance (CNBC, Axios, Jerusalem Post). Analytical judgment: under the multi-clock framework the energy-infrastructure and negotiation-capacity clocks govern, and the prior '~3 transits a day' figure resolves as unescorted commercial traffic — which stays dead — while the escorted convoy is the actual throughput at roughly half pre-war volume. The strait is now functionally a US-military-run corridor, neither a clean shut nor a reopening. Iran has not stopped it but has not endorsed it: it killed the Minoan Dignity, seized the Amara, and the IMO logged 17 July–August attacks that killed four sailors, so the flow moves under fire at war-risk-insurance rates (Stars and Stripes). Per §3.5.3 the claim-versus-reality gap is the signal — Washington's 'control' and 'reopened' framing against a contested convoy Tehran still calls a closed strait pending US concessions. This lowers the absolute-shortage tail because oil is moving, but it institutionalizes a costly, militarized, open-ended arrangement neither capital can politically own — a longer-war structure, not an off-ramp.",
    },
    {
      title: "The market bids the standoff even as the oil flows",
      body:
        "The tell of Day 176 is that CENTCOM proved crude can move and Brent rose anyway: the benchmark topped $93 and traded near $94 on Friday, a second straight weekly gain above 5% (OilPrice, Trading Economics, CNBC). Analytical judgment: per §3.5.5 the premium is no longer a pure barrels-missing story — roughly half the pre-war flow is restored — but a risk-and-duration premium on a corridor that runs at ~10 million barrels a day versus ~20 million pre-war, at war-risk insurance near thirty times the norm, under a campaign that logged 17 attacks in two months. The market is pricing the fragility of the arrangement, not its success: one Gulf export-node hit, a lost convoy, or a secondary-sanctions strike on the Chinese banks and yuan rails Washington details Monday reprices past $100 from a base that has stopped discounting the flow. The escalation vectors stacked the other way — the UAE cut all trade with Iran, Treasury sanctioned a Hezbollah cash network, and Beijing ordered firms to ignore the coming designations — so the market reads the Monday isolation rollout and the China-enforcement collision as the larger vector than the restored barrels. Goldman's $120 fourth-quarter call and the dual-closure $150–200 tail both stay intact on a thinner cushion.",
    },
    {
      title: "Taiwan: half-flow under guns is not a market to plan around",
      body:
        "Per §3.5.10 there was no Taiwan-specific development today; what changed is that Hormuz's 'flow' is now revealed as a US-escorted convoy at half pre-war volume, priced at war-risk rates. For Taipei the CENTCOM disclosure cuts both ways: the absolute-shortage tail eases because crude and LNG are moving, but the arrangement is militarized, contested and open-ended — a managed emergency, not a normalization. Analytical judgment: per §3.5.5 the arithmetic is unforgiving — Taiwan imports 99% of its natural gas, roughly a third of its 23.6 Mt of LNG transits Hormuz, nearly 8 Mt of it Qatari, against about eleven days of gas cover versus some 120 days of oil (CSIS, ISIS). A convoy that a single strike can halt, an isolation plan that could sever the very China rails much of Asian energy finance runs on, and a Brent near $94 all keep the exposure structural rather than passing. Taiwan's vulnerability is priced in the molecule, and the molecule now moves in a guarded line rather than an open sea-lane. Nothing on Taipei's winter-gas checklist got shorter today; a proven-but-fragile corridor under fire is a condition to plan around, not a spike to wait out.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. The US-Iran shooting stayed paused; CENTCOM disclosed it has escorted ~660M barrels / ~1,300 vessels through Hormuz since May, a standing maritime custody that is itself an exposure. The $67B supplemental and 50-48 rebuke stay unresolved in recess.",
    israel:
      "Casualties hold at 56 KIA / 8,652+ WIA; no new Israeli toll reported. Israel's posture stayed political — advancing the Kushner-Netanyahu demilitarization plan to two working groups while Netanyahu called the roadmap 'problematic' before the October 27 election, holding the line that the IDF stays in Gaza until Hamas fully disarms under a US general, and keeping the Hezbollah threat exchange live after the Aug 15 Lebanon strike (carried in 'other'). Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold; Israel stays at highest readiness on its October 27 election clock.",
    iran:
      "No fresh official MOH toll; Qeshm deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. The day's Iranian action was diplomatic and economic-defensive — Araghchi's 'bound to fail' rejection after Beijing talks with Wang Yi, Pezeshkian's 'position of power' call, and 'positive' Iran-Oman Hormuz talks — with no reported new casualties. A rights thread of reported continued executions is noted but not folded into the war toll. IAEA no verification since Feb 28; ~440.9 kg 60% HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "+0 confirmed deaths in a 24-48h dominated by economic escalation and the CENTCOM corridor disclosure. The Minoan Dignity killing and the Amara seizure cited in the disclosure are prior enforcement events already inside the maritime ledger, not fresh deaths; the IMO's ~17 Jul-Aug attacks / four sailors killed likewise carry. The UAE trade suspension and the Houthi/Saudi and UAE-missile vectors produced no verified new toll — per §3.5.3 logged, not counted. Mokha stays shut, ~1,300 workers idled. Lebanon's Aug 15 eleven-death strike (Health Ministry ~4,265 / 12,190+, Wikipedia 3,371 / 10,129 lags) held as a threat exchange. Bab al-Mandeb Tihamah holds at least 6 killed / 10 wounded. Maritime toll ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mecca pact untested; Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7).",
  },
};

export default data;
