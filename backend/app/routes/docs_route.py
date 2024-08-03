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

        "Post request response":
        {
            "Air_quality_data": 
            {
                "AQI": "<aqi value in word for example: fair,good,...>",
                "City": "<city name by longitude and latitude>",
                "Concentration_of_elements": 
                {
                    "co": 186.92,
                    "nh3": 4.81,
                    "no": 0,
                    "no2": 6.17,
                    "o3": 66.52,
                    "pm10": 4.91,
                    "pm2_5": 3.16,
                    "so2": 3.28,
                    "! Values are in ug/m3 !": 'space taker'
                }
            }
        }
    },

"/api/air/weather":
    {
        "POST request":
        {
            'Latitude': "<latitude of place you want to get data about>",
            'Longitude': "<longitude of place you want to get data about>"
        },
        "Post request response":
        {
            "Weather_data": 
            {
                "Pressure": "<value in hPa>",
                "Humidity": "<value in precentage>",
                "Temp": "<value in celsius>",
                "Wind_speed": "<value in km/h>"
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

        "Post request response":
        {
            'Response': 'for example: Logged succesfully!',
            'Error_msg': 'None or error msg'
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

        "Post request response":
        {
            'Response': 'for example: Registered succesfully',
            'Error_msg': 'None or error msg'
        }
    },

"/api/ai/ai_assistant": 
    {
        "Post request": 
        {
            'UserInput': "<your prompt>"
        },

        "Post request response":
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
                "<article title>": 
                {
                    "img": "<img link>",
                    "link": "<article link>"
                 
                },
                "<article2 title>": 
                {
                    "img": "<img link>",
                    "link": "<article link>"
                    
                }
                

            }
            
        }
    },
"/api/news/article_component":
    {
        "Post request":
        {
            "Component": '<component name: title,img,link>',
            "Amount": '<amount of results int>'
        },
        "Post request response":
        {
            "Article_<component name>_1": '<component>',
            "Article_<component name>_2": '<component>'
        }
    },
"/api/ai/quiz_generator": 
    {
        "Post request":
        {
            'Theme': "<theme of quiz>",
            'Amount_of_questions': "<amount of questions in quiz>",
            'Yes_or_no_answers': "<True if answers are yes or no, False if multiple choice>",
            'Possible_answers': "<amount of possible answers !if yes or no then pass the value 2!>"
        },

        "Response":
        {
            "Quiz": 
            {
                "Questions": 
                {
                    "question1": 
                    {
                        "Answer1": "<answer1>",
                        "Answer2": "<answer2>"
                    },
                    "question2": 
                    {
                        "Answer1": "<answer1>",
                        "Answer2": "<answer2>"
                    }
                },
                "Answer_key": 
                {
                    "q1": "<correct answer name for question1>",
                    "q2": "<correct answer name for question2>"
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