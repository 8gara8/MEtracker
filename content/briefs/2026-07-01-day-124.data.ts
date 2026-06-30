import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'conditional',
    spillover: 'conditional',
    rationale: {
      direction:
        "Direction shifts from de-escalating to mixed because the day split. On the kinetic and energy axes it held de-escalatory: the mutual standdown ran a third day with no new US or Iranian strikes, Hormuz tanker traffic kept recovering, and Brent traded near $73, off roughly 20% on the month (Trading Economics, CNBC). But the diplomatic consolidation Day 123 priced in did not arrive — Qatar said there were no plans for direct US–Iran talks, Kushner and Witkoff left Doha without meeting Iranians, and Baghaei said 'no meeting at any level with the American side' was scheduled (Fox News, NBC News). Skeptical counter per §3.5.3, vindicated inside 24 hours: the 'return to the table' was a mediated side-channel, not a negotiation. A halt neither capital converts into direct talks is a pause, not an off-ramp.",
      risk7d:
        "Seven-day risk stays conditional rather than low. The strikes have not resumed and the base-on-base mode is three days retired, but the consolidation is missing: Qatar confirms no direct meeting, Iran reports 'no tangible progress,' the $6 billion in frozen funds has not moved, and the General License still expires August 21 (CBS News, NBC News, Fox News). The risk is no longer a live exchange; it is a stalled pause that either firms into an implementation protocol or reverts to the tit-for-tat that produced four US strike rounds and an IRGC base salvo inside 72 hours. The nuclear sequencing standoff, now carrying a hardline deterrence demand, is the parallel clock that can still poison the shipping track.",
      spillover:
        "Spillover holds conditional as the Gulf-base vector stays quiet but Lebanon worsens. No new strikes hit Kuwait or Bahrain under the standdown. On the Blue Line §3.5.6 governs and sharpens: Israel kept striking southern Lebanon, Lebanon's army said a soldier was killed between Kfar Rumman and Nabatieh, and — the new signal — both the US and Iran publicly faulted Israel for striking through the deal, the Israel-independence prior straining the coalition in the open (NBC News, Time, Al Jazeera). The Gulf cooled; Lebanon did not; and the seam between them is widening.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'Fox News / NBC News / ABC News / The Hill',
      event:
        "The Doha track downgraded from the technical talks Day 123 anticipated to no direct contact: Qatar's foreign ministry said there were no plans for direct US–Iran talks on Tuesday, White House envoys Jared Kushner and Steve Witkoff were present in Doha without meeting Iranian officials, and Iran's spokesman Esmaeil Baghaei said 'no meeting at any level with the American side' was scheduled, with Iran's only Doha business a mediated session with Qatar on implementing the interim deal",
      summary:
        "Skeptical counter per §3.5.3, vindicated within 24 hours: Day 123's 'return to the table' was a Qatar-mediated side-channel, not a US–Iran negotiation, and the party that said the talks were 'not confirmed' did not confirm them (Fox News, NBC News).",
      impact:
        "The negotiation-capacity clock that improved on Day 123 stalls at 'active but not advancing.' The stall — not a strike — is the day's most important signal, because it is the variable that decides whether the standdown sets or slips.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'CBS News / Al Jazeera / Fox News',
      event:
        "The implementation track stalled on its two load-bearing items: Qatar said $6 billion in frozen Iranian funds it holds had not yet been transferred, and Iran reported 'no tangible progress,' while Baghaei said clearance of mines in the Strait of Hormuz is governed by the memorandum of understanding and that Tehran 'sees no need for third-party intervention,' vowing to keep overseeing traffic through the strait",
      summary:
        "Per §3.5.6 the toll-institutionalization prior reasserts itself: the deal runs Hormuz 'toll-free' for 60 days but leaves charges open afterward, and Iran's insistence on sole administration is how a temporary waiver hardens into permanent leverage (CBS News, Al Jazeera).",
      impact:
        "The active-deadline clock holds at the August 21 window. With strikes paused, the contest is now over funds and corridor governance — the two questions Doha was meant to answer and both sides walked away from.",
    },
    {
      id: 3,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Trading Economics / CNBC / Al Jazeera',
      event:
        "The kinetic standdown held a third day and the energy tape kept easing: Brent traded near $73 after touching $74.01, on course for a roughly 20% monthly and 23% quarterly decline as trapped Gulf oil was released and Hormuz tanker traffic recovered; against that, one open-source tracker logged Strait transit slowing again, the divergence the daily tape masks",
      summary:
        "Per §3.1 the divergence is the signal: the price and the export volume say reopening, the transit count says intermittent disruption, and both are lagging witnesses to a corridor whose operating rules are still unwritten (Trading Economics, CNBC).",
      impact:
        "The energy-infrastructure clock holds rather than improves. A falling price measures the standdown's survival, not the deal's; the structural question — who administers passage — is exactly what Doha left open.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'NBC News / Time / Al Jazeera / Lebanese Army',
      event:
        "Lebanon escalated against the grain: Israel kept striking southern Lebanon, Lebanon's army said a soldier was killed between Kfar Rumman and Nabatieh, and both the United States and Iran publicly faulted Israel for continuing to strike through the framework Hezbollah has rejected as 'null and void,' with Tehran having previously cited Israeli Lebanon strikes as grounds to pressure Hormuz",
      summary:
        "Skeptical counter per §3.5.6: the front optimists read as the war's first political movement is a one-signatory document the armed party rejects and an ally strikes through, now with Washington and Tehran openly faulting Israel (NBC News, Time).",
      impact:
        "The coalition-cohesion clock worsens and the humanitarian clock stays critical. The Israel-independence prior is now visible in the open; the Blue Line is the vector most likely to undo the Gulf standdown.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: 'NPR / Al Jazeera / ISIS / Foreign Policy',
      event:
        "The nuclear file held its sequencing standoff with a maximalist overlay: IAEA chief Grossi said the memorandum of understanding 'explicitly' provides that nuclear material and facilities will be supervised by the IAEA and that inspections are 'going to happen,' Iran insisted any visit comes only after a final agreement and sanctions relief, and Trump restated the objective is 'the denuclearization of Iran'; the ~440.9 kg of 60% HEU likely still at Esfahan stays unverified since June 2025",
      summary:
        "The carry that is hardening: the inspection question is no longer just sequencing but leverage, with maximal positions stacking on both ends — IAEA supervision 'explicit' versus inspections only after full relief (NPR, ISIS).",
      impact:
        "The active-deadline clock carries at the August 21 window. The Doha track is scoped to Hormuz, not enrichment; the nuclear file is the parallel clock that can poison the shipping talks if either maximalism prevails.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 (kinetic standdown holds a third day; no new US strikes and no new Iranian strikes on US posture; no direct US–Iran meeting in Doha)',
      status:
        "No new US casualties. The mutual standdown held a third day; White House envoys Kushner and Witkoff sat in Doha without a direct meeting with Iranian officials, Qatar saying no high-level US–Iran talks were planned and Baghaei saying 'no meeting at any level with the American side' was scheduled. US business in Doha is the interim-deal implementation track run through Qatar.",
    },
    israel: {
      cumulative: 'KIA: 54 (Iran-front 47 + Lebanon-front 7 truce-period) · WIA: 8,638+',
      delta: '+0 verified Israeli (operations on the Lebanon front; US and Iran both fault Israel for striking through the deal)',
      status:
        "No verified new Israeli casualties on the Iran front. Israeli forces kept striking southern Lebanon through the framework Hezbollah rejected; both the US and Iran publicly faulted Israel for continuing to strike, the clearest sign yet of the §3.5.6 Israel-independence prior straining the coalition in the open.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new mass toll (kinetic standdown; weaponization file unmoved — ~440.9 kg of 60% HEU unverified since June 2025)',
      status:
        "No verified new mass toll under the standdown. The nuclear file held in dispute — Grossi says IAEA supervision is 'explicit' in the MoU and inspections are 'going to happen,' Iran says only after a final deal and sanctions relief, Trump restated 'denuclearization'; ~440.9 kg of 60% HEU at the Esfahan tunnel complex stays unverified since June 2025. Off the war ledger, HRANA's 40 executions (March 18–June 3) and 3.2M displaced carry.",
    },
    other: {
      cumulative:
        'Lebanon ~4,250 killed / 12,190+ wounded (Lebanese Health Ministry via Al Jazeera); Bahrain + Kuwait struck June 28 (Bahrain: residential building near airport damaged, no deaths; Kuwait: two ballistic missiles intercepted); Iraq 117+; Gulf 33+ KIA / 72+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97)',
      delta: '+1 Lebanon (a Lebanese army soldier killed between Kfar Rumman and Nabatieh amid continued Israeli strikes); Gulf-base vector quiet under the standdown',
      status:
        "Lebanon's army said a soldier was killed between Kfar Rumman and Nabatieh as Israeli strikes continued; the cumulative Lebanon toll holds near ~4,250 killed / 12,190+ wounded (Lebanese Health Ministry via Al Jazeera). The Gulf-base vector stayed quiet under the standdown — no new strikes on Kuwait or Bahrain. Iraq 117+; Gulf 33+ KIA / 72+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97) carry.",
    },
  },
  exec:
    "Day 124 keeps the guns quiet but withholds the diplomacy meant to consolidate the pause. For a third day neither side resumed the base-on-base exchange, Hormuz tanker traffic kept recovering, and Brent traded near $73 — off roughly 20% on the month (Trading Economics, CNBC). But the Doha track Day 123 read as a 'return to the table' turned out to be no table at all: Qatar's foreign ministry said there were no plans for direct US–Iran talks, envoys Kushner and Witkoff were in Doha without meeting Iranian officials, and Iran's spokesman Baghaei said 'no meeting at any level with the American side' was scheduled, recasting Doha as Iran–Qatar mediated talks on implementing the interim deal and releasing $6 billion in frozen funds Qatar said had not moved (Fox News, NBC News, Al Jazeera). Skeptical counter per §3.5.3, vindicated inside 24 hours: Day 123's optimism rested on talks one party would not confirm, and the party did not confirm them. Iran rejected third-party intervention on Hormuz mine-clearance; the nuclear file held its sequencing standoff — Grossi calls IAEA supervision 'explicit' in the MoU, Iran says only after a final deal — and Trump restated maximal 'denuclearization' (NPR, ISIS). Lebanon cut the other way: Israel kept striking the south, a Lebanese soldier was killed near Nabatieh, and the US and Iran both faulted Israel for striking through the deal (NBC News, Time). 30-day ceasefire probability eases to 56 from 57; direction is mixed because the guns stayed quiet while the table, the funds, and the Strait's governance all stalled.",
  implications: [
    {
      title:
        "The Day 123 skeptical counter came true inside 24 hours — the 'return to the table' was never a direct negotiation, and the negotiation-capacity clock has stalled",
      body:
        "Day 123 raised the ceasefire probability on the strength of both sides halting and 'returning to the table'; Day 124 shows the table was a mediated side-channel, not a US–Iran negotiation (Fox News, NBC News). Per §3.5.3, the discipline was to treat the optimistic framing as a claim, not a fact — and the fact arrived fast: Qatar's foreign ministry said no direct talks were planned, Kushner and Witkoff left Doha without meeting Iranians, and Baghaei said 'no meeting at any level' was scheduled, with Iran's only Doha business implementation talks with Qatar on the interim deal and the frozen $6 billion (CBS News, Al Jazeera). Quantify the gap per §3.5.5: zero direct US–Iran meetings against a White House that on Day 122 advertised 'high-level meetings,' and $6 billion still untransferred. The standdown is the genuine good news — three days without a base strike — but a halt neither capital will convert into a direct negotiation is a pause held in place by exhaustion and oil prices, not a settlement taking shape. Analytical judgment under the multi-clock framework: the negotiation-capacity clock, which improved for the first time on Day 123, has stalled at 'active but not advancing,' and that stall — not a new strike — is the day's most important signal, because it is the variable that decides whether the standdown sets or slips.",
    },
    {
      title:
        "The contest has moved from strikes to implementation, and it is stuck on the two levers that matter — the frozen funds and who governs Hormuz",
      body:
        "With the guns quiet, the war is now being fought over the interim deal's mechanics, and both load-bearing items stalled on Day 124. Qatar confirmed the $6 billion in Iranian funds it holds has not been released, the performance-for-relief sequence Washington insists on ('won't get a dime until it performs') colliding with Tehran's demand for relief first (Fox News, CBS News). On the Strait, Baghaei said mine-clearance is governed by the memorandum of understanding and that Iran 'sees no need for third-party intervention,' while vowing to keep overseeing traffic (Al Jazeera). Per §3.5.6, the standing toll-institutionalization prior reasserts itself: the interim deal runs Hormuz 'toll-free' for 60 days but leaves charges open afterward, and Iran's insistence on sole administration is how a temporary waiver hardens into permanent leverage. Quantify per §3.5.5: Brent near $73, down ~20% on the month and ~23% on the quarter, says the corridor is functioning — but the price measures the standdown's survival, not the deal's, and one tracker still logged transit slowing again. Analytical judgment: the energy-infrastructure clock holds rather than improves, because the question Doha was supposed to answer — who administers passage — is exactly the question both sides walked away from. A falling oil price is the lagging witness to a governance fight that has not been settled.",
    },
    {
      title:
        "Taiwan: a third quiet day is reprieve, not resolution — and the governance question Doha dodged is precisely the one a price-taker cannot hedge",
      body:
        "For Taiwan the tape keeps improving and the structure keeps not: Brent near $73, no LNG cargo hit in 124 days, Gulf exports near pre-war, cover through September, and TSMC's 2026 CapEx near 8% all carry (Trading Economics, CNBC). Skeptical counter per §3.5.3: the relief is real, but Day 124's lesson is that the standdown bought time without buying a rule for the Strait. §3.5.6 reasserts the exposure the price hides — roughly 38% of the island's LNG and 70% of its crude transit Hormuz against about 11 days of gas cover — and the precise thing left unresolved in Doha is who controls that passage. A buyer at the end of the chokepoint has no vote in whether Iranian 'oversight' becomes the operating rule. Watch the transmission belt the day surfaced: Iran has tied Hormuz pressure to Israeli strikes in Lebanon before, and on Day 124 Israel kept striking while a Lebanese soldier was killed near Nabatieh — the path by which a Blue Line escalation reaches a Taiwanese gas bill. Analytical judgment: the durable hedges are the ones indifferent to today's tape and to Doha's stall — diversification toward US and Australian cargoes (the 25%-US-LNG-by-2029 goal) and the Maanshan and Kuosheng restarts (2028–2029). A standdown buys time; only non-Hormuz supply buys security.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties under the standdown's third day. White House envoys Kushner and Witkoff were in Doha without a direct meeting with Iranian officials; Qatar said no high-level US–Iran talks were planned and Baghaei said 'no meeting at any level' was scheduled. US Doha business is the interim-deal implementation track run through Qatar.",
    israel:
      "No verified new Israeli casualties on the Iran front. Operations continued on the Lebanon front — Israel kept striking the south; both the US and Iran faulted Israel for striking through the deal Hezbollah rejects.",
    iran:
      "No verified new mass toll under the standdown. Nuclear file in dispute — Grossi 'explicit' MoU supervision and 'going to happen' vs Iran 'only after a final deal,' Trump restating 'denuclearization'; ~440.9 kg of 60% HEU unverified since June 2025. HRANA's 40 executions (March 18–June 3) and 3.2M displaced carry.",
    other:
      "Lebanon: a Lebanese army soldier killed between Kfar Rumman and Nabatieh amid continued Israeli strikes; cumulative toll holds near ~4,250 killed / 12,190+ wounded (Lebanese Health Ministry). Gulf-base vector quiet under the standdown. Iraq 117+; Gulf 33+ KIA / 72+ WIA; Kuwait 1 KIA + 63 WIA (Day 97) carry.",
  },
};

export default data;
