# Bug Tracker
The Bug Tracker is a web application that helps users and teams keep track of bugs in the software development process. It allows the user to post information about new bugs and view both resolved and unresolved bugs.

# Frameworks and Technologies
- Flask
- React App
- MaterialUI
- py4j

# Contributors
- Srivathsan Sivakumar
- Royce Mathew
- Aaveg Shangari

# Help
Run the `jps` command to view Java processes that are being ran

## Installation
### Pre-requirements
You need to have the following applications pre-installed on your system before running the Program.
- make | cmake
- Python3 >= 3.9
- Java >= 19

Clone the github directory by running the following command: 
```
git clone https://github.com/OntarioTech-CS-program/w23-csci2020u-project-team21
```
After cloning the repository, run the following command to automatically setup the requirements for you. 
```
make setup
```
To install the requirements for the backend and frontend seperately, go into the specified folder and run the `make setup` command.

The frontend will be hosted on a remote server on a URL looking similar to `localhost:3000/`.
The backend will be hosted on a remote server on a URL looking similar to `127.0.0.1:5000/`,

### Available Endpoints
All Documentation is Available in Postman. `https://www.postman.com/royce-mathew/workspace/bug-tracker/documentation`
- `127.0.0.1:5000/bugs/` Get the main list of bugs in json format
- `127.0.0.1:5000/bugs/create` Create a new bug
- `127.0.0.1:5000/bugs/bug_id/comment` Create a new comment.

# How To Run Application

- Clone this repository using the command `git clone https://github.com/OntarioTech-CS-program/w23-csci2020u-project-team21.git`
- Using your terminal, navigate to the frontend directory using commands such as `cd frontend`
- Use the command `npm install`
- To start the web application, use the command `npm start`
