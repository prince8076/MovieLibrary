# MovieLibrary

MovieLibrary is a MERN stack application that allows users to manage and browse a collection of movies. The application includes user authentication, movie management, and a user-friendly interface.

## Table of Contents

- [MovieLibrary](#movielibrary)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Project Structure](#project-structure)
  - [Environment Variables](#environment-variables)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- User authentication (signup/login)
- Add, edit, and delete movies
- Browse movie collection
- Responsive UI

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB database

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:prince8076/MovieLibrary.git

   cd movielibrary
Install dependencies for both backend and frontend:

bash
Copy code
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
Running the Application
To run the MovieLibrary application, you need to start both the backend and frontend servers.

Start the Backend Server:

bash
Copy code
cd backend
npm start
Ensure your MongoDB server is running and you have configured the necessary environment variables.

Start the Frontend Server:

bash
Copy code
cd ../frontend
npm start
This will start the React development server. Open your web browser and navigate to http://localhost:3000.

Project Structure


Copy code

movielibrary/

├── backend/

│   ├── node_modules/

│   ├── routes/

│   ├── models/

│   ├── .env

│   ├── package.json

│   ├── server.js

│   └── ...
├── frontend/

│   ├── node_modules/

│   ├── public/

│   ├── src/

│   ├── .env

│   ├── package.json

│   └── ...
├── .gitignore

└── README.md



Environment Variables
The application requires certain environment variables to run. Create a .env file in the backend directory with the following content:

env
Copy code
MONGO_URI=your_mongo_connection_string
PORT=8000

Additionally, create a .env file in the frontend directory if needed for any frontend environment variables.

Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository

Create a new branch (git checkout -b feature-branch)

Make your changes and commit (git commit -m 'Add some feature')

Push to the branch (git push origin feature-branch)

Create a Pull Request
