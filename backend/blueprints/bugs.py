from flask import Blueprint, request
import json
# from data.database import *
import uuid

# Initialize Database Here

database = {
    "1" : {
        "name": "Fix Bug List",
        "description": "Fix the entire list of bugs",
        "username": "Aaveg"
    },

    "2": {
        "name": "Add Image Support",
        "description": "Open Sockets and add support to images",
        "username": "Shri"
    },

    "3": {
        "name": "Add Documentation",
        "description": "Document Python / Java Code",
        "username": "Royce"
    }
}

def init_blueprint(gateway):
    blueprint = Blueprint("bugs", __name__)

    # Get List of Repsitories
    @blueprint.route("/bugs/", methods=["GET"])
    def index():
        return "Ok", 200
    
    # Create a new Repository
    @blueprint.route("/bugs/create", methods=["POST"])
    def index2():
        # Load request body data
        json_string = request.data.decode("utf-8")
        json_data = json.loads(json_string)

        # Update information in database
        database[str(uuid.uuid4())] = {
            "username" : json_data["username"],
            "title": json_data["title"],
            "desc": json_data["desc"],
        }

        return "Ok", 200
    
    return blueprint

