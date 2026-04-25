import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'conditional',
    rationale: {
      direction:
        "Friday delivered the first credible diplomatic-track movement since the April 11–12 Islamabad round collapsed: Trump dispatched Witkoff and Kushner (not Vance) to Pakistan as Araghchi landed in Islamabad, and Trump told Reuters 'they're making an offer.' Simultaneously, Hegseth formalised the 'shoot to destroy' ROE at a Pentagon press conference and declared any further mine-laying a ceasefire violation, Bessent said Iranian and Russian oil waivers will not be renewed, Brent topped $106 intraday before settling near $104.50, Hormuz transits collapsed to five ships in 24 hours, and Hezbollah publicly rejected the three-week Lebanon extension as 'meaningless.' The net is genuine two-track motion, not convergence.",
      risk7d:
        "The Hormuz kinetic floor now rests on a Pentagon-echelon kill authorisation, a refusing-to-renew sanctions posture, and an actively mine-laying adversary — the three pre-conditions for the 1987–88 Tanker War are all in place. Hegseth's declaration that additional mine-laying is a ceasefire violation gives both sides a verbal tripwire. CNN's April 23 'dynamic targeting' plan (small boats, mine-layers, dual-use energy nodes, named IRGC leaders including Vahidi) remains on the shelf if the weekend talks produce nothing.",
      spillover:
        "Hezbollah's public rejection of the Lebanon extension and the IDF's continued strikes (six killed in southern Lebanon per the Lebanese Health Ministry; six Hezbollah fighters 'eliminated' at Bint Jbeil per the IDF) show the three-week truce is holding politically while failing kinetically. The flag-state frame from Day 56 persists but does not escalate today. Bessent's waiver-termination signal propagates global rather than regional — a new pressure channel on Chinese and Turkish buyers, and a material input for the Asian LNG book.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'pivotal',
      source: 'Axios / CNBC / CNN / NPR / Al Jazeera / Reuters',
      event: 'Witkoff and Kushner dispatched to Pakistan for direct Iran talks; Araghchi arrives Islamabad',
      summary:
        'Karoline Leavitt announced Friday that Steve Witkoff and Jared Kushner — not Vance — would travel to Pakistan Saturday morning for direct talks with Iranian counterparts. Iranian FM Araghchi landed in Islamabad Friday evening with a small delegation; Iran Foreign Ministry spokesperson Esmaeil Baghaei said on X "no meeting is planned," even as IRNA framed the trip as bilateral Pakistan coordination ahead of Moscow and Muscat stops. Trump told Reuters Iran is "making an offer" aimed at satisfying US demands: "They\'re making an offer and we\'ll have to see."',
      impact:
        "First substantive diplomatic-track movement since the April 11–12 Islamabad round collapsed on Iranian refusal. Replacing Vance with Witkoff/Kushner re-centres the channel on Trump's personal network rather than the institutional foreign-policy apparatus — the same pattern that produced the Lebanon extension. Iran's split signalling (FM in-country, spokesperson denying) preserves Tehran's off-ramp optionality while testing US patience. Meeting likely Monday after bilateral sessions with Pakistani mediators.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Fox News / CBS News / Anadolu / gCaptain / Life News Agency',
      event: 'Hegseth formalises "shoot to destroy" ROE at Pentagon; mine-laying declared a ceasefire violation',
      summary:
        'Secretary of War Pete Hegseth told a Pentagon press conference Friday: "President Trump has authorized the United States Navy to destroy any Iranian fast boats that attempt to put mines in the water or disrupt passage through the Strait of Hormuz — to shoot and kill." He said additional mine-laying "will be considered a violation" of the ceasefire and that the US blockade of Iranian vessels will continue "for as long as it takes." Hegseth: "mines remain the key obstacle to full Hormuz reopening."',
      impact:
        "Converts Trump's Thursday social post into Department-of-War-level doctrine. The 'violation' framing gives Washington a verbal tripwire to unilaterally declare the indefinite truce broken without waiting for a missile strike on a US asset. Combined with Iran's continued mine-laying (Axios-sourced), this structurally narrows the kinetic off-ramp to minutes rather than hours. Directly raises the probability that the next US KIA originates from a small-boat encounter rather than a base strike.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'AP / Washington Post / Business Standard / Washington Times / Jerusalem Post',
      event: 'Bessent: no renewal of Iranian or Russian oil waivers; Iran will "shutter production in two to three days"',
      summary:
        'Treasury Secretary Scott Bessent told AP Friday the US does not plan to renew the waiver allowing purchase of Russian oil and petroleum products currently at sea, and that renewal of the one-time waiver for Iranian oil at sea is "totally off the table." On Iran specifically: "We have the blockade, and there\'s no oil coming out… in the next two, three days, they\'re going to have to start shuttering production, which will be very bad for their wells." Bessent noted 10+ vulnerable countries asked for help at the IMF/World Bank meetings.',
      impact:
        "Closes the last legal channel for Iranian hydrocarbons to reach buyers during the blockade. The 'shuttering wells' framing is a direct threat to long-term Iranian reservoir integrity — shut-in damage is not fully reversible. For global LNG/oil, this propagates a permanent supply-removal signal rather than a temporary disruption. Analytical judgment: Bessent's signalling locks in a ceasefire probability floor of roughly 25 — Tehran can no longer accept a status-quo freeze without accepting catastrophic well damage as the cost of continued bargaining.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / The National / Angle360 / Oneindia',
      event: 'Brent tops $106 intraday, settles ~$104.50; ~18% weekly gain',
      summary:
        "Brent crude topped $106.80 at 01:00 GMT Friday — up nearly 5% from Wednesday's close and the first intraday print above $106 since the war began — before settling near $104.50 per The National (4:08pm UAE). Brent is on track for a ~18% weekly gain, the sharpest weekly move since the opening 12-Day War. WTI held above $90. Structural repricing concentrated in the back months of the curve as Asian LNG insurers and physical traders absorbed Thursday's Pentagon six-month mine-clearance assessment.",
      impact:
        "The $106 intraday print is a psychological ceiling break. The pullback to $104.50 on the Witkoff/Kushner-to-Pakistan headline confirms the market is now trading on talk signals day-to-day while accumulating a six-month structural floor. For Taiwan, the 18% weekly gain raises MOEA's Q3 fuel-procurement cost base materially above the April 20 baseline MOEA had assumed. CPC Corp's coal-rotation posture now extends beyond June into Q3.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: 'US News / Al Jazeera / NBC News / Strait of Hormuz Live Tracker',
      event: 'Only five ships transit Hormuz in 24 hours — ~4% of pre-war baseline',
      summary:
        "Five ships, including one Iranian oil products tanker, transited the Strait of Hormuz in the 24 hours ending Friday morning, per US News and maritime-tracking data. Pre-war daily baseline: approximately 140 vessels. Wednesday's transit count was eight ships including three oil tankers. The dual-blockade architecture (US Navy controls Arabian Sea entry; Iran controls Gulf exit) remains intact; hundreds of vessels and ~20,000 seafarers remain stranded inside the Gulf.",
      impact:
        "A fresh low in actual throughput, below Thursday's 'light' framing and roughly 4% of normal. The Wednesday-to-Friday drop from eight to five transits argues that the new Hegseth ROE, Iran's mid-week mine-laying, and the two Wednesday seizures are all compounding risk-aversion among charterers. Bessent's waiver-termination signal is likely to further suppress even sanctioned-channel traffic. Tanker War redux parallels (per Al Jazeera explainer) are now the dominant framing in professional maritime coverage.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'high',
      source: "Al Jazeera / Washington Post / Washington Examiner / Haaretz / Lebanese Health Ministry",
      event: "Hezbollah publicly rejects Lebanon ceasefire extension as 'meaningless'; strikes continue both ways",
      summary:
        "Hezbollah lawmaker Ali Fayyad said the party 'firmly rejects' the three-week extension — which it was not a party to negotiating — calling the truce 'meaningless in light of Israel\'s insistence on hostile acts.' Lebanese Health Ministry: at least six killed in Israeli strikes across southern Lebanon Friday, two dead in a Touline air strike. IDF said it 'eliminated' six Hezbollah fighters in a Bint Jbeil fire exchange. Hezbollah fired rockets and drones at Israeli troops inside southern Lebanon and across the border. UN warned strikes 'may breach international law.'",
      impact:
        "The three-week political extension (Israel government ↔ Lebanon government) and the continued kinetic tempo (IDF ↔ Hezbollah) now operate on two independent clocks. Hezbollah's non-participation in the Washington track is exactly the structural defect Berri's request tried to paper over. Analytical judgment: absent a Hezbollah-inclusive channel, the extension is a decorative truce that buys the Washington process time but not a plausible ceasefire. Netanyahu's 'continue striking any threat' framing confirms the IDF operational tempo is unchanged.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'medium',
      source: 'CNN (April 23) / Jerusalem Post / Ynet',
      event: "US military 'dynamic targeting' plan surfaces: mines, dual-use energy nodes, individual IRGC leaders",
      summary:
        "CNN reported Thursday evening that US CENTCOM is developing plans centred on 'dynamic targeting' of Iranian Hormuz-area capabilities — small fast-attack boats, mine-laying vessels, asymmetric assets — plus potentially dual-use energy infrastructure and individually-named IRGC figures, Vahidi explicitly mentioned. Framed as a pre-staged contingency campaign if the ceasefire formally breaks. Coverage amplified through Friday in Jerusalem Post, Ynet, and Pravda UK aggregation.",
      impact:
        "Provides the rhetorical ceiling under the Hegseth ROE: the small-boat 'shoot and kill' order is the entry point, 'dynamic targeting' is the campaign plan on the shelf. Named targeting of Vahidi deliberately echoes the opening-campaign individual-leader posture and signals Washington's read that Vahidi is now the decisional axis in Tehran. Analytical judgment: this is the first time a leaked US military plan has named an individual Iranian for strike since the Feb 28 opening — an information-operations escalation even if nothing kinetic follows.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat, incl. 6 KC-135 crew) · WIA: 395',
      delta: '+0 KIA / +0 WIA',
      status:
        'Hegseth formalised the "shoot to destroy" ROE at Friday Pentagon press conference; declared additional mine-laying a ceasefire violation; blockade continues "as long as it takes." Minesweeping tempo tripled per Thursday order. CNN "dynamic targeting" plan surfaced for Hormuz contingency campaign (small boats, mine-layers, dual-use energy, named IRGC leaders including Vahidi). CSG Lincoln Gulf of Oman; CSG Ford northern Red Sea; CSG Bush transiting toward Arabian Sea.',
    },
    israel: {
      cumulative: 'KIA: 38 (23 civilians + 15 soldiers in Lebanon) · WIA: 6,000+ (Alma). 393+ Iranian attack waves absorbed cumulatively.',
      delta: '+0 KIA / +0 WIA (no IDF fatalities reported in Friday Lebanon fire exchanges)',
      status:
        'IDF claimed six Hezbollah fighters "eliminated" in Bint Jbeil fire exchange Friday. Netanyahu: Israel will continue striking "any threat" in Lebanon; accused Hezbollah of "trying to derail talks." Lebanon ceasefire three-week extension nominally holds but Hezbollah publicly rejects as "meaningless." IAF F-15 data-leak case at Tel Nof unchanged — domestic security, not war-trajectory.',
    },
    iran: {
      cumulative: "Iran Legal Medicine Organization: 'nearly 3,400' KIA (updated April 22). HRANA: 3,636+ killed — 1,701 civilians / 1,221 military / 714 unclassified (April 7). Hengaw: 6,620+ military KIA (April 8). 383 children under 18; 3.2M displaced.",
      delta: '+0 KIA / +0 WIA reported',
      status:
        "Civilian–military tracks publicly unified since Thursday (Pezeshkian/Araghchi). Araghchi in Islamabad Friday night; Moscow and Muscat next per IRNA. FM spokesperson Baghaei publicly denied any US–Iran meeting is planned — the continuing parallel-track signalling. IRGC continues mine-laying per Axios; Vahidi remains decisional axis, now explicitly named in CNN-reported US targeting options.",
    },
    other: {
      cumulative: 'Lebanon: 2,296+ killed (Friday +6 per Health Ministry) · Iraq: 99+ killed · Gulf states: 32+ killed · UAE: 11 killed / 2,343 projectiles absorbed cumulatively.',
      delta: '+6 Lebanon KIA (Israeli strikes on Touline and Bint Jbeil area, per Lebanese Health Ministry)',
      status:
        "Hezbollah lawmaker Fayyad publicly rejected Lebanon ceasefire extension as 'meaningless'; UN warned Israeli strikes and Hezbollah rockets 'may breach international law.' Indonesian UNIFIL peacekeeper died of wounds from March 29 attack. Pakistan re-activated as mediator: Araghchi + Witkoff/Kushner landing in Islamabad for Saturday/Monday track. Bessent flagged 10+ vulnerable countries requesting IMF/World Bank help over waiver fallout.",
    },
  },
  exec:
    "Friday split along the same two-track axis Thursday opened and widened each side of it. On the diplomatic track, Trump dispatched Witkoff and Kushner — not Vance — to Islamabad for direct talks with Iranian FM Araghchi, who landed Friday night; Trump told Reuters 'they\\'re making an offer,' though Iran's Foreign Ministry spokesperson publicly denied any meeting. On the escalation track, Secretary of War Hegseth formalised Trump's 'shoot to destroy' ROE at a Pentagon press conference and declared additional mine-laying a ceasefire violation; Treasury Secretary Bessent told AP the Iranian and Russian oil waivers will not be renewed and that Iran 'will have to start shuttering production in two to three days'; only five ships transited the Strait of Hormuz (roughly 4% of the pre-war baseline of 140); Brent topped $106 intraday before settling near $104.50 on the Pakistan-talks headline, with an ~18% weekly gain; CNN's 'dynamic targeting' plan (small boats, mine-layers, dual-use energy, individually-named IRGC leaders including Vahidi) surfaced as the campaign-ready fallback. In Lebanon, Hezbollah publicly rejected the three-week extension as 'meaningless'; IDF strikes killed six in southern Lebanon Friday; the UN warned both sides may be breaching international law. Analytical judgment: Day 57's 7-day trajectory is the war's first day of credible talk-signal since April 12 arriving inside a simultaneously tightening economic blockade and formalised kinetic ROE — the off-ramp narrowed and widened on the same day, and the weekend will determine which one holds.",
  implications: [
    {
      title: 'The Saturday channel is a personal-network reset, not an institutional re-engagement',
      body:
        "The most consequential move of the day is the personnel choice. Vance led the April 11–12 round that collapsed; Witkoff and Kushner ran the Lebanon channel that delivered Thursday's three-week extension. Replacing the Vice President with two Trump-personal-network operators is the same pattern that produced every Trump diplomatic success of the past 90 days — it also bypasses State and NSC process, which is a feature for Tehran and a risk for Washington. Iran's split signalling (Araghchi in-country; Baghaei denying any meeting) preserves every off-ramp Tehran needs to reject the outcome without owning the rejection: Araghchi's IRNA-framed 'bilateral coordination' tour through Islamabad, Moscow, and Muscat lets Tehran treat any progress as a Pakistani mediation win and any failure as 'no meeting was planned.' Trump's 'they\\'re making an offer' framing — said to Reuters by phone — is the kind of public commitment that converts a disavowable bilateral into an announced track; if the Monday meeting produces nothing, Trump owns the gap. Analytical judgment: expect a weekend of bilateral Pakistan-mediated sessions and a Monday or Tuesday Witkoff–Kushner–Araghchi meeting; the probability of a substantive announcement before the US workweek ends is roughly one in three, but the probability of the channel surviving another week is materially higher than it was 48 hours ago.",
    },
    {
      title: "Bessent's waiver-termination is the permanent-damage threat that Hormuz wasn't",
      body:
        "The Hormuz blockade is reversible: ships sit in Fujairah, mines get cleared in six months. Well-shuttering is not. Bessent's 'in the next two, three days they\\'re going to have to start shuttering production, which will be very bad for their wells' is a deliberate technical framing — shut-in damage to depleted reservoirs can reduce long-term recoverable volume by double-digit percentages and requires enhanced-recovery reinvestment Iran does not have the capital, service expertise, or counterparty network to execute during a sanctions regime. This is the first time since the war opened that a US economic threat has targeted Iran's long-run productive capacity rather than short-run revenue. It ties directly to the regime-cohesion thread: if Araghchi returns from Islamabad with a US demand that trades proposal detail for waiver relief, Tehran has a ~72-hour window to decide before physical damage starts accumulating. The move also hands Beijing a fresh problem — China's Iranian-oil purchases via shadow-fleet routing partially depended on the periodic waiver framework to launder sanctioned barrels through third-country blending. Pulling the waiver forces PRC buyers fully into sanctions-defiance posture or out of the supply chain. Analytical judgment: this is Bessent's largest public move of the war and raises the probability that a Monday-week proposal has to include proto-concessions on enrichment or Hormuz-opening rather than pure bargaining placeholders — the permanent-damage clock is now the dominant timer.",
    },
    {
      title: 'Taiwan and Asia face a two-channel squeeze: Hormuz throughput at 4% and a locked waiver horizon',
      body:
        "Five ships in 24 hours is roughly 4% of the 140-vessel pre-war daily baseline — the lowest recorded throughput of the Hormuz crisis and materially lower than Wednesday's eight-vessel count. Combined with Bessent's waiver signal, the Taiwan LNG book now prices two simultaneous new constraints: the short-run transit collapse, and the medium-run removal of sanctioned-channel supply that Chinese and other Asian refiners had been using as a balancing tool. Brent's $106 intraday print and ~18% weekly gain capture the prompt; the back-month repricing captures the Bessent effect. For Taipei specifically, the MOEA procurement horizon that assumed May-June coverage plus spot-cargo mitigation through Q3 now has to assume: (a) persistent transit suppression through at least mid-summer under the Hegseth ROE and active mine-laying; (b) materially thinner spot-cargo availability as sanctioned flows exit the market; (c) a permanent-damage risk to Iranian production base that changes long-run oil macro-pricing even post-war. This ties to the semiconductor supply chain standing thread: TSMC's own 2026 CapEx schedule and pricing pass-through assumptions are now operating in a cost environment that Q1 Taiwan Board of Directors guidance did not contemplate. Analytical judgment: the Taipei board should be running a no-Hormuz-through-October and a permanently-curtailed-sanctioned-flow scenario in parallel — the Bessent signal changed not just the near-term Brent curve but the post-war recovery baseline.",
    },
  ],
  casualtyNotes: {
    us: "No new KIA. The day's casualty-risk driver is the Hegseth formalisation of the 'shoot to destroy' ROE, now at Department-of-War echelon rather than presidential social-post, with explicit characterisation of additional mine-laying as a ceasefire violation. CNN's April 23 'dynamic targeting' plan — small boats, mine-layers, dual-use energy nodes, individually-named IRGC leaders including Vahidi — remains on the shelf as the kinetic fallback if the Pakistan channel produces nothing.",
    israel:
      'No new IDF KIA. Friday fire exchanges in southern Lebanon: IDF claims six Hezbollah fighters "eliminated" at Bint Jbeil; Lebanese Health Ministry reports six civilians killed in Israeli strikes including two in Touline. Hezbollah publicly rejects the three-week ceasefire extension as "meaningless"; Netanyahu: will continue striking "any threat" in Lebanon and accused Hezbollah of "trying to derail talks." Two-clock architecture — political extension intact; kinetic tempo unchanged.',
    iran:
      "Iran Legal Medicine Organization holding at 'nearly 3,400' KIA (April 22 figure). No new Iranian military losses reported in Friday operations. Araghchi landed in Islamabad Friday night with a small delegation; FM spokesperson Baghaei simultaneously denied any US–Iran meeting was planned — the continuing parallel-track signalling. Araghchi's public itinerary continues to Moscow and Muscat. Vahidi remains decisional axis and is now explicitly named in leaked US 'dynamic targeting' options, per CNN.",
    other:
      'Lebanon +6 KIA per Health Ministry (Israeli strikes on Touline and Bint Jbeil area). Indonesian UNIFIL peacekeeper died of wounds from March 29 attack. UN warned both Israeli strikes and Hezbollah rockets "may breach international law." Pakistan re-activated as primary mediator for the Witkoff/Kushner–Araghchi track. Bessent noted 10+ vulnerable IMF/World Bank member countries requested help over waiver fallout; the waiver-termination signal will propagate pressure onto Chinese, Turkish, and Indian buyers using sanctioned-channel Iranian and Russian flows.',
  },
};

export default data;
