from .database import *

class User:
    name: str = None
    email: str = None
    password: str = None

    def insert_to_database(self):
        cursor.execute("INSERT INTO users VALUES(:name, :email, :password)",{
                                                                            'name': self.name,
                                                                            'email': self.email,
                                                                            'password': self.password
                                                                            }
                        )
        conn.commit()
        
    def delete_from_database(self):
        cursor.execute("DELETE FROM users WHERE name= :name AND password= :password",{'name': self.name,
                                                                      'password': self.password
                                                                    })
        conn.commit()

    def update_value(self,value_to_update: str, new_value: str):
        cursor.execute(f"UPDATE users SET {value_to_update}= :new_value WHERE name= :name AND password= :password",{
                                                                                                        'new_value': new_value,
                                                                                                        'name': self.name,
                                                                                                        'password': self.password
                                                                                                                    })
        conn.commit()

    def get_value(self): pass
