// Master map of the UIIC Administrative Officer (Scale I, Generalist) syllabus.
// Pattern checked against the 2026 notification coverage (Oliveboard, Career Power) in Sep 2026.
// Priority is weight in the exam: P1 = asked every year in bulk, P2 = regular, P3 = occasional.
// `see` points to notes that already cover a topic: 'uiic:<subject>/<topic>' or 'apfc:<subject>/<topic>'.

export const EXAM = {
  name: 'UIIC Administrative Officer (Scale I) 2026',
  prelims: '2026-10-22',
  mains: '2026-11-30',
  vacancies: '200 Generalist + 25 Hindi Officer',
  note: 'Prelims is qualifying. Final merit: Mains 75%, Interview 25%. Negative marking of 1/4 mark in both tiers. Exam dates are tentative.',
};

export const pattern = {
  prelims: {
    title: 'Prelims: 100 marks, 60 min',
    rows: [
      ['English Language', 30, 30, '20 min'],
      ['Reasoning Ability', 35, 35, '20 min'],
      ['Quantitative Aptitude', 35, 35, '20 min'],
    ],
  },
  mains: {
    title: 'Mains: 250 marks, 150 min, plus a 30-mark descriptive test',
    rows: [
      ['Reasoning', 50, 60, '40 min'],
      ['English Language', 40, 50, '30 min'],
      ['Quantitative Aptitude', 50, 60, '40 min'],
      ['General Awareness (financial sector focus)', 40, 60, '30 min'],
      ['Computer Knowledge', 20, 20, '10 min'],
    ],
  },
};

export const sections = [
  { no: 'uiic-pre', badge: 'P', title: 'Prelims (qualifying)' },
  { no: 'uiic-mains', badge: 'M', title: 'Mains and descriptive' },
];

const t = (id, title, p, see = []) => ({ id, title, p, see });

export const subjects = [
  // ───────────────────────── Prelims
  {
    id: 'english', no: 'EN', section: 'uiic-pre', title: 'English Language', short: 'English',
    marks: '30 questions, 30 marks, 20 min',
    topics: [
      t('reading-comprehension', 'Reading comprehension', 'P1', ['apfc:1/reading-comprehension']),
      t('error-spotting', 'Error spotting', 'P1', ['apfc:1/spotting-errors', 'apfc:1/grammar-basics']),
      t('fill-in-the-blanks', 'Fill in the blanks (single and double fillers)', 'P1', ['apfc:1/fill-blanks']),
      t('cloze-test', 'Cloze test', 'P2', ['apfc:1/cloze-test']),
      t('para-jumbles', 'Para jumbles', 'P2', ['apfc:1/parajumbles']),
      t('vocabulary', 'Vocabulary: synonyms, antonyms, idioms', 'P2', ['apfc:1/synonyms-antonyms', 'apfc:1/idioms']),
    ],
  },
  {
    id: 'reasoning', no: 'RA', section: 'uiic-pre', title: 'Reasoning Ability', short: 'Reasoning',
    marks: '35 questions, 35 marks, 20 min',
    topics: [
      t('puzzles-seating', 'Puzzles and seating arrangement', 'P1'),
      t('inequality', 'Inequality (direct and coded)', 'P1'),
      t('syllogism', 'Syllogism (including possibility)', 'P1', ['apfc:6a/syllogism']),
      t('blood-relations', 'Blood relations', 'P2', ['apfc:6a/blood-relations']),
      t('coding-decoding', 'Coding-decoding', 'P2', ['apfc:6a/coding']),
      t('order-ranking', 'Order and ranking', 'P2', ['apfc:6a/ranking']),
      t('direction-sense', 'Direction sense', 'P2', ['apfc:6a/direction']),
      t('alphanumeric-series', 'Alphanumeric series', 'P3', ['apfc:6a/series']),
      t('data-sufficiency', 'Data sufficiency', 'P3', ['apfc:6c/data-sufficiency']),
    ],
  },
  {
    id: 'quant', no: 'QA', section: 'uiic-pre', title: 'Quantitative Aptitude', short: 'Quant',
    marks: '35 questions, 35 marks, 20 min',
    topics: [
      t('simplification', 'Simplification and approximation', 'P1', ['apfc:6b/simplification']),
      t('number-series', 'Number series (missing and wrong term)', 'P1'),
      t('quadratic-equations', 'Quadratic equations', 'P1', ['apfc:6b/algebra']),
      t('data-interpretation', 'Data interpretation', 'P1', ['apfc:6c/di']),
      t('percentage', 'Percentage', 'P2', ['apfc:6b/percentage']),
      t('profit-loss', 'Profit, loss and discount', 'P2', ['apfc:6b/profit-loss']),
      t('si-ci', 'Simple and compound interest', 'P2', ['apfc:6b/interest']),
      t('ratio-proportion', 'Ratio, proportion and partnership', 'P2', ['apfc:6b/ratio']),
      t('average', 'Average and ages', 'P2', ['apfc:6b/average']),
      t('time-work', 'Time and work, pipes and cisterns', 'P2', ['apfc:6b/time-work']),
      t('time-speed-distance', 'Time, speed and distance; boats and trains', 'P2', ['apfc:6b/tsd']),
      t('mixture-alligation', 'Mixture and alligation', 'P3'),
      t('mensuration', 'Mensuration', 'P3', ['apfc:6b/mensuration']),
      t('probability', 'Probability', 'P3', ['apfc:6c/probability']),
      t('permutation-combination', 'Permutation and combination', 'P3', ['apfc:6c/pnc']),
      t('number-system', 'Number system', 'P3', ['apfc:6b/number-system']),
    ],
  },

  // ───────────────────────── Mains
  {
    id: 'mains-reasoning', no: 'MR', section: 'uiic-mains', title: 'Reasoning (Mains)', short: 'Mains Reasoning',
    marks: '50 questions, 60 marks, 40 min',
    topics: [
      t('puzzles-advanced', 'Puzzles with 7 to 10 variables; floor, box and scheduling puzzles', 'P1', ['uiic:reasoning/puzzles-seating']),
      t('critical-reasoning', 'Critical reasoning: assumptions, arguments, course of action, cause and effect, inference', 'P1', ['apfc:6a/statement-conclusion']),
      t('input-output', 'Machine input-output', 'P1'),
      t('syllogism-possibility', 'Syllogism (reverse and possibility)', 'P2', ['uiic:reasoning/syllogism', 'apfc:6a/syllogism']),
      t('coded-relations', 'Coded blood relations and coded inequality', 'P2', ['uiic:reasoning/blood-relations', 'uiic:reasoning/inequality']),
      t('coding-advanced', 'Coding-decoding (new pattern)', 'P2', ['uiic:reasoning/coding-decoding']),
      t('data-sufficiency', 'Data sufficiency', 'P2', ['uiic:reasoning/data-sufficiency']),
    ],
  },
  {
    id: 'mains-english', no: 'ME', section: 'uiic-mains', title: 'English Language (Mains)', short: 'Mains English',
    marks: '40 questions, 50 marks, 30 min',
    topics: [
      t('rc-advanced', 'Reading comprehension (3 to 4 passages, economy and insurance themes)', 'P1', ['uiic:english/reading-comprehension', 'apfc:1/reading-comprehension']),
      t('error-improvement', 'Error detection, sentence improvement and phrase replacement', 'P1', ['uiic:english/error-spotting', 'apfc:1/sentence-improvement']),
      t('cloze', 'Cloze test', 'P2', ['uiic:english/cloze-test']),
      t('para-jumbles', 'Para jumbles, odd sentence out and para completion', 'P2', ['uiic:english/para-jumbles']),
      t('fillers', 'Double fillers and word usage', 'P2', ['uiic:english/fill-in-the-blanks', 'uiic:english/vocabulary', 'apfc:1/confused-words']),
      t('connectors', 'Column-based questions and sentence connectors', 'P2'),
    ],
  },
  {
    id: 'mains-quant', no: 'MQ', section: 'uiic-mains', title: 'Quantitative Aptitude (Mains)', short: 'Mains Quant',
    marks: '50 questions, 60 marks, 40 min',
    topics: [
      t('di-advanced', 'Data interpretation: caselet, missing and mixed DI (3 to 4 sets)', 'P1', ['uiic:quant/data-interpretation', 'apfc:6c/di']),
      t('arithmetic', 'Arithmetic word problems', 'P1', ['uiic:quant/percentage', 'uiic:quant/profit-loss', 'uiic:quant/si-ci', 'uiic:quant/time-work', 'uiic:quant/time-speed-distance']),
      t('quantity-comparison', 'Quantity comparison (Quantity I vs II)', 'P1', ['uiic:quant/quadratic-equations']),
      t('series-quadratic', 'Number series and quadratic equations', 'P2', ['uiic:quant/number-series', 'uiic:quant/quadratic-equations']),
      t('data-sufficiency', 'Data sufficiency (quant)', 'P2', ['apfc:6c/data-sufficiency']),
      t('probability-pnc', 'Probability, permutation and combination', 'P3', ['uiic:quant/probability', 'uiic:quant/permutation-combination']),
    ],
  },
  {
    id: 'ga', no: 'GA', section: 'uiic-mains', title: 'General Awareness (financial sector)', short: 'GA',
    marks: '40 questions, 60 marks, 30 min',
    topics: [
      t('uiic-profile', 'UIIC itself: history, headquarters, leadership, products, recent results', 'P1', ['apfc:8c/insurance-history', 'apfc:8c/irdai']),
      t('insurance-basics', 'Insurance basics, principles and terminology', 'P1', ['apfc:8c/insurance-basics', 'apfc:8c/insurance-principles']),
      t('irdai', 'IRDAI, insurance laws and recent regulations', 'P1', ['apfc:8c/irdai', 'apfc:8c/insurance-laws']),
      t('general-insurance', 'General and health insurance products', 'P1', ['apfc:8c/general-insurance', 'apfc:8c/insurance-types']),
      t('insurance-history', 'History of insurance and the public-sector insurers', 'P2', ['apfc:8c/insurance-history']),
      t('intermediaries', 'Intermediaries, distribution and Bima Sugam', 'P2', ['apfc:8c/intermediaries', 'apfc:8c/penetration']),
      t('govt-insurance', 'Government insurance schemes', 'P1', ['apfc:8c/govt-insurance']),
      t('ombudsman', 'Grievances, ombudsman and other bodies', 'P3', ['apfc:8c/ombudsman', 'apfc:8c/other-bodies']),
      t('life-insurance', 'Life insurance policies', 'P3', ['apfc:8c/life-policies']),
      t('banking', 'Banking, RBI and monetary policy', 'P1', ['apfc:3b/rbi', 'apfc:3b/banking-structure', 'apfc:9/rbi-data']),
      t('financial-markets', 'Financial markets, SEBI and financial inclusion', 'P2', ['apfc:3b/financial-markets', 'apfc:3b/financial-inclusion']),
      t('budget-survey', 'Union Budget and Economic Survey', 'P1', ['apfc:3c/budget-2026', 'apfc:9/budget-survey']),
      t('schemes', 'Government schemes in the news', 'P1', ['apfc:9/schemes-news']),
      t('current-affairs', 'Current affairs: appointments, summits, reports and indices', 'P1', ['apfc:9/appointments', 'apfc:9/summits', 'apfc:9/reports-indices']),
      t('intl-orgs', 'International organisations', 'P2', ['apfc:3d/intl-bodies', 'apfc:9/intl-orgs']),
      t('awards-sports-books', 'Awards, sports, books and important days', 'P3', ['apfc:9/awards', 'apfc:9/sports', 'apfc:9/books-days']),
      t('static-gk', 'Static GK: capitals, currencies, headquarters, national parks', 'P3'),
    ],
  },
  {
    id: 'computer', no: 'CK', section: 'uiic-mains', title: 'Computer Knowledge', short: 'Computers',
    marks: '20 questions, 20 marks, 10 min',
    topics: [
      t('fundamentals', 'Fundamentals, hardware, memory and I/O devices', 'P1', ['apfc:5e/computer-fundamentals', 'apfc:5e/hardware']),
      t('software-os', 'Software and operating systems', 'P2', ['apfc:5e/software']),
      t('ms-office', 'MS Office: Word, Excel, PowerPoint and shortcuts', 'P1', ['apfc:5e/ms-office']),
      t('networking', 'Networking and the internet', 'P1', ['apfc:5e/networking', 'apfc:5e/internet']),
      t('dbms', 'Databases (DBMS)', 'P2', ['apfc:5e/dbms']),
      t('security', 'Computer security and malware', 'P2', ['apfc:5e/cyber-security']),
      t('number-systems', 'Number systems and conversions', 'P2', ['apfc:5e/number-systems']),
      t('emerging', 'Emerging technologies and digital public infrastructure', 'P3', ['apfc:5e/emerging-it', 'apfc:5e/dpi']),
      t('abbreviations', 'Abbreviations', 'P3', ['apfc:5e/abbreviations']),
    ],
  },
  {
    id: 'descriptive', no: 'DT', section: 'uiic-mains', title: 'Descriptive Test', short: 'Descriptive',
    marks: 'Letter 10 + essay 20 marks, 30 min, typed in English',
    topics: [
      t('letter-writing', 'Letter writing: formal letters, complaints, requests', 'P1', ['apfc:1/grammar-basics']),
      t('essay-writing', 'Essay writing: insurance, economy, technology, social issues', 'P1', ['apfc:8c/penetration', 'apfc:8c/govt-insurance']),
    ],
  },
];
