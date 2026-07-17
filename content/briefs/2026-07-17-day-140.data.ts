import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction stays escalating, and Day 140 added a second chokepoint. Iran ordered Yemen's Houthis to stand ready to close the Bab el-Mandeb Strait if the US strikes its power infrastructure — IRGC officers in Yemen reportedly holding the trigger, missiles and drones already positioned — the first time both Hormuz and the Red Sea gateway have been threatened at an operational, not rhetorical, level (Foreign Policy, Time, Fox News). CENTCOM ran a sixth consecutive strike day on command centers, air defense and missile sites from Bandar Abbas to the coast, and Iranian state media said the strikes reached the Tehran area for the first time in this round (Euronews, Al Jazeera, The Epoch Times). Per §3.5.3 the Houthi closure is a threat, not a demonstrated capability, but it converts Day 139's 'everyone or no one' slogan into a specific mechanism on a specific waterway.",
      risk7d:
        "Seven-day risk stays extreme, now bracketed by two deadlines. Trump set a one-week fuse — 'next week comes the power plants' — vowing to destroy Iran's power plants and bridges and to 'take Kharg Island... and assume total control of their Oil and Gas Markets, much like Venezuela' (Washington Examiner, The Hill). Iran answered that it would 'crush' regional targets and called Hormuz a 'red line' (CNBC, Al Jazeera). The one-week fuse and the Bab el-Mandeb trigger are the same fuse: the Houthi closure is conditioned on precisely the power-plant strike Trump promised. The only brake is the tape — Brent settled near $84.63, down 0.37%, still pricing the standoff as porous and the second-chokepoint threat as talk (Trading Economics, Bloomberg).",
      spillover:
        "Spillover stays critical and broadened. Iran mounted its widest Gulf retaliation yet — two ballistic-missile waves at a US air base in Jordan and drone attacks on US facilities in Kuwait and Bahrain, targeting air defense, fuel storage and radar; Kuwait reported hostile drones and Bahrain sounded air-raid alarms (Euronews, Al Jazeera). Saudi Arabia and other Arab states condemned Iran's attacks, straining the coalition from the opposite end even as Gulf hosts absorb fire (Arab News). China called the civilian toll a 'red line' and urged operations stop; Russia warned of an 'economic earthquake' and pledged a UN Security Council push; Britain designated the IRGC, drawing an Iranian summons of the British ambassador (Washington Institute, FDD).",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'Foreign Policy / Time / Fox News',
      event:
        "Iran ordered Yemen's Houthis to stand ready to close the Bab el-Mandeb Strait if the US strikes Iranian power infrastructure, with IRGC officers already in Yemen reportedly holding the trigger and Houthi missiles and drones positioned near the strait — the first time both Hormuz and the Red Sea gateway have been threatened at an operational rather than rhetorical level",
      summary:
        "Per §3.5.11 this is the pivotal threshold the star is reserved for: Day 139's 'everyone or no one' rhetoric now has a mechanism, transferring the Red Sea chokepoint from a Yemeni militia asset to the same Iranian command chain that governs the Hormuz threat (Foreign Policy, Time, Fox News).",
      impact:
        "A simultaneous Hormuz-plus-Bab el-Mandeb closure would take out roughly 30% of seaborne oil trade and is modeled at Brent $150-200; it also closes the Red Sea reroute Gulf producers built to bypass Hormuz, shutting the escape route and the main door at once.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Euronews / Al Jazeera / OANN / The Epoch Times',
      event:
        "CENTCOM ran a sixth consecutive day of strikes on Iranian command centers, air defense, missile and drone sites, and coastal surveillance from Bandar Abbas to the coast; Iranian state media said the strikes reached the Tehran area for the first time in this renewed round",
      summary:
        "Per §3.5.3 the Tehran-area claim is Iranian-sourced and not independently confirmed, but the sixth straight strike day is CENTCOM-acknowledged and answers Day 139's open question — the tempo did not break, it extended (Euronews, Al Jazeera, OANN).",
      impact:
        "Strikes reaching the Tehran area — if confirmed — would push the target set from the coastal strait geography into the political heartland, raising the ceiling on what any Iranian response has to answer for.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Euronews / Al Jazeera / Arab News',
      event:
        "Iran mounted its widest Gulf retaliation yet — two waves of ballistic missiles at a US air base in Jordan and drone attacks on US facilities in Kuwait and Bahrain, targeting air defense, fuel storage and radar; Kuwait reported hostile drones and Bahrain sounded air-raid alarms",
      summary:
        "Per §3.5.3 the IRGC framed the Jordan strikes as retaliation for a US attack it claimed hit near a children's cancer hospital — an Iranian claim not independently verified — while Saudi Arabia and Arab states condemned Iran's attacks on the three states (Euronews, Al Jazeera, Arab News).",
      impact:
        "Adding Jordan to the Kuwait-Bahrain target set widens Iran's retaliation footprint and draws open Arab-government condemnation, straining the basing coalition from both ends — hosts absorbing fire and now condemning the source of it.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Washington Examiner / The Hill / CNBC',
      event:
        "Trump set a one-week deadline — 'next week comes the power plants' — vowing to destroy Iran's power plants and bridges 'unless they get to the table,' and to 'take Kharg Island... and assume total control of their Oil and Gas Markets, much like Venezuela,' as Iran warned it would 'crush' regional targets and called Hormuz a 'red line'",
      summary:
        "Per §3.5.3 this is coercion, not diplomacy: the 'unless they negotiate' clause keeps a nominal table, but the instrument is a dated countdown to infrastructure strikes, and the Venezuela framing recasts the aim as seizing Iran's export economy (Washington Examiner, The Hill, CNBC).",
      impact:
        "The one-week fuse is the same trigger as the Bab el-Mandeb order — Iran conditioned the Houthi closure on exactly the power-plant strike Trump just promised — so a single infrastructure strike could open a second chokepoint.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: 'Trading Economics / Bloomberg',
      event:
        "Brent crude settled near $84.63, down 0.37%, barely moving despite the sixth strike day, Iran's widest Gulf barrage, and the Bab el-Mandeb order — the market still pricing the crisis as a porous single-chokepoint standoff rather than the dual-closure tail",
      summary:
        "Per §3.5.5 the flat tape is itself the signal: traders judge that carve-outs, an unproven Houthi closure, and no laden-tanker hit cap the shock near $85 — a judgment that holds only until a second chokepoint is tested or a loaded vessel is struck (Trading Economics, Bloomberg).",
      impact:
        "For a price-taking LNG importer the $85 ceiling is holding, but the gap between the tape and the $150-200 dual-closure scenario is now the whole trade; the market is short the tail Iran just armed.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 543',
      delta: "+0 confirmed (Iran's widest Gulf barrage yet hit US bases in Jordan, Kuwait and Bahrain; Washington has not confirmed personnel losses; assessment continuing)",
      status:
        "No confirmed new US casualties. Iran fired two ballistic-missile waves at a US air base in Jordan and drones at US facilities in Kuwait and Bahrain, targeting air defense, fuel storage and radar; Washington has confirmed no personnel losses per §3.5.3, with damage assessment continuing.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (Israel not a direct party; Katz-Hegseth coordination call overnight; Netanyahu to travel to Washington Saturday seeking a Trump meeting; IAF on standby)',
      status:
        "No new Israeli casualties. Israel stays outside the direct exchange, but Defense Minister Katz spoke with US SecDef Hegseth on Iran operations, Netanyahu planned a Saturday Washington trip seeking a Trump meeting, and hundreds of IAF planes remained on standby. Katz: IDF 'alert and prepared' to resume 'with even greater force.'",
    },
    iran: {
      cumulative:
        'LMO ~3,445 KIA · HRANA 3,681+ est. (documented 1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,540 killed / 27,200+ wounded · Hengaw 6,635+ mil · 3.2M displaced',
      delta: '+~13 killed / +~300 wounded (Health Ministry consolidated the renewed round at 35+ killed and 300+ wounded, incl. at least 3 women and 6 children among the wounded; sixth-day strikes said to reach the Tehran area — figures are Iranian-source, not independently verified)',
      status:
        "Iran's Health Ministry put the renewed round's toll at 35-plus killed and 300-plus wounded as counts consolidated, with sixth-day strikes said to reach the Tehran area for the first time. Figures are Iranian-source per §3.5.3; HRANA documents 3,636 (1,221 military / 1,701 civilian / 714 unclassified) and US/Israeli estimates run to 6,000+. ~440.9 kg of 60% HEU at Isfahan unverified since June 2025; Pickaxe Mountain still weighed.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 73+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 64 WIA',
      delta: "+0 confirmed deaths (Iran's barrage on US bases in Jordan, Kuwait and Bahrain hit infrastructure — air defense, fuel storage, radar — with no confirmed fatalities; Saudi Arabia and Arab states condemned the attacks)",
      status:
        "No new confirmed deaths in the Gulf theater this window. Iran's missile-and-drone barrage struck US bases in Jordan, Kuwait and Bahrain with no confirmed fatalities; Arab states condemned the attacks. Lebanon toll source-split; Iraq 119+ / 370; Gulf 33+ / 73+ carry.",
    },
  },
  exec:
    "Day 140 is the day the war grew a second chokepoint. Iran ordered Yemen's Houthis to stand ready to close the Bab el-Mandeb Strait if the US strikes Iranian power infrastructure — with IRGC officers already in Yemen holding the trigger and Houthi missiles and drones reportedly in position — the first time both Hormuz and the Red Sea gateway have been threatened at an operational, not merely rhetorical, level (Foreign Policy, Time, Fox News). CENTCOM ran a sixth consecutive day of strikes that Iranian state media said reached the Tehran area for the first time this round, alongside command centers and air defense from Bandar Abbas to the coast (Euronews, Al Jazeera, The Epoch Times). Iran mounted its widest Gulf retaliation yet — two ballistic-missile waves at a US air base in Jordan and drone attacks on US facilities in Kuwait and Bahrain; Saudi Arabia and Arab states condemned the strikes (Euronews, Arab News). Trump set a one-week fuse — 'next week comes the power plants' — vowing to knock out Iran's power plants and bridges and to 'take Kharg Island... and assume total control of their Oil and Gas Markets, much like Venezuela'; Iran warned it would 'crush' regional targets and called Hormuz a 'red line' (Washington Examiner, The Hill, CNBC). Yet Brent settled near $84.63, down 0.37%, pricing none of the $150-200 dual-closure tail (Trading Economics, Bloomberg). China called the civilian toll a 'red line'; Russia warned of an 'economic earthquake'; Britain designated the IRGC (Washington Institute, Tasnim). Thirty-day ceasefire probability falls to 8 — the war now has two chokepoints and a one-week infrastructure clock.",
  implications: [
    {
      title:
        "The war grew a second chokepoint — Bab el-Mandeb moved from rhetoric to an Iran-controlled operational trigger",
      body:
        "Day 139's 'everyone or no one' was a slogan; Day 140 gave it a mechanism. Iran ordered the Houthis to stand ready to close the Bab el-Mandeb Strait if the US strikes Iranian power infrastructure, with IRGC officers in Yemen reportedly holding the decision and missiles and drones already positioned (Foreign Policy, Time, Fox News). The shift is structural: it moves the Red Sea gateway from a Yemeni militia asset to the same Iranian command chain that governs the Hormuz threat — the first time both chokepoints have been menaced operationally, not just rhetorically. The arithmetic is why it matters. Saudi Arabia and the UAE built their Hormuz workarounds — the East-West pipeline to the Red Sea, Fujairah's bypass — precisely to escape a strait closure; a Bab el-Mandeb closure walks those cargoes into Houthi missile range, shutting the escape route and the main door at once. Analysts model a simultaneous closure at roughly 30% of seaborne oil trade and Brent $150-200 (Foreign Policy, Time). Per §3.5.3 this is a threat, not a demonstrated capability — whether the Houthis can close the strait against US and allied naval power is contested. But under the multi-clock framework the energy-infrastructure clock is now two-dimensional, and the trigger Iran named — a US strike on its power plants — is exactly what Trump promised for 'next week.'",
    },
    {
      title:
        "Trump's one-week infrastructure ultimatum turned coercion into a countdown — and Iran answered 'crush'",
      body:
        "Trump converted standing threats into a dated deadline: 'next week comes the power plants,' vowing to destroy Iran's power plants and bridges 'unless they get to the table,' and to 'take Kharg Island... and assume total control of their Oil and Gas Markets, much like Venezuela' (Washington Examiner, The Hill). This is an active-deadline clock with a one-week fuse, and the Venezuela framing recasts the aim from coercing talks to seizing Iran's export economy. Per §3.5.3 it is coercion, not diplomacy: a table nominally exists ('unless they negotiate'), but the instrument is a countdown to infrastructure strikes, not an offer. Iran hardened in kind — warning it would 'crush' regional targets if the threats are carried out, and framing Hormuz as a 'red line' (CNBC, Al Jazeera). The facts track the rhetoric, not a climb-down: a sixth consecutive strike day that reached the Tehran area, and Iran's widest Gulf retaliation yet — ballistic missiles at a US base in Jordan, drones on Kuwait and Bahrain (Euronews, Al Jazeera). The coalition strain now cuts both ways: Saudi Arabia and Arab states condemned Iran's attacks, while Netanyahu's Saturday Washington trip and the Katz-Hegseth call show Israel edging from standby toward the board. Critically, the one-week fuse and the Bab el-Mandeb trigger are the same fuse — a US power-plant strike lights both.",
    },
    {
      title:
        "Taiwan: the tape still says $85 while the map now has two doors to close",
      body:
        "For Taiwan the danger on Day 140 is not the price — Brent settled near $84.63, down 0.37% — but the geometry behind it (Trading Economics, Bloomberg). The market is pricing a porous single-chokepoint standoff; it is not pricing the dual-closure scenario the Bab el-Mandeb order put on the table, which analysts model at $150-200 (Foreign Policy, Time). The §3.5.6 exposure is now more exposed: roughly 60% of Taiwan's crude and about a third of its gas transit Hormuz, against an 11-day LNG buffer versus ~120 days of oil, with Qatar still supplying about a third of Taipei's LNG — and Qatari cargoes exit through Hormuz specifically, so a Hormuz-plus-Red Sea squeeze hits the exact molecules Taiwan most depends on. The cruel twist: Bab el-Mandeb closes the reroute. The Red Sea path suppliers would use to bypass a blocked Hormuz is the very waterway Iran is now readying the Houthis to shut. Taipei's durable hedges remain slow — US crude ~60% of imports, 25% US LNG by 2029, Maanshan and Kuosheng restarts 2028-2029 — and none help inside a one-week window. TSMC's 2026 CapEx near 8% cushions the balance sheet, not the tank farm, still draining under an $85 tape that a single laden-tanker hit or Bab el-Mandeb action would reprice toward $150. Insurance, not cargo, stays the binding constraint, and dual-chokepoint risk ratchets premiums further.",
    },
  ],
  casualtyNotes: {
    us:
      "No confirmed new US casualties. Iran's widest Gulf barrage yet (Jordan ballistic waves; Kuwait/Bahrain drones) hit infrastructure; Washington confirms no personnel losses; assessment continuing.",
    israel:
      "No new Israeli casualties. Katz-Hegseth coordination call; Netanyahu to Washington Saturday; IAF on standby, 'even greater force' posture carries.",
    iran:
      "Health Ministry consolidated the renewed round at 35+ killed / 300+ wounded; sixth-day strikes said to reach the Tehran area. Iranian-source, unverified. HRANA documents 3,636 (1,221 mil / 1,701 civ / 714 unclassified).",
    other:
      "No new confirmed Gulf deaths. Iran barrage on Jordan/Kuwait/Bahrain = infrastructure, no confirmed fatalities; Arab states condemned. Lebanon source-split; Iraq 119+ / Gulf 33+ carry.",
  },
};

export default data;
