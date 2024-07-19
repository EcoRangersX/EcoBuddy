from app.database import *


class Account:
    name: str = None
    email: str = None
    password: str = None

    def setup_account_data(self,name: str,email: str, password: str):
        self.name = name
        self.email = email
        self.password = password
    
    def login(self): pass

    def reqister(self): pass

    def authorize(self): pass
    
    

    

    
