from flask import Blueprint, request
import json
# Initialize Database Here

def init_blueprint(gateway):
    blueprint = Blueprint("bugs", __name__)

    # Get List of Repsitories
    @blueprint.route("/bugs/", method=["GET"])
    def index():
        username = request.args.get("username")
        print("Listing bugs")
    
    # Create a new Repository
    @blueprint.route("/bugs/create", methods=["POST"])
    def index2():
        # Get Username from args
        username = request.args.get("username")
        # Get Json Data
        json_string = request.data.decode("utf-8")
        json_data = json.loads(json_string)

        print(username, json_data)
        return "Ok", 200
    
    return blueprint
