from app.database import cursor,conn

class Migrate_quizes():
    def __init__(self):
        cursor.execute("CREATE TABLE IF NOT EXISTS quizes(title text, quiz text)")
        conn.commit()