from flask import Blueprint, jsonify, request
import json
from data.database import *


def init_blueprint(gateway):
    blueprint = Blueprint("bugs", __name__)

    # Get List of Bugs
    @blueprint.route("/bugs/", methods=["GET"])
    def index():
        return get_data(), 200
    
    # Create a new Bug
    @blueprint.route("/bugs/create", methods=["POST"])
    def index2():
        # Load request body data
        json_string = request.data.decode("utf-8")
        json_data = json.loads(json_string)

        database = get_data()
        # Update information in database
        database[gateway.entry_point.generateUUID()] = {
            "title": json_data["title"],
            "description": json_data["description"],
            "username" : json_data["user"],
        }
        set_data(database)
        response = database
        return jsonify(response), 200
    
    # Create a new comment for a specific bug given bug_id
    @blueprint.route("/bugs/<string:bug_id>/comment", methods=["GET"])
    def index3(bug_id):
         # Load request body data
        json_string = request.data.decode("utf-8")
        json_data = json.loads(json_string)

        database = get_data()
        if database[bug_id]:
            database[bug_id]["comments"].append({
                "username": json_data["username"],
                "title": json_data["title"],
                "description": json_data["description"]
            })
            set_data(database)
            return "Ok", 200
        return "Error", 400

    return blueprint

