import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "ESCALATING holds, and the escalation changed theatre. Rashad al-Alimi ordered Yemen's armed forces to retake the entire country, converting a defensive battle at Taiz into a declared war of reconquest with Saudi backing and reported American support. The Houthis answered with ballistic missiles and drones claimed against two Aramco sites, one of them in Riyadh. Against that, the United States pulled roughly a dozen B-1 bombers out of RAF Fairford, Qatar's mediation was reported deadlocked, and Trump pushed his own decision past the November midterms. Direction holds because what advanced was a declared ground war, not an American strike.",
      risk7d:
        "Extreme holds and its content shifts again. A declared campaign to retake Houthi-held Yemen begins with two carrier strike groups and amphibious groups still inbound for late October, and with Trump saying renewed military action after the midterms is \"possible\" while acknowledging talks have stalled. Ghalibaf hardened Iran's Hormuz terms from four conditions to seven and promised \"new surprises\" on the military battlefield. Explosions were reported near Qeshm and Sirik and aboard a tanker 60 nautical miles south of Al Mukha. The single easing is the Fairford withdrawal, which removes a European strike platform rather than a theatre one.",
      spillover:
        "Critical holds and stops being hypothetical. The Houthis claimed ballistic missiles and drones against Aramco at Riyadh and at Khurais in the kingdom's eastern oil heartland, and coalition spokesman Turki al-Maliki called the claims \"misleading\" — Riyadh's first word on a capital strike after seventeen silent days. The coalition claimed 97 counter-operations. Iran's parliament energy committee threatened to block regional oil exports if its own shipments stop. A plot in Gloucestershire moved American bombers home, and Israel barred crew from 27 countries from Israel-bound flights, Oman and Qatar among them.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Al Jazeera / Arab News / CNN',
      event: "Yemen's president orders the armed forces to retake the whole country",
      summary:
        "In a televised address on Sunday, Presidential Leadership Council chairman Rashad al-Alimi said: \"We have instructed the armed forces, security forces and all military formations to begin carrying out their assigned tasks under an approved plan until the country is liberated from the Houthis.\" He called it \"a decisive phase in the nation's history\" and said the operations \"are not a war against any sect or tribe\". Armed forces spokesman Colonel Majid al-Nuzaili pledged to protect civilian lives and offered amnesty to Houthi fighters who defect. Al-Alimi thanked Saudi Arabia as a strategic partner and appealed for international support. Fronts named include Tor al-Baha, the Taiz axis, Mocha and Bab al-Mandeb.",
      impact:
        "A defensive battle becomes a declared war of reconquest aimed at Sanaa itself, with Saudi backing and reported American support. The second-chokepoint prior hardens from a risk into a theatre: Bab al-Mandeb carries about 12% of global trade and now sits inside a declared offensive. Logged as the war's second declared ground campaign, in the country with its worst humanitarian baseline — 22.3 million needing aid.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / Kurdistan24',
      event: 'The Houthis claim Aramco at Riyadh and Khurais, and Riyadh finally answers',
      summary:
        "Houthi military spokesman Yahya Saree said on X that ballistic missiles and drones had struck Saudi Aramco facilities at Riyadh and at Khurais, in the kingdom's eastern oil region, calling both operations \"precise and direct\" and claiming large fires; smoke and flames were observed near the Riyadh site. Saudi-led coalition spokesman Turki al-Maliki dismissed the claims as \"misleading\". The coalition then reported 97 counter-operations, with government forces claiming at least 260 Houthi fighters killed and 44 military vehicles destroyed. Aramco published no damage assessment. Late in September the Houthis claimed attacks on Yanbu and Saudi Arabia said it intercepted missiles.",
      impact:
        "Riyadh's silence breaks after seventeen days, and breaks as a denial rather than a confirmation, so the strike stays CONTESTED. Per §3.5.3 the figure to score is the claimant's own: the same government spokesmanship that put about 700 killed in 257 operations on Saturday put at least 260 in 97 operations on Sunday, a fall of more than half, which is why neither is adopted.",
    },
    {
      id: 3,
      direction: 'de-escalating',
      importance: 'high',
      source: 'ITV News / UPI',
      event: 'The bombers leave Fairford',
      summary:
        "The Pentagon said \"all US bombers that were deployed to RAF Fairford have redeployed to their home stations in the United States\", withdrawing roughly a dozen B-1s from the Gloucestershire base on Sunday. Fairford had hosted dozens of B-52s and B-1s since the war began, under former prime minister Keir Starmer's approval for American use of British bases for \"defensive\" strikes on Iran. The withdrawal follows three suspicious vans found near the base the previous weekend, with petrol but no explosive devices recovered, and six arrests — five British nationals and one dual UK-Iranian national, all since released on bail. Prime Minister Andy Burnham said there were \"strong indications\" of Iranian involvement.",
      impact:
        "For the first time in 220 days an alleged Iran-linked operation on allied soil has produced a measurable withdrawal of American strike capability, with no shot fired at the aircraft. The NATO-territory prior stops being a legal and policing file and becomes a force-posture one. Scored de-escalating on platform count and escalating on coalition cohesion; the two readings are not reconciled.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / The National',
      event: "Ghalibaf raises Iran's Hormuz price from four conditions to seven",
      summary:
        "Parliament speaker and lead negotiator Mohammad Bagher Ghalibaf said \"the era of wasting time and dictating unilateral demands is over\" and that \"the Strait of Hormuz will not open until our seven conditions based on the Islamabad memorandum are met\", adding that Iran is \"present on the military battlefield and will confront them with new surprises\". The conditions reported include an end to hostilities, lifting of the naval blockade and sanctions relief. Spokesman Esmaeil Baghaei said reopening the strait is Iran's main objective while Washington prioritises the nuclear file. Araghchi said Iran is \"serious about finding diplomatic solutions just as we are serious about defending ourselves\".",
      impact:
        "The terms finally have an owner. Day 219's architecture came from an unnamed Tehran source; today a principal states the price on the record, and it is higher — seven conditions anchored to a June memorandum where the Supreme Leader's carried demand was four. The sequencing prior survives; what it no longer covers is that the two capitals now disagree about which file is being negotiated.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: 'Axios via Israel National News',
      event: "Qatar's mediation is reported deadlocked",
      summary:
        "Sources told Axios that Qatari mediator Ali al-Thawadi presented a two-page compromise proposal to both sides on 29 September, meeting Foreign Minister Abbas Araghchi in New York before travelling to Washington for talks with Trump envoy Jared Kushner and Vice President JD Vance, and that no significant progress followed. One source said: \"It is stuck. The Iranians are asking for things the US can't accept and the US thinks it is winning so there is no need for compromise.\" Trump said talks had stalled, that Iran is \"ready to fold up\", and that renewed military action after the midterms is \"possible\"; asked what came next, he said \"You'll see.\" Mohsen Rezaei said Trump is \"incapable of making a decision\".",
      impact:
        "The substitute venue has now produced a document and a deadlock. The mutual-non-ownership prior inverts: both capitals are on the record declining the same paper, and the American reason given is that it is winning. A mediator's own proposal failing is worse for the thirty-day window than no proposal at all, which is why the probability falls two points rather than easing one.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'high',
      source: 'Reuters / Mehr / NCRI',
      event: "Iran's oil minister resigns as Washington says the exports hit zero",
      summary:
        "State media said Oil Minister Mohsen Paknejad, in post since August 2024, had resigned; no reason was given, with some reports citing personal reasons. Pezeshkian approved Hamid Bovard, chief executive of the National Iranian Oil Company, as acting minister. Shortly before leaving, Paknejad said \"revenues of the oil that we have sold are still coming and that will continue God willing\". The same day Treasury Secretary Scott Bessent said Iran's crude exports fell to zero in September. Parliament energy committee secretary Abdolhossein Hemmati threatened to block regional oil exports if Iran's own shipments stop.",
      impact:
        "Two statements about the same barrels within 24 hours, from the departing minister and from the official running the blockade — the unmeasured-strait prior extends from transit counts to export revenue. Treating both as claims rather than data, the resignation is the harder fact: the portfolio changed hands in the seventh month of a blockade the ministry says is not working.",
    },
    {
      id: 7,
      direction: 'neutral',
      importance: 'medium',
      source: 'The National / CNBC / UPI',
      event: 'OPEC+ holds November output, and the Brent print diverges',
      summary:
        "The seven core OPEC+ members — Saudi Arabia, Iraq, Kuwait, Oman, Algeria, Russia and Kazakhstan — agreed to \"maintain September 2026 required production for November 2026\", a second consecutive monthly pause, holding joint quotas near 31 million barrels a day with most members producing below target. The group finished unwinding 1.65 million barrels a day of voluntary cuts in September and keeps a further 2 million through year-end. The next review is 1 November. Brent was reported settling at $102.25 on Friday, down nearly 2% on the week, and WTI at $91.11, against a late-April peak of $126.",
      impact:
        "The cartel declined for a second month to answer the blockade with barrels, leaving the G7's 100 million over four months as the only active supply instrument. The price itself is now contested: $102.25 against the $99.25 this series carried for the same session, with Brent back above $100 overnight. Day 219's reading that Brent holds below $100 does not survive the week.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'high',
      source: 'Times of Israel',
      event: 'Israel reads the Flydubai file and bars crew from 27 countries',
      summary:
        "Israeli reporting said the Omani co-pilot, Hamam al-Hammami, had intended to crash the aircraft into Ben Gurion Airport, had planned an attack in July and cancelled \"at the last moment\" because of friendships with the crew, and told investigators: \"I looked into which airline flies to Tel Aviv. That's why I chose flydubai.\" Netanyahu ordered a review of security procedures for foreign flights to Israel through National Security Council head Shmuel Ben Ezra. The Transportation Ministry barred crew from 27 countries, among them Iran, Iraq, Lebanon, Pakistan, Oman, Qatar and Saudi Arabia, from Israel-bound flights. Gadi Eisenkot and Naftali Bennett called for the transport minister's removal.",
      impact:
        "The gravest version of the attack and the weakest version of the attribution arrive together: months of premeditation and an airport as the intended target, with the motive self-selected and no Iranian link in any official finding. The attribution-withdrawal prior holds. The policy consequence lands on the mediators — Oman and Qatar are on the barred list, 22 days before the election.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 · WIA: 440 (AP/CENTCOM combat series)',
      delta: '+0 disclosed',
      status:
        "Nothing disclosed for a fifth consecutive cycle, recorded as an absence of disclosure rather than a lull per the series retired on Day 214. The Day 216 reconciliation gap — the president's 18 against his own Department's 18 killed and 756 wounded as of 21 August, and the at-least-19 against 861 this brief carries — is unanswered for a fifth day. DCAS 18 / 687 and The Intercept's 410 since 7 July carry unreconciled; El Gaia stays CONTESTED ATTRIBUTION. Force posture moved the other way for once: roughly a dozen B-1 bombers left RAF Fairford for home stations in the United States, while two carrier strike groups and amphibious groups remain inbound for late October.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta: '+0',
      status:
        "No new Israeli military fatality. The Flydubai captain's stab wounds and two hospitalised crew stay outside this ledger, and the reason to keep them out strengthened: the co-pilot is reported to have selected the airline himself to reach Tel Aviv and to have aborted a July attempt, with no Iranian link in any official finding. Israel's own accountability fight opened instead — Netanyahu ordering a review through Shmuel Ben Ezra, Eisenkot and Bennett demanding the transport minister's removal, and a bar on crew from 27 countries. The IDF named three Hamas commanders killed in Gaza. Lebanon's separate ledger runs ~4,300+ killed and 12,200+ wounded, reconstruction above $27 billion, no withdrawal timeline. Twenty-two days to the 27 October vote.",
    },
    iran: {
      cumulative: 'MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+',
      delta: '+0 official',
      status:
        "No new official war toll and a twenty-sixth day without a confirmed Iranian launch against a host state, qualified by the disclosed 14 September maritime strike. The movement was institutional and internal: the oil ministry changed hands, IRGC deputy commander Ali Fadavi claimed no American naval vessels remain in the Gulf or the strait, fifty-six states signed a joint statement backing reinstatement of UN Security Council nuclear restrictions, and two more Iranian delegation members were expelled from New York. Monitors recorded 17 women activists arrested in September, 31 sentenced to death, prison or flogging, and four women executed. Protests by workers, students, farmers and retirees were reported across several cities. Regime sociologist Ebrahim Hajiani put support for fundamental change near 67%, against roughly 8% in 2003-04.",
    },
    other: {
      cumulative: 'KIA: 3,678+ · WIA: 10,804+ (Yemen, Iraq, Gulf states, maritime)',
      delta: '+0 adopted',
      status:
        "Nothing adopted for a second day, and the claimant's own arithmetic is why. The spokesmanship that put about 700 Houthi fighters killed in 257 operations on Saturday put at least 260 killed and 44 vehicles destroyed in 97 operations on Sunday — a fall of more than half, with no monitor verifying either figure and no Houthi counter-claim published. The qualitative movement is the declaration: al-Alimi ordered the armed forces to retake the whole country, with Saudi backing and reported American support. The Houthis claimed Aramco at Riyadh and Khurais; coalition spokesman Turki al-Maliki called that \"misleading\", ending seventeen days of Saudi silence with a denial. A tanker reported explosions 60 nautical miles south of Al Mukha with the crew safe. Displacement holds above 145,000, 22.3 million need aid, and three-quarters of households in some regions are reported food-insecure. Bab al-Mandeb is not formally closed.",
    },
  },
  exec:
    "⭐ Yemen's government declared a war of reconquest. Presidential Leadership Council chairman Rashad al-Alimi ordered the armed forces \"to begin carrying out their assigned tasks under an approved plan until the country is liberated from the Houthis\", with Saudi backing and reported American support. The Houthis answered with ballistic missiles and drones claimed against Aramco at Riyadh and at Khurais; coalition spokesman Turki al-Maliki dismissed the claims as \"misleading\" — Riyadh's first word on a capital strike after seventeen silent days. The claimant's own daily toll fell from about 700 on Saturday to at least 260 on Sunday, so neither is adopted. American posture moved the other way: the Pentagon said all bombers deployed to RAF Fairford had returned to home stations, roughly a dozen B-1s, after an alleged Iran-linked plot near the base. Diplomatically the price rose and the channel went quiet. Ghalibaf said the strait \"will not open until our seven conditions based on the Islamabad memorandum are met\" and promised \"new surprises\"; Axios reported Qatari mediator Ali al-Thawadi's two-page compromise deadlocked, one source saying \"it is stuck\". Trump said talks had stalled, that Iran was \"ready to fold up\", and that action after the midterms was \"possible\". Iran's oil minister resigned as Bessent said September exports hit zero. OPEC+ held November output; Brent was reported at $102.25 against the $99.25 this series carried. Direction holds escalating; seven-day risk extreme; spillover critical; the thirty-day probability eases 10 → 8.",
  implications: [
    {
      title: 'The escalation was delegated, and the bombers went home',
      body:
        "Two facts arrived in the same cycle and point opposite ways. Yemen's internationally recognised government declared a campaign to retake the entire country, with Saudi backing and reported American support; and the Pentagon withdrew every bomber it had at RAF Fairford, roughly a dozen B-1s, to home stations in the United States. Quantified, that is a declared ground war in a theatre whose chokepoint carries about 12% of global trade, against the removal of a strike platform three thousand miles from Iran. Day 219 opened the trigger-decoupling prior on escalation advancing without an incident; today escalation advanced without an American aircraft. Analytical judgment: under the multi-clock framework the energy-infrastructure and humanitarian clocks moved sharply — Aramco claimed hit at Riyadh and Khurais, 22.3 million Yemenis needing aid, three-quarters of households in some regions reported food-insecure — while the political-will clock was spent on a Gloucestershire car park. The withdrawal is the more novel of the two. For 220 days the NATO-territory file was legal and policing; an alleged plot from which police recovered petrol and no explosives has now moved American strike capability off allied soil without a shot fired at it. Coalition cohesion is where this war has proven cheapest to attack.",
    },
    {
      title: 'The price has an owner now, and the owner raised it',
      body:
        "Day 219 recorded the deal's architecture for the first time in this series and noted that it came from an unnamed Tehran source rather than a principal. Today a principal spoke, and the number changed. Parliament speaker Mohammad Bagher Ghalibaf said the strait \"will not open until our seven conditions based on the Islamabad memorandum are met\" — seven, where the Supreme Leader's carried demand was four — and added that Iran is \"present on the military battlefield and will confront them with new surprises\". In the same cycle Axios reported that Qatari mediator Ali al-Thawadi's two-page compromise, carried to Araghchi in New York and to Kushner and Vance in Washington on 29 September, had produced nothing, one source explaining that \"the US thinks it is winning so there is no need for compromise\". Analytical judgment: the sequencing prior survives but is no longer sufficient. The two capitals are also arguing about which file is on the table — Baghaei said the strait is Iran's objective while Washington prioritises the nuclear programme. A deadlock over the agenda is dearer to break than one over order, and a mediator's own paper failing is worse than no paper, which is why the thirty-day probability falls two points to 8 rather than easing one.",
    },
    {
      title: 'Taiwan: no fresh development, and the mediator is also the supplier',
      body:
        "No fresh Taiwan-relevant developments today; prior assessments are unchanged. The T$415 billion package — including T$233.8 billion into CPC against T$127.6 billion of accumulated losses — remains before parliament unvoted, the fuel-price freeze extended, and the Qatari and Emirati LNG return still placed in October. Today's facts reach Taipei only through other states' decisions. OPEC+ declined for a second consecutive month to answer the blockade with barrels, leaving the G7's 100 million over four months as the only active supply instrument, and Brent was reported at $102.25 against the $99.25 this series carried for the same session — above $100 on either print. The second is structural: Qatar is simultaneously the mediator of the talks and the supplier whose cargoes the closed strait is withholding, so Doha's failure to bridge the gap is also the reason Taipei's October cargoes stay conditional. Analytical judgment: the fiscal-buffer prior holds and tightens. A buffer sized against $99 looked adequate; this week's print is $102.25 with Barclays at $115 for the fourth quarter, and the legislature has still not voted. Watch whether parliament moves before al-Thawadi's channel either revives or is replaced.",
    },
  ],
  casualtyNotes: {
    us:
      "The combat series holds at 17 killed and 440 wounded with nothing disclosed for a fifth cycle, and the president's 18 still sits unreconciled against his own Department's August database. What moved was basing rather than force health: every American bomber at RAF Fairford went home, roughly a dozen B-1s, after an alleged Iran-linked plot near the perimeter. Two carrier strike groups and amphibious groups remain inbound for late October, before the 3 November vote.",
    israel:
      "Iran-front casualties hold at 56 killed and 8,652+ wounded. The aviation injuries stay out of this ledger and the reason to keep them out hardened: the co-pilot is reported to have chosen the airline himself to reach Tel Aviv, aborted a July attempt over friendships with the crew, and intended to crash into Ben Gurion. No official finding names an Iranian link. The consequence was domestic and procedural — a Netanyahu-ordered review, resignation demands aimed at the transport minister, and a 27-country crew bar that includes both mediators.",
    iran:
      "No new official Iranian war toll and a twenty-sixth day without a confirmed launch against a host state. The ledger's movement was institutional: the oil ministry changed hands mid-blockade, fifty-six states backed reinstating UN Security Council nuclear restrictions, and two more delegation members were expelled from New York. Monitors recorded 17 women activists arrested in September, four women executed, and protests by workers, students, farmers and retirees across several cities — the labour-refusal prior widening past teachers and nurses.",
    other:
      "No adopted delta for a second day, because the claimant's own figure fell from about 700 to at least 260 within 24 hours with no monitor verifying either and no Houthi counter-claim. The qualitative movement was the declaration of a campaign to retake the whole country, and the first Saudi word on a claimed capital strike in seventeen days — a denial. Displacement holds above 145,000 against 22.3 million needing aid.",
  },
};

export default data;
