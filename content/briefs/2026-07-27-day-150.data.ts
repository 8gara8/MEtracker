import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds at mixed for a second day as the two clocks keep diverging. The US-Iran strike pause ran into a second day — no new US strikes for the first time in roughly two weeks, a Defense Department official calling operations 'on a hold' — while an Omani delegation worked a Hormuz-reopening formula in Tehran and the US-UK London maritime-security conference firmed (CNN, CBS, Axios). Against that, Saudi Arabia halted crude exports through Bab el-Mandeb after Houthi strikes on the Encelia and Layla, the first time a Gulf state pulled its own tonnage off the water in this war (TWZ, CNBC). Per §3.5.3 an unsigned pause that rests on Trump being 'not ready' is not de-escalation; the MoU was repudiated, suspended and called 'over.' The bilateral thaw and the maritime escalation are the same day's news.",
      risk7d:
        "Seven-day risk holds critical. The bilateral pause caps the near-term strike risk, but the maritime front escalated: a state oil exporter suspended a route, Bab el-Mandeb traffic is down about a third, and Trump is reported to be weighing full-scale strikes if shipping attacks continue (CNBC, Scripps News). Trump's standing 'bridge or power plant per ship' rule converts any new Hormuz strike into a pre-committed infrastructure exchange, and the pause can reverse within a news cycle. The collapse pattern of the past three weeks is the base rate; nothing signed changes it.",
      spillover:
        "Spillover holds critical. Brent repriced toward the low-$90s at Monday's open, off roughly 7% from Friday's ~$98 close, so part of the premium was bilateral-fear — but the Saudi export halt is a supply fact, not sentiment, and it keeps a structural premium and the war-risk-insurance bid embedded regardless of the pause (Trading Economics, OilPrice). Goldman's $120 fourth-quarter tail is intact and the $150-200 dual-closure tail is still one sinking away. The Red Sea corridor Asian buyers including Taiwan use to escape Hormuz is the same water Saudi and Houthi forces are contesting.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'high',
      source: 'CNN / CBS News / Axios',
      event:
        "The US-Iran strike pause held into a second day: the US military announced no new strikes on Iran for the first time in roughly two weeks, and a Defense Department official told CNN operations were 'on a hold.' An Omani delegation continued working in Tehran on a mechanism to reopen the Strait of Hormuz, following an Araghchi-Albusaidi call on maritime navigation, and the US and UK firmed plans for a London conference — expected to draw Defense Secretary Pete Hegseth and Joint Chiefs Chairman Gen. Dan Caine — to stand up a coalition deploying warships, minesweepers and drones.",
      summary:
        "The de-escalatory cluster survived a second news cycle and gained institutional form — a physical delegation in Tehran and a firming multilateral venue. Per §3.5.3 it is still process: a pause Trump can revoke, a formula not signed, a conference not yet convened.",
      impact:
        "A pause that holds two days with an Omani channel in the room and a Western coalition assembling is more durable structure than any prior de-escalatory moment. But the negotiation architecture stops at Hormuz; neither track reaches Bab el-Mandeb, where the day's escalation actually happened.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'TWZ / CNBC / Al Jazeera / Reuters',
      event:
        "Saudi Arabia temporarily halted crude-oil shipments through the Bab el-Mandeb strait after Houthi drone-and-missile attacks on two of its tankers, the Encelia and Layla, which the group said violated its declared maritime embargo. Bab el-Mandeb traffic had already dropped roughly 34% to about 29 vessels on July 21 as at least seven ships rerouted, and the Houthi evasion regime — dark transponders, ship-by-ship COSCO clearances — persisted.",
      summary:
        "Per §3.5.5 the delta is the point: for the first time a state, not the Houthis, pulled its own tonnage off the water. A producer suspending a route by prudence is a harder supply fact than a threat, and it escalates the maritime front without Tehran choosing to.",
      impact:
        "The energy-infrastructure clock takes its hardest hit in weeks even as the bilateral clock eases. A Gulf exporter halting Red Sea flows moves real barrels, not just risk premium, and it hands the Houthis a demonstrated ability to close a route the negotiators in Tehran and London cannot reopen.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'medium',
      source: 'Trading Economics / OilPrice / Fortune',
      event:
        "Brent crude repriced at Monday's open, sliding toward the low-$90s — off roughly 7% from Friday's ~$98 close — as the strike pause unwound part of the war-fear premium. The Saudi export halt and the standing dark-transit and war-risk-insurance premium kept a structural bid underneath the screen price, and Goldman Sachs reiterated a path to $120 in the fourth quarter if disruption persists.",
      summary:
        "Per §3.5.5 the number is two-sided: Monday resolved the Day 149 question by confirming part of the premium was bilateral-fear, while the floor under the rest confirmed the maritime interdiction as the durable driver. The distance to the $150-200 dual-closure tail is still one sinking.",
      impact:
        "A lower open validates the pause as real to traders; the sticky floor validates the Red Sea as the structural risk. Either way Asian buyers including Taiwan keep paying the invisible insurance-and-detour premium, and a single laden-tanker sinking would erase Monday's relief.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'Scripps News / Times of Israel / The Hill',
      event:
        "Trump reaffirmed that Xi had pledged in Beijing that China would 'not, under any circumstances, give or sell weapons' to Iran — companies included — and that Putin had promised the same, saying he took Putin 'at his word' partly because 'I am doing him very big favours.' In the same window he was reported to be weighing full-scale strikes on Iran if attacks on Gulf shipping continued, and the pledges ran against reporting that China and Russia aid Iran through drones, weapons and satellites.",
      summary:
        "Per §3.5.6 the standing prior holds — Beijing's role is commercial diplomacy, not resupply — and per §3.5.3 a publicized non-transfer pledge is a claim, not verified restraint. Banking the pledge while readying a strike premised on Iran's undiminished capability is a contradiction in plain sight.",
      impact:
        "If the pledges are real, the US air-dominance window stays open; if they are cover, Trump has staked credibility on adversaries he may have to accuse. Neither the pledge nor the strike option touches the Houthi ledger or Saudi's halted exports — the two things actually moving the war.",
    },
    {
      id: 5,
      direction: 'neutral',
      importance: 'medium',
      source: 'ISIS / Euronews / HRANA',
      event:
        "The nuclear file held bounded: the IAEA has had no access beyond a June 1-3 Bushehr visit, Iran continues to refuse entry to the Isfahan enrichment plant, and roughly 440.9 kg of 60% and 184.1 kg of 20% enriched uranium remain unverified, even as agency chief Rafael Grossi maintained inspections are 'going to happen.' HRANA's ten-day report holds at a minimum 20 civilians killed and 46 injured in the new wave as of July 17, and Iranian fire again struck Kuwaiti power and desalination infrastructure.",
      summary:
        "Per §3.5.3 Iran permitting the Bushehr power-plant visit while stonewalling on the HEU is the tell — the reactor is the showable site, the stockpile is the leverage. The bounded file is bounded by choice, not verification.",
      impact:
        "A two-day bilateral pause that does not restore enrichment-site access leaves the largest latent escalation untouched — an operating reactor with fresh impact scars and an unverified HEU stockpile. Water stays a target class in a Gulf state ~90% dependent on desalination; the Lebanon gap prior carries.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (100+ injured since early July, ~96% returned to duty)',
      delta: '+0 KIA / +0 WIA in the window; the strike pause held into a second day with no new US casualty',
      status:
        "The toll holds at 17 KIA and 432 WIA per the AP/CENTCOM series; a second day of the strike pause produced no new American casualty. The three deaths that lifted the toll to 17 — one in northern Iraq and two at Muwaffaq Salti in Jordan — remain the most recent, with the Jordan MIA accounted for within the identified dead per Day 144. Divergent CENTCOM injury counts (290–413 WIA) reflect different reporting windows per §3.5.3; the 432 figure carries. Trump's 'bridge or power plant per ship' rule and his 'hold Iran responsible' pledge keep any future maritime death pre-committed to escalation even during the pause; the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved as the London coalition firms.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (Israel not a direct party to the US-Iran exchange)',
      status:
        "No new Israeli casualties in the window. Israel remains outside the US-Iran framework and unbound by any Hormuz pause or the London shipping track; its standing readiness to strike Iran again keeps a full-scale-campaign option live even as the two principals pause. The Lebanon gap prior (§3.5.6) carries: Israel maintains it will not fully withdraw from southern Lebanon until Hezbollah disarms, and the June 26 US-brokered framework remains rejected, with cross-border fire continuing and no ceasefire in sight.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta: '+0 official update in the window; the CENTCOM strike series stayed paused',
      status:
        "No fresh official Iranian toll, and the pause held the CENTCOM strike series that had run against maritime, missile, drone, coastal-surveillance and air-defense targets. HRANA's ten-day report documents a minimum 20 civilians killed and 46 injured in the new wave as of July 17, flagged as minimum counts given continuing attacks and restricted access. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its standing understatement caveat, Foundation of Martyrs ~3,468, and US and Israeli estimates run to 6,000+. Iran says Bushehr is operating normally against July 7-12 satellite impact scars; the IAEA has had no access beyond its June 1-3 Bushehr visit and remains refused at the Isfahan enrichment plant; ~440.9 kg of 60% and 184.1 kg of 20% HEU remain unverified.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 128+ KIA / 370 WIA; Gulf 33+ KIA / 74+ WIA, of which Kuwait 10 killed (4 soldiers, 6 civilians) / 115 injured (77 soldiers, 38 civilians)',
      delta: '+0 confirmed fatalities in the window; the Saudi export halt and Bab el-Mandeb strikes produced no confirmed deaths',
      status:
        "No confirmed new Gulf or Iraqi fatalities in the window. Saudi Arabia halted crude exports through Bab el-Mandeb after Houthi strikes on the Encelia and Layla without a confirmed crew death reported; a crew death or a laden-tanker sinking remains the tell most likely to reprice oil and trigger Trump's pledge. Iranian fire again struck Kuwaiti power and desalination plants; Kuwait's cumulative ledger holds at 10 killed (4 soldiers, 6 civilians) and 115 injured (77 soldiers, 38 civilians), inside the 33+ Gulf-wide baseline. Lebanon toll stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129); Iraq baseline carries.",
    },
  },
  exec:
    "Day 150 deepened the split the previous day opened. The US-Iran strike pause held into a second day — the US military announced no new strikes for the first time in about two weeks, and a Defense Department official called operations 'on a hold' — while an Omani delegation worked in Tehran on a formula to reopen the Strait of Hormuz and the US and UK firmed a London conference, expected to draw Defense Secretary Pete Hegseth and Gen. Dan Caine, to build a maritime-security coalition (CNN, CBS, Axios). Markets delivered the Monday answer Day 149 flagged: Brent repriced toward the low-$90s, off roughly 7% from Friday's ~$98 close, unwinding part of the war-fear premium (Trading Economics). But the maritime front broke the other way. Saudi Arabia temporarily halted crude exports through Bab el-Mandeb after Houthi strikes on two of its tankers — the first time a Gulf state has suspended a major export route in this war — with traffic already down about a third (TWZ, CNBC). Trump again banked Xi's and Putin's no-arms pledges, saying he took Putin 'at his word,' even as he was reported to be weighing full-scale strikes if shipping attacks persist (Scripps News, Times of Israel). Per §3.5.3 the pause remains process, not agreement — unsigned, resting on Trump being 'not ready.' The nuclear file held bounded, the IAEA still absent beyond Bushehr. The US toll holds at 17. Direction stays mixed; seven-day risk stays critical; spillover stays critical; the thirty-day ceasefire probability ticks to 13.",
  implications: [
    {
      title: 'The pause holds; the sea breaks the other way',
      body:
        "For a second straight day the bilateral and maritime clocks moved in opposite directions. Washington and Tehran let the strike pause run — no new US strikes for the first time in roughly two weeks, operations 'on a hold' — an Omani delegation worked a Hormuz-reopening formula in Tehran, and the London conference firmed toward a Western escort coalition (CNN, CBS, Axios). Under the multi-clock framework the negotiation-capacity clock keeps improving. Then the energy-infrastructure clock took its hardest hit in weeks: Saudi Arabia halted crude exports through Bab el-Mandeb after Houthi strikes on the Encelia and Layla — the first time a state, not the Houthis, pulled its own tonnage off the water (TWZ, CNBC). Analytical judgment: per §3.5.3 the pause is still unsigned and rests on Trump being 'not ready,' revocable within a news cycle; the June MoU was repudiated, suspended and called 'over.' What is new is that the maritime front no longer needs Tehran to escalate — a Gulf oil exporter just did it to itself by prudence. Per §3.5.5 the delta is the point: Brent slid from ~$98 to the low-$90s on the pause, so roughly 7% of the premium was bilateral-fear, while the rest stayed embedded because a producer suspending a route is a supply fact, not a sentiment. The off-ramp and the escalation ladder still share a tripwire at Hormuz, but the ladder now has a rung the negotiators cannot reach.",
    },
    {
      title: "China's pledge, Trump's full-strike option",
      body:
        "Trump held two positions at once. He reaffirmed that Xi had told him in Beijing that China would 'not, under any circumstances, give or sell weapons' to Iran — companies included — and that Putin had pledged the same, adding that he took Putin 'at his word' because 'I am doing him very big favours' (Scripps News, Times of Israel, The Hill). In the same window he was reported to be weighing full-scale strikes on Iran if attacks on Gulf shipping did not stop. Analytical judgment: per §3.5.6 the standing prior holds — Beijing's role in this war is commercial diplomacy, not resupply or a Security Council move — and per §3.5.3 a non-transfer pledge the US president publicizes is a claim, not verified restraint, sitting beside reporting that China and Russia aid Iran through drones, weapons and satellites. The two positions are in tension: a president who genuinely believed the pledges would not simultaneously be readying a campaign premised on Iran's undiminished capability. Neither the pledge nor the strike option touches the two things actually moving the war — the Houthi ledger at Bab el-Mandeb, which answers to Yemen, and a Saudi export halt, which answers to Riyadh's risk managers. The China card stays rhetorical until a shipment is stopped, a sanction lands, or a UN vote is cast; the London coalition is being built around Beijing, not with it.",
    },
    {
      title: 'Taiwan: the escape route just got more expensive',
      body:
        "Taiwan's one buffer narrowed at exactly the seam it was counting on. Taipei still estimates it has secured natural gas through September, cushioned by record US LNG and term Australian cargoes, and has diversified crude toward roughly 60% from the United States (Bloomberg, CSIS). But the island received no LNG cargoes from Qatar or the UAE in April and May, roughly a third of its gas normally transits Hormuz, and the Red Sea reroute its shippers use to dodge the strait is exactly where Saudi Arabia just suspended exports (Atlantic Council, OilPrice). Analytical judgment: per §3.5.5 the numbers still bind — the strategic buffer is eleven days, reaching the statutory fourteen only from 2027, against about 120 days of oil cover, and summer demand runs up to 40% above February. Monday's lower Brent helps the price of what Taiwan buys; it does nothing for the route. A month ago the analytical worry was Hormuz alone; now both the primary strait and the detour around it are contested water, and the diversification that looked like resilience is being tested on a second axis. September remains a date, not a solution: it is the month the secured supply runs to, not the month the exposure ends. Diversification is real progress; on a two-chokepoint map it is not yet security.",
    },
  ],
  casualtyNotes: {
    us:
      "Toll holds at 17 KIA / 432 WIA (AP/CENTCOM series); a second day of the strike pause produced no new fatality. The three most recent deaths (Iraq x1, Jordan x2) and the resolved Jordan MIA carry per Day 144. Divergent CENTCOM injury counts (290–413 WIA) reflect different windows per §3.5.3; 432 carries. Trump's 'hold Iran responsible' pledge and the 'bridge or power plant per ship' rule keep any future maritime death pre-committed to escalation; the $67 billion supplemental and the 50-48 war-powers rebuke remain unresolved as the London coalition firms.",
    israel:
      'No new Israeli casualties. Israel stays outside the US-Iran framework and unbound by any Hormuz pause or the London track; its readiness signal keeps a full-scale-campaign option live even as the two principals pause. June 26 Lebanon framework still rejected by Hezbollah; the Lebanon gap prior carries.',
    iran:
      "No fresh official toll as the pause held the CENTCOM strike series. HRANA new-wave tally holds at a minimum 20 killed / 46 injured; cumulative HRANA 3,636+ with understatement caveat; Foundation of Martyrs ~3,468; US/Israeli est. 6,000+. Bushehr reported operating normally against July 7-12 satellite impact scars; IAEA absent beyond its June 1-3 Bushehr visit and refused at Isfahan; ~440.9 kg of 60% and 184.1 kg of 20% HEU unverified.",
    other:
      'No confirmed new Gulf or Iraqi fatalities. Saudi Arabia halted Red Sea crude exports through Bab el-Mandeb after Houthi strikes on the Encelia and Layla without a confirmed death; a crew death or laden-tanker sinking remains the tell to watch. Iranian fire again hit Kuwaiti power and desalination plants; Kuwait cumulative 10 killed / 115 injured. Lebanon source-split; Iraq baseline carries.',
  },
};

export default data;
