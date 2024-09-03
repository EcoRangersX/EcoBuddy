import requests,json
from threading import Thread


class Air_tester():
    def __init__(self):
        self.example_lat, self.example_long = (50.12195259429432, 20.049317598057517)

        self.air_quaility_thread = Thread(target=self.air_quality) 
        self.weather_thread = Thread(target=self.weather)

        self.threads = [self.air_quaility_thread,self.weather_thread]

    def air_quality(self):
        air_quality_response = requests.get(
            url="http://127.0.0.1:5000/api/air_data/pollution",
            params={"latitude": self.example_lat, 
                  "longitude": self.example_long
                  }

            )
        print(f"\nAIR POLLUTION: \n{json.dumps(air_quality_response.json(),indent=2)}")
    
    def weather(self):
        weather_response = requests.get(
            url="http://127.0.0.1:5000/api/air_data/weather",
            params={
                "latitude": self.example_lat,
                "longitude": self.example_long
                }
            )
        
        print(f"\nWEATHER:\n {json.dumps(weather_response.json(),indent=2)}")
