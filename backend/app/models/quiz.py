from app.database import conn,cursor

class Quiz():
    def __init__(self,title: str,quiz: str):
        self.title = title
        self.quiz = quiz

    def check_if_already_in_database(self):
        if self.get_from_database():
            return True
        else:
            return False


    def insert_into_database(self):
        cursor.execute(
            """INSERT INTO quizes VALUES(
            :title,
            :quiz
            )
            """,
            {'title': self.title,
             'quiz': self.quiz})
        conn.execute()

    def get_from_database(self):
        cursor.execute(
            """SELECT quiz FROM quizes 
            WHERE 
            title=:title
            """,
            {'title': self.title})
        
        return cursor.fetchone()
