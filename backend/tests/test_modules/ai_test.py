import requests,json

class Ai_tester():
    def __init__(self):
        
        eco_buddy_response = requests.get(
            url="http://127.0.0.1:5000/api/ai/ai_assistant", 
            params={
            "UserInput": "What is ecology?"
            }
            )

        quiz_generator_response = requests.get(
            url='http://127.0.0.1:5000/api/ai/quiz_generator',
            params={
                'Theme': 'ecology',
                'Amount_of_questions': 5,
                'Yes_or_no_answers': False,
                'Possible_answers': 2
                }
            )
        
        example_questions = requests.get(
            url = 'http://127.0.0.1:5000/api/ai/example_questions',
            params={'Amount': 5}
        )
        
        print(f"\nAI RESPONSE: \n{json.dumps(eco_buddy_response.json(),indent=2)}")
        print(f'\nQUIZ GENERATOR: \n{json.dumps(quiz_generator_response.json(),indent=2)}')
        print(f'\nAI_QUESTIONS: \n{json.dumps(example_questions.json(),indent=2)}')