from flask import Blueprint, request
from app.services import Assistant


assistant_bp = Blueprint('ai_assistant',__name__,url_prefix='/api/ai_assistant')

ai_assistant = Assistant()



@assistant_bp.route("/", methods=["POST"])
def ai_assistant_endpoint():
    data = request.json.get(
        "UserInput"
      )  # otrzymywanie prompta którego podał użytkownik
   
    if data:
        response = ai_assistant.request_post(data)
        return response
    else:
        return {"error": "No prompt provided"}