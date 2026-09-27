import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed, but the composition changed. Saturday's public rejection of Iran's seven-day Hormuz roadmap now comes with a calendar: Trump told Axios he expects indirect, Qatari-mediated talks with Tehran this week between Witkoff, Kushner and Araghchi, framing the offer as one \"we would have maybe agreed to a year ago\" and saying Iran \"overplayed their hand\". Per §3.5.3 that is a price objection, not a refusal in kind, and both capitals are posturing: Araghchi paired readiness for a \"doomsday\" war with the insistence that \"diplomacy can never fail\". Nothing on the confirmed kinetic record changed, and no text exists on either side.",
      risk7d:
        "Seven-day risk holds extreme because the war's central physical fact now has no arbiter. Trump claims more than 22 million barrels transited Hormuz on Friday night, the largest volume of the war; an IRGC general says the strait stays closed until American economic warfare ends and claims a captured US underwater vehicle, which the US military calls \"clearly desperate\" while asserting positive control of all drone assets. An uncorroborated single-chain account of anti-ship missiles from Sirik striking three to six escorted vessels sits between the two claims, recorded and not adopted. The second day without a Panel of Experts passed with no substitute and no seated 1737 chair, against roughly 440.9 kg of 60% material the IAEA still cannot verify.",
      spillover:
        "Spillover holds critical and is still being managed outside the Council. Saudi, Turkish and Pakistani chiefs of staff convened under the August 7 Mecca Joint Defence Agreement, which regional reporting describes as moving from political consultation into military coordination while analysts question whether its mutual-defence language reaches an out-of-area Houthi campaign; France's committed Yanbu deployment remains undetailed. Treasury's pressure campaign produced its first documented third-country compliance in aviation and banking. Israel spent a fifth consecutive day absent from the mediated channel while its finance minister called for annexing southern Lebanon and most of Gaza. The financing axis stays tight with the ten-year at a nineteen-year high and Brent near $105.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'high',
      source: 'Axios / Bloomberg / Washington Post / Spokesman-Review',
      event:
        "Having rejected Iran's seven-day Hormuz roadmap on Saturday, Trump told Axios he expects indirect talks with Tehran this week: \"I expect more talks with Iran. They want to make a deal, but it is not the deal that I want to make.\" He called the offer one \"we would have maybe agreed to a year ago\" and said Iran \"overplayed their hand\"; asked about renewed strikes he said \"I am always thinking about it\". The format is Qatari-mediated shuttle diplomacy between Witkoff, Kushner and Araghchi.",
      summary:
        "Per §3.5.6 this retires yesterday's rejection-without-instrument prior with evidence: the rejection was a bargaining move made in public because no mediated instrument existed to make it in private. Per §3.5.3 the framing is a price objection rather than a refusal in kind, which is a concession about the shape of an acceptable deal.",
      impact:
        "For the first time since the September 23 session a further meeting has a stated timeframe, while the SNSC window expiring today or tomorrow has gone unmentioned by both parties.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'CNBC (Iranian state media) / The National / Anadolu Agency / Irish Times',
      event:
        "Araghchi told state media Iran is prepared for a \"doomsday\" war with the United States while keeping indirect talks open, insisting \"diplomacy can never fail, there is always hope for diplomacy\" and that \"no one can accuse the Islamic Republic of failing to explore the diplomatic path\". He also said ambassador Michael Waltz discussed the seven-day plan \"as if he hasn't read it, maybe he hasn't been given a copy\", and restated the conditions: end the war of aggression, release frozen assets, allow Iran to sell its oil.",
      summary:
        "Per §3.5.3 the two-directional message is an interested position by the official whose authority to negotiate is under formal challenge at home. The procedural claim is the load-bearing item: if accurate, the document Washington rejected in public had not reached the officials arguing about it.",
      impact:
        "Tehran keeps the offer alive without withdrawing it and adds a plausible explanation for why the American answer arrived by microphone rather than by mediator.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Al Jazeera liveblog / Axios / Naked Confidence chain recorded per §3.5.3',
      event:
        "An IRGC general said \"the war is not over, we have won, but we must consolidate this victory\" and that the strait stays closed until American economic warfare ends, and claimed the capture of an advanced US underwater vehicle; the US military said it retains positive control of all drone assets and called the claim \"clearly desperate\". Against that, Trump said more than 22 million barrels transited Hormuz on Friday night, the largest volume since the war began. A single secondary chain reported anti-ship missiles fired from Sirik at escorted shipping with three to six vessels struck including one oil tanker.",
      summary:
        "Per §3.1 rule 3 the divergence is the information: two governments describe the same waterway in mutually exclusive terms within the same twenty-four hours. Per §3.5.3 and the al-Hazm precedent the multi-vessel strike account is recorded and held out of the cumulative, corroborated by no wire service, Gulf authority or CENTCOM statement.",
      impact:
        "The war's central physical fact — whether the strait is open — now has no arbiter either side accepts, which is a precondition for escalation by misreading rather than by decision.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: 'Al Arabiya / US Treasury / Time / Iran International',
      event:
        "Treasury Secretary Scott Bessent said the pressure campaign is delivering results: Turkey and Oman have suspended incoming Mahan Air flights, the UAE has halted all Iranian airline operations, the UAE central bank has blocked transactions involving Bank Melli, and Turkey has revoked Bank Mellat's operating licence. Assistant Secretary Jonathan Burke toured the Middle East and Europe over two weeks promoting what Bessent called \"economic D-Day\"; Treasury has engaged more than 50 countries. Smaller Iranian carriers continue flying, principally to China.",
      summary:
        "Per §3.5.3 Bessent's assessment of his own campaign is an interested claim, but the third-country measures he cites are verifiable acts by other states rather than American assertions. Per §3.5.5 quantify: two national aviation suspensions, one blanket carrier ban, two bank actions, 50+ countries engaged, one large holdout.",
      impact:
        "The economic track is hardening on the same day the diplomatic track acquired a date, which raises rather than lowers what Washington can demand in a Qatari-mediated room.",
    },
    {
      id: 5,
      direction: 'neutral',
      importance: 'medium',
      source: 'Bloomberg / IAEA / UN Security Council / Tehran Times / Press TV',
      event:
        "The IAEA said publicly that oversight in Iran could resume quickly, against roughly 440.9 kg of uranium enriched to 60% that it still cannot verify and struck sites it has not accessed. The second day without a Panel of Experts passed with no substitute mechanism proposed and no seated 1737 chair after the vetoed renewal. Russian and Chinese positions were unchanged, rejecting pressure on Iran and the legality of the snapback, and China continues to resist the aviation measures.",
      summary:
        "Per §3.5.6 the verification-vacuum prior hardens rather than eases: the Agency's readiness is a capability statement, not an access grant, and Pezeshkian's offer remains future access only. Per §3.5.5 zero independent sanctions monitors against one a fortnight ago, and no chair empowered to appoint a replacement.",
      impact:
        "Any instrument produced this week would have to be accepted unverified, and the only body offering to verify it has been told it may inspect the future and not the past.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'medium',
      source: 'Times of Israel liveblog / Jerusalem Post liveblog / Al Jazeera / The New Arab / South China Morning Post / Yemen Monitor',
      event:
        "Israel was absent from the mediated channel for a fifth consecutive day. Finance Minister Bezalel Smotrich called for annexing southern Lebanon up to the Litani and the majority of Gaza up to the Yellow Line; Netanyahu was reported flying to Abu Dhabi to meet the Emirati president; Qatar's prime minister accused him of undermining the Gaza negotiations for domestic political reasons; and Belgium raised its threat assessment to \"very serious\" after Iranian-linked antisemitic attacks in Liège and Antwerp. Saudi, Turkish and Pakistani chiefs of staff convened under the Mecca pact as Saudi forces reported interceptions near Yanbu and Taif.",
      summary:
        "Per §3.5.6 the Israeli-independence prior is reinforced for a fifth day, and the privatised-enforcement prior with it: a two-month-old three-state pact is now the operative security instrument in the Red Sea while the Council's own mechanism has lapsed. Per §3.1 the Houthi impact claims stay outside the cumulative on the al-Hazm precedent.",
      impact:
        "The party whose war is being negotiated is annexing in public and mediating in private, twenty-nine days from an election, while regional defence runs on a bilateral pact with no multilateral cover.",
    },
  ],
  casualties: {
    us: {
      cumulative:
        'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause holds 18 killed · 687 wounded. The Intercept reports the Pentagon acknowledges 410 killed or wounded since July 7.',
      delta:
        "+0 confirmed on the AP/CENTCOM combat series into Day 213 — a twenty-sixth consecutive quiet day, two of them unrecorded. Reports of a fresh multi-vessel Iranian attack in the escort corridor, including one oil tanker struck, reached this brief through a single secondary chain and are held out of the cumulative pending corroboration.",
      status:
        "Headline holds 17 KIA / 432 WIA against DCAS 18 / 687 and The Intercept's 410; per §3.5.3 keep the combat figure and flag both divergences. Aggregator ranges of 19-23 killed and 831-900 wounded against a CENTCOM injured figure of 820 stay recorded and not adopted. El Gaia stays CONTESTED ATTRIBUTION. Trump's claim of 22 mb transiting Friday night is recorded as an interested claim against the established ~40 ships/day and ~14 mb/d corridor series. The Lincoln strike group force-health record carries with no relief rotation announced. The Minab and Lamerd war-crimes finding carries against no published American response.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front and no new Israeli military fatality. A fifth consecutive day absent from the mediated channel, with nothing published on the seven-day plan, the rejection, or the announced resumption of talks.",
      status:
        "Per §3.5.6 the Israeli-independence prior is reinforced: the day's output was Smotrich's call to annex southern Lebanon to the Litani and most of Gaza to the Yellow Line, a reported Netanyahu trip to Abu Dhabi, and a Qatari accusation that he is undermining the Gaza talks for domestic reasons. Katz's security-zone doctrine stands unretracted — no withdrawal from the ~700 sq km belt or Ali al-Taher until Hezbollah is disarmed nationwide. Lebanon's separate ledger runs ~4,300+/12,200+ with ~7,700 recorded violations of the June 26 framework. Gaza holds. Twenty-nine days to the election.",
    },
    iran: {
      cumulative:
        'Ministry of Health war toll ~3,559 killed · 27,400+ wounded. Iran Foundation series ~3,468; HRANA 3,636+. US-Israeli estimate 6,000+.',
      delta:
        "No new official Iranian war toll and no confirmed Iranian ballistic or drone attack on a host state since the night of September 8-9, a pause now in its nineteenth day. The day's output was rhetorical and procedural: Araghchi's two-directional message, an IRGC claim of victory and a captured US underwater vehicle, and Pezeshkian quoted as saying \"we will die but we will not bow our heads\".",
      status:
        "Per §3.1 the MOH, Iran Foundation and HRANA series carry alongside the US-Israeli 6,000+ estimate. The Iran Human Rights roster of 4,200+ named protest dead carries separately and is never merged; the Fact-Finding Mission's 3,038 killed / 25,000 injured counts, assessed as likely low, carry separately again. HRW and Boroumand record ≥59 arbitrary executions March 18 to end-August. The IAEA still cannot verify ~440.9 kg of 60% material. Internal ledger: 83.8% point-to-point inflation superseding 69.9%; rial past 2,000,000; salary ~$125 against ~$450 basic spending; crude loadings −85%; and NCRI records ~51,000 security personnel across Greater Tehran, ~21,000 SSF and ~30,000 IRGC/Basij, on 100% alert with leave cancelled.",
    },
    other: {
      cumulative:
        'Yemen, Iraq, Gulf states and maritime combined: 3,598+ killed · 10,804+ wounded.',
      delta:
        "+0 adopted. Saudi, Turkish and Pakistani chiefs of staff convened under the August 7 Mecca Joint Defence Agreement, described in regional reporting as moving into military coordination, as Saudi forces reported interceptions near Yanbu and Taif against Houthi claims on Riyadh and Aramco. Those impact claims stay held outside the cumulative per §3.1 on the al-Hazm precedent.",
      status:
        "The Day 209 Mocha claim (six dead including two children) and northern prison claim (nine detainees) remain uncorroborated and unanswered by Riyadh, which has published nothing on the September 19 strike on its own capital for an eleventh day. France's committed Yanbu deployment remains undetailed and unexecuted. IOM records ~130,000 displaced since 1 August with Ta'iz hosting 73,494 and 3,106 crossings to Djibouti; 73 UN personnel remain arbitrarily detained, aid delivery in Houthi areas is untenable, and 22.3 million require assistance. al-Hazm (23 killed, 7 missing) carries inside; the IOM shipwreck toll (13 dead, 14 missing) stays out. Bab al-Mandeb is not formally closed. Sub-ledgers: Gulf 33+/~103+ Saudi, Kuwait 10/115; Iraq 148+/402+; maritime ~19 damaged, 7 abandoned, 2 captured; Mocha and coast 11+/32+.",
    },
  },
  exec:
    "Day 213 is the day the rejection acquired a calendar. Having dismissed Iran's seven-day Hormuz roadmap on Saturday, President Trump told Axios he expects indirect talks with Tehran this week: \"I expect more talks with Iran. They want to make a deal, but it is not the deal that I want to make.\" He called the offer one \"we would have maybe agreed to a year ago\" and said Iran \"overplayed their hand\"; on renewed strikes, \"I am always thinking about it\" (Axios, Bloomberg, Washington Post). The format is Qatari-mediated shuttle diplomacy between Witkoff, Kushner and Araghchi — the first time since the September 23 session that a further meeting has a stated timeframe, which reframes Saturday's doorstep rejection as an opening bid rather than a closure. Araghchi answered from both directions, telling state media Iran is ready for a \"doomsday\" war while insisting \"diplomacy can never fail,\" and claiming ambassador Waltz discussed the plan \"as if he hasn't read it, maybe he hasn't been given a copy\" (CNBC, The National, Anadolu). The strait itself drew two incompatible descriptions: Trump said more than 22 million barrels transited Friday night, the largest volume of the war, while an IRGC general said the waterway stays closed until American economic warfare ends and claimed a captured US underwater vehicle, which the US military called \"clearly desperate\" (Axios, Al Jazeera). A single-chain report of a multi-vessel corridor attack is held out of the cumulative. Treasury's \"economic D-Day\" produced its first third-country compliance: Turkey and Oman suspended Mahan Air, the UAE halted all Iranian carriers and blocked Bank Melli (Al Arabiya, Treasury). Direction holds mixed; seven-day risk extreme; spillover critical; the thirty-day ceasefire probability rises to 7.",
  implications: [
    {
      title: 'A rejection with a meeting attached is an opening bid, and the rejection-without-instrument prior can now be retired',
      body:
        "Saturday's doorstep rejection is resolved: Trump has told Axios he expects indirect talks this week, mediated by Qatar, between Witkoff and Kushner and Araghchi, and he framed Iran's offer in price terms rather than principle — \"what we would have maybe agreed to a year ago\", meaning too little, too late, rather than unacceptable in kind (Axios, Bloomberg, Washington Post). Per §3.5.6 the rejection-without-instrument prior introduced yesterday is therefore retired with evidence, and replaced by a narrower one: the rejection was a bargaining move made in public because no mediated instrument existed to make it in private. Per §3.5.3 both capitals' positions remain interested — Araghchi's simultaneous \"doomsday\" readiness and insistence that \"diplomacy can never fail\" is the mirror image of Trump's simultaneous rejection and scheduling. Per §3.5.5 quantify what actually changed: five days after the September 23 session there was no scheduled reconvening; there is now a stated week, against an SNSC acceptance window expiring today or tomorrow that neither side has mentioned since. Analytical judgment: under the multi-clock framework the negotiation-capacity clock has improved for the first time in five days while the active-deadline clock has been quietly abandoned by both parties. The thirty-day ceasefire probability rises from 5 to 7 — a scheduled channel is worth more than a dated offer, and less than a text.",
    },
    {
      title: 'Two governments now describe the same waterway in mutually exclusive terms, and no neutral body remains to arbitrate between them',
      body:
        "Trump claims more than 22 million barrels moved through Hormuz on Friday night, the largest transit of the war, credited to the US Navy. An IRGC general claims the war is already won, the strait stays closed until economic warfare ends, and an advanced American underwater vehicle has been captured — which the US military denies, asserting \"positive control\" of all drone assets and calling the claim \"clearly desperate\" (Axios, Al Jazeera). Into that gap arrived an uncorroborated account of anti-ship missiles fired from Sirik at escorted shipping with three to six vessels struck, carried by a single secondary chain and confirmed by no wire, no Gulf authority and no CENTCOM statement. Per §3.5.3 it is recorded and not adopted; per §3.1 rule 3 the divergence is the information. Per §3.5.6 the verification-vacuum prior hardens on its second day without a Panel of Experts: the IAEA says oversight could resume quickly, but it still cannot verify roughly 440.9 kg of 60% material, and Pezeshkian's offer remains future access only. Analytical judgment: the war has reached a state where its central physical fact — whether the strait is open — has no arbiter. That is a precondition for accidental escalation, because each side can act on its own description without being contradicted by anything either accepts as authoritative.",
    },
    {
      title: "Taiwan: two days to the window's close, with a scheduled talk and no reopening",
      body:
        "Taipei's May assessment that gas was secured \"through September\" expires Wednesday, and CPC has published no October assurance (Bloomberg, CSIS). Per §3.5.5 the exposure is unchanged and that is the finding: Taiwan imports roughly 96% of its energy, draws about half its generation from LNG, holds roughly eleven days of reserve — the thinnest in East Asia — and took about 35% of its 2025 LNG from Qatar and the UAE, against a net reduction near 17% in Qatari export capacity after the Ras Laffan damage (CSIS, IFRI, Wood Mackenzie, Atlantic Council). Analytical judgment: this week's scheduled talks are the first development in a month that could plausibly affect Taiwan's Q4 physical supply, and they will not resolve inside the window. Taipei crosses into October with adequate molecules, no contractual floor beyond the pre-December-2025 contracts, and a spot price set by whether a Qatari-mediated session produces a text. No fresh Taiwan-specific development today; prior assessments unchanged.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series); DCAS holds 18 / 687 all-cause; The Intercept's Pentagon figure of 410 since July 7 carries. Aggregator ranges of 19-23 killed and 831-900 wounded, against a CENTCOM injured figure of 820, remain recorded per §3.5.3 and not adopted. Twenty-sixth consecutive quiet day, two unrecorded. Day 213's contested American datum is transit volume rather than casualties: Trump's claim of more than 22 million barrels through Hormuz on Friday night, the largest of the war, recorded as an interested claim against the established ~40 ships/day and ~14 mb/d series — and against an uncorroborated single-chain account of three to six escorted vessels struck, held out of the cumulative on the al-Hazm precedent.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new toll and a fifth consecutive day of absence from the mediated channel. The day's Israeli output was Smotrich's call to annex southern Lebanon to the Litani and most of Gaza to the Yellow Line, a reported Netanyahu trip to Abu Dhabi to meet the Emirati president, and Qatar's prime minister accusing him of undermining the Gaza negotiations for domestic political reasons. Katz carries unretracted: security zones in Gaza, Lebanon and Syria, and no withdrawal from the ~700 sq km belt or Ali al-Taher until Hezbollah is disarmed nationwide. Lebanon's separate ledger runs ~4,300+/12,200+ with ~7,700 recorded violations of the June 26 framework. Twenty-nine days to the October 27 election.",
    iran:
      "Official MOH war toll carries unchanged; Day 213 produced no new war count and no confirmed Iranian launch against a host state since September 8-9, now a nineteen-day pause. The day's Iranian development was rhetorical and procedural: Araghchi's simultaneous \"doomsday\" readiness and \"diplomacy can never fail\", his claim that ambassador Waltz appears not to have read the seven-day plan, an IRGC general's declaration that the war is won but must be consolidated and that the strait stays shut until economic warfare ends, and a claimed capture of a US underwater vehicle the US military called \"clearly desperate\". The impeachment motion against Araghchi remains registered and unresolved, as does the presidency's competing six-member-body account. HRANA 3,636+ and the Iran Foundation ~3,468 carry alongside; the Iran Human Rights roster of 4,200+ named protest dead and the Fact-Finding Mission's 3,038 / 25,000 crackdown counts carry separately per §3.1. Point-to-point inflation of 83.8% supersedes the 69.9% official figure, and NCRI records roughly 51,000 security personnel deployed across Greater Tehran on 100% alert.",
    other:
      "+0 adopted. Saudi, Turkish and Pakistani chiefs of staff convened under the August 7 Mecca Joint Defence Agreement, with regional reporting describing the pact as moving from political consultation into military coordination and analysts questioning whether its mutual-defence language reaches an out-of-area Houthi campaign; Saudi forces reported interceptions near Yanbu and Taif. The Houthi Riyadh and Aramco impact claims stay held outside the cumulative per §3.1 on the al-Hazm precedent. France's committed Yanbu deployment of soldiers, radar and air-defence systems remains undetailed and unexecuted. The Day 209 Mocha and prison claims remain uncorroborated and unanswered by Riyadh, which has published nothing on the September 19 capital strike for an eleventh day. IOM records roughly 130,000 displaced since 1 August with Ta'iz hosting 73,494 and 3,106 crossings to Djibouti; 73 UN personnel remain arbitrarily detained and 22.3 million require assistance.",
  },
};

export default data;
