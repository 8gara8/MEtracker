import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 98 stress-tests the Day 97 bifurcation from both ends without resolving either. Lebanon track splits three ways: Hezbollah chief Qassem rejected the Round 4 joint statement as 'surrender, defeat and achieving the enemy's goals' on Al-Manar TV — cycle-first Hezbollah principal-level rejection within 24h of issuance — vowing continued fire while Israeli strikes continue (Time, NPR); Lebanese PM Salam launched LAF pilot-zone deployment anyway as 'first phase toward full Israeli withdrawal' (Al Bawaba, Al Jazeera); Katz declared IDF stays in security zone with US-backed 'freedom of action' to strike Beirut — third consecutive cycle-day of Israeli principal-level operational ceasefire denial (JNS, Reuters). Iran track: Trump blasted WPR cross-overs as 'GRANDSTANDERS!' and named 'final negotiations' — cycle-first US-presidential-level 'final' characterization (ABC News, Fox News); Khamenei adviser: MOU draft has 'ambiguities that must be clarified'; second adviser: 'US waiting for Iran's green light' (Iran International). De-escalatory margin: first 24h without new Iran-Gulf casualty exchange since Day 96; Brent −$3.41 to $97.95; ~40 ships quietly exited Hormuz via NCAGS (CNBC, Fortune). Direction holds mixed.",
      risk7d:
        "Seven-day risk holds critical. Active-deadline clock runs Day 99-100 weekend window (Jun 6-7, corrected from Days 96-97 Saturday anchor) → Trump 'final negotiations' yes/no → Lebanon joint-statement durability under Qassem rejection + LAF deployment + Katz freedom-of-action triple test → Senate WPR uptake → next Iran-Gulf retaliatory window. Political-will and negotiation-capacity clocks pull same direction for cycle-first time — both pricing near-term decision. Lebanon kinetic clock binds three actors' public postures into one unresolved test: whether LAF deploys un-fired-upon through week of Jun 22 reconvene. Kinetic-readiness clock de-escalates at margin on quiet 24h but Tehran retaliatory pattern after US enforcement strikes carries.",
      spillover:
        "Spillover holds critical. Kuwait diplomatic rupture deepens: chargé d'affaires summoned, two Iranian embassy staff expelled within 24h — cycle-first Gulf-state expulsion of Iranian diplomats. IRGC Patriot-malfunction denial vs CENTCOM 'failed to hit intended targets' contest the Day 97 attribution record. Kuwait Airways resumed at alternate terminal; T1 damage carries. No new Gulf casualties Day 98. Brent eased to $97.95; ~40 ships exited Hormuz over three weeks via NCAGS Bahrain per Lloyd's List Intelligence against ~2,000 still stranded; 96th day of effective closure; PGSA $2M/transit yuan-billed continues. Lebanon MOH war-cumulative 3,355 carries.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'Time / NPR / Times of Israel / CNN',
      event:
        "Hezbollah chief Naim Qassem rejected the Round 4 Israel-Lebanon joint statement as 'surrender, defeat and achieving the enemy's goals' — cycle-first Hezbollah principal-level rejection of the Day 97 framework within 24h of issuance; rockets and drones triggered warnings in northern Israel and near IDF troops in southern Lebanon",
      summary:
        "Written statement read on Hezbollah's Al-Manar TV Thursday: the demand that Hezbollah fighters leave southern Lebanon under fire would mean 'surrender, defeat and achieving the enemy's goals'; vowed continued bombardment of northern Israel as long as Israeli strikes in Lebanon continue. Hezbollah was not a party to the Washington talks. Kinetic test stayed sub-casualty: IDF said 'suspicious aerial targets' landed near troops in southern Lebanon without injuries and rockets were launched at Israeli forces, but no attack crossed into Israel Thursday.",
      impact:
        "Names the non-state-actor veto problem the pilot-zones concession was designed to phase around. Closed loop forms: Qassem vows fire while Israeli strikes continue; Katz vows strikes 'at this stage' — framework can erode without either side formally exiting. Skeptical counter: rejection rhetoric while keeping fire sub-casualty and inside Lebanon suggests Hezbollah testing rather than collapsing the framework; Trump claims Hezbollah 'did not reject' the offer.",
    },
    {
      id: 2,
      direction: 'de-escalating',
      importance: 'high',
      source: 'Al Bawaba / Al Jazeera / Jerusalem Post / Times of Israel',
      event:
        "Lebanese PM Nawaf Salam announced LAF will begin deploying in 'pilot zones' in southern Lebanon as first phase despite Hezbollah's rejection — first operationalization step of the Day 97 joint statement, framed as step toward full Israeli withdrawal",
      summary:
        "LAF to take 'exclusive control of the territory to the exclusion of all non-state actors' in the pilot zones, carried out with US 'guidance.' Salam framed deployment as first phase after the Washington ceasefire deal and a step toward full Israeli withdrawal. Trump claimed 'progress' on the Lebanon ceasefire and asserted Hezbollah 'did not reject' the offer. Deployment proceeds whether or not Hezbollah consents.",
      impact:
        "Makes the Lebanese state, not Hezbollah, the framework's load-bearing actor — Hezbollah must now choose between firing on a deploying national army or ceding ground south of the Litani. Sovereignty rationale gives Beirut independent footing. Skeptical counter: LAF capacity to assert exclusive control against a refusing Hezbollah historically unproven; zone locations and timetable unspecified; binding test is whether deployment proceeds un-fired-upon through the week of Jun 22 reconvene.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'JNS / Reuters via WHBL / Times of Israel',
      event:
        "Israeli DM Katz: IDF remains in southern Lebanon security zone 'without the return of the [Lebanese] population,' continues 'its fire and activity in the area at this stage,' claims US-backed 'freedom of action' to strike Beirut — third consecutive cycle-day of Israeli principal-level operational ceasefire denial",
      summary:
        "Katz said troops stay in the security zone including Beaufort Castle area, would continue dismantling 'terrorist infrastructure,' and that Israel has 'freedom of action, backed by the United States, to strike in Beirut in response to attacks on Israeli communities and territory.' IDF Arabic spokesperson issued fresh warnings to residents south of the Zahrani River. Follows Day 96 Katz and Day 97 IDF Chief 'no ceasefire for our forces' framings.",
      impact:
        "Widens the text-vs-posture gap on the joint statement from one principal to a sustained three-day Israeli position. The claimed US backing for Beirut strikes — if unconfirmed by Washington — opens a coalition-cohesion question inside the same window Trump is pushing the truce to advance Iran talks. Skeptical counter: 'at this stage' phrasing and Katz simultaneously defending the truce's advantages signal conditional compliance posture, not exit.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'ABC News / Fox News / The Hill / Washington Times / Iran International',
      event:
        "Trump blasted four Republican WPR cross-overs as 'GRANDSTANDERS!', called 215-208 vote 'meaningless' and said it came 'right in the middle of my final negotiations to end the War' — cycle-first US-presidential-level 'final negotiations' characterization; Khamenei military adviser: MOU draft contains 'ambiguities that must be clarified'; second adviser: 'US waiting for Iran's green light'",
      summary:
        "Trump Truth Social attack on Massie, Fitzpatrick, Barrett, Davidson; warned Iran killing US troops would trigger renewed military action; held 'could happen over the weekend' deal framing; negotiations 'going very well.' Trump separately detailed a rejected plan to send US troops into Iran to collect enriched uranium ('nuclear dust') — two-week operation, 'massive equipment,' declined on danger grounds; material 'entombed.' Khamenei military adviser accused Trump of pressuring Tehran to accept terms while keeping Iran's conditions unclear; second adviser framed Washington as waiting on Tehran's decision.",
      impact:
        "Political-will and negotiation-capacity clocks pull the same direction for cycle-first time — both pricing a near-term yes/no inside the Day 99-100 weekend window. 'Ambiguities' framing engages the MOU text rather than rejecting it. Skeptical counter per §3.5.3: 'final negotiations' is an unverified progress claim from an interested actor with a domestic WPR fight incentive; Araghchi's Day 97 'no progress' remains the last Iranian FM-level assessment; 'over the weekend' framing has already rolled once.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'medium',
      source: 'RFE/RL / NPR / Fortune / CNBC / Stars and Stripes',
      event:
        "Kuwait expelled two Iranian embassy staff as IRGC denied targeting Kuwait airport, blaming Patriot malfunction; CENTCOM: Iranian missiles 'failed to hit their intended targets'; Brent fell $3.41 to $97.95 snapping three-session gain; ~40 stranded ships exited Hormuz over three weeks via quiet NCAGS coordination per Lloyd's List Intelligence",
      summary:
        "Kuwait summoned Iran's chargé d'affaires, handed protest note demanding two embassy staff leave within 24h — cycle-first Gulf-state expulsion of Iranian diplomats. IRGC claimed T1 damage came from malfunctioning US-made Patriot after failed intercepts; CENTCOM countered that Iranian missiles broke apart in flight or were intercepted by US, Kuwaiti and Bahraini defenses. Kuwait Airways flights resumed at alternate terminal. Shipowners submitting transit plans to Naval Cooperation and Guidance for Shipping group in Bahrain along route established by April destroyer and May US-flagged transits; ~2,000 ships still stranded; 96th day of effective closure.",
      impact:
        "First 24h without a new Iran-Gulf casualty exchange since Day 96 — kinetic-readiness clock de-escalates at margin. Quiet NCAGS channel is first durable post-Project-Freedom transit mechanism and precondition for any phased MOU reopening. Skeptical counter: IRGC-CENTCOM attribution contest keeps escalation narrative live in both capitals; single Iranian strike on a transiting vessel closes the quiet channel overnight; diplomatic expulsion deepens Gulf-Iran rupture even as kinetics pause.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 (no new Iranian salvo on US Gulf positions in past 24h)',
      status:
        "First quiet 24h on US positions since the Day 97 cycle-broadest Gulf salvo. CENTCOM: all Iranian missiles Wednesday 'failed to hit their intended targets.' Trump warned Iran killing US troops would trigger renewed military action while holding 'over the weekend' deal framing and 'final negotiations' characterization. Sledgehammer operational; prepared kinetic option unwithdrawn.",
    },
    israel: {
      cumulative: 'KIA: 49 (Iran-front 47 + Lebanon-front 2 truce-period) · WIA: 8,617+',
      delta: '+0 confirmed Day 98 KIA',
      status:
        "Hezbollah rockets and drones triggered northern warnings and landed near IDF troops in southern Lebanon without injuries; IDF said no attack crossed into Israel. Katz: IDF stays in security zone, continues fire 'at this stage,' claims US-backed 'freedom of action' to strike Beirut — third consecutive cycle-day of principal-level operational ceasefire denial.",
    },
    iran: {
      cumulative:
        "LMO ~3,400 KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · Hengaw 6,620+ mil · 3.2M displaced",
      delta: '+0 new published Day 98',
      status:
        "IRGC denied targeting Kuwait airport, blaming Patriot malfunction. Khamenei military adviser: MOU draft has 'ambiguities that must be clarified'; second adviser: 'US waiting for Iran's green light.' Kuwait expelled two Iranian embassy staff. Araghchi Day 97 'no progress' carries as last FM-level assessment. PGSA continues; Hormuz 96th day of effective closure.",
    },
    other: {
      cumulative:
        'Lebanon MOH ~3,355 killed / 10,044+ injured; Iraq 117+; Gulf 33+ KIA / 72+ wounded; UAE 14+9 wounded; Kuwait 1 KIA + 63 WIA (Day 97); Bahrain no casualties',
      delta: '+0 new Gulf casualties Day 98 — first 24h without new Iran-Gulf casualty exchange since Day 96',
      status:
        "Kuwait Airways resumed at alternate terminal after T1 damage; Kuwait expelled two Iranian embassy staff. Qassem rejected joint statement as 'surrender'; LAF began pilot-zone deployment; IDF warnings to residents south of Zahrani continued. Lebanon MOH war-cumulative 3,355 carries.",
    },
  },
  exec:
    "Day 98 stress-tests the Day 97 bifurcation from both ends. Hezbollah chief Naim Qassem rejected the Round 4 joint statement as 'surrender, defeat and achieving the enemy's goals' in a written statement on Al-Manar TV — the cycle-first Hezbollah principal-level rejection of the framework within 24h of issuance — vowing continued bombardment of northern Israel as long as Israeli strikes in Lebanon continue (Time, NPR). Rockets and drones triggered warnings in northern Israel and near IDF troops, though the IDF said no attack crossed into Israel (Times of Israel, CNN). The Lebanese state moved the other way: PM Salam announced LAF deployment to 'pilot zones' as a first phase toward full Israeli withdrawal (Al Bawaba, Al Jazeera), and Trump claimed 'progress,' asserting Hezbollah 'did not reject' the offer. Katz said the IDF stays in its security zone, continues 'its fire and activity in the area at this stage,' and holds US-backed 'freedom of action' to strike Beirut — the third consecutive cycle-day of Israeli principal-level operational ceasefire denial (JNS, Reuters). Trump blasted the four Republican WPR cross-overs as 'GRANDSTANDERS!' and said the 'meaningless' vote came 'right in the middle of my final negotiations'; a Khamenei military adviser said the MOU draft contains 'ambiguities that must be clarified' while a second adviser said 'the United States is waiting for Iran's green light' (ABC News, Fox News, Iran International). IRGC denied targeting Kuwait's airport, blaming a Patriot malfunction; Kuwait expelled two Iranian embassy staff (RFE/RL, NPR). Brent fell $3.41 to $97.95, and ~40 stranded ships have quietly exited Hormuz via NCAGS coordination with the US Navy (Fortune, CNBC). 30-day ceasefire probability holds at 14. Day 100 falls Sunday June 7 — correcting the Saturday June 6 anchor carried in Days 96-97.",
  implications: [
    {
      title:
        "Hezbollah's principal-level rejection of the Round 4 joint statement within 24h exposes the framework's structural absence — Hezbollah was never a party; LAF's simultaneous pilot-zone deployment makes the Lebanese state the framework's load-bearing actor",
      body:
        "Qassem's 'surrender' framing names the non-state-actor veto problem the pilot-zones concession was designed to phase around. The framework's bet is explicit: LAF deploys with US 'guidance' whether or not Hezbollah consents, forcing Hezbollah to choose between firing on a deploying national army or ceding ground south of the Litani. Skeptical counter: LAF capacity against a refusing Hezbollah is historically unproven; the Qassem-fires-while-Katz-strikes loop can erode the framework without formal exit; Trump's 'did not reject' claim signals Washington will paper over the rejection. Binding test: LAF deployment un-fired-upon through the week of Jun 22 reconvene.",
    },
    {
      title:
        "Trump's 'final negotiations' characterization — delivered while attacking his own party's WPR cross-overs — converges the Iran-track decision point on the Day 99-100 weekend window; Tehran's 'ambiguities' and 'green light' framings keep the channel live while withholding commitment",
      body:
        "Cycle-first US-presidential-level 'final' characterization tightens the 'over the weekend' timeline into a named endgame spanning Jun 6-7. Khamenei-adviser 'ambiguities' engages the MOU text rather than rejecting it; 'green light' framing concedes the decision sits in Tehran. Trump's kill-US-troops warning re-states the kinetic floor under the diplomacy. Skeptical counter per §3.5.3: 'final negotiations' is an unverified progress claim from an interested actor with a WPR fight incentive; Araghchi's 'no progress' remains the last FM-level assessment; the weekend framing has already rolled once. Political-will and negotiation-capacity clocks pull the same direction for the first time in cycle.",
    },
    {
      title:
        "Taiwan: Brent −$3.41 to $97.95 and ~40-ship quiet Hormuz exodus via NCAGS Bahrain mark cycle-first simultaneous price-and-transit easing under intact blockade; no fresh Taiwan-specific development — prior assessments unchanged",
      body:
        "Lloyd's List Intelligence ~40-ship exit over three weeks via NCAGS Bahrain names the first durable post-Project-Freedom transit mechanism — informal, surviving where the escort mission was shut down in early May. Against ~2,000 ships stranded and pre-war 100-120/day, marginal but directionally significant: a working exit channel is the precondition for phased reopening under the MOU's unrestricted-Hormuz clause. EIA reference band ($106 May-June) holds with tracking-room restored at margin. PGSA $2M/transit yuan-billed continues; 96th day of effective closure; China ~37.7% of Hormuz crude. LNG cover through September and TSMC 2026 CapEx framework-signature path near 8% carry unchanged. Energy-infrastructure clock eases at margin — but one Iranian strike on a transiting vessel closes the quiet channel overnight; no structural revision of the LNG-cover dominant case.",
    },
  ],
  casualtyNotes: {
    us:
      "No US KIA Day 98; first quiet 24h on US positions since Day 97 salvo. CENTCOM: Iranian missiles 'failed to hit intended targets.' Trump: 'final negotiations' + kill-US-troops warning. Sledgehammer operational.",
    israel:
      "No IDF KIA. Hezbollah fire stayed sub-casualty inside Lebanon; no attack crossed into Israel per IDF. Katz: security zone stays, fire continues 'at this stage,' US-backed 'freedom of action' on Beirut — third cycle-day of operational ceasefire denial.",
    iran:
      "No new published figures. IRGC Patriot-malfunction denial on Kuwait T1. Khamenei adviser: MOU 'ambiguities'; second adviser: 'green light.' Kuwait expelled two Iranian embassy staff. Hormuz 96th day of closure.",
    other:
      "No new Gulf casualties — first 24h without Iran-Gulf casualty exchange since Day 96. Kuwait Airways resumed at alternate terminal. Qassem rejection + LAF pilot-zone deployment + IDF Zahrani warnings. Lebanon MOH 3,355 carries.",
  },
};

export default data;
