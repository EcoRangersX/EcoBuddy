from flask import Flask, request
from flask_cors import CORS
from groq import Groq
from ai_assistant import Assistant
import json

app = Flask("Eco buddy")
CORS(app)

# api do modeli (llama3 70B)

api_key = {"ApiKey": "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"}

model_provider = Groq(api_key=api_key["ApiKey"])  # api key na razie nie ukryty
ai_assistant = Assistant(ai_provider=model_provider)


@app.route(
    "/api/ai_assistant", methods=["POST"]
)  # deklaracja endpointa do asystenta i metody http requesta
def ai_assistant_endpoint():
    if request.method == "POST":
        data = request.json.get(
            "userPrompt"
        )  # otrzymywanie prompta którego podał użytkownik
        if data:
            response = ai_assistant.request_post(data)
            return response, 200
        else:
            return {"error": "No prompt provided"}, 400


@app.route(
    "/api/tests/article", methods=["GET"]
)  # Ustawianie endpointa do artykułów  i metody http requesta
def article_endpoint():
    if request.method == "GET":
        with open(
            "article_list.json", "r"
        ) as file:  # otwieranie pliku z uzyskanymi artykułami
            article_list = json.load(file)

            file.close()

        return {"Articles": article_list}


@app.route("/api")  # endpoint do dokumentacji
def api():
    return {
        "Endpoints": {
            "/ai_assistant": "Eco assistant that helps you find answers to questions related to ecology To get answer send POST request to endpoint and pavload of type {UserInput: <your data> }"
        }
    }


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)
