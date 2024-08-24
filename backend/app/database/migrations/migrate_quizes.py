
class Migrate_quizes():
    def __init__(self,conn):
        cursor = conn.cursor()
        cursor.execute("""CREATE TABLE IF NOT EXISTS quizes(
                       title text, 
                       quiz text,
                       id INTEGER PRIMARY KEY AUTOINCREMENT
                       )
                       """)
        conn.commit()
