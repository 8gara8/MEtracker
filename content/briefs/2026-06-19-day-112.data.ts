import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'de-escalating',
    risk7d: 'conditional',
    spillover: 'conditional',
    rationale: {
      direction:
        "Day 112 is the day the war formally ends on paper. The Islamabad Memorandum was signed remotely June 17 (Trump at Versailles, Pezeshkian in Tehran), entered force June 18, and gets its formal Bürgenstock ceremony Friday with Pakistan and Qatar convening implementation talks (Swiss FDFA, The National). Direction holds down on an executed accord rather than a pending one: Day 111's reported ratification gate cleared and the Day 51 four-day reversal window passed without a reversal. Trajectory stays down; the binding question shifts from signing to performance over the 60-day window.",
      risk7d:
        "Seven-day risk stays conditional, not low. The signature cannot close two structural gaps: Hormuz is physically closed with demining pledged within 30 days and normal flow possibly not before 2027 (CNBC, The Conversation), and the nuclear file is deferred with the IAEA blackout at 98 days and 440.9 kg of 60% HEU unverifiable (ISIS). The dominant near-term failure mode is no longer a signing collapse but an implementation stall, with Araghchi already pre-positioning blame on Washington for 'effective implementation.'",
      spillover:
        "Spillover holds conditional and has hardened. Israeli strikes have continued in Lebanon after the MoU entered force — the first post-signing kinetic test on a front Israel is not party to — and the comprehensive Israel-Lebanon track convenes the week of June 22 against live operations, with Israel demanding Hezbollah disarmament as the precondition (US State Dept, Al Jazeera). The §3.5.6 Israel-independence prior carries: a termination that depends on Israeli restraint stays one strike from reigniting the Lebanon front before the comprehensive track even meets.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'high',
      source: 'Swiss FDFA / SWI swissinfo / The National',
      event:
        "The Islamabad Memorandum, signed remotely June 17 and in force since June 18, gets its formal ceremony Friday at the Bürgenstock resort above Lake Lucerne, with Pakistan and Qatar convening initial talks on implementing the agreement",
      summary:
        "Switzerland is facilitating; the venue was proposed by mediators Pakistan and Qatar. The June 19 event is a formal implementation ceremony, not the initial signing, which occurred at Versailles and Tehran (Swiss FDFA, SWI swissinfo, The National).",
      impact:
        "This is the genuine inflection the series has tracked since Day 33: the war is over as a formal matter, the Day 51 reversal window closed without a reversal. Per §3.5.3 the binding read now shifts from 'will it sign' to 'will it perform' over the 60-day window.",
    },
    {
      id: 2,
      direction: 'de-escalating',
      importance: 'high',
      source: 'CNN / The National',
      event:
        "Day 111's reported June 18 ratification gate cleared and the four-day Day 51 reversal window passed without a USS-Spruance-style reversal; the binding 14-point memorandum text is public and the war is formally terminated on all fronts on paper",
      summary:
        "The text reopens Hormuz toll-free for 60 days and defers the nuclear file to a later negotiating track; Iran's delegation specified 'not to negotiate the nuclear issue at this stage' (CNN, The National).",
      impact:
        "An executed text is firmer than every prior '80% complete' claim that preceded the Day 51 failure. But execution is not implementation, and the next failure mode is a performance stall over the 60-day window, not a signing collapse.",
    },
    {
      id: 3,
      direction: 'neutral',
      importance: 'high',
      source: 'CNBC / The Conversation',
      event:
        "Hormuz reopens legally while staying a ghost route physically: demining by Iran is pledged 'within 30 days,' the vessel backlog clears only 8–10 days after full freedom of navigation is restored, and insurers may need up to six months to lower premiums",
      summary:
        "Analysts caution that pre-war flow may not return before 2027, dependent on sustained implementation, completed demining, and normalized insurance costs (CNBC, The Conversation).",
      impact:
        "The §3.5.6 mine-clearance prior holds in full: a signature reopens Hormuz legally while the chokepoint stays physically and commercially closed. The gap between signature and the first sustained convoys is where the relief rally is most likely to partially unwind.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'US State Dept / Al Jazeera',
      event:
        "Lebanon is the live fault line: Israeli strikes have continued after the MoU entered force, and the comprehensive Israel-Lebanon track convenes the week of June 22 against active operations, with Israel demanding Hezbollah disarmament and dismantlement as the precondition",
      summary:
        "The trilateral joint statement set pilot zones for exclusive Lebanese Armed Forces control and a ceasefire contingent on a complete cessation of Hezbollah fire and evacuation from the South Litani Sector; Hezbollah has rejected the plan absent a full Israeli withdrawal (US State Dept, Al Jazeera).",
      impact:
        "The §3.5.6 Israel-independence prior is live: Israel is not party to the US-Iran framework, and the Lebanon caveat moves from 'cooled' to 'under active Israeli fire.' The June 22 track now convenes against live operations, not a settled front.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'ISIS / Trading Economics / CNBC',
      event:
        "The nuclear file is deferred to the 60-day track with the IAEA's in-field blackout now at 98 days and 440.9 kg of 60% HEU unverifiable; Brent held near $78, the lowest since late February, and Goldman cut its Q4 Brent call to $80",
      summary:
        "Iran suspended IAEA cooperation in 2025 and no inspector return has been scheduled; the MoU's pledge of no weapon and HEU disposal in the 60-day track is a commitment, not restored access (ISIS, TradingEconomics, CNBC).",
      impact:
        "The weaponization-clock prior carries per §3.5.6: the deal defers and pledges, it does not disarm. The 98-day figure sets the size of the hole the 60-day window must fill, and the first dated test is whether inspectors physically re-enter at all.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed (memorandum in force; Bürgenstock implementation ceremony)',
      status:
        "No new US casualties. With the memorandum in force, the blockade-end order stands as the first US drawdown; the US holds that Iran 'won't get a dime' of the ~$24-25B relief until it performs over the 60-day window. Forces still hold the ~40-ship NCAGS Bahrain channel pending demining; Sledgehammer shelved but un-stood-down. The Bürgenstock ceremony June 19 is a formal implementation event with initial talks convened by Pakistan and Qatar.",
    },
    israel: {
      cumulative: 'KIA: 49 (Iran-front 47 + Lebanon-front 2 truce-period) · WIA: 8,625+',
      delta: '+0 confirmed new IDF KIA (Israeli strikes continued in Lebanon; no verified new IDF loss)',
      status:
        "No confirmed new IDF KIA, but Israeli strikes have continued in Lebanon after the MoU entered force — the first post-signing kinetic test on a front Israel is not party to. Netanyahu reserves the right to 'defend ourselves as necessary,' and Israeli withdrawal from Lebanon is not a deal condition. The comprehensive track convenes the week of June 22, with Israel demanding Hezbollah disarmament and dismantlement.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new mass toll (no active exchange on the Iran front; deal in force)',
      status:
        "No verified new mass toll. The MoU carries an Iranian pledge not to seek a weapon and defers the nuclear file to the 60-day track, but the IAEA blackout reached 98 days and 440.9 kg of 60% HEU stays unverifiable, its size, composition, and whereabouts unknown to the Agency. The Sirik-area water loss to 20,000+ from the June 10 strikes carries. HRANA 3,636+ and Hengaw 6,620+ carry; 3.2M displaced.",
    },
    other: {
      cumulative:
        'Lebanon MOH 3,783 killed / 11,699 injured (June 14 update); Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Bahrain no casualties',
      delta: '+0 verified new toll figure despite continued Israeli strikes in Lebanon',
      status:
        "No verified new toll figure despite continued Israeli strikes in Lebanon; the Lebanon MOH war-cumulative figure stands at 3,783 killed / 11,699 injured as of the June 14 update and is likely to revise upward as the comprehensive track convenes against live operations. Iraq 117+; Gulf 33+ KIA / 72+ WIA; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
    },
  },
  exec:
    "Day 112 is the day the war formally ends on paper. The Islamabad Memorandum — signed remotely June 17 by Trump at the Palace of Versailles and by Pezeshkian in Tehran, and in force since June 18 — gets its formal ceremony Friday at the Bürgenstock resort above Lake Lucerne, now an implementation event rather than the initial signing, with Pakistan and Qatar convening initial talks on putting the deal into effect (Swiss FDFA, SWI swissinfo, The National). The reframe matters: Day 111's leading risk, the reported June 18 ratification gate, is cleared, and the four-day Day 51 reversal window has closed without a reversal. But §3.5.6 governs what the signature does not solve. The Strait stays a ghost route: demining is pledged 'within 30 days,' the backlog clears only 8–10 days after full freedom of navigation is restored, insurers may need up to six months, and analysts warn normal flow may not resume before 2027 (CNBC, The Conversation). The nuclear file is deferred to the 60-day track with the IAEA's in-field blackout now at 98 days and 440.9 kg of 60% HEU still unverifiable (ISIS). And Lebanon is the live fault: Israeli strikes have continued after the MoU entered force, with the comprehensive Israel-Lebanon track set to convene the week of June 22 against active operations, not a settled front (US State Dept, Al Jazeera). Brent held near $78, the lowest since late February, and Goldman cut its Q4 Brent call to $80. 30-day ceasefire probability rises to 70 from 60; direction stays de-escalating; spillover holds conditional on Lebanon.",
  implications: [
    {
      title:
        "The war ends on paper — signed, in force, and ceremonially sealed at Bürgenstock — closing the Day 51 reversal window without a reversal",
      body:
        "The binding test carried across Days 110–111 was whether a finalized text would convert to an executed accord; Day 112 answers it. The memorandum was signed remotely June 17 — Trump at Versailles after the G7, Pezeshkian in Tehran — entered force June 18, and gets its formal ceremony Friday at the Bürgenstock above Lake Lucerne, with Pakistan and Qatar convening initial implementation talks (Swiss FDFA, SWI swissinfo, The National). Day 111's leading risk, the reported June 18 ratification gate, cleared, and the four-day window that mirrored the Day 50–51 collapse passed without a USS-Spruance-style seizure to reverse it. Skeptical counter per §3.5.3: an executed text is firmer than every prior '80% complete' claim that preceded the Day 51 failure, but execution is not implementation — Araghchi has already told France that Washington bears responsibility for 'effective implementation' and for halting hostilities on all fronts, pre-positioning blame if the 60-day performance window stalls (The National). Under the multi-clock framework the negotiation-capacity clock is at its strongest of the war, transitioning from negotiating to executing. Analytical judgment: this is the genuine inflection the series has tracked since Day 33 — the war is over as a formal matter — but the binding read now shifts from 'will it sign' to 'will it perform,' and the next failure mode is an implementation stall, not a signing collapse.",
    },
    {
      title:
        "Hormuz reopens legally while staying a ghost route physically — demining within 30 days, normal flow possibly not before 2027",
      body:
        "The paper-versus-physical gap is now the defining feature of the deal's first phase. The MoU reopens the Strait, but demining by Iran is pledged only 'within 30 days,' the vessel backlog clears 8–10 days after full freedom of navigation is actually restored, and marine insurers may need up to six months to lower premiums — with analysts cautioning that pre-war flow may not return before 2027 (CNBC, The Conversation). Skeptical counter per §3.5.6: the mine-clearance prior holds in full — a signature reopens Hormuz legally while the chokepoint stays physically and commercially closed, and the nuclear file rhymes with it, the IAEA blackout now 98 days and 440.9 kg of 60% HEU unverifiable with no inspector return scheduled (ISIS). Both are deferred-and-pledged, not delivered. Under the multi-clock framework the energy-infrastructure clock improves on terms and price — Brent near $78, the lowest since late February, with Goldman cutting its Q4 call to $80 — but not yet on flow (TradingEconomics, CNBC). Analytical judgment: markets have booked an outcome the water has not delivered; the binding test for the energy clock is a demined, insured, transiting Strait, and the gap between the signature and the first sustained tanker convoys is the most likely place for the relief rally to partially unwind.",
    },
    {
      title:
        "Taiwan: the executed deal caps the energy tail risk, but physical flow — months away — remains the catalyst that revises the case",
      body:
        "For Taiwan, Day 112 improves the LNG-and-energy picture decisively on terms while leaving the timing unresolved. An executed memorandum that reopens Hormuz toll-free for 60 days removes the ~$29B/yr permanent-friction tail risk and the open-ended-closure scenario that were Taiwan's worst cases, and Brent near $78 lowers the imported-energy bill directly (CNBC, TradingEconomics). But §3.5.6 governs the structure: the chokepoint still moves a fraction of pre-war traffic, demining runs 30 days and normalization potentially into 2027, and the price reflects expected flow rather than restored transit (The Conversation). No fresh Taiwan-specific development today; prior assessments hold. The China-Russia veto cover and the ~37.7% Chinese share of Hormuz crude carry. Analytical judgment: the energy-infrastructure clock now improves on terms, price, and the removal of tail risk, but the LNG-cover-through-September case still rests on physical flow — the catalyst that revises the dominant case is a demined, transiting Strait, which the deal schedules but cannot conjure. TSMC's 2026 CapEx framework near 8% carries; the investment case shifts from 'will the war end' to 'how fast does the Strait actually clear,' a logistics question now, not a diplomatic one.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties. With the memorandum in force, the blockade-end order stands as the first US drawdown; the US holds that Iran 'won't get a dime' of the ~$24-25B relief until it performs over 60 days. Forces hold the ~40-ship NCAGS Bahrain channel pending demining; Sledgehammer shelved but un-stood-down. The Bürgenstock ceremony June 19 is a formal implementation event.",
    israel:
      "No confirmed new IDF KIA, but Israeli strikes have continued in Lebanon after the MoU entered force. Netanyahu reserves the right to 'defend ourselves as necessary'; Israeli withdrawal from Lebanon is not a deal condition. The comprehensive track convenes the week of June 22, with Israel demanding Hezbollah disarmament.",
    iran:
      "No verified new mass toll. The MoU pledges no weapon and defers the nuclear file to the 60-day track, but the IAEA blackout reached 98 days and 440.9 kg of 60% HEU stays unverifiable. The Sirik-area water loss to 20,000+ from the June 10 strikes carries. HRANA 3,636+ and Hengaw 6,620+ carry; 3.2M displaced.",
    other:
      "No verified new toll figure despite continued Israeli strikes in Lebanon; the Lebanon MOH war-cumulative figure stands at 3,783 killed / 11,699 injured as of June 14 and is likely to revise upward as the comprehensive track convenes against live operations. Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
  },
};

export default data;
