from groq import Groq

class Assistant():
    def __init__(self,aiprovider: Groq):
        self.PROMPT = "Check if this question is about ecology.\
                       If so go straight to the answer otherwise just say 'I can't answer it' "
                        
        self.modelprovider = aiprovider
    #dzwonienie do api groq o odpowiedź na pytanie użytkownika
    def get_ai_response(self,prompt):
      
        response = self.modelprovider.chat.completions.create( #zapytanie do api
            model="llama3-70b-8192", # deklaracja modelu językowego
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=1,
            max_tokens=1024,
            top_p=1,
            stream=True,
            stop=None,
            
        )
        
        '''
        odpowiedzi są zwracane w częściach dlatego iteruje po odpowiedzi
        która jest streamem i sklejam te części w całego stringa (var: constructed_response)
        '''
        constructed_response = ''
        for part in response:
            if part.choices[0].delta.content:
                constructed_response += part.choices[0].delta.content

        return constructed_response
    
    #post request
    def request_post(self,prompt):
        prompt = prompt #+ self.PROMPT # tworzenie odpowiedniego prompta  do naszych zapotrzebowań
        response = self.get_ai_response(prompt=prompt)


        return {"Response": response} #zwrot jsona jako odpowiedź na post request