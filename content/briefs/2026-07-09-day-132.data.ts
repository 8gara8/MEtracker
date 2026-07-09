import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction stays escalating and hardens into a two-way kinetic war. In response to the three IRGC-attributed Hormuz vessel strikes, US Central Command struck more than 80 targets across Iran — air defenses, command-and-control, coastal radar, anti-ship missiles, and over 60 IRGC small boats — the first US kinetic strikes on Iranian soil since the June ceasefire, with Sentinel-2 imagery confirming heavy damage to an IRGC Navy base in southern Iran (Jerusalem Post, Times of Israel, Liveuamap). Iran's IRGC said it answered within hours, striking 85 US military targets in Bahrain and Kuwait and downing an MQ-9 drone (RFE/RL, PBS). The calibrated-deniability read that held on Day 131 no longer describes a reciprocal exchange the IRGC openly claims: the direct US-Iran shooting war the MoU was signed to end has restarted.",
      risk7d:
        "Seven-day risk rises to extreme. From the NATO summit in Ankara, Trump declared the MoU 'over' and the talks a 'waste of time,' threatened a second day of strikes, reimposition of the naval blockade, and hits on Iran's electrical grid, while the IRGC promised a 'harsher' retaliation in the coming days (Al Jazeera, CNBC, PBS). Both sides have described rungs above the current one, and the exchange converges on the July 9 Mashhad burial and the targeted post-burial Doha resumption. The binding question is whether the fire terminates in a single reciprocal round, as the June 28 cycle did, or climbs into a second US strike day or an Iranian 'harsher' salvo that overruns the burial-to-Doha window.",
      spillover:
        "Spillover turns critical. Iran's retaliation landed on Gulf-monarchy soil — US bases in Bahrain (the Fifth Fleet base area at Port Salman) and Kuwait's Ali Salem Air Base — pulling the host states directly into the line of fire for the second time since June 28, with no confirmed host-nation casualties in early reporting (RFE/RL, NBC News). Brent settled at $78.02, up about 5.2%, pricing a corridor markets now treat as contested rather than closed (CNBC). The Lebanon seam stayed quiet with no confirmed Hezbollah retaliation after the July 4 ten-strike escalation, but the Gulf maritime-and-base vector is now the dominant spillover channel.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'high',
      source: 'Jerusalem Post / Times of Israel / CNN / Liveuamap',
      event:
        "US Central Command struck more than 80 targets across Iran in response to the three IRGC-attributed strikes on commercial vessels in the Strait of Hormuz — hitting air defenses, command-and-control nodes, coastal radar, anti-ship missile sites, and more than 60 IRGC small boats — the first US kinetic strikes on Iranian soil since the June ceasefire; Sentinel-2 imagery confirmed an IRGC Navy base in southern Iran sustained significant damage",
      summary:
        "Per §3.5.6 the Iran direct-confrontation prior is now fully live: the US crossed back over the kinetic line the MoU had held since June, converting a maritime dispute into a strike campaign on Iranian territory and degrading the IRGC's ability to keep hitting shipping (Jerusalem Post, Times of Israel, Liveuamap).",
      impact:
        "The pivotal question is whether this is a one-off degradation strike the burial-to-Doha window reabsorbs, or the first US rung of an escalation ladder that both sides say has more rungs.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'RFE/RL / PBS / NBC News',
      event:
        "Iran's IRGC said it responded within hours, striking 85 US military targets across Bahrain — including the Fifth Fleet base area at Port Salman — and Kuwait's Ali Salem Air Base, and claiming to have downed an MQ-9 drone that tried to interfere; the IRGC warned it would retaliate 'in a harsher way' in the coming days, and no confirmed host-nation casualties were reported early",
      summary:
        "Per §3.1 the retaliation is an openly avowed IRGC claim, not deniable — a break from the Day 131 pattern — with the figure (85 targets) an Iranian claim measured against no independent confirmation of damage or casualties (RFE/RL, PBS, NBC News).",
      impact:
        "The exchange is now reciprocal and on Gulf soil; whether it terminates at one round or climbs to the 'harsher' salvo the IRGC promised is the near-term escalation test.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / CNBC / CNN',
      event:
        "At the NATO summit in Ankara, President Trump declared the memorandum of understanding 'over' and the talks a 'waste of time' — while saying he 'might' allow them to continue — and threatened a second day of strikes, reimposition of the US naval blockade, and hits on Iran's electrical grid and critical infrastructure",
      summary:
        "Per §3.5.3 'over' is a declaratory claim from a principal, not a signed termination — neither side has formally withdrawn from the June 17 MoU, so the gap between the word and the unretracted framework is the signal (Al Jazeera, CNBC, CNN).",
      impact:
        "Reads as maximum-pressure signaling to force Iranian concessions rather than a decision to end the process; the risk is that a second strike day makes 'over' operational.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: 'CNBC',
      event:
        "Energy repriced hard on the two-way exchange and the blockade threat: Brent crude jumped about 5.2% to settle at $78.02 a barrel and US West Texas Intermediate rose 4.4% to $73.52, extending the move that began with the Day 131 tanker strikes and oil-license revocation",
      summary:
        "Per §3.5.5 the war premium is now firmly back — a roughly $4 Brent jump on top of Day 131's $2 move prices a corridor the market treats as contested amid active reciprocal strikes and a threatened blockade (CNBC).",
      impact:
        "The tape has moved from 'substitution holds' to 'corridor contested'; a blockade reimposition or a second LNG hull hit is the next repricing trigger.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'CNN / Al Jazeera',
      event:
        "Khamenei's six-day funeral reached its final rite with burial at Mashhad's Imam Reza shrine on July 9; neither Washington nor Tehran formally withdrew from the June 17 MoU despite the exchange, and the post-burial Doha resumption remained on the calendar even as US bases in Bahrain and Kuwait were struck",
      summary:
        "Per §3.5.6 both standing priors held under the escalation: an untested successor (Mojtaba unseen and reportedly barred from the burial) and a diplomatic track that has survived every prior shock by not being formally abandoned (CNN, Al Jazeera).",
      impact:
        "The table is technically alive but badly damaged; whether it reconvenes after the burial or 'over' becomes real is the single question the next 72 hours answer.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 543',
      delta: '+0 confirmed (Iran claims 85 US military targets struck in Bahrain and Kuwait; no US casualty figures released, and prior such base strikes were largely intercepted)',
      status:
        "No confirmed new US casualties reported. Iran's IRGC said it struck 85 US military targets in Bahrain and Kuwait after US strikes; as with the June 28 base attacks, no US casualty figures have been released and prior such strikes were largely intercepted. US Central Command struck 80+ targets inside Iran, reopening a direct US-Iran kinetic axis for the first time since the June ceasefire.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (no new Israeli casualties; Lebanon seam quiet with no confirmed Hezbollah retaliation after the July 4 ten-strike escalation)',
      status:
        "No new Israeli casualties. The Lebanon seam stayed quiet; Israel maintained its refusal to withdraw, and Katz's standing 'marked for death' threat against Mojtaba carries as the escalation ran on the US-Iran axis rather than the northern front.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 714 unclassified) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified (US struck 80+ military targets — air defenses, coastal radar, anti-ship missiles, 60+ IRGC boats — with no casualty toll released; nuclear access still barred, ~440.9 kg of 60% HEU at Isfahan unverified since June 2025)',
      status:
        "US Central Command struck more than 80 targets — air defenses, command-and-control, coastal radar, anti-ship missiles, and 60+ IRGC small boats — with Sentinel-2 imagery confirming heavy damage to an IRGC Navy base; no verified casualty toll from the strikes has been released. HRANA 3,636+ (1,701 civ + 1,221 mil + 714 unclassified), MOH ~3,468 / 26,500+, Hengaw 6,620+ mil, and 3.2M displaced carry.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 72+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97)',
      delta: '+0 confirmed (Iran-claimed strikes on US bases in Bahrain and Kuwait produced no confirmed host-nation casualties in early reporting; Day 131 Hormuz vessel strikes caused no casualties)',
      status:
        "Iran's claimed strikes on US bases in Bahrain and Kuwait produced no confirmed host-nation casualties in early reporting. The Day 131 Hormuz vessel attacks damaged Qatari LNG and Saudi crude tankers with no casualties. The Lebanon seam stayed quiet; July 4 strike casualties remain unconfirmed. Lebanon toll source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129). Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 72+ WIA carry.",
    },
  },
  exec:
    "Day 132 turned the maritime break into a two-way kinetic war. In response to the three IRGC-attributed strikes on commercial vessels in the Strait of Hormuz, US Central Command struck more than 80 targets across Iran — air defenses, command-and-control nodes, coastal radar, anti-ship missile sites, and over 60 IRGC small boats — the first US kinetic strikes on Iranian soil since the June ceasefire, with Sentinel-2 imagery confirming heavy damage to an IRGC Navy base in southern Iran (Jerusalem Post, Times of Israel, Liveuamap). Iran answered within hours: the IRGC said it struck 85 US military targets in Bahrain — including the Fifth Fleet base area at Port Salman — and Kuwait's Ali Salem Air Base, and claimed to down an MQ-9 drone, warning of a 'harsher' retaliation in the coming days (RFE/RL, PBS, NBC News). At the NATO summit in Ankara, Trump declared the memorandum of understanding 'over' and the talks a 'waste of time' — though he said he 'might' let them continue — and threatened a second day of strikes, reimposition of the naval blockade, and hits on Iran's electrical grid (Al Jazeera, CNBC, CNN). Energy repriced hard: Brent jumped about 5.2% to settle at $78.02, and US WTI rose 4.4% to $73.52 (CNBC). Against the exchange, Khamenei's six-day funeral reached its final rite — burial at Mashhad's Imam Reza shrine on July 9 — and neither side has formally declared the MoU dead, leaving the targeted post-burial Doha resumption technically alive but badly damaged (CNN, Al Jazeera). 30-day ceasefire probability falls to 25. Direction stays escalating, now on a two-way kinetic axis.",
  implications: [
    {
      title:
        "The US crossed back over the kinetic line, and Iran answered on Gulf soil — the standdown is now a two-way exchange",
      body:
        "Day 132's defining event is that the pause became a war again on both sides. After US officials attributed three Hormuz vessel strikes to the IRGC, US Central Command struck more than 80 targets inside Iran — air defenses, command-and-control, coastal radar, anti-ship missiles, and 60-plus IRGC small boats — the first US fire on Iranian soil since the June ceasefire, with Sentinel-2 imagery confirming an IRGC Navy base was heavily damaged (Jerusalem Post, Times of Israel, Liveuamap). The IRGC said it hit 85 US military targets across Bahrain and Kuwait in return and promised a 'harsher' round (RFE/RL, NBC News). Analytical judgment under the multi-clock framework: the negotiation-capacity clock and the energy-infrastructure clock are now both critical, moving together for the first time in weeks — the strikes did not merely reopen the corridor dispute, they restarted the direct US-Iran shooting war the MoU was signed to end. Per §3.5.6, the Iran direct-confrontation prior is now fully live: the calibrated-deniability read that held on Day 131 no longer describes a two-way exchange in which the IRGC openly claims its retaliation. The binding test is whether the exchange terminates in a single reciprocal round — as the June 28 cycle did — or climbs the ladder Trump and the IRGC each described.",
    },
    {
      title:
        "Trump called the MoU 'over' but left a door ajar — declaratory collapse against a table neither side has formally left",
      body:
        "The rhetorical break was as sharp as the kinetic one, and just as incomplete. From the NATO summit in Ankara, Trump said the memorandum was 'over' and the talks a 'waste of time,' threatened a second day of strikes, the naval blockade's reimposition, and hits on Iran's electrical grid — yet added he 'might' let the talks continue (CNBC, Al Jazeera, CNN). Analytical judgment: per §3.5.3, 'over' is a declaratory claim, not a signed termination — neither Washington nor Tehran has formally withdrawn from the June 17 MoU, and the post-burial Doha resumption remained on the calendar even as the bases burned. The gap between the president's word and the unretracted framework is itself the information: this reads as maximum-pressure signaling pitched to force Iranian concessions on Hormuz tolls and the nuclear file, not a decision to end the process. But the §3.5.3 lesson from the Day 51 collapse cuts the other way too — optimistic and pessimistic framings from principals have repeatedly overrun the facts on the ground. The question the next 72 hours answer is whether the exchange freezes at one round and the table reconvenes, or whether 'over' becomes operational through a second strike day.",
    },
    {
      title:
        "Taiwan: a two-way shooting war over the strait thickens the tail risk the price tape still cannot fully see",
      body:
        "For Taiwan the escalation compounds Day 131's loss of the 'no LNG cargo hit' pillar with a worse structural fact: the strait is now the arena of an active, reciprocal US-Iran kinetic exchange, and Brent's move to $78 (up 5.2%) prices a corridor markets treat as contested rather than closed (CNBC). §3.5.6 reasserts the exposure directly — roughly 38% of the island's LNG and 70% of its crude transit Hormuz against about 11 days of gas buffer, with TSMC's 2026 CapEx near 8%. Analytical judgment: the mitigants that held through Day 131 — an open southern corridor, cover through September, a premium rather than a closure — are intact, but the probability mass on the tail scenario has thickened, because a war in which anti-ship missiles and IRGC boats are being struck and Iran is threatening a 'harsher' round is precisely the environment in which a cargo-specific or corridor-closing event becomes plausible. Brent at $78 is still a premium a price-taker can absorb; a blockade reimposition or a second LNG hull hit is not. The durable hedges are unchanged and more urgent: US and Australian LNG (25%-US-by-2029) and the Maanshan and Kuosheng restarts (2028-2029) are the only answers indifferent to whether the strait stays contested or tips to closed.",
    },
  ],
  casualtyNotes: {
    us:
      "No confirmed new US casualties. Iran claims 85 US military targets struck in Bahrain and Kuwait; no US casualty figures released and prior base strikes were largely intercepted. US struck 80+ targets inside Iran, reopening the direct US-Iran kinetic axis.",
    israel:
      "No new Israeli casualties. The Lebanon seam stayed quiet; Israel maintained its refusal to withdraw, and Katz's 'marked for death' threat carries.",
    iran:
      "US struck 80+ military targets (air defenses, coastal radar, anti-ship missiles, 60+ IRGC boats) with no casualty toll released; Sentinel-2 confirmed IRGC Navy base damage. Nuclear access still barred; ~440.9 kg of 60% HEU at Isfahan unverified since June 2025.",
    other:
      "Iran-claimed strikes on US bases in Bahrain and Kuwait produced no confirmed host-nation casualties early. Day 131 Hormuz vessel strikes caused no casualties. Lebanon seam quiet; July 4 casualties unconfirmed. Lebanon toll source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129). Iraq 119+; Gulf 33+ KIA / 72+ WIA carry.",
  },
};

export default data;
