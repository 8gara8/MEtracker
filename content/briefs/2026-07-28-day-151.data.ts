import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds at mixed, but for the first time in weeks the tilt is de-escalatory on both clocks at once. The US-Iran strike pause ran into a third day — Washington framing it as space for talks (UN ambassador Waltz), an Omani channel working a Hormuz-reopening formula in Tehran — and Saudi Arabia moved to reopen the Bab el-Mandeb lane it had halted a day earlier (CNN, Fortune, Gulf News). Against that easing, per §3.5.3, every data point is a claim or a reroute: Iran's Foreign Ministry says 'we have no negotiations with the United States at present' and that this 'cannot be called a ceasefire,' and the Saudi resumption is an announcement against tracking that shows its crude rerouted through Suez, with Bab el-Mandeb loadings near zero. A calmer day narrated ahead of verification is not yet de-escalation.",
      risk7d:
        "Seven-day risk holds critical. The third-day pause caps the near-term strike risk, but nothing is signed, Iran denies a negotiation is even under way, and Rubio calls Tehran 'not serious' (Al Jazeera, CNBC). The Houthi embargo declared July 20 stands, the Saudi 'resumption' has not put barrels back through Bab el-Mandeb, and Trump's 'bridge or power plant per ship' rule still converts any new Hormuz strike into a pre-committed infrastructure exchange. The collapse pattern of the past three weeks — pause, optimism, reversal — is the base rate, and per §3.5.6 the structural priors carry.",
      spillover:
        "Spillover holds critical. Brent eased toward the high-$80s off the week's above-$90 high as the pause unwound part of the war-fear premium, but a bid held over the roughly $86 baseline because Saudi Arabia's Suez reroute adds about 30 days of transit and cost and the Red Sea threat persists (Trading Economics, Bloomberg). Goldman's $120 fourth-quarter tail is intact and the $150-200 dual-closure tail is still one sinking away. The Suez corridor now carrying rerouted Saudi crude is the same detour Asian buyers including Taiwan use to escape Hormuz — the bypass has become the main channel, not the exception.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'high',
      source: 'CNN / NPR / Al Jazeera / CBS News',
      event:
        "The US-Iran strike pause held into a third day. UN ambassador Mike Waltz said the halt was meant to let talks with Iran develop, and CBS reported the Oman-Iran channel moving 'in a positive direction.' But Iran's Foreign Ministry said 'we have no negotiations with the United States at present' and that what exists 'cannot be called a ceasefire,' even as Iranian and Omani deputy foreign ministers met in Tehran on Hormuz shipping.",
      summary:
        "Per §3.5.3 the pause is process, not agreement — and the two principals do not agree it is even a process: Washington calls it space for talks, Tehran denies a negotiation exists. An unsigned halt resting on Trump being 'not ready' is revocable within a news cycle.",
      impact:
        "A third day without strikes is the longest lull in weeks and real de-escalation on the bilateral clock. But the definitional gap — talks-space versus 'no negotiations' — is the same ambiguity that preceded the Day 51 collapse, and neither side has conceded anything in writing.",
    },
    {
      id: 2,
      direction: 'de-escalating',
      importance: 'high',
      source: 'The National / Gulf News / CNBC',
      event:
        "Saudi Arabia moved to reopen the Bab el-Mandeb lane it had closed on July 26, signaling it would resume Red Sea crude shipments. Tanker-tracking showed Riyadh had already rerouted its Asia-bound barrels through the Suez Canal, with Bab el-Mandeb loadings down about 36% to roughly 6.1 million barrels a day from a 9.5 million peak and Kpler traffic off about a third; the Houthi embargo declared July 20 stayed in force.",
      summary:
        "Per §3.5.3 and §3.5.5 the resumption is a statement, not a transit: the barrels detoured through Suez, they did not return through the strait, and Suez adds about 30 days of transit and cost. A Gulf state reopening a route it just closed, without the threat that closed it removed, is a partial reversal, not a resolution.",
      impact:
        "The energy-infrastructure clock's hardest hit in weeks begins to unwind — oil keeps moving to Asia, if slower and pricier. But the Houthi capability that forced the halt is intact, so the maritime front can re-close on the next hull hit, and the negotiators in Tehran and London still cannot reach Bab el-Mandeb.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'medium',
      source: 'Trading Economics / Bloomberg / The Epoch Times',
      event:
        "Brent crude eased toward the high-$80s — as low as about $87.6 before trading near $89.7 — off the week's above-$90 high as the strike pause unwound part of the war-fear premium. A structural bid held over the roughly $86 World Bank baseline because Saudi Arabia's Suez reroute lengthens transit and cost and the Houthi threat persists, and Goldman Sachs reiterated a path to $120 in the fourth quarter if disruption continues.",
      summary:
        "Per §3.5.5 the number is two-sided: the pause priced out part of the bilateral-fear premium, while the reroute and the standing war-risk-insurance bid confirmed the maritime interdiction as the durable driver. The distance to the $150-200 dual-closure tail is still one sinking.",
      impact:
        "A softer screen price validates the pause as real to traders; the sticky floor validates the Red Sea as the structural risk. Asian buyers including Taiwan keep paying the invisible insurance-and-detour premium, and a single laden-tanker sinking would erase the relief.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'Fortune / Press TV / CNBC / The Hill',
      event:
        "Omani Foreign Minister Badr Albusaidi held calls with counterparts from Iran, Saudi Arabia, Qatar, Kuwait and Egypt on de-escalation, and two regional sources said the Oman-Iran talks on reopening Hormuz had 'made progress.' In the same window Secretary of State Marco Rubio had called Tehran 'not serious' about peace, and Trump kept banking Xi's and Putin's pledges not to 'give or sell' weapons to Iran against reporting that both aid Tehran.",
      summary:
        "Per §3.5.3 a mediator's 'progress' and a president's banked pledge are process claims, not verified restraint. Per §3.5.6 the standing prior holds: Beijing's role stays commercial diplomacy, not resupply or a Security Council move, and the pledge is rhetorical until a shipment is stopped or a vote is cast.",
      impact:
        "The diplomatic architecture is more developed than at any prior moment — an Omani corridor with the region on the phone — yet it stops at Hormuz and binds neither the Houthi ledger nor Israel. Rubio's 'not serious' and Tehran's 'no negotiations' bracket how thin the consensus underneath the pause actually is.",
    },
    {
      id: 5,
      direction: 'neutral',
      importance: 'medium',
      source: 'ISIS / NPR / Euronews / HRANA',
      event:
        "The nuclear file held bounded: the IAEA has conducted no verification in Iran since February 28 and has not been allowed to return, leaving about 440.9 kg of 60% and 184.1 kg of 20% enriched uranium unverified — material Grossi says is likely still at Isfahan — even as he maintained inspections are 'going to happen.' HRANA's ten-day report held at a minimum 20 civilians killed and 46 injured in the new wave as of July 17, and Iranian fire again struck Kuwaiti power and desalination infrastructure.",
      summary:
        "Per §3.5.3 an unverified stockpile the agency cannot inspect is bounded by choice, not by verification — Tehran permits the reactor optics while stonewalling on the HEU. A third-day pause that does not restore enrichment-site access leaves the largest latent escalation untouched.",
      impact:
        "The bilateral thaw does nothing for the nuclear ledger: an operating reactor with July satellite scars and a 60% stockpile the IAEA last saw in February. Water stays a target class in a Gulf state ~90% dependent on desalination; the Lebanon gap prior carries.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (100+ injured since early July, ~96% returned to duty)',
      delta: '+0 KIA / +0 WIA in the window; the strike pause held into a third day with no new US casualty',
      status:
        "The toll holds at 17 KIA and 432 WIA per the AP/CENTCOM series; a third day of the strike pause produced no new American casualty. The three deaths that lifted the toll to 17 — one in northern Iraq and two at Muwaffaq Salti in Jordan — remain the most recent, with the Jordan MIA accounted for within the identified dead per Day 144. Divergent CENTCOM injury counts (290–413 WIA) reflect different reporting windows per §3.5.3; the 432 figure carries. UN ambassador Waltz cast the pause as space for talks, but Trump's 'bridge or power plant per ship' rule and his 'hold Iran responsible' pledge keep any future maritime death pre-committed to escalation; the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (Israel not a direct party to the US-Iran exchange)',
      status:
        "No new Israeli casualties in the window. Israel remains outside the US-Iran framework and unbound by any Hormuz pause, the Oman channel, or a London shipping track; its standing readiness to strike Iran again keeps a full-scale-campaign option live even as the two principals pause a third day. The Lebanon gap prior (§3.5.6) carries: Israel maintains it will not fully withdraw from southern Lebanon until Hezbollah disarms, and the June 26 US-brokered framework remains rejected, with cross-border fire continuing and no ceasefire in sight.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta: '+0 official update in the window; the CENTCOM strike series stayed paused',
      status:
        "No fresh official Iranian toll, and the pause held the CENTCOM strike series that had run against maritime, missile, drone, coastal-surveillance and air-defense targets. HRANA's ten-day report documents a minimum 20 civilians killed and 46 injured in the new wave as of July 17, flagged as minimum counts given continuing attacks and restricted access. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its standing understatement caveat, Foundation of Martyrs ~3,468, and US and Israeli estimates run to 6,000+. The IAEA has conducted no verification since February 28 and remains locked out; ~440.9 kg of 60% and 184.1 kg of 20% HEU remain unverified and, per Grossi, likely still at Isfahan.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 128+ KIA / 370 WIA; Gulf 33+ KIA / 74+ WIA, of which Kuwait 10 killed (4 soldiers, 6 civilians) / 115 injured (77 soldiers, 38 civilians)',
      delta: '+0 confirmed fatalities in the window; the Saudi halt-and-reopen and Bab el-Mandeb strikes produced no confirmed deaths',
      status:
        "No confirmed new Gulf or Iraqi fatalities in the window. Saudi Arabia moved to reopen Bab el-Mandeb after halting it July 26; no crew death was confirmed on the Encelia or Layla, so the maritime front escalated over a route and then partly reversed without becoming lethal — a crew death or a laden-tanker sinking remains the tell most likely to reprice oil and trigger Trump's pledge. Iranian fire again struck Kuwaiti power and desalination plants; Kuwait's cumulative ledger holds at 10 killed (4 soldiers, 6 civilians) and 115 injured (77 soldiers, 38 civilians), inside the 33+ Gulf-wide baseline. Lebanon toll stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129); Iraq baseline carries.",
    },
  },
  exec:
    "Day 151 was the first day in weeks that both clocks eased at once — and the first that the easing looked softer than it sounded. The US-Iran strike pause held into a third day; Washington framed it as space for talks, with UN ambassador Mike Waltz saying the halt was meant to let negotiations develop (CNN, NPR). But Iran's Foreign Ministry said flatly, 'We have no negotiations with the United States at present,' and that what exists 'cannot be called a ceasefire' — the two sides do not agree that talks even exist (Al Jazeera, Fortune). At sea, Saudi Arabia moved to reopen the lane it closed a day earlier, signaling it would resume Bab el-Mandeb crude shipments — even as tanker-tracking showed it had rerouted Asia-bound barrels through the Suez Canal and Bab el-Mandeb loadings fell to near zero, about 6.1 million barrels a day from a 9.5 million peak (The National, Gulf News). Brent eased toward the high-$80s, off the week's above-$90 high, while holding a bid over the roughly $86 baseline (Trading Economics, Bloomberg). Per §3.5.3 every de-escalatory data point today is a claim or a reroute, not a verified fact: an unsigned pause Iran will not call a negotiation, an announced resumption against barrels that detoured rather than returned. The nuclear file stayed bounded, the IAEA still locked out since February. The US toll holds at 17. Direction stays mixed; seven-day risk stays critical; spillover stays critical; the thirty-day ceasefire probability ticks to 15.",
  implications: [
    {
      title: 'Both clocks eased; both easings are claims, not facts',
      body:
        "For the first time in weeks the bilateral and maritime clocks moved the same way — down. The strike pause ran into a third day, an Omani channel kept working a Hormuz-reopening formula in Tehran, and Saudi Arabia signaled it would reopen the Bab el-Mandeb lane it had closed a day earlier (CNN, Fortune, Gulf News). Under the multi-clock framework, the negotiation-capacity and energy-infrastructure clocks improved on the same page for the first time since the maritime front opened. Analytical judgment: per §3.5.3 both easings are announced ahead of verification. The pause is unsigned and rests on Trump being 'not ready'; Iran will not even call the contact a negotiation. The Saudi resumption is a statement, not a transit — tracking shows Riyadh rerouted its Asia-bound crude through the Suez Canal, with Bab el-Mandeb loadings down about 36% to roughly 6.1 million barrels a day from a 9.5 million peak and Kpler traffic off about a third (The National, CNBC). Per §3.5.5 the delta is the point: the barrels detoured, they did not return, and Suez adds about 30 days of transit and cost. Brent eased toward the high-$80s off the week's above-$90 high but held a premium over the roughly $86 World Bank baseline, so the market priced the pause without pricing out the war. The off-ramp is real; it is being narrated faster than it is being built, and the Houthi embargo that forced the reroute is still standing.",
    },
    {
      title: "'No negotiations' — the two sides cannot agree the talks exist",
      body:
        "The day's sharpest signal was definitional. UN ambassador Mike Waltz said the strike pause was meant to give talks room to develop, and CBS reported the Oman-Iran channel moving 'in a positive direction' (NPR, CBS). Iran's Foreign Ministry answered that 'we have no negotiations with the United States at present' and that what exists 'cannot be called a ceasefire,' while Secretary of State Marco Rubio had days earlier called Tehran 'not serious' about peace (Al Jazeera, CNBC). Omani Foreign Minister Badr Albusaidi worked the phones with Iran, Saudi Arabia, Qatar, Kuwait and Egypt, and two regional sources said the Oman-Iran Hormuz talks had 'made progress' (Fortune, Press TV). Analytical judgment: per §3.5.3 a mediator's 'progress' and a president's 'space' are process claims, not an agreement, and the two principals publicly disagree on whether they are talking at all — the exact ambiguity that preceded the Day 51 collapse. Per §3.5.6 the standing priors carry: the Oman corridor and any London maritime-coalition track stop at Hormuz and bind neither the Houthi ledger at Bab el-Mandeb, which answers to Yemen, nor Israel, which remains outside the US-Iran framework. Trump's banked Xi-and-Putin no-arms pledges stay rhetorical until a shipment is stopped or a vote is cast (The Hill). The architecture is more developed than at any prior moment and still does not reach the two things that actually moved this week.",
    },
    {
      title: 'Taiwan: the detour becomes the norm',
      body:
        "Taiwan's exposure sharpened at the exact seam its planners lean on. To escape Hormuz, Taipei diversified crude toward roughly 60% from the United States, up from about 70% Middle Eastern in 2024, and began lifting barrels from Saudi Arabia's Red Sea ports — the very Bab el-Mandeb route Riyadh just rerouted around (CSIS, Atlantic Council). Analytical judgment: per §3.5.5 the numbers still bind. Taiwan runs at 4.2% energy self-sufficiency; about 85% of East Asia's crude and LNG transits Hormuz; roughly a third of Taiwan's gas comes from Qatar through that strait; and the island holds only 11 days of gas inventory against about 120 days of oil cover. The crude side is where the diversification shows — US barrels and a deep oil buffer absorb a Saudi Suez detour that adds about 30 days and cost but keeps oil moving. The gas side is the unhealed vulnerability: a third of supply on the Hormuz clock and an 11-day cushion, secured only through September and reaching the statutory 14 days only from 2027 (Wood Mackenzie). Tuesday's softer Brent helps the price of what Taiwan buys; it does nothing for the route. Per §3.5.10 the fresh development is real — the detour Asian buyers used to dodge Hormuz has become the main channel, not the exception. Diversification is measurable progress; on a map where both the strait and its bypass are contested, September is a date, not a solution.",
    },
  ],
  casualtyNotes: {
    us:
      "Toll holds at 17 KIA / 432 WIA (AP/CENTCOM series); a third day of the strike pause produced no new fatality. The three most recent deaths (Iraq x1, Jordan x2) and the resolved Jordan MIA carry per Day 144. Divergent CENTCOM injury counts (290–413 WIA) reflect different windows per §3.5.3; 432 carries. Waltz framed the pause as space for talks; Trump's 'hold Iran responsible' pledge and the 'bridge or power plant per ship' rule keep any future maritime death pre-committed to escalation; the $67 billion supplemental and the 50-48 war-powers rebuke remain unresolved.",
    israel:
      'No new Israeli casualties. Israel stays outside the US-Iran framework and unbound by any Hormuz pause, the Oman channel, or a London track; its readiness signal keeps a full-scale-campaign option live even as the two principals pause a third day. June 26 Lebanon framework still rejected by Hezbollah; the Lebanon gap prior carries.',
    iran:
      "No fresh official toll as the pause held the CENTCOM strike series. HRANA new-wave tally holds at a minimum 20 killed / 46 injured; cumulative HRANA 3,636+ with understatement caveat; Foundation of Martyrs ~3,468; US/Israeli est. 6,000+. IAEA has run no verification since February 28 and remains locked out; ~440.9 kg of 60% and 184.1 kg of 20% HEU unverified and, per Grossi, likely still at Isfahan.",
    other:
      'No confirmed new Gulf or Iraqi fatalities. Saudi Arabia moved to reopen Bab el-Mandeb after halting it July 26 without a confirmed death on the Encelia or Layla; a crew death or laden-tanker sinking remains the tell to watch. Iranian fire again hit Kuwaiti power and desalination plants; Kuwait cumulative 10 killed / 115 injured. Lebanon source-split; Iraq baseline carries.',
  },
};

export default data;
