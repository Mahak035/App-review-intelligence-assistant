import numpy as np

class NumPyMathEngine:
    """
    NumPy-based Statistical and Linear Algebra Computation Engine.
    Demonstrates pure NumPy operations, vector transformations, L2 normalization,
    and explicit Cosine Similarity calculations for RAG retrieval.
    """
    
    @staticmethod
    def compute_rating_array_stats(ratings_list):
        """
        Computes statistical measures using pure NumPy array functions.
        Returns mean, std, variance, median, 25th, and 75th percentiles.
        """
        # Convert Python list to NumPy 1D array
        ratings = np.array(ratings_list, dtype=np.float64)
        
        if len(ratings) == 0:
            return {}
            
        mean_val = np.mean(ratings)
        std_val = np.std(ratings)
        var_val = np.var(ratings)
        median_val = np.median(ratings)
        p25 = np.percentile(ratings, 25)
        p75 = np.percentile(ratings, 75)
        
        return {
            "mean": float(np.round(mean_val, 3)),
            "std_dev": float(np.round(std_val, 3)),
            "variance": float(np.round(var_val, 3)),
            "median": float(np.round(median_val, 3)),
            "p25_quantile": float(np.round(p25, 3)),
            "p75_quantile": float(np.round(p75, 3))
        }

    @staticmethod
    def normalize_ratings_zscore(ratings_list):
        """
        Applies NumPy vectorized Z-score normalization: Z = (X - mu) / sigma
        """
        ratings = np.array(ratings_list, dtype=np.float64)
        mean = np.mean(ratings)
        std = np.std(ratings)
        
        if std == 0:
            return np.zeros_like(ratings).tolist()
            
        z_scores = (ratings - mean) / std
        return np.round(z_scores, 3).tolist()

    @staticmethod
    def l2_normalize_vector(vec):
        """
        Computes L2 norm (Euclidean norm) of a vector: norm = sqrt(sum(x_i^2))
        and returns normalized unit vector.
        """
        vec = np.array(vec, dtype=np.float64)
        norm = np.linalg.norm(vec)
        if norm == 0:
            return vec
        return vec / norm

    @staticmethod
    def compute_cosine_similarity(query_vec, doc_matrix):
        """
        Calculates explicit Cosine Similarity between a query vector and a document matrix
        using pure NumPy matrix multiplication and L2-normalization.
        
        Formula: Cosine_Similarity(Q, D) = (Q . D^T) / (||Q||_2 * ||D||_2)
        """
        query = np.array(query_vec, dtype=np.float64)
        docs = np.array(doc_matrix, dtype=np.float64)
        
        # Ensure 2D query shape [1, D] and 2D docs shape [N, D]
        if query.ndim == 1:
            query = query.reshape(1, -1)
            
        if docs.ndim == 1:
            docs = docs.reshape(1, -1)
            
        # Calculate L2 norms along axes
        query_norm = np.linalg.norm(query, axis=1, keepdims=True)
        docs_norm = np.linalg.norm(docs, axis=1, keepdims=True)
        
        # Avoid division by zero
        query_norm[query_norm == 0] = 1e-10
        docs_norm[docs_norm == 0] = 1e-10
        
        # Normalize vectors to unit length
        query_unit = query / query_norm
        docs_unit = docs / docs_norm
        
        # Vectorized matrix dot-product: [1, D] @ [D, N] -> [1, N]
        similarity_scores = np.dot(query_unit, docs_unit.T).flatten()
        
        return np.round(similarity_scores, 4)
