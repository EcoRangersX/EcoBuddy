import json

with open('constants.json','r') as file:
    constants = json.load(file)
    symbols = constants['Symbols for password encryption/decryption']
    print(symbols)


class Authentication:
    def __init__(self):
        pass
        