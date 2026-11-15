import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Escalating. The IRGC fired drones at a US radar in Bahrain for the second time in three days, a day after Reuters reported Trump would hold off unless provoked, while Houthi forces pushed toward Aden and fired missiles at Riyadh.",
      risk7d:
        "Extreme and unchanged. Washington has not answered the Bahrain launch; Mossad's chief is briefing a security cabinet that could authorise an operation, and US intelligence says Iran may still hold up to 2,500 missiles.",
      spillover:
        "Critical and unchanged. Yemeni government forces left Bab el-Mandeb, drones were downed over the Makkah region and Madinah, Qatar, Jordan and Egypt condemned Iran, and Bahrain asked the Security Council to act.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: "IRGC via Tasnim; Bahrain Defence Force via The Peninsula; Al Jazeera; CBS News; Times of Israel",
      event: "IRGC drones target a US radar in Bahrain for the second time in three days",
      summary:
        "The IRGC Aerospace Force said six drones targeted a US air-defence radar at the Al-Riffa base early on Sunday, calling it the second phase of retaliation and saying the strait remains closed. Bahrain's Defence Force said it intercepted several Iranian aerial attacks before they reached their targets. Blasts were heard around 4 a.m. and 6:30 a.m.; no damage, casualties or US response were reported.",
      impact:
        "The calibrated-host-strike prior becomes a pattern and tests Trump's reported no-provocation condition.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'medium',
      source: "Esmaeil Baghaei via Tasnim and Al Jazeera; Bahrain foreign ministry via Al Jazeera and Iran International",
      event: "Iran defends the strikes as self-defence; Bahrain asks the Security Council to act",
      summary:
        "Foreign Ministry spokesman Esmaeil Baghaei said the strikes were purely defensive under Article 51, hit only US assets used against Iran, and that Tehran has documented host-state involvement in US attacks; Iran will not leave any aggression unanswered. Bahrain's foreign ministry said no pretext legitimises violating its sovereignty, rejected the use of its territory to settle accounts, and asked the Council to act.",
      impact:
        "Iran and the host states argue their cases to the Council while Washington stays publicly silent.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'medium',
      source: "Qatar foreign ministry via The Peninsula; Jordan and Egypt via Al Jazeera; US Embassy Bahrain via Iran International",
      event: "Qatar, Jordan and Egypt condemn Iran's attacks on Bahrain",
      summary:
        "Qatar's foreign ministry called the continued attacks a flagrant violation of Bahrain's sovereignty, warned they could undermine diplomatic efforts, and declared full solidarity with Manama. Jordan called them a serious breach of sovereignty, and Egypt said Bahrain's security is linked to its own. The US embassy told Americans in Bahrain to exercise heightened vigilance.",
      impact:
        "Qatar, the mediator behind the reported two-week window, now publicly condemns Iran.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: "Reuters and AFP via Times of Israel; Al Jazeera",
      event: "Yemeni government forces leave Bab el-Mandeb as the Houthis close on Aden",
      summary:
        "Government forces announced a redeployment from Dhubab airport and the Bab el-Mandeb area to secure Aden, ending a six-week counteroffensive on the Red Sea coast. Houthi sources told AFP they now hold more than 150 km of coast from Dhubab to near Khor Amira; Reuters puts Houthi forces about 80 km from Aden and AFP about 60 km. Taiz remains besieged.",
      impact:
        "The Houthis now hold the shore of the second chokepoint, tightening pressure on Red Sea routes.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "Turki al-Maliki via Al Jazeera; Saudi-led coalition via The Peninsula; Houthi claims via Iran International",
      event: "The Saudi-led coalition intercepts missiles at Riyadh and drones over Makkah and Madinah",
      summary:
        "Coalition spokesman Turki al-Maliki said two ballistic missiles aimed at Riyadh were intercepted and three drones downed in the Eastern region; the coalition later reported one drone over Madinah and two over the Makkah region. The Houthis claimed hits on King Khalid airport, a financial centre and two oil pumping stations. Saudi authorities count at least 26 killed since 23 September.",
      impact:
        "Drones over the holy-city regions raise the political cost for Riyadh; Houthi hits are unverified.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'medium',
      source: "IRGC Navy via Tasnim; CBS News; UKMTO via Iran International; Washington Institute via Times of Israel",
      event: "The IRGC says two dark tankers exploded on mines; UKMTO reports a tanker attacked",
      summary:
        "The IRGC Navy said two tankers that switched off navigation and tracking systems on an unauthorised route struck mines and caught fire, and two others turned back after warnings. CBS summarised a three-tanker claim. No vessel is named. UKMTO reported a tanker attacked in the Gulf heading for Hormuz. The Washington Institute counts 37 ship attacks in October and at least 10 in early November.",
      impact:
        "Mines-as-enforcement continues with conflicting counts and no confirmed hull.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'medium',
      source: "US officials via the Wall Street Journal and Times of Israel; Bloomberg via Times of Israel",
      event: "US intelligence puts Iran's missile stock at 1,500 to 2,500",
      summary:
        "Officials told the Wall Street Journal that Iran may retain 1,500 to 2,500 ballistic missiles, a low-confidence estimate, and that the stock weighs on deliberations over whether to strike. Israeli officials put it above 1,500 and say Iran is rebuilding and rearming; a Western official told Bloomberg Iran has at least 1,700 and may produce up to 50 a month.",
      impact:
        "The interceptor clock favours the side that is rebuilding, complicating any decision to strike.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'medium',
      source: "Ynet and Axios via Iran International; Times of Israel",
      event: "Mossad chief returns to brief the security cabinet; unity talks stall",
      summary:
        "Mossad Director Roman Gofman returned from Washington after briefing CIA Director John Ratcliffe and senior officials on Iran and is due to brief the security cabinet, which could consider authorising an operation. Yashar and Likud met for an hour in Herzliya with no reported progress; the Knesset speaker vote is set for Tuesday, and Israel Hayom says the US wants Otzma Yehudit left out.",
      impact:
        "The caretaker-risk prior sharpens as intelligence channels run ahead of coalition politics.",
    },
    {
      id: 9,
      direction: 'mixed',
      importance: 'medium',
      source: "Scott Bessent via Iran International; Mohammad Bagher Ghalibaf via Tasnim",
      event: "Bessent predicts Iran's collapse; Ghalibaf rejects a state of neither war nor peace",
      summary:
        "Treasury Secretary Scott Bessent told Fox News Iran faces one of the fastest collapses in history, forecast a 25% fall in the rial and called its leaders rats in a sewer pipe. Speaker Ghalibaf called the remarks vulgar, said Iran will not remain in a state of neither war nor peace, and said a deal is possible if Washington accepts Iran's seven conditions.",
      impact:
        "Economic coercion substitutes for strikes while Tehran signals limits to its patience.",
    },
    {
      id: 10,
      direction: 'de-escalating',
      importance: 'medium',
      source: "Esmaeil Baghaei via Tasnim; CBS News",
      event: "Araghchi travels to Islamabad and Muscat; Baghaei rejects enrichment demands",
      summary:
        "Foreign Minister Abbas Araghchi left for Islamabad for the ECO foreign ministers' meeting on Monday and goes to Muscat on Tuesday to consult his Omani counterpart. Baghaei rejected Germany's demand to halt enrichment, said relations with the IAEA will not improve under current conditions, and said Iran honours the NPT as long as it remains a member.",
      impact:
        "The first Iranian travel to mediator capitals in the Qatari window; no US interlocutor is named.",
    },
    {
      id: 11,
      direction: 'mixed',
      importance: 'low',
      source: "Washington Post via Iran International; CBS News",
      event: "The Pentagon weighs charges over war leaks; a whistleblower faults Kuwait defences",
      summary:
        "The Washington Post reports the Pentagon has directed the military to explore criminal charges against Lt. Gen. Brett Sylvia over alleged Iran-war leaks; he has not been charged. Army Maj. Stephen Ramsbottom told Congress that warnings about thin fortifications at Port Shuaiba in Kuwait, where an Iranian drone killed six US soldiers on 1 March, were dismissed.",
      impact:
        "Scrutiny of US losses rises as the new Congress approaches; disclosure remains a choice.",
    },
    {
      id: 12,
      direction: 'escalating',
      importance: 'medium',
      source: "hormuz.now; Trading Economics; Chinese foreign ministry",
      event: "Crossings hold at 1.9 a day with no LNG; China stays silent",
      summary:
        "hormuz.now counted 13 tanker crossings in seven days to 15 November, 1.9 a day against 47.6 before the crisis, unchanged on the previous cycle, with no LNG or LPG carrier in seven days. Kpler puts oil flow near 48% of pre-war. Brent last settled at $95.84; weekend indications conflict. China's foreign ministry has not briefed since 13 November.",
      impact:
        "Gas stays shut, and Monday's settle is the first market read on the Bahrain strikes.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split and Hegseth's 18 Epic Fury dead are held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. No US casualty is reported from the Bahrain launch; the whistleblower complaint concerns six dead at Port Shuaiba on 1 March, already counted. The forty-seventh cycle with no disclosure statement.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: "+0",
      status:
        "No addition on the war series and no IDF casualty on the Iran or Lebanon fronts located this cycle. Gaza deaths stay on their parallel series.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: "+0 official",
      status:
        "No new official war toll. Darzi's claim of more than 5,000 dead is held apart. The host-state count resets after the IRGC launch at Bahrain, the second in three days.",
    },
    other: {
      cumulative: "KIA: 3,716+ · WIA: 11,203+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 killed, +0 wounded",
      status:
        "No adopted change. No casualties are reported in Bahrain or for the tankers Iran says hit mines. Saudi authorities' count of at least 26 killed by Houthi strikes since 23 September is held apart.",
    },
  },
  exec:
    "Iran tested Washington's \"unless provoked\" line within a day of it being reported. The IRGC said six drones targeted a US air-defence radar at Riffa air base in Bahrain early on Sunday, calling it the second phase of retaliation for US \"aggression\"; Bahrain's Defence Force said it intercepted \"several\" Iranian aerial attacks before they reached their targets, and no damage or casualties were reported. It was the second launch at Bahrain in three days, so the host-state count resets. Qatar, Jordan and Egypt condemned the strikes, and Bahrain asked the Security Council to act. Foreign Ministry spokesman Esmaeil Baghaei called them self-defence under Article 51 and said Iran \"will not leave any military attack or aggression unanswered.\" No US military response was located by this morning. In Yemen, government forces withdrew from the Bab el-Mandeb area to defend Aden; Reuters puts the Houthis about 80 km from the city and AFP about 60 km. The Saudi-led coalition reported intercepting two ballistic missiles aimed at Riyadh and drones over the Eastern region, Makkah and Madinah. At sea, the IRGC Navy said two tankers running dark exploded on mines; no hull is named, and hormuz.now still counts 1.9 tanker crossings a day against 47.6 before the crisis. Treasury Secretary Scott Bessent said Iran faces \"one of the fastest collapses in history\"; Speaker Mohammad Bagher Ghalibaf called the remarks vulgar and said Iran will not stay in a state of \"neither war nor peace.\" Mossad chief Roman Gofman is back from Washington to brief Israel's security cabinet. On diplomacy, Foreign Minister Abbas Araghchi is in Islamabad and goes to Muscat on Tuesday. Direction returns to escalating; the probability eases to 9.",
  implications: [
    {
      title: "The provocation test: Iran fires at Bahrain again a day after Trump's reported restraint",
      body:
        "Under the multi-clock framework, the active-deadline clock has become a conditional one, and Iran has just pressed on the condition. Reuters reported on Day 261 that Trump may hold off on new strikes absent provocation from Iran or the Houthis. Within a day the IRGC said six drones targeted a US air-defence radar at Riffa in Bahrain, its \"second phase\" of retaliation, after a Friday strike that CENTCOM said caused no damage or injuries. Bahrain says it intercepted the attacks; nobody reports damage. Al Jazeera's Resul Serdar reads two launches at Bahrain in three days as a possible new rule of engagement, and Baghaei calls it Article 51 self-defence. The calibrated-host-strike prior now describes a pattern, not an incident. Whether Washington treats intercepted drones at a Bahraini base as the provocation Trump described is the question for the next 72 hours; no CENTCOM statement on Sunday's launch was located. Israel is pushing the same way. Mossad chief Roman Gofman returned from talks with CIA Director John Ratcliffe to brief a security cabinet that, per Ynet via Iran International, could consider authorising an operation. US intelligence, per the Wall Street Journal via the Times of Israel, puts Iran's ballistic missiles at 1,500–2,500, a \"low-confidence\" range, and a Western official told Bloomberg production may reach 50 a month: the interceptor clock runs against the defenders. Direction returns to escalating; the probability eases from 10 to 9.",
    },
    {
      title: "Yemen's war reaches the second strait as Saudi cities come under fire",
      body:
        "The energy-infrastructure clock now has a second chokepoint in play. Yemeni government forces announced a \"redeployment\" from Dhubab airport and the Bab el-Mandeb area to defend Aden, ending, per Reuters, a six-week counteroffensive to retake the Red Sea coast the Houthis seized in September. Houthi sources told AFP they hold more than 150 km of coast from Dhubab to near Khor Amira; Reuters places their forward units about 80 km from Aden and AFP about 60 km. Holding the shore is not closing the strait, and no new attack on shipping there was reported this cycle, but the proxy-periphery prior has become territorial. The pressure on Saudi Arabia is direct. The coalition reported two ballistic missiles intercepted over Riyadh and drones over the Eastern region, the Makkah region and Madinah; the Houthis claimed hits on King Khalid airport, a financial centre and two oil pumping stations, none verified. Saudi authorities count at least 26 killed since 23 September. With Hormuz shut, Saudi crude leans on the East-West pipeline to Yanbu; a Houthi coast at the southern strait puts that bypass's exit route under threat, the bypass-as-target prior in its sharpest form. The humanitarian clock worsens as well: Taiz remains besieged, and displacement estimates run from 300,000 (Reuters) to more than 340,000 since August (IOM, via Al Jazeera). The Houthis' release of 600 prisoners with ICRC support is a small counter-signal.",
    },
    {
      title: "Taiwan: no direct development; the gas gap holds and a second chokepoint comes into view",
      body:
        "No fresh Taiwan-specific development today; prior assessments hold, with one indirect addition. hormuz.now counted 13 tanker crossings in the seven days to 15 November, 1.9 a day against 47.6 before the crisis and flat on the previous cycle, with no LNG or LPG carrier in seven days and one LNG carrier in 30. Kpler puts oil flow near 8.3 mb/d, about 48% of pre-war: crude moves under escort or by pipeline; gas does not. QatarEnergy's force majeure runs to the end of December for some buyers, and war-risk cover costs 7–9% of hull value against 0.25% pre-war. The addition is Bab el-Mandeb. Qatari LNG to Taiwan does not use the Red Sea, but some of the substitute cargoes Asian buyers chase from the Mediterranean would, and so does Saudi crude leaving Yanbu. A Houthi-held coast at the southern strait would squeeze the substitutes rather than the original supply. Brent last settled at $95.84 on 13 November; Trading Economics showed conflicting weekend indications near $94–95, so Monday's settle is the first real read after the Bahrain strikes. Beijing's foreign ministry has not briefed since 13 November, and the Shenzhen trilateral, with Iran on the agenda, is days away. The Taipower and CPC supplementary budget remains unpassed as far as this file knows.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. No US casualty reported from the Bahrain launch; the 11/12 split and Hegseth's 18 Epic Fury dead stay held apart from the 15/8 series.",
    israel:
      "No addition on the war series and no IDF casualty located this cycle; no Lebanese toll located.",
    iran:
      "No new official war toll. Darzi's 5,000-plus claim is held apart. Execution series carry unchanged and unmerged. The host-state count resets after the Bahrain launch.",
    other:
      "No adopted change. Saudi authorities' 26 killed since 23 September, Yemeni battlefield tallies, UN, IMO, GCC and Houthi figures are held apart.",
  },
};

export default data;
