from flask import Flask, request, jsonify
from langchain_community.embeddings import OpenAIEmbeddings
from langchain_community.vectorstores import Qdrant
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
embeddings = OpenAIEmbeddings()
qdrant = Qdrant(embeddings=embeddings)

@app.route('/add_texts', methods=['POST'])
def add_texts():
    data = request.get_json()
    texts = data['texts']
    qdrant.add_texts(texts)
    return jsonify({'message': 'Texts added successfully'})

@app.route('/search', methods=['POST'])
def search():
    data = request.get_json()
    query = data['query']
    results = qdrant.search(query)
    return jsonify({'results': results})