import requests
import json


def test_articles():
    return requests.get("http://127.0.0.1:5000/api/articles")


def test_ai_assistant():
    test_prompt = "What is ecology?"
    return requests.post(
        "http://127.0.0.1:5000/api/ai_assistant", json={"UserInput": test_prompt}
    )


def test_air_quality():
    example_lat, example_long = (51.9189046, 19.1343786)
    return requests.post(
        "http://127.0.0.1:5000/api/air/air_quality",
        json={"Element": "no2", "latitude": example_lat, "longitude": example_long},
    )

def test_docs():
    return requests.get('http://127.0.0.1:5000/api/docs/endpoints')



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


        else:
            print("SMTH went wrong")
            return



