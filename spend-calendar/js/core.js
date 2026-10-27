// Shared by every file: constants, app state, small helpers, $ and toast.
// The js/ files are plain scripts sharing one scope, loaded in the order
// index.html lists them; main.js (last) starts the app.

// The starting set; after that the card list lives in settings.cards and is
// edited on the Cards tab.
const DEFAULT_CARDS = [
  { id: 'icici', name: 'ICICI', color: '#E8590C' },
  { id: 'yes', name: 'Yes Bank', color: '#0B7FD4' },
  { id: 'slice', name: 'Slice', color: '#9b7cf1' },
  { id: 'au', name: 'AU', color: '#D6206E' },
  { id: 'sbi', name: 'SBI', color: '#0E9384' },
  { id: 'idfc', name: 'IDFC', color: '#B3261E' },
];
let CARDS = [], CARD = {};
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const GST = 0.18;

const pad = n => String(n).padStart(2, '0');
const ymKey = (y, m) => `${y}-${pad(m + 1)}`;
const dKey = (y, m, d) => `${y}-${pad(m + 1)}-${pad(d)}`;
const daysIn = (y, m) => new Date(y, m + 1, 0).getDate();
const money = n => '₹' + Math.round(n).toLocaleString('en-IN');
const money2 = n => '₹' + Number(n).toLocaleString('en-IN', { maximumFractionDigits: 2 });
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

const now = new Date();
let view = { y: now.getFullYear(), m: now.getMonth() };
let selected = dKey(now.getFullYear(), now.getMonth(), now.getDate());
let months = {};
let settings = { cycle: {}, mode: 'month' };
let filter = null, editingId = null, pickedCard = DEFAULT_CARDS[0].id;
let emiOn = false, noCost = false;
let payments = {};

const $ = id => document.getElementById(id);


/* ---------------- toast ---------------- */
let tt;
function toast(msg) {
  const el = $('toast'); el.textContent = msg; el.classList.add('on');
  clearTimeout(tt); tt = setTimeout(() => el.classList.remove('on'), 2000);
}
