
![GitHub repo size](https://img.shields.io/github/repo-size/PranshuDixitDev/3DCodeKarmaTechDark)
![GitHub contributors](https://img.shields.io/github/contributors/PranshuDixitDev/3DCodeKarmaTechDark)

# 3DCodeKarmaTechDark

## Overview
3DCodeKarmaTechDark is a project that integrates a React frontend with a Flask backend. The frontend provides a contact form for users to submit their information, which is then processed and stored by the backend using a PostgreSQL database.

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
- Python 3.x
- PostgreSQL

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
