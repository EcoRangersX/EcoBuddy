from app.database import cursor,conn

class Migrate_articles:
    def __init__(self):
        cursor.execute("""CREATE TABLE IF NOT EXISTS articles(
                    title text,
                    link text,
                    img text
                    )""")
        
        conn.commit()