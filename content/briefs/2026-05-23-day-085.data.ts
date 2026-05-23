import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'conditional',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 85 carries the war into the fifth round of indirect US-Iran nuclear talks in Rome. Direction holds mixed: the round convening on schedule under Omani mediation, Trump's 'over with soon' framing and Araghchi's pre-departure statement that a deal is achievable pull de-escalatory, while Khamenei's order keeping the enriched-uranium stockpile in Iran, the reported Israeli preparations to strike nuclear facilities, Iran's 'devastating and decisive response' warning and fresh US sanctions hold the escalatory pole. The 30-day ceasefire probability eases one point to 17 — reflecting the hardened pre-Rome positioning, which closed Trump's Day 84 physical-removal track before the talks opened, partly offset by the round proceeding as scheduled.",
      risk7d:
        "Seven-day risk holds conditional. The Rome round is the binary the seven-day horizon turns on, and it is being decided today: a credible outcome relaxes the kinetic option, a failed round against the reported Israeli strike preparations could recompress it toward critical within days. Under the multi-clock framework the active-deadline clock has arrived rather than improved — the deadline is today's round — and the negotiation-capacity clock stalls as Khamenei's stockpile order and Araghchi's 'no enrichment, no deal' line harden the substance the round must bridge. The skeptical counter is structural: Trump's posture has reversed repeatedly inside 24-hour spans, and the Sledgehammer architecture remains operational.",
      spillover:
        "Spillover holds critical. Israeli warplanes struck near Brital in eastern Lebanon — an area spared since the April 17 ceasefire — extending the strike geography northward under the 45-day extension, while the Iraqi-territory drone vector against Gulf nuclear infrastructure and the Strait of Hormuz, still administered through Iran's PGSA permit regime with open commercial transits near zero, keep the energy-infrastructure clock critical. The coalition-cohesion clock continues to worsen: the reported Israeli preparations to strike Iranian nuclear facilities — a step that would break openly with Trump's diplomacy — sharpen the US-Israel divergence over tempo from a split into a potential rupture. The humanitarian-escalation clock holds at the Lebanon cumulative as strikes continue.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'PBS News / RFE/RL / Times of Israel (Rome fifth round convenes; Araghchi pre-departure framing; Omani mediation)',
      event:
        "The fifth round of indirect US-Iran nuclear talks convenes in Rome on May 23 under Omani mediation; before departing Tehran, Foreign Minister Araghchi frames a deal as possible only if the aim is to verify Iran will not weaponise, not to dismantle enrichment",
      summary:
        "The fifth round of indirect US-Iran nuclear negotiations convened in Rome on May 23, mediated by Omani Foreign Minister Badr al-Busaidi, with the unresolved question of whether Iran may continue enriching uranium the central issue. Before leaving Tehran, Foreign Minister Abbas Araghchi wrote that 'figuring out the path to a deal is not rocket science,' arguing an agreement is achievable if the goal is to ensure Iran does not acquire a weapon but impossible if the aim is to dismantle Iran's enrichment capability, restating that no enrichment would mean 'we do NOT have a deal.' Washington has continued to insist Iran halt all enrichment in any sanctions-relief agreement.",
      impact:
        "Analytical judgment: the round opens with the two sides' stated positions further apart than at any point since the talks resumed — dismantlement versus continuation is a binary, not a spectrum, and both capitals have anchored publicly to opposite ends of it. Under the multi-clock framework the negotiation-capacity clock is dominant today, but stalled rather than advancing: the mediation channel is intact and functioning, yet it has no visible zone of agreement to work inside. Skeptical counter: indirect talks have survived four prior rounds and several collapses; convening at all, after the Day 84 evening hardening, is itself a signal both sides still prefer process to the kinetic alternative.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera (Khamenei orders enriched-uranium stockpile to remain in Iran; rejects zero-enrichment demand)',
      event:
        "Supreme Leader Khamenei publicly orders Iran's stockpile of enriched uranium to remain inside the country and dismisses the US zero-enrichment demand as 'outrageous'",
      summary:
        "Iran's Supreme Leader Ayatollah Ali Khamenei publicly ordered that the country's stockpile of enriched uranium remain inside Iran and dismissed the US demand for zero enrichment as 'outrageous.' The order directly rejects President Trump's Day 84 statement that the United States would 'retrieve' Iran's highly enriched uranium and 'probably destroy it after we get it.' Independent assessments place Iran's stockpile at roughly 440 kg of uranium enriched to 60 percent — material experts estimate could be processed toward weapons-grade in days to weeks, and enough, if fully enriched, for several weapons. The AEOI's position that enrichment and nuclear material remain sovereign carries into the round.",
      impact:
        "Analytical judgment: Khamenei's intervention closes the physical-removal endpoint Trump set out on Day 84 before the Rome round opens — the supreme leader, not the negotiating team, has now drawn the line, which makes it far harder to walk back at the table. Under the multi-clock framework this hardens the negotiation-capacity clock's central obstruction: the enriched-uranium stockpile is now explicitly off the table for removal, leaving only dilution or in-country supervised arrangements as technical paths. Skeptical counter: a sovereign-stockpile declaration is consistent with a dilution-under-safeguards outcome; Khamenei rejected removal and destruction, not every form of constraint, so the statement narrows the zone of agreement without closing it entirely.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / Times of Israel / NBC News (Israel reported preparing strikes; Iran warning; new US sanctions on IRGC-linked construction)',
      event:
        "Israel is reported to be preparing strikes on Iranian nuclear facilities and Iran warns of a 'devastating and decisive response,' while Washington imposes fresh sanctions on Iran's IRGC-linked construction sector days before Rome",
      summary:
        "CNN reported that Israel is preparing to strike Iranian nuclear facilities — a step Israeli analysts say would break openly with President Trump's diplomatic track — and Iran warned that any Israeli attack would be met with a 'devastating and decisive response.' Separately, the United States imposed new sanctions targeting Iran's IRGC-linked construction sector and restricted ten categories of materials tied to Iran's nuclear and military programmes. Israeli officials have continued to signal the IDF is ready for any scenario, while the standing assessment that Israel cannot resume strikes without US authorisation holds.",
      impact:
        "Analytical judgment: the reported Israeli strike preparations and Iran's warning form a kinetic-signal exchange layered directly under the Rome table — a reminder that the diplomatic track and the military track are running in parallel, not in sequence. Under the multi-clock framework the coalition-cohesion clock worsens: Israel preparing strikes that would break with Trump's diplomacy is the sharpest US-Israel divergence of the war so far. The fresh sanctions apply coercive pressure as the round convenes. Skeptical counter: visible Israeli strike preparation is also a negotiating lever, calibrated to raise the cost to both Washington and Tehran of a slow or failed round, and Israel still cannot act without US sign-off.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: 'Fortune / AlanChand / Al Jazeera / Times of Israel (Brent; rial; IRGC 26-vessel Hormuz claim; Israeli strike near Brital)',
      event:
        "Brent eases to about $104.50 a barrel as the softening holds; the rial firms slightly to 1,777,000 IRR/USD; the IRGC claims 26 Hormuz transits in 24 hours; Israeli warplanes strike eastern Lebanon",
      summary:
        "Brent crude eased to roughly $104.50 a barrel around May 22, down about $4 from the Day 84 print, as the diplomatic softening held and some war-resumption premium drained from the price; the benchmark remains well above its year-earlier level. Iran's rial firmed slightly to 1,777,000 IRR/USD on the AlanChand remittance market from about 1,787,000. Iran's IRGC said it coordinated the transit of 26 vessels out of the Strait of Hormuz in 24 hours, against independent trackers that continue to show open commercial transits at or near zero. Israeli warplanes struck the Nabi Sreij area near Brital in eastern Lebanon — an area spared since the April 17 ceasefire.",
      impact:
        "Analytical judgment: the Brent ease and the rial's small firming are procedural relief, not structural — both are trading the Rome round as a binary rather than pricing a resolved war or a reopened strait. Under the multi-clock framework the energy-infrastructure clock holds critical: a Hormuz administered through PGSA permits, with independently observed open traffic near zero, is not a reopened strait whatever the IRGC's transit count. The Brital strike extends the Lebanon strike geography northward. Skeptical counter: lower Brent and any genuine throughput are real relief for energy importers regardless of who administers the lane, and a calmer rial buys the Iranian home front marginal time.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed',
      status:
        "No new US casualties. The resumption decision remains concentrated on the White House: Trump said the war 'will be over with soon' and that Iran is 'never going to have a nuclear weapon,' while Washington imposed fresh sanctions on Iran's IRGC-linked construction sector. The Sledgehammer architecture remains operational.",
    },
    israel: {
      cumulative: 'KIA: 47 · WIA: 8,603+',
      delta: '+0 KIA / +0 WIA (no new beyond Day 79–84 carry)',
      status:
        "No new Israeli casualties confirmed. CNN reports Israel is preparing to strike Iranian nuclear facilities and the IDF is signalled ready for any scenario, but the assessment that Israel cannot resume strikes without US authorisation holds. Israeli warplanes struck near Brital in eastern Lebanon; the IDF Litani-extension posture about 30 km into Lebanon holds.",
    },
    iran: {
      cumulative:
        "LMO 'nearly 3,400' KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · Hengaw 6,620+ mil · 3.2M displaced",
      delta: 'No new war figures; Iran hardens its position entering Rome',
      status:
        "No new Iranian war casualty figures. Khamenei ordered the enriched-uranium stockpile to remain in Iran and called the zero-enrichment demand 'outrageous'; Araghchi's 'no enrichment, no deal' framing carries into the May 23 Rome round. Rial AlanChand prints 1,777,000 IRR/USD.",
    },
    other: {
      cumulative:
        'Lebanon MOH war-cumulative: 3,020 killed (292 women + 211 children); truce-period KIA at least 657 · ~8,946+ WIA war-cumulative · Iraq: 117+ · Gulf states: 32+ · UAE: 14+9 wounded cumulative · Kuwait: 1 wounded',
      delta: 'Day 84 figures carry; Israeli strike geography extends to eastern Lebanon',
      status:
        "Lebanon MOH war-cumulative 3,020 killed (292 women + 211 children); truce-period KIA at least 657 carries. Israeli warplanes struck the Nabi Sreij area near Brital in eastern Lebanon, an area spared since the April 17 ceasefire. Iraq's investigation into the Iraqi-origin drones that struck the UAE's Barakah plant continues; the Strait of Hormuz remains effectively closed to open commercial traffic.",
    },
  },
  exec:
    "Day 85 carries the war into the fifth round of indirect US-Iran nuclear talks, which convenes in Rome on May 23 under Omani mediation with the question of whether Iran may keep enriching uranium still unbridged. The round opens against a pre-Rome posture that hardened sharply over the prior day. Supreme Leader Khamenei publicly ordered Iran's enriched-uranium stockpile to remain inside the country and dismissed the US zero-enrichment demand as 'outrageous' — a direct rejection of President Trump's Day 84 vow to 'retrieve' and 'probably destroy' the stockpile, closing the physical-removal track before the talks open (Al Jazeera). CNN reported that Israel is preparing to strike Iranian nuclear facilities, a move that would break with Trump's diplomacy, and Iran warned any attack would draw a 'devastating and decisive response' (Al Jazeera, Times of Israel). Washington imposed new sanctions on Iran's IRGC-linked construction sector and restricted ten categories of nuclear- and military-program materials as the round convenes (NBC News). Before leaving Tehran, Foreign Minister Araghchi wrote that a deal is 'not rocket science' and is possible if the goal is ensuring Iran does not acquire weapons, but impossible if the aim is to dismantle enrichment (RFE/RL, PBS News). Trump said the war 'will be over with soon' and that Iran is 'never going to have a nuclear weapon'; Secretary Rubio saw 'some good signs' but said the parties are 'not there yet.' Brent eased to about $104.50 a barrel; the rial firmed slightly to 1,777,000 IRR/USD (Fortune, AlanChand). Analytical judgment: the 30-day ceasefire probability eases to 17; direction holds mixed; seven-day risk holds conditional on the Rome outcome.",
  implications: [
    {
      title:
        "The Rome round opens with Washington and Tehran anchored to opposite ends of a binary — and Khamenei, not the negotiating team, has now set Iran's line",
      body:
        "The fifth round convenes on a question that does not bisect: the United States insists Iran halt all enrichment in any sanctions-relief deal, and Iran insists enrichment continue. Araghchi's pre-departure framing made the gap explicit — a deal is achievable, he wrote, if the aim is to verify Iran will not build a weapon, and impossible if the aim is to dismantle enrichment. The Day 84 evening hardening compounded the problem: Supreme Leader Khamenei personally ordered the enriched-uranium stockpile to remain in Iran and called the zero-enrichment demand 'outrageous.' Analytical judgment: that the supreme leader, rather than the AEOI or the negotiating team, drew the line is the load-bearing detail — it removes the stockpile's physical removal from the negotiable set and makes Iran's position far costlier to soften at the table without a visible climbdown. Under the multi-clock framework the negotiation-capacity clock is dominant but stalled: the Omani channel is intact and the round is proceeding, yet it has no visible zone of agreement to work inside. The skeptical counter is that Khamenei rejected removal and destruction, not constraint as such — dilution or supervised in-country arrangements remain technically open, leaving daylight between the rhetoric and an implementable outcome.",
    },
    {
      title:
        "The diplomatic track and a kinetic track are now running in parallel: Israel's reported strike preparations place a second clock directly under the Rome table",
      body:
        "CNN's report that Israel is preparing to strike Iranian nuclear facilities, paired with Iran's warning of a 'devastating and decisive response,' means the Rome round convenes with a live military option running alongside it rather than behind it. The standing assessment that Israel cannot act without US authorisation still holds, which keeps the resumption decision concentrated on the White House — but Israel preparing strikes that would, by its own analysts' account, break openly with Trump's diplomacy is the sharpest US-Israel divergence of the war. Analytical judgment: under the multi-clock framework the coalition-cohesion clock worsens toward a possible rupture, not merely a split over tempo; a failed Rome round no longer simply preserves the kinetic option, it hands Israel a public argument for using it. Washington's fresh sanctions on the IRGC-linked construction sector apply pressure in the same direction. The skeptical counter is that visible Israeli strike preparation is also the most effective lever Jerusalem has — it raises the cost to both Tehran and Washington of a slow or empty round, and a leveraged threat is not the same as an imminent one.",
    },
    {
      title:
        "Taiwan: Brent's slide toward $104 prices the Rome round as a binary — the round's outcome, not the daily print, is now the variable to watch",
      body:
        "Brent eased to roughly $104.50 a barrel around May 22, down about $4 from the Day 84 level, as the diplomatic softening held and war-resumption premium continued to drain. The move is procedural, not structural: the Strait of Hormuz remains administered through Iran's PGSA permit regime with independently observed open transits near zero, and Brent sits well above its year-earlier level. For Taiwan the read is unchanged in substance — CPC's working floor near $110 now sits above spot, and Taiwan's LNG cover through September is confirmed — but sharper in framing: the energy market is trading the Rome round as a binary, where a credible outcome could pull Brent toward the mid-$90s and a failed round against the reported Israeli strike preparations keeps the $130–170 kinetic-tail scenario in two-to-three-week watch. No fresh Taiwan-specific development today; TSMC's 2026 CapEx framework-signature path holds near 8 percent. Analytical judgment: the live variable for Taiwan is no longer the daily Brent print but the Rome outcome the print is discounting — the next material data point is the round itself and the overnight oil reaction to it.",
    },
  ],
  casualtyNotes: {
    us:
      "No new KIA. Trump said the war 'will be over with soon'; Washington imposed fresh sanctions on Iran's IRGC-linked construction sector. The Sledgehammer architecture remains operational and the resumption decision rests with the White House.",
    israel:
      "No new Israeli casualties confirmed. CNN reports Israel is preparing to strike Iranian nuclear facilities and the IDF is signalled ready for any scenario, but Israel is assessed unable to resume strikes without US authorisation.",
    iran:
      "No new war casualty figures. Khamenei ordered the enriched-uranium stockpile to remain in Iran; Araghchi's 'no enrichment, no deal' framing carries into the Rome round. Rial AlanChand prints 1,777,000 IRR/USD.",
    other:
      "Lebanon MOH war-cumulative 3,020 (292 women + 211 children); truce-period KIA at least 657 carries. Israeli warplanes struck near Brital in eastern Lebanon, an area spared since the April 17 ceasefire.",
  },
  flash: 'The fifth Rome round concluded without a breakthrough. Oman\'s FM Badr al-Busaidi reported only \'some but not conclusive progress\' — no deal, no joint statement, enrichment binary unresolved; both sides to review proposals in capitals before scheduling a sixth round. Araghchi: Iran is \'on a reasonable path.\' Separately, the NYT (via two Middle Eastern officials) reports Israel and the US are making their \'most intense preparations yet\' to renew attacks on Iran possibly as early as next week, with options including a more intense bombing campaign, seizure of Kharg Island, and commandos to extract nuclear material. Analytical judgment: the 17 ceasefire probability holds; direction holds mixed; 7-day risk shifts from conditional to elevated — the diplomatic binary has closed without resolution, handing Israel a public argument for action; coalition-cohesion clock accelerates toward rupture. Brent ~$104 flat. (NBC News, Axios, Times of Israel — accessed 2026-05-23T13:15-13:20Z.)',
};

export default data;
