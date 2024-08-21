from flask import Blueprint,request
from app.services import Articles


articles_bp = Blueprint('articles',__name__,url_prefix='/api/article')

@articles_bp.route("/summary", methods=["GET"])
def article_endpoint():
    if request.method == "GET":
        amount = request.args.get('amount',default=5,type=int)
        articles = Articles().get_articles_summary(amount=amount)
        return {"articles-summary": articles}
    
@articles_bp.route("/component",methods=['GET'])
def article_component_endpoint():
    if request.method == 'GET':
    
        data = request.args

        component_name = data.get('component-name',default='title',type=str)
        amount = data.get('amount',default=5,type=int)

        article_component = Articles().get_articles_component(
            component=component_name,
            amount=amount
            )
     
        return {"Articles-components": article_component}