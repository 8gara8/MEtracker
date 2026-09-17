import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds escalating, and on Day 201 the escalation was kinetic rather than retrospective. Saudi Arabia executed the retaliation it announced on Day 200, striking four Houthi-held areas of Yemen; the Houthi-run health ministry put the toll at three killed including two children in Taiz. The raids answered a barrage the Houthis claimed on Monday against King Khalid Air Base at Khamis Mushait, which they framed as a reply to more than 300 Saudi sorties in five days (Washington Times, Jerusalem Post, TRT World). The last of the three regional brakes this series carried through September is now released, leaving only Baghdad's crossings decision — which is not on a clock. Brent settled at $109.21, up 3.34% and the war's highest close, and US diesel set an all-time record at $6.05 a gallon. Nothing de-escalated on the day.",
      risk7d:
        "Seven-day risk holds extreme and its composition has changed. The dominant near-term generator is no longer Hormuz but a live, reciprocal and undated Saudi-Houthi exchange in which each side has published a justification and neither has a mediator. Salalah is dormant for a third day with Oman saying conditions are not right, the Petroline stays offline with at least eight strike points and repair estimates of five to six weeks, the Houthis hold Mokha, Mayun and the Hanish islands, and the El Gaia strike is unattributed at 72 hours. A formal Bab al-Mandeb closure, a Saudi strike on Sanaa, a laden-tanker loss, a confirmed US Navy casualty, or a named major-Chinese-bank designation before the September 24 summit each sends oil sharply higher from a $109.21 base, within roughly $11 of Goldman's $120 tail.",
      spillover:
        "Spillover holds critical and is now compounding through civilians and economies rather than through states joining. Yemen displacement was revised from 46,000 to more than 80,000 people in a fortnight, including over 2,000 who fled by boat across the Red Sea to Djibouti — the first cross-strait civilian flight of this phase, and evidence that the humanitarian clock is outrunning the count for a second consecutive day. The record US diesel price of $6.05 a gallon carries the war into American freight costs, grocery prices and Federal Reserve policy. India remains a directly affected party with one seafarer still missing. Both Arabian Peninsula maritime gates are contested at once, war-risk premiums run at 7.5-10% of hull value against 1-3% pre-war, and Hormuz transits are down roughly 95%.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'high',
      source: 'The Washington Times / The Jerusalem Post / TRT World',
      event:
        "Saudi Arabia struck four Houthi-held areas of Yemen on Tuesday, and a spokesperson for the Houthi-run health ministry said the airstrikes killed three people, including two children, in Taiz province. The raids followed a Houthi claim on Monday of a large-scale ballistic missile and drone attack on King Khalid Air Base at Khamis Mushait in southern Saudi Arabia, in which dozens of munitions were said to have targeted aircraft hangars, radars, runways and ammunition depots. The Houthis said the barrage answered more than 300 Saudi airstrikes across Yemen over five days. Saudi Civil Defence issued an alert for Khamis Mushait and later said the danger had passed; Riyadh gave no confirmation of the attack or of any damage.",
      summary:
        "Per §3.5.3 the Houthi damage claim is unverified and Saudi silence is not a denial; both are carried per §3.1. Riyadh's non-retaliation had been the war's most load-bearing restraint, flagged by this series as the region's principal brake and announced as ending on Day 200.",
      impact:
        "The brake is now fully released and the exchange is reciprocal, self-justifying and undated on both sides with no mediator attached. The war has a third front that neither Washington nor Tehran controls, generating escalation independently of Hormuz.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Trading Economics / AAA via The Washington Post / CNBC',
      event:
        "Brent settled at $109.21, up 3.34% on the session and the highest close of the war, against the $107.54 settlement of Day 200 and the $104.47 close two sessions earlier. Separately, the US national average price of diesel set an all-time record of $6.05 a gallon on the AAA series — surpassing the June 2022 peak recorded after Russia's invasion of Ukraine, up from $5.85 one week earlier and more than 60% higher year on year. KPMG chief economist Diane Swonk said the rising diesel cost, combined with the latest Consumer Price Index print, made a Federal Reserve rate hike likely.",
      summary:
        "Per §3.5.5 the instructive comparison is the 4.5% move in forty-eight hours, bought by a retired restraint and an absent calendar rather than by any new strike on energy infrastructure. Diesel is the freight fuel, so the pass-through reaches groceries and delivery before it reaches headlines.",
      impact:
        "This is the first cycle in which the energy-infrastructure and political-will clocks are visibly coupled inside the United States rather than at the chokepoint, with a record freight-fuel price now running into the November midterms.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'IOM / Al Jazeera / Euronews',
      event:
        "Displacement from the fighting in southwestern Yemen was revised sharply upward for the second consecutive day. Against the IOM's figure of more than 46,000 people reported on Day 200 across the West Coast and Taiz governorates, more recent estimates put displacement at more than 80,000 people over the past two weeks, including over 2,000 who fled by boat across the Red Sea to Djibouti. The Houthis continue to hold Mokha, the island of Mayun and the Greater and Lesser Hanish archipelago, with forces positioned roughly 20 km from the African coast and no formal closure of Bab al-Mandeb declared.",
      summary:
        "Per §3.5.5 the ledger has nearly doubled in 24 hours of reporting and has now outrun both the UN envoy's 11,400-household count and the IOM's own figure from the previous day. Cross-Red-Sea flight to Djibouti is new to this phase.",
      impact:
        "The humanitarian-escalation clock is running faster than the Security Council's capacity to measure it, and Saudi strikes inside Yemen now add a second displacement driver on top of the Houthi coastal offensive.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: 'CNN / The Week (India) / The Washington Times',
      event:
        "The strike on the Panama-flagged products tanker El Gaia near Hengam Island remained unattributed at 72 hours, with no claim from any party and no CENTCOM comment. New detail emerged on the vessel's status: its Automatic Identification System transponder had been switched off for more than five days after a call at Fujairah, placing it among vessels transiting the strait without broadcasting position, and it had been listed by Iran's Persian Gulf Strait Authority. Thirteen of fourteen Indian crew were rescued with Omani assistance and one remains missing; India's Ministry of External Affairs has condemned the attack. The IRNA-relayed account of one killed, named as Jamshid Rajabi, and four wounded of ten aboard is carried alongside.",
      summary:
        "Per §3.1 both accounts stand pending reconciliation and the casualty is held separately against no actor. The AIS and PGSA details cut in opposite directions: a dark transit is the profile US escort rules treat as suspect, while a PGSA listing is the profile Iran treats as compliant.",
      impact:
        "Seventy-two hours without attribution on a vessel that both belligerents had reason to read as the other side's confirms that the strait's civilian phase now produces casualties no one owns, which is itself a deterrence failure.",
    },
    {
      id: 5,
      direction: 'neutral',
      importance: 'medium',
      source: 'The Times of Israel / Gulf News / The Intercept',
      event:
        "Tehran neither confirmed nor denied the New York Times account of the unauthorised July Hormuz attacks for a third day. Further detail firmed the reporting: the strikes came overnight on July 6-7, damaged three commercial vessels and set a Qatari gas tanker ablaze, and killed the memorandum signed on June 17; Pezeshkian was in Iraq attending funeral ceremonies for the previous supreme leader at the time; Iranian officials initially attributed the attacks to field commanders acting under standing authority, and gave that explanation to Washington and to regional states; several officials reportedly threatened to resign, and hardliners attacked the negotiating team on state television and at nightly rallies. Separately, The Intercept reported the Pentagon acknowledges 410 US troops killed or wounded since July 7 alone.",
      summary:
        "Per §3.5.3 this remains second-hand intelligence reporting that Tehran has not addressed. The 410 figure broadly reconciles with the AP/CENTCOM cumulative of 449 killed and wounded since February 28 rather than contradicting it, and both are carried per §3.1.",
      impact:
        "If both accounts hold, roughly nine in ten US casualties of this war were taken after a July escalation that Iran's own chain of command says it did not order — the sharpest available measure of the unauthorised-escalation prior's cost.",
    },
  ],
  casualties: {
    us: {
      cumulative:
        'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded. The Intercept reports the Pentagon acknowledges 410 killed or wounded since July 7 alone.',
      delta:
        "+0 confirmed on the AP/CENTCOM combat series into Day 201 — a fourteenth consecutive day with no verified new US combat casualty. The CENTCOM blockade series carries from Day 200: 100 vessels redirected in the 60 days since July 14, four disabled, 26 humanitarian vessels permitted, zero passed without US permission, more than 15,000 personnel assigned. CENTCOM has still claimed nothing on the El Gaia.",
      status:
        "The headline holds at 17 KIA / 432 WIA on the combat series against DCAS 18 / 687 all-cause; per §3.5.3 keep the combat figure and flag the divergence. A third series entered the record on Day 201: The Intercept reported the Pentagon acknowledges 410 troops killed or wounded since July 7, and that Iranian strikes damaged or destroyed hundreds of buildings at US bases across Kuwait, Bahrain, Qatar, the UAE, Saudi Arabia, Iraq, Oman and Jordan, with more than fifteen bases attacked. That reconciles with rather than contradicts the AP/CENTCOM cumulative, and implies the overwhelming majority of US casualties were taken after the blockade resumed. The $67B supplemental and the 50-48 Senate war-powers rebuke remain unresolved into a midterm the president has said the war will outlast — now with record diesel prices attached.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front and no new Israeli military fatality. Israel stayed offstage for a third consecutive day on Hormuz, Yemen and the Saudi retaliation. Katz's position on Lebanon carries unchanged; the Gaza ceasefire holds broadly with sporadic IDF strikes.",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA on the Iran front. The notable fact on Day 201 is Israeli absence: the war's first direct Saudi-Houthi exchange ran without Israeli participation and without Israeli restraint, which is what the Israeli-independence prior predicts in reverse. Katz has tied withdrawal from the roughly 700 sq km security belt and the Ali al-Taher ridge to nationwide Hezbollah disarmament. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No new official Iranian war toll on Day 201. The El Gaia casualty stays held separately and unattributed at 72 hours, with the Indian account (13 rescued, 1 missing of 14) and the IRNA-relayed account (1 killed, Jamshid Rajabi, and 4 wounded of 10) both carried per §3.1.",
      status:
        "The rights thread hardened on Day 201. HRW and the Abdorrahman Boroumand Center document at least 59 men arbitrarily executed between March 18 and the end of August on politically motivated and vaguely framed national-security charges after grossly unfair trials — including at least 29 arrested over the December 2025-January 2026 protests and three from the 2022 Woman, Life, Freedom protests, several of them aged 18 or 19, with five executed in public. Iran Human Rights Monitor counted 23 executions between August 23 and 26, an average of one every four hours. HRANA's documentation continues. The IAEA Board referral to the Security Council (23-3, eight abstentions) carries, with Grossi reporting no information on declared nuclear material and no on-site verification; Russian and Chinese vetoes are expected to blunt any follow-through.",
    },
    other: {
      cumulative:
        'Yemen/Houthi-Saudi ~3,598 KIA · 10,791+ WIA across Lebanon (~4,300+/12,200+), Gulf states (33+/~90+ Saudi; Kuwait 10/115), Iraq (148+/402+), maritime (~19 damaged / 7 abandoned / 2 captured / ~18 seafarers) and Mokha/coast (11+/32+)',
      delta:
        "+3 killed: Saudi airstrikes on four Houthi-held areas killed three people including two children in Taiz province per the Houthi-run health ministry — the first fatalities of the direct Saudi-Houthi exchange. Displacement was revised from 46,000 to more than 80,000 in a fortnight, including 2,000+ who reached Djibouti by boat. One Indian seafarer is still missing from the El Gaia.",
      status:
        "The Yemen theatre is now the war's fastest-moving front. The Houthis hold Mokha, Mayun and the Hanish islands with forces roughly 20 km from the African coast; Bab al-Mandeb runs near twelve vessels a day and no formal closure has been declared, leaving that rung deliberately in reserve. Petroline stays offline — roughly 5 mb/d of rerouted crude to Yanbu, at least eight strike points, industry repair estimates of five to six weeks, satellite-detected emergency flaring along the route and no Aramco restart date. Iraq's reopening of two of three Iran crossings and its admission of Iranian investigators to the drone probe remain the only active de-escalation anywhere in the theatre, and it is not on a clock.",
    },
  },
  exec:
    "Day 201 retired the restraint this series has called the region's principal brake. Saudi aircraft struck four Houthi-held areas of Yemen on Tuesday, and the Houthi-run health ministry said the raids killed three people including two children in Taiz province (Washington Times). The strikes answered a barrage the Houthis claimed on Monday against King Khalid Air Base at Khamis Mushait — dozens of ballistic missiles and drones said to have targeted hangars, radars, runways and ammunition depots, which the group framed as a reply to more than 300 Saudi airstrikes across Yemen in five days. Saudi Civil Defence issued a Khamis Mushait alert and then said the danger had passed; Riyadh confirmed no damage (Jerusalem Post, TRT World). The reciprocal cycle this series warned of is now running with nothing above it. Markets tracked the change: Brent settled at $109.21, up 3.34% and the war's highest close, roughly $11 from Goldman's $120 tail, while the US average diesel price set an all-time record of $6.05 a gallon — above the June 2022 post-Ukraine peak, up from $5.85 a week earlier and more than 60% year on year (Trading Economics, AAA via Washington Post). Displacement from the southwestern Yemen fighting was revised from 46,000 to more than 80,000 people in a fortnight, including over 2,000 who fled by boat to Djibouti (IOM). El Gaia stayed unattributed at 72 hours, now reported dark for over five days after a Fujairah call and listed by Iran's Persian Gulf Strait Authority. Tehran has still said nothing about the Taeb report. Direction escalating; seven-day risk extreme; spillover critical; the thirty-day ceasefire probability holds at 2.",
  implications: [
    {
      title: 'The last brake is off, and Riyadh has moved from target to belligerent',
      body:
        "For eleven days this series has carried Saudi non-retaliation as the single most load-bearing restraint in the war, and on Day 200 recorded Riyadh's announcement that it intended to answer. Day 201 is the execution: strikes on four Houthi-held areas, three dead including two children per the Houthi-run health ministry, following the group's claimed barrage on King Khalid Air Base (Washington Times, Jerusalem Post, TRT World). Per §3.5.3 the Houthi damage claim at Khamis Mushait is unverified and Riyadh has confirmed nothing; per §3.1 both the Houthi casualty count and the Saudi silence are carried. What matters is not the tonnage but the structure. The exchange is now reciprocal, self-justifying and undated on both sides — the Houthis citing 300 Saudi sorties in five days, Riyadh citing an attack on a major air base — with no mediator attached and Salalah dormant for a third day (The National, CNN). Under the multi-clock framework the coalition-cohesion clock has passed from deteriorating to broken, and the interceptor clock now runs in a second theatre against an adversary holding both banks of Bab al-Mandeb. Analytical judgment: the war has acquired a third front that neither Washington nor Tehran controls and neither can stop, at the moment its diplomatic architecture has no venue and no date. The escalation risk in Yemen is no longer downstream of Hormuz; it is now an independent generator.",
    },
    {
      title: 'The energy shock has reached American households, and the political-will clock has started to move',
      body:
        "Brent at $109.21 is the war's highest close and, per §3.5.5, the useful comparison is not to the pre-war $70s but to the $104.47 of two sessions ago: a 4.5% move in forty-eight hours bought entirely by a retired restraint and an absent calendar. The number that will travel further is the domestic one. US average diesel hit a record $6.05 a gallon — above the June 2022 post-Ukraine peak, up from $5.85 a week earlier and more than 60% year on year — and diesel is the freight fuel, so the pass-through lands on groceries, produce and delivery before it lands on any headline (Washington Post, CNBC). KPMG's Diane Swonk paired it with the latest CPI print as making a Federal Reserve hike likelier. Meanwhile Petroline stays offline: roughly 5 mb/d of rerouted crude to Yanbu, at least eight strike points, industry repair estimates of five to six weeks and satellite-detected emergency flaring (Al Jazeera, Payne Institute). Under the multi-clock framework this is the first cycle in which the energy-infrastructure and political-will clocks are visibly coupled inside the United States rather than at the chokepoint. Analytical judgment: a president who has said the war will outlast the midterms is now carrying a record freight-fuel price into them, with a $67B supplemental and a 50-48 Senate war-powers rebuke still unresolved.",
    },
    {
      title: 'Taiwan: the substitution chain is now being bid for by everyone at once',
      body:
        "No fresh Taiwan-specific development on Day 201; the tanker-by-tanker exposure review requested on Day 199 stands and CPC's winter procurement continues. The change is in the market Taipei must buy into. QatarEnergy has been purchasing US LNG cargoes to cover its own Hormuz-disrupted obligations, and CPC has already widened to spot after Qatar's force majeure and the roughly 17% cut in Ras Laffan liquefaction capacity (S&P Global, The Business Standard). Per §3.5.5 the exposure is unchanged: Taiwan imports about 96% of its energy, LNG supplies roughly half of generation, around a third of 2025's 23.6 Mt of LNG imports came from the Gulf with almost 8 Mt from Qatar alone, and the reserve runs near twelve days against a statutory fourteen-day floor not due until 2027. Under the multi-clock framework the assurance window that ran 'through September' is now two-thirds spent with no October cover and both Arabian Peninsula gates contested. Analytical judgment: the operative risk is competitive rather than physical. When the disrupted supplier becomes a buyer in the same spot market as the disrupted customer, Taiwan is bidding against Qatar for American molecules — and Saudi retaliation inside Yemen raises the probability that the Bab al-Mandeb leg of that substitution chain is the next to be priced.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series); DCAS holds 18 / 687 all-cause; The Intercept adds a Pentagon figure of 410 killed or wounded since July 7 alone. Per §3.5.3 keep the combat series and flag both divergences. Fourteenth consecutive quiet day. Blockade series carries: 100 vessels redirected in 60 days, four disabled, 26 humanitarian permitted, zero passed without US permission, 15,000+ personnel.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new toll. Israel stayed offstage for a third day, including on the first direct Saudi-Houthi exchange. Katz carries: no withdrawal from the ~700 sq km belt or the Ali al-Taher ridge until Hezbollah is disarmed nationwide. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold.",
    iran:
      "Official MOH war toll carries unchanged; Day 201 produced no new count. The El Gaia casualty stays held separately and unattributed at 72 hours with both accounts carried per §3.1. Rights thread hardens: HRW and the Boroumand Center document ≥59 arbitrary executions March 18-end August, including ≥29 arrested over the December 2025-January 2026 protests and three from 2022, several aged 18-19, five in public; Iran HRM counted 23 executions August 23-26. IAEA UNSC referral (23-3) carries. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+.",
    other:
      "+3 killed in Taiz from Saudi airstrikes per the Houthi-run health ministry — the first deaths of the direct Saudi-Houthi exchange. Displacement revised to 80,000+ in a fortnight including 2,000+ by boat to Djibouti. Houthis hold Mokha, Mayun and the Hanish islands; Bab al-Mandeb ~12 vessels/day, no formal closure. Petroline offline with no restart date. Lebanon (~4,300+/12,200+), Gulf (33+/~90+ Saudi; Kuwait 10/115), Iraq (148+/402+), maritime (~19 damaged / 7 abandoned / 2 captured / ~18 seafarers) and Mokha/coast (11+/32+) carry.",
  },
};

export default data;
