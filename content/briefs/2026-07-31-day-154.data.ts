import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds escalating and sharpens. The de-escalatory prop of the past two briefs — a five-night halt on strikes against Iranian soil — collapsed: after Iran's July 28 salvo on US forces in Jordan, CENTCOM ran a two-hour 'heavy wave' against dozens of IRGC targets (OANN, US News, Al Jazeera). Brent topped $92 intraday before easing near $90, Oman broke with Iran at the UN over the transit fee, and the Houthis declared a maritime embargo of Saudi Arabia with Bab el-Mandeb traffic down 34% (Fortune, National Security Journal, CNBC). Per §3.5.3 the 'pause for talks' was one-directional from the start; the two-way strikes on Iranian soil are the fact.",
      risk7d:
        "Seven-day risk holds critical. The kinetic exchange is now active on Iranian soil, not merely threatened: the US struck dozens of IRGC sites and the IRGC has pledged retaliation, while Tasnim quotes an Iranian military source threatening regional energy 'in which the United States has interests' and Trump threatens 'major military punishment' (Al Jazeera, Tasnim, CBS). Per §3.5.6 the structural priors carry — the three-week collapse pattern that ended the last three lulls has reasserted on schedule, Trump's 'bridge or power plant per ship' rule still converts any maritime or US death into a pre-committed exchange, and Iran's counter to the heavy wave is the dominant near-term risk.",
      spillover:
        "Spillover holds critical. Brent topped $92 intraday on the US heavy wave before easing near $90, rebuilding the premium the Day 152 pause had unwound; Goldman's $120 fourth-quarter tail is intact and the $150-200 dual-closure tail is one sinking away. The Houthis declared a maritime embargo of Saudi Arabia and hit two oil tankers, cutting Bab el-Mandeb transits 34% (Kpler) as Riyadh halted then pledged to resume Red Sea exports. Iran threatened to strike regional energy infrastructure, and the Jask desalination plant was destroyed — the water-as-target-class prior live again. The war now spans Iranian soil, Iraq, and both maritime chokepoints at once.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'OANN / CNN / US News / Al Jazeera / CENTCOM',
      event:
        "The United States struck back after Iran's July 28 salvo: CENTCOM said it ran a two-hour 'heavy wave' beginning 8 p.m. ET Wednesday against dozens of IRGC targets in Iran — military command centers, missile and drone facilities, coastal-surveillance and defense sites, and maritime capabilities — the first US strikes on Iranian soil since the five-night interruption. 'It's our turn to hit them,' Trump said.",
      summary:
        "Per §3.5.3 the pause was one-directional and it broke on schedule: the US had held its strikes on Iran while Tehran fired on US bases, and Washington has now resumed two-way strikes on Iranian soil. The longest interruption since July 7 is over.",
      impact:
        "The active-deadline clock resolves negatively — the interruption did not hold — and the war returns to direct US-Iran strikes on Iran itself. The IRGC's pledged retaliation is the next shoe.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'IRNA / Tasnim / CBS / Al Jazeera',
      event:
        "Iranian state media reported explosions at Bandar Abbas and on Qeshm Island, where residents said a missile struck a residential area and a couple and their child were killed; a seawater pumping station and power transformer at the Jask desalination plant were reported 'completely destroyed,' cutting water to twenty villages. Tasnim quoted a military source threatening to strike 'infrastructure and bridges across the region, including energy facilities in which the United States has interests.'",
      summary:
        "Per §3.5.6 the water-as-target-class prior is live again, and the escalation ladder is now symmetric: Iran has published its own infrastructure-for-infrastructure pledge to mirror Trump's 'bridge or power plant per ship' rule.",
      impact:
        "Fresh Iranian civilian deaths and destroyed water infrastructure deepen the humanitarian clock; the IRGC's retaliation pledge puts US and Gulf bases — Kuwait and Bahrain among recent targets — back on watch.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Fortune / Forbes / Trading Economics / OilPrice',
      event:
        "Brent crude topped $92 a barrel intraday — reaching about $92.65 early July 30 — before easing toward $90, extending gains after the US carried out its fresh wave of strikes on Iran and raising concerns over supply disruption. The move rebuilt the war-risk premium that the Day 152 pause had unwound toward the ~$86 baseline.",
      summary:
        "Per §3.5.5 the tape is the cleanest read of the reversal: the premium that priced out on the pause priced back in and then some once the US resumed strikes on Iranian soil.",
      impact:
        "A screen price back above $90 tells traders the de-escalation was a head-fake; the distance to the $150-200 dual-closure tail is unchanged — one sinking away.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'CNBC / The Hill / Gulf News / Security Council Report',
      event:
        "The Houthis declared a maritime embargo of Saudi Arabia and deployed missiles and drones near Bab el-Mandeb after attacking two Saudi oil tankers; ship-tracking firm Kpler logged a 34% one-day drop in Bab el-Mandeb transits as Saudi cargoes turned back, and Riyadh briefly halted Red Sea oil exports before saying it would resume them.",
      summary:
        "Per §3.5.6 the second chokepoint is now a Houthi-Saudi war within the war — on Yemen's own ledger, beyond Tehran's to trade, and no longer closed by any US-Iran outcome.",
      impact:
        "The energy-infrastructure clock's Day 152 relief is fully undone; roughly 12% of global seaborne oil transits Bab el-Mandeb, and a declared embargo institutionalizes the disruption a toll would have monetized.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: 'National Security Journal / Al Arabiya / Marine Insight / Forbes',
      event:
        "Oman broke publicly with Iran over Hormuz, formally notifying the UN that it opposes Tehran's mandatory transit-fee plan — a move one outlet said 'guts Tehran's $40 billion toll dream' — even as Omani FM Al Busaidi kept floating a voluntary, Malacca-style charge to maintain the waterway. Washington continues to call any mandatory fee 'illegal' and demands a return to pre-war free passage.",
      summary:
        "Per §3.5.3 this is process moving against agreement: the mediator itself now opposes the fee at its center, and per §3.5.6 the toll-institutionalization prior has lost its own broker.",
      impact:
        "The two-corridor architecture — the most developed diplomacy of the war — is further from signature than a week ago; the fee is now contested by Gulf-backer, Iranian-demander, US-'illegal,' and now Omani-opposed lines at once.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM series; ~96% returned to duty)',
      delta: "+0 KIA / +0 WIA confirmed; Iran's July 28 salvo was intercepted with no US casualty, and the US July 29-30 heavy wave was offensive; IRGC retaliation pending",
      status:
        "The toll holds at 17 KIA / 432 WIA on the AP/CENTCOM series. Iran's July 28 ballistic-missile salvo at a US air base and a CENTCOM facility in Jordan was intercepted with no reported American casualties, and the two-hour US 'heavy wave' on July 29-30 struck dozens of IRGC targets inside Iran — an offensive operation. The three deaths that lifted the toll to 17 (one in northern Iraq, two at Muwaffaq Salti in Jordan) carry per Day 144; divergent CENTCOM injury counts (290-413 WIA) reflect different windows per §3.5.3, and 432 carries. Per §3.5.3 the IRGC's pledged retaliation for the heavy wave is the live risk — a single US or allied death would flip the ledger and trigger Trump's 'bridge or power plant per ship' rule; the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (Israel not a direct party to the US-Iran exchange)',
      status:
        "No new Israeli casualties. Israel remains outside the US-Iran framework and unbound by the Oman channel or any Hormuz corridor formula; its standing readiness to strike Iran again keeps a full-scale-campaign option live even as Washington runs the direct exchange. The Lebanon gap prior (§3.5.6) carries: Israel continues operations against Hezbollah despite the halt-then-resumption on Iran, the June 26 framework remains rejected, and cross-border fire persists with no ceasefire in sight.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta: 'No fresh official MOH toll; new civilian deaths reported (a couple and their child on Qeshm) and the Jask desalination plant destroyed as the US heavy wave hit dozens of IRGC sites',
      status:
        "No updated official Iranian toll issued as the US resumed strikes on Iranian soil. Iranian state media reported explosions at Bandar Abbas and Qeshm — where a couple and their child were killed — and the Jask desalination plant 'completely destroyed,' cutting water to twenty villages; CENTCOM said it struck dozens of IRGC command, missile, drone, coastal-defense and maritime sites. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. The IAEA has run no verification since February 28 and remains locked out; ~440.9 kg of 60% and 184.1 kg of 20% HEU stay unverified and, per Grossi, likely still at Isfahan.",
    },
    other: {
      cumulative:
        'Iraq 148+ KIA / 402+ WIA (incl. ≥20 PMF killed / 32 wounded in the Day 153 US-Saudi strikes) · Gulf 33+ KIA / 74+ WIA, of which Kuwait 10 killed / 115 injured · Lebanon source-split: Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129',
      delta: 'No confirmed new deaths; the Houthi embargo of Saudi Arabia and attacks on two oil tankers produced no confirmed crew fatalities reported in the window',
      status:
        "No confirmed new deaths in the 'other' ledger. The Houthis declared a maritime embargo of Saudi Arabia and struck two Saudi oil tankers, but no crew fatalities were reported; Saudi Arabia halted then pledged to resume Red Sea oil exports. A tanker-crew death or laden-tanker sinking remains the maritime tell most likely to reprice oil and trigger Trump's rule. The Iraq baseline carries the Day 153 militia losses, Kuwait holds at 10 killed / 115 injured, and Lebanon stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129).",
    },
  },
  exec:
    "Day 154 ended the pause. After Iran's July 28 ballistic-missile salvo on US forces in Jordan, the United States struck back: CENTCOM ran a two-hour 'heavy wave' beginning 8 p.m. ET Wednesday against dozens of IRGC targets — command centers, missile and drone facilities, coastal-defense and maritime sites — the first US strikes on Iranian soil since the five-night interruption Trump had cast as space for talks (OANN, CNN, US News, Al Jazeera). 'It's our turn to hit them,' Trump said; the IRGC pledged retaliation and Tehran threatened to hit regional energy 'in which the United States has interests.' Iranian state media reported explosions at Bandar Abbas and Qeshm — where a couple and their child were killed — and the Jask desalination plant destroyed, cutting water to twenty villages (IRNA, Tasnim). The tape re-priced the war back in: Brent topped $92 intraday before easing near $90, up from roughly $89 (Fortune, Trading Economics). Oman broke publicly with Iran, formally telling the UN it opposes Tehran's mandatory Hormuz transit fee even as it floats a voluntary, Malacca-style charge — gutting the toll's own broker (National Security Journal, Al Arabiya). And the Houthis declared a maritime embargo of Saudi Arabia; Kpler logged Bab el-Mandeb traffic down 34% as Saudi cargoes turned back (CNBC, The Hill). Per §3.5.3 the 'pause for talks' was always a one-directional US claim; the two-way strikes on Iranian soil are the fact. Direction stays escalating; seven-day risk critical; spillover critical; the thirty-day ceasefire probability slips to 11.",
  implications: [
    {
      title: 'The pause is dead — the US crossed back onto Iranian soil',
      body:
        "The five-night halt on strikes against Iranian soil — the longest since the July 7 resumption and the analytical spine of the Day 152-153 briefs — is over. After Iran's July 28 salvo on US forces in Jordan, CENTCOM ran a two-hour 'heavy wave' from 8 p.m. ET Wednesday against dozens of IRGC targets: command centers, missile and drone facilities, coastal-surveillance and defense sites, and maritime capabilities (OANN, US News, Al Jazeera). Under the multi-clock framework the active-deadline clock has resolved — the interruption did not survive — and the interceptor and energy clocks turn with it. Analytical judgment: per §3.5.3, Trump's framing that strikes were merely 'paused' for talks Iran 'requested' was a one-directional claim from the outset, and it collapsed on its own roughly three-week schedule; the two-way exchange on Iranian soil is now the fact, not the risk. The ladder is hardening symmetrically: against Trump's 'bridge or power plant per ship' pledge, Tasnim now quotes an Iranian military source threatening to strike 'infrastructure and bridges across the region, including energy facilities in which the United States has interests' (Tasnim, CBS). IRNA reported a couple and their child killed on Qeshm and the Jask desalination plant destroyed, cutting water to twenty villages — the water-as-target-class prior (§3.5.6) live again. The IRGC has pledged retaliation; a US or allied death from the expected Iranian counter is the single event that would trigger Trump's rule.",
    },
    {
      title: 'Toll politics fracture — Oman breaks with Tehran as the Houthis embargo Saudi Arabia',
      body:
        "Both chokepoints moved, in opposite directions on the toll question. At Hormuz the mediator itself broke ranks: Oman formally told the UN it opposes Iran's mandatory transit fee, gutting what one outlet called Tehran's '$40 billion toll dream,' even as Muscat keeps floating a voluntary, Malacca-style charge to fund the waterway (National Security Journal, Al Arabiya, Forbes). Washington still calls any mandatory fee 'illegal' and demands pre-war free passage. Analytical judgment: per §3.5.3 this is process moving against agreement — the toll-institutionalization prior (§3.5.6) just lost its own broker, and the two-corridor architecture, the most developed of the war, is further from signature than a week ago. At Bab el-Mandeb the pressure runs the other way: the Houthis declared a maritime embargo of Saudi Arabia, and Kpler logged transits down 34% in a day as Saudi cargoes turned back and Riyadh briefly halted Red Sea oil exports before pledging to resume them (CNBC, The Hill, Gulf News). Under the energy-infrastructure clock the second chokepoint is now a Houthi-Saudi war within the war, on Yemen's own ledger and beyond Tehran's to trade. The market read the whole board as escalation: Brent topped $92 intraday on the US heavy wave before easing near $90, rebuilding the premium the Day 152 pause had unwound (Fortune, Trading Economics, OilPrice). The dual-closure tail ($150-200) is still one sinking away.",
    },
    {
      title: 'Taiwan: the war premium and the gas gap both widen again',
      body:
        "For Taiwan the reversal lands, again, on both the route and the bill — and this time the strait's own broker is wobbling. Brent's climb above $92 before settling near $90 lifts the import bill for a market at 4.2% energy self-sufficiency, while the Houthi embargo of Saudi Arabia and the 34% Bab el-Mandeb drop push Asian buyers back onto the longer Suez detour (Fortune, CNBC, CSIS). Analytical judgment: per §3.5.5 the structural numbers bind hardest on a re-escalating day. Taiwan is 99% import-dependent for gas and drew about a third of its 23.6 Mt of LNG from the Gulf — nearly 8 Mt from Qatar — yet holds only about 11 days of gas inventory against roughly 120 days of oil cover; crude is now about 60% US-sourced, up from about 70% Middle Eastern in 2024 (CSIS, Atlantic Council, IFRI). The Ras Laffan damage still caps roughly 17% of Qatar's LNG capacity under a force majeure that may run three to five years. The crude-side diversification cushions the oil move; the gas side has no such buffer, and the Hormuz 'solution' on the table would still reopen the strait a third of Taiwan's gas crosses on Iranian-permission terms. Per §3.5.10 the fresh development is real and adverse — Oman's UN break neither closes the gas gap nor removes the permission regime, and LNG is secured only through September with the statutory 14-day buffer not due until 2027. Both the strait and its bypass are contested again.",
    },
  ],
  casualtyNotes: {
    us:
      "Toll holds 17 KIA / 432 WIA (AP/CENTCOM series); the July 28 salvo was intercepted with no US casualty and the July 29-30 heavy wave was offensive. IRGC retaliation for the heavy wave is the live risk; a single US/allied death triggers Trump's 'bridge or power plant per ship' rule. $67B supplemental and 50-48 war-powers rebuke unresolved.",
    israel:
      "No new Israeli casualties. Israel stays outside the US-Iran framework and the Oman channel; the Lebanon gap prior carries — operations against Hezbollah continue, June 26 framework rejected, no ceasefire.",
    iran:
      "No fresh official MOH toll as the US resumed strikes on Iran; new civilian deaths reported (a couple and their child on Qeshm) and the Jask desalination plant destroyed, cutting water to 20 villages. HRANA 3,636+; Foundation of Martyrs ~3,468; MOH ~3,559 / 27,400+; US/Israeli est. 6,000+. IAEA no verification since Feb 28; HEU unverified, likely Isfahan.",
    other:
      "No confirmed new deaths; the Houthi embargo of Saudi Arabia and strikes on two oil tankers produced no reported crew fatalities. Iraq carries the Day 153 militia losses; Kuwait 10 killed / 115 injured; Lebanon source-split. A tanker-crew death is the maritime tell.",
  },
};

export default data;
