from flask import Blueprint, request
from app.services import Assistant


ai_bp = Blueprint('ai',__name__,url_prefix='/api/ai')

ai_assistant = Assistant()



@ai_bp.route("/ai_assistant", methods=["POST"])
def ai_assistant_endpoint():
    data = request.json["UserInput"]  # otrzymywanie prompta którego podał użytkownik
    if data:
        response = ai_assistant.request_post(data)
        return response
    else:
        return {"error": "No prompt provided"}