import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction stays escalating because Day 142 crossed two thresholds at once. American service members are dying again: CENTCOM said two were killed in action and one is missing after Iranian ballistic missiles struck Muwaffaq Salti Air Base in Jordan, with four medevaced to Jordanian hospitals and since discharged — the first US combat deaths since fighting resumed and the first since March (CENTCOM, Axios, NBC News). Separately, Iran acknowledged attacks on its power infrastructure for the first time in the campaign, its Energy Ministry asking southern provinces 'experiencing extreme heat' to cut consumption (NPR/AP). Per §3.5.3 Mojtaba Khamenei's promise of 'unforgettable lessons' is rhetoric; the dead Americans and the darkened Iranian grid are facts.",
      risk7d:
        "Seven-day risk stays extreme, and the fuse may already have lit. Trump's ultimatum was that 'next week comes the power plants,' but Iran's own Energy Ministry has now conceded the grid is being hit — which matters because the named condition for Iran's standing order to the Houthis to close Bab el-Mandeb is precisely a US strike on the power network (FDD, NPR/AP). Tehran now either executes on a trigger it has publicly declared met or exposes the threat as leverage it cannot cash, and either resolution lands inside the week. Washington is meanwhile moving dozens of aerial refueling aircraft into the region, including to Israel, as wider strikes on power plants and nuclear sites are weighed (Times of Israel).",
      spillover:
        "Spillover stays critical and has widened past shipping into water supply and mediation itself. Kuwait's power and desalination plant was struck for a second straight day in a country that draws about 90% of its drinking water from desalination; Qatar — the mediator hosting the negotiation track — absorbed a missile barrage that wounded a child with falling debris; Jordan intercepted missiles before the airbase strike; and a strike near Irbil and Sulaymaniyah killed at least nine, apparently targeting the Iranian Kurdish group Komala (Fortune, Gulf News, NPR, Qatar Interior Ministry). Hormuz transits fell to eight vessels Thursday, a three-week low against 100-120 a day pre-war, while China called the blockade of Iranian ports a 'dangerous and irresponsible act' (MarineTraffic, Bruegel).",
    },
  },
  events: [
    {
      id: 1,
      direction: 'pivotal',
      importance: 'high',
      source: 'CENTCOM / Axios / NBC News / Air Force Times',
      event:
        "CENTCOM said two US service members were killed in action and one is missing after at least two Iranian ballistic missiles struck Muwaffaq Salti Air Base in Jordan, which hosts US troops and fighter jets; four more were medically evacuated to Jordanian hospitals and have since been discharged, with others treated for minor injuries and returned to duty",
      summary:
        "The first American combat deaths since fighting resumed, and the first since March. Axios places the war total at 16 killed; the AP series had 14 killed and 427 wounded before the strike, plus 13 injured since Monday (10 Army, three Navy) — a source split carried per §3.1.",
      impact:
        "For 141 days Washington fought without fresh coffins, and that absence was load-bearing. Casualties raise the domestic price of continuing while making withdrawal look like a concession bought with American lives — the political-will clock now leads the framework.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'high',
      source: 'NPR / AP / Iranian Energy Ministry',
      event:
        "Iran acknowledged 'attacks on power infrastructure' during the US airstrike campaign for the first time, with its Energy Ministry issuing a public call for reduced electricity use in southern provinces 'experiencing extreme heat'; the ministry did not specify what had been struck",
      summary:
        "Per §3.5.3 this is an admission against interest, which makes it the more credible kind of Iranian statement — Tehran has every incentive to deny grid damage, and conceded it anyway to manage load (NPR/AP).",
      impact:
        "Trump's fuse promised power plants 'next week'; Iran says the grid is being hit now. Because Iran's Bab el-Mandeb order to the Houthis is conditioned on exactly a US power-network strike, the trigger it declared may already be met.",
    },
    {
      id: 3,
      direction: 'escalating',
      importance: 'high',
      source: 'IRNA / France 24 / CENTCOM / NPR',
      event:
        "US strikes hit highway and railway bridges at Bandar Khamir in Hormozgan province, appearing aimed at severing Iran's main port at Bandar Abbas from the roads running inland to Tehran, and collapsed a tower at Chabahar port on the Gulf of Oman; Iranian authorities said at least 46 have been killed and more than 400 wounded in recent strikes, including eight in a Friday bridge strike",
      summary:
        "The Chabahar tower is contested per §3.5.3: IRNA says it oversees commercial traffic, while CENTCOM calls it part of an IRGC maritime surveillance network used to 'track and target' commercial vessels in the strait.",
      impact:
        "Cutting Bandar Abbas from its inland road and rail links is a logistics campaign, not a signalling one — it degrades Iran's ability to resupply the coast that sustains the counter-blockade, and it is hard to reverse quickly.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: 'Fortune / Gulf News / Asharq Al-Awsat / NPR',
      event:
        "Iran's retaliation struck the mediator and the region's water: a missile barrage on Qatar wounded a child with falling debris, Kuwait's power and water desalination plant was hit for a second straight day, Kuwaiti army facilities were struck by drones injuring personnel, Jordan intercepted three missiles, sirens sounded in Bahrain, and a strike near Irbil and Sulaymaniyah killed at least nine",
      summary:
        "Per §3.5.5 the water number is the story: roughly 90% of Kuwait's drinking water comes from desalination, so a second strike in two days on that plant targets civilian survival infrastructure, not military capacity. Qatar called the pattern a crossing of 'all lines.'",
      impact:
        "Striking Qatar while Tehran simultaneously sends a delegation to Oman is the command-authority gap operating in the open — the foreign ministry negotiates while the IRGC bombards the states hosting the negotiation.",
    },
    {
      id: 5,
      direction: 'mixed',
      importance: 'high',
      source: 'Times of Israel / CNN',
      event:
        "Supreme Leader Mojtaba Khamenei issued a written message saying the United States had repeatedly breached its commitments under the interim agreement, that the US president's signature is 'worthless and invalid,' and that Iran and the axis of resistance have 'unforgettable lessons' to offer; separately, ultra-hardliners accused Ghalibaf and Pezeshkian of plotting a 'coup' as the truce came under pressure",
      summary:
        "The first supreme-leader-level repudiation of the MoU's validity, which forecloses the legal fiction that the June 17 framework survives — yet an Iranian delegation still travelled to Oman to continue mediated talks (Times of Israel, CNN).",
      impact:
        "Iran is running repudiation and negotiation on parallel tracks. That preserves an off-ramp but removes the top-level authority any deal would need, which is the same structural gap that has voided every prior framework.",
    },
    {
      id: 6,
      direction: 'escalating',
      importance: 'medium',
      source: 'MarineTraffic / NPR / Trading Economics / CNBC',
      event:
        "Crossings through the Strait of Hormuz fell to just eight vessels on Thursday, a three-week low, as a tanker taking the Oman-coast route was attacked with minor damage and no injuries per the UK Maritime Trade Operations centre; Brent held above $86 a barrel near a one-month high, up more than 14% on the week",
      summary:
        "Per §3.5.5 the collapse is quantified: eight transits against 100-120 a day before the war, and against 14 the prior Sunday — the strait is not merely constrained, it is close to shut (MarineTraffic, NPR).",
      impact:
        "Oil at $86 still prices a contested single chokepoint, not the dual-closure tail modeled at $150-200. The gap between eight transits and an $86 tape is the market's bet that Bab el-Mandeb stays open.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 16 (Axios war total after Jordan) · WIA: 431 (AP series 427 + 4 medevaced) · 1 MIA',
      delta: '+2 KIA / +1 MIA / +4 medevaced-and-discharged (Muwaffaq Salti Air Base, Jordan, July 17)',
      status:
        "Two US service members killed in action and one missing after Iranian ballistic missiles struck Muwaffaq Salti Air Base in Jordan; four medevaced to Jordanian hospitals and since discharged, others treated for minor injuries and returned to duty (CENTCOM). First US combat deaths since fighting resumed. REVISION per §3.1: this brief realigns to the AP/CENTCOM series — 14 killed and 427 wounded before the Jordan strike, plus 13 injured since Monday (10 Army, three Navy) — which runs below the 15/543 cross-source compilation carried through Day 141. The wounded figure regresses because the series changed, not because casualties fell.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,649+',
      delta: '+0 (Israel not a direct party; IDF struck a Hezbollah cell near Tebnit in southern Lebanon)',
      status:
        "No new Israeli casualties. Israel remains outside the direct US-Iran exchange; the IDF said it struck a Hezbollah cell near Tebnit in southern Lebanon after identifying a Hezbollah drone. Washington is moving dozens of aerial refueling aircraft into the region including to Israel as Trump weighs wider strikes on Iranian power plants and nuclear sites.",
    },
    iran: {
      cumulative:
        'Foundation of Martyrs ~3,468 KIA · HRANA 3,636+ documented (1,221 mil / 1,701 civ / 714 unclassified) · MOH ~3,555 killed / 27,300+ wounded · US-Israeli est. 6,000+ · 3.2M displaced',
      delta: '+~8 killed (Iranian authorities: eight killed in a Friday bridge strike; 46 killed and 400+ wounded since hostilities resumed)',
      status:
        "Iranian authorities say at least 46 people have been killed and more than 400 wounded in US strikes since hostilities resumed, including eight killed in a Friday bridge strike. Figures are Iranian-source per §3.5.3. HRANA documents 3,636 (1,221 military / 1,701 civilian / 714 unclassified) and the Foundation of Martyrs confirms 3,468, while US and Israeli estimates run to 6,000+. Iran's Energy Ministry conceded power-infrastructure damage for the first time. ~440.9 kg of 60% HEU unverified since June 2025; Pickaxe Mountain still weighed.",
    },
    other: {
      cumulative:
        'Lebanon 3,371 KIA / 10,129 WIA (Wikipedia) vs Health Ministry ~4,254 / 12,190+ (source split); Iraq 128+ KIA / 370 WIA; Gulf 33+ KIA / 74+ WIA; plus merchant-mariner casualties from the Hormuz attacks',
      delta: '+9 killed / +~8 wounded (Irbil-area strike on Komala; a child wounded in Qatar; Kuwaiti army personnel injured by drones)',
      status:
        "A strike near Irbil and Sulaymaniyah in Iraqi Kurdistan killed at least nine and wounded others, apparently targeting the Iranian Kurdish dissident group Komala; Iran did not claim it but has targeted Komala before. Falling debris from an intercepted Iranian barrage wounded a child in Qatar, and Iranian drone attacks injured an unspecified number of Kuwaiti army personnel. A tanker on the Oman-coast route was attacked with minor damage and no crew injuries (UKMTO). Lebanon toll stays source-split.",
    },
  },
  exec:
    "Day 142 put American bodies on the ledger for the first time since March. CENTCOM said two US service members were killed and one is missing after Iranian ballistic missiles struck Muwaffaq Salti Air Base in Jordan, with four more medevaced to Jordanian hospitals and since discharged — the first US combat deaths since fighting resumed (CENTCOM, Axios, NBC News). The second break was quieter but larger: Iran acknowledged attacks on its power infrastructure for the first time, its Energy Ministry urging southern provinces 'experiencing extreme heat' to cut consumption, evidence that Trump's 'next week comes the power plants' fuse is already burning ahead of its own deadline (NPR/AP). US strikes hit highway and rail bridges at Bandar Khamir in Hormozgan, cutting Iran's main port at Bandar Abbas off from the roads to Tehran, and collapsed a tower at Chabahar port that CENTCOM called an IRGC network used to 'track and target' commercial vessels; Iranian authorities put the recent toll at 46 killed and more than 400 wounded, including eight in a Friday bridge strike (IRNA, France 24). Iran's answer struck the mediator: a missile barrage on Qatar wounded a child with falling debris, Kuwait's desalination plant was hit for a second straight day in a country drawing 90% of its drinking water from it, and a strike near Irbil killed at least nine (Qatar Interior Ministry, Gulf News, NPR). Hormuz transits fell to eight vessels Thursday, a three-week low, with Brent holding above $86 (MarineTraffic, Trading Economics). Supreme Leader Mojtaba Khamenei called the US president's signature 'worthless and invalid.' An Iranian delegation still flew to Oman. Direction escalating; thirty-day ceasefire probability eases to 6.",
  implications: [
    {
      title:
        'American deaths move the political-will clock to the front of the framework',
      body:
        "For 141 days the US fought this war without fresh coffins, and that absence was load-bearing. Day 142 ended it: two service members killed and one missing at Muwaffaq Salti Air Base, four medevaced, the first US combat deaths since fighting resumed (CENTCOM, Axios, NBC News). Under the multi-clock framework the political-will clock now leads. Trump told the country Thursday that 'we are likewise winning big in Iran, and you will see the fruits of that labor very, very shortly,' a claim that per §3.5.3 is an assertion from an interested party, not a verified assessment — and one that ages badly against a next-of-kin notification. The president campaigned against exactly this kind of open-ended Middle East war, and prior polling put only 24% of Americans on the side that it was worth the cost. Deaths cut both ways: they raise the domestic price of continuing and simultaneously make withdrawal look like a concession purchased with American lives. The narrow reading is that they harden the campaign, because retreat after casualties is the harder political act. Watch whether the missing service member is recovered, whether the Jordan strike draws a named retaliation, and whether Congress revives the war-powers fight unresolved since the Senate's 50-48 vote — the mechanism by which a casualty event becomes a policy constraint rather than a news cycle.",
    },
    {
      title:
        'The infrastructure war started early, and it is now hitting water and mediators',
      body:
        "Trump's fuse said 'next week comes the power plants.' Iran's Energy Ministry effectively confirmed this week that the grid is already being struck, asking southern provinces in extreme heat to cut consumption — the first Iranian acknowledgment of power-infrastructure damage in the campaign (NPR/AP). That matters beyond the target list, because the named condition for Iran's standing order to the Houthis to close Bab el-Mandeb is a US strike on the power network (FDD). Tehran now either executes on a trigger it has already declared met, or reveals the threat as leverage it cannot cash — and the energy-infrastructure clock resolves either way within days. Meanwhile the strikes on Bandar Khamir's highway and rail bridges are a logistics play, severing Bandar Abbas from the roads inland to Tehran, and the collapsed Chabahar tower removes what CENTCOM calls IRGC targeting infrastructure for the strait (IRNA, France 24). Iran's answer went the other direction, at civilians and at the referee: Kuwait's desalination plant hit two days running in a country 90% dependent on desalination for drinking water, Qatar — the mediator — barraged and a child wounded, at least nine killed near Irbil (Fortune, Gulf News, NPR). Striking the mediator while sending a delegation to Oman is not a contradiction Tehran has to resolve; it is the command-authority gap doing what it has done all war.",
    },
    {
      title:
        'Taiwan: eight ships through Hormuz, and the buffer is still eleven days',
      body:
        "The number that matters for Taipei this week is eight — transits through Hormuz on Thursday, a three-week low, against 100-120 a day before the war (MarineTraffic, NPR). Brent held above $86, up more than 14% on the week but still pricing a contested single chokepoint rather than the dual-closure tail modeled at $150-200 (Trading Economics, CNBC). The §3.5.6 exposure has not moved: roughly 60% of Taiwan's crude and about a third of its gas transit Hormuz, against an eleven-day LNG buffer — reaching the statutory fourteen days only from 2027 — versus about 120 days of oil cover, with Qatar supplying roughly a third of Taipei's LNG through the strait specifically. Two things sharpened this week. Qatar is now itself under Iranian fire, which puts the supplier and the route at risk simultaneously rather than sequentially. And China's position is no longer only rhetorical: with half its crude and nearly a third of its LNG imports crossing Hormuz, Beijing has called the blockade of Iranian ports a 'dangerous and irresponsible act' (Bruegel, Columbia CGEP). Taipei's hedges remain real and slow — US crude at about 60% of imports, gas secured through September, US LNG targeted at 25% of supply by 2029 (Atlantic Council, CSIS). None of that shortens an eleven-day tank farm inside a one-week fuse.",
    },
  ],
  casualtyNotes: {
    us:
      "Two killed in action, one missing, four medevaced and discharged at Muwaffaq Salti Air Base, Jordan — first US combat deaths since fighting resumed. Series realigned to AP/CENTCOM (14 KIA / 427 WIA pre-strike) from the 15/543 compilation carried through Day 141; casualty_revision flagged.",
    israel:
      'No new Israeli casualties. IDF struck a Hezbollah cell near Tebnit in southern Lebanon; US refueling aircraft moving to Israel ahead of possible wider strikes.',
    iran:
      "Iranian authorities: 46+ killed and 400+ wounded since hostilities resumed, including eight in a Friday bridge strike. Iranian-source, unverified. HRANA 3,636 (1,221 mil / 1,701 civ / 714 unclassified); Foundation of Martyrs 3,468; US/Israeli est. 6,000+.",
    other:
      'At least nine killed near Irbil and Sulaymaniyah in a strike apparently targeting Komala; a child wounded in Qatar by intercept debris; Kuwaiti army personnel injured by drones. Lebanon toll source-split; Iraq and Gulf baselines carry.',
  },
};

export default data;
