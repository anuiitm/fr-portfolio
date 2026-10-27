"""Aggregate the 219k-row BlueStone review export into a small JSON for the web app.

Usage: python3 -I bluestone_aggregate.py <csv> <out.json>

Differences from the original notebook, on purpose:
- Uses the absolute `published_at_date` timestamp (present on every row) instead of
  re-parsing "a year ago" strings, which shifted dates by up to 6 months.
- De-duplicates on review_id.
- Drops rows that are not BlueStone stores (a PC Jeweller listing, the corporate office).
- Counts complaint themes multi-label (a review can be about price AND staff) instead of
  first-match, which biased counts toward whichever theme was listed first.
- Strips reviewer names / profile links entirely; quotes are trimmed and scrubbed of
  phone numbers and emails.
"""
import json
import re
import sys

import numpy as np
import pandas as pd

SRC, OUT = sys.argv[1], sys.argv[2]
SCRAPE_DATE = pd.Timestamp('2026-01-07')

EXCLUDE = {'PC Jeweller Hapur', 'BlueStone Jewellery Corporate Office, Bengaluru', 'Blue stone jewellery'}

# Names without a ", City" suffix: area -> (area, city)
MANUAL = {
    'BLUESTONE Diamond Jewellery Jhansi': ('Jhansi', 'Jhansi'),
    'BlueStone Jewellery Ambedkar Road': ('Ambedkar Road', 'Ghaziabad'),
    'BlueStone Jewellery Bungalow Road - Kamla Nagar': ('Bungalow Road, Kamla Nagar', 'New Delhi'),
    'BlueStone Jewellery CBD Belapur': ('CBD Belapur', 'Navi Mumbai'),
    'BlueStone Jewellery Cathedral Road': ('Cathedral Road', 'Chennai'),
    'BlueStone Jewellery Chanda Nagar': ('Chanda Nagar', 'Hyderabad'),
    'BlueStone Jewellery Dwarka': ('Dwarka', 'New Delhi'),
    'BlueStone Jewellery GMS Dehradun': ('GMS Road', 'Dehradun'),
    'BlueStone Jewellery Jayanagar Bangalore': ('Jayanagar', 'Bengaluru'),
    'BlueStone Jewellery Jayanagar Bengaluru': ('Jayanagar 4th Block', 'Bengaluru'),
    'BlueStone Jewellery Kanchrapara': ('Kanchrapara', 'Kanchrapara'),
    'BlueStone Jewellery Karve Road': ('Karve Road', 'Pune'),
    'BlueStone Jewellery Koramangala': ('Koramangala', 'Bengaluru'),
    'BlueStone Jewellery Lajpat Nagar': ('Lajpat Nagar', 'New Delhi'),
    'BlueStone Jewellery MG Road Kochi': ('MG Road', 'Kochi'),
    'BlueStone Jewellery Marathahalli Bengaluru': ('Marathahalli', 'Bengaluru'),
    'BlueStone Jewellery Meerut': ('Meerut', 'Meerut'),
    'BlueStone Jewellery Mulund West': ('Mulund West', 'Mumbai'),
    'BlueStone Jewellery Panch Pakhadi Thane': ('Panch Pakhadi', 'Thane'),
    'BlueStone Jewellery Pitampura': ('Pitampura', 'New Delhi'),
    'BlueStone Jewellery Prayagraj': ('Prayagraj', 'Prayagraj'),
    'BlueStone Jewellery Ranchi': ('Ranchi', 'Ranchi'),
    'BlueStone Jewellery Shahdara New Delhi': ('Shahdara', 'New Delhi'),
    'BlueStone Jewellery VIP Road Raipur': ('VIP Road', 'Raipur'),
    'BlueStone Jewellery VR Chennai': ('VR Mall', 'Chennai'),
    'BlueStone Jewellery Visakhapatnam': ('Visakhapatnam', 'Visakhapatnam'),
    'BlueStone Jewellery | Gold & Diamond Jewellery in Himayatnagar': ('Himayatnagar', 'Hyderabad'),
    'Bluestone Jewellery Avadi Chennai': ('Avadi', 'Chennai'),
    'BlueStone Jewellery Borivali, West': ('Borivali West', 'Mumbai'),
}
CITY_ALIAS = {'Bangalore': 'Bengaluru', 'Gurgaon': 'Gurugram', 'Delhi': 'New Delhi', 'Bombay': 'Mumbai'}

THEMES = {
    'scheme': ('Gold scheme / 11+1 plan', r"\b11\s*\+\s*1\b|\bscheme|monthly plan|instal+ment|\bmaturity|redempt|redeem|gold ?mine|treasure chest"),
    'price': ('Making charges & pricing', r"making charge|making cost|overpric|\bexpensive|too costly|very costly|high price|price is high|value for money|hidden charge|\bgst\b|wastage"),
    'staff': ('Staff behaviour', r"\brude|attitude|arrogan|misbehav|unprofessional|\bignor|not attend|didn'?t attend|did not attend|behaviou?r|no one (was )?(there|present)|\bwait(ed|ing)? for"),
    'refund': ('Refunds, returns & exchange', r"\brefund|return policy|\breturn(ed)? (the|my|it)\b|\bexchange|money back|not credited|\bdeduct|buy ?back"),
    'quality': ('Product quality & finish', r"\bbroke|broken|damage|defect|polish|\bfad(e|ed|ing)\b|turned black|\bloose\b|fell off|fallen off|quality|tarnish|\bbent\b|colou?r (came|faded|went)"),
    'stock': ('Stock & design availability', r"out of stock|not available|no stock|not in stock|limited (collection|design|option)|less (collection|design|option)|few designs|no collection|no designs"),
    'delivery': ('Delivery & order delays', r"deliver|courier|\bdelay|\blate\b|not received|order (was |is |has been )?(delay|cancel|pending)"),
    'service': ('Response & after-sales service', r"customer (care|service|support)|no response|not respond|call ?back|no reply|never (called|replied)|repair|poor service|worst service|bad service|pathetic service|service centre|service center"),
}

PHONE = re.compile(r'(\+?\d[\d\s-]{8,}\d)')
EMAIL = re.compile(r'\S+@\S+\.\S+')


def clean_text(t):
    t = PHONE.sub('[number removed]', t)
    t = EMAIL.sub('[email removed]', t)
    t = re.sub(r'\s+', ' ', t).strip()
    return t


def split_name(name):
    if name in MANUAL:
        return MANUAL[name]
    s = re.sub(r'^BlueStone Jewellery\s*(\|[^|]*?\bin\s+)?[,\s-]*', '', name, flags=re.I)
    area, city = s.rsplit(',', 1)
    city = city.strip()
    return area.strip(' -,'), CITY_ALIAS.get(city, city)


THEME_RE = {k: re.compile(p, re.I) for k, (_, p) in THEMES.items()}


def themes_for(text):
    return [k for k, rx in THEME_RE.items() if rx.search(text)]


def sla_bucket(days):
    if pd.isna(days):
        return 'none'
    if days <= 1:
        return 'day'
    if days <= 7:
        return 'week'
    if days <= 30:
        return 'month'
    return 'late'


df = pd.read_csv(SRC, usecols=['place_id', 'place_name', 'review_id', 'rating', 'review_text', 'review_translated_text',
                               'published_at_date', 'response_from_owner_date', 'is_local_guide'], low_memory=False)
n_raw = len(df)
df = df.drop_duplicates('review_id')
n_dedup = len(df)
names = df.groupby('place_id').place_name.agg(lambda s: s.mode()[0])
df['store_name'] = df.place_id.map(names)
excluded = int(df.store_name.isin(EXCLUDE).sum())
df = df[~df.store_name.isin(EXCLUDE)].copy()

df['date'] = pd.to_datetime(df.published_at_date, errors='coerce')
df['resp'] = pd.to_datetime(df.response_from_owner_date, errors='coerce')
df['latency'] = (df.resp - df.date).dt.total_seconds() / 86400
df.loc[df.latency < 0, 'latency'] = np.nan
df['sla'] = df.latency.map(sla_bucket)
df['neg'] = df.rating <= 3
df['text'] = df.review_translated_text.where(df.review_translated_text.notna(), df.review_text).fillna('').astype(str)
df['has_text'] = df.text.str.strip().str.len() > 0
df['year'] = df.date.dt.year
df['ym'] = df.date.dt.strftime('%Y-%m')

neg_text = df[df.neg & df.has_text].copy()
neg_text['themes'] = neg_text.text.map(themes_for)

store_ids = {pid: f's{i:03d}' for i, pid in enumerate(sorted(df.place_id.unique()))}

# ---------- network level ----------
monthly = (df.groupby('ym').agg(n=('rating', 'size'), avg=('rating', 'mean'), neg=('neg', 'sum'),
                                resp=('resp', lambda s: int(s.notna().sum())))
           .reset_index())
monthly = [{'m': r.ym, 'n': int(r.n), 'avg': round(float(r.avg), 3), 'neg': int(r.neg), 'resp': int(r.resp)} for r in monthly.itertuples()]

years = []
for y, g in df.groupby('year'):
    lat = g.latency.dropna()
    sla = g.sla.value_counts().to_dict()
    years.append({
        'y': int(y), 'n': int(len(g)), 'avg': round(float(g.rating.mean()), 3), 'neg': int(g.neg.sum()),
        'responded': int(g.resp.notna().sum()),
        'p25': round(float(lat.quantile(.25)), 2) if len(lat) else None,
        'p50': round(float(lat.median()), 2) if len(lat) else None,
        'p75': round(float(lat.quantile(.75)), 2) if len(lat) else None,
        'sla': {k: int(sla.get(k, 0)) for k in ['day', 'week', 'month', 'late', 'none']},
    })

# The notebook's method, recomputed here only so the page can show the size of the error.
def relative_label(d):
    days = (SCRAPE_DATE - d).days
    if days < 7: return SCRAPE_DATE - pd.Timedelta(days=max(days, 1))
    if days < 30: return SCRAPE_DATE - pd.Timedelta(weeks=days // 7)
    if days < 365: return SCRAPE_DATE - pd.DateOffset(months=max(days // 30, 1))
    return SCRAPE_DATE - pd.DateOffset(years=max(days // 365, 1))

sample = df[df.resp.notna()].sample(20000, random_state=7).copy()
sample['naive_date'] = sample.date.map(relative_label)
sample['naive_latency'] = (sample.resp - sample.naive_date).dt.total_seconds().abs() / 86400
naive_sla = sample.naive_latency.map(sla_bucket).value_counts(normalize=True).round(4).to_dict()
exact_sla = sample.latency.map(sla_bucket).value_counts(normalize=True).round(4).to_dict()

dow = df.date.dt.dayofweek.value_counts().sort_index()
weekday_neg = df.groupby(df.date.dt.dayofweek).neg.mean()

theme_counts = {}
for k in THEMES:
    theme_counts[k] = int(neg_text.themes.map(lambda ts: k in ts).sum())
untagged = int((neg_text.themes.map(len) == 0).sum())
theme_by_year = {}
for y, g in neg_text.groupby('year'):
    theme_by_year[int(y)] = {k: int(g.themes.map(lambda ts: k in ts).sum()) for k in THEMES}
    theme_by_year[int(y)]['_n'] = int(len(g))

# ---------- quotes ----------
rng = np.random.default_rng(11)
quotes = []
for k in THEMES:
    pool = neg_text[neg_text.themes.map(lambda ts: k in ts) & neg_text.text.str.len().between(80, 420)]
    pool = pool[pool.date >= '2022-01-01']
    if len(pool) == 0:
        continue
    pick = pool.sample(min(8, len(pool)), random_state=int(rng.integers(1e6)))
    for r in pick.itertuples():
        quotes.append({'theme': k, 'store': store_ids[r.place_id], 'rating': int(r.rating),
                       'date': r.date.strftime('%Y-%m'), 'text': clean_text(r.text)[:420]})

# ---------- stores ----------
stores = []
for pid, g in df.groupby('place_id'):
    area, city = split_name(names[pid])
    lat = g.latency.dropna()
    recent = g[g.date >= '2025-01-01']
    rl = recent.latency.dropna()
    nt = neg_text[neg_text.place_id == pid]
    dist = g.rating.value_counts().reindex([1, 2, 3, 4, 5], fill_value=0).astype(int).tolist()
    yearly = g.assign(fast=g.latency <= 1).groupby('year').agg(n=('rating', 'size'), stars=('rating', 'sum'), neg=('neg', 'sum'), fast=('fast', 'sum'))
    stores.append({
        'id': store_ids[pid], 'area': area, 'city': city,
        'first': g.date.min().strftime('%Y-%m'),
        'n': int(len(g)), 'avg': round(float(g.rating.mean()), 3), 'neg': int(g.neg.sum()),
        'dist': dist,
        'responded': int(g.resp.notna().sum()),
        'p50': round(float(lat.median()), 2) if len(lat) else None,
        'recentN': int(len(recent)), 'recentNeg': int(recent.neg.sum()),
        'recentP50': round(float(rl.median()), 2) if len(rl) else None,
        'themes': {k: int(nt.themes.map(lambda ts: k in ts).sum()) for k in THEMES if nt.themes.map(lambda ts: k in ts).sum()},
        'negText': int(len(nt)),
        # [year, reviews, sum of stars, reviews rated <= 3, replies within 24h]
        'years': [[int(y), int(r.n), int(r.stars), int(r.neg), int(r.fast)] for y, r in yearly.iterrows()],
    })

out = {
    'meta': {
        'scrapeDate': '2026-01-07', 'rowsRaw': n_raw, 'rowsDeduped': n_dedup, 'rowsExcluded': excluded,
        'reviews': int(len(df)), 'stores': len(stores), 'cities': len({s['city'] for s in stores}),
        'withText': int(df.has_text.sum()), 'negWithText': int(len(neg_text)), 'untaggedNeg': untagged,
        'first': df.date.min().strftime('%Y-%m-%d'), 'last': df.date.max().strftime('%Y-%m-%d'),
        'avg': round(float(df.rating.mean()), 3),
        'dist': df.rating.value_counts().reindex([1, 2, 3, 4, 5], fill_value=0).astype(int).tolist(),
        'responded': int(df.resp.notna().sum()),
        'localGuides': int((df.is_local_guide == True).sum()),
    },
    'themes': {k: {'label': v[0], 'pattern': v[1], 'count': theme_counts[k]} for k, v in THEMES.items()},
    'themeByYear': theme_by_year,
    'monthly': monthly,
    'years': years,
    'weekday': {'n': [int(x) for x in dow.tolist()], 'negRate': [round(float(x), 4) for x in weekday_neg.tolist()]},
    'methodCheck': {'sampleSize': len(sample), 'relativeParsing': naive_sla, 'exactTimestamps': exact_sla},
    'stores': stores,
    'quotes': quotes,
}
negative = [[store_ids[r.place_id], int(r.rating), r.date.strftime('%Y-%m'), clean_text(r.text)]
            for r in neg_text.sort_values('date', ascending=False).itertuples()]
with open(OUT.replace('.json', '-negative.json'), 'w') as f:
    json.dump(negative, f, separators=(',', ':'), ensure_ascii=False)
with open(OUT, 'w') as f:
    json.dump(out, f, separators=(',', ':'), ensure_ascii=False)
print('stores', len(stores), 'reviews', len(df), 'excluded', excluded, 'dupes', n_raw - n_dedup)
print('naive', naive_sla)
print('exact', exact_sla)
print('themes', theme_counts, 'untagged', untagged)
