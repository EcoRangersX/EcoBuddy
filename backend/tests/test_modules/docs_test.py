import requests,json
from threading import Thread


class Docs_tester():
    def __init__(self):
        self.endpoints_thread = Thread(target=self.endpoints)
        self.blueprints_thread = Thread(target=self.blueprints)

        self.threads = [self.endpoints_thread,self.blueprints_thread]

    def endpoints(self):
        endpoints = requests.get('http://127.0.0.1:5000/api/docs/endpoints')
        print(f"\nDOCS endpoints: \n{json.dumps(endpoints.json(),indent=2)}")
    def blueprints(self):
        blueprints = requests.get('http://127.0.0.1:5000/api/docs/blueprints')

        print(f"\nDOCS blueprints: \n{json.dumps(blueprints.json(),indent=2)}")

