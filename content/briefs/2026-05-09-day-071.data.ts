import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 71 produces the war's first multi-vector kinetic re-escalation since the April 8 ceasefire. Iran launched coordinated missile, drone, and small-boat attacks on USS Truxtun, USS Rafael Peralta, and USS Mason in Hormuz; CENTCOM intercepted all inbound threats (no US assets struck) and responded with self-defense strikes at Bandar Abbas, Qeshm, and Bandar Kargan. Iran simultaneously attacked the UAE — three wounded after Emirati air defenses engaged two ballistic missiles and three drones. Hezbollah retaliated for Wednesday's Beirut Radwan strike with rockets at Haifa Bay/Western Galilee/Nahariya/Acre and a drone swarm at Mount Meron's ATC base; three IDF wounded. Trump dismissed the strikes as 'just a love tap'; Iran's MOU response not delivered Friday — Baqaei: 'matter still under discussion'; Iran 'doesn't follow anyone's deadlines'.",
      risk7d:
        "Seven-day risk shifts to critical. Kinetic floor now operationally visible across Hormuz, UAE, and Lebanon simultaneously rather than as one-off Hasna-style enforcement. Trump's 'one week to reach deal' framing from Thursday compresses the decision interval against the May 14-15 Trump-Xi Beijing summit hard deadline. Brent reversed to $101.29 (+1.0%) Friday from Thursday's $100.06 close; WTI $95.42; week closed -6%. AlanChand cash USD 1,798,000 IRR Friday (+0.50%); cash-remittance gap narrows 14,000 → ~8,000 IRR. Witkoff-Kushner envoy track persists; Pakistan mediation continues; framework alive in Tehran. Probability falls 25 → 22.",
      spillover:
        "Spillover holds critical and intensifies. UAE: +3 wounded Friday from Iran missile/drone attack. Lebanon: +4 KIA Friday in IDF Toura airstrike (incl two women) per Lebanon Health Ministry. Israel: +3 IDF wounded by Hezbollah explosive drones — first material retaliation since April 16 ceasefire. Maritime: Hormuz transits collapse to 2 May 7 (both inbound, both dark via Iranian coastline) — ~5% pre-war flow. Two more empty Iranian-flagged tankers disabled Friday following Thursday's Hasna. IMO ~23,000 seafarers from 87 countries stranded continues; Hapag-Lloyd ~$60M/week Hormuz cost.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'CENTCOM / CNN / The Hill / Eurasia Review / FDD',
      event: "Iran launches coordinated missile, drone, and small-boat attacks on USS Truxtun, Rafael Peralta, Mason in Hormuz; CENTCOM intercepts all threats and strikes Bandar Abbas, Qeshm, Bandar Kargan",
      summary:
        "CENTCOM reported Iranian forces launched a salvo of anti-ship ballistic missiles, cruise missiles, and explosive small boats at three US Navy destroyers — USS Truxtun, USS Rafael Peralta, USS Mason — transiting Hormuz. All threats intercepted; no US assets struck. CENTCOM responded with self-defense strikes on launch sites, C2 nodes, and ISR facilities at Bandar Abbas, Qeshm, and Bandar Kargan. IRGC Navy claimed 'significant damage' to the destroyers, contradicted by CENTCOM.",
      impact:
        "First direct US-Iran kinetic exchange since the April 8 ceasefire framework. Tests but does not rupture the framework — Trump immediately dismissed strikes as 'just a love tap'. Tightly scoped CENTCOM retaliation against launching infrastructure plus zero US asset hits signals US principal-level intent to absorb provocation rather than escalate vertically. Establishes operationally visible kinetic floor at the inflection point.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'PBS NewsHour / NPR / Washington Times / WION',
      event: "Iran launches missile and drone attack on UAE — UAE Defense Ministry: three wounded after engaging two ballistic missiles and three drones",
      summary:
        "UAE Defense Ministry confirmed three wounded after air defenses engaged two ballistic missiles and three drones launched from Iran. Strike came hours after Iran engaged US Navy destroyers in Hormuz. Second separate Iranian attack on UAE since the April 8 ceasefire and third overall in the war (Monday wounded eleven plus three injured).",
      impact:
        "Re-establishes UAE as active target lane for Iranian retaliation under any escalatory configuration. Bahrain-led 90+ country statement and pending UNSC draft on Hormuz reopening have an immediate Friday-attack data point to reference. UAE MOFA 'immediate and unconditional' Hormuz reopening demand operationally re-validated.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Times of Israel / JNS / Anadolu / Lebanon Health Ministry',
      event: "Hezbollah retaliates for Wednesday Beirut strike — rockets at Haifa Bay/W Galilee/Nahariya/Acre + drone swarm at Mount Meron ATC; three IDF wounded; IDF retaliates Toura airstrike (+4 KIA incl two women)",
      summary:
        "Hezbollah launched its first material retaliation for Wednesday's Beirut strike, firing rockets at Haifa Bay/Western Galilee/Nahariya/Acre and triggering shelter sirens for tens of thousands. Hezbollah claimed a drone swarm targeted an Israeli ATC base atop Mount Meron ~8km from the border. Explosive drone struck inside Israel adjacent to Lebanon — one IDF soldier seriously wounded, one moderately; one IDF wounded in S Lebanon by separate drone. IDF retaliated with airstrike on Toura — Lebanon Health Ministry: four killed including two women. Hezbollah subsequently claimed 25 rocket and drone strikes.",
      impact:
        "First material Hezbollah retaliation since April 16 ceasefire. April 16 central tactical norm of no-Beirut-no-Haifa now broken on both sides simultaneously. Lebanon clock formally separated from US-Iran clock — convergence on 14-point MOU does not require Lebanon de-escalation, and Lebanon escalation does not require framework collapse. Lebanon-spillover hazard structurally uncorrelated with framework signature timing.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'Time / ABC News / Fox News',
      event: "Trump dismisses Hormuz strikes as 'just a love tap'; ceasefire 'is going... it's in effect'; deal 'might not happen, but it could happen any day'",
      summary:
        "Trump told reporters US strikes on Iran were 'just a love tap' and the ceasefire 'is going... it's in effect'. On a deal: 'It might not happen, but it could happen any day.' Rubio in Rome alongside Italian PM Meloni: 'We are expecting a response from Iran today, the hope is it's something that can put us into a serious process.' Rubio's red line: 'if they threaten Americans they are going to get blown up.'",
      impact:
        "Preserves diplomatic surface and signals US principal-level intent to absorb provocation rather than escalate vertically. 'Love tap' framing is calibrated to keep the framework alive while keeping the Trump-bomb-threat upper kinetic floor structurally intact. Locks Italy into Western-mediator architecture pre-summit.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: 'CNBC / Time / MS NOW / Al Jazeera / Iran International',
      event: "Iran's MOU response not delivered Friday — Baqaei: 'matter still under discussion'; 'Iran doesn't follow anyone's deadlines'; Araghchi tells Turkish FM halt 'illegal' US actions prerequisite for diplomacy",
      summary:
        "Iran did not deliver its formal 14-point MOU response on Friday. FM spokesperson Esmaeil Baqaei: 'The matter is still under discussion'; Iran 'does not follow anyone's deadlines'. FM Araghchi told Turkish FM Hakan Fidan: 'Every time a diplomatic solution is on the table, the U.S. opts for a reckless military adventure.' Halting 'illegal' US actions in the Persian Gulf is prerequisite for advancing diplomacy. Iran International carried framework convergence text as still under principal-level review in Tehran.",
      impact:
        "Iran's response slip is bargaining-tempo language, not framework-rejection. Pezeshkian's Day 70 lift-blockade-first sequencing demand and Mohsen Rezaei's reparations rebuff carry forward. Whose Iranian signature binds the framework remains the dominant near-term variable; Pezeshkian-Mojtaba meeting Day 70 partial repair persists as structural prior. Probability falls 25 → 22.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'medium',
      source: 'NPR / Al Jazeera / Iran International',
      event: "US Navy disables two more empty Iranian-flagged tankers Friday — extends Thursday's Hasna kinetic enforcement to multi-day operational tempo",
      summary:
        "US forces disabled two more Iranian-flagged oil tankers Friday as ships tried to evade the blockade. Both reportedly empty. Follows Thursday's CENTCOM disabling of M/T Hasna by F/A-18 Super Hornet from USS Abraham Lincoln. Three Iranian-flagged vessels disabled in 36 hours. By May 1, CENTCOM had forced 45 commercial vessels to turn around since April 13.",
      impact:
        "Extends kinetic blockade-enforcement floor from one-off Hasna to multi-day operational pattern. 'Project Freedom paused' Day 68 surface alignment now operationally contradicted on a daily basis. Toll-institutionalization risk under any signed MOU persists structurally given IRGC navy 'new procedures' framing.",
    },
    {
      id: 7,
      direction: 'mixed',
      importance: 'medium',
      source: 'CNBC / OilPrice.com / NBC / AlanChand',
      event: "Brent $101.29 (+1.0%) Friday reversing Thursday's sub-$100 dip; AlanChand cash USD 1,798,000 IRR (+0.50%); week closes -6%",
      summary:
        "Brent settled Friday at $101.29 (+1.0% from Thursday's $100.06); WTI $95.42 (+0.65%). Week closed -6% as market priced framework convergence holding despite Friday's clashes. Brent's Friday move reversed Thursday's intraday $99.40 sub-$100 print. AlanChand cash USD 1,798,000 IRR Friday (+0.50% / +9,000); USD-Remittance ~1,790,000; cash-remittance gap narrowed 14,000 → ~8,000 IRR.",
      impact:
        "Cleanest market read: framework convergence held with only +1.0% kinetic-shock adjustment despite triple-front opening — net ~100bp kinetic-floor premium added without rupturing framework-convergence discount. Iranian rial similarly weakened modestly, not capitulated. Taiwan procurement floor narrows $98-108 → $99-110; upper-tail kinetic ceiling ($130-170) carries asymmetric premium.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'medium',
      source: 'Bloomberg / CNBC / PBS NewsHour / Modern Diplomacy',
      event: "Trump-Xi May 14-15 Beijing summit confirmed proceeding despite Friday's renewed kinetic exchange — Wang Yi 'immediate end to hostilities' / 'prompt resumption of shipping' carries",
      summary:
        "Trump-Xi summit remains scheduled May 14-15 in Beijing despite Friday's multi-front kinetic exchange. Wang Yi reiterated 'immediate end to hostilities' and 'prompt resumption of shipping through the Strait of Hormuz' line during Tuesday's Araghchi-Beijing meeting. Bloomberg: Xi government 'wary about proceeding before US-Iran conflict is settled' but no public delay request. White House continues urging Beijing to pressure Iran to restore commercial shipping.",
      impact:
        "Hard deadline at single-digit days. Beijing's structural incentive to deliver Iranian framework signature pre-summit is sharpened by Friday's exchange. Diplomatic-architecture lane through Beijing anchored to ~7-day deliverable horizon. Iran energy security and Hormuz reopening remain top agenda items alongside Taiwan and chip exports.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed KIA Friday',
      status:
        "Iran launched coordinated missile/drone/small-boat attack on USS Truxtun, Rafael Peralta, Mason in Hormuz; CENTCOM intercepted all threats — no US assets struck. CENTCOM responded with self-defense strikes on Bandar Abbas, Qeshm, Bandar Kargan. Trump: 'just a love tap'; ceasefire 'in effect'. Rubio (Rome): expecting Iran 14-point MOU response 'today' (not delivered Friday). Two more empty Iranian-flagged tankers disabled following Thursday's Hasna.",
    },
    israel: {
      cumulative: 'KIA: 47 · WIA: 8,600',
      delta: '+0 KIA / +3 WIA Friday',
      status:
        "Three IDF wounded by Hezbollah explosive drones — first material retaliation since April 16 ceasefire. One drone struck inside Israel near Lebanon border (1 seriously, 1 moderately); 1 IDF wounded in S Lebanon by separate drone. Hezbollah rockets at Haifa Bay/W Galilee/Nahariya/Acre + drone swarm at Mount Meron ATC base. IDF retaliated Toura airstrike (Lebanon MOH +4 KIA incl two women). IDF identifies Wednesday Beirut kill as Radwan commander Ahmed Ghaleb Balout (correcting Day 70 'Mansour'); same strike killed Nasr intel chief Bazi and Aerial Defense chief Rom.",
    },
    iran: {
      cumulative: "LMO 'nearly 3,400' KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · Hengaw 6,620+ mil · 3.2M displaced",
      delta: 'No new figures Friday',
      status:
        "Coordinated attack on three US Navy destroyers in Hormuz; CENTCOM struck back at Bandar Abbas/Qeshm/Bandar Kargan ports. Iran also missile/drone attack on UAE wounding three. Baqaei: 'matter still under discussion'; 'doesn't follow anyone's deadlines'. Araghchi: 'reckless military adventure' rebuke to Turkish FM. AlanChand cash USD 1,798,000 IRR (+0.50%); Remittance ~1,790,000; gap 14,000 → ~8,000 IRR. CBI 65.8% YoY.",
    },
    other: {
      cumulative: 'Lebanon MOH: 2,668+ KIA / 8,200+ WIA · Iraq: 117+ · Gulf states: 32+ · UAE: 14+6 wounded cumulative',
      delta: 'Lebanon: +4 KIA Friday · UAE: +3 wounded',
      status:
        "Lebanon: +4 KIA from IDF Toura airstrike (incl two women). UAE: +3 wounded from Iran missile/drone attack — UAE Defense Ministry intercepts 2 ballistic missiles + 3 drones. Hormuz transits 2 May 7 (both dark via Iranian coastline) — ~5% pre-war flow. Two more Iranian-flagged tankers disabled Friday. IMO ~23,000 seafarers stranded from 87 countries. Hapag-Lloyd ~$60M/week Hormuz cost.",
    },
  },
  exec:
    "Day 71 holds Day 70 framework alive while opening three peripheral fronts simultaneously. Iran-US Hormuz exchange + UAE attack + Hezbollah Beirut-strike retaliation = first multi-vector kinetic re-escalation since April 8. Trump 'love tap' line preserves diplomatic surface; Iran response slips with 'no deadlines' framing. Brent $101.29 (+1.0%); rial 1,798,000 IRR (+0.50%). Probability 25 → 22.",
  implications: [
    {
      title: "Triple kinetic re-escalation restores active multi-vector exchange — but framework still mid-flight, not collapsed",
      body:
        "Iran's Hormuz attack on three US destroyers, UAE missile-drone strike, and Hezbollah's Mount Meron drone swarm open three peripheral fronts simultaneously. CENTCOM intercepted all inbound threats and tightly scoped retaliation to launching infrastructure; Trump's 'love tap' framing preserves the framework. Iran's response slip is bargaining-tempo, not rejection. Probability falls 25 → 22 — bargaining configuration of a deal under stress.",
    },
    {
      title: "Hezbollah retaliation ruptures the April 16 Lebanon ceasefire's central tactical norm — Lebanon track now operating on its own clock",
      body:
        "Hezbollah's first material retaliation for Wednesday's Beirut strike (rockets at Haifa Bay, drone swarm at Mount Meron, three IDF wounded) plus IDF's Toura retaliation (+4 KIA incl two women) breaks the April 16 norm on both sides. The IDF revealing Wednesday's strike also killed Bazi and Rom signals wider scope than initially disclosed. Lebanon clock formally separated from US-Iran clock — convergence on the 14-point MOU does not require Lebanon de-escalation, and Lebanon escalation does not require framework collapse.",
    },
    {
      title: "Brent $101.29 reversal + rial +0.50% reflect 'framework still mid-flight under kinetic stress' pricing — Taiwan procurement holds $99-110 floor with kinetic-tail $130-170 ceiling priced asymmetrically",
      body:
        "Framework convergence priced at the Day 70 close held with only +1.0% kinetic-shock adjustment despite the triple front opening — net ~100bp kinetic-floor premium added without rupturing framework discount. AlanChand cash USD weakened modestly, not capitulated. For Taiwan procurement, floor narrows from $98-108 to $99-110; upper-tail kinetic ceiling ($130-170) carries Lebanon-spillover plus IRGC-Hormuz-fracture plus 14-point-MOU-stall hazard premium asymmetrically. The Trump-Xi May 14-15 summit hard deadline anchors convergence at single-digit days; Beijing's structural incentive to deliver Iranian framework signature pre-summit is sharpened. TSMC 2026 CapEx hedges symmetrically across both tails.",
    },
  ],
  casualtyNotes: {
    us:
      "No new KIA Friday. CENTCOM intercepts coordinated Iranian attack on three destroyers in Hormuz; responds with strikes on Bandar Abbas/Qeshm/Bandar Kargan. Trump 'love tap'; ceasefire holds. Rubio: expect MOU response today (not delivered). Two more Iranian tankers disabled.",
    israel:
      "+3 IDF wounded by Hezbollah drones — first material retaliation since April 16. Hezbollah rockets at Haifa Bay/W Galilee/Nahariya/Acre + drone swarm at Mount Meron ATC. IDF Toura airstrike: Lebanon MOH +4 KIA (2 women). Wednesday Beirut kill confirmed as Balout, Bazi, Rom.",
    iran:
      "No new casualty figures. Three-destroyer Hormuz attack + UAE missile/drone strike. Baqaei: 'no deadlines'. Araghchi: 'reckless military adventure'. Cash USD 1,798,000 IRR (+0.50%); gap to remittance narrows 14,000 → ~8,000 IRR.",
    other:
      "Lebanon +4 KIA Toura. UAE +3 wounded. Hormuz transits 2 May 7 (both dark). Two more Iranian tankers disabled. ~23,000 seafarers stranded.",
  },
};

export default data;
