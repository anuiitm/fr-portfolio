import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMe } from '../../store';
import { draftReplaced, statusOf } from '../../store/products';
import { toastShown } from '../../store/people';
import { diffSections, pointCount, sectionsToCsv, summarise } from '../../lib/checklist';
import { download, fmtDateTime } from '../../lib/format';
import { navigate } from '../../lib/router';
import { Badge, Icon } from '../../components/ui';
import DiffTable from './DiffTable';

export default function VersionsTab({ product }) {
  const me = useSelector(selectMe);
  const users = useSelector((s) => s.users.entities);
  const dispatch = useDispatch();
  const versions = [...product.versions].reverse();
  const [selected, setSelected] = useState(versions[0].version);
  const v = product.versions.find((x) => x.version === selected);
  const prev = product.versions.find((x) => x.version === selected - 1);
  const diff = prev ? diffSections(prev.sections, v.sections) : [];
  const canRestore = (me.role === 'applier' || me.role === 'maker') && ['live', 'draft'].includes(statusOf(product)) && selected !== product.version;

  return (
    <div className="versions">
      <ol className="version-list">
        {versions.map((x) => {
          const p = product.versions.find((y) => y.version === x.version - 1);
          const c = p ? summarise(diffSections(p.sections, x.sections)) : null;
          return (
            <li key={x.version}>
              <button type="button" aria-pressed={selected === x.version} onClick={() => setSelected(x.version)}>
                <span className="v-num">v{x.version}</span>
                <span className="v-body">
                  <b>{x.note}</b>
                  <span className="muted small">
                    {fmtDateTime(x.at)}, {users[x.by]?.name ?? 'Unknown'}
                  </span>
                  <span className="muted small">{c ? `+${c.added}, ~${c.modified}, −${c.removed}` : `${pointCount(x.sections)} points`}</span>
                </span>
                {x.version === product.version && <Badge tone="ok">Live</Badge>}
              </button>
            </li>
          );
        })}
      </ol>
      <div>
        <div className="toolbar">
          <h2 className="h-sm">{prev ? `What changed in v${selected}` : `v${selected}, the first release`}</h2>
          <span className="spacer" />
          <button type="button" className="btn btn-sm" onClick={() => download(`${product.id}-v${selected}.csv`, sectionsToCsv(v.sections))}>
            <Icon name="download" /> CSV
          </button>
          {canRestore && (
            <button
              type="button"
              className="btn btn-sm"
              onClick={() => {
                dispatch(draftReplaced({ productId: product.id, sections: structuredClone(v.sections), existing: product.draft?.sections ?? product.sections, userId: me.id, reason: `Restored v${selected} as a draft` }));
                dispatch(toastShown(`v${selected} copied into the draft`));
                navigate(`/checklists/${product.id}/changes`);
              }}
            >
              <Icon name="history" /> Restore as draft
            </button>
          )}
        </div>
        {prev ? <DiffTable diff={diff} empty="Same points as the version before." /> : <p className="muted">{pointCount(v.sections)} points across {v.sections.length} sections.</p>}
      </div>
    </div>
  );
}
