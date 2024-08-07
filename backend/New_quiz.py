import sqlite3
import re

class Quiz_checker():
    def __init__(self,json_rep_of_quiz: dict):
        self.questions = json_rep_of_quiz['Questions']
        self.answer_key = json_rep_of_quiz['Answer_key']

        self.questions_keys = self.questions.keys()
        self.answer_key_keys = self.answer_key.keys()

    def check_amounts(self):
        if len(self.questions_keys) != len(self.answer_key_keys):
            
      
            return False
        return True

    def check_answer_key(self):
        for key in self.answer_key_keys:
            if not re.match('q[0-9]+$',key):
                return False
            if not re.match('[Aa]nswer[0-9]+$',self.answer_key[key]):
                return False
                
            
        return True

    def check_questions(self):
        for key in self.questions_keys:
            if re.match('[Qq]uestion[0-9]*$',key):
                return False
            answers = self.questions[key]
            answers_keys = answers.keys()
            for a_key in answers_keys:
                if not re.match('[Aa]nswer[0-9]*$',a_key):
                    
                    return False
                    
                if re.match('[Aa]nswer[0-9]*$',answers[a_key]):
                    
                    return False
            
            
        return True   

    def check_quiz(self):
        if self.check_amounts() and self.check_answer_key() and self.check_questions():
            return True
        return False
def insert_quiz(json_quiz: dict):
    quiz_check = Quiz_checker(json_quiz)

    if quiz_check.check_quiz():
        conn = sqlite3.connect('database.db')
        cursor = conn.cursor()
        cursor.execute('SELECT quiz FROM quizes WHERE title = :title',{'title': json_quiz['Title']})
        if cursor.fetchone():
            print('Quiz already exists')
            return False
        cursor.execute('INSERT INTO quizes VALUES (:title,:quiz)',{'title': json_quiz['Title'],'quiz': str(json_quiz)})
        conn.commit()
        conn.close()
        print('all good')
        return True
    else:
        print('smth went wrong try again or check the quiz')
        return False


d = {
    "Title": "Quiz2",
    "Answer_key": {
            "q1": "Answer1",
            "q2": "Answer1"
          },
    "Questions": {
        "sdsdsd": {
            "Answer1": "blabla",
            "Answer2": "blbla"
        },
        "dsfsdfs": {
            "Answer1": "babla",
            "Answer2": "idfidfhid"
        }
    }
}


insert_quiz(d)




        