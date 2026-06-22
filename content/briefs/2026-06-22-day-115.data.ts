import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'conditional',
    spillover: 'conditional',
    rationale: {
      direction:
        "Direction holds at mixed, but the composition flips from Day 114. The day's two largest moves point opposite ways: the first implementation session under the memorandum actually convened at Bürgenstock — the dated milestone the June 19 postponement had denied — while President Trump threatened fresh strikes mid-talks and Iran attached explicit conditions to the Hormuz closure (NPR, CNBC, Times of Israel). Two genuinely opposed signals at once is the definition of mixed; the war stays terminated on paper while the parties bargain from mutual threat.",
      risk7d:
        "Seven-day risk holds conditional rather than rising. Trump's post that the US would 'hit Iran very hard again… only harder' reads as negotiating pressure — base strikes remain paused and the US delegation is at the table — but it reintroduces a kinetic tail the signed memorandum had pushed down, so the band's floor is no longer purely diplomatic (NPR, CNBC). The nuclear file stays the hardest agenda item: the IAEA is locked out of sensitive sites and its Board adopted a June 10 resolution urging cooperation (IAEA, ISIS).",
      spillover:
        "Spillover holds conditional, anchored on Lebanon. The renewed truce held into Day 115 and the comprehensive Israel–Hezbollah track is set for this week, but the IDF will stay in the southern buffer zone Hezbollah cites as its pretext, so the §3.5.6 Israel-independence prior stays the active driver (Times of Israel). Iran has tied reopening Hormuz to the Lebanon ceasefire being respected, making the southern front the explicit hinge of the energy file as well.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'high',
      source: 'NPR / CNBC / CBS News',
      event:
        "The first implementation talks under the memorandum convened at the Bürgenstock resort above Lake Lucerne: VP JD Vance, with envoys Steve Witkoff and Jared Kushner, met an Iranian delegation led by FM Abbas Araghchi and Parliament Speaker Mohammad Bagher Ghalibaf, with the Lebanon ceasefire and the nuclear file the stated agenda",
      summary:
        "This is the dated milestone Days 113–114 lacked — a convened session after the June 19 postponement, with the Pakistani–Qatari mediator architecture intact and Parliament's speaker at the table signaling domestic cover for Tehran (NPR, CNBC, Al Jazeera).",
      impact:
        "The negotiation-capacity clock advances. But execution is where the '80% complete' optimism died on Day 51; the test is whether the week yields a dated deliverable — demining start, inspector-return date, sanctions tranche — rather than more dueling leverage.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'NPR / CNBC',
      event:
        "President Trump posted that the US would 'hit Iran very hard again, just like we did last week, only harder' while Vance was leading the talks in Switzerland — a fresh-strike threat delivered during his own delegation's first session under the memorandum",
      summary:
        "Skeptical counter per §3.5.3: base strikes remain paused and the VP is at the table, so the threat reads as bad-cop pressure rather than imminent action — but it is the opposite of a confidence-building measure at a first session (NPR, CNBC).",
      impact:
        "The §3.5.6 coalition-fragility prior turns inward — from Israeli independence to US mixed messaging. A principal threatening to re-bomb the counterparty mid-talks reintroduces a kinetic tail the signed memorandum had pushed down.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Times of Israel / CNBC / Al Jazeera',
      event:
        "Iran hardened the Hormuz closure into a conditioned demand: Tasnim, citing a source close to the negotiating team, said the Strait will not reopen until the Lebanon ceasefire is respected and waivers permitting the sale of Iranian oil are issued, and Tehran floated mandatory vessel insurance — while CENTCOM repeated that 'Iran does not control the Strait of Hormuz' and that traffic flows",
      summary:
        "Unlike Day 114's bare declaration, the closure now carries published terms tying it to the two things Tehran most wants, reviving the toll-institutionalization prior from the Iranian side (Times of Israel, CNBC).",
      impact:
        "The energy-infrastructure clock worsens for the first time since the signing: the Strait is now bargaining collateral with conditions, and the chokepoint becomes the load-bearing issue of the talks rather than a side dispute.",
    },
    {
      id: 4,
      direction: 'neutral',
      importance: 'medium',
      source: 'Al Jazeera / Fortune',
      event:
        "Markets priced the weekend closure as real risk for the first time: Brent opened Monday around $81.7, up roughly 1.5% from Friday's $80.57 close, with shipping trackers reporting transits near zero and about 515 vessels anchored across the region",
      summary:
        "China, destination for ~40% of Hormuz crude, remains the market's rebalancing force and has kept prices off the $200 spike analysts once feared, so the move is a risk premium rather than a supply shock (Fortune, Al Jazeera).",
      impact:
        "For Taiwan this is the first conversion of the paper closure into priced risk — the Day 114 watch item. LNG cover through September and TSMC 2026 CapEx near 8% hold; the watch sharpens to whether mandatory insurance converts premium into physical interruption.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'Times of Israel / IAEA / ISIS',
      event:
        "Lebanon's renewed truce held into Day 115 with the comprehensive Israel–Hezbollah talks set for this week, though the IDF will stay in the southern buffer zone and Lebanon's war toll was revised up to 4,057 killed and 12,121 wounded; on the nuclear file the IAEA stays locked out, its Board having adopted a June 10 resolution urging Iran to cooperate",
      summary:
        "The truce holding is the positive; the unresolved buffer-zone presence and the revised-upward toll are the offsets, and the nuclear file remains unverified with the 60% HEU stock held at Esfahan, Natanz and Fordow (Times of Israel, IAEA, ISIS).",
      impact:
        "Lebanon stays the live front and is now also the hinge of the energy file, since Iran ties Hormuz to the ceasefire. The weaponization prior carries per §3.5.6: the deal defers and pledges, it does not disarm.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 (no new US casualties; first MoU session convened under a Trump strike threat)',
      status:
        "No new US casualties. The first MoU implementation session convened with Vance leading the delegation alongside Witkoff and Kushner, but Trump simultaneously threatened to 'hit Iran very hard again… only harder' — counter-pressure cutting against his own negotiators. Washington's leverage stays the ~$24-25B relief Iran 'won't get a dime' of until it performs over 60 days; oil-sale waivers are now one of Iran's two stated conditions for reopening Hormuz.",
    },
    israel: {
      cumulative: 'KIA: 54 (Iran-front 47 + Lebanon-front 7 truce-period) · WIA: 8,638+',
      delta: '+0 (renewed Lebanon truce held through Day 115 after the Day 114 flare-up)',
      status:
        "No new Israeli casualties as the renewed Lebanon truce held through Day 115 after Day 114's flare-up, which had cost one IDF soldier and at least 13 wounded. Israel and Hezbollah are set to meet this week toward a comprehensive agreement, but the IDF will stay in the southern Lebanon buffer zone Hezbollah cites as its pretext, leaving the structural driver unresolved.",
    },
    iran: {
      cumulative:
        'LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · MOH ~3,468 killed / 26,500+ wounded · Hengaw 6,620+ mil · 3.2M displaced',
      delta: '+0 verified new mass toll (Iran-front quiet; posture declaratory and diplomatic)',
      status:
        "No verified new mass toll on the Iran front; Tehran's posture stays declaratory and diplomatic rather than kinetic. The nuclear file is the Bürgenstock agenda's hardest item: the IAEA remains unable to access Iran's most sensitive sites, its Board adopted a June 10 resolution urging cooperation, and the 60% HEU stock held at Esfahan, Natanz and Fordow stays unverifiable. HRANA 3,636+ and Hengaw 6,620+ carry; 3.2M displaced.",
    },
    other: {
      cumulative:
        'Lebanon 4,057 killed / 12,121 wounded (June 20 revision, up ~270 from June 14); Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Bahrain none',
      delta: '+274 killed / +422 wounded in Lebanon vs the June 14 baseline (June 20 revision, incl. Day 114 flare-up)',
      status:
        "Lebanon's war-cumulative toll was revised upward to 4,057 killed and 12,121 wounded (June 20), up roughly 270 from the June 14 baseline and reflecting the Day 114 flare-up before the truce was renewed. Iraq 117+; Gulf 33+ KIA / 72+ WIA; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
    },
  },
  exec:
    "Day 115 delivers the milestone Days 113 and 114 kept promising — and immediately complicates it. The postponed implementation talks convened at the Bürgenstock resort above Lake Lucerne: VP JD Vance, with envoys Steve Witkoff and Jared Kushner, met an Iranian delegation led by Foreign Minister Abbas Araghchi and Parliament Speaker Mohammad Bagher Ghalibaf for the first session under the memorandum, with the Lebanon ceasefire and the nuclear file the stated agenda (NPR, CNBC). The skeptical counter per §3.5.3 is immediate: President Trump used the same hours to post that the United States would 'hit Iran very hard again, just like we did last week, only harder,' a kinetic threat aimed at the table from the principal whose own VP was sitting at it (NPR, CNBC). Iran, in turn, hardened the Hormuz closure from a bare declaration into a conditioned demand — Tasnim said the Strait stays shut until the Lebanon ceasefire is respected and oil-sale waivers are issued, and Tehran floated mandatory vessel insurance — while CENTCOM repeated that 'Iran does not control the Strait of Hormuz' and that traffic flows (Times of Israel, CNBC). Markets moved this time: Brent opened around $81.7, up roughly 1.5% from Friday's $80.57 close, with trackers showing transits near zero (Al Jazeera, Fortune). Lebanon's renewed truce held and the comprehensive track is set for this week, though the IDF stays in the buffer zone and the toll was revised to 4,057 killed (Times of Israel). 30-day ceasefire probability holds at 66; direction stays mixed; spillover holds conditional.",
  implications: [
    {
      title:
        "The talks convened — and the principal threatened to bomb the counterparty mid-session",
      body:
        "Days 113–114 asked whether the postponed session would convene and produce a marker; Day 115 answers half of it. The first implementation talks under the memorandum opened at Bürgenstock, Vance leading with Witkoff and Kushner across from Araghchi and Ghalibaf, Lebanon and the nuclear file on the agenda (NPR, CNBC, CBS News). Skeptical counter per §3.5.3, and pointed: Trump posted that the US would 'hit Iran very hard again… only harder' during the same window, so the session convened under a live threat from the very principal it represents — the §3.5.6 coalition-fragility prior turned inward, from Israeli independence to US mixed messaging. Under the multi-clock framework the negotiation-capacity clock advances on the convening itself, but a threat to re-bomb the counterparty mid-talks is the opposite of a confidence-building measure. Analytical judgment: convening is genuine progress and far better than the Day 51 collapse pattern, but a first session that opens with the US president promising harder strikes and the Iranian side promising a closed Strait is a negotiation conducted from mutual threat, not from the performance markers the memorandum needs. The test stays whether the week produces a dated deliverable — a demining start, an inspector-return date, a sanctions tranche — rather than another round of dueling leverage.",
    },
    {
      title:
        "Iran converts the Hormuz closure into a priced, conditioned instrument",
      body:
        "Day 114's closure was declaratory — CENTCOM logged 55 transits against Tehran's words. Day 115 hardens it: via Tasnim, Iran set explicit reopening conditions — the Lebanon ceasefire respected and oil-sale waivers issued — and floated mandatory vessel insurance, reviving the toll-institutionalization prior from the Iranian side (Times of Israel, CNBC). Skeptical counter per §3.5.3: CENTCOM still insists 'Iran does not control the Strait' and that traffic flows, and the closure is unverified at the chokepoint itself; but unlike Day 114 the market moved, with Brent up ~1.5% to roughly $81.7 and trackers reporting transits near zero and ~515 vessels anchored (Al Jazeera, Fortune). The gap between Tehran's conditions and CENTCOM's denial is narrowing into a real dispute rather than a rhetorical one. Under the multi-clock framework the energy-infrastructure clock worsens for the first time since the signing: the Strait is now bargaining collateral with published terms. Analytical judgment: tying Hormuz to Lebanon and to sanctions relief is a coherent escalation of leverage that makes the chokepoint the load-bearing issue of the talks — Iran has made reopening contingent on the two things it most wants, and the longer the paper closure is priced as real, the more a market-driven closure becomes self-fulfilling regardless of how many hulls transit.",
    },
    {
      title:
        "Taiwan: the paper closure begins converting to a priced one — the watch item Day 114 named",
      body:
        "Day 114's Taiwan read was that the energy case had turned on physical flow, and the watch item was whether a paper closure converts to an enforced one. Day 115 shows the first conversion — not to physical enforcement, but to market pricing. Brent rose ~1.5% to around $81.7 on the conditioned closure, and shipping trackers now report near-zero transits with ~515 vessels anchored, even as CENTCOM disputes that the Strait is closed (Al Jazeera, Fortune). Skeptical counter per §3.5.6: China, destination for ~40% of Hormuz crude, remains the market's rebalancing force and has kept prices off the $200 spike analysts feared, so the ceiling holds for now, and a ~$1.7 move is a risk premium, not a supply shock. Analytical judgment: for Taiwan the LNG-cover-through-September case stays intact and TSMC's 2026 CapEx near 8% carries, but the energy-infrastructure clock worsening is the signal — the divergence Day 114 flagged is now being arbitrated by insurers and tanker owners, and if the mandatory-insurance demand sticks, the cost of Hormuz transit rises for every cargo whether or not a single ship is turned back. The next conversion to watch is insurance premium into physical interruption.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US casualties. The first MoU session convened with Vance leading the delegation, but Trump threatened to 'hit Iran very hard again… only harder' mid-talks. Leverage stays the ~$24-25B relief Iran 'won't get a dime' of until it performs; oil-sale waivers are now one of Iran's two conditions for reopening Hormuz.",
    israel:
      "No new Israeli casualties; the renewed Lebanon truce held through Day 115 after the Day 114 flare-up (one IDF KIA). Comprehensive Israel–Hezbollah talks are set for this week, but the IDF stays in the southern buffer zone Hezbollah cites as its pretext.",
    iran:
      "No verified new mass toll; Tehran's posture is declaratory and diplomatic. The IAEA stays locked out of sensitive sites, its Board adopted a June 10 resolution urging cooperation, and the 60% HEU at Esfahan, Natanz and Fordow is unverifiable. HRANA 3,636+ and Hengaw 6,620+ carry; 3.2M displaced.",
    other:
      "Lebanon's toll was revised up to 4,057 killed / 12,121 wounded (June 20), ~270 above the June 14 baseline and reflecting the Day 114 flare-up before the truce renewed. Iraq 117+; Gulf 33+ KIA / 72+ WIA; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
  },
};

export default data;
