import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Escalating. US-escorted tankers were hit off Khasab and the IRGC answered US air cover with missile and drone strikes on US positions in Bahrain; a Qatari visit to Tehran produced no announced movement.",
      risk7d:
        "Extreme and unchanged. Each escorted transit now draws an Iranian strike on a host state, and Qatar's reported window closes around 24 November while Washington signals it will wait.",
      spillover:
        "Critical and unchanged. Bahrain reports a civilian industrial facility set on fire, the Houthis fired missiles at Riyadh and Saudi Arabia alerted the Mecca region; Lebanon's president told Iran to stop interfering.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: "IRGC via Press TV and Fars; Bahrain interior ministry via The Peninsula and Gulf News; GCC and Jordan via Iran International; Reuters via Times of Israel",
      event: "IRGC strikes US positions in Bahrain; a civilian industrial site burns",
      summary:
        "The IRGC said it fired missiles and drones at US positions at Al-Riffa and Awali and hit two Patriot radars, in reply to MQ-1 and MQ-9 flights, after Fars reported strikes on Sheikh Isa air base and Juffair. Bahrain's interior ministry said an Iranian strike set a civilian industrial facility on fire, with no injuries. The GCC and Jordan condemned the attack.",
      impact:
        "US escort operations now trigger direct Iranian strikes on a host state.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: "UKMTO via Gulf News and Times of Israel; IRGC via Tasnim",
      event: "Two tankers struck off Khasab; IRGC claims mines under US air cover",
      summary:
        "UKMTO said two tankers leaving the Gulf were hit by projectiles, one in the stern about 11 nautical miles north of Khasab and one in the engine room 17 nautical miles east, with no casualties. The IRGC said US fighters, P-8s and drones covered unauthorized transits, claimed two mine explosions off Khasab and Ghanam Island, and said it downed a 58th MQ-9.",
      impact:
        "The escort model is being tested by fire; Iranian and UKMTO accounts of method differ.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'medium',
      source: "CENTCOM via Shafaq News and Gulf News; Iranian Army via Shafaq; Ahmad Vahidi via Tasnim",
      event: "CENTCOM denies Iranian F-16 claim as the IRGC shows a new missile city",
      summary:
        "The Iranian Army said a domestically built system fired on a US F-16 over the Gulf, forcing an emergency landing. CENTCOM called the claim false and said all US fighter jets in the region are safe and accounted for. IRGC chief Ahmad Vahidi toured an underground missile city, said this is just the beginning, and called Iran's skies a red line.",
      impact:
        "Claim inflation continues alongside a real widening of declared red lines.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: "Kazem Gharibabadi via Times of Israel and Iran International; Araghchi via Press TV and Tasnim",
      event: "Qatari delegation holds talks in Tehran; Araghchi keeps the strait shut",
      summary:
        "Deputy Foreign Minister Kazem Gharibabadi said a Qatari delegation held two hours of talks in Tehran on Friday evening, and called the US blockade an act of war. Speaking at Oman's National Day, Araghchi said the strait stays closed until Washington acknowledges its mistakes and meets earlier commitments, and that regional mediation must be given time. The 60% stockpile stays in Iran.",
      impact:
        "Mediation is alive, but neither sequencing nor the stockpile moves.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: "Windward and TankerTrackers via The Maritime Executive; Andreas Krieg via Al Jazeera; Iran International",
      event: "No Iranian convoy sails; trackers cool on the blockade-run story",
      summary:
        "No Iranian official has confirmed a convoy. TankerTrackers retracted its early alert as wishful thinking, while Windward counts 31 laden sanctioned tankers within a day of the blockade line, and tracked 11 LPG tankers testing it in September and October. Andreas Krieg of King's College London said Iran can circumvent parts of the blockade but cannot break it militarily in a sustainable way.",
      impact:
        "The blockade-as-trigger prior holds, but the trigger has not been pulled.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'medium',
      source: "Trump and Scott Bessent via Iran International; CENTCOM via Gulf News",
      event: "Washington signals patience as Bessent says Iran has no oil on the water",
      summary:
        "Trump told Fox he wants a permanent deal preventing an Iranian bomb and said Saudi Arabia had asked him to let the situation continue for a while. Treasury Secretary Scott Bessent called Iran's rulers wounded cornered animals who will turn on each other and said Iran has no oil on the water. CENTCOM said the blockade has reached 130 consecutive days.",
      impact:
        "Economic coercion remains the US substitute for a renewed campaign.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'medium',
      source: "Financial Times reporting via Press TV",
      event: "FT: CENTCOM warns posture past year-end will degrade readiness",
      summary:
        "The Financial Times, as carried by Press TV, reported CENTCOM telling administration officials that holding the current deployment past year-end could degrade readiness and leave the US less able to answer other threats. Israeli officials are urging strikes before the new year, citing a shrinking window, and Mossad chief Roman Gofman lobbied in Washington. Trump is described as in no hurry.",
      impact:
        "The interceptor and political-will clocks press against Washington's patience.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'medium',
      source: "Saudi-led coalition via AFP and Times of Israel; Saudi Civil Defense via Iran International; Gulf News",
      event: "Houthis fire missiles at Riyadh; Saudi Arabia alerts the Mecca region",
      summary:
        "The coalition said it intercepted three Houthi ballistic missiles headed for Riyadh early Saturday and another toward the western region late in the day, with no damage reported. Saudi Civil Defense issued a danger alert for the Mecca region. The Houthis warned airlines that Saudi airspace is unsafe, and Etihad extended cancellations to Riyadh and Dammam through 30 November.",
      impact:
        "The second chokepoint war reaches the Saudi capital and the holy-city region.",
    },
    {
      id: 9,
      direction: 'mixed',
      importance: 'low',
      source: "Joseph Aoun via Times of Israel",
      event: "Aoun tells Iran to stop interfering and Israel to withdraw",
      summary:
        "In his Independence Day speech, Lebanese President Joseph Aoun said friendship does not give Iran the right to interfere in Lebanon's decisions, declared the era of weapons outside the state over, and urged Hezbollah to disarm. He told Israel to withdraw from every inch of Lebanese territory, stop its attacks and return captives, saying occupation does not create security.",
      impact:
        "Beirut restates the Lebanon gap against both Tehran and Israel.",
    },
    {
      id: 10,
      direction: 'escalating',
      importance: 'low',
      source: "UKMTO via Iran International",
      event: "UKMTO puts Hormuz traffic 65% below pre-war",
      summary:
        "UKMTO recorded 263 transits in the week to 18 November, down from 308, about 65% below pre-war levels, and six tanker attacks, four in the strait. It counts 106 incidents in the strait since 28 February and at least 19 strikes on vessels in November, the highest monthly total of the war. It says US-facilitated transit figures cannot be verified.",
      impact:
        "Attack tempo is rising even as escorted transits continue.",
    },
    {
      id: 11,
      direction: 'mixed',
      importance: 'medium',
      source: "hormuz.now; Trading Economics",
      event: "AIS tanker crossings rise to 2.3 a day; Brent near $92.6",
      summary:
        "hormuz.now counted 16 AIS-visible tanker crossings in seven days, 2.3 a day against 47.6 pre-crisis, and one LNG carrier, with 54 commercial ships in all. PortWatch tonnage stays at 0.8% of normal and Ras Laffan port calls at 28%. Brent was about $92.57, set for a third weekly fall as Trading Economics cites abundant supply and an IEA surplus.",
      impact:
        "Oil is priced as surplus while gas flows remain near zero.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split and Hegseth's 18 Epic Fury dead are held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. Press TV quotes CENTCOM as reporting no damage or casualties in Bahrain, and CENTCOM denies any F-16 was hit. The fifty-third cycle with no disclosure statement.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: "+0",
      status:
        "No addition on the war series and no IDF casualty located this cycle. Gaza and West Bank deaths stay on their parallel series.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: "+0 official",
      status:
        "No new official war toll; IRGC, Army and Navy statements report no Iranian casualties. Darzi's claim of more than 5,000 dead is held apart.",
    },
    other: {
      cumulative: "KIA: 3,716+ · WIA: 11,214+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0",
      status:
        "No change adopted. Bahrain, UKMTO and Saudi Arabia report no casualties this cycle. Houthi-run and Yemeni government battlefield claims are held apart.",
    },
  },
  exec:
    "Iran answered US escort flights over Hormuz with repeated strikes on Bahrain, while a Qatari delegation held talks in Tehran. The IRGC said it fired missiles and drones at US positions at Al-Riffa and Awali and hit two Patriot radars, after earlier claiming strikes on Sheikh Isa air base and Juffair. Bahrain's interior ministry said an Iranian strike set a civilian industrial facility on fire, with material damage and no injuries; the GCC and Jordan condemned it. Press TV quoted CENTCOM as saying attacking drones were shot down without damage or casualties. At sea, UKMTO reported two tankers struck by projectiles off Khasab, without casualties; the IRGC said US aircraft had covered \"unauthorized\" transits and claimed two mine explosions and a 58th MQ-9 downed. CENTCOM rejected an Iranian Army claim that it damaged a US F-16, saying all US fighter jets are \"safe and accounted for.\" Deputy Foreign Minister Kazem Gharibabadi said the Qatari team held two hours of talks and called the blockade an act of war; Abbas Araghchi, at Oman's National Day, said the strait stays shut until Washington accepts Iran's conditions, while mediation \"must be given a chance.\" No tanker convoy has sailed, and TankerTrackers now calls the idea \"wishful thinking.\" Saudi Arabia intercepted three Houthi missiles aimed at Riyadh and one toward the western region, and issued a danger alert for the Mecca region. hormuz.now counts 2.3 tanker crossings a day against 47.6 pre-crisis and one LNG carrier in seven days; Brent is about $92.6. No new casualties were adopted. Direction stays escalating; the probability holds at 6.",
  implications: [
    {
      title: "Escort against blockade: the war at sea runs both ways",
      body:
        "Under the multi-clock framework, the active-deadline clock moved from talk of an Iranian convoy to a fight over US-escorted traffic. The IRGC says F-16s, F/A-18s, F-35s, P-8s, helicopters and drones flew cover on Friday night for \"unauthorized\" tankers; it claims two mine explosions, off Khasab and near Ghanam Island, and a 58th MQ-9 downed. UKMTO describes a different mechanism: two tankers leaving the Gulf were hit by projectiles 11 and 17 nautical miles from Khasab, without casualties. Its weekly count shows 263 transits to 18 November, about 65% below pre-war, and at least 19 strikes on vessels this month, the war's highest monthly total. The IRGC then carried the fight ashore, firing at Al-Riffa and Awali in reply to MQ-1 and MQ-9 flights and claiming two Patriot radars. Bahrain reports a fire at a civilian industrial site and no injuries; Press TV quotes CENTCOM saying drones were downed without damage. CENTCOM's flat denial of the F-16 claim fits the claim-inflation prior, but the pattern matters more than any one claim: each escorted transit now draws an Iranian strike on a host state, the strike-the-hosts and proportional-reply priors in operation. The convoy has not sailed. Windward counts 31 laden sanctioned tankers near the blockade line, but TankerTrackers retracted its early read. Andreas Krieg's view that Iran cannot break the blockade militarily, only make it costly to enforce, fits the evidence. Direction stays escalating; the probability holds at 6.",
    },
    {
      title: "Qatar in Tehran, Oman at the podium, Washington content to wait",
      body:
        "The negotiation-capacity clock flickered without moving. Gharibabadi says a Qatari delegation held two hours of talks in Tehran on Friday evening; Araghchi called such visits routine, then used Oman's National Day to say the strait stays shut until Washington \"acknowledges its mistakes\" and meets earlier commitments, while asking that regional mediation be given time. Tehran's conditions remain maximal: an end to war on all fronts, unfrozen assets, lifted oil sanctions and an end to the blockade, which Gharibabadi called an act of war. The uranium red line holds. Washington signals patience. Trump told Fox he wants a permanent deal and said Saudi Arabia asked him to let the situation continue for now; Bessent calls Iran's rulers \"wounded cornered animals\" and says Iran has no oil on the water. The FT, via Press TV, reports CENTCOM warning that holding the posture past year-end degrades readiness, so the interceptor and political-will clocks press against that patience. Qatar's reported window closes around 24 November, two days away. Israel was publicly quiet this cycle; the caretaker-risk prior rests on earlier reporting of Netanyahu's push and the Mossad chief's lobbying. The second chokepoint widened again: the Houthis fired three missiles at Riyadh and one toward the west coast, and Saudi Arabia alerted the Mecca region. Lebanon's Aoun told Iran to stop interfering and Israel to withdraw \"from every inch,\" the Lebanon gap restated by Beirut itself.",
    },
    {
      title: "Taiwan: crossings tick up under escort, but the escort is now the target",
      body:
        "No fresh Taiwan-specific development today; prior assessments hold. hormuz.now counts 16 AIS-visible tanker crossings in seven days, 2.3 a day against 47.6 pre-crisis and up from 1.9, with one LNG carrier in seven days and two in 30. That is a floor, since AIS misses dark ships. PortWatch still puts tanker tonnage at 0.8% of normal to 15 November and Ras Laffan port calls at 28%. Brent was about $92.57 on 20 November, set for a third weekly fall as Trading Economics cites abundant supply, record Hormuz flows claimed by US Energy Secretary Chris Wright and the IEA's 2 mb/d surplus: the oil-priced-as-surplus prior holds. The risk for Asian LNG buyers is that the ships being hit are the escorted ones. If US cover draws mines, projectiles and strikes on Bahrain, every escorted transit is priced as a combat event, and the few LNG cargoes moving stay hostage to that cycle. Fars's target list still includes Qatar. For Taipower and CPC, the markers remain QatarEnergy's force majeure to end-December, crossings against the 2.3-a-day baseline and the unpassed supplementary budget.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. No US casualty reported this cycle; the 11/12 split and Hegseth's 18 Epic Fury dead stay held apart from the 15/8 series.",
    israel:
      "No addition on the war series and no IDF casualty located this cycle; no Lebanese toll located.",
    iran:
      "No new official war toll. Darzi's 5,000-plus claim is held apart. HRANA's execution series (at least 2,003 to 8 October) carries unmerged; HRANA and Iran Human Rights pages returned 403 this cycle.",
    other:
      "No change. The Houthi-run 41 dead in 24 hours, the reported 19 killed on a boat, the Yemeni government's 193 Houthi fighters killed or wounded, the missing ADNOC crew member, UN and IMO counts and GCC figures are held apart.",
  },
};

export default data;
