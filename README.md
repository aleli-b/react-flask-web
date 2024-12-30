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
- **`backend/main.py`**: This is the main app file, this is the file you run to serve thebackend. It contains the main application logic and API endpoints. It has the decorators and its respective functions, which the frontend layout uses to communicate with the backend, and send data to be stored.
- **`backend/requirements.txt`**: This is the requirements file, it basically lists the dependencies to instalñ for the backend to work as intended without any hiccups.
- **`backend/.gitignore`**: This is the gitignore file, it specifies files and directories to be ignored by Git.
- **`backend/instance/`**: This is the instance directory, it stashes the last database information stored through regular usage of the page.

### Frontend
- **`frontend/index.html`**: This is the index file, its the main HTML file for the frontend.
- **`frontend/package.json`**: This is the package file, it lists the dependencies and scripts for the frontend.
- **`frontend/src/App.tsx`**: This is the app file, its the main React component that sets up the routes, it serves as a tree trunk of sorts, to unite all main components (branches, as far as this metaphore goes) of the application.
- **`frontend/src/components`**: Contains various React components used in the application.
  - **`frontend/src/components/Header.tsx`**: This component renders the header of the application.
  - **`frontend/src/components/Footer.tsx`**: This component renders the footer of the application.
  - **`frontend/src/components/Sidebar.tsx`**: This component renders the sidebar navigation.
  - **`frontend/src/components/ContactForm.tsx`**: This component renders the contact form used to add or edit contacts.
- **`frontend/src/pages`**: Contains the different pages of the application.
  - **`frontend/src/pages/Home.tsx`**: This is the home page of the application.
  - **`frontend/src/pages/About.tsx`**: This is the about page of the application.
  - **`frontend/src/pages/ContactList.tsx`**: This page displays the list of contacts.
  - **`frontend/src/pages/ContactDetail.tsx`**: This page displays the details of a specific contact.
- **`frontend/src/assets`**: Contains static assets like fonts and images.
  - **`frontend/src/assets/logo.png`**: The logo image used in the application.
  - **`frontend/src/assets/styles.css`**: Additional CSS styles used in the application.
- **`frontend/src/index.css`**: This is the index CSS file, it contains the global CSS styles.
- **`frontend/src/main.tsx`**: This is the main file, its the entry point for the React application.
- **`frontend/vite.config.ts`**: This is a config gile, its a configuration file for Vite.
- **`frontend/.gitignore`**: This is the gitignore file, it specifies files and directories to be ignored by Git.

## Contact Information
For further questions, please contact [alejandro](mailto:alexredd95@gmail.com).