# the imports go here
import json

class User:
    """
    Defines a user and its capabilities in the Bug Tracker ecosystem
    """

    name: str           # name of the user
    bugs: dict          # list of all the bugs associated with the user
    all_info : dict     # all user about the user condensed together

    # initialize the User
    def __init__(self, name: str) -> None:
        self.name = name
        self.bugs = {}
        self.all_info = {"name": self.name, "bugs": self.bugs}

    # creates a bug with its name and description
    def create_bug(self, bug_name: str, descr: str) -> None:
        self.bugs[bug_name] = {"description": descr, "messages": []}

    # post a message to the bug thread
    def post_message(self, bug: str, message: str) -> None:    
        for i in self.bugs:
            if i == bug:
                updateMessage = [message]
                self.bugs[i]["messages"].extend(updateMessage)

    # convert all user data into a json
    def toJson(self) -> str:
        strBuilder = json.dumps(self.all_info)
        return strBuilder


