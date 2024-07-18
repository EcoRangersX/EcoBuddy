from flask import Blueprint, request


auth_bp = Blueprint('auth',__name__,url_prefix='/api/auth')

@auth_bp.route("/login",methods=['POST'])
def login():
    pass

@auth_bp.route("/register",methods=['POST'])
def register():
    pass

@auth_bp.route("/authorize",methods=['POST'])
def authorize():
    pass