from flask import Blueprint,request
from app.services import Air_data

air_bp = Blueprint('air',__name__, url_prefix='/api/air')

air_data = Air_data()

@air_bp.route("/air_quality", methods=["GET"])
def air_quality_endpoint():
    if request.method == "GET":
        data = request.args
            
        latitude = data.get('Latitude',default=None, type=float)
    
        longitude = data.get('Longitude',default=None, type=float)

        if not latitude or not longitude:
            return {"Error_msg": "Please provide Latitude and Longitude"}

        air_quality_data = air_data.get_air_quality_data(
            latitude=latitude, longitude=longitude
        )

        return {f"Air_quality_data": air_quality_data}
    


@air_bp.route("/weather", methods=["GET"])
def weather_endpoint():
    if request.method == "GET":
        data = request.args
            
        latitude = data.get('Latitude',default=None, type=float)
    
        longitude = data.get('Longitude',default=None, type=float)

        if not latitude or not longitude:
            return {"Error_msg": "Please provide Latitude and Longitude"}

        weather_data = air_data.get_weather_data(
            latitude=latitude, longitude=longitude
        )

        return {f"Weather_data": weather_data}