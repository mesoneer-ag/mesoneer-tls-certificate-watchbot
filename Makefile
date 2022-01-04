.venv:
	@python3 -m venv .venv
	@.venv/bin/python -m pip install -r requirements.pip

all: .venv
	@.venv/bin/python generate.py
