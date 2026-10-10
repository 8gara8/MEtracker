import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "ESCALATING, and the escalation is now a mass-casualty event on a Gulf civilian target. A missile struck the complex housing Terminals 3 and 4 at Riyadh's King Khalid International and Saudi officials recorded twelve killed and 309 wounded, including one American. The Houthis did not claim it. Within hours Trump said the United States \"may\" join Saudi strikes on the Houthis and that he would \"take a look\" at whether the attack changes his undertaking not to strike Iran before 3 November. A projectile landed near King Fahd International at Dammam.",
      risk7d:
        "Extreme and held, with the restraint on which it was premised now publicly reopened. The State Department condemned \"Houthi terrorist attacks\" and said Washington \"stands firmly\" with Riyadh while noting the strike was unclaimed. EASA widened its Saudi airspace guidance to warn of an increased risk of civil aircraft being misidentified, a graver category than the delay advisories carried until now. The IRGC Navy claimed a mined supertanker in the southern strait; four named maritime analysts read the footage as fabricated. Araghchi's promised reply is outstanding on its fourth day.",
      spillover:
        "Critical and widening by nationality rather than by geography. The Riyadh dead include an American, two Bangladeshis and nationals of Egypt, Jordan, Syria, Palestine and Sudan. Twenty-two Indian seafarers aboard the struck GEM NO.2 were confirmed safe by India's shipping minister, and twelve of the nineteen crew of the On Peace were injured off Oman. Belgium called for activation of the EU Blocking Statute over the ICC designation, and eight foreign ministers including Canada's and Japan's jointly rejected it.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'GACA / Saudi officials / AFP',
      event: '⭐ A missile into Riyadh’s domestic terminal complex kills twelve and wounds 309',
      summary:
        "A regional official said a missile struck the complex housing Terminals 3 and 4 at King Khalid International, which handle domestic flights; a diplomatic source put the impact at about 3pm local time. GACA recorded at least twelve killed and 309 injured, several critically — four Saudis, two Bangladeshis and one each from the United States, Egypt, Jordan, Syria, Palestine and Sudan. Operations were suspended through midnight, citing \"continued attacks targeting civil aviation facilities\", and police blocked all entrances. The Houthis did not claim the strike and accused Saudi Arabia of hitting Sanaa International the same morning.",
      impact:
        "The first mass-casualty attack of the war on a Gulf civilian target, and the event this file named as the test of the pre-midterm commitment. An American civilian among the dead is the configuration least compatible with continued restraint. The attack is unattributed, which is what makes any retaliation calculus unstable.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'pivotal',
      source: 'Trump / White House / State Department',
      event: 'Trump says he will “take a look” at the pre-midterm commitment and at joining the Houthi fight',
      summary:
        "Asked whether Washington would join Saudi strikes on the Houthis, the president said \"We may. We're gonna look at it\", and said a decision would come quickly. Asked whether the Riyadh attack changes his commitment not to strike Iran before 3 November, he said he would \"take a look\" at that as well, while referring to productive talks with Iran. The White House said he was reviewing the situation for a possible next step that may include strikes on Iran. The State Department condemned \"Houthi terrorist attacks against civilian infrastructure and airports\" and said the United States \"stands firmly with the Kingdom of Saudi Arabia\".",
      impact:
        "The active-deadline clock moves from approaching to critical. Under §3.5.3 this is a claim by a political actor about his own future conduct, not a decision, so the split-signal prior holds and both branches stay recorded. The reopening is itself the development.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'IRGC Navy / TASS / TankerTrackers',
      event: 'The IRGC claims a mined supertanker and four named analysts call the footage fabricated',
      summary:
        "The IRGC Navy press service said a supertanker hit naval mines attempting to pass a prohibited zone in the southern Strait of Hormuz and that \"Attempts to contain the fire have failed, and the entire tanker has been engulfed in flames\"; TASS carried the name Algaya. Tasnim said the ship was laden with crude and had disabled its navigation systems. No flag, owner or crew detail was given. TankerTrackers called the footage fake, citing a static flame base between four and six seconds; the economist Anas Alhajji described a near-static plume; the maritime historian Sal Mercogliano said the damage sits further aft than a mine would cause. Other accounts identified the burning hull as the GEM NO.2, struck a day earlier.",
      impact:
        "Recorded as a claim. Tehran's own non-compliance list, now at 100 vessels, does not include the GEM NO.2, which contradicts the IRGC's own framing of unauthorised transit. The attribution-split prior widens from vessel identity to the authenticity of the evidence offered.",
    },
    {
      id: 4,
      direction: 'de-escalating',
      importance: 'high',
      source: 'Sarbananda Sonowal / Fleet Management',
      event: 'The GEM NO.2’s twenty-two Indian crew are confirmed safe',
      summary:
        "India's Union Shipping Minister Sarbananda Sonowal said the twenty-two Indian nationals aboard the Panama-flagged crude tanker MT GEM No. 2 are safe and that the government is coordinating directly with the ship's management, named as Fleet Management Limited. The vessel was struck by a drone at anchorage off the UAE on 9 October, where UKMTO had reported crew status, damage assessment and environmental impact unknown. Vanguard Tech identified it as a 2017-built, 302,000 dwt VLCC managed in Taiwan and owned by Global Energy Maritime, a joint venture linked to U-Ming Marine Transport.",
      impact:
        "An open question in this file is closed by a minister rather than a belligerent. The position remains disputed between 13nm west of the UAE's Al Jazeera and Sharjah anchorage, and the manager is reported variously as Taiwanese and as Fleet Management, so the hull's commercial identity is still only partly resolved.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: 'Kpler / UKMTO / IMO / Reuters',
      event: 'Hormuz transits fall to the lowest since July as October’s attack count reaches thirteen',
      summary:
        "Seven ships transited the strait on Tuesday and ten on Wednesday, the fewest since 23 July, against roughly 125 large commercial vessels a day before the war and an average of 32 in the 72 hours before 4 October. Strait crude shipments fell 27% from the previous week's wartime high to 10.1 million barrels a day, about 74% of pre-war. Kpler put combined Gulf of Oman and Red Sea exports at 6.7 million barrels a day, roughly double pre-war. UKMTO has issued at least one warning every day in October, thirteen in total for thirteen separate incidents; the IMO records six confirmed Middle East attacks in October and at least 24 seafarers killed across 93 confirmed incidents.",
      impact:
        "Volume holds because the bypass holds; resilience falls again. Reuters counted at least twelve tanker attacks between 28 September and 5 October against the IMO's nine, so even the incident series is contested. The energy-infrastructure clock worsens without a barrel of production being hit.",
    },
    {
      id: 6,
      direction: 'de-escalating',
      importance: 'high',
      source: 'Yemeni military sources via AFP / Hizam al-Asad',
      event: 'Yemeni field officers say Bab al-Mandeb is not held and Mayun is still Houthi',
      summary:
        "Yemeni military sources told AFP that government forces were advancing near Bab el-Mandeb but did not yet control the strait, and that Mayun (Perim) Island remained in Houthi hands. The Houthi official Hizam al-Asad said Houthi forces \"repelled them\". On Day 225 this brief recorded the coalition's claim to control both, and Saudi ambassador Mohammed Al Jaber's statement that the strait had been \"cleansed\" of Houthi forces, explicitly under the retracted-claim prior. The coalition's separate claim of 136 destroyed military targets, published without locations, sortie counts or casualty figures, is still unconfirmed by any disinterested party.",
      impact:
        "The claimant's own field officers have declined to confirm the claim — the second worked example of the retracted-claim prior inside a week, after Mocha. The second-chokepoint prior stays contested by claim rather than settled, and the coalition's published figures lose standing accordingly.",
    },
    {
      id: 7,
      direction: 'mixed',
      importance: 'high',
      source: 'Dmitry Peskov / Araghchi / Trump',
      event: 'The Kremlin says Putin relayed Iran’s position on a resolution directly to Trump',
      summary:
        "Kremlin spokesman Dmitry Peskov said Putin had conveyed Iran's views on a possible resolution of the crisis to Trump during their Friday call, and the Kremlin did not disclose how Trump responded. Foreign Minister Abbas Araghchi said Tehran was reviewing Washington's response to an Iranian proposal to reopen the strait within a seven-day framework. Trump referred publicly to productive talks with Iran on the same day he said he would reconsider the strike commitment. Mehdi Karroubi and other figures inside Iran called on Pezeshkian's government to resume negotiations with Washington.",
      impact:
        "The mediator-paper prior now has two channels and the Moscow one is carrying content rather than atmospherics — Putin transmitting Tehran's position is the function Doha has performed since summer. Araghchi's reply \"within a few days\" is outstanding on its fourth day, which is the reason the probability falls rather than rises.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'medium',
      source: 'FlightAware / GACA / EASA',
      event: 'Aviation disruption deepens into a warning about misidentifying civil aircraft',
      summary:
        "FlightAware counted 324 cancellations at Riyadh on Saturday, 182 of them by Saudia, and at least 291 Riyadh flights cancelled over twenty-four hours. Kuwait Airways cancelled flights because the airport had closed over a \"security situation\". EASA expanded its guidance on Saudi airspace, warning of an increased risk of civil aircraft being misidentified. Seven governments warned citizens away from the airport.",
      impact:
        "A misidentification warning is a different class of hazard from delay and diversion: it contemplates a civil airliner being engaged. The regional-carrier prior extends, with the Saudi national carrier itself accounting for more than half the day's cancellations.",
    },
    {
      id: 9,
      direction: 'mixed',
      importance: 'medium',
      source: 'Maxime Prevot / joint ministerial statement / ICC',
      event: 'Belgium calls for the EU Blocking Statute as eight states jointly reject the ICC designation',
      summary:
        "Belgian Foreign Minister Maxime Prevot said \"Belgium is calling for the activation of the EU Blocking Statute to protect the court\" and that Brussels would raise ICC support with EU foreign affairs colleagues on Monday and at the European Council. The foreign ministers of Britain, Denmark, France, Germany, Italy, the Netherlands, Canada and Japan said they \"regret and strongly disagree\" with the sanctions. Dutch Foreign Minister Tom Berendsen called the move \"deeply regrettable\". The ICC called it an \"assault on the rule of law\" and told its 125 states parties that \"The Court cannot stand alone.\"",
      impact:
        "The allied-legal-challenge prior is answered with a named instrument rather than a condemnation. Treasury's six-month grace period is what makes a blocking mechanism practically available, so Rubio's offer to negotiate and Europe's counter-move now run on the same clock.",
    },
    {
      id: 10,
      direction: 'neutral',
      importance: 'medium',
      source: 'Tatika / Zman Yisrael / UN experts / NCRI',
      event: 'An Israeli poll puts the Netanyahu bloc back behind as UN experts press Iran on executions',
      summary:
        "A Tatika Research and Media poll for Zman Yisrael, fielded 7–8 October among 500 respondents with a 4.4-point margin of error, put Gadi Eisenkot's Yashar first on 24 seats and Likud second on 20, the Netanyahu-supporting parties at 51 and the four Jewish-led opposition parties at 55, with the mainly Arab parties on 14. The same pollster had the Netanyahu bloc ahead on 1 October. UN experts on 10 October urged Iran to halt all executions, calling it the most prolific executioner per head of population.",
      impact:
        "Sixteen days to the vote and neither bloc is near a majority, which raises the political cost of a strike inside the window without resolving who would authorise one afterwards. The denomination prior holds: the wage figure fell 41% in dollars without changing in rials.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 · WIA: 440 (AP/CENTCOM combat series)',
      delta: '+0 disclosed',
      status:
        "An eleventh consecutive cycle with nothing disclosed on the combat series, recorded as an absence of disclosure rather than a lull. One American civilian was killed at King Khalid International and is carried on the \"other\" line, not merged here, because this series is bounded to the combat count. The Day 216 gap against CENTCOM's figure of 18 is unanswered for an eleventh day, the June Port Shuaiba investigation is unreleased, and there is still no Pentagon response to the Congressional Research Service figure of at least 81 US aircraft and drones lost or damaged. Roosevelt CSG and Makin Island ARG remain inbound for late October.",
    },
    israel: {
      cumulative: 'KIA: 57 (Iran-front 47 + Lebanon-front 10) · WIA: 8,655+',
      delta: '+0',
      status:
        "No Israeli casualty disclosed. The IDF said a strike in Khan Younis killed two Palestinians it linked to Palestinian Islamic Jihad and the Hamas Qassam Brigades; neither group had commented, and those deaths are not on this series. Gaza's health ministry series of 74,370 killed and 175,371 injured stays parallel and unmerged, as does the Jerusalem Post's differently-bounded ballistic-missile count. Sixteen days to the election, with a Tatika poll putting the Netanyahu bloc at 51 against 55 for the Jewish-led opposition.",
    },
    iran: {
      cumulative: 'MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+',
      delta: '+0 official',
      status:
        "No new official war toll and a thirty-second day without a confirmed Iranian attack on a host state's territory, the qualifier from Day 225 still attached because the IRGC's claimed strikes remain against hulls rather than soil. UN experts urged Iran on 10 October to halt all executions and the UN Fact-Finding Mission's finding that January's killings amounted to crimes against humanity was restated; the execution roster holds at 70 since January and 194 on death row, never merged. NCRI records the open-market dollar at 265,000–270,000 tomans and the minimum wage at about $63. IAEA still cannot verify roughly 440.9 kg of 60% material.",
    },
    other: {
      cumulative: 'KIA: 3,696+ · WIA: 11,161+ (Yemen, Iraq, Gulf states, maritime)',
      delta: '+12 KIA / +309 WIA',
      status:
        "The largest single-day civilian delta of the Gulf phase: GACA's toll from the 10 October attack on King Khalid International — twelve killed and 309 wounded, several critically — comprising four Saudis, two Bangladeshis and one each from the United States, Egypt, Jordan, Syria, Palestine and Sudan. The wounded are adopted because a regulator published a number, unlike the unquantified \"several\" carried from 8 October. The GEM NO.2's twenty-two Indian crew are safe; twelve of the nineteen crew of the On Peace were injured off Oman and the Acers' casualties off Qatar remain unquantified. The IMO's 24 seafarers killed across 93 incidents and WHO's Yemen series of 959 dead since 6 August stay parallel.",
    },
  },
  exec:
    "The deadline this file has carried since the pre-midterm commitment was made — whether it survives the first mass-casualty attack on a Saudi or American target — was answered on Saturday. A missile struck the complex housing Terminals 3 and 4 at Riyadh's King Khalid International, and Saudi officials put the toll at twelve killed and 309 wounded: four Saudis, two Bangladeshis, one American, and one each from Egypt, Jordan, Syria, Palestine and Sudan. The Houthis did not claim it, having claimed the three earlier attacks on the airport that week, and the same morning accused Saudi Arabia of striking Sanaa International. Asked whether the United States would join Saudi strikes on the Houthis, Trump said \"We may. We're gonna look at it\", and said he would \"take a look\" at whether the attack changes his undertaking not to strike Iran before 3 November. The State Department condemned \"Houthi terrorist attacks\" and said Washington \"stands firmly\" with Riyadh. A projectile landed near Dammam's King Fahd International. FlightAware counted 324 Riyadh cancellations, 182 of them Saudia's, and EASA widened its Saudi airspace guidance to warn of civil aircraft being misidentified. The IRGC Navy claimed a supertanker — TASS carried the name Algaya — hit naval mines in a prohibited zone of the southern strait and was \"engulfed in flames\"; four named maritime analysts called the footage fabricated, and the ship in it was identified as the GEM NO.2, whose twenty-two Indian crew India's shipping minister says are safe. Hormuz transits fell to seven and ten a day, the lowest since 23 July against about 125 pre-war. Yemeni field officers said Bab al-Mandeb is not held. Direction holds escalating; the thirty-day probability falls from 10 to 9.",
  implications: [
    {
      title: 'The commitment did not survive the first mass-casualty attack, and the attacker has not been identified',
      body:
        "Twelve dead and 309 wounded at a civilian terminal, with an American among the dead, is the event this file named as the test of the undertaking not to strike Iran before 3 November. Within hours the president said he would \"take a look\" at both that undertaking and at joining the Saudi campaign in Yemen. Analytical judgment: under the multi-clock framework the active-deadline clock has gone from approaching to critical, and the political-will clock has inverted — a commitment made to protect a vote is now exposed to the one kind of event that makes keeping it costly, and an American death inside a Gulf ally's airport is the version of that event least compatible with restraint. Two disciplines govern what follows. First, §3.5.3: \"we're gonna look at it\" is a claim about the speaker's own future conduct, which is a claim, not a decision; the split-signal prior holds and both branches stay on the record. Second, and more constraining, the attack is unattributed. The Houthis claimed the three earlier strikes that week and did not claim this one, while accusing Riyadh of hitting Sanaa International the same morning; the State Department named them anyway. A retaliation calculus built on an unclaimed strike is the unauthorised-escalation prior's worst configuration — a target, a window, and no agreed author.",
    },
    {
      title: 'Two Iranian claims were falsified on the same day, one by analysts and one by the coalition’s own soldiers',
      body:
        "The IRGC Navy said a supertanker struck mines in a prohibited zone and burned entire; four named maritime analysts read the footage as fabricated, and the burning hull was identified as the GEM NO.2 — the ship struck a day earlier off the UAE, not a new casualty. Tehran's own non-compliance list, now at 100 vessels, does not contain it. Separately, Yemeni military sources told AFP that Bab al-Mandeb is not controlled and Mayun is still Houthi, four days after their coalition said the strait had been \"cleansed\". Analytical judgment: the retracted-claim prior has now produced two worked examples inside a week, from opposite sides, which upgrades it from a caution to the file's default handling of all territorial and maritime claims. The quantified picture is unaffected and worse: seven and ten transits a day against about 125 pre-war, strait crude down 27% week-on-week to 10.1 million barrels against 74% of pre-war, Kpler's bypass flows at 6.7 million barrels and roughly double pre-war, thirteen UKMTO warnings in thirteen October days, and the IMO's 24 seafarers killed across 93 incidents. One genuine answer came back: the GEM NO.2's twenty-two Indian crew are safe, confirmed by a minister rather than a belligerent.",
    },
    {
      title: 'Taiwan: the struck VLCC is Taiwanese-managed, which moves the exposure from price to hull',
      body:
        "There is a fresh Taiwan reading today and it is not about cost. Vanguard Tech identified the GEM NO.2 as a 2017-built, 302,000 dwt VLCC managed in Taiwan and owned by Global Energy Maritime, a joint venture linked to U-Ming Marine Transport, reportedly carrying two million barrels of Saudi crude; one open-source account described it as Taiwan-registered, and the Indian crew figure came from Delhi, not Taipei. Analytical judgment: every Taiwan assessment in this file has run through delivered energy cost — the CPC losses, the unvoted NT$415 billion package with its NT$180.94 billion of subsidy and NT$233.83 billion of capital injection, the early-2027 insolvency assessment. A Taiwanese-managed hull hit on the Gulf side of Hormuz adds a second channel: Taiwan's merchant exposure is not only what it pays for cargo but the vessels its operators have in the water. The solvency-not-price prior stands and the crude-is-not-gas prior with it, but both now understate the position. Watch whether any Taipei ministry comments on a Taiwan-managed vessel being struck, whether U-Ming or its joint venture confirms the identification, and whether the legislature's package is still framed purely as a subsidy question.",
    },
  ],
  casualtyNotes: {
    us:
      "The combat series holds at 17 killed and 440 wounded, undisclosed for an eleventh cycle. One American civilian was killed at King Khalid International; that death is carried on the \"other\" line because this series is bounded to the combat count, and the boundary is stated rather than quietly crossed. CENTCOM's figure of 18 is still unreconciled and there is no Pentagon response to the Congressional Research Service count of at least 81 aircraft and drones lost or damaged. CENTCOM's own blockade series — thirteen vessels destroyed over twelve weeks, 130 rerouted, three disabled — is differently bounded from the 270-plus redirected carried here and is not merged.",
    israel:
      "No disclosed Israeli casualty. The IDF reported a Khan Younis strike killing two Palestinians it linked to Palestinian Islamic Jihad and the Qassam Brigades, with no comment from either group; Gaza's health ministry series of 74,370 killed and 175,371 injured stays parallel. Sixteen days to the election, with the Tatika poll reversing the Netanyahu bloc's lead of ten days earlier and neither bloc near 61.",
    iran:
      "No new official toll and a thirty-second day without a confirmed attack on a host state's territory. UN experts called on Tehran on 10 October to halt all executions and described Iran as the most prolific executioner per head of population; the roster holds at 70 since January. The rial sits at 265,000–270,000 tomans against about 155,000 in January, and the minimum wage has fallen from roughly $105 to $63 without moving in rials. The IAEA still cannot verify roughly 440.9 kg of 60% material and the Panel of Experts mandate expired on 26 September.",
    other:
      "The delta is the day's dominant fact: twelve killed and 309 wounded at King Khalid International on 10 October, on GACA's own figures, including one American civilian, two Bangladeshis and nationals of Egypt, Jordan, Syria, Palestine and Sudan. The wounded are adopted here because a regulator published a count, where the \"several\" from 8 October was not. The third-country-casualty prior holds in its sharpest form yet: of twelve dead, eight were nationals of states not party to this war. The GEM NO.2's twenty-two Indian crew are safe; the Acers' casualties off Qatar remain unquantified.",
  },
};

export default data;
