# TecOrb Mobile App Analytics & GenAI RAG Hardware Assistant

A dual-engine Python web application created for **TecOrb Solutions Mobile Development** onboarding & Academic Viva Defense.

## 🚀 Key Modules & Architecture

### 1. Core Analytics Engine (`core_analytics/`)
- **`data_processor.py` (Pandas Engine)**: Loads and cleans `dataset/app_reviews.csv`. Demonstrates `pd.read_csv`, `groupby('app_name')`, `pivot_table`, value counts, and dynamic boolean indexing for multi-criteria review filtering.
- **`numpy_engine.py` (NumPy Engine)**: Pure vector linear algebra module computing statistical metrics (mean, std, median, percentiles), Z-score normalization, L2-norm, and explicit vector Cosine Similarity dot-products:
  $$\text{Cosine Similarity} = \frac{\mathbf{q} \cdot \mathbf{d}}{\|\mathbf{q}\|_2 \|\mathbf{d}\|_2}$$

### 2. GenAI RAG Engine (`rag_engine/`)
- **`document_loader.py`**: Sliding window text chunker for TecOrb mobile manuals & phone/laptop hardware troubleshooting guides.
- **`vector_store.py`**: TF-IDF embedding vector matrix with top-$K$ cosine similarity retrieval.
- **`rag_chain.py`**: Intent classifier supporting conversational greetings, TecOrb mobile app support, phone/laptop hardware fixes (lagging, overheating, battery drain), Google Gemini AI API integration, and offline fallback synthesis.

### 3. Web Dashboard & UI (`app.py`, `templates/`, `static/`)
- **Flask REST API Server (`app.py`)**: Endpoints `/`, `/api/analytics`, `/api/filter_reviews`, `/api/chat`.
- **Modern Responsive Web UI**: Dynamic particle background canvas, mouse movement ambient glow, interactive filters, review table logs, and quick prompt suggestion pills.

---

## 🛠️ How to Run

1. Open terminal in project directory:
   ```bash
   cd c:\Users\rahul\OneDrive\Desktop\project\tecorb-mobile-analytics-rag
   ```

2. Run Flask app:
   ```bash
   python app.py
   ```

3. Open in Browser:
   Navigate to [http://127.0.0.1:9000](http://127.0.0.1:9000)

