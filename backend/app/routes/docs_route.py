from flask import Blueprint

docs_bp = Blueprint('docs',__name__,url_prefix='/api/docs')
@docs_bp.route("/blueprints",methods=['GET'])  
def blueprints():
    return {
        "Blueprints": {
            "/api/air": "Blueprint with air data endpoints",
            "/api/news": "Blueprint with ecology learning endpoints",
            "/api/auth": "Blueprint with user actions endpoints",
            "/api/ai": "Blueprint with neural networks",
            "/api/docs": "Blueprint with documentation endpoints"
            }
    }

@docs_bp.route("/endpoints",methods=["GET"])
def endpoints():
    return{
        "Endpoints": 
{

"/api/air/air_quality": 
    {
    "Air quality -- To get data send POST request with json that looks like this:":
    {
    'Element': "<chemical element name you want to get data about>",
    'Latitude': "<latitude of place you want to get data about>",
    'Longitude': "<longitude of place you want to get data about>"
    }
    },
    
"/api/auth/login": 
    {
    "Login -- To login to account send POST request with json that looks like this":
    {
    'Email': "<email of account to login>",
    'Password': "<password of account>"
    }
    },

"/api/auth/register": 
    {
    "Register -- To register an account send POST request with json that looks like this": 
    {
    'Name': "<name of account>",
    'Email': "<email of account>",
    'Password': "<password of account>"
    }
    },
"/api/ai/ai_assistant": {"Eco assistant -- To get answer send POST request with json that looks like this": 
    {
    'UserInput': "<your prompt>"
    }
    },   

"/api/news/articles": "Articles -- To get articles about ecology send GET request",
"/api/docs/blueprints": "Blueprints -- To see what kind of blueprints api serves send GET request",
"/api/docs/endpoints": "Endpoints -- To see what kind of endpoints api serves send GET request"
            
}
}