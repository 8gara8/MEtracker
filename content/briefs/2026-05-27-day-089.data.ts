import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'conditional',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 89 carries the Doha round home — the Iranian delegation returned to Tehran in the early hours after meetings with Qatari mediators — and direction holds mixed. Pulling de-escalatory: Trump posted on Truth Social that both sides were close to finalizing an agreement involving 'strong inspections,' Secretary of State Rubio framed the remaining gaps as 'disagreements over a word, a sentence,' and Brent crude held around $97 a barrel — Day 88's roughly six-percent move did not unwind. Pulling escalatory: Khamenei's advisor Ali Shamkhani publicly dismissed Trump's preferred nuclear control as a 'fantasy,' Ayatollah Mojtaba Khamenei broke a long silence to vow no US military bases in the region, the IDF struck more than 100 Hezbollah sites overnight in Lebanon and killed twelve people including a family in Mashghara as Israeli troops clashed with Hezbollah along the Litani, and Iranian outlets reported four IRGC members killed in the previous day's CENTCOM strikes. The 30-day ceasefire probability holds at 25: the talks did not break, but the Khamenei circle moved publicly to constrain the negotiators while a separate Lebanon-track flare ran hot.",
      risk7d:
        "Seven-day risk holds conditional, with a new dated trigger inside the window. The US-Iran negotiation produced no new ultimatum or clock: Trump's framing softened from Day 88's 'Back to the Battlefront' to 'close, will not rush,' and Rubio's 'word, sentence' line implies an active drafting exchange rather than a stalled one. But the Lebanon-Israel direct talks scheduled for Washington on May 29–30 now carry the most concrete near-term yes/no in the brief — and they convene against the heaviest IDF strike day in weeks and an Israeli troop call-up. Under the multi-clock framework the active-deadline clock activates a Lebanon-track sub-deadline; the negotiation-capacity clock holds; the kinetic clock for US-Iran reads stable around a still-operational Sledgehammer architecture and a still-live IRGC retaliation warning. Conditional rather than critical reflects that none of these readings has flipped to a calendar-driven resumption — but the Washington meeting and the Khamenei-circle hardening are this week's pressure points.",
      spillover:
        "Spillover holds critical and intensifies on the Lebanon vector. Overnight IDF strikes hit more than 100 Hezbollah sites across southern Lebanon and the Bekaa, the strike on Mashghara killed twelve including several members of one family, IDF troops and Hezbollah exchanged rocket, artillery and drone fire along the Litani toward Yohmor al-Shaqif and Zawtar al-Sharqieh, and Netanyahu authorised more intensive strikes ahead of the May 29 Washington meeting. The Strait of Hormuz reading carries — Brent stable around $97, the Day 88 LNG-tanker transits not reversed but not extended, the US port blockade and Iran's permit regime both formally in place. The Iraqi-territory drone vector against Gulf infrastructure carries. The energy-infrastructure clock is not improving today; the Lebanon track has clearly worsened.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: "Time / NBC News / Axios / NPR (Trump May 27 Truth Social — 'close,' 'strong inspections,' 'will not rush'; Rubio 'word, sentence')",
      event:
        "Trump posts that the US and Iran are 'close' to a deal involving 'strong inspections' but says he will not 'rush into' an agreement; Rubio characterises the remaining gap as 'disagreements over a word, a sentence'",
      summary:
        "After Monday's deal-or-war binary, the Washington framing softened on Day 89. President Trump posted on Truth Social that both sides were close to finalizing an agreement involving strong inspections and said he would not 'rush into' a deal with Iran. Secretary of State Marco Rubio told reporters the remaining gaps had narrowed to 'disagreements over a word, a sentence' — granular drafting friction rather than principle. Trump officials briefing Axios said an end-of-war agreement could take 'days,' with Iran agreeing in principle to dispose of its enriched-uranium stockpile but the disposition mechanism unresolved. The Iranian delegation — Foreign Minister Araghchi, parliament speaker Ghalibaf and Central Bank Governor Hemmati — returned to Tehran in the early hours after the Doha round; Qatari and Iranian diplomats chiefly worked the frozen-funds file, per Fars.",
      impact:
        "Analytical judgment: the political-will clock swung back from Day 88's ultimatum toward the negotiating posture of Day 87, and the negotiation-capacity clock continues to advance — Rubio's 'word, sentence' framing is the most granular American characterisation of the remaining gap to date. The 'strong inspections' language matters: it signals movement on the verification clause that Iran has been most reluctant to concede in principle. Skeptical counter: 'word, sentence' is itself a claim from one party, and unsigned drafts have collapsed at the word level before — the Islamabad '80 percent complete' framing was just as fine-grained the week the USS Spruance was seized. The delegation's return to Tehran without a signature is consistent with a working pause for political clearance, not with closure.",
    },
    {
      id: 2,
      direction: 'escalation',
      importance: 'high',
      source: "Time / Euronews / Wikipedia 2026 Iran war ceasefire (Shamkhani 'fantasy'; Mojtaba Khamenei 'no US bases' speech)",
      event:
        "Khamenei advisor Ali Shamkhani publicly dismisses Trump's preferred nuclear control as a 'fantasy' and Ayatollah Mojtaba Khamenei breaks a long silence to vow no US military bases in the region — the Supreme Leader's circle moves publicly to constrain the negotiators",
      summary:
        "On the same day Trump described the talks as close, two figures from inside Iran's Supreme Leader's circle made unusually public interventions. Ali Shamkhani, advisor to Ayatollah Ali Khamenei, dismissed Trump's stated desire for control over the Iranian nuclear programme as a 'fantasy.' Ayatollah Mojtaba Khamenei — son of the Supreme Leader and a figure who rarely speaks publicly — broke that silence to vow no US military bases would be permitted in the region, addressing the post-deal regional-architecture question that has begun to creep into the draft as the normalization annex is discussed. Both statements came alongside Pezeshkian's repeated assurance that Iran is not pursuing a nuclear weapon and that the talks are 'neither surrender nor retreat.'",
      impact:
        "Analytical judgment: structurally significant. Shamkhani and Mojtaba Khamenei speak for the constituency Pezeshkian and Araghchi must sell any deal to — and both moved to publicly tighten the red lines on exactly the two clauses the negotiation has been working: nuclear-control language and the US regional posture that the normalization demand implicates. Under the multi-clock framework the negotiation-capacity clock keeps moving while the political-will clock on the Iranian side gets harder, not softer. Skeptical counter: public hardening by hawkish principals is a familiar feature of late-stage Iranian negotiations — it can be cover for a deal, not against one. But coupled with Tasnim's no-nuclear-concession line carried from Day 88, the read is that Tehran's domestic-political ceiling on a deal is being publicly nailed in.",
    },
    {
      id: 3,
      direction: 'escalation',
      importance: 'high',
      source: "PBS News / The Washington Times / The Times of Israel (IDF 100+ Hezbollah-site strike, Mashghara 12 killed; Litani clashes; Netanyahu authorisation; Washington talks May 29)",
      event:
        "The IDF strikes more than 100 Hezbollah sites overnight across southern Lebanon and the Bekaa, killing twelve including a family in Mashghara, and clashes with Hezbollah along the Litani three days before direct Lebanese-Israeli military talks open in Washington",
      summary:
        "The Lebanon track flared sharply. The Israeli military said it struck more than 100 Hezbollah sites overnight across southern Lebanon and the eastern Bekaa Valley — storage facilities, command centres and observation points it linked to attacks on Israeli troops and northern-Israel residents — and the strike on the eastern village of Mashghara killed twelve people, including several members of one family, per Lebanon's National News Agency. Israeli troops clashed with Hezbollah along the Litani as the IDF pushed further north; Hezbollah said it fired rockets, artillery and explosive drones at Israeli forces near Yohmor al-Shaqif and Zawtar al-Sharqieh. Prime Minister Netanyahu had authorised more intensive strikes. The IDF called up additional troops. Lebanese and Israeli military delegations are due to meet for direct talks in Washington on May 29.",
      impact:
        "Analytical judgment: the Lebanon track is not on the same clock as the US-Iran negotiation, and Day 89 is the strongest evidence of that divergence the brief has logged in three weeks. The 45-day ceasefire extension is procedurally in effect; the kinetic reality is escalating into the Washington meeting. Under the multi-clock framework the active-deadline clock now carries a Lebanon-track yes/no on May 29–30. The draft US-Iran memorandum's Lebanon war-end clause is increasingly hard to read as binding on Israeli operational choices. Skeptical counter: an Israeli escalation immediately before a Washington meeting is consistent with maximum-pressure negotiating leverage, not with a return to all-out war — but the family killed in Mashghara is exactly the casualty pattern that has historically closed off de-escalation off-ramps in this conflict.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: "CNN / NBC News / CBS News (CENTCOM strikes — IRGC reports 4 dead; Iranian foreign ministry ceasefire-violation accusation; ceasefire still 'in place')",
      event:
        "Domestic Iranian outlets report four IRGC members killed in the previous day's CENTCOM Hormozgan strikes; Iran's foreign ministry accuses Washington of ceasefire violations; the IRGC vows 'decisive response' while the formal ceasefire remains in place",
      summary:
        "Reporting on the Day 88 CENTCOM 'self-defence' strikes around Bandar Abbas firmed. Domestic Iranian outlets reported four IRGC members had been killed in the Hormozgan operation, though Tehran has not officially confirmed the strikes. Iran's foreign ministry formally accused Washington of ceasefire violations in the Hormozgan area over the preceding forty-eight hours, citing 'repeated naval harassment against Iranian commercial vessels.' The IRGC said it would 'leave no act of aggression unanswered' and vowed a 'decisive response to any violation of the ceasefire.' CENTCOM continued to assert the strikes were defensive and that the broader US-Iran ceasefire remained in place; both sides' negotiators continued to characterise the political talks as advancing.",
      impact:
        "Analytical judgment: under the multi-clock framework the kinetic clock stays operational alongside the political clock — not above it, but not below it either. The pattern carries: a ceasefire that produces concurrent intra-window strikes is a ceasefire by name, and the standing prior on the kinetic option being unwithdrawn holds. The IRGC retaliation warning is rhetorically explicit but operationally undated. Skeptical counter: contained tit-for-tat with verbal escalation has been the operating pattern since the Day 40 framework — a 'decisive response' line has been issued repeatedly without translation into an asymmetric act. The four reported IRGC dead are the unit-of-cost the regime has tolerated since the war began.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed',
      status:
        "No new US casualties confirmed. CENTCOM held the line that Monday's 'self-defence' strikes in Hormozgan were defensive and that the US-Iran ceasefire remains in place. The Sledgehammer architecture is operational; the prepared kinetic option is unwithdrawn; the US naval blockade of Iranian ports stays formally in place. Trump's tone moderated from Day 88's ultimatum to 'close, will not rush.'",
    },
    israel: {
      cumulative: 'KIA: 47 · WIA: 8,603+',
      delta: '+0 KIA / +0 WIA from Iran front (Lebanon front actively escalating)',
      status:
        "No new Israeli casualties confirmed on the Iran front. The IDF struck more than 100 Hezbollah sites overnight across southern Lebanon and the Bekaa, clashed with Hezbollah along the Litani toward Yohmor al-Shaqif and Zawtar al-Sharqieh, called up additional troops, and Netanyahu authorised more intensive strikes ahead of the May 29 Washington meeting. The enrichment-dismantlement-and-removal condition on any final US-Iran deal carries.",
    },
    iran: {
      cumulative:
        "LMO 'nearly 3,400' KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · Hengaw 6,620+ mil · 3.2M displaced",
      delta: '+4 IRGC reported KIA from May 25–26 Hormozgan strikes (domestic outlets; unconfirmed by Tehran)',
      status:
        "Iranian domestic outlets reported four IRGC members killed in the previous day's CENTCOM Hormozgan strikes; Tehran has not officially confirmed. The Iranian delegation — Araghchi, Ghalibaf, Hemmati — returned to Tehran from Doha. Khamenei advisor Shamkhani called Trump's preferred nuclear control a 'fantasy'; Mojtaba Khamenei vowed no US bases in the region. Hyperinflation reporting carries — Fortune cites prices up roughly 40% since the war began; CBI inflation reads carry from Day 88.",
    },
    other: {
      cumulative:
        'Lebanon MOH war-cumulative: at least 3,032 killed (incl. 12 Mashghara) (292 women + 211 children figure carries; new additions pending official update); truce-period KIA at least 657 · ~8,946+ WIA war-cumulative · Iraq: 117+ · Gulf states: 32+ · UAE: 14+9 wounded cumulative · Kuwait: 1 wounded',
      delta: '+12 KIA Lebanon (Mashghara strike); Litani-line clashes ongoing',
      status:
        "Lebanon track flared: Mashghara strike killed twelve including several members of one family per Lebanon's NNA; IDF struck 100+ Hezbollah sites across the south and Bekaa overnight; Litani-line clashes with Hezbollah rockets, artillery and drones; IDF troop call-up; Washington talks May 29. The Strait of Hormuz remains effectively closed to open commercial traffic with Brent stable around $97; Day 88's three LNG-tanker transits not reversed but not extended; Iraq's drone-investigation track carries.",
    },
  },
  exec:
    "Day 89 carries the Doha round home: the Iranian delegation — Foreign Minister Araghchi, parliament speaker Ghalibaf and Central Bank Governor Hemmati — returned to Tehran in the early hours after meetings with Qatari mediators chiefly focused on the frozen-funds file (Fars via CNN, NBC News). President Trump's tone moderated from Day 88's deal-or-war binary: he posted that the two sides were close to finalizing an agreement involving 'strong inspections,' but added he would not 'rush into' a deal (Time, NBC News); Secretary of State Rubio narrowed the framing further, telling reporters the remaining gaps were 'disagreements over a word, a sentence' (NBC News). The Supreme Leader's circle moved publicly in the opposite direction. Khamenei advisor Ali Shamkhani dismissed Trump's preferred nuclear control as a 'fantasy,' and Ayatollah Mojtaba Khamenei broke a long silence to vow no US military bases would be permitted in the region (Time, Euronews) — two interventions aimed squarely at the nuclear-control and regional-posture clauses the draft has been working. The Lebanon track flared in parallel: the IDF struck more than 100 Hezbollah sites overnight across southern Lebanon and the Bekaa, the strike on Mashghara killed twelve including a family, Israeli troops clashed with Hezbollah along the Litani, the IDF called up more troops, and direct Lebanese-Israeli military talks are due in Washington on May 29 (PBS News, Washington Times). Iranian domestic outlets reported four IRGC members killed in the previous day's CENTCOM Hormozgan strikes; Iran's foreign ministry formally accused Washington of ceasefire violations; the IRGC vowed a 'decisive response,' while both sides held that the political track is advancing (CNN, NBC News). Brent crude held around $97 — Day 88's roughly six-percent move did not unwind, but did not extend either (Trading Economics). Analytical judgment: the 30-day ceasefire probability holds at 25; direction holds mixed; seven-day risk holds conditional — the negotiating gap narrowed verbally while the Khamenei circle hardened publicly and the Lebanon track ran hot into a calendar event.",
  implications: [
    {
      title:
        "The verbal gap narrows while the political ceiling tightens — Tehran's hawks publicise the red lines exactly as the drafters trim the words",
      body:
        "The most consequential pattern on Day 89 is the divergence between the negotiating language and the political language out of Tehran. Trump moved from 'Back to the Battlefront' to 'close,' Rubio narrowed the gap to 'a word, a sentence,' and Trump officials briefing Axios suggested an end-of-war agreement could land within days, with Iran agreeing in principle to dispose of its enriched-uranium stockpile under a still-to-be-agreed mechanism. Pulling against that, Khamenei advisor Shamkhani called Trump's desired control over the nuclear programme a 'fantasy' and Mojtaba Khamenei vowed no US military bases in the region — both statements aimed precisely at the two clauses the drafters are working: verification language on the nuclear file and the post-deal regional-architecture text the normalization annex pulls in. Analytical judgment: under the multi-clock framework the negotiation-capacity clock advanced and the substance clock did not — the same gap the Day 88 brief flagged, now publicly signed by figures with veto power over what Pezeshkian can sell at home. The skeptical counter is real and important: public hardening by hawkish principals is a familiar feature of late-stage Iranian deals — it can be cover for an agreement as easily as resistance to one. But cumulatively, the official-claim discipline pushes against the 'close' framing as much as toward it.",
    },
    {
      title:
        "Lebanon now carries its own calendar — Washington May 29 is the week's nearest yes/no",
      body:
        "For three weeks the Lebanon track has bled under the 45-day ceasefire extension without intersecting the US-Iran clock. Day 89 is the strongest evidence yet that those clocks are not the same clock. The IDF struck more than 100 Hezbollah sites overnight across southern Lebanon and the Bekaa, the Mashghara strike killed twelve including a family, Israeli troops clashed with Hezbollah along the Litani, Netanyahu authorised more intensive strikes, and the IDF called up additional troops — all in the seventy-two hours before the May 29 Washington meeting between Lebanese and Israeli military delegations. The draft US-Iran memorandum's Lebanon war-end clause is increasingly hard to read as binding on Israeli operational choices: Israel is not party to that text. Analytical judgment: the multi-clock framework's active-deadline clock activates a Lebanon sub-deadline on May 29 — this is the week's nearest dated yes/no. The standing prior on Israel's independence from the US-Iran framework carries and hardens. Skeptical counter: a major Israeli operation immediately before a US-mediated meeting is consistent with maximum-pressure negotiating leverage rather than a return to open war, and the May 29 meeting may convert kinetic pressure into procedural progress at the table. But a strike on a family changes the politics of a Lebanese delegation in ways a deferred MOU clause cannot reverse.",
    },
    {
      title:
        "Taiwan: the easing holds without extending — Brent around $97, the LNG-tanker line not yet a flow",
      body:
        "Day 89 is the second day of Brent below $100, and the first day on which the move did not extend. Brent traded around $97 a barrel, holding most of Day 88's roughly six-percent fall but not building on it; the three LNG tankers that transited the Strait of Hormuz on Day 88 were not joined by a fourth in today's reporting. For Taiwan the variable remains the signature, and the read is the same as Day 88 from a slightly lower base: CPC's working floor near $110 now sits well above a sub-$98 spot, which carries an immediate procurement improvement independent of a deal; if the memorandum is signed, the four-to-six-month logistical normalisation begins from this lower base rather than the Day-87 base. Analytical judgment: the energy-infrastructure clock did not improve further today, and the three-tanker line is closer to a permit-regime exception than to a return of flow against the roughly 95-vessel pre-war norm. TSMC's 2026 CapEx framework-signature path holds near eight percent; LNG cover through September is confirmed; the Lebanon escalation does not directly touch Taiwan's energy or chip exposure today but is a reminder that the regional war is wider than the Hormuz file alone. There is no fresh Taiwan-specific development.",
    },
  ],
  casualtyNotes: {
    us:
      "No new KIA. CENTCOM held that Monday's Hormozgan strikes were 'self-defence' and the US-Iran ceasefire remains in place. The Sledgehammer architecture is operational; the kinetic option is unwithdrawn.",
    israel:
      "No new Iran-front casualties. IDF struck 100+ Hezbollah sites overnight; Mashghara strike killed twelve including a family; Litani-line clashes; troop call-up; Netanyahu authorised more intensive strikes ahead of May 29 Washington talks.",
    iran:
      "Iranian domestic outlets reported four IRGC members killed in the May 25–26 CENTCOM Hormozgan strikes (unconfirmed by Tehran). Shamkhani called Trump's nuclear control 'fantasy'; Mojtaba Khamenei vowed no US bases in the region; the Doha delegation returned to Tehran.",
    other:
      "Lebanon flared: +12 KIA (Mashghara) on top of carried war-cumulative ~3,020; Litani-line clashes ongoing. Brent stable around $97; Day 88's three LNG-tanker transits neither reversed nor extended.",
  },
};

export default data;
