import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "ESCALATING. Netanyahu named toppling Iran's government as Israel's \"primary objective\" five days before the ballot, the Theodore Roosevelt strike group is due by end-November with about 10,000 personnel as a third carrier, and Trump said what remains is a final decision on how to win.",
      risk7d:
        "Extreme and worsening. A US official denied the Konarak strike to CNN, but two tankers were struck off Al Faw and Bukha and both were named, the JMIC raised the wider Persian Gulf to SUBSTANTIAL, and Britain put RAF Typhoons over Saudi Arabia. Netanyahu's reported pre-election pledge expires in five days.",
      spillover:
        "Critical. Saree claimed six attacks on Saudi oil, aviation and military targets in 48 hours, Riyadh's main airport remains suspended with traffic rerouted through Al-Qassim, and Emirates and flydubai joined the cancellation wall. Turkey sent the Mecca pact to parliament; Egypt's two-thirds vote is four days out.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: "An unnamed US official via CNN and Shafaq News; Fars News Agency; Gooya News",
      event: "A US official denies the Konarak strike, and this file corrects its own record",
      summary:
        "A US official denied in an interview with CNN that American forces had attacked the Konarak naval base in Sistan and Baluchistan. Shafaq News carried the denial on Monday evening — the same cycle on which Day 236 recorded Washington as silent. Fars reported two light projectiles against a 35mm anti-aircraft gun wounding two soldiers; a separate unattributed account said two were killed; Gooya News claimed F/A-18s from the USS George H.W. Bush struck IRGC naval positions in reply to an attempted Iranian strike on an Arleigh Burke destroyer.",
      impact:
        "The silence-is-the-signal reading applied on Day 236 was wrong on its facts and is retired rather than carried. What survives is the method: non-denial is evidence only once a denial has been looked for. No named CENTCOM or Pentagon statement exists.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: "Abbas Araghchi via IRNA, Iraq's Al Ekhbariya TV, Arab News Pakistan and The Express Tribune",
      event: "Araghchi says the Americans accepted Iran's conditions and then asked to add clauses",
      summary:
        "Araghchi said indirect negotiations with the United States through mediators including Pakistan and Qatar \"remain ongoing without interruption\", that Iran gave Washington a seven-day proposal under which the Strait of Hormuz is fully reopened on the sixth day, and that \"the Americans informed us that they agreed to these conditions, but they wanted to add a few more clauses.\" He said Tehran wants the earlier Islamabad memorandum honoured before talks move on, and accused Washington of blocking progress by not implementing what was agreed.",
      impact:
        "The first claimed American acceptance of any condition in this phase of the war. It is Tehran's account alone and Washington has neither confirmed nor denied it, so it is recorded as a claim and the thirty-day probability holds at 5.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "Mohsen Rezaei, Mohammad Bagher Ghalibaf and Masoud Pezeshkian via IRNA and Al Jazeera; JD Vance via Reuters and Gulf News",
      event: "Rezaei will not move a gram, Vance restates the enrichment price, Ghalibaf has nothing new",
      summary:
        "Rezaei told Asim Munir that \"not a single gram of enriched uranium will be removed from Iran\", called the programme \"national wealth\", and did not rule out downblending inside Iran under monitor supervision. Vance told Reuters Iran must \"significantly reduce its uranium-enrichment capacity\" before Washington agrees to end the war. Ghalibaf told Munir Iran had \"nothing new\" to tell Washington while expecting the New York conditions met and the strait open within seven days. Pezeshkian demanded pressure, threats and sanctions be removed first.",
      impact:
        "Both published prices now sit on one cycle and do not meet. Domestic downblending under monitoring is the only formula neither capital has ruled out, and it remains the single visible bridge. The IAEA still cannot verify about 440 kg of 60 percent material.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: "Benjamin Netanyahu and Donald Trump via The Jerusalem Post and The Week",
      event: "Netanyahu names regime removal as Israel's primary objective five days before the ballot",
      summary:
        "Netanyahu said on Tuesday that toppling Iran's government is Israel's \"primary objective\", a day after his unannounced Uvda meeting with Pete Hegseth. Trump said the United States was making \"very good progress\" and that what remained was a final decision on how to win, asking whether to \"win in a good way or in a way that is not quite so good\"; he said the nuclear threat must be prevented for \"five, six, or even ten years\" and that facilities buried under hundreds of tons of rock were not protection enough, having posted that the US \"could win the war tomorrow\".",
      impact:
        "The objective is held in the first person and hardened rather than softened before a vote neither bloc can win outright. The two-postures-one-capital reading holds for Washington; Jerusalem's statement of intent has stopped being ambiguous.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "UKMTO and the JMIC via gCaptain; Seatrade Maritime and Vanguard Tech; Noam Rayden of the Washington Institute",
      event: "Two tankers are struck and, for the first time in this campaign, both are named",
      summary:
        "UKMTO reported a tanker struck by an unidentified projectile 11 nautical miles west of Bukha, Oman, at 0145 UTC on 21 October, fire since extinguished, all crew safe; and a second struck 30 nautical miles south-east of Al Faw, Iraq, at 1830 UTC on 20 October with no damage. Seatrade Maritime identified them as the Kuwaiti-flagged KOTC Aframax Al Dasma and the Greek-owned, Liberian-flagged Soyia, the first tanker hit off Iraq in over a month. UKMTO attributed neither.",
      impact:
        "The ledger-without-a-hull prior is answered by regulators and reporters, not by either belligerent, while the IRGC's own ten-to-twelve mine claims since 18 July still name no vessel. Noam Rayden counts at least 28 October attacks across the strait and nearby waters.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'high',
      source: "The JMIC and UKMTO via gCaptain; Kpler and LSEG via Reuters",
      event: "The JMIC raises the wider Persian Gulf to SUBSTANTIAL and publishes the anchorage count",
      summary:
        "The JMIC's 18 October advisory holds the Strait of Hormuz at SEVERE and raises the wider Persian Gulf to SUBSTANTIAL, citing an expanding attack pattern and growing electronic navigation interference, and found no substantiation for the IRGC Navy's 17 October claim that two supertankers struck mines. It counted about 217 vessels anchored near Fujairah and Khor Fakkan and 166 from Dubai and Jebel Ali toward Ras Al Khaimah. UKMTO logged 12 attacks in the week to 16 October; Kpler tracked at least 18 in a fortnight.",
      impact:
        "The campaign is widening geographically rather than deepening: Al Faw is the first Iraqi-waters hit in over a month and LSEG notes operations reaching the Gulf of Oman. 383 vessels now sit at anchor between Fujairah and Ras Al Khaimah.",
    },
    {
      id: 7,
      direction: 'mixed',
      importance: 'high',
      source: "Wes Streeting via Arab News, Al Jazeera and CNBC; three parliamentary sources and the OIC via China Daily and NCRI; Xinhua",
      event: "Britain puts fighter jets over Saudi Arabia, Turkey sends the Mecca pact for ratification",
      summary:
        "Streeting said RAF Typhoons will \"conduct defensive counter-air operations over Saudi Arabia\" to protect cities, civilians and critical infrastructure, called the Riyadh airport strikes \"despicable\", and confirmed British aircraft may intercept missiles and drones but will not strike Houthi targets on the ground, with London stressing there is \"no military solution\"; air-to-air refuelling of Saudi aircraft was extended 90 days. Turkey sent the Mecca Joint Defense Agreement to parliament for ratification. The OIC in Baghdad asked Tehran to stop engaging the Houthi representative in its capital.",
      impact:
        "Coalition cohesion hardened in Riyadh's favour for the first time in weeks, with a published mandate and published limits. Egypt's two-thirds vote stands at 26 October with no Saudi request yet published, and Kuwait restated support.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'high',
      source: "Yahya Saree and Saudi officials via China Daily; Prince Faisal bin Farhan via the Saudi Press Agency; Arab News and Gulf News",
      event: "Saree claims six attacks in 48 hours and Riyadh's airport stays shut",
      summary:
        "Saree said the Houthis carried out six attacks on Saudi oil, aviation and military targets over 48 hours in retaliation for more than 200 Saudi air and missile strikes on Sanaa and other areas, naming Yanbu, Shaybah, King Khalid International, Abha, King Khalid Air Base, a naval task force camp and radars at Jabal Al-Hisn, Jabal Al-Rahmah and Najran. Neither Riyadh nor the coalition commented; Prince Faisal bin Farhan condemned the attacks by telephone. Five drones were intercepted; two teenage girls were reported killed in Taiz.",
      impact:
        "Riyadh's main airport remains suspended with traffic rerouted through Al-Qassim three hours away, government offices and the IMF's regional office are working from home, and Emirates and flydubai have joined Etihad on the cancellation wall to 24 October.",
    },
    {
      id: 9,
      direction: 'escalating',
      importance: 'medium',
      source: "Reuters via Yahoo Finance and Euronext; Fortune; OilPrice.com via Gulf News; the API, the EIA and Georges Elhedery; Two unnamed US officials via The Jerusalem Post",
      event: "Brent's level disagrees across six prints and its direction disagrees too",
      summary:
        "Reuters put Brent up $2.06, or 1.9 percent, at $110.85 at 10:48 GMT with WTI up 2.2 percent at $99.95; Fortune put Brent at $110.74, down $2.11 from $112.85 the previous morning; Gulf News, citing OilPrice.com, had Brent up 1.21 percent at $110, WTI at $98.82 and Murban at $110. API data showed US crude stocks down 4.9 million barrels to 16 October and the EIA expects about $105 for the quarter. The Theodore Roosevelt strike group is due by end-November.",
      impact:
        "One trading day produced six levels and two signs, so the series is not a measurement and none is adopted. HSBC's Georges Elhedery said Gulf transport investment could make Hormuz \"redundant\" in five years — a five-year answer to a five-day problem.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 17 · WIA: 440 (AP/CENTCOM combat series) · senators' figure: up to 23 KIA / 861 WIA",
      delta: '+0 disclosed',
      status:
        "A twenty-second consecutive cycle with nothing disclosed on the combat series, recorded as an absence of disclosure. The senators' fifth series of up to 23 killed and 861 wounded, drawn from a classified CENTCOM briefing, carries unanswered with eleven days to the 2 November deadline. About 10,000 further sailors and Marines are inbound with the Theodore Roosevelt group by end-November, raising exposure after the midterms rather than before them.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: '+0',
      status:
        "No addition on the war series, on the cycle the prime minister named toppling Iran's government as Israel's primary objective. Gaza deaths stay on their parallel series. The reported pledge not to strike Iran before the 27 October ballot is self-imposed, is not an instrument, and expires in five days.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: '+0 official',
      status:
        "No new official war toll. A US official has denied the Konarak strike, and the claims attached to it — two wounded per Fars, two killed in a separate unattributed account — are held apart rather than added. A forty-third day with no confirmed Iranian attack on a host state's territory. Amnesty names five protesters executed between 30 September and 5 October and puts the January-uprising total at at least 34, with eight more at risk; the execution ledger stays at four unmerged series.",
    },
    other: {
      cumulative: "KIA: 3,697+ · WIA: 11,176+ (Yemen, Iraq, Gulf states, maritime)",
      delta: '+0',
      status:
        "No addition to the rolled-up line, which remains materially understated and is recorded as such. The Shabwa series still runs 18, 20, more than 30, 50, 53 and 73 killed with 14 missing and over 200 wounded, and Saree's claim that the camp was Saudi-run is unanswered. Two teenage girls reported killed in a Taiz residential area carry beneath the line, as do the Najran six and the Saada nine. None adopted, none summed.",
    },
  },
  exec:
    "A US official denied to CNN that American forces struck Iran's Konarak naval base — answering the item Day 236 called the most consequential on the board, and correcting it, because the denial was published the same evening this file recorded Washington as silent. Abbas Araghchi said indirect talks through Pakistan and Qatar \"remain ongoing without interruption\", that Iran gave Washington a seven-day proposal reopening the Strait of Hormuz on the sixth day, and that \"the Americans informed us that they agreed to these conditions, but they wanted to add a few more clauses\" — the first claimed American acceptance of any condition in this phase, made by Tehran alone and unconfirmed in Washington. Against it: Mohsen Rezaei told Asim Munir \"not a single gram of enriched uranium will be removed from Iran\"; JD Vance told Reuters Iran must \"significantly reduce its uranium-enrichment capacity\" before the United States will end the war; Mohammad Bagher Ghalibaf told Munir Iran had \"nothing new\" to tell Washington. Netanyahu named toppling Iran's government as Israel's \"primary objective\", five days before the ballot. Two tankers were struck and both were named — the Kuwaiti-flagged KOTC Aframax Al Dasma off Bukha, Oman, and the Greek-owned Soyia off Al Faw, Iraq — and the JMIC raised the wider Persian Gulf to SUBSTANTIAL. Britain will fly RAF Typhoon defensive patrols over Saudi Arabia. Riyadh's main airport remains suspended. The Theodore Roosevelt strike group is due by end-November, after the midterms. Brent's level disagrees across six prints and its direction disagrees too. Direction holds escalating; the thirty-day probability holds at 5.",
  implications: [
    {
      title: "The denial arrives, a prior retires, and the war's price is published from both sides on one cycle",
      body:
        "Day 236 recorded Washington's silence on Konarak as the signal, on the reasoning that a belligerent which denies reflexively and then stops denying has told you something. A US official denied it to CNN, and Shafaq News carried that denial on Monday evening — inside the window this file was calling silence. The reading was wrong on its facts and is retired rather than carried forward; what survives is the method, which is that non-denial is only evidence once you have checked for a denial. Analytical judgment: under the multi-clock framework the negotiation-capacity clock produced the cycle's genuine movement, and it moved in both directions at once. Araghchi's claim that the Americans agreed to Iran's conditions and then asked to add clauses is the first published assertion of American acceptance of anything in the seven-day plan, and it is a single-source Iranian account that Washington has not confirmed. On the same cycle Vance restated the price — a significant cut in enrichment capacity — and Rezaei refused to move a gram, while leaving domestic downblending under monitoring open. That is the bridging formula this file has carried as the only visible one, and it is now the only item both capitals have declined to rule out. Ghalibaf's \"nothing new\" is the discount to apply to the rest. The probability holds at 5 because a claimed acceptance is not an instrument.",
    },
    {
      title: "Two named hulls, a raised threat level, and a third flag in the air over Riyadh",
      body:
        "The ledger-without-a-hull prior is answered, and not by the party making the claims. The Al Dasma and the Soyia were identified by UKMTO's reporting and the maritime press within hours, with positions and timestamps — 11 nautical miles west of Bukha at 0145 UTC, 30 nautical miles south-east of Al Faw at 1830 UTC — while the IRGC's own ledger of ten to twelve mine claims since 18 July still names no vessel and gives no strike dates. Analytical judgment: naming remains a disclosure choice, and the choice is being made by regulators and reporters rather than by either belligerent, since UKMTO attributed neither strike. The energy-infrastructure clock is widening geographically rather than deepening: the JMIC has raised the wider Persian Gulf to SUBSTANTIAL on an expanding attack pattern and electronic interference, Al Faw is the first Iraqi-waters hit in over a month, and 383 vessels now sit at anchor between Fujairah and Ras Al Khaimah. Against that, the coalition-cohesion clock hardened in Riyadh's favour for the first time in weeks — RAF Typhoons flying defensive counter-air over Saudi cities, a 90-day refuelling extension, Turkey's Mecca pact sent for ratification, Kuwait's restatement — while Egypt's two-thirds vote is four days out and no Saudi request has been published.",
    },
    {
      title: "Taiwan: the budget agency has not been consulted, and the war is already on CPC's balance sheet",
      body:
        "The Alaska LNG file moved from announcement to appropriation and stalled there. Directorate-General of Budget, Accounting and Statistics head Chen Shu-tzu told the legislature on Wednesday that her agency \"had not yet been consulted\" on funding CPC Corporation's up-to-$4.4 billion investment because negotiations are ongoing, that the route — annual or special budget — depends on CPC's financial structure, and that the proposed NT$233.8 billion capital injection is not for the Alaska deal. Analytical judgment: the substitution-chain prior holds, and the binding constraint is now fiscal rather than geological. CPC has absorbed NT$674 billion in higher import costs since 2020, carried NT$91 billion of accumulated losses at end-September, and faces NT$127.6 billion — over 90 percent of its NT$130.1 billion paid-in capital — if the NT$607.6 billion supplementary budget is not passed by year-end, in a legislature where the opposition holds the majority and has been reluctant to fund it. Fossil fuels supplied over 85 percent of Taiwan's electricity in the first eight months of 2026. A 2032 supply date does not price a 2026 balance sheet, and the four open commercial terms remain open. The non-response prior extends to a twelfth cycle on the GEM NO.2.",
    },
  ],
  casualtyNotes: {
    us:
      "A twenty-second consecutive cycle with nothing disclosed, recorded as an absence of disclosure. The senators' figure of up to 23 killed and 861 wounded is held as a fifth series, neither merged into nor differenced against the disclosed 17 and 440, with eleven days to the 2 November deadline and no CENTCOM response.",
    israel:
      "No addition on the war series. Gaza deaths stay on their parallel series; the Taybeh diplomat assault and the Levine attack remain under investigation. The reported pledge not to strike Iran before 27 October expires in five days, and the stated objective has hardened to regime removal.",
    iran:
      "No new official war toll. The Konarak casualties are now a denied claim rather than an undenied one, and are still not added. A forty-third day without a confirmed Iranian attack on a host state's territory; Amnesty's five named executions and its at-least-34 uprising total sit beside HRANA's 2,003 without merging.",
    other:
      "No addition to the rolled-up line, which is materially understated. Shabwa still carries six tolls between 18 and 73 killed; the two girls reported killed in Taiz, the Najran six and the Saada nine carry beneath the line; the claimed Yanbu and Shaybah strikes carry no casualty figure. None adopted, none summed.",
  },
};

export default data;
