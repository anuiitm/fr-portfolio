import { Geist, Geist_Mono, Bricolage_Grotesque } from 'next/font/google';
import Shell from '@/components/Shell';
import 'katex/dist/katex.min.css';
import './globals.css';

const sans = Geist({ variable: '--font-sans', subsets: ['latin'] });
const mono = Geist_Mono({ variable: '--font-mono', subsets: ['latin'] });
const display = Bricolage_Grotesque({ variable: '--font-display', subsets: ['latin'], weight: ['500', '600', '700', '800'] });

export const metadata = {
  title: { default: 'APFC Notes', template: '%s – APFC Notes' },
  description: 'Exam notes for the UPSC EPFO APFC and UIIC AO exams: every syllabus line, with self-tests, flash cards and progress tracking.',
};

export const viewport = { themeColor: '#0a0b10', colorScheme: 'dark' };

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${display.variable}`}
      data-accent="lime"
      data-size="md"
      data-revise="off"
      suppressHydrationWarning
    >
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
