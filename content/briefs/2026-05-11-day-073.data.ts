import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Day 73 produces a Sunday rupture in the bargaining architecture. Iran formally transmits its 14-point MOU response through Pakistani mediators — the deliverable yesterday's brief tracked as undelivered — and Trump rejects within hours on Truth Social as 'TOTALLY UNACCEPTABLE,' writing that 'Iran has been playing games with the United States, and the rest of the World, for 47 years.' Iran's response demands: war cessation on all fronts including Lebanon, OFAC sanctions lift on Iranian oil sales during a 30-day talks window, halt of the naval blockade, 'Iranian management' of the Strait of Hormuz, separate negotiations on the nuclear program, partial export of highly enriched uranium to a third country plus dilution of the remainder. The IRGC declares missiles and drones 'locked onto American targets' awaiting orders to fire. Probability falls 19 → 14.",
      risk7d:
        "Seven-day risk holds critical and compresses sharply. Trump-Xi summit at three days inherits a publicly broken process — Beijing's strategic question becomes whether to invest political capital in a framework Washington has already rejected. The IRGC 'missiles locked' threat is the most forward-deployed kinetic rhetoric since the Day 71 Hormuz exchange. UAE air defense engages 'two UAVs launched from Iran'; Kuwait detects 'hostile drones' at dawn; a drone strikes a commercial cargo ship 23nm northeast of Doha. CENTCOM blockade continues at the 58+ vessel floor; Trump's 'Project Freedom Plus' threat carries with named consequence. Brent $101.29 Friday close carries; AlanChand USD market Sunday 1,799,000 IRR (+0.17%).",
      spillover:
        "Spillover degrades to critical and broadens beyond the Hormuz-only frame. The cargo-ship strike 23nm northeast of Doha is the first commercial-vessel kinetic incident in Qatari waters of the war — vessel transiting from Abu Dhabi, fire extinguished, no casualties, no claim of responsibility. UAE Defence Ministry: 'successfully engaged two UAVs launched from Iran' — direct Iranian-origin attribution distinct from prior proxy framings. Kuwait: 'hostile drones' detected and 'dealt with in accordance with established procedures.' Three Gulf-state airspace breaches plus a maritime kinetic incident in 24 hours. Lebanon: Saturday's +39 KIA carries with no fresh Sunday strike toll reported. IRGC declares heavy-assault threat against US centres and ships if Iranian tankers come under further fire.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Al Jazeera / CNN / Fortune / The Hill / CBS / PBS / Jerusalem Post / Washington Times',
      event: "Trump rejects Iran's MOU response within hours as 'TOTALLY UNACCEPTABLE' — 'Iran has been playing games with the United States, and the rest of the World, for 47 years'",
      summary:
        "Trump posted on Truth Social: 'I have just read the response from Iran's so-called Representatives. I don't like it — TOTALLY UNACCEPTABLE!' He added that 'Iran has been playing games with the United States, and the rest of the World, for 47 years (DELAY, DELAY, DELAY!).' Trump separately warned Iran 'will be laughing no longer.' The rejection came within hours of Iran's formal MOU response being transmitted via Pakistani mediators Sunday morning.",
      impact:
        "Same-day public rejection at the presidential level converts the MOU process from 'structural opportunity' to 'structural break.' Trump's rejection forecloses the diplomatic off-ramp before the Trump-Xi summit at three days — Beijing now inherits a publicly broken process rather than an open one. The Pezeshkian-SNSC-Araghchi triad reads as coherent rather than fractured: the Iranian establishment collectively prioritized maximalism over signature within the summit window. The convergence path narrows sharply.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Al Jazeera / Tasnim via CNBC / France 24 / Times of Israel / IRNA',
      event: "Iran formally transmits 14-point MOU response via Pakistani mediators — demands 'Iranian management' of Hormuz, OFAC sanctions lift, halt of blockade, separate nuclear track, partial HEU export plus dilution",
      summary:
        "Iran's formal response to the US 14-point proposal was delivered Sunday via Pakistani mediators. The response demands: war cessation 'on all fronts' including Lebanon; OFAC sanctions lift on Iranian oil sales for a 30-day talks window; halt of the US naval blockade; 'Iranian management of the Strait of Hormuz if certain commitments are undertaken by the US'; separate negotiations on the nuclear program rather than a single binding framework; partial export of highly enriched uranium to a third country plus dilution of the remaining stockpile. Iran characterized its response as 'realistic and positive.' First-stage talks would focus on ending hostilities and ensuring 'maritime security' in the Gulf and Strait of Hormuz.",
      impact:
        "Two demands are structurally incompatible with the US bargaining position: 'Iranian management of Hormuz' hands Tehran the very leverage the blockade exists to deny; separation of the nuclear track plus partial-export rather than full-handover of HEU keep Iran's enrichment optionality intact. The Lebanon-cessation demand institutionalizes the SNSC Day 72 linkage as a formal MOU condition. The OFAC sanctions-lift demand for a 30-day talks window is a sequencing escalation. Combined, these terms position Iran's reservation price above what Washington can publicly accept.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Fortune / Washington Post / Al Jazeera / JNS / Boston Globe',
      event: "Drone strikes commercial cargo ship 23nm northeast of Doha; UAE intercepts two UAVs 'launched from Iran'; Kuwait detects hostile drones at dawn — three-state Gulf airspace breach pattern in 24 hours",
      summary:
        "A drone targeted a commercial cargo ship transiting from Abu Dhabi to a southern Qatari port 23 nautical miles northeast of Doha, setting a small fire that was extinguished. No casualties; no claim of responsibility. UAE Defence Ministry: 'UAE air defence systems successfully engaged two UAVs launched from Iran.' Kuwait's Defence Ministry reported 'a number of hostile drones' detected in airspace at dawn, 'dealt with in accordance with established procedures' without specifying origin.",
      impact:
        "First commercial-vessel kinetic incident in Qatari waters of the war. The UAE attribution of two UAVs as 'launched from Iran' makes the origin claim direct rather than proxied — distinct from prior Houthi/proxy-channel framings. The bundled pattern (three Gulf-state airspace breaches plus a maritime strike in 24 hours) closes the Hormuz-only kinetic frame that held through Days 65–72; the kinetic risk surface extends across the southern Gulf littoral. The cargo-ship hit against traffic between two Gulf-state ports (not Iranian waters) is qualitatively distinct from blockade enforcement.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Times of Israel / Tribune India / Republic World / ANI',
      event: "IRGC declares missiles and drones 'locked onto American targets in the region' and 'enemy aggressor ships' — awaiting orders to fire; warns of 'heavy assault' on US centres if Iranian tankers come under further fire",
      summary:
        "The IRGC Aerospace Force stated its missiles and drones have been 'locked onto American targets in the region' and on 'enemy aggressor ships,' awaiting orders to fire. The IRGC navy issued a separate warning that any further aggression against Iranian oil tankers or commercial vessels would trigger a 'heavy assault on American centres and military ships in the region.' The threat came a day after US naval forces disabled Iranian-flagged tankers Sea Star III and Sevda on May 8 in the Gulf of Oman.",
      impact:
        "Most forward-deployed kinetic rhetoric from the IRGC since the Day 71 Hormuz exchange. The public naming of the target set ('American targets' and 'enemy aggressor ships') is operationally distinct from prior generalized warnings — it signals pre-positioned strike packages rather than rhetorical posture. Combined with the same-day three-state Gulf drone activity, the IRGC statement reads as the deterrent ceiling on US blockade enforcement actions. The 'awaiting orders to fire' phrasing concentrates decision authority at the IRGC chain of command rather than the diplomatic apparatus.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: 'Pakistan Today / Axios / Times of Israel / Pakistan PMO',
      event: "Pakistan PM Sharif and Qatar PM Al-Thani coordinate Sunday after Al-Thani-Rubio-Witkoff Miami meeting Saturday — Pakistan 'sole mediator' reaffirmed; Qatari channel now active on US side",
      summary:
        "Pakistani PM Shehbaz Sharif and Qatari PM Sheikh Mohammed bin Abdulrahman Al-Thani exchanged views Sunday on the regional situation, reaffirming 'shared commitment to constructive dialogue.' The call came after Al-Thani's Saturday Miami meeting with Secretary Rubio and envoy Witkoff. Pakistan's FM Dar and Iran's FM Araghchi separately discussed Islamabad's diplomatic efforts. The White House and Iran continue to acknowledge Pakistan as the 'sole mediator' in the process.",
      impact:
        "Pakistan-Qatar coordination operationalizes the five-laned diplomatic architecture from Day 72 into active collaboration. With Trump's same-day public rejection of Iran's response, the mediator architecture's task shifts from 'closing the gap' to 'preventing collapse.' Qatar's Iran interlocutor history (JCPOA-era, Hamas hostage negotiations) plus Pakistan's sole-mediator role provide the dual channel through which any salvage of the MOU process now must run.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'medium',
      source: 'Euronews / Washington Times / PBS NewsHour / Lebanon Health Ministry',
      event: "Lebanon track carries from Day 72 — 39 KIA Saturday remains the most recent confirmed toll; IDF nine-village evacuation order carries; no fresh Sunday strike toll reported",
      summary:
        "Saturday's 39 KIA across southern Lebanon — the heaviest single-day toll since the April truce — carries into Sunday with no fresh strike toll reported. IDF's order for residents of nine villages to evacuate carries. The deadliest Saturday strike at Saksakiyeh (seven killed including a child, 15 wounded) and the Nabatieh triple-tap drone targeting a Syrian man and his 12-year-old daughter remain the headline incidents. Hezbollah's Saturday explosive drone wounding three Israeli reservists carries.",
      impact:
        "The Lebanon track operates as the standing escalation substrate beneath Sunday's MOU-rejection and Gulf-drone news. With Iran's MOU response formally institutionalizing the Lebanon-cessation demand as a framework condition and Trump rejecting the response wholesale, the Lebanon clock now has direct linkage to US-Iran framework collapse rather than parallel-track separation. IDF's nine-village evacuation order signals operational continuation rather than de-escalation. Lebanon MOH cumulative ~2,707+ KIA carries.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'medium',
      source: 'CNBC / AlanChand / Bloomberg / CSIS / Voice of Emirates',
      event: "Trump-Xi summit at three days; White House confirms dates and agenda with Iran central; Brent $101.29 Friday carries; AlanChand USD market 1,799,000 IRR Sunday (+0.17%); Remittance 1,803,000",
      summary:
        "The White House confirmed Trump-Xi summit dates as May 14-15 in Beijing with full agenda announced. Treasury Secretary Bessent confirmed Iran will be central agenda item. CSIS framing: 'managing the world's most important relationship' under Iran-war shadow. Brent crude settled $101.29 Friday (+1.0%); markets closed weekend. AlanChand Sunday: USD market 1,799,000 IRR (+0.17% / +3,000 from Saturday); Remittance 1,803,000 IRR (+0.17%).",
      impact:
        "The summit at three days inherits a publicly broken MOU process plus a same-day three-state Gulf drone pattern plus a forward-deployed IRGC threat. Beijing's structural incentive to deliver Iranian framework signature pre-summit collapses under Trump's public rejection — Xi cannot pre-negotiate a deal Washington has already rejected. Monday's market open will price Sunday's rejection, three-theater Gulf activity, and IRGC 'missiles locked' rhetoric simultaneously. Rial weakness at 0.17% per day in remittance carries.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'medium',
      source: 'CNBC / Iran International / France 24 / Iranian state media',
      event: "Pezeshkian framing: 'if American government abandons totalitarianism and respects rights of Iranian nation, ways to reach agreement will certainly be found' — Iranian establishment positions response as 'realistic and positive' against US rejection",
      summary:
        "Pezeshkian wrote on X: 'If the American government abandons its totalitarianism and respects the rights of the Iranian nation, ways to reach an agreement will certainly be found.' Iranian official source to Al Jazeera characterized the response as 'realistic and positive' and added 'Washington's positive response to our response will move the negotiations forward quickly.' Araghchi's prior 'inches away from Islamabad MOU... maximalism, shifting goalposts, blockade' framing carries. Ghalibaf audio messages on state media: US seeks 'to destroy the country's unity in order to force us into surrender'; Iranians should practice belt-tightening.",
      impact:
        "Iranian establishment frames the response as 'realistic and positive' in direct conflict with Trump's 'TOTALLY UNACCEPTABLE' rejection — the two narratives are now mutually exclusive in public framing. Pezeshkian's 'abandon totalitarianism' framing positions any further US negotiation as a US climbdown rather than mutual movement. Ghalibaf's belt-tightening message prepares Iranian domestic audience for sustained economic-pressure environment rather than imminent relief. Iranian leadership cohesion narrative consolidates around maximalism within the Trump-Xi window.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 15 (13 combat + 2 noncombat) · WIA: 400+',
      delta: '+0 confirmed KIA Sunday',
      status:
        "No new US casualties confirmed Sunday. IRGC declares missiles and drones 'locked onto American targets in the region' and 'enemy aggressor ships' awaiting orders to fire. CENTCOM blockade enforcement continues at 58+ vessels redirected since April 13; four Iranian-flagged tankers disabled cumulatively (Sea Star III and Sevda May 8). Trump rejects Iran MOU response as 'TOTALLY UNACCEPTABLE.' Rubio-Witkoff-Qatar Miami meeting Saturday carries.",
    },
    israel: {
      cumulative: 'KIA: 47 · WIA: 8,600+',
      delta: '+0 KIA / +0 new WIA Sunday (Saturday +3 WIA from Hezbollah drones carries)',
      status:
        "No new Israeli casualties confirmed Sunday. IDF nine-village evacuation order in southern Lebanon carries from Saturday's 85-site bombardment. Saturday's +3 reservist WIA from Hezbollah explosive drones near border carries. Iron Beam laser first-intercept claims from earlier in week carry. IDF Lebanon operational tempo from Day 72 carries.",
    },
    iran: {
      cumulative: "LMO 'nearly 3,400' KIA · HRANA 3,636+ (1,701 civ + 1,221 mil + 254+ children) · Hengaw 6,620+ mil · 3.2M displaced",
      delta: 'No new figures Sunday',
      status:
        "No new casualty figures Sunday. IRGC declares missiles 'locked' onto American targets awaiting orders. Iran transmits 14-point MOU response demanding war cessation on all fronts plus 'Iranian management' of Hormuz plus separate nuclear track. Pezeshkian: 'if American government abandons totalitarianism...' Ghalibaf audio messages prepare domestic audience for sustained economic pressure. AlanChand USD market Sunday 1,799,000 IRR (+0.17%); Remittance 1,803,000.",
    },
    other: {
      cumulative: 'Lebanon MOH: ~2,707+ KIA / 8,200+ WIA · Iraq: 117+ · Gulf states: 32+ · UAE: 14+9 wounded cumulative · Qatar: +0 Sunday',
      delta: 'Lebanon: no new toll reported Sunday (Saturday +39 carries); Qatar: cargo ship fire — no casualties; UAE/Kuwait: drones intercepted no casualties',
      status:
        "Lebanon: no fresh strike toll reported Sunday; Saturday's +39 KIA carries with IDF nine-village evacuation order. Qatar: drone strikes commercial cargo ship 23nm NE Doha — vessel transiting Abu Dhabi to southern port, fire extinguished, no casualties, no claim of responsibility. UAE: 2 UAVs 'launched from Iran' engaged by air defense. Kuwait: hostile drones detected at dawn, dealt with per established procedures. Hormuz: zero transits since May 4 carries; 58+ vessels redirected.",
    },
  },
  exec:
    "Day 73 produces a Sunday rupture in the bargaining architecture. Iran formally transmits its 14-point MOU response through Pakistani mediators — the deliverable yesterday's brief tracked as the dominant near-term variable — but Trump rejects it within hours on Truth Social as 'TOTALLY UNACCEPTABLE,' writing that 'Iran has been playing games with the United States, and the rest of the World, for 47 years (DELAY, DELAY, DELAY!).' Iran's response demands: war cessation on all fronts including Lebanon; OFAC sanctions lift on Iranian oil sales during a 30-day talks window; halt of the naval blockade; 'Iranian management' of the Strait of Hormuz; separate negotiations on the nuclear track rather than a single binding framework; partial export of highly enriched uranium to a third country plus dilution of the remainder. Two demands are structurally incompatible with the US bargaining position — 'Iranian management of Hormuz' hands Tehran the leverage the blockade exists to deny, and separation of the nuclear track keeps Iran's enrichment optionality intact. The Gulf simultaneously absorbs three kinetic incidents in 24 hours: a drone hits a commercial cargo ship 23 nautical miles northeast of Doha while transiting from Abu Dhabi (small fire extinguished, no casualties, no claim of responsibility); UAE air defense engages 'two UAVs launched from Iran' (direct Iranian-origin attribution, not proxied); Kuwait reports hostile drones at dawn. The IRGC declares its missiles and drones 'locked onto American targets in the region' and 'enemy aggressor ships' awaiting orders to fire, and warns of 'heavy assault' on US centres and military ships if Iranian tankers come under further fire — the most forward-deployed kinetic rhetoric since the Day 71 Hormuz exchange. The Trump-Xi summit moves to three days, inheriting a publicly broken process. Brent $101.29 Friday carries; AlanChand USD market Sunday 1,799,000 IRR (+0.17%); Remittance 1,803,000 IRR. Pakistan-Qatar coordination Sunday operationalizes the five-laned mediator architecture from 'closing the gap' to 'preventing collapse.' Analytical judgment: 30-day probability falls 19 → 14.",
  implications: [
    {
      title: "Iran's response and Trump's same-day rejection collapse the structural convergence path — Beijing inherits a publicly broken process at T-minus-3 from the summit",
      body:
        "Iran's formal 14-point MOU response delivered Sunday via Pakistani mediators is the deliverable yesterday's brief tracked as the dominant near-term variable — but its substance and Trump's reaction together convert 'structural opportunity' into 'structural break.' Iran's demands include war cessation on all fronts including Lebanon, OFAC sanctions lift on Iranian oil sales during a 30-day talks window, halt of the naval blockade, 'Iranian management' of the Strait of Hormuz, separate negotiations on the nuclear program rather than a single binding framework, partial export of highly enriched uranium to a third country, and dilution of the remaining stockpile. Trump rejected within hours on Truth Social — 'TOTALLY UNACCEPTABLE'; 'Iran has been playing games with the United States, and the rest of the World, for 47 years.' Two demands are structurally incompatible with the US bargaining position: 'Iranian management of Hormuz' hands Tehran the leverage the blockade exists to deny; separation of the nuclear track and partial-export rather than full-handover of HEU keep Iran's enrichment optionality intact. The Pezeshkian-SNSC-Araghchi triad reads as coherent rather than fractured — the Iranian establishment collectively prioritized maximalism over signature within the Trump-Xi window. Beijing at three days inherits a publicly broken process, sharpening Xi's strategic question of whether to invest political capital in a framework Washington has already rejected.",
    },
    {
      title: "Three-theater Gulf drone activity plus IRGC 'missiles locked' threat reactivates the multi-theater kinetic lane — the Hormuz-only frame closes",
      body:
        "Sunday's Gulf incidents broaden the kinetic surface from the Hormuz-Oman corridor to a three-state simultaneous demonstration. A drone strikes a commercial cargo ship transiting from Abu Dhabi to a southern Qatari port 23 nautical miles northeast of Doha — the first commercial-vessel kinetic incident in Qatari waters of the war; the fire was extinguished with no casualties and no claim of responsibility. The UAE Defence Ministry states air-defense systems 'successfully engaged two UAVs launched from Iran' — a direct Iranian-origin attribution distinct from the prior proxy-channel framings that characterized April and early May. Kuwait's Defence Ministry reports 'hostile drones' detected at dawn and 'dealt with in accordance with established procedures' without specifying launch origin. The IRGC simultaneously declares its missiles and drones 'locked onto American targets in the region' and 'enemy aggressor ships,' awaiting orders to fire, and warns of 'heavy assault' on US centres and military ships if Iranian tankers come under further fire. The pattern is operationally bundled: three Gulf-state airspace breaches plus a maritime kinetic incident plus a forward-deployed IRGC threat in 24 hours. The Hormuz-only kinetic frame that held through Days 65–72 closes; the kinetic risk surface extends across the southern Gulf littoral with Qatari waters as a new domain.",
    },
    {
      title: "Iran's Hormuz-sovereignty demand plus simultaneous Gulf-state attacks reprice the framework-collapse channel sharply — TSMC CapEx exposure widens with three transmission accelerators",
      body:
        "The framework-collapse risk channel that yesterday's brief identified as adding a premium to the energy-transmission stack today materializes operationally. Iran's 'Iranian management of the Strait of Hormuz' demand is a sovereignty-grade escalation: even at the bargaining-leverage end of the interpretation range, it tells global energy markets that Iran's reservation price for any framework includes a structural redefinition of who governs ~14-million-barrels/day pre-war flow. The cargo-ship strike off Doha demonstrates the kinetic surface now reaches commercial traffic in Qatari waters, not just the Iranian coastal zone. The UAE attribution of two UAVs 'launched from Iran' confirms Iranian-origin attacks on a Trump-aligned Gulf coalition state during MOU negotiations — the political optics of attacking a US security partner mid-deal are themselves the message. Three accelerators converge: Trump-Xi at three days compresses the convergence interval to its tightest of the war; Trump's 'Project Freedom Plus' Day 72 threat carries with named consequence; CENTCOM blockade enforcement continues at the 58+ vessel floor. Brent $101.29 Friday carries into Monday's open with Sunday's three-theater Gulf activity, IRGC 'missiles locked' rhetoric, and the publicly-rejected MOU all simultaneously priced. CPC procurement should treat the $99-110 floor as compressing toward kinetic-tail territory. TSMC 2026 CapEx should reweight the framework-signature discount tail materially down — yesterday's ~22% framework-signature path now reads ~14% — and the kinetic-rupture premium materially up.",
    },
  ],
  casualtyNotes: {
    us:
      "No new KIA Sunday. IRGC threatens missiles 'locked' onto American targets; CENTCOM blockade continues at 58+ vessels. Trump rejects Iran MOU response as 'TOTALLY UNACCEPTABLE'. Rubio-Witkoff-Qatar Miami Saturday carries.",
    israel:
      "No new casualties Sunday. IDF nine-village evacuation order carries from Saturday's 85-site bombardment. Saturday +3 WIA from Hezbollah drones carries.",
    iran:
      "No new casualty figures. IRGC 'missiles locked' awaiting orders. Iran transmits MOU response demanding 'Iranian management' of Hormuz + separate nuclear track. AlanChand USD market 1,799,000 IRR (+0.17%).",
    other:
      "Lebanon: Saturday +39 carries; no fresh Sunday toll. Qatar: cargo ship 23nm NE Doha hit by drone — fire extinguished, no casualties. UAE: 2 UAVs from Iran intercepted. Kuwait: drones detected at dawn. Hormuz: zero transits since May 4.",
  },
};

export default data;
