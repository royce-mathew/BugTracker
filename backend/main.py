from flask import Flask, json, Blueprint
from py4j.java_gateway import JavaGateway
import os
import importlib

# Initialize a new Flask Application
app = Flask(__name__)

@app.route(f"/api/")
def index():
    print(f"Recieved Request on /api")
    return "Ok", 200

def main():
    # Open a new Java Gateway
    gateway = JavaGateway()

    # Register Blueprints
    # Iterate through the blueprints. __init__(gateway)
    for file_name in os.listdir("blueprints"):
        if file_name.endswith(".py"):
            module_name = file_name[:-3] # Remove .py extension
            blueprint = __import__(f'blueprints.{module_name}', None, None, ["init_blueprint"]) # Import the module and the init_blueprint function
            app.register_blueprint(blueprint.init_blueprint(gateway)) # Call the init_blueprint function to get the blueprint
            print(f"Registered {module_name}")

    # Run Flask App
    app.run()

    # Close the gateway
    gateway.shutdown()


if __name__ == "__main__":
    main()