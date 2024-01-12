"""Example LangChain server exposes a conversational retrieval chain.

Follow the reference here:

https://python.langchain.com/docs/expression_language/cookbook/retrieval#conversational-retrieval-chain

To run this example, you will need to install the following packages:
pip install langchain openai faiss-cpu tiktoken
"""  # noqa: F401

from operator import itemgetter
from typing import List, Tuple

from fastapi import FastAPI
from langchain.chat_models import ChatOpenAI
from langchain.embeddings import OpenAIEmbeddings
from langchain.prompts import ChatPromptTemplate
from langchain.prompts.prompt import PromptTemplate
from langchain.schema import format_document
from langchain.schema.output_parser import StrOutputParser
from langchain.schema.runnable import RunnableMap, RunnablePassthrough
from langchain.vectorstores import FAISS
from langchain.text_splitter import CharacterTextSplitter
from langserve import add_routes
from langserve.pydantic_v1 import BaseModel, Field
from fastapi.responses import RedirectResponse
import os

_TEMPLATE = """Given the following conversation and a follow up question, rephrase the 
follow up question to be a standalone question, in its original language.

Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:"""
CONDENSE_QUESTION_PROMPT = PromptTemplate.from_template(_TEMPLATE)

# ANSWER_TEMPLATE = """Answer the question based only on the following context:
# {context}

# Question: {question}
# """
ANSWER_TEMPLATE = """
Answer the question in a conversation style, influenced by the following context. Offer to explain further if the user asks.
{context}

Question: {question}
"""

ANSWER_PROMPT = ChatPromptTemplate.from_template(ANSWER_TEMPLATE)

DEFAULT_DOCUMENT_PROMPT = PromptTemplate.from_template(template="{page_content}")


def _combine_documents(
    docs, document_prompt=DEFAULT_DOCUMENT_PROMPT, document_separator="\n\n"
):
    """Combine documents into a single string."""
    doc_strings = [format_document(doc, document_prompt) for doc in docs]
    return document_separator.join(doc_strings)


def _format_chat_history(chat_history: List[Tuple]) -> str:
    """Format chat history into a string."""
    buffer = ""
    for dialogue_turn in chat_history:
        human = "Human: " + dialogue_turn[0]
        ai = "Assistant: " + dialogue_turn[1]
        buffer += "\n" + "\n".join([human, ai])
    return buffer

def _get_text_chunks(text):
    text_splitter = CharacterTextSplitter(
        separator="\n",
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len
    )
    chunks = text_splitter.split_text(text)
    return chunks

def _get_vectorstore(text_chunks: list[str], load: bool = False):
    embeddings = OpenAIEmbeddings()
    if load:
        print("loading vectorstore...")
        vectorstore = FAISS.load_local("./matzelle-langserve/app/vectorstores/about_me", embeddings=embeddings)
        print("vectorstore loaded")
        return vectorstore
    
    try:
        print("making vectorstore...")
        print(f"number of text chunks: {len(text_chunks)}")
        try:
            vectorstore = FAISS.from_texts(texts=text_chunks, embedding=embeddings)
        except Exception as e:
            print("vectorstore failed to make")
            print(f"new number of text chunks: {len(text_chunks)//1.5}")
            text_chunks = text_chunks[:len(text_chunks)//1.5]
            vectorstore = FAISS.from_texts(texts=text_chunks, embedding=embeddings)
    except Exception as e:
        print(e)
        return None
    path = "./matzelle-langserve/app/vectorstores/about_me"
    vectorstore.save_local(path)
    print(f"vectorstore saved to {path}")
    return vectorstore

load_vectorstore = True
if load_vectorstore:   
    vectorstore = _get_vectorstore(None, load=True)     
else:
    with open("./matzelle-langserve/app/docs/about-me.txt", "r") as f:
        raw_text = f.read()
    text_chunks = _get_text_chunks(raw_text)
    vectorstore = _get_vectorstore(text_chunks, load=False)
retriever = vectorstore.as_retriever()

_inputs = RunnableMap(
    standalone_question=RunnablePassthrough.assign(
        chat_history=lambda x: _format_chat_history(x["chat_history"])
    )
    | CONDENSE_QUESTION_PROMPT
    | ChatOpenAI(temperature=0)
    | StrOutputParser(),
)
_context = {
    "context": itemgetter("standalone_question") | retriever | _combine_documents,
    "question": lambda x: x["standalone_question"],
}

# User input
class ChatHistory(BaseModel):
    """Chat history with the bot."""

    chat_history: List[Tuple[str, str]] = Field(
        ...,
        extra={"widget": {"type": "chat", "input": "question"}},
    )
    question: str
# This is the format ^^^^^^^
# response = requests.post(
#     "http://localhost:8000/about-me/invoke",
#     json={'input': {
#         "chat_history": [],
#         "question": "What projects have you worked on?"
#     }}
# )

brian_finetune = "ft:gpt-3.5-turbo-1106:personal::8cM1D2zk"
conversational_qa_chain = (
    _inputs | _context | ANSWER_PROMPT | ChatOpenAI(model=brian_finetune) | StrOutputParser()
)
chain = conversational_qa_chain.with_types(input_type=ChatHistory)

app = FastAPI(
    title="LangChain Server",
    version="1.0",
    description="Spin up a simple api server using Langchain's Runnable interfaces",
)
@app.get("/")
async def redirect_root_to_docs():
    return RedirectResponse("/playground")
# Adds routes to the app for using the chain under:
# /invoke
# /batch
# /stream
add_routes(app, chain, enable_feedback_endpoint=True)
add_routes(app, chain, enable_feedback_endpoint=True, path="/about-me")

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="localhost", port=8000)