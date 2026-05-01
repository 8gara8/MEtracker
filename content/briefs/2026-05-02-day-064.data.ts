import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Friday converted Thursday's two-instrument squeeze into a duration posture. Trump formally told Congress 'the hostilities that began on February 28, 2026, have terminated' — sharper than Hegseth's Thursday Senate 'paused' framing — sidestepping the May 1 War Powers Resolution 60-day deadline on the legal theory that the early-April ceasefire ended the war. The administration position holds operationally: Senate WPR vote already failed 50-47 Thursday with Collins crossing, Murkowski's AUMF push not landing until the week of May 11. Trump told reporters at the White House he is 'not satisfied' with Iran's revised proposal — 'they're asking for things I can't agree to,' would 'blast them away' if talks fail, cited 'tremendous discord' inside Iran. The Cooper-Caine kinetic option from Thursday remains in the presidential decision queue and is now backed by constitutional cover the 'terminated' declaration supplies.",
      risk7d:
        "Brent settled $108.17 Friday, pulled back ~2% from Thursday's $126.41 wartime intraday high but on track for a second consecutive weekly gain. CNBC notes oil moved lower on Iran's revised proposal but stayed elevated on stalled-deal expectations. ING THINK: oil forecasts raised on prolonged Hormuz disruption; IEA characterizes 'largest supply disruption in the history of the global oil market.' Iranian rial 1,776,000/USD May 2 per AlanChand free-market quote — week-on-week +15.40% USD-strength against rial, six-month +64.52%. CENTCOM USS Peterson and Murphy de-mining operations continue under Adm. Cooper into Day 8; Hormuz transit ~5 ships/day vs. ~140 pre-war. Murkowski's week-of-May-11 AUMF announcement is the residual Congressional-constraint indicator.",
      spillover:
        "Lebanon Health Ministry confirmed Friday IDF strikes across south Lebanon killed at least 15, including five women and two children — four members of one family in one strike, six gathered near a village cemetery in another. Three paramedics buried Friday after earlier killings. Aoun: 'pressure must be exerted on Israel to ensure it respects international laws and conventions.' Cumulative MOH toll revised to 2,618 KIA / 8,094 WIA — material multi-day reconciliation against Day 63's 2,310+ carry-forward. US administration urges direct Aoun-Netanyahu meeting before Lebanese-Israeli bilateral talks resume in Washington; Hezbollah continues to vehemently reject negotiations. Lebanon clock continues to operate independently of the Iran clock; mid-May expanded-Lebanon-campaign trigger from Israeli 2-3 week ask carries.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'CNBC / PBS NewsHour / Washington Post / White House',
      event: 'Trump letter to Congress: hostilities "have terminated" — sidesteps May 1 War Powers Resolution 60-day deadline',
      summary:
        "President Trump on Friday sent letters to House Speaker Mike Johnson and Senate President Pro Tempore Chuck Grassley stating that 'the hostilities that began on February 28, 2026, have terminated' and that there has been 'no exchange of fire between United States Forces and Iran since April 7, 2026.' The letters skirted the May 1 War Powers Resolution 60-day deadline by reframing the early-April ceasefire as the legal end of hostilities. Brennan Center counsel Katherine Yon Ebright responded that 'nothing in the text or design of the War Powers Resolution suggests the 60-day clock can be paused or terminated'; Sen. Richard Blumenthal: 'There's no pause button in the Constitution, or the War Powers Act. We're at war. The blockade alone is a continuing act of war.'",
      impact:
        "Sharper than Hegseth's Thursday Senate 'paused' framing — 'paused' implied a clock that could resume; 'terminated' implies the war ended in early April and the blockade plus de-mining operations function as post-conflict economic measures rather than ongoing hostilities. With Senate WPR vote already failed 50-47 Thursday and Murkowski's AUMF not landing until week of May 11, no procedural vehicle constrains the executive in the Pakistan-channel window. Constitutional architecture for indefinite continuation of the extended blockade plus the Cooper-Caine kinetic option from Thursday. Duration signal, not ceasefire signal.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Al Jazeera / ANI News / CNBC / White House',
      event: 'Trump rejects Iran\'s revised three-phase Pakistan-channel proposal: "not satisfied" — "blast them away" if talks fail',
      summary:
        "Speaking to reporters at the White House on Friday morning, Trump said he is 'not satisfied' with Iran's latest peace proposal: 'They're asking for things I can't agree to.' He warned he would 'blast them away' if negotiations fail, and said 'there is tremendous discord' among Iranian leaders, that 'they're having a tremendous problem getting along with each other.' The Iranian proposal — submitted via Pakistani mediators on Thursday in response to amendments US Special Envoy Steve Witkoff sent Monday introducing the nuclear file — is three-phase: (1) full ceasefire plus binding guarantees against renewed attacks on Iran and Lebanon, (2) Hormuz 'management and security,' (3) nuclear program deferred. Trump publicly rejected the Hormuz-first sequencing in the same window.",
      impact:
        "Locks the framework gap at presidential rejection level: Iran's Hormuz-first sequencing (IRGC-aligned, defers nuclear) versus Witkoff/Trump nuclear-first sequencing (extended-blockade theory). Trump's 'tremendous discord' framing is operationally validated by the same-window reporting on the Pezeshkian-Ghalibaf-Araghchi rift. The 'blast them away' framing keeps the Cooper-Caine 'short and powerful' strike package in the presidential decision queue and lifts kinetic option above procedural threshold.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Iran International / Jerusalem Post / The Week / OpenTheMagazine',
      event: 'Pezeshkian and Speaker Ghalibaf reportedly seek FM Araghchi\'s removal over IRGC-Vahidi subservience',
      summary:
        "Iran International, JPost and The Week report President Pezeshkian and Speaker Ghalibaf are publicly moving to remove FM Araghchi, accusing him of executing IRGC commander Ahmad Vahidi's instructions without informing the President. Reporting describes Araghchi acting 'less as a cabinet minister tasked with implementing government policy than as an aide to Vahidi.' Ghalibaf had earlier resigned as head of the negotiating team after being reprimanded over efforts to include the nuclear file; Araghchi's April 24 Islamabad trip alone delivered the proposal Trump publicly rejected. Pezeshkian reportedly told confidants he will dismiss Araghchi if the IRGC-channel pattern continues.",
      impact:
        "Surface evidence and structural validation for Trump's Friday 'tremendous discord' framing. Names the Tehran negotiating-authority gap concretely: any Pakistan-channel concession Araghchi delivers can be repudiated by Pezeshkian or by Ghalibaf's parliament, and any Pezeshkian-Ghalibaf-aligned concession can be repudiated by IRGC Vahidi who controls Khamenei-level signaling. Khamenei's Friday written statement defending 'nuclear and missile capabilities' is the IRGC-line backstop. Pakistan-channel convergence inside Trump's blockade timeline now requires Iranian leadership realignment that is months not weeks away.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Times of Israel liveblog / CBC News / IRIB / Pravda USA',
      event: 'Khamenei written statement: "only place for US in Persian Gulf is at the bottom of its waters"; defends "nuclear and missile capabilities" as national assets',
      summary:
        "A written statement attributed to Iran's Supreme Leader Khamenei was read on state TV Friday: 'the only place for Americans in the Persian Gulf is at the bottom of its waters'; Iran's 'nuclear and missile capabilities' are 'national assets' that Iranians 'will protect just as they protect the country's waters, land and airspace.' The statement reasserted Iran's 'legal rules and new management' of the Strait of Hormuz and said Iranian control of the strait 'will make the Gulf more secure' for regional nations. CBC News carried the parallel 'long and painful strikes on US targets' framing should Trump resume bombing.",
      impact:
        "Sharper than Thursday's 'foreigners have no place here' Persian Gulf National Day line. Locks IRGC-Khamenei axis against any Hormuz-internationalization architecture in the four-mediator framework, defends nuclear capability against any Witkoff-amendments nuclear-first reordering, and supplies the public threat language that operationally underwrites the Pakistan-channel proposal Araghchi delivered. Combines with Pezeshkian-Araghchi rift to confirm dual Tehran negotiating tracks — Khamenei-IRGC line via Araghchi/Pakistan, Pezeshkian-Ghalibaf line via internal cabinet — operating simultaneously.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: 'CNBC / ING THINK / Trading Economics / IEA',
      event: 'Brent settles $108.17 Friday — second consecutive weekly gain; IEA "largest supply disruption in history of global oil market"',
      summary:
        "Brent crude settled near $108.17 on Friday, lost nearly 2% on the session — pullback from Thursday's $126.41 wartime intraday high — but held above the post-Wednesday floor and was on track for a second consecutive weekly gain. CNBC: oil moved lower on Iran's revised peace proposal to mediators but elevated on Trump's 'not satisfied' rejection and the CENTCOM kinetic-option overhang. ING THINK: oil forecasts revised higher as prolonged Strait of Hormuz disruption continues. IEA: 'largest supply disruption in the history of the global oil market.' Brent up nearly 50% from late-February conflict start.",
      impact:
        "Market pricing the duration signal: back-month no longer hedges near-term ceasefire path because Trump's 'terminated' declaration plus 'not satisfied' rejection plus Iranian negotiating-authority fracture eliminate that path inside 4-6 weeks. Citi $150-by-end-June operating curve sits inside wider distribution: structural floor $108-115, central case $150, kinetic-tail $130-170 retained on Cooper-Caine strikes-plus-seizure variant. CPC procurement should treat Pakistan land corridor as the only operating downside relief signal; MOEA no-Hormuz-through-October scenario hardens to central case.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'high',
      source: 'AlanChand free-market quote / Bonbast / Bloomberg carry',
      event: 'Iranian rial 1,776,000/USD on May 2; +15.40% USD-strength week-on-week despite Pakistan land-corridor relief',
      summary:
        "Iranian rial trades at 1,776,000 IRR/USD on Saturday May 2 per AlanChand free-market quote — modest +0.08% session move from Friday but week-on-week +15.40% USD-strength against rial, six-month +64.52%. Bloomberg's Day 63 carry on -12% in a week now reflects the post-blockade compression even with Thursday's Pakistan land-corridor opening operating as structural relief. CBI inflation 65.8% YoY for Iranian month 20 March-20 April; IMF: 6.1% 2026 GDP contraction, 68.9% inflation forecast.",
      impact:
        "Pakistan land-corridor relief from Day 63 has not relieved currency-side compression in the 24-hour window — duration signal pricing into rial mirroring duration signal pricing into Brent. Tehran's economic survival horizon extends past Trump's blockade timeline via the corridor (Day 63 carry) but the rial-cohesion pressure remains tactical inside that horizon. Pezeshkian-Ghalibaf-Araghchi rift cannot be resolved by IRGC-aligned negotiating posture alone if rial compression continues through May.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'high',
      source: 'Manila Times / Aawsat / Lebanon MOH / NNA',
      event: 'Lebanon MOH revises cumulative toll to 2,618 KIA / 8,094 WIA after Friday IDF strike wave kills 15; Aoun condemns; US urges Aoun-Netanyahu meeting',
      summary:
        "Lebanon Health Ministry confirmed Friday IDF strikes across four locations in southern Lebanon killed at least 15, including five women and two children — NNA reports four members of one family killed in one strike, six gathered near a village cemetery in another. Three paramedics killed by Israel were buried Friday. Aoun: 'pressure must be exerted on Israel to ensure it respects international laws and conventions and ceases targeting civilians, paramedics, civil defense, and humanitarian health and relief organizations.' MOH cumulative toll revised to 2,618 KIA / 8,094 WIA — material multi-day reconciliation against Day 63's 2,310+ carry. US administration urges direct Aoun-Netanyahu meeting before Lebanese-Israeli bilateral talks resume in Washington; Hezbollah vehemently rejects negotiations.",
      impact:
        "Lebanon clock continues to operate independently of Iran clock. The MOH cumulative revision (+308 from carry-forward) is the magnitude of Lebanon-track damage the post-April-16 ceasefire architecture has absorbed without breaking; Friday's incremental +15 is the operational tempo continuing within that architecture. US push for direct Aoun-Netanyahu meeting concedes that Hezbollah's negotiating veto and Israeli operational tempo cannot be addressed within the Iran-track architecture. Mid-May expanded-Lebanon-campaign trigger from Israeli 2-3 week ask remains pencilled in.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 395',
      delta: '+0 KIA / +0 WIA',
      status:
        "No new KIA in Friday window. Trump letter to Congress: 'hostilities have terminated' — sidesteps May 1 War Powers 60-day deadline at the doctrinal level. Trump 'not satisfied' with Iranian proposal at White House; 'blast them away' framing. Cooper-Caine 'short and powerful' kinetic option from Thursday remains in presidential decision queue. USS Peterson/Murphy de-mining ops continue under Adm. Cooper into Day 8 in the Strait of Hormuz; Hormuz transit ~5 ships/day vs. ~140 pre-war. Murkowski week-of-May-11 AUMF push is residual constraint indicator. Pentagon $25B war-cost disclosure carries.",
    },
    israel: {
      cumulative: 'KIA: 40 (24 civilians + 16 soldiers, incl. Sgt. Ben Hamo Thursday at Qantara) · WIA: 6,008',
      delta: '+0 IDF KIA / +0 IDF WIA in Friday window',
      status:
        "No new IDF KIA in Friday window; Sgt. Ben Hamo Thursday Qantara KIA carries as first IDF KIA on Lebanon track since April 16 ceasefire. IDF strike wave on south Lebanon Friday — 15 reported killed by Lebanon MOH. Israel reportedly continues to push Trump for 2-3 week Lebanon-track deadline before greenlighting expanded campaign; mid-May trigger pencilled in. Katz 'IDF ready to resume Iran attacks pending US permission' carries. US administration pushing for direct Aoun-Netanyahu meeting before bilateral Lebanese-Israeli talks in Washington — concedes Hezbollah veto inside Iran-track architecture.",
    },
    iran: {
      cumulative: "Iran LMO 'nearly 3,400' KIA · HRANA April 7: 3,636+ (1,701 civilians, 1,221 military, 254+ children) · Hengaw 6,620+ military · 3.2M displaced.",
      delta: '+0 KIA / +0 WIA reported in Friday window',
      status:
        "Khamenei written statement: 'only place for Americans in Persian Gulf is at the bottom of its waters'; 'nuclear and missile capabilities' national assets. Pezeshkian and Ghalibaf reportedly seeking FM Araghchi's removal over IRGC-Vahidi subservience — surface evidence for Trump's 'tremendous discord' framing. Araghchi's April 24 Islamabad delivery of revised proposal under contested authority. Iranian rial 1,776,000/USD on May 2 per AlanChand free-market quote; +15.40% USD-strength week-on-week, +64.52% six-month. CBI inflation 65.8% YoY. Pakistan Transit of Goods Order from Day 63 carries.",
    },
    other: {
      cumulative: 'Lebanon MOH revised: 2,618 KIA / 8,094 WIA · Iraq: 99+ · Gulf states: 32+ · UAE: 11.',
      delta: '+15 Lebanon MOH KIA in Friday IDF strike wave; cumulative revised +308 vs. Day 63 carry',
      status:
        "Lebanon Health Ministry confirms +15 KIA Friday — 4 family members in one strike, 6 by village cemetery, 3 paramedics buried. Cumulative MOH toll revised 2,310+ → 2,618 KIA / 8,094 WIA (multi-day reconciliation). Aoun statement on civilian protection. US urges Aoun-Netanyahu meeting before Washington bilateral talks; Hezbollah rejects. Pakistan Transit of Goods Order from Day 63 carries — first structural escape valve from blockade. UAE OPEC/OPEC+ exit effective May 1 carries (six-decade institutional rupture). GCC SG Albudaiwi rejection of Iranian Hormuz fees from Wednesday carries. Wang Yi 'might over right' to Baerbock from Wednesday carries.",
    },
  },
  exec:
    "Friday converted Thursday's two-instrument squeeze into a duration posture. Trump formally told Congress 'the hostilities that began on February 28, 2026, have terminated' — sharper than Hegseth's Thursday 'paused' framing — sidestepping the May 1 War Powers Resolution 60-day deadline. Trump rejected Iran's revised three-phase Pakistan-channel proposal at the White House: 'not satisfied,' 'asking for things I can't agree to,' 'blast them away' if talks fail; cited 'tremendous discord' inside Iran. Iran International, JPost and The Week reported Pezeshkian and Ghalibaf are publicly seeking FM Araghchi's removal over IRGC-Vahidi subservience — surface evidence for Trump's 'discord' framing. Khamenei written statement: 'only place for Americans in the Persian Gulf is at the bottom of its waters'; defends 'nuclear and missile capabilities' as national assets. Brent settled $108.17, pulled back ~2% from Thursday's $126.41 intraday high but on track for a second weekly gain. Iranian rial 1,776,000/USD on May 2 per AlanChand free-market quote; +15.40% week-on-week. Lebanon MOH revised cumulative to 2,618 KIA / 8,094 WIA after Friday IDF strike wave killed 15. Analytical judgment: 30-day ceasefire probability moves 22 → 19.",
  implications: [
    {
      title: "Trump's \"terminated\" declaration is a duration signal, not a ceasefire signal — it converts the blockade from time-limited pressure instrument into open-ended one",
      body:
        "The Friday letters to Speaker Johnson and Senate President Pro Tempore Grassley — 'the hostilities that began on February 28, 2026, have terminated'; 'no exchange of fire between United States Forces and Iran since April 7, 2026' — escalate Hegseth's Thursday 'paused' framing to a structurally different legal position. 'Paused' implied a clock that could resume; 'terminated' implies a war that ended in early April with the blockade and de-mining operations functioning as post-conflict economic measures rather than ongoing hostilities. The constitutional response is unambiguous in the abstract — Brennan Center's Ebright: 'nothing in the text or design of the War Powers Resolution suggests the 60-day clock can be paused or terminated'; Blumenthal: 'the blockade alone is a continuing act of war' — but operationally, with the 50-47 Senate WPR vote already failed Thursday and Murkowski's AUMF push not landing until the week of May 11, no procedural vehicle constrains the executive in the Pakistan-channel window. The 'terminated' framing is the legal architecture for indefinite continuation of the extended-blockade plan and the CENTCOM kinetic option Cooper-Caine briefed Thursday. Analytical judgment: the duration signal compounds with the kinetic option; Tehran now negotiates against an open-ended pressure instrument backed by a documented strike package and no Congressional sunset.",
    },
    {
      title: "The Pezeshkian-Ghalibaf-Araghchi rift forecloses Pakistan-channel convergence inside Trump's blockade timeline",
      body:
        "Iran International, JPost and The Week report Pezeshkian and Speaker Ghalibaf are publicly moving to remove FM Araghchi over what they describe as his execution of IRGC commander Vahidi's instructions without informing the President — Araghchi acting 'less as a cabinet minister than as an aide to Vahidi' on the Pakistan channel. The reporting concretely names the Tehran negotiating-authority gap: Ghalibaf earlier resigned as head of the negotiating team after being reprimanded over efforts to include the nuclear file; Araghchi's April 24 Islamabad trip alone delivered a proposal Trump publicly rejected; the revised three-phase proposal Iran sent through Pakistan on Thursday — Hormuz first, nuclear deferred — was the IRGC-aligned position rather than the Pezeshkian-Ghalibaf position. Trump's Friday 'tremendous discord' framing thus has surface evidence and validation. The structural implication is severe: any Pakistan-channel concession Araghchi delivers can be repudiated by Pezeshkian or his parliament, and any Pezeshkian-aligned concession can be repudiated by IRGC Vahidi who controls Khamenei-level signaling — Khamenei's Friday written statement defending 'nuclear and missile capabilities' as national assets is the IRGC-line backstop. Analytical judgment: Pakistan-channel convergence requires Iranian negotiating authority that does not currently exist; probability move 22 → 19 reflects the rift, with Pakistan land-corridor relief preventing collapse to ~15.",
    },
    {
      title: "Taiwan / CPC procurement: Brent's $108.17 settle is the duration-signal floor; the kinetic-tail $130-$170 ceiling is structurally retained",
      body:
        "For Taiwan and CPC, Friday's Brent settle at $108.17 — pulled back ~2% from Thursday's $126.41 intraday wartime high but holding the post-Wednesday floor and registering a second consecutive weekly gain — is the market pricing the duration signal: the back-month is no longer hedging a near-term ceasefire path because Trump's 'terminated' declaration plus the 'not satisfied' proposal rejection plus the Iranian negotiating-authority fracture eliminate that path inside the next 4-6 weeks. Citi's $150-by-end-June operating curve from Wednesday now sits inside a wider distribution: structural floor at the $108-115 OPEC-fragmentation-plus-extended-blockade-plus-duration-signal level, central case Citi $150, kinetic-tail $130-$170 retained on the strikes-plus-Hormuz-seizure variant Cooper-Caine briefed Thursday and which the Friday letter's 'terminated' framing legally enables without Congressional approval. CPC procurement should treat the Pakistan land corridor (Day 63 carry) as the only downside relief signal currently operating; the IEA's 'largest supply disruption in the history of the global oil market' framing per ING THINK is the duration baseline. MOEA's no-Hormuz-through-October scenario hardens to central case; CPC coal-rotation through summer holds with residual-LNG-procurement floor moving above $115. Analytical judgment: even a Pakistan-channel breakthrough now requires Iranian leadership realignment that Pezeshkian-Ghalibaf-Araghchi reporting indicates is months not weeks away; the duration signal Trump priced Friday is the new procurement-window baseline through Q3 2026.",
    },
  ],
  casualtyNotes: {
    us: "No new KIA. Trump 'terminated' letter to Congress sidesteps May 1 War Powers deadline. Trump 'not satisfied' / 'blast them away' rejection of Iran's three-phase Pakistan-channel proposal. Cooper-Caine kinetic option from Thursday remains in presidential decision queue. USS Peterson/Murphy de-mining Day 8. Hormuz transit ~5/day vs. ~140 pre-war. Murkowski week-of-May-11 AUMF residual constraint indicator.",
    israel:
      "No new IDF KIA in Friday window. Sgt. Ben Hamo Thursday Qantara KIA carries. IDF strike wave on south Lebanon Friday — 15 reported killed by Lebanon MOH. Israel asks Trump for 2-3 week Lebanon deadline; mid-May expanded-campaign trigger pencilled in. Katz 'IDF ready' pending US permission carries. US pushes Aoun-Netanyahu direct meeting before bilateral talks resume in Washington.",
    iran:
      "No new combat losses reported. Khamenei written statement: 'only place for US in Persian Gulf is at the bottom of its waters.' Pezeshkian and Ghalibaf reportedly seeking FM Araghchi's removal over IRGC-Vahidi subservience. Iranian rial 1,776,000/USD on May 2 per AlanChand free-market quote. CBI inflation 65.8% YoY. Pakistan Transit of Goods Order from Day 63 carries.",
    other:
      "Lebanon MOH cumulative revised 2,310+ → 2,618 KIA / 8,094 WIA (+15 Friday + multi-day reconciliation). Three paramedics buried Friday. Aoun statement on civilian protection. US urges Aoun-Netanyahu meeting; Hezbollah rejects bilateral talks. Pakistan Transit of Goods Order carries. UAE OPEC exit effective May 1 carries. Wang Yi 'might over right' carry.",
  },
};

export default data;
