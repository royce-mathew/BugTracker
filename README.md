# Bug Tracker
Bug Tracker

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
After cloning the repository, run the `make setup` command to automatically setup the requirements for you. To install the requirements for the backend and frontend seperately, go into the specified folder and run the `make setup` command.

The frontend will be hosted on a remote server on a URL looking similar to `localhost:3000/`.
The backend will be hosted on a remote server on a URL looking similar to `127.0.0.1:5000/`,

### Available Endpoints
All Documentation is Available in Postman. `https://www.postman.com/royce-mathew/workspace/bug-tracker/documentation`
- `127.0.0.1:5000/bugs/` Get the main list of bugs in json format
- `127.0.0.1:5000/bugs/create` Create a new bug
- `127.0.0.1:5000/bugs/{bug_id/comment` Create a new comment.
