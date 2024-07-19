from flask import Blueprint, request
from app.services import Account


auth_bp = Blueprint('auth',__name__,url_prefix='/api/auth')

account = Account()

@auth_bp.route("/login",methods=['POST'])
def login():
    print(request.json)
    #account.setup_account_data()
    return {'smth': 's'}

@auth_bp.route("/register",methods=['POST'])
def register():
    #account.setup_account_data()
    return {'smth': 's'}

@auth_bp.route("/authorize",methods=['POST'])
def authorize():
    #account.setup_account_data()
    return {'smth': 's'}