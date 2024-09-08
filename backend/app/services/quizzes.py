from app.database import conn
from app.database.models import Quiz


class Quizzes():
    def __init__(self):
        self.cursor = conn.cursor()

    def get_quizzes_title(self,amount: int):
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
                quiz = Quiz(id=id)
                title = quiz.get_quiz()["title"]
                titles.append(title)

            return titles
        except Exception as e:
            print(e)
            return False

    def get_quizzes_preview(self,amount: int):
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
                quiz = Quiz(id=id)

                quiz = quiz.get_quiz()

                
                quiz_preview = {
                    "id": id,
                    "title": quiz["title"],
                    "level": quiz["level"],
                    "amount-of-questions": len(quiz['quiz']),
                    "description": quiz['description']
                    }

                quizzes_preview.append(quiz_preview)

            return quizzes_preview
        except Exception as e:
            print(e)
            return False
        
    def get_quiz(self,id: int):
        try:    
            quiz = Quiz(id=id)
            
            return quiz.get_quiz()['quiz']
        except Exception as e:
            print(e)
            return False
        
    