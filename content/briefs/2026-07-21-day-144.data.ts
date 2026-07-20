import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction moves to mixed — which here means two-way, not improving. A second maritime chokepoint went from armed to declared: Yemen's Houthis imposed a maritime embargo on Saudi Arabia effective immediately and said Bab el-Mandeb will be closed, a strait carrying roughly 12% of world trade whose full closure would remove about 7% of global oil supply (Al Jazeera, Euronews, UPI, CNBC). Running the other way, Iran's foreign ministry confirmed receiving proposals from international mediators aimed at easing hostilities and a US official said talks are ongoing — the first concrete diplomatic movement since the July 18 suspension (Times of Israel, Bloomberg). Brent fell about $6 to roughly $82, which is the market weighting the second signal over the first.",
      risk7d:
        "Seven-day risk stays extreme because nothing structural was removed. US forces struck for a tenth consecutive night from 4pm ET Monday, with explosions at Bandar Abbas, Shiraz, Sirik, Bandar Lengeh, Qeshm and Khomein (CENTCOM via Jerusalem Post, Israel National News). Trump's Truth Social commitment that Iran 'will pay ... many times over' for every American killed, routed to Hegseth, Caine and 'every Leader in the Military,' is a standing automatic-retaliation pledge that transfers escalation control to whoever kills the next US soldier (Al Jazeera, Middle East Monitor). Mediator proposals exist without a named mediator, venue or agenda; per §3.5.3 that is a claim, not a process. The last two frameworks were announced with more specificity and still failed.",
      spillover:
        "Spillover stays critical and widens geographically. The Houthi declaration extends the war's maritime dimension from Hormuz to the Red Sea and puts Saudi Arabia — the Gulf's largest producer and to date a funder rather than a combatant — directly in the target set, with the stated trigger being the Saudi bombing of Sanaa airport and the Houthis' retaliatory strikes on Abha (Foreign Policy, Middle East Eye). Kuwait continues intercepting drone waves aimed at power stations and desalination plants, its cumulative ledger at 10 killed and 115 injured. Enforcement of the embargo is unspecified, which is the whole gap between a declaration and a closure — no Saudi-linked hull has yet been reported interdicted.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'high',
      source: 'Al Jazeera / Euronews / UPI / NBC News / CNBC / Foreign Policy',
      event:
        "Yemen's Houthis announced a maritime embargo against Saudi Arabia effective immediately, with military spokesman Yahya Saree describing it in a video statement as an 'eye for an eye' response to what the group calls an unjust ten-year siege of Yemen, and deputy media office head Nasruddin Amer saying on X that the Bab el-Mandeb strait will be closed; the group tied the move to the Saudi bombing of Sanaa International Airport, which it says was meant to prevent an Iranian aircraft carrying Houthi leaders returning from Khamenei's funeral from landing, and to which it had already responded with missile and drone strikes on Abha International Airport",
      summary:
        "⭐ The second chokepoint this series has tracked as armed-but-unexecuted is now declared. Roughly 12% of world trade transits Bab el-Mandeb and a full closure would strand most Saudi exports, removing about 7% of global oil supply. Enforcement mechanics were not specified.",
      impact:
        "The decisive detail is the casus belli. Tehran had conditioned its own Bab el-Mandeb order on a US strike against Iran's power network; the Houthis moved instead on Yemen's own grievance ledger and aimed at Riyadh, not Washington. The chokepoint was never Iran's to cash — which means no US-Iran instrument can reliably disarm it.",
    },
    {
      id: 2,
      direction: 'de-escalating',
      importance: 'high',
      source: 'Times of Israel / Bloomberg / Al Jazeera',
      event:
        "Iran's foreign ministry said it had received proposals from international mediators on how to ease hostilities with the United States after several days of intensified clashes, and a US official said talks between the two sides are ongoing, marking the first reported diplomatic contact since Tehran announced on July 18 that it was suspending its commitments under the June 17 memorandum of understanding",
      summary:
        "Per §3.5.3 this is a claim from interested parties on both sides: no mediator has been named, no venue announced and no agenda published. Oman's channel status has been unclear since Qatar was struck, and Qatar itself remains a bombardment target rather than an active host.",
      impact:
        "The negotiation-capacity clock restarts for the first time in three days, which is the single most consequential thing that happened for the ceasefire probability. But the last two frameworks were announced with more specificity than this and collapsed anyway; a proposal received is not a table reconvened.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera / Middle East Monitor / US News-AP / CBS News',
      event:
        "Trump wrote on Truth Social that 'every time Iran kills an American Soldier they will pay for that killing many times over,' saying the directive had been passed to Defense Secretary Pete Hegseth, Joint Chiefs Chairman Daniel Caine and 'every Leader in the Military'; separately the Pentagon identified the two soldiers killed at Muwaffaq Salti Air Base in Jordan on Friday while defending against Iranian ballistic missile and drone attacks, with Al Jazeera reporting 17 US troops killed since the war began and CBS citing three killed and nearly 100 wounded in recent weeks",
      summary:
        "The identification resolves the 17-vs-18 split carried since Day 142: the Jordan remains are accounted for within the identified dead rather than added to the total. The series now carries 17 confirmed, with both figures still traceable per §3.1.",
      impact:
        "A standing automatic-retaliation pledge hands escalation control to whoever kills the next American — including actors Tehran does not command. Coupled with an unresolved 50-48 Senate war-powers rebuke, the political-will clock keeps running ahead of the diplomatic one.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'CENTCOM via Jerusalem Post / Israel National News / Al Jazeera',
      event:
        "US forces began a tenth consecutive night of strikes on Iran at 4pm ET Monday, with Iranian media reporting explosions at Bandar Abbas, Shiraz, Sirik, Bandar Lengeh, Qeshm and Khomein in central Iran; CENTCOM said the new round was designed to further degrade Iranian military capabilities used to attack shipping in the Strait of Hormuz, and Iran said it had intercepted four vessels transiting the strait over the weekend while claiming its missile and drone production had expanded during the war",
      summary:
        "The stated rationale shifted. Day 143's strikes were framed by CENTCOM explicitly as punishment for the Jordan deaths; Day 144's return to a Hormuz shipping justification is a narrower and more negotiable war aim.",
      impact:
        "Ten nights of continuous strikes with no announced terminal objective remains an attrition campaign. But a rationale tied to shipping is one a maritime arrangement could satisfy, whereas punishment has no natural stopping point — the reframing is quietly the more de-escalatory half of a heavily escalatory day.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: 'Arab News / Liveuamap / IRNA via Jerusalem Post / Al Jazeera / IAEA',
      event:
        "Air defense systems were activated around the Bushehr nuclear power plant, Iran's only operating civilian nuclear facility, with local sources reporting explosions attributed to interception rather than impact; an informed Bushehr provincial official said the US attack caused no damage to the plant, and Iran's state news agency IRNA quoted the governor of Isfahan denying that any attack had been carried out against Isfahan, home to Iran's largest nuclear complex",
      summary:
        "Day 143's dominant question was whether the Darkhovin precedent would extend from an empty construction site to operating facilities. The answer so far is no. Al Jazeera's July 17 satellite imagery of damage inside the Bushehr complex remains the outer marker; the IAEA's restraint appeal stands.",
      impact:
        "The tell is that Tehran is downplaying rather than amplifying. A regime seeking a radiological grievance would not have its provincial officials volunteer that the plant is undamaged and its governors deny strikes outright. That is a state managing panic and preserving the file — evidence the nuclear category is still bounded.",
    },
    {
      id: 6,
      direction: 'de-escalating',
      importance: 'medium',
      source: 'Trading Economics / CNBC / Bloomberg',
      event:
        "Brent crude pared earlier gains to trade around $82 a barrel after briefly topping $85, roughly $6 below Friday's $88.10 close, with traders citing renewed signs of diplomatic contact between Washington and Tehran and Iran's confirmation that it had received mediator proposals; oil remains up nearly 30% from its July lows following the collapse of the interim agreement and the resumption of the US port blockade",
      summary:
        "The price fell on the same day a second chokepoint was declared and a tenth night of strikes was launched. Per §3.5.5 the gap is the information: the market weighted an unnamed mediator's proposal above a formal Bab el-Mandeb closure threat.",
      impact:
        "Either the market is under-pricing an unenforced embargo — plausible, since no Saudi-linked hull has been interdicted — or it reads the diplomatic channel as more advanced than either government has admitted. Brent at $82 still prices one contested chokepoint, not the dual-closure tail at $150-200.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 · Jordan MIA resolved within identified dead',
      delta: '+0 KIA / +0 WIA in the window; two Jordan soldiers formally identified',
      status:
        "The Pentagon identified the two soldiers killed at Muwaffaq Salti Air Base in Jordan on Friday while defending against Iranian ballistic missile and drone attacks (US News/AP). Al Jazeera reports 17 US troops killed since the start of the five-month war; CBS cites three killed and nearly 100 injured in recent weeks. The 17-vs-18 source split carried since Day 142 resolves toward 17: the remains recovered Sunday at Muwaffaq Salti are accounted for within the identified dead rather than added to the total. Both figures remain traceable per §3.1 and this series carries 17 confirmed. Trump's standing pledge of retaliation 'many times over' for any further American death now attaches to this ledger.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (Israel not a direct party to the US-Iran exchange)',
      status:
        "No new Israeli casualties and no fresh Israeli-front development in the window. The Lebanon track is unchanged from Day 143: the June 26 US-brokered framework requiring Hezbollah to end hostilities and withdraw from southern Lebanon remains rejected by Hezbollah, following Rubio's Washington meeting with President Aoun. The Lebanon gap prior (§3.5.6) carries — Israel remains outside the US-Iran framework and has shown no intent to subordinate its operations to it, which means any mediator proposal reaching Tehran does not bind the Israeli front.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta: '+0 official update in the window; HRANA ten-day report documents 48+ killed and 68+ injured in the new wave as of July 17',
      status:
        "No fresh official Iranian toll in the reporting window; authorities continue to cite 50+ killed and 500+ wounded in July strikes. HRANA's ten-day report on the new wave documents at least 48 killed and 68 injured as of July 17, explicitly flagged as minimum counts given continuing attacks, restricted access to affected areas and incomplete information. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its standing caveat that military counts are understated because confirmation depends largely on government data. Figures are Iranian-source or monitor-source per §3.5.3; US and Israeli estimates run to 6,000+. ~440.9 kg of 60% HEU remains unverified since June 2025.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 128+ KIA / 370 WIA; Gulf 33+ KIA / 74+ WIA, of which Kuwait 10 killed (4 soldiers, 6 civilians) / 115 injured (77 soldiers, 38 civilians)',
      delta: '+0 confirmed fatalities in the window; no Saudi-linked vessel yet reported interdicted under the Houthi embargo',
      status:
        "No confirmed new Gulf or Iraqi fatalities in the reporting window. Kuwait's cumulative ledger from Iranian strikes stands at 10 killed and 115 injured, sitting inside the 33+ Gulf-wide baseline, with air defenses continuing to intercept drone waves aimed at power stations and desalination plants in a state drawing roughly 90% of its drinking water from desalination. Saudi Arabia enters the casualty-risk picture newly: the Houthi maritime embargo names it directly, following the group's earlier missile and drone strikes on Abha International Airport. Enforcement remains unspecified and no interdiction has been reported. Lebanon toll stays source-split; Iraq baseline carries.",
    },
  },
  exec:
    "Day 144 moved in two directions at once for the first time since Tehran suspended the memorandum. Yemen's Houthis declared a maritime embargo against Saudi Arabia effective immediately, military spokesman Yahya Saree framing it as an 'eye for an eye' answer to the Saudi siege of Yemen and the bombing of Sanaa airport, while deputy media chief Nasruddin Amer said Bab el-Mandeb will be closed (Al Jazeera, Euronews, UPI). Roughly 12% of world trade transits that strait; a full closure would strand most Saudi exports and remove about 7% of global oil supply. The second chokepoint this series has tracked as armed-but-unexecuted is now declared — but on Yemen's own grievance ledger, not on the US power-grid trigger Tehran had attached to its standing order. Against that, the first concrete diplomatic movement since July 18: Iran's foreign ministry confirmed receiving proposals from international mediators aimed at easing hostilities, and a US official said talks are ongoing (Times of Israel, Bloomberg). Trump simultaneously vowed on Truth Social that Iran 'will pay ... many times over' for every American killed, routing the directive to Hegseth and Caine, as the Pentagon identified the two soldiers killed at Muwaffaq Salti on Friday (Al Jazeera, US News/AP). US forces struck for a tenth consecutive night from 4pm ET Monday — Bandar Abbas, Shiraz, Sirik, Bandar Lengeh, Qeshm, Khomein — with CENTCOM reframing the rationale from punishment back to degrading Iran's ability to attack Hormuz shipping (Jerusalem Post, CBS). The nuclear question was bounded, not answered: air defenses engaged at Bushehr, but a provincial official reported no plant damage and IRNA quoted Isfahan's governor denying any strike. Brent fell to roughly $82 from $88. Direction mixed; thirty-day ceasefire probability rises to 8.",
  implications: [
    {
      title: "A second chokepoint, declared on someone else's grievance",
      body:
        "For three weeks this series has carried a standing deadline: does Iran execute the Bab el-Mandeb order it conditioned on a US strike against its power network, a trigger Tehran had already publicly conceded was met? Day 144 answered it sideways. The Houthis did move on the strait — Yahya Saree declaring a maritime embargo on Saudi Arabia effective immediately, Nasruddin Amer saying Bab el-Mandeb will be closed — but the stated casus belli is Saudi Arabia's decade-long siege of Yemen and the bombing of Sanaa airport, which the group says was meant to stop an Iranian aircraft carrying Houthi leaders returning from Khamenei's funeral (Al Jazeera, Foreign Policy, Middle East Eye). The target is Riyadh, not Washington. Under the multi-clock framework this loads the energy-infrastructure clock hard while telling us something uncomfortable about the negotiation-capacity clock: the chokepoint was never Tehran's to cash. A co-belligerent with its own war aims has armed it on its own timetable, which means no US-Iran instrument can reliably disarm it. Analytical judgment: the prior that Iran holds a second-chokepoint card should be retired and replaced with an independent Houthi capability that correlates with Iranian interests without being controlled by them. The market has not yet priced this — Brent fell on mediation news the same day the declaration landed — and enforcement remains unspecified, which is the gap between a declaration and a closure. Watch whether any Saudi-linked hull is actually interdicted, and whether Riyadh's response pulls the Gulf's largest producer from funding the war into fighting it.",
    },
    {
      title: 'Mediation reopens while the target set stays open',
      body:
        "The first real diplomatic signal since the suspension arrived without a table attached to it. Iran's foreign ministry says it received proposals from international mediators aimed at reducing tensions; a US official says talks are ongoing (Times of Israel, Bloomberg). Per §3.5.3 both are claims from interested parties — no mediator has been named, no venue announced, no agenda published, and the last two frameworks were announced with more specificity than this and still collapsed. What makes the signal credible is not the rhetoric but the price: Brent pared to about $82 after topping $85, roughly $6 below Friday's $88.10, on a day that also brought a tenth night of strikes and a new chokepoint declaration (Trading Economics). Traders read the diplomacy over the tempo. Working against it, Trump's Truth Social vow that Iran 'will pay ... many times over' for every American killed, passed to Hegseth, Caine and 'every Leader in the Military,' is a standing retaliation commitment that hands escalation control to whoever kills the next US soldier (Middle East Monitor, Al Jazeera). The nuclear file offers a genuine bound, though a narrow one. Air defenses engaged around Bushehr, but a provincial official said Iran's only operating nuclear plant was undamaged and IRNA quoted Isfahan's governor denying any strike there — Tehran downplaying rather than amplifying, which is not how a regime behaves when it wants a radiological grievance. Darkhovin has not yet become a precedent for operating facilities.",
    },
    {
      title: 'Taiwan: the hedge route is the one now under threat',
      body:
        "Taiwan's adaptation to this war has been to route around Hormuz — Taiwanese energy companies have shifted shipping through the Red Sea, and crude sourcing has moved to roughly 60% US-origin against about 70% Middle Eastern in 2024 (CSIS, Atlantic Council). Day 144 put the detour under the same kind of threat as the original. A Bab el-Mandeb closure does not touch Qatari LNG, which exits through Hormuz, but it compresses the alternative corridor for everything else and lengthens every Suez-routed voyage around the Cape. Taipei is now exposed at both ends of the same journey. The §3.5.6 exposure is otherwise unchanged and badly timed: about a third of Taiwan's gas still transits Hormuz with Qatar supplying close to 30% of LNG imports, against an eleven-day gas buffer that reaches the statutory fourteen days only from 2027, versus roughly 120 days of oil cover. July and August are the binding constraint — Taiwanese electricity demand in July runs up to 40% above February, precisely when replacement cargoes are hardest to source. Brent easing to $82 buys margin on price but none on physical delivery, and the hedges remain slow: gas secured through September, first Cheniere cargoes due next month at about 10% of imports, a 25% US-LNG target only by 2029, six new gasholders worth ten additional days still under construction. A second contested chokepoint does not change Taiwan's arithmetic this week. It shortens the time in which the arithmetic can stay unchanged.",
    },
  ],
  casualtyNotes: {
    us:
      'Pentagon identified the two soldiers killed at Muwaffaq Salti in Jordan on Friday. Al Jazeera reports 17 US troops killed since February 28; CBS cites three killed and nearly 100 wounded in recent weeks. The 17-vs-18 split carried since Day 142 resolves toward 17 with the Jordan remains accounted for within the identified dead; both figures traceable per §3.1.',
    israel:
      'No new Israeli casualties. Lebanon track unchanged: the June 26 framework remains rejected by Hezbollah. The Lebanon gap prior carries — mediator proposals reaching Tehran do not bind the Israeli front.',
    iran:
      "No fresh official toll. HRANA's ten-day report documents 48+ killed and 68+ injured in the new wave as of July 17, flagged as minimum counts. Cumulative HRANA 3,636+ (1,221 mil / 1,701 civ / 714 unclassified) with understatement caveat; Foundation of Martyrs ~3,468; US/Israeli est. 6,000+.",
    other:
      "No confirmed new Gulf or Iraqi fatalities. Kuwait cumulative 10 killed / 115 injured, inside the 33+ Gulf baseline, with continued drone waves against power and desalination plants. Saudi Arabia newly named as embargo target; no interdiction yet reported. Lebanon toll source-split; Iraq baseline carries.",
  },
};

export default data;
