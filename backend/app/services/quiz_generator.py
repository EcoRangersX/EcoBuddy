
from dotenv import load_dotenv
import json
from app.utils import Groq_parent

load_dotenv()

class Quiz_generator(Groq_parent):
    def __init__(self):
        self.SYS_PROMPT = '''You are quiz generator that generates quizes in json format:
        {"Questions":{
        "put question here": {"Answer1": "xyz","Answer2": "xyz"},
        "put question here": {"Answer1": "xyz","Answer2": "xyz"}
        },
        "Answer_key": {"q1": "Answer1","q2": "Answer2"}}
        in answer key you names of correct answers for each question. 
        and only returns this json quiz nothing else.'''

        super().__init__()
    

    def get_quiz(self, prompt: str):
        response = self.ai_model_provider.chat.completions.create(  # zapytanie do api
            model="llama3-70b-8192",  # deklaracja modelu językowego
            messages=[
                {"role": "system", "content": self.SYS_PROMPT},
                {"role": "user", "content": prompt}
                ],
            temperature=1,
            max_tokens=1024,
            top_p=1,
            stream=False,
            stop=None,
            response_format={'type': 'json_object'}
        )
      
        str_response = response.choices[0].message.to_dict()['content']

        return json.loads(str_response)

    def construct_quiz_prompt(self,theme: str,amount_of_questions: int,yes_or_no_answers: bool,possible_answers: int) -> str:
        if yes_or_no_answers:
            self.user_prompt = f'''
            Generate me a quiz about {theme} with {amount_of_questions} questions and 2 answers of type yes or no for each question'''
        else:
            self.user_prompt = f'''
            Generate me a quiz about {theme} with {amount_of_questions} questions 
            and {possible_answers} answers with one correct answer for each question'''

    def generate_quiz(self,quiz_params: dict):
        theme = quiz_params['Theme']
        amount_of_questions = quiz_params['Amount_of_questions']
        yes_or_no_answers = quiz_params['Yes_or_no_answers']
        possible_answers = quiz_params['Possible_answers']

        self.construct_quiz_prompt(theme,amount_of_questions,yes_or_no_answers,possible_answers)
        response = self.get_quiz(prompt=self.user_prompt)
        return response