from app.database import conn, cursor
from app.database.models import Ai_question
from app.globals import globals



class Migrate_ai_questions():
    def __init__(self):

        cursor.execute(
            """CREATE TABLE IF NOT EXISTS ai_questions(
            question TEXT
            )
            """
        )
        conn.commit()

        questions = globals['Ai_questions']

        for question in questions:
            question = Ai_question(question)
            if not question.check_if_already_in_database():
                question.insert_into_database()

        conn.commit()
