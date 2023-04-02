# all imports go here
import User
import json

class Parser:
    """
    Parse the string payload and generate users
    """

    # generates a list of users from a json payload
    def generate_users(payload: json) -> list:
        userList = []

        for i in payload:
            userName = i["user"]
            bugName = i["bugName"]
            desc = i["desc"]

            tempUser = User.User(userName)
            tempUser.create(bugName, desc)
            userList.append(tempUser)
