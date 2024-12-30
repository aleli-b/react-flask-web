# React + Flask

#### Video Demo:  https://youtu.be/I1y1GumdiRw
#### Description: Contact managing website made with a React frontend and a Flask backend.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [File Descriptions](#file-descriptions)
- [Contributing](#contributing)
- [License](#license)
- [Contact Information](#contact-information)

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/yourproject.git
    ```
2. Navigate to the project directory:
    ```sh
    cd yourproject
    ```
3. Set up the backend:
    ```sh
    cd backend
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    pip install -r requirements.txt
    ```
4. Set up the frontend:
    ```sh
    cd ../frontend
    npm install
    ```

## Usage
1. Start the backend server:
    ```sh
    cd backend
    flask run
    ```
2. Start the frontend development server:
    ```sh
    cd frontend
    npm run dev
    ```

## File Descriptions

### Backend
- **`backend/config.py`**: This is the flask config file, it configures the Flask application and initializes the SQLAlchemy database.
- **`backend/models.py`**: This is the models file, it defines the database models that will serve as the structural base of the data to be stored.
- **`backend/main.py`**: This is the main app file, this is the file you run to serve thebackend. It contains the main application logic and API endpoints.
- **`backend/requirements.txt`**: This is the requirements file, it basically lists the dependencies to instalñ for the backend to work as intended without any hiccups.
- **`backend/.gitignore`**: This is the gitignore file, it specifies files and directories to be ignored by Git.
- **`backend/instance/`**: This is the instance directory, it stashes the last database information stored through regular usage of the page.

### Frontend
- **`frontend/index.html`**: The main HTML file for the frontend.
- **`frontend/package.json`**: Lists the dependencies and scripts for the frontend.
- **`frontend/src/App.tsx`**: The main React component that sets up the routes.
- **[components](http://_vscodecontentref_/0)**: Contains various React components used in the application.
- **[pages](http://_vscodecontentref_/1)**: Contains the different pages of the application.
- **[assets](http://_vscodecontentref_/2)**: Contains static assets like fonts and images.
- **`frontend/src/index.css`**: Global CSS styles.
- **`frontend/src/main.tsx`**: The entry point for the React application.
- **`frontend/vite.config.ts`**: Configuration file for Vite.
- **`frontend/.gitignore`**: Specifies files and directories to be ignored by Git.

## Contact Information
For further questions, please contact [alejandro](mailto:alexredd95@gmail.com).