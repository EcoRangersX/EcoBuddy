from flask import Blueprint, request
from app.services import Assistant
from app.services import Quiz_generator
from app.services import Ai_questions


ai_bp = Blueprint('ai',__name__,url_prefix='/api/ai')

ai_assistant = Assistant()
quiz_generator = Quiz_generator()



@ai_bp.route("/ai_assistant", methods=["POST"])
def ai_assistant_endpoint():
    data = request.json["UserInput"]  # otrzymywanie prompta którego podał użytkownik
    if data:
        response = ai_assistant.request_post(data)
        return response
    else:
        return {"error": "No prompt provided"}
    

@ai_bp.route("/quiz_generator", methods=["POST"])
def quiz_generator_endpoint():
    return {'Quiz': quiz_generator.generate_quiz(request.json)}


@ai_bp.route('/example_questions',methods=['POST'])
def ai_example_questions():
    return {'Questions': Ai_questions().get_ai_questions(amount=request.json['Amount'])}
    