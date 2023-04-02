from flask import Blueprint

def init_blueprint(gateway):
    blueprint = Blueprint("database", __name__)

    @blueprint.route("/api/database/")
    def index():
        return "Database Homepage"
    
    return blueprint