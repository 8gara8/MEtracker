import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "The mediated channel delivered its first substantive American reply, and the reply changed the denomination of the deal. A US official set out that there would be no agreement unless Iran's nuclear programme is addressed, with sanctions relief and the release of frozen funds offered in exchange for nuclear progress and the sides \"still remain apart on the timing\" — a named American price where Day 212 produced only a refusal. Against that, Trump publicly denied offering anything, Tehran answered with threats to regional infrastructure and a floated exit from the non-proliferation treaty, and Washington exhausted the strategic reserve that has absorbed 215 days of closure. Direction holds MIXED because a concrete counter-offer and a deniable one are the same document.",
      risk7d:
        "Extreme holds. Ghalibaf's warning that \"in a region where we do not sell oil, no one will sell oil, and if our security is not ensured, no infrastructure will be safe\" lands on the same day the Strategic Petroleum Reserve reaches its lowest level since 1982 with the Energy Secretary saying another drawdown is unlikely. A vessel caught fire in the strait after a suspected projectile strike, Saudi Civil Defence issued and withdrew a Najran danger warning, and Iranian officials raised withdrawal from the NPT. The buffer against the next escalation is gone at the moment Tehran is describing what the next escalation would target.",
      spillover:
        "Critical holds and widens by jurisdiction. OFAC designated ten procurement targets operating from China, Hong Kong, Iran, Pakistan, Türkiye and — for the first time recorded in this series — Saudi Arabia, while Bessent explained why major Chinese firms remain spared. Wright publicly faulted European states for releasing \"only a fraction\" of pledged reserves, the first intra-coalition friction stated by Washington rather than inferred here. Qatar backed Lebanese sovereignty against Israeli annexation claims, Iraq began importing gasoline through Syria, and the UN envoy called the Yemen escalation \"unprecedented\".",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'pivotal',
      source: 'Al Jazeera / IRNA via Shafaqna / anews / Sunday Guardian / GlobalSecurity.org',
      event:
        "The American answer reaches the record through Qatar and re-links the strait to the nuclear file",
      summary:
        "Araghchi left New York saying \"whenever the Qataris have a response, they know how to get it to us\", after saying the mediators would \"present to the American side\" and that talks had taken \"a more serious form\". The substance came via a US official, not a podium: there would be \"no agreement unless Iran's nuclear programme is addressed\", with Trump prepared to relieve sanctions and release frozen funds in exchange for nuclear progress, and the sides \"still remain apart on the timing\". Iran's own plan had asked for frozen funds, sanctions relief and an end to the blockade within four to five days, with the strait reopening and nuclear talks beginning only on day seven.",
      impact:
        "The first concrete American counter-offer of the war, and the first time Washington has named a price it would pay rather than only a price it refuses. It is quoted in a currency Tehran did not put on the table: the proposal deferred the nuclear file until after the waterway reopened, and the answer front-loads it. Progress and delay arrive in the same envelope.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'Fox News / Khaleej Times / Al Jazeera liveblog',
      event: "Trump publicly denies the offer his own official described",
      summary:
        "Trump posted \"I offered them nothing\", denying any sanctions relief had been extended, and told reporters \"We're going to win. It's going to go pretty quickly\", that pump prices would fall after an American victory, and that \"Iran will not have a nuclear weapon ... They're failing very badly. That will be over with very, very soon.\" He said Operation Epic Fury would conclude very soon. Iran's Revolutionary Guards called him a \"big liar\".",
      impact:
        "Per §3.5.3 the counter-offer is now deniable at the precise moment Tehran would have to act on it. This is the Day 212 failure mode one rung higher: not an oral relay this time but an unowned one. Any Iranian acceptance would be an acceptance of terms the American president says do not exist.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'World Oil / US Department of Energy / The National / Bloomberg',
      event:
        "Wright releases the last 40 million barrels, taking the SPR to its lowest level since 1982",
      summary:
        "Energy Secretary Chris Wright ordered a further 40 million barrels released, completing a 172-million-barrel American contribution to the internationally coordinated drawdown begun on 28 February. The release is an exchange repaid with interest, returning roughly 200 million barrels over the following year, with bids due 6 October. On completion the reserve reaches its lowest level since 1982 against a statutory floor of 252.4 million barrels, and Wright indicated another drawdown is unlikely. He faulted allies directly: \"Several European member countries have released only a fraction of the crude oil and petroleum products they pledged.\" Gasoline remains above $4 a gallon and diesel above $6, a record.",
      impact:
        "The oil-reserve clock has run out. The instrument that absorbed 215 days of closure is spent five weeks before the midterms, so the next Iranian escalation lands on an economy with nothing left to release — and the complaint about European under-delivery is the first intra-coalition friction Washington has stated rather than this brief inferred.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'US Treasury / State Department / Al Jazeera / JNS / US News',
      event: "OFAC designates ten procurement targets across six jurisdictions, one of them Saudi Arabia",
      summary:
        "Treasury sanctioned ten individuals and entities operating from China, Hong Kong, Iran, Pakistan, Saudi Arabia and Türkiye for supplying weapons, components, electronics and dual-use items to Iran's Ministry of Defence and Armed Forces Logistics in support of ballistic-missile and UAV programmes, naming EC Mojo Technology Co Ltd of Hong Kong and Cavalier Dynamics for Technologies Company of Saudi Arabia. Bessent said Treasury \"will continue to target and disrupt those who provide material, technological, or financial support that allows the Iranian regime to sustain its terrorist enterprise\". On sparing major Chinese firms he said: \"We're giving everyone the opportunity to remedy bad behaviour. Why would I want to blow up the global financial system?\"",
      impact:
        "Per §3.5.6 the third-country-compliance prior acquires a partner jurisdiction: a Saudi-based entity is designated while Saudi crude keeps the Gulf export series at its wartime high. Bessent's own explanation is the clearest statement yet of the campaign's ceiling — the pressure stops where systemic risk begins, which is exactly where China sits.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: 'Fox News / Jerusalem Post / Middle East Monitor / Khaleej Times',
      event: "Tehran answers with threats to regional infrastructure and a floated exit from the NPT",
      summary:
        "Parliament Speaker Ghalibaf warned that \"in a region where we do not sell oil, no one will sell oil, and if our security is not ensured, no infrastructure will be safe\". IRGC spokesperson Hossein Mohebbi said \"the enemy knows that Iran is not after nuclear weapons\" and that American ability \"to sneak a small vessel through the Strait of Hormuz under cover of darkness to export, say, 100 or 200 barrels of oil does not mean the Strait is open\". SNSC Secretary Mohsen Rezaei said Trump is \"trapped in a quagmire where he can neither negotiate nor fight\", and Ebrahim Azizi warned of \"a day of regret\" for neighbours. Against Iranian officials raising withdrawal from the non-proliferation treaty, Kremlin spokesman Dmitry Peskov said Russia \"does not want Iran to quit\" it.",
      impact:
        "Per §3.5.6 the two-audience prior holds: Mohebbi denies a weapons programme while colleagues threaten the exit from the treaty that constrains one. The significant datum is Moscow's — Iran's closest partner publicly counselling against the one card Tehran has not yet played, which is evidence the threat is being taken as real rather than rhetorical.",
    },
    {
      id: 6,
      direction: 'mixed',
      importance: 'high',
      source: 'Reuters via Yahoo Finance / Bloomberg / Fox News / Al Jazeera',
      event: "The strait's measured number moves up again while the market prices recovery, not diplomacy",
      summary:
        "Reuters relayed Kpler data putting September Hormuz exports near 10 million barrels a day, roughly half of pre-war volumes — against the 7.4 million recorded on Day 214 and the 13-to-22 million range three US officials gave. Gulf crude exports reached 12.8 million barrels a day in September, the highest since February's 18.8 million, driven by Saudi and Emirati shipments; CENTCOM's ~2,000 assisted transits and more than a billion barrels carry. Brent's November contract settled at $105.04, down 0.23%, WTI at $92.24, down 0.36%, with Brent up roughly 16% across September. KCM Trade's Tim Waterer said the recovery \"still relies on workarounds such as ship-to-ship transfers\" that keep prices elevated, while PVM's John Evans questioned whether substantial relief was genuinely on offer.",
      impact:
        "Per §3.5.6 the no-arbiter prior widens once more: the American series moved 7.4 → ~10 million barrels a day with no American reconciliation published. Per §3.5.5 the barrels-not-geography prior holds — Brent slipped on export recovery while a counter-offer sat in the channel, so the market is still pricing liquefaction and hull availability rather than mediation.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'medium',
      source: 'Khaleej Times / Fox News / Al Jazeera liveblog',
      event: "The waterway stays kinetic through the mediation",
      summary:
        "UKMTO reported a vessel on fire after a suspected projectile strike in the Strait of Hormuz, crew safe and fire extinguished, with sounds reported at Qeshm Island. Saudi Civil Defence issued then withdrew a Najran danger warning. No US casualty was disclosed this cycle, recorded per the Day 214 retirement as an absence of disclosure rather than a lull.",
      impact:
        "Per §3.5.6 the claimed-attribution prior holds with no claim attached: a hull burned while both parties were exchanging documents, and neither the attacker nor the flag has been established. The mediation has not bought a pause in the strait, only in the rhetoric about it.",
    },
    {
      id: 8,
      direction: 'mixed',
      importance: 'medium',
      source: 'Israel Hayom / Al Jazeera / Khaleej Times / Iran Human Rights / UN',
      event: "Israel campaigns, the region reroutes, and the execution ledger is quantified",
      summary:
        "Netanyahu warned from an air-force base that enemies may attack before the 27 October election — \"Don't mess with us — not now, and not ever\" — while Gadi Eisenkot demanded the claim be verified; the IDF said it killed Hamas commander Azz al-Din Bik in northern Gaza. Qatar backed Lebanese sovereignty against Israeli annexation claims as Prime Minister Salam pressed for further implementation of the Israel deal. The Saudi foreign minister arrived in the United States. Iraq began importing gasoline through Syria under a three-month agreement and will resume Najaf-Iran flights in October. UN envoy Hans Grundberg met Houthi negotiators and called the escalation \"unprecedented\" and \"dramatic\". Iran Human Rights recorded 82 executions in August, three of them January protesters, and at least 532 verified in 2026 of whom 31 were protesters, only 12% officially announced.",
      impact:
        "A seventh consecutive day of Israeli absence from the channel deciding its own war, now with an electoral reason to be absent. Per §3.5.5 the internal ledger is the quantified one: 532 executions in nine months against 31 protest cases and an 88% unannounced rate means the state is scaling a capability it does not acknowledge, on the same calendar as the diplomacy.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 · WIA: 440 (AP/CENTCOM combat series)',
      delta: '+0 disclosed',
      status:
        "No US casualty was disclosed this cycle, recorded as an absence of disclosure rather than a lull per the series retired on Day 214. The Department's separate list of 861 wounded since 28 February against at least 19 deaths carries unreconciled with the combat series, as do DCAS 18 / 687 and The Intercept's 410 since 7 July. A vessel burned in the strait and a Najran warning was withdrawn, neither producing a disclosed American casualty. The Washington Post's four omitted deaths carry against an Army denial; El Gaia stays CONTESTED ATTRIBUTION; Lincoln strike-group force health carries with no relief rotation announced.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta: '+0',
      status:
        "A seventh consecutive day absent from the mediated channel, with nothing published on the Iranian proposal, the American counter-offer or the nuclear re-linkage. The day's output was electoral and operational: Netanyahu's air-base warning of a pre-election attack and Eisenkot's demand that it be verified, and the IDF's killing of Hamas commander Azz al-Din Bik in northern Gaza. Qatar backed Lebanese sovereignty against Israeli annexation claims while Salam pressed for further implementation without a withdrawal timeline. Katz carries unretracted; Lebanon's separate ledger runs ~4,300+/12,200+ with ~7,700 recorded violations of the 26 June framework. Twenty-seven days to the vote.",
    },
    iran: {
      cumulative: 'MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+',
      delta: '+0 official',
      status:
        "No new official war toll and no confirmed Iranian ballistic or drone attack on a host state since 8-9 September, a twenty-first day — qualified by the disclosed 14 September maritime strike. The day's Iranian output was declaratory: Ghalibaf's \"no infrastructure will be safe\", Mohebbi's denial of any weapons programme, Rezaei's \"quagmire\", and officials floating an NPT exit the Kremlin opposed. Iran Human Rights recorded 82 executions in August and 532 verified in 2026, 31 of them protesters. The 166 protesters facing death sentences, inflation at 83.8% and the rial at record lows carry. The Iran Human Rights roster of 4,200+ named protest dead and the Fact-Finding Mission's 3,038 / 25,000 carry separately and are never merged.",
    },
    other: {
      cumulative: 'KIA: 3,598+ · WIA: 10,804+ (Yemen, Iraq, Gulf states, maritime)',
      delta: '+0 adopted',
      status:
        "No fresh Houthi impact claim or Saudi interception was recorded this cycle, but UN envoy Hans Grundberg met Houthi negotiators and called the escalation \"unprecedented\" and \"dramatic\". The Mecca pact track and France's undetailed Yanbu deployment carry unchanged. The Day 209 Mocha and prison claims and the 19 September strike on the Saudi capital remain unanswered by Riyadh for a thirteenth day. Gulf crude exports reached 12.8 million barrels a day, the highest since February's 18.8 million, on ship-to-ship transfers. IOM records ~130,000 displaced since 1 August, 73 UN personnel detained, 22.3 million needing aid. Bab al-Mandeb is not formally closed.",
    },
  },
  exec:
    "⭐ The answer came back through the channel, and it changed the subject. Araghchi left New York saying \"whenever the Qataris have a response, they know how to get it to us\", and the American substance reached the record through a US official rather than a podium: no agreement unless Iran's nuclear programme is addressed, with sanctions relief and the release of frozen funds offered for nuclear progress, and the two sides \"still remain apart on the timing\". That is the first concrete American counter-offer of the war, and it is denominated in a currency Tehran never put on the table — its own plan asked for funds, sanctions and the blockade in four to five days, with nuclear talks starting on day seven. Trump then contradicted his own government in public, posting \"I offered them nothing\" while predicting \"we're going to win\" and that \"Iran will not have a nuclear weapon\". Washington exhausted its reserve on the day it raised its price: Energy Secretary Wright ordered a final 40 million barrels, completing a 172-million-barrel US contribution, taking the Strategic Petroleum Reserve to its lowest level since 1982 against a 252.4-million-barrel statutory floor, said another drawdown is unlikely, and faulted European states for releasing \"only a fraction\" of their pledges. Treasury designated ten procurement targets across six jurisdictions including Saudi Arabia, while Bessent explained sparing major Chinese banks — \"why would I want to blow up the global financial system?\" Tehran answered with Ghalibaf's warning that \"no infrastructure will be safe\" and a floated NPT exit the Kremlin opposed. Brent settled at $105.04, down 0.23%. Direction holds mixed; seven-day risk extreme; spillover critical; the thirty-day probability rises to 11.",
  implications: [
    {
      title:
        "A counter-offer is progress, and changing the denomination of the deal is a delay — both are true, and they now sit in the same envelope",
      body:
        "Day 214's gating question was whether anything came back through Qatar. Something did, and for the first time in this war Washington has named a price it would pay — sanctions relief plus frozen funds — rather than only refusing one. But the price is quoted for the nuclear file, and Tehran's proposal had deferred nuclear talks to day seven after the strait reopened. Per §3.5.3 both accounts stay interested. Analytical judgment: under the multi-clock framework the negotiation-capacity clock now carries substance rather than schedule, but the parties are bidding on different instruments, and Trump's \"I offered them nothing\" makes the counter-offer deniable at the moment Tehran would have to accept it. The thirty-day probability rises 9 → 11: a named price is worth more than a channel, and less than an acknowledged one.",
    },
    {
      title:
        "The oil-reserve clock has run out, and the coalition-cohesion clock is now audible in an American cabinet secretary's voice",
      body:
        "Wright's 40 million barrels complete a 172-million-barrel US contribution and leave the reserve at its lowest since 1982, against a 252.4-million-barrel floor and his own assessment that another drawdown is unlikely. The instrument that absorbed 215 days of closure is spent, with diesel above $6 a gallon and midterms five weeks out. Per §3.5.6 the no-arbiter prior widens again: Kpler now reads near 10 million barrels a day where Day 214 recorded 7.4, against the 13-to-22 range three officials gave. Wright's complaint that European states released \"only a fraction\" of their pledges is the first intra-coalition friction Washington has stated rather than this brief inferred. Analytical judgment: the energy-infrastructure clock turns critical not because Iran acted today but because the buffer is gone on the day Ghalibaf promised that no infrastructure will be safe.",
    },
    {
      title:
        "Taiwan: the secured window expires today, and the cushion that was holding crude prices down expires with it",
      body:
        "No fresh Taiwan-specific development was located this cycle; Taipei's May assessment that gas was secured \"through September\" lapses today with no published CPC or MOEA October assurance, and the ICIS slippage of Qatari and Emirati volumes into October carries from Day 214. The new fact is American. Taiwan is not an IEA member and has no coordinated drawdown to draw on, so the 172-million-barrel release has been an indirect subsidy to its import bill — and that subsidy ended today with no successor. Set it against the standing exposure: ~96% energy import dependence, roughly half of generation from LNG, ~11 days of reserve, ~35% of 2025 LNG from Qatar and the UAE. Analytical judgment: Taipei enters October with adequate molecules, a resupply date moving away from it, and a price floor that has just lost its prop.",
    },
  ],
  casualtyNotes: {
    us:
      "The headline combat series holds at 17 killed and 440 wounded with nothing disclosed this cycle. Per the prior retired on Day 214 that is reported as an absence of disclosure, not a lull: the twenty-six-day quiet run recorded through Day 213 contained the undisclosed 14 September cruise-missile strike that wounded eight Marines. The Department's own list of 861 wounded against at least 19 deaths still has not been reconciled with the combat series, and no reconciliation was published today.",
    israel:
      "Iran-front casualties hold at 56 killed and 8,652+ wounded with no new toll and a seventh consecutive day of absence from the mediated channel. The day's Israeli output was electoral — Netanyahu's pre-election attack warning from an air-force base and Eisenkot's demand for verification — and operational, with the IDF naming a Hamas commander killed in northern Gaza. Lebanon's separate ledger runs ~4,300+ killed and 12,200+ wounded; twenty-seven days to the 27 October election.",
    iran:
      "No new official Iranian war toll and a twenty-first day without a confirmed Iranian launch against a host state, qualified by the disclosed 14 September maritime strike. The quantified movement was internal: Iran Human Rights recorded 82 executions in August, six of them women and three of them January protesters, and at least 532 verified executions in 2026 of whom 31 were protesters, with only 12% officially announced and more than 500 further unverified reports. HRANA 3,636+ and the Iran Foundation ~3,468 carry alongside the official ~3,559; the 4,200+ named protest-dead roster and the Fact-Finding Mission's counts carry separately and are never merged.",
    other:
      "+0 adopted with no fresh Houthi impact claim or Saudi interception recorded. The UN envoy's characterisation of the Yemen escalation as \"unprecedented\" and \"dramatic\" is the first international-body assessment of that track this cycle. Riyadh has published nothing on the 19 September strike on its own capital or on the Day 209 Mocha and prison claims for a thirteenth day, while its foreign minister arrived in Washington and Gulf exports hit a wartime high of 12.8 million barrels a day on ship-to-ship workarounds.",
  },
};

export default data;
