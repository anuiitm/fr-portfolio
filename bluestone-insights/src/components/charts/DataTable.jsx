// Every chart ships its numbers as a real table too: screen readers get the
// data, and anyone can copy it.
export default function DataTable({ caption, head, rows }) {
  return (
    <details className="data-table">
      <summary>View as table</summary>
      <div className="table-scroll">
        <table>
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr>
              {head.map((h) => (
                <th key={h} scope="col">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]}>
                {r.map((c, i) => (i === 0 ? <th key={i} scope="row">{c}</th> : <td key={i}>{c}</td>))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  );
}
