import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMe } from '../../store';
import { draftReplaced, statusOf } from '../../store/products';
import { toastShown } from '../../store/people';
import { diffSections, sectionsToCsv, sheetToSections, summarise } from '../../lib/checklist';
import { navigate } from '../../lib/router';
import { Icon } from '../../components/ui';
import DiffTable from './DiffTable';

// Teams keep checklists in spreadsheets. Export one, edit it in Excel or Sheets,
// and bring it back: the diff shows exactly what the import would change.
export default function ImportTab({ product }) {
  const me = useSelector(selectMe);
  const dispatch = useDispatch();
  const working = product.draft?.sections ?? product.sections;
  const [text, setText] = useState('');
  const canApply = me.role === 'maker' && ['live', 'draft'].includes(statusOf(product));

  const parsed = useMemo(() => (text.trim() ? sheetToSections(text) : null), [text]);
  const diff = useMemo(() => (parsed && !parsed.errors.length ? diffSections(working, parsed.sections) : []), [parsed, working]);
  const c = summarise(diff);

  const loadSample = () => {
    // The current checklist with a few realistic edits, so the diff has content.
    const lines = sectionsToCsv(working).split('\n');
    lines.splice(2, 1);
    lines.push(`${working[0].name},Co-applicant PAN card,Government ID,no,Same rules as the applicant's PAN card.`);
    setText(lines.join('\n').replace(/,yes,/, ',no,'));
  };

  const onFile = async (file) => {
    if (!file) return;
    if (!/\.csv$/i.test(file.name)) {
      dispatch(toastShown('Save the sheet as CSV first (File → Download → CSV).', 'warn'));
      return;
    }
    setText(await file.text());
  };

  return (
    <div className="import">
      <div className="import-steps">
        <p>
          Columns: <code>section</code>, <code>title</code>, <code>doc type</code>, <code>required</code> (yes/no), <code>criteria</code>. Points are matched by
          title.
        </p>
        <div className="toolbar">
          <label className="btn">
            <Icon name="upload" /> Choose CSV
            <input type="file" accept=".csv,text/csv" className="sr-only" onChange={(e) => onFile(e.target.files[0])} />
          </label>
          <button type="button" className="btn" onClick={loadSample}>
            Load an edited sample
          </button>
          {text && (
            <button type="button" className="btn" onClick={() => setText('')}>
              Clear
            </button>
          )}
        </div>
        <textarea className="csv" rows={8} value={text} onChange={(e) => setText(e.target.value)} placeholder="…or paste CSV here" aria-label="CSV contents" spellCheck="false" />
      </div>

      {parsed?.errors.length > 0 && (
        <div className="errors" role="alert">
          <b>Fix these rows before importing:</b>
          <ul>
            {parsed.errors.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      )}

      {parsed && !parsed.errors.length && (
        <>
          <div className="toolbar">
            <h2 className="h-sm">
              Importing would add {c.added}, change {c.modified} and remove {c.removed}
            </h2>
            <span className="spacer" />
            {canApply ? (
              <button
                type="button"
                className="btn btn-primary"
                disabled={!diff.length}
                onClick={() => {
                  dispatch(draftReplaced({ productId: product.id, sections: parsed.sections, existing: working, userId: me.id, reason: `Imported a sheet (+${c.added} ~${c.modified} −${c.removed})` }));
                  dispatch(toastShown('Imported into the draft'));
                  setText('');
                  navigate(`/checklists/${product.id}/changes`);
                }}
              >
                Apply to draft
              </button>
            ) : (
              <span className="hint">Only a maker can import, and not while the draft is in review.</span>
            )}
          </div>
          <DiffTable diff={diff} empty="The sheet matches the current checklist." />
        </>
      )}
    </div>
  );
}
