from flask import Blueprint, request
from app.services import Account
from app.utils import *


auth_bp = Blueprint('auth',__name__,url_prefix='/api/auth')


account = Account()
@auth_bp.route("/login",methods=['POST'])
def login():
    
    data = request.json
    setup = account.setup_user_data(email=data['Email'],password = data['Password'])

    if setup:
        return setup
    
    if account.login():
        return {'Response': 'Logged succesfully!',
                'Error_msg': None}
    else:
        return {'Response': 'Invalid email or password!',
                'Error_msg': None}


@auth_bp.route("/register",methods=['POST'])
def register():
    data = request.json
    setup = account.setup_user_data(name=data['Name'],email=data['Email'],password = data['Password'])

    if setup:
        return setup

    register =account.reqister()
    return register

