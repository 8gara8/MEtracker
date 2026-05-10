import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 72 produces the heaviest Israeli bombardment of Lebanon since the April truce. IDF struck 85+ Hezbollah targets in 24 hours — weapon storage, production facilities, launchers — while Israeli airstrikes killed 39 across southern Lebanon Saturday including seven at Saksakiyeh (a child among them, 15 wounded) and a triple-tap drone strike on a Syrian man and his 12-year-old daughter in Nabatieh. Iran's Supreme National Security Council responds by publicly linking the Lebanon track to the ceasefire framework for the first time at the institutional level — Tasnim: ceasefire terms include 'stopping the war on all fronts, including against the heroic Lebanese Islamic resistance'; Iran 'assessing possibility of exiting the deal should the Israeli regime persist in its breaches.' Trump counters with 'Project Freedom Plus — meaning Project Freedom plus other things' as the first operational naming of escalation consequence for MOU delay. Probability falls 22 → 19.",
      risk7d:
        "Seven-day risk holds critical with intensifying compression. Trump-Xi summit now at ~4 days — structural Chinese incentive to deliver Iranian framework signature pre-summit persists but now competes against Iran's own SNSC Lebanon-linkage conditionality. Trump's 'Project Freedom Plus' activation window opens if MOU not signed. IDF's 85-site operational tempo in Lebanon will trigger Iran's declared exit ramp daily. Qatar PM met Rubio and Witkoff in Miami Saturday — fifth mediator lane — described as 'especially effective in negotiations with Iran.' Brent $101.29 Friday close carries into weekend; AlanChand Remittance 1,803,000 IRR (+0.72% from Friday's ~1,790,000). CENTCOM: 58 commercial vessels redirected since April 13.",
      spillover:
        "Spillover holds critical and broadens. Lebanon: +39 KIA Saturday across southern Lebanon per Lebanon Health Ministry — heaviest single-day toll since April truce. Saksakiyeh +7 KIA (child, 15 wounded); Nabatieh triple-tap drone on Syrian man and 12yo daughter. IDF ordered nine villages evacuated. Bahrain arrests 41 IRGC-linked individuals — largest Gulf-state internal crackdown since war — tightening domestic counter-IRGC posture. UAE +3 wounded Friday carries. Maritime: CENTCOM 58 vessels redirected (up from 45 by May 1); Sea Star III and Sevda disabled May 8; Hormuz transits ~5% pre-war flow. IMO ~23,000 seafarers stranded continues.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'JNS / Eastern Herald / Al Jazeera / Times of Israel / Lebanon Health Ministry',
      event: "IDF strikes 85+ Hezbollah targets in 24 hours; Israeli airstrikes kill 39 across southern Lebanon Saturday — heaviest bombardment since April truce",
      summary:
        "IDF struck more than 85 Hezbollah infrastructure sites 'from the air and on the ground' in 24 hours including weapon-storage facilities, production sites, and launchers across southern Lebanon plus an underground weapons site in the Beqaa Valley. Israeli airstrikes killed 39 across southern Lebanon Saturday per Lebanon Health Ministry. Deadliest strike: Saksakiyeh in Sidon district — seven killed including a child, 15 wounded. Nabatieh: Israeli drone targeted a Syrian man on a motorcycle with his 12-year-old daughter in a triple-tap sequence. IDF called on residents of nine villages to evacuate, warning it would act 'forcefully' against Hezbollah.",
      impact:
        "Heaviest single-day Israeli bombardment of Lebanon since the April truce. Qualitative break from the post-ceasefire drip pattern of 4-8 KIA per day to 39 KIA in one day. The nine-village evacuation order signals IDF anticipates sustained operations, not a one-day retaliation cycle. Lebanon MOH cumulative rises to ~2,707+ KIA. The Saksakiyeh child casualty and Nabatieh triple-tap will generate international pressure and provide Iran's SNSC additional leverage for its Lebanon-linkage demand.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Tasnim / CBS News / Spectrum News / Iran International',
      event: "Iran's SNSC links Lebanon to ceasefire framework — Tasnim: ceasefire includes 'stopping war on all fronts including Lebanese Islamic resistance'; Iran 'assessing possibility of exiting deal' if Israel persists",
      summary:
        "Iran's Supreme National Security Council, via Tasnim, declared that ceasefire terms include 'stopping the war on all fronts, including against the heroic Lebanese Islamic resistance [Hezbollah].' Tasnim quoted its SNSC source as saying Iran was 'assessing the possibility of exiting the deal should the Israeli regime persist in its breaches.' This is the first institutional-level linkage of the Lebanon track to the US-Iran ceasefire framework.",
      impact:
        "Directly challenges the standing analytical prior since Day 40 that the Lebanon clock operates independently from the US-Iran framework. Iran is conditioning MOU signature on Lebanon cessation — creating a declared exit ramp if IDF operations continue at Saturday's 85-site tempo. The analytical question: bargaining leverage or genuine framework conditionality. Israel is not party to the US-Iran ceasefire and has shown no intent to comply with Iranian demands on Lebanon. Result is a structural bind — Iran creates a veto point that Israel will trigger daily.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'Express Tribune / Middle East Monitor / WION / Fox News',
      event: "Trump threatens 'Project Freedom Plus — meaning Project Freedom plus other things' if Iran fails to reach deal — first operational naming of escalation consequence since May 5 pause",
      summary:
        "Trump warned Saturday that 'Project Freedom Plus — meaning Project Freedom plus other things' would activate if Iran fails to finalize a deal, without specifying what additional measures the expanded operation would entail. This is the first time the escalation consequence for MOU delay has been operationally named since the May 5 Project Freedom pause announcement. The deliberate vagueness of 'plus other things' preserves maximum leverage.",
      impact:
        "Creates a visible ceiling on the Iranian side of the bargaining architecture. Combined with Iran's SNSC Lebanon-linkage veto point, the negotiating space is now compressed from both ends: Trump's named 'Plus' ceiling descends while Iran's new Lebanon conditionality rises. The 'Plus' framing also signals to Beijing pre-summit that the US has an escalation package ready if the Trump-Xi meeting fails to deliver Iranian compliance.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'Gulf News / Al Jazeera / The National / Asharq Al-Awsat',
      event: "Bahrain arrests 41 IRGC-linked individuals — largest Gulf-state internal IRGC-network crackdown since war began",
      summary:
        "Bahrain's Ministry of Interior confirmed 41 individuals arrested from a network in direct contact with Iran's IRGC. The network collected funds for transfer to Iran to support 'terrorist operations.' Investigations uncovered links to 'Wilayat Al Faqih' ideology. The UAE had previously arrested dozens of IRGC-linked individuals in April. Legal proceedings underway.",
      impact:
        "Largest Gulf-state internal IRGC-network crackdown since the war began. Tightens the Arab coalition's domestic counter-IRGC posture in parallel with the pending UNSC draft on Hormuz reopening. Demonstrates Gulf states operationalizing their 90+ country joint statement beyond diplomatic language into domestic security action. Combined with UAE's April arrests, establishes a pattern of systematic IRGC-network rollup across GCC states.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: 'Axios / Times of Israel / CBS News / Tribune India',
      event: "Qatar PM meets Rubio and Witkoff in Miami Saturday; met VP Vance in Washington Friday — Qatar joins as fifth mediator lane",
      summary:
        "Qatari Prime Minister Mohammed bin Abdulrahman Al-Thani met Secretary of State Rubio and envoy Witkoff in Miami Saturday to discuss efforts to end the Iran war, per Axios. He met VP Vance in Washington Friday. US officials describe Qatar as 'especially effective in negotiations with Iran.' Qatar joins the mediation architecture alongside Pakistan, the Witkoff-Kushner direct channel, the Araghchi-Beijing track, and Mladenov on Gaza.",
      impact:
        "Diplomatic architecture expands from four-laned to five-laned — the most complex mediator configuration of the war. Qatar's entry at the Rubio-Witkoff level (not a lower-tier exploratory channel) signals US intensification of diplomatic effort in the final ~4 days before the Trump-Xi summit. Qatar's historical effectiveness as Iran interlocutor (JCPOA-era, Hamas hostage negotiations) adds a credible channel that Pakistan alone may lack.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'medium',
      source: 'Gulf News / CBS News / liveuamap / CENTCOM',
      event: "CENTCOM: 58 commercial vessels redirected since April 13; Sea Star III and Sevda disabled May 8 — blockade enforcement intensifies",
      summary:
        "CENTCOM reported 58 commercial vessels redirected since April 13, up from 45 by May 1. Iranian-flagged tankers Sea Star III and Sevda were disabled on May 8 by F/A-18 Super Hornet precision munitions from USS George H.W. Bush targeting their smokestacks. Four total Iranian-flagged vessels disabled. Lloyd's: 'as of right now the strait is closed.' No transits recorded since May 4.",
      impact:
        "Blockade enforcement continues intensifying regardless of MOU framework status. The 45 → 58 vessel-count jump (29% increase in 9 days) plus four tankers disabled confirms operational-tempo acceleration. 'Project Freedom paused' surface alignment is now operationally meaningless — the blockade enforcement floor runs independently. Hormuz remains effectively closed with zero transits since May 4.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'medium',
      source: 'CNBC / Al Jazeera / Iran International / CBS News',
      event: "Iran's formal MOU response remains undelivered over weekend — Baqaei 'no deadlines' carries; SNSC Lebanon-linkage adds new conditionality layer",
      summary:
        "Iran did not deliver its formal 14-point MOU response over the weekend. Baqaei's Friday 'matter still under discussion' and 'Iran does not follow anyone's deadlines' carries. Saturday's SNSC Lebanon-linkage statement adds a new conditionality layer beyond the existing Pezeshkian lift-blockade-first sequencing and Rezaei reparations demands. Araghchi 'reckless military adventure' rebuke carries.",
      impact:
        "The MOU response now faces three stacked conditionality layers: (1) Pezeshkian's lift-blockade-first sequencing, (2) the SNSC's Lebanon-cessation demand, and (3) Araghchi's 'halt illegal US actions' prerequisite. Each layer gives Iran a distinct exit ramp. Whose Iranian signature binds the MOU remains the dominant near-term variable; the SNSC statement suggests the security apparatus, not Pezeshkian's diplomatic team, holds the functional veto.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'medium',
      source: 'CNBC / OilPrice.com / AlanChand / Bloomberg / CSIS / Eurasia Review',
      event: "Brent $101.29 Friday close carries into weekend; AlanChand Remittance 1,803,000 IRR (+0.72%); Trump-Xi at ~4 days",
      summary:
        "Brent settled Friday $101.29 (+1.0%); WTI $95.42 (+0.65%); week closed -6%. Markets closed over weekend. AlanChand Remittance rate rose to 1,803,000 IRR (+0.72% / +13,000 from Friday's ~1,790,000 — rial weakens on Lebanon-escalation and SNSC-linkage repricing). Trump-Xi May 14-15 Beijing summit at ~4 days. CSIS and Eurasia Review analyses: Iran will be central agenda item; Xi government 'wary about proceeding before US-Iran conflict is settled.'",
      impact:
        "Weekend carry means Monday's open will price Saturday's 39-KIA Lebanon bombardment, Iran's SNSC Lebanon-linkage, and Trump's 'Project Freedom Plus' simultaneously. AlanChand remittance +0.72% (vs Friday cash +0.50%) shows accelerating rial weakness on the Lebanon dimension — the SNSC linkage adds a MOU-collapse risk premium that wasn't priced Friday. Trump-Xi at ~4 days remains the binding convergence constraint.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed KIA Saturday',
      status:
        "No new US casualties reported Saturday. CENTCOM blockade enforcement continues — 58 vessels redirected since April 13, four Iranian-flagged tankers disabled. Sea Star III and Sevda disabled May 8 by F/A-18 from USS George H.W. Bush. Trump threatens 'Project Freedom Plus' activation if deal not reached. Rubio and Witkoff met Qatar PM in Miami Saturday.",
    },
    israel: {
      cumulative: 'KIA: 47 · WIA: 8,600+',
      delta: '+0 KIA / +0 new WIA Saturday (Friday +3 WIA carry)',
      status:
        "No new Israeli casualties reported Saturday. IDF struck 85+ Hezbollah targets in 24 hours — weapon storage, production facilities, launchers across southern Lebanon plus Beqaa Valley underground site. IDF ordered nine villages evacuated warning 'forceful' action. Friday's +3 WIA from Hezbollah explosive drones carries. Iron Beam laser reportedly linked to first combat intercepts of Hezbollah rockets.",
    },
    iran: {
      cumulative: "LMO 'nearly 3,400' KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · Hengaw 6,620+ mil · 3.2M displaced",
      delta: 'No new figures Saturday',
      status:
        "No new casualty figures. SNSC links Lebanon to ceasefire framework via Tasnim — 'assessing possibility of exiting deal' if Israel persists. Baqaei 'no deadlines' carries. Araghchi 'reckless military adventure' carries. AlanChand Remittance 1,803,000 IRR (+0.72%). CBI 65.8% YoY inflation carries.",
    },
    other: {
      cumulative: 'Lebanon MOH: ~2,707+ KIA / 8,200+ WIA · Iraq: 117+ · Gulf states: 32+ · UAE: 14+9 wounded cumulative',
      delta: 'Lebanon: +39 KIA Saturday',
      status:
        "Lebanon: +39 KIA Saturday from Israeli airstrikes — heaviest single-day toll since April truce. Saksakiyeh +7 KIA (child, 15 wounded). Nabatieh triple-tap drone strike killed Syrian man and targeted his 12yo daughter. IDF ordered nine villages evacuated. UAE +3 wounded Friday carries. Hormuz: zero transits since May 4 per Lloyd's. 58 vessels redirected. ~23,000 seafarers stranded.",
    },
  },
  exec:
    "Day 72 produces the heaviest Israeli bombardment of Lebanon since the April truce — IDF strikes 85+ Hezbollah sites in 24 hours and Israeli airstrikes kill 39 across southern Lebanon Saturday including seven at Saksakiyeh (a child among them, 15 wounded) and a triple-tap drone strike targeting a Syrian man and his 12-year-old daughter in Nabatieh. The operational tempo marks a qualitative break from the post-ceasefire pattern of 4-8 KIA per day to 39 in a single day; IDF ordered residents of nine villages to evacuate and warned it would act 'forcefully.' Iran's Supreme National Security Council responds by linking the Lebanon track to the ceasefire framework for the first time at the institutional level — Tasnim reports ceasefire terms include 'stopping the war on all fronts, including against the heroic Lebanese Islamic resistance'; Iran is 'assessing the possibility of exiting the deal should the Israeli regime persist in its breaches.' This directly challenges the standing analytical prior since Day 40 that the Lebanon clock operates independently from the US-Iran framework: Iran is now conditioning MOU signature on Lebanon cessation, creating a declared exit ramp if IDF operations continue at this tempo. Trump counters with the first operational naming of escalation consequence: 'Project Freedom Plus — meaning Project Freedom plus other things' will activate if Iran fails to reach a deal. Bahrain arrests 41 IRGC-linked individuals in the largest Gulf-state internal crackdown since the war began. Qatar's PM met Rubio and Witkoff in Miami Saturday after meeting VP Vance in Washington Friday — described as 'especially effective in negotiations with Iran,' adding a fifth mediator lane to the diplomatic architecture. Iran's formal MOU response remains undelivered with three stacked conditionality layers now visible. CENTCOM: 58 commercial vessels redirected since April 13; zero Hormuz transits since May 4. Brent $101.29 Friday close; AlanChand Remittance 1,803,000 IRR (+0.72%). Trump-Xi summit at ~4 days. 30-day ceasefire probability falls 22 → 19 — Iran's Lebanon-linkage veto point and IDF's 85-site operational tempo compress the bargaining space while Trump's 'Project Freedom Plus' ceiling tightens the consequence horizon against the summit hard deadline.",
  implications: [
    {
      title: "Iran's SNSC Lebanon-linkage attempts to recouple the two tracks for the first time — IDF's 85-site operational tempo will test this veto point daily against the Trump-Xi hard deadline",
      body:
        "Iran's Supreme National Security Council publicly conditioning the 14-point MOU on 'stopping the war on all fronts, including against the heroic Lebanese Islamic resistance' is the most significant analytical shift since the April 8 ceasefire framework architecture. The standing prior since Day 40 has been that the Lebanon clock operates independently — convergence on the US-Iran framework does not require Lebanon de-escalation, and Lebanon escalation does not require framework collapse. Iran's SNSC statement directly challenges this separation by creating an institutional exit ramp: if IDF operations continue at Saturday's 85-site tempo with 39 KIA, Iran has a publicly declared justification for withdrawing from the MOU process. The analytical question is whether this is bargaining-leverage language or genuine framework conditionality. IDF's operational posture shows no sensitivity to Iranian demands — the nine-village evacuation order and 'forceful action' warning signal continuation or escalation, not restraint. Israel is not party to the US-Iran ceasefire and has consistently acted outside US coordination. The result is a structural bind: Iran creates a veto point that Israel will trigger daily, while the statement simultaneously serves Tehran's domestic audience by demonstrating solidarity with Hezbollah under bombardment. The Trump-Xi summit at ~4 days is the binding constraint on whether this veto point hardens into genuine conditionality or remains rhetorical leverage that Iran trades away for blockade-lift sequencing.",
    },
    {
      title: "Trump's 'Project Freedom Plus' creates a visible ceiling-floor compression with Qatar mediator activation as the thin positive channel — the bargaining architecture intensifies from both ends with ~4 days to the summit",
      body:
        "Trump's Saturday warning that 'Project Freedom Plus — meaning Project Freedom plus other things' will activate if Iran fails to reach a deal is the first operational naming of the escalation consequence since the May 5 pause. The deliberate vagueness of 'plus other things' preserves maximum leverage while signaling that the re-activation package would exceed the original escort operation. Combined with Iran's SNSC Lebanon-linkage, the bargaining space is now compressed from both ends simultaneously: Trump's named ceiling descends while Iran's new veto point rises. Qatar's entry as a fifth mediator lane — PM Al-Thani met Rubio and Witkoff in Miami Saturday after VP Vance in Washington Friday, described as 'especially effective' — provides the thin positive channel through which the 14-point MOU could still close within the Trump-Xi window. The five-laned architecture (Witkoff-Kushner direct + Pakistan + Qatar + Araghchi-Beijing + Mladenov on Gaza) is the most complex mediator configuration of the war. Bahrain's 41 IRGC arrests — the largest Gulf-state internal crackdown since the war — tighten the Arab coalition's domestic counter-IRGC posture in parallel with the pending UNSC draft, demonstrating that the Gulf states are operationalizing their Hormuz reopening demands beyond diplomatic statements into domestic security action.",
    },
    {
      title: "Brent $101.29 weekend carry plus Iran's SNSC Lebanon-linkage adds a framework-collapse risk channel to Taiwan procurement — TSMC CapEx hedges at T-minus-4 from Trump-Xi with five active transmission mechanisms",
      body:
        "Brent's $101.29 Friday close carries into the weekend with IDF's 85-site bombardment and Iran's SNSC Lebanon-linkage as the two dominant risk vectors for Monday's open. The energy transmission to Taiwan operates through five channels simultaneously: Iran's new Lebanon veto point adds a framework-collapse risk premium — any MOU signature delay past Trump-Xi would reprice Brent toward the $130-170 kinetic-tail ceiling; Trump's 'Project Freedom Plus' activation would restore and escalate the Hormuz escort operation; CENTCOM's 58-vessel redirection count confirms blockade enforcement intensifying regardless of framework status; AlanChand Remittance at 1,803,000 IRR (+0.72% from Friday) shows accelerating rial weakness with the Lebanon dimension now added; and the Trump-Xi summit at ~4 days is the structural anchor — Beijing's incentive to deliver Iranian framework signature pre-summit is the strongest convergence force but now competes against Iran's SNSC Lebanon-linkage conditionality. CPC procurement should maintain the $99-110 floor with asymmetric upside exposure to the MOU-collapse risk channel that Saturday's SNSC statement creates. TSMC 2026 CapEx should continue hedging symmetrically across both tails — framework-signature discount within ~4 days and triple-front kinetic-rupture premium now operationally visible with Lebanon as the independent catalyst.",
    },
  ],
  casualtyNotes: {
    us:
      "No new KIA Saturday. CENTCOM blockade continues — 58 vessels redirected, four tankers disabled. Sea Star III and Sevda disabled May 8. Trump threatens 'Project Freedom Plus'. Rubio and Witkoff met Qatar PM in Miami.",
    israel:
      "No new casualties Saturday. IDF strikes 85+ Hezbollah targets in 24 hours — heaviest bombardment since April truce. Nine villages ordered evacuated. Friday +3 WIA from Hezbollah drones carries.",
    iran:
      "No new casualty figures. SNSC links Lebanon to ceasefire via Tasnim — 'assessing exit'. Baqaei 'no deadlines' carries. Remittance 1,803,000 IRR (+0.72%).",
    other:
      "Lebanon +39 KIA Saturday — heaviest since April truce. Saksakiyeh +7 (child). Nabatieh triple-tap drone. UAE +3 wounded Friday carries. Hormuz zero transits since May 4. 58 vessels redirected.",
  },
};

export default data;
