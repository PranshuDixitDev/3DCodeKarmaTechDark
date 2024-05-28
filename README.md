
![GitHub repo size](https://img.shields.io/github/repo-size/PranshuDixitDev/3DCodeKarmaTechDark)
![GitHub contributors](https://img.shields.io/github/contributors/PranshuDixitDev/3DCodeKarmaTechDark)

##  3DCodeKarmaTechDark

**A full-stack web application with a modern tech stack**

![Python Version](https://img.shields.io/badge/python-3.x-blue) 
[![React](https://img.shields.io/badge/react-%5E-blue)](https://www.npmjs.com/package/react)
[![Three.js](https://img.shields.io/badge/three.js-%5E-blue)](https://www.npmjs.com/package/three)

This project integrates a React frontend with a Flask backend for a user-friendly contact form experience. Submitted information is securely processed and stored using a PostgreSQL database.

**Key Features:**

* Interactive React frontend for user input
* Robust Flask backend API for data processing
* Secure storage with PostgreSQL database

## Project Structure
3DCodeKarmaTechDark/
├── backend/
│ ├── app.py
│ ├── .env
│ └── requirements.txt
├── src/
│ ├── components/
│ │ └── Contact.jsx
│ ├── styles/
│ ├── utils/
│ ├── App.js
│ ├── index.js
│ └── ...
├── package.json
└── ...


## Backend Setup (Flask)

### Prerequisites
* Python 3.x
* PostgreSQL

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/PranshuDixitDev/3DCodeKarmaTechDark.git
   cd 3DCodeKarmaTechDark/backend

2. **Create and activate a virtual environment**:
python -m venv venv
source venv/bin/activate  # On macOS/Linux
.\venv\Scripts\activate   # On Windows

3. **Install dependencies**:
pip install -r requirements.txt

4. **Set up environment variables**:
Create a .env file in the backend directory with the following content:

DATABASE_URL=postgresql://<username>:<password>@localhost/contact_db

5. **Run the Flask application**:

python app.py

## Frontend Setup (React)
### Prerequisites
Node.js
npm or yarn
Installation

**Navigate to the project root and install dependencies**:
cd 3DCodeKarmaTechDark
npm install
# or
yarn install

**Run the React application**:
npm run dev
# or
yarn dev

##API Endpoints
POST /api/contact
Submit a contact form.

Request Body
json

{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone_number": "123-456-7890",
    "message": "Hello, this is a test message."
}
Response
201 Created: Successfully stored the contact message.
500 Internal Server Error: An error occurred while processing the request.
Contributing
Feel free to open issues or submit pull requests for any improvements or bug fixes.

License
This project is licensed under the MIT License.
