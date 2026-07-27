import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from core_analytics.numpy_engine import NumPyMathEngine

class NumPyVectorStore:
    """
    Custom Vector Database powered by NumPy Cosine Similarity.
    Converts document chunks to sparse/dense embeddings and retrieves top-k relevant contexts.
    """
    
    def __init__(self):
        self.vectorizer = TfidfVectorizer(ngram_range=(1, 2), stop_words='english')
        self.chunks = []
        self.doc_embeddings_matrix = None

    def build_index(self, chunks):
        """Extracts text content, computes embedding vectors, and converts to NumPy matrix."""
        self.chunks = chunks
        corpus = [chunk['content'] for chunk in chunks]
        
        # Fit vectorizer and transform documents into vector matrix
        tfidf_matrix = self.vectorizer.fit_transform(corpus)
        
        # Convert SciPy sparse matrix into NumPy dense 2D matrix
        self.doc_embeddings_matrix = tfidf_matrix.toarray()
        return self.doc_embeddings_matrix.shape

    def search_similar(self, query, top_k=3, min_threshold=0.05):
        """
        Embeds query text and calculates Cosine Similarity scores against doc matrix
        using NumPy matrix math.
        """
        if self.doc_embeddings_matrix is None or len(self.chunks) == 0:
            return []
            
        # Vectorize query
        query_tfidf = self.vectorizer.transform([query])
        query_vector = query_tfidf.toarray()[0]
        
        # Call explicit NumPy linear algebra Cosine Similarity computation
        similarity_scores = NumPyMathEngine.compute_cosine_similarity(query_vector, self.doc_embeddings_matrix)
        
        # Rank indices by similarity score descending using NumPy argsort
        ranked_indices = np.argsort(similarity_scores)[::-1]
        
        results = []
        for idx in ranked_indices[:top_k]:
            score = float(similarity_scores[idx])
            if score >= min_threshold:
                chunk_data = self.chunks[idx].copy()
                chunk_data['similarity_score'] = round(score * 100, 2)  # Percentage score
                results.append(chunk_data)
                
        return results
