from app.database import conn



class User:
    def __init__(self):
        self.name: str = None
        self.email: str = None
        self.password: str = None

        self.cursor = conn.cursor()

    def check_if_user_exists(self) -> list:
       

        self.cursor.execute("SELECT * FROM users WHERE email= :email AND name=:name",{'email': self.email,'name': self.name})

        return self.cursor.fetchall()

    def insert_to_database(self) -> bool:
        try:
            self.cursor.execute("INSERT INTO users (name,email,password) VALUES( :name, :email, :password)",{
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
            self.cursor.execute("DELETE FROM users WHERE name= :name AND password= :password",{'name': self.name,
                                                                        'password': self.password
                                                                        })
            conn.commit()
        except:
            return False
        else:
            return True
    
    def update_value(self,value_to_update: str, new_value: str) -> bool:
        try:
            self.cursor.execute(f"UPDATE users SET {value_to_update}= :new_value WHERE name= :name AND password= :password",{
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
        self.cursor.execute("SELECT * FROM users WHERE email= :email AND password= :password",{'email': self.email,'password': self.password})
        result = self.cursor.fetchall()

        if result: 
            return True
        
        return False