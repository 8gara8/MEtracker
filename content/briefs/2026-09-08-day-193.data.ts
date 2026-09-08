import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds escalating on Day 193 as Iran met the weekend's US tanker strikes not with restraint but by moving to institutionalize a counter-blockade. Supreme National Security Council secretary Mohsen Rezaei said Tehran will declare a 'restricted zone' reaching from the US Navy's blockade line to the Strait of Hormuz and into the Persian Gulf, blacklisting any vessel that crosses toward the strait without Iranian coordination and voiding its insurance and future passage — the tanker war moving from tit-for-tat strikes toward two competing, formalized regimes of maritime control over one chokepoint. The escalation ran alongside a discordant note: President Masoud Pezeshkian urged ending the war 'from a position of strength,' the SNSC's coercion set against the president's off-ramp. Per §3.5.3 the maritime track, not the presidential rhetoric, is what moved on the ground; nothing on Day 193 reversed the return to force.",
      risk7d:
        "Seven-day risk holds extreme. A declared Iranian restricted zone with insurance and blacklist penalties, layered atop Iran's debut of anti-ship ballistic missiles and the standing US blockade, multiplies the flashpoints in a strait already running four-to-six vessels a day AIS-dark: a vessel seized or struck enforcing the zone, a laden-tanker loss, a lost escort convoy, or a US casualty from a salvo an evasion does not dodge next time. Brent, having settled near $97.5 at a six-week high after a 9.3% weekly gain, sits closer to the >$100 trigger on a drawn-down stock base. The narrative front adds its own tail — a government escalating at sea while its president talks exit — but the interceptor tempo, the tanker war and the coming zone all point the same way.",
      spillover:
        "Spillover holds critical. The map stays wide: Iranian soil under a continuing campaign, both maritime chokepoints, the Gulf host states directly targeted across the recent cycle, the Israel-Gaza and Israel-Lebanon seams, an open Houthi front bearing on the Yanbu pipeline workaround, and a formalized economic front wired to the September 24 US-China summit. Per §3.5.5 the reach still outran the damage on the Iran front on Day 193 — the warships evaded the missile fire with no casualty — but the collapse of Hormuz throughput to about a fifth of pre-war flow, China's open defiance, the unverified nuclear file the IAEA now calls a year of blindness, and Iran's deepening execution wave are the standing worsening signals a declared restricted zone would compound.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'Washington Times / The National / Al-Monitor / GlobalSecurity',
      event:
        "Iran moved to institutionalize a counter-blockade: Supreme National Security Council secretary Mohsen Rezaei said Tehran will announce a 'restricted zone' in the coming days extending from the line of the US naval blockade to the Strait of Hormuz and into the Persian Gulf, warning that any vessel entering with the intent to cross the strait without coordinating with Iran will be placed on a sanctions list and face penalties to its insurance coverage and future passage.",
      summary:
        "Per §3.5.5 this mirrors the US blockade of Iranian ports with an Iranian regime of maritime control — the tanker war moving from tit-for-tat strikes toward two competing, formalized zones over the same chokepoint, each side claiming the right to sanction the other's shipping.",
      impact:
        "The energy-infrastructure clock moves: a declared Iranian zone with insurance and blacklist penalties raises the cost and legal risk of every transit already running at a fifth of pre-war flow, deepens the throughput collapse, and loads the >$100 Brent tail if a vessel is seized or struck enforcing it.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'Al Jazeera / The National / The Hill',
      event:
        "Tehran spoke with two voices in one weekend: as Rezaei and parliament speaker Ghalibaf hardened the maritime threat, President Masoud Pezeshkian said continuing the war 'is neither in our interest, nor in the interest of the region,' urged bringing it to an end 'from a position of power and dignity,' and said economic pressure would not force 'abrupt policy shifts,' while Foreign Minister Abbas Araghchi tied any reopening of Hormuz to US compensation for violating the June memorandum.",
      summary:
        "Per §3.5.3 hold both messages as claims aimed at different audiences: the SNSC's counter-blockade speaks to hardliners and the home front, the president's off-ramp to a diplomatic exit — and the divergence inside Tehran is itself the signal on a day with no US counterparty to test either.",
      impact:
        "The negotiation-capacity clock moves without advancing: the off-ramp language recurs but stays conditioned on US compensation and a return to the lapsed MoU, while the maritime track escalates in parallel — force and diplomacy pulling opposite ways under one government.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'Trading Economics / Al Jazeera / Fortune / CNBC',
      event:
        "The market priced the escalation over the diplomacy: Brent settled near $97.5 a barrel on Monday, a six-week high and roughly 40% above pre-war levels, after climbing 9.3% the prior week, as the tanker strikes and Iran's restricted-zone threat deepened fears of prolonged disruption; independent tracking held Hormuz throughput near a fifth of pre-war flow while Washington claimed rising volumes, and war-risk insurance stayed multiples above baseline.",
      summary:
        "Per §3.5.5 the gap between claim and record persists — the US 'oil is flowing' line against four-to-six vessels a day transiting AIS-dark and a chokepoint at a fifth of normal — while China, buyer of the bulk of Iran's oil, stayed defiant as the major-Chinese-bank designation slipped again behind the September 24 Xi summit.",
      impact:
        "The energy-infrastructure clock stays dominant and the rupture tail loaded: a laden-tanker loss, a lost escort convoy, a vessel struck enforcing the new zone, or a named Chinese bank sends Brent past $100 in a session on a drawn-down stock base.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'medium',
      source: 'Al Jazeera / Arms Control Association / Amnesty International / Iran HRM',
      event:
        "The connected fronts held and the nuclear file sharpened: IAEA director-general Rafael Grossi said the agency has been 'completely blind' to Iran's program for more than a year, with inspectors still denied access to the bombed sites and about 440 kg of 60% uranium unverified; Iran's postwar execution wave deepened, with Amnesty counting at least 26 protesters executed since January and 60-plus at risk; Gaza stayed deadlocked on disarmament-before-withdrawal; and Israel's Lebanon reprisal cycle carried.",
      summary:
        "Per §3.5.6 the standing priors hold unresolved — the unverified nuclear file, the Israeli-independence and Lebanon-gap priors, the Gaza sequencing deadlock — and per §3.1 the deepening rights thread stays outside the war toll.",
      impact:
        "The humanitarian-escalation and coalition-cohesion clocks move: the war widens on the nuclear, Gaza, Lebanon and human-rights vectors even on a day whose center of gravity was the maritime and narrative fight over Hormuz.",
    },
  ],
  casualties: {
    us: {
      cumulative:
        'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM combat series; ~96% returned to duty). DoD DCAS all-cause series holds 18 killed · 687 wounded.',
      delta:
        "+0 confirmed on the AP/CENTCOM combat series into Day 193 — a sixth day with no verified new US combat casualty. Iran's weekend ballistic-missile fire at US warships was evaded per CENTCOM, and the US struck three Iranian tankers in reprisal, destroying one, with no reported US casualty. Per §3.5.3 the 18th DCAS death stays unconfirmed as hostile, Trump's 'per ship' rule is not triggered, and Iran's earlier claim of American service members killed stays denied and uncounted. Rezaei's coming 'restricted zone' and the debut of anti-ship missiles raise the odds the next salvo lands; the escort convoy (~8-9 mb/d) runs amid live fire with the USS George Washington on station, the blockade holding at eighty-six vessels rerouted, three disabled, two boarded.",
      status:
        "The headline holds at 17 KIA / 432 WIA on the AP/CENTCOM combat series against the wider DoD DCAS all-cause tally of 18 killed / 687 wounded since February 28. Per §3.5.3 keep the combat figure and flag DCAS. Day 193 added no US count — a sixth quiet day — but the exposure rose in kind, not degree: Iran is now moving to declare a restricted maritime zone that would blacklist and interdict shipping across the very corridor CENTCOM escorts, atop its debut of anti-ship ballistic missiles against a carrier group. The escort corridor (~660 million barrels and ~1,300 vessels since May, moving ~8-9 mb/d) runs amid live fire; the IRGC navy's 'unauthorized routes' warning keeps a single unevaded salvo one event away from Trump's reprisal rule. The $67 billion supplemental and the 50-48 Senate war-powers rebuke stay unresolved in recess ahead of the November midterms.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta:
        "+0 on the Iran front and no new Israeli military fatalities on the Lebanon front. Israel stayed offstage on the US-Iran maritime and narrative fight while holding its Gaza campaign deadlocked and lethal and its Lebanon reprisal cycle live — the Lebanese dead from the weekend strikes are logged under 'other,' not folded into the war cumulative.",
      status:
        "Israeli casualties hold at 56 KIA / 8,652+ WIA on the Iran front; no new Israeli toll on Day 193. Israel's own fronts stayed hot but produced no new Israeli count: the Gaza roadmap holds deadlocked — the Board of Peace insists on no Israeli withdrawal before Hamas disarms, Hamas conditions any move on withdrawal and reconstruction, and Netanyahu's office opposes the plan, with 1,100-1,200+ Palestinians killed since the October 2025 ceasefire, a connected theater the series does not fold into the war cumulative. Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold — Israel continues to act on its own clock, outside the US-Iran framework.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No update to the official war toll; the weekend tanker exchange produced no released Iranian count, and casualties from the one Iranian tanker the US destroyed are unreleased. The rights thread deepened: Amnesty counts at least 26 protesters executed since the January 2026 unrest — 23 in the four days of August 23-26 alone — with 60-plus at risk including three arrested as children, kept out of the war toll per §3.1. The contested September 1 Kuhestak wedding strike carries per §3.1 dual-sourcing (NYT-corroborated US bomb; Iranian-source toll of up to five killed and 68+ wounded held pending verification).",
      status:
        "The official Iranian war toll carries pending an update; Day 193 added no new war-front count. The movement was again on the rights thread, kept out of the war cumulative per §3.1: Amnesty reports at least 26 people executed over the January 2026 protests since the year began, 23 of them in the four days to August 26 — about one every four hours — with more than 60 sentenced to death and at risk, including three arrested as children, and the UN's Türk warning the death penalty is being used to instil fear. The contested civilian figure holds: the September 1 Kuhestak wedding strike is independently corroborated as a US-released bomb, but the toll of up to five killed and 68+ wounded remains an Iranian-source count not folded into the MOH aggregate; September 1 military casualties stay unreleased. Cumulative HRANA stands at 3,636+ with its understatement caveat, Foundation ~3,468, MOH ~3,559 / 27,400+, US and Israeli estimates to 6,000+. The IAEA says it has been 'completely blind' for more than a year; ~440.9 kg of 60% HEU plus ~184.1 kg of 20% stays unverified and likely at Isfahan.",
    },
    other: {
      cumulative:
        "Lebanon source-split: Health Ministry ~4,265 / 12,190+ vs Wikipedia 3,371 / 10,129 · Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 85+ WIA (Kuwait 10 killed / 115 injured; Saudi Arabia 11 civilians injured, Aug 7) · Yemen (Mokha) 11+ killed / 32+ wounded · Bab al-Mandeb (Tihamah, Aug 12) at least 6 killed / 10 wounded per Yemen government · Hormuz-crisis maritime toll ~19 ships damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing",
      delta:
        "No verified new fatality in a connected theater on Day 193: Iran's missile fire at US warships was evaded and the US tanker strikes produced no released casualty figure. Iran's coming restricted zone threatens to add insurance and interdiction penalties atop a strait already running four-to-six vessels a day, many AIS-dark; the Houthi blockade still threatens the Yanbu pipeline reroute; the standing maritime, Bab al-Mandeb, Lebanon and Gulf tolls carry.",
      status:
        "The 'other' ledger held critical in target set and added no verified fatality on Day 193. On the Iran front the interceptors and ship evasions held; the weekend saw the US destroy one Iranian tanker (crew casualties unreleased) and Iran claim hits on US-linked vessels. Per §3.5.3 the Houthi Saudi-warship claim, the UAE ballistic-missile threat and Iran's downed-MQ-9 claims stay logged, not counted. Hormuz commercial throughput held near a fifth of pre-war flow with four-to-six vessels a day, many AIS-dark, and Iran's declared restricted zone would sharpen the squeeze; war-risk premiums sit multiples above normal and the Iran-Oman corridor stays clouded by fire. The Lebanon reprisal cycle carries (Health Ministry cumulative ~4,265 / 12,190+, the Wikipedia series 3,371 / 10,129 lagging); Bab al-Mandeb Tihamah (Aug 12) holds at least six killed / ten wounded; the maritime toll holds ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mokha shut, ~1,300 idled; Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7).",
    },
  },
  exec:
    "Day 193 turned the tanker war into competing blockades. After the US struck three Iranian tankers over the weekend — destroying one — in reprisal for ballistic-missile fire at its warships, Iran's Supreme National Security Council secretary Mohsen Rezaei said Tehran will declare a 'restricted zone' in the coming days reaching from the US naval blockade line into the Persian Gulf, warning that any vessel crossing toward Hormuz without Iranian coordination will be blacklisted and lose its insurance and future passage (Washington Times, The National, Al-Monitor). Tehran spoke with two voices: as Rezaei and parliament speaker Ghalibaf hardened the maritime coercion, President Pezeshkian said Monday that continuing the war 'is neither in our interest, nor in the interest of the region' and urged ending it 'from a position of strength' (Al Jazeera, The National) — the SNSC's counter-blockade set against the president's off-ramp, the gap the intelligence. The market read the escalation, not the olive branch: Brent settled near $97.5, a six-week high and roughly 40% above pre-war, after a 9.3% weekly gain, with Hormuz near a fifth of normal (Trading Economics, Al Jazeera). The IAEA sharpened its warning — Grossi said the agency has been 'completely blind' for more than a year, inspectors still barred from the bombed sites and ~440 kg of 60% uranium unverified (Al Jazeera, Arms Control Association). The connected fronts held: Iran's execution wave deepened, Gaza stayed deadlocked, and Lebanon's reprisal cycle carried. Direction holds escalating; seven-day risk extreme; spillover critical; the thirty-day ceasefire probability holds at 3.",
  implications: [
    {
      title: 'Two blockades now, not one — Iran mirrors the US at sea',
      body:
        "Iran answered the American blockade with the architecture of its own. SNSC secretary Mohsen Rezaei said Tehran will declare a 'restricted zone' reaching from the US Navy's blockade line to Hormuz and into the Persian Gulf, blacklisting any vessel that crosses toward the strait without Iranian coordination and stripping its insurance and future passage (Washington Times, The National, Al-Monitor). Per §3.5.5 quantify the shift: this is no longer a tit-for-tat of Iranian mines and US airstrikes but two competing, formalized regimes of maritime control over one chokepoint, each claiming the right to sanction the other's shipping. The move follows the weekend's tanker exchange — the US struck three Iranian tankers, destroying one, after Iran fired ballistic missiles at its warships (ABC, Euronews). Under the multi-clock framework the energy-infrastructure clock is dominant: a declared Iranian zone with insurance penalties raises the legal and financial cost of every transit already running at a fifth of pre-war flow and hands the IRGC a pretext to interdict. Analytical judgment: whether Iran can physically enforce the zone is less important than that it has reframed the strait as contested legal space — a vessel seized or struck enforcing it is simultaneously a mass-casualty risk and a >$100 Brent trigger, and the reframing itself deepens the throughput collapse the market is already pricing.",
    },
    {
      title: 'One government, two messages — the SNSC escalates while the president reaches for the exit',
      body:
        "Tehran ran force and diplomacy in opposite directions on the same weekend. As Rezaei and parliament speaker Ghalibaf hardened the maritime threat, President Pezeshkian said continuing the war 'is neither in our interest nor in the interest of the region,' urged ending it 'from a position of power and dignity,' and insisted economic pressure would not force 'abrupt policy shifts'; Foreign Minister Araghchi tied any Hormuz reopening to US compensation for violating the June MoU (Al Jazeera, The National, The Hill). Per §3.5.3 hold both as claims aimed at different audiences: the SNSC's counter-blockade speaks to hardliners and a home front the regime needs to look strong before, while the president's off-ramp speaks to a diplomatic exit and an economy Ghalibaf himself conceded last week is straining under inflation and a sliding rial. Under the multi-clock framework the negotiation-capacity clock moves without advancing — the off-ramp language recurs but stays conditioned on compensation and a return to the lapsed MoU, and there is still no US counterparty to test it. Analytical judgment: the divergence inside Tehran is the intelligence. A government that escalates at sea while its president talks de-escalation is either sequencing pressure before a bid or papering over a genuine split; either way, the maritime track — not the presidential rhetoric — is what is moving on the ground.",
    },
    {
      title: 'Taiwan: a formalized zone on the strait its buffer must bridge',
      body:
        "Per §3.5.10 no development aimed at Taipei landed on Day 193, but Iran's move to declare a restricted zone sharpens the exposure by adding a legal chokehold to the physical one on the strait through which roughly a third of Taiwan's LNG transits (Washington Times, Al-Monitor). The financial clock still points to the same fortnight: the major-Chinese-bank sanction that would rupture the oil-for-money channel stays pinned behind Xi Jinping's September 24 visit, and the IAEA's access question — Grossi now says the agency is 'completely blind' — sits the same window (Fortune, Al Jazeera), so late September again decides both whether Washington fires its economic D-Day and whether Taiwan's gas buffer is still intact when it does. Per §3.5.5 the arithmetic is unchanged: 95-99% import dependence, roughly a third of LNG through Hormuz, about eleven days of gas cover against some 120 of oil (CSIS). Analytical judgment: a declared Iranian zone that blacklists vessels and voids their insurance is exactly the kind of legal-plus-kinetic friction that keeps a cargo from sailing even when no missile is fired — the buffer was built to bridge a closure, and a formalized restricted zone approximates one without a single additional shot, in the month Taipei said its cover runs out.",
    },
  ],
  casualtyNotes: {
    us:
      "Headline holds 17 KIA / 432 WIA (AP/CENTCOM combat series). DoD DCAS holds 18 killed / 687 wounded all-cause — a wider scope, not a confirmed new combat death; per §3.5.3 keep the combat series and flag DCAS. A sixth quiet day for US casualties: Iran's weekend ballistic-missile fire at US warships was evaded per CENTCOM, and the US struck three Iranian tankers in reprisal, destroying one, with no US casualty reported. Iran's earlier claim of American service members killed stays denied and uncounted; Trump's 'per ship' rule stays untriggered. Exposure rose in kind, not degree — Rezaei's coming restricted zone would blacklist and interdict shipping across the corridor CENTCOM escorts. The blockade holds at ~86 vessels rerouted, three disabled, two boarded; the escort convoy (~660M+ barrels / ~1,300 vessels since May, ~8-9 mb/d) runs amid live fire with the USS George Washington on station. The $67B supplemental and 50-48 rebuke stay unresolved in recess ahead of the November midterms.",
    israel:
      "Iran-front casualties hold at 56 KIA / 8,652+ WIA; no new Israeli toll. Israel stayed offstage on the US-Iran maritime and narrative fight while its Gaza campaign held deadlocked and lethal — the Board of Peace insists on no Israeli withdrawal before Hamas disarms, Hamas conditions any move on withdrawal and reconstruction, and Netanyahu's office opposes the plan (a connected theater, not folded into the war cumulative; 1,100-1,200+ killed since the October 2025 ceasefire). The weekend's Lebanese dead are logged under 'other.' Per §3.5.6 the Lebanon-gap and Israeli-independence priors hold.",
    iran:
      "Official MOH war toll carries pending an update; no new war-front count from the weekend's naval exchange, and casualties from the one Iranian tanker the US destroyed are unreleased. The day's movement was on the rights thread, kept out of the war toll per §3.1: Amnesty counts at least 26 protesters executed since the January 2026 unrest — 23 in the four days to August 26, about one every four hours — with 60-plus at risk including three arrested as children, and the UN's Türk warning the death penalty is being used to instil fear. The Sep 1 Kuhestak wedding strike stays independently corroborated as a US-released bomb, but the toll — up to five killed, 68+ wounded — remains an Iranian-source count not folded into the MOH aggregate; Sep 1 military casualties stay unreleased. HRANA 3,636+; Foundation ~3,468; MOH ~3,559 / 27,400+; est. 6,000+. IAEA says it has been 'completely blind' for more than a year; ~440.9 kg 60% + ~184.1 kg 20% HEU likely at Isfahan (§3.5.3).",
    other:
      "The spillover ledger added no verified fatality on Day 193: Iran's missile fire at US warships was evaded and the US tanker strikes produced no released casualty figure. On the Iran front the interceptors and ship evasions held; the weekend saw the US destroy one Iranian tanker (crew casualties unreleased) and Iran claim hits on US-linked vessels. Per §3.5.3 the Houthi Saudi-warship claim, the UAE-missile threat and Iran's downed-MQ-9 claims stay logged, not counted. Hormuz throughput near a fifth of pre-war flow with four-to-six vessels a day (many AIS-dark); Iran's declared restricted zone would sharpen the squeeze; the Houthi blockade still threatens the Yanbu pipeline reroute; war-risk premiums multiples above normal; the Iran-Oman corridor stays clouded by fire. The Lebanon reprisal cycle carries (Health Ministry cumulative ~4,265 / 12,190+, Wikipedia 3,371 / 10,129 lags); Bab al-Mandeb Tihamah (Aug 12) holds at least 6 killed / 10 wounded; maritime toll ~19 damaged / 7 abandoned / 2 captured / ~18 seafarers killed or missing; Mokha shut, ~1,300 idled; Kuwait 10/115; Iraq 148+/402+; Saudi 11 injured (Aug 7).",
  },
};

export default data;
