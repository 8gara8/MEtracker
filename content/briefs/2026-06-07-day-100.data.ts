import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 100 — the hundred-day mark of Operation Epic Fury — arrives as a decision point, not a verdict. The deal vector ran the weekend window to its edge: Trump and the mediators floated a possible Sunday announcement of the near-signed 60-day MOU (The Hill, Al Jazeera), but Tehran spent the same hours narrowing the terms rather than closing them — Iranian state media said the Strait of Hormuz 'will remain under Iranian control,' and a senior Iranian source told Reuters that the highly enriched uranium stockpile is not on the table and the nuclear file was never inside the preliminary text (Reuters, CBS News). The MOU still awaits both Trump's and Mojtaba Khamenei's signatures. The Lebanon vector hardened kinetically: an Israeli strike near Kfar Tebnit killed an LAF brigadier general, a captain, and a third soldier as Hezbollah's June 4 truce rejection stood and Katz said operations south of the Litani continue (Time, Axios, CNN). The Gulf vector's Day 99 attribution contest carried — CENTCOM 'FALSE' against Tasnim's 'three destroyers fled.' Direction holds mixed.",
      risk7d:
        "Seven-day risk holds critical. The active-deadline clock runs the hundred-day weekend window itself: Trump's Sunday-announcement framing against a deal that arrived without a signature and a fresh Iranian narrowing of Hormuz control and the HEU file. The negotiation-capacity clock is the dominant vector but stays unconverted — channel live, MOU near-signing, yet Tehran's concrete reads are subtractions, not confirmations, and Araghchi's 'no tangible progress' remains the standing FM-level baseline. The kinetic-readiness clock stays loaded: the Day 99 Gulf of Oman exchange's attribution contest, the US coastal-radar strikes, and the Panaya/oil-tanker exchange leave the dual-blockade collision recurring. The Lebanon kinetic clock binds the LAF-killing, Hezbollah's rejection, and Katz's 'operations continue' against Trump's Day 99 'won't move on Beirut' cap; the binding test remains LAF pilot-zone deployment un-fired-upon through the week of June 22 reconvene.",
      spillover:
        "Spillover holds critical. The Lebanon seam widened: killing an LAF brigadier general, a captain, and a soldier near Kfar Tebnit strikes the national army the pilot-zone framework depends on, while Hezbollah's rejection and Ben-Gvir's 'serious mistake' leave the truce procedural; President Aoun reiterated Iran 'must stop interfering in Lebanon.' Coalition cohesion worsens as Israel strikes the army the framework relies on even as Trump's 'won't move on Beirut' line caps the worst case. The Gulf collision stays live under contested attribution. Brent eased toward the low-$90s on weak demand and no breakthrough, extending the marginal easing; the ~40-ship NCAGS Bahrain channel held against ~2,000 ships stranded past 97 days of effective Hormuz closure; PGSA $2M/transit yuan-billed continues; Lebanon MOH ~3,355-3,500 carries and rising.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'The Hill / Al Jazeera / Reuters / CBS News',
      event:
        "The hundred-day mark arrived with the weekend deal-window at its decision point, not its resolution: Trump and the mediators floated a possible Sunday announcement of the near-signed 60-day MOU, but Iranian state media said the Strait of Hormuz 'will remain under Iranian control' and a senior Iranian source told Reuters that Tehran has not agreed to surrender its highly enriched uranium and that the nuclear file 'was not part of the preliminary agreement'",
      summary:
        "The 60-day MOU would reopen the Strait with no tolls, require Iran to clear its mines within 30 days, lift the US blockade, and issue sanctions waivers — pending both Trump's and Mojtaba Khamenei's approval. Trump and mediators indicated a possible Sunday announcement, but Tehran publicly disputed Trump's characterization that the waterway would be internationalized, insisting it stays under Iranian control, and a senior Iranian source said the HEU stockpile was never part of the preliminary text.",
      impact:
        "Day 100 was supposed to be the deadline the weekend window was priced against, and it arrived without a signature. Skeptical counter per §3.5.3: the optimistic data points ('could be announced Sunday,' 'the war is over') originate with the Washington camp whose 'over the weekend' framing has already rolled, while Tehran's concrete reads are subtractions. The negotiation-capacity clock is dominant but unconverted; the binding question is whether two principals' signatures arrive before the window decays into the next kinetic cycle.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Time / Axios / CNN / Lebanese Armed Forces',
      event:
        "On the Lebanon track an Israeli strike on a military vehicle near Kfar Tebnit killed a Lebanese Armed Forces brigadier general, a captain, and a third soldier, while Hezbollah's June 4 rejection of the truce stood, Defense Minister Katz said operations south of the Litani would continue, and National Security Minister Ben-Gvir called the ceasefire proposal 'a serious mistake'",
      summary:
        "Israel and Lebanon had agreed June 3 to a full ceasefire contingent on Hezbollah withdrawing north of the Litani, but Hezbollah rejected it June 4 and demanded full Israeli withdrawal. The LAF reported the Kfar Tebnit strike killed a brigadier general, a captain, and a soldier. Katz said the military presence and operations in southern Lebanon would continue 'for the time being'; the IDF warned southern residents it would keep targeting Hezbollah infrastructure.",
      impact:
        "Strikes the structural keystone of the framework — the national army the pilot zones depend on taking 'exclusive control to the exclusion of all non-state actors.' The LAF is now asked to deploy into zones where Israel is still firing lethally, squeezed between a militia that won't cede and an ally that won't stop. Skeptical counter: no party formally abandoned the framework and Trump's 'won't move on Beirut' caps the worst case; but the standing prior — Israel's independence from the US-Iran track — holds, and the truce looks procedural rather than real.",
    },
    {
      id: 3,
      direction: 'neutral',
      importance: 'high',
      source: 'Al Jazeera / Reuters / IAEA / Foreign Policy',
      event:
        "The nuclear file moved to the center of the gap: an IAEA report says most of Iran's ~400 kg of 60% highly enriched uranium is stored at an underground tunnel complex at Isfahan, unseen by inspectors since June 10, 2025; Iran has floated sending half to a third country in exchange for 5% material and diluting the rest, but a senior Iranian source said the stockpile is not part of the preliminary deal",
      summary:
        "The IAEA has urged Tehran to allow inspections, noting the ~400 kg of 60% HEU — enough, if enriched further, for up to ten weapons by the agency's yardstick — likely remains at Isfahan, with in-field verification ended since the June 2025 attacks. Iranian sources have floated shipping half abroad for 5% material and diluting the rest, but a senior source said the HEU was never inside the preliminary agreement and Tehran retains control of access.",
      impact:
        "Surfaces the structural reason a 60-day MOU is not a nuclear settlement: the file that most determines the war's endgame is, by Tehran's own account, outside the text Trump is being asked to sign. The weaponization clock holds — 60%→90% is days-to-weeks of enrichment — and the IAEA verification gap since June 2025 continues. Skeptical counter: floating a third-country transfer is a negotiating position, not a commitment; Mojtaba's standing HEU-non-export directive cuts the other way.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: 'CENTCOM / GlobalSecurity / CNN / Tasnim',
      event:
        "The Day 99 Gulf of Oman attribution contest carried — CENTCOM's flat 'FALSE' against Tasnim's claim that three US destroyers came under fire and fled — with the US coastal-radar strikes and the Panaya/oil-tanker exchange leaving the dual-blockade collision live; President Aoun reiterated that Iran 'must stop interfering in Lebanon' and is 'using Lebanon as a bargaining chip'",
      summary:
        "CENTCOM maintained that Iranian forces did not fire at US Navy warships in the Gulf of Oman and that no personnel or assets were harmed, after the US struck Iranian coastal surveillance radar sites following the downing of drones launched toward Hormuz. Iranian state media's account — three destroyers fired on and fleeing — stands opposed. Aoun told CNN that Iran must stop interfering in Lebanon and was using it as a bargaining chip in its US negotiations.",
      impact:
        "Keeps the dual-blockade collision as the live escalation engine under contested attribution: both capitals retain an escalation narrative. The Panaya/oil-tanker exchange continues to name the single-strike event that would close the quiet NCAGS channel overnight. Aoun's repeated rebuke reinforces the Day 99 split between the Lebanese state and Tehran. Skeptical counter: a contained radar/coastal strike framed as defensive fits the Day 97-99 enforcement cadence rather than a decision to resume general war.",
    },
    {
      id: 5,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Trading Economics / CNBC / Al Jazeera',
      event:
        "Brent crude eased toward the low-$90s — sliding about 2% on weak global demand and the lack of a negotiating breakthrough even as some deal-optimism persisted — extending rather than reversing the marginal easing of the prior cycle; the ~40-ship NCAGS Bahrain transit channel held against ~2,000 ships still stranded past 97 days of effective Hormuz closure",
      summary:
        "Brent futures slid roughly 2% toward the low-$90s as markets weighed weaker global demand against the absence of a US-Iran breakthrough, off the late-April highs above $108 and the mid-May spikes above $100. The structural picture held: the Strait past 97 days of effective closure, the NCAGS Bahrain channel the only durable post-Project-Freedom transit mechanism, ~2,000 ships stranded, PGSA $2M/transit yuan-billed continuing.",
      impact:
        "The marginal easing extends, not reverses — the price is pricing deal-odds and soft demand, not a reopening. The unrestricted-Hormuz clause that would actually restore flow is now entangled with the HEU dispute Tehran says was never in the preliminary text, lengthening the path to the one catalyst that revises the Taiwan LNG dominant case. LNG cover through September and TSMC 2026 CapEx framework-signature near 8% carry unchanged; China still takes ~37.7% of Hormuz crude.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 (Day 99 Gulf of Oman exchange remains contested-attribution; CENTCOM says no US assets harmed)',
      status:
        "No new US KIA. The Day 99 Gulf of Oman exchange remains a contested-attribution event — CENTCOM rejected Iran's warship-fire claim as 'FALSE,' insisting no US warship was fired on and no personnel or assets harmed. The US coastal-radar strikes after downing four Iranian drones near Hormuz carry as the enforcement floor. Trump held the 'this weekend' deal framing while restating that killing US troops would trigger renewed military action. Sledgehammer operational; prepared kinetic option unwithdrawn.",
    },
    israel: {
      cumulative: 'KIA: 49 (Iran-front 47 + Lebanon-front 2 truce-period) · WIA: 8,625+',
      delta: '+0 confirmed new Day 100 IDF KIA',
      status:
        "No confirmed new IDF KIA published. Katz said Israeli operations south of the Litani would continue despite the truce announcement; the IDF warned southern-Lebanon residents it would keep targeting Hezbollah infrastructure; Ben-Gvir called the ceasefire proposal 'a serious mistake.' Trump's Day 99 'Israeli forces will not move on Beirut' line after a Netanyahu call carries as the first US-named restraint against the Katz Beirut posture.",
    },
    iran: {
      cumulative:
        "LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · Hengaw 6,620+ mil · 3.2M displaced",
      delta: '+0 new published Day 100',
      status:
        "No new published figures. Iranian state media said the Strait of Hormuz 'will remain under Iranian control'; a senior Iranian source told Reuters that the HEU stockpile has not been surrendered and the nuclear file was not part of the preliminary agreement. An IAEA report places most of the ~400 kg of 60% HEU at an underground complex at Isfahan, unseen by inspectors since June 10, 2025. Hormuz past 97 days of effective closure.",
    },
    other: {
      cumulative:
        'Lebanon MOH ~3,355-3,500 killed / 10,044+ injured since March 2; Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Bahrain no casualties',
      delta: '+ LAF brigadier general, captain, and a soldier killed near Kfar Tebnit (Israeli strike); Lebanon toll rising',
      status:
        "Lebanon casualties rose: an Israeli strike on a military vehicle near Kfar Tebnit killed a Lebanese Armed Forces brigadier general, a captain, and a third soldier — the first reported deaths of senior LAF personnel since the pilot-zone framework was announced. President Aoun reiterated that Iran 'must stop interfering in Lebanon.' No new Gulf-state casualties published Day 100; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain no casualties. Lebanon MOH ~3,355-3,500 carries and rising.",
    },
  },
  exec:
    "Day 100 — the hundred-day mark of Operation Epic Fury — opens with the weekend deal-window at its decision point rather than its resolution. Trump and the mediators floated a possible Sunday announcement of the near-signed 60-day MOU (The Hill, Al Jazeera), but the gap between Washington's optimism and Tehran's public position widened: Iranian state media said the Strait of Hormuz 'will remain under Iranian control,' and a senior Iranian source told Reuters that Tehran has not agreed to surrender its highly enriched uranium stockpile and that the nuclear file 'was not part of the preliminary agreement' (Reuters, CBS News). The MOU still awaits both Trump's and Mojtaba Khamenei's approval. On the Lebanon track the kinetic loop hardened: an Israeli strike on a military vehicle near Kfar Tebnit killed a Lebanese Armed Forces brigadier general, a captain, and a third soldier — the national army the pilot-zone framework would hand southern control to — while Hezbollah's June 4 rejection of the truce stood, Defense Minister Katz said operations south of the Litani would continue, and Ben-Gvir called the ceasefire 'a serious mistake' (Time, Axios, CNN). The Day 99 Gulf of Oman attribution contest carried — CENTCOM's 'FALSE' against Tasnim's 'three destroyers fled' — with the Panaya/oil-tanker exchange leaving the dual-blockade collision live (CENTCOM, GlobalSecurity). Brent eased toward the low-$90s on weak demand and the lack of a breakthrough (Trading Economics, CNBC). 30-day ceasefire probability holds at 14. The hundred-day mark falls on a decision Trump says is his to make and Tehran says is not yet agreed.",
  implications: [
    {
      title:
        "The hundred-day mark lands on a decision point that resolves nothing: Trump's 'Sunday announcement' framing collides with a fresh Iranian narrowing of the terms — Hormuz 'remains under Iranian control' and the HEU stockpile is 'not part of the preliminary agreement'",
      body:
        "Day 100 was supposed to be the deadline the weekend window was priced against, and it arrived without a signature. Trump and the mediators kept the Sunday-announcement framing alive, but Tehran used the same hours to draw the deal smaller — public insistence that the Strait stays under Iranian control and that the enriched-uranium file was never inside the preliminary text (Reuters, CBS News). Skeptical counter per §3.5.3: every optimistic data point ('could be announced Sunday,' 'the war is over') originates with the Washington camp whose 'over the weekend' framing has already rolled, while the concrete Iranian reads are subtractions, not confirmations. Under the multi-clock framework the negotiation-capacity clock remains the dominant vector but stays unconverted; the binding question is whether the two principals' signatures arrive before the deal-window narrative decays into the next kinetic cycle.",
    },
    {
      title:
        "The Israeli strike that killed an LAF brigadier general hits the structural keystone of the Lebanon framework — the national army it depends on — while Hezbollah's rejection and Katz's 'operations continue' leave the truce a paper one",
      body:
        "The pilot-zone design rests on the Lebanese Armed Forces taking 'exclusive control to the exclusion of all non-state actors.' Killing an LAF brigadier general, a captain, and a soldier near Kfar Tebnit strikes that keystone directly: the framework asks the LAF to deploy into zones where Israel is still conducting lethal strikes, and Hezbollah's June 4 rejection plus Katz's 'operations south of the Litani continue' leave the army squeezed between a militia that won't cede and an ally that won't stop firing (Time, Axios, CNN). Skeptical counter: no party has formally abandoned the framework, and Trump's Day 99 'won't move on Beirut' line still caps the worst case. But the standing prior holds — Israel's independence from the US-Iran framework makes any arrangement that depends on Israeli restraint structurally fragile, and Day 100 supplies the clearest evidence yet that the Lebanon truce is procedural rather than real.",
    },
    {
      title:
        "Taiwan: Brent eased toward the low-$90s and the quiet NCAGS channel held, but the nuclear-file dispute now sits between the war and a Hormuz-reopening clause — no fresh Taiwan-specific development; prior assessments unchanged",
      body:
        "Brent slid about 2% toward the low-$90s on weak global demand and the absence of a breakthrough, extending the marginal easing rather than reversing it (Trading Economics, CNBC). The structural picture is unchanged: the Strait sits past 97 days of effective closure, the ~40-ship NCAGS Bahrain channel remains the only durable post-Project-Freedom transit mechanism, and ~2,000 ships stay stranded. What Day 100 adds is analytical, not market-moving: the unrestricted-Hormuz clause that would actually reopen flow is now entangled with the HEU dispute Tehran says was never in the preliminary deal, lengthening the path to the one catalyst that revises the dominant case. PGSA $2M/transit yuan-billed continues; China still takes ~37.7% of Hormuz crude. LNG cover through September and TSMC's 2026 CapEx framework-signature path near 8% carry unchanged. Analytical judgment: the energy-infrastructure clock eases at the margin while the structural closure holds — a signed MOU with an unrestricted-Hormuz clause remains the only catalyst that would change the LNG-cover dominant case, and the Day 100 nuclear-file dispute pushes that catalyst further out.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US KIA; Day 99 Gulf of Oman exchange remains contested attribution (CENTCOM: 'FALSE,' no assets harmed). US coastal-radar strikes after downing four drones near Hormuz carry as enforcement floor. Trump: 'this weekend' deal + kill-US-troops warning. Sledgehammer operational.",
    israel:
      "No confirmed new IDF KIA. Katz: operations south of the Litani continue; IDF warned southern residents; Ben-Gvir called the ceasefire 'a serious mistake.' Trump's Day 99 'won't move on Beirut' after a Netanyahu call carries.",
    iran:
      "No new published figures. State media: Hormuz 'will remain under Iranian control.' Senior source to Reuters: HEU not surrendered, nuclear file not in the preliminary deal. IAEA: most of ~400 kg of 60% HEU at Isfahan, unseen since June 10, 2025. Hormuz past 97 days of closure.",
    other:
      "Israeli strike near Kfar Tebnit killed an LAF brigadier general, a captain, and a soldier — first senior-LAF deaths since the pilot-zone framework. Aoun: Iran 'must stop interfering in Lebanon.' No new Gulf casualties; Kuwait 1 KIA + 63 WIA (Day 97) carries. Lebanon MOH ~3,355-3,500 rising.",
  },
};

export default data;
