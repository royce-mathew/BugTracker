import json

def get_data():
    with open("data/data.json") as file:
        return json.load(file)

def set_data(new_dict):
    with open("data/data.json", "w") as file:
        json.dump(new_dict, file)