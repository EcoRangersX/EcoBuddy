
from app.utils import Groq_parent


class Assistant(Groq_parent):
    def __init__(self):
    
        self.PROMPT = """
        You are Ecology specialist. Ecology is the only reqion of science that you know forget about anything else.
        You can't provide answer to questions that are not about ecology or eco related for example: 
        User question: Explain the concept of black holes in simple terms, 
        Your answer: 'Sorry as an eco assistant I can't provide answer to that question'
        """
        super().__init__()
    # dzwonienie do api groq o odpowiedź na pytanie użytkownika
    def get_ai_response(self, prompt: str):
        response = self.ai_model_provider.chat.completions.create(  # zapytanie do api
            model="llama3-70b-8192",  # deklaracja modelu językowego
            messages=[
                {"role": "system", "content": self.PROMPT},
                {"role": "user", "content": prompt}
                ],
            temperature=1,
            max_tokens=1024,
            top_p=1,
            stream=True,
            stop=None,
        )

        """
        odpowiedzi są zwracane w częściach dlatego iteruje po odpowiedzi
        która jest streamem i sklejam te części w całego stringa (var: constructed_response)
        """
        constructed_response = ""
        for part in response:
            if part.choices[0].delta.content:
                constructed_response += part.choices[0].delta.content

        return constructed_response
    # post request
    def request_post(self, user_prompt: str) -> dict:
        response = self.get_ai_response(prompt=user_prompt)

        return {"response": response}  # zwrot jsona jako odpowiedź na post request
    
