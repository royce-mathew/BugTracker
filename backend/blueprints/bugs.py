from flask import Blueprint, request
import json
from data.database import *
import uuid


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

        database = get_data()
        # Update information in database
        database[str(uuid.uuid1())] = {
            "username" : json_data["username"],
            "title": json_data["title"],
            "description": json_data["description"],
            "comments": []
        }
        set_data(database)

        return "Ok", 200
    
    @blueprint.route("/bugs/<string:bug_id>/comment", methods=["GET"])
    def index3(bug_id):
         # Load request body data
        json_string = request.data.decode("utf-8")
        json_data = json.loads(json_string)

        database = get_data()
        database[bug_id]["comments"].append({
            "username": json_data["username"],
            "title": json_data["title"],
            "description": json_data["description"]
        })
        set_data(database)

    return blueprint

