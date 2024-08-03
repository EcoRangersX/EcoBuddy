from app.database import cursor,conn

class Articles:
    def __init__(self):
        cursor.execute("""CREATE TABLE IF NOT EXISTS articles(
                    title text,
                    link text,
                    img text
                    )""")
        
        conn.commit()