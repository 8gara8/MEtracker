import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction eases from escalating to mixed as the two principals pulled apart from the maritime front they cannot control. Washington and Tehran appeared to pause direct strikes for the first time since the early-July resumption even as the Red Sea flared, and CBS News reported Oman-Iran talks advancing on a formula to reopen the Strait of Hormuz while the US and UK moved to convene a London conference on shipping security (CNN, CBS, The Hill). Against that, Saudi Arabia and the Houthis traded strikes — Riyadh hit the group, the Houthis answered against Saudi Red Sea installations — and Trump threatened to destroy an Iranian bridge or power plant for every ship attacked in Hormuz (NBC News). Per §3.5.3 'appears to pause' and 'sources say advance' are claims, not a signed pause; the MoU was repudiated, suspended and called 'over,' and the April framework broke three times.",
      risk7d:
        "Seven-day risk steps down one notch from extreme to critical on the bilateral pause and the re-activated Hormuz track, but no lower. The pause is on the US-Iran exchange only; the maritime front stayed kinetic, Bab el-Mandeb traffic ran thin (eight tankers north, fourteen south on Thursday), and Trump's 'bridge or power plant per ship' rule converts any new Hormuz strike into a pre-committed infrastructure exchange (NBC News, CNN). A pause that rests on Trump being 'not ready' rather than on terms both sides signed can reverse within a news cycle, and the collapse pattern of the past three weeks is the base rate.",
      spillover:
        "Spillover holds critical. Markets were closed for the weekend, carrying Friday's Brent near $98 after last week's spike above $100 and $102, with roughly the fortnight's 14% premium still embedded and Goldman's $120 fourth-quarter tail intact (Trading Economics). The strike pause is the kind of news that reprices at Monday's open, not on a Sunday tape; the Red Sea evasion regime — transponders off, COSCO clearances granted ship-by-ship — keeps the risk premium and the war-risk insurance bid in place regardless of the bilateral thaw, and the corridor Asian buyers including Taiwan use to escape Hormuz is the same water Saudi and Houthi forces are still contesting.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'high',
      source: 'CNN / CBS News / The Hill',
      event:
        "Washington and Tehran appeared to pause direct strikes for the first time since the early-July resumption, even as Red Sea tensions flared, and CBS News reported — citing sources — that Oman-Iran talks were advancing on a formula to reopen the Strait of Hormuz; separately the US and UK moved to convene a conference in London on protecting Gulf shipping, potentially seeding an international escort coalition. Trump maintained he was 'not ready' for a ceasefire and that Iran would 'love to make a deal' but was not there yet.",
      summary:
        "The first genuinely de-escalatory cluster in weeks lands on the bilateral track: a strike pause, an advancing Hormuz formula, and a multilateral shipping-security venue. Per §3.5.3 all three are process — a pause Trump can revoke, talks 'sources say' advance, a conference not yet convened — not agreement.",
      impact:
        "If the pause and the Oman formula hold, the negotiation-capacity clock re-activates after three weeks stalled and the dominant Hormuz-off-ramp question tilts toward the off-ramp. The London track builds Western maritime architecture the Oman corridor lacks — but neither reaches the Houthi ledger at Bab el-Mandeb.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'The Hill / Colorado Politics / The Defense Post / NewsNation',
      event:
        "Trump said President Xi had told him at their Beijing meeting that China would 'not, under any circumstances, give or sell weapons to the Islamic Republic of Iran — and that statement included Chinese companies,' and that Putin had made a similar pledge; he warned it would be 'very bad' for either leader if Washington found otherwise. The claim ran against contemporaneous reporting that China and Russia were aiding Iran through technology and tactics — Ukraine's Zelensky said Russian satellites had surveilled four Gulf air bases hosting US troops on July 19-20 — and against Beijing granting COSCO ship-by-ship Red Sea clearances.",
      summary:
        "Diplomacy by assertion: Trump is banking pledges he announced rather than restraint anyone verified. Per §3.5.6 the standing prior holds — China's role is commercial diplomacy, not resupply or a UN Security Council move — and a publicized non-transfer promise is a claim in the same category as the progress figures that preceded past collapses.",
      impact:
        "If the pledges are real, the window of US air dominance stays open and Iran's reconstitution is capped; if they are cover for tech-and-tactics support, Trump has publicly staked credibility on adversaries he may later have to accuse. Either way Beijing is being built around, not with — the London coalition is a Western structure.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'NBC News / Bloomberg / ISW',
      event:
        "The maritime front stayed hot as the bilateral one cooled: Saudi Arabia struck Houthi targets and the Houthis answered against Saudi installations on the Red Sea coast, while Bab el-Mandeb traffic ran thin — eight tankers transited north into the Red Sea and fourteen south into the Gulf of Aden on Thursday — and the evasion regime of dark transponders and ship-by-ship COSCO clearances persisted. Trump hardened his deterrent into a specific tit-for-tat: the US would destroy an Iranian bridge or power plant each time a ship is attacked in the Strait of Hormuz.",
      summary:
        "Per §3.5.5 the delta is the point: a two-front war where one front pauses and the other trades strikes is not de-escalating, it is bifurcating. The infrastructure-per-ship rule is an escalation ladder written down — it removes Trump's discretion the next time a hull is hit.",
      impact:
        "The energy-infrastructure clock stays loaded even as the bilateral clock eases. A codified 'bridge or power plant per ship' doctrine means the maritime front can drag the paused bilateral front back into strikes automatically — the off-ramp and the escalation ladder now share a tripwire at Hormuz.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: 'Trading Economics / Fortune / Bloomberg',
      event:
        "With markets closed for the weekend, Brent held near Friday's $98 close, off the $100-102 intraday highs of last week's Saudi- and Chinese-tanker strikes but still carrying roughly a 14% weekly premium; Goldman Sachs reiterated a path to $120 in the fourth quarter if Red Sea and Hormuz disruption persists. The strike pause is the kind of development that reprices at Monday's open rather than on a Sunday tape, and the standing dark-transit and war-risk-insurance premium sits underneath the screen price regardless of the bilateral thaw.",
      summary:
        "Per §3.5.5 the number is two-sided: the market kept most of its risk premium through a de-escalatory weekend, signaling traders price the maritime front, not the bilateral pause. The distance to the $150-200 dual-closure tail is still one sinking.",
      impact:
        "If Monday opens lower on the pause, it confirms the premium was bilateral-fear; if it holds or rises, it confirms the Red Sea interdiction is the durable driver. Either read leaves Taiwan and other Asian buyers paying the invisible insurance-and-detour premium.",
    },
    {
      id: 5,
      direction: 'neutral',
      importance: 'medium',
      source: 'National Security Journal / ISIS / Al Jazeera',
      event:
        "The nuclear file held bounded: Iran maintained Bushehr is operating normally against July 7-12 satellite imagery showing fresh impact scars inside the complex, the IAEA has had no access beyond a June 1-3 Bushehr visit, and roughly 440.9 kg of 60% and 184.1 kg of 20% enriched uranium remain unverified, with ISIS calling independent assessment urgent. Iranian fire continued against Kuwaiti power and desalination infrastructure, and Israel stayed outside the US-Iran framework with the June 26 Lebanon framework still rejected.",
      summary:
        "Per §3.5.3 Tehran downplaying Bushehr damage rather than amplifying it is the tell that the nuclear category is being preserved as leverage, not spent. The bounded file is bounded by choice, not by verification — the IAEA still cannot see the HEU.",
      impact:
        "A bilateral pause that does not restore inspector access leaves the largest latent escalation — an operating reactor, an unverified HEU stockpile — untouched. Water remains a target class in a Gulf state roughly 90% dependent on desalination; the Lebanon gap prior carries.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (100+ injured since early July, ~96% returned to duty)',
      delta: '+0 KIA / +0 WIA in the window; the bilateral strike pause produced no new US casualties',
      status:
        "The toll holds at 17 KIA and 432 WIA per the AP/CENTCOM series; the strike pause meant no new American casualty in the window. The three deaths that lifted the toll to 17 — one in northern Iraq and two at Muwaffaq Salti in Jordan — remain the most recent, with the Jordan MIA accounted for within the identified dead per Day 144. Divergent CENTCOM injury counts (290–413 WIA) reflect different reporting windows per §3.5.3; the 432 figure carries. Trump's pledge to hold Iran responsible for Houthi attacks and his new 'bridge or power plant per ship' rule keep any future maritime death pre-committed to escalation; the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved as the London coalition is floated.",
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
      delta: '+0 official update in the window; the CENTCOM strike series paused',
      status:
        "No fresh official Iranian toll, and the pause halted the CENTCOM strike series that had run against maritime, missile, drone, coastal-surveillance and air-defense targets. HRANA's ten-day report documents at least 48 killed and 68 injured in the new wave as of July 17, flagged as minimum counts given continuing attacks and restricted access. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its standing understatement caveat, Foundation of Martyrs ~3,468, and US and Israeli estimates run to 6,000+. Iran says Bushehr is operating normally against July 7-12 satellite impact scars; the IAEA has had no access beyond its June 1-3 Bushehr visit; ~440.9 kg of 60% and 184.1 kg of 20% HEU remain unverified.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 128+ KIA / 370 WIA; Gulf 33+ KIA / 74+ WIA, of which Kuwait 10 killed (4 soldiers, 6 civilians) / 115 injured (77 soldiers, 38 civilians)',
      delta: '+0 confirmed fatalities in the window; Saudi-Houthi reciprocal strikes produced no confirmed deaths',
      status:
        "No confirmed new Gulf or Iraqi fatalities in the window. Saudi Arabia and the Houthis traded strikes — Riyadh against Houthi targets, the Houthis against Saudi Red Sea installations — without a confirmed death reported; a crew death or a laden-tanker sinking remains the tell most likely to reprice oil and trigger Trump's pledge. Iranian fire again struck Kuwaiti power and desalination plants; Kuwait's cumulative ledger holds at 10 killed (4 soldiers, 6 civilians) and 115 injured (77 soldiers, 38 civilians), inside the 33+ Gulf-wide baseline. Lebanon toll stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129); Iraq baseline carries.",
    },
  },
  exec:
    "Day 149 pulled the two fronts of this war apart. Washington and Tehran appeared to pause direct strikes for the first time since the early-July resumption, and CBS News reported Oman-Iran talks advancing on a formula to reopen the Strait of Hormuz while the US and UK moved to convene a London conference on protecting Gulf shipping (CNN, CBS, The Hill). Against that de-escalatory cluster the maritime front stayed hot — Saudi Arabia and the Houthis traded strikes, Bab el-Mandeb traffic ran thin, and Trump hardened his deterrent into a rule: the US would destroy an Iranian bridge or power plant for every ship attacked in Hormuz (NBC News). Trump also said Xi had pledged in Beijing that China would 'not, under any circumstances, give or sell weapons' to Iran, and that Putin had promised the same — claims that ran against reporting of Chinese and Russian tech-and-tactics support (The Hill, Colorado Politics). Per §3.5.3 the pause is process, not agreement: it rests on Trump being 'not ready' rather than on signed terms, and the MoU was repudiated, suspended and called 'over' before. Markets were closed for the weekend, carrying Brent near $98 with last week's 14% premium largely intact (Trading Economics). The nuclear file held bounded, the IAEA still absent beyond Bushehr. The US toll holds at 17. Direction eases to mixed; seven-day risk steps to critical; spillover stays critical; the thirty-day ceasefire probability ticks to 12.",
  implications: [
    {
      title: 'Two clocks, pulling apart',
      body:
        "For the first time in weeks the bilateral and maritime clocks moved in opposite directions on the same day. Washington and Tehran appeared to pause direct strikes, CBS reported the Oman-Iran channel advancing toward a Hormuz-reopening formula, and the US and UK floated a London conference to stand up an international escort coalition (CNN, CBS, The Hill). Under the multi-clock framework the negotiation-capacity clock — stalled for three weeks — re-activated, and the dominant question of whether Trump takes the Hormuz off-ramp or the full-scale campaign tilted, for one day, toward the off-ramp. Analytical judgment: per §3.5.3 none of this is signed. A pause that rests on Trump being 'not ready' rather than on agreed terms is revocable within a news cycle; 'sources say' the Oman talks advance; the London venue is convened, not concluded. The base rate is unforgiving — the June MoU was repudiated, suspended and called 'over,' and the April 8 framework broke three times. What makes today different is architecture: an advancing Omani formula plus a Western maritime-security track is more structure than any prior de-escalatory moment carried. What makes it fragile is that neither track reaches Bab el-Mandeb, where the Houthis answer to Yemen's own ledger — so the maritime front can reverse the bilateral thaw without either principal choosing to.",
    },
    {
      title: "China's pledge is not China's lever",
      body:
        "Trump's most concrete China move to date was to announce someone else's promise. He said Xi had told him in Beijing that China would 'not, under any circumstances, give or sell weapons' to Iran — companies included — and that Putin had pledged the same, warning it would be 'very bad' if either broke it (The Hill, Colorado Politics, The Defense Post). Analytical judgment: per §3.5.6 the standing prior holds — Beijing's role in this war is commercial diplomacy, not resupply or a Security Council move — and a non-transfer pledge the US president publicizes is not restraint anyone verified. The claim sits beside contemporaneous reporting that China and Russia aid Iran through technology and tactics, including Zelensky's assertion that Russian satellites surveilled four Gulf air bases hosting US troops on July 19-20, and beside Beijing granting COSCO Red Sea clearances one hull at a time. This is the same category of optimistic assertion — the '80% complete' figures, the progress claims — that preceded earlier collapses, and it stakes US credibility on adversaries Washington may later have to accuse. The tell that matters is structural: the shipping coalition is being built in London, around Beijing, not with it. The China card stays rhetorical until a shipment stopped, a sanction, or a UN vote says otherwise.",
    },
    {
      title: 'Taiwan: a real buffer, still a fragile one',
      body:
        "Taiwan supplied the day's one piece of genuine good news for an Asian energy importer. Taipei now estimates it has secured natural gas through September, its state-run CPC has begun planning winter procurement to avoid a supply gap, and the island has diversified crude toward roughly 60% from the United States — up from about 70% Middle East dependence in 2024 — while buying more US LNG (Bloomberg, CSIS, FDD). Analytical judgment: this is the first concrete easing of the standing vulnerability the brief has tracked since the war began, and it is real — a buyer that can name a date it is covered to is in a different position than one living cargo-to-cargo. But per §3.5.5 the structural numbers still bind: roughly a third of Taiwan's gas transits Hormuz, close to 30% of LNG comes from Qatar, the strategic buffer is eleven days — reaching the statutory fourteen only from 2027 — against about 120 days of oil cover, and summer demand runs up to 40% above February. The weekend pause helps the price, not the exposure. September is a date, not a solution, and the same Red Sea reroute Taiwan uses to escape Hormuz is the water Saudi and Houthi forces are still contesting. Diversification is progress; it is not yet resilience.",
    },
  ],
  casualtyNotes: {
    us:
      "Toll holds at 17 KIA / 432 WIA (AP/CENTCOM series); the strike pause produced no new fatality. The three most recent deaths (Iraq x1, Jordan x2) and the resolved Jordan MIA carry per Day 144. Divergent CENTCOM injury counts (290–413 WIA) reflect different windows per §3.5.3; 432 carries. Trump's 'hold Iran responsible' pledge and the new 'bridge or power plant per ship' rule keep any future maritime death pre-committed to escalation; the $67 billion supplemental and the 50-48 war-powers rebuke remain unresolved as a London coalition is floated.",
    israel:
      'No new Israeli casualties. Israel stays outside the US-Iran framework and unbound by any Hormuz pause or the London track; its readiness signal keeps a full-scale-campaign option live even as the two principals pause. June 26 Lebanon framework still rejected by Hezbollah; the Lebanon gap prior carries.',
    iran:
      "No fresh official toll as the pause halted the CENTCOM strike series. HRANA new-wave tally holds at 48+ killed / 68+ injured (minimum counts); cumulative HRANA 3,636+ with understatement caveat; Foundation of Martyrs ~3,468; US/Israeli est. 6,000+. Bushehr reported operating normally against July 7-12 satellite impact scars; IAEA absent beyond its June 1-3 Bushehr visit; ~440.9 kg of 60% and 184.1 kg of 20% HEU unverified.",
    other:
      'No confirmed new Gulf or Iraqi fatalities. Saudi Arabia and the Houthis traded strikes without a confirmed death reported; a crew death or laden-tanker sinking remains the tell to watch. Iranian fire again hit Kuwaiti power and desalination plants; Kuwait cumulative 10 killed / 115 injured. Lebanon source-split; Iraq baseline carries.',
  },
};

export default data;
