import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction moves to mixed for the first time since Salalah lapsed, and the two halves point opposite ways. On the physical axis CENTCOM says the main Hormuz transit channels have been cleared of Iranian naval mines and that oil and LNG flows through the strait over the past fortnight are at a six-month high, with regional oil movements averaging 17.1 million barrels a day over ten days and the Saudi East-West pipeline restarting. On the political axis Trump used the General Assembly rostrum to frame the war as a choice between letting Iran rebuild and annihilating the Islamic Republic, and put a deal explicitly after the November midterms. Per §3.5.6 the mine-clearance prior is retired on evidence; per §3.5.3 the annihilation framing is carried as the actor's own words, not as a decision taken.",
      risk7d:
        "Seven-day risk holds extreme because the thing that improved is the waterway, not the war. An American president told the General Assembly he faces a decision whether to annihilate a state he is already at war with, twenty-four hours after convening the six Gulf leaders whose capitals absorb the consequences, and four days before the 1737 Committee Panel of Experts mandate lapses on September 26-27 with Russia and China having blocked its extension a fifth time. Seven Iranian conditions remain formally unanswered. Pezeshkian addresses the Assembly today. The Houthi-Saudi exchange is unresolved, with Riyadh's answer to the strike on its capital still unpublished on a sixth day.",
      spillover:
        "Spillover holds critical. The economic axis eased at the chokepoint and tightened everywhere else: cleared lanes and a restarted pipeline do nothing for a rial past two million to the dollar, official twelve-month inflation near 70%, unemployment at 9.1% and an average monthly wage around $125 against basic household spending near $450. The legal axis widened as Iran Human Rights published a named roster of more than 4,200 protest dead including 420 women and 281 people under eighteen. The Yemen axis carries without a published casualty figure from either Riyadh or Sanaa, and the humanitarian file in Yemen has produced no update.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'high',
      source: 'CNN / NBC News / CBS News / Axios / Arab News / Fox News',
      event:
        "President Trump addressed the 81st session of the United Nations General Assembly and framed the war as a binary choice he has not yet made: allow Iran to rebuild and become, in his words, a far greater country than it ever was, or annihilate the Islamic Republic and do it quickly. He told the chamber that Iran, which he called the number one sponsor of terror, is no longer the bully of the Middle East. He then attached a timeline to the diplomatic branch, predicting that a deal will not come until after the November 3 midterm elections because, in his formulation, it does not make sense for Tehran not to make one. The seven conditions Iran transmitted through Qatari mediators on September 19 went unmentioned and unanswered from the rostrum.",
      summary:
        "Per §3.5.11 this is the day's single pivotal item, and per §3.5.3 the annihilation language is carried as the president's own framing rather than as a decision. The analytical content is the timeline, not the threat: Washington has now publicly dated its own negotiating window past November 3, which is a formal non-answer to a document Tehran said it was awaiting a response to. The seven conditions were not declined; they were left on the table with a calendar attached.",
      impact:
        "Iran's first structured negotiating instrument in eight days has been met with a deferral of roughly six weeks, which converts the active-deadline clock from days into an electoral cycle.",
    },
    {
      id: 2,
      direction: 'de-escalating',
      importance: 'high',
      source: 'CENTCOM via Bloomberg / The Hill / Gulf News / Task & Purpose / Fox News',
      event:
        "US Central Command commander Admiral Brad Cooper said in a video statement that American forces have cleared Iranian naval mines from the international shipping lanes of the Strait of Hormuz after months of operations involving Navy divers, special operations forces and air assets, and that oil and liquefied natural gas shipments through the strait over the preceding fortnight reached their highest level in six months. Cooper said Gulf partners have exported more than one billion barrels of crude through the strait in recent months. Separately, Middle East oil flows averaged 17.1 million barrels a day over the past ten days and Saudi Aramco's East-West pipeline has restarted, though several pumping stations remain under repair and Yanbu shipments stay depressed.",
      summary:
        "Per §3.5.6 the mine-clearance prior carried since Day 42 — that Iranian mines in the Hormuz lanes require weeks of physical clearance even with full cooperation — is retired on evidence, and clearance was achieved without cooperation. Per §3.5.3 this is a CENTCOM claim about a CENTCOM operation and is paired with the countervailing figures: Reuters and Windward transit datasets have differed by roughly threefold all war, and the Iran-Oman corridor framework remains the only negotiated arrangement on the table.",
      impact:
        "The single physical fact that has anchored every Iranian negotiating position since June — that Tehran controls when the strait reopens — has been materially weakened by an American engineering operation rather than by a deal.",
    },
    {
      id: 3,
      direction: 'de-escalating',
      importance: 'high',
      source: 'Bloomberg / OilPrice.com / Trading Economics / CNBC',
      event:
        "Brent crude slid toward $100 a barrel on Monday, extending losses into a fourth consecutive session, before steadying on Tuesday as traders weighed Hormuz flow data against the incomplete Saudi pipeline recovery. The restart of Aramco's East-West line gave the bearish case its first physical anchor since the September 13 strike, with analysts working to establish how much crude Saudi Arabia can actually move with several pumping stations still down. Lower Yanbu loadings continue to be offset by higher Hormuz throughput rather than recovered, and the market has now priced four sessions of decline against a Saudi capital struck on September 19 and unanswered since.",
      summary:
        "Per §3.5.5 the quantified reversal is the finding: Brent has retraced from $104.68 toward $100 across four sessions, unwinding the entire Riyadh-strike premium and most of the Petroline premium, while the physical position at Yanbu is improved but not restored. Per §3.5.6 the barrels-not-geography prior booked on Day 206 is borne out in the opposite direction — the market rewards restored capacity as fast as it discounts symbolism.",
      impact:
        "Washington enters its post-midterm negotiating window with oil back near $100 and cleared lanes behind it, which removes the price pressure that had been the strongest argument for settling quickly.",
    },
    {
      id: 4,
      direction: 'neutral',
      importance: 'medium',
      source: 'Axios / Al Jazeera / Gulf News / Hoodline / NewsCord',
      event:
        "Trump met the six Gulf Cooperation Council heads of state and foreign ministers on the sidelines of the General Assembly on a draft postwar strategy centred on a regional effort to contain Iran and expand normalisation between Israel and its neighbours. Reporting indicates the administration does not plan to implement the strategy until after both the October 27 Israeli election and the November 3 US midterms, and that the gathering could later expand beyond the GCC roster to other Arab and Muslim leaders. Qatar's Emir Sheikh Tamim bin Hamad Al Thani told the Assembly that the region is passing through one of its most dangerous phases and called for an urgent diplomatic solution to the Gulf crisis the war has produced.",
      summary:
        "Per §3.1 rule 3 the divergence between the mediator and the convenor is the information: Qatar, the channel through which the seven conditions travelled, used its own rostrum time to call the phase dangerous and the need urgent, on the same day the convening power dated its diplomacy to after an election. No Gulf capital trailed a deliverable from the meeting. Per §3.5.6 the condemnation-without-contribution prior holds: Riyadh arrived having absorbed a capital strike and still published no answer.",
      impact:
        "The postwar architecture exists on paper and is explicitly scheduled to begin after two elections, which means the coalition's Gulf members are being asked to absorb six more weeks of a war whose endgame is not yet policy.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'Eastern Herald / Algemeiner / Iran Human Rights / UN News / NCRI',
      event:
        "Russia and China blocked the extension of the Security Council's Iran sanctions Panel of Experts for a fifth consecutive time, leaving the 1737 Committee without a chair and the Panel's mandate due to lapse on September 26-27 with no successor mechanism. Separately, Iran Human Rights published a roster naming more than 4,200 people killed in the nationwide protests that began with the December 28 Tehran shopkeepers' strike, including at least 420 women and 281 victims under the age of eighteen, of whom 25 were under fourteen. Judiciary chief Gholam-Hossein Mohseni Ejei has continued to defend executions publicly. Official Iranian data put twelve-month average inflation at 69.9% and unemployment at 9.1%, against an average monthly salary near $125 and estimated basic household spending near $450.",
      summary:
        "Per §3.1 the named roster is carried alongside, not in place of, the HRANA and Foundation of Martyrs war-casualty series, which count different populations. Per §3.5.5 the wage gap is the sharpest single economic number the series has carried: households earn roughly 28% of what basic subsistence is assessed to cost. Per §3.5.6 the symmetric-indictment prior holds — Iranian outlets amplified the American half of the Geneva findings and not this.",
      impact:
        "The multilateral monitoring architecture on Iran expires this week while the documentary record of the crackdown expands, which pushes accountability entirely into national courts and the ICC pathway.",
    },
  ],
  casualties: {
    us: {
      cumulative:
        'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded. The Intercept reports the Pentagon acknowledges 410 killed or wounded since July 7 alone.',
      delta:
        "+0 confirmed on the AP/CENTCOM combat series into Day 208 — a twenty-first consecutive day with no verified new US combat casualty, and the second of those days unrecorded because no Day 207 brief was produced. The day's American developments were rhetorical and operational: Trump's annihilate-or-rebuild framing from the General Assembly rostrum, and CENTCOM's claim that the Hormuz transit lanes are clear of Iranian mines.",
      status:
        "The headline holds at 17 KIA / 432 WIA on the combat series against DCAS 18 / 687 all-cause and The Intercept's Pentagon figure of 410 killed or wounded since July 7; per §3.5.3 keep the combat figure and flag both divergences. The mine-clearance operation Cooper described — Navy divers, special operations forces and air assets over months — has produced no publicly reported American casualty, which is itself a datum worth holding rather than assuming. The elevated Pentagon probe into the Minab school strike remains unpublished. The escort corridor and blockade series carry: roughly 40 vessels a day, about 14 million barrels, 105 vessels redirected, 4 disabled, 26 humanitarian transits permitted, 15,000-plus personnel committed. The Senate has still not taken up the House's 220-204 war powers resolution and the $67B supplemental is unresolved, both now running into a midterm cycle the president has explicitly made the hinge of his Iran diplomacy.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front and no new Israeli military fatality. Israel re-entered the record rhetorically rather than kinetically: at a Yom Kippur War memorial ceremony, Defence Minister Israel Katz said Israeli forces will remain deployed in security zones in Gaza, Lebanon and Syria, and separately said that displacement of population, destruction of infrastructure and occupation of territory are the language Hamas and Hezbollah understand.",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA on the Iran front. Katz's memorial-day formulation is the clearest statement of the Israeli position the series has carried in a fortnight, and it is incompatible on its face with the postwar architecture Washington presented to the Gulf leaders the same week, which is built on expanded normalisation. Per §3.5.6 the Israeli-independence prior holds and is reinforced: Israel is the reported principal beneficiary of a strategy it is not negotiating and whose implementation is scheduled after its own October 27 election. Lebanon's toll continues to accumulate outside the Iran-front ledger at roughly 4,300 killed and over 12,200 wounded since March, with the Lebanese army recording roughly 7,700 violations of the June 26 framework. Katz has tied withdrawal from the roughly 700 sq km security belt and the Ali al-Taher ridge to nationwide Hezbollah disarmament. The Gaza ceasefire holds broadly with sporadic strikes.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No new official Iranian war toll on Day 208. The separate protest-casualty ledger expanded materially: Iran Human Rights published a named roster of more than 4,200 killed since the December 28 shopkeepers' strike, including at least 420 women and 281 people under eighteen, 25 of them under fourteen. Tehran's move today is Pezeshkian's scheduled address to the General Assembly, expected to frame the conflict as a US-Israeli war of aggression. No confirmed Iranian ballistic or drone attack on a host state has been recorded since the night of September 8-9.",
      status:
        "The protest roster and the war-casualty series count different populations and are carried separately; per §3.1 neither is folded into the other. Iranian coverage again amplified the Geneva Mission's finding against the United States while leaving its crimes-against-humanity finding — 87 named officials, 377 protest deaths including 56 children — domestically uncovered, so per §3.5.6 the symmetric-indictment prior is borne out again. The rights thread carries: at least 59 arbitrary executions documented between March 18 and the end of August, and 23 in four days in late August. Economic conditions worsened on every published measure: the rial past two million to the dollar and down roughly 44% in six months, official twelve-month average inflation at 69.9% against household inflation reported near 89%, unemployment 9.1%, an average monthly salary near $125 against basic household spending near $450, 32 medicine categories in short supply and crude loadings down approximately 85%. The IAEA Board referral (23-3, eight abstentions) carries; the Panel of Experts mandate lapses September 26-27 after a fifth Russian and Chinese block. The Supreme Leader has not been seen in roughly six months.",
    },
    other: {
      cumulative:
        'Yemen/Houthi-Saudi ~3,598 KIA · 10,804+ WIA across Lebanon (~4,300+/12,200+), Gulf states (33+/~103+ Saudi; Kuwait 10/115), Iraq (148+/402+), maritime (~19 damaged / 7 abandoned / 2 captured / ~18 seafarers) and Mokha/coast (11+/32+)',
      delta:
        "No casualty figure was published by Riyadh or Sanaa for a sixth consecutive day, including for the Riyadh depot fire, so the cumulative holds and the absence remains the reporting gap. Saudi Arabia attended the New York meeting having neither published a retaliation package for the September 19 strike on its capital nor confirmed or denied striking Sanaa. Displacement inside Yemen carries at 112,000 over two weeks with nearly 3,000 arrivals in Djibouti and IOM stocks near depletion; no update. The IOM shipwreck toll of 13 dead and 14 missing stays held and out of the cumulative.",
      status:
        "Yemen remains the war's independent escalation generator and produced no published movement in either direction today. The Houthis hold Mokha, Mayun and the Hanish islands and the length of Yemen's Red Sea coast; Bab al-Mandeb carries about 12% of global trade, 11% of seaborne oil and 8% of LNG, with no formal closure declared and that rung still in reserve. The energy picture at the Saudi end improved without recovering: the East-West pipeline has restarted with several pumping stations still under repair, Yanbu loadings stay depressed after two attacks in nine days, and the shortfall continues to be routed through Hormuz rather than replaced. Regional oil flows averaged 17.1 million barrels a day over ten days and Gulf partners have moved more than a billion barrels through the strait in recent months on CENTCOM's account. Iraq's reopening of two of three Iran crossings remains the theatre's only negotiated de-escalation.",
    },
  },
  exec:
    "Day 208 is the day the waterway improved and the diplomacy froze. From the General Assembly rostrum Trump framed the war as a choice he has not made — let Iran rebuild into what he called a far greater country, or annihilate the Islamic Republic and do it quickly — and then dated the diplomatic branch past November 3, predicting a deal only after the midterms (CNN, NBC News, CBS News, Axios). Iran's seven conditions, transmitted through Qatar on September 19, were neither answered nor declined from the rostrum. Against that, CENTCOM commander Admiral Brad Cooper said US forces have cleared Iranian naval mines from the Hormuz shipping lanes after months of diver and special-operations work, and that oil and LNG flows through the strait are at a six-month high, with regional flows averaging 17.1 million barrels a day over ten days and Gulf partners having moved more than a billion barrels (Bloomberg, The Hill, Gulf News). Aramco's East-West pipeline restarted with pumping stations still down. Brent slid toward $100 across a fourth consecutive losing session, unwinding the Riyadh-strike premium entirely. Trump met the six GCC leaders on a postwar strategy that reporting says will not be implemented until after the October 27 Israeli election and the November 3 midterms; Qatar's Emir called the phase one of the region's most dangerous and the need for diplomacy urgent. Russia and China blocked the Iran sanctions Panel of Experts a fifth time, four days before its mandate lapses. Direction moves to mixed; seven-day risk holds extreme; spillover critical; the thirty-day ceasefire probability falls from 3 to 2.",
  implications: [
    {
      title: 'The answer to seven conditions was a calendar, not a reply',
      body:
        "Tehran put a structured instrument through Qatar on September 19 and said it was awaiting a response. On September 22 the response arrived as a General Assembly speech that did not mention it, offered a binary between rebuilding and annihilation, and predicted a deal only after November 3 (CNN, NBC News, Axios, Arab News). Per §3.5.3 the annihilation language is the president's own framing and is not evidence of a decision taken; the operative content is the date. A deferral is not a rejection, and it leaves Tehran holding an unanswered document with a six-week clock on it while the naval blockade, the sanctions architecture and the air designations all continue to run. Per §3.5.6 the unauthorised-escalation prior from Day 200 acquires new weight here: six weeks is a long window for factions outside Iran's formal signing chain to act, and the Salalah agreement died in less. Analytical judgment: under the multi-clock framework the negotiation-capacity clock has not closed but has been re-indexed to the political-will clock, which is now the dominant clock in the war — the thirty-day ceasefire probability falls from 3 to 2 because the convening power has publicly excluded the next thirty days from its own diplomacy.",
    },
    {
      title: 'Hormuz reopened by engineering, not by agreement — and that changes who holds the leverage',
      body:
        "Since Day 42 this series has carried the mine-clearance prior: weeks of physical clearance required even with full Iranian cooperation. CENTCOM now says the main lanes are clear, achieved with divers, special operations forces and air assets and without cooperation, with flows at a six-month high and more than a billion barrels moved by Gulf partners (Bloomberg, The Hill, Gulf News, Task & Purpose). Per §3.5.6 the prior is retired on evidence. Per §3.5.3 it is a CENTCOM claim about CENTCOM's own operation, paired with the standing caveat that transit datasets have differed threefold all war and that the Iran-Oman phased corridor framework — inbound through Iranian waters, outbound through both, military vessels excluded — remains the only negotiated arrangement. Analytical judgment: the energy-infrastructure clock has been partially unwound by force, which removes the asset that made Iran's conditions expensive to ignore. That is why the deferral and the clearance arrived in the same seventy-two hours; they are the same decision seen from two directions, and it makes the coming six weeks a period in which Tehran's incentive is to restore leverage rather than wait on it.",
    },
    {
      title: 'Taiwan: the secured window has closed and the spot market is now the only supply',
      body:
        "This is the fresh Taiwan-relevant development. The gas Taipei assessed in May as sufficient through September (Bloomberg) is now exhausted in days, and CPC's Qatari cargoes were premised on Hormuz reopening by early September (DIGITIMES) — a premise that has arrived late and partially. Cleared lanes and six-month-high flows are the first genuinely favourable input Taiwan has had all war, but Ras Laffan remains about 17% down with QatarEnergy force majeure running up to five years, so cleared transit does not by itself restore Qatari liquefaction. Taipei imports about 96% of its energy, takes roughly half its generation from LNG, and holds about eleven days of reserve against a fourteen-day floor not due until 2027 (IFRI, Atlantic Council, CSIS). Per §3.5.6 the substitution-chain prior holds. Analytical judgment: October is the month Taiwan stops drawing on pre-positioned supply and competes for spot cargoes against Chinese, Japanese, Korean and Indian buyers with longer relationships — and the variable that would relieve it has shifted from whether the strait opens to whether Qatar can liquefy, which is a repair schedule rather than a negotiation and therefore not responsive to any deal struck after November 3.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series); DCAS holds 18 / 687 all-cause; The Intercept's Pentagon figure of 410 killed or wounded since July 7 carries. Per §3.5.3 keep the combat series and flag both divergences. Twenty-first consecutive quiet day, two of which are unrecorded because no Day 207 brief was produced. Day 208's American developments were rhetorical and operational: the annihilate-or-rebuild framing from the General Assembly rostrum and CENTCOM's mine-clearance announcement. The months-long clearance operation has produced no publicly reported American casualty. The elevated Pentagon probe into Minab remains unpublished. Escort corridor holds at ~40 ships/day and ~14 mb/d; blockade series 105 redirected / 4 disabled / 26 humanitarian. Senate has not taken up the 220-204 House resolution; the $67B supplemental is unresolved; both now run into a midterm cycle the president has made the hinge of his Iran diplomacy.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new toll. Israel re-entered the record rhetorically: Katz told a Yom Kippur War memorial that Israeli forces remain in security zones in Gaza, Lebanon and Syria, and separately that displacement, destruction and occupation are the language Hamas and Hezbollah understand. That position is incompatible on its face with the normalisation-centred postwar strategy Washington presented to the GCC the same week. Katz carries: no withdrawal from the ~700 sq km belt or the Ali al-Taher ridge until Hezbollah is disarmed nationwide. The Lebanese army records ~7,700 violations of the June 26 framework; Lebanon's separate ledger runs ~4,300+ killed / 12,200+ wounded. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold and are reinforced.",
    iran:
      "Official MOH war toll carries unchanged; Day 208 produced no new war count and no confirmed Iranian launch against a host state since September 8-9. The separate protest ledger expanded: Iran Human Rights named more than 4,200 killed since the December 28 shopkeepers' strike, including 420 women and 281 under eighteen, 25 of them under fourteen; the youngest identified was an infant. Per §3.1 this roster is carried alongside, not merged into, the war-casualty series. Pezeshkian addresses the General Assembly today. Iranian coverage again amplified the American half of the Geneva findings and not the crimes-against-humanity half. Rights thread carries: HRW and the Boroumand Center ≥59 arbitrary executions March 18-end August; Iran HRM 23 executions August 23-26; judiciary chief Mohseni Ejei continues to defend executions publicly. Economy: rial past 2,000,000 and −44% in six months, official 12-month average inflation 69.9% against household inflation near 89%, unemployment 9.1%, average monthly salary ~$125 against ~$450 basic spending, 32 medicine categories short, loadings −85%. IAEA UNSC referral (23-3) carries; the Panel of Experts mandate lapses September 26-27 after a fifth Russian and Chinese block. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+.",
    other:
      "No casualty figure published by Riyadh or Sanaa for a sixth day, including for the Riyadh depot fire, so the cumulative holds and the silence is the gap. Saudi Arabia attended the New York meeting with no published retaliation for the September 19 capital strike and no confirmation or denial of striking Sanaa. The 121-strike figure circulating in coverage remains a Houthi claim dated September 8 and is carried as prior context. Displacement carries at 112,000 inside Yemen with nearly 3,000 arrivals in Djibouti and IOM stocks near depletion; no update. Energy: Aramco's East-West pipeline has restarted with several pumping stations still under repair; Yanbu loadings stay depressed after two attacks in nine days; the shortfall is routed through Hormuz rather than replaced; regional flows averaged 17.1 mb/d over ten days and CENTCOM reports Gulf partners moved 1bn+ barrels through the strait in recent months. Sohar STS ~60 mb carries. Lebanon (~4,300+/12,200+), Gulf (33+/~103+ Saudi; Kuwait 10/115), Iraq (148+/402+), maritime (~19 damaged / 7 abandoned / 2 captured / ~18 seafarers) and Mokha/coast (11+/32+) carry.",
  },
};

export default data;
