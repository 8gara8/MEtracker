import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed but tilts off Day 163's optimism. The 'finalized' framework, the 'imminent' deal and the Monday talks all cooled: Foreign Minister Araghchi said there were no ongoing US-Iran negotiations and that reopening was impossible until Washington ended its MoU 'violation' and paid compensation, national-security chief Zolghadr issued a maximal demand list, and Trump himself downgraded to 'only semi-negotiating' and 'low keying' Iran (CNN, Al Jazeera, ABC News). Yet a US official still said a deal was expected 'soon,' back-channel messages continued and the Joint Chiefs chairman pressed for an off-ramp, so the diplomacy cooled rather than collapsed. On the ground the Houthis went kinetic — striking the Saudi Aramco Jizan refinery and killing at least eleven at Mokha — which pulls direction toward escalating, while the northern Iraqi-militia axis stayed postponed, which pulls the other way. Per §3.5.3 a hyped deal that deflates the moment it is tested, set against a first confirmed Saudi energy hit and a still-deferred second front, is the definition of mixed.",
      risk7d:
        "Seven-day risk holds critical and presses higher. The tracked Saudi-energy-hit trigger partly fired — Houthi drones struck the Aramco Jizan refinery — but in contained form: the fire was extinguished, no facility casualties were reported, and no export capacity was lost, so the week's dominant tail (a Gulf export node or a laden-tanker sinking) stays untriggered (Al Jazeera, OilPrice). The northern Iraqi-militia axis remained postponed under Badr mediation, so the feared synchronized north-south salvo has not landed, but Saudi intelligence still warns of imminent IRGC-coordinated attacks on ports, airports and energy (Critical Threats). The ~August 16-17 toll-free window is roughly a week out and the deal cooled rather than closed, so a US-acceptable outcome is no likelier by the deadline. A resumed US-Israeli strike, a synchronized salvo on Saudi infrastructure, a maritime sinking, or a confirmed American combat death remain the week's dominant risks.",
      spillover:
        "Spillover holds critical. The war's map widened on the southern axis: the Houthis struck Saudi energy infrastructure directly for the first time this phase and killed at least eleven at Yemen's Mokha port, while holding their Red Sea blockade and their threat on Saudi targets (Al Jazeera, Euronews). That the northern Iraqi-militia axis stayed postponed is why spillover did not worsen outright; that a Houthi drone put a Saudi Aramco refinery on fire is why it did not ease. The Mecca defense pact held and Saudi Arabia absorbed the strike without breaking, but the US-Israel seam frayed as Netanyahu rejected Trump's Board of Peace Gaza plan (Times of Israel). The conflict still spans Iranian soil, both maritime chokepoints, the Israel-Gaza and Israel-Lebanon seams and an open, now-kinetic Houthi front against Saudi Arabia; a cooled Oman corridor reaches none of these fronts.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'high',
      source: 'CNN / Al Jazeera / ABC News',
      event:
        "The Day 163 deal narrative cooled: Foreign Minister Araghchi said there were no ongoing US-Iran negotiations and that reopening the strait was impossible until Washington ended its 'violation' of the June memorandum and paid compensation; national-security chief Mohammad Bagher Zolghadr issued a maximal demand list — lift the blockade, withdraw US forces, end the war and sanctions, release frozen assets, compensate war damage — and said the strait would not reopen 'until America corrects its behavior,' while Trump downgraded to 'only semi-negotiating' and 'low keying' Iran.",
      summary:
        "Per §3.5.3 the 'finalized/imminent/Monday talks' framing of Day 163 deflated into mutual contradiction the moment it was tested — Iran denying live talks and hardening its price, Trump quietly conceding the deal is not at hand.",
      impact:
        "A cooled negotiation with a growing precondition list pushes a US-accepted reopening further out even as the corridor's logistics stay done, leaving the war's end hostage to an unreachable Khamenei and a US concession Washington has refused.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Al Jazeera / Euronews / Middle East Eye',
      event:
        "Houthi drones struck the Saudi Aramco refinery at Jizan on the Red Sea coast — the first confirmed hit on Saudi energy infrastructure in this phase — while a separate Houthi strike on Yemen's port of Mokha killed at least eleven people (three civilians, eight military) and wounded thirty-two, up from an initial count of seven; Saudi authorities said the Jizan fire was extinguished with no casualties reported at the facility.",
      summary:
        "Per §3.5.6 the Saudi-energy-hit trigger the brief has tracked partly fired — a refinery was struck and burned — but in contained form, with the fire out, no facility casualties and no export capacity lost.",
      impact:
        "A contained hit on a Red Sea domestic-supply refinery adds a risk bid without a supply loss, which is why Brent firmed only modestly; the catastrophic case — a Gulf export node or a laden tanker — remains the untriggered tail that would reprice oil in a session.",
    },
    {
      id: 3,
      direction: 'de-escalating',
      importance: 'high',
      source: 'Critical Threats / CNN',
      event:
        "The Islamic Resistance in Iraq kept its threatened response to the late-July US-Saudi strikes postponed under Badr Organization mediation, leaving the northern axis of the warned two-front assault on Saudi Arabia dark, even as Saudi intelligence continued to warn of imminent IRGC-coordinated attacks on ports, airports and energy infrastructure.",
      summary:
        "Per §3.5.6 the synchronized north-south salvo the brief has tracked still did not materialize — the northern axis held its fire while the southern (Houthi) axis went kinetic on its own.",
      impact:
        "A still-deferred northern front keeps the most acute widening scenario off the table for now, but a postponement under IRGC coordination is a delay, not a retirement, and the Jizan strike shows the southern half no longer needs the northern half to escalate.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'Times of Israel',
      event:
        "Netanyahu, leading the weekly cabinet, rejected Trump's Board of Peace 15-point Gaza plan and said he could 'stand up to the president'; the IDF and Shin Bet disclosed a standing mission to hunt and kill all October 7 perpetrators, while a Board of Peace envoy insisted full verified execution of the plan was the 'only guarantee' October 7 would not recur.",
      summary:
        "Per §3.5.6 the US-Israel seam hardened rather than eased — Israel stayed at its highest readiness, outside the Oman channel, and now openly at odds with the US Gaza framework.",
      impact:
        "An Israel publicly rejecting the president's plan keeps a full-scale-campaign option live and independent of the US-Iran track, so any deal that assumes Israeli alignment stays structurally fragile.",
    },
    {
      id: 5,
      direction: 'neutral',
      importance: 'medium',
      source: 'Trading Economics / OilPrice / straits.live',
      event:
        "Brent crude held in the low-to-mid $80s as the market weighed the Jizan strike — a hit without a supply loss — against a cooled negotiation, with the Strait of Hormuz still effectively closed under naval escort; the Joint Chiefs chairman privately pressed for an off-ramp and Vice-President Vance said talks would 'be messy' and take time.",
      summary:
        "Per §3.5.5 the barrel added only a modest risk bid and stayed in the low $80s — pricing neither a reopening nor a rupture — because the Jizan fire was contained and no export capacity was lost.",
      impact:
        "A market parked in the low $80s shows the de-escalation trade is spent and the escalation trade still untriggered; a Gulf-energy hit or a tanker sinking sends Brent toward $120 within a session, while a signed reopening pulls it to the $70s.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS database lists a wider all-cause series: 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series; the US-Iran shooting stayed paused as Trump 'low keyed' Iran and said the US was 'only semi-negotiating,' and the Joint Chiefs chairman privately pressed for an off-ramp; the DoD DCAS all-cause series holds at 18 killed / 687 wounded versus the 17 / 432 combat series the brief tracks, a counting-scope difference and not a confirmed hostile loss; the lone Kuwait death at Ahmad al-Jaber stays denied by CENTCOM and unconfirmed",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series (~96% of wounded returned to duty). The DoD DCAS database still holds a wider all-cause tally at 18 killed / 687 wounded since February 28 — non-hostile deaths and every wounded case included — against the narrower combat series the brief tracks. Per §3.5.3 the brief keeps the AP/CENTCOM combat figure as the headline and flags DCAS as a divergence to watch; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule, which is keyed to a verified combat death. The US naval blockade of Iranian ports continued and is now the pivot of Iran's precondition, since Tehran ties a full reopening to lifting it and to war-damage compensation; the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved. Trump downgraded to 'only semi-negotiating' and 'low keying' Iran, and the Joint Chiefs chairman signaled Washington needs an off-ramp even as the US and Israel kept energy-strike options armed.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta:
        "+0 on the Iran front (Israel not a direct party to the US-Iran exchange); held at its highest readiness and outside the Oman channel; on the seams the day hardened rather than eased as Netanyahu rejected Trump's Board of Peace Gaza plan and the IDF/Shin Bet disclosed a standing October 7 hunt-and-kill mission",
      status:
        "No new Israeli casualties on the Iran front. Israel held at its highest state of readiness, with the US and Israel still preparing possible strikes on Iranian energy infrastructure. Israel stays outside the US-Iran framework and unbound by the Oman channel, so its readiness keeps a full-scale-campaign option live if the deal claim collapses; the Lebanon gap prior (§3.5.6) carries and sits inside Iran's precondition list. On the seams the day hardened: Netanyahu, leading the weekly cabinet, rejected Trump's Board of Peace 15-point Gaza plan and said he could 'stand up to the president,' while a Board of Peace envoy insisted full verified execution was the 'only guarantee' October 7 would not recur, and the IDF and Shin Bet disclosed a standing mission — using facial recognition, AI, interrogations and human intelligence — to hunt and kill all October 7 perpetrators. The underlying disarmament impasse (Hamas refuses to disarm before an Israeli withdrawal; Israel refuses to withdraw without disarmament) stayed unresolved, now compounded by an open Netanyahu-Trump rift over the plan.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; Tehran said the shipping accord awaited Supreme National Security Council approval, widened its reopening demands to compensation, sanctions relief and frozen assets, denied any live US negotiation, and said reaching a wounded Khamenei stays 'very difficult'",
      status:
        "No updated official Iranian toll issued on Day 164. The Qeshm Island deaths — a couple and their child — and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. Iran said the shipping accord awaited Supreme National Security Council approval while widening its reopening conditions to lifting the blockade, war-damage compensation, an end to sanctions and the release of frozen assets, and national-security chief Zolghadr said the strait would 'never reopen until America corrects its behavior'; Araghchi denied any ongoing US negotiation. The IAEA has run no verification since February 28 and remains locked out of Isfahan; a little more than 200 kg of 60% HEU (ISIS puts the produced 60% stock at ~440.9 kg, with 184.1 kg at 20%) stays unverified and likely at Isfahan, with ISIS flagging enough HEU for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        'Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA, of which Kuwait 10 killed / 115 injured and Saudi Arabia 11 civilians injured (Houthi attack, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded (Houthi strike, Aug 9) · Lebanon source-split: Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129 · Hormuz maritime toll ~17 ships damaged / 7 abandoned / 2 captured / ~12 seafarers killed or missing',
      delta:
        "+11 killed / +32 wounded — the first confirmed new deaths in the theaters in days; a Houthi strike on Yemen's Red Sea port of Mokha killed at least eleven (three civilians, eight military) and wounded thirty-two, up from an initial count of seven; Houthi drones also struck the Saudi Aramco Jizan refinery (fire extinguished, no facility casualties), and the northern Iraqi-militia axis stayed postponed",
      status:
        "The first confirmed new deaths in the theaters in days landed on the southern axis. A Houthi strike on Yemen's Red Sea port of Mokha killed at least eleven — three civilians and eight military personnel — and wounded thirty-two, a count that rose from an initial seven (Euronews, Al Jazeera). Houthi drones also struck the Saudi Aramco refinery at Jizan, the first confirmed hit on Saudi energy infrastructure in this phase, but Saudi authorities said the fire was extinguished with no casualties at the facility. The northern Iraqi-militia axis kept its response postponed under Badr Organization mediation, so the threatened synchronized two-front assault still did not materialize. The cumulative Hormuz-crisis maritime toll holds at roughly 17 merchant ships damaged, seven abandoned, two captured and about a dozen seafarers killed or missing; Hormuz stays effectively closed under naval escort, and a laden-tanker sinking or a crew death remains the tell most likely to reprice oil and trigger Trump's rule. Kuwait holds 10 killed / 115 injured; Iraq holds 148+ KIA / 402+ WIA; Saudi Arabia holds 11 civilians injured from the Aug 7 Houthi attack; Lebanon stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129).",
    },
  },
  exec:
    "Day 164 saw the 'imminent' Hormuz deal cool while the Saudi front turned kinetic. The optimism Iran and Trump narrated on Day 163 — a 'finalized' framework, a deal 'imminent,' talks resuming Monday — deflated into mutual contradiction. Foreign Minister Araghchi said there were no ongoing negotiations with Washington and that reopening the strait was impossible until the US ended its 'violation' of the June memorandum and paid compensation; national-security chief Mohammad Bagher Zolghadr issued a maximal list — lift the naval blockade, withdraw US forces, end the war and sanctions, release frozen assets, compensate war damage — declaring the strait would not reopen 'until America corrects its behavior' (CNN, Al Jazeera, NBC News). Iran said the accord awaited its Supreme National Security Council's approval, with Pezeshkian again calling contact with a wounded Khamenei 'very difficult.' Trump, in turn, downgraded his own claim — saying the US was 'only semi-negotiating' and 'low keying' Iran to let economic pressure work — even as a US official said 'we expect a deal soon' and messages passed through intermediaries (ABC News, Times of Israel). Per §3.5.3 the deal Trump repeatedly called 'imminent' cooled the moment it was tested. On the Gulf front the southern axis went kinetic: Houthi drones struck the Saudi Aramco refinery at Jizan — the first confirmed hit on Saudi energy infrastructure this phase, though the fire was extinguished with no facility casualties — while a Houthi strike on Yemen's Mokha port killed at least eleven and wounded thirty-two (Al Jazeera, Euronews). The northern Iraqi-militia axis stayed postponed. Brent held in the low-to-mid $80s. Direction holds mixed; seven-day and spillover risk hold critical; the thirty-day ceasefire probability eases to 12.",
  implications: [
    {
      title: "'Imminent' deflates to 'only semi-negotiating' — the announce-and-retreat cycle runs in reverse",
      body:
        "Day 163 closed with Iran's framework 'finalized,' a deal Trump called 'imminent,' and talks set for Monday. Day 164 walked all three back. Foreign Minister Araghchi said there were no ongoing negotiations with Washington and that reopening the strait remained impossible until the US ended its 'violation' of the June memorandum and compensated Iran, while national-security chief Mohammad Bagher Zolghadr laid out a maximal list — lift the naval blockade, withdraw US forces, permanently end the war and sanctions, release frozen assets, pay war-damage compensation — declaring the strait would not reopen 'until America corrects its behavior' (CNN, Al Jazeera, NBC News). Iran said the accord still awaited Supreme National Security Council approval, and Pezeshkian again called contact with a wounded Khamenei 'very difficult.' Analytical judgment: per §3.5.3 the figure to distrust was always Trump's optimism, and on Day 164 Trump himself supplied the counter — downgrading to 'only semi-negotiating' and 'low keying' Iran to let economic pressure work, even as a US official insisted 'we expect a deal soon' and messages passed through intermediaries (ABC News, Times of Israel). This is the announce-and-retreat pattern in reverse: not Tehran denying a deal Washington claimed, but Washington quietly conceding the deal it hyped is not at hand. The corridor's logistics stay done and its political price stays unpaid and growing — a cooling, not yet a collapse, with the Joint Chiefs chairman privately pressing for an off-ramp.",
    },
    {
      title: "The southern axis goes kinetic on Saudi energy — the tracked trigger fires, in contained form",
      body:
        "The brief has flagged a Saudi energy-infrastructure hit as the single event most able to reprice oil short of a Hormuz sinking. On Day 164 it partly fired: Houthi drones struck the Saudi Aramco refinery at Jizan, the first confirmed strike on Saudi energy infrastructure in this phase, and a separate Houthi salvo on Yemen's Red Sea port of Mokha killed at least eleven — three civilians and eight military — and wounded thirty-two, up from an initial count of seven (Al Jazeera, Euronews, Middle East Eye). Analytical judgment: per §3.5.6 the trigger materialized in its contained form — Saudi authorities said the Jizan fire was extinguished with no casualties at the facility, and Jizan is a Red Sea domestic-supply refinery, not a Gulf crude-export node, so no export capacity was lost. That is why Brent added only a modest risk bid and held in the low-to-mid $80s rather than spiking (Trading Economics, OilPrice). The catastrophic case — a Gulf export terminal or a laden tanker — remains the untriggered tail. Structurally the map still favors escalation: the northern Iraqi-militia axis stayed postponed under Badr Organization mediation, so the feared synchronized north-south salvo has not landed, but the southern axis is now firing on Saudi soil, and Saudi intelligence still warns of imminent IRGC-coordinated attacks on ports, airports and energy (Critical Threats). The Mecca defense pact held and Saudi Arabia absorbed the hit without breaking; whether it deters the next salvo or merely absorbs a war of attrition is the open question the strike reframed.",
    },
    {
      title: "Taiwan: the corridor cools and the second chokepoint burns — the exposure lengthens",
      body:
        "For Taipei the ledger held, but both its exposures moved the wrong way at once. Per §3.5.10 there was no Taiwan-specific development on Day 164; the corridor Iran called 'finalized' on Day 163 now sits behind a cooled negotiation and a hardened demand list, while the Houthi strike on the Saudi Aramco Jizan refinery is a reminder that the second chokepoint — the Bab el-Mandeb and the Red Sea — is burning independently of the US-Iran track. Analytical judgment: per §3.5.5 the numbers are unchanged and unforgiving. Taiwan is 99% import-dependent for natural gas, and about a third of its 23.6 Mt of LNG transits Hormuz, nearly 8 Mt of it Qatari (CSIS, IFRI). Brent's low-$80s keeps the crude bill elevated but stable — the exposure the war actually threatens is the molecule, not the price. The realized damage carries: no Qatari or UAE cargoes in April or May, roughly 17% of Qatar's export capacity cut at Ras Laffan, US LNG backfill at a premium, against about eleven days of gas cover versus roughly 120 days of oil. A strait whose reopening cooled from 'finalized' to 'only semi-negotiating,' paired with a live Red Sea front that just put a Saudi refinery on fire, does not shorten Taipei's exposure; it lengthens the list of things that must go right first.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider counting scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. The blockade — tied to Iran's compensation demand — continues; Trump 'low keyed' Iran and said the US was 'only semi-negotiating'; the Joint Chiefs chairman pressed for an off-ramp; $67B supplemental and 50-48 war-powers rebuke unresolved.",
    israel:
      "No new Israeli casualties on the Iran front; highest readiness held. The seams hardened: Netanyahu rejected Trump's Board of Peace 15-point Gaza plan and said he could 'stand up to the president,' and the IDF/Shin Bet disclosed a standing October 7 hunt-and-kill mission. Israel stays outside the Oman channel; the Lebanon gap prior sits inside Iran's precondition list; the disarmament impasse is now compounded by an open Netanyahu-Trump rift.",
    iran:
      "No fresh official MOH toll; Qeshm civilian deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation of Martyrs ~3,468; MOH ~3,559 / 27,400+; US/Israeli est. 6,000+. Tehran said the accord awaited SNSC approval while widening demands to compensation, sanctions relief and frozen assets; Araghchi denied any live US talks; reaching a wounded Khamenei stays 'very difficult.' IAEA no verification since Feb 28; HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "First confirmed new deaths in days: a Houthi strike on Yemen's Mokha port killed at least 11 (3 civ / 8 mil) and wounded 32, up from an initial seven. Houthi drones also hit the Saudi Aramco Jizan refinery (fire extinguished, no facility casualties) — the first confirmed Saudi energy-infrastructure hit this phase; the northern Iraqi-militia axis stayed postponed. Maritime toll ~17 ships damaged / 7 abandoned / 2 captured / ~12 seafarers killed or missing; Hormuz effectively closed. Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7); Lebanon source-split.",
  },
};

export default data;
