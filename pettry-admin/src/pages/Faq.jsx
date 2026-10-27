import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faqDeleted, faqMoved, faqSaved, faqToggled, toastShown } from '../store/content';
import { faqsSel } from '../store/selectors';
import { Field, Icon, Modal, PageHeader } from '../components/ui';

const CATEGORIES = ['Orders', 'Shipping', 'Returns', 'Pet care', 'Account'];

export default function Faq() {
  const faqs = useSelector(faqsSel.selectAll);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(null);

  return (
    <>
      <PageHeader title="FAQ" sub="Shown on the help page in this order. Drafts stay hidden until published.">
        <button type="button" className="btn btn-primary" onClick={() => setEditing({})}>
          <Icon name="plus" /> New question
        </button>
      </PageHeader>

      <ol className="faq-list">
        {faqs.map((f, i) => (
          <li key={f.id} className={`card faq${f.published ? '' : ' faq-draft'}`}>
            <div className="faq-order">
              <button type="button" className="icon-btn" disabled={i === 0} aria-label={`Move “${f.question}” up`} onClick={() => dispatch(faqMoved({ id: f.id, by: -1 }))}>
                <Icon name="up" />
              </button>
              <button type="button" className="icon-btn" disabled={i === faqs.length - 1} aria-label={`Move “${f.question}” down`} onClick={() => dispatch(faqMoved({ id: f.id, by: 1 }))}>
                <Icon name="down" />
              </button>
            </div>
            <div className="faq-body">
              <p className="faq-cat">
                {f.category}
                {!f.published && ' (draft)'}
              </p>
              <h2>{f.question}</h2>
              <p className="muted">{f.answer}</p>
            </div>
            <div className="row-actions">
              <label className="switch">
                <input type="checkbox" checked={f.published} onChange={() => dispatch(faqToggled(f.id))} />
                <span className="sr-only">Published</span>
              </label>
              <button type="button" className="btn btn-sm" onClick={() => setEditing(f)}>
                Edit
              </button>
              <button
                type="button"
                className="btn btn-sm btn-danger-ghost"
                onClick={() => {
                  if (window.confirm(`Delete “${f.question}”?`)) {
                    dispatch(faqDeleted(f.id));
                    dispatch(toastShown('Question deleted', 'warn'));
                  }
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ol>

      <Modal open={Boolean(editing)} title={editing?.id ? 'Edit question' : 'New question'} onClose={() => setEditing(null)} wide>
        {editing && <FaqForm key={editing.id ?? 'new'} faq={editing} onDone={() => setEditing(null)} />}
      </Modal>
    </>
  );
}

function FaqForm({ faq, onDone }) {
  const dispatch = useDispatch();
  const [f, setF] = useState({ category: faq.category ?? CATEGORIES[0], question: faq.question ?? '', answer: faq.answer ?? '', published: faq.published ?? false });
  const [errors, setErrors] = useState({});

  const submit = (ev) => {
    ev.preventDefault();
    const e = {};
    if (f.question.trim().length < 10) e.question = 'Write the full question (10+ characters).';
    if (f.answer.trim().length < 20) e.answer = 'Answers under 20 characters rarely help.';
    setErrors(e);
    if (Object.keys(e).length) return;
    dispatch(faqSaved({ ...faq, ...f, question: f.question.trim(), answer: f.answer.trim() }));
    dispatch(toastShown(faq.id ? 'Question updated' : 'Question added'));
    onDone();
  };

  return (
    <form className="form-grid" onSubmit={submit} noValidate>
      <Field label="Category">
        {(a) => (
          <select {...a} value={f.category} onChange={(e) => setF({ ...f, category: e.target.value })}>
            {CATEGORIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        )}
      </Field>
      <label className="check align-end">
        <input type="checkbox" checked={f.published} onChange={(e) => setF({ ...f, published: e.target.checked })} /> Published
      </label>
      <div className="span-all">
        <Field label="Question" error={errors.question}>
          {(a) => <input {...a} autoFocus value={f.question} onChange={(e) => setF({ ...f, question: e.target.value })} />}
        </Field>
      </div>
      <div className="span-all">
        <Field label="Answer" error={errors.answer} hint={`${f.answer.length}/600`}>
          {(a) => <textarea {...a} rows={5} maxLength={600} value={f.answer} onChange={(e) => setF({ ...f, answer: e.target.value })} />}
        </Field>
      </div>
      <div className="form-actions span-all">
        <button type="button" className="btn" onClick={onDone}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
}
