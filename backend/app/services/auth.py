from app.models import User
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
                return {'Response': None,
                        'Error_msg': 'Invalid name only letters and numbers are acceptable'}

        if not re.fullmatch(email_regex,email):
            return {'Response': None,
                    'Error_msg': 'Invalid email'}
        
        if not re.fullmatch(password_regex,password):
            return {'Response': None,
                    'Error_msg': 'Invalid password'}
        
        self.user.name = name
        self.user.email= email
        self.user.password = password

        return False

    
    def login(self):
        values = self.user.get_values(['email','password'])

        for email,password in values:
            if self.user.email != email:
                continue

            if self.user.password != password:
                continue

            return True
        
        return False

    def reqister(self):
        if self.user.check_if_user_exists():
            return {'Response': None,
                    'Error_msg': 'User already exists'}
        if self.user.insert_to_database():
            return {'Response': 'Registered succesfully',
                    'Error_msg': None}
        else:
            return {'Response': None,
                    'Error_msg': 'Something went wrong'}
    


    def check_for_duplicates(self):
        pass
    
    

    

    
