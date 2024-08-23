import requests,json
from threading import Thread



class Auth_tester():

    def __init__(self):
        self.register_thread = Thread(target=self.register)
        self.login_thread = Thread(target=self.login)

        self.threads = [self.register_thread,self.login_thread]
    def register(self):
        register = requests.post(
            url='http://127.0.0.1:5000/api/auth/register',
            json={
                'email': 'siemano1@gmail.com',
                'password': 'siemano1k',
                'name': 'siemano1'
                }
            )
        
        print(f'\nREGISTER: \n{json.dumps(register.json(),indent=2)}')



    def login(self):
        login = requests.post(
            url='http://127.0.0.1:5000/api/auth/login',
            json={
                'email': 'siemano1@gmail.com',
                'password':'siemano1k'
                }
            )
        
        print(f'\nLOGIN: \n{json.dumps(login.json(),indent=2)}')