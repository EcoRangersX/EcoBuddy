
class Groq_parent():
    def __init__(self):
        from groq import Groq
        import os
        from dotenv import load_dotenv
        
        load_dotenv()
        self.api_key = os.environ.get("GROQ_API_KEY")
        self.ai_model_provider = Groq(api_key=self.api_key)
