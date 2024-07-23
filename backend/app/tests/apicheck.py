import requests
import json


def test_articles():
    return requests.get("http://127.0.0.1:5000/api/news/articles")

def test_ai_assistant():
    test_prompt = "What is ecology?"
    return requests.post(
        "http://127.0.0.1:5000/api/ai/ai_assistant", json={"UserInput": test_prompt}
    )

def test_air_quality():
    example_lat, example_long = (50.063843899589884, 19.942991724503248)
    return requests.post(
        "http://127.0.0.1:5000/api/air/air_quality",
        json={"Element": "no2", "Latitude": example_lat, "Longitude": example_long},
    )

def test_docs():
    return requests.get('http://127.0.0.1:5000/api/docs/endpoints')

def test_login():
    return requests.post('http://127.0.0.1:5000/api/auth/login',json={'Email': 'siemano1@gmail.com', 'Password':'siemano1k'})

def test_register():
    return requests.post('http://127.0.0.1:5000/api/auth/register',json={'Email': 'siemano1@gmail.com','Password': 'siemano1k','Name': 'siemano1'})

def test_api(features: list):
    for feature in features:
        if feature == "ARTICLES":
            result = test_articles()
            print(f"ARTICLES: \n {json.dumps(result.json(),indent=2)}")

        elif feature == "AI_ASSISTANT":
            result = test_ai_assistant()
            print(f"AI RESPONSE: \n{json.dumps(result.json(),indent=2)}")

        elif feature == "AIR_QUALITY":
            result = test_air_quality()
            print(f"AIR POLLUTION: {json.dumps(result.json(),indent=2)}")

        elif feature == "DOCS":
            result = test_docs()
            print(f"DOCS: {json.dumps(result.json(),indent=2)}")
        
        elif feature == 'LOGIN':
            result = test_login()
            print(f'LOGIN: {json.dumps(result.json(),indent=2)}')
        
        elif feature == 'REGISTER':
            result = test_register()
            print(f'REGISTER: {json.dumps(result.json(),indent=2)}')
            
        else:
            print("SMTH went wrong")
            return



