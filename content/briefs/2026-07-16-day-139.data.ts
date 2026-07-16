import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction stays escalating — and Day 139 crossed a new threshold. The blockade the last brief booked as 'real but porous' is now kinetically enforced: CENTCOM fired Hellfire missiles into the smokestack of the Curaçao-flagged M/T Belma, disabling the first tanker since the blockade resumed — an empty hull heading for Kharg Island that ignored warnings (NPR, Stars and Stripes, The Hill). A fifth consecutive day of US strikes ran two waves — a 90-minute morning round on Greater Tunb Island's coastal defenses and cruise missile sites, followed by a seven-hour afternoon campaign hitting command centers, air defense, missile and drone capabilities from Bandar Abbas to Abu Musa (CENTCOM, The Hill, Times of Israel). Iran's answer was not just kinetic but doctrinal: the IRGC declared that regional oil and gas exports 'will be either for everyone or for no one,' threatening to shut down not just Hormuz but all Middle East export routes — roughly 9 million barrels per day (RT, Washington Times, NPR). Per §3.5.3 the 'everyone or no one' language is a threat, not a capability — Iran lacks the force to close the Bab el-Mandeb or Gulf of Oman — but it signals a willingness to widen the aperture beyond the strait.",
      risk7d:
        "Seven-day risk stays extreme and sharpened by the Belma precedent. Firing on a commercial vessel — even an unladen one — is the step between turning ships back and sinking them, and the next non-compliant hull may not be empty (NPR, Stars and Stripes). Layer on Trump's refusal to rule out a ground campaign, his fresh threats to hit power plants and bridges, and his repeated references to Kharg Island — Iran's main oil export terminal — and the kinetic ceiling is rising, not holding (Fox News, Times of Israel). Iran's 'everyone or no one' threat, if acted on against a non-Hormuz chokepoint, would pull in navies and capitals currently on the sideline. The only brake is that Brent barely moved (~$84.95, +0.26%), suggesting the market still reads the cordon as porous and the threat as talk.",
      spillover:
        "Spillover stays critical, and the threat envelope widened. The IRGC's 'everyone or no one' declaration explicitly threatens energy exports beyond Hormuz — naming routes that serve US allies and implicitly targeting the Bab el-Mandeb and Gulf of Oman corridors (Washington Times, IndexBox). Iran confirmed casualties at Bandar Abbas, Bushehr, and Iranshahr, and claimed fresh strikes on the US Fifth Fleet facilities in Bahrain — crossing Gulf soil again (Al Jazeera, Press TV). China urged 'normal passage' through Hormuz, its sharpest formulation since the blockade resumed, while Trump's Kharg Island references put Iran's main export terminal in the targeting conversation, which would spike the tape globally if acted on (Bloomberg, CNBC).",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'NPR / Stars and Stripes / The Hill',
      event:
        "CENTCOM fired Hellfire missiles into the smokestack of the Curaçao-flagged M/T Belma, an empty oil tanker heading for Iran's Kharg Island that had ignored multiple warnings — disabling the first vessel since the blockade resumed and crossing from interdiction-by-turn-back to kinetic enforcement",
      summary:
        "Per §3.5.11 this is the pivotal threshold the star is reserved for: the blockade has now used lethal munitions on a commercial hull, not just navigational orders, making the next non-compliant vessel a potential sinking rather than a turn-back (NPR, Stars and Stripes, The Hill).",
      impact:
        "Firing on a tanker — even an empty one — establishes a use-of-force precedent that changes the risk calculus for every shipowner, insurer, and flag state in the Gulf; the gap between a disabled smokestack and a hull breach is one targeting decision.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'CENTCOM / The Hill / Times of Israel',
      event:
        "CENTCOM ran a fifth consecutive day of strikes with two waves in a single day — a 90-minute morning round on Greater Tunb Island's coastal defense systems and cruise missile storage, and a seven-hour afternoon campaign hitting command centers, air defense sites, missile and drone capabilities, and coastal surveillance from Bandar Abbas to Abu Musa",
      summary:
        "Per §3.5.3 the doubling from one to two waves in a day is the tempo indicator: CENTCOM is accelerating the sortie rate, not holding it, and Greater Tunb Island — at the western mouth of the strait — is a geographic escalation closer to the shipping lanes themselves (CENTCOM, The Hill).",
      impact:
        "Two-wave days compress Iran's reconstitution window and push the target set deeper into the strait's chokepoint geography; a strike on Tunb is a strike on the doorstep of the shipping lanes.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'RT / Washington Times / NPR / IndexBox',
      event:
        "The IRGC declared that regional energy exports 'will be either for everyone or for no one,' threatening to halt all Middle East oil and gas exports — roughly 9 million barrels per day — if the US blockade continues, widening the threat aperture from Hormuz closure to total regional export disruption",
      summary:
        "Per §3.5.3 the 'everyone or no one' language is a threat, not a demonstrated capability — Iran cannot physically close the Bab el-Mandeb or Gulf of Oman — but it represents a doctrinal widening from 'we close our strait' to 'nobody exports,' which if acted on even partially would pull in Saudi, Emirati and Kuwaiti export infrastructure (RT, Washington Times).",
      impact:
        "A 9-million-barrel threat, even as rhetoric, changes the market's mental model from 'Hormuz disruption' to 'regional export shutdown' and puts non-Hormuz chokepoints on the target map for the first time in this exchange.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / Press TV / LiveUAMap',
      event:
        "Iranian state media confirmed at least 15 military dead — 8 from the Air Force and Navy at Bandar Abbas and Bushehr, 7 soldiers from the 388th Brigade at Bambour Garrison in Iranshahr — plus 30 or more civilians killed across southern Iran and over 260 wounded, the first confirmed casualty batch from the fifth-day strikes",
      summary:
        "Per §3.5.3 these are Iranian-source figures, not independently verified — the Health Ministry and IRNA counts continue to diverge — but they are the first confirmed KIA from the renewed strike round, which the previous four nights had left under review (Al Jazeera, LiveUAMap).",
      impact:
        "Confirmed military and civilian dead sharpen the domestic political pressure on Tehran to escalate its response and complicate any diplomatic off-ramp; the Iranshahr strike at Bambour Garrison extends the US target footprint to southeastern Iran.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: 'CNBC / Bloomberg / Trading Economics',
      event:
        "Brent crude settled at roughly $84.95, up just 0.26%, barely moving despite the Belma interdiction, the fifth strike day, and the IRGC's regional export threat — suggesting the market has priced the blockade as porous and the 'everyone or no one' language as talk rather than capability",
      summary:
        "Per §3.5.5 the flat tape is itself a signal: the market judges that the blockade's carve-outs, the tanker's empty status, and the IRGC's inability to close non-Hormuz routes together cap the shock near $85 — but that judgment depends on no laden tanker being hit and no non-Hormuz route being tested (CNBC, Bloomberg).",
      impact:
        "For a price-taking LNG importer the $85 ceiling is holding, but the Belma precedent and the 'everyone or no one' language are exactly the events that would break it if they move from empty hulls and threats to laden cargo and action.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 543',
      delta: "+0 confirmed (fifth US strike day ran two waves; IRGC claims fresh strikes on Fifth Fleet facilities in Bahrain — Washington has not confirmed US personnel losses; assessment continuing)",
      status:
        "No confirmed new US casualties. CENTCOM ran two strike waves and disabled the M/T Belma; the IRGC claimed fresh strikes on the US Fifth Fleet in Bahrain, but Washington has confirmed no personnel losses from Gulf-base salvos, with damage assessment continuing per §3.5.3.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (Israel not a direct party to the July exchange; Lebanon seam quiet; IAF on standby per Netanyahu/Katz third-time pledges)',
      status:
        "No new Israeli casualties. Israel remains outside the direct US–Iran exchange and the Lebanon seam stayed quiet. The IAF standby posture and Netanyahu/Katz 'third time with even greater force' rhetoric carry from Day 138.",
    },
    iran: {
      cumulative:
        'LMO ~3,445 KIA · HRANA 3,681+ (est.) · MOH ~3,527 killed / 26,888+ wounded · Hengaw 6,635+ mil · 3.2M displaced',
      delta: '+~45 killed (Iranian sources: 8 Air Force/Navy at Bandar Abbas and Bushehr + 7 soldiers 388th Brigade at Bambour Garrison, Iranshahr + 30+ civilians per spokesperson Mohajerani; 260+ wounded — figures are Iranian-source, not independently verified)',
      status:
        "First confirmed casualty batch from the renewed round. Iranian state TV reported 8 military dead at Bandar Abbas/Bushehr and 7 at Bambour Garrison (Iranshahr); spokesperson Mohajerani said 30+ civilians killed across southern Iran; Health Ministry reported 260+ wounded. Figures are Iranian-source per §3.5.3. ~440.9 kg of 60% HEU at Isfahan unverified since June 2025; Pickaxe Mountain still weighed.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 73+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 64 WIA',
      delta: "+0 confirmed deaths (IRGC claims fresh strikes on Bahrain Fifth Fleet facilities — materiel damage reported, no confirmed deaths; no new maritime deaths this window)",
      status:
        "No new confirmed deaths in the Gulf theater this window. IRGC claimed strikes on the US Fifth Fleet in Bahrain; no confirmed fatalities from the salvo. Lebanon toll source-split; Iraq 119+ / 370; Gulf 33+ / 73+ carry.",
    },
  },
  exec:
    "Day 139 is the day the blockade drew blood — and Iran answered by threatening to shut down every barrel in the Middle East. CENTCOM fired Hellfire missiles into the smokestack of the Curaçao-flagged M/T Belma, an empty oil tanker heading for Iran's Kharg Island that had ignored multiple warnings — the first vessel disabled since the blockade resumed, and the crossing from interdiction-by-turn-back to kinetic enforcement (NPR, Stars and Stripes, The Hill). A fifth consecutive day of US strikes ran two waves in a single day: a 90-minute morning round on Greater Tunb Island's coastal defense systems and cruise missile storage at the western mouth of the strait, and a seven-hour afternoon campaign hitting command centers, air defense, and coastal surveillance from Bandar Abbas to Abu Musa (CENTCOM, The Hill, Times of Israel). Iran's answer was doctrinal, not just kinetic: the IRGC declared that regional energy exports 'will be either for everyone or for no one,' threatening to halt all Middle East oil and gas — roughly 9 million barrels per day — if the blockade continues, widening the aperture from 'we close our strait' to 'nobody exports' (RT, Washington Times, NPR). Iranian state media confirmed at least 15 military dead at Bandar Abbas, Bushehr and Iranshahr and 30-plus civilians killed across southern Iran — the first confirmed casualty batch from this round — while the IRGC claimed fresh strikes on the US Fifth Fleet in Bahrain (Al Jazeera, Press TV, LiveUAMap). Trump refused to rule out a ground campaign and threatened power plants and bridges if Tehran does not return to the table; he referenced Kharg Island again (Fox News). Brent settled at roughly $84.95, up just 0.26% — the market reading the blockade as priced in, the Belma as an empty hull, and the 'everyone or no one' language as talk. China urged 'normal passage' through Hormuz (Bloomberg). Thirty-day ceasefire probability drops to 10 — the blockade now shoots, and Iran's threat envelope is widening.",
  implications: [
    {
      title:
        "The blockade crossed from interdiction to kinetic enforcement — and the next hull may not be empty",
      body:
        "The Belma is the inflection. On Day 138 the blockade turned ships back with navigational orders; on Day 139 it fired Hellfire missiles into a tanker's smokestack (NPR, Stars and Stripes, The Hill). The vessel was unladen and Curaçao-flagged — a low-consequence target that let CENTCOM demonstrate willingness without sinking cargo or killing crew — but the precedent is load-bearing: every shipowner and insurer in the Gulf now knows the US will shoot, not just hail. Analytical judgment under the multi-clock framework: the energy-infrastructure clock is now the only one that matters in the near term. Per §3.5.6 the gap between a disabled smokestack and a hull breach is one targeting decision, and the next non-compliant vessel may be laden, Chinese-flagged, or both. The market shrugged because the Belma was empty; a laden tanker hit with Hellfires would not be shrugged off. Insurance war-risk premiums, already elevated, will ratchet further — and coverage, not cargo, remains the binding constraint for transit. For Taiwan the signal is direct: any vessel carrying Hormuz-origin crude or LNG now faces not just rerouting risk but fire risk, and the flag-state question (would China escort its tankers?) moves from hypothetical to operational.",
    },
    {
      title:
        "Iran's 'everyone or no one' widens the threat from Hormuz to all regional exports — rhetoric that reshapes the risk map even if it stays rhetoric",
      body:
        "The IRGC's declaration that Middle East energy exports 'will be either for everyone or for no one' is analytically new even if operationally familiar — it is the first time Tehran has explicitly framed its response as targeting the entire region's export capacity, not just the strait it controls (RT, Washington Times, IndexBox). The arithmetic is severe: roughly 9 million barrels per day pass through non-Hormuz routes the IRGC is now claiming as fair game, including Saudi Red Sea terminals, Emirati pipelines bypassing Hormuz, and Kuwaiti Gulf-coast loading (NPR, Washington Times). Per §3.5.3 this is a threat, not a capability — Iran lacks the naval mass to close the Bab el-Mandeb, the cruise-missile inventory to sustain strikes on Ras Tanura, and the mine-laying reach to block Abu Dhabi's Fujairah pipeline. But the doctrinal shift matters: it reframes Iran's response from a defensive act (closing its own strait) to an offensive one (denying everyone's exports), which changes the coalition calculus. Saudi Arabia, the UAE and Kuwait — already absorbing Iranian fire on their bases — would now face direct threats to their export infrastructure, potentially pulling them from reluctant basing hosts to active belligerents. The market's flat response ($84.95) is a bet that the IRGC cannot execute; if a single non-Hormuz tanker or terminal is hit, that bet reprices overnight.",
    },
    {
      title:
        "Taiwan: the price ceiling held but the threat envelope expanded — and the Belma precedent puts Hormuz-origin cargoes at fire risk",
      body:
        "For Taiwan, Day 139 adds a new category of risk. The Belma interdiction means that Hormuz-origin cargoes now face not just rerouting or turn-back risk but kinetic risk — a US Hellfire into a tanker's superstructure, even on an empty hull, changes the insurance math for every laden vessel behind it (NPR, Stars and Stripes). Brent settled at ~$84.95, barely up, because the market reads the blockade as porous and the Belma as a one-off demonstration on an empty ship. That reading holds only until a laden vessel is hit or resists. The §3.5.6 exposure is unchanged: roughly 60% of Taiwan's crude and about a third of its gas transit Hormuz, against an 11-day LNG buffer versus ~120 days of oil, with Qatar still supplying roughly a third of Taiwan's LNG (CSIS, Atlantic Council). The IRGC's 'everyone or no one' threat, if acted on even partially, would threaten the non-Hormuz alternatives Taiwan is trying to diversify into — Saudi Red Sea loadings, Emirati pipeline-bypass cargoes — closing the escape routes alongside the main channel. Taipei's durable hedges remain slow: US crude ~60% of imports, 25% US LNG by 2029, Maanshan and Kuosheng restarts 2028–2029. TSMC's 2026 CapEx near 8% cushions the balance sheet but not the tank farm, which is still draining under an $85 tape that could reprice to $95-plus on a single laden-tanker incident.",
    },
  ],
  casualtyNotes: {
    us:
      "No confirmed new US casualties. IRGC claims strikes on Fifth Fleet (Bahrain); Washington confirms no personnel losses; assessment continuing.",
    israel:
      "No new Israeli casualties. IAF on standby; 'third time with even greater force' posture carries.",
    iran:
      "First confirmed KIA from the renewed round: 15 military dead (8 Bandar Abbas/Bushehr; 7 Iranshahr 388th Brigade) + 30+ civilians (Mohajerani) + 260+ wounded. Iranian-source; unverified.",
    other:
      "No new confirmed Gulf deaths this window. IRGC Bahrain Fifth Fleet claims = materiel. Lebanon source-split; Iraq 119+ / Gulf 33+ carry.",
  },
};

export default data;
