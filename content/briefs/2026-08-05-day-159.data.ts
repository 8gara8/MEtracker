import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed. Three US principals — Treasury Secretary Bessent ('a deal today or tomorrow' to open Hormuz to 'freedom of movement'), Secretary of State Rubio ('progress made') and President Trump ('imminent') — pushed the deal claim harder, and Qatar said progress had been made toward talks to end the war, adding a third mediator (CBS News, ABC News, Washington Post, Haaretz). But Iran hardened its denial in its own state media, Tasnim reporting Tehran denies any US talks and limits negotiations to Oman on Hormuz alone (Tasnim). Per §3.5.3 an unsigned deal now carrying three senior US names but denied by the counterparty is a widening claim, not a verified thaw; the third day of the kinetic pause keeps direction off escalating, while the denial and the continued strike-prep keep it off de-escalating.",
      risk7d:
        "Seven-day risk holds critical. Trump paired the talks with a 'decapitation' threat and called Iran's leadership 'unbelievably duplicitous,' and the US and Israel kept preparing possible strikes on Iranian energy infrastructure with the final order not yet given (CBS News, Haaretz). Israel held at its highest state of readiness, still assessing Iran would fire ballistic missiles even if it did not initially join a US strike. A resumed US-Israeli strike, a laden-tanker sinking, or a verified American death remain the dominant discrete risks over the week, and the sixty-day toll-free window still expires around mid-August with Iran rejecting Oman's 50-50 lane split as insufficient (NBC News). The claim's escalating rhetoric and the nearing deadline keep the week's risk pinned at critical.",
      spillover:
        "Spillover holds critical. The Houthi embargo of Saudi Arabia held at Bab el-Mandeb, where Sunday depot strikes had cut traffic to about eleven vessels, the lowest in months, and several Saudi-cargo tankers turned back (The Hill, CNBC, Al Jazeera). IDF strikes reportedly killed two in Gaza even as the Board of Peace urged de-escalation, and the US blockade of Iranian ports continued to redirect vessels (Haaretz). The war still spans Iranian soil, Gulf waters, both maritime chokepoints and the Israel-Gaza and Israel-Lebanon seams at once; a US-Iran pause and a cheaper barrel reach none of them, and the second chokepoint runs on Yemen's own ledger.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'pivotal',
      source: 'Bessent / Rubio / Trump — CBS News / ABC News / Washington Post',
      event:
        "Three US principals escalated the deal claim: Treasury Secretary Scott Bessent said an agreement could be reached 'today or tomorrow' to open the Strait of Hormuz to 'freedom of movement,' Secretary of State Rubio said progress had been made in the talks, and President Trump called a deal 'imminent.'",
      summary:
        "Per §3.5.3 the Day 50 pattern is compounding — an unsigned deal now carries the names of three senior US officials, not just the President.",
      impact:
        "The more principals attach to a deal the counterparty denies, the larger the reversal if the denial holds; the kinetic pause held into a third day beneath the claim.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'Tasnim / Al Jazeera / The Nation',
      event:
        "Iran's state outlet Tasnim reported that Tehran denies any negotiations with the United States and limits its talks to Oman on the Strait of Hormuz alone, and a source close to Iran's negotiating team denied that any agreement had been reached to reopen the strait.",
      summary:
        "Per §3.5.3 the named counterparty put its denial in its own media on the day US officials said a deal was near — the whole dispute restated inside the claim.",
      impact:
        "The pause still rests on a US-Iran channel Tehran says does not exist; the mid-August toll deadline nears with the Oman track contested and no broker both sides accept.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'Washington Post / Al Jazeera / CBS News',
      event:
        "Trump conceded the arrangement 'would not mean the immediate reopening' of the Strait of Hormuz — a step toward Iran's 'route that does not reopen' framing — while branding Iran's leadership 'unbelievably duplicitous' and, per CBS News, pairing the talks with a 'decapitation' threat.",
      summary:
        "Per §3.5.6 convergence on the definition and coercion on the timetable arrived on the same day.",
      impact:
        "The one concession that could make a deal conceivable landed alongside a decapitation threat and continued energy-strike prep; the gap narrowed and the tripwire re-armed at once.",
    },
    {
      id: 4,
      direction: 'de-escalating',
      importance: 'high',
      source: 'Haaretz / Forbes / Trading Economics / Fortune',
      event:
        "Qatar said progress had been made toward US-Iran talks to end the war, adding a third mediator alongside Oman and the Gulf, while Brent crude extended its slide for a second day toward $79-82, reversing earlier gains as renewed-diplomacy hopes eased supply fears.",
      summary:
        "Per §3.5.5 the market and a mediator both voted de-escalation — the second consecutive down day compressing the war premium further.",
      impact:
        "The oil tape and Qatar's entry are the day's clearest de-escalation signals, but both trade the pause, not the deadline; a resumed strike or a sinking reprices toward $120 fast.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'Haaretz / The Hill / CNBC / NBC News',
      event:
        "The US and Israel kept preparing possible strikes on Iranian energy infrastructure with Trump's final order not yet given, Israel held at its highest state of readiness, the Houthi embargo of Saudi Arabia held at Bab el-Mandeb with traffic near eleven vessels, and IDF strikes reportedly killed two in Gaza.",
      summary:
        "Per §3.5.6 the strike-prep, the alert level and both maritime fronts stayed live beneath the diplomacy; the second chokepoint runs on Yemen's own ledger.",
      impact:
        "A pause on the US-Iran track reaches neither Bab el-Mandeb nor the Israeli front; the energy-strike option and the Houthi blockade both remained one order away from re-escalation.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM series; ~96% returned to duty)',
      delta:
        "+0 confirmed; the strike pause held into a third day, so no fresh US kinetic action was taken; the lone Kuwait death at Ahmad al-Jaber stays denied by CENTCOM and unconfirmed",
      status:
        "The toll holds at 17 KIA / 432 WIA on the AP/CENTCOM series. The pause held into a third day, so no new US exposure was incurred and no fresh American death has been reported; the one death Kuwait reported at Ahmad al-Jaber remains unconfirmed, of undetermined nationality, and set against CENTCOM's account that all drones and missiles were intercepted or failed. Per §3.5.3 the US KIA figure does not move — a verified American death is the single event that would trigger Trump's 'bridge or power plant per ship' rule, and his 'decapitation' threat raises the stakes of any such incident. The US blockade of Iranian ports continued; the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta:
        "+0 (Israel not a direct party to the US-Iran exchange); held at its highest state of readiness, still bracing for Iranian missiles even if it stays out of a US strike; IDF strikes reportedly killed two in Gaza",
      status:
        "No new Israeli casualties on the Iran front. Israel held at its highest state of readiness, with the IDF still assessing Iran would fire ballistic missiles at Israel even if it did not initially join a US strike, and the US and Israel continued preparing possible strikes on Iranian energy infrastructure with the final order ungiven (Haaretz). Israel stays outside the US-Iran framework and unbound by the Oman channel or any Hormuz formula, so its standing readiness keeps a full-scale-campaign option live if the deal claim collapses. The Lebanon gap prior (§3.5.6) carries — operations against Hezbollah continue and the June 26 framework is still rejected — and IDF strikes reportedly killed two in Gaza even as the Board of Peace urged de-escalation, keeping the Gaza seam kinetic.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; Tehran hardened its denial of any US talks in state media while keeping the Oman-Hormuz track",
      status:
        "No updated official Iranian toll issued on Day 159. The Qeshm Island deaths — a couple and their child, cited by Tehran as the trigger for the Kuwait strike — and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. State media (Tasnim) hardened Tehran's line that there are no US talks and negotiations are limited to Oman on Hormuz, and a source close to the negotiating team denied any deal to reopen the strait. The IAEA has run no verification since February 28 and remains locked out of the Isfahan enrichment plant; ~440.9 kg of 60% and 184.1 kg of 20% HEU stay unverified and, per Grossi, likely still at Isfahan, with ISIS flagging enough HEU for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        'Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 74+ WIA, of which Kuwait 10 killed / 115 injured (plus one unconfirmed at Ahmad al-Jaber, denied by CENTCOM) · Lebanon source-split: Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129',
      delta:
        "No confirmed new deaths; the Houthi embargo of Saudi Arabia held at Bab el-Mandeb with traffic near eleven vessels and several Saudi-cargo tankers turned back; no reported crew fatalities",
      status:
        "No confirmed new deaths on Day 159. The Houthi embargo of Saudi Arabia held at Bab el-Mandeb, where Sunday strikes on Red Sea oil depots had cut traffic to about eleven vessels — the lowest in months — and several Saudi-cargo tankers turned back before reaching the strait (The Hill, CNBC, Al Jazeera). The Qatari-LNG carrier Gaslog Shanghai's engine-room damage still carries, and a laden-tanker sinking or a crew death remains the tell most likely to reprice oil and trigger Trump's rule. The confirmed Kuwait baseline holds at 10 killed / 115 injured; Iraq holds 148+ KIA / 402+ WIA; Lebanon stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129).",
    },
  },
  exec:
    "Day 159 opened with more of Washington's principals attaching their names to a deal Tehran still says does not exist. Treasury Secretary Scott Bessent said an agreement could be reached 'today or tomorrow' to open the Strait of Hormuz to 'freedom of movement'; Secretary of State Rubio said progress had been made; and President Trump called a deal 'imminent' — even as he branded Iran's leadership 'unbelievably duplicitous' and, per CBS News, floated a 'decapitation' threat (CBS News, ABC News, Washington Post, CNN). Iran hardened the other way: state outlet Tasnim reported that Tehran denies any US talks and limits negotiations to Oman on Hormuz alone, and a source close to the negotiating team denied any agreement to reopen the strait (Tasnim, Al Jazeera). One thing did move toward Tehran: Trump conceded the arrangement 'would not mean the immediate reopening' of Hormuz, narrowing the definitional gap that is the whole dispute. Qatar said progress had been made toward US-Iran talks to end the war, joining Oman and the Gulf as mediators (Haaretz). The oil market extended its de-escalation vote a second day — Brent fell toward $79-82, reversing earlier gains as diplomacy eased supply fears (Forbes, Trading Economics, Fortune). But the US and Israel kept preparing possible strikes on Iranian energy sites, Israel held at highest alert, and the Houthi embargo of Saudi Arabia held at Bab el-Mandeb (Haaretz, The Hill). Per §3.5.3 the claim now carries three US principals and a mediator, and the named counterparty still denies the channel. Direction holds mixed; seven-day and spillover risk hold critical; the thirty-day ceasefire probability edges up two points to 13.",
  implications: [
    {
      title: 'The deal claim gains principals; the denial hardens in Tehran\'s own media',
      body:
        "Day 159 stacked the US deal claim higher without making it any more mutual. Treasury Secretary Bessent said a Hormuz agreement could land 'today or tomorrow' to restore 'freedom of movement,' Secretary of State Rubio reported 'progress,' and Trump called the deal 'imminent' (CBS News, ABC News, Washington Post). Against three named US principals, Iran put its denial in its own state press: Tasnim ran the line that Tehran denies US talks and limits negotiations to Oman on Hormuz alone, and a source close to the negotiating team denied any deal to reopen the strait (Tasnim, Al Jazeera). Under the multi-clock framework the negotiation-capacity clock is widening — Qatar now says progress has been made toward talks to end the war, adding a third mediator alongside Oman and the Gulf (Haaretz) — even as the channel those mediators would carry is one Tehran says does not exist. Analytical judgment: per §3.5.3 this is the Day 50 pattern compounding — the more senior US officials attach their names to an unsigned deal, the larger the reversal if the counterparty's denial holds, and the denial hardened today rather than softening. The standing prior is unretired: de-escalation announced ahead of verification has reversed within days three times in this war (§3.5.6). What keeps direction at mixed is that the shooting is still paused into a third day and a real mediator has entered; what keeps it off de-escalating is that the party whose signature the deal requires spent the day denying the pen exists.",
    },
    {
      title: 'Convergence and coercion arrive on the same day',
      body:
        "The more consequential move was quieter: Trump conceded the arrangement 'would not mean the immediate reopening' of the Strait of Hormuz (Washington Post, Al Jazeera). That is the first time the US claim has bent toward Tehran's framing — 'a route that does not reopen the strait' — which the rolling context has called the whole dispute restated inside the deal. Narrow that gap and a deal becomes conceivable; but the same day carried its opposite. Trump branded Iran's leadership 'unbelievably duplicitous' and, per CBS News, paired the talks with a 'decapitation' threat, while the US and Israel kept preparing possible strikes on Iranian energy infrastructure with the final order ungiven (CBS News, Haaretz). Under the multi-clock framework the negotiation-capacity and energy-infrastructure clocks are being wound at once. Analytical judgment: per §3.5.5 the market read the diplomacy, not the threat — Brent extended its slide a second day toward $79-82, unwinding more of July's 20%-plus surge as diplomacy eased supply fears (Forbes, Trading Economics, Fortune). But the active-deadline clock runs the other way: the sixty-day toll-free window still expires around mid-August, Iran rejected Oman's 50-50 lane split as insufficient, and Israel held at highest alert (NBC News, Haaretz). Convergence on the definition and coercion on the timetable are moving together; the deadline and Israel are the reason the convergence has not yet become de-escalation.",
    },
    {
      title: 'Taiwan: a second cheaper barrel, the same thin gas buffer',
      body:
        "For Taipei the oil tape improved again and the gas exposure did not. Brent's second consecutive down day toward $79-82 extends the relief on the crude bill — roughly 60% of Taiwan's oil is US-sourced, so each dollar off the barrel eases the import cost — but per §3.5.10 there was no fresh Taiwan-specific development on Day 159, and the molecule the war actually threatens is still gas. Analytical judgment: per §3.5.5 Taiwan is 99% import-dependent for natural gas, and about a third of its 23.6 Mt of LNG transits Hormuz, nearly 8 Mt of it Qatari (CSIS, IFRI). The live threat to that molecule is the mid-August fee deadline, not the strike pause: the Iran-Oman route under negotiation would set a toll and a lane structure for the same strait Qatari cargoes must cross, and Iran has already rejected Oman's 50-50 split as insufficient (NBC News). The realized exposure is unchanged — no Qatari or UAE cargoes in April or May, roughly 17% of Qatar's export capacity cut at Ras Laffan, Taipei backfilling with premium US LNG — against about eleven days of gas cover versus roughly 120 days of oil. A cheaper barrel is real and welcome; it buys Taiwan nothing on the eleven-day gas buffer that the Hormuz fee, not the oil price, will decide.",
    },
  ],
  casualtyNotes: {
    us:
      "Holds 17 KIA / 432 WIA (AP/CENTCOM series). Pause held a third day; no fresh US kinetic exposure; the lone Kuwait death stays denied by CENTCOM and unconfirmed. Per §3.5.3 the US KIA figure does not move until confirmed; a verified US death triggers Trump's 'bridge or power plant per ship' rule, and his 'decapitation' threat raises the stakes. US port blockade continues; $67B supplemental and 50-48 war-powers rebuke unresolved.",
    israel:
      "No new Israeli casualties on the Iran front; Israel held at highest readiness and the US and Israel kept preparing possible energy-infrastructure strikes. It stays outside the US-Iran framework and the Oman channel; the Lebanon gap prior carries, and IDF strikes reportedly killed two in Gaza as the Board of Peace urged de-escalation.",
    iran:
      "No fresh official MOH toll; the Qeshm civilian deaths and destroyed Jask desalination plant carry from Day 154. HRANA 3,636+; Foundation of Martyrs ~3,468; MOH ~3,559 / 27,400+; US/Israeli est. 6,000+. Tasnim hardened Tehran's denial of any US talks, limiting negotiations to Oman on Hormuz. IAEA no verification since Feb 28; Isfahan enrichment plant access refused; ISIS flags enough HEU for up to ten weapons if further enriched.",
    other:
      "No confirmed new deaths; the Houthi embargo of Saudi Arabia held at Bab el-Mandeb with traffic near ~11 vessels and Saudi-cargo tankers turned back. Gaslog Shanghai damage carries; a tanker-crew death is the tell. Confirmed Kuwait baseline 10 killed / 115 injured; Iraq 148+ KIA / 402+ WIA; Lebanon source-split.",
  },
};

export default data;
