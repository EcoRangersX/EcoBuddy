import requests
import os
from dotenv import load_dotenv

class Air_data:
    def __init__(self):
        load_dotenv()
        self.api_key = os.environ.get("OPEN_WEATHER_API_KEY")
 
    def get_air_quality_data(self, latitude: float, longitude: float):
        response = requests.get(
            url=f"http://api.openweathermap.org/data/2.5/air_pollution?lat={latitude}&lon={longitude}&appid={self.api_key}"
        )

        response_json = response.json()

        aqi = response_json["list"][0]['main']['aqi']
        aqi_levels = ['Good','Fair','Modedrate','Poor','Very Poor']
        aqi = aqi_levels[aqi-1]

        concentrations = response_json["list"][0]["components"]

        city = self.get_readable_location(latitude=latitude,longitude=longitude)

        return {
            "Concentration_of_elements": concentrations,
            'City': city['City'],
            "AQI": aqi
        }
    
    def get_readable_location(self,latitude: float,longitude: float) -> dict:
        response = requests.get(
            url=f'http://api.openweathermap.org/geo/1.0/reverse?lat={latitude}&lon={longitude}&limit={1}&appid={self.api_key}'
            )
        
        response_json = response.json()

        return {'City': response_json[0]['name']}

    
    def get_weather_data(self,latitude: float,longitude: float):
        response = requests.get(
            url=f"https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={self.api_key}"
        )

        response_json = response.json()

        temp = round(response_json['main']['temp'] - 273.15,1)
        wind_speed = round( response_json['wind']['speed']*3.6 , 2)
        
        response = {
            'Pressure': f"{response_json['main']['pressure']}",
            'Temp': f"{temp}",
            'Wind_speed':f"{wind_speed}",
            'Humidity':f"{response_json['main']['humidity']}"
            }

        return response
