

from flask import Flask, request
from flask_cors import CORS
from groq import Groq

from ai_assistant import Assistant
from news import Get_Articles
from air_quality import Air_quality

from user import User
from decrypt import decrypt
from encrypt_password import encrypt


app = Flask("Eco buddy")
CORS(app)

# api do modeli (llama3 70B)

api_key = {"ApiKey": "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"}

model_provider = Groq(api_key=api_key["ApiKey"])  # api key na razie nie ukryty
ai_assistant = Assistant(ai_provider=model_provider)

articles = Get_Articles().get_articles_summary()
air_quality = Air_quality()


# deklaracja endpointa do asystenta i metody http requesta
@app.route("/api/ai_assistant", methods=["POST"])
def ai_assistant_endpoint():
    data = request.json.get(
        "userPrompt"
    )  # otrzymywanie prompta którego podał użytkownik
    if data:
        response = ai_assistant.request_post(data)
        return response
    else:
        return {"error": "No prompt provided"}


# Ustawianie endpointa do artykułów  i metody http requesta
@app.route("/api/articles", methods=["GET"])
def article_endpoint():
    if request.method == "GET":
        return {"Aricles": articles}


@app.route("/api/air_quality", methods=["POST"])
def air_quality_endpoint():
    if request.method == "POST":
        element = request.form["Element"]
        latitude = request.form["latitude"]
        longitude = request.form["longitude"]

        concentration = air_quality.get_air_quality_data(
            latitude=latitude, longitude=longitude, element=element
        )

        return {f"{element} concentration": concentration}
    
@app.route("/api/user/login",methods=['POST'])
def login_endpoint():
    if request.method == "POST":
        login = request.form['Login']
        password = request.form['Password']
        pass


        

@app.route("/api/user/register",methods=['POST'])
@app.route("/api/user/authorize",methods=['POST'])




@app.route("/api")  # endpoint do dokumentacji
def api():
    return {
        "Endpoints": {
            "/ai_assistant": "Eco assistant that helps you find answers to questions related to ecology To get answer send POST request to endpoint and pavload of type {UserInput: <your data> }"
        }
    }




if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)
