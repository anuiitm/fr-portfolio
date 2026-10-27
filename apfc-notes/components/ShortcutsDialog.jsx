'use client';

import { useEffect } from 'react';

const KEYS = [
  ['⌘ K  or  /', 'Search all notes'],
  ['←  →', 'Previous / next topic'],
  ['D', 'Mark topic as done'],
  ['B', 'Bookmark topic'],
  ['R', 'Toggle revision mode (hides prose, keeps facts, tables, traps)'],
  ['\\', 'Show / hide the subject list'],
  ['?', 'This help'],
];

export default function ShortcutsDialog({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="palette-backdrop" onMouseDown={onClose}>
      <div className="dialog" role="dialog" aria-modal="true" aria-label="Keyboard shortcuts" onMouseDown={(e) => e.stopPropagation()}>
        <h3>Keyboard shortcuts</h3>
        <dl>
          {KEYS.map(([k, v]) => (
            <div key={k}>
              <dt>
                <kbd>{k}</kbd>
              </dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <button className="ghost-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
