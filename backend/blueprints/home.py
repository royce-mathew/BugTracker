from flask import Blueprint
from flask import current_app as app
from flask import render_template

home_bp = Blueprint("home_bp", __name__)

@home_bp.route("/", methods=["GET"])
def home():
    return "Ok", 200;    
