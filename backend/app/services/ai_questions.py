from app.models import Ai_question
from app.database import cursor


class Ai_questions():
    def get_ai_questions(self,amount: int = 1) -> list:

        cursor.execute("SELECT question FROM ai_questions LIMIT :amount",{'amount': amount})

        questions = cursor.fetchall()
        to_return = []
        for i in questions:
            to_return.append(i[0])

        return to_return



    
    def insert_ai_questions(self,questions: list) -> bool:
        try:
            for i in questions:
                question = Ai_question(i)
                if question.check_if_already_in_database():
                    continue
                question.insert_into_database()
        except:
            return False
        else:
            return True
        




    
    