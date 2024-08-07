from flask import Blueprint,request
from app.database import cursor
from app.services import Quizes
import json
import yaml

quizes_bp = Blueprint('quizes',__name__,url_prefix='/api/quizes')


@quizes_bp.route('/quiz_titles',methods=['POST'])
def quizes_titles_endpoint():
    if request.method == 'POST':

        data = request.json
        amount = data['Amount']

        titles = Quizes().get_quiz_titles(amount=amount)
        titles_to_return = []
        for i in titles:
            titles_to_return.append(i[0])


        return {'Quiz_titles': titles_to_return}
@quizes_bp.route('/quiz',methods=['POST'])
def quizes_endpoint():
    if request.method == 'POST':
        data = request.json

        titles: bool = data['Titles']
        amount = data['Amount']

        quizes = Quizes().get_quizes(amount=amount,titles=titles)

        quizes_to_return = {}
        for title,quiz in quizes:
            quizes_to_return[title] = yaml.load(quiz,Loader=yaml.FullLoader)


        return {'Quizes': quizes_to_return}


