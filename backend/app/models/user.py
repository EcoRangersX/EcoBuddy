from app.database import *

class User:
    def __init__(self):
        self.name: str = None
        self.email: str = None
        self.password: str = None

    def check_if_user_exists(self) -> list:
       

        cursor.execute("SELECT * FROM users WHERE email= :email AND name=:name",{'email': self.email,'name': self.name})

        return cursor.fetchall()

    def insert_to_database(self) -> bool:
        try:
            cursor.execute("INSERT INTO users VALUES(:name, :email, :password)",{
                                                                                'name': self.name,
                                                                                'email': self.email,
                                                                                'password': self.password
                                                                                }
                            )
            conn.commit()
        except:
            return False
        else:
            return True
 
    def delete_from_database(self) -> bool:
        try:
            cursor.execute("DELETE FROM users WHERE name= :name AND password= :password",{'name': self.name,
                                                                        'password': self.password
                                                                        })
            conn.commit()
        except:
            return False
        else:
            return True
    
    def update_value(self,value_to_update: str, new_value: str) -> bool:
        try:
            cursor.execute(f"UPDATE users SET {value_to_update}= :new_value WHERE name= :name AND password= :password",{
                                                                                                            'new_value': new_value,
                                                                                                            'name': self.name,
                                                                                                            'password': self.password
                                                                                                                        })
            conn.commit()
        except:
            return False
        else:
            return True

   
    
    def login(self):
        cursor.execute("SELECT * FROM users WHERE email= :email AND password= :password",{'email': self.email,'password': self.password})
        result = cursor.fetchall()

        if result: 
            return True
        
        return False