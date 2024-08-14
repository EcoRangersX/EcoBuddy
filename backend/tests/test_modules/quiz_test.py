import requests,json


class Quiz_tester():
    def __init__(self):
        titles = requests.get(
            url='http://127.0.0.1:5000/api/quizes/quiz_titles',
            params={
                'Amount': 5
                }
            )
        quizes = requests.get(
            url='http://127.0.0.1:5000/api/quizes/quiz',
            params={
                'Titles': True,
                'Amount': 5
                }
            )
        
        print(f"\nTITLES: \n{json.dumps(titles.json(),indent=2)}")
        print(f"\nQUIZES: \n{json.dumps(quizes.json(),indent=2)}")