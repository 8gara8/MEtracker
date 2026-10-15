import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "ESCALATING, and the escalation is now measurable in the defender's ledgers rather than in new targets. A person with direct knowledge told Reuters the top three floors of Aramco's Dhahran headquarters were badly damaged, including chief executive Amin Nasser's office; the Energy Ministry has not revised its limited-fire account and Aramco declined to comment. A Saudi-led coalition spokesman put King Khalid International's toll at 17 killed and 333 injured for 7-11 October and said the airport had been attacked 20 times this month.",
      risk7d:
        "Extreme and held, with the pause now carrying a target set as well as an expiry. CNN reported that US planners have drawn up strike options including the GBU-43/B against Iranian energy infrastructure and nuclear sites, Pickaxe Mountain among them, with one source conceding the weapon is not a deep penetrator. The White House declined to comment on sensitive plans and said Trump keeps all options on the table. No decision has been reported, eleven days before the Israeli vote and eighteen before the US one.",
      spillover:
        "Critical, and the campaign's stated purpose widened from the oil price to the US election. Two senior Iranian officials told Reuters the maritime campaign aims to keep prices high and influence the midterms, was decided at the highest levels, and will extend into the Gulf of Oman; one said it will be complete closure soon. Brent nonetheless slipped to about $105.60. Houthi missiles struck the presidential palace in Aden, and the EU-GCC summit set for 24 October in Riyadh was postponed.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'pivotal',
      source: "Reuters via Euronews; the Saudi Energy Ministry",
      event: "The contested Dhahran account sharpens on one side only, and the publisher of record goes silent",
      summary:
        "A person with direct knowledge told Reuters that the top three floors of Saudi Aramco's Dhahran headquarters were badly damaged, including the office of chief executive Amin Nasser. Two sources said operations were continuing as normal, with some staff told to work from home and some work moved to offices abroad. Aramco did not respond to Reuters' request for comment, and the Saudi Energy Ministry has not revised its account of a limited fire in an administrative building with no deaths or injuries.",
      impact:
        "Yesterday's dominant question was whether the two accounts would be reconciled; they were not. The contesting account became more specific while the state's did not move and the company itself declined to speak. The only party holding an engineering assessment is the one that will not publish it, and Khurais, Rabigh and the Riyadh refinery remain unassessed.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: "The Saudi-led coalition spokesman via Al Jazeera; GACA; CBS News",
      event: "The King Khalid toll gains a third publisher with a third number",
      summary:
        "A Saudi-led coalition spokesman said attacks on King Khalid International Airport killed 17 people and injured 333 between 7 and 11 October, and said the Houthis had attacked the airport 20 times during October. That sits against the civil aviation authority's windowed aggregate of at least 20 killed and 356 injured for 6-11 October, and against the 13 killed carried here as the single-event figure. Separately, missiles intercepted over Riyadh sent debris onto homes and injured four people.",
      impact:
        "The five-day window question is answered not by an extension but by a different arm of the same state publishing a different count over a shifted window. Three series are held separately and not summed. The four debris injuries are the campaign's first published debris toll and retire the open check under the interception-is-not-free prior.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "The Wall Street Journal and Flightradar24 via Aerospace Global News; The National; CBS News",
      event: "Riyadh's calendar empties and the commercial hedges move past the vote",
      summary:
        "The EU-GCC leaders' summit set for 24 October in Riyadh was postponed. King Khalid International's suspension now runs to midnight on 18 October rather than the 17 October the government named, while Lufthansa suspended Riyadh flights through 18 November. Airlines are relocating aircraft worth up to $4 billion, and the number parked fell from 134 to 38 by midday on 14 October on Flightradar24 data. An insurance report seen by the Wall Street Journal put six damaged aircraft at about $375 million insured.",
      impact:
        "The sovereign-prices-its-own-risk prior broadens from one conference to a calendar, and Lufthansa becomes the second instrument after the FAA to price disruption past 3 November. The only figures behaving like an audit came from outside the state: an insurance ledger and a flight tracker.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: "CNN and the White House via Iran International",
      event: "US planners draw up strike options including the \"mother of all bombs\" against energy and nuclear targets",
      summary:
        "CNN, citing multiple US officials and people familiar with military planning, reported new strike packages that could employ the GBU-43/B Massive Ordnance Air Blast, a roughly 21,600-pound weapon, if Trump orders renewed attacks. One source said Trump had ordered packages covering \"a lot of energy infrastructure\"; another said nuclear-site plans, including Pickaxe Mountain, explicitly included the MOAB. One person called it effective for clearing a large area but \"definitely not designed as a deep penetration warhead\". A White House official said the administration does not comment on sensitive plans and that Trump \"keeps all options on the table\".",
      impact:
        "The named-expiry prior acquires a target set without acquiring a decision, and the leak carries its own capability caveat: the munition named is, on one source's account, unsuited to the deepest target in the set. Energy infrastructure is the asset class both belligerents are already destroying.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "Two senior Iranian officials and a US military official via Reuters and MarineLink; Trading Economics",
      event: "Iran's stated objective widens from the oil price to the US vote, and an official says closure is coming",
      summary:
        "Two senior Iranian officials told Reuters the maritime campaign is intended to keep oil prices high and to influence the November midterms, that it was decided at the highest levels of Iran's leadership and coordinated across the ruling system, and that Iran plans to extend operations into the Gulf of Oman and farther waters. One said the aim is to frustrate efforts by the United States and its allies to bring down global oil prices; another said it will be complete closure soon. A US military official said the IRGC now uses unarmed spotters in small boats because US strikes destroyed much of Iran's radar. Brent slipped to about $105.60.",
      impact:
        "Yesterday's stated-price objective is now a stated electoral objective, and the claim of coordination across the ruling system is the regime's own assertion about its own coherence, recorded rather than adopted. The first test of the price metric came back negative: record tempo, and the price fell.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'high',
      source: "Marisks, Vanguard Tech, UKMTO, the IMO and the JMIC via CBS News, Splash247 and IranWire",
      event: "A non-belligerent monitor names a third selection rule: the operator",
      summary:
        "The Greek maritime monitor Marisks said ships in Hormuz face \"indiscriminate attacks\" even with tracking switched off, and confirmed that three merchant vessels struck on Tuesday were all operated by the same firm, raising the possibility of operator-linked targeting. Vanguard, the IMO and UKMTO counted at least ten vessels attacked since Sunday and 23 attacks since 1 October, with two seafarers missing; the Joint Maritime Information Center rated the threat \"severe\", its second-highest level. The IMO now records 113 confirmed incidents since late February and 24 seafarers killed. Vanguard Tech identified the attacked tanker as the Barbados-flagged Alfonso, 38,842 dwt, and said the Cape Dao could not be saved.",
      impact:
        "Three accounts of the same selection rule now compete: the IRGC's \"unauthorised route\", Ali Ozmaei's \"navigation systems off\", and Marisks' \"same operator\". Only the third comes from a party with nothing to win, and if the operator is the selector both belligerent rules are pretext.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'high',
      source: "Yemen's health ministry, the Saudi-led coalition and the Houthi military spokesman via Al Jazeera, France 24, L'Orient Today, CNN and CBS News",
      event: "The Houthis strike the Yemeni government's own palace in Aden, and the Medina exemption is contested",
      summary:
        "Five missiles were fired at the al-Maashiq presidential palace in Aden. Yemen's health minister reported at least five killed and 16 wounded; government military sources gave four killed and ten wounded; CNN reported two killed. The government said the prime minister and cabinet were unharmed. Ballistic missiles were also fired at Marib. The Saudi-led coalition said it intercepted a cruise missile over Medina, a city the Houthi military spokesman's own declaration had expressly exempted, and the Houthis called the claim a lie.",
      impact:
        "The contested-count prior gains a fourth live instance in one theatre. The Medina claim is a belligerent-against-belligerent contradiction over the one target class the Houthis had publicly placed off limits, and the first strike on the recognised government's own seat moves the war inside Aden.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'medium',
      source: "The UN, the IMF, Mehr News, CBS News and the FDD Overnight Brief",
      event: "A humanitarian clock is named in weeks, a multilateral forecast arrives already stale, and one legal instrument fires",
      summary:
        "Jorge Moreira da Silva, UN Under-Secretary-General, said in Bangkok that without a US-Iran agreement in the next few weeks the fertilizer mechanism would miss the planting season; five vessels a day are needed, and the Oman-coordinated mechanism could activate within 7 to 10 days of a deal. The IMF's Kristalina Georgieva warned of \"potentially negative spillovers for everybody, everywhere\" and projected Saudi GDP contracting 3.3 percent this year and growing 7.9 percent in 2027, on forecasts prepared before the Riyadh airport attack and assuming Hormuz gradually reopens from March 2027. Iran's central bank governor Abdolnaser Hemmati called collapse claims \"an illusion\". A German court sentenced two men for plotting attacks on pro-Israel figures for Iran.",
      impact:
        "A second clock is now stated in weeks, and it belongs to a third party rather than a belligerent. The IMF's recovery path is the first multilateral date for a Hormuz reopening, and it is published on numbers its own authors say predate the airport attack. The German convictions are a countable instrument.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 17 · WIA: 440 (AP/CENTCOM combat series)",
      delta: '+0 disclosed',
      status:
        "A sixteenth consecutive cycle with nothing disclosed on the combat series, recorded as an absence of disclosure rather than a lull. The American citizen among the thirteen killed at King Khalid stays on the \"other\" line and is still unnamed by the State Department. The Day 216 gap against CENTCOM's 18 is unanswered for a sixteenth day, the June Port Shuaiba investigation is unreleased, and the CRS figure of at least 81 US aircraft and drones lost or damaged draws no Pentagon response. The Pentagon declined to comment on the reported MOAB planning.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: '+0',
      status:
        "No addition, and the state now has two voices on one calendar. IDF Chief of Staff Lt. Gen. Eyal Zamir warned of possible escalation \"across all fronts\" before the 27 October vote, days after Netanyahu ruled out a preemptive strike on Iran in his own voice. Katz's Lebanon threat narrowed from an unconditional widening into Nabatieh and Litani to a condition — further seizure of southern Lebanon if Hezbollah joins an Iranian attack. At least three Hezbollah drones or intelligence aircraft entered the southern Lebanon security zone over the past two weeks. UNIFIL's mandate expires at year-end and Lebanon's president asked Rubio to press Israel. The Ramim Ridge divergence of 24 against 19 is unresolved and held at 24. Eleven days to the vote.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: '+0 official',
      status:
        "No new official war toll and a thirty-seventh day without a confirmed Iranian attack on a host state's territory, the qualifier still attached because the IRGC's claims remain against hulls rather than soil. The man hanged in Kerman is identified as Ali-Sina Mostafavi, a mountaineer and musician executed at dawn on 14 October at Kerman central prison on moharebeh and shooting charges with Supreme Court confirmation — the same case as the Mostafavi death sentence carried here, so the two are merged rather than double-counted. IranWire counts at least seven athletes executed in protest or security cases since 2022. The NCRI's at-least-48 for 30 September to 13 October stays a third series beside Amnesty's at-least-34 subset and the 70-since-January roster. In Sistan and Baluchestan at least 37 armed incidents are recorded this year, eleven JMM-claimed.",
    },
    other: {
      cumulative: "KIA: 3,697+ · WIA: 11,176+ (Yemen, Iraq, Gulf states, maritime)",
      delta: '+0',
      status:
        "No addition to this line, and three new attributed series arrive instead of a reconciliation. The Saudi-led coalition put King Khalid International at 17 killed and 333 injured for 7-11 October, against GACA's at-least-20 and 356 for 6-11 October and the 13 carried as the single-event figure. Interception debris on homes in Riyadh injured four people — the campaign's first published debris toll. The Aden palace stands at five killed and 16 wounded on Yemen's health minister's count, four and ten on government military sources, and two on CNN's. The IMO now records 113 confirmed maritime incidents and 24 seafarers killed, and two seafarers remain missing. Still no Aramco Dhahran casualty figure under either account, and no Dammam toll has ever been published.",
    },
  },
  exec:
    "The contested account of the Dhahran damage sharpened on one side only. A person with direct knowledge told Reuters that the top three floors of Saudi Aramco's headquarters were badly damaged, including the office of chief executive Amin Nasser; two sources said operations were continuing as normal, with some staff told to work from home and some work moved to offices abroad. Aramco did not respond to a request for comment, and the Energy Ministry has not revised its account of a limited fire with no deaths or injuries. The toll at King Khalid International gained a third publisher: a Saudi-led coalition spokesman said attacks there killed 17 people and injured 333 between 7 and 11 October, against the civil aviation authority's at-least-20 and 356 for 6-11 October, and said the airport had been attacked 20 times this month. Riyadh's calendar emptied. The EU-GCC summit set for 24 October was postponed, the airport's closure ran on to 18 October, Lufthansa suspended flights through 18 November, and airlines moved out aircraft worth up to $4 billion, cutting the number parked from 134 to 38. CNN reported that US planners have drawn up strike options including the GBU-43/B \"mother of all bombs\" against Iranian energy infrastructure and nuclear sites; no decision has been reported. Two senior Iranian officials told Reuters the maritime campaign is meant to keep oil prices high and to influence the November midterms, and that \"it will be complete closure soon\". Brent slipped to about $105.60. Houthi missiles struck the presidential palace in Aden. Direction holds escalating; the thirty-day probability falls one point to 5.",
  implications: [
    {
      title: "The account sharpens on one side, the toll gains a third publisher, and the hedges outrun the dates",
      body:
        "Yesterday's dominant question was whether the Dhahran damage would be reconciled. It was not. The contesting account became more specific — the top three floors badly damaged, including the chief executive's own office — while the state's \"limited fire, no casualties\" did not move and Aramco declined to comment at all. The only party holding an engineering assessment is the party that will not publish one, and there is still no assessment for Khurais, Rabigh or the Riyadh refinery against which to measure this one. The same asymmetry runs through the airport. A coalition spokesman put 17 killed and 333 injured across 7-11 October, which neither extends nor supersedes the aviation authority's at-least-20 and 356 across 6-11 October, nor the 13 carried here as the single-event figure. Three arms of one state, three windows, three numbers; under the audited-figure prior none is adopted and none is summed. Analytical judgment: the only figures that behaved like an audit came from outside the state — an insurance ledger putting six damaged aircraft at about $375 million, and Flightradar24 counting parked aircraft down from 134 to 38. Under the multi-clock framework the energy-infrastructure clock stays critical and worsening, and the sovereign-prices-its-own-risk prior broadens from one conference to a calendar: the EU-GCC summit vacated 24 October, the government's own reopening date slipped a day to 18 October, and Lufthansa went to 18 November — the second instrument after the FAA to price disruption past 3 November.",
    },
    {
      title: "Iran names the vote, Washington names the target set, and the price declines anyway",
      body:
        "Two senior Iranian officials told Reuters the shipping campaign is meant to keep oil prices high and to influence the November midterms, that it was decided at the highest levels and coordinated across the ruling system, and that \"it will be complete closure soon\". Against that, Washington's planning leaked: strike packages reportedly covering \"a lot of energy infrastructure\" and nuclear sites including Pickaxe Mountain, with the GBU-43/B named — and one of CNN's own sources conceding the weapon is \"definitely not designed as a deep penetration warhead\". Two belligerents thus published intentions on the same day and neither published a decision. Analytical judgment: the first test of yesterday's stated-price-objective prior came back negative. Attacks ran at their highest of the war — 23 since 1 October, at least ten vessels since Sunday, the threat rated \"severe\" by the Joint Maritime Information Center — and Brent still slipped to about $105.60. A campaign whose own officials name the Brent print as the metric is, on its own terms, failing this week, which makes escalation rather than restraint the predicted response. The sharper disclosure is the selection rule. Marisks, a monitor with nothing to win, found the three ships struck on Tuesday shared one operator. Set against the IRGC's \"unauthorised route\" and Ali Ozmaei's \"navigation systems off\", operator-linked targeting would make both belligerent rules pretext — and Washington's parallel weighing of shadow-fleet sanctions relief to cut freight rates shows how far the price channel now governs policy on both sides.",
    },
    {
      title: "Taiwan: the share arrives before the cargo",
      body:
        "Fresh Taiwan material, and for once it moves on the axis that can move now. The economic affairs minister said the United States will account for more than 20 percent of Taiwan's LNG imports in 2026 — a realised shift in supply geography rather than a pledge. Against it, the structural leg stays distant: CPC would take 6 million tonnes a year and Taiwan would invest up to US$4.4 billion, but the Stimson Center's Michael Cunningham says exports do not begin before 2031 and the Ministry of Economic Affairs says supply could reach Taiwan's domestic grid as early as 2032. The Hudson Institute's Riley Walters notes Taiwan must still secure US$200 billion in credit to complete its strategic investment agreement with Washington, against a 2025 trade surplus with the US of about US$150.1 billion. Analytical judgment: the substitution-chain prior is refined rather than retired. Diversification is delivering where it can — import share, this year — and not where the exposure actually sits, because an eleven-day gas buffer is not relieved by a 2031 or 2032 first cargo. The solvency-not-price prior still governs whether Taipei can sign anything long-term at all. A sixth consecutive day of silence from U-Ming, Global Energy Maritime and every Taipei ministry on the GEM NO.2 identification is acknowledged as posture rather than padded.",
    },
  ],
  casualtyNotes: {
    us:
      "A sixteenth consecutive cycle with nothing disclosed on the combat series, recorded as an absence of disclosure rather than a lull. The Day 216 gap against CENTCOM's 18 is unanswered for a sixteenth day, the June Port Shuaiba investigation is unreleased, and the Pentagon declined to comment on the reported MOAB planning.",
    israel:
      "No addition. Lt. Gen. Eyal Zamir warned of escalation \"across all fronts\" before the vote, days after Netanyahu ruled out a preemptive strike; Katz's Lebanon threat narrowed to a condition. UNIFIL's mandate expires at year-end. The Ramim Ridge divergence of 24 against 19 is held at 24. Eleven days to the vote.",
    iran:
      "No new official war toll and a thirty-seventh day without a confirmed Iranian attack on a host state's territory. The Kerman hanging is identified as Ali-Sina Mostafavi and merged with the death sentence carried here rather than double-counted. The NCRI's at-least-48 stays a third series beside Amnesty's at-least-34 and the 70-since-January roster.",
    other:
      "No addition to this line. The coalition's 17 killed and 333 injured at King Khalid for 7-11 October, GACA's at-least-20 and 356 for 6-11 October, and the 13 single-event figure are held as three separate series. Four people were injured by interception debris in Riyadh — the first published debris toll. The Aden palace stands at five, four and two killed across three publishers. Still no Aramco Dhahran casualty figure under either account.",
  },
};

export default data;
