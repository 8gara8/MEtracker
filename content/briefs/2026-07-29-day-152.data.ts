import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds at mixed, but the de-escalatory tilt hardened and, for the first time, showed up in hard data. The strike pause ran into a fourth day, Iran's army spokesman said Tehran had halted its retaliatory operations too, Bab el-Mandeb transits recovered to 28 vessels, and Brent slid back to the roughly $86 baseline (Bloomberg, Al-Monitor, Trading Economics). Against that easing, per §3.5.3, the pause is unsigned and Tehran still says it has 'no negotiations with the United States' while widening its shipping threats, and the barrels are moving on dark transits under a standing Houthi embargo. A calmer day now visible in prices and ship counts is real, but it is convergent risk management, not a signed settlement.",
      risk7d:
        "Seven-day risk holds critical. A fourth-day pause caps the near-term strike risk, but nothing is signed, Iran denies a negotiation is even under way, and Trump has promised 'very strong military action' if talks fail (CNBC). The Houthi embargo of July 20 stands, Bab el-Mandeb transits are back only to 28 of a 46 peak and running dark under threat, and Trump's 'bridge or power plant per ship' rule still converts any new Hormuz strike into a pre-committed infrastructure exchange. The three-week collapse pattern — pause, optimism, reversal — remains the base rate, and per §3.5.6 the structural priors carry.",
      spillover:
        "Spillover holds critical. Brent eased to about $86.58, down roughly 1.5% on the day and back at the roughly $86 baseline as the pause and the Bab el-Mandeb recovery unwound most of the war premium, yet it is still up about 17% on the month and a structural bid remains while the Houthi threat and the Suez cost persist (Trading Economics). Goldman's $120 fourth-quarter tail is intact and the $150-200 dual-closure tail is still one sinking away. The Hormuz formula on the table would reopen the strait on Iranian terms — a fee and northern-corridor permission — the same water a third of Taiwan's gas transits as Qatari LNG.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'high',
      source: 'CNN / NPR / Bloomberg / Manila Times',
      event:
        "The US-Iran strike pause held into a fourth day. Iran's army spokesman, Mohammad Akraminia, said for the first time that 'since our strategy has essentially been retaliatory, we have also halted our retaliatory operations,' and Trump told Axios that 'very deep talks' were under way and that the US would 'go back to very strong military action' if they failed. Iran's Foreign Ministry again said it has 'no negotiations with the United States at present,' its only channel being with Oman over Hormuz.",
      summary:
        "Per §3.5.3 the pause is now four days old and, for the first time, confirmed by Iran's own military — but the two principals still do not agree a negotiation exists, and the halt rests on Trump being 'not ready' and is revocable within a news cycle.",
      impact:
        "A fourth day without strikes is the longest lull in weeks and real de-escalation on the bilateral clock, and the Iranian army's confirmation is new. But 'very strong military action' on failure and 'no negotiations' from Tehran keep the off-ramp unsigned and reversible.",
    },
    {
      id: 2,
      direction: 'de-escalating',
      importance: 'high',
      source: 'Al-Monitor / OilPrice / Gulf News',
      event:
        "Bab el-Mandeb transits recovered to 28 vessels on Monday from near zero on July 26, as Saudi Arabia resumed Red Sea crude shipments after Energy Minister Khalid Al Falih said the coalition had taken the steps needed to protect ships. Traffic remained below the month's 46-vessel peak on July 14, no new tanker attacks were reported since last week, and tracking showed at least one Saudi crude tanker going dark — switching off its transponder — to slip through the strait.",
      summary:
        "Per §3.5.5 the reroute is partly reversing in the data, not just the announcements: 28 transits from zero is a recovery, but under the July-20 Houthi embargo, below peak, and on dark AIS runs. The route reopened on tactics, not on the threat being removed.",
      impact:
        "The energy-infrastructure clock's hardest hit in weeks is unwinding — oil is moving through Bab el-Mandeb again — but the Houthi capability that forced the halt is intact, so a single hull hit can re-close it, and the transits that resumed are running dark under threat.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'The National / Jerusalem Post / Fortune / Japan Times',
      event:
        "Oman stepped up its Hormuz diplomacy, presenting Iran with a Gulf-backed proposal to jointly manage the strait: two shipping corridors — free, pre-war navigation in the southern lane inside Omani waters and passage by Tehran's permission in the northern lane inside Iranian waters — plus a system of voluntary transit fees. Regional reporting said the parties were 'approaching' a deal, while The National noted Iran was simultaneously widening its shipping threats and insisting on control and fees.",
      summary:
        "Per §3.5.3 a formula Iran is 'engaging with' while saying it has 'no negotiations' and issuing new threats is process, not agreement. Per §3.5.6 the toll-institutionalization prior surfaces almost verbatim: a 'voluntary' fee and a permission-based northern corridor codify Iranian control and revenue.",
      impact:
        "The mediation is the most developed of the war and could reopen Hormuz — but on Tehran's preferred terms, and it still binds neither the Houthi ledger at Bab el-Mandeb nor Israel. A structural win dressed as a de-escalation is not the same as a concession.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: 'Trading Economics / Bloomberg / Fortune',
      event:
        "Brent crude eased to about $86.58, down roughly 1.5% on the day and back at the World Bank's roughly $86 baseline, extending losses as the fourth-day pause and the Bab el-Mandeb recovery unwound most of the war-fear premium. The price is still up about 17% over the month, and analysts kept a structural bid in place while the Houthi threat and the Suez cost persist and the deal remains unsigned.",
      summary:
        "Per §3.5.5 the number is two-sided: the pause and the transit recovery priced out most of the bilateral-and-maritime premium, while the sticky month-on-month gain confirms the war-risk floor. The distance to the $150-200 dual-closure tail is still one sinking away.",
      impact:
        "A screen price back at baseline validates the de-escalation as real to traders; the residual monthly premium validates the Red Sea and Hormuz as the structural risks. A single laden-tanker sinking or a failed talk would erase the relief overnight.",
    },
    {
      id: 5,
      direction: 'neutral',
      importance: 'medium',
      source: 'WANA / ISIS / Euronews / HRANA',
      event:
        "The nuclear file stayed bounded: Grossi reiterated that IAEA inspectors have not returned to Iran and that the agency assesses about 440.9 kg of 60% and 184.1 kg of 20% enriched uranium remain in the country, likely still at Isfahan, though it cannot verify this without on-site access. HRANA's new-wave ledger held at a minimum 20 killed and 46 injured as of July 17, with its standing understatement caveat, and no fresh official Iranian toll emerged as the pause held the strike series.",
      summary:
        "Per §3.5.3 an unverified stockpile the agency is blocked from inspecting is bounded by choice, not verification. A fourth-day pause that does not restore enrichment-site access leaves the largest latent escalation untouched.",
      impact:
        "The bilateral and maritime thaw does nothing for the nuclear ledger: a 60% stockpile the IAEA last verified in February and an agency still locked out. The Lebanon gap prior and the water-as-a-target-class prior both carry.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (100+ injured since early July, ~96% returned to duty)',
      delta: '+0 KIA / +0 WIA in the window; the strike pause held into a fourth day with no new US casualty',
      status:
        "The toll holds at 17 KIA and 432 WIA on the AP/CENTCOM series; a fourth day of the strike pause produced no new American casualty. The three deaths that lifted the toll to 17 — one in northern Iraq and two at Muwaffaq Salti in Jordan — remain the most recent, with the Jordan MIA accounted for within the identified dead per Day 144. Divergent CENTCOM injury counts (290–413 WIA) reflect different reporting windows per §3.5.3; the 432 figure carries. Trump framed the pause as space for 'very deep talks' but warned of 'very strong military action' if they fail, and his 'bridge or power plant per ship' rule keeps any future maritime death pre-committed to escalation; the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (Israel not a direct party to the US-Iran exchange)',
      status:
        "No new Israeli casualties in the window. Israel remains outside the US-Iran framework and unbound by any Hormuz formula, the Oman channel, or a London shipping track; its standing readiness to strike Iran again keeps a full-scale-campaign option live even as the two principals pause a fourth day. The Lebanon gap prior (§3.5.6) carries: Israel maintains it will not fully withdraw from southern Lebanon until Hezbollah disarms, the June 26 US-brokered framework remains rejected, and cross-border fire continues with no ceasefire in sight.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta: '+0 official update in the window; the CENTCOM strike series stayed paused',
      status:
        "No fresh official Iranian toll, and the fourth-day pause held the CENTCOM strike series that had run against maritime, missile, drone, coastal-surveillance and air-defense targets. HRANA's ten-day report documents a minimum 20 civilians killed and 46 injured in the new wave as of July 17, flagged as minimum counts given continuing attacks and restricted access. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its standing understatement caveat, Foundation of Martyrs ~3,468, and US and Israeli estimates run to 6,000+. The IAEA has conducted no verification since February 28 and remains locked out; ~440.9 kg of 60% and 184.1 kg of 20% HEU remain unverified and, per Grossi, likely still at Isfahan.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 128+ KIA / 370 WIA; Gulf 33+ KIA / 74+ WIA, of which Kuwait 10 killed (4 soldiers, 6 civilians) / 115 injured (77 soldiers, 38 civilians)',
      delta: '+0 confirmed fatalities in the window; the Bab el-Mandeb recovery and dark transits produced no confirmed deaths',
      status:
        "No confirmed new Gulf or Iraqi fatalities in the window. Bab el-Mandeb transits recovered to 28 vessels with no new tanker attack reported since last week and no confirmed crew death on the Encelia or Layla, so the maritime front eased over a route without becoming lethal — a crew death or a laden-tanker sinking remains the tell most likely to reprice oil and trigger Trump's pledge. Iranian fire again struck Kuwaiti power and desalination plants; Kuwait's cumulative ledger holds at 10 killed (4 soldiers, 6 civilians) and 115 injured (77 soldiers, 38 civilians), inside the 33+ Gulf-wide baseline. Lebanon toll stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129); Iraq baseline carries.",
    },
  },
  exec:
    "Day 152 was the softest day of the war so far — and the first where the easing showed up in the tape, not just the talking points. The US-Iran strike pause held into a fourth day; Iran's army spokesman, Mohammad Akraminia, said for the first time that Tehran had 'halted our retaliatory operations' too, and Trump told Axios that 'very deep talks' were under way while warning of 'very strong military action' if they failed (CNBC, Bloomberg, Manila Times). Yet Iran's Foreign Ministry again said it has 'no negotiations with the United States at present,' insisting its only channel is with Oman over Hormuz. In the Red Sea, Bab el-Mandeb transits recovered to 28 vessels Monday — up from near zero on July 26 but still below the July-14 peak of 46 — as Saudi Arabia resumed shipments under coalition protection, though tankers ran dark to slip through under a standing Houthi threat (Al-Monitor, OilPrice, Gulf News). Oman put an actual architecture on the table: a Gulf-backed, two-corridor Hormuz plan with voluntary vessel fees, which Iran is engaging with while insisting on control and payment (The National, Jerusalem Post, Fortune). Brent eased to about $86.58, down 1.5% on the day and back at the roughly $86 baseline, giving back most of the war premium (Trading Economics). Per §3.5.3 the hard data is real but downstream of an unsigned pause Tehran will not call a negotiation and pairs with fresh shipping threats. The nuclear file stayed bounded, the IAEA still locked out since February. The US toll holds at 17. Direction stays mixed; seven-day risk stays critical; spillover stays critical; the thirty-day ceasefire probability ticks to 17.",
  implications: [
    {
      title: 'The easing finally shows up in the tape — but the tape is downstream of an unsigned pause',
      body:
        "For a fourth straight day no strikes landed, and for the first time the de-escalation registered in hard data rather than statements. Iran's army spokesman confirmed Tehran had halted its retaliatory operations; Bab el-Mandeb transits recovered to 28 vessels Monday from near zero on July 26; and Brent slid to about $86.58, back at the roughly $86 World Bank baseline after a week above $90 (Bloomberg, Al-Monitor, Trading Economics). Under the multi-clock framework, the negotiation-capacity and energy-infrastructure clocks are both improving on the same page — now with tape, not just talk. Analytical judgment: per §3.5.3 the data is real but sits downstream of an unsigned pause that rests on Trump being 'not ready' and that he has promised to end with 'very strong military action' if talks fail (CNBC). Per §3.5.5 the deltas are two-sided: 28 transits is a recovery from zero but still below the 46-vessel July-14 peak, the barrels are moving on dark AIS runs under a standing Houthi threat, and Brent at $86 is still up about 17% on the month. The off-ramp is now visible in prices and shipping counts, but it is being driven by everyone's risk management converging, not by a settlement anyone has signed — and the collapse pattern that ended the last three lulls remains the base rate.",
    },
    {
      title: 'Oman’s two-corridor formula is real architecture — and it re-institutionalizes the toll',
      body:
        "The mediation acquired an actual structure. Oman presented a Gulf-backed proposal to jointly manage Hormuz built on two corridors — free, pre-war navigation in the southern lane inside Omani waters, and passage by Tehran's permission in the northern lane inside Iranian waters — plus a system of voluntary transit fees, and regional reporting said the parties were 'approaching' a deal (The National, Jerusalem Post, Japan Times). Analytical judgment: per §3.5.3 a formula Iran is 'engaging with' while it still says it has 'no negotiations' and widens shipping threats is process, not agreement — the exact optimism-ahead-of-signature pattern that preceded the Day 51 collapse. Per §3.5.6 the toll-institutionalization prior surfaces almost verbatim: a 'voluntary' Hormuz fee, accepted at any level, becomes permanent Iranian revenue — on pre-war flow, on the order of tens of billions a year — and the northern-corridor design codifies Iranian control over passage. That is a structural win for Tehran dressed as a de-escalation, not a concession. And the corridor still stops at Hormuz: it binds neither the Houthi ledger at Bab el-Mandeb, which answers to Yemen, nor Israel, which stays outside the US-Iran framework. Trump's banked Xi-and-Putin no-arms pledges remain rhetorical until a shipment is stopped or a vote is cast (The Hill). The architecture is the most developed of the war — and it would settle the strait on Iran's preferred terms.",
    },
    {
      title: 'Taiwan: the detour reopens, but on dark transits and Tehran’s terms',
      body:
        "Taiwan's exposure moved at both seams it depends on. The Bab el-Mandeb recovery to 28 transits partly reverses the Suez detour that Asian buyers, Taipei included, had used to dodge Hormuz — good news for the Red Sea route that now carries Taiwan's diversified, US-weighted crude (Al-Monitor, CSIS). But the recovery runs on dark AIS transits under a live Houthi threat, and the Hormuz 'solution' on the table would reopen the strait on Tehran's terms — northern-corridor passage by Iranian permission and a transit fee — through the very chokepoint about a third of Taiwan's gas crosses as Qatari LNG (The National, Atlantic Council). Analytical judgment: per §3.5.5 the numbers still bind. Taiwan runs at 4.2% energy self-sufficiency; roughly 85% of East Asia's crude and LNG transits Hormuz; about a third of its gas comes from Qatar through that strait; and it holds only 11 days of gas inventory against about 120 days of oil cover, with crude now roughly 60% US-sourced (Wood Mackenzie). Softer Brent near $86 helps the price of what Taiwan buys; it does nothing for the route or the terms. Per §3.5.10 the fresh development is real — the bypass is reopening and a Hormuz formula exists — but both are contingent, and neither closes the gas-side gap: LNG is secured only through September and the statutory 14-day buffer arrives only in 2027. On a map where both the strait and its bypass are contested, progress is measurable and the vulnerability is unmoved.",
    },
  ],
  casualtyNotes: {
    us:
      "Toll holds at 17 KIA / 432 WIA (AP/CENTCOM series); a fourth day of the strike pause produced no new fatality. The three most recent deaths (Iraq x1, Jordan x2) and the resolved Jordan MIA carry per Day 144. Divergent CENTCOM injury counts (290–413 WIA) reflect different windows per §3.5.3; 432 carries. Trump framed the pause as space for 'very deep talks' but warned of 'very strong military action' on failure; the 'bridge or power plant per ship' rule keeps any future maritime death pre-committed to escalation; the $67 billion supplemental and 50-48 war-powers rebuke remain unresolved.",
    israel:
      "No new Israeli casualties. Israel stays outside the US-Iran framework and unbound by any Hormuz formula, the Oman channel, or a London track; its readiness signal keeps a full-scale-campaign option live even as the two principals pause a fourth day. June 26 Lebanon framework still rejected by Hezbollah; the Lebanon gap prior carries.",
    iran:
      "No fresh official toll as the pause held the CENTCOM strike series. HRANA new-wave tally holds at a minimum 20 killed / 46 injured; cumulative HRANA 3,636+ with understatement caveat; Foundation of Martyrs ~3,468; US/Israeli est. 6,000+. IAEA has run no verification since February 28 and remains locked out; ~440.9 kg of 60% and 184.1 kg of 20% HEU unverified and, per Grossi, likely still at Isfahan.",
    other:
      "No confirmed new Gulf or Iraqi fatalities. Bab el-Mandeb transits recovered to 28 vessels with no new attack or confirmed crew death; a crew death or laden-tanker sinking remains the tell to watch. Iranian fire again hit Kuwaiti power and desalination plants; Kuwait cumulative 10 killed / 115 injured. Lebanon source-split; Iraq baseline carries.",
  },
};

export default data;
