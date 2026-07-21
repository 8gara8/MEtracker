import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds at mixed — two-way, not improving. The de-escalatory vector sharpened: Iran, per a Jerusalem Post exclusive, itself initiated the 10-day ceasefire proposal now carried by mediators, and Oman is the named broker, giving Day 144's vague 'proposals received' a venue in Muscat and a concrete architecture (Axios, Gulf News). Against it, the escalatory vectors also sharpened. Neither Trump nor Iran has accepted; both are improving leverage through continued strikes, and Trump is openly weighing a return to full-scale war. The Houthi embargo turned operational — two Saudi tankers U-turned toward Suez and Saudi loadings fell 36% — pulling Riyadh toward combat (The National, MarineTraffic).",
      risk7d:
        "Seven-day risk stays extreme because the proposal is unsigned and the shooting has not stopped. US strikes continued as Defense Secretary Hegseth testified, and Trump again called the June memorandum 'over' while weighing a full-scale campaign (CNN, Fox News, ms.now). Per §3.5.3 an unaccepted proposal is a claim, not a ceasefire; the last two frameworks were announced with more detail and still collapsed. The standing automatic-retaliation pledge carries — any further American death triggers pre-committed escalation held by third parties, including the Houthis, who are acting on Yemen's own grievance ledger rather than Tehran's timetable.",
      spillover:
        "Spillover stays critical and is widening from threat to fact. Two tankers carrying 2.7 million barrels of Saudi crude for China and India abandoned Bab el-Mandeb for the Suez Canal, and Saudi loadings through the strait dropped 36%, the first operational hit from the Houthi embargo even without a confirmed interdiction (The National, MarineTraffic, Bloomberg). The Saudi-led coalition said it would answer 'with force,' began protecting its ships and warned of Red Sea escalation, drawing the Gulf's largest producer toward direct combat (Al Jazeera, Washington Post). China and Pakistan jointly pressed for an immediate ceasefire as roughly half of China's crude crosses Hormuz.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'high',
      source: 'Jerusalem Post (exclusive) / Axios / Gulf News / IRNA via Al Jazeera',
      event:
        "A Jerusalem Post exclusive reported that Iran itself secretly submitted the proposal for a 10-day US-Iran ceasefire now being advanced by mediators, even as US strikes intensified; Axios reported the plan would reopen both Strait of Hormuz lanes — the southern route through Omani waters free of Iranian attack, the northern route through Iranian waters free of the US blockade — with the pause used to negotiate a longer-term passage arrangement, while Foreign Minister Araghchi held talks with Oman's foreign minister and prepared to travel to Muscat with a delegation",
      summary:
        "⭐ Day 144's unnamed 'mediator proposals' acquire a broker, a venue and a structure — and a provenance: Tehran initiated it. France and Britain are studying an Oman-drafted option to charge navigational fees in the strait under IMO auspices, which Washington and its Gulf partners reject as unilateral Iranian toll-setting.",
      impact:
        "The negotiation-capacity clock advances materially, and Iran's authorship signals real urgency under fire. But per §3.5.3 this is an unaccepted proposal, not a truce: neither side has said yes, both are improving leverage through strikes, and the fee mechanism revives the §3.5.6 toll-institutionalization risk — a wartime concession that becomes permanent revenue.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'The National / MarineTraffic / Al Jazeera / Washington Post / Bloomberg',
      event:
        "The Houthi maritime embargo on Saudi Arabia turned operational without an interdiction: MarineTraffic reported that two tankers carrying about 2.7 million barrels of Saudi crude bound for China and India abandoned their Bab el-Mandeb course and turned toward the Suez Canal — 'the first operational response to heightened security risks in the Red Sea' — while Saudi crude loadings through the strait dropped 36%; the Saudi-led coalition said it would respond to the Houthis 'with force,' began implementing protection measures for its ships and warned of Red Sea escalation",
      summary:
        "Day 144's open question — declaration or enforcement — resolves toward enforcement-by-deterrence. Roughly 4.1 billion barrels a year, about 5% of global oil trade, transits Bab el-Mandeb; disruption is already priced into Saudi flows even though no hull has been hit.",
      impact:
        "Riyadh is being pulled from funding the war to fighting it, the outcome Day 144 flagged. The Houthi capability sits outside any US-Iran deal, so the Oman-brokered Hormuz proposal, even if signed, would not reopen the second strait — the maritime file has detached from the negotiation Tehran controls.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'CBS News / CNN / KSAT-AP / Times of Israel',
      event:
        "Defense Secretary Pete Hegseth and Joint Chiefs Chairman Gen. Dan Caine testified before the Senate Appropriations Committee that the war with Iran has cost $37.5 billion so far — an estimate up from earlier accounts — and requested a $67 billion supplemental to sustain operations and replenish munitions, part of a broader $95 billion package; Hegseth's opening remarks were repeatedly interrupted by protesters, and he reconfirmed the US death toll at 17 with more than 100 injured since early July",
      summary:
        "The war acquired a public price tag on the same day a ceasefire proposal acquired a broker. The $67 billion ask lands against an unresolved 50-48 Senate war-powers rebuke and prior polling in which only 24% of Americans judged the war worth its cost.",
      impact:
        "The political-will clock now runs on a dollar figure, not just a casualty count. A supplemental this size forces a congressional vote that doubles as a referendum on continuing the campaign — leverage for the diplomatic track if the money meets resistance.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'CNN / Fox News / ms.now / RFE-RL',
      event:
        "US forces continued striking Iran as Hegseth testified, extending a campaign that has run nightly since mid-July against command centers, air defenses, coastal surveillance and missile and drone sites; President Trump again declared the June memorandum of understanding 'over' while saying talks would continue, and multiple outlets reported he is weighing a return to a full-scale military campaign, with the US insisting Iran 'does not control' the Strait of Hormuz",
      summary:
        "The strike tempo did not pause for the diplomacy. Per §3.5.3 the two tracks are running simultaneously by design — both Washington and Tehran are improving their leverage on the ground before committing to any pause.",
      impact:
        "An open-ended campaign with Trump publicly weighing escalation keeps the active-deadline clock ahead of the negotiation clock. A rationale still tied to Hormuz shipping remains satisfiable by the Oman proposal; a pivot to 'full-scale' would not be, and would foreclose the pause Iran is seeking.",
    },
    {
      id: 5,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Athens-Times / Trading Economics / CNBC / Bloomberg',
      event:
        "Brent crude held near $90 a barrel on Tuesday, easing slightly after recovering earlier losses, as traders balanced the 10-day ceasefire proposal against the widening Red Sea disruption; the benchmark had climbed toward the high-$80s during the week — its strongest since mid-June — on the tanker reroutes and the 36% drop in Saudi Bab el-Mandeb loadings, before the diplomatic signal capped further gains",
      summary:
        "Per §3.5.5 the number tells the story: Brent near $90 recovered the ground the market gave up on Day 144's mediation dip toward $82, as a second contested chokepoint and continued strikes outweighed the still-unsigned truce.",
      impact:
        "The market is pricing one contested chokepoint plus a partial threat to a second — not the dual-closure tail near $150-200 that a Bab el-Mandeb shutdown paired with a Hormuz freeze would imply. Either the reroute is seen as manageable via Suez, or traders read the Oman track as more advanced than either government admits.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'medium',
      source: 'Al Jazeera / National Security Journal / ISIS / CNN Business',
      event:
        "Iran maintained that the Bushehr nuclear power plant, its only operating civilian reactor, is running normally, while Sentinel-2 satellite imagery captured on July 7 and 12 and analyzed independently showed fresh impact scars inside the complex and a nearby support facility; the IAEA has had no access since June, and separately China — with roughly half its crude crossing Hormuz — joined Pakistan in pressing for an immediate ceasefire",
      summary:
        "The nuclear file stays bounded but open: no confirmed strike on the operating reactor itself, Tehran downplaying rather than amplifying, but verifiable damage inside the complex and no inspector access. The Darkhovin construction-site precedent has not extended to live facilities.",
      impact:
        "Iran managing panic rather than manufacturing a radiological grievance remains the tell that the nuclear category is still being preserved as leverage, not spent. China's diplomatic push — self-interested given its Hormuz exposure — is still words, not the air-defense resupply or UNSC action that would change the military balance.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (100+ injured since early July, ~96% returned to duty)',
      delta: '+0 KIA / +0 WIA in the window; Hegseth reconfirmed the 17 toll in Senate testimony',
      status:
        "Defense Secretary Hegseth told the Senate Appropriations Committee on Tuesday that the war has cost $37.5 billion so far and requested a $67 billion supplemental to sustain operations and replenish munitions, reconfirming the death toll at 17 and more than 100 injured since early July with roughly 96% returned to duty (CBS News, CNN, KSAT/AP). No new American fatality was reported in the window. The three deaths that lifted the toll to 17 — one in northern Iraq and two at Muwaffaq Salti in Jordan — remain the most recent, and the Jordan MIA stays accounted for within the identified dead per Day 144. Trump's standing pledge to make Iran 'pay many times over' for any further US death still attaches to this ledger, and the 50-48 Senate war-powers rebuke is unresolved.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (Israel not a direct party to the US-Iran exchange)',
      status:
        "No new Israeli casualties in the window. The Lebanon track stays live but unresolved: Lebanese President Joseph Aoun visited the White House while Israeli officials repeated that they will not fully withdraw from southern Lebanon until Hezbollah is disarmed, and the June 26 US-brokered framework remains rejected by Hezbollah (Times of Israel). The Lebanon gap prior (§3.5.6) carries: Israel remains outside the US-Iran framework and has shown no intent to subordinate its operations to it, so the Oman-brokered Hormuz proposal reaching Tehran does not bind the Israeli front. Frequent cross-border fire continues with no ceasefire in sight.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta: '+0 official update in the window; HRANA new-wave tally holds at 48+ killed / 68+ injured as of July 17',
      status:
        "No fresh official Iranian toll in the reporting window; authorities continue to cite 50+ killed and 500+ wounded in July strikes. HRANA's ten-day report documents at least 48 killed and 68 injured in the new wave as of July 17, flagged as minimum counts given continuing attacks and restricted access. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its standing caveat that military counts are understated. Figures are Iranian-source or monitor-source per §3.5.3; US and Israeli estimates run to 6,000+. On the nuclear file, Iran says the Bushehr reactor is operating normally while Sentinel-2 imagery from July 7 and 12 shows fresh impact scars inside the complex; the IAEA has had no access since June, and ~440.9 kg of 60% HEU remains unverified.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 128+ KIA / 370 WIA; Gulf 33+ KIA / 74+ WIA, of which Kuwait 10 killed (4 soldiers, 6 civilians) / 115 injured (77 soldiers, 38 civilians)',
      delta: '+0 confirmed fatalities in the window; second-chokepoint effect is maritime, not lethal — two Saudi tankers rerouted, no hull interdicted',
      status:
        "No confirmed new Gulf or Iraqi fatalities in the window. Kuwait's cumulative ledger from Iranian strikes holds at 10 killed (4 soldiers, 6 civilians) and 115 injured (77 soldiers, 38 civilians), inside the 33+ Gulf-wide baseline, with continued interception of drone and missile waves aimed at power and desalination plants. The new front is economic and maritime rather than lethal so far: two Saudi tankers carrying 2.7 million barrels U-turned from Bab el-Mandeb toward Suez and Saudi loadings fell 36%, but no Saudi-linked hull has been interdicted and no Saudi casualty reported (The National, MarineTraffic). Lebanon toll stays source-split; Iraq baseline carries.",
    },
  },
  exec:
    "Day 145 sharpened the war's central contradiction rather than resolving it: a real ceasefire architecture and an intensifying fight advancing in parallel. A Jerusalem Post exclusive reported that Iran itself secretly initiated the 10-day US-Iran ceasefire proposal now carried by mediators, with Oman the named broker — giving Day 144's vague 'proposals received' a venue in Muscat, a provenance in Tehran, and a concrete shape: reopen both Strait of Hormuz lanes, the southern route through Omani waters free of Iranian attack and the northern through Iranian waters free of the US blockade, then negotiate a longer-term passage regime during the pause (Axios, Gulf News). Foreign Minister Araghchi held talks with Oman's foreign minister and prepared to travel to Muscat; France and Britain began studying an Oman-drafted option to charge navigational fees in the strait under IMO auspices, which Washington rejects as unilateral toll-setting. But neither Trump nor Iran has accepted, both are improving leverage through continued strikes, and Trump is openly weighing a return to full-scale war (Jerusalem Post, Fox News). The second chokepoint went operational: two tankers carrying 2.7 million barrels of Saudi crude for China and India U-turned from Bab el-Mandeb toward Suez and Saudi loadings fell 36%, the first concrete effect of the Houthi embargo even without an interdiction, as the Saudi-led coalition pledged to respond 'with force' (The National, MarineTraffic). Hegseth told the Senate the war has cost $37.5 billion and asked $67 billion more; the US toll stands at 17. Brent held near $90. Direction mixed; thirty-day ceasefire probability edges to 10.",
  implications: [
    {
      title: "Tehran's name is on the proposal",
      body:
        "For the first time this series, the ceasefire on the table has a return address. A Jerusalem Post exclusive reported that Iran itself submitted the 10-day proposal now advanced by mediators, and Oman is the named broker — Foreign Minister Araghchi met Oman's foreign minister and is traveling to Muscat, the same channel that hosted the July 11 US-Iran-Qatar contact (Axios, Gulf News). The architecture is specific: reopen both Hormuz lanes, the southern through Omani waters free of Iranian attack and the northern through Iranian waters free of the US blockade, with a longer-term passage regime negotiated during the pause. Under the multi-clock framework the negotiation-capacity clock has advanced further in a day than in the three weeks since the memorandum broke. Analytical judgment: Iran's authorship is the signal — a regime absorbing weeks of strikes and $37.5 billion of American ordnance does not initiate a ceasefire from strength. But §3.5.3 governs. Neither Trump nor Iran has accepted; both are visibly improving leverage through strikes before committing, and Trump is weighing a full-scale campaign in the same news cycle. The France-and-Britain-studied option to charge navigational fees under IMO auspices revives the §3.5.6 toll-institutionalization prior directly: a fee conceded under fire, worth roughly $29 billion a year on pre-war flow, becomes permanent Iranian revenue. Watch whether Muscat produces a signed pause or another announced-then-collapsed framework.",
    },
    {
      title: 'The second chokepoint stops being hypothetical',
      body:
        "Day 144 declared the Bab el-Mandeb embargo; Day 145 showed it working without a shot fired. MarineTraffic logged two tankers carrying 2.7 million barrels of Saudi crude for China and India abandoning the strait for the Suez Canal — 'the first operational response to heightened security risks in the Red Sea' — and Saudi loadings through the passage dropped 36% (The National, Bloomberg). No Saudi-linked hull has been interdicted; the disruption is pure deterrence, which is cheaper for the Houthis and harder to disarm. Riyadh answered as a combatant rather than a financier: the Saudi-led coalition said it would respond 'with force,' began protecting its ships and warned of Red Sea escalation (Al Jazeera, Washington Post). That is the Day 144 watch item resolving toward escalation — the Gulf's largest producer is now operationally engaged against an Iran-aligned belligerent acting on Yemen's own ledger, which no US-Iran instrument reaches. The energy-infrastructure clock is loaded at both straits at once. Compounding it, the political-will clock: Hegseth told the Senate Appropriations Committee the war has cost $37.5 billion and requested a $67 billion supplemental, testimony interrupted by protesters, against an unresolved 50-48 war-powers rebuke and prior polling in which only 24% of Americans called the war worth the cost (CBS News, CNN). Analytical judgment: a widening war and a rising bill are pushing the diplomatic clock and the domestic clock toward the same deadline.",
    },
    {
      title: 'Taiwan: the detour is now the disruption',
      body:
        "Taiwan's adaptation to this war was to route around Hormuz through the Red Sea; Day 145 put ordnance on that detour. The two Saudi tankers that turned back did not vanish — they rerouted to the Suez Canal, the same corridor Taiwanese cargoes use to escape the Gulf, and every such voyage now carries a Red Sea war-risk premium or the longer haul around the Cape (CSIS, Atlantic Council). A Bab el-Mandeb closure does not touch Qatari LNG, which still exits through Hormuz, but it lengthens and prices everything routed around the first chokepoint. The §3.5.6 exposure is otherwise unchanged and badly timed: roughly a third of Taiwan's gas transits Hormuz, Qatar supplies close to 30% of LNG imports, and the island holds an eleven-day gas buffer — reaching the statutory fourteen days only from 2027 — against about 120 days of oil cover. July and August are the binding constraint, with electricity demand running up to 40% above February exactly when replacement cargoes are hardest to source. Brent near $90 buys nothing on physical delivery, and the hedges remain slow: gas secured through September, first Cheniere cargoes due next month at about 10% of imports, a 25% US-LNG target only by 2029. The China variable sharpens the risk — with roughly half its crude crossing Hormuz, Beijing's joint ceasefire call with Pakistan is self-interested, and the two tankers that turned back were China-bound. A second contested chokepoint does not change Taiwan's arithmetic this week; it shortens the time the arithmetic can stay unchanged.",
    },
  ],
  casualtyNotes: {
    us:
      "Hegseth reconfirmed 17 US dead and 100+ injured since early July (~96% returned to duty) in Senate testimony pegging the war's cost at $37.5 billion and requesting $67 billion more. No new fatality in the window; the three most recent deaths (Iraq x1, Jordan x2) and the resolved Jordan MIA carry per Day 144.",
    israel:
      'No new Israeli casualties. President Aoun visited the White House; Israel maintains it will not fully withdraw from Lebanon until Hezbollah disarms. June 26 framework still rejected by Hezbollah; the Lebanon gap prior carries.',
    iran:
      "No fresh official toll. HRANA new-wave tally holds at 48+ killed / 68+ injured (minimum counts); cumulative HRANA 3,636+ with understatement caveat; Foundation of Martyrs ~3,468; US/Israeli est. 6,000+. Bushehr reactor reported operating normally against July 7/12 satellite impact scars; IAEA absent since June.",
    other:
      'No confirmed new Gulf or Iraqi fatalities. Kuwait cumulative 10 killed / 115 injured. Second-chokepoint effect is maritime: two Saudi tankers rerouted to Suez, Saudi loadings down 36%, no hull interdicted. Lebanon source-split; Iraq baseline carries.',
  },
};

export default data;
