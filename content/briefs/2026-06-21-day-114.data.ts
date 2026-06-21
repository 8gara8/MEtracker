import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'conditional',
    spillover: 'conditional',
    rationale: {
      direction:
        "Direction shifts from de-escalating to mixed for the first time since the signing — not because the war reignited, but because Iran's military publicly declared the memorandum already breached and proclaimed Hormuz 'closed' (Mehr, Bloomberg). The opposite vector ran the same day: CENTCOM logged 55 transits and 17M+ barrels and the postponed implementation talks reconvened with Vance, Witkoff and Kushner (NBC News, CBS News). Two genuinely opposed signals at once is the definition of mixed; the war stays terminated on paper while the parties fight over what the paper means.",
      risk7d:
        "Seven-day risk holds conditional. The dominant failure mode is no longer a signing collapse but a declaratory spiral — each side accusing the other of breach faster than the Bürgenstock table can set a performance marker. Iran's Foreign Ministry called shipping 'normal' while its military called the Strait closed, an intra-regime contradiction that itself signals the closure is a bargaining posture (Newsweek, NBC News). The nuclear file stays deferred: the IAEA is locked out of sensitive sites and 440.9 kg of 60% HEU is unverifiable (PBS).",
      spillover:
        "Spillover holds conditional, anchored on Lebanon. A day-old ceasefire absorbed one IDF KIA and a 27-fatality Israeli retaliation before being renewed under US pressure, with Netanyahu and Katz ordering the IDF to 'hold fire' (Jerusalem Post, Times of Israel). The §3.5.6 Israel-independence prior stays the active risk: the IDF remains in the south-Lebanon buffer zone Hezbollah cites as its pretext, and Iran has now converted Israel's strikes into its stated rationale for declaring the whole memorandum breached.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'Mehr / Bloomberg / NBC News / Newsweek',
      event:
        "Iran's military (Khatam al-Anbiya Central HQ) declared the Strait of Hormuz 'closed to vessel traffic' via Tasnim and Mehr, citing a US breach of MoU Article 1 and 'relentless' Israeli ceasefire violations in Lebanon — but CENTCOM said 55 merchant ships transited Saturday with 17M+ barrels, and Iran's own Foreign Ministry called shipping 'operating normally' hours earlier",
      summary:
        "The open IRGC-versus-Foreign-Ministry contradiction inside Tehran, plus a same-day CENTCOM count showing traffic rose, make the closure declaratory rather than physical — a political signal timed to the Bürgenstock talks (NBC News, Newsweek, Bloomberg).",
      impact:
        "Per §3.5.3 the gap between Tehran's words and the 55 transiting hulls is the signal: the memorandum is being contested through declarations, not weapons. Better than kinetic resumption, but a party bargaining from a Hormuz-closure accusation has hardened the table.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Jerusalem Post / Times of Israel / NBC News',
      event:
        "Lebanon's day-old ceasefire broke again: Hezbollah fired 50+ projectiles at IDF troops hours after the Friday truce — 147 rockets, 20 drones and 9 anti-tank missiles over 24 hours per Israel — killing one soldier and wounding at least 13; Israel struck across Nabatieh and the south, with Lebanese media reporting at least 27 killed and 26 wounded",
      summary:
        "Both sides then renewed the truce and Netanyahu and Katz ordered the IDF to 'hold fire,' but Israeli forces are staying in the south-Lebanon buffer zone that Hezbollah cites as its pretext (Times of Israel, Jerusalem Post).",
      impact:
        "The §3.5.6 Israel-independence prior stays the active risk. The daily break-retaliate-renew loop is now the war's central mechanism — durable only as long as Washington keeps forcing renewals.",
    },
    {
      id: 3,
      direction: 'de-escalating',
      importance: 'high',
      source: 'CBS News / NPR / Times of Israel',
      event:
        "The postponed implementation talks reconvene: VP Vance flew to Switzerland and envoys Witkoff and Kushner arrived ahead of Sunday 'technical-level' talks at Bürgenstock with Pakistani and Qatari mediators, Vance citing the Lebanon ceasefire and the nuclear file as priorities",
      summary:
        "This is the dated milestone Day 113 lacked — a convened session after the Bürgenstock postponement and Sharif's cancellation, with the mediator architecture intact (CBS News, NPR, Times of Israel).",
      impact:
        "The negotiation-capacity clock advances, but it convenes under a public Iranian breach claim. Execution is where the '80% complete' optimism died on Day 51; the test is whether the session produces a performance marker.",
    },
    {
      id: 4,
      direction: 'neutral',
      importance: 'medium',
      source: 'CBS News / Newsweek',
      event:
        "Trump posted that there will be 'NO TOLLS' in the Hormuz Strait during or after the 60-day window 'unless they are imposed by and for the United States of America,' a counter to Iran's closure leverage",
      summary:
        "The post reframes the toll question as a US instrument rather than an Iranian one, on the same day Iran invoked the Strait as pressure ahead of the talks (CBS News, Newsweek).",
      impact:
        "Revives the toll-institutionalization prior from the US side: the 'navigation services' question can resurface in the final-agreement phase, now with Washington as a potential toll-setter.",
    },
    {
      id: 5,
      direction: 'neutral',
      importance: 'medium',
      source: 'PBS NewsHour',
      event:
        "The nuclear file stays deferred and unverified: the IAEA remains unable to access several of Iran's most sensitive sites, with inspectors restricted to undamaged locations, and 440.9 kg of 60% HEU stays unaccounted; Grossi reports no active enrichment but movement detected near the stockpile",
      summary:
        "Vance says he hopes to make progress on the structure of nuclear talks at Bürgenstock, but Tehran has not confirmed any inspector-return or down-blending timeline (PBS, NPR).",
      impact:
        "The weaponization-clock prior carries per §3.5.6: the deal defers and pledges, it does not disarm. The first dated test remains whether inspectors physically re-enter the sensitive sites at all.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 (no new US casualties; declaratory phase, US delegation heading into Bürgenstock)',
      status:
        "No new US casualties. Washington's leverage stays the ~$24-25B relief that Iran 'won't get a dime' of until it performs over 60 days. Trump posted there will be 'NO TOLLS' in Hormuz 'unless they are imposed by and for the United States of America' — a counter-threat reviving the toll prior from the US side. Vance, with Witkoff and Kushner, leads the delegation into the Bürgenstock technical talks reconvening Sunday.",
    },
    israel: {
      cumulative: 'KIA: 54 (Iran-front 47 + Lebanon-front 7 truce-period) · WIA: 8,638+',
      delta: '+1 IDF KIA (Lebanon front; Hezbollah barrage hours after the Friday ceasefire)',
      status:
        "One Israeli soldier was killed and at least 13 wounded when Hezbollah fired 50+ projectiles at IDF troops hours after the Friday truce — 147 rockets, 20 drones and 9 anti-tank missiles over 24 hours per Israeli figures. Israel retaliated across Nabatieh and the south; Netanyahu and Katz then ordered the IDF to 'hold fire' as the truce was renewed, with Israeli forces staying in the south-Lebanon buffer zone.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new mass toll (Iran-front quiet; escalation declaratory, not kinetic)',
      status:
        "No verified new mass toll on the Iran front. Tehran's Day 114 escalation is declaratory: the military announced a Hormuz closure while suspending operations against Israel. The MoU's no-weapon pledge defers the nuclear file, but the IAEA stays locked out of sensitive sites and 440.9 kg of 60% HEU is unverifiable. HRANA 3,636+ and Hengaw 6,620+ carry; 3.2M displaced.",
    },
    other: {
      cumulative:
        'Lebanon MOH 3,783 killed / 11,699 injured (June 14 update; +27 reported June 20, pending revision); Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Bahrain none',
      delta: '+27 killed / +26 wounded reported in Lebanon (NBC counts 16 dead incl. 2 children)',
      status:
        "Lebanon takes the day's new toll: Lebanese media and civil defense reported at least 27 killed and 26 wounded (NBC counts at least 16 dead including two children) in the overnight-into-Saturday Israeli strikes across Nabatieh and the south. The Lebanon MOH war-cumulative (3,783 killed / 11,699 injured, June 14) is expected to revise upward. Iraq 117+; Gulf 33+ KIA / 72+ WIA; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
    },
  },
  exec:
    "Day 114 is the day the implementation friction turned into an open confrontation over the meaning of the memorandum — fought with declarations, not yet with weapons. Iran's military (Khatam al-Anbiya Central HQ) announced via Tasnim and Mehr that the Strait of Hormuz is 'closed to vessel traffic,' citing a US breach of MoU Article 1 — the immediate, all-fronts halt to operations — and 'relentless' Israeli ceasefire violations in Lebanon (Mehr, Bloomberg). The skeptical counter per §3.5.3 is decisive and same-day: US CENTCOM said 55 merchant ships transited Saturday carrying more than 17 million barrels, and Iran's own Foreign Ministry had said hours earlier that shipping was 'operating normally' — an open IRGC-versus-MFA contradiction inside Tehran (NBC News, Newsweek). The closure is a political signal aimed at the Bürgenstock table, not a maritime fact. Lebanon's day-old truce broke again: Hezbollah fired 50+ projectiles at IDF troops, killing one Israeli soldier and wounding at least 13; Israel struck across Nabatieh and the south, with Lebanese media reporting at least 27 killed, before both sides renewed the ceasefire and Netanyahu and Katz ordered the IDF to hold fire (Jerusalem Post, Times of Israel). The genuine positive: the postponed implementation talks reconvene today — Vance flew to Switzerland, Witkoff and Kushner arrived, and Pakistani and Qatari mediators join the Sunday session (CBS News, NPR). 30-day ceasefire probability eases to 66; direction shifts to mixed; spillover holds conditional.",
  implications: [
    {
      title:
        "The fight is now over what the memorandum means, not whether it holds — and Iran fired first, on paper",
      body:
        "Day 113's binding question was 'will it perform'; Day 114 answers with a declaratory escalation. Iran's military proclaimed Hormuz 'closed,' tying it explicitly to a US breach of Article 1 and to Israeli strikes in Lebanon (Mehr, Bloomberg). Skeptical counter per §3.5.3, and unusually strong: CENTCOM logged 55 transits and 17M+ barrels Saturday, and Iran's Foreign Ministry called shipping 'normal' hours earlier — the closure is a negotiating posture, not a maritime act (NBC News, Newsweek). Araghchi's framing — 'we have seen agreements go unimplemented, and we have seen agreements torn up' — pre-assigns blame to Washington exactly as the §3.5.3 prior warned. Under the multi-clock framework the negotiation-capacity clock still advances because the Bürgenstock session convenes today, but it now does so under a public breach claim. Analytical judgment: the deal is being contested through declarations rather than weapons, which is far better than kinetic resumption — but a party that announces a Hormuz closure on the eve of talks is bargaining from accusation, and the gap between Tehran's words and the 55 transiting hulls is itself the Day 114 signal.",
    },
    {
      title:
        "Lebanon remains the live front, and a day-old ceasefire is already a thin reed",
      body:
        "The §3.5.6 Israel-independence prior stays the active risk. Hezbollah fired 50+ projectiles at IDF troops hours after the Friday truce — 147 rockets, 20 drones and 9 anti-tank missiles over 24 hours per Israel — killing one soldier and wounding at least 13; Israel struck back across Nabatieh, with Lebanese media reporting at least 27 killed and 26 wounded (Jerusalem Post, Times of Israel, NBC News). Skeptical counter: the truce was renewed within the day and Netanyahu and Katz ordered the IDF to 'hold fire,' so the cycle is being contained rather than allowed to run; but the IDF is staying in the south-Lebanon buffer zone, which Hezbollah cites as its pretext, so the structural driver is unresolved. Under the multi-clock framework the coalition-cohesion clock worsens: Israel's strikes are now Iran's stated rationale for declaring the whole memorandum breached. Analytical judgment: the most likely path back to a wider war still runs through Lebanon, and Day 114 shows the daily truce-break-retaliate-renew loop is now the war's central mechanism — durable only as long as Washington keeps forcing renewals.",
    },
    {
      title:
        "Taiwan: the physical Strait stays open even as Iran says it is closed — the divergence is the whole story",
      body:
        "For Taiwan the Day 113 read was that the energy case finally turned on physical flow; Day 114 delivers the cleanest possible test of it. Iran declared Hormuz closed, but CENTCOM logged 55 merchant ships and 17M+ barrels transiting the same day, and Iran's own Foreign Ministry called traffic normal (NBC News, Newsweek, Bloomberg). Skeptical counter per §3.5.6: a declaratory closure that markets shrug off can still become a real one if Tehran chooses to enforce it, and Brent closed Friday at $80.57 before the weekend announcement, so Monday's open is the first market read — insurers and shipping lines price the gap between Iran's words and CENTCOM's count (CNBC). Trump's 'NO TOLLS… unless imposed by and for the United States' post revives the toll-institutionalization prior from the US side. Analytical judgment: the energy-infrastructure clock holds rather than improves — physical flow is strong but the political overhang caps it — and for Taiwan the LNG-cover-through-September case stays intact while the watch item sharpens to whether a paper closure converts to an enforced one. TSMC's 2026 CapEx near 8% carries.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties. Washington's leverage stays the ~$24-25B relief Iran 'won't get a dime' of until it performs over 60 days. Trump posted there will be 'NO TOLLS' in Hormuz 'unless they are imposed by and for the United States of America.' Vance, with Witkoff and Kushner, leads the delegation into the Bürgenstock technical talks reconvening Sunday.",
    israel:
      "+1 IDF KIA: one Israeli soldier was killed and at least 13 wounded when Hezbollah fired 50+ projectiles at IDF troops hours after the Friday ceasefire. Israel retaliated across Nabatieh; Netanyahu and Katz then ordered the IDF to 'hold fire' as the truce was renewed, with forces staying in the south-Lebanon buffer zone.",
    iran:
      "No verified new mass toll; Tehran's Day 114 escalation is declaratory, not kinetic. The MoU pledges no weapon and defers the nuclear file, but the IAEA stays locked out of sensitive sites and 440.9 kg of 60% HEU is unverifiable. HRANA 3,636+ and Hengaw 6,620+ carry; 3.2M displaced.",
    other:
      "Lebanon takes the day's toll: at least 27 killed and 26 wounded reported (NBC counts 16 dead incl. 2 children) in the Israeli strikes across Nabatieh and the south. The Lebanon MOH war-cumulative (3,783 / 11,699, June 14) is expected to revise upward. Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
  },
};

export default data;
