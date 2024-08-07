from flask import Blueprint,request
from app.services import Eco_tips



eco_tips_bp = Blueprint('eco_tips',__name__,url_prefix='/api/eco_tips')


@eco_tips_bp.route('/get_eco_tips',methods=['POST'])
def get_eco_tips():
    
    amount = request.json['Amount']



    return {'Eco_tips': Eco_tips().get_eco_tips(amount=amount)}