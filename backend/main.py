from flask import Flask, request
from groq import Groq
from backend.ai_assistant import Assistant
import json


app = Flask("Eco buddy")

# api do modeli (llama3 70B)

api_key = {"ApiKey": "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"}

modelprovider = Groq(api_key=api_key["ApiKey"])  # api key na razie nie ukryty
ai_assistant = Assistant(aiprovider=modelprovider)


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
    "/api/tests/atricle", methods=["GET"]
)  # Ustawianie endpointa do artykułów  i metody http requesta
def article_endpoint():
    if request.method == "GET":
        with open(
            "article_list.json", "r"
        ) as file:  # otwieranie pliku z uzyskanymi artykułami
            article_list = json.load(file)

            file.close()

        return {"Aricles": article_list}


@app.route("/api")  # endpoint do dokumentacji
def api():
    return {
        "Endpoints": {
            "/ai_assistant": "Eco assistant that helps you find answers to questions related to ecology To get answer send POST request to endpoint and pavload of type {UserInput: <your data> }"
        }
    }


if __name__ == "__main__":
    app.run(debug=True)
