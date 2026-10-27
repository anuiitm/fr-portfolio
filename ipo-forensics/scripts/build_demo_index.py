"""Builds data/index.json for the front-end demo from the full chunk store.

    python3 -I scripts/build_demo_index.py <path/to/chunks.jsonl> data/index.json

The production app retrieves from 10,317 chunks in ChromaDB. The demo ships a
small, real subset: for every company, the passages that the report's section
queries rank highest (BM25), plus passages for a few common questions. Nothing
in the output is written by a model; every passage is verbatim document text.
"""
import json
import math
import re
import sys
from collections import Counter, defaultdict

SRC, OUT = sys.argv[1], sys.argv[2]

# Same queries as src/rag/prompts.py in the main project.
SECTIONS = [
    ("Business overview", "business products services revenue model geography", "DRHP"),
    ("Industry and market", "industry overview market size competition growth", "DRHP"),
    ("Objects of the issue", "objects of the issue IPO proceeds utilization", "DRHP"),
    ("Financial highlights", "revenue EBITDA profit margins EPS ROE ROCE", "quarterly_presentation"),
    ("Cash flow", "cash flow operating investing financing profit cash mismatch", "quarterly_presentation"),
    ("Risk factors", "risk factors key risks dependency litigation regulatory", "DRHP"),
    ("Promoters and management", "promoter holding directors management background", "DRHP"),
    ("Related party transactions", "related party transactions loans guarantees purchases sales", "DRHP"),
    ("Peer comparison and valuation", "peer comparison valuation P/E P/B EV EBITDA basis of issue price", "DRHP"),
    ("Red flags", "auditor qualification legal proceedings OFS client concentration negative cash flow", "DRHP"),
]
EXTRA = [
    "outstanding litigation criminal proceedings tax", "top customers concentration percentage revenue",
    "borrowings debt repayment", "offer for sale selling shareholders", "employees attrition",
    "guidance outlook next year growth", "net loss restated", "dividend policy",
]
PER_SECTION = 3
PER_EXTRA = 2

STOP = set("a an and are as at be by for from has have in is it its of on or that the this to was were will with which our we us not no any all may such other than into".split())


def tokens(text):
    return [t for t in re.findall(r"[a-z0-9]+(?:/[a-z]+)?", text.lower()) if t not in STOP and len(t) > 1]


def clean(text):
    # PDF extraction leaves the page number glued to the first line.
    text = re.sub(r"^\s*\d{1,4}\s+(?=[A-Za-z])", "", text)
    text = re.sub(r"(\w) -(\w)", r"\1-\2", text)
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\s*\n\s*", "\n", text)
    return text.strip()


chunks = [json.loads(l) for l in open(SRC)]
by_company = defaultdict(list)
for c in chunks:
    c["toks"] = tokens(c["text"])
    by_company[c["company"]].append(c)


def bm25(pool, query, k1=1.5, b=0.75):
    q = tokens(query)
    n = len(pool)
    avg = sum(len(c["toks"]) for c in pool) / max(n, 1)
    df = Counter(t for c in pool for t in set(c["toks"]))
    out = []
    for c in pool:
        tf = Counter(c["toks"])
        dl = len(c["toks"])
        s = 0.0
        for t in q:
            if t not in tf:
                continue
            idf = math.log(1 + (n - df[t] + 0.5) / (df[t] + 0.5))
            s += idf * tf[t] * (k1 + 1) / (tf[t] + k1 * (1 - b + b * dl / avg))
        out.append((s, c))
    out.sort(key=lambda x: -x[0])
    return [c for s, c in out if s > 0]


keep = {}
for company, pool in by_company.items():
    for _, query, doc in SECTIONS:
        sub = [c for c in pool if c["doc_type"] == doc] or pool
        for c in bm25(sub, query)[:PER_SECTION]:
            keep[c["chunk_id"]] = c
    for query in EXTRA:
        for c in bm25(pool, query)[:PER_EXTRA]:
            keep[c["chunk_id"]] = c

DOC_LABEL = {"DRHP": "DRHP", "quarterly_presentation": "Investor presentation", "concall_transcript": "Earnings call"}
out = {
    "fullIndex": {"chunks": len(chunks), "companies": sorted(by_company)},
    "sections": [{"name": n, "query": q, "doc": d} for n, q, d in SECTIONS],
    "docLabels": DOC_LABEL,
    "chunks": [
        {"id": c["chunk_id"][:10], "company": c["company"], "doc": c["doc_type"], "page": c["page"], "text": clean(c["text"])}
        for c in sorted(keep.values(), key=lambda c: (c["company"], c["doc_type"], c["page"], c["chunk_index"]))
    ],
}
json.dump(out, open(OUT, "w"), ensure_ascii=False, separators=(",", ":"))
print(len(out["chunks"]), "passages", Counter(c["company"] for c in out["chunks"]))
