from flask import Flask
from flask_cors import CORS
from .routes import *
from .tests import *


def create_app():
    app = Flask("Eco buddy")
    CORS(app)

    app.register_blueprint(air_bp)
    app.register_blueprint(articles_bp)
    app.register_blueprint(assistant_bp)
    app.register_blueprint(auth_bp)
    app.register_blueprint(docs_bp)

    return app

def test_app(features: list):
    test_api(features=features)
