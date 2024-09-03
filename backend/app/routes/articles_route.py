from flask import Blueprint,request
from app.services import Articles


articles_bp = Blueprint('articles',__name__,url_prefix='/api/article')
