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