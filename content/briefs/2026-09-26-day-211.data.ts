import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed, with the diplomatic axis deteriorating institutionally while the market axis relaxed. The dispute over Araghchi's authority to meet Steve Witkoff moved from the IRGC-aligned press into the Majlis: Tehran MP Amirhossein Sabeti registered an impeachment motion and the National Security and Foreign Policy Commission's spokesman demanded the foreign minister account for his authorisation. Per §3.5.3 the motion is a factional instrument rather than a finding, and the counter-evidence is on the record — a sitting MP says his review found the meeting authorised and Mashregh News reports official authorisations were in place. Against that, Araghchi publicly pressed Iran's concrete seven-day plan conveyed through Qatar, under which Hormuz reopens and nuclear talks resume within seven days of American acceptance of the seven conditions. Washington recorded no response and no session is scheduled.",
      risk7d:
        "Seven-day risk holds extreme. The Panel of Experts mandate expires today with no substitute mechanism proposed and no seated 1737 chair, the first lapse of independent Iran sanctions monitoring since the mechanism was created, while the IAEA separately reports it still cannot verify declared material and has not been granted access to struck sites. The Red Sea axis stayed hot: the Houthis claimed missile and drone attacks on a sensitive target in Riyadh and on Saudi Aramco facilities at Yanbu, Saudi Arabia reported interceptions and issued alerts for several regions including Mecca, and France committed soldiers, radar and air-defence systems to protect the Yanbu terminal. No kinetic, humanitarian or verification constraint has been stood down; only the price of risk moved.",
      spillover:
        "Spillover holds critical and is now being managed bilaterally rather than multilaterally. A European state is deploying ground forces and air defences to protect a Gulf monarchy's crude export terminal while the Security Council lets its own monitoring instrument lapse, and Riyadh is simultaneously working Pakistani and Turkish mutual-defence arrangements. The financing axis eased at the margin — the ten-year Treasury fell to about 5.17% after a three-session rout, WTI to $92.55 and Brent to near $104.5, with October hike odds slipping to 64-70% — but remains near a nineteen-year high. The Trump-Xi summit closed with the trade truce extended into 2027, no Iran deliverable and the Chinese bank designation unannounced. The Yemeni humanitarian ledger is unrelieved at roughly 130,000 displaced with 73 UN personnel detained.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'high',
      source: 'Iran International / Gulf News / LaPresse / Shabtabnews / Iran News Update',
      event:
        "Tehran MP Amirhossein Sabeti formally registered an impeachment motion against Foreign Minister Abbas Araghchi in the Majlis system over his three-hour session with Steve Witkoff and Jared Kushner, requesting referral to the National Security and Foreign Policy Commission. The commission's spokesman, Ebrahim Rezaei, publicly demanded that Araghchi explain what authorisation he held, citing Supreme National Security Council secretary Mohsen Rezaei's account that the delegation had been instructed to transmit Tehran's seven conditions through intermediaries. MP Mojtaba Zarei said his own review indicated the meeting was authorised, and Mashregh News reported that the indirect discussions were backed by official authorisations from Tehran.",
      summary:
        "Per §3.5.11 this is the day's single pivotal item because it converts a press attack into a standing procedural threat. Per §3.5.3 the motion is an interested instrument of a faction hostile to the foreign ministry, not a constitutional finding, and it is directly contradicted by two Iranian sources of comparable standing. Per §3.1 rule 3 the divergence is the information: Tehran is not disputing what was said in New York, only who was permitted to say it, and no organ of state has issued the ruling that would settle the question either way.",
      impact:
        "The Iranian signature on any instrument now carries a legislative risk that Washington can neither see nor influence, and the same official carrying the offer abroad is carrying the motion at home.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'Times of Israel liveblog / APA / Press TV / IranWire',
      event:
        "Araghchi told reporters at the United Nations that Iran had conveyed to the United States, through Qatar, a concrete seven-day plan under which the Strait of Hormuz would be reopened and normal maritime passage restored within seven days if the necessary conditions are met, with nuclear talks resuming on the same clock, and that the decision now rests with Washington. The foreign ministry separately characterised the conditions transmitted as clear and transparent. No American response was recorded and no reconvening was announced.",
      summary:
        "Per §3.5.3 this is a claim by an interested party about a proposal whose text has not been published, and it is being made by the official whose authority to make it is under formal challenge at home. Per §3.5.6 the leverage-monetisation prior holds: Tehran is still attempting to convert residual chokepoint leverage into relief rather than rebuilding capability, and is doing so publicly and on a clock of its own setting.",
      impact:
        "Iran has now placed a dated, mediated offer on the American side of the table twice in four days with no recorded reply, which shifts the burden of the next move to Washington while leaving the Iranian mandate unresolved.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'UN Security Council / UK FCDO / US Mission to the UN / Security Council Report',
      event:
        "The mandate of the Panel of Experts monitoring implementation of UN sanctions on Iran expires today, after the Security Council failed to adopt a renewal resolution — eleven members in favour, with China and Russia voting against as permanent members. No substitute monitoring mechanism has been proposed and the 1737 Committee has no seated chair. Members remain divided on the prior question of whether the sanctions are in force at all, with France, Germany and the United Kingdom holding that snapback was validly triggered in September 2025 and Russia and China holding that it was not.",
      summary:
        "Per §3.5.5 quantify the gap: the sanctions architecture goes from one independent monitoring body to zero, with no chair and no proposed replacement, while the IAEA separately reports it cannot verify declared nuclear material and has not been granted access to sites struck by military action. Two verification systems have now failed in the same month, and the second failure is permanent rather than procedural until a new resolution passes.",
      impact:
        "The first lapse of independent Iran sanctions monitoring since the mechanism was created, removing the evidentiary base any future secondary-sanctions case would require.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Bloomberg / Defense News / Euronews / Al Jazeera / Reuters via Voice of Emirates',
      event:
        "President Macron said France will send soldiers, radar systems and defence systems to protect the Saudi Red Sea oil terminal at Yanbu, framing the deployment as site protection rather than entry into the conflict. Saudi officials met Pakistani and Turkish counterparts to discuss options under their mutual-defence arrangements. The Houthis said they had launched missile and drone attacks on a sensitive target in Saudi Arabia's capital and on Saudi Aramco facilities at Yanbu; Saudi Arabia reported interceptions and issued warnings for several regions including Mecca before declaring the danger passed.",
      summary:
        "Per §3.1 the Houthi impact claims are held outside the cumulative pending corroboration, on the al-Hazm precedent; Riyadh reported interceptions and gave no impact casualties. Per §3.5.6 the announced-restart-as-targeting-cue prior sharpens again — Yanbu, the Petroline terminus and the principal Hormuz workaround, has now drawn repeat fire and is being defended by a second and third external military. Per §3.5.6 the condemnation-without-contribution prior enters a ninth day of direct test with Riyadh still silent on its own capital strike.",
      impact:
        "A NATO member is committing ground forces and air defences to a Gulf crude terminal in the same week the Council lets its monitoring instrument lapse, substituting national hardware for multilateral law.",
    },
    {
      id: 5,
      direction: 'de-escalating',
      importance: 'high',
      source: 'CNBC / Trading Economics / Eastern Herald / Federal Reserve H.15',
      event:
        "The ten-year Treasury yield eased to about 5.17% on Friday after a three-session sell-off that had added roughly 23 basis points and carried the benchmark to around 5.20%, its highest since 2007. West Texas Intermediate fell 2.18% to $92.55 and Brent pared to near $104.5 after Iran called on Washington to return to an interim arrangement, off the prior session's $106.60 settle. Market-implied odds of an October Federal Reserve rate rise slipped to a 64-70% range from above 75%, with swaps still pricing roughly three further quarter-point increases over the coming year.",
      summary:
        "Per §3.5.6 the barrels-not-geography pricing prior is reinforced rather than complicated: the entire move down was political, triggered by an Iranian call for an interim deal and a phased-Hormuz report, against no change in physical supply and no reopening. Per §3.5.5 the delta is a roughly $2 retracement in Brent and a five-basis-point easing in the ten-year, which is noise against a 17% monthly gain and a nineteen-year yield high.",
      impact:
        "The curve is now trading an Iranian offer whose sponsor faces an impeachment motion, which makes the retracement the most fragile of the week's price action.",
    },
    {
      id: 6,
      direction: 'neutral',
      importance: 'medium',
      source: 'CNBC / Bloomberg / Al Jazeera / The Hill',
      event:
        "The Trump-Xi state visit concluded in Washington with the trade truce extended into 2027 and no major breakthroughs. The leaders discussed trade, artificial intelligence and the war in Iran, but China's readout referred only to the Middle East situation without naming the war. The president ignored shouted questions on whether he had urged Beijing to stop buying Iranian oil, and the Chinese bank designation contemplated under the secondary-sanctions campaign remained unannounced.",
      summary:
        "Per §3.5.3 the absence of an announcement is not evidence of an understanding. Per §3.5.6 the alignment carried from Day 210 holds and tightens: the two instruments that would bind Iran's revenue — independent monitoring and dollar-clearing sanctions on its largest buyer's banks — have now both been allowed to lapse or sit within the same 48 hours, and one of the parties that blocked the first was hosted at the White House for the second.",
      impact:
        "Iran's largest crude buyer left Washington with its trade terms extended, no oil commitment recorded and no designation delivered, while the monitoring body that would have documented the flows expired.",
    },
  ],
  casualties: {
    us: {
      cumulative:
        'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded. The Intercept reports the Pentagon acknowledges 410 killed or wounded since July 7.',
      delta:
        "+0 confirmed on the AP/CENTCOM combat series into Day 211 — a twenty-fourth consecutive day with no verified new US combat casualty, two of them unrecorded. The day's American activity was diplomatic and financial: no recorded response to Iran's seven-day plan, the Trump-Xi summit closing with no Iran deliverable and the Chinese bank designation still unannounced, and a ten-year Treasury yield easing to about 5.17%.",
      status:
        "The headline holds at 17 KIA / 432 WIA on the combat series against DCAS 18 / 687 all-cause and The Intercept's Pentagon figure of 410 killed or wounded since July 7; per §3.5.3 keep the combat figure and flag both divergences. Aggregator ranges of 19-23 killed and 831-900 wounded against a CENTCOM injured figure of 820 remain recorded as a third unreconciled series rather than adopted. El Gaia stays CONTESTED ATTRIBUTION. The escort corridor holds at roughly 40 ships a day carrying about 14 million barrels; the blockade series holds at 105 vessels redirected, 4 disabled and 26 humanitarian transits permitted, with CENTCOM's cleared-lanes claim carried unarbitrated against Tehran's seven-day reopening offer.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front and no new Israeli military fatality. Israel is absent from the New York channel for a third consecutive day and has published nothing on the mediated talks, the seven-day Hormuz plan or the lapse of the Panel of Experts mandate.",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA on the Iran front. Per §3.5.6 the Israeli-independence prior is reinforced for a third straight day by absence rather than statement: a negotiation about ending the war and reopening the strait has now run three days without Israeli participation, thirty-one days before the October 27 election. Katz's security-zone doctrine stands unretracted — no withdrawal from the ~700 sq km belt or the Ali al-Taher ridge until Hezbollah is disarmed nationwide, a condition no New York instrument addresses. Lebanon's toll accumulates outside the Iran-front ledger at ~4,300+ killed and 12,200+ wounded, with ~7,700 recorded violations of the June 26 framework. The Gaza ceasefire holds broadly.",
    },
    iran: {
      cumulative:
        'Ministry of Health war toll ~3,559 killed · 27,400+ wounded. Iran Foundation series ~3,468; HRANA 3,636+. US-Israeli estimate 6,000+.',
      delta:
        "No new official Iranian war toll on Day 211 and no confirmed Iranian ballistic or drone launch against a host state since the night of September 8-9, a pause now in its seventeenth day. The day's Iranian news was again internal: a registered impeachment motion against the foreign minister, counter-claims from a sitting MP and from Mashregh News that the Witkoff contacts were authorised, and Araghchi publicly pressing the seven-day Hormuz plan conveyed through Qatar.",
      status:
        "Official MOH war toll carries unchanged against the Iran Foundation's ~3,468 and HRANA's 3,636+, with the US-Israeli estimate of 6,000+ noted per §3.1. The Iran Human Rights roster of more than 4,200 named protest dead, including 420 women and 281 under eighteen, carries alongside and is never merged into the war series. The rights thread carries: HRW and Boroumand record at least 59 arbitrary executions March 18 to end-August. The Panel of Experts mandate expires today and the IAEA still reports it cannot verify declared material, with access to struck sites unresolved notwithstanding the September 9 Cairo modalities and the Board resolution urging cooperation. The internal ledger is unchanged: rial past 2,000,000, official inflation 69.9% against household estimates near 89%, average monthly salary near $125 against basic spending near $450, crude loadings down 85%, two national carriers off all Western routes since September 21.",
    },
    other: {
      cumulative:
        'Yemen, Iraq, Gulf states and maritime combined: 3,598+ killed · 10,804+ wounded.',
      delta:
        "+0 adopted. The Houthis claimed missile and drone attacks on a sensitive target in Riyadh and on Saudi Aramco facilities at Yanbu; Saudi Arabia reported interceptions, issued alerts for several regions including Mecca, and gave no impact casualties, so the Houthi impact claims are held outside the cumulative per §3.1 on the al-Hazm precedent. France announced it will deploy soldiers, radar and air-defence systems to protect the Yanbu terminal.",
      status:
        "The Day 209 Houthi claims of a Saudi strike at Mocha killing six including two children, and of nine detainees killed at a northern prison, remain uncorroborated and unanswered by Riyadh, which has also published nothing on the September 19 strike on its own capital for a ninth day. IOM records roughly 130,000 displaced since 1 August with Ta'iz hosting 73,494, and 3,106 crossings to Djibouti; the UN describes aid delivery in Houthi-controlled areas as untenable with 73 UN personnel arbitrarily detained. The al-Hazm prison toll (23 killed, 7 missing) carries inside the cumulative; the IOM shipwreck toll (13 dead, 14 missing) stays held and out. The Houthis hold Mocha, Mayun, the Hanish islands and Yemen's Red Sea coast; Bab al-Mandeb carries ~12% of global trade with no formal closure. Sub-ledgers: Gulf 33+/~103+ Saudi, Kuwait 10/115; Iraq 148+/402+; maritime ~19 damaged, 7 abandoned, 2 captured; Mocha and coast 11+/32+.",
    },
  },
  exec:
    "Day 211 is the day the mandate dispute became a parliamentary procedure. Tehran MP Amirhossein Sabeti formally registered an impeachment motion against Foreign Minister Abbas Araghchi over his session with Steve Witkoff and Jared Kushner, and committee spokesman Ebrahim Rezaei demanded Araghchi explain what authorisation he held (Iran International, Gulf News, LaPresse). The system did not speak with one voice: MP Mojtaba Zarei said his own review found the meeting authorised, and Mashregh News reported the contacts carried official authorisations (Shabtabnews, Iran News Update). Araghchi told reporters at the UN that Iran had conveyed a concrete seven-day plan through Qatar and that the decision now rests with Washington — Hormuz reopened and nuclear talks resumed within seven days of American acceptance of the seven conditions (Times of Israel, APA). The Panel of Experts mandate expires today with no substitute proposed and no seated 1737 chair (UN Security Council, Security Council Report). Macron said France will send soldiers, radars and air-defence systems to protect Yanbu, and Riyadh's partners lined up — Pakistan and Türkiye discussing their mutual-defence arrangements — while the Houthis claimed strikes on a \"sensitive target\" in Riyadh and on Aramco facilities at Yanbu (Bloomberg, Defense News, Euronews, Al Jazeera). Markets unwound: the ten-year Treasury eased to about 5.17% after a three-session rout, WTI fell 2.2% to $92.55, Brent traded near $104.5 after Iran's interim-deal call, and October hike odds slipped to 64-70% (CNBC, Trading Economics). The Trump-Xi summit closed with the trade truce extended into 2027, no Iran deliverable and the Chinese bank designation still unannounced (CNBC, Bloomberg). Direction holds mixed; seven-day risk extreme; spillover critical; the thirty-day ceasefire probability holds at 5.",
  implications: [
    {
      title: 'An impeachment motion is a slower instrument than a press attack — and a more durable one',
      body:
        "Day 210 carried Tasnim's characterisation of Araghchi's account as \"childish and vile\". Day 211 converts that into procedure: a registered impeachment motion referred toward the National Security and Foreign Policy Commission, with the commission's own spokesman demanding the foreign minister account for his authorisation (Iran International, Gulf News, LaPresse). Per §3.5.3 the motion is an interested factional instrument, not a constitutional finding, and the counter-evidence is real — a sitting MP says his review found the meeting authorised and Mashregh News reports official authorisations were in place (Shabtabnews, Iran News Update). Per §3.1 rule 3 the divergence is the information: Tehran is not disputing what was said in New York but who was permitted to say it, and no organ of state has issued the ruling that would settle it. Analytical judgment: under the multi-clock framework the negotiation-capacity clock now runs inside a domestic legislative calendar Washington cannot see or influence. A press attack can be ignored in a week; a referred motion creates a standing procedural threat to whichever official signs. The thirty-day ceasefire probability holds at 5 — the channel is neither closed nor cleared, and the same man carrying the offer is the man carrying the motion.",
    },
    {
      title: 'Two monitors lapse and a third party arrives with interceptors — enforcement is being privatised',
      body:
        "The Panel of Experts mandate expires today with no substitute proposed and no seated 1737 chair, while the IAEA still reports it cannot verify declared material and has not been granted access to struck sites (UN Security Council, Security Council Report, IAEA, RFE/RL). Per §3.5.5 quantify the gap: the sanctions architecture now has zero independent monitoring bodies, against one as recently as Friday, and the Trump-Xi summit closed with the Chinese bank designation still unannounced and Beijing's readout referring only to \"the Middle East situation\" (CNBC, Bloomberg, Al Jazeera). Meanwhile France commits soldiers, radar and air-defence systems to Yanbu, and Riyadh works its Pakistani and Turkish arrangements (Bloomberg, Defense News, Al Jazeera). Analytical judgment: multilateral instruments are failing at the same rate bilateral ones are being improvised. What the Council will not monitor, a Greek Patriot battery and now a French deployment will defend physically. That substitutes hardware for law at a specific cost — protection scales with who can send batteries, and the evidentiary base for any future secondary-sanctions case is no longer being built by anyone.",
    },
    {
      title: "Taiwan: four days to the window's close, and the price is now set by an unresolved impeachment",
      body:
        "Taipei's May assessment that gas was secured \"through September\" expires Wednesday, and CPC has published nothing new on October (Taipei Times, CSIS). Per §3.5.5 the exposure is unchanged and that is the finding: Taiwan imports roughly 96% of its energy, draws about half its generation from LNG, holds about eleven days of reserve, and took roughly 35% of 2025 LNG from Qatar and the UAE, with crude sourcing shifted to about 60% US (CSIS, IFRI, Wood Mackenzie). Analytical judgment: Brent easing to near $104.5 on an Iranian interim-deal call is not relief for Taipei, because the move was entirely political — the physical supply that would refill the October book still depends on a Hormuz reopening whose Iranian sponsor is facing an impeachment motion. Taiwan enters October with adequate molecules, no contractual floor and a price set by a Majlis committee calendar. No fresh Taiwan-specific development today; prior assessments unchanged.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series); DCAS holds 18 / 687 all-cause; The Intercept's Pentagon figure of 410 killed or wounded since July 7 carries. Aggregator ranges of 19-23 killed and 831-900 wounded, against a CENTCOM injured figure of 820, remain recorded per §3.5.3 as a third unreconciled series and not adopted. Twenty-fourth consecutive quiet day, two unrecorded. Day 211's American activity was diplomatic and financial: no recorded reply to Iran's seven-day plan, the Trump-Xi summit closing with no Iran deliverable, and a ten-year Treasury yield easing to about 5.17%.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new toll and no published Israeli statement for a third consecutive day. The significant Israeli fact remains absence: three days of New York talks on ending the war and reopening the strait with no reported Israeli participation, thirty-one days before the October 27 election. Katz carries unretracted: security zones in Gaza, Lebanon and Syria, and no withdrawal from the ~700 sq km belt or Ali al-Taher until Hezbollah is disarmed nationwide. Lebanon's separate ledger runs ~4,300+/12,200+ with ~7,700 recorded violations of the June 26 framework.",
    iran:
      "Official MOH war toll carries unchanged; Day 211 produced no new war count and no confirmed Iranian launch against a host state since September 8-9, now a seventeen-day pause. The day's Iranian development was again factional and now procedural: an impeachment motion registered against the foreign minister, a commission spokesman demanding he account for his authorisation, and counter-claims from MP Zarei and Mashregh News that authorisations were in place — while Araghchi publicly pressed the seven-day Hormuz plan conveyed through Qatar. HRANA 3,636+ and the Iran Foundation ~3,468 carry alongside; the Iran Human Rights roster of 4,200+ named protest dead carries separately per §3.1. The Panel of Experts mandate expires today and the IAEA still cannot verify declared material or access struck sites.",
    other:
      "+0 adopted. The Houthis claimed missile and drone strikes on a sensitive target in Riyadh and on Saudi Aramco facilities at Yanbu; Saudi Arabia reported interceptions, alerted several regions including Mecca and gave no impact casualties, so the claims are held outside the cumulative per §3.1 on the al-Hazm precedent. France will deploy soldiers, radar and air-defence systems to protect Yanbu, and Riyadh is working Pakistani and Turkish mutual-defence arrangements. The Day 209 Mocha and prison claims remain uncorroborated and unanswered by Riyadh, which has also published nothing on the September 19 capital strike for a ninth day. IOM records roughly 130,000 displaced since 1 August with Ta'iz hosting 73,494 and 3,106 crossings to Djibouti; 73 UN personnel remain arbitrarily detained.",
  },
};

export default data;
