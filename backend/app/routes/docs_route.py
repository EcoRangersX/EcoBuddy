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
        "POST request":
        {
                'Latitude': "<latitude of place you want to get data about>",
                'Longitude': "<longitude of place you want to get data about>"
        },

        "Response":
        {
            "Air_quality_data": {
                "AQI": "Fair",
                "Concentration_of_elements": {
                "co": 186.92,
                "nh3": 4.81,
                "no": 0,
                "no2": 6.17,
                "o3": 66.52,
                "pm10": 4.91,
                "pm2_5": 3.16,
                "so2": 3.28
                }
            }
        }
    },
    
"/api/auth/login": 
    {
        "POST request":
        {
            'Email': "<email of account to login>",
            'Password': "<password of account>"
        },

        "Response":
        {
            'Response': 'Logged succesfully!',
            'Error_msg': None
        }
    
    },

"/api/auth/register": 
    {
        "Post request": 
        {
            'Name': "<name of account>",
            'Email': "<email of account>",
            'Password': "<password of account>"
        },

        "Response":
        {
            'Response': 'Registered succesfully',
            'Error_msg': None
        }
    },

"/api/ai/ai_assistant": 
    {
        "Post request": 
        {
            'UserInput': "<your prompt>"
        },

        "Response":
        {
            "Response": "<generated text>"
        }
    },   

"/api/news/articles": 
    {
        "Get request response":
        { 
            "Aricles": 
            {
                "<article name>": 
                {
                    "img": "<img link>",
                    "link": "<article link>",
                    "title": "<article title>"
                },
                "<article2 name>": 
                {
                    "img": "<img link>",
                    "link": "<article link>",
                    "title": "<article title>"
                }
                

            }
            
        }
    },
"/api/docs/blueprints": 
    {
        "Get request response": 'Json with key "Blueprints" and values of routes to blueprints'
        

    },
"/api/docs/endpoints": 
    {
        "Get request response": 'Json with key "Endpoints" and values of routes to endpoints'
    }
            
}
}