from flask import Flask
from flask_assets import Environment

def initialize_app():
    app = Flask(__name__ , instance_relative_config=False)
    app.config.from_object("config.Config")
    assets = Environment()
    assets.init_app(app)

    with app.context():
        
        # from .home import home

        # app.register_blueprint(home.home_bp)


        return app;

