from app.database import conn



class Quiz():
    def __init__(self,title: str,quiz: str):
        self.title = title
        self.quiz = quiz


        self.cursor = conn.cursor()

    def check_if_already_in_database(self):
        self.cursor.execute(
            """SELECT quiz FROM quizes 
            WHERE 
            title=:title
            """,
            {'title': self.title})
        if self.cursor.fetchone():
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

    def get_from_database(self,id):
        self.cursor.execute(
            """SELECT quiz FROM quizes 
            WHERE 
            id=:id
            """,
            {'id': id})
        
        return self.cursor.fetchone()
