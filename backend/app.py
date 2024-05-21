from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import psycopg2
from psycopg2.extras import RealDictCursor

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enables CORS for all domains; adjust as necessary

# Database connection setup
def get_db_connection():
    conn = psycopg2.connect(os.environ['DATABASE_URL'], cursor_factory=RealDictCursor)
    return conn

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    data = request.json
    name = data['name']
    email = data['email']
    phone_number = data['phone_number']
    message = data['message']

    conn = get_db_connection()
    cur = conn.cursor()
    try:
        cur.execute('INSERT INTO contact_message (name, email, phone_number, message) VALUES (%s, %s, %s, %s) RETURNING *',
                    (name, email, phone_number, message))
        new_message = cur.fetchone()
        conn.commit()
        return jsonify(new_message), 201
    except Exception as e:
        print(e)
        return jsonify({"error": "Internal Server Error"}), 500
    finally:
        cur.close()
        conn.close()

if __name__ == '__main__':
    app.run(debug=True, port=5001)
