from flask import Blueprint,request
from app.services import Get_articles


news_bp = Blueprint('news',__name__,url_prefix='/api/news')

@news_bp.route("/articles", methods=["GET"])
def article_endpoint():
    if request.method == "GET":
        articles = Get_articles().get_articles_summary()
        return {"Aricles": articles}
    
@news_bp.route("/article_component",methods=['POST'])
def article_component_endpoint():
    if request.method == 'POST':
    
        data = request.json

        component_name = data['Component']
        amount = data['Amount']

        article_component = Get_articles().get_articles_component(
            component=component_name,
            amount=amount
            )
     
        
        to_return = {}
        for itr in range(amount):
            to_return[f'article_{component_name}_{itr+1}'] = article_component[itr][0]

            

        
        return to_return