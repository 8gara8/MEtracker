import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction stays escalating because the campaign crossed the line it had spent five months circling. Iran's Atomic Energy Organization says US projectiles struck the partly built Darkhovin nuclear power plant in Khuzestan early Sunday, and the IAEA has opened an inquiry, confirming the site is in very early construction and held no nuclear material at the agency's last visit (AEOI, IAEA, UPI, Iran International). The near-zero radiological consequence is what makes the strike legible as signalling rather than destruction: Washington is demonstrating that the nuclear target category is open. A third American also died, killed in action in northern Iraq during a controlled detonation of ordnance from a downed Iranian attack drone (CENTCOM, Defense News).",
      risk7d:
        "Seven-day risk stays extreme because the legal architecture moved with the military one. Deputy Foreign Minister Kazem Gharibabadi announced Iran is suspending its commitments under the June 17 memorandum over repeated US violations, and Trump's public response was that he 'couldn't care less' that Tehran no longer considers itself bound (Press TV, CNN). Neither party now claims to be operating inside a framework, which removes the last procedural brake on tempo. US strikes ran an eighth consecutive night on Saturday, explicitly framed by CENTCOM as punishment for the Jordan deaths, with a ninth wave Sunday evening. Iran's standing Bab el-Mandeb order to the Houthis remains unexecuted, its named trigger already publicly conceded (FDD, NPR).",
      spillover:
        "Spillover stays critical as Iran's retaliation again landed on the Gulf rather than on US forces directly. Kuwait's armed forces said air defenses were intercepting repeated Iranian missile and drone waves through Sunday, with one strike setting a power and water plant ablaze, while air raid sirens sounded across Bahrain and Tehran claimed it had struck US bases in both (Al Jazeera, RFE/RL). In the strait, the IRGC claimed it halted vessels for route violations while CENTCOM said its blockade had redirected six commercial ships and disabled one — two navies issuing incompatible transit instructions in the same waterway. Per §3.5.3 the IRGC's control claim is uncorroborated: no vessel names, flags or operators released.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'high',
      source: 'AEOI / IAEA / UPI / Iran International / Al Jazeera',
      event:
        "Iran's Atomic Energy Organization said the US military targeted the under-construction Darkhovin nuclear power plant in southwestern Khuzestan province with 'a number of projectiles' early Sunday; the IAEA said it is looking into the reports, that the site is in the very early stages of construction and contained no nuclear material when last visited, and that no radiological risk is believed likely, with Director General Grossi reiterating a call for military restraint in the vicinity of all nuclear-related sites",
      summary:
        "⭐ The first reported US strike on a nuclear-designated site in this phase of the campaign. Contested framing per §3.5.3: the claim originates with Iran's nuclear agency, and the IAEA has confirmed only that it is investigating and has contacted Iranian authorities.",
      impact:
        "Bombing an empty construction site has almost no military value, which is what makes it messaging — Washington is demonstrating that the nuclear target category is now open. For five months the program was the thing to be traded; on Day 143 it became a thing to be hit.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'CENTCOM / Defense News / Axios / Fox News / RFE-RL',
      event:
        "CENTCOM said a US service member was killed in action in northern Iraq on July 18 during a controlled detonation of unexploded ordnance from a downed Iranian one-way attack drone, with a second service member wounded and treated for a minor injury; separately, US personnel recovered unidentified human remains on Sunday at the site of Friday's missile attack on Muwaffaq Salti Air Base in Jordan, with an examination underway to determine whether they belong to the service member reported missing",
      summary:
        "A third American death in four days. Source split carried per §3.1: outlets counting confirmed deaths put the war total at 17, while AP-series reporting cites 18 by treating the Jordan MIA as killed. CENTCOM is withholding identities during next-of-kin notification.",
      impact:
        "The political-will clock keeps leading the framework. Three deaths inside a week convert an air campaign that produced no American coffins for 141 days into one that is now generating them at a visible rate, with Congress's June war-powers rebuke still unresolved.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Press TV / Al Jazeera / CNN',
      event:
        "Iran's Deputy Foreign Minister Kazem Gharibabadi announced that Tehran is suspending its commitments under the June 17 memorandum of understanding, citing repeated US breaches of its obligations; Iran said at least 50 people have been killed and more than 500 wounded in US strikes this month; President Trump responded that he 'couldn't care less' that Iran no longer considers itself bound by the interim agreement",
      summary:
        "Suspension is a lower rung than abrogation and formally reversible — the foreign ministry preserving an instrument Mojtaba Khamenei had already called 'worthless and invalid' two days earlier. Casualty figures are Iranian-source per §3.5.3.",
      impact:
        "The negotiation-capacity clock is running down with neither side defending it. Tehran suspends rather than tears up, Washington declines to treat the distinction as meaningful, and the 60-day window's remaining legal force is now rhetorical.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'Al Jazeera / Press TV / Iran International',
      event:
        "Supreme Leader Mojtaba Khamenei — not seen or heard from publicly since being made supreme leader in March — issued a statement calling on Iranians to uphold 'sacred unity' as a fundamental imperative against the United States; Parliament Speaker Ghalibaf echoed the phrase, and Ali Abdollahi, head of Iran's wartime joint command, vowed the armed forces would heed the directive, days after ultra-hardliners accused Ghalibaf and Pezeshkian of plotting a coup; Foreign Minister Araghchi separately continued to back a negotiated end to the war",
      summary:
        "The rapid, coordinated amplification by the parliament speaker and the joint command is the tell. Per §3.5.3 a leadership that must publicly command unity is disclosing that it does not have it.",
      impact:
        "The command-authority gap now has an official name in Tehran's own vocabulary. It is also why a suspended agreement still has a negotiating delegation attached to it — repudiation, suspension and diplomacy are running on parallel tracks.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: 'CENTCOM / Al Jazeera / NPR / RFE-RL via GlobalSecurity',
      event:
        "US forces completed an eighth consecutive night of strikes on Iran on Saturday, ordered by Trump and framed by CENTCOM as punishment for the Jordan attack and as further degradation of Iran's ability to threaten commercial shipping, with a ninth wave launched Sunday evening; Iran fired missiles and drones at Kuwait and Bahrain, with Kuwait's general staff reporting interceptions and one strike setting a power and water plant ablaze, air raid sirens across Bahrain, and Tehran claiming it had targeted the US naval base in Kuwait",
      summary:
        "The Kuwaiti power and water plant has now been struck on three consecutive days in a state that draws roughly 90% of its drinking water from desalination — civilian-survival infrastructure, not military capacity (Al Jazeera, RFE/RL).",
      impact:
        "Nine nights of sustained strikes with no announced terminal objective is an attrition campaign, not a coercive one. Iran's continued choice to answer on Gulf hosts rather than US forces keeps the escalation inside the states Washington needs for basing.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'medium',
      source: 'Tasnim via WION / CENTCOM / Trading Economics / CNBC',
      event:
        "The IRGC Navy said it halted vessels attempting to cross the Strait of Hormuz on an 'unsafe route,' claiming two ships were involved in an 'accident' after ignoring warnings from its Strait of Hormuz Control Base while two others diverted, and asserting that only Iranian-authorised passage is safe; CENTCOM said US naval forces enforcing the blockade had redirected six commercial vessels and disabled one to ensure full compliance; Brent reached $88.10, roughly 19% above its pre-war level",
      summary:
        "Per §3.5.3 the IRGC claim is uncorroborated — no vessel names, flags, owners or destinations released, and no third-party confirmation from any flag state or operator. Transits ran as low as six vessels in a twelve-hour window against 18-22 daily earlier this month and 100-120 a day pre-war.",
      impact:
        "Two navies now issue incompatible transit instructions in the same strait, which is the practical definition of a closed waterway regardless of either side's declarations. Brent at $88 still prices one contested chokepoint, not the dual-closure tail at $150-200.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed (18 per AP series counting the Jordan MIA) · WIA: 432 · 1 MIA pending identification',
      delta: '+1 KIA / +1 WIA (northern Iraq, July 18); unidentified remains recovered at Muwaffaq Salti, Jordan',
      status:
        "A US service member was killed in action in northern Iraq on July 18 during a controlled detonation of unexploded ordnance from a downed Iranian one-way attack drone; a second was wounded and is being treated for a minor injury (CENTCOM, Defense News). On Sunday US personnel recovered unidentified human remains at the site of Friday's Muwaffaq Salti attack in Jordan, with an examination underway against the missing service member (Axios, RFE/RL). Source split per §3.1: outlets counting confirmed deaths report 17 for the war, while AP-series reporting cites 18 by treating the MIA as killed. This brief carries 17 confirmed with the MIA formally unresolved. CENTCOM is withholding identities during next-of-kin notification.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (Israel not a direct party to the US-Iran exchange)',
      status:
        "No new Israeli casualties. The Lebanon track moved diplomatically rather than kinetically: Secretary of State Rubio met Lebanese President Joseph Aoun in Washington on implementation of the June 26 US-brokered Israel-Lebanon framework, which requires Hezbollah to end hostilities and withdraw from southern Lebanon and which Hezbollah has rejected. The Lebanon gap prior (§3.5.6) carries: Israel remains outside the US-Iran framework and has shown no intent to subordinate its operations to it.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta: '+~4 killed / +~100 wounded (Iranian authorities now cite 50 killed and 500+ wounded in July strikes, up from 46 and 400+)',
      status:
        "Iranian authorities say at least 50 people have been killed and more than 500 wounded in US strikes this month, up from the 46 and 400+ reported a day earlier. Figures are Iranian-source per §3.5.3. HRANA documents 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) and explicitly cautions that its military count is understated because confirmation depends largely on government data; the Foundation of Martyrs confirms ~3,468, and US and Israeli estimates run to 6,000+. Iran's Atomic Energy Organization reported the Darkhovin nuclear plant construction site struck; the IAEA says no radiological risk is likely. ~440.9 kg of 60% HEU remains unverified since June 2025.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 128+ KIA / 370 WIA; Gulf 33+ KIA / 74+ WIA; plus merchant-mariner casualties from the Hormuz attacks',
      delta: '+0 confirmed fatalities in the window (Kuwaiti and Bahraini intercepts; Kuwait power and water plant fire)',
      status:
        "No confirmed new fatalities among Gulf or Iraqi nationals in the reporting window. Kuwait's general staff said air defenses were intercepting repeated Iranian missile and drone waves on Sunday, with one strike igniting a power and water desalination plant — the third consecutive day that plant has been hit in a state drawing roughly 90% of its drinking water from desalination. Air raid sirens sounded across Bahrain. Iran claimed strikes on US bases in both. Lebanon toll stays source-split; Iraq and Gulf baselines carry.",
    },
  },
  exec:
    "Day 143 moved the war into the nuclear file. Iran's Atomic Energy Organization said US projectiles struck the partly built Darkhovin nuclear power plant in Khuzestan early Sunday; the IAEA confirmed it is investigating, said the site sits in very early construction and held no nuclear material at the agency's last visit, and Rafael Grossi repeated his call for military restraint near all nuclear-related sites (AEOI, IAEA, UPI). For 143 days the nuclear question was a bargaining file. It is now a target set. The American toll rose again: CENTCOM said a service member was killed in action in northern Iraq on July 18 during a controlled detonation of unexploded ordnance from a downed Iranian one-way attack drone, with a second wounded, and on Sunday recovered unidentified human remains at the Muwaffaq Salti site in Jordan, now being examined against the missing service member (CENTCOM, Defense News, Axios). Tehran answered legally rather than militarily: Deputy Foreign Minister Kazem Gharibabadi announced Iran is suspending its commitments under the June 17 memorandum over repeated US violations, and Trump said he 'couldn't care less' (Press TV, Al Jazeera, CNN). Mojtaba Khamenei, unheard from publicly since March, called for 'sacred unity' — a message Ghalibaf and the head of the wartime joint command immediately echoed, aimed inward after ultra-hardliners accused the leadership of plotting a coup, and one Araghchi undercut by continuing to back a negotiated end. US strikes ran an eighth consecutive night Saturday, framed by CENTCOM as punishment, with a ninth wave Sunday; Iran fired on Kuwait and Bahrain, setting a power and water plant ablaze. Brent reached $88. Direction escalating; thirty-day ceasefire probability falls to 4.",
  implications: [
    {
      title: 'The nuclear file stops being leverage and becomes a target list',
      body:
        "Every framework since April has been organized around Iran's nuclear program as the thing to be traded. Day 143 struck it instead. Iran's Atomic Energy Organization says US projectiles hit the Darkhovin plant in Khuzestan; the IAEA says it is investigating, that the site is in very early construction, that it held no nuclear material at the agency's last visit, and that no radiological risk is likely, with Grossi again urging restraint near nuclear sites (AEOI, IAEA, UPI). Under the multi-clock framework this moves the active-deadline and negotiation-capacity clocks at once. The military value of bombing an empty construction site is close to zero, which is what makes it legible as messaging: Washington is demonstrating that the target category is open, days after moving refueling aircraft into theatre while weighing wider strikes on power plants and nuclear sites. Trump framed the American deaths through the same lens, saying the troops died because 'they don't want to see Iran have a nuclear weapon' (The Hill, CNN) — a justification that per §3.5.3 is an assertion from an interested party, and one that converts casualties into an argument for widening rather than narrowing the target set. The risk runs opposite to the intent. The ~440.9 kg of 60% HEU unverified since June 2025 sits in facilities that are neither empty nor early-stage, and Russia's standing warning has been that strikes push Iranian factions toward weaponization rather than away. Watch whether the IAEA gains access, and whether Darkhovin was the floor or the ceiling.",
    },
    {
      title: 'Suspension is not collapse, and that distinction is the last thing holding',
      body:
        "Iran did not tear up the June 17 memorandum on Day 143; it suspended its commitments under it, which is a smaller and more reversible act. Deputy Foreign Minister Kazem Gharibabadi announced the step over what Tehran calls repeated US violations (Press TV, Al Jazeera). Read against Mojtaba Khamenei's declaration two days earlier that the US president's signature is 'worthless and invalid,' suspension is the lower rung — the foreign ministry preserving a legal instrument the leadership has already rhetorically voided. Araghchi kept backing a negotiated end in a Sunday interview. Trump's answer, that he 'couldn't care less,' removes the American incentive to treat the distinction as meaningful (CNN). That is the negotiation-capacity clock running down with nobody stopping it. The domestic reading matters more than the diplomatic one. Mojtaba's call for 'sacred unity' — his first public message since March, immediately amplified by Ghalibaf and by wartime joint command chief Ali Abdollahi — is a cohesion instrument aimed at the ultra-hardliners who days earlier accused Ghalibaf and Pezeshkian of plotting a coup (Al Jazeera, Press TV). A leadership that must publicly command unity is telling you it does not have it. The command-authority gap this series has tracked for weeks now carries an official name in Tehran's own vocabulary, and that same gap is why a suspended agreement still has a negotiating delegation attached to it.",
    },
    {
      title: 'Taiwan: Brent at $88, and an eleven-day buffer meets the summer peak',
      body:
        "Brent touched $88.10 on Friday, up more than 4% on the day and roughly 19% above its pre-war level in late February (Trading Economics, CNBC). Hormuz traffic has thinned to a trickle — six vessels tracked in one twelve-hour window against 18-22 daily crossings earlier this month, itself far below the 100-120 a day before the war — while CENTCOM's blockade has redirected six commercial ships and disabled one, and the IRGC claims a competing right to authorize passage. Two navies are now issuing incompatible transit instructions in the same strait. The §3.5.6 exposure for Taipei is unchanged and newly badly timed: roughly 60% of Taiwan's crude and about a third of its gas transit Hormuz, with Qatar supplying close to 30% of LNG imports through that specific route, against an eleven-day gas buffer that reaches the statutory fourteen days only from 2027, versus roughly 120 days of oil cover. July and August are the constraint. Taiwanese electricity demand in July runs up to 40% above February, exactly when replacement cargoes are hardest to source (Atlantic Council, CSIS). The hedges are real and slow: gas secured through September, first Cheniere cargoes under the 25-year contract due next month at about 10% of imports, a 25% US-LNG target only by 2029, and six new gasholders worth ten additional days of storage still under construction. None of that arrives inside this week.",
    },
  ],
  casualtyNotes: {
    us:
      'Third American death in four days: killed in action in northern Iraq July 18 during a controlled detonation of Iranian drone ordnance, with a second wounded. Unidentified remains recovered at Muwaffaq Salti in Jordan, examination pending against the MIA. Source split 17 confirmed vs 18 per AP series; both carried per §3.1.',
    israel:
      'No new Israeli casualties. Lebanon track moved diplomatically: Rubio met President Aoun in Washington on the June 26 framework, which Hezbollah rejects. The Lebanon gap prior carries.',
    iran:
      "Iranian authorities: 50+ killed and 500+ wounded in July strikes, up from 46 and 400+. Iranian-source, unverified. HRANA 3,636+ (1,221 mil / 1,701 civ / 714 unclassified) with an explicit understatement caveat on military deaths; Foundation of Martyrs ~3,468; US/Israeli est. 6,000+.",
    other:
      "No confirmed new Gulf or Iraqi fatalities. Kuwait intercepting repeated waves, power and water plant ablaze for a third straight day; sirens across Bahrain; Iran claims strikes on US bases in both. Lebanon toll source-split; Iraq and Gulf baselines carry.",
  },
};

export default data;
