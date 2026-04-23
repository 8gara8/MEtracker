import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'conditional',
    spillover: 'conditional',
    rationale: {
      direction:
        "Iran executed its telegraphed reprisal overnight — IRGC Navy seized MSC Francesca and Epaminondas, fired on Euphoria — while the White House declined to call it a violation, producing a controlled tit-for-tat within the indefinite-truce frame that flips the direction indicator from de-escalating back to mixed.",
      risk7d:
        "Leavitt's narrow definition of 'ceasefire violation' (US or Israeli hulls only) has opened a harassment lane over non-US commercial shipping that Iran will probably keep testing; without a new forcing function, the 7-day window is volatile around specific incidents rather than structurally critical.",
      spillover:
        'Hezbollah drones continued targeting IDF troops on Day 8 of the 10-day Lebanon truce with Thursday Washington talks pending; MSC/Greek/Panamanian/Liberian flag-state interests pull European maritime capitals into the frame, distributing spillover risk across multiple venues rather than concentrating it.',
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'Lloyd\'s List / IRGC / Washington Post',
      event: 'IRGC seizes MSC Francesca and Epaminondas in Hormuz',
      summary:
        'IRGC Navy gunboats fired on the Liberia-flagged Epaminondas (heavy bridge damage from gunfire and RPGs per UKMTO), seized it and the Panama-flagged MSC Francesca, and engaged a third vessel (Euphoria) which resumed sailing. Both seized ships escorted to the Iranian coast; IRGC claimed MSC Francesca was "linked to Israel" without evidence.',
      impact:
        "First Iranian kinetic reprisal since Touska. Pulls MSC (Swiss-Italian), Greece, Panama, and Liberia into the diplomatic frame as flag states/operators and turns a US-Iran bilateral into a freedom-of-navigation problem for the UK-led 40-nation coalition — which is exactly the diffusion of pressure Iran needed.",
    },
    {
      id: 2,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'White House / Fox News / CNN',
      event: "Leavitt: seizures 'not' a ceasefire violation because not US/Israeli",
      summary:
        '"No, because these were not US ships, these were not Israeli ships. These were two international vessels," Press Secretary Leavitt told Fox. Trump separately told Fox there is "no time frame" on the war and denied midterms drive his decisions; Leavitt confirmed there is no "firm deadline" for an Iranian proposal.',
      impact:
        "The most consequential sentence of the day. Narrows the US definition of breach to direct attacks on US or Israeli assets, tacitly licensing Iranian harassment of non-US commercial traffic. Combined with 'no time frame,' this is an explicit US choice to treat the indefinite truce + blockade as the steady-state — Iran has priced this into its operational choice.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'Press TV / NPR / Al Jazeera',
      event: "Pezeshkian: blockade is main obstacle to 'genuine negotiations'",
      summary:
        'President Pezeshkian said Iran "welcomes dialogue" but "breach of commitments, blockade and threats are (the) main obstacles to genuine negotiations." Ghalibaf adviser Mohammadi called the blockade "no different from bombardment and must be met with a military response." Araghchi repeated the "act of war" framing to Russian FM Lavrov in Monday\'s call per SNN.',
      impact:
        'Iran\'s civilian track (Pezeshkian dialogue line) and military track (IRGC seizures, adviser rhetoric) are now publicly separated. Trump\'s demand for a "unified proposal" is structurally unsatisfiable because the regime authoring it is visibly disunified — the demand has effectively become an indefinite suspension condition both capitals can live with.',
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'CENTCOM / DoD / TWZ',
      event: 'Adm. Cooper: US forces "rearming, retooling, adjusting TTPs" in ceasefire',
      summary:
        'CENTCOM commander Adm. Brad Cooper, appearing alongside SecDef Hegseth, said US forces are "rearming, retooling, and adjusting our tactics, techniques and procedures" during the ceasefire window. CENTCOM declined to confirm Wednesday seizure incidents in real time but reaffirmed global reach.',
      impact:
        'Operationally this is an admission that the truce is functioning as a mutual production and adaptation cycle rather than a de-escalation. Iran has equivalent access: satellite imagery continues to show missile-base clearance. The next kinetic round, if it comes, will be better-resourced on both sides — the truce is raising the ceiling of re-escalation, not lowering it.',
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: 'CNBC / Lloyd\'s List',
      event: 'Brent closes $101.91 (+3.5%); strait transit "light" on Wednesday',
      summary:
        "Brent closed April 22 at $101.91 (+3.5% from Tuesday's $98.48; +15% from Tuesday's ~$88 after-hours low). WTI at $89.45. CNBC reports Hormuz transit was 'light' Wednesday as shippers face an escalating security situation. Hull insurers and charterers are re-pricing; tanker traffic remains depressed.",
      impact:
        "Markets erased the extension rally once the seizures hit — the verdict is that the indefinite truce is not a de-escalation but a continuation of the blockade-retaliation loop with the Wednesday forcing function removed. Trafigura's 'billion barrels lost' clock resets; Taiwan LNG insurance-repricing effect propagates across June–August demand window.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'medium',
      source: 'Times of Israel / Haaretz / Al Jazeera',
      event: 'Israel-Lebanon round 2 set for Thursday; Hezbollah drone strike',
      summary:
        'Second round of direct Israel-Lebanon talks in Washington Thursday, led by Ambassador Leiter (IL) and Karam (LB). Lebanon seeking one-month truce extension at Berri request. Hezbollah drone targeted IDF troops in south Lebanon overnight; Hezbollah MP Fadlallah: "We will bring down this yellow line through the resistance."',
      impact:
        "Day 8 of the 10-day Lebanon truce. Thursday's talks are the hinge: Lebanese demand for a month extension plus Hezbollah kinetic activity plus Israeli 8km buffer posture plus Netanyahu's 'war not yet ended' framing compound the Lebanon-gap prior. Any concession on buffer zone cascades into Israel–Iran frame via IDF reputational spend.",
    },
    {
      id: 7,
      direction: 'mixed',
      importance: 'medium',
      source: 'CNN / Euronews / Time',
      event: 'Regime-cohesion picture: Mojtaba Khamenei absent, IRGC gating access',
      summary:
        "CNN and Euronews analyses this week: Supreme Leader Mojtaba Khamenei unseen since succession, reportedly incapacitated by the strike that killed his father. IRGC commander Ahmad Vahidi operating as decisional axis; IRGC blocking Pezeshkian appointments and gating communications to Khamenei. Ghalibaf delivered a cohesion address after Araghchi came under domestic attack.",
      impact:
        'Converts Trump\'s rhetorical "seriously fractured" framing into a sourced operational picture. The fracture is real but functional — the IRGC-Khamenei consensus process can absorb Araghchi\'s dialogue posture and the IRGC\'s maritime reprisals simultaneously. Undermines every negotiating architecture that assumes a single Iranian counterparty; argues for Beijing\'s continued reticence.',
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat, incl. 6 KC-135 crew) · WIA: 395 (380+ cumulative + 15 Prince Sultan AB)',
      delta: '+0 KIA / +0 WIA',
      status:
        'CENTCOM Adm. Cooper confirms US forces "rearming, retooling, adjusting TTPs" during ceasefire. USS Abraham Lincoln CSG in Gulf of Oman enforcing blockade; USS Ford CSG northern Red Sea (~300-day deployment); USS Bush transiting around Africa toward Arabian Sea. White House explicitly declines to call MSC Francesca/Epaminondas seizures a ceasefire violation.',
    },
    israel: {
      cumulative: 'KIA: 38 (23 civilians + 15 soldiers in Lebanon) · WIA: 6,000+ (per Alma). 393+ Iranian attack waves absorbed cumulatively.',
      delta: '+0 KIA / +0 WIA (Hezbollah drone targeting ongoing)',
      status:
        "Hezbollah drone targeted IDF troops in southern Lebanon overnight — Day 8 of 10-day truce. Israel-Lebanon direct talks Thursday Washington (Leiter + Karam). Maintains up-to-8km buffer in south Lebanon. Netanyahu: 'war not yet ended.' Not party to US-Iran extension; not addressed in Leavitt 'not a violation' frame.",
    },
    iran: {
      cumulative: "Iran Legal Medicine Organization: 'nearly 3,400' KIA (updated April 22, from 3,375 on April 20). HRANA: 3,636+ killed — 1,701 civilians, 1,221 military, 714 unclassified (April 7). Hengaw: 6,620+ military KIA (April 8). 383 children under 18; 3.2M displaced.",
      delta: '~+20 reported KIA; no Iranian-side military losses reported in Wednesday maritime operations',
      status:
        "IRGC executed the Touska reprisal via MSC Francesca and Epaminondas seizures; both escorted to Iranian coast. Pezeshkian frames blockade as 'main obstacle' to talks; Ghalibaf adviser calls blockade 'no different from bombardment.' Civilian (Pezeshkian/Araghchi) and military (IRGC/Vahidi) tracks now publicly separated. Mojtaba Khamenei remains unseen; IRGC gating access.",
    },
    other: {
      cumulative: 'Lebanon: 2,290+ killed (PBS tally) · Iraq: 99+ killed · Gulf states: 32+ killed · UAE: 11 killed / 2,343 projectiles absorbed cumulatively.',
      delta: '+0 aggregated (Hezbollah drone activity, Beqaa strike earlier in week)',
      status:
        "Pakistan Munir+Sharif authored Trump's Tuesday extension; Dar met US and Chinese ambassadors Monday. MSC (Swiss-Italian) and Greek flag-state diplomatic engagement expected on Francesca/Epaminondas. UK-led 40-nation freedom-of-navigation coalition still in planning. Qatar Ras Laffan 17% LNG out for 3–5 years (force majeure).",
    },
  },
  exec:
    "Iran delivered the retaliation it had telegraphed. IRGC Navy gunboats fired on the Liberia-flagged Epaminondas, seized it and the Panama-flagged MSC Francesca, and engaged a third vessel (Euphoria) within hours of Trump's Tuesday-evening indefinite ceasefire extension. Both seized ships were escorted to the Iranian coast. The White House response was the day's most analytically significant move: Press Secretary Leavitt told Fox News the actions are not ceasefire violations because the ships are neither American nor Israeli — a narrow definition that lets Iran execute a controlled, non-US-flagged reprisal without forcing US kinetic response. Trump reinforced the posture with \"no time frame\" on the war and no \"firm deadline\" for an Iranian proposal. CENTCOM's Adm. Cooper simultaneously said US forces are \"rearming, retooling, and adjusting tactics\" during the truce — a rearmament cycle Iran has equivalent access to. Brent closed at $101.91 (+3.5%) erasing Tuesday's post-extension rally. Analytical judgment: the 7-day trajectory is a controlled tit-for-tat within an indefinite truce frame, one Greek-crewed injury or one US-flagged hull away from collapse.",
  implications: [
    {
      title: "The \"not-a-violation\" doctrine is the day's structural move",
      body:
        'Leavitt narrowed the US definition of ceasefire-breaching conduct to direct attacks on US or Israeli assets, functionally ceding a harassment lane over non-US-flagged commercial shipping. Iran will test this lane further; the question is how far. MSC Francesca and Epaminondas are high-value detainments but not US hulls, so gunboat activity against international shipping is now a freedom-of-navigation problem for a 40-nation coalition rather than a US-Iran bilateral issue. Combined with "no time frame," this is the first day the US has explicitly decoupled "non-US hull incidents" from "ceasefire status."',
    },
    {
      title: 'The fractured-regime frame has now gone both ways — creating a negotiation trap',
      body:
        "CNN and Euronews sharpened the picture: Supreme Leader Mojtaba Khamenei unseen since succession, reportedly incapacitated; IRGC commander Ahmad Vahidi acting as decisional axis, gating Pezeshkian's appointments and access to Khamenei. Pezeshkian's civilian track (dialogue welcomed, blockade the obstacle) ran parallel to the IRGC's military track (the Hormuz seizures) on the same day. Trump's demand for a \"unified proposal\" cannot be satisfied because the regime authoring it is structurally disunified — the demand has effectively become an indefinite suspension condition both capitals can live with.",
    },
    {
      title: 'Every day of indefinite truce raises the ceiling of the next escalation',
      body:
        'Adm. Cooper\'s "rearming, retooling" statement is operationally an admission that the truce is functioning as mutual production and adaptation cycles rather than de-escalation. Iran has equivalent access: satellite imagery continues to show missile-base clearance. The next kinetic round, if it comes, will be better-resourced on both sides. Brent at $101.91 understates structural tightening — tanker traffic "light" Wednesday per CNBC, hull insurers re-pricing, and Ras Laffan 17% out for 3–5 years mean the energy channel stays loaded even without new kinetic forcing functions.',
    },
  ],
  casualtyNotes: {
    us: 'Military fatalities limited to Red Sea and Iraq base actions; no new KIA today. CENTCOM publicly in "rearm, retool, TTP-adjust" posture during the truce window.',
    israel:
      'No new KIA but Hezbollah drone targeted IDF troops in southern Lebanon on Day 8 of the 10-day Lebanon truce. Israel–Lebanon direct talks reopen Thursday in Washington; Netanyahu: "war not yet ended."',
    iran:
      "Iran Legal Medicine Organization updated to 'nearly 3,400' KIA; no new Iranian-side military losses reported in Wednesday maritime operations. Civilian (Pezeshkian/Araghchi) and military (IRGC/Vahidi) tracks now publicly separated.",
    other:
      "Aggregated Lebanon, Iraq, and Gulf-state totals unchanged today. MSC (Swiss-Italian) and Greek flag-state diplomatic engagement now activated on the Francesca/Epaminondas seizures; UK-led 40-nation freedom-of-navigation coalition still in planning.",
  },
};

export default data;
