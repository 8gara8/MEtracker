import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed. Day 160 produced the most concrete diplomatic step in weeks — Iran's Foreign Ministry said Tehran and Muscat had finalized the geographical coordinates of a new Hormuz shipping route and were drafting a joint statement (Euronews, CNBC, PBS) — but the text taking shape is the Iran-Oman toll-and-control arrangement, which CNN assessed is 'not one Trump wants,' not the toll-free reopening Washington claims. Iran again denied any US channel and, per Tasnim, blamed 'US interference and Trump's threats' for the delay, while Brent slipped below $80 and Qatar reported mediation progress. Per §3.5.3 concrete progress on the track the US rejects is not a verified US-Iran thaw; the agreed coordinates and the softer oil tape keep direction off escalating, while a fresh ship strike, Iran's sovereign-control red line and continued US energy-strike prep keep it off de-escalating.",
      risk7d:
        "Seven-day risk holds critical. A fresh strike hit a ship transiting the Strait of Hormuz as the fee dispute clouded the corridor (FDD, NBC New York), the US and Israel kept preparing possible strikes on Iranian energy infrastructure with the final order ungiven, and Israel held at its highest state of readiness (Haaretz). Iran restated that it would treat US warships on any lane other than those Tehran designates as targets, hardening the terms of any 'opening.' The sixty-day toll-free window still expires around mid-August, now roughly ten days out, with the passage fee the explicit sticking point. A resumed US-Israeli strike, a laden-tanker sinking, or a verified American death remain the dominant discrete risks over the week, and the nearing deadline keeps the week's risk pinned at critical.",
      spillover:
        "Spillover holds critical. The Hormuz maritime front stayed lethal-adjacent with a fresh ship strike, and the strait is effectively closed — about two vessels transited on August 2 against roughly seventy-three a day pre-war. On the second chokepoint the picture eased at the margin: the Houthis denied any plan to toll Bab el-Mandeb traffic and Saudi Arabia resumed Red Sea oil exports on August 4, though the embargo and depot-strike damage keep traffic near eleven vessels (Al Jazeera, Gulf News, The Hill). IDF strikes across Gaza continued as Hamas held a mass funeral for those it says an early-war strike killed. The war still spans Iranian soil, both chokepoints and the Israel-Gaza seam at once; an Iran-Oman route text reaches none of them, and the second chokepoint runs on Yemen's own ledger.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'pivotal',
      source: 'Iran Foreign Ministry (Baghaei) — Euronews / CNBC / PBS',
      event:
        "Iran's Foreign Ministry spokesman Esmaeil Baghaei said Tehran and Muscat had finalized the geographical coordinates of a new Strait of Hormuz shipping route and were drafting a joint statement covering technical, legal, security and environmental points — ships entering the Persian Gulf through an Iranian-controlled lane and exiting through an Omani one, with service fees charged for security and the environment.",
      summary:
        "Per §3.5.3 the 'imminent deal' finally acquired a text — but the concrete progress is on the Iran-Oman toll-and-control track, not the toll-free US reopening Trump claims.",
      impact:
        "Agreed coordinates and a pending joint statement are the most concrete diplomatic step in weeks, materializing the standing toll-institutionalization prior (§3.5.6) rather than the US demand for free navigation.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'CNN analysis / FDD Overnight Brief',
      event:
        "CNN assessed that an agreement on the Strait of Hormuz is taking shape 'but not one Trump wants,' handing Iran the sovereign control and passage fee Tehran calls a nonnegotiable red line; a Gulf official put the odds of an Iran-Oman deal by Friday at 50-50.",
      summary:
        "Per §3.5.3 the shape of the deal is the opposite of the US ask — Iranian-controlled inbound traffic and a toll versus Washington's 'immediate, complete and total opening' under UNCLOS free navigation.",
      impact:
        "If the Iran-Oman text lands, Washington must either accept a fee-and-control outcome it has rejected for months or reject a deal its own principals called imminent; either path reprices the standoff.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'Trump / Bessent — Washington Times / NBC News / The Hill',
      event:
        "President Trump insisted the US is 'part of' the Hormuz negotiations and a deal could come 'today or tomorrow,' and Treasury Secretary Bessent echoed the timing, while Iran again denied any direct US channel and, per Tasnim, blamed 'US interference and Trump's threats' for the delay in the Oman track.",
      summary:
        "Per §3.5.3 the Day 50 pattern persists — senior US names on an unsigned deal the counterparty says runs only through Oman, with Tehran casting Washington as the obstacle rather than the partner.",
      impact:
        "The channel Washington claims to be inside is one Tehran publicly disowns; the wider the principal-level claim, the larger the reversal if the denial holds through the mid-August deadline.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: 'FDD Overnight Brief / NBC New York / straits.live',
      event:
        "A fresh strike hit a ship moving through the Strait of Hormuz as negotiations ran into the fee dispute, and the strait remained effectively closed to commercial traffic — about two vessels transited under naval escort on August 2 against roughly seventy-three a day before the war; no crew fatality was confirmed from the latest strike.",
      summary:
        "Per §3.5.6 the maritime front the brief has flagged as the tell stayed live beneath the diplomacy, and Iran restated that US warships on non-designated lanes would be treated as targets.",
      impact:
        "A laden-tanker sinking or a confirmed crew death is the single event most likely to reprice oil toward $120 and trigger Trump's 'bridge or power plant per ship' rule; the strike kept that risk one incident away.",
    },
    {
      id: 5,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Trading Economics / Fortune / Al Jazeera / Gulf News',
      event:
        "Brent crude fluctuated below $80, near $79, after losses of roughly 5% in each of the previous two sessions as investors priced Hormuz-deal optimism and Qatar's report of mediation progress; on the second chokepoint the Houthis denied any plan to toll Bab el-Mandeb traffic and Saudi Arabia resumed Red Sea oil exports on August 4.",
      summary:
        "Per §3.5.5 the market and the second-chokepoint headlines both leaned de-escalation, unwinding more of July's 20%-plus surge.",
      impact:
        "The oil tape and the Bab el-Mandeb easing trade the diplomacy, not the deadline; a resumed strike or a Hormuz sinking reverses the move toward $120 within a session.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM series; ~96% returned to duty)',
      delta:
        "+0 confirmed; the strike pause on the US-Iran track held, so no fresh US kinetic action was taken; the lone Kuwait death at Ahmad al-Jaber stays denied by CENTCOM and unconfirmed; no crew fatality confirmed from the latest Hormuz ship strike",
      status:
        "The toll holds at 17 KIA / 432 WIA on the AP/CENTCOM series. No fresh American death has been reported: the US-Iran shooting stayed paused as the Oman-route talks advanced, and the fresh strike on a ship transiting Hormuz produced no confirmed US or allied crew fatality. The one death Kuwait reported at Ahmad al-Jaber remains unconfirmed, of undetermined nationality, and set against CENTCOM's account. Per §3.5.3 the US KIA figure does not move until confirmed — a verified American death is the single event that would trigger Trump's 'bridge or power plant per ship' rule, and his standing 'decapitation' threat raises the stakes of any such incident. The US blockade of Iranian ports continued and Iran restated that US warships on non-designated lanes would be treated as targets; the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta:
        "+0 on the Iran front (Israel not a direct party to the US-Iran exchange); held at its highest state of readiness; IDF strikes continued across Gaza and Hamas held a mass funeral for those it says an early-war strike killed",
      status:
        "No new Israeli casualties on the Iran front. Israel held at its highest state of readiness, with the IDF still assessing Iran would fire ballistic missiles even if it did not initially join a US strike, and the US and Israel continued preparing possible strikes on Iranian energy infrastructure with the final order ungiven (Haaretz). Israel stays outside the US-Iran framework and unbound by the Oman channel or any Hormuz formula, so its standing readiness keeps a full-scale-campaign option live if the deal claim collapses. The Lebanon gap prior (§3.5.6) carries — operations against Hezbollah continue and the June 26 framework is still rejected. On the Gaza seam the IDF tightened 'targeted elimination' strikes to require the chief of staff's approval even as strikes across Gaza continued and Hamas held a mass funeral for those it says an early-war strike killed, keeping the seam kinetic.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; Tehran finalized the Oman-route coordinates while hardening its denial of any US channel in state media",
      status:
        "No updated official Iranian toll issued on Day 160. The Qeshm Island deaths — a couple and their child, cited by Tehran as the trigger for the Kuwait strike — and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. Iran's Foreign Ministry said the Oman-route coordinates were finalized and a joint statement was in drafting, while state media (Tasnim, Press TV) framed US interference as the obstacle and reaffirmed that talks run only through Oman. The IAEA has run no verification since February 28 and remains locked out of the Isfahan enrichment plant; ~440.9 kg of 60% and 184.1 kg of 20% HEU stay unverified and, per Grossi, likely still at Isfahan, with ISIS flagging enough HEU for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        'Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 74+ WIA, of which Kuwait 10 killed / 115 injured (plus one unconfirmed at Ahmad al-Jaber, denied by CENTCOM) · Lebanon source-split: Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129',
      delta:
        "No confirmed new deaths; a fresh Hormuz ship strike caused no confirmed crew fatality; the Houthis denied a Bab el-Mandeb toll and Saudi Arabia resumed Red Sea oil exports on August 4, though traffic holds near eleven vessels",
      status:
        "No confirmed new deaths on Day 160. A fresh strike hit a ship transiting the Strait of Hormuz with no confirmed crew fatality; the cumulative Hormuz-crisis maritime toll stands at roughly 17 merchant ships damaged, seven abandoned, two captured and about a dozen seafarers killed or missing, and a laden-tanker sinking or a crew death remains the tell most likely to reprice oil and trigger Trump's rule. On the second chokepoint the Houthis denied any plan to toll Bab el-Mandeb traffic and Saudi Arabia resumed Red Sea oil exports on August 4 after halting them on July 26, though depot-strike damage keeps traffic near eleven vessels and Riyadh is standing up a Red Sea defense coalition (Al Jazeera, Gulf News, The Hill). The confirmed Kuwait baseline holds at 10 killed / 115 injured; Iraq holds 148+ KIA / 402+ WIA; Lebanon stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129).",
    },
  },
  exec:
    "Day 160 turned Washington's 'imminent deal' into a concrete text — but not the one Trump has been selling. Iran's Foreign Ministry said Tehran and Muscat had finalized the geographical coordinates of a new Strait of Hormuz shipping route and were drafting a joint statement, with vessels entering the Persian Gulf through an Iranian-controlled lane and exiting through an Omani one, and service fees charged for security and the environment (Euronews, CNBC, PBS). CNN's read: an agreement is taking shape, 'but not one Trump wants' — it hands Iran the sovereign control and passage fee Tehran calls a nonnegotiable red line, the opposite of the 'immediate, complete and total opening' the US demands. Trump insisted the US is 'part of' the talks and a deal could land 'today or tomorrow,' and Bessent echoed the timing; Iran again denied any US channel, and Tasnim blamed 'US interference and Trump's threats' for the delay (Washington Times, NBC News, Press TV). A Gulf official put the odds of an Iran-Oman deal by Friday at 50-50 (CNN). The maritime front stayed lethal-adjacent — a fresh strike hit a ship transiting Hormuz as the fee dispute clouded the corridor (FDD, NBC New York). Oil read the diplomacy: Brent fluctuated below $80, near $79, after roughly 5% losses in each of the prior two sessions (Trading Economics, Fortune). Per §3.5.3 the concrete progress is on the toll track the US rejects. Direction holds mixed; seven-day and spillover risk hold critical; the thirty-day ceasefire probability edges up one point to 14.",
  implications: [
    {
      title: 'The deal acquires a text — on the toll track, not Trump\'s',
      body:
        "Day 160 gave the 'imminent deal' its first hard edges, and they cut against Washington. Iran's Foreign Ministry said Tehran and Muscat had finalized the geographical coordinates of a new Hormuz route and were drafting a joint statement covering technical, legal, security and environmental points, with an Iranian-controlled inbound lane, an Omani-controlled exit, and service fees (Euronews, CNBC, PBS). Under the multi-clock framework the negotiation-capacity clock is genuinely advancing — but on the Oman track, not the US one. CNN judged the emerging agreement 'not one Trump wants': it institutionalizes exactly the sovereign control and passage fee the rolling context has carried since Day 45 as the toll-institutionalization risk, and that Iran now calls a nonnegotiable red line. Analytical judgment: per §3.5.3 this is the sharpest test yet of the deal claim. For 159 days the US has narrated a toll-free 'opening'; the text taking shape is an Iranian-controlled, fee-bearing route Washington has rejected for months. Iran reinforced the framing in its own media — Tasnim cast 'US interference and Trump's threats' as the obstacle, inverting Washington's 'we are part of the talks' — and a Gulf official still put a Friday deal at only 50-50 (CNN). What keeps direction mixed is that a real text is forming; what keeps it off de-escalating is that the text is the toll outcome, and the party whose ports the US still blockades says Washington is the reason it is not yet signed.",
    },
    {
      title: 'The definitional gap hardens into a fee schedule and a lane map',
      body:
        "The gap the brief has called the whole dispute stopped being rhetorical on Day 160 and became a fee schedule and a lane map. Washington's version is still an 'immediate, complete and total opening,' the naval blockade lifted only on a toll-free reopening; the Iran-Oman version routes inbound traffic through a lane Tehran controls, charges a service fee, and warns that US warships on any non-designated lane will be treated as targets (FDD, NBC New York). Under the multi-clock framework the active-deadline and energy-infrastructure clocks are winding against the negotiation-capacity gains: the sixty-day toll-free window expires around mid-August, roughly ten days out, and a fresh strike hit a ship transiting Hormuz as the fee dispute clouded the corridor. Analytical judgment: per §3.5.5 the market read the diplomacy, not the danger — Brent slipped below $80 after roughly 5% losses in each of the prior two sessions, and the second chokepoint eased as the Houthis denied a Bab el-Mandeb toll and Saudi Arabia resumed Red Sea oil exports (Trading Economics, Fortune, Al Jazeera, Gulf News). But the tape is trading the pause, not the terms. A Hormuz that reopens on Iran's fee-and-control terms is a different world from one that reopens toll-free, and the two sides have now written down how far apart they are — with a ship strike and a ten-day clock that could turn the fee dispute back into a shooting one.",
    },
    {
      title: 'Taiwan: the fee it has feared is now being drafted',
      body:
        "For Taipei the abstraction became a draft. The Iran-Oman route taking shape would set precisely the toll-and-lane structure the brief has warned about — service fees and an Iranian-controlled inbound lane on the same strait Qatari LNG must cross. Per §3.5.10 there was no fresh Taiwan-specific development on Day 160, but the mechanism that threatens Taiwan's gas moved from talk to coordinates. Analytical judgment: per §3.5.5 Taiwan is 99% import-dependent for natural gas, and about a third of its 23.6 Mt of LNG transits Hormuz, nearly 8 Mt of it Qatari (CSIS, IFRI). A cheaper barrel helped again — Brent below $80 eases the crude bill, roughly 60% of it US-sourced — but the molecule the war threatens is gas, and the fee now being drafted is a standing cost and a standing chokepoint on Qatari cargoes, not a one-off. The realized exposure is unchanged: no Qatari or UAE cargoes in April or May, roughly 17% of Qatar's export capacity cut at Ras Laffan, Taipei backfilling with premium US LNG, against about eleven days of gas cover versus roughly 120 days of oil. The Hormuz deal Taipei should watch is not the one Trump is announcing but the one Iran and Oman are drafting: whichever fee and lane structure they write is the one Qatari LNG — and Taiwan's eleven-day buffer — will have to live with. The oil price is the relief; the fee is the risk.",
    },
  ],
  casualtyNotes: {
    us:
      "Holds 17 KIA / 432 WIA (AP/CENTCOM series). The US-Iran shooting stayed paused as the Oman-route talks advanced; the fresh Hormuz ship strike produced no confirmed US or allied crew death; the lone Kuwait death stays denied by CENTCOM and unconfirmed. Per §3.5.3 the US KIA figure does not move until confirmed; a verified US death triggers Trump's 'bridge or power plant per ship' rule. US port blockade continues; $67B supplemental and 50-48 war-powers rebuke unresolved.",
    israel:
      "No new Israeli casualties on the Iran front; Israel held at highest readiness and the US and Israel kept preparing possible energy-infrastructure strikes. It stays outside the US-Iran framework and the Oman channel; the Lebanon gap prior carries. The IDF tightened 'targeted elimination' approvals even as strikes across Gaza continued and Hamas held a mass funeral for those it says an early-war strike killed.",
    iran:
      "No fresh official MOH toll; the Qeshm civilian deaths and destroyed Jask desalination plant carry from Day 154. HRANA 3,636+; Foundation of Martyrs ~3,468; MOH ~3,559 / 27,400+; US/Israeli est. 6,000+. Tehran finalized the Oman-route coordinates while Tasnim and Press TV framed US interference as the obstacle. IAEA no verification since Feb 28; Isfahan enrichment plant access refused; ISIS flags enough HEU for up to ten weapons if further enriched.",
    other:
      "No confirmed new deaths; a fresh Hormuz ship strike caused no confirmed crew fatality (cumulative maritime toll ~17 ships damaged, 7 abandoned, 2 captured, ~12 seafarers killed or missing). The Houthis denied a Bab el-Mandeb toll and Saudi Arabia resumed Red Sea oil exports Aug 4, though traffic holds near ~11 vessels. Confirmed Kuwait baseline 10 killed / 115 injured; Iraq 148+ KIA / 402+ WIA; Lebanon source-split.",
  },
};

export default data;
