from flask import Blueprint,request
from app.services import Air_data

air_bp = Blueprint('air',__name__, url_prefix='/api/air_data')



@air_bp.route("/pollution", methods=["GET"])
def air_quality_endpoint():
    air_data = Air_data()
    if request.method == "GET":
        data = request.args
            
        latitude = data.get('latitude',default=None, type=float)
    
        longitude = data.get('longitude',default=None, type=float)


        if not latitude or not longitude:
            return {"error-msg": "Please provide Latitude and Longitude"}

        air_quality_data = air_data.get_air_quality_data(
            latitude=latitude, longitude=longitude
        )

        return {f"air-pollution-data": air_quality_data}
    


@air_bp.route("/weather", methods=["GET"])
def weather_endpoint():
    air_data = Air_data()
    if request.method == "GET":
        data = request.args
            
        latitude = data.get('latitude',default=None, type=float)
    
        longitude = data.get('longitude',default=None, type=float)

        if not latitude or not longitude:
            return {"error-msg": "Please provide Latitude and Longitude"}

        weather_data = air_data.get_weather_data(
            latitude=latitude, longitude=longitude
        )

        return {f"weather-data": weather_data}
