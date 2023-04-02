import User

if __name__=="__main__":

    royce = User.User("Royce")
    royce.create_bug("Bug 1", "Causing Havoc")
    royce.post_message("Bug 1","This bug prevents conversion of data from json to string")
    royce.post_message("Bug 1","The bug has been resolved")
    print(royce.toJson())
