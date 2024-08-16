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

"/api/quizes/quiz":
    {
        "GET request parameters":
        {
            'titles': "<True if you want to get titles of quizes, False if you want to get just quizes>",
            'amount': "<amount of quizes you want to get>"
        },
        "GET request response":
        {
            "quizes":
            {
                "<quiz title>":
                {
                    "Answer_key": 
                    {
                        "q1": "Answer1",
                        "q2": "Answer1"
                    },
                    "Questions": 
                    {
                        "dsfsdfs": 
                        {
                            "Answer1": "babla",
                            "Answer2": "idfidfhid"
                        },
                        "sdsdsd": 
                        {
                            "Answer1": "blabla",
                            "Answer2": "blbla"
                        }
                    },
                    "Title": "Quiz1"
                }
            }
        }
    },
"/api/quizes/quiz_titles":
    {
        "GET request parameters":
        {
            'amount': "<amount of titles you want to get>"
        },

        "GET request response":
        {
            "quiz-titles": 
            [
                "<quiz title>",
                "<quiz title>"
            ]
        }
    },
"/api/air/air_quality": 
    {
        "GET request parameters":
        {
                'latitude': "<latitude of place you want to get data about>",
                'longitude': "<longitude of place you want to get data about>"
        },

        "GET request response":
        {
            "air-quality-data": 
            {
                "aqi": "<aqi value in word for example: fair,good,...>",
                "city": "<city name by longitude and latitude>",
                "concentration-of-elements": 
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
        "GET request parameters":
        {
            'latitude': "<latitude of place you want to get data about>",
            'longitude': "<longitude of place you want to get data about>"
        },
        "GET request response":
        {
            "weather-data": 
            {
                "pressure": "<value in hPa>",
                "humidity": "<value in precentage>",
                "temp": "<value in celsius>",
                "wind-speed": "<value in km/h>"
            }
        }
    },  
"/api/auth/login": 
    {
        "POST request":
        {
            'email': "<email of account to login>",
            'password': "<password of account>"
        },

        "Post request response":
        {
            'response': 'for example: Logged succesfully!',
            'error-msg': 'None or error msg'
        }
    
    },
"/api/auth/register": 
    {
        "Post request": 
        {
            'name': "<name of account>",
            'email': "<email of account>",
            'password': "<password of account>"
        },

        "Post request response":
        {
            'response': 'for example: Registered succesfully',
            'error-msg': 'None or error msg'
        }
    },
"/api/ai/ai_assistant": 
    {
        "GET request parameters": 
        {
            'user-input': "<your prompt>"
        },

        "GET request response":
        {
            "response": "<generated text>"
        }
    },   
"/api/news/articles": 
    {
        "Get request response":
        { 
            "aricles": 
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
        "GET request parameters":
        {
            "component": '<component name: title,img,link>',
            "amount": '<amount of results int>'
        },
        "GET request response":
        {
            "article-<component name>-1": '<component>',
            "article-<component name>-2": '<component>'
        }
    },
"/api/ai/quiz_generator": 
    {
        "GET request parameters":
        {
            'theme': "<theme of quiz>",
            'amount-of-questions': "<amount of questions in quiz>",
            'yes-or-no-answers': "<True if answers are yes or no, False if multiple choice>",
            'possible-answers': "<amount of possible answers !if yes or no then leave it empty!>"
        },

        "response":
        {
            "quiz": 
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
    },
"/api/ai/example_question":
    {
        "GET request parameters":
        {
            'amount': '<amount of questions you want to receive>'
        },
        "GET request response":
        [
            "question1",
            "question2",
            "question3"
        ]
        
    },
"/api/eco_tips/get_eco_tips":
    {
        "GET request parameters":
        {
            'amount': '<amount of eco tips you want to receive>'
        },
        "GET request response":
        {
            'eco-tips':
            {
                'title1': 'eco_tip1',
                'title2': 'eco_tip2',
                'title3': 'eco_tip3',
                'title4': 'eco_tip4'
            }
        }
    }
            
}
}
