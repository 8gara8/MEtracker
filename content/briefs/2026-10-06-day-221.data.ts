import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "ESCALATING holds even though the war's central economic fact reversed. Kpler put Gulf crude exports at 16.5 million barrels a day in September, level with the pre-war average, with 40% routed around Hormuz. That is a material easing of supply, not of the war: Saudi Arabia, Turkey and Pakistan activated a collective-defence pact and committed foreign troops to the kingdom, Yemeni government forces took Mocha and Dhubab behind 100 coalition jets, the Houthis widened their target set to Riyadh's civil airport and told every airline to leave Saudi airspace, and Trump rejected Iran's reopening terms while Pezeshkian called talks \"meaningless\". Supply recovered; the number of belligerents grew.",
      risk7d:
        "Extreme holds, and the content is now aviation and the bypass routes. Yahya Saree warned all global airlines against flying Saudi airspace except over Mecca and Medina, having claimed King Khalid International Airport, the Rabigh refinery and the East-West pipeline's Khurais pumping station. Three tankers were struck in Hormuz over the weekend and the IRGC turned another back under threat. Two carrier strike groups and amphibious groups remain inbound for late October, roughly 20,000 personnel, and Hegseth declined to say whether a third carrier follows: \"It's a fair question, but I will never answer it.\" Aramco's chief executive called the supply cushion \"scarily thin\".",
      spillover:
        "Critical holds and acquires two new contributors. Under the Mecca Joint Defence Agreement of 7 August, whose clause holds that an attack on one signatory is an attack on all, Pakistan and Turkey agreed after an emergency meeting in Riyadh to \"provide military forces and capabilities and ensure their rapid deployment in Saudi Arabia\". A NATO member and a nuclear-armed state are committing forces to a theatre where Iran's ally fires ballistic missiles at the host. Separately the United States and nine Western Hemisphere states demanded Iran and its proxies \"halt these actions now\", and Treasury warned foreign banks of sanctions without notice.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'Euronews / Kpler',
      event: 'Gulf crude exports return to pre-war parity, with 40% bypassing Hormuz',
      summary:
        "Kpler data for 1-28 September put Middle East Gulf crude exports at 16.5 million barrels a day, level with the pre-war average and up from 6.0 million in March. Forty per cent now moves through alternative routes, chiefly Saudi Arabia's East-West pipeline to Yanbu and the Emirati Abu Dhabi-to-Fujairah line, cutting Hormuz's share of regional exports from 83% before the war to 60%. Kpler's Amena Bakr was cited on the shift. December Brent was put at $102.25 and WTI at $90.50, against roughly $72 pre-war; OPEC+ core production reached 25 million barrels a day in August.",
      impact:
        "Iran's single lever has been devalued at the exact moment its owner priced it at seven conditions. The unmeasured-strait prior does not retire — it inverts: the question is no longer how little passes through Hormuz but how little that now matters. A chokepoint carrying 60% rather than 83% of the region's exports is a weaker hostage, and the party holding it has published its asking price.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Xinhua / Gulf News',
      event: 'Turkey and Pakistan commit forces to Saudi Arabia under the Mecca pact',
      summary:
        "After an emergency meeting of the Strategic Political and Defence Committee in Riyadh on Monday, a joint statement on the Saudi defence ministry's account said Pakistan and Turkey would \"provide military forces and capabilities and ensure their rapid deployment in Saudi Arabia\" and that the three would move \"immediately to the practical implementation of the collective defence commitments\", affirming that \"the security of each party is an integral part of the collective security of the three\". The Mecca Joint Defence Agreement, signed on 7 August, holds that an attack on any signatory is an attack on all. No force numbers, units, timetable or named officials were given.",
      impact:
        "The first operationalisation of a mutual-defence clause in this war, adding a NATO member and a nuclear-armed state to a theatre where Iran's ally is firing ballistic missiles at the host. Recorded as a commitment, not a deployment: without numbers or dates this is a political fact today and a military one only when forces arrive. Spillover stops being a risk category and becomes an order of battle.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / CNN',
      event: 'Mocha and Dhubab change hands as the government declares a drive on Sanaa',
      summary:
        "Yemeni government forces said they had retaken the port of Mocha and the Dhubab district of Taiz governorate and seized positions near Bab al-Mandeb, with the Homeland Shield Forces and the Giants Brigades conducting \"a large-scale military operation with air cover\" that cut \"supply lines and roads leading to Bab al-Mandeb\", and announced a strategic offensive toward Sanaa. Coalition spokesman Turki al-Maliki said 100 fighter jets had supported the operation. The military statement reported Houthi fighters killed, wounded and captured without numbers. Al Jazeera said it could not independently verify the battlefield reports. The coalition also struck Hodeidah. The UN Secretary-General expressed \"deep concern\".",
      impact:
        "Mocha, taken by the Houthis in mid-September, is back in government hands within three weeks — the first reversal of a Houthi coastal gain. Per the unverified-claim-ceiling prior nothing is adopted: the toll is unnumbered on one side and unanswered on the other. Analysts put the ceiling plainly — Nicholas Brumfield said the \"balance of power has not yet shifted in favour of either side\".",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'CBS News / TBS News',
      event: "The Houthis take in Riyadh's civil airport and order airlines out of Saudi airspace",
      summary:
        "Houthi spokesman Yahya Saree said drones and missiles had been fired at King Khalid International Airport in Riyadh, an Aramco refinery at Rabigh and Saudi military sites, and warned \"all global airlines using Saudi airspace against continuing their flights\" with the exception of airspace over Mecca and Medina. Separately a pumping station at Khurais on the roughly 1,200-kilometre East-West pipeline to Yanbu was reported struck on Sunday, Saree claiming \"precise hits causing large fires\"; reports conflicted over whether flow stopped, and no Saudi or Aramco damage assessment was published. Aramco's chief executive warned that \"the supply resilience cushion is scarily thin\".",
      impact:
        "Two target classes open in one cycle. Civil aviation over a G20 state is now declared, a cheaper way to impose cost than hitting a refinery. And the pipeline carrying the bypassed barrels is itself under fire, so the 40% that no longer needs Hormuz has acquired its own vulnerability. The escalation-ladder-by-target-class prior hardens from oil to passengers.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: 'UKMTO / CENTCOM / Fars',
      event: 'Three tankers struck in Hormuz as CENTCOM publishes its blockade ledger',
      summary:
        "UKMTO recorded a third tanker struck by an unidentified projectile on Sunday after two were hit on Friday, and the Revolutionary Guards ordered another vessel to turn back or be attacked. IRGC-affiliated Fars claimed Iran had targeted 13 tankers it described as \"violators\" over seven days. US Central Command said it had destroyed 13 commercial vessels in the strait over twelve weeks, disabled three that refused to comply and redirected 130 others since 14 July. Admiral Brad Cooper said: \"We will swiftly act against any vessels trying to run the blockade.\"",
      impact:
        "Two blockades now run against each other on the same water, and for the first time both publish ledgers — 13 tankers claimed by Tehran against 13 vessels destroyed by CENTCOM. The symmetry is rhetorical rather than real: one side is interdicting the other's exports while the other is taxing neutral hulls. Neither figure is independently verified; both are recorded as claims by their claimants.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'high',
      source: 'Jerusalem Post / CBS News',
      event: 'Camp David convenes, Hegseth claims the strait, and Trump rejects the seven conditions',
      summary:
        "Vance, Rubio, Hegseth, Witkoff, CIA director John Ratcliffe and Joint Chiefs chairman Dan Caine met at Camp David on Friday on the war and on Yemen. At Quantico, Hegseth said \"Iran will never, ever, ever have a nuclear weapon\", that Tehran \"can decide to give it up the way that they should ... or it may have to happen the hard way\", and that \"Iran wants to play games with things like the Strait of Hormuz. They don't control it. We do\", adding that the blockade \"has been ironclad, and we're running almost at pre-war levels every single night\". Trump ruled out Iran's reopening proposal; Pezeshkian called negotiations \"meaningless\".",
      impact:
        "The agenda dispute is now a sovereignty dispute: Tehran prices the strait at seven conditions while Washington denies Tehran controls it at all. There is no bargain available over an asset both sides claim to hold. With the principals convened, the terms rejected and Iran's president calling the channel pointless, the thirty-day window narrows again — hence 8 to 7.",
    },
    {
      id: 7,
      direction: 'mixed',
      importance: 'high',
      source: 'AP via US News',
      event: 'AP finds the Port Shuaiba drone warnings were on the table before the strike',
      summary:
        "An Associated Press investigation into the 1 March drone attack at Port Shuaiba, Kuwait, which killed six American soldiers and wounded dozens, reported that commanders under Major General John Hinson and Brigadier General Clinton Barnes relocated logistics operations to the port despite threat assessments showing it lacked adequate defence against drones and intelligence indicating it was a likely Iranian target, when a safer Kuwaiti site was available. Chief Warrant Officer 3 Robert Marzan was killed. No mass-casualty plan was in place; wounded were sent to Army barracks in Germany rather than Landstuhl Regional Medical Center, and some brain-injury diagnoses took weeks. The Army completed its investigation in June and has not released it.",
      impact:
        "The casualty-reconciliation gap acquires a documented cause rather than another number. Scored mixed because disclosure improved while the record worsened: the first granular account of an American mass-casualty event in this war comes from reporters, not from the Department that finished investigating it four months ago. Nothing is added to the ledger; the six dead are already inside the carried 17.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'medium',
      source: 'Times of Israel',
      event: 'Trump personally blames Iran for the Flydubai attack, against Vance and Israeli services',
      summary:
        "Asked whether Iran was responsible for the attempted crash of the flydubai aircraft, Trump said: \"I do. I personally do\", without elaborating. Vice President Vance said he had not seen conclusive evidence tying Tehran to it. Netanyahu and Israeli security officials assessed that the Omani co-pilot acted independently and called it premature to determine Iranian involvement. Israeli sources said fighter jets were scrambled and Israel was prepared to shoot the aircraft down before it diverted to Saudi Arabia; Shin Bet agents are taking part in the interrogation in the UAE. Netanyahu was heckled by a bereaved father at the 7 October memorial.",
      impact:
        "Attribution now splits inside one administration and across one alliance: the American president against his own vice-president and against the Israeli services holding the file. The attribution-withdrawal prior takes its sharpest form yet — the evidentiary case has not strengthened since Day 218, and the political claim has. Also recorded: Israel came within a decision of shooting down a civil airliner.",
    },
    {
      id: 9,
      direction: 'escalating',
      importance: 'medium',
      source: 'NCRI / Iran International',
      event: "Two more protesters executed as the rial hits 268,500 and gas deliveries fall 14%",
      summary:
        "Iran's judiciary announced the execution on Monday of Alireza Sepahi and Alireza Raisi, both detained during the January 2026 protests. The open-market dollar reached 268,500 tomans on 3 October, against the roughly 258,000 this series carried. National Gas Company head Saeed Tavakkoli said gas delivered to the national network ran 14% below the first six months of last year. Health commission spokesman Salman Eshaghi said authorities had \"closed our eyes to people being killed\" and called insurers \"effectively bankrupt\". Treasury warned foreign banks of sanctions without notice under Operation Economic Outcast.",
      impact:
        "The institutional-attrition prior moves from the oil ministry to the gas network and the health system, with the state's own officials supplying the figures. The rial's 268,500 against the carried 258,000 is a fresh low, not a reconciliation of the divergent rate series. Treasury's bank warning takes one of this brief's standing Brent triggers from threat to notice.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 · WIA: 440 (AP/CENTCOM combat series)',
      delta: '+0 disclosed',
      status:
        "Nothing disclosed for a sixth consecutive cycle, recorded as an absence of disclosure rather than a lull. What changed is the record, not the count: an AP investigation into the 1 March Port Shuaiba attack in Kuwait — six killed, dozens wounded — reported that commanders moved logistics operations there despite assessments showing inadequate drone defence and intelligence flagging it as a likely target, that no mass-casualty plan existed, that wounded went to Army barracks in Germany rather than Landstuhl, and that some brain-injury diagnoses took weeks. The Army finished investigating in June and has not published. The Day 216 reconciliation gap is unanswered for a sixth day. Roosevelt and Makin Island remain inbound for late October, roughly 20,000 personnel; the Fairford bombers have not returned.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta: '+0',
      status:
        "No new Israeli military fatality. The Flydubai injuries stay outside this ledger and the attribution moved further from this brief rather than closer: Netanyahu and the Israeli security services assess the Omani co-pilot acted alone and call Iranian involvement premature, while Trump said \"I do. I personally do\" and Vance said he had seen no conclusive evidence. Israeli sources disclosed that fighter jets were scrambled and Israel was prepared to shoot the aircraft down before it diverted. Netanyahu was heckled at the 7 October memorial. Lebanon's separate ledger runs ~4,300+ killed and 12,200+ wounded, reconstruction above $27 billion, no withdrawal timeline. Twenty-one days to the 27 October election.",
    },
    iran: {
      cumulative: 'MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+',
      delta: '+0 official',
      status:
        "No new official war toll and a twenty-seventh day without a confirmed Iranian attack on a host state, qualified by the disclosed 14 September maritime strike and by UKMTO's three weekend tanker reports, which carry no attribution. The movement was economic and internal. The judiciary executed two more January protesters, Alireza Sepahi and Alireza Raisi, on the separate protest roster that is never merged with the war toll. The open-market dollar hit 268,500 tomans, gas to the national network ran 14% light, and the health commission's own spokesman described a bankrupt insurance system. Pezeshkian called negotiations \"meaningless\". China and Russia continue to reject the reinstated Security Council restrictions. IAEA verification of ~440.9 kg of 60% material remains impossible.",
    },
    other: {
      cumulative: 'KIA: 3,678+ · WIA: 10,804+ (Yemen, Iraq, Gulf states, maritime)',
      delta: '+0 adopted',
      status:
        "Nothing adopted for a third consecutive day. Government forces reported Houthi fighters killed, wounded and captured at Mocha and Dhubab without publishing numbers; the Houthis published no counter-claim; Al Jazeera could not verify the battlefield reports. A figure of more than 70 combatants killed in one day at Taiz was reported in American coverage of the Camp David meeting and is recorded, not adopted — single-sourced and unmatched by either belligerent. The movement is territorial: Mocha and Dhubab back in government hands three weeks after they fell, supply roads to Bab al-Mandeb cut, Hodeidah struck. Islamic State killed one Iraqi federal police officer near Kirkuk. Displacement holds above 145,000 against 22.3 million needing aid. Bab al-Mandeb is not formally closed.",
    },
  },
  exec:
    "⭐ The chokepoint stopped choking. Kpler put Middle East Gulf crude exports at 16.5 million barrels a day over 1-28 September, level with the pre-war average and up from 6.0 million in March, with 40% now moving through Saudi and Emirati pipelines and Hormuz's share of regional exports down from 83% to 60%. Hegseth gave the American version at Quantico: \"Iran wants to play games with things like the Strait of Hormuz. They don't control it. We do.\" Trump rejected Iran's reopening terms outright; Pezeshkian called negotiations \"meaningless\" because \"they have attacked us three times after talks\". Saudi Arabia, Turkey and Pakistan then activated the Mecca Joint Defence Agreement, the two committing after an emergency meeting in Riyadh to \"provide military forces and capabilities and ensure their rapid deployment in Saudi Arabia\" — no numbers, no dates. On the ground Yemeni government forces claimed Mocha and Dhubab back and cut the supply roads to Bab al-Mandeb behind 100 coalition fighter jets, though Al Jazeera could not verify the battlefield reports. The Houthis widened the target set to King Khalid International Airport and the Rabigh refinery, warned every airline out of Saudi airspace but Mecca and Medina, and struck the East-West pipeline's Khurais pumping station; Aramco's chief executive called the supply cushion \"scarily thin\". Three tankers were hit in Hormuz over the weekend while CENTCOM disclosed 13 vessels destroyed in twelve weeks against Fars's claim of 13 tankers targeted in seven days. An AP investigation found the Port Shuaiba drone warnings were on the table before the strike that killed six Americans. Direction holds escalating; seven-day risk extreme; spillover critical; the thirty-day probability eases 8 → 7.",
  implications: [
    {
      title: 'The lever broke before the price could be paid',
      body:
        "Iran has spent seven months and one declared asking price on a chokepoint that has stopped being one. Kpler's September count puts Gulf crude exports at 16.5 million barrels a day, level with the pre-war average and 10.5 million above March, with 40% moving through the Saudi line to Yanbu and the Emirati line to Fujairah; Hormuz now carries 60% of the region's exports against 83% before the war. Day 220 recorded Ghalibaf pricing the strait at seven conditions; the asset behind them is now worth roughly a quarter less, and Hegseth answered with a denial of title rather than a counter-offer: \"They don't control it. We do.\" Analytical judgment: under the multi-clock framework the energy-infrastructure clock improved materially while the negotiation-capacity clock worsened, and the two are causally linked. A blockade that no longer blocks removes the only thing Tehran had to sell, which puts arithmetic behind Washington's stated reason for refusing the Qatari paper. The unmeasured-strait prior inverts rather than retires: the question is not how much passes through Hormuz but how little that figure decides. Watch whether Iran lowers the price or attacks the routes that replaced it — Khurais suggests the second.",
    },
    {
      title: 'The pact that answered the proxy, and the airliner nobody can attribute',
      body:
        "Two alliance facts moved in opposite directions. Saudi Arabia, Turkey and Pakistan activated the Mecca Joint Defence Agreement of 7 August, under which an attack on one is an attack on all, with Ankara and Islamabad committing to \"ensure their rapid deployment in Saudi Arabia\" — a NATO member and a nuclear-armed state entering a theatre where Iran's ally fires ballistic missiles at the host, and the first operationalisation of a mutual-defence clause in this war. Against that, attribution of the Flydubai attack fractured inside the American government: Trump said \"I do. I personally do\", Vance said he had seen no conclusive evidence, and Netanyahu's own services assess the Omani co-pilot acted alone. Analytical judgment: the coalition-cohesion clock is now two clocks. The regional one deepened — three states, one clause, forces pledged; the Atlantic one has not recovered from the Fairford withdrawal, and the evidentiary basis for the war's newest grievance is weaker than the political claim attached to it. Treat the Mecca commitment as political until numbers and dates appear; treat the attribution split as the more consequential, because a president ahead of his own intelligence is how unauthorised escalation has started before.",
    },
    {
      title: 'Taiwan: the cargo question turns on routes now, not on the strait',
      body:
        "No fresh Taiwan-relevant development today; prior assessments are unchanged. The T$415 billion package — T$233.8 billion into CPC against T$127.6 billion of accumulated losses — remains before parliament unvoted, and the Qatari and Emirati LNG return is still placed in October. What changed is the frame rather than the facts. If Gulf crude is back at pre-war volumes with 40% bypassing Hormuz, the binding constraint on Taipei's cargoes is no longer the strait's closure but whether the bypass routes hold and whether LNG, which cannot use an oil pipeline, follows crude's recovery at all. It does not: Qatari gas has no Yanbu or Fujairah equivalent, so Taiwan's exposure is strictly worse than the headline recovery implies. Analytical judgment: the mediator-is-also-the-supplier prior sharpens — Doha is still both broker and withheld shipper, and today Washington rejected the terms its broker was carrying. The fiscal-buffer prior holds against December Brent at $102.25 and a Q4 forecast near $106.60. Watch whether CPC publishes an October supply assurance, and whether any party distinguishes crude recovery from gas recovery in public — the conflation is the risk Taipei cannot afford to inherit.",
    },
  ],
  casualtyNotes: {
    us:
      "The combat series holds at 17 killed and 440 wounded with nothing disclosed for a sixth cycle, but the record improved from an unexpected direction. An AP investigation into the 1 March Port Shuaiba attack reported that commanders relocated logistics operations to the Kuwaiti port despite assessments showing it could not defend against drones and intelligence naming it a likely target, that no mass-casualty plan existed, that wounded were sent to Army barracks in Germany rather than Landstuhl, and that some brain-injury diagnoses took weeks. The Army finished investigating in June and has published nothing. The president's 18 still sits unreconciled against his own Department's August database.",
    israel:
      "Iran-front casualties hold at 56 killed and 8,652+ wounded. The aviation injuries stay out of this ledger and the case for keeping them out strengthened again: Netanyahu's own security services assess the co-pilot acted alone, while the American president says he personally blames Iran and his vice-president says the evidence is not conclusive. Newly disclosed: Israel scrambled fighters and was prepared to shoot the airliner down before it diverted to Saudi Arabia. Twenty-one days to the 27 October vote.",
    iran:
      "No new official Iranian war toll and a twenty-seventh day without a confirmed launch against a host state. The ledger's movement was economic: the dollar at 268,500 tomans, gas to the national network 14% below last year, and the parliamentary health commission's own spokesman describing a bankrupt insurance system and deaths from medicine shortages. Two more January protesters, Alireza Sepahi and Alireza Raisi, were executed — carried on the separate protest roster, never merged with the war toll.",
    other:
      "No adopted delta for a third day. Government forces reported Houthi dead, wounded and captured at Mocha and Dhubab without numbers; the Houthis answered with claims against Saudi targets rather than a counter-toll; Al Jazeera could not verify either side. A reported 70-plus combatants killed in one day at Taiz is recorded and not adopted. The movement is territorial: Mocha back in government hands three weeks after it fell, and the roads to Bab al-Mandeb cut. Displacement holds above 145,000 against 22.3 million needing aid.",
  },
};

export default data;
