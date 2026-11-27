import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Escalating. CENTCOM disabled a blockade runner leaving Bandar Abbas, Trump says an extra carrier has been sent, and the IRGC claims a mined tanker and two retaken ships; Kuwait holds Iran fully responsible for the deaths of two Italians.",
      risk7d:
        "Extreme. Trump says victory will come whenever he wants and names Pickaxe Mountain as a target, while Eisenkot's eight-day push for a government gives a date to the reported wait for an Israeli coalition.",
      spillover:
        "Critical and unchanged. The Mecca alliance pledges to intensify Saudi Arabia's defence against the Houthis, Iraq closes more crossings with Iran under US pressure, and Kuwait's protest note invokes Article 51.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: "CENTCOM via Iran International; CBS News live; UKMTO via Iran International liveblog",
      event: "US aircraft disables the Pacific Archer after it leaves Bandar Abbas",
      summary:
        "CENTCOM said a US aircraft struck the stern of the Palau-flagged bulk carrier Pacific Archer in the Gulf of Oman on Thursday, disabling its propulsion after it ignored repeated warnings; the civilian crew was unharmed. It is the sixth vessel disabled since July, with 158 diverted. UKMTO reported an unspecified incident between a cargo ship and military forces in the Gulf of Oman the same day.",
      impact:
        "The first enforcement strike since Iran vowed to break the blockade.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: "Donald Trump via Iran International",
      event: "Trump says an extra carrier has been sent and names Pickaxe Mountain",
      summary:
        "Speaking to service members from Mar-a-Lago on Thanksgiving, Trump said the US had sent an extra aircraft carrier, that victory would happen whenever he wanted, and that Pickaxe Mountain near Natanz would be targeted if action resumed. He said he did not think Iran would make a deal, called Israeli regime change probably doable but not his goal, and said NATO was involved.",
      impact:
        "Statements of intent harden; no carrier or decision was announced.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'medium',
      source: "IRGC Navy via Tasnim; Iran International liveblog; Al Jazeera live",
      event: "IRGC claims a tanker hit a mine north of Ghanam Island",
      summary:
        "The IRGC Navy said a tanker using an unauthorized route north of Ghanam Island struck a mine and exploded early Friday and an accompanying tanker turned back, citing a sharp fall in such attempts as proof of full control. Iran International later relayed state-media claims of one tanker mined at the entrance to Khasab and another on fire in the eastern strait. No vessel was named.",
      impact:
        "Mine claims continue without a single named or confirmed hull.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: "Shahram Irani via Shafaq News, Tasnim and Iran International liveblog",
      event: "Navy chief claims commandos retook two tankers seized by US forces",
      summary:
        "Navy commander Shahram Irani said Iranian commandos retook two Iranian oil tankers that US forces had seized, without saying when or where. He said the US had not got a single ship through Hormuz, that the navy would deliver a final response beyond the Persian Gulf, and, via Tasnim, that a missile hit the USS Abraham Lincoln on the war's first day.",
      impact:
        "Unverifiable naval claims raise Tehran's public stakes.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: "Mohammad Mokhber and Abbas Araghchi via Iran International; Araghchi via Tasnim",
      event: "Tehran keeps Hormuz shut and says the blockade must be broken",
      summary:
        "Mohammad Mokhber, an adviser to the Supreme Leader, said the Strait of Hormuz will stay shut and Iran will not let the US blockade remain. Araghchi said the blockade must be broken while Iran pursues both oil exports and negotiations, and told an interviewer, via Tasnim, that Iran is fully prepared to defend itself and open to diplomacy if its demands are met.",
      impact:
        "Reopening stays conditional; breaking the blockade is stated policy.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'high',
      source: "Kuwait MOFA (QNA) via The Peninsula; Abbas Araghchi via Tasnim; Iran International liveblog",
      event: "Kuwait summons Iran's ambassador over the deadly drone attack",
      summary:
        "Kuwait's Foreign Ministry summoned Ambassador Mohammad Toutounchi and handed him a protest note holding Iran fully responsible for the attack that killed two Italians, citing UNSCR 2817 and Article 51. Qatar's deputy emir also blamed Iran and Canada condemned the strikes. Araghchi called the incident suspicious and a precooked recipe for war, and offered to help investigate.",
      impact:
        "Attribution hardens in the Gulf while Iran's denial stands.",
    },
    {
      id: 7,
      direction: 'mixed',
      importance: 'medium',
      source: "Ishaq Dar via TASS; Hakan Fidan via Iran International liveblog; Al Jazeera live; Qatar MOFA via The Peninsula",
      event: "Mecca alliance pledges to intensify defence of Saudi Arabia",
      summary:
        "Pakistan, Saudi Arabia and Turkey met in Islamabad under the Mecca alliance. Pakistan's Ishaq Dar said they condemned persistent and heinous Houthi attacks on the kingdom and resolved to intensify support under the pact's collective-defence provisions. Turkey's Hakan Fidan said the meeting discussed prospects for a positive outcome in US-Iran talks. Qatar condemned the Jazan refinery attack.",
      impact:
        "The Saudi-Houthi front acquires a formal three-state defence frame.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'medium',
      source: "Times of Israel",
      event: "Eisenkot vows a government within eight days",
      summary:
        "Gadi Eisenkot said he will form a government within the eight days left on his mandate, which expires on 6 December, and accused Likud of stalling unity talks. His bloc has 36 signed seats, 48 with Bennett, and needs UTJ or Ra'am to reach 61. Netanyahu is reportedly ready to offer Eisenkot the first turn in a rotation.",
      impact:
        "The reported US wait for an Israeli government now has a date.",
    },
    {
      id: 9,
      direction: 'mixed',
      importance: 'medium',
      source: "Iran International; Donald Trump via Shafaq News",
      event: "Iraq closes more crossings with Iran; Trump backs al-Zaidi",
      summary:
        "Iraq closed the Sheikh Saleh crossing, stranding about 300 trucks, and its border forces shut Bashta and al-Waleed, as Washington's Task Force Iron Gate presses neighbours to seal land routes. On Truth Social, Trump backed Prime Minister Ali al-Zaidi's drive against oil smuggling and his push to bring all weapons under the exclusive control of the state.",
      impact:
        "US pressure shifts to Iran's land routes through Iraq.",
    },
    {
      id: 10,
      direction: 'mixed',
      importance: 'low',
      source: "Georgy Borisenko via Shafaq News",
      event: "Russia says Iraq, Iran and Gulf states will discuss its security plan",
      summary:
        "Russian Deputy Foreign Minister Georgy Borisenko said Iraq, Iran and the Arab Gulf states are willing to discuss Moscow's updated Gulf collective-security proposal, first presented in May. It calls for regional states to take primary responsibility for their own security and for freedom of navigation through Hormuz. No Gulf government statement confirming the readiness was located.",
      impact:
        "Moscow positions itself as a further mediator without movement.",
    },
    {
      id: 11,
      direction: 'mixed',
      importance: 'low',
      source: "Union of Truck Drivers via Iran International liveblog and Shabtab News; HRANA and IHRNGO via Shabtab News",
      event: "Truckers' strike reaches a sixth day; Abdanan arrests rise to 22",
      summary:
        "The truckers' union said its strike over fuel shortages and freight rates reached a sixth day in 20 cities; the government blames the fuel shortage on the blockade. HRANA reported at least 22 people detained in Abdanan after protests over a bus crash that killed 13 workers, and five Ilam outlets were shut. Iran Human Rights urged Mehdi Mahmoudian's release.",
      impact:
        "The blockade's domestic cost grows alongside repression.",
    },
    {
      id: 12,
      direction: 'mixed',
      importance: 'medium',
      source: "Trading Economics; hormuz.now; Kpler via CBS News live",
      event: "Brent falls toward $94 as AIS crossings slip to 1.7 a day",
      summary:
        "Trading Economics quotes Brent at $94.00, down 2.5% on Friday but up less than 2% on the week, its first weekly gain in November, ahead of Sunday's OPEC+ meeting. hormuz.now counts 12 tanker crossings in seven days against a 47.6-a-day baseline and one LNG carrier in seven days. Kpler, via CBS, shows weekly transits falling from 217 to 147.",
      impact:
        "Crude eases while measured strait traffic falls further.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split and Hegseth's 18 Epic Fury dead are held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. CENTCOM's Pacific Archer statement reports no US casualties and no Pentagon update was located. The fifty-eighth cycle with no disclosure statement.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: "+0",
      status:
        "No addition on the war series. No Israeli casualty and no IDF strike report from Lebanon were located this cycle.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: "+0 official",
      status:
        "No new official war toll. Iran's mine and tanker claims report no casualties; Mousavi's nearly 7,200 and Darzi's 5,000-plus stay held apart.",
    },
    other: {
      cumulative: "KIA: 3,719+ · WIA: 11,218+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. CENTCOM says the Pacific Archer's crew was unharmed, and no new death in Kuwait, Saudi Arabia, Iraq or at sea was located.",
    },
  },
  exec:
    "Washington tightened the blockade as Tehran raised its claims at sea. CENTCOM says a US aircraft disabled the Palau-flagged bulk carrier Pacific Archer in the Gulf of Oman on Thursday after it left Bandar Abbas and ignored repeated warnings, crew unharmed; it is the sixth ship disabled since July and the first since Iranian officials vowed to break the blockade. Speaking to troops on Thanksgiving, Donald Trump said the US had sent \"an extra aircraft carrier,\" that victory \"will happen whenever I want it to happen,\" and that Pickaxe Mountain would be a target if strikes resume; he does not think Iran will make a deal. Iran answered with claims that cannot be checked. The IRGC Navy says a tanker on an \"unauthorized route\" north of Ghanam Island struck a mine early Friday and a second turned back; navy commander Shahram Irani says commandos retook two Iranian tankers seized by US forces, naming none. Supreme Leader adviser Mohammad Mokhber says Hormuz stays shut. Kuwait summoned Iran's ambassador and holds Tehran \"fully responsible\" for the drone attack that killed two Italians; Qatar's deputy emir also blamed Iran, while Abbas Araghchi called the incident \"a precooked recipe for war.\" In Islamabad, Pakistan, Saudi Arabia and Turkey pledged to intensify support for the kingdom against Houthi attacks. In Israel, Gadi Eisenkot vowed to form a government within eight days. Iraq closed more crossings with Iran under US pressure. Brent fell 2.5% to about $94; hormuz.now counts 1.7 tanker crossings a day against 47.6 pre-crisis. No new casualties were adopted. Direction stays escalating; the probability holds at 5.",
  implications: [
    {
      title: "The blockade hardens as Iran's sea claims outrun the evidence",
      body:
        "Under the multi-clock framework, the energy-infrastructure and active-deadline clocks moved most. CENTCOM's disabling of the Pacific Archer after it left Bandar Abbas is the first enforcement strike since Mokhber, Araghchi and Mohsen Rezaei publicly committed Iran to breaking the blockade; CENTCOM counts six ships disabled and 158 diverted since July. Iran replied with claims, not confirmed hulls. The IRGC Navy says a tanker on an unauthorized route north of Ghanam Island hit a mine early Friday; Irani says commandos retook two Iranian tankers seized by US forces, and Tasnim carries his claim that a missile hit the USS Abraham Lincoln on the war's first day. None names a vessel or is corroborated; UKMTO's only fresh report is an unspecified incident between a cargo ship and military forces in the Gulf of Oman on Thursday, consistent with the Pacific Archer strike. The mines-as-enforcement and claim-inflation priors hold, and the blockade-as-trigger prior tightens: Tehran has made breaking the blockade declared policy while striking truckers, now in about 20 cities, protest fuel shortages the government itself blames on it. Irani's claim that the US got not one ship through Hormuz and JMIC's count of 128 US-facilitated passages between 22 and 25 November, via Shafaq, cannot both be true; hormuz.now's AIS count of 1.7 tanker crossings a day fits neither.",
    },
    {
      title: "Trump's carrier and Eisenkot's eight days frame the decision window",
      body:
        "The active-deadline and political-will clocks now run together. Trump told troops the US had sent an extra carrier, said victory would come \"whenever I want it to happen,\" named Pickaxe Mountain as a target if action resumes and said he did not think Iran would deal. These are statements of intent, not a decision: no carrier was named and no Pentagon announcement was located. They sit beside Thursday's i24NEWS report that he leans toward waiting for an Israeli government, and that marker now has a date. Eisenkot says he will form a government within the eight days left on his mandate, which expires 6 December; his bloc has 36 signed seats, 48 with Bennett, and needs UTJ or Ra'am for 61, while Netanyahu is reportedly ready to offer him the first turn in a rotation. The coalition-clock prior strengthens; the caretaker-risk prior holds until a swearing-in. On negotiation capacity, Araghchi said, via Tasnim, that Iran is \"fully prepared\" to defend itself and open to diplomacy if its demands are met, and called the Kuwait deaths \"a precooked recipe for war\"; Kuwait summoned Iran's ambassador and holds Tehran fully responsible. The deniable-host-strikes prior holds. The Mecca alliance's Islamabad meeting pledged to intensify Saudi Arabia's defence and, per Fidan, discussed US-Iran talks; Russia's Georgy Borisenko says Iraq, Iran and the Gulf states are open to Moscow's Gulf-security proposal. Mediators multiply, but none has moved the terms. The probability holds at 5.",
    },
    {
      title: "Taiwan: crude eases to $94 as Hormuz crossings fall to 1.7 a day",
      body:
        "No fresh Taiwan-specific development today; prior assessments hold. Trading Economics quotes Brent at $94.00, down 2.5% on Friday but up less than 2% on the week, its first weekly gain this month, with the monthly loss near 16%; it cites the Jazan and Ras Tanura attacks and tanker incidents near Hormuz, against strait traffic that \"has held up,\" as traders await Sunday's OPEC+ meeting, which may keep quotas through January. hormuz.now counts 12 AIS-visible tanker crossings in seven days, 1.7 a day against 47.6 pre-crisis and down from 2.4 a day yesterday, one LNG carrier in seven days and two in 30, and Ras Laffan calls at 29% of normal to 20 November. The oil-priced-as-surplus versus gas-shut prior holds: crude reads US-facilitated passages and an IEA surplus, while LNG through the strait is close to zero and QatarEnergy's force majeure runs to end-December. For Taipower and CPC the exposure remains winter LNG, not crude. Trump's extra carrier and a decision window tied to Israeli coalition timing fall across January and February cargo planning. Markers: crossings against 1.7 a day, OPEC+ on 29 November, Ras Laffan calls, Eisenkot's 6 December deadline and the unpassed supplementary budget.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. No US casualty reported this cycle; the 11/12 split and Hegseth's 18 Epic Fury dead stay held apart from the 15/8 series.",
    israel:
      "No addition on the war series and no IDF casualty located this cycle; no Lebanese toll was located.",
    iran:
      "No new official war toll. Mousavi's nearly 7,200 dead (623 children), a Red Crescent child count of 428 and Darzi's 5,000-plus claim are held apart. HRANA's execution series (at least 2,003 to 8 October) carries unmerged; the 13 workers killed in the Abdanan-area bus crash are not war deaths and are not counted.",
    other:
      "No change. The Pacific Archer's civilian crew was unharmed, per CENTCOM. The Jazan refinery death and the Saudi-Houthi series stay held apart.",
  },
};

export default data;
