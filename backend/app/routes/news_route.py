from flask import Blueprint,request
from app.services import Articles


news_bp = Blueprint('news',__name__,url_prefix='/api/news')

@news_bp.route("/articles", methods=["GET"])
def article_endpoint():
    if request.method == "GET":
        articles = Articles().get_articles_summary()
        return {"Aricles": articles}
    
@news_bp.route("/article_component",methods=['POST'])
def article_component_endpoint():
    if request.method == 'POST':
    
        data = request.json

        component_name = data['Component']
        amount = data['Amount']

        article_component = Articles().get_articles_component(
            component=component_name,
            amount=amount
            )
     
        return article_component