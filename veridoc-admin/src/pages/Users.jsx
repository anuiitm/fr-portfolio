import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMe, usersSel } from '../store';
import { ROLES, roleChanged, toastShown, userDeactivated, userInvited } from '../store/people';
import { Badge, Field, Icon, Modal, PageHeader } from '../components/ui';

const STATUS_TONE = { active: 'ok', invited: 'info', disabled: 'neutral' };

export default function Users() {
  const users = useSelector(usersSel.selectAll);
  const me = useSelector(selectMe);
  const dispatch = useDispatch();
  const [inviting, setInviting] = useState(false);

  return (
    <>
      <PageHeader title="Users & roles" sub="Three roles, so no single person can take a change from draft to live alone.">
        <button type="button" className="btn btn-primary" onClick={() => setInviting(true)}>
          <Icon name="plus" /> Invite user
        </button>
      </PageHeader>

      <ol className="roles">
        {Object.entries(ROLES).map(([key, r], i) => (
          <li key={key} className="card role">
            <span className="role-step">Step {i + 1}</span>
            <h2>{r.label}</h2>
            <ul>
              {r.can.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="muted small">{users.filter((u) => u.role === key && u.status !== 'disabled').length} people</p>
          </li>
        ))}
      </ol>

      <div className="card card-flush">
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Role</th>
                <th scope="col">Status</th>
                <th scope="col">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className={u.status === 'disabled' ? 'row-muted' : undefined}>
                  <th scope="row">
                    {u.name}
                    {u.id === me.id && <span className="muted"> (you)</span>}
                    <br />
                    <small className="muted">{u.email}</small>
                  </th>
                  <td>
                    <select
                      aria-label={`Role for ${u.name}`}
                      value={u.role}
                      disabled={u.id === me.id}
                      onChange={(e) => {
                        dispatch(roleChanged({ id: u.id, role: e.target.value, by: me.id }));
                        dispatch(toastShown(`${u.name} is now ${ROLES[e.target.value].label.toLowerCase()}`));
                      }}
                    >
                      {Object.entries(ROLES).map(([k, r]) => (
                        <option key={k} value={k}>
                          {r.label}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <Badge tone={STATUS_TONE[u.status]}>{u.status}</Badge>
                  </td>
                  <td className="row-actions">
                    {u.id !== me.id && (
                      <button type="button" className="btn btn-sm" onClick={() => dispatch(userDeactivated({ id: u.id, by: me.id }))}>
                        {u.status === 'disabled' ? 'Enable' : 'Disable'}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal open={inviting} title="Invite a user" onClose={() => setInviting(false)}>
        {inviting && <InviteForm users={users} onDone={() => setInviting(false)} />}
      </Modal>
    </>
  );
}

function InviteForm({ users, onDone }) {
  const me = useSelector(selectMe);
  const dispatch = useDispatch();
  const [f, setF] = useState({ name: '', email: '', role: 'maker' });
  const [errors, setErrors] = useState({});

  const submit = (ev) => {
    ev.preventDefault();
    const e = {};
    if (f.name.trim().split(/\s+/).length < 2) e.name = 'First and last name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = 'Enter a valid work email.';
    else if (users.some((u) => u.email.toLowerCase() === f.email.trim().toLowerCase())) e.email = 'This person already has access.';
    setErrors(e);
    if (Object.keys(e).length) return;
    dispatch(userInvited({ name: f.name.trim(), email: f.email.trim().toLowerCase(), role: f.role, by: me.id }));
    dispatch(toastShown(`Invitation sent to ${f.email.trim()}`));
    onDone();
  };

  return (
    <form className="stack" onSubmit={submit} noValidate>
      <Field label="Full name" error={errors.name}>
        {(a) => <input {...a} autoFocus value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />}
      </Field>
      <Field label="Work email" error={errors.email}>
        {(a) => <input {...a} type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />}
      </Field>
      <Field label="Role">
        {(a) => (
          <select {...a} value={f.role} onChange={(e) => setF({ ...f, role: e.target.value })}>
            {Object.entries(ROLES).map(([k, r]) => (
              <option key={k} value={k}>
                {r.label}
              </option>
            ))}
          </select>
        )}
      </Field>
      <div className="form-actions">
        <button type="button" className="btn" onClick={onDone}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Send invite
        </button>
      </div>
    </form>
  );
}
