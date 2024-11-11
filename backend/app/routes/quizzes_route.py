from flask import Blueprint,request
from app.services import Quizzes

quizzes_bp = Blueprint('quizzes',__name__,url_prefix='/api/quiz')

@quizzes_bp.route("/title",methods=["GET"])
def get_quiz_title():
    amount = request.args.get('amount')

    quizzes = Quizzes()

    titles = quizzes.get_quiz_title(amount=amount)
    if not titles:
        return {"quiz-titles": []}
    
    return {"quiz-titles": titles}

@quizzes_bp.route("/preview",methods=["GET"])
def get_quiz_preview():
    amount = request.args.get('amount')
    
    quizzes = Quizzes()
    previews = quizzes.get_quiz_preview(amount=amount)

    if not previews:
        return {"quiz-preview": []}

    return {"quiz-preview": previews}

@quizzes_bp.route("/",methods=["GET"])
def get_quiz():
    id = request.args.get("id")
    
    if not id:
        return "id was not passed", 400

    quizzes = Quizzes()

    quiz = quizzes.get_quiz_by_id(id=id)
    if not quiz:
        return {'quiz': []}
    
    return {
        'quiz': quiz
        }


@quizzes_bp.route("/most-popular",methods=["GET"])
def most_popular_quiz():
    quizzes = Quizzes()
    best = quizzes.get_most_popular_quiz()
    return {"most-popular-quiz": best}






