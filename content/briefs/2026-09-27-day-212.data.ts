import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed. The American answer to Iran's seven-day Hormuz roadmap arrived as a doorstep remark rather than a mediated document: Trump told reporters \"I reject their proposal\" and said Tehran wants a deal because it is \"losing so badly\". Araghchi declined to treat that as the answer, telling IRNA that Iran had heard only \"the first reaction from the US president\" with nothing conveyed by the mediators, and that Tehran will decide when the definitive position arrives. Per §3.5.3 both are interested positions on a text neither side has published. Against the rejection, Iran's president used an American network to answer the negotiating-authority question directly, describing a six-member coordinating body as the locus of Iranian decision-making and offering IAEA inspections as a negotiated outcome. Nothing kinetic changed and the channel is neither closed nor scheduled.",
      risk7d:
        "Seven-day risk holds extreme, and the dominant clock is now the deadline rather than the negotiation. The Supreme National Security Council's four-to-five-day acceptance window on the written 60-day roadmap expires around September 28-29, and the only instrument capable of closing it — a formal reply through Qatar, Pakistan or Egypt — has not been generated four days after the September 23 session. Day one without a Panel of Experts passed with no substitute mechanism proposed and no seated 1737 chair, while the IAEA still cannot verify roughly 440.9 kg of 60% material or access struck sites, and Pezeshkian's inspection offer explicitly excludes restoring the prior frameworks. The Red Sea axis stayed hot with Saudi interception of six ballistic missiles and an urgent Saudi-Pakistani-Turkish chiefs-of-staff meeting convened under the Mecca Joint Defence Agreement.",
      spillover:
        "Spillover holds critical and continues to be managed bilaterally rather than through the Council. France's committed Yanbu deployment of soldiers, radar and air-defence systems remains undetailed and unexecuted while Riyadh escalates to chiefs-of-staff level with Islamabad and Ankara and the Saudi Grand Mufti calls on troops to fight the Houthis. The financing axis stayed tight: the ten-year Treasury finished Friday at 5.163%, a level unseen since 2007, the thirty-year near its 2004 high, October Federal Reserve hike odds at 64% CME-implied against 70% in bond-market terms, and Brent easing toward $105. Iran's internal ledger worsened on better data — point-to-point inflation of 83.8% in September, materially above the 69.9% official figure previously carried. The Yemeni humanitarian ledger is unrelieved at roughly 130,000 displaced with 73 UN personnel detained and aid delivery described as untenable.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'Bloomberg / CNN / NPR / Washington Post / Al Jazeera',
      event:
        "President Trump publicly rejected Iran's seven-day Hormuz roadmap, telling reporters outside the White House \"I reject their proposal\" and adding that Tehran wants an agreement because it is \"losing so badly\". It is the first recorded American answer to the written 60-day plan Araghchi handed Steve Witkoff and Jared Kushner in a three-hour September 23 session mediated by Qatar, Pakistan and Egypt — and it came as a remark, not a document transmitted through the mediators.",
      summary:
        "Per §3.5.3 this is a statement by the party with the most to gain from ambiguity, on a text that has not been published. Per §3.5.6 the deferral-as-answer prior is rehabilitated in sharper form: Washington has rejected in public what it has not formally received or refused.",
      impact:
        "The first American response in four days carries no procedural consequence, leaving the mediated channel formally open and the SNSC's expiring deadline unanswered.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'Iran International / Times of Israel liveblog / Middle East Eye / TRT World',
      event:
        "Araghchi declined to treat the rejection as the answer, telling IRNA that Iran had heard \"the first reaction from the US president, but nothing has yet been conveyed to us by the mediators\" and that Tehran is \"waiting for the final position to be conveyed through the mediators, and we will decide based on that\". The SNSC's four-to-five-day acceptance window on the written roadmap expires around September 28-29; no reconvening has been announced.",
      summary:
        "Per §3.5.3 refusing to hear a refusal is itself an interested position, taken by the official whose authority to negotiate is under formal challenge at home. Per §3.5.6 the leverage-monetisation prior holds: Tehran is preserving a dated offer rather than withdrawing it, because the offer is the leverage.",
      impact:
        "Both capitals have built themselves an exit from their own statements, keeping the channel alive at the cost of making the deadline meaningless to either.",
    },
    {
      id: 3,
      direction: 'pivotal',
      importance: 'high',
      source: 'CBS News transcript / CBS News / Hatha Alyoum / United News of India',
      event:
        "In a CBS \"Face the Nation\" interview recorded September 25 and aired today, President Masoud Pezeshkian said Iranian decisions are taken by a six-member body drawn from security organisations, parliamentary representatives and government agencies which \"reach any decisions through coordination\", and that everything discussed in New York \"was shaped through coordination\". He confirmed two meetings with the new Supreme Leader since March, one of more than seven hours, and speaking as a physician judged him \"completely healthy\" after the strikes that killed his father and family, attributing the absence of any public appearance since March to assassination risk. He framed the roadmap as staged implementation of the June MOU signed in Pakistan and said the IRGC would abide if Iran-Oman route coordination is respected.",
      summary:
        "Per §3.5.11 this is the day's single pivotal item: the first head-of-state claim on negotiating authority since the impeachment motion was registered, and if the body exists as described the motion's premise is false. Per §3.5.3 it remains a claim by the most interested party, not a ruling by the SNSC, the Leader's office or the commission. Per §3.1 rule 3 the divergence is the information — presidency, SNSC secretary and Majlis faction have now given three incompatible accounts of who authorised what.",
      impact:
        "Iran's contested mandate has a presidential answer on an American broadcast, plus the first authoritative statement in six months that the Supreme Leader is alive, met and functioning.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'CBS News transcript / RFE/RL via GlobalSecurity.org / IAEA',
      event:
        "Asked whether Iran would now admit IAEA inspectors, Pezeshkian said \"that is absolutely correct\" and qualified it: \"if they wish to come in and have inspections, we can reach accords and agreements vis-à-vis that specific topic within the negotiations. Not for them now to come and inspect those existing frameworks again.\" The Agency still cannot verify the roughly 440.9 kg of uranium enriched to 60% accumulated before the strikes and has no access to struck sites. He declined to meet Trump until trust is restored and declined to release two Americans determined to be wrongfully detained, including Evin-held journalist Reza Valizadeh, saying of earlier prisoner arrangements \"we tested it, but it didn't work\".",
      summary:
        "Per §3.5.3 the headline concession is narrower than reported: inspections as a negotiated outcome, explicitly not restored access to the pre-strike frameworks. Per §3.5.6 the verification-vacuum prior hardens — with the Panel lapsed and the Agency offered only future access, no neutral body could certify compliance on this timetable.",
      impact:
        "Any deal available on the current clock would have to be accepted unverified, raising the American cost of accepting it and the Iranian cost of offering more.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'OHCHR / Time / CNN / Axios / CBC / UN Security Council / Security Council Report',
      event:
        "Day one without a Panel of Experts passed with no substitute mechanism proposed and no seated 1737 chair, after a renewal vote of eleven in favour with Russian and Chinese vetoes. Both halves of the UN Fact-Finding Mission's symmetric indictment stayed on the table: reasonable grounds that US Tomahawk strikes on the clearly identifiable Shajareh Tayyebeh primary school at Minab and on a Lamerd sports facility were war crimes, and reasonable grounds that Iran's crackdown amounted to crimes against humanity, against official counts of 3,038 killed and 25,000 injured the Mission assessed as likely low. Pezeshkian accepted the first finding and rejected the second on camera.",
      summary:
        "Per §3.5.6 the symmetric-indictment prior was tested directly: the head of state citing Minab as evidence of American war crimes dismissed the crackdown finding as the work of armed instigators, citing more than 500 security personnel killed. Per §3.5.5 quantify: zero independent Iran sanctions monitors against one a week ago, and no chair to appoint a replacement.",
      impact:
        "The body that would have documented sanctions violations is gone on the day Washington rejected the offer that would have lifted them.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'medium',
      source: 'Al Jazeera / The National / MiGFlug / Dawn / Jerusalem Post',
      event:
        "Saudi Arabia, Pakistan and Türkiye moved to an urgent chiefs-of-staff meeting under the Mecca Joint Defence Agreement signed August 7, with the Saudi Grand Mufti calling on troops to fight the Houthis. Saudi forces reported intercepting six Houthi ballistic missiles. France's committed Yanbu deployment of soldiers, radar and air-defence systems, announced September 24 as strictly defensive and non-combat, remained undetailed and unexecuted. Yanbu terminates the East-West pipeline, which can carry up to seven million barrels a day.",
      summary:
        "Per §3.1 the Houthi impact claims on Riyadh and Aramco at Yanbu stay held outside the cumulative on the al-Hazm precedent; Riyadh reported interceptions and no impact casualties. Per §3.5.6 the privatised-enforcement prior is reinforced — a European deployment and a two-month-old pact are both organising around one terminal while the Council's own instrument lapses.",
      impact:
        "The Red Sea workaround is defended by an improvised coalition with no multilateral cover and no published force levels.",
    },
    {
      id: 7,
      direction: 'neutral',
      importance: 'medium',
      source: 'CBS News / CNN / PBS / The Hill / CNBC / Trading Economics / NCRI',
      event:
        "Acting Navy Secretary Hung Cao told Congress there have been eight suicide attempts across the USS Abraham Lincoln strike group since its November deployment began — two during active fighting with Iran, two sailors overboard, no deaths — across 250+ uninterrupted days at sea this year. Markets held near their highs: the ten-year finished Friday at 5.163%, unseen since 2007, the thirty-year near its 2004 high, October Fed hike odds 64% CME-implied against 70% in bond-market terms, Brent easing toward $105. Iranian point-to-point inflation printed 83.8% for September against 84.4% in August, with September 20 retiree protests in six cities.",
      summary:
        "Per §3.5.3 the Navy's comparison of the attempt rate to the 2024 fleet-wide rate is an interested framing, recorded not adopted; the load-bearing figure is 250 uninterrupted days at sea. Per §3.5.3 the 83.8% point-to-point print supersedes the 69.9% official inflation figure previously carried. Per §3.5.6 the barrels-not-geography prior holds: Brent eased into a public presidential rejection because no physical supply changed.",
      impact:
        "The American cost is migrating from combat casualties to force sustainment while Iran absorbs an inflation rate roughly fourteen points worse than the figure previously on the ledger — both sides paying to hold positions neither is trading.",
    },
  ],
  casualties: {
    us: {
      cumulative:
        'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded. The Intercept reports the Pentagon acknowledges 410 killed or wounded since July 7.',
      delta:
        "+0 confirmed on the AP/CENTCOM combat series into Day 212 — a twenty-fifth consecutive day with no verified new US combat casualty, two of them unrecorded. The new American datum is force health rather than combat loss: eight suicide attempts across the USS Abraham Lincoln strike group since November, two during active fighting, no deaths, across 250+ uninterrupted days at sea.",
      status:
        "Headline holds 17 KIA / 432 WIA against DCAS 18 / 687 and The Intercept's 410; per §3.5.3 keep the combat figure and flag both divergences. Aggregator ranges of 19-23 killed / 831-900 wounded against a CENTCOM injured figure of 820 stay recorded as an unreconciled third series, not adopted. El Gaia stays CONTESTED ATTRIBUTION. The escort corridor holds ~40 ships/day carrying ~14 mb/d; the blockade series holds 105 redirected, 4 disabled, 26 humanitarian transits permitted, CENTCOM's cleared-lanes claim unarbitrated against Tehran's offer. The Minab and Lamerd war-crimes finding carries against no published American response.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front and no new Israeli military fatality. Israel is absent from the New York channel for a fourth consecutive day and has published nothing on the seven-day plan, Trump's rejection of it, or the lapsed Panel of Experts mandate.",
      status:
        "Per §3.5.6 the Israeli-independence prior is reinforced for a fourth day: Netanyahu's General Assembly address defended the Iran strikes as national survival amid envoy walkouts — addressed to the October 27 election rather than the channel negotiating the end of his own war. Katz's security-zone doctrine stands unretracted: no withdrawal from the ~700 sq km belt or Ali al-Taher until Hezbollah is disarmed nationwide — a condition no New York instrument addresses. Lebanon's ledger runs ~4,300+/12,200+ with ~7,700 recorded violations of the June 26 framework. Gaza holds. Thirty days to the election.",
    },
    iran: {
      cumulative:
        'Ministry of Health war toll ~3,559 killed · 27,400+ wounded. Iran Foundation series ~3,468; HRANA 3,636+. US-Israeli estimate 6,000+.',
      delta:
        "No new official Iranian war toll and no confirmed Iranian ballistic or drone attack on a host state since the night of September 8-9, a pause now in its eighteenth day. The day's Iranian development was presidential: a six-member coordinating body put on the record as the locus of decision-making, two confirmed meetings with the new Supreme Leader since March with a physician's attestation of his health, and IAEA inspections offered as a negotiated outcome rather than restored access.",
      status:
        "Per §3.1 the MOH, Iran Foundation and HRANA series all carry alongside the US-Israeli 6,000+ estimate. The Iran Human Rights roster of 4,200+ named protest dead (420 women, 281 under eighteen) carries alongside and is never merged into the war series; the Fact-Finding Mission's 3,038 killed / 25,000 injured crackdown counts, assessed as likely low, carry separately, with Pezeshkian rejecting that finding on camera. HRW and Boroumand record ≥59 arbitrary executions March 18 to end-August. The Panel mandate is lapsed and the IAEA still cannot verify the ~440.9 kg of 60% material or access struck sites. The internal ledger worsens on better data: inflation 83.8% point-to-point in September against 84.4%, superseding the 69.9% official figure; rial past 2,000,000; salary ~$125 against ~$450 basic spending; crude loadings −85%; two carriers off Western routes; retiree protests in six cities and provincial Basij mobilisation.",
    },
    other: {
      cumulative:
        'Yemen, Iraq, Gulf states and maritime combined: 3,598+ killed · 10,804+ wounded.',
      delta:
        "+0 adopted. Saudi Arabia, Pakistan and Türkiye moved to an urgent chiefs-of-staff meeting under the Mecca Joint Defence Agreement, Saudi forces reported intercepting six Houthi ballistic missiles, and France's committed Yanbu deployment remained undetailed. The Houthi claims on Riyadh and on Aramco at Yanbu stay held outside the cumulative per §3.1 on the al-Hazm precedent.",
      status:
        "The Day 209 Mocha claim (six dead including two children) and northern prison claim (nine detainees) remain uncorroborated and unanswered by Riyadh, which has published nothing on the September 19 strike on its own capital for a tenth day. IOM records ~130,000 displaced since 1 August with Ta'iz hosting 73,494 and 3,106 Djibouti crossings; aid delivery in Houthi-controlled areas is described as untenable with 73 UN personnel detained and 22.3 million needing aid. al-Hazm (23 killed, 7 missing) carries inside the cumulative; the IOM shipwreck toll (13 dead, 14 missing) stays out. The Houthis hold Yemen's Red Sea coast and Bab al-Mandeb is not formally closed. Sub-ledgers: Gulf 33+/~103+ Saudi, Kuwait 10/115; Iraq 148+/402+; maritime ~19 damaged, 7 abandoned, 2 captured; Mocha and coast 11+/32+.",
    },
  },
  exec:
    "Day 212 is the day the American answer arrived as a soundbite rather than a document. Speaking to reporters outside the White House, President Trump said of Iran's seven-day Hormuz roadmap, \"I reject their proposal,\" adding that Tehran wants an agreement because it is \"losing so badly\" (Bloomberg, CNN, NPR, Washington Post, Al Jazeera). Araghchi kept the channel formally open: Iran has heard \"the first reaction from the US president, but nothing has yet been conveyed to us by the mediators,\" and will decide when the definitive position arrives (IRNA via Iran International, Times of Israel, Middle East Eye). The SNSC's four-to-five-day acceptance window on the written 60-day roadmap expires around September 28-29 (The National, Gulf News). Against that, Iran's president answered the negotiating-authority question himself, on an American network. In a Face the Nation interview taped September 25 and aired today, Masoud Pezeshkian said Iranian decisions are reached by a six-member body drawn from security organisations, parliament and government agencies \"through coordination\"; that he has met the new Supreme Leader twice since March, once for more than seven hours; and that as a physician he judges him \"completely healthy\" after the strikes that killed his father and family (CBS News transcript). Pezeshkian said Iran would admit IAEA inspectors — but as a subject of the new negotiation, \"not for them now to come and inspect those existing frameworks again,\" against roughly 440.9 kg of 60% material the Agency still cannot verify (CBS, RFE/RL, IAEA). He declined to meet Trump and declined to release two wrongfully detained Americans as a gesture. Day one without a Panel of Experts passed with no substitute proposed. Direction holds mixed; seven-day risk extreme; spillover critical; the thirty-day ceasefire probability holds at 5.",
  implications: [
    {
      title: 'A rejection delivered by microphone is not a rejection delivered by mediator — and both sides are using that gap',
      body:
        "Trump rejected the roadmap in a doorstep remark; Araghchi answered that nothing has been conveyed through the mediators and that Iran will decide on the definitive position when it arrives (Bloomberg, CNN, Iran International, Middle East Eye). Per §3.5.3 both are interested positions, and neither party has published the text of the plan it is arguing about. Per §3.5.6 the deferral-as-answer prior is now fully rehabilitated in a sharper form: Washington has answered without answering, preserving deniability on a document it has not formally received or refused, while Tehran preserves the offer by declining to hear the refusal. Per §3.5.5 quantify the asymmetry: the American position moved from silence to public rejection in twenty-four hours, while the mediated channel — Qatar, Pakistan and Egypt, which convened the three-hour September 23 session — has produced no scheduled reconvening in four days. Analytical judgment: under the multi-clock framework the active-deadline clock now dominates, because the SNSC's own four-to-five-day window closes tomorrow or the day after and the only instrument capable of closing it, a formal mediated reply, has not been generated. The thirty-day ceasefire probability holds at 5 rather than falling: a head-of-state rejection is materially worse than silence, but both capitals have deliberately built themselves an exit from their own statements.",
    },
    {
      title: 'The presidency has now claimed the mandate the Majlis is contesting — and offered inspections while withholding the sites',
      body:
        "Pezeshkian's answer to the authority question is the most consequential Iranian statement since the impeachment motion was registered: decisions are taken by a six-member body spanning security organisations, parliament and government agencies, and what was discussed in New York \"was shaped through coordination\" (CBS News transcript). Per §3.5.3 that is a claim by the most interested party of all — the head of the government whose foreign minister faces referral — and it is not a ruling by the SNSC, the Leader's office or the commission. But per §3.1 rule 3 the divergence is the information: the presidency, the SNSC secretary and a Majlis faction have now given three incompatible accounts of who authorised what, and the body Pezeshkian describes would, if it exists as described, make the impeachment premise false. On verification the offer is narrower than the headline: inspectors as a negotiated outcome, explicitly not restored access to the frameworks that existed before the strikes, against 440.9 kg of 60% material the Agency cannot locate or verify (CBS, RFE/RL, IAEA). Analytical judgment: the verification-vacuum prior hardens. With the Panel of Experts lapsed and the IAEA offered only future access, no neutral body will be able to certify compliance with any instrument signed on this timetable — which makes the instrument's value contingent entirely on the American appetite for unverified terms.",
    },
    {
      title: "Taiwan: three days to the window's close, and the counterparty has just been told no in public",
      body:
        "Taipei's May assessment that gas was secured \"through September\" expires Wednesday, and CPC has published no October assurance (Bloomberg, CSIS). Per §3.5.5 the exposure is unchanged and that is the finding: Taiwan imports roughly 96% of its energy, draws about half its generation from LNG, holds roughly eleven days of reserve — the thinnest in East Asia — and took about 35% of its 2025 LNG from Qatar and the UAE, against a net reduction near 17% in Qatari export capacity after the Ras Laffan damage (CSIS, IFRI, Wood Mackenzie, Atlantic Council). Analytical judgment: Brent easing toward $105 gives Taipei nothing, because the physical path to an October refill runs through a Hormuz reopening the American president rejected on camera yesterday. Taiwan crosses into October with adequate molecules, no contractual floor beyond the pre-December-2025 contracts, and a spot price now set by whether a mediated reply exists by Tuesday. No fresh Taiwan-specific development today; prior assessments unchanged.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series); DCAS holds 18 / 687 all-cause; The Intercept's Pentagon figure of 410 killed or wounded since July 7 carries. Aggregator ranges of 19-23 killed and 831-900 wounded, against a CENTCOM injured figure of 820, remain recorded per §3.5.3 as a third unreconciled series and not adopted. Twenty-fifth consecutive quiet day, two unrecorded. Day 212's American datum is force sustainment: eight suicide attempts across the USS Abraham Lincoln strike group since November, two during active fighting with Iran, two sailors overboard, no deaths, across more than 250 uninterrupted days at sea this year.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new toll and a fourth consecutive day of absence from the New York channel. Netanyahu's General Assembly address defended the Iran strikes as national survival amid envoy walkouts, addressed to the October 27 election rather than the mediated talks. Katz carries unretracted: security zones in Gaza, Lebanon and Syria, and no withdrawal from the ~700 sq km belt or Ali al-Taher until Hezbollah is disarmed nationwide. Lebanon's separate ledger runs ~4,300+/12,200+ with ~7,700 recorded violations of the June 26 framework.",
    iran:
      "Official MOH war toll carries unchanged; Day 212 produced no new war count and no confirmed Iranian launch against a host state since September 8-9, now an eighteen-day pause. The day's Iranian development was presidential rather than factional: a six-member coordinating body described on American television as the locus of decision-making, two confirmed meetings with the new Supreme Leader since March with a physician's attestation of his health, a qualified IAEA inspection offer limited to the new negotiation, and refusals both to meet Trump and to release two wrongfully detained Americans. The impeachment motion against Araghchi remains registered and unresolved. HRANA 3,636+ and the Iran Foundation ~3,468 carry alongside; the Iran Human Rights roster of 4,200+ named protest dead and the Fact-Finding Mission's 3,038 killed / 25,000 injured crackdown counts carry separately per §3.1. Point-to-point inflation of 83.8% supersedes the 69.9% official figure.",
    other:
      "+0 adopted. Saudi Arabia, Pakistan and Türkiye moved to an urgent chiefs-of-staff meeting under the August 7 Mecca Joint Defence Agreement with the Grand Mufti calling on troops to fight the Houthis; Saudi forces reported intercepting six ballistic missiles; France's committed Yanbu deployment of soldiers, radar and air-defence systems remains undetailed and unexecuted. The Houthi Riyadh and Yanbu impact claims stay held outside the cumulative per §3.1 on the al-Hazm precedent. The Day 209 Mocha and prison claims remain uncorroborated and unanswered by Riyadh, which has published nothing on the September 19 capital strike for a tenth day. IOM records roughly 130,000 displaced since 1 August with Ta'iz hosting 73,494 and 3,106 crossings to Djibouti; 73 UN personnel remain arbitrarily detained and 22.3 million require assistance.",
  },
};

export default data;
