from flask import Blueprint,request
from app.services import Air_data

air_bp = Blueprint('air',__name__, url_prefix='/api/air')

air_data = Air_data()

@air_bp.route("/air_quality", methods=["POST"])
def air_quality_endpoint():
    if request.method == "POST":
        data = request.json
            
        latitude = data['Latitude']
    
        longitude = data['Longitude']

        air_quality_data = air_data.get_air_quality_data(
            latitude=latitude, longitude=longitude
        )

        return {f"Air_quality_data": air_quality_data}
    


@air_bp.route("/weather", methods=["POST"])
def weather_endpoint():
    if request.method == "POST":
        data = request.json
            
        latitude = data['Latitude']
    
        longitude = data['Longitude']

        weather_data = air_data.get_weather_data(
            latitude=latitude, longitude=longitude
        )

        return {f"Weather_data": weather_data}