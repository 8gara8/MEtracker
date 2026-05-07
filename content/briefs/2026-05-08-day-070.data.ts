import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'conditional',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 70 splits sharply: Pezeshkian breaks the IRGC 'military council' access blockade with a ~2.5-hour direct audience with Mojtaba Khamenei (the new Supreme Leader's first publicly confirmed meeting with the elected president since his early-March selection) — characterized as 'warm and sincere' (Bloomberg, Press TV, Al Jazeera). Pezeshkian then publicly stipulates that any negotiation on fully reopening the Strait of Hormuz requires the US to first lift its naval blockade, making Iranian sequencing demand on the 14-point MOU mechanics public for the first time (Voice of Emirates, PBS, Mehr News). Cutting against the surface, CENTCOM confirmed an F/A-18 Super Hornet from USS Abraham Lincoln disabled the rudder of the Iranian-flagged M/T Hasna in the Gulf of Oman with 20mm cannon fire — the first kinetic blockade-enforcement strike of the war (CENTCOM press release, Stars and Stripes, The Hill, UPI, Bloomberg). Mohsen Rezaei (Expediency Council) demanded US 'reparations for damage done to Iran' before any framework signature — first authoritative Iranian-official rebuff signal on 14-point MOU mechanics, drove Brent's intraday reversal from -5% session low to -1.2% close (Time, CNBC).",
      risk7d:
        "Seven-day risk holds conditional. Brent settled $100.06 (-1.2%) after the sub-$100 intraday print to $99.40 — first sub-$100 close approach of the war — sustaining Wednesday's -8% capitulation despite Thursday's adverse news flow (CNBC, Euronews). The 14-point MOU mechanics remain intact: Witkoff-Kushner direct envoys, Pakistan mediation, Wang Yi pressure track, Trump-Xi May 14-15 summit hard deadline. Trump's reported 'one week to reach deal' via Israel Hayom (in tension with Wednesday's 'never a deadline' line) tightens the bargaining interval. Pezeshkian's lift-blockade-first sequencing demand publicly fixes a structural gap with the MOU's 30-day-window-with-phased-blockade-lift mechanics; Rezaei's reparations demand is bargaining-configuration noise unless authority-level. The Hasna disabling restores active kinetic-enforcement language to the escalation-direction thread but is compatible with framework finalization, not collapse — the bargaining-configuration of a deal mid-finalization rather than rupture.",
      spillover:
        "Spillover holds critical. CMA CGM San Antonio crew injuries revised up to 8 wounded per IMO; the Hormuz attack was the 32nd commercial-shipping incident since the war began and the second CMA CGM vessel struck (Insurance Journal, gCaptain, Seatrade Maritime). Hormuz traffic remains at single-digit daily transits — 6 May 3 / 5 May 4 vs ~138/day pre-war. Hapag-Lloyd reports $60M/week Hormuz disruption cost. IMO ~23,000 seafarers from 87 countries remain stranded. The IDF confirmed Wednesday's Beirut strike killed Radwan Force commander Mohammed Hassan Mansour — no Hezbollah retaliation yet (Al-Monitor, Al Jazeera, Eastern Herald). Continued Thursday IDF airstrikes on south Lebanon: Lebanon Health Ministry +1 killed. Netanyahu and Trump still without agreement on which country takes Iran's enriched-uranium stockpile — Trump told Netanyahu 'without agreement on this issue, there would be no deal' (Israel Hayom, Times of Israel).",
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'pivotal',
      source: 'Bloomberg / Press TV / Al Jazeera / Vanguard News / Cyprus Mail',
      event: "Pezeshkian breaks IRGC 'military council' access blockade — first direct meeting with Mojtaba Khamenei since the new Supreme Leader's selection two months ago; ~2.5-hour audience characterized as 'warm and sincere'",
      summary:
        "Iranian President Masoud Pezeshkian announced Thursday during an unannounced visit to the Ministry of Industry, Mine and Trade that he had recently met directly with Supreme Leader Mojtaba Khamenei. The meeting lasted nearly 2.5 hours and was the first publicly confirmed direct audience between the elected president and the new Supreme Leader since the latter's selection two months ago. Pezeshkian characterized the encounter as 'warm and sincere' with 'open discussion without barriers,' praising Khamenei's 'humility and depth of perspective.'",
      impact:
        "Most material commitment-authority signal of the war. Directly rebuts the Day 69 narrative that an IRGC 'military council' permanently controls Supreme Leader access. Does not retire the IRGC-ascendance prior — Vahidi command authority and IRGC navy 'new procedures' both persist — but materially reduces the structural risk that whose signature binds Iran is permanently fractured. Probability on commitment-authority renormalization improves enough to offset Hasna and Rezaei downside.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'CENTCOM press release / Bloomberg / Stars and Stripes / The Hill / UPI / Pakistan Today',
      event: "CENTCOM confirms US Navy F/A-18 Super Hornet from USS Abraham Lincoln disabled rudder of Iranian-flagged tanker M/T Hasna in Gulf of Oman with 20mm cannon — first kinetic blockade-enforcement strike of the war",
      summary:
        "CENTCOM issued a press release confirming that an F/A-18 Super Hornet launched from USS Abraham Lincoln (CVN 72) fired several rounds from its 20mm cannon to disable the rudder of the Iranian-flagged tanker M/T Hasna in the Gulf of Oman after the vessel ignored repeated warnings tied to the US naval blockade. By May 1, CENTCOM had forced 45 commercial vessels to turn around or return to port since the April 13 blockade activation; Hasna is the first vessel against which kinetic force has been used.",
      impact:
        "Direct operational contradiction of the 'Project Freedom paused' surface alignment. Demonstrates that the blockade floor is real even at the diplomatic surface's high-water mark. Restores active kinetic-enforcement language to the escalation-direction thread. Compatible with framework finalization rather than collapse — the bargaining configuration of a deal mid-finalization. Required qualification of the Day 69 'Project Freedom paused' framing.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'pivotal',
      source: 'Bloomberg / Voice of Emirates / PBS / Mehr News',
      event: "Pezeshkian publicly stipulates lifting of US naval blockade as precondition for any negotiation on fully reopening Strait of Hormuz — first authoritative Iranian sequencing demand on 14-point MOU mechanics",
      summary:
        "Following the Mojtaba Khamenei audience, Pezeshkian publicly stated that any negotiation on fully reopening the Strait of Hormuz requires the United States to first lift its naval blockade. Pezeshkian framed it: 'any effective negotiation requires an end to war and credible guarantees against the recurrence of hostile measures.' The statement publicly fixes Iran's sequencing demand: blockade-lift first, Hormuz reopening second, with 30-day MOU mechanics organized around that sequencing.",
      impact:
        "Makes Iranian commitment conditional on US-first reciprocity public, structurally fixing a gap with the MOU's 30-day-window-with-phased-blockade-lift mechanics. The MOU language describes parallel/gradual lifting; Pezeshkian frames sequencing. Probability on framework signature unchanged but structural friction now visible — explains the cash-rial weakening and Brent's intraday reversal. Bargaining-configuration noise, not collapse signal.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'CNBC / Euronews / Trading Economics',
      event: "Brent settles $100.06 Thursday (-1.2% from Wednesday's $101.27) after dipping to $99.40 intraday — first sub-$100 print of the war; Asian equities at all-time highs on Hormuz reopening hopes",
      summary:
        "Brent crude settled at $100.06 per barrel Thursday, down 1.2% from Wednesday's $101.27 close; WTI settled $94.81 (-0.28%). Brent dipped intraday to $99.40 — the first sub-$100 print of the war. Prices were down ~5% earlier on hopes of US-Iran agreement before reversing on the Rezaei reparations demand. Asian equities reached all-time highs on Hormuz reopening hopes.",
      impact:
        "Market sustains Wednesday's -8% capitulation despite Thursday's adverse news flow. Intraday reversal from -5% session low to -1.2% close on Rezaei rebuff is cleanest market read available on Iranian commitment-authority risk: roughly 350 basis points of the framework-convergence discount is priced as 'Iranian-signature-uncertain' premium. Floor narrows from $95-115 to $98-108. Kinetic-tail $130-$170 ceiling carries Lebanon-spillover, IRGC-fracture, and now MOU-rebuff hazard premium asymmetrically.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: 'Time / CNBC / Iran International carry',
      event: "Mohsen Rezaei (Iranian Expediency Council member) rebuffs MOU sequencing — demands US 'pay reparations for damage done to Iran' before any framework signature; first authoritative Iranian-official-level pushback on 14-point mechanics",
      summary:
        "Mohsen Rezaei, member of Iran's Expediency Discernment Council, publicly stated that the US 'must pay reparations for damage done to Iran' before any framework agreement could be reached. The statement was the first authoritative Iranian-official-level rebuff signal on the 14-point MOU mechanics. The remarks drove Brent's intraday reversal from a -5% session low to a -1.2% close.",
      impact:
        "First authoritative Iranian official-level pushback on 14-point mechanics. Whether Rezaei is a regime-internal hardliner trial-balloon or an authoritative principal-level pushback determines whether the rebuff materially shifts probability — current read is bargaining-configuration noise consistent with framework still on track, not collapse signal. Drives the cash-rial weakening to 1,789,000 IRR (+1.53%) and the Brent intraday reversal.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'medium',
      source: 'Al-Monitor / Al Jazeera / Eastern Herald / Times of Israel',
      event: "IDF confirms Wednesday Beirut strike killed Hezbollah Radwan Force commander Mohammed Hassan Mansour; one killed in continued Thursday IDF south-Lebanon strikes; April 16 ceasefire central tactical norm broken",
      summary:
        "The IDF confirmed Thursday that Wednesday's first-since-April-16-ceasefire Beirut strike killed Hezbollah Radwan Force commander Mohammed Hassan Mansour. There was no immediate Hezbollah confirmation of the death claim. IDF airstrikes on southern Lebanon continued Thursday with Lebanon's Health Ministry reporting one killed. Israel has continued operations despite the formal Lebanon ceasefire; Hezbollah retaliation for the Beirut strike has not yet materialized at 24 hours post-event.",
      impact:
        "Lebanon track stays escalating; Israel's structural independence from any US-Iran framework remains operationally visible. The 24-hour Hezbollah-retaliation gap is the active near-term variable: silence implies tactical absorption; major retaliation implies April 16 ceasefire ruptures fully. Ceasefire central tactical norm of no-Beirut-strikes is broken regardless. The MOU's 'end of war' declaration scope versus the Lebanon track remains structurally ambiguous.",
    },
    {
      id: 7,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Bloomberg / Asia Times / Washington Post / SCMP',
      event: "Trump-Xi summit confirmed May 14-15 Beijing despite China's Iran concerns — Iran energy security and Hormuz reopening remain top agenda items alongside Taiwan and chip exports",
      summary:
        "Reporting confirms the Trump-Xi summit will proceed May 14-15 in Beijing despite China's expressed concerns over Iran. Iran's energy security and the Hormuz reopening remain top-tier agenda items alongside Taiwan and chip exports. White House officials have urged Beijing to pressure Iran to restore commercial shipping ahead of the summit. The summit was originally scheduled for late March or early April but postponed to give Trump more time on the Iran war.",
      impact:
        "Hard deadline locks in Beijing's structural incentive to deliver Iranian restraint pre-summit. Wang Yi's Day 69 'comprehensive ceasefire' and 'prompt Hormuz shipping resumption' demands are now the visible Chinese line going into the summit. The summit's confirmation despite Iran friction means the diplomatic-architecture lane through Beijing is now anchored to a ~7-day deliverable horizon.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed KIA / WIA unchanged',
      status:
        "No new confirmed KIA Thursday. CENTCOM confirmed F/A-18 Super Hornet from USS Abraham Lincoln disabled rudder of Iranian-flagged tanker M/T Hasna in Gulf of Oman with 20mm cannon after warnings ignored — first kinetic blockade-enforcement strike of the war (CENTCOM press release, Stars and Stripes, The Hill, UPI, Pakistan Today). Trump reportedly told Netanyahu Tehran 'has one week to reach deal' (Israel Hayom) — softens Wednesday's 'never a deadline' framing. Witkoff-Kushner direct envoy track continues; 14-point MOU framework holds with Iranian sequencing demand (lift-blockade-first) now public via Pezeshkian. No agreement yet on which country takes Iran's enriched-uranium stockpile — Trump told Netanyahu 'without agreement on this issue, there would be no deal.' Trump-Xi summit confirmed May 14-15 Beijing despite China's Iran concerns.",
    },
    israel: {
      cumulative: 'KIA: 47 · WIA: 8,597',
      delta: '+0 KIA / +0 WIA Thursday',
      status:
        "No new IDF casualties confirmed Thursday. IDF claims Wednesday Beirut strike killed Hezbollah Radwan Force commander Mohammed Hassan Mansour (Al-Monitor, Al Jazeera, Eastern Herald) — no Hezbollah retaliation at 24 hours post-event. IDF continues south Lebanon airstrikes Thursday — Lebanon Health Ministry reports one killed. Netanyahu 'almost daily' Trump contact carries; Netanyahu insists 'full coordination' but no agreement on which country takes Iran's enriched-uranium stockpile — Trump told Netanyahu 'without agreement on this issue, there would be no deal' (Israel Hayom, Times of Israel). Security cabinet readout on return-to-Gaza-fighting carries from Wednesday. Trump-Xi summit confirmed May 14-15.",
    },
    iran: {
      cumulative: "Iran LMO 'nearly 3,400' KIA · HRANA April 7: 3,636+ (1,701 civilians, 1,221 military, 254+ children) · Hengaw 6,620+ military · 3.2M displaced",
      delta: 'No new confirmed casualty figures Thursday',
      status:
        "Pezeshkian breaks IRGC 'military council' blockade — first direct meeting with Mojtaba Khamenei since the new Supreme Leader's selection two months ago; ~2.5-hour audience characterized as 'warm and sincere' with 'open discussion without barriers' (Bloomberg, Press TV, Al Jazeera). Pezeshkian post-meeting stipulates US blockade lift as precondition for any Hormuz reopening negotiation — first public Iranian sequencing demand on 14-point MOU mechanics (Voice of Emirates, PBS, Mehr News). Mohsen Rezaei (Expediency Council) rebuffs MOU — demands US 'pay reparations for damage done to Iran' (Time, CNBC). AlanChand cash USD 1,789,000 IRR Thursday (+1.53% — rial weakens on Hasna disable + Rezaei rebuff repricing); USD-Remittance 1,775,000 IRR (-3.06%); cash-remittance gap narrows from 69,000 IRR Wednesday to 14,000 IRR Thursday — first convergence on framework since Sunday.",
    },
    other: {
      cumulative: 'Lebanon MOH: 2,664+ KIA / 8,197+ WIA · Iraq: 117+ · Gulf states: 32+ · UAE: 11+3 injured Monday',
      delta: 'Lebanon: +1 KIA Thursday',
      status:
        "Lebanon: +1 KIA Thursday — Lebanon Health Ministry reports one killed in continued IDF south-Lebanon airstrikes; no Hezbollah retaliation for Wednesday Beirut Radwan strike at 24 hours post-event (Al-Monitor, Al Jazeera). UAE: Fujairah ADCOP/VTTI persists from Monday. Maritime: CMA CGM San Antonio crew injuries revised up to 8 wounded per IMO Thursday — 32nd commercial-shipping incident since the war began; second CMA CGM vessel struck since war start (Insurance Journal, gCaptain, Seatrade Maritime). Hormuz traffic at single-digit daily transits — 6 transits May 3 / 5 May 4 vs ~138/day pre-war. Hapag-Lloyd: $60M/week direct cost from Hormuz disruption (Insurance Journal). IMO ~23,000 seafarers from 87 countries stranded continues.",
    },
  },
  exec:
    "Day 70 holds Wednesday's framework probability at 25 but the day's developments split sharply across regime-cohesion repair, kinetic re-escalation, and the first authoritative Iranian rebuff on 14-point MOU mechanics. Pezeshkian broke through the IRGC 'military council' access blockade, securing a ~2.5-hour direct audience with Mojtaba Khamenei in what he described as a 'warm and sincere' meeting — the first since the new Supreme Leader's selection two months ago (Bloomberg, Press TV, Al Jazeera, Vanguard News). Post-meeting, Pezeshkian stipulated that any Hormuz reopening negotiation requires the US to first lift its naval blockade, making Iranian sequencing demand on the MOU mechanics public for the first time (Voice of Emirates, PBS, Mehr News). Cutting against the diplomatic surface, CENTCOM confirmed an F/A-18 Super Hornet from USS Abraham Lincoln disabled the rudder of Iranian-flagged tanker M/T Hasna in the Gulf of Oman with 20mm cannon fire — the first kinetic blockade-enforcement strike of the war and a direct contradiction of the 'Project Freedom paused' framing (CENTCOM press release, Stars and Stripes, Bloomberg, The Hill, UPI). Mohsen Rezaei (Iranian Expediency Council member) rebuffed MOU sequencing, demanding US 'reparations for damage done to Iran' before any framework signature — driving Brent's intraday reversal from a -5% session low (Time, CNBC). Brent settled $100.06 (-1.2%) after dipping to $99.40 — first sub-$100 print of the war (CNBC, Euronews). The IDF confirmed Wednesday's Beirut strike killed Radwan Force commander Mohammed Hassan Mansour; one killed in continued Thursday IDF south-Lebanon strikes, Hezbollah retaliation absent at 24 hours post-event (Al-Monitor, Al Jazeera, Eastern Herald). Trump-Xi May 14-15 summit confirmed despite China's Iran concerns — Iran energy security and Hormuz reopening top agenda (Bloomberg, Asia Times, Washington Post). Netanyahu and Trump still without agreement on which country takes Iran's enriched-uranium stockpile (Israel Hayom, Times of Israel). Analytical judgment: 30-day probability holds 25 — Pezeshkian-Khamenei commitment-authority renormalization offsets the Hasna kinetic-floor demonstration and the Rezaei rebuff at framework convergence.",
  implications: [
    {
      title: "The Pezeshkian-Mojtaba Khamenei direct meeting is the most material commitment-authority signal of the war and reframes Wednesday's IRGC 'military council' blockade narrative as not absolute",
      body:
        "Pezeshkian's ~2.5-hour audience with Mojtaba Khamenei — the new Supreme Leader's first publicly confirmed meeting with the elected president since his early-March selection — directly rebuts the Day 69 narrative that an IRGC 'military council' of senior officers permanently controls Supreme Leader access (Bloomberg, Press TV, Al Jazeera, Vanguard News, Cyprus Mail). Pezeshkian's account, released Thursday during an unannounced Industry Ministry visit, characterized the encounter as 'warm and sincere' with 'open discussion without barriers' — a signal calibrated for Iranian domestic regime-line repair more than for the diplomatic track but with direct knock-on effect on it. Pezeshkian's post-meeting articulation that any Hormuz reopening negotiation requires the US to first lift its blockade — and that 'any effective negotiation requires an end to war and credible guarantees against the recurrence of hostile measures' — is the first authoritative Iranian sequencing demand on the MOU mechanics, framing Iranian commitment as conditional on US-first reciprocity (Voice of Emirates, PBS, Mehr News). Analytical judgment: the meeting does not retire the IRGC-ascendance prior — Vahidi's command authority and the IRGC navy's 'new procedures' framing on Hormuz both persist — but it materially reduces the structural risk that whose signature binds Iran is permanently fractured. Probability on commitment-authority renormalization improves enough to offset the Hasna and Rezaei downside; net 30-day probability holds 25.",
    },
    {
      title: "The Hasna disabling restores active kinetic blockade-enforcement language — the 'Project Freedom paused' surface alignment is now operationally contradicted at the inflection point",
      body:
        "CENTCOM's confirmation that an F/A-18 Super Hornet from USS Abraham Lincoln disabled the rudder of Iranian-flagged tanker M/T Hasna in the Gulf of Oman with 20mm cannon fire after warnings were ignored is the first kinetic blockade-enforcement strike of the war and the most direct operational contradiction of the 'Project Freedom paused' framing carried in Wednesday's brief (CENTCOM press release, Stars and Stripes, The Hill, UPI, Conservative Daily News, Bloomberg, Pakistan Today). Trump's pause covered the offensive escort operation specifically; the underlying naval blockade — which has forced 45 commercial vessels to turn around or return to port since April 13 per CENTCOM — was never paused. The Hasna disabling demonstrates the floor: even at the diplomatic surface's high-water mark, the US Navy will use kinetic force against vessels that ignore blockade warnings. Mohsen Rezaei's parallel 'US must pay reparations' demand — first authoritative Iranian-official rebuff signal on 14-point MOU mechanics — drove Brent's reversal from a -5% session low to a -1.2% close (Time, CNBC). Trump's reported 'one week to reach deal' via Israel Hayom (in tension with Wednesday's 'never a deadline' line) tightens the bargaining interval (Israel Hayom). Analytical judgment: the kinetic-enforcement floor and the Rezaei rebuff are both compatible with a framework still on track — they are the bargaining configuration of a deal mid-finalization, not collapse. But the floor is now operationally visible and Project Freedom paused framing requires a qualified read.",
    },
    {
      title: "Brent's $100.06 settle holds Wednesday's capitulation despite the day's adverse signals — Taiwan procurement should price the deal premium narrowing relative to the kinetic floor with TSMC 2026 CapEx hedging asymmetrically toward both convergence and Lebanon-IRGC-fracture tails",
      body:
        "Brent settled Thursday at $100.06 (-1.2% from Wednesday's $101.27) after the sub-$100 intraday print to $99.40 — the first sub-$100 close approach of the war (CNBC, Euronews, Trading Economics). Asian equities posted all-time highs on Hormuz reopening hopes despite the Hasna disabling and the Rezaei rebuff (Euronews). The market's reading: framework convergence priced in Wednesday holds despite Thursday's downside news flow because the underlying mechanics — 14-point MOU, Witkoff-Kushner direct envoys, Pakistan mediation, parallel Wang Yi pressure track, Trump-Xi May 14-15 summit hard deadline — remain intact. The intraday reversal from -5% to -1.2% on the Rezaei rebuff is the cleanest market reading available on Iranian commitment-authority risk: roughly 350 basis points of the framework-convergence discount is priced as 'Iranian-signature-uncertain' premium. For Taiwan procurement, the floor narrows from $95-115 to $98-108 with the sub-$100 print establishing breakable support; the kinetic-tail $130-$170 ceiling carries Lebanon-spillover, IRGC-fracture, and now MOU-rebuff hazard premium asymmetrically in the upper tail. CPC procurement should price the floor as conditionally soft against the Iranian-sequencing-public risk; the IMO ~23,000 stranded seafarers from 87 countries plus Hapag-Lloyd's $60M/week Hormuz cost establish humanitarian-and-economic facts that lock in regardless of MOU signature timing. TSMC 2026 CapEx should hedge symmetrically across both tails — framework signature discount and IRGC commitment-fracture-plus-Lebanon-spillover premium — rather than lock to a single narrative price target.",
    },
  ],
  casualtyNotes: {
    us:
      "No new confirmed KIA Thursday. CENTCOM F/A-18 from USS Abraham Lincoln disabled rudder of Iranian-flagged M/T Hasna in Gulf of Oman with 20mm cannon — first kinetic blockade-enforcement strike. Trump reportedly told Netanyahu Tehran 'has one week to reach deal' (Israel Hayom) — softens Wednesday's 'never a deadline' line. 14-point MOU framework holds; Iranian sequencing demand (lift-blockade-first) now public via Pezeshkian. No agreement on which country takes Iran's enriched-uranium stockpile.",
    israel:
      "+0 IDF casualties confirmed Thursday. IDF claims Wednesday Beirut strike killed Hezbollah Radwan Force commander Mohammed Hassan Mansour — no Hezbollah retaliation at 24 hours. IDF continues south Lebanon airstrikes Thursday — Lebanon MOH +1 killed. Netanyahu 'almost daily' Trump contact; insists 'full coordination'; no agreement on enriched-material destination — Trump: 'without agreement on this issue, there would be no deal.' Security cabinet return-to-Gaza-fighting carries.",
    iran:
      "Pezeshkian breaks IRGC 'military council' blockade — first direct Mojtaba Khamenei meeting since selection 2 months ago; ~2.5-hour 'warm and sincere' audience. Pezeshkian post-meeting stipulates US blockade lift as precondition for Hormuz reopening — first public Iranian sequencing demand on MOU mechanics. Mohsen Rezaei (Expediency Council): 'US must pay reparations for damage done to Iran.' AlanChand cash USD 1,789,000 IRR (+1.53% — rial weakens); USD-Remittance 1,775,000 (-3.06%); gap narrows 69,000 → 14,000 IRR.",
    other:
      "Lebanon: +1 KIA Thursday from continued IDF south-Lebanon airstrikes; no Hezbollah retaliation for Beirut Radwan strike at 24 hours. Maritime: CMA CGM San Antonio crew injuries revised up to 8 wounded per IMO; 32nd commercial-shipping incident since war began; second CMA CGM vessel struck. Hormuz traffic 6 May 3 / 5 May 4 vs ~138/day pre-war. Hapag-Lloyd $60M/week Hormuz cost. IMO ~23,000 seafarers from 87 countries stranded.",
  },
};

export default data;
