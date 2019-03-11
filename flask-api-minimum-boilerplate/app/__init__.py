import logging

from flask import Flask, send_from_directory
from flask_cors import CORS
from app.api_v1 import api_v1 as api_v1_blueprint
from app.models import db
from config import config


logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)


def create_app(env, additional_settings={}):
    logger.info('Environment in __init__: "%s"', env)
    app = Flask(__name__, static_url_path="", instance_relative_config=True)
    CORS(app)
    app.config.from_object(config[env])

    config[env].init_app(app)
    app.config.update(additional_settings)
    @app.route('/audio/<path:path>')
    def send_audio(path):
        return send_from_directory('static', path)

    db.init_app(app)

    # Blueprints
    app.register_blueprint(api_v1_blueprint, url_prefix='/api/v1')

    return app
