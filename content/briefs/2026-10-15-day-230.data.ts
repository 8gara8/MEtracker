import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "ESCALATING, and the escalation was the designation of yesterday being acted on. A Houthi missile hit Aramco's Dhahran headquarters; the Saudi Energy Ministry called it a limited fire with no casualties, while three people with direct knowledge told Reuters the complex suffered extensive damage with fire across several floors. The Houthis claimed the strike, named Dhahran, a Riyadh refinery and King Khalid airport, and vowed to continue.",
      risk7d:
        "Extreme and held, with the pause now carrying a stated expiry. Trump is holding off on new strikes during the midterm season but said the pause might end within weeks and that the United States would \"do a number\" on Iran. A fourth cycle closes with no decision on joining the Saudi campaign, and the open-ended \"soon\" of three cycles has become an interval that falls on the far side of 3 November.",
      spillover:
        "Critical, and the maritime campaign now has a stated purpose. Iranian officials told Reuters new tactics against shipping began about ten days ago in order to keep oil prices high. Two ships are confirmed sunk: Singapore's MPA confirmed GFS Pride sank with all 21 crew evacuated, and the bulker Cape Dao also sank. Saudi Arabia moved its flagship investment conference to a hybrid format with airstrips outside Riyadh offered as the alternative.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: "Saudi Energy Ministry, the Houthi military spokesman and three sources via The National, Reuters via US News and the Jerusalem Post",
      event: "⭐ The target designated yesterday is struck, and the state's own damage account is contested",
      summary:
        "A Houthi missile hit Saudi Aramco's Dhahran headquarters on Tuesday night, the company's nerve centre since 1952 and the site of the kingdom's first commercial oil discovery in 1938. The Saudi Energy Ministry described a limited fire in an administrative building with no casualties; three people with direct knowledge told Reuters the complex suffered extensive damage with fire spreading across several floors. The Houthis claimed the strike, said ballistic missiles, cruise missiles and drones were launched at Dhahran, an Aramco refinery in Riyadh and King Khalid International Airport, vowed to continue attacking Saudi airports and oil facilities, and urged shipping companies, civilians and workers to leave them as \"legitimate military targets\". The coalition said it intercepted a further ballistic missile aimed at Riyadh.",
      impact:
        "The designation recorded yesterday was acted on inside one cycle, and the gap between the ministry's \"limited fire\" and Reuters' three sources is the first time a Saudi state description of damage to its own energy infrastructure has been publicly contradicted by named reporting. Both accounts are carried; neither is adopted. There is still no published damage assessment for Khurais, Rabigh or the Riyadh refinery against which to measure it.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: "Reuters via Middle East Eye and The Circuit",
      event: "Saudi Arabia moves its flagship investment conference to a hybrid format",
      summary:
        "Reuters reported, citing two people familiar with the matter, that the kingdom will let executives attend the Future Investment Initiative remotely, with some participants still able to reach Riyadh through airstrips outside the capital or in neighbouring Gulf states.",
      impact:
        "The commercial-horizon prior acquires a sovereign instance: the government that named 17 October as King Khalid International's reopening date has itself built a remote option for its showcase event. This is the first measurable cost of the air campaign to the kingdom's investment programme rather than to its airlines, and Riyadh took it rather than having it priced in by a third party.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "Trump via Fox News, Iran International",
      event: "Trump holds the midterm pause but gives it a horizon for the first time",
      summary:
        "Trump is holding off on new strikes on Iran during the midterm season but warned the pause might end within weeks, saying the United States would \"do a number\" on Iran. At an Arizona rally he said Iran had made him promise to stop targeting its leaders and that he \"might have gone too far\", and said of the disclosure of B-2 timings that \"leakers should be shot\".",
      impact:
        "A fourth cycle closes with no decision on joining the Saudi campaign, but the open-ended \"soon\" of the last three cycles has become a stated interval that falls on the far side of 3 November. A horizon is not a decision and is recorded as a belligerent's statement of intent, not a schedule.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: "Singapore MPA, UKMTO, Vanguard Tech and the IRGC via gCaptain, Seatrade Maritime, Fox News",
      event: "Two ships are confirmed sunk in and near the Strait of Hormuz",
      summary:
        "Singapore's Maritime and Port Authority confirmed the Singapore-flagged container ship GFS Pride sank after a projectile strike caused damage and fire, with all 21 crew evacuated safely; the Antigua and Barbuda-flagged bulker Cape Dao also sank, having been struck on 23 September in an attack that killed one seafarer. The Singapore-registered GFS Giselle suffered hull damage with all 22 crew safe. UKMTO issued four warnings for 13 October covering one tanker and three container ships, taking October's tally to 24 warnings and three advisories. The IRGC, via Sepah News, claimed a container ship carrying 2,500 containers struck a mine south of the strait while on an \"unauthorised and dangerous\" route.",
      impact:
        "GFS Pride is the second confirmed sinking of a large ocean-going ship in this war. The mine claim arrives from the actor whose earlier mined-supertanker footage four named analysts read as fabricated, so it is recorded as a claim against the MPA's confirmation of a projectile strike, not merged with it.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "Iranian officials via Reuters and Fox News; CENTCOM",
      event: "Iranian officials tell Reuters the new maritime tactics are about price",
      summary:
        "Iranian officials said they began using new tactics against shipping about ten days ago, reportedly in order to keep oil prices high. CENTCOM said it destroyed an Iran-linked surveillance dhow in the Gulf of Oman and called Iranian harassment claims \"FALSE\".",
      impact:
        "The first time a belligerent's own officials have named price as the objective of the maritime campaign rather than enforcement, sovereignty or interdiction of smuggling. It converts the bypass-as-target prior from an inference about effect into a stated intention, and it means the campaign's success metric is the Brent print rather than any hull count.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'high',
      source: "IEA October Oil Market Report via Invezz and Fox News; US CPI",
      event: "The IEA releases 100 million barrels and warns the diesel squeeze runs into next year",
      summary:
        "The IEA said constraints in the diesel market could keep prices elevated well into next year, with global diesel exports down 700,000 barrels a day year on year in September and other supply only partly offsetting a loss of 1.3 million barrels a day from Russia and the Middle East. It said record tanker rates are squeezing Asian refiners and that member countries are releasing 100 million barrels from emergency reserves. Brent traded around $106.16 to $106.60 and WTI around $95.04 to $95.79. US consumer prices rose 3.7 percent in the twelve months to September, driven by a 7.1 percent jump in gasoline.",
      impact:
        "The G7 100-million-barrel release, carried here as a pledge with a single named national tranche, is now described by the IEA as in progress. The price-governs-war prior holds: Brent above $106 with a stated Iranian intention to keep it there, and a US gasoline print landing three weeks before the midterms.",
    },
    {
      id: 7,
      direction: 'mixed',
      importance: 'high',
      source: "Netanyahu and Israel Katz via Al-Monitor, Haaretz, Fox News",
      event: "Netanyahu rules out striking Iran before the vote while Katz widens the Lebanon threat",
      summary:
        "In an Army Radio interview Netanyahu said he opposed a preemptive strike on Iran before the 27 October election — \"It is not convenient for us, it's no good\" and \"Even if Iran fires missiles at us they will blame me\" — warned Israel would respond forcefully if attacked, said the Iranian regime \"must go\" but that he does not expect it to fall before the vote, and declined to say whether Israel is helping Riyadh. Defence Minister Israel Katz threatened to expand Israel's security zone in southern Lebanon into the Nabatieh and Litani regions, said Hezbollah's Beirut stronghold would not be spared and said a million Shi'ites would be displaced.",
      impact:
        "The commitment-under-review prior is answered on the Iran front by the principal himself and is retired. The Lebanon front moved the opposite way on the same day, so the Israeli calendar now has a floor under one front and no ceiling over the other.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'medium',
      source: "Yemen's government, the NCRI, Ghaempanah and the Elysee via Fox News, NCRI, Euronews, Al Jazeera",
      event: "Yemen's government takes the Taiz siege to the Security Council as the execution ledger gains a competing count",
      summary:
        "Yemen's government asked the UN Security Council to help lift the Houthi siege of Taiz, where the health ministry says medicines, IV fluids and fuel are nearing depletion. The NCRI reported at least 48 prisoners executed between 30 September and 13 October, and Iran hanged a man accused of an armed attack in Kerman carried out in support of Reza Pahlavi. Vice President Ghaempanah said any talks with Washington require the approval of the Supreme National Security Council and the Supreme Leader. Macron will visit Kuwait, the UAE, Bahrain and Qatar from 19 to 21 October to discuss the energy crisis.",
      impact:
        "The NCRI's 48 is a third series beside Amnesty's at-least-34 uprising subset and the 70-since-January roster, and is held separately rather than merged. Ghaempanah's condition raises the authorising threshold for any talks at the moment Washington named a horizon for resuming strikes.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 17 · WIA: 440 (AP/CENTCOM combat series)",
      delta: '+0 disclosed',
      status:
        "A fifteenth consecutive cycle with nothing disclosed on the combat series, recorded as an absence of disclosure rather than a lull. The American citizen among the thirteen killed at King Khalid stays on the \"other\" line and is still unnamed by the State Department. The Day 216 gap against CENTCOM's 18 is unanswered for a fifteenth day, the June Port Shuaiba investigation is unreleased, and the CRS figure of at least 81 US aircraft and drones lost or damaged draws no Pentagon response. CENTCOM destroyed an Iran-linked surveillance dhow in the Gulf of Oman and called Iranian harassment claims \"FALSE\"; its four-disabled and 135-redirected series since 14 July is still unmerged with the 5 October series.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: '+0',
      status:
        "No addition, and the principal closed one front while his defence minister opened another. Netanyahu told Army Radio he opposed a preemptive strike on Iran before the 27 October election, said the regime \"must go\" but that he does not expect it to fall before the vote, and declined to say whether Israel is helping Riyadh; Israel and Iran have not exchanged fire since June. Katz threatened to widen the southern Lebanon security zone into Nabatieh and Litani and said a million Shi'ites would be displaced. The Ramim Ridge wounded divergence of 24 against 19 in one liveblog is unresolved and held at 24. Gaza's health ministry series stays parallel. Twelve days to the vote.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: '+0 official',
      status:
        "No new official war toll and a thirty-sixth day without a confirmed Iranian attack on a host state's territory, the qualifier still attached because the IRGC's claims remain against hulls rather than soil. The execution ledger gains a third series: the NCRI reported at least 48 prisoners executed between 30 September and 13 October, which is not merged with Amnesty's at-least-34 uprising-related subset or the roster of 70 since January and 194 on death row. Iran hanged a man accused of an armed attack in Kerman carried out in support of Reza Pahlavi. Vice President Ghaempanah said any talks with Washington require Supreme National Security Council and Supreme Leader approval.",
    },
    other: {
      cumulative: "KIA: 3,697+ · WIA: 11,176+ (Yemen, Iraq, Gulf states, maritime)",
      delta: '+0',
      status:
        "No published casualties for the Aramco Dhahran strike under either account of the damage, which is itself the open question: the Energy Ministry's \"no casualties\" accompanies a \"limited fire\", while the extensive-damage account from three Reuters sources carries no toll of its own. All 21 crew of the GFS Pride and all 22 of the GFS Giselle are safe; the Cape Dao's single seafarer death of 23 September was already inside the IMO's at-least-24 series across more than 100 incidents. GACA's windowed aggregate of at least 20 killed and 356 injured for 6-11 October is not extended. No Dammam toll has ever been published. The Yemeni Network's Taiz toll, Houthi-run health authority figures and the WHO's Yemen series stay on separate attributed lines.",
    },
  },
  exec:
    "The target the Houthis designated yesterday was struck, and the kingdom's own account of the damage is now contested. A Houthi missile hit Saudi Aramco's Dhahran headquarters on Tuesday night. The Saudi Energy Ministry described a limited fire in an administrative building with no casualties; three people with direct knowledge told Reuters the complex suffered extensive damage, with fire spreading across several floors. The Houthis claimed the strike, said ballistic missiles, cruise missiles and drones were launched at Dhahran, an Aramco refinery in Riyadh and King Khalid International Airport, vowed to continue attacking Saudi airports and oil facilities, and urged shipping companies, civilians and workers to leave them as \"legitimate military targets\". The coalition said it intercepted a further ballistic missile aimed at Riyadh. Saudi Arabia moved its flagship Future Investment Initiative to a hybrid format so executives can attend remotely, offering airstrips outside the capital or in neighbouring Gulf states. At sea, Singapore's Maritime and Port Authority confirmed the container ship GFS Pride sank after a projectile strike, all 21 crew evacuated, and the bulker Cape Dao also sank; the IRGC claimed a container ship struck a mine on an \"unauthorised and dangerous\" route. Iranian officials told Reuters they adopted new tactics against shipping about ten days ago, reportedly to keep oil prices high. The IEA said member countries are releasing 100 million barrels and warned diesel constraints could keep prices elevated well into next year; Brent traded around $106. Trump held his midterm pause but said it might end within weeks. Netanyahu ruled out striking Iran before the 27 October vote. Direction holds escalating; the thirty-day probability falls one point to 6.",
  implications: [
    {
      title: "The designation was acted on, and the defender's account of its own damage is now contested",
      body:
        "Yesterday this file recorded a published target list and a limited fire that it declined to merge. Today the two merged themselves: the Houthis claimed the Dhahran strike, named Aramco's headquarters, a Riyadh refinery and King Khalid airport among their targets, and told shipping companies and workers to leave oil facilities and airports. Analytical judgment: under the multi-clock framework the energy-infrastructure clock stays critical and its trajectory worsens, because the question has moved from whether the designation would be acted on to how far the campaign now extends. The sharper item is epistemic. The Saudi Energy Ministry said limited fire, no casualties; three people with direct knowledge told Reuters the complex took extensive damage with fire across several floors. This is the first time a Saudi state description of damage to its own energy infrastructure has been publicly contradicted by named reporting, and it arrives against a baseline the kingdom has never published — there is still no damage assessment for Khurais, Rabigh or the Riyadh refinery. Both accounts are carried and neither is adopted; the divergence is itself the finding. Riyadh's own reading of the cost is visible instead in what it did rather than what it said: moving the Future Investment Initiative to a hybrid format, with airstrips outside the capital offered as the alternative, is a sovereign act of pricing disruption past the 17 October reopening date the same government set.",
    },
    {
      title: "The decision clock acquires a horizon, the Israeli front acquires a floor, and Iran names price as the objective at sea",
      body:
        "Three clocks moved in different directions on one day. Trump's \"soon\", open-ended for three cycles, became \"within weeks\", with \"do a number on Iran\" attached and an admission at an Arizona rally that he had promised Iran to stop targeting its leaders and \"might have gone too far\". A stated interval is not a decision, and it is recorded as a belligerent's statement of intent; but the political brake now has an expiry its holder has named, and it expires on the far side of 3 November. Against that, Netanyahu closed the Israeli front for twelve days — no preemptive strike before 27 October, \"It is not convenient for us, it's no good\" — which answers the commitment-under-review prior from the principal himself and retires it, while Katz moved the other way, threatening to widen the Lebanon security zone into Nabatieh and Litani and saying a million Shi'ites would be displaced. Analytical judgment: the most consequential disclosure is maritime. Iranian officials told Reuters the new tactics against shipping began about ten days ago in order to keep oil prices high. A belligerent naming the Brent print as the objective converts the bypass-as-target prior from an inference about effect into a stated intention, and it means the campaign's success metric is a price rather than a hull count — which is why two confirmed sinkings and an IEA release of 100 million barrels belong in the same paragraph.",
    },
    {
      title: "Taiwan: a 2032 answer to an eleven-day problem",
      body:
        "Fresh Taiwan material, and it is a timing mismatch. Trump told an Alaska rally that \"Taiwan has just agreed to buy 30 percent of the gas coming off the pipeline for the next 20 years\". The Taipei Times reports the Ministry of Economic Affairs would not say whether a binding sale-and-purchase agreement exists: CPC would take 6 million tonnes a year of a projected 20 million, Taiwan is considering an investment of up to US$4.4 billion including the 1,299-kilometre pipeline, and deliveries could begin as early as 2032. Analytical judgment: against Mihir Shete's measured eleven-day gas reserve, a 2032 first cargo is not a mitigation of this war — it is a structural answer to a structural problem, and the substitution-chain prior holds that the barrels and cargoes which arrive late do not relieve the squeeze that is happening now. The announcement is also asymmetric in the familiar way: a president's rally figure of 30 percent against a ministry statement that equity stakes and terms remain open. MOEA's own argument for the deal — direct Pacific shipping as a route that bypasses geopolitical risk — is the correct frame and concedes the point about Hormuz. CPC's NT$56 billion projected loss and above-90-percent debt ratio carry, and the solvency-not-price prior governs whether Taipei can sign anything long-term at all. A fifth consecutive day of silence on the GEM NO.2 identification is recorded as posture.",
    },
  ],
  casualtyNotes: {
    us:
      "A fifteenth consecutive cycle with nothing disclosed on the combat series, recorded as an absence of disclosure rather than a lull. The Day 216 gap against CENTCOM's 18 is unanswered for a fifteenth day, the June Port Shuaiba investigation is unreleased, and the CRS figure of at least 81 US aircraft and drones lost or damaged draws no Pentagon response.",
    israel:
      "No addition. Netanyahu ruled out a preemptive strike on Iran before the 27 October election while Katz threatened to widen the southern Lebanon security zone into Nabatieh and Litani. The Ramim Ridge wounded divergence of 24 against 19 is unresolved and held at 24. Twelve days to the vote.",
    iran:
      "No new official war toll and a thirty-sixth day without a confirmed Iranian attack on a host state's territory. The NCRI's at-least-48 executions for 30 September to 13 October is held as a third series beside Amnesty's at-least-34 subset and the 70-since-January roster.",
    other:
      "No published casualties for the Aramco Dhahran strike under either account of the damage. All 21 crew of the GFS Pride and all 22 of the GFS Giselle are safe; the Cape Dao's single seafarer death of 23 September was already inside the IMO series. No Dammam toll has ever been published.",
  },
};

export default data;
