from app.database import conn


class Ai_question():
    def __init__(self,ai_question: str):
        self.question: str = ai_question
        self.cursor = conn.cursor()

    def insert_into_database(self):
        self.cursor.execute(
            """INSERT INTO ai_questions (question) VALUES(
            :question
            )
            """,
            {'question': self.question})
        conn.commit()

    def check_if_already_in_database(self):
        if self.get_from_database():
            return True
        else:
            return False
        
    def get_from_database(self):
        self.cursor.execute(
            """SELECT question FROM ai_questions 
            WHERE 
            question=:question
            """,
            {'question': self.question})
        
        return self.cursor.fetchone()