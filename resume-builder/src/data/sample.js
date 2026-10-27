// A fictional candidate so the demo shows a full resume without real contact details.
let n = 0;
const id = () => `e${(n += 1)}`;

export const SECTION_LABELS = {
  summary: 'Summary',
  experience: 'Experience',
  projects: 'Projects',
  education: 'Education',
  skills: 'Skills',
  achievements: 'Achievements',
};

export const sampleResume = {
  personal: {
    name: 'Riya Menon',
    title: 'Frontend Developer',
    email: 'riya.menon@example.com',
    phone: '+91 90000 00000',
    location: 'Bengaluru, India',
    links: 'github.com/riya-menon  |  riyamenon.dev',
  },
  summary:
    'Frontend developer who builds fast, accessible interfaces in React and TypeScript. Shipped a design system used by four product teams and cut a dashboard’s load time by 60%.',
  experience: [
    {
      id: id(),
      on: true,
      title: 'Frontend Developer Intern',
      org: 'Lumen Retail',
      when: 'Jan 2026 – Jun 2026',
      bullets: [
        'Built the product listing page in **React** and **Redux Toolkit**, serving 40k daily visitors',
        'Cut Largest Contentful Paint from 4.1s to 1.6s by lazy-loading images and splitting the bundle',
        'Worked on the checkout flow',
        'Wrote 120 unit tests with Vitest and React Testing Library, raising coverage to 82%',
      ],
    },
    {
      id: id(),
      on: true,
      title: 'UI Developer (part-time)',
      org: 'Campus Media Cell',
      when: 'Aug 2024 – Dec 2025',
      bullets: ['Was responsible for the website of the college fest', 'Designed 30+ Figma screens with the design team and turned them into responsive pages'],
    },
  ],
  projects: [
    { id: id(), on: true, title: 'Jewellery store finder', org: 'React, Leaflet, Node.js', when: '2026', bullets: ['Map of 300 stores with filters for city and opening hours, built mobile-first', 'Express API with caching; p95 response time under 80 ms'] },
    { id: id(), on: true, title: 'Accessible form library', org: 'TypeScript, React', when: '2025', bullets: ['Form components that pass WCAG 2.2 AA, with error summaries and focus management', 'Published to npm; 1.2k weekly downloads'] },
    { id: id(), on: false, title: 'Expense splitter', org: 'Vue 3, Firebase', when: '2024', bullets: ['Split bills between friends with live sync across devices'] },
    { id: id(), on: false, title: 'Movie recommender', org: 'Python, scikit-learn', when: '2024', bullets: ['Collaborative filtering on MovieLens 100k, 0.91 RMSE'] },
  ],
  education: [{ id: id(), on: true, title: 'B.Tech, Computer Science', org: 'National Institute of Technology, Calicut', when: '2022 – 2026', bullets: ['CGPA 8.4 / 10'] }],
  skills: [
    { id: id(), on: true, title: 'Languages', items: 'JavaScript, TypeScript, HTML5, CSS3, SQL' },
    { id: id(), on: true, title: 'Frameworks', items: 'React, Redux Toolkit, Next.js, Node.js, Express, Tailwind CSS' },
    { id: id(), on: true, title: 'Tools', items: 'Git, Vite, Vitest, Jest, Figma, Chrome DevTools, Lighthouse' },
  ],
  achievements: [
    { id: id(), on: true, title: 'Winner, Smart India Hackathon 2025 (web category)' },
    { id: id(), on: true, title: 'Top 5% on Frontend Mentor among 600k users' },
  ],
  order: ['summary', 'experience', 'projects', 'education', 'skills', 'achievements'],
  template: 'classic',
  accent: '#1f3a5f',
};

export const sampleApplications = [
  { id: 'a1', company: 'Lumen Retail', role: 'Frontend Developer', status: 'interview', date: '2026-10-12' },
  { id: 'a2', company: 'Northwind Labs', role: 'UI Engineer', status: 'applied', date: '2026-10-20' },
  { id: 'a3', company: 'Pixel & Co', role: 'React Developer', status: 'saved', date: '2026-10-24' },
];
