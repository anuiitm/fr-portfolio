import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { settingsSaved, themeChanged, toastShown } from '../store/content';
import { demoReset } from '../store';
import { Field, PageHeader } from '../components/ui';

export default function Settings() {
  const settings = useSelector((s) => s.settings);
  const dispatch = useDispatch();
  // Theme applies instantly (it is also in the top bar), so it stays out of the form.
  const [f, setF] = useState(() => Object.fromEntries(Object.entries(settings).filter(([k]) => k !== 'theme').map(([k, v]) => [k, String(v)])));
  const [errors, setErrors] = useState({});
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const dirty = Object.keys(f).some((k) => f[k] !== String(settings[k]));

  const submit = (ev) => {
    ev.preventDefault();
    const e = {};
    if (!f.storeName.trim()) e.storeName = 'Required.';
    if (!/^\S+@\S+\.\S+$/.test(f.supportEmail)) e.supportEmail = 'Enter a valid email.';
    for (const k of ['lowStock', 'freeShippingOver', 'taxRate']) if (!(Number(f[k]) >= 0)) e[k] = 'Zero or more.';
    setErrors(e);
    if (Object.keys(e).length) return;
    dispatch(settingsSaved({ ...f, lowStock: Number(f.lowStock), freeShippingOver: Number(f.freeShippingOver), taxRate: Number(f.taxRate) }));
    dispatch(toastShown('Settings saved'));
  };

  return (
    <>
      <PageHeader title="Settings" />
      <form className="card form-grid settings" onSubmit={submit} noValidate>
        <h2 className="span-all card-title">Store</h2>
        <Field label="Store name" error={errors.storeName}>
          {(a) => <input {...a} value={f.storeName} onChange={set('storeName')} />}
        </Field>
        <Field label="Support email" error={errors.supportEmail}>
          {(a) => <input {...a} type="email" value={f.supportEmail} onChange={set('supportEmail')} />}
        </Field>
        <h2 className="span-all card-title card-title-gap">Rules</h2>
        <Field label="Low-stock threshold" error={errors.lowStock} hint="Products at or below this count are flagged.">
          {(a) => <input {...a} inputMode="numeric" value={f.lowStock} onChange={set('lowStock')} />}
        </Field>
        <Field label="Free shipping over (₹)" error={errors.freeShippingOver}>
          {(a) => <input {...a} inputMode="numeric" value={f.freeShippingOver} onChange={set('freeShippingOver')} />}
        </Field>
        <Field label="GST rate (%)" error={errors.taxRate}>
          {(a) => <input {...a} inputMode="decimal" value={f.taxRate} onChange={set('taxRate')} />}
        </Field>
        <Field label="Theme" hint="Applies right away.">
          {(a) => (
            <select {...a} value={settings.theme} onChange={(e) => dispatch(themeChanged(e.target.value))}>
              <option value="system">Match the system</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          )}
        </Field>
        <div className="form-actions span-all">
          <button type="submit" className="btn btn-primary" disabled={!dirty}>
            Save settings
          </button>
        </div>
      </form>

      <section className="card danger-zone">
        <h2 className="card-title">Demo data</h2>
        <p className="muted">Changes are saved in this browser. Resetting brings back the original orders, products and codes.</p>
        <button
          type="button"
          className="btn btn-danger-ghost"
          onClick={() => {
            if (window.confirm('Reset all demo data? Your changes will be lost.')) {
              dispatch(demoReset());
              dispatch(toastShown('Demo data reset', 'warn'));
            }
          }}
        >
          Reset demo data
        </button>
      </section>
    </>
  );
}
