from flask import Flask
from flask_cors import CORS
from .routes import *
from .config import Config
from .globals import globals

globals_dict = globals


def create_app():

    Config()
    
    app = Flask("Eco buddy")
    
    CORS(app)


    app.register_blueprint(quizes_bp)
    app.register_blueprint(air_bp)
    app.register_blueprint(articles_bp)
    app.register_blueprint(ai_bp)
    app.register_blueprint(auth_bp)
    app.register_blueprint(docs_bp)
    app.register_blueprint(eco_tips_bp)

    return app


