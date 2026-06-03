import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 97 bifurcates: the Lebanon track posts the cycle's largest publicly-named de-escalatory signal since the April 16 cessation even as the Iran-Gulf track posts the cycle's broadest publicly-named kinetic salvo since the April 8 ceasefire. De-escalatory: Round 4 Israel-Lebanon talks closed Wed Jun 3 with cycle-first Round-4-produced joint statement renewing the fragile ceasefire and creating 'pilot' security zones inside Lebanon where Hezbollah is banned; ceasefire contingent on cessation of Hezbollah fire and evacuation of Hezbollah operatives south of the Litani River; LAF to take full control; tracks reconvene week of Jun 22 (CTV News, Arab News, CBS News). House passed Iran WPR 215-208 with four Republican cross-overs (Massie, Fitzpatrick, Barrett, Davidson) — cycle-first successful House WPR on Iran in four attempts this year (CNN Politics, NPR, PBS NewsHour). Trump: deal 'could happen, like, over the weekend' (ABC News). Escalatory: Iran's cycle-broadest Gulf drone+missile salvo — Kuwait MoD intercepted 13 BMs + 17 drones since dawn; Kuwait Int Airport T1 major damage, 1 KIA (Indian national) + 63 WIA — cycle-first Kuwait civilian KIA; 3 missiles at Bahrain US 5th Fleet HQ intercepted (Al Jazeera, Euronews, Fox News). CENTCOM disabled Botswana-flagged tanker M/T Lexie via Hellfire — 6th tanker since blockade, first non-Iranian-flagged; CENTCOM also struck Qeshm ground control station (The Hill, Xinhua). IDF Chief: 'no ceasefire for our forces' in Lebanon. Araghchi: contact not cut off but 'no progress.' 30-day ceasefire probability revises 11 → 14.",
      risk7d:
        "Seven-day risk holds critical. Active-deadline clock runs Day 100 (Sat Jun 6) → Trump 'over the weekend' Iran-deal timeline → Lebanon joint-statement durability test → Senate WPR uptake (rolling 7-14d) → next Iran-Gulf retaliatory window. Negotiation-capacity clock: Lebanon track advances on Round 4 joint statement while Iran-direct track produces cycle-broadest Gulf salvo inside same 24h. Political-will clock posts cycle-first House WPR success — formal constraint, not yet operative. Kinetic-readiness clock escalates on Kuwait T1 civilian KIA + Bahrain 5th Fleet HQ targeting + Botswana tanker + Qeshm strikes. Lebanon kinetic clock: IDF Chief 'no ceasefire for our forces' opens gap between joint-statement text and operational posture.",
      spillover:
        "Spillover holds critical. Cycle-first Kuwait civilian KIA from Iran-direct attack (1 KIA, 63 WIA, T1 major damage, ops suspended) extends spillover band to direct Iran-on-Arab-state civilian casualty. Bahrain US 5th Fleet HQ targeted (intercepted). CENTCOM Botswana tanker disabled — first non-Iranian-flagged. Brent ~$97 third consecutive session of gains. PGSA $2M/transit yuan-billed continues; ~2,000 ships stranded; Hormuz 95th day of effective closure. Lebanon MOH war-cumulative 3,355 (142 killed past 72h). Qaani Bab el-Mandeb framing carries.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'high',
      source: "CTV News / Arab News / CBS News / Times of Israel / Washington Institute",
      event:
        "Round 4 Israel-Lebanon talks closed Wed Jun 3 with cycle-first Round-4-produced joint statement: renewing the fragile ceasefire and creating 'pilot' security zones inside Lebanon where Hezbollah banned; LAF takes full control; political + security tracks reconvene week of Jun 22",
      summary:
        "Joint statement issued after fourth round of US-mediated talks at the State Department said the renewed ceasefire 'is contingent on a complete cessation of Hezbollah fire and the evacuation of all Hezbollah operatives' from areas south of the Litani River. Creates 'pilot' security zones where Hezbollah banned, with LAF to take full control. Establishment mechanism unspecified. Reconvene week of Jun 22 with view toward comprehensive agreement; US continues facilitating in interim. Builds on Jun 1 framework focused on preventing Israeli strikes on Beirut southern suburbs while Hezbollah halted northern Israel attacks.",
      impact:
        "Cycle-first publicly-named Round-4-produced joint Israel-Lebanon statement and first operationalization of Day 96 bifurcated State (political) / Pentagon (security under Colby) format. Pilot-zones-with-LAF-control is the structural concession that broke the Rounds 1-3 deadlock — Hezbollah-disarmament now has geographic phasing handle (south of Litani first). Skeptical counter: IDF Chief 'no ceasefire for our forces' framing inside same 24h opens text-vs-posture gap; zone establishment mechanism unspecified; LAF capacity south of Litani historically constrained.",
    },
    {
      id: 2,
      direction: 'de-escalating',
      importance: 'high',
      source: 'CNN Politics / NPR / PBS NewsHour / Al Jazeera / NBC News',
      event:
        "House passed Iran war powers resolution 215-208 Wed Jun 3 with four Republican cross-overs (Massie, Fitzpatrick, Barrett, Davidson) — cycle-first successful House WPR on Iran in four attempts this year; goes to Senate where text has 'teeth' requiring Trump to end war without congressional approval",
      summary:
        "Vote 215-208 to limit President Trump's war powers in Iran. Republican Reps Thomas Massie, Brian Fitzpatrick, Tom Barrett, Warren Davidson crossed party lines. Fourth House WPR vote on Iran this year — first to succeed. Resolution had been set for vote two weeks ago but Republican leaders sent House home early for May recess when Democratic-backed measure appeared to have enough Republican votes. Senate version has 'teeth' — would require Trump to end war without congressional approval; would still need House to clear that version, then Trump could veto. War reaches 100th day Saturday Jun 6.",
      impact:
        "Political-will clock posts cycle-first publicly-named formal House constraint on executive war powers. Skeptical counter: WPR does not constrain commander-in-chief authority absent Senate concurrence + override of presumptive Trump veto; precedent for non-binding House WPR votes on Iran goes back to 2020. But four Republican cross-overs at 215-208 margin signal political-will clock floor is rising inside Day 100 framing.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "Al Jazeera / Euronews / CBS News / Fox News / Iran International",
      event:
        "Iran launched cycle-broadest Gulf drone+missile salvo Wed Jun 3 early morning: Kuwait International Airport Terminal 1 major damage; 1 KIA (Indian national) + 63 WIA; Kuwait MoD intercepted 13 BMs + 17 drones since dawn; 3 missiles at Bahrain US 5th Fleet HQ intercepted; 2 additional Kuwait-bound missiles missed/crashed — cycle-first Kuwait civilian KIA from Iran-direct attack",
      summary:
        "Kuwait Ministry of Defence detected and intercepted 13 ballistic missiles and 17 drones from Iran since dawn. Debris fell in residential areas. Kuwait International Airport Terminal 1 sustained major damage; ops suspended; flights diverted to Dammam and elsewhere. Kuwait Foreign Ministry: 1 KIA (Indian-national resident) + 63 WIA. Iran-claimed targets included Camp Arifjan and Ali Al-Salem Air Base. Three Iranian missiles at Bahrain US 5th Fleet HQ intercepted by combined US/Bahrain air defense (no US personnel harmed); 2 additional Kuwait-bound missed/crashed. Tehran framed strikes as 'self-defense' after US Qeshm and Botswana tanker strikes.",
      impact:
        "Cycle-first Kuwait civilian KIA from Iran-direct attack — Gulf spillover band extends to direct Iran-on-Arab-state civilian casualty for first time. Cycle-broadest single-night Gulf salvo per Kuwait MoD intercept count. Bahrain US 5th Fleet HQ targeting marks Iran-direct strike on hardened US naval command position. Skeptical counter: Iran-named targets (Ali Al-Salem, Arifjan) suggest IRGC framed as anti-base not anti-civilian; high intercept rate limited mass-casualty floor.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: "The Hill / Xinhua / Times of Israel / People's Daily / Iran International",
      event:
        "CENTCOM US warplane fired Hellfire into engine room of Botswana-flagged tanker M/T Lexie transiting toward Kharg Island — 6th tanker disabled since April blockade, first non-Iranian-flagged; CENTCOM also struck Iranian military ground control station on Qeshm Island framed as self-defense response to attempted Iranian strike on US communications tower south of Qeshm",
      summary:
        "M/T Lexie struck in international waters approaching Kharg Island, the major Iranian oil-export hub. Unladen ship's crew ignored repeated warnings, failing to comply with US directions over 24h. CENTCOM: 6th vessel disabled since US launched blockade of Iranian ports in April. Earlier Wed, CENTCOM struck Iranian ground control station on Qeshm Island in Strait of Hormuz, framed as self-defense response to attempted Iranian strike on US communications tower south of Qeshm. Iran's Foreign Ministry condemned both strikes as ceasefire violation and international law breach.",
      impact:
        "First non-Iranian-flagged tanker disabled by US blockade — escalates US enforcement floor on Iran oil-export interdiction. Skeptical counter: M/T Lexie was unladen (no oil cargo at intercept); Hellfire targeted engine room (disable not destroy). But Iran framing of US strikes as ceasefire violation provides public justification for IRGC Kuwait/Bahrain retaliation — cycle's clearest publicly-named cause-and-effect kinetic exchange.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: "CNBC / Trading Economics / Al Jazeera / Times of Israel / ABC News",
      event:
        "Araghchi: contact with US not cut off but 'no progress' in negotiations; Trump: deal 'could happen, like, over the weekend'; Brent toward $97/barrel Wed third consecutive session of gains; US crude inventory drew 6.8M barrels (6th consecutive weekly drawdown if confirmed); IDF Chief: 'no ceasefire for our forces' in Lebanon",
      summary:
        "Araghchi Wed Jun 3 told media contact with US not cut off but no progress made in negotiations. Trump told reporters a deal 'is going very well' and 'if it happens, it could happen, like, over the weekend' — frames Day 100 (Sat Jun 6) as proximate timeline. Brent climbed toward $97/barrel Wed in third consecutive session of gains on geopolitical premium; US crude inventory drew 6.8M barrels per industry data (6th consecutive weekly drawdown if confirmed by EIA). IDF Chief separately stated 'no ceasefire for our forces' in Lebanon as Netanyahu publicly defended heated weekend Trump call. Hormuz in 95th day of effective closure.",
      impact:
        "Mixed. Araghchi framing tempers Day 96 IRNA-Tasnim split de-escalatory read but maintains channel-not-cut-off baseline. Trump 'over the weekend' is cycle-first publicly-named US-presidential-level near-72h Iran-deal timeline. IDF Chief framing opens text-vs-posture gap on Lebanon joint statement — second cycle-day of IDF principal-level public ceasefire denial after Day 96 Katz.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 (Bahrain 5th Fleet HQ Iranian missile salvo intercepted, no US personnel harmed)',
      status:
        "Bahrain US 5th Fleet HQ targeted by 3 Iranian missiles intercepted by US/Bahrain air defense, no US personnel harmed. CENTCOM disabled Botswana-flagged tanker M/T Lexie via Hellfire — 6th since blockade; struck Iranian ground control station Qeshm Island. House passed Iran WPR 215-208 — cycle-first success. Round 4 Israel-Lebanon joint statement renews ceasefire + pilot security zones. Trump: deal 'could happen, like, over the weekend.' Sledgehammer operational.",
    },
    israel: {
      cumulative: 'KIA: 49 (Iran-front 47 + Lebanon-front 2 truce-period) · WIA: 8,617+',
      delta: '+0 confirmed Day 97 KIA',
      status:
        "Round 4 cycle-first Round-4-produced joint Israel-Lebanon statement: renews ceasefire + creates pilot security zones where Hezbollah banned + LAF takes full control; reconvene week of Jun 22. IDF Chief: 'no ceasefire for our forces' in Lebanon — second cycle-day of IDF principal-level public ceasefire denial after Day 96 Katz. Netanyahu defended heated weekend Trump call.",
    },
    iran: {
      cumulative:
        "LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · Hengaw 6,620+ mil · 3.2M displaced",
      delta: '+0 new published (CENTCOM Qeshm strike casualty figures pending)',
      status:
        "Araghchi: contact with US not cut off but 'no progress.' Iran fired cycle-broadest Gulf salvo (Kuwait MoD 13 BMs + 17 drones intercepted); Kuwait Int Airport T1 major damage, 1 KIA + 63 WIA; Bahrain 5th Fleet HQ 3 missiles intercepted. Tehran framed strikes as 'self-defense' after US Qeshm + Botswana tanker. PGSA continues; Hormuz 95th day of effective closure.",
    },
    other: {
      cumulative:
        'Lebanon MOH ~3,355 killed / 10,044+ injured; Iraq 117+; Gulf 33+ KIA / 72+ wounded (cycle-first Kuwait civilian KIA Day 97); UAE 14+9 wounded; Kuwait 1 KIA Day 97 + 63 WIA Day 97; Bahrain no casualties (intercepts)',
      delta: 'Kuwait +1 KIA / +63 WIA cycle-first Kuwait civilian KIA from Iran-direct attack; Lebanon MOH +142 killed past 72h cumulative through Jun 3',
      status:
        "Cycle-first Kuwait civilian KIA from Iran-direct attack (Indian-national resident at Kuwait Int Airport T1) + 63 WIA; airport ops suspended; flights diverted Dammam. Bahrain US 5th Fleet HQ 3 missiles intercepted (no casualties). Lebanon MOH war-cumulative 3,355 (142 past 72h). Round 4 joint statement: pilot security zones where Hezbollah banned + LAF takes full control.",
    },
  },
  exec:
    "Day 97 bifurcates: the Lebanon track posts the cycle's largest publicly-named de-escalatory signal even as the Iran-Gulf track posts the cycle's broadest publicly-named kinetic escalation since the April 8 ceasefire. Round 4 Israel-Lebanon talks closed Wed Jun 3 with cycle-first Round-4-produced joint statement renewing the fragile ceasefire and creating 'pilot' security zones inside Lebanon where Hezbollah is banned; ceasefire 'contingent on a complete cessation of Hezbollah fire and the evacuation of all Hezbollah operatives from areas south of the Litani River'; LAF to take full control; political + security tracks reconvene week of Jun 22 (CTV News, Arab News, CBS News). House passed Iran war powers resolution 215-208 with four Republican cross-overs (Massie, Fitzpatrick, Barrett, Davidson) — cycle-first successful House WPR on Iran in four attempts this year; Senate version has 'teeth' requiring Trump to end war without congressional approval (CNN Politics, NPR, PBS NewsHour). Trump: deal 'could happen, like, over the weekend' (ABC News). Iran launched cycle-broadest Gulf drone+missile salvo — Kuwait MoD intercepted 13 BMs + 17 drones since dawn; Kuwait Int Airport Terminal 1 major damage, 1 KIA (Indian-national) + 63 WIA — cycle-first Kuwait civilian KIA from Iran-direct attack; 3 missiles at Bahrain US 5th Fleet HQ intercepted, no US personnel harmed (Al Jazeera, Euronews, Fox News). CENTCOM disabled Botswana-flagged tanker M/T Lexie via Hellfire — 6th since blockade, first non-Iranian-flagged; also struck Iranian ground control station Qeshm (The Hill, Xinhua). IDF Chief: 'no ceasefire for our forces' in Lebanon. Araghchi: contact not cut off but 'no progress.' Brent ~$97 third consecutive session of gains. 30-day ceasefire probability revises 11 → 14. Day 100 falls Saturday June 6.",
  implications: [
    {
      title:
        "Round 4 Israel-Lebanon talks produced cycle-first Round-4-produced joint statement renewing the fragile ceasefire and creating 'pilot' security zones where Hezbollah is banned; pilot-zones framework is the structural concession that broke the Hezbollah-disarmament deadlock that blocked Rounds 1-3",
      body:
        "Cycle's largest publicly-named de-escalatory signal on the Lebanon track since the April 16 cessation. Pilot-zones-with-LAF-control is the structural concession that broke the deadlock — Hezbollah-disarmament now has a geographic phasing handle (south of Litani first). Reconvene week of Jun 22 sets next checkpoint inside the 45-day Lebanon ceasefire extension expiry (~late June/early July). Skeptical counter: IDF Chief 'no ceasefire for our forces' framing opens gap between joint-statement text and operational Israeli posture; pilot-zone mechanism unspecified; LAF capacity south of Litani historically constrained.",
    },
    {
      title:
        "House passed Iran WPR 215-208 with four Republican cross-overs — cycle-first successful House WPR on Iran in four attempts this year, first formal House constraint on executive war powers since war began Feb 28; Senate text has 'teeth'; Day 100 (Sat Jun 6) falls inside 72h",
      body:
        "Cycle-first publicly-named formal House constraint on executive war powers — fourth attempt this year, first to succeed. Four Republican cross-overs (Massie, Fitzpatrick, Barrett, Davidson) at 215-208 margin signal political-will clock floor is rising inside Day 100 framing. Senate version has 'teeth' requiring Trump to end war without congressional approval; would still need House to clear Senate version, then face presumptive Trump veto. Skeptical counter: WPR does not constrain commander-in-chief authority absent Senate concurrence + override; previous Iran WPRs (2020, 2024) were signaling instruments. But four-R cross-over at 215-208 narrows executive war-powers political-cover space.",
    },
    {
      title:
        "Taiwan: Iran's cycle-broadest Gulf drone+missile salvo + cycle-first Kuwait civilian KIA from Iran-direct attack extend Gulf spillover band to direct Iran-on-Arab-state civilian casualty; CENTCOM Botswana-flagged tanker disable marks first non-Iranian-flagged vessel disabled under US blockade; Brent ~$97 third consecutive session gain narrows EIA reference-band tracking-room; Hormuz 95th day of effective closure",
      body:
        "Cycle-first Kuwait civilian KIA from Iran-direct attack (Indian-national at Kuwait Int Airport T1) extends Gulf spillover band to direct Iran-on-Arab-state civilian casualty. Kuwait MoD intercept rate (13 BMs + 17 drones since dawn) is cycle-broadest publicly-named single-night Gulf count. Bahrain US 5th Fleet HQ targeting marks Iran-direct strike on hardened US naval command position. CENTCOM Botswana tanker disable is first non-Iranian-flagged vessel under April US blockade — escalates US enforcement floor on Iran oil-export interdiction. Brent ~$97 Wed third-session gain on geopolitical premium; US crude inventory drew 6.8M barrels (6th consecutive weekly drawdown if confirmed). EIA reference band ($106 May-June) holds but tracking-room narrowing. PGSA $2M/transit yuan-billed continues; ~2,000 ships stranded; Hormuz 95th day of effective closure. China ~37.7% of all Hormuz crude. LNG cover through September holds; TSMC 2026 CapEx framework-signature path near 8%. Energy-infrastructure clock holds tightening with second chokepoint named at IRGC principal level + first non-Iranian-flagged vessel disabled added — but Lebanon joint statement + House WPR + Trump 'over the weekend' reopens narrow de-escalatory path; no structural revision of LNG-cover dominant case yet.",
    },
  ],
  casualtyNotes: {
    us:
      "No US KIA Day 97. Bahrain 5th Fleet HQ targeted (3 missiles intercepted). CENTCOM disabled Botswana tanker + struck Qeshm. House passed Iran WPR 215-208 (cycle-first success). Round 4 joint statement on Lebanon. Trump: 'could happen, like, over the weekend.'",
    israel:
      "No IDF KIA reported. Round 4 cycle-first Round-4-produced joint statement: pilot security zones where Hezbollah banned + LAF takes full control; reconvene week of Jun 22. IDF Chief: 'no ceasefire for our forces' — second cycle-day of IDF principal-level ceasefire denial after Day 96 Katz.",
    iran:
      "Araghchi: contact not cut off but 'no progress.' Iran fired cycle-broadest Gulf salvo (13 BMs + 17 drones intercepted); Kuwait T1 major damage, 1 KIA + 63 WIA; Bahrain 5th Fleet HQ 3 missiles intercepted. Tehran framed as 'self-defense.' PGSA continues; Hormuz 95th day closure.",
    other:
      "Cycle-first Kuwait civilian KIA from Iran-direct attack + 63 WIA; airport ops suspended. Bahrain intercepted. Lebanon MOH 3,355 cumulative (142 past 72h). Round 4 pilot security zones framework.",
  },
};

export default data;
