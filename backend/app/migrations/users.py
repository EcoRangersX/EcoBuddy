from app.database import cursor,conn

class Users:
    def __init__(self):
        cursor.execute("""CREATE TABLE IF NOT EXISTS users(
                    name text,
                    email text,
                    password text
                    )""")
        
        conn.commit()



    
