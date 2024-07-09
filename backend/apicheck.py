import requests,json


data = requests.get(
    "http://127.0.0.1:5000/api/article"
)
data = data.json()
data = json.dumps(data,indent=2)
print(f"{data}\n")
