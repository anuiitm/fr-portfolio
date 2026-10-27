// Registry of finished notes. A topic without an entry here renders as "coming soon".
// The portfolio build ships four subjects; the full app registers all 28.
import s1 from './1';
import s3a from './3a';
import s7a from './7a';
import s7b from './7b';

const notes = {
  '1': s1,
  '3a': s3a,
  '7a': s7a,
  '7b': s7b,
};

export default notes;
