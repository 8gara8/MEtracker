import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 103 breaks the hundred-day standoff's holding pattern toward escalation on the political and nuclear vectors while the energy vector eases. The IAEA Board, in session through June 12, moved on the E3-drafted censure demanding immediate inspector access, and Iran answered as its own record predicted — a 'proportionate response' signal and steps to expand enrichment rather than restore access, with Russia and China opposing the measure (IAEA, Washington Institute, Iran International). Trump's Day 102 optimism flipped within a day to a Fox News framing of Iran as 'much more aggressive,' the §3.5.3 pattern running in reverse, while defense minister Nasirzadeh put 'all US bases within our reach.' Brent eased below the mid-$90s on the US energy secretary's Hormuz-traffic claim. Direction shifts mixed to escalating.",
      risk7d:
        "Seven-day risk holds critical and the trigger has now fired. The active-deadline clock runs hot to the June 12 Board close with the censure landed and an Iranian response forming — the Washington Institute flagged exactly this escalation path before the vote. The negotiation-capacity clock is dominant and deteriorating: Trump's reversal to 'much more aggressive' is the §3.5.3 pattern inverting, and Pakistan's channel stays open but unconverted under the censure's pressure (Stimson, CFR carry). The kinetic-readiness clock sharpened: Nasirzadeh's 'all US bases within reach' hardens Araghchi's 'legitimate targets' red line to the principal level, against CENTCOM's standing Hormuz enforcement floor. The Lebanon kinetic clock binds the Beirut-suburb strike, the Day 100 Kfar Tebnit LAF killing, Hezbollah's rejection, and Katz's 'operations continue' against Trump's 'won't move on Beirut' cap; LAF deployment un-fired-upon through the week of June 22 remains the binding test.",
      spillover:
        "Spillover holds critical. The Lebanon seam stays open after the Beirut-suburb strike and the Day 100 Kfar Tebnit killing of an LAF brigadier general — the army the pilot-zone framework depends on — with Hezbollah's rejection and Ben-Gvir's 'serious mistake' leaving the truce procedural (NPR, TIME, Al Jazeera). Coalition cohesion stays strained. The Gulf collision stays live and sharpened: Nasirzadeh's bases threat against CENTCOM's Hormuz enforcement floor leaves both capitals an escalation story. Brent eased below the mid-$90s toward ~$91 as US Energy Secretary Wright's 'Hormuz traffic rising very meaningfully' claim and the Iran-Israel attack pause priced through the censure risk; the ~40-ship NCAGS Bahrain channel held against ~2,000 ships stranded past 100 days of effective closure; PGSA $2M/transit yuan-billed continues; Lebanon MOH ~3,355-3,500 carries and rising.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'IAEA / Washington Institute / Iran International / Al-Monitor',
      event:
        "The IAEA Board of Governors, in session through June 12, moved on the E3-drafted censure demanding immediate inspector access, and Iran answered with a 'proportionate response' signal and steps to expand enrichment rather than restore monitoring — with Russia and China opposing the measure",
      summary:
        "The censure formally demands Iran restore access and credibly explain uranium traces at undeclared sites; Iran's first move was retaliatory rather than cooperative, consistent with the agency's record. Russia and China voted against, fracturing the Board and handing Tehran a great-power cover story; ~440.9 kg of 60% HEU remains unverifiable at Isfahan since the June 2025 physical check.",
      impact:
        "Resolves the nuclear file's censure-or-defer binary toward censure and confirms §3.5.6 rather than hypothesizing it: Iran removed cameras after June 2022 and enriched to 60% after November 2022, and answered this censure the same way. The active-deadline clock is now hot. The binding question into Day 104 is whether Iran's response stays rhetorical or turns operational — a new cascade or a withdrawal threat — and whether it forecloses the Pakistan channel before it can convert.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Trump (Fox News) / Newsweek / Times of Israel',
      event:
        "Trump's optimism flipped to pessimism within a day: he told Fox News that Iran was becoming 'much more aggressive' in the negotiations, reversing his Day 102 'final negotiations on Peace are proceeding' framing",
      summary:
        "The reversal landed one day after the Truth Social optimism and the 'immediate CEASEFIRE!' appeal, and one day before Iran's defense minister threatened US bases. CBS's Day 102 reporting that Trump had personally edited the draft's HEU and Hormuz terms now sits against his own read that Tehran has hardened.",
      impact:
        "The §3.5.3 pattern runs in reverse: the optimism that had originated Washington-side, never matched by an Iranian principal, gave way to pessimism. The negotiation-capacity clock is dominant and deteriorating. The test into Day 104 is whether Trump's pessimism is a negotiating posture or a genuine read that the talks are failing — and whether it survives contact with Iran's censure response.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Aziz Nasirzadeh / Newsweek / Washington Examiner / Iranian state media',
      event:
        "Iran's defense minister put every US base in range: Aziz Nasirzadeh warned that if conflict is reimposed, 'all US bases are within our reach and we will boldly target them in host countries'",
      summary:
        "The statement, carried by Iranian state media, hardens Araghchi's standing 'US bases are legitimate targets' red line to the principal level and arrives as the censure lands and Trump's tone turns. It frames a renewed conflict as one in which host-country basing — Gulf monarchies included — becomes a target set.",
      impact:
        "Raises the kinetic floor under the diplomacy: a defense-minister-level basing threat is a more operational signal than a foreign-ministry red line. Skeptical counter: the threat is conditional ('if conflict is imposed') and rhetorical for now, fitting the deterrent-posturing pattern rather than a decision to strike; but paired with the censure and Trump's reversal it tightens the escalation configuration.",
    },
    {
      id: 4,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'CNBC / Trading Economics / US Energy Department',
      event:
        "Brent eased back below the mid-$90s toward roughly $91 after US Energy Secretary Chris Wright said Hormuz ship traffic was 'rising very meaningfully' and Iran and Israel held their attack pause",
      summary:
        "The fall ran opposite to the day's censure-and-bases-threat escalation, pricing Wright's traffic claim and the attack pause rather than the political risk. Brent stayed well off the late-April highs above $108 and the mid-May spikes above $100, extending the easing registered earlier in the week.",
      impact:
        "The divergence is the information per §3.5: the political vectors escalated while the energy vector eased. Skeptical counter: Wright's 'rising very meaningfully' is a US-government claim the structural picture contests — the Strait past 100 days of effective closure, the ~40-ship NCAGS channel the only durable transit mechanism, ~2,000 ships stranded. A marginal uptick is not flow restoration; the unrestricted-Hormuz clause stays triple-entangled with the censure, the HEU file, and the frozen-asset term.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'NPR / TIME / Al Jazeera',
      event:
        "The Lebanon truce stayed procedural after the Beirut-suburb strike: Hezbollah's rejection of the pilot-zone deal and Katz's 'operations continue' carried against Trump's 'won't move on Beirut' cap",
      summary:
        "Israel's strike on Beirut's southern suburbs — the first on the capital since the renewed ceasefire — kept the truce contested, with Hezbollah still demanding a full Israeli withdrawal and rejecting the pilot-zone framework agreed in Washington. The LAF 'exclusive control to the exclusion of all non-state actors' design carries.",
      impact:
        "Keeps the Lebanon seam open as the coalition-cohesion stressor: Israel is striking the capital and the LAF the framework depends on while remaining outside the US-Iran track. The binding test is whether the LAF deploys into the pilot zones un-fired-upon through the week of June 22; truce procedural; Lebanon MOH ~3,355-3,500 carries and rising.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 (no new US KIA Day 103; Nasirzadeh bases threat conditional / pre-kinetic)',
      status:
        "No new US KIA. Iran's defense minister Nasirzadeh warned that all US bases in the region are within reach and would be targeted if conflict is reimposed, sharpening the kinetic floor under the diplomacy; CENTCOM's Hormuz drone-intercept cadence carries and the Day 99 Gulf of Oman exchange remains contested attribution (CENTCOM 'FALSE'). The $24B frozen-asset release stays conditioned on a ceasefire first; Sledgehammer operational; the Goruk and Qeshm coastal strikes carry as the enforcement floor.",
    },
    israel: {
      cumulative: 'KIA: 49 (Iran-front 47 + Lebanon-front 2 truce-period) · WIA: 8,625+',
      delta: '+0 confirmed new Day 103 IDF KIA',
      status:
        "No confirmed new IDF KIA. The Lebanon truce stayed procedural after the Beirut-suburb strike and the Day 100 Kfar Tebnit killing of an LAF brigadier general; Katz's 'operations continue' and Hezbollah's pilot-zone rejection carry against Trump's 'won't move on Beirut' cap. No new confirmed IDF-Hezbollah kinetic exchange Day 103.",
    },
    iran: {
      cumulative:
        "LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · Hengaw 6,620+ mil · 3.2M displaced",
      delta: '+0 new published Day 103',
      status:
        "No new published figures. The IAEA Board moved on the E3-drafted censure demanding immediate inspector access; Iran signaled a 'proportionate response' and steps to expand enrichment rather than restore access, with Russia and China opposing the measure. ~440.9 kg of 60% HEU remains unverifiable at Isfahan since the June 2025 physical check. Rezaee 'deadlock' and Araghchi 'no tangible progress' carry; Hormuz past 100 days of effective closure; 3.2M displaced.",
    },
    other: {
      cumulative:
        'Lebanon MOH ~3,355-3,500 killed / 10,044+ injured since March 2; Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Bahrain no casualties',
      delta: '+0 new confirmed Day 103; Lebanon MOH carries and rising after Beirut-suburb strike',
      status:
        "No new confirmed casualties published Day 103. The Lebanon Health Ministry war-cumulative ~3,355-3,500 killed / 10,044+ injured carries and is rising after the Beirut-suburb strike and the Day 100 Kfar Tebnit LAF deaths. Pakistan's Sharif-to-Mojtaba channel stayed open without conversion under the censure's pressure. No new Gulf-state casualties; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
    },
  },
  exec:
    "Day 103 turns the standoff's sharpest hinge to the downside. The IAEA Board of Governors, in session through June 12, moved on the E3-drafted censure demanding immediate inspector access — the resolution the Washington Institute had flagged as a plausible escalation trigger — and Iran answered as its own record predicted, signaling a 'proportionate response' and steps to expand enrichment rather than restore access, with Russia and China opposing the measure (IAEA, Washington Institute, Iran International). The diplomacy flipped tone within a day: Trump, optimistic on Day 102, told Fox News that Iran was becoming 'much more aggressive' in the talks, while Iran's defense minister Aziz Nasirzadeh warned that 'all US bases are within our reach' if conflict is reimposed — the §3.5.3 pattern inverting as the Washington-side optimism gave way (Newsweek, Times of Israel). The Pakistan channel that drew only a measured Iranian response on Day 102 now sits under the censure's pressure with no conversion. On the energy vector the signals cut the other way: Brent eased back below the mid-$90s toward roughly $91 after US Energy Secretary Chris Wright said Hormuz ship traffic was 'rising very meaningfully' and the Iran-Israel attack pause held — a claim the structural NCAGS ~40-ship picture contests (CNBC, Trading Economics). The Lebanon truce stayed procedural after the Beirut-suburb strike, with Hezbollah's rejection and Katz's 'operations continue' carrying against Trump's 'won't move on Beirut' cap (NPR, TIME). 30-day ceasefire probability eases to 12 and direction shifts from mixed to escalating — the censure landing, Trump's reversal, and the US-bases threat outweighing the energy-vector easing.",
  implications: [
    {
      title:
        "The censure the Board's own record said Tehran answers with enrichment has now landed — and Iran's first signal was retaliation, not access",
      body:
        "The IAEA Board, in session through June 12, moved on the E3-drafted censure demanding immediate inspector access to facilities Grossi reports have been dark since the June 2025 physical check, with ~440.9 kg of 60% HEU believed unverifiable at Isfahan (IAEA, Arms Control Association). The shift Day 103 registers is that the nuclear file's binary — censure or defer — resolved toward censure, and Iran's first move was a 'proportionate response' signal and steps to expand enrichment rather than restore monitoring (Iran International, Washington Institute). Skeptical counter per §3.5.6, here confirmed rather than hypothesized: the agency's record predicted exactly this — cameras removed after the June 2022 censure, enrichment to 60% after November 2022 — and the Washington Institute had assessed the draft as a plausible escalation trigger before the vote. Russia and China opposed the measure, fracturing the Board and giving Tehran a great-power cover story. Under the multi-clock framework the active-deadline clock is now hot: the censure converts the war's slowest-moving file into a near-term escalation vector, and the binding question into Day 104 is whether Iran's response stays rhetorical or turns operational — a new cascade or a withdrawal threat — and whether it forecloses the Pakistan channel before it can convert.",
    },
    {
      title:
        "Trump's optimism flipped to pessimism in a single day — and Iran's defense minister answered the censure by putting every US base in range",
      body:
        "On Day 102 Trump's Truth Social posts carried 'final negotiations on Peace are proceeding'; on Day 103 he told Fox News that Iran was becoming 'much more aggressive' in the talks (Newsweek, Times of Israel). The §3.5.3 pattern — optimism originating Washington-side — ran in reverse: the reversal is itself the signal, because the optimism had never been matched by an Iranian principal. Against it, defense minister Aziz Nasirzadeh warned that 'all US bases are within our reach and we will boldly target them in host countries' if conflict is reimposed, hardening Araghchi's standing 'legitimate targets' red line to the principal level (Newsweek, Washington Examiner). The Pakistan channel that drew a measured Iranian response on Day 102 now sits under the censure's pressure with no conversion, and the CFR/Stimson structural read holds — Islamabad can keep a line open but cannot close a deal it does not control. Under the multi-clock framework the negotiation-capacity clock is dominant and deteriorating: a censure, a pessimistic reversal, and a bases threat in one cycle is the configuration that precedes a return to kinetic exchange. The test into Day 104 is whether Trump's pessimism is a negotiating posture or a genuine read that the talks are failing.",
    },
    {
      title:
        "Taiwan: Brent eased below the mid-$90s on the energy secretary's 'Hormuz traffic rising' claim even as the political vectors escalated — the divergence is the information; prior assessments unchanged",
      body:
        "Brent eased back below the mid-$90s toward ~$91 after US Energy Secretary Chris Wright said Hormuz ship traffic was 'rising very meaningfully' and the Iran-Israel attack pause held — a fall that ran opposite to the day's censure-and-bases-threat escalation (CNBC, Trading Economics). That divergence is itself the analytical content per §3.5: the political-escalation signals argue for a risk premium, but the energy vector priced Wright's traffic claim and the attack pause instead. Skeptical counter: Wright's 'rising very meaningfully' is a US-government claim the structural picture contests — the Strait sits past 100 days of effective closure, the ~40-ship NCAGS Bahrain channel remains the only durable post-Project-Freedom transit mechanism, and ~2,000 ships stay stranded; a marginal traffic uptick is not flow restoration. The unrestricted-Hormuz clause that would actually reopen the Strait stays triple-entangled with the censure, the HEU file, and the frozen-asset term. PGSA $2M/transit yuan-billed continues; China still takes ~37.7% of Hormuz crude. LNG cover through September and TSMC's 2026 CapEx framework-signature path near 8% carry unchanged. Analytical judgment: the energy-infrastructure clock eased at the margin while the structural closure held, and a signed MOU with an unrestricted-Hormuz clause remains the only catalyst that changes the LNG-cover dominant case. No fresh Taiwan-specific development; prior assessments unchanged.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US KIA. Nasirzadeh warned all US bases in the region are within reach if conflict is reimposed, sharpening the kinetic floor; CENTCOM Hormuz enforcement cadence carries; Day 99 Gulf of Oman exchange remains contested attribution (CENTCOM 'FALSE'). $24B asset release stays conditioned on a deal first; Sledgehammer operational; Goruk/Qeshm coastal strikes carry as the enforcement floor.",
    israel:
      "No confirmed new IDF KIA. Lebanon truce procedural after the Beirut-suburb strike and the Day 100 Kfar Tebnit LAF killing; Katz 'operations continue' and Hezbollah's pilot-zone rejection carry against Trump's 'won't move on Beirut.' No new IDF-Hezbollah exchange confirmed Day 103.",
    iran:
      "No new published figures. IAEA Board moved on the E3-drafted censure; Iran signaled a 'proportionate response' and steps to expand enrichment, with Russia and China opposing. ~440.9 kg 60% HEU unverifiable at Isfahan since June 2025. Rezaee 'deadlock' + Araghchi 'no tangible progress' carry. Hormuz past 100 days of closure.",
    other:
      "No new confirmed casualties; Lebanon MOH ~3,355-3,500 carries and rising after the Beirut-suburb strike. Pakistan's Sharif-to-Mojtaba channel stayed open without conversion under the censure's pressure. Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
  },
};

export default data;
