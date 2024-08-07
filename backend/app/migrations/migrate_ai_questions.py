from app.database import conn,cursor

class Migrate_ai_questions():
    def __init__(self):

        cursor.execute(
            """CREATE TABLE IF NOT EXISTS ai_questions(
            question TEXT
            )
            """
        )
        conn.commit()
