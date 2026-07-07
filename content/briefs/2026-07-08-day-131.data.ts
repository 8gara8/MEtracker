import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'critical',
    spillover: 'conditional',
    rationale: {
      direction:
        "Direction turns escalating for the first time in the mourning week. The Iran-US kinetic standdown — quiet for roughly ten days — broke at sea: US officials attribute to the IRGC three strikes on commercial vessels crossing the Strait of Hormuz between Monday night and Tuesday morning, the most in a single day since the June deal, including the Qatari LNG carrier Al Rekayyat, laden from Ras Laffan and set afire off Limah, Oman, and a Saudi-flagged crude tanker (CNN, Bloomberg, Al Jazeera). The first LNG hull hit of the war reopens the maritime axis the MoU was built to close. Iran's non-claim — state TV citing 'ignored warnings' while CENTCOM and the IRGC stay silent — reads as calibrated deniability rather than full rupture, but the direction of travel is unambiguous: kinetic where there had been pause (Business Standard).",
      risk7d:
        "Seven-day risk rises to critical. Washington pulled a core deliverable within hours, revoking the OFAC general license that had authorized Iranian oil sales through August 21 and allowing only a ten-day wind-down into blocked US accounts on the ground that the MoU is 'entirely performance-based' (NOTUS, CNBC, Axios). With the July 9 Mashhad burial and the targeted July 11 Doha resumption both still ahead, the window now holds a live escalation-retaliation loop at sea layered over the funeral's discrete tripwires. The binding question is whether the strikes were a one-off leverage salvo that the burial-to-talks gap reabsorbs, or the first turn of a cycle that pulls the waiver revocation into counter-measures and collapses the July 11 resumption before it convenes.",
      spillover:
        "Spillover holds conditional but broadened from land to sea. The vessels struck were Qatari and Saudi-flagged, drawing two Gulf monarchies directly into the kinetic tape for the first time since the June 28 base strikes, though neither has announced a military response and the strait's southern corridor stayed open — at least eight Japan-linked ships still exited via a route near Iran (Al Jazeera, gCaptain). The Lebanon seam stayed quiet with no confirmed Hezbollah retaliation after the July 4 ten-strike escalation, and Israel maintained its refusal to withdraw. The maritime vector is now the live spoiler that the Lebanon vector was on Day 130.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'high',
      source: 'CNN / Bloomberg / Al Jazeera / Business Standard',
      event:
        "US officials say Iran's Islamic Revolutionary Guard Corps struck three commercial vessels transiting the Strait of Hormuz between Monday night and Tuesday morning — the most in any single day since the June ceasefire — including the Qatari LNG carrier Al Rekayyat, laden from Ras Laffan and hit by a projectile about eight nautical miles east of Limah, Oman, which caught fire, and a Saudi-flagged crude tanker damaged in the same window; no casualties or spill were reported",
      summary:
        "Per §3.1 the standdown's defining break came at sea and on contested attribution: US officials name the IRGC, Iranian state television says a vessel was hit only after ignoring warnings, and neither CENTCOM nor the IRGC formally commented — the first LNG hull struck since the war began, reopening the maritime axis the MoU was built to close (CNN, Bloomberg, Al Jazeera, Business Standard).",
      impact:
        "The roughly ten-day kinetic pause is over on the Hormuz axis; the pivotal question is whether this was a single leverage salvo the burial-to-talks gap reabsorbs or the first turn of an escalation cycle into July 11.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'NOTUS / CNBC / Axios',
      event:
        "The Trump administration revoked the OFAC general license that had authorized Iranian oil sales through August 21, citing the Hormuz attacks; a US official said the MoU is 'entirely performance-based,' with a ten-day grace period to wind down existing transactions only if payment goes into a blocked, interest-bearing US account",
      summary:
        "Per §3.5.3 Washington pulled the single most concrete MoU deliverable it controlled within hours of the strikes — converting 'won't get a dime until it performs' from rhetoric into a withdrawn license (NOTUS, CNBC, Axios).",
      impact:
        "The revocation removes the sanctions-relief leg the 60-day roadmap rested on; whether it is a reversible pressure move or a structural unwinding of the deal is the July 11 test.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'medium',
      source: 'CNBC / Trading Economics / gCaptain',
      event:
        "Energy repriced on the strikes: Brent settled up about 3% at $74.16 a barrel, a one-week high after trading below $72, and European gas rose as much as 4.5% in early Asian trade; the strait's southern corridor stayed open, with at least eight Japan-linked ships — including five supertankers — still exiting via a route near Iran",
      summary:
        "Per §3.5.5 the war premium the substitution tape had erased returned in part: a roughly $2 Brent jump and a 4.5% European gas move price the first LNG hit and the waiver revocation, though open transit through the southern corridor caps the spike (CNBC, Trading Economics, gCaptain).",
      impact:
        "The market read is that the corridor is contested again, not closed — but the LNG-specific move is the signal Taiwan's price-taker tape had not shown in 130 days.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: 'CNN / Al Jazeera',
      event:
        "Even as the maritime seam ignited, the diplomatic table held: Qatar's foreign ministry spokesperson Majed al-Ansari said the Doha indirect US-Iran talks made 'positive progress,' and lead negotiator Ghalibaf called implementing the ceasefire 'difficult, but achievable'; the burial at the Imam Reza shrine in Mashhad remains set for July 9 ahead of a targeted July 11 resumption",
      summary:
        "Per §3.5.3 the optimistic framing is a mediator's and a negotiator's claim measured against three ships hit and a license revoked the same day — the talks survived the strikes, but the gap between 'positive progress' and a withdrawn waiver is itself the information (CNN, Al Jazeera).",
      impact:
        "That the table did not collapse on the day of the worst maritime escalation since the deal is the thread of continuity; whether it survives to July 11 is the open question.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'Time / Al Jazeera',
      event:
        "The funeral neared its close with successor Mojtaba Khamenei still unseen since the war began — Defense Secretary Hegseth said in March he had been 'wounded and likely disfigured,' with later reporting he may have lost a leg — and Foreign Ministry spokesman Baghaei said UN inspectors were not scheduled to examine the nuclear sites struck last year, contradicting Vice President Vance, while IAEA chief Grossi maintains inspections will occur",
      summary:
        "Per §3.5.6 both standing priors held: the regime-cohesion signal (a supreme leader absent and reportedly barred from his father's burial) and the weaponization-clock signal (access to the struck sites still denied, ~440.9 kg of 60% HEU at Isfahan unverified since June 2025) (Time, Al Jazeera).",
      impact:
        "The two structural weaknesses the surface calm had not resolved persist into the escalation — an untested successor and an unverifiable nuclear endpoint frame whatever July 11 produces.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 543',
      delta: '+0 (no US personnel casualties; the kinetic standdown broke at sea with three IRGC-attributed strikes on commercial shipping, and Washington revoked the Iran oil-sales license in response)',
      status:
        "No new US casualties. The mutual standdown ended on the Hormuz axis: US officials attribute three strikes on commercial vessels to the IRGC, and the administration revoked the OFAC oil-sales license the same day, calling the MoU 'entirely performance-based.' The Doha track survived, with a resumption targeted July 11 after the July 9 burial.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (no new Israeli casualties; Lebanon seam quiet with no confirmed Hezbollah retaliation after the July 4 ten-strike escalation)',
      status:
        "No new Israeli casualties. The Lebanon seam stayed quiet; Israel maintained its refusal to withdraw. Katz's 'marked for death' threat against Mojtaba carries as the backdrop to the reported burial security veto.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 714 unclassified) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new mass toll (the kinetic break was maritime, not on Iranian soil; nuclear access still barred — ~440.9 kg of 60% HEU at Isfahan unverified since June 2025)',
      status:
        "No verified new mass toll; the standdown broke at sea rather than over Iran. Successor Mojtaba stayed unseen and reportedly barred from the July 9 Mashhad burial; FM spokesman Baghaei said inspectors are not scheduled to examine the struck sites. HRANA 3,636+ (1,701 civ + 1,221 mil + 714 unclassified), MOH ~3,468 / 26,500+, Hengaw 6,620+ mil, and 3.2M displaced carry.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 72+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97)',
      delta: '+0 KIA / +0 verified WIA (Hormuz strikes hit commercial shipping — Qatari LNG and Saudi crude tankers — with no casualties reported; Lebanon July 4 strike casualties still unconfirmed)',
      status:
        "The Hormuz strikes damaged Qatari and Saudi-flagged commercial vessels with no casualties or spill reported. The Lebanon seam stayed quiet; July 4 strike casualties remain unconfirmed. The Lebanon toll stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129). Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 72+ WIA carry.",
    },
  },
  exec:
    "Day 131 broke the standdown. The Iran-US kinetic pause that had held for roughly ten days ended at sea: US officials say the IRGC struck three commercial vessels transiting the Strait of Hormuz between Monday night and Tuesday morning — the most in any single day since the June ceasefire — including the Qatari LNG carrier Al Rekayyat, laden from Ras Laffan, hit by a projectile about eight nautical miles east of Limah, Oman, and set afire, and a Saudi-flagged crude tanker damaged in the same window (CNN, Al Jazeera, Bloomberg). It is the first LNG hull struck since the war began; no casualties or spill were reported. Iran did not claim the attacks — state television said one vessel was hit after ignoring warnings, and neither CENTCOM nor the IRGC formally commented (Business Standard, Al Jazeera). Washington answered by revoking the OFAC general license that had authorized Iranian oil sales through August 21, calling the MoU 'entirely performance-based' and allowing only a ten-day wind-down into blocked US accounts (NOTUS, CNBC). Energy repriced: Brent settled up 3% at $74.16, a one-week high, and European gas rose as much as 4.5% (CNBC, Trading Economics). Against the kinetic down-leg, the diplomatic table survived — Qatar's foreign ministry said the Doha indirect talks made 'positive progress,' and Ghalibaf called implementation 'difficult, but achievable,' with the Mashhad burial set for July 9 (CNN, Al Jazeera). 30-day ceasefire probability falls to 52. Direction turns escalating.",
  implications: [
    {
      title:
        "The standdown broke at sea, and the deal's sanctions leg was pulled within hours — escalation and unwinding on the same day",
      body:
        "Day 131's defining event was the end of the kinetic pause and the first partial unwinding of the MoU in the same twenty-four hours. US officials attribute to the IRGC three strikes on commercial vessels crossing the Strait of Hormuz — the most in a single day since the June ceasefire — including the first LNG hull hit of the war, the Qatari carrier Al Rekayyat, set afire off Oman (CNN, Bloomberg, Al Jazeera). Washington's answer was immediate and structural, not rhetorical: OFAC revoked the general license authorizing Iranian oil sales through August 21, allowing only a ten-day wind-down into blocked US accounts on the stated ground that the MoU is 'entirely performance-based' (NOTUS, CNBC, Axios). Analytical judgment under the multi-clock framework: the energy-infrastructure clock and the negotiation-capacity clock moved against each other on the same day — a strike that reopened the corridor the deal was built to close, met by the withdrawal of the sanctions relief that was the corridor's price. Per §3.5.6, the Hormuz toll-and-closure prior, dormant under the substitution tape, is live again. The binding test is whether the revocation is a reversible pressure lever — pulled to be restored if the strikes stop — or the first structural piece removed from a 60-day roadmap that cannot hold if its deliverables come off one by one.",
    },
    {
      title:
        "Iran did not claim the strikes, and the Doha table did not collapse — the war's calibrated-salvo pattern, tested again",
      body:
        "The most telling feature of the escalation was what did not happen. Iran did not claim the attacks: state television said a vessel was hit after ignoring warnings, and neither CENTCOM nor the IRGC formally commented (Business Standard, Al Jazeera). And the diplomatic table held — Qatar's foreign ministry called the Doha indirect talks 'positive progress,' and Ghalibaf called implementation 'difficult, but achievable,' with the Mashhad burial still set for July 9 (CNN, Al Jazeera). Analytical judgment: this fits the §3.5.6 Iran direct-confrontation prior read as calibrated, leverage-seeking action pitched below the threshold of open avowal — the June 28 base strikes read the same way in hindsight. Per §3.5.3, the 'positive progress' framing is a mediator's claim that must be weighed against three ships hit and a license revoked the same day; the gap between the words and the withdrawn waiver is itself the signal. The two readings sit in tension and should be held together: Tehran may be pricing leverage into the July 11 resumption without intending to blow it up, or the maritime cycle may pull the waiver revocation into counter-measures that overrun the talks. Which one governs is the single question the burial-to-talks gap will answer.",
    },
    {
      title:
        "Taiwan: the first LNG hull struck in 131 days ends the 'no cargo hit' pillar the calm rested on",
      body:
        "For Taiwan the day changed in kind, not degree. The standing assessment through Day 130 rested on a specific fact — no LNG cargo had been hit in the war — and that fact is gone: the Qatari carrier Al Rekayyat, laden from Ras Laffan, was struck and set afire exiting Hormuz, and European gas rose as much as 4.5% on the news (gCaptain, CNBC). §3.5.6 reasserts the exposure it now tests directly: roughly 38% of the island's LNG and 70% of its crude transit Hormuz against about 11 days of gas buffer, with TSMC's 2026 CapEx near 8%. The mitigants held — the southern corridor stayed open, at least eight Japan-linked ships still exited, cover runs through September, and Brent's move to $74 is a premium, not a closure (Trading Economics, gCaptain). Analytical judgment: the risk a price-taker's tape cannot see — a cargo-specific strike on the exact class of vessel Taiwan depends on — moved from hypothetical to realized, even though no Taiwan-bound hull was hit. That is the repricing the standing section has flagged for 130 days, arriving in miniature. The durable answer is unchanged and now more urgent: US and Australian LNG (25%-US-by-2029) and the Maanshan and Kuosheng restarts (2028-2029) are the only hedges indifferent to whether the next projectile finds a Taiwan cargo.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties; the standdown broke at sea, not on Iranian soil. The administration revoked the OFAC oil-sales license the same day, calling the MoU 'entirely performance-based'; the Doha resumption is targeted July 11 after the burial.",
    israel:
      "No new Israeli casualties. The Lebanon seam stayed quiet; Israel maintained its refusal to withdraw, and Katz's 'marked for death' threat carries.",
    iran:
      "No verified new mass toll; the kinetic break was maritime. Mojtaba stayed unseen and reportedly barred from the Mashhad burial; Baghaei said inspectors are not scheduled to examine the struck sites; ~440.9 kg of 60% HEU at Isfahan unverified since June 2025.",
    other:
      "The Hormuz strikes damaged Qatari LNG and Saudi crude tankers with no casualties reported. Lebanon seam quiet; July 4 casualties still unconfirmed. Lebanon toll source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129). Iraq 119+; Gulf 33+ KIA / 72+ WIA carry.",
  },
};

export default data;
