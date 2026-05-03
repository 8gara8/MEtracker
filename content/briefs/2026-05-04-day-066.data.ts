import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Sunday converted Saturday's force-posture pivot into a kinetic-readiness pivot. Trump announced 'Project Freedom' — US Navy will begin 'guiding' stranded vessels out of the Strait of Hormuz starting Monday May 4 morning Middle East time, with guided-missile destroyers, more than 100 land- and sea-based aircraft, and 15,000 service members; Trump warned the US 'will use force' if Iran tries to disrupt the convoys (Axios, NBC News, Washington Post, Times of Israel liveblog May 3). Iran's response, carried by Iran International and Newsweek, classified any US military escort in Hormuz as a 'violation of the ceasefire' — pre-classifying Monday's operation as a casus belli rather than humanitarian relief. Trump separately told Israel's Kan News he had reviewed the Iran 14-point peace proposal and that it was 'not acceptable to me' (Jerusalem Post, Times of Israel). US sent an amended draft back to Tehran via Pakistan the same day. Witkoff to CNN: US is 'in conversation' with Iran but no commitment.",
      risk7d:
        "Iran's pre-classification of Project Freedom as a ceasefire violation, combined with the parliamentary 12-point Hormuz 'new legal regime' that statutorily requires hostile-country vessels to pay war reparations for transit permits (carried Saturday), means Monday's escort operation crosses Iranian domestic statute by force. The Iranian rial slipped to 1,915,000 IRR/USD on Sunday May 3 per AlanChand free-market — +66,000 IRR / +3.57% session-on-session move from Saturday's 1,849,000; six-month +60%+ compounding continues. Brent settled at $111+ Friday on track for second consecutive weekly gain (CNBC, ING THINK); IEA 'largest supply disruption in the history of the global oil market' framing carries; Asia takes 84% of Hormuz crude and 83% of LNG flows. The full 14-point Iranian plan now publicly itemized via Al Jazeera and The National — 30-day termination timeline, 15-year nuclear enrichment freeze followed by 3.6% resumption, war reparations, full US withdrawal, end to Lebanon fighting, frozen-asset release, sanctions removal — confirms framework gap is structural; Trump's 'not acceptable' to Kan News retires the nuclear-deferral architecture as a near-term option.",
      spillover:
        "IDF issued fresh evacuation warnings in southern Lebanon for villages beyond the area Israel currently occupies despite the April 16 truce intended to halt fighting with Hezbollah (Times of Israel liveblog May 3, CNN). Givati Brigade troops killed two Hezbollah gunmen in southern Lebanon; IDF interceptors fired at suspected Hezbollah drones over an area where troops are deployed, results under review; Hezbollah fired several rockets and drones at IDF troops overnight, no IDF injuries reported. Lebanon MOH reported 4 additional KIA in southern Lebanon Israeli strikes Sunday (Arab News BREAKING carry). Netanyahu announced establishment of a special IDF counter-drone project ordered weeks ago plus acquisition of two squadrons of F-35 and F-15IA aircraft (Times of Israel). Hamas-Cairo track resumes Monday with Mladenov on disarmament; Hamas Saturday counter-offer bucking the give-up-all-weapons demand carries inside same negotiating window. Lebanon clock continues to operate independently of Iran clock; the southern-Lebanon evacuation warnings extending beyond the occupation zone foreshadow the mid-May expanded-campaign trigger pencilled in.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Axios / NBC News / Washington Post / Times of Israel / Voice of Emirates',
      event: "Trump announces 'Project Freedom' — US Navy escorts stranded ships through Strait of Hormuz starting Monday May 4; warns 'will use force' if Iran disrupts",
      summary:
        "Trump announced from the White House Sunday that the US will begin 'guiding' stranded vessels out of the Strait of Hormuz starting Monday morning Middle East time, under an operation dubbed 'Project Freedom.' Forces committed: guided-missile destroyers, more than 100 land- and sea-based aircraft, and 15,000 service members. Trump framed the operation as a 'humanitarian gesture' for hundreds of vessels and ~20,000 seafarers stranded for weeks but added the US 'will use force' if Iran tries to disrupt the escort. Trump: 'My representatives are having very positive discussions with Iran.'",
      impact:
        "Project Freedom converts blockade-management into active escort operation that Iran has pre-classified as a ceasefire violation. The operation closes the gap between Friday's 'terminated' constitutional cover, Saturday's $8.6B Rubio emergency arms package, and a kinetic activation event — small-boat-encounter risk inside Hegseth ROE is now the single dominant tactical risk vector. Monday's escort outcome (uneventful, small-boat encounter, or kinetic exchange) selects the next operating tier.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Iran International / Newsweek',
      event: "Iran warns: 'Any US military escort in Hormuz is a violation of the ceasefire' — pre-classifies Project Freedom as casus belli",
      summary:
        "Iranian officials and IRGC-linked outlets responded to Trump's Project Freedom announcement by framing any US military escort operation in the Strait of Hormuz as a 'violation of the ceasefire,' per Iran International and Newsweek carry. The pre-classification removes ambiguity — Iran has stated in advance that Monday's operation, if it proceeds with destroyers and aircraft escorting non-permitted vessels through the parliamentary 12-point 'new legal regime' transit corridor, will be treated as a kinetic provocation rather than as humanitarian relief.",
      impact:
        "Pre-classification eliminates the de-escalation off-ramp for any tactical incident at sea on Monday. With Iran's parliamentary toll regime making the underlying transit law a domestic statute, Project Freedom escort operations cross Iranian law by force. The IRGC-line public threat assessment from Asadi Saturday — 'war with US likely to resume' — operationally underwrites this pre-classification. Monday's small-boat or sea-mine encounter risk converts directly into a CENTCOM kinetic-option activation indicator.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Jerusalem Post / Times of Israel / Kan News',
      event: "Trump to Kan News: Iran 14-point proposal 'not acceptable to me'; US sends amended draft back to Tehran via Pakistan",
      summary:
        "Trump told Israel's Kan News on Sunday that he had reviewed Iran's 14-point peace proposal and that it was 'not acceptable to me.' US sent an amended draft back to Tehran via Pakistan the same day per Times of Israel. Trump's 'not acceptable' framing is the direct rejection of the 15-year nuclear-deferral architecture central to the Iranian plan, after Saturday's Truth Social '47 years' framing. Trump: 'If they do something bad, there is a possibility it could happen' on resumed strikes.",
      impact:
        "The Kan News rejection converts the framework gap from rhetorical to operational. The 14-point plan's 30-day termination timeline, 15-year enrichment freeze (then 3.6%), war reparations, full US withdrawal, end to Lebanon hostilities, and Hormuz transit-toll mechanism are now publicly on the table and publicly rejected. The amended draft preserves the Pakistan channel but resets the negotiating clock to a US baseline Tehran has just rejected with a 14-point counter; Witkoff's CNN 'in conversation' is the only residual buffer.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'CNN / Al Jazeera / The National / NPR',
      event: "Iran 14-point plan publicly itemized: 30-day termination, 15-year enrichment freeze then 3.6%, war reparations, US withdrawal, Hormuz toll regime",
      summary:
        "Al Jazeera and The National published the full 14-point Iranian plan: 30-day timeline to terminate the war (vs. Washington's two-month ceasefire frame); 15-year freeze on uranium enrichment with resumption at 3.6% in a second phase; gradual reopening of the Strait of Hormuz with US lifting blockade and Iran clearing mines; war reparations from US/allies; full sanctions relief; release of frozen Iranian assets; binding guarantees against future attack; complete US withdrawal from the region; an end to Lebanon hostilities; new Hormuz transit-toll mechanism codified in parliament Saturday.",
      impact:
        "Public itemization means Pakistan-channel framework convergence on a non-maximalist US position is foreclosed without one side moving off baseline. Iran's 15-year enrichment-deferral architecture was the parameter Witkoff had been holding space for since the Day 53 Islamabad track. Trump's Kan News rejection retires that architecture as a near-term option. Negotiating window through Q3 2026 must now price the Hormuz-management mechanism as dominant parameter rather than nuclear sequencing.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: 'AlanChand free-market',
      event: "Iranian rial slips to 1,915,000 IRR/USD Sunday May 3 — +66,000 IRR / +3.57% session-on-session despite Pakistan land corridor",
      summary:
        "AlanChand free-market quote: rial trades at 1,915,000 IRR/USD on Sunday May 3 — +66,000 IRR (+3.57%) session-on-session move from Saturday's 1,849,000. Two-day cumulative weakening through the Saturday 14-point response and Sunday Trump-rejection / Project-Freedom triad: +138,000 IRR / +7.77% from Friday's 1,776,000. Pakistan Transit of Goods Order from Day 63 not relieving currency-side compression in the 48-hour duration-signal window.",
      impact:
        "Tehran's economic survival horizon extends past Trump's blockade timeline via the Pakistan corridor but rial-cohesion pressure remains the dominant tactical pricing input. Two consecutive sessions of 3-4% rial weakening on dates dominated by duration-signal news (rejection + escort) isolates the duration premium itself as the rial-pricing driver. Six-month +60%+ compounding holds; CBI 65.8% YoY inflation carries; IMF 6.1% 2026 GDP contraction carries.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'high',
      source: 'Times of Israel liveblog May 3 / CNN / Arab News',
      event: "IDF issues new evacuation warnings beyond occupation zone in south Lebanon; Givati kills 2 Hezbollah gunmen; Hezbollah rocket-and-drone strikes near IDF; Lebanon MOH +4 KIA",
      summary:
        "IDF issued fresh evacuation warnings in southern Lebanon for villages beyond the area Israel currently occupies, despite the April 16 truce intended to halt fighting with Hezbollah. Givati Brigade troops identified and killed two Hezbollah gunmen in their area of operations. IDF interceptor missiles fired at suspected Hezbollah drones identified over an area where troops are deployed, results under review. Hezbollah fired several rockets and drones at IDF troops overnight, no IDF injuries. Lebanon MOH reported 4 additional KIA in southern Lebanon Israeli strikes Sunday per Arab News BREAKING carry.",
      impact:
        "The southern-Lebanon evacuation warnings extending beyond Israel's current occupation zone foreshadow the mid-May expanded-Lebanon-campaign trigger that Day 65 and prior briefs had pencilled in. Lebanon clock continues to operate independently of Iran clock. The April 16 truce is now serving as the floor for an expanding operational tempo rather than as a ceasefire; the Hezbollah veto on Aoun-Netanyahu direct meeting compounds the diplomatic-track stall.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'medium',
      source: 'Times of Israel',
      event: "Netanyahu announces IDF counter-drone project plus acquisition of two squadrons of F-35 and F-15IA aircraft",
      summary:
        "Prime Minister Netanyahu said Sunday he had ordered the establishment of a special IDF project to counter the Hezbollah drone threat 'a few weeks ago'; project being stood up amid spike in Hezbollah drone strikes against IDF troops in southern Lebanon. Netanyahu separately announced Israel is acquiring two squadrons of advanced aircraft — F-35 and F-15IA. Announcement timed to the Sunday IDF interceptor-against-Hezbollah-drones engagement and the Project Freedom announcement.",
      impact:
        "Force-posture pivot complement on the Israeli side to Saturday's $8.6B Rubio APKWS package. Two new fighter squadrons plus dedicated counter-drone capability lengthen Israel's operating horizon for the Lebanon track and the Iran track simultaneously; signals Netanyahu pricing kinetic-tail through Q3 2026 rather than a near-term Lebanon ceasefire convergence. Compounds the interceptor-reconstitution-clock recalibration the Rubio package initiated.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 395',
      delta: '+0 KIA / +0 WIA',
      status:
        "No new KIA. Trump announces Project Freedom Hormuz escort operation starting Monday — guided-missile destroyers, 100+ aircraft, 15,000 service members; warns 'will use force' if Iran disrupts. Trump to Kan News: Iran 14-point proposal 'not acceptable.' US sends amended draft back to Tehran via Pakistan. Cooper-Caine kinetic option live with Friday's 'terminated' cover. Saturday $8.6B Rubio emergency arms package (Israel/Qatar/Kuwait/UAE) carries. Hormuz transit ~5/day vs. ~140 pre-war.",
    },
    israel: {
      cumulative: 'KIA: 40 (24 civilians + 16 soldiers) · WIA: 6,008',
      delta: '+0 IDF KIA / +0 IDF WIA',
      status:
        "No new IDF KIA. Givati Brigade troops killed two Hezbollah gunmen in south Lebanon. IDF interceptors fired at Hezbollah drones over troop area, results under review. Hezbollah rocket-and-drone strikes overnight, no injuries. IDF issued new evacuation warnings beyond occupation zone in south Lebanon. Netanyahu announces IDF counter-drone project + acquisition of two squadrons of F-35 and F-15IA. US-push for Aoun-Netanyahu direct meeting in Washington carries; Hezbollah veto carries. Israel receives $992.4M APKWS in Rubio package.",
    },
    iran: {
      cumulative: "Iran LMO 'nearly 3,400' KIA · HRANA April 7: 3,636+ (1,701 civilians, 1,221 military, 254+ children) · Hengaw 6,620+ military · 3.2M displaced.",
      delta: '+0 KIA / +0 WIA reported',
      status:
        "No new combat losses. Iran pre-classifies Project Freedom as 'violation of the ceasefire' (Iran International, Newsweek). 14-point plan publicly itemized: 30-day termination, 15-year enrichment freeze then 3.6%, war reparations, US withdrawal, Hormuz toll regime. Asadi Saturday 'war likely to resume' carries; parliament 12-point Hormuz law carries. Rial 1,915,000/USD Sunday per AlanChand — +3.57% session move; +7.77% two-day cumulative. CBI inflation 65.8% YoY.",
    },
    other: {
      cumulative: 'Lebanon MOH: 2,663+ KIA / 8,183+ WIA · Iraq: 99+ · Gulf states: 32+ · UAE: 11.',
      delta: '+4 Lebanon MOH KIA',
      status:
        "Lebanon MOH +4 KIA from Sunday Israeli strikes in south Lebanon (Arab News BREAKING carry). IDF evacuation warnings beyond occupation zone foreshadow mid-May expanded-campaign trigger. Hamas-Cairo Mladenov disarmament track resumes Monday; Hamas Saturday counter-offer bucking give-up-all-weapons demand carries. Pakistan Transit of Goods Order carries; UAE OPEC/OPEC+ exit effective May 1 carries. Voice of Emirates: GCC welcomes Project Freedom humanitarian framing while Iran International registers ceasefire-violation framing.",
    },
  },
  exec:
    "Sunday converted Saturday's force-posture pivot into a kinetic-readiness pivot. Trump announced 'Project Freedom' — US Navy will begin 'guiding' stranded vessels out of the Strait of Hormuz starting Monday May 4 morning Middle East time, with guided-missile destroyers, more than 100 aircraft, and 15,000 service members; warned the US 'will use force' if Iran disrupts. Iran framed any military escort as a 'violation of the ceasefire,' pre-classifying Monday's operation as a casus belli. Trump separately told Israel's Kan News the Iran 14-point peace proposal — calling for 30-day war termination, 15-year nuclear enrichment freeze then resumption at 3.6%, full US withdrawal, end to Lebanon fighting, sanctions relief, frozen-asset release, war reparations, and codification of the Hormuz transit-toll regime — is 'not acceptable to me.' US sent an amended draft back to Tehran via Pakistan; Witkoff to CNN: 'in conversation.' IDF issued fresh evacuation warnings beyond the southern Lebanon occupation zone despite the April 16 truce; Givati Brigade killed two Hezbollah gunmen; Hezbollah rocket-and-drone strikes near IDF, no injuries; Lebanon MOH +4 KIA. Netanyahu announced IDF counter-drone project plus acquisition of two squadrons of F-35 and F-15IA. Iranian rial slipped to 1,915,000 IRR/USD Sunday per AlanChand — +66,000 IRR / +3.57% session-on-session; +7.77% two-day cumulative. Analytical judgment: 30-day ceasefire probability moves 16 → 13. Project Freedom is the operational realization of Friday's 'terminated' cover and Saturday's arms package — converts blockade-management into an active escort operation that Iran has pre-classified as a ceasefire violation; the framework gap is now structural after Trump's direct rejection of the 14-point plan to Kan News.",
  implications: [
    {
      title: "Project Freedom converts blockade-management into active escort operation that Iran has pre-classified as a ceasefire violation — kinetic-readiness pivot",
      body:
        "Trump's 'Project Freedom' announcement (Axios, NBC News, Washington Post, Times of Israel liveblog May 3, Voice of Emirates) commits US Navy guided-missile destroyers, more than 100 land- and sea-based aircraft, and 15,000 service members to escort 'neutral and innocent' stranded vessels out of the Strait of Hormuz beginning Monday morning Middle East time. Trump framed the operation as a 'humanitarian gesture' addressing some 20,000 stranded seafarers but explicitly warned the US 'will use force' if Iran tries to disrupt the convoys. Iran's response, carried by Iran International and Newsweek, frames any US military escort in Hormuz as a 'violation of the ceasefire' — pre-classifying the Monday operation as a casus belli rather than as humanitarian relief. Iran has, since the parliamentary 12-point Hormuz 'new legal regime' advanced Saturday, statutorily required all vessels from 'hostile countries' to pay war reparations for transit permits; Project Freedom escorts vessels through that statutory regime by force. The operation closes the gap between Friday's 'terminated' constitutional cover, Saturday's $8.6B Rubio emergency arms package, and a kinetic activation event — the small-boat-encounter risk inside Hegseth ROE is now the single dominant tactical risk vector. Asadi's Saturday 'war likely to resume' framing is the IRGC-line operational endorsement of the pre-classification. Analytical judgment: under the multi-clock framework, the energy-infrastructure and active-deadline clocks are now coupled — Monday's escort operation IS the deadline; the negotiation-capacity clock has lost the parallel-track buffer the four-mediator hub had supplied. Probability move 16 → 13.",
    },
    {
      title: "Trump direct rejection of the 14-point proposal closes the framework gap — amended-draft-via-Pakistan resets the negotiating timeline against a baseline Tehran has already rejected",
      body:
        "Trump told Israel's Kan News on Sunday that he had reviewed Iran's 14-point peace proposal and that it was 'not acceptable to me' (Jerusalem Post, Times of Israel). The administration sent an amended draft back to Tehran via Pakistan the same day. The 14-point plan as itemized by Al Jazeera and The National includes: 30-day timeline to terminate the war (vs. Washington's two-month ceasefire frame); a 15-year freeze on uranium enrichment followed by resumption at 3.6%; gradual reopening of the Strait of Hormuz with the US lifting the blockade and Iran clearing mines; war reparations payments by US/allies for past damage; full sanctions relief; release of frozen assets; binding guarantees against future attack; complete US withdrawal from the region; an end to Lebanon hostilities; and the new Hormuz transit-toll mechanism. Witkoff to CNN: US is 'in conversation' with Iran but no commitment. Trump's 'not acceptable' is the rejection of the 15-year nuclear-deferral architecture — the parameter Witkoff had explicitly held space for since the Day 53 Islamabad track. The amended draft preserves the Pakistan channel but resets the negotiating clock to a US baseline that Tehran has just rejected with a 14-point counter; Witkoff's 'in conversation' is the only residual buffer against Project Freedom kinetic activation. Analytical judgment: framework convergence on the nuclear-deferral architecture is now retired as a near-term option; the negotiating window through Q3 2026 must price the Hormuz-management mechanism as the dominant parameter, not nuclear sequencing.",
    },
    {
      title: "Taiwan / CPC: Project Freedom's 'use force' clause hardens the kinetic-tail $130-$170 ceiling into a probability-weighted central case — duration baseline through October now embeds active US escort operations",
      body:
        "The combination of Project Freedom escort operations beginning Monday May 4 with explicit 'use force' authorization, Iran's pre-classification of the operation as a 'ceasefire violation,' and the Iranian rial's continued depreciation to 1,915,000 IRR/USD on Sunday (+3.57% session-on-session from Saturday's 1,849,000 per AlanChand) collectively reweight the kinetic-tail scenario from low-probability tail risk to a central-case duration scenario for the procurement window through Q3 2026. Brent settled at $111+ Friday with second consecutive weekly gain on Hormuz disruption (CNBC, ING THINK); Asia takes ~84% of Hormuz crude and ~83% of LNG with the bulk to China, India, Japan, and Korea. Citi $150-by-end-June operating curve hardens; structural floor moves $108-115 → $115-130 contingent on Monday's escort outcome; kinetic-tail $130-$170 ceiling retained but probability-weight rises from low to central-case. For Taiwan specifically, MOEA no-Hormuz-through-October hardens to firm baseline; CPC coal-rotation extends through Q3; residual-LNG-procurement floor moves above $130. TSMC 2026 CapEx pricing pass-through operates at the kinetic-tail $170 procurement-stress-test ceiling now treated as central case rather than tail. Analytical judgment: the Hormuz escort operation IS the inflection event — Monday's outcome (uneventful escort, small-boat encounter, or kinetic exchange) selects which tier of the procurement curve binds; Taiwan procurement counterparties should treat the $115-130 floor as the firm baseline through October regardless of which Monday outcome materializes, with $170 reserved as the kinetic-tail stress-test ceiling.",
    },
  ],
  casualtyNotes: {
    us: "No new KIA. Trump announces Project Freedom Hormuz escort op starting Monday — destroyers, 100+ aircraft, 15,000 service members; 'will use force' if Iran disrupts. Trump to Kan News: 14-point proposal 'not acceptable.' US sends amended draft to Tehran via Pakistan. Saturday $8.6B Rubio emergency arms package carries. Cooper-Caine kinetic option live.",
    israel:
      "No new IDF KIA. Givati Brigade kills 2 Hezbollah gunmen in south Lebanon. IDF interceptors against Hezbollah drones, results under review. IDF evacuation warnings beyond occupation zone. Netanyahu: IDF counter-drone project + acquisition of two squadrons of F-35 and F-15IA. US-push Aoun-Netanyahu meeting carries; Hezbollah veto carries. Israel $992.4M APKWS in Rubio package.",
    iran:
      "No new combat losses. Iran pre-classifies Project Freedom as 'ceasefire violation' (Iran International, Newsweek). 14-point plan publicly itemized: 30-day termination, 15-year enrichment freeze then 3.6%, war reparations, US withdrawal, Hormuz toll regime. Asadi 'war likely to resume' carries. Rial 1,915,000/USD Sunday per AlanChand — +3.57% session move; +7.77% two-day cumulative.",
    other:
      "Lebanon MOH +4 KIA from Sunday Israeli strikes in south Lebanon. IDF evacuation warnings beyond occupation zone foreshadow mid-May expanded-Lebanon-campaign trigger. Hamas-Cairo Mladenov disarmament track resumes Monday; Hamas Saturday counter-offer carries. Pakistan Transit of Goods Order carries; UAE OPEC/OPEC+ exit carries. GCC welcomes Project Freedom humanitarian framing.",
  },
};

export default data;
