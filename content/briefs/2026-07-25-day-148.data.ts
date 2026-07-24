import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction stays escalating and the interdiction widened past the target set that started it. Yemen's Houthis struck the Huang Pu — a Panamanian-flagged, Chinese-owned and -operated tanker — with ballistic missiles in the Red Sea; CENTCOM said a fire was extinguished within thirty minutes and the vessel issued a distress call without requesting help (CENTCOM via Gulf News, The Standard). The strike broke the Houthis' own public exemption for Chinese hulls and pulled Beijing's lifeline into the shooting zone one day after the Saudi tankers Layla and Encelia were hit. Trump held to 'they need more of the same,' kept 'massive attack' on the record, and CENTCOM's strike series ran on (CNBC, GlobalSecurity). Per §3.5.3 the Oman corridor stays unaccepted.",
      risk7d:
        "Seven-day risk holds at extreme. The second front is now an evasion regime, not a reroute: a Greek tanker left the Red Sea with its transponder dark, Cosco signaled Chinese cargo to buy passage, and ISW counted at least seven vessels changing course (Bloomberg, ISW). A Chinese hull taking a hit is the tripwire the 'does China act beyond words' prior was built around — and Beijing answered with a call to 'remain calm,' not a move (Breitbart, China FM via AOL). Trump's Iran-responsibility doctrine still hands any American or allied death to a belligerent acting on Yemen's own ledger; the war option is being prepared, not merely brandished.",
      spillover:
        "Spillover stays critical even as the price paused. Brent slipped to $98.38, down about 2.3% and briefly near $97 intraday, after topping $100 and $102 the session before — but the weekly gain held near 14% and Goldman keeps a $120 fourth-quarter tail if disruption persists (Trading Economics, Invezz, TradingKey). The pullback is positioning, not de-risking: war-risk insurance and the dark-transit premium are the invisible edge, and the corridor Asian buyers including Taiwan use to escape Hormuz is the same water where a third hull just burned.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'high',
      source: 'CENTCOM via Gulf News / The Standard / SCMP / Newsweek',
      event:
        "Yemen's Houthis struck the Huang Pu — a Panamanian-flagged, Chinese-owned and -operated oil tanker — with ballistic missiles in the Red Sea; US Central Command said a fire broke out and was extinguished within thirty minutes and the vessel issued a distress call but did not request assistance. The strike came despite the Houthis' repeated public assurances that Chinese, Russian and Iranian vessels would be exempt from their Saudi-focused blockade.",
      summary:
        "One day after the Saudi hulls Layla and Encelia were hit, the interdiction jumped to the one category the Houthis had promised to spare. The second front is no longer Saudi-specific; the deterrent that let China treat the Red Sea as passable for its own flag-signaled cargo is gone.",
      impact:
        "This lands on Beijing — the external actor with the most leverage over Tehran and the least appetite to use it. A Chinese hull in the fire zone tests the 'does China act beyond words' prior directly and pulls China's Hormuz-and-Red-Sea energy lifeline into the same interdiction the Oman corridor cannot reach.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'Trading Economics / Invezz / TradingKey (Goldman) / Fortune',
      event:
        "Brent crude retreated to about $98.38 a barrel, down roughly 2.3% on the day and dipping near $97 intraday, after closing above $100 and briefly touching $102 the prior session on the first Saudi-tanker strikes; the benchmark still held a weekly gain near 14%, and Goldman Sachs reiterated that Brent could break $120 in the fourth quarter if the Red Sea and Hormuz disruption persists.",
      summary:
        "Per §3.5.5 the number is the argument, and today it is two-sided: the market took profit below $100 while keeping the fortnight's ~14% risk premium intact. A pullback after a hull-attack spike is positioning, not a verdict that the second front is contained.",
      impact:
        "The energy-infrastructure clock is loaded at both straits and the price is oscillating around $100 rather than falling away from it. The distance to the $150-200 dual-closure tail is still one sinking; a Chinese-hull hit that draws Beijing in is a second path toward it.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'medium',
      source: 'Bloomberg / ISW / S&P Global',
      event:
        "The Red Sea shifted from a reroute to an evasion regime: a Greek-operated tanker exited the strait with its transponder switched off, China's Cosco Shipping signaled that transiting vessels were carrying Chinese cargo and crew to claim exemption, and the Institute for the Study of War said at least seven vessels had changed course to avoid the Bab el-Mandeb Strait since the blockade was declared.",
      summary:
        "Going dark and flag-signaling are the behaviors of a shooting gallery, not a detour. Traffic that Day 146 measured as a 34% drop is now actively hiding, and the Cosco workaround stopped being reliable the moment the Huang Pu was hit.",
      impact:
        "An evasion regime raises the cost of every barrel that still moves — insurance, longer Cape hauls, slower turns — without appearing in the loadings figure, and it strips out the transparency the market and CENTCOM rely on to price and police the strait.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: 'China FM via AOL / Breitbart / SCMP',
      event:
        "China's foreign ministry urged all parties to 'remain calm, exercise restraint, stop hostilities... and strive for a full and lasting ceasefire,' and its ambassador in Tehran offered supportive words to Iranian state media, even as Beijing said it was 'not exonerating Iran' — but China took no material step after one of its own tankers was hit.",
      summary:
        "Per §3.5.3 this is a stated position, not a lever pulled. The standing prior held China's role as commercial diplomacy, not resupply or UNSC action; a Chinese hull burning has so far produced a stronger statement, not a different category of action.",
      impact:
        "If the actor best placed to pressure Tehran answers a strike on its own vessel with a call for calm, the ceiling on external de-escalation pressure is lower than the mediation architecture implies. The China card stays rhetorical until a shipment, a sanction, or a Security Council move says otherwise.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'Axios / Al Jazeera / Wikipedia (Kuwait ledger)',
      event:
        "The Oman-brokered 'middle corridor' proposal stayed unaccepted as Trump signaled he was 'not ready' for a new ceasefire and repeated the war option; the nuclear file held bounded — the IAEA has had no access beyond Bushehr since early July and roughly 440.9 kg of 60% enriched uranium remains unverified — and Iranian fire again struck Kuwaiti power and desalination infrastructure.",
      summary:
        "Per §3.5.3 the corridor is process, not agreement: broker, author and multi-state carriage are in place, acceptance is not, and Washington still conditions any pause on a longer ceasefire and navigation guarantees. Tehran continues to downplay Bushehr damage rather than amplify it — the tell that the nuclear category is being preserved as leverage.",
      impact:
        "The negotiation-capacity clock is stalled while the active-deadline clock runs; the corridor addresses Hormuz shipping but neither the Red Sea interdiction nor the Iran-responsibility doctrine. Water remains a target class in a Gulf state roughly 90% dependent on desalination.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (100+ injured since early July, ~96% returned to duty)',
      delta: '+0 KIA / +0 WIA in the window; no new American fatality reported',
      status:
        "No new US fatality in the window; the toll holds at 17 KIA and 432 WIA per the AP/CENTCOM series. The three deaths that lifted the toll to 17 — one in northern Iraq and two at Muwaffaq Salti in Jordan — remain the most recent, and the Jordan MIA stays accounted for within the identified dead per Day 144. Divergent CENTCOM injury tallies (290–413 WIA in some counts) reflect different reporting windows per §3.5.3; the 432 figure carries. Trump's pledge to hold Iran responsible for Houthi attacks now attaches to a strike on a Chinese-owned hull as well as Saudi ones as CENTCOM's strike series runs on; the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved as forces mass and 'massive attack' stays on the record.",
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
        "No fresh official Iranian toll in the reporting window; authorities continue to cite 50+ killed and 500+ wounded in July strikes as CENTCOM's strike series ran on against maritime, missile, drone, coastal-surveillance and air-defense targets. HRANA's ten-day report documents at least 48 killed and 68 injured in the new wave as of July 17, flagged as minimum counts given continuing attacks and restricted access. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its standing understatement caveat; figures are Iranian-source or monitor-source per §3.5.3, and US and Israeli estimates run to 6,000+. Iran says Bushehr is operating normally against July 7/12 satellite impact scars; the IAEA has had no access beyond Bushehr since early July; ~440.9 kg of 60% HEU remains unverified.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 128+ KIA / 370 WIA; Gulf 33+ KIA / 74+ WIA, of which Kuwait 10 killed (4 soldiers, 6 civilians) / 115 injured (77 soldiers, 38 civilians)',
      delta: '+0 confirmed fatalities in the window; the Huang Pu strike produced no reported crew casualty',
      status:
        "No confirmed new Gulf or Iraqi fatalities in the window. The Huang Pu fire was extinguished within thirty minutes and no crew casualty was reported, so the second front stayed kinetic against hulls without becoming lethal for a second straight day — a crew death or a laden-tanker sinking remains the tell most likely to reprice oil and trigger Trump's pledge. Iranian fire again struck Kuwaiti power and desalination plants; Kuwait's cumulative ledger holds at 10 killed (4 soldiers, 6 civilians) and 115 injured (77 soldiers, 38 civilians), inside the 33+ Gulf-wide baseline. Lebanon toll stays source-split; Iraq baseline carries.",
    },
  },
  exec:
    "Day 148 widened the interdiction past the target set that started it. Yemen's Houthis struck the Huang Pu — a Panamanian-flagged, Chinese-owned and -operated tanker — with ballistic missiles in the Red Sea, one day after hitting the Saudi hulls Layla and Encelia; CENTCOM said a fire aboard was extinguished within thirty minutes and the ship issued a distress call without requesting help, and the strike broke the Houthis' own public exemption for Chinese vessels (CENTCOM via Gulf News, The Standard, SCMP). The market took profit after its spike: Brent slipped to about $98.38, down roughly 2.3% and briefly near $97, after closing above $100 and touching $102 the prior session — but the weekly gain held near 14% and Goldman kept a $120 fourth-quarter tail if disruption persists (Trading Economics, Invezz, TradingKey). The Red Sea has become an evasion regime — a Greek tanker exited with its transponder dark and ISW counted at least seven vessels rerouting (Bloomberg, ISW). China, whose hull was the one hit, answered with a call to 'remain calm' and a 'full and lasting ceasefire' rather than any material step (China FM via AOL, Breitbart). The diplomatic track held without advancing: the Oman 'middle corridor' stayed unaccepted, Trump said he was 'not ready' for a ceasefire and repeated the war option, and the nuclear file stayed bounded with the IAEA still absent beyond Bushehr (Axios, Al Jazeera). Per §3.5.3 the corridor is process, not agreement. The US toll holds at 17. Direction escalating; seven-day risk extreme; spillover critical; thirty-day ceasefire probability holds at 10.",
  implications: [
    {
      title: 'The interdiction jumped its own fence',
      body:
        "The Houthis spent the week promising to spare Chinese, Russian and Iranian hulls while they choked Saudi shipping; on Day 148 they struck the Chinese-owned Huang Pu anyway (CENTCOM via Gulf News, SCMP). Under the multi-clock framework the energy-infrastructure clock is loaded at both straits and the second one is now firing on the actor best placed to end the war. Analytical judgment: a self-declared exemption that fails on its second day tells the market the blockade has no reliable safe list, which is why the evasion regime — transponders off, Cosco flag-signaling, at least seven vessels rerouting — appeared the same day (Bloomberg, ISW). Per §3.5.5 the delta is the point: Bab el-Mandeb traffic that fell 34% on Day 146 is now actively hiding, and the transparency CENTCOM and underwriters need to price the strait is going dark with it. The tell has not changed — a crew death or a laden-tanker sinking is the single event most likely to carry oil toward the $150-200 dual-closure tail — but the pool of vessels that could supply that event just widened from Saudi tankers to anything the Houthis decide is fair game. The corridor the Oman proposal would reopen is Hormuz; it does not touch the water where the Huang Pu burned.",
    },
    {
      title: "China's hull, China's silence",
      body:
        "The strike landed on the one external actor with real leverage over Tehran, and Beijing's answer was a communiqué. China's foreign ministry urged all sides to 'remain calm' and strive for a 'full and lasting ceasefire,' its ambassador in Tehran offered supportive words, and it declined to exonerate Iran — but it took no material step after its own tanker was hit (China FM via AOL, Breitbart). Analytical judgment: per §3.5.6 the standing prior that China's role is commercial diplomacy, not resupply or UNSC action, just survived its hardest test. If a Chinese hull in the fire zone produces a stronger statement rather than a different category of action, the ceiling on external de-escalation pressure is lower than the mediation architecture implies — and the negotiation-capacity clock is more stalled than the parade of Qatari, Egyptian, Omani and Pakistani carriers suggests. This matters to the war's arithmetic because Washington's escalatory track has no counterweight if the actor with the most to lose from a two-strait war will not spend leverage to stop it. Trump, meanwhile, said he was 'not ready' for a ceasefire and kept 'massive attack' on the record; the active-deadline clock is running ahead of a negotiation clock no major power is winding forward.",
    },
    {
      title: 'Taiwan: the same water, now a third hull',
      body:
        "Taiwan's workaround for this war was to lift Gulf crude from Saudi Arabia's Red Sea ports and route around Hormuz — the exact corridor where a third tanker in two days was hit, and where Cosco is now flag-signaling to buy passage for Chinese cargo (CSIS, IFRI, Bloomberg). Analytical judgment: the Huang Pu strike does not change Taiwan's physical exposure this week — roughly a third of its gas transits Hormuz, Qatar supplies close to 30% of LNG imports, and the island holds an eleven-day gas buffer, reaching the statutory fourteen days only from 2027, against about 120 days of oil cover — but it shortens the time that exposure can stay theoretical. Brent oscillating around $100 is the visible edge; war-risk insurance and the dark-transit premium are the invisible one, and both compound in a summer where Taiwan's electricity demand runs up to 40% above February exactly when replacement cargoes are hardest to source. The sharper turn is that China, competing for the same crude and Qatari LNG, just had a hull hit on the same route — Taipei and Beijing are now exposed to the identical chokepoint by the identical belligerent, and neither's diplomacy reaches the Houthi ledger.",
    },
  ],
  casualtyNotes: {
    us:
      "Toll holds at 17 KIA / 432 WIA (AP/CENTCOM series); no new fatality in the window. The three most recent deaths (Iraq x1, Jordan x2) and the resolved Jordan MIA carry per Day 144. Divergent CENTCOM injury counts (290–413 WIA) reflect different windows per §3.5.3; 432 carries. Trump's pledge to hold Iran responsible for Houthi attacks now attaches to a strike on a Chinese-owned hull as well; the $67 billion supplemental and the 50-48 war-powers rebuke remain unresolved as forces mass.",
    israel:
      'No new Israeli casualties. Israel stays outside the US-Iran framework and unbound by any Hormuz pause; its readiness signal keeps a full-scale-campaign option live alongside Trump\'s "massive attack" language. June 26 Lebanon framework still rejected by Hezbollah; the Lebanon gap prior carries.',
    iran:
      "No fresh official toll as CENTCOM's strike series ran on. HRANA new-wave tally holds at 48+ killed / 68+ injured (minimum counts); cumulative HRANA 3,636+ with understatement caveat; Foundation of Martyrs ~3,468; US/Israeli est. 6,000+. Bushehr reported operating normally against July 7/12 satellite impact scars; IAEA absent beyond Bushehr since early July; ~440.9 kg of 60% HEU unverified.",
    other:
      'No confirmed new Gulf or Iraqi fatalities. The Huang Pu fire was out within thirty minutes and no crew casualty was reported — the second front stayed kinetic against hulls without becoming lethal for a second day. Iranian fire again hit Kuwaiti power and desalination plants; Kuwait cumulative 10 killed / 115 injured. Lebanon source-split; Iraq baseline carries.',
  },
};

export default data;
