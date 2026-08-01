import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'critical',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction holds escalating and completes the loop the pause's collapse opened. Iran's pledged retaliation for the US 'heavy wave' landed Friday: Iranian state media said the Army struck the US-used Ahmad al-Jaber airbase in Kuwait with kamikaze drones as the twenty-seventh phase of 'Operation Sa'eqeh,' avenging the Qeshm Island home strike (Mehr, Press TV, Tribune India). Al Jazeera framed it as IRGC-led. Per §3.5.3 the exchange is now two-way and self-sustaining across Iranian soil and Gulf bases; Kuwait reported one killed but CENTCOM stayed silent, and the confirmed US KIA figure does not move until verified.",
      risk7d:
        "Seven-day risk holds critical. The retaliation the last two briefs flagged has materialized against a Gulf base, and the next move is Washington's counter; Trump's 'bridge or power plant per ship' rule converts any confirmed US or allied death into a pre-committed exchange (The Hill, CBS). Per §3.5.6 the structural priors carry — the strike cycle is self-reinforcing, Iran mirrors the US infrastructure threat, and the Pentagon is reported to be trimming its Kuwait footprint even as the base is hit (Palestine Chronicle). A verified American death at Ahmad al-Jaber is the dominant near-term risk and remains unconfirmed.",
      spillover:
        "Spillover holds critical. Brent eased from its $92 spike toward $88 but still booked a monthly gain above 20%, its biggest of the war, as US-Iran strikes and Hormuz tanker turn-backs kept the bid; the $150-200 dual-closure tail is one sinking away (CNBC, Trading Economics). The Hormuz fee clock runs toward a mid-August window expiry with Oman opposed to any mandatory charge (NBC News, Iran International), and the Houthi embargo of Saudi Arabia held at Bab el-Mandeb with cargoes diverting via Yanbu (Euronews, The National). The war now spans Iranian soil, Gulf bases and both maritime chokepoints at once.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: 'Mehr / Press TV / Tribune India / Al Jazeera',
      event:
        "Iranian state media said the Army struck the US-used Ahmad al-Jaber airbase in Kuwait with kamikaze drones on Friday morning — hitting fighter-jet hangars, satellite-communications systems and equipment warehouses — and called it the twenty-seventh phase of 'Operation Sa'eqeh,' retaliation for US strikes on Iranian soil including the Qeshm Island home where a couple and their child were killed. Al Jazeera framed the operation as IRGC-led.",
      summary:
        "Per §3.5.3 the pledged retaliation for the US 'heavy wave' has materialized on Gulf soil; the exchange is now two-way and self-sustaining across Iranian soil and Gulf bases.",
      impact:
        "The strike cycle no longer needs a fresh trigger; Washington's counter is the next question, and Kuwait and Bahrain stay on watch as recurring Iranian targets.",
    },
    {
      id: 2,
      direction: 'mixed',
      importance: 'high',
      source: 'The Hill / IranWire / Press TV / CBS',
      event:
        "Kuwait reported one person killed at Ahmad al-Jaber after the drone strike, unconfirmed by CENTCOM or Kuwaiti officials and of undetermined nationality. CENTCOM issued no confirmation and has previously dismissed Iranian claims that Americans were killed in Kuwait as propaganda, while Iran's forces said satellite imagery showed fresh damage.",
      summary:
        "Per §3.5.3 this is the war's most consequential unverified fact: Tehran asserts a successful strike and a death, Washington stays silent, and the confirmed US KIA ledger holds at 17.",
      impact:
        "A verified American death would trigger Trump's 'bridge or power plant per ship' rule; until confirmed the ledger does not move, and the claim-versus-silence divergence is itself the signal.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'CNBC / Trading Economics / Al Jazeera',
      event:
        "Brent crude eased from its $92 intraday spike toward $88 into the weekend but still closed out a monthly gain above 20% — its biggest of the war — as renewed US-Iran strikes and tankers turning back from the Strait of Hormuz sustained the war-risk premium.",
      summary:
        "Per §3.5.5 the pullback from $92 is profit-taking on an intact war, not de-escalation; the screen keeps the premium priced in.",
      impact:
        "The distance to the $150-200 dual-closure tail is unchanged — one laden-tanker sinking away; a nuclear-site or crew-death shock is the next repricing catalyst.",
    },
    {
      id: 4,
      direction: 'mixed',
      importance: 'high',
      source: 'NBC News / Iran International / Forbes / IER',
      event:
        "With the sixty-day toll-free window running toward mid-August, Iran's lead negotiator said the Strait of Hormuz will not return to pre-war conditions and Tehran will charge 'fees for services'; Oman's FM reiterated it does not support any mandatory charge, drawing a line between compulsory tolls and voluntary services such as navigational safety and environmental protection.",
      summary:
        "Per §3.5.3 process is moving against agreement: the fee's would-be broker still opposes the mandatory version, and the toll-institutionalization prior (§3.5.6) lacks a sponsor as its deadline nears.",
      impact:
        "The most-developed diplomacy of the war heads into its deadline contested on four lines — Gulf-voluntary, Iran-mandatory, US-'illegal,' Oman-opposed — with no signature in view.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: 'CNBC / Euronews / The National / Gulf News',
      event:
        "The Houthi maritime embargo of Saudi Arabia held at Bab el-Mandeb, with missiles and drones deployed near the strait and Saudi cargoes still diverting; Riyadh has rerouted volumes through the Yanbu pipeline — Red Sea exports there surged to about 3.5 million bpd in June — even as it pledged to resume shipments and rejected the embargo.",
      summary:
        "Per §3.5.6 the second chokepoint remains a Houthi-Saudi war within the war, on Yemen's own ledger and beyond Tehran's to trade.",
      impact:
        "Roughly 12% of global seaborne oil transits Bab el-Mandeb; the embargo institutionalizes the disruption a Hormuz toll would have monetized, and no US-Iran outcome closes it.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 confirmed · WIA: 432 (AP/CENTCOM series; ~96% returned to duty)',
      delta: "+0 confirmed; Kuwait reports one death at Ahmad al-Jaber after Iran's drone strike, unconfirmed by CENTCOM and of undetermined nationality",
      status:
        "The toll holds at 17 KIA / 432 WIA on the AP/CENTCOM series. Iran's Army said its Friday drone strike on the US-used Ahmad al-Jaber airbase in Kuwait hit hangars, satellite-communications systems and equipment warehouses; Kuwait reported one person killed, but CENTCOM issued no confirmation and has previously dismissed Iranian claims of Americans killed in Kuwait as propaganda. Per §3.5.3 the claim is carried AS a claim and the US KIA figure does not move until confirmed — a verified American death is the single event that would trigger Trump's 'bridge or power plant per ship' rule. The three deaths that lifted the toll to 17 (one in northern Iraq, two at Muwaffaq Salti in Jordan) carry per Day 144; the $67 billion supplemental and the 50-48 Senate war-powers rebuke remain unresolved.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (Israel not a direct party to the US-Iran exchange)',
      status:
        "No new Israeli casualties. Israel remains outside the US-Iran framework and unbound by the Oman channel or any Hormuz corridor formula; its standing readiness to strike Iran again keeps a full-scale-campaign option live even as Washington runs the direct exchange. The Lebanon gap prior (§3.5.6) carries: operations against Hezbollah continue, the June 26 framework remains rejected, and cross-border fire persists with no ceasefire in sight.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,559 killed / 27,400+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta: 'No fresh official MOH toll as the exchange shifted to Gulf soil; the Qeshm Island civilian deaths and destroyed Jask desalination plant carry from Day 154',
      status:
        "No updated official Iranian toll issued as Iran's retaliation moved the exchange to a Gulf base. The Qeshm Island deaths — a couple and their child, cited by Tehran as the trigger for the Kuwait strike — and the Jask desalination plant destroyed on Day 154 carry. Cumulative HRANA stands at 3,636+ (1,221 military / 1,701 civilian / 714 unclassified) with its understatement caveat, Foundation of Martyrs ~3,468, MOH ~3,559 / 27,400+, and US and Israeli estimates run to 6,000+. The IAEA has run no verification since February 28 and remains locked out; ~440.9 kg of 60% and 184.1 kg of 20% HEU stay unverified and, per Grossi, likely still at Isfahan, with ISIS flagging enough HEU for up to ten weapons if further enriched.",
    },
    other: {
      cumulative:
        'Iraq 148+ KIA / 402+ WIA · Gulf 33+ KIA / 74+ WIA, of which Kuwait 10 killed / 115 injured (plus one unconfirmed at Ahmad al-Jaber, July 31) · Lebanon source-split: Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129',
      delta: 'One unconfirmed death at Ahmad al-Jaber after the Iranian drone strike; no confirmed new deaths; the Houthi embargo produced no reported crew fatalities',
      status:
        "One death was reported at Kuwait's Ahmad al-Jaber airbase after the Iranian drone strike, unconfirmed by CENTCOM or Kuwaiti officials and of undetermined nationality; the confirmed Kuwait baseline holds at 10 killed / 115 injured pending confirmation. The Houthi embargo of Saudi Arabia persisted with missiles and drones near Bab el-Mandeb and Saudi cargoes still diverting via the Yanbu pipeline, but no new crew fatalities were reported; a tanker-crew death or laden-tanker sinking remains the maritime tell most likely to reprice oil and trigger Trump's rule. Iraq holds 148+ KIA / 402+ WIA, and Lebanon stays source-split (Health Ministry ~4,254 / 12,190+ vs Wikipedia 3,371 / 10,129).",
    },
  },
  exec:
    "Day 155 brought Iran's answer, and it landed on Gulf soil. Iranian state media said the Army struck the US-used Ahmad al-Jaber airbase in Kuwait on Friday morning with kamikaze drones — hitting fighter-jet hangars, satellite-communications systems and equipment warehouses — calling it the twenty-seventh phase of 'Operation Sa'eqeh' and retaliation for the US strikes on Iranian soil, including the Qeshm Island home where a couple and their child were killed (Mehr, Press TV, Tribune India). Al Jazeera framed the attack as an IRGC operation; the divergence over which Iranian force acted matters less than that the pledged retaliation for the US 'heavy wave' has now materialized against a Gulf base. Kuwait reported one person killed; CENTCOM stayed silent, and it has previously dismissed Iranian claims of Americans killed in Kuwait as propaganda (The Hill, IranWire). Per §3.5.3 the confirmed US KIA ledger holds at 17 pending confirmation — the gap between Tehran's damage claim and Washington's silence is itself the story, and a verified American death is the one event that would trigger Trump's 'bridge or power plant per ship' rule. Markets kept the war premium on: Brent eased from its $92 spike toward $88 but still booked a monthly gain above 20%, its biggest of the war (CNBC, Trading Economics). The Hormuz fee fight sharpened toward the sixty-day window's mid-August expiry with Oman still opposed to any mandatory charge (NBC News, Iran International), and the Houthi embargo of Saudi Arabia held at Bab el-Mandeb. Direction stays escalating; seven-day risk critical; spillover critical; the thirty-day ceasefire probability slips to 10.",
  implications: [
    {
      title: "Iran's answer lands on Gulf soil — the strike cycle is self-sustaining",
      body:
        "Iran's pledged retaliation for the US 'heavy wave' arrived on Friday and, as the Day 154 watch-list forecast, it landed on a Gulf base rather than on contested territory. Iranian state media said the Army struck the US-used Ahmad al-Jaber airbase in Kuwait with kamikaze drones — hangars, satellite-communications systems, equipment warehouses — and cast it as the twenty-seventh phase of 'Operation Sa'eqeh,' explicitly avenging the Qeshm Island home strike (Mehr, Press TV, Tribune India). Al Jazeera attributed the operation to the IRGC; the force-attribution divergence is a claim-management detail, not the fact. Under the multi-clock framework the active-deadline clock has been overtaken by a self-sustaining exchange: the US heavy wave drew Iran's Gulf-base answer, and the next question is Washington's counter. Analytical judgment: per §3.5.3 the single most consequential fact — whether an American died — is exactly the one Tehran asserts and Washington will not confirm. Kuwait reported one killed; CENTCOM stayed silent and has before branded Iranian Kuwait-death claims propaganda (The Hill, IranWire). The confirmed US KIA figure therefore holds at 17, and the infrastructure ladder (§3.5.6) stays symmetric — Trump's 'bridge or power plant per ship' pledge against Tehran's mirrored threat to regional energy 'in which the United States has interests.' Two frays complicate the board: the Pentagon is reported to be scaling back its Kuwait footprint even as the base is hit (Palestine Chronicle), and the Senate again narrowly declined to curb Trump's war powers (CBS). A confirmed US death is the tripwire that has not, on the record, been crossed.",
    },
    {
      title: 'The energy-maritime board: a 20% month, a fee deadline, an embargo',
      body:
        "The market read Iran's Gulf-base strike the way it has read every escalation of this war — as a reason to keep the premium on. Brent eased from its $92 intraday spike toward $88 into the weekend yet still closed its biggest monthly gain of the war, above 20%, as renewed US-Iran strikes and tankers turning back from Hormuz sustained the bid (CNBC, Trading Economics, Al Jazeera). Analytical judgment: per §3.5.5 the tape is the cleanest gauge — the pullback from $92 is profit-taking on an intact war, not de-escalation, and the $150-200 dual-closure tail is still one sinking away. Two structural fights ran underneath. At Hormuz the fee clock is now the live deadline: with the sixty-day toll-free window running toward mid-August, Iran's negotiator said the strait will not return to pre-war terms and Tehran will levy 'fees for services,' while Oman's FM reiterated it does not support any mandatory charge — only voluntary services such as navigational safety (NBC News, Iran International, Forbes). Per §3.5.3 that is process moving against agreement, and the toll-institutionalization prior (§3.5.6) still lacks its own broker. At Bab el-Mandeb the Houthi embargo of Saudi Arabia held, with missiles and drones near the strait and Saudi cargoes diverting through the Yanbu pipeline even as Riyadh pledged to resume Red Sea exports (CNBC, Euronews, The National, Gulf News). The energy-infrastructure clock now runs on two straits at once — and only one of them is Tehran's to trade.",
    },
    {
      title: 'Taiwan: the LNG bill has become a visible wound',
      body:
        "For Taiwan the war has stopped being an abstraction on the import bill and started showing up in the numbers that bite at home. Landed LNG prices have run from about $10/MMBtu in February to roughly $17/MMBtu, and Taipei's spot reliance has been pushed to 60-65% after it lost oil-indexed Qatari volumes — with no cargoes received from Qatar or the UAE in April and May (OilPrice, CSIS). Analytical judgment: per §3.5.5 the structural exposure is now a live grid problem, not a forecast. Taiwan is 99% import-dependent for gas and drew about a third of its 23.6 Mt of LNG from the Gulf — nearly 8 Mt from Qatar — yet holds only about 11 days of gas inventory against roughly 120 days of oil cover; the Ras Laffan damage still caps about 17% of Qatar's LNG capacity under a force majeure that may run three to five years, and Taipei is locked into a 27-year QatarEnergy contract signed in 2024 (CSIS, Atlantic Council, OilPrice). The crude side cushions — about 60% of imports are now US-sourced — but the gas side has no such buffer, and the Hormuz 'fee-and-permission' regime taking shape would reopen the strait a third of Taiwan's gas crosses on Iranian-permission terms. Per §3.5.10 the fresh development is real and adverse: today's Gulf-base strike neither closes the gas gap nor removes the permission regime, and secured LNG runs only near-term while the statutory fourteen-day buffer is not due until 2027.",
    },
  ],
  casualtyNotes: {
    us:
      "Toll holds 17 KIA / 432 WIA (AP/CENTCOM series). Iran's Army says its Friday drone strike on Ahmad al-Jaber in Kuwait hit hangars and equipment stores; Kuwait reports one killed, unconfirmed by CENTCOM, which has before branded Iranian Kuwait-death claims propaganda. Per §3.5.3 the US KIA figure does not move until confirmed; a verified US death triggers Trump's 'bridge or power plant per ship' rule. $67B supplemental and 50-48 war-powers rebuke unresolved.",
    israel:
      "No new Israeli casualties. Israel stays outside the US-Iran framework and the Oman channel; the Lebanon gap prior carries — operations against Hezbollah continue, June 26 framework rejected, no ceasefire.",
    iran:
      "No fresh official MOH toll as the exchange moved to a Gulf base; the Qeshm civilian deaths and destroyed Jask desalination plant carry from Day 154. HRANA 3,636+; Foundation of Martyrs ~3,468; MOH ~3,559 / 27,400+; US/Israeli est. 6,000+. IAEA no verification since Feb 28; HEU unverified, likely Isfahan; ISIS flags enough for up to ten weapons if further enriched.",
    other:
      "One unconfirmed death at Ahmad al-Jaber after the Iranian strike; confirmed Kuwait baseline holds 10 killed / 115 injured. The Houthi embargo of Saudi Arabia produced no reported crew fatalities; Iraq 148+ KIA / 402+ WIA; Lebanon source-split. A tanker-crew death is the maritime tell.",
  },
};

export default data;
