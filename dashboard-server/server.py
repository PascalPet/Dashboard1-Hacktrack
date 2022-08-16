from __future__ import print_function
import json

from flask import Flask, render_template, make_response
from flask_cors import CORS
from flask_restful import Api, Resource
import requests

# Initialization of the Backend with open CORS-Policy
app = Flask(__name__, static_url_path="", static_folder="static")
cors = CORS(app, resources={r"*": {"origins": "*"}})
api = Api(app)


@app.route('/', endpoint='init')
def root():
    return render_template('index.html')


@app.errorhandler(404)
def not_found_error(error):
    return render_template('index.html')


@app.route('/api/responses/<string:uuid>', endpoint='responses')
def get(uuid):
    data = requests.get("https://colaps-hacktrack.herokuapp.com/api/form/" + uuid + "/responses")
    return data.json()


if __name__ == "__main__":
    app.run(host="localhost", port=8080)
