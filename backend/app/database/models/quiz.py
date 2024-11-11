from app.database import conn
import json, yaml



class Quiz():
    def __init__(self,id:int):
        self.cursor = conn.cursor()
        self.id = id

    def insert_quiz(self,json_quiz: str) -> bool:
        try:
            self.cursor.execute(
                """INSERT INTO quizzes (quiz) VALUES(:quiz)""",
                {
                    "quiz": json_quiz
            }
            )

            conn.commit()

            return True
        except Exception as e:
            print(e)
            return False
    
    def make_quiz_preview(self,quiz: dict):
        pre = {
            "id": self.id,
            "title": quiz["title"],
            "level": quiz["level"],
            "amount-of-questions": len(quiz['quiz']),
            "description": quiz['description']
        }
        return pre

    def increment_views(self):
        try:
            self.cursor.execute("""UPDATE quizzes 
                                SET views = views + 1
                                WHERE id=:id""",{'id': self.id})
        except Exception as e:
            print(e)

    def get_quiz(self):
        try:
            self.cursor.execute(
                """SELECT quiz FROM quizzes WHERE id=:id""",
                {
                    'id': self.id
            }
            )

            quiz = self.cursor.fetchone()[0]
            quiz = json.loads(quiz)
            return quiz
            
        except Exception as e:
            print(e)
            return False
'''
quiz:
{
    "title": str,
    "level": str,
    "description": str,
    "quiz":
    [
        {
            "question": str,
            "answers": 
            [
                str,
                str,
                str
            ],
            "correct-answer": int index
        },
        {
            "question": str,
            "answers": 
            [
                str,
                str,
                str
            ],
            "correct-answer": int index
        },
    ]
    
}
'''

        
        
    