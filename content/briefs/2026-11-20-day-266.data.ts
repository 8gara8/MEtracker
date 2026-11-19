import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Escalating. Trump has ordered assessments of Iran's responses to new attack scenarios while Netanyahu presses for a short joint campaign, and Tehran warns of a decisive response and rejects an open-ended standoff.",
      risk7d:
        "Extreme and unchanged. Israeli officials say plans are shared and approved and only timing is open; Trump says he is not rushing, and a carrier has left, but the IRGC now hints at responding before an enemy act.",
      spillover:
        "Critical and unchanged. A Houthi strike damaged Riyadh's tallest tower, JMIC logs four attacks in the strait in 96 hours, and Israel struck the Beqaa again; Iraq's Jurf al-Sakhr compromise is the one easing.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: "Axios and the New York Times via Times of Israel; Trump via Times of Israel and Gulf News",
      event: "Trump orders assessments of new strike scenarios; Netanyahu pushes a 4- to 7-day campaign",
      summary:
        "Axios reported that Trump tasked the Pentagon and intelligence agencies with assessing Iran's likely responses to CENTCOM attack scenarios and asked whether an option could avoid large Iranian attacks on Gulf energy. The New York Times said Netanyahu wants a four- to seven-day joint campaign; reported targets include Pickaxe Mountain, bridges and power plants. Trump said he is not rushing and pointed to after the new year.",
      impact:
        "The decision on a wider war now sits with Trump, on an undefined timetable.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: "Channel 13, Channel 12 and the Washington Post via Times of Israel",
      event: "Netanyahu reportedly calls renewed war unavoidable; plans 'shared and approved'",
      summary:
        "Channel 13 reported that Netanyahu told ministers and security chiefs an operation against Iran is unavoidable, and an IDF officer said Israeli and CENTCOM plans are shared and approved, with timing the question. US officials told Channel 12 the push looks politically motivated. The Washington Post said Netanyahu asked the Mossad chief to plan covert operations without telling the IDF chief.",
      impact:
        "The caretaker government's pressure for strikes is now explicit and contested inside both governments.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'medium',
      source: "Iranian foreign ministry via Tasnim; IRGC spokesman Hossein Mohebi via Press TV",
      event: "Tehran condemns US action on its coast and rejects 'neither war nor peace'",
      summary:
        "Iran's foreign ministry condemned US aggressive actions along the southern coast over recent days, said its forces hit air-defence and launch sites at two regional bases, and warned any recurrence would meet a decisive response. IRGC spokesman Hossein Mohebi said Iran rejects a situation of neither war nor peace, claimed three new air-defence systems and promised a response at least three times larger.",
      impact:
        "Iranian signalling moves from tit-for-tat toward forcing a decision either way.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'medium',
      source: "IRGC Navy via Tasnim; UKMTO and JMIC via Gulf News",
      event: "IRGC Navy claims two supertankers mined; JMIC logs four attacks in 96 hours",
      summary:
        "The IRGC Navy said two supertankers carrying more than 4 million barrels hit mines near the strait's southern coast, exploded and were abandoned, blaming them for using an unauthorised route; no ship is named. UKMTO said a projectile struck a tanker's engine room north of Khasab on 18 November, crew safe. JMIC rated the threat severe and said the TARA GAS was struck again.",
      impact:
        "The mines-as-enforcement claim grows while independent confirmation of hulls lags.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "Saudi-led coalition via Times of Israel and Gulf News; Qatari foreign ministry via The Peninsula",
      event: "Houthi strike damages Riyadh's PIF Tower; Gulf states condemn",
      summary:
        "Sources told AFP the facade of the Public Investment Fund Tower, Riyadh's tallest building, was damaged across several floors. Coalition spokesman Turki al-Malki said a Houthi missile threat was addressed and debris likely caused the impact; the coalition said it intercepted five ballistic missiles in the south and destroyed a launcher in Dhamar. Qatar, the UAE and Bahrain condemned the attacks.",
      impact:
        "Riyadh's financial core is now a repeated target, after Aramco's tower on 8 November.",
    },
    {
      id: 6,
      direction: 'de-escalating',
      importance: 'medium',
      source: "Times of Israel; Shafaq News; Al Arabiya via Iran International",
      event: "Iraq brokers Jurf al-Sakhr compromise; forces deploy Friday",
      summary:
        "Senior Shiite political leaders brokered a deal after Quds Force commander Esmail Qaani met Kataib Hezbollah's Abu Hussein al-Hamidawi and Badr's Hadi al-Amiri. Government forces are to enter Jurf al-Sakhr on Friday while the militia relocates. Shafaq reported units moving and a unified security command ordered by Prime Minister Ali al-Zaidi; Al Arabiya said the withdrawal is phased over a month.",
      impact:
        "The Iraqi flashpoint eases, with Tehran conceding ground to protect its ally.",
    },
    {
      id: 7,
      direction: 'mixed',
      importance: 'medium',
      source: "Times of Israel; Pentagon via Iran International and Gulf News",
      event: "Senate defeats war powers resolution 51-48; war cost put at $48.3 billion",
      summary:
        "The Senate defeated a House-passed war powers resolution 51-48, with Republicans Collins, Murkowski and Paul in favour and Democrat Fetterman against. Pentagon deputy comptroller Arthur Miller told lawmakers the war had cost $48.3 billion to 13 November, excluding base repairs. Representatives Ro Khanna and Yassamin Ansari said they would oppose funding that does not bar offensive operations.",
      impact:
        "Congress cannot stop the war before 3 January; the 11 December funding lapse is the next lever.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'medium',
      source: "Press TV; Chinese foreign ministry; Trump's Fox interview via Iran International",
      event: "Shenzhen trilateral ends with no public remarks on Iran",
      summary:
        "Trump, Xi and Putin held their first trilateral meeting on the APEC sidelines. Press TV reported no remarks on Iran; Putin said the three could contribute to security and Trump spoke of nuclear arms reduction. China's 19 November briefing did not mention Iran. Trump told Fox he would not ask Xi or Putin for help, saying the US had defeated Iran's navy and air force.",
      impact:
        "The summit route to an exit stays closed, as Trump declines third-party help.",
    },
    {
      id: 9,
      direction: 'mixed',
      importance: 'medium',
      source: "Tasnim; Times of Israel; Gulf News",
      event: "Iran, China and Russia tie IAEA access to an end to attacks",
      summary:
        "At the IAEA Board, Iran, China and Russia said full verification can resume only when unprovoked aggression ends and threats are removed, citing Bushehr inspections as good faith. The US, Britain, France and Germany accused Iran of stonewalling, with bombed sites unvisited and the stockpile unaccounted for. Spokesman Esmaeil Baghaei criticised Rafael Grossi over double standards.",
      impact:
        "The nuclear file hardens into a bloc dispute as strike planning cites nuclear progress.",
    },
    {
      id: 10,
      direction: 'escalating',
      importance: 'low',
      source: "IDF via Times of Israel; Lebanese media via Gulf News",
      event: "Israel strikes Hezbollah missile site near Janta in the Beqaa",
      summary:
        "The IDF said its jets struck entrances to an underground Hezbollah missile production and storage site near Janta on Thursday evening, accusing Hezbollah of smuggling and rebuilding in violation of the ceasefire, which it said it remains committed to. It was the second Beqaa strike in days, after Monday's hit on a shipment from Syria. No casualties were immediately reported.",
      impact:
        "The Lebanon gap persists as Israel keeps striking during the ceasefire.",
    },
    {
      id: 11,
      direction: 'mixed',
      importance: 'low',
      source: "DNI Jay Clayton via Times of Israel; Gulf News; Tasnim",
      event: "DNI says Iranian threats to Americans have substantially increased",
      summary:
        "Director of National Intelligence Jay Clayton told a House committee that Iranian threats to Americans at home and abroad have substantially increased, while declining to discuss the reported dirty-bomb plot. Iran's foreign ministry called US chemical and biological weapons claims Iraq-style deception. Gulf News reported Iran and Oman agreed route coordinates for a shipping corridor, with no final agreement.",
      impact:
        "The homeland-threat frame returns through intelligence testimony as strike planning advances.",
    },
    {
      id: 12,
      direction: 'mixed',
      importance: 'medium',
      source: "hormuz.now; Trading Economics; IEA via Times of Israel; TankerTrackers via Iran International",
      event: "IEA calls Hormuz the largest energy threat in history; flows stay near zero",
      summary:
        "The IEA's Fatih Birol called the crisis the largest threat to energy security in history, citing 2.8 billion barrels of oil and 60 billion cubic metres of gas lost. hormuz.now counted 1.6 tanker crossings a day against 47.6 pre-crisis and no LNG carrier. Brent rose 0.76% to about $92.43. TankerTrackers reported a tanker loading Iranian crude, testing the blockade.",
      impact:
        "Gas stays shut while oil prices barely react to physical losses.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448; a CBS-reported 11 enemy fire + 12 nonhostile split and Hegseth's 18 Epic Fury dead are held apart)",
      delta: "+0 KIA, +0 WIA",
      status:
        "No change. No US casualty is reported this cycle. The fifty-first cycle with no disclosure statement.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: "+0",
      status:
        "No addition on the war series and no IDF casualty located this cycle. Gaza and West Bank deaths stay on their parallel series.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: "+0 official",
      status:
        "No new official war toll; the foreign ministry's statement on US action reports no casualties. Darzi's claim of more than 5,000 dead is held apart.",
    },
    other: {
      cumulative: "KIA: 3,716+ · WIA: 11,214+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0",
      status:
        "No casualties reported from the PIF Tower strike or the tanker hit off Khasab. The missing ADNOC crew member and the Houthi-run health ministry's 15 dead in Mokha and Taiz are held apart.",
    },
  },
  exec:
    "The strike loop quieted while the decision over a wider war moved to Washington. Axios and the New York Times report that Trump ordered the Pentagon and intelligence agencies to assess Iran's likely responses to Central Command attack scenarios, as Netanyahu presses for a four- to seven-day joint air campaign; Channel 13 says he told ministers renewed war is \"unavoidable,\" and an IDF officer says plans are \"shared and approved.\" Trump said he is \"not rushing.\" The USS George Washington has left the region, leaving two carriers. The Senate defeated a war powers resolution 51-48, and a Pentagon official put the war's cost at $48.3 billion. Iran's foreign ministry condemned US \"aggressive actions\" on its southern coast and warned any recurrence would meet a \"decisive response\"; IRGC spokesman Hossein Mohebi said Iran rejects \"neither war nor peace.\" The IRGC Navy says two supertankers carrying over 4 million barrels hit mines and burned; no ship is named or independently confirmed, though JMIC logged four attacks in the strait in 96 hours. A Houthi strike damaged Riyadh's PIF Tower, and Qatar condemned it in the strongest terms. In Iraq, a brokered compromise has government forces entering Jurf al-Sakhr on Friday as Kataib Hezbollah relocates. At the Shenzhen trilateral, no leader's public remarks addressed Iran; Trump said he needs no help from Xi or Putin. The IEA called Hormuz the \"largest threat to energy security in history.\" hormuz.now still counts 1.6 tanker crossings a day against 47.6 pre-crisis; Brent rose 0.8% to about $92.4. No new casualties were adopted. Direction stays escalating; the probability eases to 6.",
  implications: [
    {
      title: "Washington weighs a short war while Iran rejects \"neither war nor peace\"",
      body:
        "Under the multi-clock framework, the active-deadline clock has shifted from the host-state loop to a decision in the White House. Day 265's reading was a cycle of small US strikes answered through Kuwait and Bahrain. This cycle's sources located no new host-state launch, but the strategic question widened. Axios reports Trump tasked the Pentagon and intelligence agencies with modelling Iran's responses to CENTCOM attack scenarios and asked whether any option could avoid large-scale attacks on Gulf energy; the New York Times says Netanyahu wants a four- to seven-day campaign, with targets that per Axios include Pickaxe Mountain, bridges, power plants and leadership. These are anonymous-source claims, and the counters are concrete. Trump says he is \"not rushing\" and points to \"after the beginning of the year\"; US officials told Channel 12 the Israeli push looks politically motivated; IDF chief Eyal Zamir is reported as the lone senior opponent of immediate strikes; and the USS George Washington has left, leaving two carriers. Tehran's signalling hardens in parallel. The foreign ministry warns of a \"decisive response\" to any recurrence, and IRGC spokesman Hossein Mohebi says Iran rejects \"neither war nor peace,\" claims three new air-defence systems and promises a response \"three times\" larger, possibly before an enemy act. The IRGC Navy's claim of two mined supertankers is unverified, but JMIC rates the strait threat severe. Direction stays escalating; the probability eases from 7 to 6.",
    },
    {
      title: "Congress, Baghdad and Shenzhen: three off-ramps, one in use",
      body:
        "The political-will and negotiation-capacity clocks moved in opposite directions. The Senate defeated a war powers resolution 51-48, with Collins, Murkowski and Paul in favour and Fetterman against; a Reuters/Ipsos poll puts approval of the war at 31%. The constraint arrives on 11 December, when funding lapses and Representatives Ro Khanna and Yassamin Ansari say they will oppose any bill that does not bar offensive operations, and on 3 January, when Democrats take both chambers. The lame-duck-window prior strengthens: Israel's caretaker government and a president with six weeks of unified control share an incentive to act early. Baghdad offers the one de-escalation. Senior Shiite leaders brokered a deal under which government forces enter Jurf al-Sakhr on Friday and Kataib Hezbollah relocates; Shafaq reports units already moving and a unified command ordered, while Al Arabiya, via Iran International, says the withdrawal is phased over a month. Esmail Qaani's role suggests Tehran chose to protect its ally by conceding ground. Shenzhen produced nothing on Iran in public: China's 19 November briefing did not mention it, Putin spoke of shared responsibility for security, and Trump said he needs no help. At the IAEA, Iran, China and Russia tied verification to an end to \"unprovoked aggression,\" while the US and European three accused Iran of stonewalling. Qatar's reported window closes around 24 November, four days away, with no named US negotiator.",
    },
    {
      title: "Taiwan: the IEA names the shock as gas stays at zero",
      body:
        "No fresh Taiwan-specific development today; prior assessments hold, but the IEA's verdict raises their weight. Fatih Birol's World Energy Outlook calls the Hormuz crisis the \"largest threat to energy security in history,\" puts cumulative Gulf losses at 2.8 billion barrels of oil and 60 billion cubic metres of gas, and sees no \"credible pathway\" back to the pre-war system. hormuz.now counts 11 tanker crossings in seven days, 1.6 a day against 47.6 pre-crisis, and no LNG or LPG carrier in seven days (one of each in 30). PortWatch puts tanker tonnage at 0.8% of normal to 15 November, while Kpler, via Gulf News, puts crude through the strait at about 8.5 mb/d, half of pre-war. Brent rose 0.76% to about $92.43 on Thursday as strike reporting added a risk premium, but it remains near its lowest since late August, with the IEA projecting a 2 mb/d surplus this quarter: the oil-priced-as-surplus prior holds while gas stays shut. Two marginal risks grew. Axios reports the White House asked whether any strike option could avoid large Iranian attacks on Gulf energy, an acknowledgement that the infrastructure-reciprocity risk reaches Qatar's export base. And a TankerTrackers-reported Iranian crude loading tests the blockade; an interdiction would add a flashpoint near the lanes substitute cargoes use. QatarEnergy's force majeure runs to end-December on this file's record.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. No US casualty reported this cycle; the 11/12 split and Hegseth's 18 Epic Fury dead stay held apart from the 15/8 series.",
    israel:
      "No addition on the war series and no IDF casualty located this cycle; no Lebanese toll located.",
    iran:
      "No new official war toll. Darzi's 5,000-plus claim is held apart. HRANA's execution series carries unmerged; no new HRANA item located.",
    other:
      "No change. The missing ADNOC crew member, the Houthi-run health ministry's 15 dead in Mokha and Taiz, the UN's 1,600-plus Yemen toll, IMO counts and GCC figures are held apart.",
  },
};

export default data;
