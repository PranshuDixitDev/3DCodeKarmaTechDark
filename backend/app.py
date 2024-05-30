from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import firebase_admin
from firebase_admin import credentials, firestore
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load environment variables
load_dotenv()

# Initialize Firebase Admin SDK
cred_path = os.getenv('GOOGLE_APPLICATION_CREDENTIALS')
cred = credentials.Certificate(cred_path)
firebase_admin.initialize_app(cred, {
    'projectId': os.getenv('FIREBASE_PROJECT_ID'),
})
db = firestore.client()

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "https://www.codekarmatech.com"}})

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    data = request.json
    name = data['name']
    email = data['email']
    phone_number = data['phone_number']
    message = data['message']

    try:
        doc_ref = db.collection('contact_messages').add({
            'name': name,
            'email': email,
            'phone_number': phone_number,
            'message': message
        })
        return jsonify({'id': doc_ref[1].id}), 201
    except Exception as e:
        logger.error(f"Error inserting message: {e}")
        return jsonify({"error": "Internal Server Error"}), 500
    


if __name__ == '__main__':
    app.run(debug=True, port=5001)
