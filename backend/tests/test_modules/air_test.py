import requests,json


class Air_tester():
    def __init__(self):
        example_lat, example_long = (50.063843899589884, 19.942991724503248)
        air_quality_response = requests.post(
            url="http://127.0.0.1:5000/api/air/air_quality",
            json={"Latitude": example_lat, 
                  "Longitude": example_long
                  }

            )
    
        weather_response = requests.post(
            url="http://127.0.0.1:5000/api/air/weather",
            json={
                "Latitude": example_lat,
                "Longitude": example_long
                }
            )
        print(f"\nAIR POLLUTION: \n{json.dumps(air_quality_response.json(),indent=2)}")
        print(f"\nWEATHER:\n {json.dumps(weather_response.json(),indent=2)}")
