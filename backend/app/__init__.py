from flask import Flask
from flask_cors import CORS
from .routes import *
from .services import Get_articles
from .config import Config
from .globals import globals

globals = globals


def create_app():

    Config()
    
    app = Flask("Eco buddy")
    articles = Get_articles()
    CORS(app)

    
    articles.insert_articles_to_database()

    app.register_blueprint(air_bp)
    app.register_blueprint(news_bp)
    app.register_blueprint(ai_bp)
    app.register_blueprint(auth_bp)
    app.register_blueprint(docs_bp)

    return app


