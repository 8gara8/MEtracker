import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Mixed and unchanged. The first known US strikes since early September hit Qeshm Island, and both capitals kept them inside the talks: Washington called them limited and defensive, and Tehran said it is still at war while exchanges continue through Qatar. Doha says it is working toward an interim agreement, and a draft is reported circulating but unpublished.",
      risk7d:
        "Extreme and unchanged. The midterms have passed and Trump answered no when asked about a post-vote strike, but he also said US forces could hit Pickaxe in one hour, and Axios reports Hegseth and Netanyahu back renewed strikes. The mediators' 36-hour feedback window is the next dated test.",
      spillover:
        "Critical and unchanged. An Indian seafarer was killed off Oman, a tanker was hit in the northern Gulf off Ras Al Khafji, the Guard claims three more tankers mined, and Houthi claims against Dammam and Jizan have Riyadh schools moving online.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'pivotal',
      source: "A US official via the Associated Press (ABC7 Chicago), Fox News and Al Jazeera, with IRNA and Fars via Al Jazeera",
      event: "The United States strikes Qeshm Island and calls it limited and defensive",
      summary:
        "On the eve of the midterms, a US official said American forces carried out limited, defensive strikes on Iranian targets in the Strait of Hormuz, aimed at Iranians using surface-to-air missiles against US assets, after the Revolutionary Guard fired on a US aircraft. IRNA reported five successive explosions on Qeshm. Officials said it was not a return to major strikes; the Pentagon referred questions to CENTCOM, which did not respond.",
      impact:
        "The first known US kinetic action since early September, scoped so that neither side must treat it as the end of the talks. No damage or casualty figure from either side.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: "The IRGC via Al Jazeera; Kazem Gharibabadi, Mohammad Baqer Qalibaf and Ali Abdollahi via Tehran Times",
      event: "Tehran answers in words: still in a state of war, an unpredictable response, and a five-point doctrine for Hormuz",
      summary:
        "The Revolutionary Guard claimed it destroyed an MQ-9 and captured two US drones by electronic warfare. Deputy Foreign Minister Kazem Gharibabadi said Iran is still in a state of war and keeps the right of self-defence. Speaker Qalibaf promised an unpredictable response without geographic limits. Armed forces chief Abdollahi set five principles, including recognition of Iranian sovereignty over Hormuz.",
      impact:
        "No located retaliation, only statements. Abdollahi's Hormuz mechanism turns the toll-institutionalisation prior into stated doctrine. The drone claims have no US confirmation.",
    },
    {
      id: 3,
      direction: 'de-escalating',
      importance: 'pivotal',
      source: "Majed Al Ansari, Qatar Ministry of Foreign Affairs, via The Peninsula; Reuters via CBS News; Fox News",
      event: "Qatar says it is seeking an interim US-Iran agreement, and that bridging the gap is still a work in progress",
      summary:
        "Foreign ministry spokesman Majed Al Ansari said both sides are reviewing mediators' proposals, that a Qatari delegation's meeting in Tehran ran more than three hours against a one-hour schedule, and that no breakthrough can be announced. Reuters, via CBS, said mediators expect feedback within 36 hours; a Qatari proposal reportedly calls for three days of confidence-building measures before direct talks.",
      impact:
        "The mediator names a destination, an interim deal in phases, and a 36-hour clock. Still no published text, no named signatory and no session the United States attends.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: "Donald Trump on Truth Social and Fox News, JD Vance, and Axios, via Al Jazeera, Fox News and CBS News",
      event: "Trump says a settlement could happen and that he will not strike after the midterms, while calling it a very soft war",
      summary:
        "Trump wrote that Iran wants a settlement as soon as possible and it could happen, and answered no when asked whether he would strike after Tuesday's vote. He also said US forces could hit the Pickaxe site in one hour. Vance said some progress has been made and no deadlines are set. Axios reported Hegseth and Netanyahu back renewed strikes.",
      impact:
        "The one-day-permit prior governs the no. Ten minutes became one hour for Pickaxe. The reported Hegseth position extends the inverted-restraint report to a second principal, still anonymously sourced.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: "Esmaeil Baqaei via Tehran Times; Mohsen Rezaei via CBS News; Masoud Pezeshkian via Al Jazeera",
      event: "Baqaei says the ball is in America's court but rules out sending enriched uranium abroad, and Rezaei calls the US response not convincing",
      summary:
        "Spokesman Esmaeil Baqaei said Iran will not agree to transfer its enriched uranium abroad, called NPT withdrawal a legitimate subject of debate while Iran remains a party, and said Hormuz cannot reopen under blockade. Mohsen Rezaei called the American response not convincing. Pezeshkian said the supreme leader has given the government certain authorities over the talks.",
      impact:
        "Delegated authority helps negotiating capacity, but the refusal to ship the stockpile abroad narrows the nuclear formulas. The NPT line joins the doctrine debate, ungraded.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'high',
      source: "CBS News; UKMTO and JMIC via gCaptain; the IRGC Navy via Mehr and Tehran Times",
      event: "An Indian seafarer is killed off Oman, two more ships are hit, and the Guard claims three tankers mined",
      summary:
        "CBS reported that the MSV Al Jusufi was struck off Oman on 3 November, killing Indian seafarer Gandhar Nahim Ajij, with 13 crew rescued. gCaptain listed UKMTO Warning 191-26 and a tanker hit 72 nautical miles east of Ras Al Khafji. The IRGC Navy claimed three tankers exploded on the unauthorised route, naming none.",
      impact:
        "The hull-named-by-the-third-party prior holds: the named ship came from the press, not the claimant. A northern-Gulf strike widens the geography. One death adopted.",
    },
    {
      id: 7,
      direction: 'neutral',
      importance: 'high',
      source: "CBS News, Oilprice.com, Trading Economics, Windward, and JMIC via gCaptain",
      event: "Brent falls about 7% on a reported draft while Hormuz counts seven crossings",
      summary:
        "CBS said Brent fell 7.4% on 2 November to $105.03; Oilprice.com had $108.61 intraday; Trading Economics put it near $104.5 on Tuesday. Reuters reported a draft proposal circulating. Windward counted seven Hormuz crossings on 2 November, and the JMIC, via gCaptain, kept the threat level at severe with about 490 vessels waiting outside the strait.",
      impact:
        "Diplomacy priced, not supply: the premium fell on a draft while the transit count stayed near single digits. Trump's largest-drop-in-history claim is logged as a claim.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'medium',
      source: "Houthi statements via CBS News; the Saudi-led coalition via Fox News; the Associated Press via ABC7 Chicago",
      event: "Houthi claims on Dammam and Jizan, Riyadh schools go remote, and the Asian Cup moves",
      summary:
        "CBS reported Houthi claims of drone strikes on Dammam airport and a Jizan radar site, and a Houthi claim of 109 Saudi airstrikes in 24 hours, both unverified. Fox reported the coalition downed two drones near Riyadh and Riyadh schools moved online. Khalid bin Salman discussed the Houthi attacks with Hegseth. The 2027 Asian Cup was postponed to 23 December.",
      impact:
        "Claims are not adopted and Riyadh published no damage figure. The civil measures are the institutions-price-it-first signal: schools and a tournament moved.",
    },
    {
      id: 9,
      direction: 'mixed',
      importance: 'medium',
      source: "Kan via AJN and Newscord; Fox News",
      event: "Israel reportedly asks Beirut to put troops at Hezbollah checkpoints, and Liberman backs Eisenkot before today's certification",
      summary:
        "Kan, as relayed by AJN and Newscord, reported Israel asked Lebanon through US mediators to deploy troops to checkpoints in Hezbollah areas to keep the group out of a renewed Iran war; Beirut has not responded publicly. Fox reported Avigdor Liberman endorsed Gadi Eisenkot and ruled out an Arab-backed minority government. Certified results are due to Herzog on 4 November.",
      impact:
        "The Lebanon gap is being managed in advance of a strike, by a third-hand account. The opposition's 67 cannot form without the Arab lists Liberman rules out.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split is held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. No US casualty reported in the Qeshm exchange; the Pentagon referred questions to CENTCOM, which did not respond. The thirty-fifth cycle with no disclosure statement.",
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
        "No new official war toll, and no casualties reported from the Qeshm strikes by IRNA or US officials. The execution series carry unchanged and unmerged. The fifty-sixth day with no confirmed Iranian attack on a host state's territory.",
    },
    other: {
      cumulative: "KIA: 3,715+ · WIA: 11,203+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+1 killed, +0 wounded",
      status:
        "One adopted: Indian seafarer Gandhar Nahim Ajij, killed aboard the MSV Al Jusufi off Oman, named by CBS from a single source. The IRGC three-tanker claim and the Houthi claim of 109 Saudi airstrikes carry no figure.",
    },
  },
  exec:
    "The United States struck Iran for the first time since early September, by the Associated Press's count, and insisted it was not a return to war. On the eve of the midterms, US officials described limited, defensive strikes on Qeshm Island in the Strait of Hormuz against Iranians using surface-to-air missiles against American assets, after the Revolutionary Guard fired on a US aircraft. IRNA reported five explosions, the Guard claimed an MQ-9 destroyed and two drones captured, and no casualties were reported. Tehran answered in words: Deputy Foreign Minister Kazem Gharibabadi said Iran is still in a state of war, and Speaker Mohammad Baqer Qalibaf promised an unpredictable response. The deal track moved the other way. Qatar's Majed Al Ansari said Doha is seeking an interim US-Iran agreement, that a Qatari delegation spent more than three hours in Tehran, and that bridging the gap is still a work in progress. Donald Trump wrote that Iran wants a settlement as soon as possible and it could happen; JD Vance said some progress has been made. Esmaeil Baqaei said the ball is in America's court but rejected sending enriched uranium abroad. Brent fell 7.4% to $105.03 on Monday per CBS and traded near $104.5 on Tuesday per Trading Economics. At sea, an Indian seafarer was killed when the MSV Al Jusufi was struck off Oman, the Guard claimed three more tankers mined, and Windward counted seven Hormuz crossings on 2 November. The midterm result and Israel's certification to President Herzog were not located at research time. Direction stays mixed; the probability holds at 9.",
  implications: [
    {
      title: "A defensive strike and an interim deal in the same night",
      body:
        "Under the multi-clock framework, the negotiation-capacity clock improves slightly and the active-deadline clock stays critical. Washington scoped the Qeshm strikes as narrowly as it could: limited, defensive, aimed at surface-to-air missile crews, and kept quiet, per the Wall Street Journal as relayed by Al Jazeera, to avoid signalling a return to major combat. The Pentagon referred questions to CENTCOM, which did not respond. That fits the bounded-denial pattern this file tracks: an act framed so that neither side has to call it the end of the talks. Tehran went along with it. Gharibabadi said Iran is still at war and keeps the right of self-defence, but in the same remarks said exchanges continue through Qatar on the basis of Iran's proposal and that responses have been received. Al Ansari described an interim agreement, a phased process, and a Tehran meeting that ran three hours against a one-hour schedule, while warning against reading it as a breakthrough. Reuters, via CBS, has the mediators expecting feedback within 36 hours. Against that, Rezaei called the American response not convincing, and Baqaei ruled out shipping enriched uranium abroad, which removes one of the standard formulas for the stockpile. Trump's no to a post-midterm strike is a one-day permit under this file's rules, and it sits beside Axios reporting that Hegseth and Netanyahu back renewed strikes. The probability holds at 9. A draft is reported to be circulating, but no text has been published, no signatory named and no session convened that the United States attends. The 36-hour feedback window is the dated test.",
    },
    {
      title: "The strait: fewer ships, more claims, and a death",
      body:
        "The energy-infrastructure clock stays critical even as the price fell. Brent's 7.4% drop to $105.03 on Monday, per CBS, was priced on a reported draft and a presidential post, not on barrels moved. Windward counted seven crossings on 2 November and eight the day before, and the JMIC, via gCaptain, kept the threat level at severe with about 490 vessels waiting outside. That is the diplomacy-priced-not-supply pattern again. The attack series widened. A tanker was hit 72 nautical miles east of Ras Al Khafji in the northern Gulf, a vessel was holed nine miles off Oman, another tanker's engine room was damaged, and the MSV Al Jusufi was struck, killing one Indian seafarer. The IRGC Navy, via Mehr and Tehran Times, claims three more tankers exploded on the unauthorised route but gives no names, flags or casualty figures, and state television claims eleven fires in nine days. Neither claim is adopted. Abdollahi's five principles, which include recognition of Iranian sovereignty over Hormuz and a Hormuz mechanism to replace the American security umbrella, turn the toll-institutionalisation prior into stated doctrine. Qatar condemned the Al Mayeda attack while hosting the talks, so the mediator is also a victim. In the Saudi theatre, Houthi claims against Dammam airport and a Jizan radar, Riyadh schools moving online and the Asian Cup's postponement show the war is now priced in civil life, not only in crude.",
    },
    {
      title: "Taiwan: no fresh Taiwan-relevant development located; prior assessments unchanged",
      body:
        "No fresh Taiwan-relevant development was located this cycle, and prior assessments are unchanged; the supplementary budget for Taipower and CPC remains unpassed as far as this file knows. Two adjacent facts matter for the energy-security clock. First, price: Brent near $104 to $105 is roughly $13 below the near-$118 carried at the end of October and below Trading Economics' $111 for 1 November. That eases the fuel-cost overshoot on the state utilities' balance sheets for as long as the diplomacy holds, but Monday's fall was a risk-premium move that one strike could reverse. Second, LNG: the attack on the Al Mayeda, a Qatari carrier, condemned by Doha, is the sharper signal for an importer that depends on Qatari cargoes. It shows LNG carriers on the target list during a mediation that Qatar itself is running.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. No US casualty reported in the Qeshm exchange; the 11/12 split stays held apart from the 15/8 series.",
    israel:
      "No addition on the war series and no IDF casualty located this cycle.",
    iran:
      "No new official war toll; no casualties reported from Qeshm. The execution series carry unchanged and unmerged.",
    other:
      "+1 adopted: the Indian seafarer killed aboard the MSV Al Jusufi, a single named CBS report.",
  },
};

export default data;
