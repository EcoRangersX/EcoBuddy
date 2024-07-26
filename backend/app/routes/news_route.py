from flask import Blueprint,request
from app.services import Get_articles


news_bp = Blueprint('news',__name__,url_prefix='/api/news')

@news_bp.route("/articles", methods=["GET"])
def article_endpoint():
    if request.method == "GET":
        articles = Get_articles().get_articles_summary()

        return {"Aricles": articles}