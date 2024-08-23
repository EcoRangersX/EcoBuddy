

class Migrate_users:
    def __init__(self,conn):
        cursor = conn.cursor()
        cursor.execute("""CREATE TABLE IF NOT EXISTS users(
                    
                    name text,
                    email text,
                    password text
                    
                    )""")
        
        conn.commit()



    
