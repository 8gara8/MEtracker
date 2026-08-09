import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed. Day 163 gave the Oman route its most advanced form yet — Iran said the framework was 'finalized' and awaiting only Khamenei, Oman called the talks 'positive and constructive,' Trump said he had called off a weekend strike and set negotiations to resume Monday, and the Islamic Resistance in Iraq postponed the northern half of the threatened Saudi assault (ABC News, CNN, Critical Threats). Those are genuinely de-escalatory beats and keep direction off escalating. But the same day widened the deal's political price rather than closing it: Foreign Minister Araghchi tied reopening to 'other conditions and compensation for the US violation,' Iran's demands now spanning the blockade, war-damage compensation, sanctions relief and frozen assets, while its security-council secretary said the strait would 'never fully reopen' until Washington 'corrects its behavior' (Fortune, Press TV). A finalized framework set against a lengthening demand list Washington has refused, a Houthi campaign still live and a new tri-lateral defense bloc keep direction off de-escalating. Per §3.5.3 the logistics advanced while the terms hardened — mixed, not a verified path to reopening.",
      risk7d:
        "Seven-day risk holds critical. The threatened two-front assault on Saudi Arabia did not land — the Islamic Resistance in Iraq postponed its response and the Houthis stayed on their southern lane — but a postponement is a delay, not a defusing, and the Houthis vowed to 'respond to escalation with escalation' (Critical Threats, Al Jazeera). Monday's resumption of talks is the binary the week now turns on: Trump paired 'imminent' with a strike merely called off, not cancelled, and the US and Israel keep energy-infrastructure strike options armed as a CENTCOM commander met Israel's military chief (ABC News, Times of Israel). The sixty-day toll-free window still expires around August 16-17, roughly a week out, and Iran's widened demand list — compensation, sanctions relief, frozen assets — makes a US-acceptable outcome no likelier by the deadline. A resumed US-Israeli strike after Monday's talks, a synchronized north-south salvo on Saudi infrastructure, a laden-tanker sinking, or a confirmed American combat death remain the week's dominant risks.",
      spillover:
        "Spillover holds critical. The war's map did not shrink: the Houthis struck Saudi-backed forces inside Yemen and held their blockade and their threat on Saudi targets, the northern Iraqi-militia axis stayed armed but postponed, and Saudi Arabia, Turkey and Pakistan answered by signing the 'Mecca Joint Defence Agreement,' a mutual-defense pact that formalizes a Sunni-power bloc including nuclear-armed Pakistan (Al Jazeera, Washington Post). That the two-front salvo was deferred rather than fired is why spillover did not worsen; that a new military alliance was needed to deter it is why it did not ease. The conflict still spans Iranian soil, both maritime chokepoints, the Israel-Gaza and Israel-Lebanon seams and an open Houthi front against Saudi Arabia, even as a localized Israeli withdrawal in south Lebanon and an IDF pullback in Gaza offered narrow de-escalatory notes (Times of Israel). The Oman route reaches none of these fronts; a finalized framework does nothing to contain a spillover now managed by alliance rather than restraint.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'pivotal',
      source: 'ABC News / CNN / Bloomberg',
      event:
        "Iran said the framework of its Strait of Hormuz shipping-route agreement with Oman had been 'finalized' and awaited only final approval from Supreme Leader Mojtaba Khamenei; Oman's foreign ministry called the talks 'positive and constructive,' and Trump, aboard Air Force One, said he had called off a weekend strike at Gulf allies' request, called a deal 'imminent,' and said negotiations would resume Monday.",
      summary:
        "Per §3.5.3 the route advanced from 'reached' on Day 162 to a 'finalized' framework awaiting only a sign-off — the most concrete the diplomacy has been — while Trump again narrated imminence and a strike deferred rather than cancelled.",
      impact:
        "A finalized framework brings a managed, Iranian-administered corridor to the edge of activation, but leaves the war's end hostage to an unreachable Supreme Leader and a Monday negotiation that Washington's own optimism has repeatedly outrun.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'Fortune / Press TV / Times of Israel',
      event:
        "Foreign Minister Araghchi said reopening the strait 'by itself' would not end the crisis and remained 'subject to other conditions and compensation for the US violation' of the June memorandum, with Iran's demands now spanning an end to the blockade, war-damage compensation, sanctions relief and the release of frozen assets; Iran's security-council secretary said the strait would 'never fully reopen' until Washington 'corrects its behavior,' and Tehran denied asking Trump to hold fire or agreeing to 'split' the waterway.",
      summary:
        "Per §3.5.6 the exclusion-and-price regime widened as the framework firmed — 'finalized with Oman' is not 'agreed with Washington,' and the demand list grew rather than shrank.",
      impact:
        "Each added precondition the US has refused pushes a fully open, US-accepted strait further out even as the logistics near done, so the deal's last mile becomes a political bill Washington is unlikely to pay on Iran's terms.",
    },
    {
      id: 3,
      direction: 'de-escalating',
      importance: 'high',
      source: 'Critical Threats / Al Jazeera / CNN',
      event:
        "The Islamic Resistance in Iraq announced it would postpone its threatened response to the late-July US-Saudi strikes on militia positions, leaving the northern axis of the warned two-front assault on Saudi Arabia dark, while the Houthis struck Saudi-backed forces inside Yemen and vowed to 'respond to escalation with escalation.'",
      summary:
        "Per §3.5.6 the synchronized north-south salvo the brief has tracked did not materialize — the northern axis stood down for now while the southern axis stayed active but added no new strike on Saudi soil.",
      impact:
        "A deferred second front removes the week's most acute widening risk from the table for the moment, but a postponement under IRGC coordination is a delay, not a retirement, and a resumed salvo could re-arm it within a day.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'Washington Post / Al Jazeera / Atlantic Council',
      event:
        "Saudi Arabia, Turkey and Pakistan signed the 'Mecca Joint Defence Agreement,' a trilateral mutual-defense pact treating an armed attack on any one as an attack on all three; the parties cast it as defensive, open to other regional states, and the product of nearly a year of talks, signed in Mecca by Mohammed bin Salman, Erdogan and Sharif.",
      summary:
        "Per §3.5.6 the coalition answered the coordinated-attack threat with structure — a formal alliance, including nuclear-armed Pakistan, replacing weeks of ad hoc Gulf restraint.",
      impact:
        "The pact hardens deterrence around Saudi Arabia and can stabilize the Gulf brake, but it also institutionalizes a Sunni-power bloc at the war's periphery and adds a new alliance whose thresholds a future Iranian or Houthi strike could test.",
    },
    {
      id: 5,
      direction: 'neutral',
      importance: 'medium',
      source: 'Trading Economics / straits.live / Times of Israel',
      event:
        "Brent crude firmed about 1.5% to roughly $83.40 and WTI held near $79 as the market weighed a finalized framework against Iran's widened demands and a called-off strike, with the Strait of Hormuz still effectively closed under naval escort; on the seams, a CENTCOM commander met Israel's military chief, the IDF showed restraint in Gaza under the Board of Peace roadmap, and Israeli forces pulled back from a south Lebanon village.",
      summary:
        "Per §3.5.5 the barrel ticked up but stayed in the low $80s — pricing neither a reopening nor a rupture — while the Israel seams offered narrow de-escalatory notes against an unchanged core.",
      impact:
        "A market parked near $83 shows the de-escalation trade is spent and the escalation trade untriggered; a signed reopening pulls Brent toward the $70s, while a Saudi-energy hit or a tanker sinking sends it toward $120 within a session.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS database lists a wider all-cause series: 18 killed · 687 wounded.',
      delta:
        "+0 on the AP/CENTCOM combat series; the US-Iran shooting stayed paused as Trump called off a weekend strike at Gulf allies' request and set talks for Monday; the DoD DCAS all-cause series holds at 18 killed / 687 wounded versus the 17 / 432 combat series the brief tracks, a counting-scope difference and not a confirmed hostile loss; the lone Kuwait death at Ahmad al-Jaber stays denied by CENTCOM and unconfirmed",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series (~96% of wounded returned to duty). The DoD DCAS database holds a wider all-cause tally at 18 killed / 687 wounded since February 28 — non-hostile deaths and every wounded case included — against the narrower combat series the brief tracks. Per §3.5.3 the brief keeps the AP/CENTCOM combat figure as the headline and flags DCAS as a divergence to watch; the 18th DCAS death is unconfirmed as hostile and does not, on its own, trigger Trump's 'bridge or power plant per ship' rule, which is keyed to a verified combat death. The US naval blockade of Iranian ports continued and is now the pivot of Iran's precondition, since Tehran ties a full Hormuz reopening to lifting it and to war-damage compensation; the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved, and a CENTCOM commander met Israel's military chief as the US and Israel kept energy-strike options armed.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta:
        "+0 on the Iran front (Israel not a direct party to the US-Iran exchange); held at its highest readiness while a CENTCOM commander visited and met the IDF chief of staff; a localized Israeli withdrawal in south Lebanon and an IDF pullback in Gaza under the Board of Peace roadmap offered narrow de-escalatory notes",
      status:
        "No new Israeli casualties on the Iran front. Israel held at its highest state of readiness, with the US and Israel still preparing possible strikes on Iranian energy infrastructure and a CENTCOM commander meeting the IDF chief of staff and senior officers. Israel stays outside the US-Iran framework and unbound by the Oman channel, so its readiness keeps a full-scale-campaign option live if the deal claim collapses; the Lebanon gap prior (§3.5.6) carries and sits inside Iran's precondition list. On the seams the day leaned narrowly de-escalatory: Israeli forces withdrew from the south Lebanese village of Zawtar al-Gharbiyah, and a foreign official implementing the Board of Peace roadmap reported some progress with the IDF showing restraint and a pullback in Gaza — even as the underlying disarmament impasse (Hamas refuses to disarm before an Israeli withdrawal; Israel refuses to withdraw without disarmament) stayed unresolved.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; Tehran said the Oman framework was finalized, widened its reopening demands to include war-damage compensation, sanctions relief and frozen-asset release, again denied a US deal to 'split' the strait, and said reaching Khamenei stays 'very difficult'",
      status:
        "No updated official Iranian toll issued on Day 163. The Qeshm Island deaths — a couple and their child — and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. Iran said the Oman framework was 'finalized' while widening its reopening conditions to the blockade, war-damage compensation, an end to sanctions and the release of frozen assets, and its security-council secretary said the strait would 'never fully reopen' until Washington 'corrects its behavior.' The IAEA has run no verification since February 28 and remains locked out of Isfahan; a little more than 200 kg of 60% HEU (ISIS puts the produced 60% stock at ~440.9 kg, with 184.1 kg at 20%) stays unverified and likely at Isfahan, with ISIS flagging enough HEU for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        'Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA, of which Kuwait 10 killed / 115 injured and Saudi Arabia 11 civilians injured (Houthi attack, Aug 7) · Lebanon source-split: Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129 · Hormuz maritime toll ~17 ships damaged / 7 abandoned / 2 captured / ~12 seafarers killed or missing',
      delta:
        "No confirmed new deaths across Iraq, the Gulf, Lebanon or the maritime front; the Islamic Resistance in Iraq postponed its threatened strike on Saudi Arabia and the Houthis struck Saudi-backed forces inside Yemen without a new confirmed hit on Saudi soil; Saudi Arabia, Turkey and Pakistan signed the Mecca mutual-defense pact",
      status:
        "No confirmed new deaths landed across Iraq, the Gulf, Lebanon or the maritime front on Day 163. The threatened two-front assault on Saudi Arabia did not materialize: the Islamic Resistance in Iraq postponed its response and the Houthis kept to their southern lane, striking Saudi-backed forces inside Yemen and vowing further escalation but adding no new confirmed strike on Saudi soil (Critical Threats, Al Jazeera). Saudi Arabia, Turkey and Pakistan signed the 'Mecca Joint Defence Agreement,' a mutual-defense pact answering the coordinated-attack threat. The cumulative Hormuz-crisis maritime toll holds at roughly 17 merchant ships damaged, seven abandoned, two captured and about a dozen seafarers killed or missing; Hormuz stays effectively closed under naval escort, and a laden-tanker sinking or a crew death remains the tell most likely to reprice oil and trigger Trump's rule. Kuwait holds 10 killed / 115 injured; Iraq holds 148+ KIA / 402+ WIA; Saudi Arabia holds 11 civilians injured from the Aug 7 Houthi attack; Lebanon stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129).",
    },
  },
  exec:
    "Day 163 firmed the Hormuz deal's mechanics while widening its price. Iran said the framework of its Oman shipping-route agreement was 'finalized' and awaited only Supreme Leader Mojtaba Khamenei's sign-off, and Oman called the talks 'positive and constructive' (ABC News, CNN). But on the same day Foreign Minister Araghchi said reopening the strait 'by itself' would not end the crisis and hinged on 'other conditions and compensation for the US violation' of the June memorandum — Iran's public demands now stretching to lifting the blockade, war-damage compensation, an end to sanctions and the release of frozen assets (Fortune, Press TV). Iran's security-council secretary said the strait would 'never fully reopen' until Washington 'corrects its behavior,' and Tehran denied asking Trump to hold fire or agreeing to 'split' the waterway (Times of Israel). Trump, aboard Air Force One, said he had called off a weekend strike at Gulf allies' request, called a deal 'imminent,' and set talks to resume Monday; Vice-President Vance said Iran was 'hurting' and had told the US it had 'no plans' to impose tolls (ABC News). Per §3.5.3 the logistics neared done as the politics widened — a finalized framework set against a lengthening demand list Washington has refused. On the Gulf front the threatened two-front assault did not land: the Islamic Resistance in Iraq postponed its response, leaving the northern axis dark even as the Houthis vowed 'escalation with escalation' (Critical Threats). Saudi Arabia, Turkey and Pakistan signed a mutual-defense pact in Mecca (Washington Post). Brent firmed about 1.5% to roughly $83.40 (Trading Economics). Direction holds mixed; seven-day and spillover risk hold critical; the thirty-day ceasefire probability holds at 13.",
  implications: [
    {
      title: "'Finalized' framework, lengthening demands — the last mile moves the wrong way",
      body:
        "Day 162's route 'reached' with Oman became, on Day 163, a 'finalized' framework awaiting only Khamenei's signature — the most advanced the diplomacy has been, and Oman calls the talks 'positive and constructive' (ABC News, CNN). Yet the same day widened the terms rather than closing them. Foreign Minister Araghchi said an understanding on regulating traffic 'does not amount to reopening,' that the sides were 'very close to the final result,' but that reopening remained 'subject to other conditions and compensation for the US violation' of the June MoU (Fortune, Press TV). Tehran's enumerated demands now run to lifting the naval blockade, compensation for war damages, an end to sanctions and the release of frozen assets — and its security-council secretary said the strait would 'never fully reopen' until Washington 'corrects its behavior.' Analytical judgment: per §3.5.3 a finalized framework paired with a lengthening precondition list is progress on the track Iran controls — the Oman logistics — and retreat on the track Washington must accept, the political price. Trump narrated the mirror image — a deal 'imminent,' a weekend strike called off at Gulf allies' request, talks resuming Monday — while Vance said Iran had told the US it had 'no plans' to impose tolls, a claim Tehran's own demand list undercuts (ABC News). Iran denied asking Trump to hold fire and denied any deal to 'split' the strait (Times of Israel). Two capitals, one framework, incompatible descriptions: the Day 50 announced-ahead-of-verification pattern, now with the price tag rising as the signature nears.",
    },
    {
      title: "The two-front assault doesn't land — but the coalition hardens into a bloc",
      body:
        "The threatened synchronized assault on Saudi Arabia did not materialize on Day 163. The Islamic Resistance in Iraq announced it would postpone its response to the late-July US-Saudi strikes on militia positions, leaving the northern axis dark, while the Houthis kept to their southern lane — striking Saudi-backed forces inside Yemen and vowing to 'respond to escalation with escalation' (Critical Threats, Al Jazeera). Analytical judgment: per §3.5.6 a postponed northern response is a delay, not a retirement, of the two-front threat the brief has tracked — the single event most able to widen the war and reprice oil remains a synchronized north-south salvo on Saudi ports, airports or energy nodes, and it is deferred, not defused. The counter-move was structural: Saudi Arabia, Turkey and Pakistan signed the 'Mecca Joint Defence Agreement,' a mutual-defense pact treating an attack on one as an attack on all three (Washington Post, Atlantic Council). Cast as defensive and open to other states, it nonetheless hardens a Sunni-power bloc — including nuclear-armed Pakistan — at the war's periphery, a hedge that reads as much against a wider Iranian reach as against any single actor. The Gulf brake on Washington held for another day, but it now rests on a formal alliance rather than ad hoc restraint. Whether Monday's talks or a resumed Houthi salvo arrives first will decide whether the pact deters the second front or merely institutionalizes the standoff.",
    },
    {
      title: "Taiwan: a finalized framework Tehran still gates",
      body:
        "For Taipei the ledger did not move, but its logic sharpened. Per §3.5.10 there was no Taiwan-specific development on Day 163; the corridor whose framework Iran 'finalized' is the same temporary, Iranian-water-routed, coordination-center-managed lane — and Tehran now openly conditions its full opening on US compensation, sanctions relief and a lifted blockade (Fortune, Press TV). Analytical judgment: per §3.5.5 that is the opposite of the UNCLOS free navigation Qatari LNG relies on. Taiwan is 99% import-dependent for natural gas, and about a third of its 23.6 Mt of LNG transits Hormuz, nearly 8 Mt of it Qatari (CSIS, IFRI). Brent's firming to about $83.40 keeps the crude bill elevated but stable; the exposure the war actually threatens is the molecule, not the price — and a strait whose reopening Tehran gates on a four-item political bill is a standing conditionality over Qatari cargoes, not a restored waterway. The realized damage is unchanged: no Qatari or UAE cargoes in April or May, roughly 17% of Qatar's export capacity cut at Ras Laffan, US LNG backfill at a premium, against about eleven days of gas cover versus roughly 120 days of oil. A 'finalized framework' that still awaits an unreachable Supreme Leader and a US concession Washington has refused does not shorten Taipei's exposure; it lengthens the list of things that must go right first.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider counting scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. The 18th DCAS death is unconfirmed as hostile and does not trigger Trump's rule. The blockade — now tied to Iran's compensation demand — continues; $67B supplemental and 50-48 war-powers rebuke unresolved; a CENTCOM commander met Israel's military chief.",
    israel:
      "No new Israeli casualties on the Iran front; highest readiness held and a CENTCOM commander met the IDF chief. Narrow de-escalatory notes on the seams — an Israeli withdrawal from a south Lebanon village and an IDF pullback in Gaza under the Board of Peace roadmap — against an unresolved disarmament impasse. Israel stays outside the Oman channel; the Lebanon gap prior sits inside Iran's precondition list.",
    iran:
      "No fresh official MOH toll; Qeshm civilian deaths and destroyed Jask plant carry from Day 154. HRANA 3,636+; Foundation of Martyrs ~3,468; MOH ~3,559 / 27,400+; US/Israeli est. 6,000+. Tehran called the Oman framework 'finalized' while widening demands to compensation, sanctions relief and frozen assets; reaching Khamenei stays 'very difficult.' IAEA no verification since Feb 28; HEU likely at Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "No confirmed new deaths. The two-front Saudi assault did not land — the Iraqi militia axis postponed, the Houthis stayed in Yemen and vowed more; Saudi Arabia, Turkey and Pakistan signed the Mecca mutual-defense pact. Maritime toll ~17 ships damaged / 7 abandoned / 2 captured / ~12 seafarers killed or missing; Hormuz effectively closed. Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7); Lebanon source-split.",
  },
};

export default data;
