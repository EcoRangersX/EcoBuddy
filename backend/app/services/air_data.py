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

        formated_concentrations = []

        colors = {
            'co': '#74c6d4',
            'no': '#19b6f8',
            'no2': '#96d6e1',
            'nh3': '#0affc0',
            'o3': '#8be89f',
            'so2': '#37e9ca',
            'pm2_5': '#c0facc',
            'pm10': '#bff1f9' 

            }


        for key in concentrations.keys():
            name = key
            value = concentrations[key]

            cool_dict = { 
                "chem-element": str(name),
                "value": int(value),
                'bg-color': colors[name]
                },
            
            formated_concentrations.append(cool_dict)

            
        return {
            "concentration-of-elements": formated_concentrations,
            'city': city['city'],
            "aqi": aqi
        }
    
    def get_readable_location(self,latitude: float,longitude: float) -> dict:
        response = requests.get(
            url=f'http://api.openweathermap.org/geo/1.0/reverse?lat={latitude}&lon={longitude}&limit={1}&appid={self.api_key}'
            )
        
        response_json = response.json()

        return {'city': response_json[0]['name']}

    
    def get_weather_data(self,latitude: float,longitude: float):
        response = requests.get(
            url=f"https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={self.api_key}"
        )

        response_json = response.json()

        temp = round(response_json['main']['temp'] - 273.15,1)
        wind_speed = round( response_json['wind']['speed']*3.6 , 2)
        
        response = {
            'pressure': f"{response_json['main']['pressure']}",
            'temp': f"{temp}",
            'wind-speed':f"{wind_speed}",
            'humidity':f"{response_json['main']['humidity']}"
            }

        return response
