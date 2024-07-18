from flask import Blueprint,request
from app.services import Get_articles


articles_bp = Blueprint('articles',__name__,url_prefix='/api/articles')

@articles_bp.route("/", methods=["GET"])
def article_endpoint():
    if request.method == "GET":
        articles = Get_articles().get_articles_summary()

        return {"Aricles": articles}