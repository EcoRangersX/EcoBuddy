from flask import Blueprint,request
from app.services import Articles


articles_bp = Blueprint('articles',__name__,url_prefix='/api/articles')

@articles_bp.route("/articles_summary", methods=["GET"])
def article_endpoint():
    if request.method == "GET":
        articles = Articles().get_articles_summary()
        return {"articles": articles}
    
@articles_bp.route("/article_component",methods=['GET'])
def article_component_endpoint():
    if request.method == 'GET':
    
        data = request.args

        component_name = data.get('component-name',default='title',type=str)
        amount = data.get('amount',default=5,type=int)

        article_component = Articles().get_articles_component(
            component=component_name,
            amount=amount
            )
     
        return article_component