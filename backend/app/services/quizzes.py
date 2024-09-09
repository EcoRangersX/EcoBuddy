from app.database import conn
from app.database.models import Quiz


class Quizzes():
    def __init__(self):
        self.cursor = conn.cursor()

    def get_quiz_title(self,amount: int):
        try: 
            self.cursor.execute(
                """SELECT id FROM quizzes LIMIT :amount""",
                {
                    "amount": amount
                })
            
            ids = self.cursor.fetchall()

            titles = []

            for id in ids:
                id = id[0]
                quizclass = Quiz(id=id)
                title = quizclass.get_quiz()["title"]
                titles.append(title)

            return titles
        except Exception as e:
            print(e)
            return False

    def get_quiz_preview(self,amount: int):
        try:
            quizzes_preview = []
            self.cursor.execute(
                """SELECT id FROM quizzes LIMIT :amount""",
                {
                    'amount': amount
            }
            )
            
            ids = self.cursor.fetchall()
            for id in ids:
                id = id[0]

                quizclass = Quiz(id=id)
                quiz = quizclass.get_quiz()
                quiz_preview = quizclass.make_quiz_preview(quiz=quiz)

                quizzes_preview.append(quiz_preview)

            return quizzes_preview
        except Exception as e:
            print(e)
            return False
        
    def get_quiz_by_id(self,id: int):
        try:    
            quizclass = Quiz(id=id)
            quizclass.increment_views()
            
            quiz = quizclass.get_quiz()['quiz']
            
            return quiz
            
        except Exception as e:
            print(e)
            return False
        
    def get_most_popular_quiz(self):
        try:
            self.cursor.execute("""
                                SELECT id 
                                FROM quizzes 
                                ORDER BY views DESC 
                                LIMIT 1
                                """)

            id = self.cursor.fetchone()[0]

            quizclass = Quiz(id=id)
            quiz = quizclass.get_quiz()
            preview = quizclass.make_quiz_preview(quiz=quiz)

            return preview
        except Exception as e:
            print(e)
            return False
            

        