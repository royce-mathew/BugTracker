.DEFAULT_GOAL := run
default: run

.PHONY: setup
setup:
	$(MAKE) -C backend setup

.PHONY: run
run:
	$(MAKE) -C backend
	@echo "Deploying Frontend"
	cd ../frontend
	npm start
