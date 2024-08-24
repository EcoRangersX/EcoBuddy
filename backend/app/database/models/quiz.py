from app.database import conn



class Quiz():
    def __init__(self,title: str,quiz: str):
        self.title = title
        self.quiz = quiz

        self.cursor = conn.cursor()

    def check_if_already_in_database(self):
        if self.get_from_database():
            return True
        else:
            return False


    def insert_into_database(self):
        self.cursor.execute(
            """INSERT INTO quizes (title,quiz) VALUES(
            :title,
            :quiz
            )
            """,
            {'title': self.title,
             'quiz': self.quiz})
        conn.execute()

    def get_from_database(self):
        self.cursor.execute(
            """SELECT quiz FROM quizes 
            WHERE 
            title=:title
            """,
            {'title': self.title})
        
        return self.cursor.fetchone()
