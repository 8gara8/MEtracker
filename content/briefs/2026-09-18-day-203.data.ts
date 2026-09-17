import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds escalating, and on Day 203 the war acquired a legal record. The UN Independent International Fact-Finding Mission on Iran published findings of reasonable grounds to believe the United States committed the war crime of launching indiscriminate attacks on February 28 — the war's first day — against a primary school in Minab and a sports complex in Lamerd, and in the same report found Iran's repression of the 2025-26 protests amounts to crimes against humanity. Riyadh meanwhile converted its Mecca red line into tempo rather than reach: 40 Saudi airstrikes in 24 hours on Taiz, Marib and Hodeidah per the Houthi spokesman, more than 450 over the week, and no strike on Sanaa. Saudi Arabia solved its export problem by routing crude through the strait it had spent six months bypassing. Nothing de-escalated.",
      risk7d:
        "Seven-day risk holds extreme. The Mecca red line has been answered with volume rather than escalation of target set, which lowers the immediate risk of a Sanaa strike while leaving the threshold itself unretired and unverified. Beneath it the physical position is unchanged and bad: Petroline offline since September 10 with pumping-station electrical and control damage putting repair at four to six weeks, no crude loaded at Yanbu since September 11, terminal stocks below 15 million barrels, Salalah dormant on a fifth day, Bab al-Mandeb held. The new variable is that roughly 40 vessels a day now transit Hormuz under US naval protection carrying about 14 million barrels, and Saudi shuttle tankers have joined them. A single laden-tanker loss inside that corridor now reprices oil and implicates Riyadh directly.",
      spillover:
        "Spillover holds critical and moved into the legal and diplomatic register. A UN-mandated body has now indicted both principal belligerents in one document, with the report due before the 47-member Human Rights Council in Geneva on Monday and the General Assembly convening days later. Araghchi spent Day 203's news cycle in Beijing, where Wang Yi urged all parties to reopen the Strait of Hormuz as soon as possible and pressed both Tehran and Washington back toward talks — a week before the September 24 US-China summit at which a major Chinese bank designation is pinned. The humanitarian axis widened again: IOM put displacement inside Yemen at 104,796 people across 17,461 households, and more than 2,400 crossed to Djibouti in four days into a site with room for roughly 5,000 more.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'high',
      source: 'OHCHR / NPR / Al Jazeera / NBC News / CBC',
      event:
        "The UN Independent International Fact-Finding Mission on the Islamic Republic of Iran published a report finding reasonable grounds to believe the United States committed the war crime of launching indiscriminate attacks resulting in loss of civilian life. The Mission cited the February 28 strikes on the Shajareh Tayyebeh Primary School in Minab, which killed more than 150 people including approximately 120 children, and on a sports complex in Lamerd — 178 civilians across both sites on the war's opening day. Photographs before and after the strike showed what the Mission called readily identifiable features of a facility for young children. US forces appear to have relied on outdated intelligence, and the report said the failure to verify the target went beyond negligence. The same report found the Iranian government's repression of the 2025-26 protests amounts to crimes against humanity, including murder, imprisonment, torture and other inhumane acts committed as part of a widespread and systematic attack on civilians. The Pentagon said it was reviewing the report and offered no further comment; the State Department did not respond to a request for comment. The Mission presents its findings to the 47-member Human Rights Council in Geneva on Monday.",
      summary:
        "Per §3.1 the report is cited as the Mission's finding, not a court judgment, and both halves of it are carried — the US war-crime finding and the Iranian crimes-against-humanity finding arrive in the same document. Per §3.5.3 the Pentagon's earlier position, and Trump's June statement that nobody purposefully attacked a girls' school, are held against a Pentagon probe that has published nothing.",
      impact:
        "Day 1 of the war has become Day 203's legal record, and both principal belligerents are now formally accused by the same UN-mandated body on the eve of the General Assembly.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Malay Mail / France 24 / Al Jazeera / Houthi military spokesman',
      event:
        "Riyadh began answering its own red line. Houthi military spokesman Yahya Saree said Saudi warplanes launched 40 airstrikes in 24 hours against the provinces of Taiz, Marib and Hodeidah, and put the number of Saudi strikes over the past week above 450. Saudi Arabia framed the campaign as a response to what it called a cowardly Houthi drone attack on Mecca, which the Houthis continue to reject as a lie; coalition spokesman Turki al-Maliki's red-line formulation stands unretracted and unverified. Sanaa was not struck. The Houthis' own claimed targets over the same period remain Saudi oil infrastructure at Yanbu and the air base at Khamis Mushait, both unconfirmed by Riyadh.",
      summary:
        "Per §3.5.5 the shape of the answer is the analysis: 40 sorties in a day and 450 in a week is an increase in tempo within the existing target set, not an expansion of it. Per §3.1 the strike counts come from the Houthi spokesman and Riyadh has published no tally of its own.",
      impact:
        "The most dangerous open item of Day 202 has been discharged at lower intensity than the rhetoric implied, but the threshold remains declared, unverified and available to invoke again.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: 'CNBC / Bloomberg / Kpler / Al Jazeera / Trading Economics',
      event:
        "Saudi Arabia solved its export problem by using the strait it had spent the war avoiding. Aramco sold roughly 20 million barrels of spot crude to Asian refiners for September and October pickup outside the Strait of Hormuz, making cargoes available through ship-to-ship transfers near Oman's Sohar port: shuttle vessels carry crude out through Hormuz and load it onto tankers waiting beyond the strait, sparing the larger ships a transit into the Gulf. US Energy Secretary Chris Wright said the Saudis had taken quick action to export more oil through Hormuz with the assistance of the US military. Brent lost $1.01 to settle at $104.82 and WTI shed 52 cents to $101.91. Against the relief, Kpler reported that no crude has loaded from Yanbu since September 11, that terminal stocks have fallen below 15 million barrels — a four-to-seven-day buffer — and that a partial bypass would restore only about half of exports within a month, with the four-to-six-week repair driven by pumping-station electrical and control damage rather than pipeline steel.",
      summary:
        "Per §3.5.3 Wright's second favourable framing in three days is cited as the administration's claim and set against Kpler's loading and inventory data, which is the harder evidence. Per §3.5.5 the sequence is unchanged: bypass severed September 10, Yanbu loadings stopped September 11, and the workaround now runs through the contested chokepoint under American escort.",
      impact:
        "The kingdom's crude reaches market again by entering the corridor Iran has spent six months contesting, with US warships as the enabling condition and Saudi hulls newly inside the risk envelope.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'The National / Al Jazeera / CNBC / Chinese foreign ministry',
      event:
        "Iranian Foreign Minister Abbas Araghchi held talks in Beijing with Wang Yi, the second in-person meeting in the Chinese capital since the war began on February 28. Wang told Araghchi that China wants Iran and the United States to remain rational and exercise restraint and return to talks, called on Tehran and Washington to engage in substantive consultations on issues of mutual concern, and urged all parties to take effective measures to reopen the Strait of Hormuz as soon as possible. Araghchi said Tehran seeks the restoration of calm to the region and friendly and peaceful relations with its neighbours — the nearest thing to an Iranian response to the Saudi accusations, offered without mentioning Mecca. The visit falls a week before the September 24 US-China summit. China remains the largest buyer of Iranian crude.",
      summary:
        "Per §3.1 Wang's language is carried as a Chinese official position, not as mediation: Beijing has asked for a reopening, not offered to broker one. Per §3.5.3 Araghchi's neighbourly formulation is a diplomatic register shift and not a substantive change to the conditions he has attached to any Hormuz reopening.",
      impact:
        "Iran's principal customer has now publicly asked it to reopen the strait, which narrows Tehran's room a week before the summit at which a major Chinese bank designation is pinned.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'IOM DTM / UNHCR / UN News / Al Jazeera',
      event:
        "The IOM Displacement Tracking Matrix released September 16 put the number of people displaced inside Yemen at 104,796 across 17,461 households, a further revision from 93,864 on Day 202, 85,818 on September 13 and roughly 46,000 on Day 200, with 82,164 of them displaced since the beginning of September alone as fighting continued along the West Coast. More than 2,400 people crossed from Yemen to Djibouti over four days, landing mainly around Obock, with Djiboutian authorities mobilising the navy, army, police and health services. Arrivals — many of them women and young children — are being moved to the Markazi site, which has room for roughly 5,000 more while preparations are under way for over 10,000.",
      summary:
        "Per §3.5.5 the ledger has gone from about 46,000 to 104,796 in four days of reporting, an increase of roughly 128%, and the receiving capacity is a smaller number than the projected arrivals. Per §3.1 the earlier IOM shipwreck toll of 13 dead and 14 missing remains held separately pending confirmation.",
      impact:
        "The Bab al-Mandeb crossing is now absorbing more people per week than the Djibouti site can hold, and the shortfall is measured in shelter rather than in ships.",
    },
  ],
  casualties: {
    us: {
      cumulative:
        'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded. The Intercept reports the Pentagon acknowledges 410 killed or wounded since July 7 alone.',
      delta:
        "+0 confirmed on the AP/CENTCOM combat series into Day 203 — a sixteenth consecutive day with no verified new US combat casualty. The material US development was legal: a UN-mandated Fact-Finding Mission published findings of reasonable grounds to believe US forces committed the war crime of indiscriminate attack on February 28. The Pentagon said it was reviewing the report; the State Department did not comment. CENTCOM has now attributed the El Gaia, saying the tanker was struck by an Iranian missile last month and hit again by an Iranian drone off Oman at the weekend; the IRGC maintains the vessel struck mines. Per §3.1 both accounts are carried.",
      status:
        "The headline holds at 17 KIA / 432 WIA on the combat series against DCAS 18 / 687 all-cause and The Intercept's Pentagon figure of 410 killed or wounded since July 7; per §3.5.3 keep the combat figure and flag both divergences. Day 203's US developments were legal and logistical rather than kinetic. The Fact-Finding Mission's finding lands against an internal military investigation that Reuters reported found US forces likely responsible for the Minab strike and that the Pentagon has elevated without publishing, and against Trump's June statement that nobody purposefully attacked a girls' school. A US official told Axios that roughly 40 ships a day were transiting the strait under American protection as of September 15, carrying about 14 million barrels, and Saudi shuttle tankers have now joined that corridor. The Senate has not taken up the House's 220-204 war powers resolution; the $67B supplemental is unresolved and AAA put diesel at a record $6.23 a gallon on September 14, up nearly 69% year on year.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front and no new Israeli military fatality. Israel stayed offstage for a fifth consecutive day — absent from the Fact-Finding Mission's war-crime finding, which named the United States alone on the coalition side, and absent from the Mecca dispute, the Saudi air campaign and the Beijing meeting. Katz's Lebanon position carries unchanged; the Gaza ceasefire holds broadly with sporadic strikes.",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA on the Iran front. The notable Israeli fact on Day 203 is again an absence, and this time a consequential one: the UN Mission's indiscriminate-attack finding attaches to the United States, not to the coalition, leaving Israel outside a legal exposure its partner now carries. Lebanon's own toll continues to accumulate outside the Iran-front ledger, with roughly 4,300 killed and over 12,200 wounded since Hezbollah entered the war in March. Katz has tied withdrawal from the roughly 700 sq km security belt and the Ali al-Taher ridge to nationwide Hezbollah disarmament. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold and are reinforced.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No new official Iranian war toll on Day 203. The Fact-Finding Mission's figures — more than 150 killed at the Shajareh Tayyebeh Primary School in Minab including approximately 120 children, and 178 civilians across Minab and Lamerd — are February 28 deaths already inside the cumulative and are NOT a new delta and NOT a casualty revision; they are restated here because a UN body has now attributed them. Araghchi, in Beijing, said Tehran seeks the restoration of calm and friendly relations with its neighbours, without addressing the Mecca accusation directly. Silence on the Taeb report ran to a fifth day.",
      status:
        "Iran received the war's first UN-mandated finding of a US war crime and the war's first UN-mandated finding of its own crimes against humanity on the same day, in the same report. The Mission called the repression of the 2025-26 protests an unprecedented escalation from past crackdowns — widespread lethal force, mass killings, extensive arrests — amounting to murder, imprisonment and torture as part of a systematic attack on civilians. That sits alongside the standing rights thread: HRW and the Abdorrahman Boroumand Center document at least 59 men arbitrarily executed between March 18 and the end of August, including at least 29 arrested over the December 2025-January 2026 protests and three from 2022, several aged 18 or 19, five in public; Iran Human Rights Monitor counted 23 executions between August 23 and 26. Araghchi's conditions on any Hormuz reopening carry — conditional, and subject to compensation for the violation of the June memorandum — now against a Chinese public request to reopen. The IAEA Board referral (23-3, eight abstentions) carries, with the Security Council still unable to seat a 1737 Committee chair or appoint a Panel of Experts over Russian and Chinese objections.",
    },
    other: {
      cumulative:
        'Yemen/Houthi-Saudi ~3,598 KIA · 10,804+ WIA across Lebanon (~4,300+/12,200+), Gulf states (33+/~103+ Saudi; Kuwait 10/115), Iraq (148+/402+), maritime (~19 damaged / 7 abandoned / 2 captured / ~18 seafarers) and Mokha/coast (11+/32+)',
      delta:
        "+0 confirmed on both sides of the Saudi-Houthi exchange despite the heaviest air tempo of the campaign: 40 Saudi airstrikes in 24 hours on Taiz, Marib and Hodeidah and more than 450 over the week, all per the Houthi spokesman, with no Saudi tally and no casualty figure published by either side. Displacement is the measurable delta: IOM's Displacement Tracking Matrix put displacement inside Yemen at 104,796 across 17,461 households as of September 16, up from 93,864, with 2,400+ having reached Djibouti in four days. The earlier IOM shipwreck toll of 13 dead and 14 missing stays held pending confirmation and out of the cumulative.",
      status:
        "Yemen remains the war's fastest-moving front and now supplies both its air campaign and its refugee crisis. The Houthis hold Mokha, Mayun and the Hanish islands with forces roughly 20 km from the African coast and control the length of Yemen's Red Sea coast; Bab al-Mandeb carries about 12% of global trade, 11% of seaborne oil and 8% of LNG, and no formal closure has been declared, leaving that rung in reserve. Petroline stays offline since September 10 — 1,200 km, 7 mb/d nameplate, repair put at four to six weeks on pumping-station damage — with no crude loaded at Yanbu since September 11 and stocks below 15 million barrels. Aramco's answer is a Sohar ship-to-ship arrangement moving roughly 20 million barrels to Asian refiners through Hormuz under US naval protection. Iraq's reopening of two of three Iran crossings remains the only active de-escalation in the theatre, and it is not on a clock.",
    },
  },
  exec:
    "Day 203 turned the war's first day into a legal finding. The UN Independent International Fact-Finding Mission on Iran published a report finding reasonable grounds to believe the United States committed the war crime of launching indiscriminate attacks, citing the February 28 strikes on the Shajareh Tayyebeh Primary School in Minab — more than 150 killed, approximately 120 of them children — and on a sports complex in Lamerd, 178 civilians in all (OHCHR, NPR, Al Jazeera). The failure to verify the target, the Mission said, went beyond negligence. The same report found Iran's repression of the 2025-26 protests amounts to crimes against humanity including murder, imprisonment and torture. The Pentagon said it was reviewing; the State Department did not comment. Riyadh converted its Mecca red line into tempo rather than reach: Yahya Saree said Saudi warplanes flew 40 airstrikes in 24 hours against Taiz, Marib and Hodeidah and put the week above 450, and Sanaa was not struck. Saudi Arabia then solved its export problem through the strait it had spent six months avoiding, selling roughly 20 million barrels of spot crude to Asian refiners for ship-to-ship transfer outside Hormuz near Oman's Sohar, with shuttle tankers transiting under US military assistance. Brent lost $1.01 to $104.82 and WTI settled at $101.91, though Kpler reported no crude loaded at Yanbu since September 11 and stocks below a seven-day buffer. Araghchi was in Beijing, where Wang Yi urged all parties to reopen Hormuz. IOM put displacement inside Yemen at 104,796. Direction escalating; seven-day risk extreme; spillover critical; the thirty-day ceasefire probability holds at 2.",
  implications: [
    {
      title: 'Both belligerents were indicted by the same body on the same day, and neither will be tried',
      body:
        "The UN Independent International Fact-Finding Mission found reasonable grounds to believe the United States committed the war crime of indiscriminate attack at Minab and Lamerd on February 28, and in the same report found Iran's repression of the 2025-26 protests amounts to crimes against humanity (OHCHR, NPR, Al Jazeera, NBC). Per §3.1 both halves are carried and neither is a court judgment. The symmetry is the point: a single UN-mandated body has now placed formal findings against both principals, which removes the atrocity argument from either side's exclusive use. Per §3.5.3 the US position is a claim under strain — Trump said in June that nobody purposefully attacked a girls' school, Reuters reported an internal military investigation had found US forces likely responsible, the Pentagon elevated that probe and has published nothing, and on Day 203 it would say only that it was reviewing. Under the multi-clock framework this runs on the political-will clock rather than the negotiation-capacity clock: there is no enforcement mechanism, but the report goes to the 47-member Human Rights Council on Monday with the General Assembly days behind it, and it arrives into a Congress that has already passed a war powers resolution 220-204. Analytical judgment: the finding changes no military fact and constrains no belligerent, but it converts Day 1 into documentary evidence at exactly the moment the war's domestic authorisation is being contested, and it gives every abstaining state a citable reason not to join either side.",
    },
    {
      title: 'The red line bought tempo, and Riyadh solved Yanbu by entering Iran’s chokepoint behind American warships',
      body:
        "Riyadh answered its own Mecca threshold with volume inside the existing target set — 40 airstrikes in 24 hours on Taiz, Marib and Hodeidah, more than 450 across the week per Saree, and no strike on Sanaa (Malay Mail, France 24). Per §3.5.5 that is escalation in rate, not in reach, and it is the lower-intensity branch of Day 202's most dangerous open item; the threshold itself stays declared and unverified, so it can be invoked again at any time. The harder development is economic. Aramco has sold roughly 20 million barrels of spot crude to Asian refiners for ship-to-ship transfer outside Hormuz near Sohar, shuttling cargoes out through the strait so buyers' tankers never enter the Gulf, with Energy Secretary Chris Wright crediting US military assistance (CNBC, Bloomberg). Per §3.5.3 that is the administration's second favourable framing in three days and it is cited as such: Kpler reports no crude loaded at Yanbu since September 11, stocks below 15 million barrels, and only about half of exports restored within a month. Under the multi-clock framework the energy-infrastructure clock has been partially rerouted rather than repaired, at the cost of moving Saudi hulls into the corridor Iran contests. Analytical judgment: the kingdom has traded a closed bypass for dependence on an American escort through its adversary's strait, and a single laden-tanker loss there now implicates Riyadh directly.",
    },
    {
      title: 'Taiwan: the workaround that worked belongs to someone else',
      body:
        "Day 203's energy news is the mirror image of Day 202's for Taipei. Taiwan's answer to Hormuz was to lift crude at Saudi Arabia's Red Sea ports, an arrangement premised on Petroline delivering eastern barrels to Yanbu (Malay Mail); that berth has had no loading since September 11. Saudi Arabia's answer was the opposite — go back through Hormuz, sell about 20 million barrels to Asian refiners at Sohar, and let the US Navy carry the risk. Per §3.5.5 the distinction matters: roughly 40 ships a day now transit under American protection carrying about 14 million barrels, and Taiwanese-chartered cargoes have no standing claim on that escort. The LNG picture is unchanged and worse than the crude one — Qatari cargoes were to resume from early September contingent on a reopening that has not happened, CPC continues to buy spot after Qatar's force majeure and the roughly 17% cut to Ras Laffan liquefaction, and Wang Yi's public call for reopening is China bidding for the same restoration Taipei needs. Exposure holds: about 96% of energy imported, LNG roughly half of generation, nearly 40% of long-term contracted LNG from Qatar, reserves near twelve days against a statutory fourteen-day floor not due until 2027. Analytical judgment: Taipei's insurance route closed while its suppliers' insurance route reopened under a naval umbrella it does not sit under, and the assurance window is spent with no October cover.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series); DCAS holds 18 / 687 all-cause; The Intercept's Pentagon figure of 410 killed or wounded since July 7 carries. Per §3.5.3 keep the combat series and flag both divergences. Sixteenth consecutive quiet day. Day 203's US development was legal: the UN Fact-Finding Mission found reasonable grounds to believe US forces committed the war crime of indiscriminate attack on February 28; the Pentagon is reviewing and State did not comment. CENTCOM has now attributed the El Gaia to an Iranian missile and a follow-on Iranian drone; the IRGC says mines — both carried per §3.1. Axios reports ~40 ships/day transiting under US protection as of September 15 carrying ~14 mb/d. Senate has not taken up the 220-204 House resolution; AAA diesel record $6.23/gal on September 14.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new toll. Israel stayed offstage for a fifth day and was not named in the Fact-Finding Mission's indiscriminate-attack finding, which attaches to the United States alone. Katz carries: no withdrawal from the ~700 sq km belt or the Ali al-Taher ridge until Hezbollah is disarmed nationwide. Lebanon's separate ledger runs ~4,300+ killed / 12,200+ wounded. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold and are reinforced.",
    iran:
      "Official MOH war toll carries unchanged; Day 203 produced no new count. The Fact-Finding Mission's Minab and Lamerd figures (150+ killed including ~120 children; 178 civilians across both sites) are February 28 deaths already inside the cumulative — not a new delta and not a casualty revision, restated because a UN body has now attributed them. The same report found Iran's repression of the 2025-26 protests amounts to crimes against humanity. Araghchi in Beijing said Tehran seeks restoration of calm and friendly relations with neighbours, without addressing Mecca; fifth day of silence on the Taeb report. Rights thread carries: HRW and the Boroumand Center ≥59 arbitrary executions March 18-end August, ≥29 arrested over the December 2025-January 2026 protests, three from 2022, several aged 18-19, five in public; Iran HRM 23 executions August 23-26. IAEA UNSC referral (23-3) carries; the Council still cannot seat a 1737 Committee chair or Panel of Experts over Russian and Chinese objections. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+.",
    other:
      "+0 confirmed casualties on either side of the Saudi-Houthi exchange despite the campaign's heaviest air tempo: 40 Saudi airstrikes in 24 hours on Taiz, Marib and Hodeidah and 450+ over the week, all per the Houthi spokesman, with no Saudi tally published. Displacement is the delta: IOM DTM put displacement inside Yemen at 104,796 across 17,461 households as of September 16, up from 93,864, with 82,164 displaced since September 1 and 2,400+ reaching Djibouti in four days into a Markazi site with room for ~5,000 against preparations for 10,000+. The IOM shipwreck toll of 13 dead / 14 missing stays held pending confirmation and excluded. Petroline offline since September 10 with a four-to-six-week repair estimate; no Yanbu loading since September 11; stocks below 15 mb. Lebanon (~4,300+/12,200+), Gulf (33+/~103+ Saudi; Kuwait 10/115), Iraq (148+/402+), maritime (~19 damaged / 7 abandoned / 2 captured / ~18 seafarers) and Mokha/coast (11+/32+) carry.",
  },
};

export default data;
