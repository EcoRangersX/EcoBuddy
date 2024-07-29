# -*- coding: utf-8 -*-
import requests
import os
from dotenv import load_dotenv

load_dotenv()
class Air_data:
    api_key = os.environ.get("OPEN_WEATHER_API_KEY")
 
    def get_air_quality_data(self, latitude: float, longitude: float):
        self.response = requests.get(
            url=f"http://api.openweathermap.org/data/2.5/air_pollution?lat={latitude}&lon={longitude}&appid={self.api_key}"
        )

        self.response_json = self.response.json()

        aqi = self.response_json["list"][0]['main']['aqi']
        aqi_levels = ['Good','Fair','Modedrate','Poor','Very Poor']
        aqi = aqi_levels[aqi-1]

        concentrations = self.response_json["list"][0]["components"]

        return {
            "Concentration_of_elements": concentrations,
            "AQI": aqi,
        }
    
    def get_weather_data(self,latitude: float,longitude: float):
        self.response = requests.get(
            url=f"https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={self.api_key}"
        )

        self.response_json = self.response.json()

        temp = round(self.response_json['main']['temp'] - 273.15,1)
        wind_speed = round( self.response_json['wind']['speed']*3.6 , 2)
        
        self.response = {
            'Pressure': f"{self.response_json['main']['pressure']}",
            'Temp': f"{temp}",
            'Wind_speed':f"{wind_speed}",
            'Humidity':f"{self.response_json['main']['humidity']}"
            }

        return self.response
