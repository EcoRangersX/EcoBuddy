import requests


class Air_data:
    api_key = "196745f493a13cdf45ef558729bf6996"  # tak wiem nie ukryty
    chemical_elements = None

    def get_air_quality_data(self, latitude: float, longitude: float, element: str):
        self.response = requests.get(
            url=f"http://api.openweathermap.org/data/2.5/air_pollution?lat={latitude}&lon={longitude}&appid={self.api_key}"
        )

        self.response_json = self.response.json()

        return {
            "concentration of element": self.response_json["list"][0]["components"][
                element
            ],
            "AQI": self.response_json["list"][0]['main']['aqi'],
        }
    


"""

response:

{
  "coord":[
    50,
    50
  ],
  "list":[
    {
      "dt":1605182400,
      "main":{
        "aqi":1
      },
      "components":{
        "co":201.94053649902344,
        "no":0.01877197064459324,
        "no2":0.7711350917816162,
        "o3":68.66455078125,
        "so2":0.6407499313354492,
        "pm2_5":0.5,
        "pm10":0.540438711643219,
        "nh3":0.12369127571582794
      }
    }
  ]
}


"""