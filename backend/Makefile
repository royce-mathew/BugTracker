.DEFAULT_GOAL := run
default: run

.PHONY: setup
setup:
	@echo "Setting up Pip Requests"
	pip install -r requirements.txt

.PHONY: run
run:
	@echo "Compiling Java Code"
	@javac -target 11 -cp venv/share/py4j/py4j0.10.9.7.jar:. Java/JavaApplication.java
	@echo "Running Java Application"
	@java -cp venv/share/py4j/py4j0.10.9.7.jar:. Java/JavaApplication &
	@echo "Running Python Backend\n==============================="
	@venv/bin/python main.py
	@echo "Gateway Server Shutdown"