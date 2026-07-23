import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction stays escalating and sharpens: the line the market and the mediators watched all week was crossed. Yemen's Houthis struck two Saudi oil tankers — the Layla and the Encelia — with drones and missiles in the Red Sea, their first attack on vessels since declaring the blockade, setting the Encelia ablaze with all crew reported safe (US News, Washington Times, CNBC). The price answered at once: Brent surged to $100.69, up roughly 7% and briefly touching $102, its highest in eight weeks. Washington's reply tilted escalatory — Trump said the US will hold Iran responsible for future Houthi attacks and is weighing a 'massive attack,' and CENTCOM completed its twelfth consecutive night of strikes (CNBC, Euronews). Per §3.5.3 the Oman-brokered proposal remains unaccepted.",
      risk7d:
        "Seven-day risk holds at extreme. The embargo has moved from reroute to interdiction: a Saudi hull was hit for the first time, and the four-year Saudi-Houthi truce that frayed on Day 146 is now openly at war at sea. Trump's move to attribute the Houthi strike to Tehran is the mechanism by which a 'massive attack' gets justified, and the twelfth-night strike tempo shows the war option is being prepared, not merely brandished (Euronews, CENTCOM via US News). The standing automatic-retaliation pledge carries — any American death now hands pre-committed escalation to a third party acting on Yemen's own ledger.",
      spillover:
        "Spillover stays critical and has turned kinetic. Brent at $100 — a near-20% gain since the re-escalation began two weeks ago, the fifth straight up session, with Goldman flagging $120 by Q4 — prices a Red Sea that is now a live shooting gallery, not a discounted detour (Trading Economics, The National, NBC News). The Gulf's largest producer is being pulled fully from funding the war to fighting it, and the corridor Asian buyers including Taiwan use to escape Hormuz is the same water where the tankers burned.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'US News / Washington Times / Washington Post / CNBC',
      event:
        "Yemen's Iran-backed Houthis struck two Saudi oil tankers — the Layla and the Encelia — with missiles and drones in the Red Sea early Thursday, their first reported attack on vessels since declaring a blockade of Saudi-linked shipping through Bab el-Mandeb; a fire broke out aboard the Encelia and all crew were reported safe, with the Houthis saying the ships had 'violated the blockade'",
      summary:
        "The standing 'reroute to interdiction' watch resolved: for the first time a Saudi hull was hit, breaking the interdiction-by-deterrence that had held even as traffic and loadings collapsed. No crew casualty was reported, but the deterrent that kept the embargo economic rather than kinetic is gone.",
      impact:
        "The Houthi capability sits on Yemen's own ledger, outside any US-Iran instrument, so the Oman-brokered Hormuz proposal cannot reopen this strait even if signed. A laden-tanker sinking or crew death is now the single event most likely to reprice oil toward the dual-closure tail.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Trading Economics / The National / NBC News / OilPrice',
      event:
        "Brent crude surged to $100.69 a barrel, up about 7% on the day and briefly touching $102 intraday — its highest in eight weeks, since the end of May — after the tanker attacks; the move was the fifth consecutive up session, leaving prices nearly 20% above their pre-re-escalation level two weeks ago, and Goldman Sachs said Brent could rally above $120 by the fourth quarter if the disruption persists",
      summary:
        "Per §3.5.5 the number is the argument: a benchmark that held $90 through the entire Hormuz campaign, then broke to $94 on Day 146, crossed $100 in a single session once a hull actually burned. The market has stopped pricing the second front as containable.",
      impact:
        "The energy-infrastructure clock is now loaded at both straits with live fire at one of them. $100 is still short of the $150-200 dual-closure tail — a Bab el-Mandeb shutdown paired with a full Hormuz freeze — but the distance to it is now one sinking, not one headline.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'CNBC / Euronews / US News (CENTCOM)',
      event:
        "President Trump said the United States will hold Iran responsible for future Houthi attacks after the Red Sea tanker strikes and said he is considering a 'massive attack' against Iran; US Central Command announced it had completed its twelfth consecutive night of strikes, hitting Iranian maritime capabilities, missile and drone storage, coastal surveillance sites and air-defense assets",
      summary:
        "Attributing a Yemeni-ledger strike to Tehran is the bridge from a shipping-tied rationale to a war-of-choice rationale. Forces are massed, the strike tempo is unbroken at twelve nights, and 'massive attack' is now on the record — the war option is being actively prepared.",
      impact:
        "The active-deadline clock runs ahead of the negotiation-capacity clock. The Oman proposal can satisfy a Hormuz-shipping grievance; it cannot satisfy a doctrine that makes Iran answerable for every Houthi missile, which is the rationale that would convert a chokepoint dispute into regime-survival war.",
    },
    {
      id: 4,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Jerusalem Post / Axios / Press TV',
      event:
        "The Oman-brokered ceasefire track gained detail: the Iran-authored proposal now specifies a 'middle corridor' through the Strait of Hormuz between Omani- and Iranian-controlled waters through which commercial vessels could transit safely, reopening both lanes — the southern Omani route free of Iranian attack and the northern Iranian route free of the US blockade — with senior Qatari, Egyptian, Omani and Pakistani officials presenting it to Washington",
      summary:
        "Per §3.5.3 a more detailed blueprint is still process, not agreement. The US is demanding a longer ceasefire and at least partial freedom-of-navigation understandings before any pause takes effect; neither Trump nor Iran has accepted, and both are striking to improve leverage first.",
      impact:
        "The diplomatic architecture is the most concrete it has been — broker, venue, author, multi-state carriage and now a mapped corridor — yet acceptance is absent and the tanker attack sits outside its scope. The gap between 'talks continue' and 'ships move safely' is the same gap that collapsed the April 8 and June frameworks.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'National Security Journal / ISIS / Reuters (via AOL)',
      event:
        "The nuclear file stayed bounded — Iran maintains the Bushehr reactor is operating normally against July 7 and 12 satellite impact scars, the IAEA has had no access since June, and ~440.9 kg of 60% enriched uranium remains unverified since mid-2025 — while China, with roughly half its crude crossing Hormuz and cargoes also threatened in the Red Sea, continued talks with Iran to secure safe passage for its crude and Qatari LNG",
      summary:
        "Tehran downplaying rather than amplifying the Bushehr damage remains the tell that the nuclear category is being preserved as leverage, not spent. Beijing's track is self-interested: the two chokepoints it is negotiating around now both carry live risk to its energy lifeline.",
      impact:
        "The nuclear target set has not extended to operating facilities and Beijing's move is still commercial diplomacy, not the air-defense resupply or UNSC action that would shift the military balance. Both files are bounded today — but the Red Sea interdiction narrows the room in which either stays bounded.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (100+ injured since early July, ~96% returned to duty)',
      delta: '+0 KIA / +0 WIA in the window; no new American fatality reported',
      status:
        "No new US fatality was reported in the window; the toll holds at 17 KIA and 432 WIA per the AP/CENTCOM series, with more than 100 injured since early July and roughly 96% returned to duty. The three deaths that lifted the toll to 17 — one in northern Iraq and two at Muwaffaq Salti in Jordan — remain the most recent, and the Jordan MIA stays accounted for within the identified dead per Day 144. Divergent CENTCOM injury tallies (290–413 WIA in some counts) reflect different reporting windows per §3.5.3; the 432 figure carries. Trump's pledge to hold Iran responsible for Houthi attacks and to weigh a 'massive attack' now attaches directly to this ledger as CENTCOM runs a twelfth consecutive night of strikes; the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved as forces mass.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (Israel not a direct party to the US-Iran exchange)',
      status:
        "No new Israeli casualties in the window. Israel remains outside the direct US-Iran exchange and unbound by any Hormuz pause; its leaders' standing signal of readiness to strike Iran again keeps a full-scale-campaign option live alongside Trump's 'massive attack' language. The Lebanon gap prior (§3.5.6) carries: Israel maintains it will not fully withdraw from southern Lebanon until Hezbollah disarms, and the June 26 US-brokered framework remains rejected by Hezbollah, with frequent cross-border fire and no ceasefire in sight.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta: '+0 official update in the window; HRANA new-wave tally holds at 48+ killed / 68+ injured as of July 17',
      status:
        "No fresh official Iranian toll in the reporting window; authorities continue to cite 50+ killed and 500+ wounded in July strikes as CENTCOM ran its twelfth consecutive night, hitting maritime, missile, drone, coastal-surveillance and air-defense targets. HRANA's ten-day report documents at least 48 killed and 68 injured in the new wave as of July 17, flagged as minimum counts given continuing attacks and restricted access. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its standing understatement caveat; figures are Iranian-source or monitor-source per §3.5.3, and US and Israeli estimates run to 6,000+. Iran says Bushehr is operating normally against July 7/12 satellite impact scars; the IAEA has had no access since June; ~440.9 kg of 60% HEU remains unverified.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 128+ KIA / 370 WIA; Gulf 33+ KIA / 74+ WIA, of which Kuwait 10 killed (4 soldiers, 6 civilians) / 115 injured (77 soldiers, 38 civilians)',
      delta: '+0 confirmed fatalities in the window; the tanker interdiction produced no reported crew casualty',
      status:
        "No confirmed new Gulf or Iraqi fatalities in the window. The Red Sea strike on the Layla and the Encelia set the Encelia ablaze but all crew were reported safe, so the second front became kinetic against hulls without yet becoming lethal — the tell to watch, since a crew death or a laden-tanker sinking is the event most likely to reprice oil and trigger Trump's pledge. Kuwait's cumulative ledger holds at 10 killed (4 soldiers, 6 civilians) and 115 injured (77 soldiers, 38 civilians), inside the 33+ Gulf-wide baseline, with continued interception of drone and missile waves against power and desalination plants. Lebanon toll stays source-split; Iraq baseline carries.",
    },
  },
  exec:
    "Day 147 crossed the line the market and the mediators had watched for all week: the Houthi embargo moved from reroute to interdiction. Yemen's Houthis struck two Saudi oil tankers — the Layla and the Encelia — with drones and missiles in the Red Sea, their first attack on vessels since declaring the blockade, setting the Encelia ablaze with all crew reported safe (US News, Washington Times, CNBC). The price answered instantly: Brent surged to $100.69 a barrel, up roughly 7% and briefly touching $102 intraday, its highest in eight weeks and a near-20% gain since the re-escalation began two weeks ago, with Goldman Sachs flagging $120 by the fourth quarter if disruption persists (Trading Economics, The National, NBC News). Washington's response tilted escalatory: Trump said the US will hold Iran responsible for future Houthi attacks and is weighing a 'massive attack,' while CENTCOM completed its twelfth consecutive night of strikes on Iranian maritime, missile, drone and air-defense targets (CNBC, Euronews). The diplomatic track deepened without advancing: the Oman-brokered proposal now specifies a 'middle corridor' through Hormuz between Omani and Iranian waters, carried to Washington by Qatari, Egyptian, Omani and Pakistani officials, but the US wants a longer ceasefire and navigation guarantees first, and neither Trump nor Iran has accepted (Jerusalem Post, Axios). Per §3.5.3 it remains an unaccepted claim; both sides strike to build leverage. The US toll holds at 17. Direction escalating; seven-day risk extreme; spillover critical; thirty-day ceasefire probability holds at 10.",
  implications: [
    {
      title: 'The interdiction line is crossed',
      body:
        "For a week the standing question was whether the Houthi embargo would move from reroute to interdiction. Day 147 answered it: the Layla and the Encelia were struck with drones and missiles, the Encelia caught fire, and the deterrence that had held even as Bab el-Mandeb traffic fell a third and Saudi loadings dropped to 6.1 million barrels a day is gone (US News, Washington Times, CNBC). Under the multi-clock framework the energy-infrastructure clock is now loaded at both straits with live fire at one of them, and Brent's jump to $100.69 — up 7% in a session, briefly $102 — is the market pricing that shift rather than discounting it (Trading Economics, NBC News). Analytical judgment: $100 is still short of the $150-200 dual-closure tail, which needs a Bab el-Mandeb shutdown paired with a full Hormuz freeze, but the interdiction removes the last reason to treat the second front as economic-only. Per §3.5.5 the number is the argument — a benchmark that absorbed the entire Hormuz campaign under $90 crossed $100 the day a hull actually burned. The tell now is a crew death or a laden-tanker sinking; either would carry oil toward the tail and hand escalation to a belligerent no US-Iran deal reaches.",
    },
    {
      title: "Trump's attribution move meets the diplomatic fork",
      body:
        "The escalatory and de-escalatory tracks both advanced on the same day, and the escalatory one moved further. Trump said the US will hold Iran responsible for future Houthi attacks and is weighing a 'massive attack,' while CENTCOM logged a twelfth consecutive night of strikes (CNBC, Euronews). Attributing a strike armed on Yemen's own ledger to Tehran is the bridge from a shipping-tied rationale — which the Oman proposal can satisfy — to a war-of-choice rationale it cannot. Against that, the diplomatic architecture is the most concrete it has been: the Iran-authored plan now maps a 'middle corridor' through Hormuz between Omani and Iranian waters, reopening both lanes, carried to Washington by Qatari, Egyptian, Omani and Pakistani officials (Jerusalem Post, Axios). Analytical judgment: per §3.5.3 a mapped corridor is still process, not agreement — the US wants a longer ceasefire and navigation guarantees first, neither side has accepted, and the tanker attack sits outside the proposal's scope. The active-deadline clock is running ahead of the negotiation-capacity clock; forces massing and 'massive attack' on the record are the louder signals, and the $67 billion supplemental now buys a two-strait war against 24% 'worth it' polling and an unresolved 50-48 rebuke.",
    },
    {
      title: 'Taiwan: the detour is now the front line',
      body:
        "Taiwan's adaptation to this war was to route around Hormuz and lift crude from Saudi Arabia's Red Sea ports — the precise corridor where the Layla and the Encelia were hit (CSIS, IFRI, OilPrice). Every Gulf-origin cargo that escapes the first chokepoint now transits a Bab el-Mandeb that is a live shooting gallery, or takes the longer, costlier haul around the Cape, and Brent at $100 is the visible edge while charter and war-risk insurance are the invisible one. The §3.5.6 exposure is otherwise unchanged and badly timed: roughly a third of Taiwan's gas transits Hormuz, Qatar supplies close to 30% of LNG imports, and the island holds an eleven-day gas buffer — reaching the statutory fourteen days only from 2027 — against about 120 days of oil cover, with summer electricity demand running up to 40% above February exactly when replacement cargoes are hardest to source. Analytical judgment: an interdiction in the Red Sea does not touch Qatari LNG, which still exits through Hormuz, but it prices and lengthens everything Taiwan rerouted, and China is negotiating for the same crude and Qatari LNG through the same waters. A hull burning on the detour route does not change Taiwan's arithmetic this week; it shortens the time the arithmetic can stay unchanged.",
    },
  ],
  casualtyNotes: {
    us:
      "Toll holds at 17 KIA / 432 WIA (AP/CENTCOM series); no new fatality in the window. The three most recent deaths (Iraq x1, Jordan x2) and the resolved Jordan MIA carry per Day 144. Divergent CENTCOM injury counts (290–413 WIA) reflect different windows per §3.5.3; 432 carries. Trump's pledge to hold Iran responsible for Houthi attacks and to weigh a 'massive attack' now attaches directly as CENTCOM runs a twelfth consecutive strike night; the $67 billion supplemental and the 50-48 war-powers rebuke remain unresolved.",
    israel:
      'No new Israeli casualties. Israel stays outside the US-Iran framework and unbound by any Hormuz pause; its readiness signal keeps a full-scale-campaign option live alongside Trump\'s "massive attack" language. June 26 Lebanon framework still rejected by Hezbollah; the Lebanon gap prior carries.',
    iran:
      "No fresh official toll as CENTCOM ran a twelfth consecutive strike night. HRANA new-wave tally holds at 48+ killed / 68+ injured (minimum counts); cumulative HRANA 3,636+ with understatement caveat; Foundation of Martyrs ~3,468; US/Israeli est. 6,000+. Bushehr reported operating normally against July 7/12 satellite impact scars; IAEA absent since June; ~440.9 kg of 60% HEU unverified.",
    other:
      'No confirmed new Gulf or Iraqi fatalities. The Layla/Encelia strike set the Encelia ablaze but crew were reported safe — the second front turned kinetic against hulls without becoming lethal. Kuwait cumulative 10 killed / 115 injured. Lebanon source-split; Iraq baseline carries.',
  },
};

export default data;
