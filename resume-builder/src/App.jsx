import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { redo, selectCanRedo, selectCanUndo, selectResume, undo, versionSaved } from './store';
import Preview from './components/Preview';
import { LayoutEditor, ListEditor, PersonalEditor } from './components/Editors';
import { Applications, BulletCoach, JdMatch, Versions } from './components/Tools';

const NAV = [
  ['Resume', [['personal', 'Profile & summary'], ['experience', 'Experience'], ['projects', 'Projects'], ['education', 'Education'], ['skills', 'Skills'], ['achievements', 'Achievements'], ['layout', 'Layout']]],
  ['Tools', [['jd', 'Match a job'], ['coach', 'Bullet coach'], ['applications', 'Applications'], ['versions', 'Versions']]],
];
const TITLES = Object.fromEntries(NAV.flatMap(([, items]) => items));

export default function App() {
  const [view, setView] = useState('personal');
  // On narrow screens only one pane fits; wide screens show both.
  const [pane, setPane] = useState('edit');
  const dispatch = useDispatch();
  const canUndo = useSelector(selectCanUndo);
  const canRedo = useSelector(selectCanRedo);
  const resume = useSelector(selectResume);

  // Ctrl/⌘+Z and Ctrl/⌘+Shift+Z, except inside text fields where the
  // browser's own undo is what people expect.
  useEffect(() => {
    const onKey = (e) => {
      if (!(e.metaKey || e.ctrlKey) || e.key.toLowerCase() !== 'z' || e.target.closest('input, textarea')) return;
      e.preventDefault();
      dispatch(e.shiftKey ? redo() : undo());
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [dispatch]);

  const exportPdf = () => {
    dispatch(versionSaved(`Exported ${new Date().toLocaleDateString('en-IN')}`, resume));
    const title = document.title;
    document.title = `${resume.personal.name.replace(/\s+/g, '_') || 'Resume'}_Resume`;
    window.print();
    document.title = title;
  };

  const body = {
    personal: <PersonalEditor />,
    layout: <LayoutEditor />,
    jd: <JdMatch onEdit={setView} />,
    coach: <BulletCoach onEdit={setView} />,
    applications: <Applications />,
    versions: <Versions />,
  }[view] ?? <ListEditor key={view} section={view} />;

  return (
    <div className={`app pane-${pane}`}>
      <header className="bar">
        <span className="brand">Resume Builder</span>
        <div className="bar-actions">
          <button type="button" className="btn btn-sm" disabled={!canUndo} onClick={() => dispatch(undo())} title="Undo (Ctrl+Z)">
            Undo
          </button>
          <button type="button" className="btn btn-sm" disabled={!canRedo} onClick={() => dispatch(redo())} title="Redo (Ctrl+Shift+Z)">
            Redo
          </button>
          <button type="button" className="btn btn-sm hide-wide" onClick={() => setPane(pane === 'edit' ? 'preview' : 'edit')}>
            {pane === 'edit' ? 'Preview' : 'Back to editing'}
          </button>
          <button type="button" className="btn btn-sm btn-primary" onClick={exportPdf}>
            Export PDF
          </button>
        </div>
      </header>
      <nav className="side" aria-label="Sections">
        {NAV.map(([group, items]) => (
          <div key={group}>
            <p className="side-group">{group}</p>
            {items.map(([id, label]) => (
              <button
                key={id}
                type="button"
                aria-current={view === id ? 'page' : undefined}
                onClick={() => {
                  setView(id);
                  setPane('edit');
                }}
              >
                {label}
              </button>
            ))}
          </div>
        ))}
      </nav>
      <main className="work">
        <h1>{TITLES[view]}</h1>
        {body}
      </main>
      <Preview />
    </div>
  );
}
