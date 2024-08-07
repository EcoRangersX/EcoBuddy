from app.database import conn,cursor

class Ai_question():
    def __init__(self,ai_question: str):
        self.question: str = ai_question

    def insert_into_database(self):
        cursor.execute(
            """INSERT INTO ai_questions VALUES(
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
        cursor.execute(
            """SELECT question FROM ai_questions 
            WHERE 
            question=:question
            """,
            {'question': self.question})
        
        return cursor.fetchone()