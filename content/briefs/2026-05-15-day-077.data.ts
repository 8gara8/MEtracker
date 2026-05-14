import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'conditional',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 77 converts Day 76's evening flash into the lead: the Trump-Xi summit produced the war's most concrete de-escalatory signal. Trump said Xi offered to help broker an end to the war and pledged China would not supply military equipment to Iran; the White House readout adds joint agreement on no Iranian bomb and an open Hormuz. But the kinetic track diverged the same day — the Honduras-flagged Hui Chuan was seized off Fujairah and tracked toward Iranian waters, a second vessel was attacked off Oman, and Hezbollah drones wounded three Israeli soldiers. Direction shifts to mixed, not de-escalating; 30-day ceasefire probability nudges 8 to 9 on the Beijing opening.",
      risk7d:
        "Seven-day risk eases from critical to conditional. The summit expanded negotiation capacity for the first time since the April framework broke — Beijing publicly co-signed the no-bomb and open-Hormuz positions and offered mediation — so the window's trajectory now genuinely hinges on follow-through rather than an unconditional escalation path. But the conditioning cuts both ways: the Israel-Lebanon cessation-of-hostilities period expires Sunday, May 17, with the Washington talks 'split on key issues,' and Iran has signaled no acceptance of the Beijing language. Day 76's Pentagon 'Operation Sledgehammer' contingency and Wright weaponization testimony carry as the re-escalation substrate; Iran retains operational access to 30 of its 33 Hormuz missile sites.",
      spillover:
        "Spillover holds critical — it is active, not latent. A vessel was seized off the UAE's Fujairah and taken toward Iranian waters, with a second attacked off Oman, even as Trump and Xi declared the strait must remain open. Hezbollah, excluded from the Washington talks, sent drones into northern Israel and wounded three Israeli soldiers. Lebanon's Health Ministry cumulative carries at roughly 2,882 killed and 8,768 wounded. Iran's rial eased to about 1,811,000 IRR/USD. China remains the buyer of more than 80% of Iran's shipped crude — the structural lever the summit gestured at but did not move.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'pivotal',
      source: "CNBC / Time / CBS News / CNN",
      event:
        "Trump says Xi offered to help broker an end to the Iran war and pledged China would not supply military equipment to Tehran; White House readout confirms joint agreement that Iran can never have a nuclear weapon and that the Strait of Hormuz must remain open",
      summary:
        "After Thursday's Beijing bilateral, President Trump said Xi Jinping offered to help resolve the Iran war and reopen the Strait of Hormuz, and said Xi pledged China 'is not going to give military equipment' to Iran. A White House readout said both leaders agreed Iran cannot have a nuclear weapon, that the strait must remain open, and that Xi opposes its militarization and any transit toll while expressing interest in buying more American oil. The summit concludes Friday with a bilateral tea and photo opportunity.",
      impact:
        "This is the first time Beijing has publicly co-signed the core US positions and offered mediation rather than extracted a price — a genuine expansion of negotiation capacity that inverts the morning brief's 'convergence foreclosed' framing. The skeptical counter is load-bearing: the pledge is unverified and narrow, leaving intelligence-sharing, dual-use electronics, and Iranian oil revenue untouched; Iran was not at the table and has signaled no acceptance. The opening's value depends entirely on whether Xi converts a photo-op pledge into pressure Tehran feels.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'pivotal',
      source: "Fox News / Euronews / gCaptain / Al Arabiya / Times of Israel / Bloomberg",
      event:
        "Honduras-flagged Hui Chuan seized by 'unauthorized personnel' off the UAE's Fujairah and tracked toward Iranian waters; a second vessel reported attacked off Oman in the latest Strait of Hormuz actions",
      summary:
        "The UK Maritime Trade Operations agency reported that the Honduras-flagged Hui Chuan was boarded by 'unauthorized personnel' roughly 38 nautical miles northeast of the UAE's Fujairah oil-export terminal and was being taken toward Iranian territorial waters. A second, Indian-flagged vessel was reported attacked off Oman, and another said sunk, in the same window. The seizures came the same day Trump and Xi declared the strait 'must remain open' from Beijing.",
      impact:
        "The divergence is the analytical point: the kinetic track is indifferent to summit communiqués. The seizure extends the Hormuz brinkmanship floor — 58-plus vessels redirected, zero transits since May 4 — and demonstrates the physical strait is unchanged regardless of the Beijing language. It also hands the re-escalation camp a fresh, dated provocation precisely as the Pentagon's Sledgehammer contingency is being staffed.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: "Haaretz / AP / The National / Washington Times",
      event:
        "Third round of Israel-Lebanon talks opens at the US State Department 'split on key issues' as the cessation-of-hostilities period expires Sunday, May 17",
      summary:
        "The third round of direct Israel-Lebanon talks opened in Washington with the two sides divided on the structural question: Lebanon is demanding a permanent truce and a halt to the destruction of border villages, while Israel seeks to retain full freedom of operations until Hezbollah is disarmed. US Ambassador to Israel Mike Huckabee, US Ambassador to Lebanon Michael Issa, and Rubio adviser Michael Needham are mediating across two days of talks. The cessation-of-hostilities period expires Sunday.",
      impact:
        "This is now the war's hardest near-term clock — a fixed Sunday deadline, unlike the open-ended Iran drift. The standing Lebanon-gap prior re-asserts: Israel is not party to the US-Iran framework and has shown no intent to halt operations. Iran's SNSC has coupled the Lebanon track to the broader MOU, so a Sunday breakdown feeds back into the Iran negotiation rather than staying contained.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: "AP / Haaretz",
      event:
        "Hezbollah drones detonate in northern Israel, wounding at least three Israeli soldiers — the first new Israeli casualties in days",
      summary:
        "Hezbollah, which is excluded from the Washington talks, continued to attack Israeli positions: drones launched from Lebanon detonated in northern Israel near the border, wounding at least three Israeli soldiers on Friday. The strike came as the third round of Israel-Lebanon talks was under way in Washington and days before the cessation-of-hostilities period expires.",
      impact:
        "Hezbollah's exclusion from the talks is the compounding structural problem — the actor with the most capacity to break the ceasefire has no seat and no incentive to wait for a deal negotiated over its head. The drone strike is a small but pointed reminder that the Washington track can produce a paper agreement the most capable spoiler is not bound by.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: "Trading Economics / EIA / Fortune / AlanChand",
      event:
        "Brent holds near $106 as the Beijing signal prices through; gold slips below $4,700 as markets fully price out a 2026 Fed cut; Iran's rial eases to about 1,811,000 IRR/USD",
      summary:
        "Brent crude held near $106 a barrel Thursday — roughly $5 below Wednesday's intraday high — and the EIA's May Short-Term Energy Outlook projects about $106 for May and June. Gold slipped below $4,700 an ounce as April US wholesale inflation, the fastest since 2022, led investors to fully price out a 2026 Federal Reserve rate cut and raise the odds of a hike. Iran's rial eased to about 1,811,000 IRR per dollar on the remittance rate Thursday, off Wednesday's 1,817,000.",
      impact:
        "Brent easing is the diplomatic signal pricing through, but the relief is not clean: the war's cost is lodged inside the US inflation print, and that does not unwind on a communiqué. For Taiwan, Brent above $105 remains the confirmed working floor. The rial's modest reversal — after Wednesday's first daily strengthening of the cycle — suggests the market is not yet convinced the Beijing opening changes Iran's trajectory.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'medium',
      source: "IAEA Board of Governors reporting",
      event:
        "IAEA verification gap remains the backdrop to Wright's 'weeks from weapons-grade' testimony — continuity of knowledge lost since mid-2025, access to only four of six remaining facilities",
      summary:
        "The IAEA's verification gap remains the analytical backdrop to Energy Secretary Wright's Day 76 Senate testimony that Iran is 'weeks' from weapons-grade material. The agency has lacked continuity of knowledge over Iran's declared 60% and 20% enriched-uranium stockpiles since the mid-2025 attacks; Iran terminated the Cairo monitoring agreement in November 2025; and inspectors have been granted access to only four of six remaining unaffected facilities, with satellite imagery showing regular vehicular activity around the Isfahan tunnel complex.",
      impact:
        "The verification gap is what makes Wright's timeline claim both unfalsifiable and politically potent: with no continuity of knowledge, the 'frighteningly close' framing cannot be independently checked, and that ambiguity is itself the justification architecture for renewed strikes. It also means any Beijing-brokered opening would have to rebuild an inspection regime from a standing start.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed KIA',
      status:
        "No new US casualties confirmed. The Trump-Xi summit produced Xi's pledge to withhold military equipment from Iran and a joint statement that Iran can never have a nuclear weapon, but Iran was not at the table. Day 76's Pentagon 'Operation Sledgehammer' contingency and Wright weaponization testimony carry as the re-escalation substrate; the Hui Chuan seizure hands the re-escalation camp a fresh dated provocation. Murkowski AUMF substrate carries.",
    },
    israel: {
      cumulative: 'KIA: 47 · WIA: 8,603+',
      delta: '+0 KIA / +3 WIA (Hezbollah drone strike, Friday)',
      status:
        "At least three Israeli soldiers wounded Friday when Hezbollah drones detonated in northern Israel — the first new Israeli casualties in days. The third round of Israel-Lebanon talks opened in Washington 'split on key issues' with the cessation-of-hostilities period expiring Sunday, May 17. IDF southern-Lebanon operational tempo carries.",
    },
    iran: {
      cumulative:
        "LMO 'nearly 3,400' KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · Hengaw 6,620+ mil · 3.2M displaced",
      delta: 'No new figures',
      status:
        "No new Iranian casualty figures. Iran was not party to the Beijing summit and has signaled no acceptance of the joint no-bomb and open-Hormuz language. The rial eased to about 1,811,000 IRR/USD remittance Thursday off Wednesday's 1,817,000. Velayati's Tasnim warning against a 'triumphant' Beijing entry carries; the IAEA continuity-of-knowledge gap carries.",
    },
    other: {
      cumulative:
        'Lebanon MOH: ~2,882 KIA / 8,768 WIA · Iraq: 117+ · Gulf states: 32+ · UAE: 14+9 wounded cumulative · Kuwait: 1 wounded (May 1 Bubiyan IRGC infiltration)',
      delta: 'No new Lebanon MOH figure surfaced for May 14-15; cumulative carries',
      status:
        "Lebanon Health Ministry cumulative carries at roughly 2,882 KIA / 8,768 WIA. The Honduras-flagged Hui Chuan was seized off the UAE's Fujairah and taken toward Iranian waters; a second vessel was attacked off Oman. Hormuz: zero transits since May 4 carries; 58+ vessels redirected.",
    },
  },
  exec:
    "Day 77 converts Day 76's evening flash into the brief's lead: the Trump-Xi summit produced the most concrete de-escalatory signal of the war. After Thursday's bilateral, Trump said Xi offered to help broker an end to the Iran war and pledged that China 'is not going to give military equipment' to Tehran; a White House readout confirmed both leaders agreed Iran can never have a nuclear weapon and that the Strait of Hormuz must remain open, with Xi opposing its militarization and any transit toll and expressing interest in buying more American oil (CNBC, Time, CBS News, CNN). The summit concludes Friday with a bilateral tea and photo opportunity. Against that diplomatic signal, the kinetic reality diverged the same day: the Honduras-flagged Hui Chuan was boarded by 'unauthorized personnel' roughly 38 nautical miles northeast of Fujairah and tracked by UKMTO heading into Iranian waters, with a second vessel reported attacked off Oman (Fox News, Euronews, gCaptain, Times of Israel). The third round of Israel-Lebanon talks opened in Washington 'split on key issues' as the cessation-of-hostilities period expires Sunday; Hezbollah, excluded from the talks, sent drones into northern Israel, wounding at least three Israeli soldiers (Haaretz, AP, The National). Brent held near $106 and gold slipped below $4,700 as markets fully priced out a 2026 Fed cut (Trading Economics, EIA, Fortune). Iran's rial eased to about 1,811,000 IRR/USD. Analytical judgment: 30-day ceasefire probability nudges 8 to 9 on the Beijing opening, but the same-day ship seizure, the Sunday Lebanon cliff, and the absence of any Iranian buy-in cap the upside — direction is mixed, not de-escalating.",
  implications: [
    {
      title:
        "The Trump-Xi summit produced the war's most concrete de-escalatory signal — Xi's brokering offer and no-military-equipment pledge — but the same-day ship seizure shows the diplomatic and kinetic tracks have not converged",
      body:
        "Thursday's bilateral inverted the morning brief's 'convergence path foreclosed' framing. Trump said Xi offered to help broker an end to the war and reopen Hormuz, and — most concretely — that Xi pledged China 'is not going to give military equipment' to Iran. The White House readout adds that both leaders agreed Iran can never have a nuclear weapon, that the strait must remain open, and that Xi opposes its militarization and any transit toll while seeking to buy more American oil. This is the first time Beijing has publicly co-signed the core US positions and offered mediation rather than extracted a price — a real expansion of negotiation capacity. The skeptical counter is structural and load-bearing: the pledge is unverified and narrow, addressing only military equipment while leaving untouched intelligence-sharing, dual-use electronics, and the oil revenue that funds Iran's war; Iran was not at the table and has signaled no acceptance of the Beijing language; and the Hui Chuan seizure off Fujairah the same day demonstrates the kinetic track is indifferent to summit communiqués. The opening is genuine but contingent — its value depends entirely on whether Xi converts a Beijing photo-op pledge into pressure Tehran actually feels.",
    },
    {
      title:
        "The Israel-Lebanon Washington track now carries the war's hardest near-term deadline — a Sunday cessation-of-hostilities expiry with the talks 'split on key issues' and Hezbollah escalating outside the room",
      body:
        "The third round opened at the State Department with the two sides divided on the structural question: Lebanon wants a permanent truce and an end to the destruction of border villages; Israel wants to retain full freedom of operations until Hezbollah is disarmed. With the cessation-of-hostilities period expiring Sunday, May 17, this is the most binding clock on the board — and unlike the Iran track, it has a fixed date rather than an open-ended drift. The standing Lebanon-gap prior re-asserts: Israel is not party to the US-Iran framework and has shown no intent to halt operations, so any agreement that depends on Israeli restraint is structurally fragile. Hezbollah's exclusion is the compounding problem — its drones wounding three Israeli soldiers Friday show the actor with the most capacity to break the ceasefire has no seat and no incentive to wait. Iran's SNSC has explicitly coupled the Lebanon track to the broader MOU, so a Sunday breakdown in Washington feeds directly back into the Iran negotiation rather than staying contained. The mediation bench — Huckabee, Issa, Needham — is in place, but President Aoun's refusal to meet Netanyahu before a security agreement caps what two days of talks can deliver to 'consolidation,' not resolution.",
    },
    {
      title:
        "Brent easing to ~$106 prices in the Beijing signal, but the unchanged physical strait and a Fed now expected to hold or hike reset what Taiwan's energy planners must underwrite",
      body:
        "Brent held near $106 a barrel Thursday and the EIA's May outlook projects roughly that level through June — the diplomatic signal from Beijing pricing through, about $5 below Wednesday's intraday high. But the cross-asset picture is not clean relief: gold slipped below $4,700 and investors have fully priced out a 2026 Fed rate cut, now assigning real odds to a hike, because April wholesale inflation ran at its fastest pace since 2022. The war's cost is lodged inside the US inflation print, and that does not unwind on a summit communiqué. For Taiwan: the standing LNG-vulnerability assessment is reinforced, not relaxed. CPC Corporation should continue to treat Brent above $105 as the confirmed working floor, and the Hui Chuan seizure plus zero Hormuz transits since May 4 mean the physical-supply risk that drives the $130-170 kinetic-tail scenario is unchanged regardless of the Beijing language. The one new variable is favourable — Xi's stated interest in buying more US crude, if realized, would slowly diversify the demand side of the Hormuz-dependence problem that Korean and Japanese buyers share. TSMC's 2026 CapEx framework-signature path reads ~8% (Day 76's ~7%), nudged up by the negotiation-capacity opening. No fresh Taiwan-specific development today; prior assessments hold.",
    },
  ],
  casualtyNotes: {
    us:
      "No new KIA. Trump-Xi summit produced Xi's pledge to withhold military equipment from Iran and a joint no-bomb statement, though Iran was not at the table. Pentagon 'Operation Sledgehammer' contingency and Wright weaponization testimony carry; the Hui Chuan seizure hands the re-escalation camp a fresh provocation.",
    israel:
      "At least three soldiers wounded Friday by Hezbollah drones in northern Israel — first new Israeli casualties in days. Third round of Israel-Lebanon talks opened 'split on key issues'; cessation-of-hostilities period expires Sunday, May 17.",
    iran:
      "No new casualty figures. Iran absent from the Beijing summit and silent on the joint language. Rial eased to ~1,811,000 IRR/USD off Wednesday's 1,817,000. IAEA continuity-of-knowledge gap and Velayati's Tasnim warning carry.",
    other:
      "Lebanon MOH cumulative carries at ~2,882 KIA / 8,768 WIA. Hui Chuan seized off Fujairah and taken toward Iranian waters; second vessel attacked off Oman. Hormuz zero transits since May 4.",
  },
  flash:
    "*(reserved for evening run — Friday Trump-Xi summit close and final readout, any Iranian official reaction to the Beijing joint language, Israel-Lebanon Washington round-three Friday session outcome ahead of the Sunday expiry, Brent and gold prints, any further Hormuz maritime incidents)*",
};

export default data;
