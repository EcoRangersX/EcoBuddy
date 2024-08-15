import requests,json
from threading import Thread

class Eco_tips_tester():

    def __init__(self):
        self.eco_tips_thread = Thread(target=self.eco_tips)

        self.threads = [self.eco_tips_thread]
    def eco_tips(self):

        eco_tips = requests.get(
            url = 'http://127.0.0.1:5000/api/eco_tips/get_eco_tips',
            params= {'Amount': 5}
        )

        print(f"\nECO_TIPS: \n{json.dumps(eco_tips.json(),indent=2)}")
