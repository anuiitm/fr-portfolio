// Demo data: eight loan products, each with a published checklist and some history.

const DOCS = {
  pan: ['PAN card', 'Government ID', true, 'Must be a PAN card issued by the Income Tax Department. PAN format AAAAA9999A. Name must match the application.'],
  aadhaar: ['Aadhaar card', 'Government ID', true, 'Masked Aadhaar accepted. Last four digits and name must match the e-KYC record.'],
  passport: ['Passport', 'Government ID', false, 'Valid (not expired) Indian passport. Photo page and address page both required.'],
  voter: ['Voter ID', 'Government ID', false, 'EPIC card with a readable EPIC number and photograph.'],
  salary: ['Salary slips, last 3 months', 'Income document', true, 'Three consecutive months, each showing employer name, gross and net pay. Net pay should match bank credits within 5%.'],
  form16: ['Form 16', 'Tax document', true, 'Latest assessment year, Part A and Part B, signed by the employer.'],
  bank6: ['Bank statements, 6 months', 'Financial statement', true, 'All pages, from the bank or Account Aggregator. Flag bounced EMIs and cash deposits above ₹2 lakh.'],
  itr: ['ITR, last 2 years', 'Tax document', true, 'ITR-V acknowledgements with verified status. Income should not drop more than 25% year on year.'],
  sale: ['Sale agreement', 'Legal document', true, 'Registered agreement naming the applicant as buyer. Property address must match the loan application.'],
  title: ['Title deed', 'Legal document', true, 'Chain of title for 13 years. Flag any gaps or unregistered transfers.'],
  ec: ['Encumbrance certificate', 'Legal document', true, 'Covers at least 13 years and shows no subsisting charge.'],
  ptax: ['Property tax receipt', 'Tax document', false, 'Latest receipt; owner name should match the title deed.'],
  emp: ['Employment letter', 'Employment document', true, 'On company letterhead, dated within 30 days, stating designation and date of joining.'],
  exp: ['Experience certificate', 'Employment document', false, 'Needed only if current tenure is under 1 year.'],
  gst: ['GST registration', 'Business document', true, 'Active GSTIN; legal name must match the business name on the application.'],
  gstr: ['GST returns, 12 months', 'Tax document', true, 'GSTR-3B for the last 12 months. Turnover should match bank credits within 15%.'],
  udyam: ['Udyam certificate', 'Business document', false, 'Shows enterprise classification (micro, small, medium).'],
  fin: ['Audited financials, 2 years', 'Financial statement', true, 'Balance sheet and P&L signed by a CA with UDIN.'],
  rc: ['Vehicle quotation', 'Purchase document', true, 'From an authorised dealer, showing on-road price and model.'],
  dl: ['Driving licence', 'Government ID', true, 'Valid licence for the vehicle class being financed.'],
  land: ['Land records (RoR)', 'Legal document', true, 'Record of Rights showing the applicant as owner or cultivator.'],
  kcc: ['Crop and acreage declaration', 'Agricultural document', true, 'Crops sown this season and acreage, attested by the village officer.'],
  gold: ['Gold ornament declaration', 'Collateral document', true, 'Item-wise list with gross weight. Must be signed by the applicant.'],
  photo: ['Recent photograph', 'Identity document', true, 'Taken within 3 months, plain background, face clearly visible.'],
};

const TEMPLATES = {
  housing: [['Identity', ['pan', 'aadhaar', 'passport', 'voter', 'photo']], ['Income', ['salary', 'form16', 'bank6', 'itr']], ['Property', ['sale', 'title', 'ec', 'ptax']], ['Employment', ['emp', 'exp']]],
  personal: [['Identity', ['pan', 'aadhaar', 'photo']], ['Income', ['salary', 'bank6']], ['Employment', ['emp']]],
  twowheeler: [['Identity', ['pan', 'aadhaar', 'dl']], ['Income', ['salary', 'bank6']], ['Vehicle', ['rc']]],
  business: [['Identity', ['pan', 'aadhaar']], ['Business', ['gst', 'udyam', 'gstr', 'fin']], ['Banking', ['bank6', 'itr']]],
  rural: [['Identity', ['aadhaar', 'voter', 'photo']], ['Land', ['land']], ['Banking', ['bank6']]],
  farmer: [['Identity', ['aadhaar', 'pan']], ['Land & crop', ['land', 'kcc']], ['Banking', ['bank6']]],
  lap: [['Identity', ['pan', 'aadhaar']], ['Income', ['itr', 'bank6']], ['Property', ['title', 'ec', 'ptax']]],
  gold: [['Identity', ['pan', 'aadhaar', 'photo']], ['Collateral', ['gold']]],
};

const PRODUCTS = [
  ['housing', 'Housing loan', 'Purchase or construction of a home', 4],
  ['personal', 'Personal loan', 'Unsecured credit for salaried applicants', 3],
  ['twowheeler', 'Two-wheeler loan', 'New and used two-wheelers', 2],
  ['business', 'Business loan', 'Working capital and term loans for MSMEs', 2],
  ['rural', 'Rural housing loan', 'Homes in rural and semi-urban areas', 1],
  ['farmer', 'Kisan credit', 'Crop and allied-activity credit', 3],
  ['lap', 'Loan against property', 'Secured credit against owned property', 2],
  ['gold', 'Gold loan', 'Credit against gold ornaments', 2],
];

let n = 0;
const pid = () => `pt${(n += 1)}`;

function sectionsFor(key) {
  return TEMPLATES[key].map(([name, docs], i) => ({
    id: `${key}-s${i + 1}`,
    name,
    points: docs.map((d) => {
      const [title, docType, required, criteria] = DOCS[d];
      // Optional documents in older products were never set up for AI review.
      const aiOn = required || d === 'passport';
      return { id: pid(), title, docType, required, criteria: aiOn ? criteria : '', override: !required };
    }),
  }));
}

const DAY = 86400000;

export const USERS = [
  { id: 'u1', name: 'Arjun Nair', email: 'arjun@veridoc.example', role: 'maker', status: 'active' },
  { id: 'u2', name: 'Priya Raman', email: 'priya@veridoc.example', role: 'approver', status: 'active' },
  { id: 'u3', name: 'Sneha Kulkarni', email: 'sneha@veridoc.example', role: 'applier', status: 'active' },
  { id: 'u4', name: 'Ravi Menon', email: 'ravi@veridoc.example', role: 'maker', status: 'active' },
  { id: 'u5', name: 'Meera Iyer', email: 'meera@veridoc.example', role: 'approver', status: 'active' },
  { id: 'u6', name: 'Deepak Joshi', email: 'deepak@veridoc.example', role: 'maker', status: 'active' },
  { id: 'u7', name: 'Vikram Bose', email: 'vikram@veridoc.example', role: 'applier', status: 'invited' },
];

export function buildSeed(now = Date.now()) {
  n = 0;
  const iso = (daysAgo) => new Date(now - daysAgo * DAY).toISOString();
  const audit = [];

  const products = PRODUCTS.map(([key, name, description, version], i) => {
    const sections = sectionsFor(key);
    // Walk back from the live checklist: each older version had one point fewer
    // and terser AI criteria, so the version diffs have something to show.
    const versions = [];
    let snap = sections;
    for (let v = version; v >= 1; v -= 1) {
      versions.unshift({
        version: v,
        at: iso(20 + (version - v) * 28 + i * 3),
        by: v % 2 ? 'u3' : 'u7',
        note: v === 1 ? 'First release' : ['Tightened income criteria', 'Added optional IDs', 'Updated AI prompts after audit'][v % 3],
        sections: snap,
      });
      snap = structuredClone(snap);
      const target = [...snap].reverse().find((s) => s.points.length > 1);
      if (target) target.points.pop();
      const first = snap[0].points[0];
      first.criteria = first.criteria.split('. ')[0];
    }
    const latest = versions[versions.length - 1];
    audit.push({ id: `a${audit.length + 1}`, at: latest.at, userId: 'u3', productId: key, action: 'published', detail: `Published v${latest.version}` });
    return { id: key, name, description, sections, version, publishedAt: latest.at, versions, draft: null };
  });

  // Two products start mid-workflow so every role has something to do.
  const personal = products.find((p) => p.id === 'personal');
  const draftSections = structuredClone(personal.sections);
  draftSections[1].points.push({ id: pid(), title: 'ITR, last 2 years', docType: 'Tax document', required: false, criteria: DOCS.itr[3], override: true });
  draftSections[0].points[2].required = false;
  personal.draft = { sections: draftSections, status: 'review', updatedAt: iso(1), updatedBy: 'u4', submittedBy: 'u4', note: 'ITR optional for self-employed applicants', reviewNote: null };
  audit.push({ id: `a${audit.length + 1}`, at: iso(1), userId: 'u4', productId: 'personal', action: 'submitted', detail: 'Submitted for approval' });

  const lap = products.find((p) => p.id === 'lap');
  const lapDraft = structuredClone(lap.sections);
  lapDraft[2].points[0].criteria += ' Reject photocopies that are not notarised.';
  lap.draft = { sections: lapDraft, status: 'draft', updatedAt: iso(3), updatedBy: 'u1', submittedBy: null, note: '', reviewNote: null };
  audit.push({ id: `a${audit.length + 1}`, at: iso(3), userId: 'u1', productId: 'lap', action: 'edited', detail: 'Edited “Title deed”' });

  const gold = products.find((p) => p.id === 'gold');
  const goldDraft = structuredClone(gold.sections);
  goldDraft[1].points.push({ id: pid(), title: 'Purity certificate', docType: 'Collateral document', required: false, criteria: 'Hallmark or assayer certificate stating karat.', override: true });
  gold.draft = { sections: goldDraft, status: 'approved', updatedAt: iso(2), updatedBy: 'u6', submittedBy: 'u6', note: 'Optional purity certificate', reviewNote: 'Looks good', approvedBy: 'u2' };
  audit.push({ id: `a${audit.length + 1}`, at: iso(2), userId: 'u2', productId: 'gold', action: 'approved', detail: 'Approved: “Looks good”' });

  audit.sort((a, b) => b.at.localeCompare(a.at));
  return { products, users: USERS, audit };
}

export const DOC_TYPES = [...new Set(Object.values(DOCS).map((d) => d[1]))].sort();

// Starter text for the AI criteria box, by document class. A template, not a model call.
export const CRITERIA_TEMPLATES = {
  'Government ID': 'Must be a valid, unexpired government ID. Name and date of birth must match the application. Reject if the photo or ID number is unreadable.',
  'Income document': 'Must cover the required period with employer name, gross and net pay. Net pay should match bank credits within 5%.',
  'Tax document': 'Must be for the latest assessment year and show verified status. Taxpayer name and PAN must match the applicant.',
  'Financial statement': 'All pages for the full period, issued by the bank. Flag bounced payments and unusually large cash deposits.',
  'Legal document': 'Must be registered and legible, naming the applicant. Property details must match the application.',
  'Employment document': 'On company letterhead, signed, dated within 30 days, stating designation and joining date.',
  'Business document': 'Registration must be active. Legal name must match the business name on the application.',
};
