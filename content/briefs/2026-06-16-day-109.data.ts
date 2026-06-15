import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'de-escalating',
    risk7d: 'conditional',
    spillover: 'conditional',
    rationale: {
      direction:
        "Day 109 hardens Day 108's declaration into a digital signature. The US said Trump, VP Vance and Iran's parliament speaker Ghalibaf 'digitally' signed the MoU on Sunday, with the in-person signing still set for Friday, June 19, in Geneva (Times of Israel, The Hill). Per §3.5.3 a digital signature is a firmer commitment than a mediator declaration, but Vance stayed vague on key elements and the binding text is unreleased until Friday. Trajectory stays down; the war is not over until the Geneva text lands and the Lebanon guns hold silent.",
      risk7d:
        "Seven-day risk stays conditional, but the dominant trigger has cooled: Iran's 'imminent' response to the Beirut strike did not materialize, reportedly forestalled by US pressure. The negotiation-capacity and active-deadline clocks point at a dated Friday signing; the blockade-end order and digital MoU are concrete de-escalation. Against that, the four-day gap to Geneva is the Day 51 reversal window, the Hormuz toll language is openly contested, and Netanyahu reserves the right to strike. A landed signature converts the week to ceasefire; a collapse on terms repeats Day 51.",
      spillover:
        "Spillover eases from critical to conditional as the Beirut flashpoint cools. Iran held its fire over Israel's Dahiyeh strike, and the declared all-fronts termination covers Lebanon — but a senior US official said Israeli withdrawal is not a condition of the deal, Netanyahu vowed to 'defend ourselves as necessary,' and Israel-Lebanon comprehensive talks only convene the week of June 22 (CNN, NPR). The §3.5.6 Israel-independence prior carries: a ceasefire that depends on Israeli restraint stays one strike from reigniting.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'high',
      source: 'Times of Israel / The Hill / ABC News',
      event:
        "The US said Trump, VP Vance and Iran's parliament speaker Mohammad Ghalibaf 'digitally' signed the memorandum of understanding on Sunday, hardening Day 108's declaration into a signature; the in-person signing stays set for Friday, June 19, in Geneva, with Vance and Jared Kushner attending and Trump not",
      summary:
        "The MoU ends the US blockade, reopens Hormuz and opens 60 days of nuclear talks. Vance said the deal was 'already signed' digitally but remained vague on its key elements, and the binding text is to be released only after the Geneva ceremony (Times of Israel, ABC News).",
      impact:
        "A digital signature is the firmest commitment of the war and earns the brief's single pivotal marker. Skeptical counter per §3.5.3: Vance was vague on the elements, the text is unreleased until Friday, and the four days to Geneva are exactly the window where the Day 51 deal collapsed on terms.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'Fox News / Tribune / Al Jazeera',
      event:
        "The Hormuz toll language split immediately: Iran's Tasnim claimed the MoU leaves 'the management of maritime navigation services in the Strait of Hormuz' to Iran and neighboring Oman — a toll opening — while Trump insisted the Strait reopens immediately without tolls",
      summary:
        "Tehran's regime simultaneously spun the deal to its public as a 'victory' over the US and Israel, even as Araghchi cautioned that 'we have seen agreements go unimplemented... torn up' (Fox News, Tribune).",
      impact:
        "The §3.5 toll-institutionalization prior is live, and the divergence is itself the signal: a $2M-per-transit fee billed at pre-war flow is ~$29B/yr of permanent revenue. Whether the released Geneva text retains or removes the 'navigation services' clause is the first thing to read on Friday.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'CNN / NPR',
      event:
        "On Lebanon, Iran's 'imminent' response to Israel's Beirut strike did not materialize — but a senior US official said Israeli withdrawal from Lebanon is not a condition of the deal, and Netanyahu doubled down at a news conference, vowing to 'remain strong and determined, to defend ourselves as necessary'",
      summary:
        "The official added that if Iran does not 'control' Hezbollah and the group attacks, Israel will 'have the right to defend themselves and respond.' Israel-Lebanon comprehensive talks are set for the week of June 22 (CNN, NPR).",
      impact:
        "The §3.5.6 Israel-independence prior holds: the deal does not bind Israel's hand on Lebanon. The Beirut trigger cooled this cycle, but the structural fault is unrepaired — the ceasefire stays one Hezbollah drone and one IDF response away from reigniting before the comprehensive track even convenes.",
    },
    {
      id: 4,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'France 24 / The Hill / Tech Times',
      event:
        "At the G7's Évian summit, Macron called the US-Iran pact 'a very important step for peace,' and leaders turned to the practical follow-through: a June 16 lunch on the Middle East and on developing alternative Persian Gulf energy routes, plus Hormuz demining",
      summary:
        "France said it was ready to deploy mine-clearing vessels 'within days' once the conflict is paused; the G7 is again forgoing a joint communiqué, issuing area-specific outcome documents instead (France 24, The Hill).",
      impact:
        "The multilateral demining architecture is the bridge between a signed MoU and an actually open Strait. Analytical judgment: the diplomacy is converging on logistics, but a signature reopens Hormuz on paper — the physical chokepoint stays closed until the mines are cleared, a gap of weeks.",
    },
    {
      id: 5,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'NPR / NBC News',
      event:
        "Oil fell to its cheapest since the early days of the war on the signing news: Brent closed down ~4.7% near $83.17 and WTI near $80.75 — both the lowest since the first week of March — leaving crude down roughly 13% from mid-last-week",
      summary:
        "Analysts cautioned the slide may not go much lower: reopening Hormuz to pre-war flow needs weeks of demining and field restarts, and the EIA's June outlook still frames the June–July average near $105 (NPR, NBC News).",
      impact:
        "The energy-infrastructure clock keeps improving, now on a digital signature rather than a forecast. Skeptical counter: the IRGC closure was physical and the price has fallen faster than the Strait can open. Analytical judgment: relief is priced; flow is not yet restored.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed (digital MoU signed; blockade ordered to leave Hormuz)',
      status:
        "No new US casualties. The blockade-end order stands as the first US drawdown action of the war, and the US said Iran 'won't get a dime' of the ~$24-25B frozen-asset/sanctions relief until it performs over the 60-day post-signing window. Forces still hold the ~40-ship NCAGS Bahrain channel pending demining; Sledgehammer shelved but un-stood-down; the in-person signing is Friday, June 19, in Geneva.",
    },
    israel: {
      cumulative: 'KIA: 49 (Iran-front 47 + Lebanon-front 2 truce-period) · WIA: 8,625+',
      delta: '+0 confirmed new IDF KIA (Beirut flashpoint cooled; no new salvo)',
      status:
        "No confirmed new IDF KIA. Iran's 'imminent' response to the Dahiyeh strike did not come, reportedly forestalled by US pressure. But Netanyahu, sidelined from the talks, vowed to stay 'vigilant' and 'defend ourselves as necessary,' and a US official confirmed Israeli withdrawal from Lebanon is not a deal condition. Israel-Lebanon comprehensive talks are set for the week of June 22.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new mass toll (diplomatic day; signing and Hormuz-toll dispute)',
      status:
        "No verified new mass toll. Iran framed the deal to its public as a 'victory' even as Araghchi warned agreements can be 'torn up.' ~440 kg of 60% HEU stays in Tehran through the 60-day track; the IAEA flags it a short step from weapons-grade. The Sirik-area water loss to 20,000+ from the June 10 strikes carries as the standing humanitarian incident. HRANA 3,636+ and Hengaw 6,620+ carry; 3.2M displaced.",
    },
    other: {
      cumulative:
        'Lebanon MOH above 3,600 killed / 10,044+ injured since March 2; Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Bahrain no casualties',
      delta: '+0 confirmed new (Beirut flashpoint contained; no new strike reported)',
      status:
        "No confirmed new toll: the Beirut Dahiyeh strike's +1 KIA / +4 WIA (Hezbollah commander) carries from Day 108, with no new exchange reported. The declared termination covers Lebanon, but the comprehensive Israel-Lebanon track only convenes the week of June 22. Lebanon MOH war-cumulative carries above 3,600 killed / 10,044+ injured; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
    },
  },
  exec:
    "Day 109 hardens Day 108's declaration into a digital signature — but the formal text, the Hormuz toll language and Israel's reserved right to strike all stay unresolved. The US said Trump, VP Vance and Iran's parliament speaker Mohammad Ghalibaf 'digitally' signed the memorandum of understanding on Sunday, with the in-person signing still set for Friday, June 19, in Geneva, where Vance and Jared Kushner will attend and Trump will not (Times of Israel, The Hill). Analytical judgment, per §3.5.3: a digital signature is a firmer commitment than Day 108's mediator declaration, but Vance remained vague on the deal's key elements, the binding text is not released until Friday, and the four-day gap is the window where the Day 51 deal collapsed. The fault lines are already visible. Iran's Tasnim claimed the MoU leaves 'management of maritime navigation services in the Strait of Hormuz' to Iran and Oman — a toll opening — while Trump insists Hormuz reopens immediately without tolls; the §3.5 toll-institutionalization prior is live (Fox News, Tribune). The nuclear core stays deferred: ~440 kg of 60% HEU remains in Tehran through a 60-day post-signing track, and the US says Iran 'won't get a dime' of sanctions relief until it performs (ISIS, Iran International). On Lebanon, Iran's 'imminent' response to the Beirut strike did not materialize, but a senior US official said Israeli withdrawal is not a deal condition and Netanyahu vowed to 'defend ourselves as necessary' (CNN). 30-day ceasefire probability rises to 55 from 50; direction stays de-escalating; spillover eases to conditional as the Beirut flashpoint cools.",
  implications: [
    {
      title:
        "⭐ The declaration hardens into a digital signature — the firmest commitment of the war — but the binding text and the four-day gap to Geneva remain the Day 51 risk",
      body:
        "Day 108's binding test was whether a signature would land; on Day 109 a digital one did. The US said Trump, Vance and Ghalibaf 'digitally' signed the MoU on Sunday, with the in-person ceremony set for Friday in Geneva (Times of Israel, The Hill). That is a real hardening — a signature, not a mediator's relay — and it earns the brief's single pivotal marker. Skeptical counter per §3.5.3, and it is the analytical core: Vance said the deal was 'already signed' but stayed vague on its key elements (ABC News), and the binding text will not be released until after the Geneva ceremony. The structure inverts Day 50: there, optimism preceded the Day 51 collapse; here a digital signature and a blockade-end order precede an unreleased text and a four-day gap — and that gap is precisely where the Day 51 reversal lived. Under the multi-clock framework the negotiation-capacity clock is at its strongest of the war and the active-deadline clock points squarely at Friday. Analytical judgment: the trajectory is genuinely de-escalating and the commitment is firmer than at any prior point, but a digital signature on undisclosed terms is not the same as a released, executed text — the war is not over until Geneva lands.",
    },
    {
      title:
        "The Hormuz toll clause and Netanyahu's reserved right to strike are the deal's two live fault lines — neither closed by a signature",
      body:
        "Two structural priors surfaced in the open on Day 109. First, the toll: Iran's Tasnim claimed the MoU assigns 'management of maritime navigation services in the Strait of Hormuz' to Iran and Oman, while Trump insists the Strait reopens immediately without tolls (Fox News, Tribune). The §3.5 toll-institutionalization prior is live — a $2M-per-transit fee at pre-war flow is roughly $29B/yr of permanent revenue — and the divergence between the two readings is itself the information; the released Geneva text either retains the 'navigation services' clause or it does not. Second, Lebanon: a senior US official said Israeli withdrawal is not a condition of the deal, and Netanyahu doubled down on vigilance and the right to 'defend ourselves as necessary' (CNN, NPR). The §3.5.6 Israel-independence prior holds in full — the framework does not bind Israel's hand, and the comprehensive Israel-Lebanon track only convenes the week of June 22. Under the multi-clock framework the coalition-cohesion clock stays the weak link even as the negotiation clock peaks. Analytical judgment: a cessation-and-Hormuz signature is plausible Friday, but the toll clause and the Lebanon carve-out are the two places this deal can still unravel — one on paper, one in the air over Beirut.",
    },
    {
      title:
        "Taiwan: Brent at a three-month low prices in the ceasefire, but the Strait stays physically shut until demining — now with a G7 deployment pathway",
      body:
        "For Taiwan, Day 109 deepens the first real catalyst for the LNG-vulnerability case. The digital signing and blockade-end order pushed crude to its cheapest since the early days of the war — Brent closed near $83.17 and WTI near $80.75, both the lowest since the first week of March, leaving oil down roughly 13% from mid-last-week (NPR, NBC News). But §3.5.6 governs the structure: the IRGC closure was physical, and analysts caution the slide may not go much lower because reopening to pre-war flow requires weeks of demining and field restarts. The G7 supplied the missing logistics: Macron called the pact 'a very important step for peace,' France said it can deploy mine-clearing vessels 'within days,' and leaders used a June 16 lunch to work alternative Persian Gulf energy routes (France 24, The Hill). The EIA's June outlook still frames the June–July average near $105, and the China-Russia veto cover and ~37.7% Chinese share of Hormuz crude carry. Analytical judgment: the energy-infrastructure clock keeps improving, but the chokepoint is closed until the mines are cleared — the LNG-cover-through-September case holds, now with a dated reopening pathway. TSMC's 2026 CapEx framework near 8% carries; the case revises on a released Geneva text plus a demined Strait, both still ahead.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties. The blockade-end order stands as the first US drawdown of the war; the US says Iran 'won't get a dime' of the ~$24-25B relief until it performs over 60 days. Forces hold the ~40-ship NCAGS Bahrain channel pending demining; Sledgehammer shelved but un-stood-down; in-person signing Friday in Geneva.",
    israel:
      "No confirmed new IDF KIA. Iran's 'imminent' response to the Dahiyeh strike did not come, reportedly forestalled by US pressure. Netanyahu vowed to stay 'vigilant' and 'defend ourselves as necessary'; a US official confirmed Israeli withdrawal from Lebanon is not a deal condition. Comprehensive talks set for the week of June 22.",
    iran:
      "No verified new mass toll. Iran framed the deal as a 'victory' even as Araghchi warned agreements can be 'torn up.' ~440 kg 60% HEU stays in Tehran through the 60-day track. The Sirik-area water loss to 20,000+ from the June 10 strikes carries. HRANA 3,636+ and Hengaw 6,620+ carry; 3.2M displaced.",
    other:
      "No confirmed new toll: the Beirut Dahiyeh strike's +1 KIA / +4 WIA carries from Day 108 with no new exchange reported. The declared termination covers Lebanon, but the comprehensive track only convenes the week of June 22. Lebanon MOH carries above 3,600 killed / 10,044+ injured; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
  },
};

export default data;
