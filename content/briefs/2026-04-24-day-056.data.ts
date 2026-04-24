import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'conditional',
    rationale: {
      direction:
        "Thursday produced one clear de-escalation (three-week Israel–Lebanon ceasefire extension after the Oval Office meeting) and one clear escalation (Trump's Navy 'shoot-and-kill' ROE on Iranian mine-laying boats) — the first genuine two-vector day in a week; Tehran's public unity stance closes the tactical ambiguity yesterday's civilian/military split created, pulling negotiation capacity down even as Lebanon clears the near-term kinetic calendar.",
      risk7d:
        "The Hormuz ROE is the first new forcing function since the indefinite ceasefire extension: a small-boat US–IRGC encounter now defaults to casualties on a policy trigger that requires no further authorisation, and Axios confirms Iran is still actively laying mines. The Pentagon's six-month mine-clearance window structurally locks the risk floor.",
      spillover:
        'Lebanon extension removes the northern front from the three-week kinetic window and the maritime frame is distributing across flag states (Panama condemned, Greece publicly disputed) rather than concentrating on US hulls — but the six-month clearance timeline propagates into insurance, futures, and routing for the full Asia-to-Europe energy corridor.',
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'pivotal',
      source: 'NPR / Al Jazeera / CNBC / Axios / CBS / France 24',
      event: 'Trump announces three-week Israel–Lebanon ceasefire extension',
      summary:
        'After a White House meeting Thursday between Israeli and Lebanese representatives, Trump announced from the Oval Office that the parties have agreed to extend the April 16 Lebanon ceasefire by three weeks, pushing the Day-10 Friday expiry into mid-May. Secretary Rubio said direct presidential involvement "made it possible" and voiced optimism on a follow-on peace track; Beirut had sought a full 30 days.',
      impact:
        "First unambiguous de-escalation since Trump's Tuesday indefinite-extension announcement. Closes the northern kinetic front's near-term window — Hezbollah drone activity continues but without a hard-deadline cliff. Moves the Israel–Lebanon track from informal to presidentially-owned process; removes one of the two standing kinetic interfaces from Washington's short-cycle decision calendar.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Al Jazeera / Time / CNBC / PBS / Bloomberg / NBC',
      event: 'Trump orders Navy to "shoot and kill" any mine-laying boat in Hormuz',
      summary:
        'Trump posted that he has directed the US Navy to "shoot and kill" any boat laying mines in the Strait of Hormuz "with no hesitation," and directed minesweeping activity to "triple up." Statement came hours after Axios and Pentagon sources reported Iran had placed additional mines this week atop the ~dozen US officials said had been placed a month prior.',
      impact:
        "First new ROE change since the indefinite ceasefire extension. Converts Hormuz small-boat contact from an authorisation question into a standing kill order; the 1987–88 Tanker War and 2019–20 Stena Impero / Maersk Tigris templates both show this is where the war's most-likely kinetic surprises originate. Pushes the probability of the next US KIA coming from the strait rather than a base strike.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Washington Post / The National / Pentagon',
      event: 'Pentagon assessment: six months to fully clear Hormuz mines',
      summary:
        'Washington Post and The National report a Pentagon assessment that full clearance of Iranian mines from the Strait of Hormuz could take six months. Officials reportedly say the timeline could keep gasoline and oil prices elevated through the US midterm elections. Clearance must proceed under active Iranian mine-laying.',
      impact:
        "A structural floor under the energy channel. Trafigura's 'billion barrels lost' framing was a month-horizon number; the Pentagon timeline triples it. For Taiwan this pushes the risk window into July–August demand peak, exactly when Ras Laffan (17% out for 3–5 years) cannot compensate and MOEA's spot-cargo mitigation assumed a shorter Hormuz encumbrance. Forces USN minesweeper/patrol build-up that competes for munitions-industrial throughput with Arrow/David's Sling replenishment.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'Al Jazeera / Iranian state channels',
      event: 'Pezeshkian and Araghchi publicly reject fractured-regime framing',
      summary:
        'Pezeshkian: "there are no radicals or moderates" — "we are all \'Iranian\' and \'revolutionary\', and with the iron unity of the nation and government, with complete obedience to the Supreme Leader of the Revolution, we will make the criminal aggressor regret his actions." Araghchi: "The failure of Israel\'s terrorist killings is reflected in how Iran\'s state institutions continue to act with unity, purpose, and discipline. The battlefield and diplomacy are fully coordinated fronts in the same war."',
      impact:
        "Tehran surrendered yesterday's tactical ambiguity. The civilian–military split had let Pezeshkian signal openness while the IRGC seized MSC Francesca — useful fragmentation of Washington's target set. By collapsing the split, any future Araghchi diplomatic signal inherits IRGC ownership and any IRGC maritime action inherits Foreign-Ministry ownership. Mechanically satisfies Trump's 'unified proposal' demand while removing every hedge that made negotiation cheap for Tehran.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: 'Angle360 / TradingEconomics',
      event: 'Brent closes $103.67 (+1.7%); curve re-prices on 6-month clearance',
      summary:
        "Brent crude closed April 23 at $103.67, up $1.76 (+1.7%) from Tuesday's $101.91. WTI above $90. Structural repricing concentrated in the curve rather than the spot as Asian LNG insurers and physical traders absorb the Pentagon six-month clearance timeline. Hormuz transit remained 'light' per prior CNBC sourcing.",
      impact:
        'The spot understates the structural tightening. The Pentagon number extends insurance-repricing horizons from the Trafigura month-view framing into a July–August Taiwan demand-peak horizon. CPC Corp already rotating coal back into baseload; the risk window now materially overlaps the Taipei summer cooling load.',
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'medium',
      source: 'ANI News / TradeWinds / Panama MFA / Greek MFA',
      event: 'Panama formally condemns Francesca seizure; Greece publicly disputes Iran narrative',
      summary:
        "Panama's Foreign Ministry formally condemned Wednesday's MSC Francesca seizure as 'illegal' and 'an unnecessary escalation' posing 'a serious threat to maritime security' — the first flag-state protest since the Wednesday seizures. Greek FM Gerapetritis told CNN the Epaminondas was severely damaged but not seized, with Greece's Shipping Ministry saying the vessel remains under its captain's control.",
      impact:
        "Activates the 'non-US-hull harassment lane' standing thread faster than expected. The maritime picture is now a multi-flag-state diplomatic problem rather than a US-Iran bilateral, which is precisely the diffusion Leavitt's 'not a violation' doctrine invited. Adds Panama, Liberia, Greece, Swiss-Italian (MSC) to the coalition frame; the UK-led 40-nation freedom-of-navigation architecture has gained co-signers on demand.",
    },
    {
      id: 7,
      direction: 'mixed',
      importance: 'medium',
      source: 'CNN / Times of Israel',
      event: "Trump to reporters: 'Don't rush me' on Iran timeline; IDF spy arrests",
      summary:
        "Trump told reporters 'Don't rush me' when pressed on an Iran-war endgame timeline, reinforcing Wednesday's 'no time frame' framing and Leavitt's 'no firm deadline.' Two IAF technicians were charged at Tel Nof with passing F-15 data to Iran — domestic security incident, not war trajectory. Hezbollah drones continued targeting IDF positions overnight.",
      impact:
        "Confirms the US posture: indefinite truce plus blockade plus 'peanuts' oil framing is already producing acceptable pressure; no reason to pay an escalation cost to accelerate a proposal Iran is politically closer to delivering after the unity stance but no more willing to author on Washington's terms. The 'don't rush me' framing is now a four-day consistent signal.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat, incl. 6 KC-135 crew) · WIA: 395',
      delta: '+0 KIA / +0 WIA',
      status:
        'New ROE: Navy authorised to "shoot and kill" any boat laying mines in Hormuz; minesweeping tempo tripled. USS Abraham Lincoln CSG in Gulf of Oman enforcing blockade; USS Ford CSG northern Red Sea (~300-day deployment); USS Bush transiting around Africa toward Arabian Sea. Pentagon six-month clearance assessment surfaces.',
    },
    israel: {
      cumulative: 'KIA: 38 (23 civilians + 15 soldiers in Lebanon) · WIA: 6,000+ (per Alma). 393+ Iranian attack waves absorbed cumulatively.',
      delta: '+0 KIA / +0 WIA (Hezbollah drone activity continued overnight)',
      status:
        'Israel–Lebanon direct ceasefire extended three weeks from the Thursday Oval Office meeting. IDF holds up-to-8km buffer in southern Lebanon. Two IAF technicians charged at Tel Nof with passing F-15 data to Iran — domestic security matter. Netanyahu: "war not yet ended." Not party to US-Iran extension; not addressed in Leavitt "not a violation" frame.',
    },
    iran: {
      cumulative: "Iran Legal Medicine Organization: 'nearly 3,400' KIA (updated April 22, from 3,375 on April 20). HRANA: 3,636+ killed — 1,701 civilians, 1,221 military, 714 unclassified (April 7). Hengaw: 6,620+ military KIA (April 8). 383 children under 18; 3.2M displaced.",
      delta: '+0 KIA / +0 WIA reported; no Iranian-side military losses reported in Wednesday–Thursday maritime operations',
      status:
        "Civilian–military tracks publicly unified: Pezeshkian 'no radicals or moderates'; Araghchi 'battlefield and diplomacy fully coordinated fronts in the same war.' IRGC continues mine-laying operations per Axios sourcing. Mojtaba Khamenei remains unseen; IRGC commander Vahidi continues as decisional axis despite the unity framing. Ghalibaf: 'Reopening Hormuz is impossible with such flagrant breach of the ceasefire.'",
    },
    other: {
      cumulative: 'Lebanon: 2,290+ killed (PBS tally) · Iraq: 99+ killed · Gulf states: 32+ killed · UAE: 11 killed / 2,343 projectiles absorbed cumulatively.',
      delta: '+0 aggregated',
      status:
        "Panama (flag state, MSC Francesca) and Greece (operator, Epaminondas) activated formal diplomatic channels on the Wednesday Hormuz seizures. UK-led 40-nation freedom-of-navigation coalition gaining real co-signers. Pakistan Munir/Sharif authored Trump's Tuesday extension; Rubio credits direct Trump mediation on Lebanon. Qatar Ras Laffan 17% LNG out for 3–5 years.",
    },
  },
  exec:
    "Thursday delivered the war's first genuine two-vector day in a week: one clear de-escalation and one clear escalation, landing within hours of each other from the same Oval Office. Trump announced a three-week Israel–Lebanon ceasefire extension after a White House meeting between Israeli and Lebanese representatives, pushing the Day-10 Friday expiry to mid-May; Rubio attributed the outcome to direct presidential involvement. Simultaneously, Trump ordered the US Navy to 'shoot and kill' any boat laying mines in the Strait of Hormuz 'with no hesitation' and directed minesweeping activity to 'triple up' — the first explicit new ROE since the indefinite ceasefire extension and a direct response to Axios reporting that Iran's IRGC Navy deployed additional mines this week. A Pentagon assessment puts full Hormuz mine-clearance at six months. Tehran closed the fractured-regime attack lane: Pezeshkian declared there are 'no radicals or moderates,' Araghchi that 'the battlefield and diplomacy are fully coordinated fronts in the same war.' Brent closed at $103.67. Panama formally condemned the MSC Francesca seizure; Greece publicly disputed Iran's Epaminondas 'seizure' claim. Analytical judgment: the 7-day trajectory is an indefinite truce now running on two divergent clocks — Lebanon buying time, Hormuz generating forcing functions — and the first kinetic US–IRGC small-boat encounter under the new ROE is the dominant tail risk.",
  implications: [
    {
      title: 'The three-week Lebanon extension is the diplomacy, the Hormuz ROE is the war',
      body:
        "Thursday's two Trump decisions read individually as contradictions and together as a coherent doctrine. The Lebanon extension closes the northern front's near-term kinetic window; the Hormuz 'shoot and kill' order opens a maritime kinetic window on a policy trigger that requires no further authorisation. Converting ROE into a standing kill order while Iran is still actively mining pushes decision-making away from the Fifth Fleet command chain and into the presidential announcement chain. The Pentagon's six-month clearance assessment gives the ROE a structural horizon: the steady-state for the next six months is a US minesweeping campaign in active Iranian mine-laying territory — the 1987–88 Tanker War template with modern sensors and without a 1980s-era superpower counterweight.",
    },
    {
      title: "Tehran closed the 'unified proposal' trap — and in doing so, closed its own hedge",
      body:
        "Pezeshkian and Araghchi's Thursday statements mirror Wednesday's sourced regime-cohesion reporting in the opposite direction. 'No radicals or moderates'; 'battlefield and diplomacy fully coordinated fronts in the same war.' Tehran is surrendering the tactical advantage of two public faces. The civilian–military split had let the foreign ministry signal openness while the IRGC seized hulls — useful fragmentation of Washington's target set. Collapsing the split makes any future diplomatic signal inherit IRGC ownership and any maritime action inherit Foreign-Ministry ownership. The 'unified proposal' demand becomes mechanically satisfiable, but only by removing every ambiguity that made negotiation cheap for Tehran. Expect Beijing's back-channel posture to harden slightly: a visibly unified Tehran is easier to mediate for, but the unity is being performed in the exact week Washington publicly disavowed any deadline.",
    },
    {
      title: 'The energy channel is now priced for a six-month floor, and Taiwan sees it first',
      body:
        "Brent at $103.67 is a +1.7% spot move; the structural repricing is in the curve. The Pentagon's six-month mine-clearance assessment is a discrete input Asian LNG insurers and physical traders have not previously had. For Taiwan — MOEA LNG covered through May and most of June, Ras Laffan 17% out for 3–5 years, CPC already rotating coal back to baseload — a six-month Hormuz encumbrance pushes the risk window into the July–August Taipei summer demand peak, exactly the period MOEA's mitigation plan assumed spot cargoes could cover. Panama's formal condemnation and Greece's public dispute of the Epaminondas narrative activate the flag-state frame from Day 55's standing-thread list. Adm. Cooper's 'rearming, retooling' posture now operates under a six-month Hormuz kinetic assumption, which forces USN minesweeper/patrol build-up that competes with Arrow/David's Sling replenishment. Analytical judgment: Taipei should be stress-testing a no-Hormuz-through-October scenario now rather than later.",
    },
  ],
  casualtyNotes: {
    us: "No new KIA. New ROE is the day's dominant casualty-risk driver: authorised Navy 'shoot-and-kill' response on mine-laying boats and tripled minesweeping tempo — under conditions where Iran is still actively laying mines. Pentagon assessment: six months to fully clear the strait.",
    israel:
      'No new KIA. Israel–Lebanon ceasefire extended three weeks from Thursday Oval Office meeting; Hezbollah drone activity continued against IDF positions overnight. Two IAF technicians charged at Tel Nof with passing F-15 data to Iran — domestic-security incident, not war-trajectory signal.',
    iran:
      "Iran Legal Medicine Organization holding at 'nearly 3,400' KIA; no new Iranian-side military losses reported in Wednesday–Thursday maritime operations. Civilian and military tracks publicly unified for the first time since the succession: Pezeshkian 'no radicals or moderates'; Araghchi 'battlefield and diplomacy fully coordinated fronts in the same war.' Trajectory implication runs opposite to the rhetoric — closing the split narrows Tehran's negotiation hedge.",
    other:
      'Aggregated Lebanon, Iraq, and Gulf-state totals unchanged today. Flag-state diplomatic channels activated: Panama formally condemned the MSC Francesca seizure; Greek FM Gerapetritis publicly disputed the Iranian Epaminondas "seizure" claim. UK-led 40-nation freedom-of-navigation coalition gaining real co-signers in response to the Wednesday operations.',
  },
};

export default data;
