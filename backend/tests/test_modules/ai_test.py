import requests,json
from threading import Thread

class Ai_tester():
    def __init__(self):
        self.eco_buddy_thread = Thread(target=self.eco_buddy)
        self.quiz_generator_thread = Thread(target=self.quiz_generator)
        self.example_questions_thread = Thread(target=self.example_questions)

        self.threads = [self.eco_buddy_thread,self.quiz_generator_thread,self.example_questions_thread]

    def eco_buddy(self):
        eco_buddy_response = requests.get(
            url="http://127.0.0.1:5000/api/ai/ai_assistant", 
            params={
            "UserInput": "What is ecology?"
            }
            )
        print(f"\nAI RESPONSE: \n{json.dumps(eco_buddy_response.json(),indent=2)}")
    
    def quiz_generator(self):
        quiz_generator_response = requests.get(
            url='http://127.0.0.1:5000/api/ai/quiz_generator',
            params={
                'Theme': 'ecology',
                'Amount_of_questions': 5,
                'Yes_or_no_answers': False,
                'Possible_answers': 2
                }
            )
        
        print(f'\nQUIZ GENERATOR: \n{json.dumps(quiz_generator_response.json(),indent=2)}')

    def example_questions(self):
        example_questions = requests.get(
            url = 'http://127.0.0.1:5000/api/ai/example_questions',
            params={'Amount': 5}
        )
        
        print(f'\nAI_QUESTIONS: \n{json.dumps(example_questions.json(),indent=2)}')