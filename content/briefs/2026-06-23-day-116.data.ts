import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'de-escalating',
    risk7d: 'conditional',
    spillover: 'conditional',
    rationale: {
      direction:
        "Direction shifts from mixed to de-escalating for the first time since the June 17 signing. Day 115's two opposed vectors resolved toward the positive: the first implementation round formally concluded with a published 60-day roadmap, a High-Level Committee, working groups on the nuclear file, sanctions and dispute resolution, and an immediate commencement of technical talks (NPR, CNBC, Times of Israel). The decisive corroboration is priced, not rhetorical — Brent fell to roughly $78.4, unwinding the war's risk premium rather than building it, with Goldman cutting its Q4 forecast (Trading Economics, Yahoo Finance). The shift is real but bounded: it rests on announced commitments, several still unconverted to physical delivery.",
      risk7d:
        "Seven-day risk holds conditional rather than easing to low, governed by §3.5.3. Vance's announcement that Iran agreed to invite IAEA inspectors back is a pledge from a US principal, not a verified inspection — no inspector has physically entered and the ~440.9 kg of 60% HEU at Esfahan, Natanz and Fordow remains unverified since the June 2025 strikes (Korea Times, ISIS). Trump's 'hit Iran very hard again… only harder' post stands unretracted, the kinetic tail the memorandum had pushed down and which briefly stalled the talks. The band's floor is no longer purely diplomatic, so it cannot drop to low until commitments convert to acts.",
      spillover:
        "Spillover holds conditional, anchored on Lebanon. The renewed June 19 truce held into Day 116 and the comprehensive Israel–Hezbollah track moves to Washington for June 23–25 sessions, with a US–Iran–Lebanon de-confliction cell now established to police violations (CBS News, NPR). The offsets are unretired: the IDF retains 'full operational freedom' and its chief restated the goal as 'defending the north,' Hezbollah says it will not tolerate continued occupation, and weekend strikes killed at least 27 before the truce steadied (Times of Israel, Al Jazeera). The §3.5.6 Israel-independence prior stays the active driver.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'high',
      source: 'NPR / CNBC / Times of Israel',
      event:
        "The first high-level round under the memorandum formally concluded early Monday at Bürgenstock: mediators Qatar and Pakistan announced the US and Iran agreed on 'a roadmap towards reaching a final deal within 60 days,' with a High-Level Committee overseeing working groups on the nuclear file, sanctions and dispute resolution, and an immediate commencement of technical talks running through the week",
      summary:
        "This converts Day 115's convening into structure — named committees, a sequenced agenda and a communication line to avoid incidents in Hormuz — the institutional scaffolding the June 19 postponement and the Day 51 collapse both lacked (NPR, CNBC, Times of Israel).",
      impact:
        "The negotiation-capacity clock advances from 'session convened' to 'mechanism established.' The test moves from whether the parties will talk to whether the working groups produce a dated nuclear and sanctions deliverable inside the 60-day window.",
    },
    {
      id: 2,
      direction: 'de-escalating',
      importance: 'high',
      source: 'Korea Times / SCMP / The Hill / ISIS',
      event:
        "VP JD Vance announced that Iran agreed to invite IAEA inspectors back into the country, calling it 'a major milestone… the first step in permanently ending a nuclear weapons program in Iran' — the public surfacing of the IAEA side letter Witkoff disclosed overnight, under which DG Grossi may bring US nuclear experts to Tehran to account for the 60% HEU stock",
      summary:
        "Skeptical counter per §3.5.3: this is an invitation announced by a US principal, not a verified entry. Iran suspended IAEA cooperation in July 2025 and no inspector has seen the ~440.9 kg of 60% HEU since; a pledge to invite is not access (Korea Times, SCMP, ISIS).",
      impact:
        "The weaponization clock improves on paper for the first time since the lockout, but the binding test is physical: an inspector at Esfahan, Natanz or Fordow with eyes on the stockpile. Until then the deal still defers and pledges rather than disarms.",
    },
    {
      id: 3,
      direction: 'de-escalating',
      importance: 'high',
      source: 'Trading Economics / Yahoo Finance / Goldman Sachs',
      event:
        "The oil market unwound the war's risk premium: Brent slid to roughly $78.4 after opening near $81.1, extending the reversal from Monday's ~$81.7, as Gulf supply normalized — Kuwait resumed production and Saudi supertankers transited the Strait. Goldman Sachs cut its Q4 Brent forecast to $80 from $90 and projected Gulf crude exports back to pre-war levels by the end of July",
      summary:
        "This is the verifiable counterweight to Iran's declared closure: prices fall as physical flow returns, the inverse of the Day 115 risk-premium build. The market is pricing the roadmap, not the IRGC's closure rhetoric (Trading Economics, Yahoo Finance).",
      impact:
        "The energy-infrastructure clock improves materially. A falling Brent with rising transits is the single hardest piece of evidence that the de-escalation is real rather than announced — markets are harder to spin than statements.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: 'Iran International / CNBC / CNN / Kpler',
      event:
        "Hormuz stayed contested on paper but open in fact. The IRGC-aligned Tasnim held that the Strait should not reopen until at least $12B in frozen assets is released, oil-sanction waivers are implemented and Israel withdraws from Lebanon, with the IRGC navy warning of mines — while CENTCOM reported a record 55 merchant ships and 17M+ barrels transiting on June 20 and Kpler logged 20+ tankers, the most since June 2",
      summary:
        "The divergence is now also internal to Tehran: FM Araghchi claims the oil-export waivers are already secured and the blockade lifted, undercutting the IRGC's precondition framing (Iran International, CNBC, CNN).",
      impact:
        "The chokepoint is reverting from bargaining collateral to background dispute. When the foreign ministry and the Guard publish contradictory conditions, the closure reads as domestic positioning rather than an operational plan.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'Times of Israel / Al Jazeera / CBS News',
      event:
        "Lebanon's renewed June 19 truce held into Day 116 but stayed fragile: the comprehensive Israel–Lebanon track moves to Washington for sessions on June 23–25, facilitated through the new de-confliction cell, even as the IDF retains 'full operational freedom' and its chief restated the goal as 'defending the north.' Weekend strikes after Hezbollah ambushed advancing troops killed at least 27 before the truce steadied",
      summary:
        "Hezbollah leader Naim Kassem rejects leaving the south under fire as 'surrender'; Israel keeps the buffer zone Hezbollah cites as pretext — the structural impasse the comprehensive track must resolve (Times of Israel, Al Jazeera, CBS News).",
      impact:
        "Spillover stays the binding constraint. The de-confliction cell is the first institutional brake on the Lebanon clock, but the buffer-zone presence keeps the §3.5.6 Israel-independence prior live and unretired.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'medium',
      source: 'CBS News / NBC News',
      event:
        "President Trump's threat to 'hit Iran very hard again, just like we did last week, only harder' if Tehran did not rein in its Lebanese proxies stood unretracted into Day 116, after Iran's foreign-ministry spokesman Esmaeil Baghaei said the published threat had briefly led Tehran to refuse to continue the four-party session before talks resumed",
      summary:
        "Skeptical counter per §3.5.3 cuts both ways: base strikes remain paused and the round still produced a roadmap, so the threat reads as bad-cop pressure — but a principal threatening fresh strikes mid-talks is a standing destabilizer, not a confidence-building measure (CBS News, NBC News).",
      impact:
        "The coalition-cohesion clock stays strained. The roadmap survived the threat, which is the positive; that the threat was needed, and persists, is the reason seven-day risk cannot fall to low.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 (no new US casualties; first negotiating round closed with a roadmap under a standing Trump strike threat)',
      status:
        "No new US casualties. The first round closed with a 60-day roadmap, working groups on the nuclear file, sanctions and dispute resolution, and a Hormuz incident-avoidance line; VP Vance announced Iran agreed to invite IAEA inspectors back. Washington's leverage stays the ~$24-25B in frozen-asset and sanctions relief Iran 'won't get a dime' of until it performs over the 60-day window, even as Trump's 'only harder' strike threat stands unretracted.",
    },
    israel: {
      cumulative: 'KIA: 54 (Iran-front 47 + Lebanon-front 7 truce-period) · WIA: 8,638+',
      delta: '+0 (renewed June 19 Lebanon truce held into Day 116; comprehensive track moves to Washington June 23–25)',
      status:
        "No new Israeli casualties as the renewed June 19 Lebanon truce held into Day 116. The comprehensive Israel–Hezbollah track moves to Washington for June 23–25, brokered through the new de-confliction cell, but the IDF retains 'full operational freedom' and its chief restated the goal as 'defending the north,' leaving the buffer-zone driver unresolved.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new mass toll (Iran front quiet; posture diplomatic, executions continuing off the war ledger)',
      status:
        "No verified new mass toll on the Iran front; Tehran's posture stays diplomatic. Iran agreed to invite IAEA inspectors back, but the ~440.9 kg of 60% HEU at Esfahan, Natanz and Fordow stays unverified since June 2025 and no inspector has entered. Off the war ledger, HRANA counts 40 political and security executions between March 18 and June 3; 3.2M Iranians remain displaced.",
    },
    other: {
      cumulative:
        'Lebanon 4,057 killed / 12,121 wounded (June 20 revision); Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Bahrain none',
      delta: '+0 verified (Lebanon toll holds at the June 20 revision as the renewed truce steadied; weekend strikes folded into that figure)',
      status:
        "Lebanon's war-cumulative toll holds at 4,057 killed / 12,121 wounded (June 20 revision); the at-least-27 killed in the weekend strikes that preceded the renewed truce are folded into that figure rather than added on top. Iraq 117+; Gulf 33+ KIA / 72+ WIA; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
    },
  },
  exec:
    "Day 116 is the morning after the breakthrough, and for the first time since the June 17 signing the evidence points one way: de-escalation. The first high-level round under the memorandum formally concluded at Bürgenstock with mediators Qatar and Pakistan announcing a 'roadmap towards reaching a final deal within 60 days,' a High-Level Committee, working groups on the nuclear file, sanctions and dispute resolution, and an immediate start to technical talks (NPR, CNBC, Times of Israel). VP JD Vance announced that Iran agreed to invite IAEA inspectors back, calling it 'a major milestone' (Korea Times, SCMP). The decisive corroboration is priced, not rhetorical: Brent slid to roughly $78.4 from an ~$81.1 open as Gulf supply normalized, and Goldman cut its Q4 forecast to $80, projecting exports back to pre-war levels by end-July (Trading Economics, Yahoo Finance). The §3.5.3 counters keep the shift bounded. Vance's inspector 'milestone' is an invitation, not an entry — the ~440.9 kg of 60% HEU at Esfahan, Natanz and Fordow stays unverified since June 2025 (ISIS). Trump's 'only harder' strike threat stands unretracted, having briefly stalled the talks (CBS News). And the IRGC's Tasnim still conditions Hormuz reopening on $12B, waivers and an Israeli withdrawal — even as Araghchi claims the waivers are already secured (Iran International). Lebanon's truce held but fragile, the comprehensive track moving to Washington June 23–25. 30-day ceasefire probability rises to 72; direction shifts to de-escalating; spillover holds conditional.",
  implications: [
    {
      title:
        "The roadmap converts convening into machinery — but the machinery hasn't moved anything yet",
      body:
        "Day 115 asked whether the convened session would produce a dated deliverable; Day 116 answers that it produced the machinery to generate them. The first round closed with a 60-day roadmap, a High-Level Committee, working groups on the nuclear file, sanctions and dispute resolution, a Hormuz incident-avoidance line and an immediate start to technical talks — the institutional scaffolding the June 19 postponement and the Day 51 collapse both lacked (NPR, CNBC, Times of Israel). VP Vance's announcement that Iran agreed to invite IAEA inspectors back is the headline, framed as 'a major milestone… the first step in permanently ending a nuclear weapons program' (Korea Times, SCMP). Skeptical counter per §3.5.3, and decisive: an invitation is not an inspection. Iran suspended cooperation in July 2025, no inspector has seen the ~440.9 kg of 60% HEU since, and the side letter contemplates Grossi bringing US experts to Tehran — a plan, not a visit (ISIS). Under the multi-clock framework the negotiation-capacity clock advances from 'will they talk' to 'will the working groups deliver.' Analytical judgment: structure is the right thing to build and far better than Day 115's dueling-leverage pattern, but every deliverable the roadmap names — a sanctions tranche actually paid, an inspector actually at Fordow, a demining start actually logged — remains prospective. The 60-day clock now has a mechanism; what it does not yet have is a single completed act.",
    },
    {
      title:
        "The market, not the mediators, is the most credible evidence — and it says de-escalation",
      body:
        "The strongest signal on Day 116 is the one no party controls. Brent slid to roughly $78.4 after opening near $81.1, extending the reversal from Monday's ~$81.7, as Gulf supply normalized — Kuwait resumed production, Saudi supertankers transited the Strait — and Goldman cut its Q4 Brent forecast to $80 from $90, projecting Gulf exports back to pre-war levels by the end of July (Trading Economics, Yahoo Finance). This is the inverse of Day 115, when the conditioned closure built a risk premium; the premium is now unwinding. Skeptical counter per §3.5.3: the IRGC-aligned Tasnim still holds Hormuz should stay shut until $12B is released, waivers are implemented and Israel leaves Lebanon, and the IRGC navy warned of mines (Iran International). But CENTCOM logged a record 55 ships and 17M+ barrels on June 20, Kpler counted 20+ tankers, and FM Araghchi claims the waivers are already secured — so even Tehran's own officials contradict the closure framing (CNBC, CNN). Under the multi-clock framework the energy-infrastructure clock improves materially for the first time since the signing. Analytical judgment: statements can be spun and committees can stall, but a falling Brent against rising physical transits is hard evidence that operators, insurers and refiners are pricing the war as winding down. The chokepoint is reverting from load-bearing issue to background dispute — and that reversion, more than any joint statement, is why direction shifts to de-escalating.",
    },
    {
      title:
        "Taiwan: the acute LNG threat recedes as Hormuz flows — but the structural exposure is unchanged",
      body:
        "For sixteen weeks the Taiwan read tracked one question: would the Hormuz disruption convert to a physical interruption of the LNG and crude on which the island depends for roughly 38% of its gas and 70% of its oil, against about 11 days of LNG cover. Day 116 answers it in the relieving direction — flows are returning, the backlog is clearing, and Brent is falling, so the acute-shock scenario the IEA called the worst energy disruption in modern history is receding rather than arriving (Trading Economics, Yahoo Finance). Skeptical counter per §3.5.6: the relief is conditional on a 60-day roadmap whose deliverables are unconverted, and Taiwan's exposure is structural, not cyclical — the same 11-day buffer and the same single chokepoint will be there at the next crisis. Analytical judgment: the LNG-cover-through-September case holds and TSMC's 2026 CapEx near 8% carries, and the immediate procurement scramble — spot helium up 70–100% at the peak — should ease as transits normalize. But the war has functioned as a live stress test, and the lesson Taipei should bank is the one the crisis taught, not the relief it is now delivering: diversification toward Australian and US cargoes and the Maanshan/Kuosheng nuclear restart timeline (2028–2029) are the durable hedges, because the structural vulnerability the blockade exposed outlasts the ceasefire that is now, tentatively, forming.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties. The first round closed with a 60-day roadmap, working groups on nuclear/sanctions/dispute resolution and a Hormuz incident-avoidance line; Vance announced Iran agreed to invite IAEA inspectors back. Leverage stays the ~$24-25B relief Iran 'won't get a dime' of until it performs; Trump's 'only harder' threat stands unretracted.",
    israel:
      "No new Israeli casualties; the renewed June 19 Lebanon truce held into Day 116. The comprehensive Israel–Hezbollah track moves to Washington June 23–25 through the new de-confliction cell, but the IDF keeps 'full operational freedom' and the buffer zone Hezbollah cites as its pretext.",
    iran:
      "No verified new mass toll; Tehran's posture is diplomatic. Iran agreed to invite IAEA inspectors back, but the ~440.9 kg of 60% HEU at Esfahan, Natanz and Fordow stays unverified since June 2025 and no inspector has entered. HRANA counts 40 political/security executions March 18–June 3; 3.2M displaced.",
    other:
      "Lebanon's toll holds at 4,057 killed / 12,121 wounded (June 20 revision); the at-least-27 killed in the weekend strikes before the renewed truce are folded into that figure, not added. Iraq 117+; Gulf 33+ KIA / 72+ WIA; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
  },
};

export default data;
