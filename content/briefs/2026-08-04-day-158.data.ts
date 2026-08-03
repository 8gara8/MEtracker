import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds mixed. Trump said US-Iran negotiations would begin today to finalize a deal reopening Hormuz and ending Iran's nuclear threat, but Iran's FM spokesman Baghaei said there were no talks with Washington at all — only Oman talks on a temporary safe route that would not reopen the strait while US 'aggression' continues (CBS News, Al Arabiya, Times of Israel). Per §3.5.3 the deal is now denied in public by the counterparty it names. The kinetic pause held into a second day, which keeps direction off escalating; but the exchange has reversed three times before within days, so the shift stays mixed, not de-escalating.",
      risk7d:
        "Seven-day risk holds critical. Israel went to its highest state of readiness, the IDF assessing Iran would fire ballistic missiles even if it did not initially join a US strike and officials estimating Trump was close to ordering new and larger attacks (Haaretz, Jerusalem Post). Trump's 'last chance' framing re-arms the tripwire rhetorically even as the shooting stops; a resumption of the US-Israeli strike, a laden-tanker sinking, or a verified American death remain the dominant discrete risks over the week, and the mid-August toll-free deadline still looms.",
      spillover:
        "Spillover holds critical. A UKMTO incident about 20 nautical miles northeast of Khasab kept the Musandam maritime front kinetic even under the diplomatic pause, with crew and vessel reported safe (Gulf News). The Houthi embargo of Saudi Arabia held at Bab el-Mandeb, with Sunday strikes on Red Sea oil depots cutting traffic to about eleven vessels, and the US redirected 38 vessels enforcing the Iran-ports blockade. The war still spans Iranian soil, Gulf waters and both maritime chokepoints at once, and a strike pause closes none of the three.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'mixed',
      importance: 'pivotal',
      source: 'Trump / CBS News / CNN / NPR',
      event:
        "President Trump said US-Iran negotiations would begin today to finalize a deal reopening the Strait of Hormuz and ending Iran's nuclear threat, warning Tehran it had a 'last chance' to sign while insisting he was 'under no time constraint.'",
      summary:
        "Per §3.5.3 it is the Day 50 pattern holding into a second day — a presidential deal claim advanced ahead of any text, Iranian confirmation, or verification mechanism.",
      impact:
        "The kinetic pause held for a second day, keeping the infrastructure ladder holstered this week; but a pause the President can announce he can un-announce, and the 'last chance' line re-arms the tripwire.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'Al Arabiya / Times of Israel / Al Jazeera',
      event:
        "Iran's foreign-ministry spokesman Esmaeil Baghaei said there were no negotiations with the United States, only talks with Oman over a temporary safe route, and that an Oman agreement would not reopen the strait while US 'aggression' continued; Araghchi said the strait would never return to pre-war status.",
      summary:
        "Per §3.5.3 the counterparty Trump named denied the US channel on the day it was to begin, and restated the whole dispute inside the deal claim — 'reopen Hormuz' versus 'a route that does not reopen.'",
      impact:
        "The pause rests on a US-Iran track Tehran says does not exist; the mid-August toll-free deadline nears with Oman's joint-oversight proposal rejected and no broker both sides accept.",
    },
    {
      id: 3,
      direction: 'de-escalating',
      importance: 'high',
      source: 'CNBC / Trading Economics / Gulf News',
      event:
        "Brent crude fell 4.68% to about $83.82 and WTI dropped nearly 6% below $80, paring July's 20%-plus surge, after Trump said peace talks would resume; OPEC+ agreed to lift output 188,000 bpd from September.",
      summary:
        "Per §3.5.5 the roughly $6 Brent drop is the market pricing the pause as real de-escalation, compressing the ~$25 war premium toward $20.",
      impact:
        "The oil market is the day's clearest de-escalation vote, but it trades the pause, not the deadline; a resumed strike or a tanker sinking would reprice it back toward $120 fast.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Haaretz / Jerusalem Post',
      event:
        "Israel went to its highest state of readiness, the IDF assessing Iran would fire ballistic missiles at Israel even if it did not initially join a US strike, with Israeli officials estimating Trump was close to ordering new and possibly larger attacks.",
      summary:
        "Per §3.5.6 Israel is formally holding to the pause but bracing for its collapse; it stays outside the US-Iran framework and unbound by the Oman channel.",
      impact:
        "Israel's alert level is trading the opposite of the oil market; its standing readiness keeps a full-scale-campaign option live the moment the deal claim breaks.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'medium',
      source: 'Gulf News / The Hill / CNBC',
      event:
        "A UKMTO incident about 20 nautical miles northeast of Khasab, Oman was reported with crew and vessel safe, while the Houthi embargo of Saudi Arabia held at Bab el-Mandeb with Sunday depot strikes cutting traffic to about eleven vessels and the US redirected 38 vessels enforcing the Iran-ports blockade.",
      summary:
        "Per §3.5.6 the maritime front stayed kinetic under the diplomacy and the second chokepoint runs on Yemen's own ledger; a US-Iran pause reaches neither.",
      impact:
        "Both chokepoints stayed contested at once; the pause did nothing for a laden LNG carrier taking fire mid-strait or for Saudi cargo turned back at Bab el-Mandeb.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM series; ~96% returned to duty)',
      delta:
        "+0 confirmed; the strike pause held a second day, so no fresh US kinetic action was taken; the lone Kuwait death stays denied by CENTCOM and unconfirmed",
      status:
        "The toll holds at 17 KIA / 432 WIA on the AP/CENTCOM series. The strike pause held into a second day, so no new US exposure was incurred and no fresh American death has been reported; the one death Kuwait reported at Ahmad al-Jaber remains unconfirmed, of undetermined nationality, and set against CENTCOM's claim that all drones and missiles were intercepted or failed. Per §3.5.3 the US KIA figure does not move — a verified American death is the single event that would trigger Trump's 'bridge or power plant per ship' rule. The US redirected 38 vessels enforcing the Iran-ports blockade; the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta:
        "+0 (Israel not a direct party to the US-Iran exchange); went to its highest state of readiness, bracing for Iranian missiles even if it stays out of a US strike",
      status:
        "No new Israeli casualties. Israel went to its highest state of readiness, with the IDF assessing Iran would fire ballistic missiles at Israel even if it did not initially join a US strike and officials estimating Trump was close to ordering new and possibly larger attacks (Haaretz, Jerusalem Post). Israel is formally holding to Trump's pause but stays outside the US-Iran framework and unbound by the Oman channel or any Hormuz formula, and its standing readiness keeps a full-scale-campaign option live if the deal claim collapses. The Lebanon gap prior (§3.5.6) carries: operations against Hezbollah continue, the June 26 framework remains rejected, and cross-border fire persists with no ceasefire in sight.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta:
        "No fresh official MOH toll; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154; Araghchi keeps the 'eye for an eye' posture and says the strait never reopens to pre-war terms",
      status:
        "No updated official Iranian toll issued on Day 158. The Qeshm Island deaths — a couple and their child, cited by Tehran as the trigger for the Kuwait strike — and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. Araghchi kept the hard line, calling the Iran-Oman track 'on the way to being finalised' while insisting the waterway would never return to its pre-war status. The IAEA has run no verification since February 28 and remains locked out of the Isfahan enrichment plant; ~440.9 kg of 60% and 184.1 kg of 20% HEU stay unverified and, per Grossi, likely still at Isfahan, with ISIS flagging enough HEU for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        'Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 74+ WIA, of which Kuwait 10 killed / 115 injured (plus one unconfirmed at Ahmad al-Jaber, denied by CENTCOM) · Lebanon source-split: Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129',
      delta:
        "No confirmed new deaths; a UKMTO incident off Khasab was reported with crew and vessel safe; the Houthi embargo produced no reported crew fatalities",
      status:
        "No confirmed new deaths on Day 158. A UKMTO incident about 20 nautical miles northeast of Khasab, Oman was reported with all crew and the vessel safe, so the Musandam maritime front stayed kinetic without turning lethal, and the Qatari-LNG carrier Gaslog Shanghai's weekend engine-room damage carries — a laden-tanker sinking or crew death remains the tell most likely to reprice oil and trigger Trump's rule. The Houthi embargo of Saudi Arabia held at Bab el-Mandeb, with Sunday strikes on Red Sea oil depots cutting traffic to about eleven commodity vessels; the confirmed Kuwait baseline holds at 10 killed / 115 injured. Iraq holds 148+ KIA / 402+ WIA, and Lebanon stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129).",
    },
  },
  exec:
    "Day 158 opened on the talks that Iran says are not happening. President Trump, having called off the weekend strikes, said negotiations with Tehran would begin today to finalize a deal reopening the Strait of Hormuz and ending Iran's nuclear threat, and warned Iran it had a 'last chance' to sign while insisting he was 'under no time constraint' (CBS News, CNN, NPR). Hours earlier Iran's foreign-ministry spokesman Esmaeil Baghaei had said there were no negotiations with the United States at all — only talks with Oman over a temporary safe route, which he said would not be enough to reopen the strait while US 'aggression' continued (Al Arabiya, Times of Israel). Foreign Minister Araghchi called the Iran-Oman track 'on the way to being finalised' but said the waterway would never return to its pre-war status, and Tehran rejected Oman's proposal for joint oversight (Al Jazeera, New Arab). Per §3.5.3 the deal Trump announced is now being denied, in public, by the very counterparty it names. The markets voted the other way: Brent fell 4.68% to about $83.82 and WTI dropped below $80, paring July's 20%-plus surge, as OPEC+ agreed to add 188,000 bpd from September (CNBC, Trading Economics, Gulf News). But Israel went to its highest alert, assessing Iran would fire missiles even if it stayed out of any US strike (Haaretz, Jerusalem Post). Direction holds mixed; seven-day and spillover risk hold critical; the thirty-day ceasefire probability holds at 11.",
  implications: [
    {
      title: 'The talks open on a day Iran says there are no talks',
      body:
        "Trump said US-Iran negotiations would begin today to finalize a deal reopening Hormuz and ending Iran's nuclear threat, and told Iran it was its 'last chance' to sign, though he added he was 'under no time constraint' (CBS News, CNN). The same day, Iran's foreign-ministry spokesman Esmaeil Baghaei said there were no negotiations with Washington — only talks with Oman on a temporary safe route — and that any Oman agreement would not reopen the strait while US 'aggression' continued (Al Arabiya, Times of Israel). Under the multi-clock framework the negotiation-capacity clock is doing two contradictory things at once: the Iran-Oman track is, by Araghchi's account, 'on the way to being finalised,' while the US-Iran channel that Trump's whole pause rests on is denied outright by Tehran (Al Jazeera). Analytical judgment: per §3.5.3 this is the Day 50 pattern holding into a second day — a presidential deal claim the named counterparty will not confirm and now actively contradicts. The standing prior is unretired: de-escalation announced ahead of verification has reversed within days three times in this war (§3.5.6). What keeps direction at mixed rather than escalating is that the kinetic pause held for a second day — no new US strikes, and Israel is still, formally, holding. But a pause the President can announce he can un-announce, and the 'last chance' framing re-arms the tripwire rhetorically even as the shooting stops. The deal exists in Washington's telling and not in Tehran's.",
    },
    {
      title: 'The market prices de-escalation; the deadline and Israel price the reverse',
      body:
        "The clearest vote on Day 158 came from the oil market, and it was bearish. Brent fell 4.68% to about $83.82 and WTI dropped nearly 6% below $80, unwinding part of July's 20%-plus surge, after Trump said peace talks would resume; OPEC+ added to the move by agreeing to lift output 188,000 bpd from September (CNBC, Trading Economics, Gulf News). Analytical judgment: per §3.5.5 the roughly $6 Brent drop is the market pricing the pause as real de-escalation — a war premium of about $25 over the pre-war baseline compressing toward $20. But the active-deadline clock and Israel are pricing the opposite. The sixty-day toll-free window still expires around mid-August, and Iran heads into it maximalist — rejecting Oman's joint-oversight proposal, insisting the strait never returns to pre-war terms, and having demanded through Ghalibaf the prior week control of both lanes (Al Jazeera, New Arab; §3.5.6). Israel, meanwhile, went to its highest state of readiness, the IDF assessing Iran would launch ballistic missiles at Israel even if it did not initially join a US strike and Israeli officials estimating Trump was close to ordering new and possibly larger attacks (Haaretz, Jerusalem Post). The maritime front stayed kinetic — UKMTO logged an incident about twenty nautical miles northeast of Khasab, crew and vessel reported safe — and the US redirected 38 vessels enforcing the Iran-ports blockade (Gulf News). The market is trading the pause; the deadline, the fee fight, and Israel's alert level are trading its collapse.",
    },
    {
      title: 'Taiwan: the pause helps the oil bill, not the gas gap',
      body:
        "For Taipei the day cut two ways. The Brent selloff is unambiguously good news for the import bill — roughly 60% of Taiwan's crude is US-sourced and every dollar off the barrel eases the current-account hit — but the molecule the war actually threatens is gas, and nothing on Day 158 touched it. Analytical judgment: per §3.5.5 Taiwan is 99% import-dependent for natural gas, and about a third of its 23.6 Mt of LNG transits Hormuz, nearly 8 Mt of it Qatari (CSIS, IFRI). That exposure is already realized: Taiwan received no Qatari or UAE cargoes in April or May, strikes on Ras Laffan cut roughly 17% of Qatar's export capacity, and Taipei has had to backfill with US LNG — deliveries jumped from about 200,000 t in March to a record 700,000 t in April, but at a premium and more exposed to global bidding (CSIS, OilPrice). The structural gap is unchanged: about eleven days of gas inventory against roughly 120 days of oil cover, with the statutory fourteen-day buffer not mandated until 2027. Per §3.5.10 a diplomatic pause and a five-percent oil drop do nothing for the gas buffer or for the fire-and-permission risk on the water — the same water where a Qatari LNG carrier took engine-room damage over the weekend. Taiwan's crude cushion is intact and just got cheaper; its gas position is exactly as thin as it was before Trump paused the strike.",
    },
  ],
  casualtyNotes: {
    us:
      "Toll holds 17 KIA / 432 WIA (AP/CENTCOM series). The strike pause held a second day, so no fresh US kinetic action or exposure; the lone Kuwait death stays denied by CENTCOM and unconfirmed. Per §3.5.3 the US KIA figure does not move until confirmed; a verified US death triggers Trump's 'bridge or power plant per ship' rule. US redirected 38 vessels enforcing the Iran-ports blockade; $67B supplemental and 50-48 war-powers rebuke unresolved.",
    israel:
      "No new Israeli casualties; Israel went to its highest state of readiness, bracing for Iranian missiles even if it stays out of a US strike, and estimates Trump close to new and larger attacks. It remains outside the US-Iran framework and the Oman channel; the Lebanon gap prior carries — operations against Hezbollah continue, June 26 framework rejected, no ceasefire.",
    iran:
      "No fresh official MOH toll; the Qeshm civilian deaths and destroyed Jask desalination plant carry from Day 154. HRANA 3,636+; Foundation of Martyrs ~3,468; MOH ~3,559 / 27,400+; US/Israeli est. 6,000+. Araghchi keeps the 'eye for an eye' posture and says the strait never reopens to pre-war terms. IAEA no verification since Feb 28; Isfahan enrichment plant access refused; ISIS flags enough HEU for up to ten weapons if further enriched.",
    other:
      "No confirmed new deaths; a UKMTO incident off Khasab was reported with crew and vessel safe, so the maritime front stayed kinetic without turning lethal. The Houthi embargo of Saudi Arabia held with Sunday depot strikes and traffic down to ~11 vessels; confirmed Kuwait baseline 10 killed / 115 injured; Iraq 148+ KIA / 402+ WIA; Lebanon source-split. A tanker-crew death is the tell.",
  },
};

export default data;
