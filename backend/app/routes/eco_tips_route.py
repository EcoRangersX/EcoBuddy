from flask import Blueprint,request
from app.services import Eco_tips



eco_tips_bp = Blueprint('eco_tips',__name__,url_prefix='/api/eco_tips')


@eco_tips_bp.route('/get_eco_tips',methods=['GET'])
def get_eco_tips():
    
    amount = request.args.get('Amount',default=5,type=int)



    return {'Eco_tips': Eco_tips().get_eco_tips(amount=amount)}