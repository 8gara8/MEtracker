import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Thursday added the kinetic-option track to Wednesday's extended-blockade plan. Per Axios, CENTCOM Adm. Brad Cooper and Joint Chiefs Chairman Gen. Dan Caine briefed Trump on a 'short and powerful' wave of strikes on Iran, an option for US ground forces to seize part of the Strait of Hormuz, and a special-forces concept to secure Iran's HEU stockpile. Trump told Axios he sees the blockade as 'somewhat more effective than the bombing' and as his 'primary source of leverage,' but is keeping kinetic options live. Khamenei: 'Iran will manage the Strait of Hormuz; foreigners have no place here.' Pezeshkian Persian Gulf National Day: blockade 'doomed to failure' and an 'extension of military operations.' Senate failed 50-47 to advance the War Powers Resolution, Collins crossing for the first time. The four-mediator channel survives only because Pakistan's Friday timeline still operates and Pakistan's six-route land corridor structurally relieves Iran's economic compression.",
      risk7d:
        "Brent crude futures touched a wartime intraday high of $126.41 — the highest print in four years — before settling lower in the $110-115 range as volumes thinned; eight-session up-trend intact. The kinetic option is now a documented presidential decision input. Hegseth Senate Armed Services hearing: ceasefire 'pauses' the 60-day War Powers clock; calls Democratic critics 'defeatists from the cheap seats.' Pentagon disclosed war cost ~$25B. Bloomberg: rial down 12% in a week (~1.81M/USD); CBI inflation 65.8% YoY. USS Peterson and Murphy de-mining ops Day 7 under Adm. Cooper; Hormuz transit ~5 ships/day vs. ~140 pre-war; Goldman: exports at ~4% of normal. Israel reportedly asks Trump for 2-3 week Lebanon-track talks deadline; mid-May trigger for expanded campaign.",
      spillover:
        "IDF executed the largest single-day Hezbollah airstrike wave since the April 16 ceasefire — 23 southern Lebanon villages evacuation warnings. Sgt. Ben Hamo killed at Qantara by Hezbollah explosive drone; female officer + male NCO moderately wounded at Bint Jbeil — Hezbollah claimed two tanks. Lebanon NNA reports 32 killed across south Lebanon Thursday; Aoun condemned 'Israeli ceasefire violations.' Pakistan published the Transit of Goods through Territory of Pakistan Order — six overland routes from Karachi via Quetta and Zahedan opened for Iran-bound cargo. Lebanon clock has decoupled from Iran clock entirely; Pakistan's six routes are structural fragmentation of the blockade architecture and reframe Pakistan from pure mediator to mediator-plus-trade-partner.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Axios / JPost / CNN / TOI / CNBC',
      event: 'CENTCOM Cooper and Caine brief Trump on "short and powerful" Iran strike package; Hormuz-seizure variant; HEU special-forces option',
      summary:
        "Per Axios and Pentagon-aligned reporting, CENTCOM Adm. Brad Cooper and Joint Chiefs Chairman Gen. Dan Caine briefed President Trump Thursday on a 'short and powerful' wave of strikes on Iran — likely Hormuz-related infrastructure — alongside a US ground-forces option to seize part of the Strait of Hormuz and reopen it militarily, and a special-forces operation to secure Iran's HEU stockpile. Hegseth and Caine first testified at a Senate Armed Services hearing in the morning; the White House briefing followed. Trump told Axios he sees the naval blockade as 'somewhat more effective than the bombing' and as his 'primary source of leverage,' but would consider military action 'if Iran still won't cave.'",
      impact:
        "Reframes the Wednesday extended-blockade plan from a single instrument into a two-instrument squeeze: blockade as the patient instrument, strike package as the impatient one. The Hormuz seizure variant converts Iranian Hormuz command-and-control from negotiating chip into immediate liability. Analytical judgment: Pakistan's Friday revised proposal must embed both nuclear language Trump will accept and Hormuz language pre-empting the seizure option. Probability moves 25 → 22; Pakistan's six-route land corridor (Event 4) is the structural offset preventing collapse to ~18.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'CNN Business / CNBC / Al Jazeera / Deutsche Bank / Goldman Sachs',
      event: 'Brent crude touches wartime intraday $126.41 — highest in four years — on CENTCOM briefing; settles back in $110-115 range',
      summary:
        "Brent crude surged overnight Thursday to touch $126.41 — the wartime high and highest print in four years — on the CENTCOM briefing report. The most actively traded contract reached as high as $114.70 for July delivery before falling back toward $107 and settling near $110.40. Deutsche Bank named the Axios CENTCOM scoop the main catalyst. Goldman Sachs estimates Hormuz exports at ~4% of normal. Eight-session uptrend intact.",
      impact:
        "The $126.41 intraday is the kinetic-tail-risk boundary now priced into the curve — the upper-bound the CENTCOM Hormuz-seizure variant represents. Citi $150-by-end-June (Wednesday's operating curve) sits inside a wider distribution: floor ~$115, central case Citi $150, kinetic-tail $130-$170. The settlement back-off is the market discounting the Trump 'more effective than bombing' framing relative to the briefing. Energy-infrastructure clock tipped from acute to acute-with-kinetic-tail-risk.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'TOI / France 24 / L\'Orient Today / CNN / Israeli MOD',
      event: 'Israel publicly braces for Iran war to resume next week; Katz: IDF "ready" to attack pending US permission, "age of darkness and stone"',
      summary:
        "TOI and France 24 reported Israel is 'bracing for the Iran war to resume as early as next week.' Defense Minister Israel Katz publicly said the IDF is 'ready to resume attacks on Iran' and is 'awaiting permission from the US,' adding the attacks would 'return Iran to the age of darkness and stone.' Israel reportedly asked Trump for a 2-3 week deadline on Lebanon-track talks before greenlighting an expanded campaign there, with a mid-May trigger date pencilled in. Netanyahu 'two missions left' and Aoun-Qassem rupture from Day 60 carry.",
      impact:
        "Converts Wednesday's Likud-minister Dichter cabinet-level dissent into Israeli-government-level expectation that Iran kinetic phase resumes inside a one-week window. Operates orthogonally to the Pakistan Friday channel: a four-mediator outcome before Israeli action requires Trump to actively block Israel rather than passively permit operational tempo. Israeli posture and US kinetic-option posture now operate as parallel pressure tracks on Tehran, with Pakistan's Friday timeline as the only diplomatic counterweight before either trigger fires.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'pivotal',
      source: 'Al Jazeera / Organiser / Pakistan PMO / Karachi port',
      event: 'Pakistan publishes Transit of Goods Order — six overland routes opened for Iran-bound cargo, first structural escape valve from Hormuz blockade',
      summary:
        "Pakistan published the Transit of Goods through Territory of Pakistan Order April 30, opening six overland routes for cargo destined for Iran with immediate effect. Thousands of containers stranded at Karachi port due to the US Hormuz blockade now have a Quetta- and Zahedan-corridor land path. Al Jazeera framed the move as Islamabad relieving regional commercial pressure; Indian-aligned Organiser framed it as 'Did Pakistan betray Trump?' Iranian FM Araghchi visited Islamabad during the same window for talks with Sharif and army chief Munir.",
      impact:
        "First material breach of the Hormuz blockade architecture from a non-Russia/China actor — and the actor in question is the four-mediator-channel hub. Materially relieves the rial-cohesion pressure track that was Wednesday's bilateral-squeeze theory; Tehran's economic survival horizon now extends past Trump's blockade timeline. Reframes Pakistan from pure mediator to mediator-plus-trade-partner. Friday revised proposal can embed harder Iranian terms because the economic-collapse track has loosened.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: 'PressTV / Gulf Today / Pravda USA / IRIB',
      event: 'Khamenei: "Iran will manage the Strait of Hormuz; foreigners have no place here"; Pezeshkian Persian Gulf National Day: blockade "doomed to failure"',
      summary:
        "On Persian Gulf National Day Thursday, Iranian Supreme Leader Khamenei was carried by Pravda USA via IRIB stating that 'Iran will manage the Strait of Hormuz; foreigners have no place here.' President Pezeshkian on the same occasion called the US naval blockade 'doomed to failure' and 'an extension of military operations against a nation paying the price for its resistance and independence' (English X post); Pezeshkian earlier said Iran 'will not enter imposed talks under pressure, threats, and blockade.' IRNA April 29 'no clear prospect of fruitful negotiations' carries.",
      impact:
        "Locks Tehran's posture against the bilateral squeeze at Supreme Leader and Presidential level. Khamenei's strait-management line forecloses any Hormuz-internationalization architecture in the four-mediator framework; Pezeshkian's 'extension of military operations' framing is the legal predicate for treating any future strike as response-in-kind. Friday revised proposal must therefore decouple the nuclear track from the Hormuz track architecturally — Hormuz will not deliver Iranian fees or sovereignty concessions.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'high',
      source: 'TOI / WaPo / JPost / NNA / IDF',
      event: 'IDF executes largest single-day Hezbollah airstrike wave since April 16; 23 evacuation warnings; Sgt. Ben Hamo KIA; 32 reported dead in southern Lebanon',
      summary:
        "The IDF Thursday executed the largest single-day airstrike wave on Hezbollah since the April 16 ceasefire — issuing evacuation warnings for 23 southern Lebanon villages. Hezbollah launched two explosive drones at troops in Qantara; one was intercepted, the second struck near forces, killing Sgt. Ben Hamo and wounding another soldier. A separate Hezbollah explosive drone moderately wounded a female officer and male NCO at Bint Jbeil — Hezbollah claimed two tanks. Lebanon NNA reports 32 killed in Israeli air strikes across south Lebanon Thursday; Aoun condemned 'Israeli ceasefire violations.'",
      impact:
        "First IDF KIA on the Lebanon track since April 16. Lebanon clock decoupled from Iran clock — operating on its own 2-3 week mid-May trigger horizon per the Israeli Lebanon-deadline ask. NNA's 32 KIA print is the largest single-day Lebanese casualty figure since April 16; the 23-village evacuation envelope is operational depth-expansion. Hezbollah-IDF kinetic process and Aoun-track political process operate on orthogonal clocks; absent US re-intervention, kinetic ceiling drifts toward Beirut-strike scenario in the mid-May window.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'high',
      source: 'Foreign Policy / France 24 / WaPo / ABC / Senate Armed Services',
      event: 'Hegseth Senate hearing: ceasefire "pauses" 60-day War Powers clock; "defeatists from the cheap seats"; Senate fails to advance WPR 50-47, Collins crosses; Pentagon $25B war cost',
      summary:
        "Defense Secretary Hegseth and Joint Chiefs Chairman Caine testified at Senate Armed Services Thursday. Hegseth told the Senate the ceasefire 'pauses' the 60-day War Powers Resolution clock; called Democratic critics 'defeatists from the cheap seats' and 'reckless naysayers'; said 'the biggest adversary we face are the reckless naysayers.' Senate failed to advance the Iran War Powers Resolution 50-47, GOP Sen. Collins for the first time voting with Democrats. Pentagon disclosed war cost ~$25B. GOP Sen. Murkowski announced she will introduce an AUMF the week of May 11 if administration does not present a credible plan.",
      impact:
        "Confirms Wednesday's Cabinet-posture-spread resolution toward Trump at the constitutional-political level: Congress will not constrain the executive in the next two weeks. Hegseth's 'ceasefire pauses the clock' framing is the legal theory under which the administration retains military options without Congressional authorization. Collins' vote and Murkowski's May-11 AUMF announcement are residual constraint indicators that do not bind in the Friday revised-proposal window. Political-will clock locked against Tehran; Tehran cannot count on US domestic constraint as a diplomatic offset.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 395',
      delta: '+0 KIA / +0 WIA',
      status:
        "Trump received CENTCOM Cooper-Caine briefing Thursday on 'short and powerful' Iran strike package, Hormuz-seizure variant, and HEU special-forces option. Trump tells Axios blockade is 'somewhat more effective than bombing' but keeps kinetic options live. Hegseth Senate hearing: ceasefire 'pauses' 60-day War Powers clock. Senate fails to advance WPR 50-47 (Collins crosses). Pentagon discloses ~$25B war cost. USS Peterson/Murphy de-mining ops Day 7. Hormuz transit ~5 ships/day vs. ~140 pre-war; Goldman: exports ~4% of normal.",
    },
    israel: {
      cumulative: 'KIA: 40 (24 civilians + 16 soldiers, incl. Sgt. Ben Hamo Thursday at Qantara) · WIA: 6,008',
      delta: '+1 IDF KIA (Sgt. Ben Hamo) / +2 IDF WIA reported in Thursday window',
      status:
        "IDF executes largest single-day airstrike wave on Hezbollah since April 16 ceasefire — 23 villages evacuation warnings. Sgt. Ben Hamo killed by Hezbollah explosive drone at Qantara; female officer + male NCO moderately wounded at Bint Jbeil. Israel reportedly asks Trump for 2-3 week Lebanon-track deadline; mid-May expanded-campaign trigger. Katz: IDF 'ready' to resume Iran attacks pending US permission, 'age of darkness and stone' framing. Netanyahu 'two missions left' carries.",
    },
    iran: {
      cumulative: "Iran LMO 'nearly 3,400' KIA · HRANA April 7: 3,636+ (1,701 civilians, 1,221 military, 254+ children) · Hengaw 6,620+ military · 3.2M displaced.",
      delta: '+0 KIA / +0 WIA reported in Thursday window',
      status:
        "Khamenei: 'Iran will manage the Strait of Hormuz; foreigners have no place here.' Pezeshkian Persian Gulf National Day: blockade 'doomed to failure' and 'extension of military operations.' Bloomberg: rial down 12% in a week (~1.81M/USD). CBI inflation 65.8% YoY. IMF: 6.1% 2026 GDP contraction, 68.9% inflation. Pakistan opens 6 overland routes via Quetta/Zahedan for Iran-bound cargo. Araghchi visited Islamabad during same window.",
    },
    other: {
      cumulative: 'Lebanon: 2,310+ MOH (NNA reports +32 Thursday lifting toward 2,342+ pending MOH confirmation) · Iraq: 99+ · Gulf states: 32+ · UAE: 11.',
      delta: '+32 Lebanon NNA-reported KIA in Thursday airstrike wave',
      status:
        "Pakistan publishes Transit of Goods through Territory of Pakistan Order Thursday — six overland routes opened for Iran-bound cargo; first structural escape valve from US Hormuz blockade. Lebanon NNA reports 32 killed Thursday; Aoun condemns 'Israeli ceasefire violations.' GCC SG Albudaiwi rejection of Iranian Hormuz measures and fees from Wednesday carries. UAE OPEC/OPEC+ exit effective May 1. Wang Yi 'might over right' to Baerbock from Wednesday carries; trilateral visible at principal level.",
    },
  },
  exec:
    "Thursday added the kinetic-option track to Wednesday's extended-blockade plan. Per Axios, CENTCOM Adm. Brad Cooper and Joint Chiefs Chairman Gen. Dan Caine briefed Trump on a 'short and powerful' wave of strikes on Iran, an option for US ground forces to seize part of the Strait of Hormuz, and a special-forces concept to secure Iran's HEU stockpile. Brent crude touched a wartime intraday high of $126.41 — highest in four years — before settling in the $110-115 range. Pakistan published the Transit of Goods through Territory of Pakistan Order, opening six overland routes for cargo destined for Iran. Khamenei: 'Iran will manage the Strait of Hormuz; foreigners have no place here.' Pezeshkian: blockade 'doomed to failure' and 'extension of military operations.' IDF executed largest single-day Hezbollah airstrike wave since April 16 — 23 evacuation warnings, Sgt. Ben Hamo killed and two wounded, 32 reported killed in southern Lebanon per NNA. Hegseth told the Senate the ceasefire pauses the 60-day War Powers clock; Senate failed 50-47 with Collins crossing. Pentagon disclosed war cost ~$25B. Analytical judgment: 30-day ceasefire probability moves 25 → 22.",
  implications: [
    {
      title: 'The Cooper-Caine kinetic briefing reframes Wednesday\'s "extended blockade" from single-instrument to two-instrument squeeze',
      body:
        "Wednesday Trump told Axios the blockade was the leverage; Thursday Trump received a CENTCOM briefing on a 'short and powerful' wave of strikes, a Hormuz seizure option, and a special-forces option to secure Iran's HEU stockpile. The two postures are not contradictory — they bracket Iran's response space. The blockade is the patient instrument; the strike package is the impatient one. Trump's Wednesday 'more effective than the bombing' framing means the kinetic option is reserved as the consequence of Iranian non-capitulation rather than the next move, but the briefing changes Tehran's calculation: intransigence under blockade now risks both rial-driven regime-cohesion damage AND infrastructure damage from a documented strike option. The Hormuz-seizure variant is the one that worries the four-mediator channel most — it converts Iranian command-and-control of the strait from negotiating chip into immediate liability. Khamenei's Thursday 'Iran will manage the Strait of Hormuz; foreigners have no place here' is the explicit Tehran refusal. Pakistan's Friday revised proposal must now embed both nuclear language Trump will accept and Hormuz language that pre-empts the seizure option. Probability moves 25 → 22; Pakistan's land-corridor opening is the structural offset preventing collapse to ~18.",
    },
    {
      title: "Pakistan's six overland routes converts Islamabad from pure mediator to mediator-plus-trade-partner — and structurally fragments the blockade architecture",
      body:
        "The Transit of Goods through Territory of Pakistan Order is the first material breach of the Hormuz blockade architecture from a non-Iranian, non-Russia/China actor. Six overland routes from Karachi (where thousands of containers are stranded) into Iran via Quetta and Zahedan corridors materially relieves the rial-cohesion pressure track that was Wednesday's bilateral-squeeze theory. Tehran's economic clock now extends; the financial-collapse track does not break the regime in the four-mediator-channel timeframe Trump's blockade calculus assumed. The trade-off for Pakistan: Islamabad now has commercial skin in Iranian survival, complicating the pure-mediator role; the Organiser's 'Did Pakistan betray Trump?' framing is the US-side allied-cohesion strain. Araghchi's Islamabad visit during the same window coordinated the corridor with the Friday revised-proposal track. Friday's revised proposal can embed harder Iranian terms because Tehran's economic survival horizon has lengthened past Trump's blockade timeline.",
    },
    {
      title: 'Taiwan / CPC procurement: Brent $126 wartime intraday is the kinetic-tail-risk boundary now priced into the curve',
      body:
        "For Taiwan and CPC, Thursday's Brent intraday $126.41 is the kinetic-tail-risk boundary the back-month had been hedging since Wednesday's $118 close — and the CENTCOM Hormuz-seizure variant is the upper-bound that print represents. The Citi $150-by-end-June scenario (Wednesday's operating curve) now sits inside a wider distribution: structural floor at $115 (OPEC fragmentation + extended blockade), central case Citi $150, kinetic-tail $130-$170 on the strikes-plus-seizure variant. CPC procurement should treat the Pakistan land corridor as a downside relief signal — it lengthens the conflict's financial-track horizon, delays Iranian forced concession, and therefore extends the curve's structural-supply-damage timeline. MOEA's no-Hormuz-through-October scenario remains central case; CPC coal-rotation through summer holds with residual-LNG-procurement floor moving up. TSMC 2026 CapEx pricing pass-through operates above $115 floor with kinetic-tail $170 as procurement-stress-test ceiling. Analytical judgment: even a Day 70 ceasefire would not restore prior cost structure; absent ceasefire the kinetic option pushes near-term volatility floor higher.",
    },
  ],
  casualtyNotes: {
    us: "No new KIA. CENTCOM Cooper-Caine briefing on 'short and powerful' Iran strike package. Trump: blockade 'somewhat more effective than the bombing.' Hegseth Senate hearing: ceasefire 'pauses' 60-day clock. Senate fails to advance WPR 50-47; Collins crosses. Pentagon $25B disclosure. USS Peterson/Murphy de-mining Day 7. Hormuz transit ~5/day vs. ~140 pre-war.",
    israel:
      "Sgt. Ben Hamo killed by Hezbollah explosive drone at Qantara — first IDF KIA on Lebanon track since April 16. Officer + non-com moderately wounded at Bint Jbeil. IDF largest single-day Hezbollah airstrike wave since ceasefire — 23 villages evacuation warnings. Israel asks Trump for 2-3 week Lebanon deadline; mid-May expanded-campaign trigger.",
    iran:
      "No new losses reported. Khamenei: 'Iran will manage the Strait of Hormuz; foreigners have no place here.' Pezeshkian: blockade 'doomed to failure.' Bloomberg: rial −12% in a week (~1.81M/USD). CBI inflation 65.8% YoY. Pakistan opens 6 overland routes via Quetta/Zahedan. Araghchi visited Islamabad during same window.",
    other:
      "Pakistan publishes Transit of Goods Order — six overland routes for Iran-bound cargo; first structural escape valve from blockade. Lebanon NNA reports 32 killed Thursday; Aoun condemns 'Israeli ceasefire violations.' GCC SG Albudaiwi rejection from Wednesday carries. UAE OPEC/OPEC+ exit effective May 1. Wang Yi 'might over right' to Baerbock carries.",
  },
};

export default data;
