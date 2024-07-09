import requests,json




def test_articles():
    return requests.get('http://127.0.0.1:5000/api/articles')

def test_ai_assistant():
    test_prompt = 'What is ecology?'
    return requests.post('http://127.0.0.1:5000/api/ai_assistant',data={'UserInput': test_prompt})


def test_api(features: list):
    for feature in features:
        if feature == 'ARTICLES':
            result = test_articles()
            print(f'ARTICLES: \n {json.dumps(result.json(),indent=2)}')
        
        elif feature == 'AI_ASSISTANT':
            result = test_ai_assistant()
            print(f'AI RESPONSE: \n{json.dumps(result.json(),indent=2)}')
        else:
            print('SMTH went wrong')
            return 

        


test_api(features=['ARTICLES','AI_ASSISTANT'])
