import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Mixed and unchanged. The strike track gained a reported motive for Netanyahu, an emergency government after losing his majority, and Trump's own rally language. The deal track lost its venue but not its mediator: Iran's delegation left Doha, a spokesman set the blockade as the price of any final settlement, and more talks are reported planned this week.",
      risk7d:
        "Extreme and unchanged, with the midterms the reported strike planning is keyed to falling today. Trump says Washington will not attack before the vote and that the war ends very soon one way or the other. Rubio says no decision has been made. Six called-off strikes since July remains the base rate.",
      spillover:
        "Critical and unchanged. UKMTO reported another vessel struck by an unknown projectile in Hormuz, a Pakistan-bound Qatari LNG carrier was hit, and Khamenei ordered a response to any attack with no geographical restriction, while Gulf officials warned of the worst.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: "The Associated Press, citing two regional officials and a third source, via 1News",
      event: "AP reports Netanyahu wants a post-midterm strike wave, and that renewed war could help him form an emergency government",
      summary:
        "AP reported that Netanyahu wants another wave of strikes on Iran after the American midterms, is working with senior US officials on a quick but extensive air campaign, and pressed the case on a weekend call with Trump, who would not commit. AP adds that renewed war could help him form an emergency government after he and his allies lost their parliamentary majority. Neither government commented on the substance.",
      impact:
        "Axios gave the pressure; AP supplies a stated motive. The institution-against-principal prior now carries a domestic incentive on the Israeli side. Anonymous sourcing and no decision.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: "Donald Trump at an Iowa rally and to Right Side Broadcasting, via CBS News and Radio Free Europe/Radio Liberty",
      event: "Trump says the hammer will come at some point, the war ends very soon one way or the other, and no strike before the vote",
      summary:
        "Trump said at an Iowa rally on Sunday that at some point we're going to have to give them the hammer, told Right Side Broadcasting the war will end very soon one way or the other, and called his Saturday call with Netanyahu very good. He said one or two Iranian sites remain, including Pickaxe Mountain, and Washington would not attack before the election.",
      impact:
        "A principal now pairs a threat with a no-strike-before-the-vote pledge, which dates the next decision point to this week without making it a decision. Planning is not approval.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'pivotal',
      source: "Esmaeil Baqaei and an Iranian official, via Radio Free Europe/Radio Liberty, with AP via 1News",
      event: "Iran's delegation leaves Doha, and Baqaei sets the blockade as the price of a final settlement",
      summary:
        "Iran's delegation left Doha on 1 November; an official said this was not due to a breakdown. Spokesman Esmaeil Baqaei said Iran would reach no final settlement unless the American blockade of its ports is lifted. AP described the framework as Iran halting attacks in Hormuz for the lifting of the blockade, with more Qatari-mediated talks planned this week. Rezaei acknowledged Vance's letter and said he has not replied.",
      impact:
        "The mediator-without-a-track prior holds. The formula now has a stated price and a reported schedule, but still no text, no signatory and no American confirmation of Rezaei's seven conditions.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: "Mojtaba Khamenei and Major-General Ali Abdollahi via CBS News and Radio Free Europe/Radio Liberty, with AP via 1News",
      event: "Khamenei orders an immediate response to any attack with no geographical restriction, and Tehran labels MI6 hostile",
      summary:
        "A statement attributed to Mojtaba Khamenei directed forces to respond to any attack immediately, effectively and with no geographical restriction; AP says he urged expanding the target list and has not been seen publicly since 28 February. Armed forces chief Abdollahi said Iran would not wait for signs of enemy action, and a spokesman said a new war could last longer. Iran designated MI6 hostile and the Royal Navy and RAF terrorist organisations.",
      impact:
        "The deterrence signal is explicit and unlimited in geography, which sharpens the Gulf spillover clock. The statement is attributed, not seen, and no primary Persian text is in hand.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "UKMTO, Qatar News Agency, Bloomberg and CENTCOM, via CBS News and Radio Free Europe/Radio Liberty",
      event: "A vessel is struck by an unknown projectile, the Al Mayeda is hit after a reported Iranian green light, and CENTCOM counts over twenty dead",
      summary:
        "UKMTO said a vessel was struck by an unknown projectile in Hormuz on Sunday. Qatar said its LNG carrier Al Mayeda was attacked with unidentified objects, with no crew injured; Bloomberg reported the Pakistan-bound ship had reportedly received an Iranian green light hours earlier, and Doha News dated the strike 30 October. CENTCOM said Iran's attacks on shipping had killed more than twenty people, unverified.",
      impact:
        "A hull is named by the flag state this time, and the permission claim, if true, makes transit clearance itself a contested instrument. The CENTCOM casualty figure is a claim, not adopted.",
    },
    {
      id: 6,
      direction: 'neutral',
      importance: 'high',
      source: "UKMTO, CENTCOM and Treasury Secretary Scott Bessent, via CBS News and Fox News",
      event: "Three flow figures that cannot all be true: 144 vessels redirected, traffic near prewar excluding Iranian oil, and a record month of attacks",
      summary:
        "CENTCOM said the blockade has redirected 144 vessels, up from 138 two weeks earlier. Bessent said Hormuz traffic is near prewar levels excluding Iranian oil. UKMTO counted just over 30 attacks in October, the most of any month, 81 in the strait since 6 July and 59 on the southern route, against IMF PortWatch's roughly two transits a day carried here.",
      impact:
        "A record attack month and near-prewar traffic sit side by side. The scope of the Treasury claim is unstated, and the series are recorded, not differenced.",
    },
    {
      id: 7,
      direction: 'neutral',
      importance: 'medium',
      source: "Trading Economics and CBS News, with ExxonMobil's reported results",
      event: "Brent is reported near $111 on 1 November, below the near-$118 carried here, and Exxon's profit more than doubles",
      summary:
        "Trading Economics reported Brent near $111 on 1 November, citing the Qatar-Iran talks, restraint before the midterms and OPEC+ holding December targets, and noted a four-year high of $116.72 on 23 October. This file carried almost $118 for Friday's settle. ExxonMobil's third-quarter profit more than doubled to $15.4bn. The UAE says a Fujairah pipeline will double its outside-strait crude capacity by next year.",
      impact:
        "Two price series for the same week are not reconciled, and the highest-since-April framing is unconfirmed by this source. The 29 November quota decision still governs supply.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'high',
      source: "Anwar Gargash, Badr Abdelatty and Andreas Krieg via AP; Mao Ning and Xi Jinping via AP",
      event: "Gulf officials warn of the worst, and China says it will send an envoy to Iran, Oman and Saudi Arabia in mid-November",
      summary:
        "At the Manama Dialogue, UAE adviser Anwar Gargash said the United States and Iran are far apart and the region is braced for the worst; Egypt's Badr Abdelatty said the next escalation would lead nowhere. Andreas Krieg wrote that the Gulf standoff is really between Qatar and Israel. Xi told Oman's sultan the Gulf should not be an arena for great-power rivalry, and China will send a special envoy in early to mid-November.",
      impact:
        "The coalition-cohesion clock stays strained: the Gulf is lobbying against the very strikes Jerusalem wants. A Chinese envoy adds a fourth mediating party, without a program.",
    },
    {
      id: 9,
      direction: 'neutral',
      importance: 'medium',
      source: "The Associated Press analysis, the Pentagon, and a Lebanese military court, via CBS News",
      event: "AP finds 26 US sites damaged, the Pentagon splits its 23 dead 11 and 12, and 13 are charged over a Hezbollah arms shipment",
      summary:
        "AP's analysis found Iranian strikes damaged structures on 26 sites, with more than 115 attacks through August and Ali Al Salem in Kuwait hit at least 30 times. The Pentagon's toll of 23 was reported as 11 killed by enemy fire and 12 nonhostile. A Lebanese military court charged 13 people over a seized explosives shipment to Hezbollah, which has refused to disarm.",
      impact:
        "The base-damage finding is independent of the unreleased Pentagon estimate. The 11/12 split is a third rendering of the 23 and is held apart from the 15/8 split already carried.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported Pentagon split of 11 enemy fire + 12 nonhostile is held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. The thirty-fourth cycle with no disclosure statement; the senators' 2 November deadline passed and no CENTCOM answer was located. The 11/12 split is recorded against, not merged into, the 15/8 series.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: "+0",
      status:
        "No addition on the war series and no IDF casualty or operation located this cycle. Gaza deaths stay on their parallel series.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: "+0 official",
      status:
        "No new official war toll. The execution series carry unchanged and unmerged. The fifty-fifth day with no confirmed Iranian attack on a host state's territory.",
    },
    other: {
      cumulative: "KIA: 3,714+ · WIA: 11,203+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 killed, +0 wounded",
      status:
        "Nothing adopted. CENTCOM's claim that attacks on shipping killed more than twenty people in recent months is unverified and held apart; the Al Mayeda reported no crew injured, and the IRGC two-tanker claim carried no figure.",
    },
  },
  exec:
    "Netanyahu's reported motive surfaced, and the diplomatic channel lost its venue without losing its mediator. The Associated Press, citing two regional officials and a third source, reported that Benjamin Netanyahu wants another wave of strikes on Iran after today's American midterms, that renewed war could help him form an emergency government after he and his allies lost their parliamentary majority, and that he is working with senior American officials on a quick but extensive air campaign; Donald Trump would not commit on the Saturday call. Trump called it a very good talk, told an Iowa rally that at some point we're going to have to give them the hammer, said the war will end very soon one way or the other, and said Washington would not attack before the election. Marco Rubio repeated that no decision has been made. Iran's delegation left Doha on Sunday, an official said not because of a breakdown, and spokesman Esmaeil Baqaei said Iran would reach no final settlement unless the American blockade of its ports is lifted. Supreme Leader Mojtaba Khamenei ordered an immediate response to any attack with no geographical restriction. UKMTO reported a vessel struck by an unknown projectile in Hormuz, CENTCOM said Iran's attacks on shipping have killed more than twenty people, and a Pakistan-bound Qatari LNG carrier, the Al Mayeda, was hit after reportedly receiving an Iranian green light. Brent was reported near $111 on 1 November, below the near-$118 this file carried, and the two are not reconciled. Direction stays mixed; the probability holds at 9.",
  implications: [
    {
      title: "The strike track acquired a motive, and the deal track acquired a price",
      body:
        "The active-deadline clock worsens and the negotiation-capacity clock stays strained. Axios gave the pressure on Saturday; the Associated Press now supplies the reason, reporting that renewed war could help Netanyahu form an emergency government after his bloc lost its majority, and that he is working with senior American officials on a quick but extensive air campaign. Trump's own words bracket the week: the hammer comes at some point, the war ends very soon one way or the other, and no attack before the vote. That dates the next decision point without making it a decision, and Rubio's no-decision line stands. On the deal side, the formula acquired a stated price: Baqaei says no final settlement without the blockade lifted, against AP's framework of Hormuz attacks halted for that lifting. Delegations left Doha, but the mediator remains and talks are reported planned this week. Rezaei's seven-condition claim still has no American confirmation. The probability holds at 9: nothing on the board is a text, a named signatory, a convened session or an IAEA confirmation.",
    },
    {
      title: "The strait named a hull, then three flow figures that cannot all be true",
      body:
        "The energy-infrastructure clock stays critical. This cycle's finding is a collision of series. UKMTO counted just over thirty attacks in October, the most of any month and 81 in the strait since 6 July; CENTCOM says the blockade redirected 144 vessels; and Bessent says traffic is near prewar levels excluding Iranian oil, against the roughly two transits a day IMF PortWatch gave for 25 October. The scope of the Treasury claim is unstated, so the figures are recorded, not differenced. The Al Mayeda, a Pakistan-bound Qatari LNG carrier, was hit, and Bloomberg's report that it reportedly had an Iranian green light hours earlier would make clearance itself contested. This time the flag state named the hull, and the IRGC claim stays unconfirmed. CENTCOM's more-than-twenty-dead figure is unverified. Khamenei's no-geographical-restriction order and Abdollahi's no-waiting line mean any strike would be answered beyond the Gulf, which is exactly what Gargash and Abdelatty warned against.",
    },
    {
      title: "Taiwan: no fresh Taiwan-relevant development located; prior assessments unchanged",
      body:
        "No fresh Taiwan-relevant development was located this cycle, and the supplementary budget for Taipower and CPC that President Lai publicly urged is still unpassed; prior assessments are unchanged. The one adjacent fact is price: Brent was reported near $111 on 1 November, down from the near-$118 this file carried, and the two series are not reconciled. Trading Economics also notes a four-year high of $116.72 on 23 October. The four subsidy figures stay unreconciled. China's planned mid-November envoy to Iran, Oman and Saudi Arabia is a data point for the energy-security clock: Beijing is an importer of Gulf energy too, and its envoy competes with Qatar's channel.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. The 11/12 split is a third rendering of the 23 and is held apart from the 15/8 series; the senators' deadline passed with no answer located.",
    israel:
      "No addition on the war series and no IDF casualty or operation located this cycle.",
    iran:
      "No new official war toll. The execution series carry unchanged and unmerged.",
    other:
      "Nothing adopted. CENTCOM's more-than-twenty figure for attacks on shipping is unverified and held apart.",
  },
};

export default data;
