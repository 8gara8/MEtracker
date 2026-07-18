import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction stays escalating: Day 141 pushed the US campaign into a seventh consecutive strike night and turned the maritime war lethal. CENTCOM struck Iranian air defense, coastal radar and military logistics for the seventh straight day; Iran said seven people were killed and warned the conflict 'will spread,' and Kuwait reported ground-force troops wounded in an overnight Iranian barrage (CENTCOM, ABC News, Al Jazeera). At sea, at least nine vessels have been hit since July 6 — a seafarer killed and three injured on the crude tanker Al Bahyah, eleven hurt on the Mombasa B — as Iran's anti-ship missiles forced ships off the US-protected Oman-coast route (CNBC, NPR). Per §3.5.3 the 'will spread' line is a threat, but the seventh strike day and the first mariner death on the protected lane are facts, not rhetoric.",
      risk7d:
        "Seven-day risk stays extreme, still bracketed by Trump's one-week fuse. Trump reaffirmed that 'next week comes the power plants,' vowing to hit power plants and bridges unless Iran negotiates and leaving a Kharg Island seizure on the table, while Iran answered it would 'crush' regional targets and treat Hormuz as a 'red line' (Fox News, CNBC). The named trigger has not changed: Iran's standing order for the Houthis to close Bab el-Mandeb is conditioned on precisely the power-plant strike Trump is threatening. The only brake is the tape — Brent ticked up to about $85.95, up roughly 2%, registering the severe Hormuz threat but still pricing nowhere near the $150-200 dual-closure tail (Trading Economics, Bloomberg).",
      spillover:
        "Spillover stays critical and is now maritime as much as territorial. The counter-blockade is a shooting campaign against neutral-flag civilian shipping — Norwegian, Indian and other crews among the casualties — with Hormuz functionally re-closed and only a trickle transiting dark (CNBC, Bloomberg). Kuwait absorbed a fresh Iranian barrage; the Houthis, still awaiting an IRGC order on Bab el-Mandeb, fired missiles at Saudi Arabia, breaking a four-year truce (Al Jazeera, Foreign Policy). The strain now cuts inside the coalition too: the collapsed Netanyahu-Trump meeting exposed a widening US-Israel split, with Trump reportedly told by Arab leaders that the Israeli premier is an obstacle to regional peace (Axios, Times of Israel). China and Russia hold their pro-Tehran line (Washington Institute).",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'CENTCOM / ABC News / Al Jazeera',
      event:
        "CENTCOM launched a seventh consecutive round of strikes on Iranian military targets — air defense systems, coastal radar and military logistics — as Iran said seven people were killed in the latest wave and warned the war 'will spread,' and Kuwait's military reported several ground-force personnel wounded and facilities damaged in an overnight Iranian ballistic-missile-and-drone attack",
      summary:
        "Per §3.5.3 the 'will spread' warning is Iranian rhetoric, but the seventh straight strike day is CENTCOM-acknowledged and answers Day 140's open question — the tempo did not break at six, it ran to a full week (CENTCOM, ABC News, Al Jazeera).",
      impact:
        "A week of unbroken nightly strikes with no pause, plus a widening Gulf retaliation footprint, hardens the war into a sustained campaign — raising the floor under any settlement and giving Iran a daily domestic case to escalate rather than sign.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'CNBC / NPR / Bloomberg',
      event:
        "Maritime-risk executives called the Strait of Hormuz a 'worst-case scenario,' with the threat level raised to 'severe,' as Iran hit its ninth-plus ship since July 6; a seafarer was killed and three injured aboard the crude tanker Al Bahyah off Oman and eleven were hurt on the Mombasa B, with Iran firing anti-ship missiles to force vessels off the US-protected Oman-coast route",
      summary:
        "Per §3.5.5 the numbers are the story: 14 ships transited last Sunday (four crude) versus 37 the prior week — roughly a 60% drop — and Hormuz is largely closed again, a trickle crossing with transponders dark (CNBC, NPR, Bloomberg).",
      impact:
        "The first mariner death on the lane the US Navy is protecting turns the blockade-versus-counter-blockade standoff into a lethal shooting war over civilian shipping, and each strike day spent protecting tankers invites the next Iranian salvo against them.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'Axios / Times of Israel',
      event:
        "The Saturday Trump-Netanyahu meeting the prior brief flagged never materialized: White House officials were surprised by Israeli press reports of a session that had never been scheduled, Netanyahu had sought an appointment for two weeks, and Israeli officials suggested he stayed home anticipating a US escalation against which Iran might retaliate on Israel",
      summary:
        "Per §3.5.3 the read-behind is contested, but the fact is a widening split — Trump was reportedly urged by Arab leaders that Netanyahu is an obstacle to regional peace and has openly criticized Israel's continued Lebanon strikes as a threat to any deal (Axios, Times of Israel).",
      impact:
        "A US-Israel rift at the exact moment Trump is threatening Iran's infrastructure complicates coalition management: Washington wants a quick win and an off-ramp while Jerusalem prefers an open-ended campaign, and neither can fully control the other.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Fox News / CNBC',
      event:
        "Trump reaffirmed his one-week ultimatum — 'next week comes the power plants' — vowing to knock out Iran's power plants and bridges unless Tehran negotiates and leaving on the table a seizure of Kharg Island, which handles more than 90% of Iran's oil exports, as Iran warned it would 'crush' regional targets and called Hormuz a 'red line'",
      summary:
        "Per §3.5.3 this is coercion, not diplomacy — a dated countdown to infrastructure strikes wrapped in a nominal 'unless they negotiate' clause — and the fuse is the same trigger as Iran's standing Bab el-Mandeb order (Fox News, CNBC).",
      impact:
        "A US power-plant strike would simultaneously satisfy Trump's threat and meet the condition Iran set for ordering the Houthis to close Bab el-Mandeb, so a single decision could open the second chokepoint the market is still not pricing.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: 'IranWire / Middle East Eye',
      event:
        "Foreign Minister Araghchi said Iran-Oman legal and technical talks on managing Strait transit continue and that the strait is 'open for all commercial vessels' that 'cooperate with our navy,' blaming the US blockade — even as the IRGC Navy insisted the strait remains closed and that ships must obtain Iranian permits before transit",
      summary:
        "Per §3.5.3 the divergence is the signal: the diplomat says 'open,' the IRGC says 'closed, permits required,' and President Pezeshkian is separately insisting the Supreme Leader never barred negotiations amid hardliner pressure (IranWire, Middle East Eye).",
      impact:
        "The Oman channel is the only live diplomatic thread, but a foreign ministry that cannot bind the IRGC's strait posture cannot deliver a transit deal — the same command-authority gap that has voided every prior off-ramp.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 543',
      delta: "+0 confirmed (Kuwait reported ground-force troops wounded in an overnight Iranian barrage, but Washington has confirmed no US personnel losses; assessment continuing)",
      status:
        "No confirmed new US casualties. Iran's overnight barrage on Kuwait wounded several Kuwaiti ground-force personnel and damaged facilities, and Iran claims to have targeted US forces in Bahrain and Syria, but Washington has confirmed no US personnel losses per §3.5.3, with assessment continuing.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (Israel not a direct party; the sought Trump-Netanyahu meeting collapsed; IAF remains on standby)',
      status:
        "No new Israeli casualties. Israel stays outside the direct US-Iran exchange, but the Saturday Washington meeting Netanyahu sought did not materialize, exposing a widening US-Israel split; hundreds of IAF planes remain on standby and Israel continues strikes in southern Lebanon that Washington warns threaten any deal.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,547 killed / 27,260+ wounded · Hengaw 6,635+ mil · 3.2M displaced',
      delta: "+~7 killed / +~60 wounded (Iran said seven were killed in the seventh-day strikes; Iranian-source, not independently verified)",
      status:
        "Iran said seven people were killed in the latest, seventh-consecutive strike wave and warned the war 'will spread.' Figures are Iranian-source per §3.5.3; HRANA documents 3,636 (1,221 military / 1,701 civilian / 714 unclassified) and Iran's Foundation of Martyrs confirms 3,468, while US/Israeli estimates run to 6,000+. ~440.9 kg of 60% HEU at Isfahan unverified since June 2025; Pickaxe Mountain still weighed.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 119+ KIA / 370 WIA; Gulf 33+ KIA / 73+ WIA; plus merchant-mariner casualties from the Hormuz tanker attacks',
      delta: "+1 killed / +~17 wounded (a seafarer killed and three injured on the Al Bahyah, eleven hurt on the Mombasa B, and several Kuwaiti ground-force troops wounded in Iran's overnight barrage)",
      status:
        "The Hormuz counter-blockade produced its first confirmed mariner death this window — a seafarer killed and three injured on the crude tanker Al Bahyah off Oman, eleven more injured on the Mombasa B — and Iran's overnight barrage wounded several Kuwaiti ground-force personnel. Lebanon toll stays source-split; Iraq 119+ / 370 and Gulf 33+ / 73+ carry.",
    },
  },
  exec:
    "Day 141 carried the war into its second week of unbroken US strikes and turned the Strait of Hormuz lethal. CENTCOM launched a seventh consecutive round of strikes on Iranian military targets — air defense, coastal radar and logistics — and Iran said seven were killed and warned the war 'will spread,' while Kuwait reported several ground-force troops wounded in an overnight Iranian ballistic-missile-and-drone attack (CENTCOM, ABC News, Al Jazeera). At sea the counter-blockade drew blood: at least nine ships have been hit since July 6, and maritime-risk executives now call Hormuz a 'worst-case scenario,' the threat level 'severe.' A seafarer was killed and three injured aboard the crude tanker Al Bahyah off Oman, and eleven were hurt on the Mombasa B, as Iran fired anti-ship missiles to force vessels off the US-protected Oman-coast route; Hormuz is largely closed again, a trickle of ships crossing with transponders dark (CNBC, NPR, Bloomberg). The Saturday Trump-Netanyahu meeting the prior brief flagged never materialized — the White House said none was scheduled, and Israeli officials suggested Netanyahu stayed home anticipating a US escalation, with Trump reportedly told by Arab leaders that the premier is an obstacle to peace (Axios, Times of Israel). Trump's one-week fuse still ticks — 'next week comes the power plants,' with a Kharg Island seizure unruled-out — as Iran vowed to 'crush' targets and called Hormuz a 'red line' (Fox News, CNBC). The lone diplomatic thread: Araghchi says Iran-Oman talks on strait transit continue even as the IRGC keeps it closed (IranWire). Brent ticked up to about $85.95; thirty-day ceasefire probability eases to 7.",
  implications: [
    {
      title:
        "The strike campaign hardened into a week-long war, and the maritime front turned lethal",
      body:
        "Day 141 retired Day 140's open question — would the tempo break at six? — with a seventh consecutive strike night. CENTCOM again hit Iranian air defense, coastal radar and logistics; Iran said seven were killed and warned the war 'will spread,' and Kuwait absorbed a fresh Iranian barrage that wounded ground-force troops (CENTCOM, ABC News, Al Jazeera). Under the multi-clock framework the humanitarian-escalation and energy-infrastructure clocks are now the dominant pair, and both worsened at sea. The counter-blockade stopped being a standoff and became a shooting war over civilian hulls: at least nine ships hit since July 6, a seafarer killed and three injured on the Al Bahyah, eleven hurt on the Mombasa B, and Hormuz functionally re-closed — 14 transits last Sunday against 37 the prior week, a ~60% drop, with vessels crossing transponders-dark (CNBC, NPR, Bloomberg). Per §3.5.3 the 'will spread' line is Iranian rhetoric, but the mariner death is not: it is the first killing on the very Oman-coast lane the US Navy is escorting tankers through, which means US protection and Iranian anti-ship fire are now colliding with lethal effect. Each night the US strikes to keep the lane open is a night Iran has a fresh reason to fire on it. A week of daily strikes with no pause raises the floor under any settlement and hands Tehran a daily domestic argument to escalate rather than sign.",
    },
    {
      title:
        "Trump's one-week fuse and the collapsed Netanyahu meeting exposed a coalition pulling two ways",
      body:
        "Trump kept the dated countdown running — 'next week comes the power plants,' with bridges and a Kharg Island seizure on the table, Kharg handling more than 90% of Iran's oil exports — while Iran vowed to 'crush' regional targets and held Hormuz as a 'red line' (Fox News, CNBC). Per §3.5.3 this is coercion, not diplomacy: the 'unless they negotiate' clause is nominal, and the fuse is the same trigger as Iran's standing Bab el-Mandeb order, so one power-plant strike could open the second chokepoint. What is new is the friction on the US-Israel side. The Saturday Washington meeting the prior brief flagged never happened — the White House said none was scheduled — and Trump was reportedly urged by Arab leaders that Netanyahu is an obstacle to regional peace, having already criticized Israel's Lebanon strikes as a threat to any deal (Axios, Times of Israel). The coalition-cohesion clock is now critical on two fronts at once: Washington wants a fast win and an off-ramp, Jerusalem prefers an open-ended campaign, and Gulf hosts absorb Iranian fire while condemning it. Inside Iran the mirror image holds — Pezeshkian is insisting the Supreme Leader never barred talks amid hardliner pressure on Araghchi (Middle East Eye) — so both capitals face domestic ceilings that shrink the room to sign even as the fuse burns down.",
    },
    {
      title:
        "Taiwan: the tape ticked up to $86 while the war put a body on the protected lane",
      body:
        "For Taiwan the shift on Day 141 is qualitative, not just price. Brent rose to about $85.95, up roughly 2% on the severe Hormuz threat, but still prices a porous single-chokepoint standoff — not the dual-closure scenario the standing Bab el-Mandeb order put on the table, modeled at $150-200 (Trading Economics, Bloomberg). The §3.5.6 exposure is unchanged and unforgiving: roughly 60% of Taiwan's crude and about a third of its gas transit Hormuz, against an 11-day LNG buffer — rising to 14 days only from 2027 — versus ~120 days of oil, with Qatar still supplying about a third of Taipei's LNG through Hormuz specifically. The new signal is that the risk is no longer only closure; the first mariner death on the US-protected lane shows even the 'safe' route is now lethal, and insurance — coverage, not cargo — is the binding constraint that ratchets on exactly that kind of event (Atlantic Council, CSIS). Taipei's hedges are real but slow: CPC has secured gas through September and is planning winter procurement, US crude is now about 60% of imports (from ~70% Middle Eastern in 2024), and US LNG is targeted at 25% of supply by 2029 — none of which helps inside a one-week fuse. TSMC's 2026 CapEx cushion protects the balance sheet, not the tank farm, still draining under an $86 tape a single laden-tanker hit or a Bab el-Mandeb action would reprice toward $150.",
    },
  ],
  casualtyNotes: {
    us:
      "No confirmed new US casualties. Iran's overnight barrage wounded several Kuwaiti ground-force troops; Iran claims strikes on US forces in Bahrain and Syria; Washington confirms no US personnel losses, assessment continuing.",
    israel:
      "No new Israeli casualties. The sought Saturday Trump-Netanyahu meeting collapsed, exposing a widening US-Israel split; IAF on standby; Lebanon strikes continue over US objections.",
    iran:
      "Iran said seven killed in the seventh-day strikes and warned the war 'will spread.' Iranian-source, unverified. HRANA documents 3,636 (1,221 mil / 1,701 civ / 714 unclassified); Foundation of Martyrs 3,468; US/Israeli est. 6,000+.",
    other:
      "First confirmed Hormuz mariner death this window — one killed, three injured on the Al Bahyah; eleven injured on the Mombasa B; several Kuwaiti troops wounded. Lebanon source-split; Iraq 119+ / Gulf 33+ carry.",
  },
};

export default data;
