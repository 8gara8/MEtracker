import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 95 is the cycle's pivotal day. Iran formally suspended all mediator-routed talks with the US; Trump publicly reined in Netanyahu in a profanity-laden call (called off the planned IDF Beirut strike); CENTCOM struck Iranian radar/drone sites at Goruk and Qeshm Island after Iran downed a US MQ-1; IRGC retaliated on Ali Al-Salem Air Base, Kuwait (intercepted) — second Kuwait attack in five days. Pulling escalatory: Tasnim formally announced suspension of dialogue and message exchanges through mediators (Euronews, CNBC, Stars and Stripes); Araghchi: 'no dialogue will take place' until Israel fully withdraws from occupied Lebanon and halts attacks in Lebanon and Gaza. IRGC Quds commander Qaani threatened to 'completely' close Hormuz and activate Bab el-Mandeb. Capt Dr Ori Yosef Silvester (Givati Shaked medical officer) killed by two Hezbollah FPV drones at Zawtar al-Sharqiyah; 7 wounded (3 seriously) — first IDF KIA of the post-April-16 truce period tracked separately in this series; 15th IDF service member KIA since cessation per ToI/i24. Pulling de-escalatory: Trump declared on Truth Social that Israel and Hezbollah agreed to halt hostilities; Trump claimed Iran talks 'continuing at rapid pace' against Tasnim's formal framing. Trump-Netanyahu split is itself unprecedented: Axios reports Trump told Netanyahu 'you're fucking crazy'; Netanyahu's post-call statement: IDF ops in southern Lebanon will continue 'as planned' and will strike Beirut if Hezbollah does not stop firing. UNSC France-led emergency meeting on Lebanon convened Monday. 30-day ceasefire probability revises 17 → 9.",
      risk7d:
        "Seven-day risk pivots to critical. The active-deadline clock runs Iran formal-suspension (Mon Jun 1) → Round 4 Washington (expected Jun 2-3, formally unconfirmed) → next Hezbollah retaliatory window (rolling 24-72h). The negotiation-capacity clock failed publicly for the first time in the cycle — Tasnim's formal suspension is structurally distinct from Day 94's Araghchi public-conditionality. The kinetic-readiness clock tightened sharply on CENTCOM Goruk/Qeshm + IRGC Ali Al-Salem inside a 24h window. The Lebanon kinetic clock worsens further with the first IDF KIA of the truce period and continued strikes 'despite Trump's ceasefire announcement' per Lebanese state media. Trump's 'rapid pace' framing is directly contradicted by Iranian state media — the public discrepancy between US and Iranian principal channels is the cycle's widest. Netanyahu 'as planned' framing publicly contests Trump's ceasefire announcement at principal level for the first time; the IDF Beirut strike was called off but ground operations continue.",
      spillover:
        "Spillover holds critical and expanded materially. IRGC's threat to activate Bab el-Mandeb alongside Hormuz closure is the cycle's first publicly-named multi-chokepoint escalation framing; Qaani: Israeli ops in Lebanon and Gaza will produce 'similar traffic situation' in Bab el-Mandeb as in Hormuz. CENTCOM Goruk/Qeshm is the third distinct US strike operation since the April 7 ceasefire; IRGC Ali Al-Salem retaliation is the second Kuwait attack in five days (May 27 + Jun 1, both intercepted). Brent surged >8% intraday on the Iran suspension framing before paring on Trump's Lebanon ceasefire posting; EIA reference band ($106 May-June) holds but spot volatility widened sharply. PGSA $2M/transit yuan-billed regime continues; ~2,000 ships remain stranded in the Gulf. France-led UNSC emergency meeting on Lebanon convened Monday — operative resolution prospects sharply limited by US veto rights but Arab-European convergence framing holds without Gulf-monarchy public adoption.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'high',
      source: 'Euronews / CNBC / Stars and Stripes / Bloomberg / CNN',
      event:
        "Iran formally suspends mediator-routed talks with US — cycle-first publicly-named Iranian withdrawal from the negotiating channel; Tasnim cites 'continuing crimes' of Israel in Lebanon; Araghchi: 'no dialogue' until Israel withdraws from occupied Lebanon and halts attacks in Lebanon and Gaza",
      summary:
        "The IRGC-affiliated Tasnim News Agency announced Monday Jun 1 that the Iranian negotiating team had suspended dialogues and message exchanges through mediators with the US, citing 'continuing crimes' of Israel in Lebanon (Euronews, CNBC, Stars and Stripes). FM Araghchi: a violation 'on one front' is a violation 'on all fronts'; 'no dialogue will take place' until Israel fully withdraws from occupied Lebanon and stops all attacks in Lebanon and Gaza. Tasnim added Iran and 'the resistance front' are resolved to 'completely' block the Strait of Hormuz and activate Bab el-Mandeb. Trump posted on Truth Social that talks are 'continuing, at a rapid pace, with the Islamic Republic of Iran' — the cycle's first publicly-named principal-level discrepancy between US and Iranian framings of channel status. Tehran has now publicly staked positions on all three load-bearing MOU clauses plus formal suspension of the channel itself.",
      impact:
        "Pivotal — first publicly-named Iranian withdrawal from the negotiating channel. Day 94 kept the channel open as conditionality; Day 95 closes it as posture regardless of backchannel persistence. Skeptical counter: prior Iranian state-media 'suspensions' have been procedural rather than terminal; this may be a posture move to extract US pressure on Israel for the Beirut-strike pause Trump did deliver. But the formal channel framing inside Round 4 prep narrows the deal window the Doha delegation was carrying.",
    },
    {
      id: 2,
      direction: 'pivotal',
      importance: 'high',
      source: 'Axios / Haaretz / Foreign Policy / Times of Israel / Jerusalem Post / Washington Examiner',
      event:
        "Trump reins in Netanyahu in profanity-laden call ('you're fucking crazy'); planned IDF Beirut strike called off; Trump claims Israel-Hezbollah ceasefire; Netanyahu publicly contradicts — IDF ops will continue 'as planned'; cycle-first publicly-named US-Israel principal-level split",
      summary:
        "Two US officials and a third source briefed on the call told Axios that Trump told Netanyahu 'you're fucking crazy' on Israel's Lebanon escalation during a Monday call, after Iran threatened to abandon negotiations. The IDF called off its planned Beirut strike following the call (Jerusalem Post). Trump posted on Truth Social that Netanyahu had agreed to halt the planned Beirut strike and that Israel and Hezbollah had 'agreed to halt hostilities' under a proposed roadmap. Netanyahu's post-call statement publicly contradicted Trump's framing: IDF 'will continue to operate as planned' in southern Lebanon; Israel will attack Beirut if Hezbollah does not stop firing (Haaretz, Washington Examiner). Lebanese state media reported Israeli strikes continued across southern Lebanon late Monday despite the announcement.",
      impact:
        "Pivotal — cycle's first publicly-named principal-level US-Israel coalition rupture. The Pentagon trilateral's tabled LAF phased plan now carries inside a publicly-acknowledged coordination gap. Skeptical counter: Trump-Netanyahu friction has historically resolved into coordinated posture within 48-72h; the Beirut-strike-pause may produce a face-saving Round 4 architecture. But the IDF's continued ops against the Trump-named ceasefire establishes the floor on what Round 4 sequencing can credibly demand.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Times of Israel / Jerusalem Post / Ynet / Israel National News',
      event:
        "Capt Dr Ori Yosef Silvester (Givati Shaked medical officer, 30, Tel Aviv) killed by two Hezbollah explosive FPV drones at Zawtar al-Sharqiyah; 7 wounded (3 serious) — first IDF KIA on the post-April-16 Lebanon truce front tracked separately in this series; 15th IDF service member KIA since the April 16 cessation per ToI/i24 framing",
      summary:
        "Two explosive-laden FPV drones launched by Hezbollah struck an IDF armored vehicle in Zawtar al-Sharqiyah, killing Capt Dr Ori Yosef Silvester, 30, from Tel Aviv — the medical officer of the Givati Brigade's Shaked Battalion. Two officers and a soldier were seriously wounded, one soldier moderately, two officers and a soldier lightly. Silvester was posthumously promoted from lieutenant to captain. ToI and i24 framed Silvester as the 15th Israeli service member killed since the Lebanon cessation took effect April 16; he is the first IDF KIA on the Lebanon front of the post-April-16 truce period that has been tracked separately in this brief series (Day 94 Beit Hillel was light-wounded only).",
      impact:
        "The FPV-drone strike pattern matured from light-wounded (Day 94) to confirmed IDF KIA inside the same retaliatory cycle. The Lebanon kinetic clock continues to worsen; the cycle's truce-period IDF casualty floor has shifted upward. Skeptical counter: isolated KIAs have not historically forced re-architecture of the negotiating ceiling. But Zawtar al-Sharqiyah — same area as the Day 92 Golani Recon weeklong raid — reinforces the geographic concentration of Hezbollah's retaliatory capability inside the deepening IDF ground presence.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'CENTCOM / Stars and Stripes / Gulf Business / The National / Times of Israel',
      event:
        "CENTCOM struck Iranian radar/drone sites at Goruk and Qeshm Island over weekend after Iran downed US MQ-1; IRGC retaliated on Ali Al-Salem Air Base, Kuwait — two ballistic missiles intercepted (no casualties); second Kuwait attack in five days; Qaani threatens Bab el-Mandeb activation alongside Hormuz closure",
      summary:
        "US Central Command confirmed Monday Jun 1 that US forces struck Iranian radar installations, an air-defence ground control station, and two one-way attack drones at Goruk and on Qeshm Island over the weekend in response to Iran's MQ-1 shootdown — third distinct US strike operation since the April 7 ceasefire. The IRGC retaliated within hours by launching missiles and drones at Ali Al-Salem Air Base in Kuwait; US forces intercepted two Iranian ballistic missiles — second Kuwait attack in five days following the May 27 launch. IRGC Quds Force commander Esmail Qaani publicly stated Israeli ops in Lebanon and Gaza will produce 'similar traffic situation' in Bab el-Mandeb as exists in Hormuz; Tasnim said the 'resistance front' had decided on full Hormuz closure with Bab el-Mandeb activation.",
      impact:
        "Kinetic-readiness clock tightened sharply inside a 24h window. The exchange runs the Day 84-85 pre-Kuwait-launch pattern at higher tempo and inside formal Tasnim suspension framing. Qaani's Bab el-Mandeb framing is the cycle's first publicly-named multi-chokepoint escalation at IRGC principal level. Skeptical counter: chokepoint threats have historically run ahead of operational capacity. But the Kuwait double-attack pattern inside a single five-day window establishes a base-attack tempo the Day 89 'egregious ceasefire violation' designation already framed as warrant for US re-escalation.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'CNN / Bloomberg / CNBC / Voice of Emirates / Naharnet / Trading Economics',
      event:
        "UNSC France-led emergency meeting on Lebanon convened Mon Jun 1; Brent surged >8% intraday on Iran suspension then pared on Trump Lebanon ceasefire post; Trump claims Iran talks 'continuing at rapid pace' against Tasnim formal suspension; PGSA continues operating; ~2,000 ships stranded in Gulf",
      summary:
        "The UN Security Council convened Monday Jun 1 for the France-requested emergency meeting on Lebanon. Operative resolution prospects sharply limited by US veto rights but Arab-European convergence framing held without Gulf-monarchy public adoption: Egypt's 'blatant aggression' paired with France's UNSC route. Brent crude surged over 8% intraday on the Iran suspension framing before paring on Trump's Lebanon ceasefire posting; EIA reference band ($106/barrel Brent May-June 2026) holds but spot volatility widened sharply. PGSA $2M/transit yuan-billed regime continues operating; ~2,000 ships remain stranded. Trump's 'rapid pace' framing against Tasnim's formal suspension — public discrepancy is the cycle's widest.",
      impact:
        "Deal-window market signal broke. Brent's intraday surge reverses the structural retracement framework that held Days 92-94; the Day 92 $92.56 floor is no longer the operative reference. Skeptical counter: Brent's pare on Trump's Lebanon posting argues the market still reads a backchannel signal. But market volatility now prices the public discrepancy rather than the underlying posture.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed (Kuwait Ali Al-Salem Jun 1 launch intercepted)',
      status:
        "No new US KIA. CENTCOM Goruk/Qeshm strikes (third distinct US strike op since April 7 ceasefire); IRGC Ali Al-Salem retaliation intercepted — second Kuwait attack in five days. Trump 'rapid pace' framing vs Tasnim 'suspended' framing — cycle's widest publicly-named principal-level discrepancy. Axios reports Trump told Netanyahu 'you're fucking crazy' on Israel's Lebanon escalation — first US-Israel principal-level split. Sledgehammer architecture operational; prepared kinetic option unwithdrawn.",
    },
    israel: {
      cumulative: 'KIA: 48 (Iran-front 47 + Lebanon-front 1 truce-period) · WIA: 8,614+',
      delta: '+1 KIA Lebanon front (Capt Dr Ori Yosef Silvester) · +7 WIA (3 serious, 1 moderate, 3 light) — Zawtar al-Sharqiyah FPV drone strike',
      status:
        "Capt Dr Ori Yosef Silvester (Givati Shaked medical officer, 30, Tel Aviv) killed by two Hezbollah FPV drones; 7 wounded; posthumously promoted lieutenant to captain. 15th IDF service member KIA since April 16 cessation per ToI/i24; first KIA tracked separately on Lebanon truce front in this series. Netanyahu post-call: IDF 'will continue to operate as planned' in southern Lebanon; will strike Beirut if Hezbollah does not stop firing — publicly contradicts Trump ceasefire. IDF Beirut strike called off; southern Lebanon strikes continued per Lebanese state media.",
    },
    iran: {
      cumulative:
        "LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · Hengaw 6,620+ mil · 3.2M displaced",
      delta: '+0 new published (CENTCOM Goruk/Qeshm strike-casualty figures pending)',
      status:
        "Iran formally suspended dialogues and text exchanges through mediators — cycle-first publicly-named withdrawal from the negotiating channel (Tasnim, IRGC-affiliated). Araghchi: 'no dialogue' until Israel withdraws from occupied Lebanon and halts attacks in Lebanon and Gaza. Qaani: Bab el-Mandeb to be activated alongside Hormuz closure — first publicly-named multi-chokepoint escalation framing. Mojtaba HEU, Rezaei Hormuz, Araghchi Lebanon-deal welding all carry. PGSA $2M/transit yuan-billed regime continues; ~2,000 ships stranded. IAEA in-field verification gap continues since June 13, 2025.",
    },
    other: {
      cumulative:
        'Lebanon MOH war-cumulative: ~3,338+ killed / 10,041+ injured (incorporates Day 92 single-deadliest 55 KIA / 187 WIA and Day 94-95 continuing southern Lebanon strike-waves); Iraq 117+, Gulf 32+, UAE 14+9 wounded; Kuwait 1 wounded plus May 27 + Jun 1 ballistic launches intercepted (no Day 95 casualties)',
      delta: 'Kuwait Ali Al-Salem intercept (no casualties); additional Lebanese killed/wounded in continuing southern Lebanon IDF strikes (MOH figures pending)',
      status:
        "UNSC France-led emergency meeting on Lebanon convened Mon Jun 1; operative resolution prospects limited by US veto rights but Arab-European convergence framing held without Gulf-monarchy public adoption. Kuwait Ali Al-Salem IRGC launches intercepted — second Kuwait attack in five days. Egypt 'blatant aggression' carries; Lebanon PM Salam 'scorched-earth policy' carries. Continuing southern Lebanon IDF strikes despite Trump ceasefire announcement.",
    },
  },
  exec:
    "Day 95 is the cycle's pivotal day. Iran formally suspended all mediator-routed talks with the US over Israel's Lebanon operations — the cycle's first publicly-named Iranian withdrawal from the negotiating channel; Tasnim cited 'continuing crimes' of Israel in Lebanon; FM Araghchi: 'no dialogue will take place' until Israel fully withdraws from occupied Lebanon and halts attacks in Lebanon and Gaza (Euronews, CNBC, Stars and Stripes). Trump reined in Netanyahu in a profanity-laden call — Axios reported Trump told Netanyahu 'you're fucking crazy' on Israel's Lebanon escalation; the IDF called off its planned strike on Beirut; Trump posted on Truth Social that Israel and Hezbollah had 'agreed to halt hostilities' and that Iran talks were 'continuing at a rapid pace' (Axios, Foreign Policy, Bloomberg). Netanyahu's post-call statement publicly contradicted Trump's framing: IDF 'will continue to operate as planned' in southern Lebanon; Israel will strike Beirut if Hezbollah does not stop firing — cycle's first publicly-named principal-level US-Israel split (Haaretz, Washington Examiner). Capt Dr Ori Yosef Silvester (Givati Shaked medical officer, 30, Tel Aviv) killed by two Hezbollah FPV drones at Zawtar al-Sharqiyah; seven wounded (3 seriously) — first IDF KIA on the post-April-16 Lebanon truce front tracked separately in this series; 15th IDF service member KIA since the April 16 cessation per ToI/i24 framing. CENTCOM struck Iranian radar/drone sites at Goruk and Qeshm Island over weekend after Iran downed a US MQ-1; IRGC retaliated on Ali Al-Salem Air Base, Kuwait (two ballistic missiles intercepted) — second Kuwait attack in five days. IRGC Quds commander Qaani: Bab el-Mandeb to be activated alongside Hormuz closure — first publicly-named multi-chokepoint escalation framing. Brent surged >8% intraday before paring on Trump's Lebanon post. UNSC France-led emergency meeting on Lebanon convened Monday. 30-day ceasefire probability revises down from 17 to 9.",
  implications: [
    {
      title:
        "Iran's Tasnim-routed formal suspension of mediator dialogues is the cycle's first publicly-named Iranian withdrawal from the negotiating channel; the Trump 'rapid pace' vs Tasnim 'suspended' public framing is the cycle's widest principal-level disagreement on channel status",
      body:
        "Day 94's Araghchi 'will not sign' framing kept the channel open as conditionality; Day 95's Tasnim 'suspended' framing closes it as posture regardless of backchannel persistence. The negotiation-capacity clock failed publicly for the first time in the cycle. Tehran has now publicly staked positions on all three load-bearing MOU clauses plus formal suspension of the channel itself. Trump's Truth Social claim that talks are 'continuing at a rapid pace' is directly contradicted by Tasnim's formal framing; the public discrepancy is the cycle's widest. Skeptical counter: Iranian state media has previously announced 'suspensions' that were procedural rather than terminal — this may be a posture move tied to extracting US pressure on Israel for the Beirut-strike pause Trump did deliver. But the public posture sets the political ceiling on what either side can credibly sign in the next 72 hours.",
    },
    {
      title:
        "Trump-Netanyahu profanity-laden call ('you're fucking crazy') with publicly contested ceasefire framings names a US-Israel principal-level coalition split for the first time in the cycle; IDF Beirut strike called off but ground operations continue 'as planned'",
      body:
        "Axios reported on US-official-sourced terms that Trump told Netanyahu 'you're fucking crazy' on Israel's Lebanon escalation during the Monday call; the IDF's planned Beirut strike was called off following the call. Trump's Truth Social: Israel and Hezbollah have 'agreed to halt hostilities.' Netanyahu's post-call statement publicly contradicted: IDF 'will continue to operate as planned in southern Lebanon'; will strike Beirut if Hezbollah does not stop firing. Lebanese state media reported Israeli strikes continued across southern Lebanon. The coalition-cohesion clock strained more than at any point in the cycle. Skeptical counter: Trump-Netanyahu friction has historically resolved into coordinated posture within 48-72h. But the IDF's continued ops against the Trump-named ceasefire and the first IDF KIA of the truce period (Capt Silvester) establish the kinetic floor on what a Round 4 IDF-withdrawal sequencing can credibly demand.",
    },
    {
      title:
        "Taiwan: Brent's intraday >8% surge on Iran formal suspension framing breaks the structural retracement that held Days 92-94; EIA reference band ($106 May-June) holds but spot volatility widened sharply; Bab el-Mandeb framing adds a second chokepoint to the Hormuz-clearance pricing",
      body:
        "Brent surged >8% intraday on Tasnim's formal suspension framing before paring on Trump's Lebanon ceasefire posting (CNBC, Bloomberg). The structural retracement that held from the Day 92 $92.56 floor through Day 94's $93.26 close is broken; EIA reference band ($106 May-June 2026) holds but spot volatility widened sharply. Qaani's Bab el-Mandeb activation framing adds a second chokepoint to the Hormuz-clearance pricing. PGSA's continued $2M/transit yuan-billed operation institutionalizes Iran's 'management' framing; ~2,000 ships remain stranded. China still takes ~37.7% of all Hormuz crude flows; Putin-Xi May 20 Beijing summit energy-cooperation framing carries. LNG cover through September holds — TSMC's 2026 CapEx framework-signature path holds near 8% — but the publicly-contested clearance interval has lengthened indefinitely. The energy-infrastructure clock pivoted to 'tightening with a second chokepoint named at IRGC principal level'; the LNG-cover dominant case holds but the tail-risk read on a Round 4 collapse now prices a multi-chokepoint scenario for the first time in the cycle.",
    },
  ],
  casualtyNotes: {
    us:
      "No new KIA. CENTCOM Goruk/Qeshm strikes (third distinct US strike op since April 7); IRGC Ali Al-Salem retaliation intercepted — second Kuwait attack in five days. Trump 'rapid pace' vs Tasnim 'suspended' — cycle-widest publicly-named principal-level discrepancy. Trump 'fucking crazy' to Netanyahu (Axios) names US-Israel principal-level split for first time. Sledgehammer operational.",
    israel:
      "First IDF KIA of post-April-16 Lebanon truce period tracked in this series: Capt Dr Ori Yosef Silvester (Givati Shaked); 7 wounded. 15th since April 16 cessation per ToI/i24. Netanyahu post-call: IDF Lebanon ops continue 'as planned'; will strike Beirut if Hezbollah does not stop firing — contradicts Trump ceasefire. IDF Beirut strike called off; southern Lebanon strikes continued per Lebanese state media.",
    iran:
      "Tasnim/IRGC-affiliated outlet formally announces suspension of dialogues and text exchanges through mediators — cycle-first publicly-named withdrawal from the negotiating channel. Araghchi: 'no dialogue' until Israel withdraws from occupied Lebanon and halts attacks. Qaani: Bab el-Mandeb to be activated alongside Hormuz closure. Mojtaba HEU, Rezaei Hormuz, Araghchi Lebanon-deal welding all carry. PGSA $2M/transit yuan-billed regime continues; ~2,000 ships stranded.",
    other:
      "UNSC France-led emergency meeting on Lebanon convened Mon Jun 1. Kuwait Ali Al-Salem IRGC launches intercepted — second Kuwait attack in five days. Egypt 'blatant aggression' carries; Lebanon PM Salam 'scorched-earth policy' carries. Continuing southern Lebanon IDF strikes despite Trump ceasefire.",
  },
};

export default data;
