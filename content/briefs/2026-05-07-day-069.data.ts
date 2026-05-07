import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'conditional',
    spillover: 'critical',
    rationale: {
      direction:
        "Wednesday produced the first market-validated framework convergence of the war alongside the sharpest Lebanon escalation since the April 16 ceasefire. Axios broke an exclusive that the US and Iran are closing in on a one-page 14-point MOU negotiated by Witkoff and Kushner — declaring an end to the war, opening a 30-day window to finalize Hormuz reopening, lifting the US blockade in stages, delivering sanctions relief and frozen-funds release, and locking Iran into a 12-15 year uranium-enrichment moratorium with snap UN inspections (Axios, CNN, Jerusalem Post, US News, Al-Monitor). The market voted decisively — Brent tumbled ~8% to $101.27 (WTI ~$95.08), the largest daily move of the war (CNBC, Colorado Politics). Wang Yi's parallel pressure on Araghchi in Beijing for 'comprehensive ceasefire' and 'prompt resumption of Hormuz shipping' (Xinhua, Al Jazeera, Washington Times) creates active Chinese pressure one week before the May 14-15 Trump-Xi summit. Trump simultaneously warned Iran will be 'bombed at a much higher level and intensity than before' if no deal materializes — kinetic-floor backstop while saying 'never a deadline' (CNBC, NPR, ABC).",
      risk7d:
        "Seven-day risk downgrades from extreme to high. The framework now has 30-day finalization mechanics, gradual blockade-lift, snap inspections, sanctions relief, and an enrichment moratorium written down — structurally more durable than Trump's pause + Rubio's 'Epic Fury concluded' framing alone. But Iranian commitment authority remains fractured: Pezeshkian reportedly remains unable to reach Mojtaba Khamenei because an IRGC 'military council' of senior officers controls Supreme Leader access (Iran International carry, Just Security, Fox News, IranWire). The IRGC navy's framing that Hormuz transit will be ensured under 'new procedures' as 'US threats end' preserves operational sovereignty regardless of MOU language. Trump's 'much higher level' bomb threat and the 48-hour Iranian-response window flagged by Axios make the next two days the highest-leverage decision interval of the war.",
      spillover:
        "Spillover holds critical. The IDF struck Beirut for the first time since the April 16 Lebanon ceasefire, targeting the Hezbollah Radwan Force commander; three IDF soldiers were wounded earlier in Hezbollah explosive-drone attacks; the IDF issued evacuation warnings for 12 south-Lebanon villages and launched a wave of airstrikes (Haaretz, Times of Israel, Jerusalem Post). The French CMA CGM San Antonio (Maltese-flagged, 2,824 TEU) was struck on May 5 in Hormuz transit — possibly hit by cruise missile per analysts, several crew wounded, vessel proceeding to Mundra (Maritime Executive, World Cargo News, Oman Observer). The CMA CGM strike is the third major commercial casualty of the week alongside HMM NAMU and Fujairah ADCOP/VTTI. Netanyahu convened the security cabinet, said he would speak to Trump tonight on 'Iran developments,' insisted on 'full coordination,' set 'removal of all enriched material from Iran' as the goal — return-to-Gaza-fighting reportedly also discussed (Times of Israel liveblog May 6, Jerusalem Post, PBS).",
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'pivotal',
      source: 'Axios / CNN / US News / Al-Monitor / Jerusalem Post / BusinessWorld',
      event: "US and Iran closing in on one-page 14-point MOU — Witkoff and Kushner direct envoys, 30-day finalization window, 12-15 year enrichment moratorium, gradual blockade-lift, sanctions relief, snap UN inspections",
      summary:
        "Axios broke that the US and Iran are closing in on a one-page 14-point MOU negotiated by Witkoff and Kushner. The MOU declares an end to the war and opens a 30-day window to finalize the detailed agreement on Hormuz, nuclear, and sanctions. Iran commits to a 12-15 year uranium-enrichment moratorium, snap UN inspections, and (under discussion) no underground facilities. The US lifts sanctions and releases frozen funds; Iran's strait restrictions and the US blockade are gradually lifted during the window. Iranian responses on 'several key points' expected in 48 hours.",
      impact:
        "First market-validated framework convergence of the war. Brent's -8% close at $101.27 prices a meaningful upward revision in resolution probability. The framework's mechanical maturity is structurally more durable than the Trump-pause surface alignment that preceded it. Probability move 12 → 25 anchors here, capped by Iranian commitment-authority risk.",
    },
    {
      id: 2,
      direction: 'de-escalating',
      importance: 'pivotal',
      source: 'CNBC / Colorado Politics / Trading Economics',
      event: "Brent crude tumbles ~8% to $101.27 Wednesday (WTI ~$95.08) — largest daily move of the war; markets price framework convergence",
      summary:
        "Brent crude futures dropped more than 8% Wednesday to close at $101.27 per barrel; WTI down ~7% to $95.08 — the single largest daily move of the war. CNBC: 'oil prices fall more than 7% as U.S. and Iran appear close to deal to end war.' IMO reports ~23,000 seafarers from 87 countries stranded in the Persian Gulf.",
      impact:
        "Market validation of the MOU framework. Three structural offsets remain: the CMA CGM San Antonio strike, Iranian commitment-authority risk, and Lebanon's Wednesday re-escalation. For Taiwan procurement, floor moves from $115-130 to $95-115 with convergence priced; kinetic-tail $130-170 ceiling carries a Lebanon-and-IRGC-fracture hazard premium asymmetrically in the upper tail.",
    },
    {
      id: 3,
      direction: 'de-escalating',
      importance: 'pivotal',
      source: 'Xinhua / Washington Times / Al Jazeera / CNBC / ABC News',
      event: "Wang Yi tells Araghchi in Beijing 'comprehensive ceasefire urgently needed,' 'resumption of hostilities not acceptable,' demands 'prompt resumption of Hormuz shipping' — Hormuz demand omitted from Iran's readout",
      summary:
        "Wang Yi told Araghchi in Beijing 'a comprehensive ceasefire is urgently needed' and 'a resumption of hostilities is not acceptable,' explicitly calling for 'prompt resumption of shipping traffic' through Hormuz — a demand carried in China's readout but omitted from Iran's. Araghchi was the first Iranian official visitor to China since the war began. The meeting comes one week before the May 14-15 Trump-Xi summit.",
      impact:
        "First active Chinese pressure track of the war. China's incentive structure is now visibly aligned with the US on Hormuz reopening and against renewed hostilities ahead of the Trump-Xi summit. The readout divergence is a material de-escalation signal. The diplomatic architecture is now four-laned (Pakistan + Beijing + direct + Egypt-Mladenov on Gaza).",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'pivotal',
      source: 'Haaretz / Times of Israel ×2 / Jerusalem Post / FDD',
      event: "IDF strikes Beirut for first time since April 16 ceasefire — targets Radwan Force commander; three IDF soldiers wounded in Hezbollah drone attacks; IDF wave airstrikes after 12-village evacuation warnings",
      summary:
        "The IDF struck Beirut's southern suburbs Wednesday — first attack on the Lebanese capital since the April 16 ceasefire. Netanyahu-Katz joint statement said the strike targeted the Radwan Force commander 'to eliminate him.' Three IDF soldiers were wounded earlier in Hezbollah drone attacks. The IDF issued evacuation warnings for 12 south-Lebanon villages and launched a wave of airstrikes on Hezbollah infrastructure.",
      impact:
        "Lebanon track moves from de-escalating-by-tempo to actively escalating. Israel's structural independence from any US-Iran ceasefire framework — a standing prior since Day 40 — is now operationally visible at the framework-convergence inflection point. Whether the MOU's 'end of war' declaration holds across all theaters or only the Iran-Hormuz dyad will be determined by the Lebanon track in 48-72 hours.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: 'CNBC / NPR / ABC News',
      event: "Trump warns Iran will be 'bombed at a much higher level and intensity than before' if no deal; 'never a deadline' framing",
      summary:
        "Trump said Iran will be bombed 'at a much higher level and intensity than before' if it does not agree to a peace deal: 'if they don't agree, the bombing starts.' When asked about a deadline, Trump said 'Never a deadline.' The threat issued the same day Axios reported the US and Iran were closing in on the 14-point MOU.",
      impact:
        "Kinetic-floor signaling that backstops the MOU's coercive arithmetic. 'Never a deadline' preserves flexibility while 'much higher level' anchors failed-MOU consequences. The 24-hour swing from Rubio's 'offensive over' to Trump's 'much higher level' brackets the kinetic option visibly — a bargaining configuration consistent with framework finalization rather than collapse.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'high',
      source: 'Iran International carry / Just Security / Fox News / IranWire',
      event: "Pezeshkian unable to reach Mojtaba Khamenei — IRGC 'military council' of senior officers controls Supreme Leader access, blocks civilian government urgent-meeting request",
      summary:
        "Reports indicate Pezeshkian has repeatedly sought an urgent meeting with Mojtaba Khamenei to halt IRGC attacks on Gulf states but has been unable to establish contact — an IRGC senior-officer 'military council' controls access to the new Supreme Leader, isolating him from the elected government. Sources close to the presidency say Pezeshkian believes the country 'cannot withstand a new full-scale war.'",
      impact:
        "Confirms and sharpens Day 68's regime-cohesion concern. Iranian commitment authority on any MOU signature is structurally fractured: the diplomatic track cannot reach the Supreme Leader, and the IRGC chain controls both access and execution. Whose signature binds Iran is the dominant remaining variable at the moment of MOU mechanical maturity.",
    },
    {
      id: 7,
      direction: 'mixed',
      importance: 'medium',
      source: 'Maritime Executive / World Cargo News / Oman Observer / JPost / Al Jazeera',
      event: "French CMA CGM San Antonio (Maltese-flagged, 2,824 TEU) struck while transiting Hormuz May 5 — several crew wounded, vessel damaged, possibly cruise-missile strike per analysts",
      summary:
        "CMA CGM confirmed Wednesday that the CMA CGM San Antonio (Maltese-flagged, 2,824 TEU) was attacked while transiting the Strait of Hormuz on Tuesday May 5, with several crew injured and the ship damaged; possibly hit by cruise missile per analysts. The vessel continues toward Mundra. The IRGC navy declared safe Hormuz transit 'will be ensured' under 'new procedures.'",
      impact:
        "Third major commercial-shipping casualty of the week alongside HMM NAMU and Fujairah ADCOP/VTTI. Kinetic risk to commercial transit has not been priced out by the diplomatic surface. The IRGC navy's 'new procedures' framing preserves Iranian operational sovereignty over the strait regardless of MOU language — toll-institutionalization risk persists structurally.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed KIA / WIA unchanged',
      status:
        "No new confirmed KIA Wednesday. Trump warns Iran will be 'bombed at a much higher level and intensity than before' if no deal — 'if they don't agree, the bombing starts'; says 'never a deadline' (CNBC, NPR, ABC News). US-Iran closing in on one-page 14-point MOU per Axios exclusive; Witkoff and Kushner direct envoys; 30-day finalization window with phased blockade-lift, 12-15 year enrichment moratorium, sanctions relief, snap UN inspections. US expects Iranian response on 'several key points' in next 48 hours. Blockade and 15,000-troop Hormuz posture remain in defensive ROE per Project Freedom pause.",
    },
    israel: {
      cumulative: 'KIA: 47 · WIA: 8,597',
      delta: '+0 KIA / +3 WIA Wednesday',
      status:
        "Three IDF soldiers wounded in Hezbollah explosive-drone attacks in southern Lebanon (Times of Israel liveblog May 6). IDF strikes Beirut for first time since April 16 Lebanon ceasefire — targets Hezbollah Radwan Force commander in southern suburbs per Netanyahu-Katz joint statement (Haaretz, Jerusalem Post). IDF launches wave of airstrikes on Hezbollah infrastructure across south Lebanon after evacuation warnings for 12 villages. Netanyahu convenes security cabinet, says will speak to Trump tonight on Iran developments and insists 'full coordination' (Times of Israel liveblog May 6). Return-to-Gaza-fighting reportedly discussed.",
    },
    iran: {
      cumulative: "Iran LMO 'nearly 3,400' KIA · HRANA April 7: 3,636+ (1,701 civilians, 1,221 military, 254+ children) · Hengaw 6,620+ military · 3.2M displaced",
      delta: 'No new confirmed casualty figures Wednesday',
      status:
        "Pezeshkian reportedly unable to reach Mojtaba Khamenei — IRGC 'military council' controls access to new Supreme Leader, blocking civilian government urgent-meeting request (Iran International carry, Just Security, Fox News, IranWire). Araghchi in Beijing meets Wang Yi; China calls for 'comprehensive ceasefire' and 'prompt resumption of Hormuz shipping traffic' — Hormuz demand carried in Chinese readout omitted from Iranian (Xinhua, Washington Times, Al Jazeera). IRGC navy: Hormuz transit 'will be ensured' under 'new procedures' as 'US threats end' (RT, Al Jazeera). Iran reviewing 14-point MOU. AlanChand USD-Remittance 1,831,000 IRR Wednesday (+0.71% vs Tuesday); cash USD 1,762,000 (-3.48%) — divergence reads as cash-market repricing on MOU progress while remittance lags.",
    },
    other: {
      cumulative: 'Lebanon MOH: 2,663+ KIA / 8,197+ WIA · Iraq: 117+ · Gulf states: 32+ · UAE: 11+3 injured Monday',
      delta: 'Lebanon: ~14 estimated WIA from IDF airstrike wave',
      status:
        "Lebanon: estimated WIA from IDF wave airstrikes on Hezbollah infrastructure across south Lebanon after 12-village evacuation warnings; first Beirut strike since April 16 ceasefire targets Radwan commander; Berri no-negotiations declaration carries. UAE: Fujairah ADCOP/VTTI infrastructure damage persists from Monday; Bahrain-led 90+ country statement and US-Bahrain-Saudi-UAE-Kuwait-Qatar UNSC draft active. Maritime: French CMA CGM San Antonio (Maltese-flagged, 2,824 TEU) struck May 5 while transiting Hormuz, several crew wounded, vessel damaged, possibly cruise missile per analysts (Maritime Executive, World Cargo News, Oman Observer, JPost). HMM NAMU investigation continues 'several days' per Seoul. IMO reports ~23,000 seafarers stranded across vessels from 87 countries.",
    },
  },
  exec:
    "Wednesday produced the most material framework-convergence signal of the war alongside the sharpest Lebanon escalation since the April 16 ceasefire and a continued widening of the Iranian civilian-military regime split. Axios broke an exclusive that the US and Iran are closing in on a one-page 14-point memorandum of understanding negotiated by Witkoff and Kushner that would declare an end to the war, open a 30-day window to finalize Hormuz reopening, lift the US blockade in stages, deliver sanctions relief, and lock Iran into a 12-15 year uranium-enrichment moratorium with snap UN inspections; US officials expect Iranian responses on 'several key points' in the next 48 hours (Axios, CNN, US News, Al-Monitor, Jerusalem Post). Brent crude tumbled ~8% to $101.27 (WTI ~$95.08) — the single largest daily move of the war — pricing the framework's emergence (CNBC, Colorado Politics). In Beijing, Wang Yi told Araghchi a 'comprehensive ceasefire is urgently needed' and a 'resumption of hostilities is not acceptable,' and explicitly demanded 'prompt resumption of shipping traffic' through Hormuz — a demand carried in China's readout that Iran's omitted (Xinhua, Washington Times, Al Jazeera, CNBC). The Beijing meeting comes one week before the Trump-Xi summit on May 14-15. Trump simultaneously warned Iran will be 'bombed at a much higher level and intensity than before' if no deal materializes, while saying 'never a deadline' (CNBC, NPR, ABC News). The IDF struck Beirut for the first time since the April 16 Lebanon ceasefire, targeting the Radwan Force commander; three IDF soldiers were wounded earlier in Hezbollah drone strikes; the IDF issued evacuation warnings for 12 south-Lebanon villages and launched a wave of airstrikes (Haaretz, Times of Israel, Jerusalem Post). The French CMA CGM San Antonio was struck May 5 in Hormuz, several crew wounded (Maritime Executive, JPost). Pezeshkian reportedly remained blocked from reaching Mojtaba Khamenei by an IRGC 'military council' controlling Supreme Leader access (Iran International carry, Just Security, IranWire). Analytical judgment: 30-day ceasefire probability moves 12 → 25 — the framework is now genuinely convergent and the market has voted, but Iranian commitment authority remains fractured and the Lebanon track is independently re-escalating.",
  implications: [
    {
      title: "The Witkoff-Kushner one-page 14-point MOU is the first market-validated framework convergence of the war — but the gap between framework signature and Iranian commitment authority is now the dominant structural variable",
      body:
        "The Axios exclusive that the US and Iran are closing in on a one-page 14-point MOU is structurally distinct from prior diplomatic surface signaling because it specifies mechanics: a declaration ending the war, a 30-day window to finalize the detailed agreement, Iran's commitment to never seek a nuclear weapon, a 12-15 year uranium-enrichment moratorium, gradual lifting of Iran's strait restrictions and the US naval blockade during the 30-day period, sanctions relief plus billions in frozen-fund release, and an enhanced inspections regime including UN snap inspections — with a clause under discussion that would commit Iran not to operate underground facilities (Axios, CNN, Jerusalem Post). The market voted decisively: Brent's -8% Wednesday close at $101.27 was the single largest daily move of the war, signaling a meaningful upward revision in resolution probability priced in real time (CNBC, Colorado Politics). Wang Yi's parallel pressure on Araghchi in Beijing for 'comprehensive ceasefire' and 'prompt resumption of Hormuz shipping' — explicitly carried in China's readout while omitted from Iran's — creates the first active Chinese pressure track of the war one week before the Trump-Xi summit on May 14-15. Trump's 'much higher level' bomb threat is the kinetic-floor signaling that backstops the MOU's coercive arithmetic. Analytical judgment: the framework is genuinely convergent, but Pezeshkian's reported inability to reach Mojtaba Khamenei through the IRGC 'military council' means whose signature binds Iran is the dominant remaining variable. Probability move 12 → 25 reflects the framework's mechanical maturity and market validation, capped by commitment-authority risk.",
    },
    {
      title: "Lebanon's first Beirut strike since the April 16 ceasefire reverses the Tuesday lower-intensity reading and converts the Lebanon track from de-escalating-by-omission to actively re-escalating in parallel with Iran-track convergence — Israel's structural independence from any US-Iran framework is now operationally visible",
      body:
        "The IDF's targeted strike on the Hezbollah Radwan Force commander in Beirut's southern suburbs marks the first attack on the Lebanese capital since the April 16 ceasefire entered effect (Haaretz, Jerusalem Post, Times of Israel). The Netanyahu-Katz joint statement claiming the strike to 'eliminate' the commander signals senior-political-level decision authority and breaks the ceasefire's central tactical norm. The same day produced three IDF soldiers wounded in Hezbollah explosive-drone attacks, evacuation warnings for 12 south-Lebanon villages, and a wave of IDF airstrikes on Hezbollah infrastructure (Times of Israel, FDD). Netanyahu convening the security cabinet and saying he will speak to Trump tonight about 'Iran developments' while insisting on 'full coordination' and the goal of 'removal of all enriched material from Iran' reads as a position-staking move ahead of MOU finalization — the security cabinet readout reportedly also discussed return-to-Gaza-fighting (Times of Israel liveblog May 6, PBS, Jerusalem Post). Analytical judgment: under the multi-clock framework, the Lebanon single-clock direct-attack track moves from de-escalating-by-tempo to actively escalating; Israel's structural independence from any US-Iran ceasefire framework — a standing prior since Day 40 — is now operationally visible at the framework-convergence inflection point. The Lebanon track will determine whether the MOU's 'end of war' declaration can credibly hold across all theaters or only the Iran-Hormuz dyad.",
    },
    {
      title: "Brent's $113.54 → $101.27 Wednesday capitulation prices framework convergence but the kinetic-tail premium and Asian-importer structural discount must hold against Lebanon escalation, IRGC commitment-authority risk, and the CMA CGM San Antonio strike — Taiwan procurement should hedge symmetrically",
      body:
        "Brent's roughly $12 Wednesday capitulation — from Tuesday's $113.54 close to $101.27 — is the largest daily move of the war and quantifies a meaningful upward revision in resolution probability priced by the market (CNBC, Colorado Politics). But three structural offsets remain. First, the CMA CGM San Antonio strike on Tuesday (confirmed Wednesday) — possibly hit by cruise missile per analysts, several crew wounded, the third major commercial casualty of the week alongside HMM NAMU and the Fujairah ADCOP/VTTI bypass — establishes that the kinetic risk to commercial transit has not been priced out by the diplomatic surface (Maritime Executive, World Cargo News, Oman Observer, JPost). Second, the Iranian commitment-authority risk: Pezeshkian's reported inability to reach Mojtaba Khamenei via the IRGC 'military council' means the framework's signature value is structurally uncertain regardless of MOU mechanical maturity (Iran International carry, Just Security, IranWire, Fox News). Third, Lebanon's Wednesday re-escalation — Beirut Radwan strike, three IDF wounded, 12-village evacuation, IDF airstrike wave — is independent of the MOU's 'end of war' declaration scope (Haaretz, Times of Israel). For Taiwan procurement, the floor moves from $115-130 to $95-115 with framework convergence priced (assuming MOU signature within 7-10 days); the kinetic-tail $130-$170 ceiling now carries a Lebanon-spillover-and-IRGC-commitment-fracture hazard premium asymmetrically located in the upper tail. CPC procurement should treat the floor as soft until the MOU is signed; the IMO ~23,000 stranded seafarers across vessels from 87 countries (per Wednesday reports) is the humanitarian-and-logistics fact that lingers regardless of price. TSMC 2026 CapEx pricing should hedge symmetrically across both tails — framework signature discount and IRGC commitment-fracture premium — rather than collapse to a single narrative price target. The IRGC navy's 'new procedures' framing for Hormuz transit preserves Iranian operational sovereignty regardless of MOU language, suggesting toll-institutionalization risk persists structurally even under framework signature.",
    },
  ],
  casualtyNotes: {
    us:
      "No new confirmed KIA Wednesday. Trump warns 'much higher level' bombing if no deal — 'if they don't agree, the bombing starts'; says 'never a deadline.' US-Iran closing in on one-page 14-point MOU per Axios; Witkoff-Kushner direct envoys; 30-day finalization window; phased blockade-lift; 12-15 year enrichment moratorium; sanctions relief; snap UN inspections. Iranian response on 'several key points' expected next 48 hours. Blockade and 15,000-troop Hormuz posture remain in defensive ROE.",
    israel:
      "+3 WIA — three IDF soldiers wounded in Hezbollah explosive-drone attacks south Lebanon. IDF strikes Beirut first time since April 16 ceasefire — Radwan Force commander targeted per Netanyahu-Katz joint statement. IDF wave airstrikes after 12-village evacuation warnings. Netanyahu convenes security cabinet; speaks to Trump tonight on Iran developments; insists 'full coordination'; 'removal of all enriched material' goal. Return-to-Gaza-fighting reportedly also discussed.",
    iran:
      "Pezeshkian unable to reach Mojtaba Khamenei — IRGC 'military council' of senior officers controls Supreme Leader access; Pezeshkian believes 'country cannot withstand a new full-scale war.' Araghchi in Beijing meets Wang Yi; China demands 'comprehensive ceasefire' and 'prompt resumption of Hormuz shipping' — Hormuz demand omitted from Iran's readout. IRGC navy: transit 'ensured' under 'new procedures.' Iran reviewing 14-point MOU. AlanChand USD-Remittance 1,831,000 IRR (+0.71%); cash USD 1,762,000 (-3.48%).",
    other:
      "Lebanon: ~14 WIA estimated from IDF wave airstrikes; Beirut Radwan strike first since April 16 ceasefire; Berri no-negotiations carries. UAE: Fujairah ADCOP/VTTI persists; Bahrain-led 90+ country statement; UNSC draft active. Maritime: French CMA CGM San Antonio (Maltese-flagged, 2,824 TEU) struck May 5 in Hormuz; several crew wounded; possibly cruise missile; vessel proceeding to Mundra. HMM NAMU investigation continues. IMO ~23,000 seafarers from 87 countries stranded.",
  },
};

export default data;
