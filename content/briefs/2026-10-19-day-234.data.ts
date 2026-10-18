import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "ESCALATING, and the declared objective changed. Netanyahu said he had instructed Israel's security agencies to pursue bringing down the Islamic Republic and pledged to eliminate the Iranian threat within two years or sooner, eight days before the vote and hours after Trump issued a \"Complete and Total Endorsement\" of him. A belligerent that had bounded itself to capability denial has now named regime removal.",
      risk7d:
        "Extreme and worsening. Egypt's National Defence Council approved a defensive deployment to Saudi Arabia and the presidency pledged \"all necessary and possible forms of support\", with the parliamentary vote postponed to Monday. Iran seated a sanctioned missile-industry chief as defence minister who said US troops would leave \"in a horizontal position\", and Mohsen Rezaei said Tehran has a plan more devastating than the 12- and 40-day wars.",
      spillover:
        "Critical. A projectile struck a residential area in Najran and a Saudi National Guard helicopter crashed there killing two officers; the Houthi-run Saba put nine dead in a Saada home. The Wall Street Journal reported that Iran has given the Houthis training and tactical guidance for the Saudi campaign, which Tehran denies, and Pakistan and Iran suspended cross-border movement at Taftan and Gabd-Rimdan.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: "Netanyahu via Fox News, i24News and a Likud video; Trump on Truth Social",
      event: "Israel names regime removal as the objective, eight days before the vote",
      summary:
        "Netanyahu said he had instructed Israel's security agencies to pursue bringing down the Islamic Republic, told i24News Hebrew that the threat \"is like cancer\" and would return unless the regime is removed, and pledged in a Likud video to \"eliminate the Iranian threat\" within two years or sooner. He accused Iran, Hezbollah and Hamas of trying to interfere in the 27 October election. Trump issued a \"Complete and Total Endorsement of Bibi Netanyahu\", calling him a \"Great Warrior Prime Minister\" and writing \"BIBI NETANYAHU WILL NEVER LET YOU DOWN!\"; asked about America doing the Iran work without him, Trump said \"I am not inclined to do so\". Netanyahu replied: \"Together we will complete the mission!\"",
      impact:
        "The stated Israeli war aim moves from denying a capability to removing a government, which is the one objective no negotiated instrument can deliver. It is also the clearest breach yet of the bounding Netanyahu himself set on the Iran front, and it arrives with an American presidential endorsement attached eight days before a ballot in which both blocs last polled at 51 seats.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: "The Egyptian presidency and MP Mostafa Bakry via The National; Badr Abdelatty via Gulf News",
      event: "Cairo crosses from pre-authorisation to an approved deployment",
      summary:
        "Egypt's National Defence Council, convened by President Abdel Fattah el-Sisi, approved a defensive troop deployment to Saudi Arabia, according to MP Mostafa Bakry, and the presidency said Egypt would provide Saudi Arabia \"all necessary and possible forms of support\". The parliamentary vote Sisi requested in an emergency session was postponed to Monday. Badr Abdelatty spoke with Prince Faisal bin Farhan about reducing tensions, and the Egyptian and Turkish foreign ministers jointly called for renewed US-Iran negotiations. No Saudi request has been published and Riyadh has issued no response.",
      impact:
        "The pre-authorisation prior resolves in one cycle and in the direction of entry: a council decision is an instrument, not a speech. Cairo is now the fourth prospective belligerent on the Saudi side, and the only one to have moved an organ of state. Riyadh has answered neither Egypt nor Trump's proposal that it accept Israeli help, which leaves two offers of force outstanding and unanswered.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "Iran's parliament and Mehrdad Akhlaghi Ketabchi via Gulf News, Al Jazeera and Fox News",
      event: "Tehran seats a sanctioned missile-industry chief at defence",
      summary:
        "Iran's parliament approved Mehrdad Akhlaghi Ketabchi as defence minister. He has led the Defence Industries Organisation since 2013, was placed under UN sanctions in 2007 and is under US and EU sanctions; Al Jazeera described him as responsible for developing many of Iran's missile systems. Gulf News reports he replaces Aziz Nasirzadeh, killed in the US-Israeli strike of 28 February; Fox News reports he replaces interim minister Majid Ebn al-Reza. Akhlaghi said that if the United States resumes attacks \"they themselves and the region will suffer enormous damage\", said Iran had prepared for the \"Mother of All Bombs\", and warned that if Trump drops \"a single bomb\" US troops would be carried out \"in a horizontal position\".",
      impact:
        "The portfolio left vacant by the war's first day is filled by the man who built the weapons being used, which is a procurement signal rather than a diplomatic one. The two accounts of whom he replaces are held apart rather than reconciled. Mohsen Rezaei separately said Iran has prepared a plan \"more devastating\" than the 12- and 40-day wars.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: "Abbas Araghchi via The National, Fox News and Gulf News",
      event: "Iran puts a dated reopening of Hormuz back on the table through Qatar",
      summary:
        "Foreign Minister Abbas Araghchi said Iran's proposal to reopen the Strait of Hormuz within seven days \"remains on the table\", with the strait opening on day six and negotiations beginning on day seven if Washington accepts Iran's conditions. He said the plan had been submitted through Qatar and that \"the decision now rested with Washington\", and that Iran was open to dialogue based on \"mutual respect and credible guarantees\" but would not surrender sovereign rights under pressure. On X he wrote that Iran \"emerged even stronger\" from the last round, that \"we have unfinished jobs too\", and accused Netanyahu of driving the United States into war \"to stay out of jail\". Trump said the United States could \"soon finish the job\".",
      impact:
        "This is the first bridging mechanism in weeks with a timetable, a named channel and a stated decision-holder, and it is the only item on the board that could move the ceasefire probability. It is also unpriced: the conditions are not published, and the same minister spent the day promising unfinished business. A dated offer and a declared regime-change objective are now live on the same cycle.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "Saudi Civil Defence and Maj. Gen. Turki al-Maliki via Gulf News; the Houthi-run Saba and Yahya Saree; Yemen's armed forces via Fox News",
      event: "Najran becomes the day's casualty theatre and the tolls do not agree",
      summary:
        "A projectile fired from Yemen struck a residential area in Najran, injuring six and damaging three homes and three vehicles; Saudi Civil Defence called it \"a flagrant violation of international humanitarian law\". A Saudi National Guard AH-6i crashed in Najran killing two officers, which the coalition attributed to a technical malfunction and which Houthi spokesman Yahya Saree claimed as an Apache shot down; it is not established that these are the same aircraft. The Houthi-run Saba agency said a Saudi airstrike on a Saada home killed nine and wounded 16, most of them women and children. The coalition said it destroyed UAVs over the Eastern and Riyadh regions and intercepted two ballistic missiles aimed at Khamis Mushait. Yemen's armed forces reported 1,326 strikes in 24 hours under \"Operation Dawn of Yemen\" and claimed 370 Houthis killed.",
      impact:
        "Four tolls from four publishers on one day, none independently verified and none merged here. The contested-count prior gains an aircraft: a crash the coalition calls mechanical and the Houthis call a kill, with no wreckage evidence published by either.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'medium',
      source: "The National; Gulf News; carrier notices",
      event: "Riyadh's airport reopens and most of the carriers do not come back",
      summary:
        "King Khalid International Airport reopened on Sunday, closing the three-date dispute carried here, though a Gulf News entry timed at 12:04 that morning still described it as suspended. The schedules did not follow. Cathay Pacific remains suspended to 31 January 2027, Philippine Airlines to 29 November, Scoot to 2 December, Lufthansa's Riyadh service to 18 November and Dammam to 30 November, KLM and SalamAir to 31 October, Air France, Air India, IndiGo and Akasa to 24 October, Oman Air to 22 October and Delta's Atlanta-Riyadh launch to March 2027. British Airways plans one daily flight from 3 November; Qatar Airways, Air Arabia and Pakistan International have no date; Malaysia Airlines resumed Jeddah and Madinah on 18 October.",
      impact:
        "The sovereign-prices-its-own-risk prior holds in its sharpest form: the state has declared the facility safe and the market has not agreed. Reopening is a government decision; a schedule is a commercial one, and a quarter of the suspensions now run past the Israeli and American votes.",
    },
    {
      id: 7,
      direction: 'mixed',
      importance: 'medium',
      source: "Trump on Truth Social and Fox News; Chris Wright via ABC and CNN; Scott Bessent via NBC; JD Vance via CBS; Sen. Tim Kaine via Fox News Sunday",
      event: "Washington spends another cycle on Russia and concedes the price point",
      summary:
        "Trump said he did not want to \"drive, foolishly, Russia away from the bargaining table\", that Russia is doing \"very little, if anything, to help the Islamic Republic of Iran\", and accused Zelenskyy of targeting Russian diesel refineries. Energy Secretary Chris Wright called the Russia sanctions waiver a \"carrot\" to end the war, said \"Russia exports today, zero diesel\" and that pump prices \"never got remotely close to $5 a gallon\"; Scott Bessent said gas prices \"will come down by the new year\"; JD Vance said Iran is \"shooting at every commercial ship that they can\" and that the administration will invoke the Defence Production Act. Trump told Fox: \"I thought oil would be much higher when I did it,\" calling the price \"not good politically\". Sergey Lavrov is expected in Tehran on Monday. Brent settled at $109.86, its highest since 19 May.",
      impact:
        "The leverage-spent-elsewhere prior holds and the price-objective-met prior gains a confession from the party it is aimed at. Designation of an Iranian bank remains the last unfired Brent trigger. Lavrov's arrival in Tehran is the first Russian principal-level move of this phase.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'medium',
      source: "The IRGC via Al Jazeera; UKMTO via Iran International; The Wall Street Journal; Ali Shirazi via Tasnim",
      event: "A mine claim, a tug hit, and a reported Iranian hand in the Houthi campaign",
      summary:
        "The IRGC said an oil tanker it described as \"violating regulations\" caught fire after striking a sea mine, and its navy said a commercial vessel exploded after hitting one; Iranian television aired a 21-second video it said showed the explosion. UKMTO reported a southbound tug struck by two unidentified projectiles northeast of Khor Fakkan in the UAE, damaged but continuing its route, with one person lightly injured. The Wall Street Journal, citing intelligence briefings, reported that Iran has assisted Houthi attacks on Saudi Arabia with training and tactical guidance, which Tehran has repeatedly denied. Ali Shirazi of Iran's police said Tehran had established a new order for Gulf and Hormuz shipping and energy transit \"without the slightest US intervention\". Parliament Speaker Ghalibaf announced a coming \"Persian Gulf Data Authority\": \"Assist them and face our enforcement.\"",
      impact:
        "The claims-falsified-from-both-sides prior holds: a mine claim with video but no hull named, against a CENTCOM attribution last week of a projectile rather than a mine. The WSJ report is the first intelligence-sourced attribution of Iranian participation in the Saudi campaign and sits directly against Baqaei's standing denial.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 17 · WIA: 440 (AP/CENTCOM combat series)",
      delta: '+0 disclosed',
      status:
        "A nineteenth consecutive cycle with nothing disclosed on the combat series, recorded as an absence of disclosure rather than a lull. The Day 216 gap against CENTCOM's 18 is unanswered for a nineteenth day, the June Port Shuaiba investigation is unreleased, and the CRS count of at least 81 US aircraft and drones lost or damaged is unanswered. The Defence Department inspector general's report to Congress of hundreds of structures hit on US bases and dozens of aircraft remains a congressional disclosure rather than a casualty release. The Iraq theatre's closing series stands at 123 killed and 499 wounded.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: '+0',
      status:
        "No addition on the war series, on the cycle Israel's stated objective changed: Netanyahu instructed the security agencies to pursue bringing down the Islamic Republic and pledged to eliminate the Iranian threat within two years or sooner, eight days before the vote. Israeli strikes in Gaza killed four people including a 14-year-old boy, carried on the parallel Gaza series. Israeli police opened an investigation into an alleged assault on French, Belgian and Polish diplomats in Taybeh in the West Bank; Marco Rubio said he was \"very disturbed\" by footage of the settler attack on Washington Post photographer Heidi Levine and Ambassador Mike Huckabee demanded prosecution. President Aoun said a Lebanese military delegation will join talks with Israel and the United States in Tampa on 20 October.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: '+0 official',
      status:
        "No new official war toll and a fortieth day with no confirmed Iranian attack on a host state's territory. HRANA's annual audit is uncontested by Tehran for a third day and now carries a disaggregation: 47 of the at least 2,003 executed were women, 230 death sentences were recorded including at least 16 against women, and four of those executed were minors. Hengaw names six women facing execution over the January protests and counts at least 106 protest-related death sentences of which 35 have been carried out; a group of UN experts called Iran \"by far the most prolific executioner per capita\". HRANA separately documents 63 armed incidents in the south-east between 31 March and 10 October with at least 94 killed and 33 wounded, superseding the 37-incident series carried here.",
    },
    other: {
      cumulative: "KIA: 3,697+ · WIA: 11,176+ (Yemen, Iraq, Gulf states, maritime)",
      delta: '+0',
      status:
        "No addition to the rolled-up line, and four unmerged attributed figures added beneath it. Saudi Civil Defence reports six injured by a projectile in a Najran residential area. The coalition reports two officers killed in the crash of a National Guard AH-6i at Najran, attributed to a technical malfunction and claimed by the Houthis as a shoot-down. The Houthi-run Saba agency says a Saudi airstrike on a Saada home killed nine and wounded 16, mostly women and children; Saudi Arabia has not commented. Yemen's armed forces claim 370 Houthis killed in 1,326 strikes over 24 hours, unverified. One person was lightly injured on the tug struck off Khor Fakkan.",
    },
  },
  exec:
    "Israel's declared objective changed. Netanyahu said he had instructed Israel's security agencies to pursue bringing down the Islamic Republic, told i24News the threat \"is like cancer\" that returns unless the regime is removed, and pledged in a Likud video to eliminate the Iranian threat within two years or sooner — eight days before the 27 October vote and hours after Trump issued a \"Complete and Total Endorsement\" of him, writing \"BIBI NETANYAHU WILL NEVER LET YOU DOWN!\" Netanyahu replied: \"Together we will complete the mission!\" Egypt moved in the same cycle from pre-authorisation to approval: the National Defence Council approved a defensive deployment to Saudi Arabia, the presidency pledged \"all necessary and possible forms of support\", and the parliamentary vote was postponed to Monday. Iran's parliament confirmed Mehrdad Akhlaghi Ketabchi — head of the Defence Industries Organisation since 2013, under UN, US and EU sanctions — as defence minister; he said US troops would be carried out \"in a horizontal position\" if Washington drops \"a single bomb\". Against that, Abbas Araghchi said Iran's seven-day plan to reopen the Strait of Hormuz, submitted through Qatar, \"remains on the table\", the strait opening on day six and talks on day seven, and said the decision now rests with Washington. Trump said instead that the United States could \"soon finish the job\". A projectile struck a residential area in Najran injuring six; a Saudi National Guard helicopter crashed there killing two officers, which the Houthis claim as a shoot-down; and the Houthi-run Saba said a Saudi strike on a Saada home killed nine. King Khalid airport reopened and most carriers did not. Direction holds escalating; the thirty-day probability holds at 5.",
  implications: [
    {
      title: "⭐ The war aim changes, eight days before a ballot",
      body:
        "For months this file has recorded an Israeli position bounded by Netanyahu's own words: the Iran front was about capability, not government. That bound is gone. Netanyahu says he has instructed Israel's security agencies to pursue bringing down the Islamic Republic, tells i24News the threat \"is like cancer\" that returns unless the regime is removed, and promises to eliminate it within two years or sooner. Analytical judgment: under the multi-clock framework this collapses the negotiation-capacity clock from the outside. Regime removal is the one objective no instrument on the table can deliver — not the seven-point proposal, not enrichment dilution, not Araghchi's dated reopening — because no government negotiates its own dissolution. It also arrives inside a double pre-vote window with an American presidential endorsement attached, which makes it impossible to separate the war aim from the ballot. Two readings are live and this file holds both: a campaign promise priced for 27 October, with both blocs last polled at 51 seats and neither at 61; or a genuine redefinition that survives the vote. The discriminating evidence is not rhetoric but tasking, and the claim here is about tasking — the security agencies, instructed. Against it, Trump's \"I am not inclined\" to do the Iran work without Netanyahu makes American continuation conditional on an Israeli election result, which is a dependency neither government has acknowledged.",
    },
    {
      title: "Cairo moves an organ of state while Tehran offers a timetable",
      body:
        "The pre-authorisation prior opened yesterday and resolves today in the direction of entry. Egypt's National Defence Council approved a defensive deployment to Saudi Arabia and the presidency pledged \"all necessary and possible forms of support\"; only the parliamentary vote, postponed to Monday, now stands between Cairo and a legal basis for force. Analytical judgment: a council decision is an instrument, not a speech, and it falsifies the assessment carried here that Egypt would stay out. Riyadh has still not requested it, and has still not answered Trump's proposal that it accept Israeli help — two offers of force outstanding, neither acknowledged, which is itself the Saudi position. Running against all of it is the only de-escalatory mechanic on the board with a date on it: Araghchi's seven-day plan, submitted through Qatar, the strait opening on day six and talks on day seven, with the decision said to rest in Washington. It is unpriced — the conditions are unpublished — and the same minister spent the day promising \"unfinished jobs\". Trump answered with \"finish the job\". The thirty-day probability holds at 5 because a dated offer whose terms are secret, running against a declared regime-change objective and a fourth state's approved deployment, does not yet move a number.",
    },
    {
      title: "Taiwan: the buyer's terms are still open",
      body:
        "The Alaska arrangement acquired detail this cycle without acquiring commitment. CPC Corporation would take 30 percent of Alaska LNG's output — about 6 million tonnes a year — over 20 years, with investment of up to $4.4 billion, against a project costed at $44.5 to $54.5 billion and a 1,300-kilometre pipeline from the North Slope, earliest supply 2032. Taiwan's Ministry of Economic Affairs confirms \"significant progress\" but says ownership stakes, final price, investment structure and purchasing obligations all remain open; Premier Cho Jung-tai framed the government's role as ensuring \"the stability and resilience of the entire energy supply\"; Beijing's Mao Ning objected on one-China grounds. Analytical judgment: the substitution-chain prior holds unchanged. A political announcement with four unsettled commercial terms and a 2032 start does nothing for an eleven-day gas buffer sitting downstream of Ras Laffan's audited three-to-five-year repair horizon. Australian and American cargoes at nearly 60 percent of this year's supply remain the only realised mitigation and stay spot-exposed to a Brent that settled at $109.86. A ninth consecutive day of silence from U-Ming, Global Energy Maritime and every Taipei ministry on the GEM NO.2 identification is acknowledged as posture rather than padded.",
    },
  ],
  casualtyNotes: {
    us:
      "A nineteenth consecutive cycle with nothing disclosed, recorded as an absence of disclosure. The Day 216 gap against CENTCOM's 18 is unanswered for a nineteenth day and the June Port Shuaiba investigation is unreleased.",
    israel:
      "No addition on the war series, on the cycle the stated objective changed to bringing down the Islamic Republic. Gaza deaths stay on their parallel series; the West Bank diplomat assault and the Levine attack are recorded as separate incidents under investigation.",
    iran:
      "No new official war toll and a fortieth day without a confirmed Iranian attack on a host state's territory. HRANA's 2,003 is uncontested for a third day and now disaggregated at 47 women; Hengaw names six women facing execution and counts 35 protest-related executions carried out of at least 106 sentences.",
    other:
      "No addition to the rolled-up line and four new attributed figures beneath it: six injured at Najran, two Saudi officers killed in the AH-6i crash the Houthis claim as a shoot-down, nine killed in Saada per the Houthi-run Saba, and 370 Houthis claimed killed by Yemen's armed forces. None adopted, none summed.",
  },
};

export default data;
