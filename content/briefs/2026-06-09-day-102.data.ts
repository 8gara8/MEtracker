import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 102 holds the hundred-day standoff and sharpens its single most dangerous vector — the nuclear file. The IAEA Board session running through June 12 advanced the US-circulated draft censure demanding immediate inspector access, a step the agency's own record (cameras removed after June 2022, enrichment to 60% after November 2022) frames as a plausible Iranian-retaliation trigger rather than a path to verification (IAEA, Washington Institute, RFE/RL). The diplomacy moved at the margins without converting: Pakistan's reopened Sharif-to-Mojtaba channel drew a measured Iranian response that kept the line alive without a commitment, while Trump's Truth Social optimism ran against Araghchi's 'no tangible progress' and Rezaee's 'deadlock.' CENTCOM's Hormuz drone cadence passed a fourth day; the Lebanon truce stayed procedural. Direction holds mixed.",
      risk7d:
        "Seven-day risk holds critical and gains a new near-term trigger. The active-deadline clock runs to the June 12 Board close, where a censure vote could convert the war's slowest-moving file into its fastest-moving escalation — the Washington Institute flagged exactly this. The negotiation-capacity clock stays dominant but unconverted: Trump's optimism against every Iranian principal who has spoken, with Pakistan's channel open but unable to close itself (Stimson, CFR). The kinetic-readiness clock stays loaded — CENTCOM intercepted Iranian drones over Hormuz past a fourth straight day, holding the dual-blockade collision recurring under contested attribution. The Lebanon kinetic clock binds the Day 100 Kfar Tebnit LAF killing, Hezbollah's rejection, and Katz's 'operations continue' against Trump's 'won't move on Beirut' cap; LAF pilot-zone deployment un-fired-upon through the week of June 22 remains the binding test.",
      spillover:
        "Spillover holds critical. The Lebanon seam stays open after Day 100's Kfar Tebnit killing of an LAF brigadier general — the army the pilot-zone framework depends on — with Hezbollah's rejection and Ben-Gvir's 'serious mistake' leaving the truce procedural and Aoun's 'must stop interfering' rebuke of Tehran carrying (TIME). Coalition cohesion stays strained. The Gulf collision stays live: CENTCOM's continued Hormuz drone intercepts against Iran's standing 'three destroyers fled' narrative leave both capitals an escalation story. Brent firmed toward the mid-$90s near $96 as IAEA censure-vote risk and the daily drone cadence put a floor under weak demand; the ~40-ship NCAGS Bahrain channel held against ~2,000 ships stranded past 99 days of effective Hormuz closure; PGSA $2M/transit yuan-billed continues; Lebanon MOH ~3,355-3,500 carries and rising.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'IAEA / Washington Institute / RFE/RL / AP',
      event:
        "The IAEA Board of Governors session (June 8–12) advanced the US-circulated draft censure demanding immediate inspector access, moving the nuclear file from a bilateral talking point toward a Board vote, with Grossi reporting ~99 days of zero access and an unverifiable ~440.9 kg of 60% HEU at Isfahan",
      summary:
        "The draft censure would formally demand Iran restore access and cooperate; Grossi separately held that Washington and Tehran are 'pretty close' to a framework. The agency's record frames the choice: Iran removed monitoring cameras after the June 2022 censure and enriched to 60% after the November 2022 censure, answering pressure with escalation rather than access.",
      impact:
        "Moves the war's slowest-moving file to a near-term decision point: a censure vote before the June 12 Board close could convert the nuclear file into the fastest-moving escalation vector, per the Washington Institute's read, while a deferral buys the Pakistan channel room. Skeptical counter §3.5.6: a Board produces a resolution, not enforcement; Mojtaba's HEU-non-export directive and Iran's retained control of access cut against near-term resolution either way.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'Middle East Monitor / Al Jazeera / Stimson Center / CFR',
      event:
        "Pakistan's reopened Islamabad track drew a measured Iranian response: the Sharif-to-Mojtaba written message conveyed by Interior Minister Naqvi on Day 101 kept the channel alive at the Foreign Ministry level without producing a dated Iranian commitment",
      summary:
        "Iran acknowledged the message and the channel while declining to convert it into a yes/no on the MOU; Pakistan continued coordinating with Qatar, Turkey and Egypt. Stimson and CFR both frame Islamabad's role as structurally constrained — able to keep a channel open but not to close a deal it does not control.",
      impact:
        "Motion without conversion: the one de-escalatory vector stayed alive but did not advance the principals' signatures. Skeptical counter §3.5.6: Pakistan brokered the April 8 framework now triply broken, and the Islamabad track is where the Day 46-51 '80% complete' optimism originated before the USS Spruance collapse. The test rolling into Day 103 is whether the channel pulls the frozen-asset and HEU files back toward the text before the censure decision forces Tehran's hand.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'Trump Truth Social / CBS News / CNN / Iranian state media',
      event:
        "Trump's optimism ran ahead of every Iranian principal who has spoken: his Truth Social posts — 'final negotiations on Peace are proceeding' and an appeal for an 'immediate CEASEFIRE!' — set against Araghchi's standing 'no tangible progress' and Rezaee's 'deadlock'",
      summary:
        "Trump kept the Washington 'this weekend' optimism rolling and CBS reported he had personally edited the draft agreement's HEU and Hormuz provisions; Iranian state media carried the principals' more cautious framing, with the HEU file held outside the preliminary MOU per Tehran.",
      impact:
        "The §3.5.3 pattern intact: the optimistic figure originates with the Washington camp while the Iranian principal-level read is deadlock-to-no-progress. The negotiation-capacity clock is dominant and unconverted. The binding question is whether Trump's optimism survives contact with a Board censure vote and a measured-not-committed Iranian response.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: 'CENTCOM / The War Zone / ABC News / Tasnim',
      event:
        "CENTCOM continued intercepting Iranian one-way attack drones over the Strait of Hormuz past a fourth consecutive day, extending the enforcement-floor cadence and keeping the dual-blockade collision live under contested attribution",
      summary:
        "US forces downed additional Iranian drones CENTCOM said threatened maritime traffic, following the US coastal-radar strikes at Goruk and on Qeshm Island. Iranian state media's standing account — three US destroyers came under fire and fled in the Day 99 Gulf of Oman exchange — remains opposed to CENTCOM's flat 'FALSE.'",
      impact:
        "Keeps the dual-blockade collision as the live escalation engine beneath the diplomacy: the daily drone-and-intercept cadence is the floor, and the Panaya/oil-tanker exchange continues to name the single-strike event that would close the quiet NCAGS channel overnight. Skeptical counter: contained, defensive intercepts framed as protecting maritime traffic fit the enforcement cadence rather than a decision to resume general war.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'Trading Economics / CNBC / Al Jazeera',
      event:
        "Brent crude firmed toward the mid-$90s near $96 as IAEA censure-vote risk and the daily Hormuz drone cadence put a floor under a market still pricing weak global demand and Chinese crude imports at a ten-year low",
      summary:
        "Brent reversed a sliver of the prior easing but stayed well off the late-April highs above $108 and the mid-May spikes above $100. The structural picture held: the Strait past 99 days of effective closure, the ~40-ship NCAGS Bahrain channel the only durable transit mechanism, ~2,000 ships stranded, PGSA $2M/transit yuan-billed continuing.",
      impact:
        "The marginal firming is a risk-premium re-rate, not flow restoration. The unrestricted-Hormuz clause that would actually reopen the Strait is now triple-entangled — with the censure decision, the HEU file, and the frozen-asset term — lengthening the path to the one catalyst that revises the Taiwan LNG dominant case. LNG cover through September and TSMC 2026 CapEx framework-signature near 8% carry unchanged; China still takes ~37.7% of Hormuz crude.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 (no new US KIA Day 102; Hormuz drone exchanges sub-casualty / contested)',
      status:
        "No new US KIA. CENTCOM intercepted Iranian drones over Hormuz past a fourth straight day, and the Day 99 Gulf of Oman exchange remains contested-attribution, with CENTCOM rejecting Iran's warship-fire claim as 'FALSE.' Trump kept the $24B frozen-asset release conditioned on a ceasefire being reached first and restated that killing US troops would trigger renewed military action. Sledgehammer operational; the prepared kinetic option is unwithdrawn; the US coastal-radar strikes at Goruk and Qeshm carry as the enforcement floor.",
    },
    israel: {
      cumulative: 'KIA: 49 (Iran-front 47 + Lebanon-front 2 truce-period) · WIA: 8,625+',
      delta: '+0 confirmed new Day 102 IDF KIA',
      status:
        "No confirmed new IDF KIA. The Lebanon truce stayed procedural after Day 100's Kfar Tebnit strike that killed an LAF brigadier general, a captain, and a soldier; Katz's 'operations south of the Litani continue' and Ben-Gvir's 'serious mistake' carry, against Trump's Day 99 'won't move on Beirut' cap. No new IDF-Hezbollah kinetic exchange was confirmed Day 102.",
    },
    iran: {
      cumulative:
        "LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · Hengaw 6,620+ mil · 3.2M displaced",
      delta: '+0 new published Day 102',
      status:
        "No new published figures. The HEU stockpile and nuclear file remain outside the preliminary MOU per Tehran; the IAEA Board session (June 8–12) advanced a US-circulated draft censure with Grossi reporting ~99 days of zero inspector access and an unverifiable ~440.9 kg of 60% HEU at Isfahan. Rezaee's 'deadlock' and Araghchi's 'no tangible progress' carry; Hormuz past 99 days of effective closure; 3.2M displaced.",
    },
    other: {
      cumulative:
        'Lebanon MOH ~3,355-3,500 killed / 10,044+ injured since March 2; Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Bahrain no casualties',
      delta: '+0 new confirmed Day 102; Lebanon MOH carries and rising after Kfar Tebnit',
      status:
        "No new confirmed casualties published Day 102. The Lebanon Health Ministry war-cumulative ~3,355-3,500 killed / 10,044+ injured carries and is rising after the Day 100 Kfar Tebnit LAF deaths. Pakistan's reopened Sharif-to-Mojtaba channel drew a measured Iranian response; President Aoun's 'must stop interfering in Lebanon' rebuke of Tehran carries. No new Gulf-state casualties; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
    },
  },
  exec:
    "Day 102 holds the hundred-day standoff in place and sharpens its single most dangerous vector: the nuclear file. With the IAEA Board of Governors session running through June 12, the US-circulated draft censure demanding immediate inspector access advanced toward a vote that, by the agency's own record, Tehran has historically answered with retaliation rather than cooperation — cameras removed after the June 2022 censure, enrichment to 60% after November 2022 — even as DG Grossi held that Washington and Tehran are 'pretty close' to a framework (IAEA, Washington Institute). The diplomacy moved at the margins without converting: Pakistan's Sharif-to-Mojtaba channel, reopened Day 101, drew a measured Iranian response that kept the line alive without a commitment, while Trump's Truth Social optimism — 'final negotiations on Peace are proceeding' and a call for an 'immediate CEASEFIRE!' — ran against Araghchi's standing 'no tangible progress' and Rezaee's 'deadlock' (Al Jazeera, CBS News). On the Gulf vector CENTCOM continued intercepting Iranian one-way attack drones over the Strait, extending the enforcement-floor cadence past a fourth consecutive day and keeping the dual-blockade collision live under contested attribution (CENTCOM, The War Zone). The Lebanon truce stayed procedural after Day 100's Kfar Tebnit killing of an LAF brigadier general, with Hezbollah's rejection and Katz's 'operations continue' carrying against Trump's 'won't move on Beirut' cap (TIME). Brent firmed toward the mid-$90s near $96 as censure-vote risk and the daily drone cadence put a floor under a market still pricing weak demand (Trading Economics). 30-day ceasefire probability holds at 14; direction holds mixed — the censure-vote downside and the reopened Pakistan channel roughly offset, with the June 12 Board decision the next dated hinge.",
  implications: [
    {
      title:
        "The nuclear file moved from a bilateral talking point to a censure-vote decision point — and the Board's own record makes the downside of a vote retaliation, not verification",
      body:
        "The IAEA Board session, running June 8–12, advanced the US-circulated draft censure demanding immediate inspector access to facilities Grossi reports have been dark for ~99 days, with an unverifiable ~440.9 kg of 60% HEU believed still at Isfahan (IAEA, Washington Institute). The significant shift is that the nuclear file — by Tehran's own account outside the preliminary MOU — now carries a binary the Board must resolve within days: censure or defer. Skeptical counter per §3.5.6: the agency's record cuts against the optimistic read. Iran removed monitoring cameras after the June 2022 censure and enriched to 60% after the November 2022 censure; the Washington Institute assessed the current draft as a plausible escalation trigger, and RFE/RL's reporting shows Tehran answering censure with enrichment, not access. Grossi's 'pretty close to a framework' line is a process signal, not a commitment, and runs against Mojtaba's HEU-non-export directive. Under the multi-clock framework the negotiation-capacity clock stays dominant but is now braided to the active-deadline clock at the June 12 Board close: a vote could convert the war's slowest-moving file into its fastest-moving escalation, while a deferral buys the Pakistan channel room. The binding question is whether the E3 and Washington press the vote or hold it as leverage.",
    },
    {
      title:
        "Pakistan's reopened channel drew a measured Iranian response, not a conversion — and Trump's optimism runs ahead of every Iranian principal who has spoken",
      body:
        "The Sharif-to-Mojtaba message that reopened the Islamabad track on Day 101 produced, on Day 102, a measured Iranian response that kept the channel alive without a dated commitment — the line is open, the principals' signatures no closer (Middle East Monitor, Al Jazeera). Against that, Trump's Truth Social posts — 'final negotiations on Peace are proceeding,' an 'immediate CEASEFIRE!' — kept the Washington optimism rolling. Skeptical counter per §3.5.3: every Iranian principal who has spoken this week cuts the other way — Rezaee's 'deadlock,' Araghchi's 'no tangible progress,' and Tehran's position that the HEU file sits outside the text Trump is being asked to sign. CFR and Stimson both frame Pakistan's role as structurally constrained — a channel it can keep open but cannot itself close — which restates the §3.5.6 prior: Islamabad brokered the April 8 framework now triply broken, and is where the Day 46-51 '80% complete' optimism originated before the USS Spruance collapse. The negotiation-capacity clock is dominant and unconverted: a measured response is motion without commitment. The test into Day 103 is whether the channel pulls the frozen-asset and HEU files back toward the text before the censure decision forces Tehran's hand — and whether Trump's optimism survives a Board vote.",
    },
    {
      title:
        "Taiwan: Brent firmed toward the mid-$90s on censure-vote risk and the Hormuz-reopening clause is now triple-entangled — pushing the one catalyst further out; prior assessments unchanged",
      body:
        "Brent firmed toward the mid-$90s near $96, reversing a sliver of the prior easing as IAEA censure-vote risk and the daily Hormuz drone cadence put a floor under a market still pricing weak global demand and Chinese crude imports at a ten-year low (Trading Economics, CNBC). The structural picture is unchanged: the Strait sits past 99 days of effective closure, the ~40-ship NCAGS Bahrain channel remains the only durable post-Project-Freedom transit mechanism, and ~2,000 ships stay stranded. What Day 102 adds is analytical: the unrestricted-Hormuz clause that would reopen flow is now triple-entangled — with the censure decision before the Board, the HEU file, and the $24B frozen-asset term Trump conditioned on a deal first — so the single catalyst that revises the dominant case is further out, not closer. PGSA $2M/transit yuan-billed continues; China still takes ~37.7% of Hormuz crude. LNG cover through September and TSMC's 2026 CapEx framework-signature path near 8% carry unchanged. Analytical judgment: the energy-infrastructure clock firmed at the margin while the structural closure held — a signed MOU with an unrestricted-Hormuz clause remains the only catalyst that changes the LNG-cover dominant case, and Day 102's addition of a censure decision to the clause's entanglement set pushes that catalyst further out. No fresh Taiwan-specific development; prior assessments unchanged.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US KIA; CENTCOM downed Iranian drones over Hormuz past a fourth straight day; Day 99 Gulf of Oman exchange remains contested attribution (CENTCOM: 'FALSE'). Trump kept the $24B asset release conditioned on a deal first + restated the kill-US-troops warning. Sledgehammer operational; Goruk/Qeshm coastal strikes carry as the enforcement floor.",
    israel:
      "No confirmed new IDF KIA. Lebanon truce procedural after Day 100's Kfar Tebnit LAF killing; Katz 'operations south of the Litani continue' and Ben-Gvir 'serious mistake' carry against Trump's 'won't move on Beirut.' No new IDF-Hezbollah exchange confirmed Day 102.",
    iran:
      "No new published figures. HEU / nuclear file outside the preliminary MOU per Tehran. IAEA Board (June 8–12) advanced a US-circulated draft censure: ~99 days zero access, ~440.9 kg 60% HEU unverifiable at Isfahan. Rezaee 'deadlock' + Araghchi 'no tangible progress' carry. Hormuz past 99 days of closure.",
    other:
      "No new confirmed casualties; Lebanon MOH ~3,355-3,500 carries and rising after Kfar Tebnit. Pakistan's reopened Sharif-to-Mojtaba channel drew a measured Iranian response; Aoun 'must stop interfering' carries. Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
  },
};

export default data;
