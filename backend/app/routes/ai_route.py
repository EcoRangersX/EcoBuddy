from flask import Blueprint, request
from app.services import Assistant
from app.services import Quiz_generator
from app.services import Ai_questions


ai_bp = Blueprint('ai',__name__,url_prefix='/api/ai')

@ai_bp.route("/ai_assistant", methods=["GET"])
def ai_assistant_endpoint():
    ai_assistant = Assistant()
    data = request.args.get('UserInput',default=None, type=str)  # otrzymywanie prompta którego podał użytkownik
    if data:
        response = ai_assistant.request_post(data)
        return response
    else:
        return {"error": "No prompt provided"}
    

@ai_bp.route("/quiz_generator", methods=["GET"])
def quiz_generator_endpoint():
    quiz_generator = Quiz_generator()
    args = request.args
    parameters = {
        'Theme': args.get('Theme', default='Ecology' ,type=str),
        'Amount_of_questions': args.get('Amount_of_questions' ,default=5 ,type=int),
        'Yes_or_no_answers': args.get('Yes_or_no_answers' ,default=False ,type=bool),
        'Possible_answers': args.get('Possible_answers' ,default=2 ,type=int)

    }
    return {'Quiz': quiz_generator.generate_quiz(quiz_params=parameters)}


@ai_bp.route('/example_questions',methods=['GET'])
def ai_example_questions():
    return {'Questions': Ai_questions().get_ai_questions(amount=request.args.get('Amount' ,default=5 ,type=int))}
    