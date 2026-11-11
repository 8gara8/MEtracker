import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Mixed. Ghalibaf says Iran's reply went through Qatar and the ball is in Washington's court, and Vance reportedly weighs direct talks, but Tehran's preconditions harden and Trump reportedly doubts the last deal.",
      risk7d:
        "Extreme and unchanged. Iran claims more mine strikes, UKMTO reports a projectile hit off Oman, an ADNOC vessel is damaged in UAE waters, and Iran's general staff says its response has no geographical limits.",
      spillover:
        "Critical and unchanged. The Houthis claim Riyadh's airport and a Yanbu pumping station, Rezaei threatens US bases in Europe, and Treasury moves Bessent to a military base over Iranian threats.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: "Mohammad Bagher Ghalibaf via Al Jazeera (interview and live page); Qatar's foreign ministry via The Peninsula",
      event: "Ghalibaf says the ball is in the American court",
      summary:
        "Iran's parliament speaker and lead negotiator told Al Jazeera that Tehran sent its response to Washington through a Qatari mediator and awaits a formal reply. He said Iran's seven conditions, including lifting the blockade and sanctions, releasing frozen funds, halting fighting on all fronts and formally ending the war, must be implemented before negotiations begin, and that distrust of the US is the main obstacle.",
      impact:
        "The first Iranian confirmation that a reply went via Qatar. It confirms process, not terms.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: "Mohammad Bagher Ghalibaf via Al Jazeera; G7 foreign ministers via Iran International",
      event: "Ghalibaf says Hormuz will never return to its pre-war status",
      summary:
        "Ghalibaf said Iran and Oman reached an understanding to oversee the waterway and that rules in the strait are governed by the laws of the two littoral states, rejecting open international waters. He said US officials asked Putin to mediate direct talks; Moscow has not confirmed. The G7 statement from Paris opposes any tolls, fees or limitations on transit through the strait.",
      impact:
        "Toll-institutionalization risk rises; the G7 and Tehran hold opposite positions on the strait.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "Mohsen Rezaei (Al Mayadeen interview) via Tasnim and Iran International",
      event: "Rezaei rules out moving enriched material and threatens bases in Europe",
      summary:
        "The SNSC secretary said even the smallest amount of enriched material will not leave Iran, that Russia has been told so, and that ending the war on all fronts, especially Lebanon, is a fundamental condition. He said that if attacked, Iran may target US bases in European countries and would treat any base American aircraft take off from as a threat.",
      impact:
        "Forecloses export or dilution ideas and hardens the Lebanon gap.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: "Wall Street Journal via Iran International; Abbas Araghchi via Tasnim",
      event: "Trump reportedly doubts the June memorandum as Vance weighs talks with Rezaei",
      summary:
        "The Wall Street Journal, citing two officials, reported that Trump privately questioned whether the Pakistan-brokered June memorandum, negotiated with Vance's help, was a costly mistake that let Iran recover and collect oil revenue before the blockade. The report says Vance is considering direct talks with Rezaei. Araghchi mocked Rubio for repeating a Pompeo line that Iranians must obey Washington if they want to eat.",
      impact:
        "A split signal from Washington. Both claims rest on unnamed officials.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "IRGC Navy and Iranian Navy via Tasnim; UKMTO and JMIC via gCaptain",
      event: "Iran claims more mine strikes; UKMTO reports a projectile hit off Oman",
      summary:
        "The IRGC Navy said two more tankers on an unauthorised route struck mines, exploded and were abandoned while burning, and accused CENTCOM commander Brad Cooper of guiding them. The regular Navy reported another tanker fire early Wednesday east of the strait. UKMTO said a tanker was struck by an unidentified projectile 19 nautical miles northeast of Limah, Oman, at 1338 UTC on 10 November, with the crew safe.",
      impact:
        "The mine and projectile accounts diverge, and no hull is named. JMIC keeps the threat severe.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'high',
      source: "ADNOC L&S via WAM and Khaleej Times; gCaptain",
      event: "An ADNOC vessel is damaged in an attack in UAE territorial waters",
      summary:
        "ADNOC Logistics and Services said one of its vessels sustained damage following an attack in UAE territorial waters in the Gulf on Tuesday afternoon. It did not name the ship or the attacker and said response efforts were ongoing. gCaptain says it is unclear whether the incident is linked to the UKMTO report. Nakilat's Al Maayeda was attacked by unidentified objects on 30 October.",
      impact:
        "An attack inside a host state's waters; unattributed, so the no-confirmed-attack count continues with a flag.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'medium',
      source: "Keyoumars Heydari via Iran International; Ali Abdollahi via Tasnim",
      event: "Iran's general staff describes an expanded target list",
      summary:
        "Deputy armed forces chief of staff Keyoumars Heydari said an updated list of targets in the region and beyond awaits formal communication to army and IRGC commanders, that Iran's response has no geographical limitations, and that forces could strike similar sites in any country whose aircraft attack Iran. Chief of staff Ali Abdollahi said any new aggression would bring far more devastating blows.",
      impact:
        "The declared-scope prior widens to Europe and third countries.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'medium',
      source: "US Treasury via Iran International (NYT, Reuters, Fox News Digital); Iran International analysis",
      event: "Treasury confirms Bessent moved to a military base over Iranian threats",
      summary:
        "The Treasury Department confirmed that Secretary Scott Bessent and his family moved from their Georgetown home to an unnamed military base after threats officials attribute to Iran; a senior official told Fox News Digital the threats had reached an advanced stage. Bessent leads Operation Economic Outcast. Iran has denied plots against US officials. Iran International reports Washington asked Baghdad to close all but two crossings with Iran.",
      impact:
        "The homeland threat now shapes the conduct of the economic campaign's lead official.",
    },
    {
      id: 9,
      direction: 'mixed',
      importance: 'high',
      source: "Gadi Eisenkot and the Prime Minister's Office via The Jerusalem Post and Times of Israel; Ynetnews headlines",
      event: "Eisenkot warns Netanyahu against dangerous moves during the transition",
      summary:
        "Eisenkot, tasked with forming a government, wrote to caretaker Prime Minister Netanyahu urging restraint and warning against dangerous moves that can wait for a new government, amid Channel 12 reports that army chief Eyal Zamir again opposed action Netanyahu wanted against Iran. He said only 46 lawmakers back Netanyahu. The PMO called the letter an irresponsible move and said decisions were coordinated with the security establishment.",
      impact:
        "The caretaker period becomes a risk vector for unilateral Israeli action.",
    },
    {
      id: 10,
      direction: 'escalating',
      importance: 'medium',
      source: "Saudi-led coalition via SPA and The Peninsula; Yahya Saree via TASS; Iran International",
      event: "The Houthis claim Riyadh's airport and a Yanbu pumping station",
      summary:
        "The coalition said it intercepted and destroyed three Houthi cruise missiles aimed at Riyadh. Houthi spokesman Yahya Saree claimed the missiles targeted King Khalid International Airport and that a drone hit Pumping Station No. 11 near Yanbu, and called a Saudi report of a drone intercepted over Mecca a lie. TASS headlines cite casualty figures that differ between sources; none is adopted.",
      impact:
        "The bypass-as-target prior continues on Saudi export infrastructure.",
    },
    {
      id: 11,
      direction: 'mixed',
      importance: 'medium',
      source: "G7 foreign ministers via Iran International; Volodymyr Zelenskyy via Iran International; Maryam Al Misnad via The Peninsula",
      event: "The G7 backs mediators and CENTCOM mine clearing; Zelenskyy cites missile diversion",
      summary:
        "The G7 foreign ministers and the EU said Iran must never acquire a nuclear weapon, urged full IAEA cooperation, backed regional mediators, supported CENTCOM's mine-clearing and escort operations and a Franco-British shipping initiative, and condemned Houthi strikes on Saudi Arabia. Zelenskyy said air-defence missiles were going to the Middle East. Qatar's Al Misnad told the Paris Peace Forum that diplomacy remains the strongest tool.",
      impact:
        "Western unity on terms, with the interceptor clock now visible in Europe.",
    },
    {
      id: 12,
      direction: 'escalating',
      importance: 'medium',
      source: "FAO, WFP and Lebanon's agriculture ministry via Al Jazeera; Ynetnews headlines",
      event: "UN agencies say over a million people in Lebanon face acute food insecurity",
      summary:
        "FAO, WFP and Lebanon's agriculture ministry said nearly a quarter of the population, more than one million people, face acute food shortages, rising to 1.15 million by the middle of next year. Lebanese authorities put the cost of two wars with Israel since October 2023 at about $27 billion, and about 300,000 remain displaced. Ynet headlines report strikes in southern Lebanon; no toll was located.",
      impact:
        "Lebanon's humanitarian clock worsens as Rezaei makes the front a fundamental condition.",
    },
    {
      id: 13,
      direction: 'neutral',
      importance: 'medium',
      source: "hormuz.now; Trading Economics",
      event: "Crossings slip to 2.4 a day as Brent bounces to $92.5",
      summary:
        "hormuz.now counted 17 tanker crossings in seven days to 11 November, 23:11 UTC, 2.4 a day against 47.6 before the crisis, with no LNG or LPG carrier; PortWatch shows 0.1% of normal tonnage to 8 November. Trading Economics shows Brent near $92.5, up about 1.2%, bouncing from a 10-week low and citing Iranian denials of talks.",
      impact:
        "Price ticks up with the sea war while volume falls to about 5% of normal.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split and Hegseth's 18 Epic Fury dead are held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. No US casualty reported. Hegseth's figure of 18 dead in Epic Fury stays held apart from the 15 on the casualty series. The forty-third cycle with no disclosure statement.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: "+0",
      status:
        "No addition on the war series and no IDF casualty located this cycle. Gaza deaths stay on their parallel series.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: "+0 official",
      status:
        "No new official war toll. The sixty-fourth day with no confirmed Iranian attack on a host state's territory, flagged for the unattributed ADNOC attack in UAE waters.",
    },
    other: {
      cumulative: "KIA: 3,716+ · WIA: 11,203+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 killed, +0 wounded",
      status:
        "No adopted change. UKMTO reports the crew safe off Limah; no casualties reported for the ADNOC vessel or the tankers Iran says are burning. Differing Saudi figures in TASS headlines are not adopted.",
    },
  },
  exec:
    "Tehran says the next move is Washington's as the sea war reaches UAE waters. Parliament Speaker Mohammad Bagher Ghalibaf, Iran's lead negotiator, told Al Jazeera that Iran sent its response through a Qatari mediator, that \"the ball is now in the American court,\" and that the seven conditions must be met before talks begin. He said the Strait of Hormuz will \"never return\" to its pre-war status under an Iran-Oman understanding. Security chief Mohsen Rezaei told Al Mayadeen, per Tasnim, that \"even the smallest amount\" of enriched material will not leave Iran and that ending the war in Lebanon is a fundamental condition. Iran International, citing the Wall Street Journal, reported that Trump privately questions the June memorandum and that JD Vance is weighing direct talks with Rezaei. The IRGC Navy, via Tasnim, said two more tankers struck mines and were left burning. UKMTO reported a tanker hit by an unidentified projectile off Oman, crew safe, and ADNOC L&S said one of its vessels was damaged in an attack in UAE waters. Rezaei threatened US bases \"in European countries,\" and deputy armed forces chief Keyoumars Heydari said Iran's response has \"no geographical limitations.\" In Israel, Gadi Eisenkot urged caretaker Prime Minister Benjamin Netanyahu to refrain from \"dangerous moves that can wait,\" amid Channel 12 reports of a renewed dispute with the army chief over Iran; the Prime Minister's Office called the letter \"an irresponsible move.\" The Houthis claimed strikes on Riyadh's airport and a Yanbu pumping station; the coalition said it intercepted three cruise missiles. Brent rose to about $92.5 while hormuz.now counted 2.4 tanker crossings a day against 47.6 before the war. Direction stays mixed; the probability holds at 13.",
  implications: [
    {
      title: "Ghalibaf says the ball is in Washington's court; Washington argues over the last deal",
      body:
        "Under the multi-clock framework, the negotiation-capacity clock now runs on a reply rather than a meeting. Ghalibaf's account to Al Jazeera is the first Iranian confirmation this cycle that a response travelled through Qatar, which partly corroborates Al Hashmi's progress claim, but it confirms process, not terms. He said Iran's demands, including lifting the blockade and sanctions, releasing frozen funds and halting fighting on all fronts, must be implemented before negotiations begin. Rezaei added that no enriched material will leave Iran and that Lebanon is a fundamental condition, which forecloses the dilution idea aired on state television and restates the sequencing wall and the Lebanon gap in their hardest form. The Wall Street Journal report relayed by Iran International cuts both ways: Trump reportedly sees the June memorandum as a costly mistake, yet Vance is said to be weighing direct talks with Rezaei. Both rest on unnamed officials, and no US statement answered Ghalibaf. His claim that US officials asked Putin to mediate is single-source and would revive the Moscow-as-venue prior if confirmed. The G7 backs regional mediators but rejects any Hormuz toll, which collides with Ghalibaf's \"never return.\" The probability holds at 13: a pending reply is movement, but each side's precondition is the other's endpoint, and Qatar's reported window to about 24 November has 12 days left.",
    },
    {
      title: "The sea war reaches UAE waters as Tehran widens its target set and Israel's transition becomes a security question",
      body:
        "The energy-infrastructure clock worsened. Three accounts cover 10-11 November. The IRGC Navy and the regular Navy, via Tasnim, claim more tankers hit mines in a restricted zone east of the strait; UKMTO reported a tanker struck by an unidentified projectile about 19 nautical miles northeast of Limah, Oman; and ADNOC L&S said a vessel was damaged in an attack in UAE territorial waters. gCaptain says it is unclear whether these overlap. Tehran says mines, UKMTO says a projectile, and no hull is named, so the hull-named-by-the-third-party prior holds. An attack inside UAE waters, if Iranian, would end the 64-day run without a confirmed Iranian attack on a host state's territory; it is unattributed, so the count continues with a flag. Chatham House argued on 9 November that Iran may reignite the conflict to break the blockade; this cycle's attacks fit that reading without proving it. The declared-scope prior widened: Rezaei named US bases in Europe, Heydari described an expanded target list with \"no geographical limitations,\" and Treasury confirmed Bessent moved to a military base over Iranian threats. The Israel's-independence prior took a new form. Eisenkot's letter, sent amid Channel 12 reports that army chief Eyal Zamir again opposed action Netanyahu wanted against Iran, makes the caretaker period itself a risk vector; the PMO says every decision was coordinated with the security establishment. Spillover stays proxy-led: the Houthis claim Riyadh's airport and a Yanbu pumping station, against a coalition interception claim.",
    },
    {
      title: "Taiwan: no fresh Taiwan-specific development; crossings slip to 2.4 a day as Brent bounces to $92.5",
      body:
        "No fresh Taiwan-specific development was located, and prior assessments are unchanged. Price followed the sea war rather than the talks this cycle: Trading Economics shows Brent at about $92.5, up roughly 1.2% on Wednesday, bouncing from a 10-week low and trimming an intraday high near $94.6, citing Iranian denials that negotiations are under way. Volume fell again. hormuz.now counted 17 tanker crossings in seven days to 11 November, 2.4 a day against 47.6 before the crisis and down from 2.6, with no LNG or LPG carrier in seven days and one in 30; PortWatch still puts tanker tonnage at 0.1% of normal. For Taipower's gas-heavy fleet the binding variable remains Qatari LNG, and two facts bear on it. An attack in UAE territorial waters, if confirmed, means the Gulf side of the strait is no longer a safe staging area, raising insurance costs for the first cargoes after any deal; gCaptain counted about 162 ships at anchor off Fujairah and Khor Fakkan as of 8 November. And Ghalibaf's \"never return,\" with an Iran-Oman oversight understanding, points to a permanent permit regime the G7 rejects; under the toll-institutionalization prior, even a deal could leave LNG transits priced and conditional. Qatar's Al Misnad told the Paris Peace Forum the disruption reaches fuel, fertilisers and household budgets. Late November, when the reported window and QatarEnergy's force majeure converge, remains the date to watch. The Taipower and CPC supplementary budget remains unpassed as far as this file knows.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. No US casualty reported this cycle; the 11/12 split and Hegseth's 18 Epic Fury dead stay held apart from the 15/8 series.",
    israel:
      "No addition on the war series and no IDF casualty located this cycle; no Lebanese toll located for the reported southern strikes.",
    iran:
      "No new official war toll. Execution series carry unchanged and unmerged. The host-state count is flagged for the unattributed ADNOC attack.",
    other:
      "No adopted change. Crew safe off Limah per UKMTO; no casualties reported for the ADNOC vessel or the claimed mine strikes. IMO, Houthi and TASS-cited Saudi figures are held apart.",
  },
};

export default data;
