// EMI schedules: instalments, interest, GST and fees.

/* ---------------- EMI maths ---------------- */
// Standard reducing-balance instalment.
function amortEMI(P, i, n) {
  if (i <= 0) return P / n;
  const f = Math.pow(1 + i, n);
  return P * i * f / (f - 1);
}
// Builds the full schedule: reducing-balance interest, 18% GST on each month's
// interest, processing fee + GST in month one. For no-cost EMI the bank's total
// interest is handed back as an upfront discount, so the financed principal is
// (purchase − interest) and everything is recomputed on that reduced figure.
function buildSchedule(o) {
  const n = Math.max(2, Math.min(36, o.n | 0));
  const i = (o.rate || 0) / 1200;
  const fee = o.fee || 0;
  let principal = o.total, discount = 0;
  if (o.noCost && i > 0) {
    discount = amortEMI(o.total, i, n) * n - o.total;
    principal = o.total - discount;
  }
  const emi = amortEMI(principal, i, n);
  let bal = principal;
  const rows = [];
  for (let k = 0; k < n; k++) {
    const interest = bal * i;
    bal -= (emi - interest);
    let charge = emi + GST * interest;
    if (k === 0) charge += fee * (1 + GST);
    rows.push({ interest, gst: GST * interest, charge });
  }
  const exact = rows.reduce((a, b) => a + b.charge, 0);
  let acc = 0;
  rows.forEach((r, k) => {
    if (k < n - 1) { r.amt = Math.round(r.charge); acc += r.amt; }
    else r.amt = Math.round(exact) - acc;   // last instalment absorbs rounding
  });
  const interestTotal = rows.reduce((a, b) => a + b.interest, 0);
  return {
    n, rows, emi, principal, discount, interestTotal,
    gstTotal: rows.reduce((a, b) => a + b.gst, 0), feeGross: fee * (1 + GST), exact
  };
}
function scheduleDates(startDate, n) {
  const [Y, M, D] = startDate.split('-').map(Number);
  const out = [];
  for (let k = 0; k < n; k++) {
    const dt = new Date(Y, M - 1 + k, 1);
    const y = dt.getFullYear(), m = dt.getMonth();
    out.push({ y, m, d: dKey(y, m, Math.min(D, daysIn(y, m))) });
  }
  return out;
}
