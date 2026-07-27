import os
import sys
from flask import Flask, render_template, request, jsonify

from core_analytics.data_processor import AppReviewDataProcessor
from core_analytics.numpy_engine import NumPyMathEngine
from rag_engine.rag_chain import RAGChatbotChain

app = Flask(__name__)

# Initialize Analytics Data Engine and RAG Chain
data_processor = AppReviewDataProcessor()
rag_chain = RAGChatbotChain(data_processor=data_processor)

@app.route("/")
def home():
    """Renders the main unified Analytics & RAG Chatbot Dashboard."""
    return render_template("index.html")

@app.route("/api/analytics", methods=["GET"])
def get_analytics():
    """API Endpoint: Returns Pandas & NumPy data analytics results."""
    try:
        summary = data_processor.get_summary_metrics()
        by_app = data_processor.get_ratings_by_app()
        category_os_matrix = data_processor.get_category_os_matrix()
        all_reviews = data_processor.filter_reviews("All", "All", "All", "All")
        
        return jsonify({
            "status": "success",
            "data": {
                "summary": summary,
                "ratings_by_app": by_app,
                "category_os_matrix": category_os_matrix,
                "all_reviews": all_reviews['reviews']
            }
        })
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route("/api/filter_reviews", methods=["GET"])
def filter_reviews():
    """API Endpoint: Filters reviews dynamically using Pandas boolean indexing."""
    try:
        selected_app = request.args.get("app", "All")
        selected_os = request.args.get("os", "All")
        sentiment = request.args.get("sentiment", "All")
        feedback_type = request.args.get("type", "All")
        limit_arg = request.args.get("limit", None)
        limit = int(limit_arg) if limit_arg and limit_arg.isdigit() else 10000
        
        result = data_processor.filter_reviews(selected_app, selected_os, sentiment, feedback_type, limit=limit)
        return jsonify({
            "status": "success",
            "data": result
        })
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route("/api/compare_apps", methods=["GET"])
def compare_apps():
    """API Endpoint: Compares two mobile applications side-by-side using Pandas analytics."""
    try:
        app1 = request.args.get("app1", "Instagram")
        app2 = request.args.get("app2", "WhatsApp")
        
        comparison = data_processor.compare_apps(app1, app2)
        return jsonify({
            "status": "success",
            "comparison": comparison
        })
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route("/api/apps_list", methods=["GET"])
def get_apps_list():
    """API Endpoint: Returns list of all 57+ unique apps available in the review dataset."""
    try:
        apps = data_processor.get_unique_apps()
        return jsonify({
            "status": "success",
            "apps": apps
        })
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500


@app.route("/api/chat", methods=["POST"])
def chat():
    """API Endpoint: Processes user query through RAG Chain and returns AI response."""
    try:
        data = request.get_json() or {}
        user_query = data.get("query", "").strip()
        gemini_key = data.get("gemini_api_key", "").strip()
        
        if not user_query:
            return jsonify({"status": "error", "message": "Query string is required"}), 400
            
        import importlib
        import rag_engine.rag_chain
        importlib.reload(rag_engine.rag_chain)
        
        chain = rag_engine.rag_chain.RAGChatbotChain(data_processor=data_processor)
        response_data = chain.answer_user_query(user_query, api_key_override=gemini_key)
        return jsonify({
            "status": "success",
            "result": response_data
        })
    except Exception as e:
        import traceback
        print("CHAT ROUTE ERROR:", traceback.format_exc())
@app.route("/api/datasets", methods=["GET"])
def get_datasets():
    """API Endpoint: Returns inventory of all ingested review CSV datasets and knowledge TXT files."""
    try:
        datasets_list = []
        base_dir = "dataset"
        playstore_dir = os.path.join(base_dir, "playstore_reviews_by_app")
        
        # Scan Playstore review CSVs
        if os.path.exists(playstore_dir):
            for root, _, files in os.walk(playstore_dir):
                for f in files:
                    if f.endswith(".csv"):
                        fpath = os.path.join(root, f)
                        stat = os.stat(fpath)
                        # Count lines roughly
                        line_cnt = 0
                        try:
                            with open(fpath, 'r', encoding='utf-8', errors='ignore') as fp:
                                line_cnt = max(0, sum(1 for _ in fp) - 1)
                        except Exception:
                            pass
                        datasets_list.append({
                            "name": f,
                            "path": fpath,
                            "type": "Review Dataset (CSV)",
                            "size_kb": round(stat.st_size / 1024, 1),
                            "records": line_cnt,
                            "is_deletable": True
                        })
        
        # Scan Knowledge base TXT files
        if os.path.exists(base_dir):
            for root, _, files in os.walk(base_dir):
                for f in files:
                    if f.endswith(".txt"):
                        fpath = os.path.join(root, f)
                        stat = os.stat(fpath)
                        datasets_list.append({
                            "name": f,
                            "path": fpath,
                            "type": "Knowledge Base (TXT)",
                            "size_kb": round(stat.st_size / 1024, 1),
                            "records": "Text Chunks",
                            "is_deletable": (f != "app_knowledge_base.txt")
                        })

        summary_metrics = data_processor.get_summary_metrics()
        return jsonify({
            "status": "success",
            "datasets": datasets_list,
            "summary": summary_metrics
        })
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route("/api/upload_dataset", methods=["POST"])
def upload_dataset():
    """API Endpoint: Uploads a new review CSV or knowledge base TXT dataset file."""
    try:
        if "file" not in request.files:
            return jsonify({"status": "error", "message": "No file attached to request."}), 400
            
        file = request.files["file"]
        dataset_type = request.form.get("dataset_type", "review_csv")
        
        if file.filename == "":
            return jsonify({"status": "error", "message": "No selected file."}), 400
            
        from werkzeug.utils import secure_filename
        filename = secure_filename(file.filename)
        
        if dataset_type == "review_csv" and not filename.lower().endswith(".csv"):
            return jsonify({"status": "error", "message": "Invalid file format. Please upload a .csv file."}), 400
        elif dataset_type == "knowledge_txt" and not filename.lower().endswith(".txt"):
            return jsonify({"status": "error", "message": "Invalid file format. Please upload a .txt file."}), 400

        target_dir = os.path.join("dataset", "playstore_reviews_by_app") if dataset_type == "review_csv" else "dataset"
        os.makedirs(target_dir, exist_ok=True)
        save_path = os.path.join(target_dir, filename)
        file.save(save_path)

        # Trigger dynamic re-ingestion & index building
        data_processor.reload_dataset()
        rag_chain.initialize_rag_system()

        summary_metrics = data_processor.get_summary_metrics()

        return jsonify({
            "status": "success",
            "message": f"Successfully uploaded and indexed '{filename}'.",
            "filename": filename,
            "summary": summary_metrics
        })
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route("/api/delete_dataset", methods=["POST"])
def delete_dataset():
    """API Endpoint: Deletes a dataset file and updates analytics/RAG systems."""
    try:
        data = request.get_json() or {}
        file_path = data.get("file_path", "")
        
        if not file_path or not os.path.exists(file_path):
            return jsonify({"status": "error", "message": "File not found."}), 404
            
        # Protect default fallback files
        basename = os.path.basename(file_path)
        if basename == "app_knowledge_base.txt":
            return jsonify({"status": "error", "message": "Default knowledge base cannot be deleted."}), 400
            
        os.remove(file_path)
        
        # Trigger dynamic re-ingestion
        data_processor.reload_dataset()
        rag_chain.initialize_rag_system()
        
        summary_metrics = data_processor.get_summary_metrics()

        return jsonify({
            "status": "success",
            "message": f"Deleted dataset file '{basename}'.",
            "summary": summary_metrics
        })
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 9000))
    print(f"Launching TecOrb Mobile App Analytics & RAG Chatbot on http://127.0.0.1:{port}")
    app.run(host="0.0.0.0", port=port, debug=False, use_reloader=False)

