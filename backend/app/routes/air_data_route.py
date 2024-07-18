from flask import Blueprint,request
from app.services import Air_data

air_bp = Blueprint('air',__name__, url_prefix='/api/air')

air_data = Air_data()

@air_bp.route("/air_quality", methods=["POST"])
def air_quality_endpoint():
    if request.method == "POST":
        element = request.json.get(
            "Element"
            
            )
        latitude = request.json.get(
            "latitude"
            
            )
        longitude = request.json.get(
            "longitude"
            
            )
        print(f'{element} {latitude} {longitude}')
     

        concentration = air_data.get_air_quality_data(
            latitude=latitude, longitude=longitude, element=element
        )

        return {f"{element} concentration": concentration}