from flask import Blueprint,request
from app.services import Quizes
import yaml

quizes_bp = Blueprint('quizzes',__name__,url_prefix='/api/quiz')




