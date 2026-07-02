import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'conditional',
    spillover: 'conditional',
    rationale: {
      direction:
        "Direction stays mixed but the mode shifts from exchange to intermission. The kinetic standdown held a fifth day and the second Doha round concluded on July 2 with implementation working groups confirmed, a next round scheduled, and Brent falling to about $70.57 — its lowest since the war began — all de-escalatory (The National, Trading Economics). But three things cut the other way: not a dollar moved and the US flatly denied Iran's account of a $6 billion goods-purchase understanding (§3.5.3), the top-table talks now pause a full week for Ayatollah Khamenei's state funeral, and Israel kept striking Lebanon (Business Standard, Times of Israel). The guns stayed quiet and the price eased, but the money stalled and a mourning-period escalation window opened.",
      risk7d:
        "Seven-day risk stays conditional and acquires a specific new shape: the funeral. Iran's grand state funeral for the slain supreme leader runs July 4–9 across five cities, with Tehran warning the US and Israel against any attack during the processions and officials from more than 30 countries attending (CNN, The Week). That is at once a de-escalation pause — the next Doha round is deferred until after the July 9 burial — and a discrete escalation tripwire, since any strike into a mourning nation of that scale would detonate the standdown. Underneath it the deadlines stack: the General License to August 21, a nearer July 19 blockade-lift-and-restore date, and zero transfers so far (Business Standard). The risk is no longer a live exchange; it is whether a week of enforced quiet converts into transfers or curdles.",
      spillover:
        "Spillover holds conditional as the Gulf-base vector stays quiet and Lebanon keeps producing strikes. No new strikes hit Kuwait or Bahrain under the standdown. On the Blue Line §3.5.6 governs: the IDF said it killed a Hezbollah operative who emerged from a tunnel at the Ali Taher ridge in southern Lebanon, and Defense Minister Katz voiced 'regret' that Washington had linked the Lebanon and Iran tracks — fresh evidence of the Israel-independence prior (Times of Israel). The Gulf is calm; Lebanon is not; and the funeral week is the variable that could pull either way.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'The National / Business Standard / CGTN',
      event:
        "The second Doha round concluded on July 2 with process but no payoff: Iranian Deputy Foreign Minister Kazem Gharibabadi announced the talks had ended after two days in which negotiators met separately with Qatari and Pakistani mediators on the Strait of Hormuz and Iran's frozen funds, and the two sides confirmed implementation working groups while reporting no breakthrough on the underlying issues",
      summary:
        "Per §3.5.3 the framing is 'positive progress' with 'no breakthrough' — the round institutionalized a mechanism rather than delivering an outcome, and Qatar's foreign ministry said the next round waits until after the supreme leader's July 9 burial (The National, Business Standard).",
      impact:
        "The negotiation-capacity clock holds rather than advances: a next round is scheduled, which is real, but the top table now pauses a full week for the funeral, draining near-term momentum just as the standdown reaches its fifth day.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'Business Standard / The National / naked capitalism',
      event:
        "The money again did not move, and the two sides could not agree on what was agreed: Gharibabadi said it had been decided that part of Iran's $6 billion in frozen funds would be unlocked to buy goods based on Tehran's domestic priorities, while US officials denied any such understanding had been reached and said no funds had been released",
      summary:
        "Quantify the gap per §3.5.5: against a claimed goods-purchase framework, exactly zero dollars have transferred, and the claim-versus-denial split is the §3.5.3 lesson in real time — one side's optimistic characterization contradicted outright by the other (Business Standard, The National).",
      impact:
        "The active-deadline clock carries at the August 21 window with the nearer July 19 blockade-lift date beneath it. With strikes paused, the contest is funds and corridor governance — and Day 126 showed the parties disputing the basic facts of their own talks.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'CNN / The Week / Al Jazeera',
      event:
        "Iran prepared the largest funeral in the Republic's history for supreme leader Ali Khamenei — assassinated on the war's opening day and succeeded by his son Mojtaba — with six days of processions beginning in Tehran on July 4 across five cities in Iran and Iraq, a Qom ceremony July 7, and burial in Mashhad on July 9; Tehran warned the US and Israel against any attack during the mourning and said officials from more than 30 countries would attend",
      summary:
        "The regime-cohesion thread comes to a head: Mojtaba has not been seen publicly since the war began and is believed wounded in the strike that killed his father, mother, and wife, and whether the new supreme leader appears to lead the prayers is the open question (CNN, The Week).",
      impact:
        "The funeral is a two-sided clock — a de-escalation pause that freezes the Doha track for a week, and a discrete escalation window in which any strike into the processions would collapse the standdown.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'Trading Economics / straits.live / RFE-RL',
      event:
        "The energy tape eased further while the corridor stayed contested: Brent fell to about $70.57, its lowest since the war began in late February, with traders citing signs of increasing Hormuz shipments and the Doha talks — even as trackers disagreed on throughput, straits.live still logging near-closed traffic while other counts put escorted convoys around 27 ships against roughly 84 a day pre-war, and RFE/RL noting the strait remains a 'warlike operations area'",
      summary:
        "Per §3.1 the divergence is now internal to the throughput data itself: the price reads recovery, but the trackers split between 'near-closed' and 'a third of normal under escort,' while Araghchi's sole-control framing and the toll question stay unresolved (Trading Economics, RFE/RL).",
      impact:
        "The energy-infrastructure clock looks calmer on price and ambiguous on throughput; the July 19 blockade-lift-and-restore deadline is the binding near-term test of whether the corridor recovers off the floor or a toll hardens in.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'Times of Israel / Al Jazeera',
      event:
        "Lebanon kept cutting against the diplomatic grain: the IDF said it killed a Hezbollah operative who emerged from an underground facility at the Ali Taher ridge in southern Lebanon, calling him an immediate threat to troops, a day after the Nabatieh strike that killed three — and Defense Minister Katz said he 'regretted' that Washington had linked the Lebanon and Iran tracks even as it 'served an American interest'",
      summary:
        "Dual framing per §3.1: Israel casts the dead as a militant, and the Katz remark is fresh §3.5.6 evidence of the Israel-independence prior — Israel striking through a framework Hezbollah calls 'null and void' while chafing at US linkage (Times of Israel).",
      impact:
        "The coalition-cohesion clock stays strained and the humanitarian clock keeps ticking; Lebanon remains the vector most able to undo the Gulf standdown, and the funeral week raises the stakes of any misfire.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 (kinetic standdown holds a fifth day; no new US strikes and no new Iranian strikes on US posture; the Doha round concluded and paused for the funeral)',
      status:
        "No new US casualties. The mutual standdown held a fifth day as the second Doha round concluded through Qatari and Pakistani mediators and was deferred until after the July 9 burial; the US business stayed interim-deal implementation and frozen funds, with US officials denying any $6 billion understanding and saying no funds had been released.",
    },
    israel: {
      cumulative: 'KIA: 54 (Iran-front 47 + Lebanon-front 7 truce-period) · WIA: 8,638+',
      delta: '+0 verified Israeli (Iran front quiet; Lebanon-front operations continued — an IDF strike killed a Hezbollah operative at the Ali Taher ridge)',
      status:
        "No verified new Israeli casualties on the Iran front. Israeli forces struck the Ali Taher ridge in southern Lebanon, killing a Hezbollah operative the day after Nabatieh; Defense Minister Katz's 'regret' over the US linking the Lebanon and Iran tracks is fresh §3.5.6 evidence, with Washington and Tehran having faulted Israel for striking through the deal.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new mass toll (kinetic standdown; nuclear file unmoved — ~440.9 kg of 60% HEU unverified since June 2025; state funeral for the slain supreme leader begins July 4)',
      status:
        "No verified new mass toll under the standdown. The nuclear file showed no fresh movement beyond Day 125's 'being discussed' — Grossi maintains inspections will occur under the interim deal while Iran ties any visit to a final agreement and sanctions relief; ~440.9 kg of 60% HEU at the Esfahan tunnel complex stays unverified since June 2025. The state funeral for Ali Khamenei begins July 4; HRANA's 40 executions (March 18–June 3) and 3.2M displaced carry.",
    },
    other: {
      cumulative:
        'Lebanon ~4,254 killed / 12,190+ wounded (Lebanese Health Ministry via Al Jazeera); Bahrain + Kuwait struck June 28 (Bahrain: residential building near airport damaged, no deaths; Kuwait: two ballistic missiles intercepted); Iraq 117+; Gulf 33+ KIA / 72+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97)',
      delta: '+1 Lebanon (an IDF strike killed a Hezbollah operative at the Ali Taher ridge; IDF: immediate threat to troops); Gulf-base vector quiet under the standdown',
      status:
        "An IDF strike killed a Hezbollah operative at the Ali Taher ridge in southern Lebanon on July 3, nudging the cumulative Lebanon toll to roughly 4,254 killed / 12,190+ wounded (Lebanese Health Ministry via Al Jazeera); Israel framed the dead as a militant. The Gulf-base vector stayed quiet under the standdown — no new strikes on Kuwait or Bahrain. Iraq 117+; Gulf 33+ KIA / 72+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97) carry.",
    },
  },
  exec:
    "Day 126 turns Day 125's 'positive progress' into an intermission. The second round of indirect US–Iran talks in Doha concluded on July 2 with implementation working groups confirmed but no breakthrough, and the next round deferred until after the July 9 burial of assassinated supreme leader Ali Khamenei, whose six-day state funeral — the largest in the Republic's history — begins July 4 across five cities (The National, CNN, The Week). Skeptical counter per §3.5.3: not only did no money move, the two sides could not agree on what was agreed — Deputy Foreign Minister Gharibabadi said part of Iran's $6 billion in frozen funds would be unlocked for goods purchases, while US officials denied any such understanding and said no funds were released (Business Standard). The kinetic standdown held a fifth day and the energy tape eased — Brent fell to about $70.57, its lowest since the war began, on rising-Hormuz-shipment and talks-progress narratives — even as trackers split on actual throughput, straits.live logging near-closed traffic while other counts put escorted convoys near a third of pre-war flow (Trading Economics, RFE/RL). Lebanon cut the other way: the IDF killed a Hezbollah operative at the Ali Taher ridge a day after Nabatieh, and Defense Minister Katz voiced 'regret' over Washington linking the Lebanon and Iran tracks (Times of Israel). 30-day ceasefire probability edges to 59 from 58; direction stays mixed — the guns stayed quiet and the price eased, but the money stalled, the parties disputed their own talks, and a mourning-period escalation window opened.",
  implications: [
    {
      title:
        "The Doha round built a mechanism, not a transfer — and the parties disputed their own deal, the §3.5.3 lesson in real time",
      body:
        "Day 125's optimism met Day 126's reckoning. The second Doha round concluded on July 2 with implementation working groups confirmed but, in the reporting's own words, 'no breakthrough' on the substance — the parties spent two days on the Strait of Hormuz and frozen funds and emerged having institutionalized a process rather than delivered an outcome (The National, Business Standard). §3.5.3 is the governing discipline, and Day 126 supplies its sharpest illustration yet: Deputy Foreign Minister Gharibabadi said it had been decided that part of Iran's $6 billion in frozen assets would be unlocked to purchase goods on Tehran's priorities, and US officials flatly denied any such understanding had been reached, insisting no funds were released. Quantify the gap per §3.5.5: against a claimed framework, exactly zero dollars have moved, and the disagreement is no longer about conditions but about whether an agreement exists at all — the same over-reading of one side's optimism that preceded the Day 51 collapse. Analytical judgment under the multi-clock framework: the negotiation-capacity clock holds rather than advances — a next round is scheduled, which is genuine, but it is deferred a full week for the funeral, and a process whose participants publicly contradict each other on its content is not one a wire transfer is imminent from. The signal to watch remains a transfer, not a readout.",
    },
    {
      title:
        "The Khamenei funeral is now the dominant clock — a week-long de-escalation pause wrapped around a discrete escalation tripwire",
      body:
        "The event organizing the next seven days is not a negotiation but a burial. Iran's grand state funeral for Ali Khamenei — assassinated on the war's opening day, February 28, and succeeded by his son Mojtaba — runs July 4 through the July 9 interment in Mashhad, six days of processions across five cities in Iran and Iraq, with Tehran warning the United States and Israel against any attack during the mourning and more than 30 countries sending officials (CNN, The Week, Al Jazeera). Read it as a two-sided clock. On one face it is de-escalatory: the Doha track is frozen until after the burial, the kinetic standdown has every incentive to hold through a period of national mourning, and a hall of foreign dignitaries is its own deterrent. On the other it is a tripwire — a single strike into a procession of that scale would detonate the standdown instantly, and the §3.5.6 Israel-independence prior means Washington cannot fully guarantee Israeli restraint. Analytical judgment: the regime-cohesion thread also comes to a head, because Mojtaba has not appeared publicly since the war began and is believed wounded in the strike that killed his father, mother, and wife; whether the new supreme leader leads the prayers is a real test of the leadership's stability. For a week, the war's direction is hostage to a ceremony.",
    },
    {
      title:
        "Taiwan: the tape eased to a war-low even as the corridor a price-taker depends on stayed contested and a mourning-week risk opened",
      body:
        "For Taiwan the day extended the split that defines its exposure. The tape improved to a war-low: Brent near $70.57, its cheapest since the fighting began, no LNG cargo hit in 126 days, cover through September, and TSMC's 2026 CapEx near 8% all carry (Trading Economics). Skeptical counter per §3.5.3: the calm is priced off rising-shipment and talks-progress narratives, not off a corridor that is verifiably working — trackers still split between straits.live's near-closed reading and counts of roughly 27 escorted ships against about 84 a day pre-war, and RFE/RL still calls the strait a 'warlike operations area.' §3.5.6 reasserts the exposure the price hides: roughly 38% of the island's LNG and 70% of its crude transit Hormuz against about 11 days of gas cover, and governance — who administers passage, whether a toll hardens in — is exactly what Doha adjourned without settling. Watch the new variable the funeral introduces: a week in which any misfire on the Lebanon or Gulf seam lands amid a mourning nation and could reprice the corridor overnight (Times of Israel). Analytical judgment: the durable hedges remain the ones indifferent to today's war-low price — diversification toward US and Australian cargoes (the 25%-US-LNG-by-2029 goal) and the Maanshan and Kuosheng restarts (2028–2029). A cheaper barrel buys comfort; only non-Hormuz supply buys security.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties under the standdown's fifth day. The second Doha round concluded and was deferred until after the July 9 burial; US officials denied any $6 billion understanding and said no funds were released.",
    israel:
      "No verified new Israeli casualties on the Iran front. Israeli forces killed a Hezbollah operative at the Ali Taher ridge in southern Lebanon; Katz's 'regret' over the US linking the Lebanon and Iran tracks is fresh §3.5.6 evidence.",
    iran:
      "No verified new mass toll under the standdown. Nuclear file unmoved beyond 'being discussed'; ~440.9 kg of 60% HEU unverified since June 2025. Ali Khamenei's state funeral begins July 4; HRANA's 40 executions (March 18–June 3) and 3.2M displaced carry.",
    other:
      "An IDF strike killed a Hezbollah operative at the Ali Taher ridge on July 3 (IDF: immediate threat to troops), nudging the cumulative Lebanon toll to ~4,254 killed / 12,190+ wounded (Lebanese Health Ministry). Gulf-base vector quiet. Iraq 117+; Gulf 33+ KIA / 72+ WIA; Kuwait 1 KIA + 63 WIA (Day 97) carry.",
  },
};

export default data;
