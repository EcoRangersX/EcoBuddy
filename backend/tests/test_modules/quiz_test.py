import requests,json
from threading import Thread


class Quiz_tester():
    def __init__(self):
        self.titles_thread = Thread(target=self.titles)
        self.quiz_thread = Thread(target=self.quiz)

        self.threads = [self.titles_thread,self.quiz_thread]
    def titles(self):
        titles = requests.get(
            url='http://127.0.0.1:5000/api/quizes/quiz_titles',
            params={
                'Amount': 5
                }
            )
        print(f"\nTITLES: \n{json.dumps(titles.json(),indent=2)}")

    def quiz(self):
        quizes = requests.get(
            url='http://127.0.0.1:5000/api/quizes/quiz',
            params={
                'Titles': True,
                'Amount': 5
                }
            )
        
        
        print(f"\nQUIZES: \n{json.dumps(quizes.json(),indent=2)}")