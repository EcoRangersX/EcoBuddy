from flask import Blueprint, request
from app.services import Assistant
from app.services import Quiz_generator


ai_bp = Blueprint('ai',__name__,url_prefix='/api/ai')

ai_assistant = Assistant()
quiz_generator = Quiz_generator()



@ai_bp.route("/ai_assistant", methods=["POST"])
def ai_assistant_endpoint():
    data = request.json["UserInput"]  # otrzymywanie prompta którego podał użytkownik
    if data:
        response = ai_assistant.generate_response(data)
        return response
    else:
        return {"error": "No prompt provided"}
    
@ai_bp.route("/quiz_generator",methods=["POST"])
def quiz_generator_endpoint():
    # theme = request.json['Theme']
    # possible_answers = request.json['Possible_answers']
    # amount_of_questions = request.json['Amount_of_questions']
    # yes_or_no_answers = request.json['Yes_or_no_answers']

    quiz = quiz_generator.generate_quiz(quiz_params=request.json)
    return {'Quiz': quiz}





