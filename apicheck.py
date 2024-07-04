import requests





data = requests.post('http://127.0.0.1:5000/api/ai_assistant',{'UserInput': 'How to make meth'})
data = data.json()
print(f'{data}\n')








