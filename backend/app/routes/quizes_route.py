from flask import Blueprint,request
from app.database import cursor
from app.services import Quizes

quizes_bp = Blueprint('quizes',__name__,url_prefix='/api/quizes')


@quizes_bp.route('/quiz_titles',methods=['POST'])
def quizes_titles_endpoint():
    if request.method == 'POST':

        data = request.json
        amount = data['Amount']

        titles = Quizes().get_quiz_titles(amount=amount)

        return {'Quiz_titles': titles}
@quizes_bp.route('/quiz',methods=['POST'])
def quizes_endpoint():
    if request.method == 'POST':
        data = request.json

        titles: bool = data['Titles']
        amount = data['Amount']

        quizes = Quizes().get_quizes(amount=amount,titles=titles)

        print(quizes)

        return {'Quizes': quizes}


