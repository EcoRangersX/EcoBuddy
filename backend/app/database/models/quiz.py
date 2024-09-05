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
    
    def get_quiz(self):
        try:
            self.cursor.execute(
                """SELECT quiz FROM quizzes WHERE id=:idd""",
                {
                    'idd': self.id
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

        
        
    