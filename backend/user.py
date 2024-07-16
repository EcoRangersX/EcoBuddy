import json

with open('constants.json','r') as file:
    constants = json.load(file)
    symbols = constants['Symbols for password encryption/decryption']
    print(symbols)


class User:
    def __init__(self,password: str,login: str):
        self.password = password
        self.login = login
        
        