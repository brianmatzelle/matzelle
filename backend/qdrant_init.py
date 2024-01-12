import os
from dotenv import load_dotenv
from langchain.text_splitter import CharacterTextSplitter
from langchain_community.document_loaders import TextLoader
from langchain_community.embeddings.openai import OpenAIEmbeddings
from langchain_community.vectorstores import Qdrant

load_dotenv()
# if __name__ == '__main__':
def qdrant_init():
    # Load environment variables
    loader = TextLoader("./docs/about-me.txt")
    documents = loader.load()
    text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
    docs = text_splitter.split_documents(documents)

    embeddings = OpenAIEmbeddings()
    api_key = os.getenv("QDRANT_API_KEY")
    url = 'https://8ce4e821-39c0-4c03-bd75-1b0da948ce7f.us-east4-0.gcp.cloud.qdrant.io'
    print("Creating Qdrant index...")
    qdrant = Qdrant.from_documents(
        docs,
        embeddings,
        url=url,
        prefer_grpc=True,
        api_key=api_key,
        collection_name="about_me",
    )
    print("Qdrant index created, querying...")
    query = "What is your professional experience"
    found_docs = qdrant.similarity_search_with_score(query)

    document, score = found_docs[0]
    print(document.page_content)
    print(f"\nScore: {score}")