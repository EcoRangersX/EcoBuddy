import requests,json


class Auth_tester():
    def __init__(self):
        register = requests.post(
            url='http://127.0.0.1:5000/api/auth/register',
            json={
                'Email': 'siemano1@gmail.com',
                'Password': 'siemano1k',
                'Name': 'siemano1'
                }
            )
        login = requests.post(
            url='http://127.0.0.1:5000/api/auth/login',
            json={
                'Email': 'siemano1@gmail.com',
                'Password':'siemano1k'
                }
            )
        
        print(f'\nLOGIN: \n{json.dumps(login.json(),indent=2)}')
        print(f'\nREGISTER: \n{json.dumps(register.json(),indent=2)}')