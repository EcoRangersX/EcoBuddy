import requests,json

class Ai_tester():
    def __init__(self):
        
        eco_buddy_response = requests.post(
            url="http://127.0.0.1:5000/api/ai/ai_assistant", 
            json={
                "UserInput": "What is ecology?"
                }
            )

        quiz_generator_response = requests.post(
            url='http://127.0.0.1:5000/api/ai/quiz_generator',
            json={
                'Theme': 'ecology',
                'Amount_of_questions': 5,
                'Yes_or_no_answers': 'Yes',
                'Possible_answers': 2
                }
            )
        
        print(f"\nAI RESPONSE: \n{json.dumps(eco_buddy_response.json(),indent=2)}")
        print(f'\nQUIZ GENERATOR: \n{json.dumps(quiz_generator_response.json(),indent=2)}')