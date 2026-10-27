# IPO Forensics (front end)

Reads an Indian IPO's offer document (DRHP), investor presentation and earnings call on ten questions an analyst asks: business, industry, use of proceeds, financials, cash flow, risks, promoters, related parties, valuation and red flags. Every passage is cited to its page.

No build step. Serve the folder with any static server:

```bash
python3 -m http.server   # then open http://localhost:8000
```

## How it relates to the full project

The full system (a separate repository) indexes 10,317 chunks from 15 PDFs in ChromaDB. A FastAPI service retrieves passages and Llama 3.1 8B (via Ollama) writes cited answers. The pipeline runs on Airflow, DVC and MLflow, with Prometheus and Grafana for monitoring.

This front end ships 217 of those chunks (`data/index.json`, 89 KB gzipped) and runs the same retrieval step, BM25, in the browser. It shows the evidence a model would receive rather than a generated summary, so nothing on the page is model-written. `scripts/build_demo_index.py` rebuilds the subset from the full chunk store.

## Compared with the Streamlit UI

- The thumbs-down comment box only appeared after a rerun, so the saved comment was always empty. Here the feedback is a normal form, saved locally and downloadable as JSON.
- The sidebar dumped raw readiness JSON. Here, retrieval time is measured and shown.
- Query terms are highlighted, the "Show full passage" toggle is accessible, and citations are numbered and link to their source passage.
