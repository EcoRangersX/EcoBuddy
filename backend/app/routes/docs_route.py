from flask import Blueprint

docs_bp = Blueprint('docs',__name__,url_prefix='/api/docs')
@docs_bp.route("/blueprints",methods=['GET'])  
def blueprints():
    return {
        "Blueprints": {
            "/api/air_data": "Blueprint with air data endpoints",
            "/api/article": "Blueprint with ecology learning endpoints",
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

"/api/quiz":
    {
        "Endpoint": "This is the main endpoint for quizes.\n You can use it to get quizes from database. \nYou get to choose whether you want to receive just quizzes or quizzes with its titles. \nYou also can specify amount of quizzes to receive",
        
        "GET request parameters":
        {
            'titles': "bool",
            'amount': "int"
        },

        "GET request response":
        {
            "working on it": 'space taker'
        }
    },
"/api/quiz/title":
    {
        "Endpoint": "This endpoint is used to get ONLY quiz titles. \nYou can specify number of titles you want to get",
        
        "GET request parameters":
        {
            'amount': "int"
        },

        "GET request response":
        {
            "quiz-titles": 
            [
                "str | quiz title",
                "str | quiz title"
            ]
        }
    },
"/api/air_data/pollution": 
    {
        "Endpoint": "This endpoint is used to get air pollution data in some place.\n You NEED to specify latitude and longitude of a place where you want to get data about",
        
        "GET request parameters":
        {
                'latitude': "float",
                'longitude': "float"
        },

        "GET request response":
        {
            "air-pollution-data": 
            {
                "aqi": 
                {
                    "value": "float",
                    "status": "str"
                },
                "city": "str",
                "concentration-of-elements": 
                [
                    {
                        "chem-element": "str",
                        "value": "int",
                        "bg-color": "str"
                    },
                    {
                        "chem-element": "str",
                        "value": "int",
                        "bg-color": "str"
                    }
                ]
            }
        }
    },
"/api/air_data/weather":
    {
        "Endpoint": "This endpoint is used to get weather data for some place. \n You NEED to specify latitude and longitude of a place where you want to get weather data",

        "GET request parameters":
        {
            'latitude': "float",
            'longitude': "float"
        },
        "GET request response":
        {
            "weather-data": 
            [
                {
                    "weather-element": "pressure",
                    "value": "int | value in hPa"
                },
                {
                    "weather-element": "humidity",
                    "value": "int | value in %"
                },
                {
                    "weather-element": "temperature",
                    "value": "float | value in celcius"
                },
                {
                    "weather-element": "wind-speed",
                    "value": "float | value in km/h"
                }
            ]
        }
    },  
"/api/auth/login": 
    {
        "Endpoint": "This endpoint is used to login to account basicly just authentication.\n You NEED to specify email and password of an account",

        "POST request":
        {
            'email': "str",
            'password': "str"
        },

        "Post request response":
        {
            'response': 'bool',
            'error-msg': "str | empty str if no error occured"
        }
    
    },
"/api/auth/register": 
    {
        "Endpoint": "This endpoint is used to register a account.\n You NEED to specify name,email and password",

        "Post request": 
        {
            'name': "<name of account>",
            'email': "<email of account>",
            'password': "<password of account>"
        },

        "Post request response":
        {
            'response': 'bool',
            'error-msg': 'str | empty str if no error occured'
        }
    },
"/api/ai/ai_assistant": 
    {
        "Endpoint": "This endpoint is used to ask eco assistant questions about ecology. \n You need to specify user-prompt which is just prompt that user asked",

        "GET request parameters": 
        {
            'user-input': "str"
        },

        "GET request response":
        {
            "response": "str"
        }
    },   
"/api/ai/quiz_generator": 
    {
        "Endpoint": "This endpoint is used to generate a quiz.\n You need to specify theme of an quiz for example: coral reef, amount of questions you want to have in quiz\n whether or not you want yes or no answers and how much possible answers are inside each question",

        "GET request parameters":
        {
            'theme': "str",
            'amount-of-questions': "int",
            'yes-or-no-answers': "bool",
            'possible-answers': "int | if yes-or-no then leave it empty"
        },

        "response":
        {
            "working on it": "space taker"
        }
    },
"/api/docs/blueprints": 
    {
        "Get request response": 'Json with key "Blueprints" and values of routes to blueprints'
    },
"/api/docs/endpoints": 
    {
        "Get request response": 'Json with key "Endpoints" and values of routes to endpoints'
    },
"/api/ai/example_question":
    {
        "Endpoint": "This endpoint is used to get example questions to ask ai assistant.\n You NEED to specify amount of questions",

        "GET request parameters":
        {
            'amount': 'int'
        },
        "GET request response":
        {
            "questions":
            [
                "str | question",
                "str | question",
                "str | question"
            ]
        }
        
    },
"/api/eco_tips":
    {
        "Endpoints": "This endpoint is used to get eco tips.\n You need to specify amount you want to receive",

        "GET request parameters":
        {
            'amount': 'int'
        },
        "GET request response":
        {
            'eco-tips':
            [
                {
                    "title": "str",
                    'description': "str"
                }
            ]
        }
    }
            
}
}




