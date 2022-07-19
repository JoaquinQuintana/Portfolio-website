#!/usr/bin/env bash
python3 -m venv env
source env/bin/activate

python3 -m pip install --upgrade pip
pip install -r requirements.txt

export FLASK_APP=siteMain.py
export FLASK_ENV=development
FLASK_DEBUG=1
