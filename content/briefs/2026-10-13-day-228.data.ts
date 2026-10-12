import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "ESCALATING, and for the first time the defender's own capacity is the story. The Wall Street Journal reported Saudi officials saying the kingdom is running low on air-defence interceptors and is moving batteries to cover energy sites and royal palaces. King Khalid International's closure was extended through 17 October, affecting nearly 700 flights a day, with Cirium recording 99.7 percent of the previous day's flights cancelled. The Saudi-led coalition said it destroyed two ballistic missiles aimed at Khamis Mushait and another at Riyadh, extending the target set to a fourth city.",
      risk7d:
        "Extreme and held, with the decision still open on a second day. Trump called Crown Prince Mohammed bin Salman, said the Houthis are \"misbehaving very badly\", repeated that the United States may join the Saudi campaign, and announced nothing. The Soufan Center reported Pakistan has begun airstrikes on Houthi missile and drone sites under the Mecca Defense Agreement while refusing ground forces. Britain attributed the RAF Fairford plot to the IRGC at head-of-government level with twenty-nine states signing a warning, and summoned Iran's ambassador.",
      spillover:
        "Critical, and now running through third parties in both directions. Iran's foreign ministry re-emerged after the security council's refusal, with Esmaeil Baghaei offering Tehran's \"good offices\" to mediate between Saudi Arabia and the Houthis. A fourth named hull, the Sinokor-operated VLCC Angola Prosperity, was struck in the strait with all crew safe, while CENTCOM disabled the Panama-flagged bulker Ocean Molica with a precision munition. The EU signalled readiness to protect the ICC without naming an instrument, and spent 1,600 fresh listings on Russia instead.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'Saudi officials via the Wall Street Journal / Times of Israel',
      event: '⭐ Saudi Arabia is reported running low on interceptors and moving batteries to energy sites and palaces',
      summary:
        "The Wall Street Journal, cited in the Times of Israel liveblog, reported Saudi officials saying the kingdom is running low on air-defence interceptors and is relocating batteries to cover energy infrastructure and royal palaces. No inventory figure, replenishment rate or supplier request was published, and the Saudi government has issued no statement of its own on the shortage.",
      impact:
        "The first report in this war of a defending state rationing its own air defence, and the allocation carries more information than the shortage. Covering refineries and palaces means accepting risk at the civil airports where the Houthis have actually struck four times. It converts the interceptor clock from an inference drawn from intercept counts into a stated constraint, which is why that clock moves to critical. Sourced but unquantified: the audited-figure prior applies.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Saudi aviation authorities / Flightradar24 / Cirium / Fox News',
      event: "Riyadh airport's closure is extended through 17 October, affecting nearly 700 flights a day",
      summary:
        "Saudi aviation authorities extended the closure of King Khalid International Airport through 17 October. Flightradar24 said the closure affects nearly 700 flights per day; Cirium data showed 99.7 percent of the previous day's flights cancelled, with about 60 percent of scheduled flights expected to be cancelled. Jeddah's 156 cancellations and 374 delays carry from Day 227, and Dammam disruption continues. The FAA notice through 10 December carries, now citing navigation disruptions as well as threats at all altitudes.",
      impact:
        "The first bounded aviation outage of this sequence: a closure with a named end date rather than a rolling extension. Read beside the interceptor report it is the clearest available proxy for where Saudi air defence is not being spent. Jeddah's disruption at a hub that has not been attacked remains airspace-risk repricing rather than damage.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'Trump / Scott Bessent / Prince Abdulaziz bin Salman via Fox News',
      event: 'Trump calls the Saudi crown prince, condemns the Houthis, and still does not decide',
      summary:
        "Trump confirmed a Monday call with Crown Prince Mohammed bin Salman and said of the Houthis, \"They're misbehaving very badly.\" He repeated that the United States may join Saudi efforts without announcing a decision, said the war would end \"very soon\" and \"the oil will drop like a rock\", said \"Iran will never have a nuclear weapon\", and answered \"We're going to see\" on further action over the RAF Fairford plot. Treasury Secretary Scott Bessent said the United States will \"continue to pressure\" Iran's economy. Saudi Energy Minister Prince Abdulaziz bin Salman said the kingdom's response must be \"equally serious\".",
      impact:
        "Day 227 recorded the evidentiary brake on retaliation as removed by the Houthi claim. A second cycle has now passed with the political brake alone holding, and the only new input is a call and a characterisation. Bessent's language is pressure restated rather than the \"nothing left to trade\" horizon that fell due on 12 October, which is therefore unaddressed on its own terms.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Andy Burnham / Iranian foreign ministry / Fox News',
      event: 'Britain attributes the RAF Fairford plot to the IRGC and twenty-nine states warn Iran',
      summary:
        "UK Prime Minister Andy Burnham told Parliament the September plot against RAF Fairford was \"highly likely\" coordinated in Iran and \"almost certainly\" directed by the IRGC, saying \"We will not tolerate these threats on our soil.\" The United States, the United Kingdom and 27 other countries warned Iran against further attacks on the West. Iran's foreign ministry called the accusations \"unfounded\", and Ambassador Seyed Ali Mousavi denied involvement after being summoned to the British Foreign Office.",
      impact:
        "The Fairford case moves from a criminal proceeding — the three Iranians due at the Old Bailey on 23 October carry — to a state attribution made at head-of-government level with twenty-nine signatures behind it. No consequence was announced alongside it, so this is the NATO-territory prior acquiring an attribution without acquiring an instrument.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: 'The Soufan Center (Nikkie Lyubarsky)',
      event: 'Pakistan has reportedly begun airstrikes on Houthi targets under the Mecca Defense Agreement',
      summary:
        "The Soufan Center reported that Pakistan, bound by the August Mecca Defense Agreement, has reportedly begun airstrikes on Houthi missile and drone sites, with officials saying it will not send ground forces. Turkish Foreign Minister Hakan Fidan called the pact \"defensive in nature\" and said Ankara will conduct no operations in Yemen. The UAE is reported to be re-engaging the Houthis while directing some Yemeni units it mentored into the campaign. Egypt, Somalia, Eritrea and Sudan's army asserted in a \"Joint Alamein Declaration\" that littoral states alone should govern the Red Sea. Syria's Ahmad al-Sharaa remains undecided on Riyadh's request, and the Houthis are assessed to be close to encircling Ta'iz.",
      impact:
        "A deadline carried unanswered for five cycles now has an act attached — and still no figure, unit, sortie count or date, reaching this file through a think tank rather than through Islamabad. The declaration-without-content prior is half retired and half reinforced. The Joint Alamein Declaration is the first instrument of this war in which regional states organise against a coalition member rather than against Iran.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'high',
      source: 'Esmaeil Baghaei via Times of Israel',
      event: "Iran's foreign ministry re-emerges and offers to mediate between Saudi Arabia and the Houthis",
      summary:
        "Iranian foreign ministry spokesman Esmaeil Baghaei said Tehran is \"deeply concerned\" about the situation on the Arabian Peninsula and offered Iran's \"good offices\" to mediate between Saudi Arabia and the Houthis. Day 227 recorded Araghchi's promised reply arriving instead through Supreme National Security Council secretary Mohsen Rezaei, who called the American response \"insufficient\" and said Iran was no longer responding to the United States.",
      impact:
        "Partially reverses the security-council-channel prior inside twenty-four hours: the foreign ministry is speaking again, and speaking as an offered mediator rather than as a party. An offer to mediate between a state and one's own ally is also an implicit claim to influence over that ally, which Tehran has elsewhere denied holding. Recorded as an offer, not a channel.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'medium',
      source: 'Col. Turki Al-Maliki / Saudi Civil Defense / Reuters via Fox News',
      event: 'The coalition reports destroying missiles aimed at Khamis Mushait and Riyadh',
      summary:
        "Coalition spokesman Col. Turki Al-Maliki said on X that the coalition destroyed two ballistic missiles fired toward Khamis Mushait, and coalition forces said they destroyed another missile aimed at Riyadh earlier on Monday. Saudi Civil Defense issued an early warning on X about a \"potential hostile threat\" in Riyadh and later told residents the threat had passed while urging caution; Reuters reported a witness hearing three loud explosions. No casualty or damage figure was published for any of Monday's launches.",
      impact:
        "Khamis Mushait joins Riyadh, Dammam and Jeddah, and is the first of the four that is a military rather than a civil-aviation target. All launches were reported intercepted, which is evidence the system still works on the day it is reported thinning — the two facts are held together rather than resolved.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'medium',
      source: 'Vanguard Tech / CENTCOM / the IRGC via Seatrade Maritime, Maritime Executive, Jerusalem Post',
      event: 'A fourth named hull is struck, CENTCOM disables a bulker, and the blockade series gets a third set of bounds',
      summary:
        "Vanguard Tech identified a VLCC struck on the port side at the eastern end of the Strait of Hormuz as the Angola Prosperity, operated by Sinokor, with all crew safe. CENTCOM said a fighter jet struck the stern of the Panama-flagged bulker Ocean Molica, also reported as the Arika Sun, with a precision munition, \"fully disabling the ship's propulsion without harming the crew\" after the crew \"ignored repeated warnings and attempted to run the ongoing naval blockade against Iran\". CENTCOM said four vessels have been disabled and 135 ships turned around in three months, with ten IRGC-linked tankers destroyed. The IRGC released unverified footage of the UAE-owned tanker Al Maqam, saying it had been \"ignoring warnings and switching off its navigation system\". The Forward Seamen's Union of India put the Petro Dolphin's crew at fourteen against Sonowal's eleven.",
      impact:
        "CENTCOM's four-disabled and 135-turned-around figures are bounded differently again from both the 5 October series of thirteen destroyed, 130 rerouted and three disabled, and from the 270-plus redirected carried here. Three sets of bounds, none merged. The crew-count divergence on a single named hull shows the contested-count prior now operating on crew manifests, and the two Indian seafarers remain missing rather than dead.",
    },
    {
      id: 9,
      direction: 'neutral',
      importance: 'medium',
      source: 'Kaja Kallas and the EU Foreign Affairs Council via anews, European Sting, IEU Monitoring',
      event: 'The EU declines to activate the Blocking Statute and spends its countable action on Russia',
      summary:
        "After the Foreign Affairs Council in Luxembourg, EU High Representative Kaja Kallas called the six-month period before the US measures take effect a \"window of dialogue\" and said \"The EU has options to ensure that the court can continue its vital work\", naming no instrument, measure or timeline. The chairs of the AFET, DROI, INTA, JURI and D-US committees issued a separate joint statement on the sanctions. At the same session ministers adopted nearly 1,600 new listings against Russia's military-industrial complex, more than half targeting the ballistic-missile production chain, which Kallas called the largest single expansion of the EU's list since February 2022.",
      impact:
        "Day 227's deadline is answered and the answer is readiness without activation. The allied-legal-challenge prior stays open with the Blocking Statute unfired after being publicly floated by Belgium. The contrast inside one session is the finding: 1,600 countable listings against Russia, and an option set against the United States that no one would name.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 · WIA: 440 (AP/CENTCOM combat series)',
      delta: '+0 disclosed',
      status:
        "A thirteenth consecutive cycle with nothing disclosed on the combat series, recorded as an absence of disclosure rather than a lull. The American civilian killed at King Khalid stays on the \"other\" line and has still not been named by the State Department. The Day 216 gap against CENTCOM's figure of 18 is unanswered for a thirteenth day, the June Port Shuaiba investigation is unreleased, and there is no Pentagon response to the Congressional Research Service figure of at least 81 US aircraft and drones lost or damaged. CENTCOM's new blockade bounds — four vessels disabled and 135 turned around in three months, ten IRGC-linked tankers destroyed — sit beside the 5 October series and the 270-plus redirected carried here, and none of the three are merged. Roosevelt CSG and Makin Island ARG remain inbound for late October.",
    },
    israel: {
      cumulative: 'KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+',
      delta: '+1 KIA / +24 WIA',
      status:
        "The delta is a Hezbollah submunition that exploded during a school hike in the Ramim Ridge area, killing a teenager and wounding 24; authorities said it went off in a schoolchild's hands and are considering restricting hikes there. The boundary is stated rather than quietly crossed: this is Lebanon-front ordnance residue rather than a fresh attack, and it is carried on the Lebanon-front component for that reason. The IDF fired an interceptor at a suspicious aerial target over southern Lebanon with no sirens sounded, and a strike near a Rafah mosque killed two men, which the IDF said were terror operatives under review. Gaza's health ministry series of 74,370 killed and 175,371 injured stays parallel and unmerged. Fourteen days to the election.",
    },
    iran: {
      cumulative: 'MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+',
      delta: '+0 official',
      status:
        "No new official war toll and a thirty-fourth day without a confirmed Iranian attack on a host state's territory — the qualifier still attached, because the IRGC's claims remain against hulls rather than soil. The execution ledger gains a named case: Iran's Supreme Court upheld a death sentence against mountaineer Ali Sina Mostafavi, per Human Rights for Sport, and the roster of 70 since January and 194 on death row is not merged with it pending confirmation. The UN experts' 10 October appeal to halt all executions is still unanswered. Brig. Gen. Ali Jahanshahi said more than 50 combat and support units are deployed along Iran's borders. The IAEA still cannot verify roughly 440.9 kg of 60% material and no response to the Minzadehei imagery has been made.",
    },
    other: {
      cumulative: 'KIA: 3,697+ · WIA: 11,172+ (Yemen, Iraq, Gulf states, maritime)',
      delta: '+0',
      status:
        "No addition: every Monday launch was reported intercepted and no toll was published for any of them, including at Khamis Mushait. The airport sequence is now carried on four competing aggregates that are not summed or reconciled — GACA's 12 killed and 309 wounded for 10 October, which this file adopts; the Saudi civil aviation figure of one killed, a Pakistani resident, and eleven injured for 11 October, also adopted; an FAA-cited 13 dead and more than 300 wounded for the earlier attack, not merged; and a Reuters count of more than 15 killed in two weeks, alongside a Fox News aggregate of at least 20 killed including a US national, neither of which is adopted. Name the publisher with the number. No Dammam toll has ever been published. The two Indian seafarers from the Petro Dolphin remain missing and are not counted as dead; the IMO's 24 seafarers killed across 93 incidents and WHO's Yemen series of 959 dead since 6 August stay parallel.",
    },
  },
  exec:
    "Saudi Arabia is running short of interceptors. The Wall Street Journal reported Saudi officials saying the kingdom is running low on air-defence interceptors and is moving batteries to cover energy sites and royal palaces — the first report in this war of a defending state rationing its own air defence, and a revealed priority that places refineries and palaces ahead of the civil airports where the attacks have actually landed. King Khalid International's closure was extended through 17 October, affecting nearly 700 flights a day on Flightradar24's count, with Cirium recording 99.7 percent of the previous day's flights cancelled. The Saudi-led coalition said it destroyed two ballistic missiles aimed at Khamis Mushait and another at Riyadh, extending the target set to a fourth city; no toll was published for any Monday launch. Trump called Crown Prince Mohammed bin Salman, said the Houthis are \"misbehaving very badly\", repeated that the United States may join the Saudi campaign, and again did not decide. The Soufan Center reported Pakistan has begun airstrikes on Houthi missile and drone sites under the Mecca Defense Agreement while refusing ground forces. Britain attributed the RAF Fairford plot to the IRGC, Prime Minister Andy Burnham calling it \"highly likely\" coordinated in Iran and \"almost certainly\" IRGC-directed, with twenty-nine states signing a warning and Iran's ambassador summoned. Iran's foreign ministry re-emerged after the security council's refusal, Esmaeil Baghaei offering Tehran's \"good offices\" to mediate between Saudi Arabia and the Houthis. The EU signalled readiness on the ICC without activating anything. Direction holds escalating; the thirty-day probability holds at 8.",
  implications: [
    {
      title: 'Air defence became a rationed resource, and the ration order is the information',
      body:
        "The Wall Street Journal reported Saudi officials saying the kingdom is running low on interceptors and relocating batteries to protect energy sites and palaces. Analytical judgment: under the multi-clock framework this is the first cycle in which the interceptor clock stops being an inference and becomes a stated constraint, and it moves to critical. For two hundred days this file has estimated depletion from sortie and intercept counts; a defender now says it is short. The allocation matters more than the shortage. Covering refineries and palaces means accepting risk at civil airports, which is precisely where the Houthis have struck four times, and it explains the aviation picture better than the attacks do: a closure extended to 17 October, nearly 700 flights a day affected, 99.7 percent of the previous day's flights cancelled on Cirium's count. Two qualifications hold. This is a press report of what officials say, not a Saudi government statement, and the kingdom has published no inventory, replenishment rate or supplier request — so the shortage is sourced but unquantified, and the audited-figure prior applies. Second, Monday's launches were all reported intercepted, which is evidence the system is still working at the moment it is described as thinning. The coalition's claim of two missiles destroyed over Khamis Mushait also extends the target set to a fourth city and the first military one.",
    },
    {
      title: "Pakistan started shooting, the EU declined to act, and Tehran's foreign ministry came back as a mediator",
      body:
        "Three coalition and diplomatic threads moved in opposite directions. The Soufan Center reported Pakistan has begun airstrikes on Houthi missile and drone sites under the August Mecca Defense Agreement while ruling out ground forces — which answers, with an act, a deadline this file carried unanswered for five cycles. Analytical judgment: the declaration-without-content prior is partly retired and partly reinforced. There is now a reported kinetic contribution, but still no figure, unit, sortie count or date, and it reaches this file through a think tank rather than through Islamabad. Turkey's Fidan restated that Ankara will conduct no operations in Yemen, and Syria has still not answered Riyadh. The EU answered the Blocking Statute deadline with readiness and no instrument: Kaja Kallas called the six-month runway a \"window of dialogue\" and said the EU \"has options\", naming none, while the same session adopted nearly 1,600 new listings against Russia. The bloc's countable action went somewhere else. Against that, Iran's foreign ministry spoke again within a day of the security council's refusal, with Esmaeil Baghaei offering Tehran's \"good offices\" between Saudi Arabia and the Houthis — which partly reverses yesterday's channel displacement and is also a claim to influence over an ally Tehran elsewhere denies controlling. The probability holds at 8 because these cancel.",
    },
    {
      title: 'Taiwan: a third day of silence, now logged as a pattern rather than a gap',
      body:
        "No fresh Taiwan-relevant development today; prior assessments are unchanged. Neither U-Ming Marine Transport, nor Global Energy Maritime, nor any Taipei ministry has confirmed or disputed the identification of the struck VLCC GEM NO.2 as Taiwan-managed, which is now a third consecutive cycle of non-response to an identification carried by international maritime press and vessel registries. Monday's named hulls — the Sinokor-operated Angola Prosperity and the Panama-flagged Ocean Molica disabled by CENTCOM — carry no reported Taiwanese commercial interest. Analytical judgment: the solvency-not-price and crude-is-not-gas priors stand unmodified, and the NT$415 billion package with its NT$180.94 billion of subsidy and NT$233.83 billion of capital injection remains unvoted against CPC's early-2027 insolvency assessment. Under §3.5.10 the absence is acknowledged rather than padded. The analytical upgrade is that three days of silence from an operator, its joint venture and its regulator is no longer an unanswered question but a consistent posture, and the non-response prior is restated on that basis. Brent at $103.3 on Monday, against the $104.28 close carried from Thursday, means the delivered-cost channel through which Taiwan feels this war has not moved either.",
    },
  ],
  casualtyNotes: {
    us:
      "The combat series holds at 17 killed and 440 wounded, undisclosed for a thirteenth cycle. The American civilian killed at King Khalid remains on the \"other\" line and is still unnamed by the State Department. CENTCOM's figure of 18 is unreconciled for a thirteenth day. CENTCOM's blockade accounting now exists on three different sets of bounds — four disabled and 135 turned around over three months, thirteen destroyed and 130 rerouted over twelve weeks from 5 October, and the 270-plus redirected carried here — and none are merged.",
    israel:
      "The delta is ordnance residue, not a fresh attack: a Hezbollah submunition exploded during a school hike at Ramim Ridge, killing a teenager and wounding 24, and is carried on the Lebanon-front component with that boundary stated. A Rafah strike killed two men per Palestinian media, which the IDF described as terror operatives under review; that death toll stays on the parallel Gaza series of 74,370 killed and 175,371 injured. Fourteen days to the vote, with Herzog saying he would do everything in his power to prevent another election round.",
    iran:
      "No new official toll and a thirty-fourth day without a confirmed attack on a host state's territory. The Supreme Court upheld a death sentence against mountaineer Ali Sina Mostafavi per Human Rights for Sport, which is held separately from the roster of 70 executions since January and 194 on death row pending confirmation; the UN experts' appeal is unanswered. Jahanshahi's 50-plus units on the borders is a claim by a commander about his own forces. The rial and wage figures carry unchanged from Day 227.",
    other:
      "Nothing added: all Monday launches were reported intercepted and no toll was published for any, Khamis Mushait included. Four aggregates for the airport sequence are carried apart — GACA's 12 and 309 for 10 October and the Saudi civil aviation figure of one and eleven for 11 October, both adopted; an FAA-cited 13 and 300-plus, and a Reuters count of more than 15 in two weeks alongside a Fox aggregate of at least 20 including a US national, none adopted. No Dammam toll has ever been published. The two Indian seafarers remain missing rather than dead, and the FSUI's fourteen-crew figure for the Petro Dolphin against Sonowal's eleven is unreconciled.",
  },
};

export default data;
