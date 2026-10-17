import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "ESCALATING, and for the first time the campaign's own stated metric moved with it. An independent Reuters audit put the Gulf infrastructure campaign at 135 attacks on 84 sites across seven countries since 28 February and found at least 34 official statements attributing the damage to falling interceptor debris, an explanation every expert shown the findings rejected. Brent then touched $110 intraday for the first time since May.",
      risk7d:
        "Extreme and worsening. Eurasia Group raised its odds of intensification to 65 percent from 35, writing that \"the standoff status quo is no longer sustainable for the US\". Egypt's president asked his parliament for emergency authority to defend Saudi Arabia if asked, one cycle after Trump urged Riyadh to accept Israeli help; two prospective entrants are on the board and Riyadh has answered neither.",
      spillover:
        "Critical. Two tankers were attacked northeast of Al Jubayl inside the Arabian Gulf, within reach of Saudi export infrastructure and unclaimed by any party, and an LNG tanker was approached by an armed skiff off Al Mukalla. Washington waived the Russia sanctions and 100 percent tariffs it legislated a month ago, and CENTCOM disclosed that its counter-blockade has redirected 138 commercial vessels.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: "Reuters, carried by MarineLink, The Express Tribune, Al-Manar, Pars Today and IBTimes",
      event: "An independent audit falsifies the debris account across seven Gulf states",
      summary:
        "Reuters counted at least 135 Iranian drone and missile attacks on at least 84 infrastructure sites in Saudi Arabia, the UAE, Iraq, Qatar, Kuwait, Oman and Bahrain since 28 February. In at least 34 official statements Gulf governments attributed the damage to falling interceptor debris, six of them from UAE authorities; all fourteen insiders and experts shown the findings called debris alone highly improbable. Fujairah was struck at least nineteen times with both matrix manifolds damaged; two Ras Laffan cold boxes were destroyed; five of Saudi Arabia's nine largest refineries were damaged and Jazan fell to zero; four of Kuwait's eight dual power-and-desalination plants were hit; a 17 May drone strike put one Barakah reactor on emergency diesel.",
      impact:
        "The first independent audit of the campaign's physical record, and it contradicts the states that published the record. It discharges the contested-damage-account prior the only way it could be discharged — by a non-belligerent measuring rather than a belligerent conceding — and it vindicates the asymmetric-disclosure prior with a number attached. Saudi production ran below 7 million barrels a day for most of the first six months against more than 10 pre-war, a loss Reuters prices above $50 billion.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: "Bloomberg via Rigzone; CNBC",
      event: "Brent touches $110 and the campaign's stated price objective is met for the first time",
      summary:
        "December Brent settled at $109.86 a barrel in New York, up 3.7 percent, after touching $110 intraday for the first time since May; November WTI settled at $101.41, up 3.5 percent; New York diesel settled at $4.90 a gallon. Eurasia Group raised its odds of intensification to 65 percent from 35 and wrote that \"the standoff status quo is no longer sustainable for the US\". Rebecca Babin of CIBC Private Wealth Group said the market \"is having to price risk back in, particularly heading into the weekend\". Against the move, Hormuz crude cargoes topped 100 million barrels last week and Washington offered up to 17 million barrels from the Strategic Petroleum Reserve.",
      impact:
        "The price-metric-failing prior fails after two cycles of a flat print. A campaign that was escalating because it was not working on its own terms is now working on them, which removes the restraint that failure imposed. The 17-million-barrel SPR offer sits against the exhausted-SPR line carried here and is unreconciled by either publisher.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "Abdel Fattah el-Sisi via Al Jazeera, The National, The Jerusalem Post and US News",
      event: "Cairo asks its own parliament for authority to defend Riyadh",
      summary:
        "At an Egyptian Military Academy graduation, President Abdel Fattah el-Sisi said Egypt would \"carry out any measure to protect\" Saudi Arabia \"in accordance with the directives of His Majesty King Salman and the directives of the Crown Prince, Mohammed bin Salman\". He acknowledged that \"this matter requires the approval of the Egyptian parliament\" and asked that it \"convene in an emergency session to give us this authorisation, if it is requested of us\", adding: \"I am not speaking in order for us to fight anyone or attack anyone. I am speaking only for defence.\" No Saudi request and no Saudi response has been published. Saudi Arabia, Pakistan and Turkey signed the Mecca defence pact in August and agreed in early October to activate deterrence measures under it.",
      impact:
        "This contradicts the assessment carried here that Cairo has no real intention of joining the Mecca pact, and it arrives one cycle after Trump urged Riyadh to accept Israeli help. Two prospective entrants are now on the board and Riyadh has answered neither. A request Egypt has not received is being pre-authorised, which is a measure of what Cairo expects rather than what it has been asked.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: "UKMTO; Reuters via Arab News and Azernews; Gulf News",
      event: "The maritime campaign moves into Saudi home waters and the Gulf of Aden",
      summary:
        "UKMTO reported two tankers attacked northeast of Al Jubayl inside the Arabian Gulf on Friday: one struck by an unknown projectile 68 nautical miles out at about 0900 UTC, crew evacuated and safe, and one hit by a rocket-propelled grenade from a small boat 78 nautical miles out at 1922 UTC, damaging its aft port quarter. Reuters could not establish whether the two reports describe the same incident, and no party claimed either. Separately an LNG tanker about 140 nautical miles from Al Mukalla, Yemen, was approached by a skiff carrying seven people that fired two shots; the tanker's security team fired two warning shots and the skiff turned away.",
      impact:
        "Al Jubayl is inside the Arabian Gulf and within reach of Saudi export infrastructure, which moves the maritime campaign off the chokepoint and into the defender's home water. The absence of any claim is itself the finding: for the first time in this phase a strike on Saudi-adjacent shipping has no claimant at all, so no actor can be held to it.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "CENTCOM and Capt. Tim Hawkins via Fox News",
      event: "The United States publishes its own blockade number for the first time",
      summary:
        "CENTCOM said that as of 17 October its forces had redirected 138 commercial vessels \"to ensure strict compliance\" with the counter-blockade of Iranian ports, releasing imagery of the USS Rafael Peralta. Spokesman Capt. Tim Hawkins said the \"vast majority\" of Iranian attempts against Hormuz shipping are unsuccessful, that about 97 percent of ships seeking transit got through without being hit, and that the strait \"is open, it is available for transit, and we've seen that transit continue this very day\". CENTCOM attributed the GFS Pride — now described as Singapore-flagged and Cyprus-owned — to an Iranian projectile rather than the mine the IRGC claimed, saying it caught fire and sank while under tow.",
      impact:
        "The counter-blockade has been an asserted fact for months and now has a figure: 138 hulls turned away by the party that calls the strait open. Hawkins's 97 percent is a rate on attempted transits, not on offered trade, and does not reconcile with UKMTO's 70 percent below pre-conflict.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'high',
      source: "The executive order and Volodymyr Zelenskyy via Fox News; Gulf News",
      event: "Washington waives the Russia sanctions it legislated a month ago",
      summary:
        "Trump signed an executive order on Friday waiving the sanctions and tariffs of up to 100 percent on major buyers of Russian oil and gas that were due under legislation he had signed the previous month, writing \"I am hereby waiving the application of such sanctions, restrictions, and duties\" and calling the waiver the \"national interest\" of the United States. Existing US sanctions on Russia remain in place. The move follows his agreement with Vladimir Putin to let Russian diesel reach global markets. Volodymyr Zelenskyy said the waiver \"seems wrong to me\" and that \"sanctions relief will continue\".",
      impact:
        "The sanctions-as-currency prior gains its clearest instance: Washington is spending leverage against one adversary to hold down the price its war with another is driving. Designation of an Iranian bank — the last unfired Brent trigger — remains unfired on the cycle in which Brent touched $110, and the six senators' objection to the Russian diesel arrangement remains unvoted.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'medium',
      source: "Mohammad Akraminia via Mehr and Fox News; the IRGC Navy and Adm. Ali Ozmai via Gulf News; Abbas Araghchi via Fox News",
      event: "Iran's army offers a conditional reopening its navy denies",
      summary:
        "Army spokesman Mohammad Akraminia said the Strait of Hormuz \"will reopen\" if the United States leaves the region and that \"the global economy will improve\", adding: \"If it doesn't leave, we'll expel it.\" He also claimed Iran's air-defence capabilities \"far surpass pre-war and wartime levels\". The IRGC Navy, the same day, reiterated that the strait is closed to vessels of all nationalities, and Adm. Ali Ozmai warned that any vessel deactivating its navigation systems would be treated as hostile. Foreign Minister Abbas Araghchi, at an OIC gathering in Baghdad, met Turkish counterpart Hakan Fidan and said Tehran supports \"an inclusive and comprehensive political process\".",
      impact:
        "The one-state-two-organs prior sharpens on Iran. The army has now attached a price to reopening — American withdrawal — while the navy holds the closure unconditional and the army chief said two days ago that no enemy vessel had entered. Three organs, three positions, one strait, and the first of them is a negotiating position rather than a claim of fact.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'medium',
      source: "Afrah Al-Zouba and Netanyahu via Fox News; the Houthi-run health ministry and the ICRC via Gulf News",
      event: "Yemen answers the mediation offer Riyadh has not, and Netanyahu returns to the record",
      summary:
        "Yemeni official Afrah Al-Zouba rejected Iran's offer to mediate, accusing Tehran of arming and financing the Houthis: \"Whoever arms a party to a war cannot be its mediator.\" Deputy Foreign Minister Saeed Khatibzadeh said Riyadh had not responded to Araghchi's facilitation offer, now a seventh day. Netanyahu, on Fox News, said Iran's nuclear ambitions mean \"every single city in the United States, every single city, will be held hostage to the blackmail of these fanatics\". The Houthi-run health ministry said Saudi airstrikes on al-Ar village in Dhamar killed three children and wounded more than a dozen, and put 124 killed in Houthi-controlled territory since September; the Houthis freed 159 pro-government fighters, confirmed by the ICRC.",
      impact:
        "The mediator-of-one's-own-ally prior is answered by the party with the least to gain from answering: Yemen's government, not Saudi Arabia, has rejected the offer on the merits. Netanyahu's remarks are the first Israeli government statement after a cycle of none, nine days before the vote, and they address Iran's nuclear programme rather than the Saudi theatre.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 17 · WIA: 440 (AP/CENTCOM combat series)",
      delta: '+0 disclosed',
      status:
        "An eighteenth consecutive cycle with nothing disclosed on the combat series, recorded as an absence of disclosure rather than a lull. The Reuters audit reports that the Defense Department's inspector general told Congress Iran hit hundreds of structures on US bases and dozens of aircraft — a congressional disclosure, not a Pentagon casualty release, and it does not answer the Day 216 gap against CENTCOM's 18, now unanswered for an eighteenth day. The June Port Shuaiba investigation is unreleased and the CRS count of at least 81 US aircraft and drones lost or damaged is unanswered. The Iraq theatre's closing series stands at 123 killed and 499 wounded.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: '+0',
      status:
        "No addition, and the first Israeli government statement after a cycle of none: Netanyahu told Fox News that Iran's nuclear ambitions mean every US city \"will be held hostage to the blackmail of these fanatics\" and praised Trump's handling of the war. The IDF said it killed four Hamas operatives in Gaza, including one who infiltrated Israel on 7 October, calling the attacks a systematic ceasefire violation. Nine days to the vote with the last published poll putting both blocs on 51 seats and neither at 61. UNIFIL's mandate still expires at year-end.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: '+0 official',
      status:
        "No new official war toll and a thirty-ninth day without a confirmed Iranian attack on a host state's territory. HRANA's annual audit of at least 2,003 executions between 10 October 2025 and 8 October 2026 is uncontested by Tehran for a second day and remains held beside the NCRI's at-least-48, Amnesty's at-least-34 and the 70-since-January roster rather than merged. Reuters now prices the other side of Iran's ledger: 135 attacks on 84 Gulf infrastructure sites in seven countries, with pre-war drone output put at about 10,000 a month and US officials assessing possible Russian and Chinese intelligence support; Beijing said only that it has \"consistently and strictly fulfilled its international obligations\".",
    },
    other: {
      cumulative: "KIA: 3,697+ · WIA: 11,176+ (Yemen, Iraq, Gulf states, maritime)",
      delta: '+0',
      status:
        "No addition to this line. The Houthi-run health ministry says Saudi airstrikes on al-Ar village in the Dawran Aness district of Dhamar killed three children aged eight, ten and ten and wounded more than a dozen, and puts 124 killed in Houthi-controlled territory since fighting resumed in September; Saudi Arabia has not commented and both figures stay on their own attributed line. A fifth King Khalid figure enters the record — 14 killed and more than 300 wounded, carried by Al Jazeera — against the coalition's 17 and 333, GACA's at-least-20 and 356, the 13 single-event count and Fox News's 12; none adopted, none summed. Still no Aramco Dhahran casualty figure under any account.",
    },
  },
  exec:
    "An independent audit arrived and falsified the defender's account of its own damage. Reuters, after interviewing 36 people and analysing radar, optical and weather-satellite data, counted at least 135 Iranian drone and missile attacks on at least 84 infrastructure sites across seven Gulf countries since 28 February, and found that in at least 34 official statements Gulf governments blamed falling debris from interceptions. All fourteen insiders and experts shown the findings said debris alone was highly improbable. Fujairah was struck at least nineteen times; two of Ras Laffan's cold boxes were destroyed, in a facility carrying nearly a fifth of world LNG supply, with a three-to-five-year repair estimate from QatarEnergy's chief; five of Saudi Arabia's nine largest refineries were damaged and Jazan's volumes fell to zero; four of Kuwait's eight power-and-desalination plants were hit; a May drone strike put one Barakah reactor on emergency diesel. Saudi production ran below 7 million barrels a day for most of the first six months against more than 10 pre-war, a loss Reuters prices above $50 billion. Brent then touched $110 intraday for the first time since May, December settling at $109.86 and WTI at $101.41, with Eurasia Group raising its odds of intensification to 65 percent from 35. Egypt's Sisi asked parliament for emergency authority to defend Saudi Arabia if asked. Two tankers were attacked northeast of Al Jubayl inside the Arabian Gulf, neither claimed. CENTCOM published its own blockade count of 138 vessels redirected. Washington waived the Russia sanctions it legislated a month ago. Direction holds escalating; the thirty-day probability holds at 5.",
  implications: [
    {
      title: "⭐ The audit this file has been waiting for",
      body:
        "For eleven days the asymmetric-disclosure prior has recorded a defender that will not publish its own damage, and for two days a defender that penalises others for publishing it. A third party has now published it instead. Reuters built the campaign's physical record from radar, optical and weather-satellite data, 36 interviews and the operators' own responses, and the record it produced contradicts the governments that issued it: at least 135 attacks on at least 84 sites in seven countries, against at least 34 official statements attributing the damage to falling interceptor debris, with every one of the fourteen insiders shown the findings calling that explanation highly improbable. Analytical judgment: this discharges the contested-damage-account prior in the only way it could ever be discharged — not by a belligerent conceding, but by a non-belligerent measuring. The specifics are worse than the aggregate. Both of Fujairah's matrix manifolds were damaged; two Ras Laffan cold boxes destroyed; five of nine major Saudi refineries hit; four of Kuwait's eight power-and-desalination plants, in a country one expert says could run out of water in days or weeks if enough were lost; one Barakah reactor forced onto emergency diesel in a strike the IAEA's Grossi says showed detailed plant knowledge. Matthew Reed's line is the finding in one sentence: Gulf states now treat damage assessments as if they were state secrets.",
    },
    {
      title: "The price fires, the coalition widens, and the water comes home",
      body:
        "The price-metric-failing prior has held for two cycles on a flat Brent print. It fails today. December Brent settled at $109.86 and touched $110 intraday for the first time since May, WTI at $101.41, diesel at $4.90 a gallon — and Eurasia Group nearly doubled its intensification odds to 65 percent with the judgment that the standoff is no longer sustainable for Washington. Analytical judgment: the campaign's stated price objective has now been met on its own terms for the first time, which removes the restraint that failure imposed and makes the next week more dangerous rather than less. Two structural moves accompany it. Egypt's Sisi asked his own parliament for emergency authority to defend Saudi Arabia if asked — contradicting the assessment carried here that Cairo would stay out, and arriving one cycle after Trump urged Riyadh to accept Israeli help. Two prospective entrants are now on the board and Riyadh has answered neither. And the water came home: two tankers were attacked northeast of Al Jubayl, inside the Arabian Gulf and within reach of Saudi export infrastructure, by projectile and by rocket-propelled grenade from a small boat, with no claim of responsibility from any party.",
    },
    {
      title: "Taiwan: the cold boxes finally get a number",
      body:
        "No fresh Taiwan-specific development was published this cycle; the Alaska arrangement stands where Day 232 left it, with ownership and pricing unsettled and earliest supply in 2032. But the Reuters audit supplies the number Taipei's energy planning has lacked. Ras Laffan — the facility whose LNG flows account for nearly a fifth of world supply — lost two of the cold boxes that chill gas to liquefaction, and QatarEnergy's chief executive puts full repair at three to five years. Analytical judgment: the substitution-chain prior holds and hardens. Taiwan's eleven-day gas buffer sits downstream of a global supply pool with an independently audited multi-year hole in it, and the replacement contracted against that hole does not deliver until 2032. The crude-is-not-gas prior governs the asymmetry: roughly 140 days of crude cover against eleven of gas, and it is gas that has taken the structural damage. Australian and American cargoes at nearly 60 percent of this year's supply remain the only realised mitigation, and they are spot-exposed to the same price that touched $110 on Friday. An eighth consecutive day of silence from U-Ming, Global Energy Maritime and every Taipei ministry on the GEM NO.2 identification is acknowledged as posture rather than padded.",
    },
  ],
  casualtyNotes: {
    us:
      "An eighteenth consecutive cycle with nothing disclosed, recorded as an absence of disclosure. The Defense Department inspector general's report to Congress that Iran hit hundreds of structures on US bases and dozens of aircraft is a congressional disclosure, not a casualty release, and the Day 216 gap against CENTCOM's 18 is unanswered for an eighteenth day.",
    israel:
      "No addition, and the first Israeli government statement after a cycle of none: Netanyahu on Fox News on Iran's nuclear ambitions and US cities. Nine days to the vote with both blocs last polled at 51 seats and neither at 61.",
    iran:
      "No new official war toll and a thirty-ninth day without a confirmed Iranian attack on a host state's territory. HRANA's annual 2,003 is uncontested by Tehran for a second day. Reuters now prices the other side of the ledger at 135 attacks on 84 Gulf infrastructure sites across seven countries.",
    other:
      "No addition to this line. The Dhamar strike's three dead children and the 124-since-September figure stay on the Houthi-run health ministry's own attributed line. A fifth King Khalid figure — 14 killed, more than 300 wounded — enters the record against four already carried; none adopted, none summed.",
  },
};

export default data;
