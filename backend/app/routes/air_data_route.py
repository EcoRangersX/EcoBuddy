from flask import Blueprint,request
from app.services import Air_data

air_bp = Blueprint('air',__name__, url_prefix='/api/air')

air_data = Air_data()

@air_bp.route("/air_quality", methods=["POST"])
def air_quality_endpoint():
    if request.method == "POST":
        data = request.json
        element = data['Element']
            
        latitude = data['Latitude']
    
        longitude = data['Longitude']

        air_quality_data = air_data.get_air_quality_data(
            latitude=latitude, longitude=longitude, element=element
        )

        return {f"Air_quality_data": air_quality_data}