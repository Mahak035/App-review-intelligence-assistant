import os

class DocumentChunker:
    """
    Document Ingestion & Text Chunker for TecOrb App Knowledge Base.
    Splits unstructured tech docs into overlapping text chunks for vector indexing.
    """
    
    def __init__(self, doc_path="dataset/app_knowledge_base.txt", chunk_size=300, chunk_overlap=50):
        self.doc_path = doc_path
        self.chunk_size = chunk_size
        self.chunk_overlap = chunk_overlap

    def load_and_chunk_documents(self):
        """Loads text document and splits into overlapping text chunks."""
        if not os.path.exists(self.doc_path):
            raise FileNotFoundError(f"Knowledge Base doc not found at {self.doc_path}")
            
        with open(self.doc_path, 'r', encoding='utf-8') as f:
            raw_text = f.read()
            
        # Clean text
        sections = raw_text.split('\n\n')
        chunks = []
        chunk_id = 0
        
        for section in sections:
            section_clean = section.strip()
            if not section_clean:
                continue
                
            # If section is small enough, keep as single chunk
            if len(section_clean) <= self.chunk_size:
                chunks.append({
                    "id": f"CHUNK-{chunk_id}",
                    "content": section_clean,
                    "length": len(section_clean)
                })
                chunk_id += 1
            else:
                # Sliding window chunking
                start = 0
                while start < len(section_clean):
                    end = start + self.chunk_size
                    chunk_str = section_clean[start:end]
                    chunks.append({
                        "id": f"CHUNK-{chunk_id}",
                        "content": chunk_str.strip(),
                        "length": len(chunk_str.strip())
                    })
                    chunk_id += 1
                    start += (self.chunk_size - self.chunk_overlap)
                    
        return chunks
