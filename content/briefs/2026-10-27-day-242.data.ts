import type { BriefData } from '@/lib/brief-data';

const data: BriefData = {
  escalation: {
    direction: 'mixed',
    risk7d: 'extreme',
    spillover: 'critical',
    rationale: {
      direction:
        "The sharpest military-readiness reporting of the war and the war's first real diplomatic mechanism landed on the same day. A 96-hour strike interval, three target classes and forces already in position sit against three states' defence and intelligence chiefs at a table in Tehran with Iran's security council, a published joint line, and Qatari mediators arriving in an effort coordinated with Washington. Neither cancels the other, so the direction is mixed rather than escalating for the first time in weeks.",
      risk7d:
        "A readiness interval measured in hours, a presidential choice framed as finishing the job or making a deal, an Israeli ballot today, the Fed on Wednesday, the senators' deadline on 2 November and the midterms on 3 November. The denial of a pre-election Israeli strike came from the defence minister, not the prime minister, and the reported instruction behind it was denied rather than explained.",
      spillover:
        "Egypt's parliament has authorised troops for Saudi Arabia, Kuwait has sentenced three men to death over an alleged Iran-linked plot, the coalition is striking storage tunnels inside Yemen, Riyadh's airport was claimed again days after reopening, and a vessel is burning 63 nautical miles off Iraq with no cause and no crew status.",
    },
  },
  events: [
    {
      id: 1,
      direction: 'escalating',
      importance: 'high',
      source: "Two American officials via CNN, relayed by VINnews; the Pentagon and the White House",
      event: "CNN puts a large-scale strike on Iran at 96 hours' readiness from a presidential order, against energy, military and nuclear target classes",
      summary:
        "CNN, citing two American officials, reported that a potentially large-scale attack could begin within 96 hours of an order from President Trump, against a Pentagon and CENTCOM target list covering Iranian energy infrastructure, military installations and nuclear-related facilities — broader than the earlier strikes on radars, launchers and other equipment. Forces already deployed across the region are reported positioned to execute it. Netanyahu reportedly urged Trump to authorise a joint operation before the midterms and Trump withheld approval; Israel postponed an immediate attack at Washington's request. Admiral Brad Cooper visited the Strait of Hormuz on Sunday. A senior official was quoted as saying the current situation cannot continue indefinitely. The White House declined to comment; the Pentagon said its responsibility is to prepare options.",
      impact:
        "The most specific strike-readiness reporting this file has carried, and still planning rather than decision. The planning-is-not-decision prior governs it: no approval, no tasking confirmed, and officials placing a confrontation after the midterms. Grade by tasking, munitions movement and carrier position, not by the interval.",
    },
    {
      id: 2,
      direction: 'pivotal',
      importance: 'high',
      source: "Prince Khalid bin Salman, Asim Munir, Ibrahim Kalin, Mohsen Rezaei and Rayed Krimly via Geo.tv, Press TV, The National and PBS NewsHour",
      event: "The Mecca Pact's defence chiefs meet Iran's Supreme National Security Council in Tehran — the war's first four-way session and its first mechanism since June",
      summary:
        "Saudi Defence Minister Prince Khalid bin Salman, Pakistan's Chief of Defence Forces Field Marshal Asim Munir and Türkiye's intelligence director Ibrahim Kalin met Supreme National Security Council secretary Major General Mohsen Rezaei and Foreign Minister Abbas Araghchi in Tehran on Monday, after meeting President Pezeshkian. The session was proposed by Pakistan. The reported joint statement said the four agreed to continue dialogue to strengthen cooperation among the four countries. Saudi deputy minister for public diplomacy Rayed Krimly wrote that the visit came as part of the Makkah Joint Defence Agreement countries' continued efforts, promoting dialogue and diplomatic solutions in support of the mediation efforts. Rezaei called the talks very good. No concrete commitment was announced and the United States was not present.",
      impact:
        "A venue, a date and named interlocutors — the three things every previous opening lacked. It converts Iran's single sentence about studying the Mecca Agreement into a session with the pact's defence chiefs, and it is why the 30-day probability moves 3 to 7 rather than holding at 3.",
    },
    {
      id: 3,
      direction: 'mixed',
      importance: 'high',
      source: "Esmail Baghaei and Qatari mediators via Iran International, PBS NewsHour and CBS News",
      event: "Qatari mediators reach Tehran in a US-coordinated effort while Iran says the window is open and the American demand is still complete surrender",
      summary:
        "Qatari mediators travelled to Tehran on Sunday 25 October in a de-escalation effort reported as coordinated with the United States. Foreign Ministry spokesman Esmail Baghaei said Iran had not closed the diplomatic window and that messages were passing through intermediaries, but that Washington keeps using the phrase complete surrender, which he said no Iranian accepts. He called Israel highly skilled at false-flag operations, said Iran would use its right to self-defence, and said of the Israeli ballot that it makes no difference to Iran who takes the helm of a regime. Qatar and Pakistan brokered the June agreement that collapsed. Putin will hold five bilateral meetings at the Gas Exporting Countries Forum in Moscow, among them Pezeshkian and Qatar's emir.",
      impact:
        "The mediator track is live and now has American coordination behind it, which is participation by proxy rather than absence. The ceiling on the probability is the stated American demand: complete surrender is not a position to negotiate from but the refusal of one.",
    },
    {
      id: 4,
      direction: 'escalating',
      importance: 'high',
      source: "Channel 12, Israel Katz, Gadi Eisenkot and Avigdor Lieberman via PBS NewsHour and CBS News",
      event: "Channel 12 reports a Netanyahu-army clash over an ordered action; the prime minister's office calls it fake news and Lieberman seeks a treason inquiry",
      summary:
        "Channel 12 reported on Monday that Netanyahu and the chief of staff had disagreed over an instruction to carry out an action the army feared could reignite the conflict with Iran. The prime minister's office called the report fake news. Defence Minister Israel Katz wrote that there has been no intention by Israel of initiating an attack on Iran before the elections, called reports of a rift between the political and military leaderships completely baseless and false, and said Israel would respond with great force if Iran attacked. Gadi Eisenkot told Netanyahu not to place his political interests above the security of the state and wrote that his eyes were on him. Avigdor Lieberman wrote to the attorney general demanding a criminal treason investigation. Netanyahu said Eisenkot will not strike Iran.",
      impact:
        "The institution-against-principal prior moves from assessment to accusation on the eve of a ballot. Two readings are held open: the report is wrong and the denials stand, or an order was issued and withdrawn under institutional resistance. The denial came from the defence minister, not the principal.",
    },
    {
      id: 5,
      direction: 'escalating',
      importance: 'high',
      source: "The Egyptian House of Representatives and Abdel Fattah el-Sisi via Al Jazeera and US News/AP",
      event: "Egypt's parliament authorises military support for Saudi Arabia, conditional on a request Riyadh has never published",
      summary:
        "The House of Representatives, chaired by Speaker Hisham Badawi, approved on Monday a mandate allowing President Sisi to take necessary measures to support Saudi Arabia in defending itself, applicable only if Riyadh requests assistance. Sisi said Egyptian action would be limited to protecting Saudi territory and borders and would not extend to attacking Yemen. No for, against or abstention counts were published, and whether the two-thirds constitutional threshold for combat deployments abroad was met is not established in the record; the Egyptian Social Democratic Party had instructed abstention. Nawaf Obaid of King's College London read the vote as Cairo saying it will be there. UN Secretary-General António Guterres urged maximum restraint. What Riyadh might ask for remains unstated.",
      impact:
        "The most significant widening of the coalition's manpower base in this file, and it is a conditional instrument answering a request that does not publicly exist. The declaration-without-content prior applies to the authorisation's scope; the spillover risk it creates does not wait for the content.",
    },
    {
      id: 6,
      direction: 'de-escalating',
      importance: 'high',
      source: "Brent and WTI futures, Vanda Insights and the IEA via Grafa, FinanceFeeds and CBS News",
      event: "Oil gives back part of the week's rally on the Tehran track, and the IEA warns the market may not normalise in 2027",
      summary:
        "At 0426 GMT Brent was down $2.21, or 1.89 percent, at $114.51, and WTI down $2.23, or 2.16 percent, at $101.04, after the previous week's gains of about 6 percent for Brent and 2.3 percent for WTI; CBS described Brent as hovering around $115. Vandana Hari of Vanda Insights said concerns over renewed hostilities that drove much of last week's rally have eased, and that the reprieve may prove temporary. IEA Executive Director Fatih Birol warned energy markets may not return to pre-war conditions in 2027 with Hormuz and Bab el-Mandeb still disrupted. Aramco and Singapore announced crude storage at the Jurong Rock Caverns from the second half of 2027. The Federal Reserve decides on Wednesday 28 October.",
      impact:
        "The first material downward move of this phase, and it priced diplomacy rather than supply. The flows-fine-price-high prior holds in reverse: nothing physical changed, so the two percent is a risk premium adjustment that the Fed decision and the 96-hour interval can both undo.",
    },
    {
      id: 7,
      direction: 'escalating',
      importance: 'medium',
      source: "UKMTO, CENTCOM and Kpler via Arab News Pakistan, CBS News and The Wall Street Journal",
      event: "UKMTO logs a vessel on fire off Iraq, CENTCOM prices its blockade at $25bn, and Kpler says Iran's floating reserve ran dry",
      summary:
        "UKMTO said on Monday it had received multiple third-party reports of a vessel on fire 63 nautical miles south-east of Al-Faw, Iraq, and that crew status, damage assessment and environmental impact were unknown at the time of report; the vessel was not named and no party was blamed. CBS logged it under suspicious activity and separately recorded that a tanker struck outbound on Friday 23 October was described by UKMTO as disabled by an unknown projectile, with the crew reported safe. CENTCOM says the American naval blockade has cost Iran at least $25 billion in oil revenue. Kpler, cited by The Wall Street Journal, says Iran's shadow-fleet floating reserves ran dry in mid-October. Iran's claim to have hit at least four tankers on Thursday remains uncorroborated.",
      impact:
        "A third chokepoint incident in a week, still unattributed. CENTCOM will publish an economic figure for the blockade while declining to assess the hull claims or reconcile the casualty series — the disclosure-is-a-choice prior, now demonstrated inside one command.",
    },
    {
      id: 8,
      direction: 'escalating',
      importance: 'medium',
      source: "The Saudi-led coalition and Yahya Saree via CBS News and PBS NewsHour",
      event: "Riyadh's airport is claimed again days after reopening, and the coalition publishes a strike tally inside Yemen",
      summary:
        "The Saudi-led coalition said it shot down three drones over Riyadh and southern Saudi Arabia, intercepted a ballistic missile aimed at Riyadh, and destroyed five tunnels storing ballistic missiles, four ballistic missile launchers and a missile storage unit in Houthi-held territory. The Houthis said they had targeted Riyadh's airport with a ballistic missile and struck oil pumping stations with drones; no Saudi official or independent source has confirmed a hit on oil infrastructure. Houthi spokesman Yahya Saree also claimed ballistic missiles against Saudi-backed government forces in Aden and Lahj, which the Associated Press could not verify. King Khalid International Airport reopened on Sunday after more than two weeks closed, and the kingdom's investment conference stands postponed to 2027.",
      impact:
        "The announced-restart-as-targeting-cue prior is live: the airport was claimed within a day of resuming flights. The coalition published a target tally and no damage figure for its own territory, holding the asymmetric-disclosure prior in place.",
    },
    {
      id: 9,
      direction: 'escalating',
      importance: 'medium',
      source: "Mohammad Bagher Ghalibaf, Mohammad Hashemi and the Kuwaiti judiciary via CBS News and the NCRI",
      event: "Gas rationing, lengthening drug-payment arrears and a gender-gap floor inside Iran, and three death sentences in Kuwait over an alleged Iran-linked plot",
      summary:
        "Parliament speaker Mohammad Bagher Ghalibaf called on Sunday for cutting gas consumption by at least 10 percent. Mohammad Hashemi of Iran's Food and Drug Administration, quoted by the state-run Rokna, said payment delays to drug suppliers have lengthened from about six or seven months to twelve or thirteen. Opposition-relayed readings of the World Economic Forum's Global Gender Gap 2026 place Iran 144th of 145 countries at a score of 0.585, with estimated earned-income parity down from 28.5 percent in 2006 to 16.3 percent in 2026. The NCRI states at least 48 prisoners were executed between 30 September and 13 October. A Kuwaiti court sentenced three Shia men to death for an alleged plot to assassinate the deputy prime minister in collaboration with Iran, with eleven others given five years' hard labour.",
      impact:
        "The internal front deepens without a war increment, and the second-order blockade prior now reaches medicine supply. The Kuwaiti sentences put an Iran-linked plot allegation into a Gulf court record for the first time in this file, which is a judicial rather than a military escalation.",
    },
  ],
  casualties: {
    us: {
      cumulative: "KIA: 17 · WIA: 440 (AP/CENTCOM combat series) · senators' figure: up to 23 KIA / 861 WIA",
      delta: "+0 disclosed",
      status:
        "A twenty-seventh consecutive cycle with nothing disclosed, recorded as an absence of disclosure rather than a lull. Senator Warren's 16 October letter to Admiral Brad Cooper carries unanswered with six days to the 2 November deadline, and CENTCOM published a $25 billion blockade revenue figure in the same cycle — the command will publish an economic number while the casualty reconciliation stays withheld.",
    },
    israel: {
      cumulative: "KIA: 58 (Iran-front 47 + Lebanon-front 11) · WIA: 8,679+",
      delta: "+0",
      status:
        "No addition on the war series on the morning of the ballot, with the military at its highest state of alert, leave cancelled, land crossings closed and a general West Bank closure in force for election day. The reported instruction behind the Channel 12 clash is denied rather than explained. Gaza deaths stay on their parallel series and are not merged.",
    },
    iran: {
      cumulative: "MOH official ~3,559 · HRANA 3,636+ · Iran Foundation ~3,468 · WIA 27,400+",
      delta: "+0 official",
      status:
        "No new official war toll, and the Konarak claims stay unadded. This is the forty-eighth day with no confirmed Iranian attack on a host state's territory. The NCRI's at-least-48 executions between 30 September and 13 October is held apart from the four unmerged execution series already carried and is not differenced against them.",
    },
    other: {
      cumulative: "KIA: 3,701+ · WIA: 11,186+ (Yemen, Iraq, Gulf states, maritime)",
      delta: "+0 adopted",
      status:
        "No addition adopted. The coalition's claimed destruction of five missile tunnels, four launchers and a storage unit inside Yemen carries no casualty figure; the Houthi claim against forces in Aden and Lahj is unverified by the Associated Press; the Al-Faw vessel's crew status is unknown; and the Kuwaiti death sentences are a judicial act, not a casualty.",
    },
  },
  exec:
    "CNN reported, citing two American officials, that a potentially large-scale attack on Iran could begin within 96 hours of an order from President Trump, against a Pentagon and CENTCOM target list covering energy infrastructure, military installations and nuclear-related facilities — wider than the earlier strikes on radars and launchers. No decision has been taken. Trump told Fox News: “I have a decision to make: Do I finish it off, which would be very easy to do, or do I make a deal? That's all.” Netanyahu reportedly urged authorisation of a joint operation before the midterms and was refused; Admiral Brad Cooper visited the Strait of Hormuz on Sunday; the White House declined to comment and the Pentagon said its job is to prepare options. On the same day the war acquired its first mechanism since June. The Mecca Pact's defence chiefs — Prince Khalid bin Salman, Field Marshal Asim Munir and Ibrahim Kalin — met Supreme National Security Council secretary Mohsen Rezaei and Foreign Minister Abbas Araghchi in Tehran at Pakistan's request, in the war's first four-way session; the joint statement said they “agreed to continue dialogue”. Qatari mediators arrived on Sunday in an effort coordinated with Washington. Baghaei said the window has not closed and messages pass through intermediaries, but that Washington still demands “complete surrender”. Brent fell 1.89 percent to $114.51. Egypt's parliament authorised military support for Saudi Arabia, conditional on a request Riyadh has never published. Channel 12 reported a clash between Netanyahu and the chief of staff over an ordered action; his office called it fake news, Katz denied any rift and Lieberman demanded a treason inquiry. Israel votes today. The 30-day ceasefire probability moves 3 → 7 on a mechanism, not a sentence.",
  implications: [
    {
      title: "A 96-hour clock and a four-way table arrived on the same day, and only one of them is new",
      body:
        "The military reporting is the sharpest this file has carried — a named readiness interval, three target classes, forces already in position — but it is still planning without decision. What is new sits on the other side of the ledger: a venue, a date and named interlocutors, the three things every previous opening lacked. Qatari mediators arrived the day before in an effort coordinated with Washington, which is American participation by proxy rather than American absence. The negotiation-capacity clock moves for the first time since June while the active-deadline clock worsens. Two constraints hold the probability at 7: the United States was not at the table, and the American demand is still complete surrender.",
    },
    {
      title: "The dissent in Jerusalem became a criminal allegation on the eve of the ballot",
      body:
        "The institution-against-principal prior has escalated from assessment to accusation. Day 240 recorded a chief of staff who saw no operational need to strike before the vote; Day 241 answered him with a campaign image; Day 242 reports an actual instruction and three denials, with Lieberman asking the attorney general for a criminal treason investigation. Eisenkot's line puts the serving chief of staff's position under public guard. Both readings are held: the report is wrong and the denials stand, or an order was issued and withdrawn under institutional resistance. American officials were separately concerned that striking before the Israeli vote could disrupt it, which makes Washington a restraint on Jerusalem's calendar rather than its driver.",
    },
    {
      title: "Taiwan: the war now shows up on a utility's balance sheet, not a tanker's manifest",
      body:
        "Taipower's accounting director-general Tang Hui-lien put this year's fuel-cost overshoot at NT$160 billion (US$4.92 billion) if gas prices hold, after a NT$71.1 billion rise from March to August, with power-sector gas up more than 70 percent since late February. Accumulated losses are expected to climb NT$70 billion to NT$420 billion, within NT$1.1 billion of the 2024 record, against a NT$30 billion interest burden on NT$1.85 trillion of borrowing. A NT$71.1 billion supplemental budget sits unpassed and a proposed 12.83 percent tariff rise was declined, with the next review in December. Taipei is absorbing a Hormuz premium through a state balance sheet rather than a price signal, which defers the shock without reducing it.",
    },
  ],
  casualtyNotes: {
    us:
      "A twenty-seventh consecutive cycle with nothing disclosed. The senators' figure of up to 23 killed and 861 wounded is held as a separate series with six days to the 2 November deadline.",
    israel:
      "No addition on the war series on the morning of the ballot, under the highest state of alert, cancelled leave, closed crossings and a general West Bank closure. Gaza deaths stay parallel.",
    iran:
      "No new official war toll, and the Konarak claims stay unadded. The NCRI's at-least-48 execution figure is held apart from the four unmerged series already carried.",
    other:
      "No addition adopted. The coalition's Yemen strike tally carries no casualty figure, the Aden and Lahj claim is unverified, and the Al-Faw crew status is unknown.",
  },
};

export default data;
