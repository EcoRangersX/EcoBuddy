from .database import *

class User:
    name: str = None
    email: str = None
    password: str = None

    def check_if_user_exists(self) -> list:
       

        cursor.execute("SELECT * FROM users WHERE email LIKE :email AND name LIKE :name",{'email': self.email,'name': self.name})

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

    def get_values(self,values_to_get: list) -> list:
       
        values_to_get_str = ''
        for i in values_to_get:
            values_to_get_str+= f',{i}'

        cursor.execute(f"SELECT {values_to_get_str[1:]} FROM users")
    
        return cursor.fetchall()
        

# for i in range(10):
#     u = User()
#     u.name = f'john{i}'
#     u.email = f'john{i}@gmail.com'
#     u.password = f'john{i}k'
#     u.insert_to_database()
        



    


