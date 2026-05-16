import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'conditional',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 78 delivers a split verdict: the war's hardest near-term clock was defused even as the Beijing summit's de-escalatory signal deflated. The 45-day Lebanon ceasefire extension removes the Sunday cliff and establishes the first dual-track schedule (political June 2–3, Pentagon security track May 29). But Trump left Beijing with 'few clear wins' — China's readout omitted the no-bomb commitment, and Brent surged to $111. Direction holds mixed; 30-day ceasefire probability nudges 9 to 10 on the Lebanon extension.",
      risk7d:
        "Seven-day risk holds conditional. The Lebanon extension lowers the near-term floor — no fixed-date cliff now exists before June 2 — and the Pentagon military-to-military channel is a structural upgrade. But the summit deflation, Iran's silence on the Beijing language, and the physical Hormuz picture (zero transits since May 4, Hui Chuan unresolved, 30 of 33 missile sites intact) keep the conditioning live. The re-escalation substrate carries: Sledgehammer contingency, Wright weaponization testimony, parliamentary 90% enrichment threat.",
      spillover:
        "Spillover holds critical — active, not latent. Israel killed at least 16 people including four children in southern Lebanon on Friday, the same day it agreed to the ceasefire extension, bringing the truce-period death toll to 657-plus. Hormuz is unchanged: zero transits since May 4, 58-plus vessels redirected. Brent at $111 reflects the physical strait, not the communiqué. The energy-infrastructure clock worsens.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'pivotal',
      source: 'Bloomberg / US News / Times of Israel / The National',
      event:
        'Israel and Lebanon agree to extend cessation of hostilities by 45 days; Pentagon security track begins May 29, political talks resume June 2–3',
      summary:
        "The US State Department announced Friday that Israel and Lebanon agreed to extend the cessation of hostilities by 45 days after 'highly productive' third-round Washington talks. State Department spokesperson Tommy Pigott said political negotiations would continue June 2–3, while a Pentagon-hosted security track would begin May 29 with Lebanese and Israeli military delegations — the first military-to-military channel in the Lebanon process. The extension defuses the Sunday May 17 cliff that dominated Day 77's gauge structure.",
      impact:
        "This is structurally the most significant positive development since the April framework: the hardest near-term clock is removed and replaced by a dual-track schedule with institutional depth. Under the multi-clock framework, the active-deadline clock shifts from 'expiring' to 'extended.' The skeptical counter: 657-plus killed during the 'truce,' Hezbollah excluded, Israel retains full freedom of operations. The SNSC linkage means progress here is necessary but not sufficient for the wider war.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'pivotal',
      source: 'Al Jazeera / CNN / NBC News / Euronews / CSIS / Foreign Policy / CFR',
      event:
        "Trump leaves Beijing with 'few clear wins' on Iran; China's readout omits the no-bomb commitment, revealing the two sides 'disagree on what they agreed on'",
      summary:
        "Trump departed Beijing Friday afternoon after 40-plus hours with little evidence of an Iran agreement. China's foreign ministry readout omitted the commitment that Iran can never have a nuclear weapon — the White House's headline claim — instead saying the conflict 'should never have happened' and 'has no reason to continue,' reaffirming Xi's four-point plan without adopting Washington's framework. CSIS called it 'stabilization, not breakthrough'; Euronews said 'underwhelming'; the only announced deal was a Boeing order.",
      impact:
        "Day 77's 'most concrete de-escalatory signal' requires a correction. The negotiation-capacity clock reads opened-then-narrowed: Xi's brokering offer remains on the table but unconfirmed in Beijing's own language, and Iran has neither accepted nor acknowledged it. The summit expanded the diplomatic vocabulary without expanding the diplomatic architecture. The re-escalation substrate — Sledgehammer, Wright testimony, Hui Chuan seizure, 90% enrichment threat — is undiminished.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera',
      event:
        'Israel kills at least 16 including four children in southern Lebanon on the same day as the ceasefire extension — truce-period death toll reaches 657-plus',
      summary:
        "Israeli attacks across southern Lebanon on Friday killed at least 16 people including four children and wounded 54, according to Lebanon's health ministry, even as the 45-day ceasefire extension was being announced in Washington. Lebanon's National News Agency reported multiple airstrikes on Friday in the south, as well as two on the Nabi Sheit area east of Bekaa Valley. The truce-period death toll has reached 657-plus, and the cumulative toll since March 2 stands at roughly 2,898 killed.",
      impact:
        "The same-day killing is the analytical point: 657-plus dead during a 'truce' hollows the extension's moral authority and reinforces the standing Lebanon-gap prior — Israel retains full freedom of operations regardless of Washington's paper agreements. For Hezbollah, excluded from the talks, the escalating civilian toll provides both grievance and justification for continued operations outside the framework.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Fortune',
      event:
        'Brent surges to roughly $111 a barrel Friday, reversing the Beijing-signal easing as the summit produces no Iran deliverable',
      summary:
        "Brent crude surged to roughly $111 a barrel Friday, up more than $3 from Thursday, erasing the diplomatic-signal easing that followed Thursday's bilateral. The summit's failure to produce an Iran deliverable repriced the risk. Gold held below $4,700 and the market continues to fully price out a 2026 Federal Reserve rate cut, with rising odds of a hike.",
      impact:
        "The oil price now reflects the physical strait, not the communiqué: zero Hormuz transits since May 4, 58-plus vessels redirected, the Hui Chuan seized and unresolved. For Taiwan, CPC Corporation's working floor revises upward from $105 to roughly $110. The $130–170 kinetic-tail scenario is unchanged. The war remains inside the US inflation print.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'Al Arabiya / Euronews',
      event:
        "Iran remains silent on Beijing joint language; parliament's May 12 threat to pursue 90% weapons-grade enrichment carries as nuclear-escalation backstop",
      summary:
        "No official Iranian reaction to the Trump-Xi summit outcomes has surfaced. The parliament's May 12 warning — from Ebrahim Rezaei, spokesperson for the National Security and Foreign Policy Committee — that Iran could pursue 90% weapons-grade enrichment if US strikes resume carries as the nuclear-escalation backstop. Iran holds roughly 400 kilograms of 60% enriched uranium, from which weapons-grade material could be produced in weeks using existing centrifuge capacity.",
      impact:
        "Iran's silence is analytically significant: the Beijing offer has neither been confirmed by the offeror (China's readout omitted key pledges) nor accepted by the target (Iran). The 90% threat — coupling the nuclear clock to the military clock — means any resumption of strikes triggers a declared enrichment acceleration. The IAEA verification gap (no access to declared enrichment facilities since mid-2025) makes the timeline unfalsifiable.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed KIA',
      status:
        "No new US casualties confirmed. Trump returned from Beijing with no Iran breakthrough. Pentagon Sledgehammer contingency and Wright weaponization testimony carry as the re-escalation substrate. The Hui Chuan seizure remains unresolved.",
    },
    israel: {
      cumulative: 'KIA: 47 · WIA: 8,603+',
      delta: '+0 KIA / +0 WIA (no new beyond Day 77 carry)',
      status:
        "No new Israeli casualties reported Friday beyond the three wounded by Hezbollah drones carried in Day 77. The 45-day Lebanon ceasefire extension defuses the immediate escalation clock but IDF operations in southern Lebanon continue unabated — at least 16 killed in Friday's strikes.",
    },
    iran: {
      cumulative:
        "LMO 'nearly 3,400' KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · Hengaw 6,620+ mil · 3.2M displaced",
      delta: 'No new figures',
      status:
        "No new Iranian casualty figures. Iran remained silent on the Beijing summit outcomes and the joint language. The parliament's May 12 threat to pursue 90% enrichment carries. Rial data not updated Friday; last at ~1,811,000 IRR/USD Thursday.",
    },
    other: {
      cumulative:
        'Lebanon MOH: ~2,898+ KIA / ~8,822+ WIA · Iraq: 117+ · Gulf states: 32+ · UAE: 14+9 wounded cumulative · Kuwait: 1 wounded',
      delta: '+16 KIA / +54 WIA (Israeli attacks in southern Lebanon Friday)',
      status:
        "Lebanon Health Ministry reports at least 16 killed including four children and 54 wounded in Israeli attacks across southern Lebanon on Friday — the same day the ceasefire extension was announced. Truce-period death toll reaches 657-plus. Hormuz: zero transits since May 4 carries; 58+ vessels redirected; Hui Chuan fate unresolved.",
    },
  },
  exec:
    "Day 78 delivers a split verdict: the war's hardest near-term clock was defused even as the Beijing summit's de-escalatory signal deflated. The US State Department announced Friday that Israel and Lebanon agreed to extend the cessation of hostilities by 45 days after 'highly productive' third-round Washington talks, scheduling political negotiations for June 2–3 and a Pentagon-hosted security track beginning May 29 with military delegations from both sides (Bloomberg, US News, Times of Israel, The National). The Sunday cliff that dominated Day 77's gauge structure is gone — replaced by a dual-track schedule with institutional depth, the first time the Lebanon process has generated a military-to-military channel. But Trump left Beijing with what analysts across CSIS, Euronews, and Foreign Policy uniformly called 'few clear wins' — China's own foreign ministry readout omitted the commitment that Iran can never have a nuclear weapon, instead saying the conflict 'should never have happened' and 'has no reason to continue,' revealing a gap between the White House framing and Beijing's actual position (Al Jazeera, CNN, NBC News). The one announced deal was a Boeing order. Israel killed at least 16 people including four children in southern Lebanon on Friday even as the extension was announced — 657-plus killed during the truce period, per Lebanon's health ministry (Al Jazeera). Brent surged to roughly $111 a barrel, reversing the Beijing-signal easing, as the summit's failure to produce an Iran deliverable repriced the risk (Fortune). Iran remained silent on the Beijing joint language; the parliament's May 12 threat to pursue 90% weapons-grade enrichment carries. Analytical judgment: 30-day ceasefire probability nudges 9 to 10 — the Lebanon extension is structurally the most significant positive development since the April framework, removing a fixed-date cliff and establishing a dual-track schedule — but the summit's deflation, continued Israeli killing in Lebanon, and Iran's silence cap the broader assessment as mixed, not de-escalating.",
  implications: [
    {
      title:
        "The 45-day Lebanon ceasefire extension defuses the war's hardest near-term clock and establishes the first dual-track negotiation schedule — but 657-plus killed during the 'truce' hollows the agreement's moral authority",
      body:
        "The State Department's Friday announcement transforms the analytical landscape. The Sunday expiry that dominated Day 77 — a fixed-date cliff with the talks 'split on key issues' — is replaced by a 45-day runway and, more significantly, a bifurcated process: political negotiations resume June 2–3 while a Pentagon-hosted security track opens May 29 with Lebanese and Israeli military delegations. This is the first time the Lebanon process has generated a military-to-military channel — a structural upgrade over the purely political rounds. Under the multi-clock framework, the active-deadline clock shifts from 'expiring' to 'extended,' and the negotiation-capacity clock benefits from a second institutional track. The skeptical counter is the same one the brief has carried since Day 40: the ceasefire is porous to the point of fiction. Al Jazeera reports at least 16 killed including four children in southern Lebanon on Friday — the day the extension was announced. Lebanon's health ministry counts 657-plus killed since the April 16 cessation of hostilities began, and the cumulative toll stands at roughly 2,898 killed. Israel retains full freedom of operations and has shown no intent to halt. Hezbollah, excluded from the Washington talks, has no incentive to observe an agreement negotiated without it. The standing Lebanon-gap and SNSC-linkage priors re-assert: Iran has coupled the Lebanon track to the broader MOU, so progress here is necessary but not sufficient for the wider war.",
    },
    {
      title:
        "The Trump-Xi summit's de-escalatory signal deflated on landing — China's readout omitted the no-bomb commitment and analysts found 'few clear wins' — narrowing the negotiation-capacity opening before Iran even responded",
      body:
        "Day 77 registered the Beijing bilateral as the war's 'most concrete de-escalatory signal.' Day 78 requires a correction. China's foreign ministry readout, published Friday, did not explicitly state that Iran can never have a nuclear weapon — the White House's headline claim. Instead, Beijing said the conflict 'should never have happened' and 'has no reason to continue,' and reaffirmed Xi's four-point plan without adopting Washington's framework. Al Jazeera captured the analytical shift: the two sides 'disagree on what they agreed on.' CNN reported Trump departed after 40-plus hours with 'little evidence' of any Iran agreement; NBC called it 'few clear wins'; Euronews said 'underwhelming'; CSIS framed it as 'stabilization, not breakthrough.' The one announced deal was a Boeing order. The negotiation-capacity clock, which improved on Day 77, now reads as opened-then-narrowed rather than opened-and-converting. Xi's brokering offer remains on the table but absent Chinese confirmation of the no-bomb and no-military-equipment pledges in Beijing's own language, the opening is weaker than Day 77 credited. Iran's continued silence compounds the problem — the offer has neither been confirmed by the offeror nor accepted by the target. The re-escalation substrate carries: Pentagon Sledgehammer contingency, Wright weaponization testimony, the Hui Chuan seizure, and the parliamentary 90% enrichment threat.",
    },
    {
      title:
        "Brent surging to ~$111 reprices the summit deflation into energy markets — Taiwan's working floor rises while the Lebanon runway offers the first time-bound path toward Hormuz reopening",
      body:
        "Brent crude surged to roughly $111 a barrel Friday — up more than $3 from Thursday and erasing the diplomatic-signal easing that followed Thursday's bilateral — as the summit's failure to produce an Iran deliverable repriced the risk (Fortune). The gap between the Beijing communiqué and the physical strait is now legible in the oil price: zero Hormuz transits since May 4, 58-plus vessels redirected, the Hui Chuan seizure unresolved, and Iran retaining 30 of 33 Hormuz missile sites. Gold held below $4,700 and the market fully prices no 2026 Fed cut. For Taiwan: CPC Corporation's working floor must be revised upward from Day 77's $105 to roughly $110, with the $130–170 kinetic-tail scenario unchanged. The one offsetting positive is structural: the Lebanon 45-day extension, if it holds, is the first process that offers a time-bound path toward the conditions under which Hormuz reopening becomes negotiable — the SNSC linkage means Lebanese de-escalation is a necessary precursor. Xi's stated interest in buying more US crude remains the slow diversification variable. TSMC's 2026 CapEx framework-signature path holds at roughly 8 percent; the summit deflation did not lower it because the negotiation-capacity opening, while narrowed, was not closed. No fresh Taiwan-specific development; prior assessments hold with the upward floor revision.",
    },
  ],
  casualtyNotes: {
    us:
      "No new KIA. Trump returned from Beijing with no Iran breakthrough. Pentagon Sledgehammer contingency and Wright weaponization testimony carry. Hui Chuan seizure unresolved.",
    israel:
      "No new Israeli casualties beyond Day 77 carry. The 45-day Lebanon ceasefire extension defuses the immediate clock but IDF southern Lebanon operations continue — at least 16 killed Friday.",
    iran:
      "No new casualty figures. Iran silent on Beijing summit outcomes. Parliament's May 12 threat to pursue 90% enrichment carries. Rial last at ~1,811,000 IRR/USD Thursday.",
    other:
      "Lebanon MOH: +16 KIA / +54 WIA Friday. Truce-period toll reaches 657-plus. Hormuz zero transits since May 4.",
  },
  flash:
    '*(reserved for evening run — Saturday developments, any Iranian official reaction to the summit, Hormuz maritime updates, Brent Friday close, any Lebanon ceasefire-extension implementation signals)*',
};

export default data;
