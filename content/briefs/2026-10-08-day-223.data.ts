import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "ESCALATING, and for the first time the escalation is scheduled rather than inferred. The Atlantic, citing two administration officials, reported that the White House has asked the Pentagon for options to strike Iran before the 3 November midterms, with Central Command drafting them and no decision taken. The same day Vance set Washington's price at a cut in enrichment capacity and a senior Iranian official called recognition of the right to enrich a red line. The Houthi airport campaign killed three and wounded 36 at two Saudi airports and struck Aden, two laden tankers were hit with casualties, and Yemeni displacement reached 200,000.",
      risk7d:
        "Extreme, now attached to a named date. Strike options are being drafted for before 3 November, and the Pentagon has tabled post-election options running up to a campaign against Iran's energy industry. Saudi Arabia's civil aviation authority recorded three dead and 36 wounded at Abha and King Khalid International; Major General Turki al-Maliki said the launcher destroyed in Sanaa was being prepared for \"another imminent attack against Saudi Arabia\". A Fars-quoted IRGC adviser said the strait's \"illegal routes\" will soon be blocked, a threat against the bypass itself. Roosevelt and Makin Island remain inbound for late October.",
      spillover:
        "Critical, and the roster is widening rather than deepening. A US official said Saudi Arabia has asked Syria to send forces against the Houthis and that Damascus is weighing defensive aid or an offensive deployment; two officials said Turkey's Mecca-pact contribution is mainly defensive and technical; Pakistan's Lieutenant General Ahmed Sharif Chaudhry called the commitment \"absolute\" with forces reportedly already in the kingdom; CNN reported more than 100 American advisers supplying intelligence and targeting. The dead at Abha and Riyadh were Moroccan, Algerian and Sudanese; the injured at sea were mostly Indian.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'The Atlantic / Newsquawk',
      event: '⭐ The White House asks the Pentagon for options to strike Iran before the midterms',
      summary:
        "The Atlantic, citing two administration officials, reported that the White House has asked the Pentagon to prepare options for strikes on Iran that could be carried out before the 3 November midterms. Central Command is developing them; targets, scope and authorisation remain under discussion. Post-election options run from limited attacks to a campaign that could include Iran's energy industry. Officials linked the planning to gasoline prices and a wish to show progress; some advisers favour waiting, fearing American deaths would cost Republican seats. A White House official said Trump \"has all options available at any time\".",
      impact:
        "The trigger-decoupling prior held that direction was indexed to a calendar rather than an incident. The calendar is now a tasking — the first time Nov 3 appears in the record as an operational instruction rather than an inference. Newsquawk's caveat is adopted: contingency planning is routine and is not evidence of intent. What is not routine is the stated motive, a domestic price series, or the admission by supporters of limited strikes that they would not reopen the strait or cut pump prices before the vote.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Reuters / Al Arabiya',
      event: 'Both capitals publish a price, and it is one variable with opposite signs',
      summary:
        "Vance told Reuters any agreement must involve a concrete cut in Iran's enrichment capacity rather than a promised drawdown — \"We're not going to trade words for actions\" — asked \"If you don't want a nuclear weapon, then why do you need 60 percent enriched fuel?\", and said Iran should do \"something meaningful on their enrichment capacity\". He said Washington talks to Pezeshkian and Araghchi but that it is \"not totally clear\" how Iran decides. A senior Iranian official told Reuters that recognition of Iran's right to enrichment remains a red line.",
      impact:
        "For 222 days this series recorded an absence of published terms. Both arrived on the same day, and they are not a gap to be split: Washington prices a deal in reduced enrichment capacity, Tehran in recognition of the right to enrich. The sovereignty-dispute prior extends from the strait to the centrifuges. This, not the contingency planning, is why the thirty-day probability eases — the ambiguity a bargain needs was removed by both parties at once.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'CNN / Reuters',
      event: 'The Saudi airport campaign turns lethal: three killed, 36 wounded, and Aden struck',
      summary:
        "Saudi Arabia's General Authority of Civil Aviation recorded three killed and 36 wounded across two airports. At Abha International on Tuesday two women were killed, one Moroccan and one Algerian, and 28 wounded including Saudi citizens and Bangladeshi and Filipino residents. At King Khalid International in Riyadh on Wednesday a Sudanese resident was killed and eight wounded. Saree claimed both. Al-Maliki said the launcher used against Riyadh was destroyed in Sanaa while being prepared for \"another imminent attack\". Yemen's Transport Ministry said Aden International was struck minutes before a Cairo arrival.",
      impact:
        "Day 222 recorded \"three minor injuries and material damage\" as the first conceded effect. Twenty-four hours later the same regulator is counting fatalities at two different airports, and the aviation-as-target-class prior converts from declared threat to lethal fact. Two features matter more than the total: every fatality was a third-country national, which internationalises an intra-regional campaign, and Aden extends the target class to the recognised government's own international gateway.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / UKMTO',
      event: 'Two laden tankers are hit with casualties in a single day',
      summary:
        "The Panamanian-flagged On Peace was struck about nine nautical miles off Limah, Oman, on Tuesday and caught fire. Of nineteen crew, seventeen were Indian; India's Ministry of External Affairs said at least twelve were injured, eleven of them Indian, and Oman's air force evacuated ten to Khasab hospital. Delhi called the attacks a \"cause of deep concern for India\". On Wednesday UKMTO reported, under warning 158-26, a tanker struck by multiple projectiles 51 nautical miles north of Madinat ash Shamal, Qatar, with casualties. Neither was claimed; Marisks counted at least seven other incidents in the past week.",
      impact:
        "\"A corroborated hit on a laden hull\" has sat on this series' list of Brent triggers since the spring. It happened twice in a day, with casualties both times, and Brent closed lower at $100.85. Either the trigger list is wrong or the price has stopped discounting maritime risk; the second reading is better supported, since 40% of regional barrels now bypass the strait. The human cost moved the other way: India records at least ten seafarers killed since late February, and crews, not cargoes, are the exposed asset.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: 'Kpler / Standard Chartered',
      event: 'Hormuz volumes reach or exceed pre-war, and the dispute moves to efficiency',
      summary:
        "Kpler provisional data put outflows from the strait at 19.5 to 22.5 million barrels a day from 27 to 29 September, roughly double a month earlier and above pre-war, with LNG also at pre-war; its seven-day Middle East crude average hit 18.3 million on 30 September against about 18 million in the pre-war year, and Vortexa's fourteen-day average reached 18.6 million. Standard Chartered put Gulf exports excluding Iran near pre-war at 16.5 million, but with only 60% crossing Hormuz against 83% before, Saudi exports at 6.9 million against 2.45 million in August, and nineteen VLCC transits in a week.",
      impact:
        "The Day 222 band of 76% to 100% is broken upward and retired: on volume the question is answered, at or above pre-war. The dispute now concerns the system. Standard Chartered: exporters \"are doing it less efficiently and at considerably higher cost\", and \"the system has less room to absorb another major disruption\". Aramco's Amin Nasser put lost supply near three billion barrels and the rebuild at two years.",
    },
    {
      id: 6,
      direction: 'neutral',
      importance: 'high',
      source: 'EASA / FlightGlobal',
      event: 'Correction: regulator guidance on Saudi airspace has existed since 30 September',
      summary:
        "EASA conflict-zone bulletin 2026-09, issued 30 September and valid to 16 November, advises operators not to fly at any flight level inside the area bounded by RIBOK-BOSUT-ISLAM-DEKLO-OBSAM-SILPA and the Jeddah FIR boundary, and to exercise caution across the rest of the FIR. France's NOTAM LFFF F1996/26 runs to 14 October, Italy's LIRR E2226/26 to 29 November, and standing FAA, Canadian and Saudi notices remain in force. FlightGlobal reported EASA flagging a \"broadening scope of attacks including strikes against aviation infrastructure\".",
      impact:
        "This series carried \"no regulator guidance\" as an open deadline for three consecutive cycles while a European conflict-zone bulletin had been live since 30 September. The deadline is retired and the record corrected: the regulators moved before the fatalities, not after. Scored neutral because nothing changed on the ground — Saudi airspace remains open at a published risk level of caution, and no airline has been recorded suspending routes. That carrier decision is the commercial conversion the aviation prior still awaits.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'high',
      source: 'Reuters / Al Jazeera / IOM',
      event: 'Mocha is corrected back to Houthi hands as displacement reaches 200,000',
      summary:
        "Reuters and Al Jazeera both record the Houthis as having seized Mocha and Yemen's entire Red Sea coast in September; the government's Monday claim to have reached Mocha was called premature by Yemeni military officials on the ground and by analysts. The Homeland Shield Forces launched a \"large-scale operation\" on Tuesday for al-Waziiya in Taiz, claiming hills over al-Mansoura amid a \"mass retreat by the Houthi militia\"; the Houthis said they repelled it. IOM put displacement above 200,000 as of Wednesday, from 76,000 in mid-September, across ten governorates with Ta'iz worst hit.",
      impact:
        "Day 221 recorded Mocha as a territorial fact and Day 222 downgraded it to contested. It is now corrected: the city is Houthi-held and the government is fighting for the district that would make an approach possible. The unverified-claim-ceiling prior is vindicated in its strongest form — a belligerent's territorial claim survived two cycles here before its own side's officers retracted it. Displacement has tripled in three weeks on IOM's own series.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'high',
      source: 'Reuters / CNN',
      event: 'Riyadh asks Damascus for troops, and the Mecca contribution is finally characterised',
      summary:
        "A US official said Saudi Arabia has asked Syria to deploy forces against the Houthis and that Damascus is weighing defensive aid or an offensive deployment; a Syrian diplomat said Syria \"stood firmly with Saudi Arabia\" while stressing domestic priorities. Two officials said Turkey's contribution under the Mecca pact is mainly defensive and technical. Pakistan's Lieutenant General Ahmed Sharif Chaudhry called Islamabad's commitment \"absolute\", with forces reportedly already in the kingdom. CNN reported more than 100 American advisers supporting Saudi operations with intelligence and targeting.",
      impact:
        "The collective-defence-activation prior has gone unanswered for two cycles on numbers, units and dates, and that remains true — nothing countable has been published. What arrived instead is character: Turkey defensive and technical, Pakistan declaratory and reportedly present, Syria solicited. The delegated-escalation prior widens from intelligence to targeting with a figure attached, the first number of any kind on the American role, and a request to Damascus would make a fifth state party to this campaign.",
    },
    {
      id: 9,
      direction: 'escalating',
      importance: 'medium',
      source: 'Reuters / Iran International',
      event: 'The rial sets a record low and Pezeshkian announces an undefined "new arrangement"',
      summary:
        "The dollar reached about 2.723 million rials on Sunday, a record low, per Iran International; Reuters records the currency down more than half in a year and the central bank announcing up to $2bn of support. Central bank official Mehdi Darabi called the fall temporary. Pezeshkian wrote on X that pressure had \"intensified\" and that the government \"has adopted a new arrangement to manage the special conditions\", without defining it. Reuters reported Iran delivered $200m in cash to Hezbollah last month for families tied to the group.",
      impact:
        "An announced \"new arrangement\" with no terms is the domestic mirror of an announced defence pact with no order of battle, and both are recorded as declarations rather than facts. The rate series tightens — 2.723 million supersedes the 2.685 million of 3 October. Against that, $200m in cash reached Hezbollah in the month Bessent says zero crude was loaded, evidence the blockade binds revenue more tightly than disbursement.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 · WIA: 440 (AP/CENTCOM combat series)',
      delta: '+0 disclosed',
      status:
        "Nothing disclosed for an eighth consecutive cycle, recorded as an absence of disclosure rather than a lull, and the Day 216 reconciliation gap is unanswered for an eighth day — the Jerusalem Post again cites CENTCOM at 18 killed against the 17 carried here. The Port Shuaiba investigation completed in June is still unreleased. Exposure widened twice: CNN put more than 100 American advisers on intelligence and targeting for Saudi operations, and the White House has reportedly asked for pre-midterm strike options while advisers warn that American deaths before 3 November would cost Republican seats. The blockade ledger was revised to 270-plus vessels redirected as of 5 October and nearly two dozen disabled or destroyed.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta: '+0',
      status:
        "No new Israeli military fatality on the third anniversary of 7 October 2023. A third incompatible series surfaced rather than a delta: the Jerusalem Post records 39 IDF soldiers and 23 civilians killed and at least 7,693 injured by ballistic missile attacks since 28 February, a differently-bounded count recorded beside the 56 and 8,652 here and not merged. Likud polls at 20-22 seats against 32 and the coalition at 50-54 of the 61 needed, with Channel 14 showing 63; Trump has declined to endorse Netanyahu. Defence officials told the Security Cabinet Iran could miscalculate and fire at Israel. Lebanon's ledger runs ~4,300+ killed and 12,200+ wounded, with $200m of Iranian cash reaching Hezbollah last month. Nineteen days to the vote.",
    },
    iran: {
      cumulative: 'MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+',
      delta: '+0 official',
      status:
        "No new official war toll and a twenty-ninth day without a confirmed Iranian attack on a host state — a qualification now doing heavy work, since two laden tankers were struck with casualties inside 24 hours, a Fars-quoted IRGC adviser said the strait's \"illegal routes\" will soon be blocked, neither attack was claimed, and CENTCOM publicly rejected Tehran's assertion that the strait is closed. Vance set Washington's terms at a cut in enrichment capacity; a senior Iranian official called recognition of the right to enrich a red line. The economic ledger worsened to a record 2.723 million rials to the dollar with up to $2bn of central bank support. The protest roster carries 70 executions since January and 194 on death row, never merged with the war toll. The IAEA still cannot verify ~440.9 kg of 60% material.",
    },
    other: {
      cumulative: 'KIA: 3,681+ · WIA: 10,852+ (Yemen, Iraq, Gulf states, maritime)',
      delta: '+3 KIA / +48 WIA adopted',
      status:
        "The first adopted delta in five days, and both components come from a government's own count rather than a belligerent's claim. Saudi Arabia's General Authority of Civil Aviation recorded three killed and 36 wounded at Abha International on Tuesday and King Khalid International on Wednesday. India's Ministry of External Affairs recorded at least twelve injured aboard the On Peace off Oman; the unspecified casualties from Wednesday's strike north of Qatar are recorded but not adopted. The WHO Yemen series of 959 dead since 6 August stays parallel and unmerged, and IOM revised displacement from 184,000 to above 200,000 within a day, against 76,000 in mid-September. The belligerents' battlefield tolls remain three-way incompatible and none is adopted.",
    },
  },
  exec:
    "The calendar became a tasking. The Atlantic, citing two administration officials, reported that the White House has asked the Pentagon for options to strike Iran before the 3 November midterms, with Central Command drafting them and no final decision taken; officials tied the planning to gasoline prices and a wish to show progress, and some advisers argued for waiting until after the vote. A White House official said Trump \"has all options available at any time\". The same day both capitals published their prices, and they proved to be one variable with opposite signs: Vice President JD Vance told Reuters that any deal needs a concrete cut in enrichment capacity — \"We're not going to trade words for actions\" — while a senior Iranian official said recognition of the right to enrich remains a red line. The Houthi airport campaign turned lethal: Saudi Arabia's civil aviation authority recorded three killed and 36 wounded at Abha on Tuesday and King Khalid International on Wednesday, the dead a Moroccan, an Algerian and a Sudanese resident, and the Houthis struck Aden International as well. Two laden tankers were hit with casualties in a day — the Panamanian On Peace off Limah, Oman, with at least twelve of nineteen crew injured, seventeen of them Indian, and an unnamed tanker 51 nautical miles north of Qatar. Kpler put Hormuz outflows at 19.5 to 22.5 million barrels a day, above pre-war, while Standard Chartered found only 60% of Gulf barrels crossing the strait against 83% before. Yemeni displacement reached 200,000. Direction holds escalating; seven-day risk extreme; spillover critical; the thirty-day probability eases to 6.",
  implications: [
    {
      title: 'A strike window with a published motive is a different risk from a strike window with a published objective',
      body:
        "Until today the 3 November midterms entered this series as the trigger-decoupling prior: direction indexed to a calendar rather than to an incident. The Atlantic's report converts the date into a tasking — Central Command drafting pre-election options, with post-election options running up to a campaign against Iran's energy industry. Analytical judgment: under the multi-clock framework the active-deadline clock and the political-will clock have merged, which is the most dangerous configuration this framework describes, because the timing is set by a domestic price series rather than by a military objective. Two things argue against over-reading it. Contingency planning is routine, as Newsquawk noted, and no decision has been taken. And supporters of limited strikes conceded that strikes would not reopen the strait, produce an agreement or lower pump prices before the vote — an unusual on-the-record admission that the instrument does not fit the stated purpose. The sharper signal is that advisers are arguing against action on the grounds that American deaths would cost Republican seats, which prices US casualties as an electoral variable eight days after the Iraq withdrawal removed the largest pool of exposed ground troops. Watch whether any named official confirms the tasking, and whether the post-election energy-industry option is ever denied.",
    },
    {
      title: 'The measurement war is over; the resilience argument has replaced it',
      body:
        "For ten days this series has quoted incompatible Hormuz figures and, on Day 222, a band of 76% to 100%. That band is broken upward and retired. Kpler has outflows at 19.5 to 22.5 million barrels a day and LNG at pre-war; its seven-day crude average beat the pre-war year, and Vortexa agrees within a third of a million barrels. The question moves from how much to how fragile. Standard Chartered supplies the counter-case in numbers rather than adjectives: only 60% of Gulf barrels cross the strait against 83% before, nineteen VLCC transits in a week, discounts of up to $9 a barrel offshore Oman, and the judgment that \"the system has less room to absorb another major disruption\". Aramco's Amin Nasser puts lost supply near three billion barrels and the inventory rebuild at two years. Analytical judgment: the energy-infrastructure clock holds at strained rather than improving, because two laden hulls were struck with casualties on the day volumes printed above pre-war and Brent still closed down at $100.85. A price that no longer moves on a confirmed tanker casualty is either correctly discounting a 40% bypass or has stopped pricing the risk; the IRGC adviser's threat to block the strait's \"illegal routes\" is the test of which.",
    },
    {
      title: 'Taiwan: the subsidy is now a solvency question, not a price question',
      body:
        "Today supplies the first fresh Taiwan reading in four cycles, and it reframes the file. The Executive Yuan's 1 October proposal is nearly NT$415 billion (about US$13 billion): NT$180.94 billion in subsidies to Taipower, CPC and other fuel suppliers, and NT$233.83 billion as a capital injection into CPC. The injection is not a cushion against Brent. CPC is in a sixth consecutive loss year, with accumulated losses estimated at NT$127.6 billion by end-2026 against NT$130.1 billion of paid-in capital, interest-bearing debt above NT$850 billion and a debt ratio near 93%; the Executive Yuan's own assessment is that CPC could be at the verge of insolvency in early 2027 without intervention, and board member Wei Hui-shan warned in September of possible bankruptcy or restructuring. CPC calls that characterisation misleading and attributes the losses to its price-stabilisation role — fuel frozen twenty-one times with six limited increases, household gas and LPG frozen to year-end, electricity unchanged across two reviews. Analytical judgment: the fiscal-buffer prior is superseded. A buffer sized against a Brent assumption is a different instrument from the recapitalisation of a near-insolvent importer, and the crude-is-not-gas prior explains why the headline recovery does not help: Taipei's exposure is to twenty- to twenty-five-year LNG contracts from fourteen countries, not to barrels that can be re-routed through Yanbu. The legislature has still not voted.",
    },
  ],
  casualtyNotes: {
    us:
      "The combat series holds at 17 killed and 440 wounded with nothing disclosed for an eighth cycle, and the Jerusalem Post again cites CENTCOM at 18 — the Day 216 gap restated rather than resolved. What moved is exposure and accounting: CNN put more than 100 American advisers on intelligence and targeting for Saudi operations, the first figure of any kind on the American role; the blockade ledger was revised to 270-plus vessels redirected and nearly two dozen disabled or destroyed; and advisers are reportedly arguing against pre-midterm strikes on the grounds that American deaths would cost Republican seats.",
    israel:
      "No new fatality on the third anniversary. A third incompatible count appeared instead of a delta — 39 IDF soldiers, 23 civilians and 7,693-plus injured by ballistic missile attacks since 28 February, recorded beside this series' 56 and 8,652 and not merged. Defence officials warned the Security Cabinet that Iran could miscalculate and fire at Israel, and the IDF, police and Shin Bet issued a joint assessment for the period around the anniversary and the 27 October vote. Netanyahu's coalition polls at 50-54 seats against 61, and Trump has still not endorsed him.",
    iran:
      "No new official toll and a twenty-ninth day without a confirmed attack on a host state — a formulation now carrying two unclaimed tanker strikes with casualties and an IRGC adviser's threat to block the strait's \"illegal routes\". The movement was economic and declaratory: a record 2.723 million rials to the dollar, up to $2bn of central bank support, and a presidential \"new arrangement\" announced without terms. Washington named its price as enrichment capacity and Tehran named the right to enrich as a red line. The execution roster stays at 70 since January and unmerged.",
    other:
      "The first adopted delta in five days, both parts from governments' own counts: three killed and 36 wounded at Abha and King Khalid International per Saudi Arabia's civil aviation authority, and at least twelve injured aboard the On Peace per India's Ministry of External Affairs. The casualties from Wednesday's strike north of Qatar are unspecified and not adopted. IOM revised displacement from 184,000 to above 200,000 within a day, against 76,000 in mid-September. The WHO series of 959 dead since 6 August stays parallel and unmerged, and the belligerents' battlefield tolls remain three-way incompatible and unadopted.",
  },
};

export default data;
