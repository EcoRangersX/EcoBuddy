from app.database.models import User
import re


class Account:
    def __init__(self):
        self.user = User()

    def setup_user_data(self, email: str, password: str,name: str = None):
        email_regex = r'\b[A-Za-z0-9._-]+@[A-Za-z0-9.]+.+[A-Z|a-z]{2,7}\b'
        password_regex = r'[a-zA-Z0-9~`!@#$%^&*()_=+<>?,.;:|]+'
        name_regex = r'[a-zA-Z0-9]+'

        if name:
            if not re.fullmatch(name_regex,name):
                return {'response': None,
                        'error-msg': 'Invalid name only letters and numbers are acceptable'}

        if not re.fullmatch(email_regex,email):
            return {'response': None,
                    'error-msg': 'Invalid email'}
        
        if not re.fullmatch(password_regex,password):
            return {'response': None,
                    'error-msg': 'Invalid password'}
        
        self.user.name = name
        self.user.email= email
        self.user.password = password

        return False

    
    def login(self):
        if self.user.email and self.user.password:
            return self.user.login()
        else:
            return False

    def reqister(self):
        if self.user.check_if_user_exists():
            return {'response': None,
                    'error-msg': 'User already exists'}
        if self.user.insert_to_database():
            return {'response': 'Registered succesfully',
                    'error-msg': None}
        else:
            return {'response': None,
                    'error-msg': 'Something went wrong'}

    
    

    

    
