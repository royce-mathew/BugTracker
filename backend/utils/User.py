# the imports go here
import json

class User:
    """
    Defines a user and its capabilities in the Bug Tracker ecosystem
    """

    name: str
    bugs: dict
    all_info : dict


    def __init__(self, name: str) -> None:
        self.name = name
        self.bugs = {}
        self.all_info = {"name": self.name, "bugs": self.bugs}


    def create_bug(self, bug_name: str, descr: str) -> None:
        self.bugs[bug_name] = {"description": descr, "messages": []}
        self.all_info["bugs"] = self.bugs


    def post_message(self, bug: str, message: str) -> None:
        
        for i in self.bugs:
            if i == bug:
                updateMessage = [message]
                self.bugs[i]["messages"].extend(updateMessage)

        

    def toJson(self) -> str:
        strBuilder = json.dumps(self.all_info)
        return strBuilder


