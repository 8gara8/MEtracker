import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 101 opens with the hundred-day deal-window decayed from a decision point into a hardening standoff. Trump conditioned the agreement further — telling reporters he will not unfreeze the roughly $24 billion in frozen Iranian assets before a ceasefire is actually reached (Al Jazeera) — which subtracts the 'half on signing' term Tehran had been counting on, while a military adviser to Supreme Leader Mojtaba Khamenei, Mohsen Rezaee, said the negotiations 'are at a deadlock' (CNN, Iranian state media). Against that, Pakistan re-entered as active mediator: Interior Minister Mohsin Naqvi met FM Araghchi in Tehran and handed over a written message from PM Shahbaz Sharif to Mojtaba Khamenei, with Qatar, Turkey and Egypt backing the push to reopen Hormuz (Middle East Monitor, ABC News). The Gulf drone exchange continued and the Lebanon truce stayed procedural after Day 100's Kfar Tebnit LAF killing. Direction holds mixed.",
      risk7d:
        "Seven-day risk holds critical. The active-deadline clock has now rolled three named deadlines — the Day 97 weekend frame, the hundred-day mark, and the rolling 'this weekend' — without a signature, and Day 101 adds a subtraction as Trump conditions the frozen-asset release on a deal being reached first. The negotiation-capacity clock is the dominant vector and is now contested at the principal level: Rezaee's 'deadlock' against Trump's standing optimism, with Pakistan's Naqvi reinjecting a Sharif-to-Mojtaba channel the April 8 ceasefire originally ran through. The kinetic-readiness clock stays loaded — CENTCOM intercepted Iranian drones over Hormuz for a third straight day, leaving the dual-blockade collision recurring under contested attribution. The Lebanon kinetic clock binds the Kfar Tebnit LAF killing, Hezbollah's rejection, and Katz's 'operations continue' against Trump's 'won't move on Beirut' cap; LAF pilot-zone deployment un-fired-upon through the week of June 22 remains the binding test.",
      spillover:
        "Spillover holds critical. The Lebanon seam stays open after Day 100's Kfar Tebnit killing of an LAF brigadier general — the army the pilot-zone framework depends on — with Hezbollah's rejection and Ben-Gvir's 'serious mistake' leaving the truce procedural and Aoun's 'must stop interfering' rebuke of Tehran carrying. Coalition cohesion stays strained. The Gulf collision stays live: CENTCOM's continued Hormuz drone intercepts against Iran's standing 'three destroyers fled' narrative leave both capitals an escalation story. Brent held in the low-$90s near $93 on weak demand — Chinese crude imports at a ten-year low — and no breakthrough, extending the easing; the ~40-ship NCAGS Bahrain channel held against ~2,000 ships stranded past 98 days of effective Hormuz closure; PGSA $2M/transit yuan-billed continues; Lebanon MOH ~3,355-3,500 carries and rising.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'Al Jazeera / CNN / Iranian state media / CBS News',
      event:
        "The hundred-day deal-window hardened rather than closed: Trump said he will not unfreeze the roughly $24 billion in frozen Iranian assets before a ceasefire deal is actually reached, subtracting the 'half on signing' term, while Mohsen Rezaee, a military adviser to Supreme Leader Mojtaba Khamenei, said the negotiations 'are at a deadlock'",
      summary:
        "The near-signed 60-day MOU would reopen the Strait with no tolls, give Iran 30 days to clear mines, lift the US blockade, waive sanctions, and release $24B in frozen assets with half on signing — pending both Trump's and Mojtaba Khamenei's approval. On Day 101 Trump publicly conditioned the asset release on a deal first being reached, and Rezaee's 'deadlock' line set the Iranian principal-adviser read against Trump's standing 'this weekend' optimism.",
      impact:
        "Day 100 arrived without a signature; Day 101 subtracts a term. Skeptical counter per §3.5.3: the optimistic framing still originates with the Washington camp, but Day 101 is the first day even Washington's read hardens — assets conditioned on a deal — while Tehran's adviser-level read is an explicit 'deadlock,' not the usual 'no tangible progress.' The negotiation-capacity clock is dominant but moving the wrong way; the binding question is whether Pakistan's reinjected channel converts before the window decays into the next kinetic cycle.",
    },
    {
      id: 2,
      direction: 'de-escalating',
      importance: 'high',
      source: 'Middle East Monitor / ABC News / Al Jazeera / Pakistan PMO',
      event:
        "Pakistan re-entered as active mediator: Interior Minister Mohsin Naqvi met Iranian FM Araghchi in Tehran and handed over a written message from PM Shahbaz Sharif addressed to Supreme Leader Mojtaba Khamenei, with Islamabad — backed by Qatar, Turkey and Egypt — pressing to bridge US-Iran differences and reopen the Strait of Hormuz",
      summary:
        "Naqvi arrived in Tehran over the weekend for talks with Araghchi and senior Iranian officials, conveying Sharif's written message to Mojtaba Khamenei and discussing freedom of navigation through Hormuz, the nuclear and ballistic file, reconstruction, sanctions, and a long-term agreement. Pakistan mediated the original April 8 ceasefire; its re-engagement reactivates the Islamabad track with Gulf and Turkish backing.",
      impact:
        "The one genuinely de-escalatory vector on Day 101: a principal-to-principal channel (Sharif → Mojtaba) reopened at the moment the bilateral track hardened. Skeptical counter per §3.5.6: Pakistan brokered the April 8 ceasefire that is now triply broken, and the Islamabad track is where the Day 46-51 '80% complete' optimism originated before the deal collapsed on the USS Spruance seizure; a written message is a channel, not a commitment. Still, it is the first new mediation movement since the hundred-day mark and partly offsets the frozen-asset hardening — direction holds mixed, not escalating.",
    },
    {
      id: 3,
      direction: 'neutral',
      importance: 'high',
      source: 'IAEA / Foreign Policy / Washington Times / AP',
      event:
        "The IAEA Board of Governors session opened with the Iran nuclear file as its central gap: DG Grossi's report confirms zero inspector access for some 98 days and an unverifiable ~440.9 kg stockpile of 60% highly enriched uranium believed still at the Isfahan underground complex",
      summary:
        "Grossi has told the AP that the HEU — enriched to 60%, just short of weapons-grade, and enough for up to ten weapons by the agency's yardstick if enriched further — likely remains at Isfahan, with IAEA seals unverifiable since inspections ended after the June 2025 strikes. The June 8-12 Board session takes up the continuity-of-knowledge loss as Tehran maintains the HEU file was never inside the preliminary MOU.",
      impact:
        "Moves the nuclear-file dispute from a bilateral talking point into a standing multilateral record: the file that most determines the war's endgame is, by Tehran's own account, outside the text Trump is being asked to sign, and is now formally unverifiable before the Board. The weaponization clock holds — 60%→90% is days-to-weeks of enrichment. Skeptical counter: a Board session produces a report, not enforcement; Mojtaba's HEU-non-export directive and Iran's retained control of access both cut against near-term resolution.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: 'CENTCOM / The War Zone / ABC News / Tasnim',
      event:
        "CENTCOM continued intercepting Iranian one-way attack drones over the Strait of Hormuz — a third consecutive day of launches toward the waterway after the four downed June 5 and two June 7 — leaving the dual-blockade collision live under contested attribution",
      summary:
        "US forces shot down additional Iranian drones that CENTCOM said threatened international maritime traffic in the Strait, continuing the daily exchange pattern and following the US strikes on Iranian coastal-radar sites at Goruk and on Qeshm Island. Iranian state media's standing account — that three US destroyers came under fire and fled in the Day 99 Gulf of Oman exchange — remains opposed to CENTCOM's flat 'FALSE.'",
      impact:
        "Keeps the dual-blockade collision as the live escalation engine: the daily drone-and-intercept cadence is the floor beneath the diplomacy, and the Panaya/oil-tanker exchange continues to name the single-strike event that would close the quiet NCAGS channel overnight. Skeptical counter: contained, defensive intercepts framed as protecting maritime traffic fit the Day 97-101 enforcement cadence rather than a decision to resume general war.",
    },
    {
      id: 5,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Trading Economics / CNBC / Al Jazeera',
      event:
        "Brent crude held in the low-$90s near $93 as markets weighed weak global demand — Chinese crude imports at a ten-year low — and the absence of a US-Iran breakthrough, extending rather than reversing the marginal easing of the prior cycles",
      summary:
        "Brent futures stayed off the late-April highs above $108 and the mid-May spikes above $100, pricing soft demand and deal-odds rather than a reopening. The structural picture held: the Strait past 98 days of effective closure, the ~40-ship NCAGS Bahrain channel the only durable post-Project-Freedom transit mechanism, ~2,000 ships stranded, PGSA $2M/transit yuan-billed continuing.",
      impact:
        "The easing extends, not reverses — the price is pricing weak demand and deal-odds, not flow restoration. The unrestricted-Hormuz clause that would actually reopen the Strait is now entangled with both the HEU dispute and the frozen-asset term Trump conditioned on Day 101, lengthening the path to the one catalyst that revises the Taiwan LNG dominant case. LNG cover through September and TSMC 2026 CapEx framework-signature near 8% carry unchanged; China still takes ~37.7% of Hormuz crude.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 (Day 99 Gulf of Oman exchange remains contested-attribution; CENTCOM says no US assets harmed)',
      status:
        "No new US KIA. CENTCOM intercepted Iranian drones over Hormuz for a third straight day, and the Day 99 Gulf of Oman exchange remains contested-attribution, with CENTCOM rejecting Iran's warship-fire claim as 'FALSE.' Trump conditioned the $24B frozen-asset release on a ceasefire being reached first and restated that killing US troops would trigger renewed military action. Sledgehammer operational; the prepared kinetic option is unwithdrawn; the US coastal-radar strikes at Goruk and Qeshm carry as the enforcement floor.",
    },
    israel: {
      cumulative: 'KIA: 49 (Iran-front 47 + Lebanon-front 2 truce-period) · WIA: 8,625+',
      delta: '+0 confirmed new Day 101 IDF KIA',
      status:
        "No confirmed new IDF KIA. The Lebanon truce stayed procedural after Day 100's Kfar Tebnit strike that killed an LAF brigadier general, a captain, and a soldier; Katz's 'operations south of the Litani continue' and Ben-Gvir's 'serious mistake' carry, against Trump's Day 99 'won't move on Beirut' cap. No new IDF-Hezbollah kinetic exchange was confirmed Day 101.",
    },
    iran: {
      cumulative:
        "LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · Hengaw 6,620+ mil · 3.2M displaced",
      delta: '+0 new published Day 101',
      status:
        "No new published figures. A Supreme-Leader military adviser, Mohsen Rezaee, said negotiations are 'at a deadlock'; Iran maintained the HEU stockpile and nuclear file are outside the preliminary MOU. The IAEA Board session opened with Grossi's report of ~98 days of zero inspector access and an unverifiable ~440.9 kg of 60% HEU at Isfahan. Hormuz past 98 days of effective closure; 3.2M displaced.",
    },
    other: {
      cumulative:
        'Lebanon MOH ~3,355-3,500 killed / 10,044+ injured since March 2; Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Bahrain no casualties',
      delta: '+0 new confirmed Day 101; Lebanon MOH carries and rising after Kfar Tebnit',
      status:
        "No new confirmed casualties published Day 101. The Lebanon Health Ministry war-cumulative ~3,355-3,500 killed / 10,044+ injured carries and is rising after the Day 100 Kfar Tebnit LAF deaths. Pakistan's Naqvi met Araghchi in Tehran with a Sharif-to-Mojtaba message; President Aoun's 'must stop interfering in Lebanon' rebuke of Tehran carries. No new Gulf-state casualties; Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
    },
  },
  exec:
    "Day 101 opens with the hundred-day deal-window decayed from a decision point into a hardening standoff. Trump conditioned the agreement further, telling reporters he will not unfreeze the roughly $24 billion in frozen Iranian assets before a ceasefire is actually reached — subtracting the 'half on signing' term Tehran had been counting on — while Mohsen Rezaee, a military adviser to Supreme Leader Mojtaba Khamenei, said the negotiations 'are at a deadlock' (Al Jazeera, CNN). Against that hardening, Pakistan re-entered as active mediator: Interior Minister Mohsin Naqvi met FM Araghchi in Tehran and handed over a written message from PM Shahbaz Sharif to Mojtaba Khamenei, with Qatar, Turkey and Egypt backing the push to reopen the Strait (Middle East Monitor, ABC News). The nuclear file went multilateral as the IAEA Board of Governors session opened with Grossi's report of roughly 98 days of zero inspector access and an unverifiable ~440.9 kg of 60% enriched uranium believed still at Isfahan (IAEA, Foreign Policy). On the Gulf vector CENTCOM intercepted Iranian drones over Hormuz for a third straight day, keeping the dual-blockade collision live (CENTCOM, The War Zone), while the Lebanon truce stayed procedural after Day 100's Kfar Tebnit killing of an LAF brigadier general. Brent held in the low-$90s near $93 on weak demand and no breakthrough (Trading Economics, CNBC). 30-day ceasefire probability holds at 14. The hundred-day window has now rolled three named deadlines without a signature — and Day 101 subtracts a term even as Islamabad reopens a principal-to-principal channel.",
  implications: [
    {
      title:
        "The deal-window hardened rather than closed: Trump conditioned the $24B frozen-asset release on a ceasefire being reached first, and a Supreme-Leader adviser called the talks 'a deadlock' — three named deadlines now rolled without a signature",
      body:
        "Day 100 arrived without a signature; Day 101 subtracts a term. Trump told reporters he will not unfreeze the roughly $24 billion in frozen Iranian assets until a ceasefire is actually reached, removing the 'half on signing' incentive the MOU was built around, while Mohsen Rezaee, a military adviser to Mojtaba Khamenei, said the negotiations are 'at a deadlock' (Al Jazeera, CNN). Skeptical counter per §3.5.3: the optimistic framing still originates with the Washington camp, but Day 101 is the first day even Washington's read hardens — assets conditioned on a deal first — while the Iranian principal-adviser read is an explicit deadlock rather than the usual 'no tangible progress.' Under the multi-clock framework the negotiation-capacity clock remains dominant but is now moving the wrong way: two principals' signatures are no closer and a financial term has been pulled back. The offset is Pakistan's reinjected Sharif-to-Mojtaba channel; the binding question is whether that channel converts before the window decays into the next kinetic cycle. The hundred-day narrative has now cycled three named deadlines — the Day 97 weekend frame, the hundred-day mark, and the rolling 'this weekend' — without yielding a signature.",
    },
    {
      title:
        "Pakistan's re-entry reopens the channel the April 8 ceasefire ran through — the one de-escalatory vector on Day 101 — but the Islamabad track has carried collapsing optimism before",
      body:
        "Interior Minister Mohsin Naqvi's Tehran visit, his meeting with Araghchi, and the written Sharif-to-Mojtaba message reactivate the Islamabad mediation track that produced the original April 8 ceasefire, now with Qatar, Turkey and Egypt behind it and Hormuz reopening explicitly on the agenda (Middle East Monitor, ABC News). That a principal-to-principal channel reopened on the same day the bilateral track hardened is the analytically significant move: it is the first new mediation movement since the hundred-day mark and is why Day 101 holds mixed rather than tipping escalating. Skeptical counter per §3.5.6: Pakistan brokered the April 8 framework that is now triply broken, and the Islamabad track is exactly where the Day 46-51 '80% complete' optimism originated before the deal collapsed on the USS Spruance seizure — a written message is a channel, not a commitment, and the standing prior that any arrangement depending on Israeli restraint is structurally fragile still holds. The test is whether the Sharif message produces a dated Iranian response or simply absorbs another 24-72 hours, and whether it can pull the frozen-asset and HEU files back toward the text after Trump's Day 101 subtraction.",
    },
    {
      title:
        "Taiwan: Brent held the low-$90s and the NCAGS channel carried, but the Hormuz-reopening clause is now entangled with the HEU file and the frozen-asset term — no fresh Taiwan-specific development; prior assessments unchanged",
      body:
        "Brent held in the low-$90s near $93, pricing weak global demand — Chinese crude imports at a ten-year low — and deal-odds rather than a reopening (Trading Economics, CNBC). The structural picture is unchanged: the Strait sits past 98 days of effective closure, the ~40-ship NCAGS Bahrain channel remains the only durable post-Project-Freedom transit mechanism, and ~2,000 ships stay stranded. What Day 101 adds is analytical: the unrestricted-Hormuz clause that would actually reopen flow is now entangled with two disputes at once — the HEU file the IAEA Board just took up, and the $24B frozen-asset release Trump conditioned on a deal first — lengthening the path to the one catalyst that revises the dominant case. PGSA $2M/transit yuan-billed continues; China still takes ~37.7% of Hormuz crude. LNG cover through September and TSMC's 2026 CapEx framework-signature path near 8% carry unchanged. Analytical judgment: the energy-infrastructure clock eases at the margin while the structural closure holds — a signed MOU with an unrestricted-Hormuz clause remains the only catalyst that would change the LNG-cover dominant case, and Day 101's twin entanglement of that clause with the nuclear and frozen-asset files pushes the catalyst further out, not closer.",
    },
  ],
  casualtyNotes: {
    us:
      "No new US KIA; CENTCOM downed Iranian drones over Hormuz a third straight day; Day 99 Gulf of Oman exchange remains contested attribution (CENTCOM: 'FALSE'). Trump conditioned the $24B asset release on a deal first + restated the kill-US-troops warning. Sledgehammer operational; Goruk/Qeshm coastal strikes carry as the enforcement floor.",
    israel:
      "No confirmed new IDF KIA. Lebanon truce procedural after Day 100's Kfar Tebnit LAF killing; Katz 'operations south of the Litani continue' and Ben-Gvir 'serious mistake' carry against Trump's 'won't move on Beirut.' No new IDF-Hezbollah exchange confirmed Day 101.",
    iran:
      "No new published figures. Rezaee (Mojtaba adviser): talks 'at a deadlock.' HEU / nuclear file outside the preliminary MOU per Tehran. IAEA Board opened: ~98 days zero access, ~440.9 kg 60% HEU unverifiable at Isfahan. Hormuz past 98 days of closure.",
    other:
      "No new confirmed casualties; Lebanon MOH ~3,355-3,500 carries and rising after Kfar Tebnit. Pakistan's Naqvi met Araghchi with a Sharif-to-Mojtaba message; Aoun 'must stop interfering' carries. Kuwait 1 KIA + 63 WIA (Day 97) carries; Bahrain none.",
  },
};

export default data;
