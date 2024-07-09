from flask import Flask, request
from groq import Groq
from ai_assistant import Assistant
from news import Get_Article
import json


app = Flask("Eco buddy")

# api do modeli (llama3 70B)

api_key = {"ApiKey": "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"}

modelprovider = Groq(api_key=api_key["ApiKey"])  # api key na razie nie ukryty
ai_assistant = Assistant(aiprovider=modelprovider)

articles = Get_Article()
articles = articles.get_article_summary()



@app.route(
    "/api/ai_assistant", methods=["POST"]
)  # deklaracja endpointa do asystenta i metody http requesta
def ai_assistant_endpoint():
    if request.method == "POST":
        data = request.form[
            "UserInput"
        ]  # otrzymywanie prompta którego podał użytkownik
        return ai_assistant.request_post(data)


@app.route(
    "/api/article", methods=["GET"]
)  # Ustawianie endpointa do artykułów  i metody http requesta
def article_endpoint():
    if request.method == "GET":
        return {"Aricles": articles}


@app.route("/api")  # endpoint do dokumentacji
def api():
    return {
        "Endpoints": {
            "/ai_assistant": "Eco assistant that helps you find answers to questions related to ecology To get answer send POST request to endpoint and pavload of type {UserInput: <your data> }"
        }
    }


if __name__ == "__main__":
    app.run(debug=True)
