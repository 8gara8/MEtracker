import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Mixed and unchanged, with each track acquiring a named principal pointing at a different week. The deal side gained Rubio on the record — no deadline, no decision, open to a diplomatic solution — and Araghchi's offer to run the seven-day strait plan in two days. The strike side gained Netanyahu pressing for an offensive the day after the vote and a confirmed Cooper briefing at the White House.",
      risk7d:
        "Extreme and unchanged, one day from the midterms both the reported strike planning and the lapsed 8 October pledge are keyed to. Netanyahu is reported to want the offensive immediately after Tuesday; Trump is reported to prefer diplomacy first. A reported inclination is not a decision, and six called-off strikes since July remains the base rate.",
      spillover:
        "Critical and unchanged. The coalition intercepted a ballistic missile and a drone over southern Saudi Arabia, raised and lifted alerts over Abha and Khamis Mushait, and struck what it called vital Houthi resources in Hodeidah and Dhamar, while an unnamed Houthi official put Aramco within range and warned airlines out of Saudi airspace.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: "Axios citing one Israeli and one American source, with the Wall Street Journal, relayed by Israel National News",
      event: "Netanyahu presses Trump to strike immediately after the midterms, and the call is called tough",
      summary:
        "Axios reported on Sunday, citing one Israeli and one American source, that Netanyahu pressed Trump in a Saturday call to launch another offensive immediately after Tuesday's midterms, and that Trump is inclined to continue diplomacy first — a stance the report says worries Jerusalem. The Israeli source called the call tough, the American source called it direct, and the White House and the Prime Minister's Office both declined to comment.",
      impact:
        "The institution-against-principal prior now runs between capitals as well as inside them, and for the first time the American president is described as the brake rather than the accelerator. Two anonymous sources, one report.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'pivotal',
      source: "Axios, with Trump's own remarks on Saturday, relayed by Israel National News",
      event: "The Cooper White House briefing is confirmed, and Trump names Pickaxe Mountain and ten minutes",
      summary:
        "The same report states that CENTCOM commander Admiral Brad Cooper briefed Trump at the White House on Thursday on possible operations against Iran, with Secretary of War Pete Hegseth and General Dan Caine present, and describes parallel diplomatic and military preparations of the kind that preceded Midnight Hammer and Epic Fury. Trump said the talks were going fine, that he was not in much of a hurry, that Iranians are not very reliable, and that the United States could hit Pickaxe Mountain in ten minutes.",
      impact:
        "The WSJ account of the Cooper briefing, which Reuters could not verify, is corroborated, and Pickaxe Mountain is restated by the principal himself. The planning-is-not-decision prior still governs: approval is absent.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'pivotal',
      source: "Marco Rubio at the close of the G20 foreign ministers' meeting in Atlanta, via The National",
      event: "Rubio answers on the record — no deadline, no decision, open to a diplomatic solution — and says nothing of the seven conditions",
      summary:
        "Rubio said on Saturday that Trump had set no deadline for the diplomatic effort and had made no decision on further strikes, that if there is a diplomatic solution the United States would be open to it, that Washington retains the capability to act if diplomacy fails, and that Trump prefers a diplomatic outcome. He did not address Rezaei's claim that a third American reply showed Washington prepared to accept Iran's seven conditions.",
      impact:
        "The single highest-value check on the board is answered by omission. The claimed concession stays in the Iranian principal's mouth alone, with a Secretary of State standing beside it saying nothing, and the probability does not move.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: "Abbas Araghchi in Tehran and to Al Jazeera via Press TV and The National, with an official briefed by Reuters",
      event: "Araghchi says no meeting exists or is planned, and offers to run the seven-day strait plan in two days",
      summary:
        "Araghchi said on Sunday that there has been no meeting with the American delegation and none has been planned, that Iran's seven-day plan to reopen the strait could run in two days on a Qatari suggestion if its conditions are accepted, and that whether an agreement is reached depends on answers to many questions yet to be provided. He called the American outreach a positive step. A Qatari government aircraft spent about sixteen hours in Tehran after more than twelve hours of talks on Friday.",
      impact:
        "The mechanism-without-a-track prior holds: a sequencing offer relayed through a mediator is not a convened session. The compression from seven days to two is the first movement on the strait formula itself.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'pivotal',
      source: "The IRGC Navy via Iranian state media, reported by Reuters (Yasmine Ghania, Hatem Maher), relayed by ThePrint and InvestingLive",
      event: "The mine claim reaches an eighth rendering — two more tankers exploded, and again no hull is named",
      summary:
        "Iranian state media reported on Sunday evening that the IRGC Navy said two oil tankers, one described as a supertanker, exploded after striking mines on what it calls the unauthorised route, with their navigation systems switched off during a covert transit it says had American military backing. Reuters carried the claim without stating independent confirmation. No vessel name, flag, operator, cargo, crew or casualty figure was given, and no UKMTO warning number, CENTCOM assessment or Omani statement attaches to it.",
      impact:
        "The claim-inflation prior is vindicated an eighth time, one cycle after third parties named the Louise 1 and the RITI. When hulls get named in this war, it is never the belligerents who name them.",
    },
    {
      id: 6,
      direction: 'neutral',
      importance: 'high',
      source: "Iran's Persian Gulf Strait Authority via Bloomberg, Mehr News and Tasnim, with the Korea Shipowners' Association via Reuters and Lloyd's List Intelligence, relayed by TFTC",
      event: "The Sinokor fleet ban takes effect with no enforcement located, and the operator's own association disputes the premise",
      summary:
        "The PGSA notice threatening legal action against every vessel in the South Korean operator Sinokor's fleet, announced on 27 October and the first to target an entire shipowner rather than individual hulls, took its stated effect on 1 November. No detention, seizure, attack or enforcement was located, and no flag state, insurer or regulator responded. The Korea Shipowners' Association told Reuters the flagged ships are not beneficially owned by Sinokor, were re-chartered to an overseas oil company and carry foreign crews.",
      impact:
        "A legal threat against about 37 percent of September's Hormuz crude volume that produces no observable act on its first day is a claim about authority, not an exercise of it. Pre-announced three times, now resolved as an absence.",
    },
    {
      id: 7,
      direction: 'mixed',
      importance: 'high',
      source: "The OPEC statement with Jorge Leon of Rystad Energy, Reuters reporting relayed by GV Wire",
      event: "OPEC+ formally holds December output, confirming the accord in principle and deferring the real decision to 29 November",
      summary:
        "OPEC+ kept December targets unchanged at an online meeting on Sunday, confirming the preliminary accord three sources had given Reuters a day earlier. The seven core members are Saudi Arabia, Russia, Iraq, Kuwait, Algeria, Kazakhstan and Oman, the UAE having left OPEC in May. The 1.65 million barrel-per-day cut completed its rollback in September; about two million barrels per day covers most members through end-2026. A capacity review is now expected by mid-November, and all 21 members meet on 29 November to set 2027 quotas. Brent settled at almost $118 on Friday, its highest since April.",
      impact:
        "The deadline this file set is answered exactly: the announcement matches the accord. Jorge Leon calls it the easy one and 29 November the much more important test. No supply relief is coming before then.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'high',
      source: "Major-General Turki al-Maliki on X via Anadolu Agency, with an unnamed Houthi military official via Saba and two residents via AFP, relayed by anews and Business Recorder",
      event: "Interceptions over the south, a coalition strike inside Yemen, and a Houthi threat putting Aramco within range",
      summary:
        "Al-Maliki said in two posts on X on Sunday that air defences destroyed a Houthi ballistic missile and shot down a drone launched towards southern Saudi Arabia, naming no target and reporting no casualties. Alerts for Abha and Khamis Mushait were raised early on Sunday and later lifted. Hours earlier the coalition said it had neutralised vital Houthi resources, publishing video it said showed strikes in Hodeidah and Dhamar. An unnamed Houthi official told Saba that Aramco facilities are within range and warned airlines out of Saudi airspace except over Makkah and Madina.",
      impact:
        "The claimant-retracts-the-claim prior gains a third rendering: an unnamed official threatens Aramco 24 hours after Saree denied every operation against the Saudi interior. Neither is adopted; the gap is the finding.",
    },
    {
      id: 9,
      direction: 'mixed',
      importance: 'high',
      source: "Shin Bet sources and Channel 12 News via The Times of Israel, with an Israeli court ruling relayed by US News",
      event: "Israel's security service says certification proceeds unchanged on 4 November, and a court finds no evidence of election bribery",
      summary:
        "Shin Bet sources told Channel 12 that certified results will be presented to President Herzog on schedule on Wednesday 4 November, that nothing under investigation could affect the result, and that the probe into alleged foreign influence involving Qatar and at least two other countries is limited and focused. Director David Zini had briefed Justice Noam Sohlberg, Attorney General Gali Baharav-Miara and Netanyahu weeks earlier. An Israeli court found no evidence for the bribery accusation and most suspects were released. Channel 12 said Netanyahu's chief of staff Ido Norden made the calls that led to three Ra'am arrests; the PMO denies it.",
      impact:
        "The count-over-exit-poll prior holds and the stolen-election claim loses its last institutional support. The mediator-under-investigation prior narrows: the probe survives but can no longer plausibly change the mandate arithmetic.",
    },
    {
      id: 10,
      direction: 'escalating',
      importance: 'high',
      source: "Senator Elizabeth Warren via The Hill and Grabien, with the HRANA annual report and Hengaw via Human Rights Activists in Iran",
      event: "Warren calls the casualty revision an act of cruelty as the deadline falls, and Iran's monitors publish 2,003 executions for the year",
      summary:
        "Warren said the Pentagon's death-toll revision just is an act of cruelty, that controlling information this way is the move of every autocrat in history, and that Trump wants to put a pro-Trump blush on everything he can get away with. The senators' deadline falls on 2 November with her 16 October letter unanswered. HRANA's annual report to 8 October recorded at least 2,003 executions, up about 29 percent and the highest in ten reporting periods, 47 of them women, with about 95 percent unannounced; Hengaw recorded 106 protest-related death sentences and 35 carried out.",
      impact:
        "The disclosure-is-a-choice and internal-front priors both harden. The American arithmetic was settled by a database and the letter was still not answered; Iran's ledger is now six unreconciled series deep.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 23 · WIA: 865 (Pentagon DCAS: Epic Fury 15 / 417 + overseas operations 8 / 448) · superseded AP/CENTCOM series: 17 / 440",
      delta: "+0 KIA, +0 WIA",
      status:
        "The thirty-third cycle with no disclosure statement. The Day 247 database reconciliation stands, Warren has called it an act of cruelty, and the senators' deadline falls today with the 16 October letter unanswered, the base-damage estimate unreleased and the Pentagon's own $47bn unsourced.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: "+0",
      status:
        "No addition on the war series and no IDF casualty or operation located this cycle. Gaza deaths stay on their parallel series.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: "+0 official",
      status:
        "No new official war toll. HRANA's 2,003 executions for the year to 8 October and Hengaw's 106 protest-related sentences are recorded against but not merged into the war series, which now carries six unreconciled execution series. The fifty-fourth day with no confirmed Iranian attack on a host state's territory.",
    },
    other: {
      cumulative: "KIA: 3,714+ · WIA: 11,203+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 killed, +0 wounded",
      status:
        "Nothing adopted. AFP's 24 killed in Saudi Arabia during October and at least 13 at Riyadh airport on 10 October are held apart beside the King Khalid and King Fahd figures. No casualties were reported in Sunday's interceptions or the coalition's Yemen operation, and the IRGC's two-tanker claim carries no crew figure.",
    },
  },
  exec:
    "Both tracks acquired a named principal, and they point at different weeks. Axios, citing one Israeli and one American source, reported that Benjamin Netanyahu pressed Donald Trump in a Saturday call to launch another offensive immediately after Tuesday's midterm elections, and that Trump is inclined to continue diplomacy first; the Israeli source called the call tough and the American source called it direct, and both governments declined to comment. The same report confirms what this file could not verify for three cycles: Admiral Brad Cooper briefed Trump at the White House on Thursday on possible operations against Iran, with Pete Hegseth and General Dan Caine present. Trump said the talks were going fine, that he was not in much of a hurry, that Iranians are not very reliable, and that the United States could hit Pickaxe Mountain in ten minutes. Against that, Marco Rubio gave the first on-the-record American answer of this phase: at the close of a G20 foreign ministers' meeting in Atlanta he said Trump had set no deadline and taken no decision on further strikes, and that if there is a diplomatic solution, Washington would be open to it. He did not confirm Rezaei's claim that Washington is prepared to accept Iran's seven conditions. Araghchi said no meeting with the American delegation exists or is planned, called the outreach a positive step, and offered to run Iran's seven-day strait plan in two days if its conditions are accepted. The IRGC Navy claimed two more tankers exploded on mines, naming no hull — an eighth rendering. OPEC+ formally held December output; Brent settled near $118. Direction stays mixed; the probability holds at 9.",
  implications: [
    {
      title: "Each track found a principal, and the two are pointing at different weeks",
      body:
        "The negotiation-capacity clock stays strained and the active-deadline clock worsens, on two statements made within a day of each other. For three cycles this file has asked whether any American official would confirm or deny Rezaei's claim that Washington was prepared to accept Iran's seven conditions. Rubio answered without answering: no deadline, no decision, open to a diplomatic solution if one exists, and not one word about the seven conditions. The concession remains in the mouth of the Iranian principal alone, with no American confirmation and no text. Against that, the strike track acquired its own principal: Netanyahu pressing for an offensive the day after the vote, and the Cooper White House briefing confirmed with Hegseth and Caine in the room. The president who voided his own 9 October deadline is now described by two sources as the brake rather than the accelerator, which is new. But a reported inclination is not a decision, and the planning-is-not-decision prior governs both halves. The probability holds at 9 because nothing on the board is a text, a named signatory, a convened session the United States attends or an IAEA confirmation. Araghchi's two-day offer is the nearest thing to a mechanism, and it is a sequencing proposal relayed through a mediator, not a session.",
    },
    {
      title: "The strait claimed twice more and named nothing, while the war's one legal instrument reached its date",
      body:
        "The energy-infrastructure clock stays critical and worsening, and the congressional-disclosure clock expires today. Two of this cycle's findings are absences. The IRGC Navy's two-tanker mine claim is the eighth rendering of a claim the claimant has never once substantiated, and it arrived the cycle after third parties — Oman, UKMTO and Bloomberg — named the Louise 1 and the RITI without either belligerent's help. The hull-named-by-the-third-party prior therefore holds in its strongest form. And the PGSA's Sinokor notice, pre-announced here three times, took effect on 1 November with no detention, seizure or enforcement located, while the operator's own national association told Reuters the flagged ships are not beneficially owned by Sinokor at all. A legal threat against 37 percent of September's Hormuz crude volume that produces no observable act in its first day is a claim about authority, not an exercise of it. Meanwhile the senators' 2 November deadline falls with Warren's 16 October letter unanswered, the base-damage estimate unreleased and the Pentagon's own $47bn unsourced. Record the lapse as the event: the arithmetic was settled by a database, and the letter was not answered.",
    },
    {
      title: "Taiwan: the president spends his own political capital on the subsidy the barrel made necessary",
      body:
        "The energy-infrastructure clock holds for Taipei and the appropriation-is-the-constraint prior moves for the first time in weeks — not because the money arrived, but because the head of state is now asking for it in public. Speaking at the opening of the Kaohsiung City Medical Association building, President William Lai urged both ruling and opposition lawmakers to pass the supplementary budget subsidising Taipower and CPC, and asked the medical community to help persuade opposition members. He said a president's duty includes maintaining social stability and controlling prices, linked the rises to Russia's war on Ukraine and the US-Iran war, and said containing prices has created a significant financial burden for both companies. The bill is submitted but not passed. The figures stay unreconciled under the contested-count prior: an economy-ministry package reported by Reuters at about $13bn, against the NT$71.1bn supplemental and NT$607.6bn figures already carried, and the Taipei Times account of Lai's remarks carries no amount at all. OPEC+ held December output, so no supply relief is coming, and Brent near $118 is the price Taipei is subsidising against.",
    },
  ],
  casualtyNotes: {
    us:
      "No change. The database reconciliation holds, Warren has named it an act of cruelty, and the deadline falls today with the letter, the base-damage estimate and the $47bn all unanswered.",
    israel:
      "No addition on the war series and no IDF casualty or operation located this cycle.",
    iran:
      "No new official war toll. HRANA's 2,003 executions for the year and Hengaw's 106 protest-related sentences are recorded against but not merged into the war series.",
    other:
      "Nothing adopted. AFP's October aggregate for Saudi Arabia is held apart from the figures already carried, and Sunday's interceptions and the coalition's Yemen operation reported no casualties.",
  },
};

export default data;
