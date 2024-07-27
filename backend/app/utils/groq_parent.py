from groq import Groq
import os

class Groq_parent():
    api_key = os.environ.get("GROQ_API_KEY")
    ai_model_provider = Groq(api_key=api_key)
