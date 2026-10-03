import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'escalating',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "Direction returns to ESCALATING after one day at mixed, and it does so without a trigger event. The Flydubai casus belli closed officially and closed away from Tehran: the UAE's own prosecutor named a lone attacker and a cockpit crash axe, and Israeli officials said he acted alone. Escalation nonetheless advanced on deliberation — six American principals at Camp David, a president offering Iran \"the easy way or the hard way\", a defense secretary \"hell-bent\" with every option available, and a source in Tehran saying the assessment there is that the war is resuming.",
      risk7d:
        "Extreme holds and its content shifts from incident to calendar. With the attribution withdrawn there is no live trigger, but the Roosevelt strike group and Makin Island amphibious group still arrive by end-October, Bessent's horizon for Iran having nothing left to trade falls around 12 October, and the Old Bailey hearing on the Manchester plot is set for 23 October. Two more hulls were struck in the strait. Saudi Arabia is reported to be preparing a wider Houthi offensive with American support, which would open a second front inside the window.",
      spillover:
        "Critical holds and the Yemen theatre becomes its centre. A government spokesman claimed 700 Houthi fighters killed in 257 operations in a single day, unverified and uncountered; the Houthis claimed an Aramco facility south of Riyadh; Saudi forces struck Sanaa 26 times. One cycle after Medina's Taibah station, the ladder has reached the kingdom's oil company at its capital. Britain charged two Iranian nationals over the alleged Manchester plot, and Portugal opened a legal probe into American use of Lajes Air Base — an allied domestic challenge to the basing architecture itself.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'de-escalating',
      importance: 'pivotal',
      source: 'Euronews / RTE / Jerusalem Post',
      event: 'The UAE closes the Flydubai file on a crash axe and a lone attacker',
      summary:
        "UAE Prosecutor General Hamad Saif al-Shamsi said the Flydubai co-pilot used a crash axe — a cockpit emergency tool — against the captain and attempted to carry out a terrorist attack, naming him as Hamam al-Hammami, an Omani national born in the UAE who had worked for Oman's national airline. The prosecutor said the investigation continues \"to uncover all the circumstances of the incident, its motives, and related connections\". Israeli officials said he acted alone. Captain Smit Machchhar, an Indian national, survived and said from hospital in Saudi Arabia: \"I was fighting for my life.\"",
      impact:
        "The attribution-withdrawal prior opened on Day 218 is confirmed within one cycle, and confirmed by the investigating state rather than by a leak. Per §3.5.3 the claim now unsupported is Day 217's — a president answering \"yes\" on an Iranian link and promising Iran would be \"hit, very hard\". No Iranian connection appears in the official findings. Logged as a casus belli extinguished, not merely contested.",
    },
    {
      id: 2,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'CBS News / Iran International',
      event: 'Six principals meet at Camp David and every American signal points back to fighting',
      summary:
        "Vice President JD Vance, Secretary of State Marco Rubio, Defense Secretary Pete Hegseth, Special Envoy Steve Witkoff, CIA Director John Ratcliffe and Joint Chiefs Chairman Dan Caine met at Camp David on Friday to discuss the Iran war and the Saudi-Houthi conflict. Trump said Iran had been \"decimated\" and faced a choice between \"the easy way or the hard way\", and claimed Iran \"is virtually giving up any plans of a nuclear weapon\". Hegseth said the administration is \"hell-bent\" on preventing an Iranian weapon and that Trump would have every military option available, while acknowledging Iran is rebuilding damaged infrastructure.",
      impact:
        "Escalation advanced on deliberation in the same cycle the trigger dissolved, which is why direction returns to escalating without an incident. Per §3.5.3 the president's \"virtually giving up\" is a claim from a principal whose own defense secretary described Iran as rebuilding on the same day, and the two cannot both be fully true. Cheung's ~90% inflation figure is the rare case where a White House talking point is corroborated by Tehran's own statistics.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'pivotal',
      source: 'The National / Al Jazeera',
      event: 'The offer acquires disclosed terms, and the obstacle is sequencing',
      summary:
        "A source in Tehran said \"assessments in Iran are that the war is resuming\" while \"the door to diplomacy remains open and has not been closed\". Araghchi said Iran would fight even an \"apocalyptic\" war. The architecture was described for the first time: Iran proposed transferring its 60% enriched uranium stockpile to a third party through phased dilution under IAEA mechanisms, alongside a seven-day plan on reopening the strait; the American counterproposal is one Iran appears unlikely to accept; and the sides are deadlocked on order, Tehran wanting concrete American steps first and Washington wanting the strait reopened first. A US official separately called the talks \"constructive\", with nuclear issues delaying a deal.",
      impact:
        "The addressee-not-owner prior is partly retired: terms are on the record for the first time in 219 days, even if sourced to an unnamed official rather than a principal. It is replaced by a sequencing prior. A deadlock over who moves first is cheaper to break than one over substance, which is why the probability eases a single point rather than falling, and why \"constructive\" and \"resuming\" can both be accurate descriptions of the same impasse.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'pivotal',
      source: 'Al Jazeera / Arab News',
      event: "Yemen produces the war's bloodiest claimed day, from one belligerent only",
      summary:
        "Colonel Majed Abdullah al-Nazili, spokesman for Yemen's internationally recognised government forces, said 257 precision operations on Saturday used warplanes, drones, artillery, missiles and rocket launchers to kill approximately 700 Houthi fighters on initial estimates and destroy 170 combat vehicles, across Sanaa, Midi, Baqim and fronts in al-Jawf, Marib, al-Bayda, Lahij and Taiz. The same spokesman said nearly 500 operations killed or wounded 1,540 in the 24 hours to 2 October. No independent verification accompanied either claim and no Houthi counter-claim was published. A baby was killed by shrapnel at Dhubab and the al-Houban crossing at Taiz was closed. Colonel Abdul Basit Al-Baher called it \"an invasion of Taiz\"; the International Crisis Group's Ahmed Nagi said the Houthis were seeking to cut the Taiz-Aden highway.",
      impact:
        "Nothing is adopted into the ledger and the non-adoption is the finding. Day 218 adopted +80 because both sides reported the same engagement separately; today one belligerent reports 700 killed with no verification and no counter-claim, and the two days' own figures are internally inconsistent — 1,540 killed or wounded from ~500 operations against 700 killed from 257. The claimed-attribution prior governs: the claim is recorded in full and the cumulative series holds.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: 'CBS News / Iran International',
      event: 'The Houthis answer Medina by claiming Aramco at Riyadh',
      summary:
        "Houthi forces claimed an attack on an Aramco oil facility south of Riyadh on Saturday, with flames and smoke visible; the cause of the fire was not independently established. Saudi forces struck Sanaa with 26 reported airstrikes. Yemen was on the Camp David agenda, and Saudi Arabia is reported to be preparing a wider Houthi offensive with American support. Day 218 recorded the coalition's \"confirmed\" attribution of the strike on Medina's Taibah station supplying the Prophet's Mosque.",
      impact:
        "The second-chokepoint prior hardens again. In one cycle the target set moved from infrastructure serving Islam's second holiest site to the kingdom's oil company at its capital, which is the class of target that forces a response rather than permitting absorption. Riyadh's seventeen-day silence on the 19 September capital strike becomes harder to sustain if a reported offensive is already in preparation.",
    },
    {
      id: 6,
      direction: 'de-escalating',
      importance: 'high',
      source: 'ProtoThema / CNBC / Rigzone',
      event: 'The G7 release meets the market and the week gives back its gain',
      summary:
        "Brent fell to $99.25 a barrel, down roughly 3% on Friday and about 4.7% on the week; WTI fell to $88.92, down more than 4% on the day and about 3.7% on the week; European gasoil fell to $1,386.75 a tonne, down about 4.3%. The International Energy Agency reported 325 million barrels of the 400 million promised in March have been released so far. Barclays raised its fourth-quarter 2026 Brent forecast to $115 citing inventory declines and physical tightness; a Reuters poll put the 2026 average forecast at $89.05, and Brookings held Brent could reach $120 to $150 if restrictions persist.",
      impact:
        "The downstream-bottleneck prior passes its delivery test on price if not yet on physical diesel: the Day 218 watch item asked whether Brent would give back the 4.4% it gained, and it gave back 4.7%. The 325-of-400 figure is the first quantification this series has carried for the incomplete March drawdown, and it means the IEA has roughly 75 million barrels of unfinished March business alongside the new 100 million.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'high',
      source: 'Arab News / Iran International',
      event: 'Two more hulls struck, and Iraq runs two million barrels through in one vessel',
      summary:
        "UK Maritime Trade Operations reported two oil tankers struck by unidentified projectiles in the Strait of Hormuz; one was hit on Saturday about four nautical miles east of Oman with all crew reported safe, and Friday's vessel suffered a small fire and a blackout but continued under way. IRGC-linked Fars News reported that two tankers had \"exploded\" and claimed they had disabled their tracking systems — a framing the UKMTO advisories do not use. Separately, Iraq moved two million barrels of crude through the strait aboard a very large crude carrier, reported as the first operation of that scale in decades.",
      impact:
        "The claimed-attribution prior gets its cleanest divergence yet: a maritime authority reporting unidentified projectiles against a state-linked outlet reporting explosions and disabled tracking, which are different claims about who was targeting what. The VLCC run cuts the other way and belongs in the unmeasured-strait prior — the strait is being used at a scale unseen in decades in the same week five hulls were hit.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'medium',
      source: 'Al Jazeera / Al-Monitor / NCRI',
      event: 'Britain names a third party "who may be in Iran"; Portugal opens a legal front',
      summary:
        "Rahman Salehi, 34, and Salam Ahmadyan, 36, were charged with preparing or assisting an act of terrorism in Manchester on or before Yom Kippur, remanded without plea ahead of an Old Bailey hearing on 23 October. Police alleged they \"tried to acquire components and equipment to make an improvised explosive device and conducted reconnaissance\", and were \"in contact with an overseas third-party who may be in Iran\". Takht-Ravanchi called the allegations \"false and ridiculous\". At Fairford the sixth suspect — reported as 25 against the 27 carried on Day 218 — was released on bail, the five earlier detainees released Monday under stringent conditions, with petrol but no weapons recovered. Portuguese prosecutors opened a probe into American use of Lajes Air Base after a Left Bloc complaint; Foreign Minister Paulo Rangel said the use complied with international law.",
      impact:
        "A §3.5.3 case in miniature: the police hedge is \"may be in Iran\", while the NCRI renders the same allegation as a third party that \"directed and coordinated\" the attack. This brief carries the police formulation. The NATO-territory prior now runs on two tracks — charges hardening on a civilian-community plot while the base case produces a sixth release — and Portugal adds a third, in which an ally's own courts, not Tehran, test the basing architecture.",
    },
  ],
  casualties: {
    us: {
      cumulative: 'KIA: 17 · WIA: 440 (AP/CENTCOM combat series)',
      delta: '+0 disclosed',
      status:
        "Nothing disclosed for a fourth cycle, recorded as an absence of disclosure rather than a lull per the series retired on Day 214. The Day 216 gap — the president's 18 against his Department's 18 killed and 756 wounded as of 21 August, and the at-least-19 against 861 this brief carries — went unanswered for a fourth day. DCAS 18 / 687 and The Intercept's 410 since 7 July carry unreconciled; El Gaia stays CONTESTED ATTRIBUTION. Two further hulls were struck with no disclosed American casualty. The end-October arrival and the ~20,000 figure carry; what moved was deliberation, with six principals at Camp David.",
    },
    israel: {
      cumulative: 'KIA: 56 (Iran-front 47 + Lebanon-front 9) · WIA: 8,652+',
      delta: '+0',
      status:
        "No new Israeli military fatality. The Flydubai captain's stab wounds and two hospitalised crew stay unattributed to the war, and the UAE's own prosecutor closed the question away from state direction — a named Omani co-pilot, a cockpit crash axe, an investigation continuing into motives and connections, and Israeli officials saying he acted alone. The captain, Smit Machchhar, survived. Britain charged two Iranian nationals over the alleged Manchester plot with police alleging contact with a third party who may be in Iran. Lebanon's separate ledger runs ~4,300+ killed and 12,200+ wounded, reconstruction above $27 billion, no withdrawal timeline, the Trilateral Framework the named vehicle. Twenty-three days to the 27 October vote.",
    },
    iran: {
      cumulative: 'MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+',
      delta: '+0 official',
      status:
        "No new official war toll and a twenty-fifth day without a confirmed Iranian launch against a host state, qualified by the disclosed 14 September maritime strike. The movement was diplomatic, financial and judicial: a Tehran source describing the proposed phased dilution of the 60% stockpile under IAEA mechanisms, the seven-day Hormuz plan, a counterproposal Iran appears unlikely to accept and a sequencing deadlock; Treasury's designation of the Russia-linked A7 Network; September inflation at 89.8% year-on-year against the 83.8% carried, with the euro past 3 million rials for the first time; and the execution of Siavash Jamshidi Kheirabadi over the January protests. The 4,200+ named protest-dead roster and the Fact-Finding Mission's 3,038 / 25,000 carry separately and are never merged.",
    },
    other: {
      cumulative: 'KIA: 3,678+ · WIA: 10,804+ (Yemen, Iraq, Gulf states, maritime)',
      delta: '+0 adopted',
      status:
        "Nothing adopted against the largest single-day claim this series has recorded, and the non-adoption is the entry. A government spokesman put 700 Houthi fighters killed in 257 operations on Saturday and 1,540 killed or wounded in ~500 operations the day before, with no independent verification, no Houthi counter-claim, and an internal inconsistency between the two days' ratios. Day 218's +80 was adopted because both sides reported it separately; this is not. A baby was killed at Dhubab and the al-Houban crossing closed. The Houthis claimed an Aramco facility south of Riyadh; Saudi forces struck Sanaa 26 times. Displacement holds above 145,000. Riyadh's silence on the 19 September capital strike reaches a seventeenth day.",
    },
  },
  exec:
    "The casus belli closed officially, and it closed away from Tehran. The UAE's Prosecutor General, Hamad Saif al-Shamsi, said the Flydubai co-pilot — named as Hamam al-Hammami, an Omani born in the UAE — used a cockpit crash axe against the captain in an attempted terrorist attack, with the investigation continuing into \"motives and related connections\"; Israeli officials said he acted alone. Day 217's presidential \"yes\" on an Iranian link now stands against a mediator state's own prosecutor. Both militaries nonetheless read resumption. Trump's national security principals — Vance, Rubio, Hegseth, Witkoff, Ratcliffe and Caine — met at Camp David on Iran and Yemen; Trump said Iran was \"decimated\" and faced \"the easy way or the hard way\"; Hegseth said the administration is \"hell-bent\" on preventing an Iranian weapon. A source in Tehran said \"assessments in Iran are that the war is resuming\" while \"the door to diplomacy remains open\", and disclosed the architecture for the first time: Iran offered to transfer its 60% stockpile to a third party by phased dilution under IAEA mechanisms, against an American counterproposal it appears unlikely to accept, deadlocked on sequencing. A US official separately called the talks \"constructive\". Yemen produced the war's bloodiest claimed day — a government spokesman put 700 Houthi fighters killed in 257 operations, unverified and uncountered — while the Houthis claimed an Aramco facility south of Riyadh and Saudi forces struck Sanaa 26 times. Brent fell to $99.25, giving back 4.7% on the week. Direction returns to escalating; seven-day risk extreme; spillover critical; the thirty-day probability eases 11 to 10.",
  implications: [
    {
      title: 'The casus belli closed and the war did not',
      body:
        "Day 218 opened the attribution-withdrawal prior on the proposition that a casus belli can dissolve as fast as it forms. One cycle later the dissolution is official: a mediator state's own prosecutor names the attacker, names the weapon as a cockpit crash axe, and records no Iranian connection, while Israeli officials say he acted alone. Per §3.5.3 the relevant claim to score is Day 217's — a president answering \"yes\" on an Iranian link and promising Iran would be \"hit, very hard\" — and it is now unsupported by the investigating authority. What did not happen is the inference. The same cycle put six American principals at Camp David, a president offering Iran \"the easy way or the hard way\", a defense secretary \"hell-bent\" with every military option available, and a source in Tehran saying the assessment there is that the war is resuming. Analytical judgment: under the multi-clock framework this separates the casus-belli clock from the political-will clock, which is the reverse of the usual coupling. Escalation no longer requires a trigger event because the trigger has been replaced by a calendar — the end-October arrival, the 3 November vote, and Bessent's roughly 12 October horizon for Iran having nothing left to trade.",
    },
    {
      title: 'The offer finally has terms, and the terms are a sequencing deadlock',
      body:
        "For 219 days this series has recorded an offer no American principal would describe. Today a Tehran source described it: a transfer of the 60% enriched uranium stockpile to a third party through phased dilution under IAEA mechanisms, a seven-day plan on reopening the strait, and a counterproposal Iran appears unlikely to accept. Quantified against the verification vacuum, that stockpile is the ~440.9 kg the IAEA has been unable to verify since the Panel of Experts mandate expired on 26 September — so the proposal addresses the one item the agency cannot see. The obstacle named is not substance but order: Tehran wants concrete American steps first, Washington wants the strait reopened first. Analytical judgment: the addressee-not-owner prior is partly retired — terms exist on the record — and replaced by a sequencing prior. A sequencing deadlock is cheaper to break than a substantive one, which is why the probability eases only one point rather than falling, and why a US official can call the talks \"constructive\" in the same cycle that a Tehran source calls the war resumed. The legislated strait cuts against it: a statutory transit veto is harder to trade than a practice.",
    },
    {
      title: 'Taiwan: no fresh development, and the day’s two energy signals point opposite ways',
      body:
        "No fresh Taiwan-relevant developments today; prior assessments are unchanged. The T$415 billion package — including T$233.8 billion into CPC against T$127.6 billion of accumulated losses — remains before parliament unvoted, the fuel-price freeze extended, and the Qatari and Emirati LNG return still placed in October. The day's two energy facts point opposite ways for an importer. Brent fell to $99.25 and gasoil to $1,386.75 a tonne, and the IEA disclosed that 325 of the promised 400 million barrels are out — relief that reaches Taipei through price even though it cannot reach it through membership. Against that, Barclays raised its fourth-quarter Brent forecast to $115 and Brookings put $120 to $150 if restrictions persist. Analytical judgment: the fiscal-buffer prior holds. A buffer sized against today's $99 looks adequate and against Barclays' $115 does not, and the legislature has not voted on either. Watch whether parliament moves before the Qatari cargoes are confirmed.",
    },
  ],
  casualtyNotes: {
    us:
      "The combat series holds at 17 killed and 440 wounded with nothing disclosed for a fourth cycle, and the president's 18 still sits unreconciled against his own Department's August database. Two more hulls were struck in the strait without a disclosed American casualty. What moved was decision-making rather than force health: six principals at Camp David, a defense secretary describing every military option as available, and a reported Saudi offensive with American support that would commit the theatre to a second front.",
    israel:
      "Iran-front casualties hold at 56 killed and 8,652+ wounded. The aviation injuries stay out of this ledger and the reason to keep them out is now the investigating state's own finding: a named Omani co-pilot, a cockpit crash axe, and an Israeli assessment that he acted alone. Lebanon's separate ledger carries above $27 billion in reconstruction need against a state its prime minister says cannot bear it. Twenty-three days to the 27 October election.",
    iran:
      "No new official Iranian war toll and a twenty-fifth day without a confirmed launch against a host state. The ledger's movement was economic and judicial: September inflation at 89.8% year-on-year, the euro past 3 million rials for the first time, food vouchers extended toward 44 million people, and the execution of Siavash Jamshidi Kheirabadi over the January protests. The monitors' own divergence on the 30 September pair carries from Day 218, unresolved by design.",
    other:
      "No adopted delta against a claim of 700 killed in a day, because one belligerent made it, no monitor verified it, and the Houthis published no counter-claim. The qualitative movement was the target set: one cycle after Medina's Taibah station, the Houthis claimed an Aramco facility at the Saudi capital and Riyadh struck Sanaa 26 times. Displacement holds above 145,000.",
  },
};

export default data;
