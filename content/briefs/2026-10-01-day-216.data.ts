import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "The American counter-offer stopped being a leak and became a document under institutional review. Iran's government spokeswoman confirmed the proposal was presented to President Pezeshkian in cabinet by Foreign Minister Araghchi, and it reportedly carries a seven-day ceasefire of its own — the instrument Tehran asked for. Against that, Trump reduced the war to \"we blow them up or make a deal\", Britain became the first NATO state to attribute an attempted attack on its own soil to Iran, and Washington completed its withdrawal from Iraq. Direction holds MIXED because the best diplomatic news of the war since Day 206 arrived on the same day as its first European attribution.",
      risk7d:
        "Extreme holds. The Fairford attribution opens a homeland vector in a nuclear-armed NATO state whose bases launch strikes on Iran, and it does so while the investigation is live and the suspects are on bail — a rung that can be climbed by either government's next statement. Trump put the decision as blowing Iran up or making a deal and said the answer comes \"very soon, one way or the other\". UKMTO logged three vessels struck in the strait on 29 September with no attribution for any of them, and the strategic reserve that absorbed 216 days of closure is now spent.",
      spillover:
        "Critical holds while its shape changes. The American ground presence in Iraq ended after twelve years, removing the target of 600-plus militia attacks and the lever that came with it, with militia disarmament slipped to June 2027 and Kurdish forces losing the air defences that covered Erbil. Bahrain joined the US-led drone task force and NATO's Rutte called American action \"absolutely essential\", so the coalition consolidated at sea as it thinned on land. Iran warned the UAE that hosting Netanyahu \"will not have favorable consequences\" and addressed the American electorate directly before the midterms.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'CBS News / The National Desk',
      event:
        'The counter-offer is tabled before Pezeshkian in cabinet and enters formal Iranian review',
      summary:
        "Government spokeswoman Fatemeh Mohajerani said that \"at today's cabinet meeting, the American side's proposal was presented to President Masoud Pezeshkian by Foreign Minister Abbas Araghchi\". Tehran is reviewing Washington's response to its seven-day ceasefire plan, and the counterproposal is reported to call for a seven-day ceasefire of its own. It was not immediately clear whether Washington accepted Iran's broader conditions for reopening the strait — oil-sector sanctions relief, release of frozen assets and an end to the naval blockade. Qatari mediators continue to shuttle messages, following the New York talks involving Araghchi and US envoys Steve Witkoff and Jared Kushner.",
      impact:
        "Day 215's offer reached the record only through an unnamed official and was denied by the president the same day. It now has an institutional addressee, a review process and a reported ceasefire term matching Tehran's own core ask. The unowned-offer prior retires in its worst form: acceptance is procedurally available for the first time in this war, even though no American principal has yet said the terms aloud.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'ITV News / CNN / Fox News',
      event: 'Britain attributes the RAF Fairford plot to Iran — the first NATO-territory attribution of the war',
      summary:
        "Prime Minister Andy Burnham told ITV News there are \"strong indications\" Iran was involved and that \"we can confirm our belief that they did play a part\", after chairing COBRA. Three vans were found blocking a road near the Gloucestershire base, which has hosted US bombers striking Iran, in the early hours of 27 September; counter-terrorism police found petrol but no explosive devices. Five British nationals in their mid-twenties, arrested on suspicion of explosives and terrorism offences, were bailed on 28 September, and one had called police about an hour before a farmer reported the vans at 1:36am. Araghchi said \"you're barking up the wrong tree\" and the Iranian embassy rejected \"unfounded and malicious speculations\"; Rubio said the plot \"clearly involves the hand of a foreign actor\".",
      impact:
        "Per §3.5.3 this is a government's claim mid-investigation, not a finding, and the qualifications are load-bearing: petrol without devices, suspects on bail, and a caller who alerted police first. But the attribution itself is new in kind. The war now has a European homeland vector attached to the airfield that launches strikes on Iran, and a NATO government's own words to escalate from.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Fox News / ABC News / Al Jazeera liveblog',
      event: 'Trump reduces the war to a binary and claims a waterway result no series supports',
      summary:
        "Trump told reporters \"maybe you blow them up. We have to make that decision ... the time is coming. It's going to end very soon, one way or the other\", and separately \"we blow them up or make a deal\". He claimed \"almost total control\" of the Strait of Hormuz and that \"in the last three days, more oil has come out of the Strait of Hormuz than at any time in history\", said \"their navy is gone, their air force is gone\", and put American dead at 18. Secretary of War Pete Hegseth said US forces \"destroyed Iran's Navy, destroyed Iran's Air Force, destroyed their air defense systems\". On Fairford, Trump said \"we are studying it very hard ... we'll have an answer to that very quickly\".",
      impact:
        "The president's own numbers now cut against his government twice over: an all-time-record transit claim against a measured range that tops out near pre-war, and 18 American dead against his Department's own database of 18 killed and 756 wounded as of 21 August. Per §3.5.3 both are claims by an interested party. The binary framing also gives Tehran a reason to treat the cabinet document as an ultimatum rather than an offer.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'pivotal',
      source: 'CBS News / The National',
      event: 'America completes its withdrawal from Iraq, ending Operation Inherent Resolve after twelve years',
      summary:
        "The Pentagon declared the operation concluded on 30 September with the departure of US-led coalition forces from Erbil Air Base. Spokesman Sean Parnell said the milestone \"reflects the success of a 12-year campaign that defeated ISIS as an organized military threat\". Roughly 2,000 American personnel had been in Iraq as of February 2026 against a 2003-2011 peak above 160,000; the campaign cost 123 US troops killed and 499 wounded. Trump called the presence \"a very expensive excursion into hell\". Iran-backed militias launched more than 600 attacks on US targets between February and April 2026, and Prime Minister Ali al-Zaidi's disarmament pledge has slipped from September 2026 to June 2027. Michael Knights of the Washington Institute said \"the Iranians are maintaining interest in Iraq, and the US is losing interest\"; Kurdish commander Sirwan Barzani reported renewed ISIS activity.",
      impact:
        "The war's geometry changed by subtraction, on schedule rather than under fire. Washington removed the target set that absorbed 600-plus militia attacks and, with it, the land lever on Iran's western flank — five weeks before a midterm, with disarmament deferred to 2027 and Kurdish forces losing the air defences that covered Erbil.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: 'Rigzone / Bloomberg / Kpler',
      event: "The strait's measured number splits wider than at any point in this series",
      summary:
        "JPMorgan put Middle East crude exports on a ten-day average at 17.5 million barrels a day, or 98% of pre-war levels. Goldman Sachs estimated roughly 23 million barrels a day leaving the region via Hormuz and alternative routes with a 5-million-barrel revision pending, and separate reporting put oil and fuel exports via alternate routes near 21.8 million against 23.3 million pre-war. These stand against 7.4 million on Day 214, Kpler's ~10 million on Day 215, and the 13-to-22 million range three US officials gave. Brent's expiring November contract settled at $103.53, up 0.9%, December at $98.03, up 1.9%, and WTI November at $90.42, up 1.2%. Arne Lohmann Rasmussen of Global Risk Management saw \"an accelerated bearish shift as more supplies have hit the market\" while cautioning it is \"still far too early to call off the crisis\".",
      impact:
        "Per §3.5.6 the no-arbiter prior stops being a discrepancy and becomes an absence. Eight incompatible answers to one question now circulate inside a single week, three of them American, and the December contract at $98.03 shows the market pricing the crisis out on volumes no authority will certify.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'high',
      source: 'Rigzone / AAA / Department of Energy',
      event: 'US fuel stocks and pump prices set records against the recovering crude price',
      summary:
        "US retail diesel topped $6.50 a gallon, the highest on record, while gasoline inventories in the Midwest fell to the smallest level ever recorded and distillate stockpiles hit their lowest seasonal level ever. This came one day after the Energy Department released the final 40-million-barrel tranche completing the 172-million-barrel American contribution, taking the reserve to its lowest level since 1982 against a 252.4-million-barrel statutory floor, with bids due 6 October and Secretary Chris Wright saying another drawdown is unlikely.",
      impact:
        "Per §3.5.5 the two ends of the barrel have decoupled: crude recovered toward pre-war volumes while the refined products Americans actually buy set records in the other direction. The reserve-exhaustion prior holds and hardens — the buffer is spent, the bottleneck has moved downstream to distillate, and there is no announced instrument for that.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'high',
      source: 'Xinhua / The Media Line / The National / Iran International',
      event: 'Iran warns the UAE over the Netanyahu visit and addresses the American electorate directly',
      summary:
        "Supreme National Security Council Secretary Mohsen Rezaei said the UAE's hosting of Netanyahu \"will not have favorable consequences\", noting that hosting US bases \"has not brought you security\" either. The Foreign Ministry called the visit \"extremely dangerous and alarming\", warned of \"very dangerous consequences\" and urged regional states not to prepare \"the ground for Israel's destructive presence\". The IRGC issued a 26-page open letter to \"the honourable people\" of the United States urging rejection of Trump's policies before November's midterms, calling the war \"a disastrous failure for Washington\" and claiming a \"decisive victory\"; a State Department spokesman called it a \"smokescreen\" and said \"the IRGC's desperate effort to lie to the American people does not change the hard facts\". State offered up to $15 million for information disrupting IRGC Aerospace Force financing.",
      impact:
        "Tehran is running two tracks at once again, per the two-audience prior: a cabinet reviewing an American ceasefire document while the IRGC campaigns against the American president in his own midterm. The warning to Abu Dhabi is the operative risk — it names a Gulf host, not Israel, on the day Iran is deciding whether to accept a ceasefire.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'medium',
      source: 'CBS News / UKMTO / Arab News / NCRI',
      event: 'The coalition consolidates at sea, three hulls are struck unattributed, and Iran mobilises against its own streets',
      summary:
        "Bahrain joined the US-led drone task force. UKMTO reported three vessels struck by unknown projectiles in the Strait of Hormuz on 29 September, an expansion of the single hull fire recorded on Day 215, with no attribution offered for any of them. Saudi Arabia denied joining the Abu Dhabi discussions, a source telling Arab News there was \"no truth\" to the reports, against an Israeli journalist's claim that Riyadh attended an expanded meeting and sought Israeli help against the Houthis. Inside Iran, retiree protests were recorded across Rasht, Isfahan, Kermanshah, Tabriz, Sanandaj and Bijar carrying wage-equality and anti-execution slogans as the dollar reached about 231,000 tomans, and the \"Jan-Fada\" Basij mobilisation expanded across four provinces.",
      impact:
        "Per §3.5.6 the claimed-attribution prior widens from one hull to three with still no claim attached, which is the single fact most likely to end the export recovery. The Saudi denial is logged as CONTESTED ATTRIBUTION. The Basij expansion is the regime pricing its own streets into the calculation while it reads an American ceasefire text.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 · WIA: 440 (AP/CENTCOM combat series)',
      delta: '+0 disclosed',
      status:
        "Nothing disclosed this cycle, recorded as an absence of disclosure rather than a lull per the series retired on Day 214. The reconciliation moved, and the wrong way: Trump put American dead at 18 — the first figure a US principal has said aloud here — below his own Department's database of 18 killed and 756 wounded as of 21 August, which this brief carries as at least 19 against 861 wounded. DCAS 18 / 687 and The Intercept's 410 since 7 July carry unreconciled, as does the reclassification of four deaths and hundreds of injuries out of the Epic Fury count. El Gaia stays CONTESTED ATTRIBUTION; Lincoln force health carries with no relief rotation. Three hulls were struck on 29 September with no disclosed American casualty.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta: '+0',
      status:
        "Eight days out of the mediated channel, and the absence ended somewhere else: Netanyahu's confirmed appearance was in Abu Dhabi with UAE President Sheikh Mohamed bin Zayed, on a visit the UAE confirmed on 28 September, his office briefing a regional-coordination breakthrough. Israel published nothing on the counterproposal now before Pezeshkian's cabinet. The pre-election attack warning and Katz's unretracted security-zone doctrine carry. Lebanon's separate ledger runs ~4,300+ killed and 12,200+ wounded with ~7,700 recorded violations of the 26 June framework and no withdrawal timeline; Lebanese expectations of the Israeli vote were reported as low. Twenty-six days to the election.",
    },
    iran: {
      cumulative: 'MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+',
      delta: '+0 official',
      status:
        "No new official war toll and no confirmed Iranian launch against a host state since 8-9 September, a twenty-second day, qualified by the disclosed 14 September maritime strike. The day's output was procedural: Araghchi tabled the American proposal before Pezeshkian's cabinet per spokeswoman Mohajerani, and rejected the British attribution with \"you're barking up the wrong tree\". NPT withdrawal stays parliamentary, not executed — a bill reported ready for a vote, 130 lawmakers seeking a legal process — with the Kremlin's opposition carrying. Retiree protests across six cities, the dollar at ~231,000 tomans, inflation 83.8%, 166 protesters facing death sentences and 532 verified 2026 executions carry. The 4,200+ named protest-dead roster and the Fact-Finding Mission's 3,038 / 25,000 carry separately and are never merged.",
    },
    other: {
      cumulative: 'KIA: 3,598+ · WIA: 10,804+ (Yemen, Iraq, Gulf states, maritime)',
      delta: '+0 adopted',
      status:
        "No fresh Houthi impact claim or Saudi interception recorded. The movement was structural: the United States completed its Iraq withdrawal, ending Operation Inherent Resolve at Erbil after twelve years, 123 US troops killed and 499 wounded, against 600-plus Iran-backed militia attacks between February and April and a disarmament pledge slipped to June 2027. Riyadh denied joining the Abu Dhabi talks and has still published nothing on the 19 September strike on its capital or the Day 209 Mocha and prison claims, a fourteenth day. Grundberg's \"unprecedented\" characterisation carries. IOM records ~130,000 displaced since 1 August, 73 UN personnel detained, 22.3 million needing aid. Bab al-Mandeb is not formally closed.",
    },
  },
  exec:
    "The document reached the president. Spokeswoman Fatemeh Mohajerani said \"at today's cabinet meeting, the American side's proposal was presented to President Masoud Pezeshkian by Foreign Minister Abbas Araghchi\", and Tehran is reviewing a counterproposal reported to contain a seven-day ceasefire of its own. Day 215's offer existed only through an unnamed official and a presidential denial; it is now tabled before Iran's head of state, which is the first time acceptance has been structurally available in this war. What Washington conceded on the strait remains unstated. Britain became the first NATO state to attribute an attempted attack on its own soil to Iran: Prime Minister Andy Burnham said there are \"strong indications\" and \"we can confirm our belief that they did play a part\" in the RAF Fairford incident — three vans holding petrol but no explosive devices, five Britons arrested and bailed. Araghchi answered \"you're barking up the wrong tree\". Trump reduced the war to \"we blow them up or make a deal\", claiming \"almost total control\" of Hormuz and more oil transiting \"than at any time in history\". The measured record split wider instead: JPMorgan read Middle East crude exports at 17.5 million barrels a day, 98% of pre-war, Goldman at ~23 million, while UKMTO logged three vessels struck on 29 September. Brent's expiring November contract settled at $103.53 and December at $98.03 as diesel set a $6.50 record. America completed its Iraq withdrawal, ending Operation Inherent Resolve after twelve years. Direction holds mixed; seven-day risk extreme; spillover critical; the thirty-day probability rises to 13.",
  implications: [
    {
      title:
        'The offer acquired an addressee, which is worth more than an owner — and the price of the strait is still not written down',
      body:
        "Day 215's gating question was whether any named American principal would own the counter-offer. None did. Something structurally better happened instead: Araghchi tabled it before Pezeshkian in cabinet, and Mohajerani said so on the record. An offer that existed only through an unnamed official now has an institutional addressee, a review process, and a reported seven-day ceasefire matching Tehran's own core ask. That retires the unowned-offer prior's worst form. But per §3.5.3 the gap is precise and unclosed — it \"was not immediately clear whether Washington accepted Iran's broader conditions\" on sanctions relief, frozen assets and the blockade. Analytical judgment: the negotiation-capacity clock advances for the first time since Day 206, while Trump's \"we blow them up or make a deal\" keeps the political-will clock pointed at the alternative. The thirty-day probability rises 11 → 13: a document in a cabinet room outranks a leak, and still is not terms.",
    },
    {
      title: 'The war acquired a European front in a courtroom, and the measured strait dissolved as a fact',
      body:
        "Britain attributing the Fairford incident to Iran is the first NATO-territory attribution of this war, and it arrives heavily qualified: petrol but no explosive devices, five suspects bailed, a live investigation, and one suspect who called police first. Per §3.5.3 Burnham's \"strong indications\" is a government's claim mid-investigation, not a finding; Rubio's \"foreign actor\" deliberately stops short. Simultaneously the no-arbiter prior stops being a discrepancy and becomes an absence: 7.4, ~10, 12.8, 13-22, 17.5 at 98% of pre-war, ~21.8, ~23, and a presidential \"more than at any time in history\" are now the same week's answers to one question. Analytical judgment: the war's central measurable is unmeasured, and the energy-infrastructure clock holds critical on a split reading — crude recovered while US diesel set a $6.50 record, Midwest gasoline stocks hit an all-time low, and the reserve that absorbed 216 days of closure is spent.",
    },
    {
      title: 'Taiwan: the price prop was replaced by a supply prop, and the second one is not Taipei\'s to keep',
      body:
        "No fresh Taiwan-specific development was located this cycle; the \"through September\" assessment has now lapsed with no published CPC or MOEA October assurance, and the ICIS slippage of Qatari and Emirati volumes into October carries. The new fact is the export reading. Day 215 ended with Taipei losing the SPR subsidy; today two banks put Middle East exports at 94-98% of pre-war, which is a far better prop than a reserve release and rests on ship-to-ship workarounds that one attributed hull-strike could remove. Set it against the standing exposure: ~96% energy import dependence, roughly half of generation from LNG, ~11 days of reserve, ~35% of 2025 LNG from Qatar and the UAE. Analytical judgment: Taipei's October risk has shifted from price to attribution. Three vessels were struck on 29 September and none was attributed; the volumes holding its import bill down depend on that silence continuing.",
    },
  ],
  casualtyNotes: {
    us:
      "The combat series holds at 17 killed and 440 wounded with nothing disclosed this cycle. The day's movement was rhetorical and it widened the gap rather than closing it: the president put American dead at 18, which is below the Department's own August database of 18 killed and 756 wounded and below the at-least-19 deaths against 861 wounded this brief has carried. No reconciliation was published, and the separate finding that four deaths and hundreds of injuries were reclassified out of the Operation Epic Fury count remains unanswered.",
    israel:
      "Iran-front casualties hold at 56 killed and 8,652+ wounded with no new toll. Israel's eight-day absence from the mediated channel ended in Abu Dhabi rather than in Doha: the Prime Minister met the UAE president on a visit the UAE confirmed on 28 September, and his office briefed a regional-coordination breakthrough while Israel published nothing on the counterproposal before Iran's cabinet. Lebanon's separate ledger runs ~4,300+ killed and 12,200+ wounded; twenty-six days to the 27 October election.",
    iran:
      "No new official Iranian war toll and a twenty-second day without a confirmed Iranian launch against a host state, qualified by the disclosed 14 September maritime strike. The quantified internal movement was protest and mobilisation: retiree demonstrations across six cities carrying anti-execution slogans, the dollar at about 231,000 tomans, and the Basij \"Jan-Fada\" exercise expanding across four provinces. HRANA 3,636+ and the Iran Foundation ~3,468 carry alongside the official ~3,559; the 4,200+ named protest-dead roster and the Fact-Finding Mission's counts carry separately and are never merged.",
    other:
      "+0 adopted with no fresh Houthi impact claim or Saudi interception recorded. The ledger's structural change was the end of the American ground presence in Iraq after twelve years, closing a theatre that produced more than 600 militia attacks in three months of this war and 123 deaths across the whole campaign. Bahrain joined the drone task force. Riyadh has published nothing on the strike on its own capital or the Day 209 atrocity claims for a fourteenth day, and denied joining the Abu Dhabi discussions.",
  },
};

export default data;
