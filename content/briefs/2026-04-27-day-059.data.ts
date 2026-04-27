import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'conditional',
    rationale: {
      direction:
        "Sunday delivered a structural Iranian concession and a structural Lebanon escalation in the same news cycle. Axios reported Iran formally submitted a new proposal through Pakistani, Egyptian, Turkish, and Qatari mediators: reopen Hormuz first, postpone nuclear negotiations to a later stage — the first time Tehran has decoupled Hormuz-opening from the nuclear track since the war began. Simultaneously, Sgt. Idan Fooks (19, 7th Armored Brigade) was killed by a Hezbollah explosive drone — the third IDF soldier killed during the ceasefire and the first in a direct Hezbollah attack — while Israeli strikes killed at least 14 in southern Lebanon and the IDF ordered evacuation of seven villages beyond the buffer zone.",
      risk7d:
        "The Hegseth-formalised 'shoot to destroy' ROE remains in force; the US blockade enters Day 15 with CENTCOM reporting 38 ships prevented from entering or leaving Iranian ports; Bessent's well-shutter clock is now running. US Navy guided-missile destroyers (USS Frank E. Peterson, USS Michael Murphy) began 'setting conditions' for de-mining the strait on Saturday morning — Hudson Institute estimates a secure passageway is achievable within a week, full clearance in up to four weeks, materially shorter than the Pentagon's six-month framing. The dual ROE plus active mine-laying plus first-week demining is the highest-density kinetic-encounter window of the war to date.",
      spillover:
        "Lebanon escalates onto its own clock. The IDF Sgt. Fooks KIA, the 14 dead from Sunday strikes, and the seven-village evacuation order break the political-vs-kinetic two-clock framing of the prior days; Hezbollah said it will not wait for 'ineffective' diplomacy. Netanyahu told Sunday's cabinet that Hezbollah is 'dismantling the ceasefire.' The Saturday-night Washington Hilton shooting (suspect Cole Tomas Allen, 31, said he wanted to target administration officials) is a US-domestic context shift, not a war signal — but it adds a security-anxiety overlay to Trump's posture into the Monday markets.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'pivotal',
      source: 'Axios / US News / Al-Monitor / Business Standard / Haaretz',
      event: "Iran formally submits Hormuz-first proposal: reopen the strait, postpone nuclear talks",
      summary:
        "Per Axios reporting Sunday, Iran delivered a new proposal to the US through Pakistani, Egyptian, Turkish, and Qatari mediators: solve the Hormuz crisis and US blockade first; nuclear negotiations would only start at a later stage, after the strait is open and the blockade is lifted. Araghchi raised the 'bypass nuclear' framing during his Islamabad sessions and made clear there is 'no consensus inside the Iranian leadership' on the US enrichment-suspension demand. The White House has received the proposal; willingness to explore unclear. Trump's 'nuclear dust' demand (US extraction of uranium residue from bombed sites) remains the standing US precondition Tehran has explicitly refused.",
      impact:
        "First time since the war began that Tehran has formally separated Hormuz-opening from nuclear concessions. Decouples the two issues that have made every prior negotiation round indivisible — Hormuz is reversible, nuclear is structural — and gives Washington a sequenceable off-ramp if it chooses to take it. The 'no consensus inside Iranian leadership' admission is the highest-fidelity public reading of the regime-cohesion thread to date and explains the Day 58 cancellation in one line: Tehran could not deliver on the nuclear track because the leadership cannot internally agree to it. Analytical judgment: this is the largest substantive diplomatic move from the Iranian side in the war and shifts ceasefire probability +4 absent any US rejection signal — but the Hormuz-first sequencing is exactly the framing Trump rejected on April 23 ('I'm the one that kept it closed' to ratchet financial pressure).",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Times of Israel / Jerusalem Post / Haaretz / Ynet / JNS / Al Jazeera',
      event: "Sgt. Idan Fooks killed by Hezbollah explosive drone; 6 wounded; first ceasefire-era direct-attack KIA",
      summary:
        "Sgt. Idan Fooks, 19, of the 7th Armored Brigade's 77th Battalion, was killed Sunday by an explosive-laden Hezbollah drone in southern Lebanon; six other soldiers were wounded, four severely. He is the third IDF soldier killed in southern Lebanon during the ceasefire and the first killed in a direct Hezbollah attack. The IDF responded with airstrikes and artillery shelling north of the security zone. Hezbollah said it 'would not cease its attacks on Israeli troops inside Lebanon and on towns in northern Israel as long as Israel continued its ceasefire violations,' and 'will not wait for diplomacy that has proven ineffective.' Netanyahu told Sunday's cabinet that Hezbollah is 'dismantling the ceasefire.'",
      impact:
        "Converts the Lebanon track from a political-extension-vs-kinetic-tempo two-clock framing into a single-clock direct-attack escalation. The 'first direct-attack KIA of the ceasefire era' framing is what Hezbollah needed to operationalise its 'meaningless' rhetoric from the Day 58 brief; the Israeli response (cross-zone strikes plus seven-village evacuation order beyond the buffer) signals the IDF reads the attack as casus to expand kinetic reach beyond the agreed zone. The three-week political extension survives in name but the operational ceasefire is now broken. Analytical judgment: this is the inflection that the Day 58 'meaningless ceasefire' framing predicted; expect Hezbollah-IDF tempo to escalate through Monday-Wednesday.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Al Jazeera / Rappler / Reuters / antiwar.com',
      event: 'IDF orders forced evacuation of seven southern Lebanon villages beyond the buffer zone; 14 killed',
      summary:
        "The IDF ordered residents of seven Lebanese towns north of the Litani River — beyond Israel's declared buffer zone — to evacuate Sunday, citing 'terror infrastructure' Hezbollah ceasefire violations. Israeli strikes killed at least 14 (including two children and two women) and wounded 37. Lebanese government framed the orders as a unilateral expansion of the IDF's operating zone. Civilian outflow began Sunday afternoon. The April 16 ceasefire (extended three weeks Thursday) does not contemplate IDF operations beyond the buffer zone in nominal terms.",
      impact:
        "The forced-evacuation order is the structural mirror to the Sgt. Fooks KIA: IDF expands kinetic reach unilaterally, Hezbollah expands its targeting unilaterally, and the political extension acts as cover for both. The seven-village frame north of the Litani is operationally the same depth IDF reached in October-December 2024 — a return to that posture inside a notional ceasefire is the loudest possible signal that the truce is decorative. Lebanese government leverage to push back is constrained by Hezbollah-government structural divergence (Day 58 thread). Analytical judgment: this is the kinetic-tempo escalation the IDF Debel/solar-panel investigation footage previewed in image-management form.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'The Hill / Times of Israel / Navy Lookout / Irish Times',
      event: "US Navy begins de-mining Hormuz: USS Frank E. Peterson, USS Michael Murphy 'setting conditions'",
      summary:
        'US Navy guided-missile destroyers USS Frank E. Peterson and USS Michael Murphy began "setting conditions" for de-mining operations Saturday morning. CENTCOM commander Adm. Brad Cooper: "Today, we began the process of establishing a new passage and we will share this safe pathway with the maritime industry soon." Hudson Institute (Bryan Clark, ex-Pentagon) estimates a secure passageway is achievable within a week and full clearance within up to four weeks — materially shorter than the Pentagon\'s six-month framing carried forward in the Day 58 brief.',
      impact:
        "The kinetic small-boat lane just acquired its operational counterpart. With Iranian mine-laying continuing per prior Axios sourcing, US destroyers actively de-mining inside the strait under the Hegseth 'shoot to destroy' ROE create the highest-density US-IRGC encounter window of the war. The Hudson timeline implies a one-week Brent-curve repricing window if the operation proceeds without incident. CENTCOM's 38-ships-prevented stat (Sunday social) confirms the US blockade is operating at peak interdiction. Analytical judgment: a kinetic incident in the next seven days is now the single most probable trigger for the Lebanon-style escalation pattern playing out in the maritime channel.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: 'Al Jazeera / CNN / Euronews / FMT / Manila Times / Pravda USA',
      event: "Araghchi heads to Moscow for Putin meeting Monday; Pakistan/Oman/Moscow scaffolding intact",
      summary:
        "Following ~20h of Islamabad sessions Saturday and Sunday's Muscat stop, Araghchi is en route to Moscow Monday April 27 to consult with Putin 'on the latest status of negotiations, the ceasefire, and surrounding developments.' Pakistan's Sharif spoke with Pezeshkian by phone Saturday night; Iran has now leaned on Pakistan, Egyptian, Turkish, and Qatari mediators per Axios. Pezeshkian visit to Moscow framed bilaterally; Russian rhetorical alignment with Tehran (post-Vienna trilateral with Grossi) preserved.",
      impact:
        "The phone-mediated process Trump endorsed Saturday ('if they want to talk, all they have to do is call!!!') has now become a formal four-mediator hub-and-spoke channel — Pakistan + Egypt + Turkey + Qatar handling the proposal flow, Russia hosting the highest-level political alignment session. The structural difference from the Vance-led April 11–12 round: no expectation of a US bilateral session, no announcement risk, no cancellation risk. Analytical judgment: this is the architecture Iran wanted from the beginning — multi-mediator, Hormuz-decoupled, nuclear-deferred — and Tehran has now constructed it without giving Washington a venue at which to publicly accept or reject.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'medium',
      source: 'Al Jazeera / Time / NPR / CBS / CNN / 6abc / CtvNews',
      event: 'Saturday-night Washington Hilton shooting; Trump uninjured; suspect targeting administration officials',
      summary:
        'Saturday evening at the White House Correspondents\' Dinner at the Washington Hilton, gunfire erupted after suspect Cole Tomas Allen, 31, a California teacher, charged a security checkpoint at 8:36pm with a shotgun, handgun, and multiple knives. He shot at a Secret Service agent before being subdued. Trump, the First Lady, and Cabinet were unharmed; one officer\'s vest absorbed a round. White House: Allen "clearly stated" he wanted to target administration officials. Starmer extended best wishes to Trump in their Sunday Hormuz-shipping call.',
      impact:
        "Not a war signal but a US-domestic security-anxiety overlay on the Iran-decision posture into Monday markets. The dinner-shooter framing produces a small but real bias toward 'we have all the cards' rhetorical hardening rather than concession openness. Analytical judgment: incremental risk that Trump's response to the Iran Hormuz-first proposal arrives more aggressive than it would have absent the Saturday-night incident; not enough to move ceasefire probability on its own.",
    },
    {
      id: 7,
      direction: 'de-escalating',
      importance: 'medium',
      source: "US News / Al-Monitor / Iran International / Algemeiner / 8am",
      event: 'Trump-Starmer Sunday call: "urgent need" to restore Hormuz shipping; UK-France Macron joint initiative',
      summary:
        "Sunday April 26 phone call between Trump and Starmer focused on the 'urgent need to get shipping moving again in the Strait of Hormuz given the severe consequences for the global economy and cost of living.' Starmer briefed Trump on his joint initiative with Macron to 'restore freedom of navigation.' Starmer also extended condolences and best wishes to Trump after the Washington Hilton shooting. UK-led 40-nation FoN coalition continues to acquire visible co-signers.",
      impact:
        "First public allied pressure on the Trump White House to take a Hormuz-first deal — Starmer's framing converges with the Iranian Hormuz-first proposal in shape if not in attribution. Macron-Starmer coalition activates in the same news window as the Bessent waiver-termination signal hits European refiners and Asian LNG buyers. Analytical judgment: provides political cover for any Trump acceptance of the Hormuz-first sequencing — 'I did this for the global economy and our European allies' — but the cover only matters if Trump chooses to use it.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat, incl. 6 KC-135 crew) · WIA: 395',
      delta: '+0 KIA / +0 WIA',
      status:
        "Hegseth-formalised 'shoot to destroy' ROE remains in force; blockade enters Day 15 with CENTCOM reporting 38 ships prevented from entering or leaving Iranian ports. USS Frank E. Peterson and USS Michael Murphy began de-mining 'setting conditions' Saturday morning under Adm. Cooper; Hudson Institute estimates secure passageway in 1 week, full clearance up to 4 weeks. CSG Lincoln Gulf of Oman; CSG Ford northern Red Sea; CSG Bush transiting toward Arabian Sea. Saturday-night Washington Hilton shooting: Trump uninjured; suspect Cole Tomas Allen detained.",
    },
    israel: {
      cumulative: 'KIA: 39 (24 civilians + 16 soldiers in Lebanon, incl. Sgt. Fooks Sunday) · WIA: 6,000+ (Alma) — 6 added Sunday, 4 severely',
      delta: '+1 KIA (Sgt. Idan Fooks, 19, 7th Armored Brigade) / +6 WIA (4 severe) — first ceasefire-era direct-attack KIA',
      status:
        "Sgt. Idan Fooks (19, Petah Tikva, 77th Battalion / 7th Armored Brigade) killed Sunday by Hezbollah explosive drone in southern Lebanon — third IDF KIA of the ceasefire era and first in a direct Hezbollah attack. IDF retaliatory airstrikes and artillery north of the security zone. Forced evacuation order issued for seven villages north of the Litani — beyond the buffer zone. Netanyahu Sunday cabinet: 'Hezbollah dismantling the ceasefire.' Home Front Command limited gatherings in several northern areas amid Hezbollah attacks.",
    },
    iran: {
      cumulative: "Iran Legal Medicine Organization: 'nearly 3,400' KIA (April 22 figure unchanged). HRANA: 3,636+ (April 7). Hengaw: 6,620+ military (April 8). 383 children under 18; 3.2M displaced.",
      delta: '+0 KIA / +0 WIA reported in Sunday window',
      status:
        "Araghchi formal Hormuz-first proposal landed via Pakistani/Egyptian/Turkish/Qatari mediators: reopen the strait, postpone nuclear talks (Axios). Araghchi en route to Moscow Monday for Putin meeting; Pezeshkian-Sharif phone call Saturday night. Pezeshkian/Mojtaba Khamenei home-front messaging unchanged from Day 58. IRGC continues mine-laying per prior Axios sourcing.",
    },
    other: {
      cumulative: 'Lebanon: 2,310+ killed (Sunday +14 per Lebanese Health Ministry) · Iraq: 99+ killed · Gulf states: 32+ killed · UAE: 11 killed / 2,343 projectiles absorbed cumulatively.',
      delta: '+14 Lebanon KIA (Sunday IDF strikes north of Litani; 2 children, 2 women among dead; +37 wounded)',
      status:
        "Sunday Israeli strikes killed 14 in southern Lebanon; IDF ordered forced evacuation of seven villages beyond the buffer zone. Hezbollah: will not wait for 'ineffective' diplomacy. Pakistan + Egypt + Turkey + Qatar now operating as a four-mediator hub on the Iranian Hormuz-first proposal. Russia hosting Araghchi-Putin Monday. UN continues to flag IDF strikes and Hezbollah rockets as potential international-law breaches.",
    },
  },
  exec:
    "Sunday produced a structural Iranian concession and a structural Lebanon escalation in the same news cycle, with a Saturday-night Washington security incident framing both. Per Axios, Iran formally submitted a new proposal through Pakistani, Egyptian, Turkish, and Qatari mediators: reopen the Strait of Hormuz first; postpone nuclear talks to a later stage, after the strait is open and the US blockade is lifted. Araghchi told mediators there is 'no consensus inside the Iranian leadership' on the US enrichment-suspension demand — the highest-fidelity public reading of the regime-cohesion thread to date and the operational explanation for Trump's Saturday cancellation. Simultaneously, Sgt. Idan Fooks (19, 7th Armored Brigade) was killed in a Hezbollah explosive-drone attack — the third IDF soldier killed during the ceasefire and the first in a direct Hezbollah attack, with six wounded (four severely); Israeli strikes killed at least 14 (including two children and two women) in southern Lebanon and the IDF ordered forced evacuation of seven villages beyond the buffer zone. US Navy guided-missile destroyers USS Frank E. Peterson and USS Michael Murphy began 'setting conditions' for de-mining the strait Saturday morning, with Hudson Institute estimating a secure passageway is achievable within a week — materially shorter than the Pentagon's six-month framing. CENTCOM reports 38 ships prevented from entering or leaving Iranian ports. Brent held above $105 over the weekend; Asian Monday open is the next price-discovery point. Trump and Starmer agreed on the 'urgent need' to restore Hormuz shipping; Starmer briefed his Macron joint initiative. The Saturday-night Washington Hilton shooting (suspect Cole Tomas Allen, 31, charged a Secret Service checkpoint with shotgun, handgun, and knives, said he wanted to target administration officials) left Trump and Cabinet unharmed but adds a US-domestic security-anxiety overlay to the Monday Iran-decision posture. Analytical judgment: 30-day ceasefire probability moves 28 → 30 — the Iranian Hormuz-first proposal is the largest substantive concession from Tehran since the war began, partially offset by the Lebanon kinetic escalation breaking the political-vs-tempo two-clock framing.",
  implications: [
    {
      title: "Iran's Hormuz-first proposal is the architecture Tehran wanted from the start — and explains the Day 58 cancellation",
      body:
        "Axios's Sunday reporting describes the proposal in three parts: solve the strait crisis and US blockade first, defer nuclear negotiations to a 'later stage,' use Pakistan + Egypt + Turkey + Qatar as a four-mediator hub. Read structurally, this is the architecture Iran has been moving toward since the April 11–12 Vance round collapsed: multi-mediator (so no single bilateral can be cancelled), nuclear-deferred (so the IRGC ascendance and 'no consensus' problem doesn't have to be solved before any de-escalation is possible), Hormuz-first (so the reversible irritant gets cleared while the structural one is parked). Araghchi telling mediators there is 'no consensus inside the Iranian leadership' on the US enrichment demand is the operational explanation for Saturday's Trump cancellation: the trip would have produced a Tehran proposal that could not have included the nuclear suspension Washington has demanded since April 23, and Trump cancelled rather than receive an inevitably-rejected counter-offer. The cancellation thereby preserved Trump's 'we have all the cards' framing while creating room for a Hormuz-first proposal to land Sunday in a non-bilateral format. Analytical judgment: this is the largest substantive concession from the Iranian side in the war and the cleanest explanation of the regime-cohesion thread to date — Tehran cannot yield on nuclear in this window, but Tehran can yield on Hormuz, and the four-mediator architecture is the way Tehran has now told Washington that. The 30-day ceasefire probability moves +4 to 30 on the Iranian side; whether it moves higher depends on whether Trump treats Starmer's 'global economy and cost of living' framing or Bessent's 'we have all the cards' framing as the dominant US position into Monday.",
    },
    {
      title: 'The Lebanon track has broken — Sgt. Fooks and the seven-village evacuation are the single-clock signal',
      body:
        "Sgt. Idan Fooks's death by Hezbollah explosive drone is the first ceasefire-era direct-attack IDF KIA, which converts the Lebanon track from a political-extension-vs-kinetic-tempo two-clock framing (where the truce was decorative but kinetic was bounded) into a single-clock direct-attack escalation pattern (where the truce is rhetorical and kinetic is unbounded). Hezbollah's public 'will not wait for ineffective diplomacy' framing is the operational version of Day 58's 'meaningless ceasefire' rhetoric; the IDF response — airstrikes and artillery north of the security zone, plus a forced-evacuation order for seven villages beyond the buffer zone — is the operational version of Israel reading the Hezbollah attack as casus to expand its zone of operations. Netanyahu's 'Hezbollah dismantling the ceasefire' framing in Sunday's cabinet provides the political rationalisation. The 14 Sunday casualties in Lebanon (including two children, two women) and the seven-village forced evacuation are the Lebanese-side stress data point. The political extension that Trump announced from the Oval Office on April 23 is now a paper instrument that the parties on the ground are operationally ignoring — exactly the Hezbollah-non-participation defect Day 58 flagged, with the cost paid by the Lebanese civilian population first and the IDF reservist population second. Analytical judgment: expect Hezbollah-IDF tempo to escalate through Monday-Wednesday; the kinetic ceiling is now whatever Berri or the Lebanese Armed Forces can negotiate in real time, which is approximately nothing absent a US re-intervention.",
    },
    {
      title: "Demining begins inside an active ROE — the Hormuz kinetic encounter window is now seven days, not six months",
      body:
        "USS Frank E. Peterson and USS Michael Murphy began 'setting conditions' for de-mining Saturday morning under Adm. Cooper. Hudson Institute (Bryan Clark, ex-Pentagon) estimates a secure passageway is achievable within a week, with full clearance up to four weeks — materially shorter than the Pentagon's six-month framing carried forward in the Day 58 brief, and consistent with US determination to demonstrate operational capability inside the Iranian Hormuz-first proposal window. The arithmetic is harsh: US destroyers actively de-mining inside the strait, under the Hegseth 'shoot to destroy' ROE, while Iranian mine-laying continues per Axios sourcing, produces the highest-density US-IRGC encounter window of the war. CENTCOM's 38-ships-prevented stat (Sunday social) confirms the blockade is operating at peak interdiction. The convergence of (a) Iran's Hormuz-first diplomatic proposal, (b) US Navy de-mining beginning inside the same week, (c) Bessent waiver-termination shutter-clock now running, (d) Macron-Starmer-Trump tri-leader pressure on 'global economy and cost of living,' and (e) Brent above $105 with Asian Monday open the next price discovery, means the next seven days resolve more than the prior fifty-eight have. For Taiwan, the demining-week timeline is the optimistic case: if it succeeds without a kinetic incident and the Hormuz-first proposal converts to an actual deal, MOEA's Q3 procurement plan can revert from no-Hormuz-through-October scenario to a transit-recovery scenario; if it fails, the home-front-endurance contest acquires a year-long timeline rather than a quarter-long one. Analytical judgment: the Monday Asian Brent open and any CENTCOM/IDF readouts in the next 24 hours are the dominant signals — the war's strategic direction is being decided inside this week's operational window.",
    },
  ],
  casualtyNotes: {
    us: "No new KIA. The day's casualty-risk drivers move materially: USS Frank E. Peterson and USS Michael Murphy began 'setting conditions' for Hormuz de-mining Saturday morning under the Hegseth 'shoot to destroy' ROE, with Iranian mine-laying continuing per prior Axios sourcing — the highest-density US-IRGC encounter window of the war. CENTCOM reports 38 ships prevented from entering or leaving Iranian ports. Saturday-night Washington Hilton shooting incident: Trump and Cabinet unharmed; suspect Cole Tomas Allen detained.",
    israel:
      'Sgt. Idan Fooks (19, 7th Armored Brigade / 77th Battalion, Petah Tikva) killed Sunday by Hezbollah explosive drone in southern Lebanon — third IDF KIA of the ceasefire era and FIRST in a direct Hezbollah attack. Six other IDF soldiers wounded, four severely. IDF retaliatory airstrikes and artillery north of the security zone. Forced evacuation order for seven villages north of the Litani (beyond buffer zone). Netanyahu cabinet Sunday: "Hezbollah dismantling the ceasefire." Home Front Command limited gatherings in several northern Israeli areas.',
    iran:
      "Iran Legal Medicine Organization holding at 'nearly 3,400' KIA. No new military losses reported in Sunday window. Araghchi formally submitted Hormuz-first proposal via Pakistani/Egyptian/Turkish/Qatari mediators per Axios — reopen the strait, postpone nuclear. Told mediators there is 'no consensus inside the Iranian leadership' on US enrichment-suspension demand. Araghchi en route to Moscow Monday for Putin meeting (Vienna trilateral follow-up). IRGC continues mine-laying per prior Axios sourcing; Vahidi remains decisional axis.",
    other:
      "Lebanon: +14 KIA Sunday (Lebanese Health Ministry — IDF strikes north of Litani; 2 children, 2 women among dead; +37 wounded). Cumulative ~2,310+ killed in Lebanon. Forced-evacuation order for seven villages north of the buffer zone. Hezbollah: will not wait for 'ineffective' diplomacy. Pakistan + Egypt + Turkey + Qatar now operating as four-mediator hub on Iranian Hormuz-first proposal. Russia hosts Araghchi-Putin Monday. Trump-Starmer Sunday call on 'urgent need' to restore Hormuz shipping; Macron-Starmer joint initiative on freedom of navigation referenced. UK-led 40-nation FoN coalition continues acquiring co-signers.",
  },
};

export default data;
