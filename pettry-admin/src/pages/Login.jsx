import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signedIn } from '../store/content';
import { Field, Icon } from '../components/ui';

const DEMO = { email: 'admin@pettry.example', password: 'pettry-demo' };

export default function Login() {
  const dispatch = useDispatch();
  const [form, setForm] = useState(DEMO);
  const [error, setError] = useState('');

  const submit = (e) => {
    e.preventDefault();
    // Front-end only demo: any well-formed email with the demo password signs in.
    if (form.password !== DEMO.password) {
      setError('Wrong password. The demo password is filled in for you.');
      return;
    }
    dispatch(signedIn({ name: 'Kavya', email: form.email }));
  };

  return (
    <main className="login">
      <form className="login-card" onSubmit={submit} noValidate>
        <div className="brand">
          <Icon name="paw" size={24} />
          <span>
            Pettry <small>admin</small>
          </span>
        </div>
        <h1>Sign in</h1>
        <p className="muted">This is a demo with mock data. The credentials are pre-filled.</p>
        <Field label="Email">
          {(a) => <input {...a} type="email" autoComplete="username" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />}
        </Field>
        <Field label="Password" error={error}>
          {(a) => (
            <input
              {...a}
              type="password"
              autoComplete="current-password"
              required
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
                setError('');
              }}
            />
          )}
        </Field>
        <button type="submit" className="btn btn-primary btn-block">
          Sign in
        </button>
      </form>
    </main>
  );
}
