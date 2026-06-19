import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'de-escalating',
    risk7d: 'conditional',
    spillover: 'conditional',
    rationale: {
      direction:
        "Day 113 is the first full day inside the 60-day implementation window. Direction holds down because the memorandum stays in force and, decisively, Hormuz began reviving physically — at least 20 tankers transited June 18, the highest since June 2, with Iranian supertankers departing transponders-on (CNBC, RFE/RL). Trajectory stays down, but the read is now three-way: the deal delivers on flow while the implementation track slips and Lebanon hardens. The war stays terminated on paper; the binding question is performance over the 60-day window.",
      risk7d:
        "Seven-day risk stays conditional, not low. The dominant near-term failure mode has shifted from a signing collapse to two live drags: an implementation stall — the postponed Bürgenstock talks and Sharif's cancellation produced no dated milestone on Day 113 (CBS News, NPR) — and a Lebanon reignition. The nuclear file stays deferred and contested, with Grossi working on supervised HEU down-blending while Vance and Tehran diverge on whether the program is even negotiable, and the IAEA blackout at 99 days (NPR, ISIS).",
      spillover:
        "Spillover holds conditional and has hardened further. Four IDF soldiers were killed overnight by Hezbollah — the first confirmed Israeli combat deaths since the signing — and Israel answered with its largest strike package since the MoU took force, more than 80 targets, while the IRGC warned the ceasefire is 'conditional on a ceasefire on all fronts' and operations could resume (Times of Israel, Al Jazeera, PBS). The §3.5.6 Israel-independence prior is now the active risk: a termination that depends on Israeli restraint is one strike package from dragging Iran back across its own red line before the week-of-June-22 track even meets.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'Times of Israel / Al Jazeera / PBS',
      event:
        "After Hezbollah killed four IDF soldiers overnight, Israel struck more than 80 targets across the Beqaa Valley and the south — its largest package since the MoU took force — and Iran's IRGC warned the ceasefire is 'conditional on a ceasefire on all fronts' and operations could resume if strikes continue",
      summary:
        "The four IDF KIA are the first confirmed Israeli combat deaths since the signing; Netanyahu vowed to 'exact a very heavy price.' Israeli withdrawal from Lebanon is not a deal condition, and the comprehensive Israel-Lebanon track convenes the week of June 22 against live fire (Times of Israel, Al Jazeera, PBS, Alma Center).",
      impact:
        "The §3.5.6 Israel-independence prior is no longer a caveat but the active risk. The most likely path back to a wider war now runs through Lebanon, where Israel operates outside the framework and Iran has tied its re-entry to a front it does not control.",
    },
    {
      id: 2,
      direction: 'neutral',
      importance: 'high',
      source: 'CBS News / NPR',
      event:
        "The 60-day implementation window opens with friction, not momentum: the Bürgenstock event's initial talks were postponed and Pakistan's PM Sharif cancelled his trip despite Islamabad having brokered the memorandum, leaving Day 113 without a single dated milestone",
      summary:
        "No demining start, inspector-return date, or first sanctions tranche was set; the Iranian read is that nothing substantive on the nuclear file has yet been negotiated, and Araghchi has pre-positioned blame on Washington for 'effective implementation' (CBS News, NPR, Al Jazeera).",
      impact:
        "Per §3.5.3 a postponed first session is not a collapse, but execution is where the '80% complete' optimism died on Day 51. The absence of any concrete performance marker is itself the Day 113 signal.",
    },
    {
      id: 3,
      direction: 'de-escalating',
      importance: 'high',
      source: 'CNBC / RFE/RL',
      event:
        "Hormuz finally revives physically: at least 20 oil tankers transited June 18 — the highest since June 2 — and five Iranian supertankers departed with transponders switched back on, per Kpler ship-tracking, the first day the water delivers on the paper reopening",
      summary:
        "Ship-tracking logged 18 vessels transiting between June 17 evening and June 18 afternoon as 'a sign of confidence in the agreement'; the blockade-end order and 60-day toll-free period are in effect (CNBC, RFE/RL).",
      impact:
        "The energy-infrastructure clock improves on flow for the first time, not just on terms and price — the catalyst the LNG-cover-through-September case was waiting for. The gap between signature and sustained convoys is finally beginning to close.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: 'Argus / The Conversation',
      event:
        "Skeptical counter holds: Argus reports Hormuz tanker traffic 'unchanged,' Friday morning saw no outbound vessels, and the revival still rests on demining pledged within 30 days and insurance that may need up to six months to normalize",
      summary:
        "The source divergence — surging per CNBC/RFE-RL, unchanged per Argus — is itself the signal that the reopening is real but uneven and contested; backlog estimates run 155–215 stranded tankers (Argus, The Conversation, CNBC).",
      impact:
        "The §3.5.6 mine-clearance prior holds: a legal reopening is not a physical one. Markets that booked the relief rally on expected flow remain exposed to a slower-than-priced normalization into 2027.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'NPR / The Hill / ISIS',
      event:
        "The nuclear file stays deferred and contested: Grossi is working on 'concrete steps' for supervised HEU down-blending, but VP Vance says inspectors will return to help 'destroy' the stockpile while Tehran says nuclear talks only begin after signing; the IAEA in-field blackout reached 99 days with 440.9 kg of 60% HEU unverifiable",
      summary:
        "A strategic adviser cited by reporting holds that 'nothing substantive has been negotiated yet on the nuclear programme'; Wendy Sherman warns 60 days is too short for a final nuclear settlement; Brent steadied near $80 (NPR, The Hill, ISIS, Trading Economics).",
      impact:
        "The weaponization-clock prior carries per §3.5.6: the deal defers and pledges, it does not disarm. The first dated test is whether inspectors physically re-enter at all against a 99-day blackout.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 (memorandum in force; first full day of the 60-day window)',
      status:
        "No new US casualties. The blockade-end order stands as the first US drawdown; the US holds Iran 'won't get a dime' of the ~$24-25B relief until it performs over 60 days. Forces still hold the ~40-ship NCAGS Bahrain channel pending demining; Sledgehammer shelved but un-stood-down. VP Vance says inspectors are to return and help 'destroy' the HEU stockpile, a reading Tehran has not confirmed.",
    },
    israel: {
      cumulative: 'KIA: 53 (Iran-front 47 + Lebanon-front 6 truce-period) · WIA: 8,625+',
      delta: '+4 IDF KIA (Lebanon front; Hezbollah attack overnight June 18–19)',
      status:
        "Four Israeli soldiers were killed overnight June 18–19 by a Hezbollah attack — the first confirmed Israeli combat deaths since the memorandum was signed. Israel responded with its largest strike package since the MoU took force, more than 80 targets across the Beqaa and the south. Netanyahu vowed to 'exact a very heavy price'; Israeli withdrawal from Lebanon is not a deal condition, and the comprehensive track convenes the week of June 22 against live fire.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new mass toll (Iran front quiet; operations suspended)',
      status:
        "No verified new mass toll on the Iran front; Iran has suspended operations against Israel but the IRGC warned the ceasefire is 'conditional on a ceasefire on all fronts.' The MoU's no-weapon pledge defers the nuclear file to the 60-day track, but the IAEA blackout reached 99 days and 440.9 kg of 60% HEU stays unverifiable. The Sirik-area water loss to 20,000+ from the June 10 strikes carries. HRANA 3,636+ and Hengaw 6,620+ carry; 3.2M displaced.",
    },
    other: {
      cumulative:
        'Lebanon MOH 3,783 killed / 11,699 injured (June 14 update); Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Bahrain no casualties',
      delta: '+0 verified toll from the June 18–19 strikes yet (figure expected to revise upward)',
      status:
        "Israel's 80+ target package on Lebanon is likely to drive new Lebanese casualties, but no verified toll from the June 18–19 strikes has been published; the Lebanon MOH war-cumulative figure stands at 3,783 killed / 11,699 injured as of the June 14 update and is expected to revise upward. Iraq 117+; Gulf 33+ KIA / 72+ WIA; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
    },
  },
  exec:
    "Day 113 is the first full day inside the 60-day implementation window, and it opens with the deal's three vectors pulling in different directions. The implementation track stumbled out of the gate: the Bürgenstock event's initial talks were postponed and Pakistan's PM Sharif cancelled his trip despite Islamabad having brokered the memorandum, introducing friction into the first hours of the performance window (CBS News, NPR). Lebanon hardened into the live escalation front — after Hezbollah killed four IDF soldiers overnight, Israel struck more than 80 targets, its largest package since the MoU took force, and Iran's IRGC warned the ceasefire was 'conditional on a ceasefire on all fronts' and operations could resume if strikes continue (Times of Israel, Al Jazeera, PBS). The genuine positive is physical: Hormuz traffic is finally reviving, with at least 20 oil tankers transiting June 18 — the highest since June 2 — and five Iranian supertankers departing with transponders switched back on, per Kpler ship-tracking (CNBC, RFE/RL). Skeptical counter per §3.5.3 and §3.5.6: Argus reports tanker traffic 'unchanged,' Friday morning saw no outbound vessels, and the revival rests on demining that runs 30 days; on the nuclear file Grossi is working on 'concrete steps' for supervised HEU down-blending, but Vance and Tehran openly diverge on whether the nuclear program is even negotiable yet, and the IAEA blackout reached 99 days (Argus, NPR, ISIS). Brent steadied near $80. 30-day ceasefire probability holds at 70; direction stays de-escalating; spillover holds conditional, hardening on Lebanon.",
  implications: [
    {
      title:
        "The 60-day window opens with friction, not momentum — a postponement and a no-show, not a dated milestone",
      body:
        "The binding read shifted on Day 112 from 'will it sign' to 'will it perform'; Day 113 delivers the first performance signal, and it is friction. The Bürgenstock event's initial implementation talks were postponed and Pakistan's PM Sharif cancelled his trip — despite Islamabad having brokered the memorandum it now carries the name of — introducing drag into the first hours of the 60-day window (CBS News, NPR). Skeptical counter per §3.5.3: a postponed first session is not a collapse, and logistics slip routinely; but Araghchi's pre-positioned framing that Washington bears responsibility for 'effective implementation' means each slipped milestone now has an owner-of-blame already assigned, and the Iranian read is that nothing substantive on the nuclear file has yet been negotiated at all (Al Jazeera, NPR). Under the multi-clock framework the negotiation-capacity clock stays the strongest of the war but stops climbing — it is now executing, and execution is where the '80% complete' optimism died on Day 51. Analytical judgment: the window is open and the war stays terminated on paper, but the first 24 hours produced a postponement and a no-show from the lead mediator rather than a dated milestone — demining start, inspector-return date, or first sanctions tranche — and the absence of any concrete performance marker is itself the Day 113 signal.",
    },
    {
      title:
        "Lebanon is now the war's live front, not a cooled one — the most likely path back to a wider war",
      body:
        "The §3.5.6 Israel-independence prior is no longer a caveat — it is the active risk. After Hezbollah killed four IDF soldiers overnight, Israel struck more than 80 targets across the Beqaa Valley and the south, its largest package since the MoU entered force, and Iran's IRGC warned the ceasefire was 'conditional on a ceasefire on all fronts' and that operations could resume if Israeli strikes continue (Times of Israel, Al Jazeera, PBS). Skeptical counter: Iran has issued conditional-resumption warnings before without acting, and suspending rather than resuming operations is itself a signal it wants the deal to hold; but the four IDF KIA are the first confirmed Israeli combat deaths since the signing, and the comprehensive Israel-Lebanon track convenes the week of June 22 against live fire, not a settled front (PBS, Alma Center). Under the multi-clock framework the coalition-cohesion clock is the binding constraint of the week: a US-Iran termination that depends on Israeli restraint is one strike package from dragging Iran back across its own red line. Analytical judgment: the most likely path back to a wider war no longer runs through Hormuz or the nuclear file — it runs through Lebanon, where Israel operates outside the framework and Iran has tied its own re-entry to a front it does not control.",
    },
    {
      title:
        "Taiwan: Hormuz finally revives physically — the catalyst begins to deliver, but Lebanon keeps the case conditional",
      body:
        "For Taiwan the Day 112 read was that the energy case now turned on physical flow, a logistics question the deal scheduled but could not conjure; Day 113 is the first day the water starts to deliver. At least 20 oil tankers transited Hormuz June 18 — the highest since June 2 — and five Iranian supertankers departed with transponders switched back on, per Kpler ship-tracking (CNBC, RFE/RL). Skeptical counter per §3.5.6: Argus reports tanker traffic 'unchanged,' Friday morning saw no outbound vessels, and the revival still rests on demining that runs 30 days and insurance that may need six months — the source divergence is itself the signal that the reopening is real but uneven and contested (Argus, The Conversation). Brent steadied near $80; no fresh Taiwan-specific development today, and the China-Russia veto cover and ~37.7% Chinese share of Hormuz crude carry. Analytical judgment: the energy-infrastructure clock now improves on flow for the first time, not just on terms and price, which is the catalyst the LNG-cover-through-September case was waiting for; but Lebanon's hardening keeps the regional risk live, and the investment read stays 'how fast and how durably does the Strait clear' — a question the first tanker convoys begin to answer in Taiwan's favor while leaving the conditionality intact. TSMC's 2026 CapEx near 8% carries.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties. The blockade-end order stands as the first US drawdown; the US holds Iran 'won't get a dime' of the ~$24-25B relief until it performs over 60 days. Forces hold the ~40-ship NCAGS Bahrain channel pending demining; Sledgehammer shelved but un-stood-down. VP Vance says inspectors are to return and help 'destroy' the HEU stockpile, a reading Tehran has not confirmed.",
    israel:
      "+4 IDF KIA: four Israeli soldiers were killed overnight June 18–19 by Hezbollah, the first confirmed Israeli combat deaths since the signing. Israel answered with its largest package since the MoU took force, 80+ targets. Netanyahu vowed to 'exact a very heavy price'; the comprehensive track convenes the week of June 22 against live fire.",
    iran:
      "No verified new mass toll; Iran has suspended operations but the IRGC warned the ceasefire is 'conditional on a ceasefire on all fronts.' The MoU pledges no weapon and defers the nuclear file to the 60-day track, but the IAEA blackout reached 99 days and 440.9 kg of 60% HEU stays unverifiable. HRANA 3,636+ and Hengaw 6,620+ carry; 3.2M displaced.",
    other:
      "Israel's 80+ target package on Lebanon is likely to drive new Lebanese casualties, but no verified toll from the June 18–19 strikes has been published; the Lebanon MOH war-cumulative figure stands at 3,783 killed / 11,699 injured as of June 14 and is expected to revise upward. Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
  },
};

export default data;
