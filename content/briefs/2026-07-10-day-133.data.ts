import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction stays escalating: the exchange the MoU was signed to end did not terminate at one reciprocal round. US Central Command struck a second straight day, hitting roughly 90 targets — air defenses, coastal surveillance, missile and drone storage, naval capabilities, and logistics — killing at least 14 people and wounding dozens in Iran, the first verified deaths of the renewed exchange (Bloomberg, Times of Israel). Iran did not answer symmetrically; it widened, firing 10 ballistic missiles at Jordan's Al-Azraq base and a US command node while sending kamikaze drones at a Patriot battery in Kuwait, a Qatari early-warning radar, and Bahraini fuel tanks (RFE/RL, The National). The ladder Day 132 named as the binding test climbed rather than froze.",
      risk7d:
        "Seven-day risk stays extreme. Strikes were reported around the Bushehr nuclear plant perimeter and against a major China rail link — the war grazing both nuclear infrastructure and a China-bound logistics artery (Times of Israel, Arab News). US Central Command said it had 'ended' the round, a tentative pause, even as the IRGC warned any further US action would draw more attacks — a stand-down that is a threat away from resuming. Both the first verified Iranian deaths and a nuclear-perimeter strike arrived on the same day, and the exchange converges on a post-burial diplomatic window Guterres calls squandered rather than dead.",
      spillover:
        "Spillover turns more critical. Iranian fire crossed four host nations' airspace beyond the first-round Bahrain and Kuwait strikes — 10 ballistic missiles at Jordan's Al-Azraq air base (eight intercepted over Jordanian soil, only fragments falling), plus drones at a Patriot battery in Kuwait, an early-warning radar in Qatar, and fuel tanks in Bahrain, with sirens sounding across all three Gulf states (RFE/RL, Washington Times). Kuwait reported one person injured in stable condition; Jordan and Qatar reported no casualties. The GCC secretary-general called the attacks on Bahrain and Kuwait 'treacherous.' The Gulf-and-Levant base vector is now the dominant spillover channel.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'high',
      source: 'Bloomberg / Times of Israel / Arab News / Fars',
      event:
        "US Central Command struck Iran for a second straight day, hitting roughly 90 targets — air defenses, coastal surveillance, missile and drone storage, naval capabilities, and military logistics along Iran's coastline — with at least 14 people killed and dozens wounded in Iran; strikes were also reported around the perimeter of the Bushehr nuclear power plant and against a major rail link to China",
      summary:
        "Per §3.5.6 the ladder-climb the Day 132 brief named as the binding test is now real: the exchange did not terminate at one round, and the second wave produced the first verified Iranian deaths of the renewed fighting while grazing nuclear and China-bound infrastructure (Bloomberg, Times of Israel, Arab News).",
      impact:
        "The pivotal question shifts from whether the exchange climbs to whether CENTCOM's 'ended the round' pause holds, or a third strike day makes Trump's 'over' operational.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'RFE/RL / US News / The National',
      event:
        "Iran widened its retaliation beyond Bahrain and Kuwait: the IRGC fired 10 ballistic missiles at Jordan's Al-Azraq air base and a US 'command-and-control center in West Asia,' while the army launched kamikaze drones at a Patriot battery in Kuwait, an early-warning radar in Qatar, and fuel tanks in Bahrain; Jordan intercepted eight missiles with only fragments falling and no casualties, and Kuwait reported one person injured",
      summary:
        "Per §3.1 the salvo is an openly avowed IRGC claim across four host states — a widening, not a symmetric answer — with the target list an Iranian claim measured against Jordan's confirmation that it intercepted eight missiles over its own soil (RFE/RL, US News, The National).",
      impact:
        "Iranian fire now crosses five states' airspace over the same waterway, multiplying the miscalculation points and pulling Jordan and Qatar into an exchange they were not previously part of.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'Arab News / RFE/RL',
      event:
        "US Central Command said it had 'ended' the latest round of strikes — a tentative pause — even as the IRGC warned that any further US military action would draw additional attacks on American-linked facilities; neither Washington nor Tehran formally withdrew from the June 17 MoU",
      summary:
        "Per §3.5.3 the pause is a declaratory stand-down against a table neither side has formally left — a genuine off-ramp only if it is not a reload, with Iran having explicitly conditioned its next move on whether the US strikes again (Arab News, RFE/RL).",
      impact:
        "Whether the pause holds is the single load-bearing variable of the next 72 hours; a third strike day or a 'harsher' Iranian salvo makes the declaratory collapse operational.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: 'CNBC / UN News',
      event:
        "Brent crude held near $78.3 a barrel after its 5.2% jump — the strongest daily gain since May — with Hormuz transits down and concentrated on Iran-approved routes as the US-backed Omani corridor saw limited movement; the UN issued a global energy alert and the IMO condemned the 'reckless' ship attacks",
      summary:
        "Per §3.5.5 the war premium is sustained rather than spiking — the market holds a contested-corridor price rather than a closure price even as strikes touch a nuclear-plant perimeter and vessel tracking thins to Iran-approved lanes (CNBC, UN News).",
      impact:
        "The tape still reads 'contested, not closed'; a blockade reimposition, a reactor-proximate strike, or a second LNG hull hit is the next repricing trigger.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'Haaretz / UN Press / Al Jazeera',
      event:
        "Khamenei was buried at Mashhad's Imam Reza shrine on July 9 as crowds chanted 'Kill Trump,' with successor Mojtaba still unseen and recovering from the February 28 strike; UN Secretary-General Guterres warned the Security Council the exchange risked a wider war, urged an immediate ceasefire, and 'deeply regretted' that a planned Vienna technical round had been squandered",
      summary:
        "Per §3.5.6 two standing priors held under the escalation: an untested, unseen successor and a diplomatic track that survives by not being formally abandoned — Guterres eulogized a squandered round, not a dead process (Haaretz, UN Press).",
      impact:
        "The table is technically alive but the burial passed without decapitation and the succession remains opaque; whether Vienna reconvenes or 'over' becomes real is the open question.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 543',
      delta: '+0 confirmed (Iran fired 10 ballistic missiles at Jordan’s Al-Azraq base and a US command node plus drones at Kuwait, Qatar, and Bahrain; no reported US casualties, Jordan intercepted eight missiles)',
      status:
        "No confirmed new US casualties. Iran's second-phase retaliation across Jordan, Kuwait, Qatar, and Bahrain produced no reported US casualties; Jordan intercepted eight missiles and only fragments fell. US Central Command struck ~90 targets inside Iran on the second straight day and then said it had 'ended' the round.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (no new Israeli casualties; Lebanon seam quiet with no confirmed Hezbollah retaliation after the July 4 ten-strike escalation)',
      status:
        "No new Israeli casualties. The Lebanon seam stayed quiet; the exchange ran on the US-Iran axis, Israel maintained its refusal to withdraw, and Katz's standing 'marked for death' threat against Mojtaba carries.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 714 unclassified) · MOH ~3,482 killed / 26,550+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+14 verified (second US strike wave killed at least 14 and wounded dozens — the first verified deaths of the renewed exchange; strikes also reported at the Bushehr nuclear plant perimeter and a China rail link; ~440.9 kg of 60% HEU at Isfahan unverified since June 2025)',
      status:
        "The second US strike wave (~90 targets: air defenses, coastal surveillance, missile and drone storage, naval capabilities, logistics) killed at least 14 people and wounded dozens in Iran — the first verified deaths of the renewed exchange; strikes were also reported around the Bushehr nuclear plant perimeter and a major China rail link. HRANA 3,636+ (1,701 civ + 1,221 mil + 714 unclassified), MOH now ~3,482 / 26,550+, Hengaw 6,620+ mil, and 3.2M displaced carry; nuclear access stays barred.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 73+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 64 WIA',
      delta: '+1 WIA (Kuwait reported one person injured in stable condition in the drone attack; Jordan and Qatar reported no casualties)',
      status:
        "Kuwait's Defense Ministry reported at least one person injured (stable) in the drone attack; Jordan and Qatar reported no casualties. The Day 131 Hormuz vessel attacks damaged Qatari LNG and Saudi crude tankers with no casualties. The Lebanon seam stayed quiet; July 4 casualties remain unconfirmed. Lebanon toll source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129). Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 73+ WIA carry.",
    },
  },
  exec:
    "Day 133 climbed the escalation ladder Day 132 had only sketched. US Central Command struck Iran for a second straight day, hitting roughly 90 targets — air defenses, coastal surveillance, missile and drone storage, naval capabilities, and military logistics — with at least 14 people killed and dozens wounded in Iran, the first verified deaths of the renewed exchange; strikes were also reported around the perimeter of the Bushehr nuclear power plant and against a major rail link to China (Bloomberg, Times of Israel, Arab News, Fars). Iran widened its retaliation beyond Bahrain and Kuwait: the IRGC fired 10 ballistic missiles at Jordan's Al-Azraq air base and a US 'command-and-control center in West Asia,' while the army sent kamikaze drones at a Patriot battery in Kuwait, an early-warning radar in Qatar, and fuel tanks in Bahrain — Jordan intercepted eight missiles with only fragments falling and no casualties, and Kuwait reported one person injured in stable condition (RFE/RL, US News, The National, Washington Times). US Central Command then said it had 'ended' the round — a tentative pause — even as the IRGC warned any further US action would draw more attacks (Arab News). Khamenei was buried at Mashhad's Imam Reza shrine on July 9 as crowds chanted 'Kill Trump'; Mojtaba stayed unseen (Haaretz). Brent held near $78.3 after its 5.2% jump, the strongest daily gain since May (CNBC). UN Secretary-General Guterres warned the Security Council of a wider war and urged an immediate return to talks; neither side formally withdrew from the June 17 MoU (UN News). 30-day ceasefire probability falls to 18. Direction stays escalating.",
  implications: [
    {
      title:
        "The exchange climbed the ladder instead of terminating — a second US strike day, a widened Iranian answer, and the first verified deaths",
      body:
        "Day 132's binding question was whether the fire would freeze at one reciprocal round, as the June 28 cycle did, or climb. Day 133 answered: it climbed. US Central Command struck a second straight day, roughly 90 targets — air defenses, coastal surveillance, missile and drone storage, naval capabilities, and logistics — killing at least 14 people and wounding dozens, the first verified deaths of the renewed exchange (Bloomberg, Times of Israel). Iran did not answer symmetrically; it widened, firing 10 ballistic missiles at Jordan's Al-Azraq base and a US command node while sending drones at a Patriot battery in Kuwait, a Qatari early-warning radar, and Bahraini fuel tanks (RFE/RL, The National). Analytical judgment under the multi-clock framework: the coalition-cohesion clock now moves with the energy-infrastructure clock, because Iranian fire crossed Jordanian airspace — a state not previously in the exchange — and Jordan intercepted eight missiles over its own soil. Per §3.5.6, the Iran direct-confrontation prior hardens further: this is not deniable maritime harassment but an avowed, multi-state salvo. The escalation is bounded only by CENTCOM's statement that it had 'ended' the round; whether that holds is now the load-bearing variable, and the IRGC has already tied its next move to whether Washington strikes again.",
    },
    {
      title:
        "'Over' meets a tentative pause — the declaratory collapse has not yet become an operational one",
      body:
        "The sharpest tell of Day 133 is not a strike but a stand-down claim. CENTCOM said it had 'ended' the latest round even as the bases still smoked, and neither Washington nor Tehran formally withdrew from the June 17 MoU (Arab News, Al Jazeera). Analytical judgment: per §3.5.3, this is the same gap Day 132 flagged — Trump's 'over' is a principal's declaratory claim, not a signed termination — and the UN framing confirms it, with Guterres 'deeply regretting' a squandered Vienna technical round rather than eulogizing a dead process (UN News). The structure that has survived every prior shock — Geneva's postponement, the USS Spruance seizure, the oil-license revocation — is the same one holding here: a table nobody formally leaves. But the §3.5.3 lesson from the Day 51 collapse cuts both ways: optimistic and pessimistic principal framings have repeatedly overrun the facts, and a 'harsher' Iranian salvo or a third US strike day would make 'over' operational in a way no communiqué has yet. The 72-hour question narrows to whether CENTCOM's pause is a genuine off-ramp or a reload — and whether Guterres's ceasefire call finds any purchase before the next rung.",
    },
    {
      title:
        "Taiwan: strikes touch a nuclear-plant perimeter and a China rail line — the corridor's tail risk thickens again",
      body:
        "For Taiwan the day compounds Day 132's tail-risk read with two new structural facts. First, the strikes reportedly reached the perimeter of the Bushehr nuclear power plant and hit a major rail link to China — the war now grazing both nuclear infrastructure and a China-bound logistics artery, precisely the assets whose damage would convert a price premium into a supply event (Times of Israel, Arab News). Second, Iranian fire now crosses five states' airspace, widening the set of miscalculation points over the same waterway. §3.5.6 reasserts the exposure: roughly 38% of the island's LNG and 70% of its crude transit Hormuz against about 11 days of gas buffer, with TSMC's 2026 CapEx near 8%. Analytical judgment: Brent holding near $78.3 — up 5.2%, the strongest daily gain since May — still prices a contested-not-closed corridor a price-taker can absorb, and the mitigants hold (southern corridor open, cover through September, a premium not a closure) (CNBC). But a strike that touches a reactor perimeter is the kind of event that reprices tail risk regardless of the tape, and the durable hedges — US and Australian LNG (25%-US-by-2029), the Maanshan and Kuosheng restarts (2028-2029) — remain the only answers indifferent to whether the strait stays contested or tips to closed.",
    },
  ],
  casualtyNotes: {
    us:
      "No confirmed new US casualties. Iran's second-phase retaliation across Jordan, Kuwait, Qatar, and Bahrain produced no reported US casualties; Jordan intercepted eight missiles and only fragments fell. US struck ~90 targets inside Iran on the second straight day, then said it had 'ended' the round.",
    israel:
      "No new Israeli casualties. The Lebanon seam stayed quiet; the exchange ran on the US-Iran axis, and Katz's 'marked for death' threat carries.",
    iran:
      "The second US strike wave (~90 targets) killed at least 14 and wounded dozens — the first verified deaths of the renewed exchange; strikes also reported at the Bushehr nuclear plant perimeter and a China rail link. Nuclear access still barred; ~440.9 kg of 60% HEU at Isfahan unverified since June 2025.",
    other:
      "Kuwait reported one person injured (stable) in the drone attack; Jordan and Qatar reported no casualties. Day 131 Hormuz vessel strikes caused no casualties. Lebanon seam quiet; July 4 casualties unconfirmed. Lebanon toll source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129). Iraq 119+; Gulf 33+ KIA / 73+ WIA carry.",
  },
};

export default data;
