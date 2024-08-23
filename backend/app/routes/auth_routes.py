from flask import Blueprint, request
from app.services import Account
from app.utils import *


auth_bp = Blueprint('auth',__name__,url_prefix='/api/auth')



@auth_bp.route("/login",methods=['POST'])
def login():
    account = Account()
    
    data = request.json
    setup = account.setup_user_data(email=data['email'],password = data['password'])

    if setup:
        return setup
    
    if account.login():
        return {'response': True,
                'error-msg': ''}
    else:
        return {'response': False,
                'error-msg': "Invalid email or password"}


@auth_bp.route("/register",methods=['POST'])
def register():
    account = Account()
    data = request.json
    setup = account.setup_user_data(name=data['name'],email=data['email'],password = data['password'])

    if setup:
        return setup

    register =account.reqister()
    return register

