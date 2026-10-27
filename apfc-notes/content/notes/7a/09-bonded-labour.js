import { h2, h3, p, ul, li, table, key, trap, caselaw, facts, timeline, quiz, cards, sources } from '../_b';

export default {
  updated: 'Sep 2026',
  summary:
    'The **Bonded Labour System (Abolition) Act, 1976** (Act 19 of 1976, deemed in force from **25 Oct 1975**) abolished bonded labour, **extinguished all bonded debts**, and made its enforcement punishable with up to **3 years and ₹2,000 fine**. It is implemented by the **District Magistrate** with **Vigilance Committees**. Rescued labourers get **₹1 lakh to ₹3 lakh** under the **Central Sector Scheme for Rehabilitation of Bonded Labourer, 2021**.',
  blocks: [
    h2('Background'),
    ul(
      li('**Article 23** prohibits **traffic in human beings, begar and other forms of forced labour**; contravention is an offence punishable by law. It is a Fundamental Right enforceable against private persons too.'),
      li('Bonded labour was abolished during the Emergency through the **Bonded Labour System (Abolition) Ordinance** of **24 October 1975** (part of the **20-Point Programme**). The Act replaced it in **February 1976** and is deemed to have come into force on **25 October 1975**.'),
      li('India has ratified ILO **Forced Labour Convention C29 (1930)** and **Abolition of Forced Labour Convention C105 (1957)**.'),
    ),
    facts([
      ['19 of 1976', 'Act number'],
      ['25 Oct 1975', 'deemed date of commencement'],
      ['3 years', 'maximum imprisonment (plus fine up to ₹2,000)'],
      ['₹30,000', 'immediate cash assistance on rescue'],
    ]),

    h2('What "bonded labour system" means (Section 2)'),
    p('A system of **forced or partly forced labour** in which a debtor enters an agreement with a creditor (for himself or a family member or dependant) because of any of the following:'),
    ul(
      'an **advance** (bonded debt) obtained by him or his ancestors;',
      'a **customary or social obligation**;',
      'an obligation **devolving by succession**;',
      'any **economic consideration**;',
      'being born into a particular **caste or community**,',
    ),
    p('and under which he must, for a specified or unspecified period, **render labour** to the creditor without wages or for nominal wages, or **forfeit the freedom** of employment, of movement anywhere in India, or of selling his labour or produce at market value.'),

    h2('Main provisions'),
    table(
      ['Section', 'Provision'],
      [
        ['4', 'The bonded labour system **stands abolished**; every bonded labourer is **freed and discharged** from any obligation to render bonded labour'],
        ['5', 'Any custom, tradition, contract or agreement under which a person must render bonded labour is **void**'],
        ['6', 'Every obligation to **repay a bonded debt is extinguished**; no suit or proceeding to recover it; pending decrees are satisfied'],
        ['7', 'Property of a freed bonded labourer under mortgage or charge for a bonded debt is **freed and restored** to him'],
        ['8', 'A freed bonded labourer **cannot be evicted** from his homestead'],
        ['9', 'A creditor must not accept payment of a bonded debt; if he does, he is punishable'],
        ['10–12', 'The **District Magistrate** (and officers he authorises) implements the Act and promotes the welfare of freed labourers'],
        ['13', '**Vigilance Committees** at the **district** and **sub-divisional** level'],
        ['16', 'Enforcing bonded labour: imprisonment up to **3 years** and fine up to **₹2,000**'],
        ['17', 'Advancing a bonded debt: same punishment'],
        ['18', 'Extracting bonded labour under the system: same punishment'],
        ['19', 'Abetment is an offence'],
        ['21', 'Offences tried **summarily** by an **Executive Magistrate** with first or second class powers'],
        ['22', 'Offences are **cognizable and bailable**'],
      ],
    ),
    h3('District Vigilance Committee (Section 13)'),
    ul(
      '**District Magistrate** (or his nominee) as Chairperson.',
      '**Three** persons from the **Scheduled Castes or Scheduled Tribes** living in the district, nominated by the DM.',
      '**Two** social workers living in the district, nominated by the DM.',
      'Up to **three** persons representing official or non-official agencies connected with rural development, nominated by the State Government.',
      '**One** person representing financial and credit institutions in the district, nominated by the DM.',
    ),
    p('Functions: advise the DM on implementation, help rehabilitate freed labourers, monitor credit to them, keep count of offences, and survey to identify bonded labour. Sub-divisional committees are chaired by the Sub-Divisional Magistrate.'),

    h2('Rehabilitation: Central Sector Scheme 2021'),
    timeline([
      ['May 1978', 'Centrally Sponsored Scheme for rehabilitation of bonded labourers begins (cost shared 50:50 with States)'],
      ['17 May 2016', 'Revamped as the **Central Sector Scheme for Rehabilitation of Bonded Labourer, 2016** (fully Centre-funded), linked to conviction of the offender'],
      ['2021', 'Revised as the **Central Sector Scheme for Rehabilitation of Bonded Labourer, 2021**, effective **27 January 2022**'],
    ]),
    table(
      ['Beneficiary', 'Financial assistance'],
      [
        ['Adult male', '**₹1 lakh**'],
        ['Special categories: children (including orphans, and those rescued from organised begging rings or forced child labour) and women', '**₹2 lakh**'],
        ['Extreme deprivation or marginalisation (for example trafficked women and children, sexual exploitation, transgender persons)', '**₹3 lakh**'],
        ['Immediate assistance on rescue', 'Up to **₹30,000** from the **District Bonded Labour Rehabilitation Fund** held by the DM'],
      ],
    ),
    ul(
      'The money can be placed in an **annuity scheme** or given as a cash grant, as the district administration assesses.',
      'Non-cash help (land, housing, skilling, education, PDS, MGNREGA-type work) comes through convergence with other schemes.',
      'The scheme also funds district-level **surveys**, **evaluation studies** and **awareness** activities.',
    ),
    key('Link with criminal law', 'The **Bharatiya Nyaya Sanhita, 2023** punishes **unlawful compulsory labour** (formerly **s.374 IPC**) and trafficking. Under the 2016 and 2021 schemes, full rehabilitation assistance is linked to **conviction** of the accused. Release certificates are issued by the DM on rescue.'),

    caselaw('Leading cases', [
      '**People\'s Union for Democratic Rights v. Union of India (1982)** (Asiad workers): paying **less than the minimum wage** amounts to **forced labour** under Article 23.',
      '**Bandhua Mukti Morcha v. Union of India (1984)**: stone-quarry bonded labourers near Faridabad; the State must identify, release and rehabilitate bonded labourers; PILs by letters accepted.',
      '**Neeraja Chaudhary v. State of Madhya Pradesh (1984)**: release without rehabilitation defeats the purpose; the State must rehabilitate promptly.',
    ]),
    trap('Watch these', [
      'The Act is **not** subsumed in any Labour Code.',
      'The implementing authority is the **District Magistrate**, not the Labour Commissioner.',
      'The offence is **cognizable but bailable**, and tried **summarily by an Executive Magistrate**.',
    ]),

    h2('Self-test'),
    quiz(
      ['The Bonded Labour System (Abolition) Act is deemed to have come into force on:', ['26 Jan 1975', '25 Oct 1975', '9 Feb 1976', '15 Aug 1976'], 1, 'The Ordinance was promulgated on 24 October 1975; the Act is deemed effective from 25 October 1975.'],
      ['Maximum punishment for enforcing bonded labour is:', ['1 year and ₹1,000', '3 years and ₹2,000', '7 years and ₹10,000', '2 years and ₹5,000'], 1, 'Section 16.'],
      ['Under the 2021 scheme, a rescued adult male gets:', ['₹50,000', '₹1 lakh', '₹2 lakh', '₹3 lakh'], 1, '₹2 lakh for women and children; ₹3 lakh for extreme cases.'],
      ['Which case held that paying less than minimum wage is forced labour?', ['Bandhua Mukti Morcha (1984)', 'PUDR (Asiad) (1982)', 'Vishaka (1997)', 'M.C. Mehta (1996)'], 1, 'People\'s Union for Democratic Rights v. Union of India, 1982.'],
      ['Who chairs the District Vigilance Committee?', ['Superintendent of Police', 'District Magistrate', 'District Labour Officer', 'Collector of Stamps'], 1, 'Section 13.'],
    ),
    cards([
      ['Article 23', 'Prohibits traffic in human beings, begar and forced labour'],
      ['Section 6', 'Bonded debt extinguished; no recovery'],
      ['Section 21', 'Summary trial by an Executive Magistrate'],
      ['Section 22', 'Offences cognizable and bailable'],
      ['2021 scheme effective', '27 January 2022'],
      ['ILO conventions', 'C29 (1930) and C105 (1957), both ratified by India'],
    ]),
    sources([
      ['Ministry of Labour: Central Sector Scheme for Rehabilitation of Bonded Labourer, 2021', 'https://www.labour.gov.in/whatsnew/central-sector-scheme-rehabilitation-bonded-labourer-2021'],
      ['PIB: Rehabilitation of bonded labourers', 'https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2041674'],
    ]),
  ],
};
