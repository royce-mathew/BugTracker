.DEFAULT_GOAL := run
default: run

.PHONY: setup
setup:
	@echo "Creating a new virtual environment"
	test -d venv || python3 -m venv venv
	@echo "Setting up Pip Requests"
	. venv/bin/activate && pip install -r requirements.txt

.PHONY: run
run:
	@echo "Compiling Java Code"
	@javac -target 11 -cp venv/share/py4j/py4j0.10.9.7.jar:. Java/JavaApplication.java
	@echo "Running Java Application"
	@java -cp venv/share/py4j/py4j0.10.9.7.jar:. Java/JavaApplication &
	@echo "Running Python Backend\n==============================="
	@venv/bin/python main.py
	@echo "Gateway Server Shutdown"
