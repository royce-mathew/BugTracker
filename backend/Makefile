.DEFAULT_GOAL := run
default: run

.PHONY: setup
setup:
	@echo "Setting up Pip Requests"
	pip install -r requirements.txt

.PHONY: run
run:
	@echo "Compiling Java Code"
	@javac -target 11 -cp venv/share/py4j/py4j0.10.9.7.jar:. JavaApplication.java
	@echo "Running Java Gateway"
	@java -cp venv/share/py4j/py4j0.10.9.7.jar:. JavaApplication &
	@echo "Running Python Backend"
	@venv/bin/python main.py