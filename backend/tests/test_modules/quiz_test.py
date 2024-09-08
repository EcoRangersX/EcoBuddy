import requests,json
from threading import Thread


class Quiz_tester():
    def __init__(self):
        self.titles_thread = Thread(target=self.titles)
        self.quiz_thread = Thread(target=self.quiz)
        self.preview_thread = Thread(target=self.previews)

        self.threads = [self.titles_thread,self.quiz_thread,self.preview_thread]
    def titles(self):
        titles = requests.get(
            url='http://127.0.0.1:5000/api/quiz/title',
            params={
                'amount': 5
                }
            )
        print(f"\nTITLES: \n{json.dumps(titles.json(),indent=2)}")

    def quiz(self):
        quizes = requests.get(
            url='http://127.0.0.1:5000/api/quiz',
            params={
                'id': 1
                
                }
            )
        
        
        print(f"\nQUIZES: \n{json.dumps(quizes.json(),indent=2)}")

    def previews(self):
        quizes = requests.get(
            url='http://127.0.0.1:5000/api/quiz/preview',
            params={
                'amount': 3
                
                }
            )
        
        
        print(f"\nPREVIEWS: \n{json.dumps(quizes.json(),indent=2)}")

