// Registry of UIIC topic files, keyed by subject and topic slug.
// A topic without an entry renders as "not written yet" (or links to APFC notes).
// The portfolio build ships the English and Reasoning prelims sections.
import english_clozeTest from './prelims/english/clozeTest';
import english_errorSpotting from './prelims/english/errorSpotting';
import english_fillInTheBlanks from './prelims/english/fillInTheBlanks';
import english_paraJumbles from './prelims/english/paraJumbles';
import english_readingComprehension from './prelims/english/readingComprehension';
import english_vocabulary from './prelims/english/vocabulary';
import reasoning_alphanumericSeries from './prelims/reasoning/alphanumericSeries';
import reasoning_bloodRelations from './prelims/reasoning/bloodRelations';
import reasoning_codingDecoding from './prelims/reasoning/codingDecoding';
import reasoning_dataSufficiency from './prelims/reasoning/dataSufficiency';
import reasoning_directionSense from './prelims/reasoning/directionSense';
import reasoning_inequality from './prelims/reasoning/inequality';
import reasoning_orderRanking from './prelims/reasoning/orderRanking';
import reasoning_puzzlesSeating from './prelims/reasoning/puzzlesSeating';
import reasoning_syllogism from './prelims/reasoning/syllogism';


export default {
  english: {
    'cloze-test': english_clozeTest,
    'error-spotting': english_errorSpotting,
    'fill-in-the-blanks': english_fillInTheBlanks,
    'para-jumbles': english_paraJumbles,
    'reading-comprehension': english_readingComprehension,
    'vocabulary': english_vocabulary,
  },
  reasoning: {
    'alphanumeric-series': reasoning_alphanumericSeries,
    'blood-relations': reasoning_bloodRelations,
    'coding-decoding': reasoning_codingDecoding,
    'data-sufficiency': reasoning_dataSufficiency,
    'direction-sense': reasoning_directionSense,
    'inequality': reasoning_inequality,
    'order-ranking': reasoning_orderRanking,
    'puzzles-seating': reasoning_puzzlesSeating,
    'syllogism': reasoning_syllogism,
  },
};
