import requests,json


class Docs_tester():
    def __init__(self):
        endpoints = requests.get('http://127.0.0.1:5000/api/docs/endpoints')
        blueprints = requests.get('http://127.0.0.1:5000/api/docs/blueprints')

        print(f"\nDOCS e: \n{json.dumps(endpoints.json(),indent=2)}")
        print(f"\nDOCS b: \n{json.dumps(blueprints.json(),indent=2)}")

