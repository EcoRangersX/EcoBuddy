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
        self.cursor.execute(
            """SELECT question FROM ai_questions 
            WHERE 
            question = :question
            """,
            {'question': self.question})
        
        if self.cursor.fetchone():
            return True
        else:
            return False
        
    def get_from_database(self,id):
        self.cursor.execute(
            """SELECT question FROM ai_questions 
            WHERE 
            id =:id
            """,
            {'id': id})
        
        return self.cursor.fetchone()