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
    git clone https://github.com/aleli-b/react-flask-web.git
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
- **`frontend/src/components`**: This is the components directory, it contains various React components used in the application.
  - **`frontend/src/components/ContactForm.tsx`**: This is the contact form component. This component renders the contact form used to add or edit contacts. Its basically a form with the necessary fields to accomodate the data to the backend model.
  - **`frontend/src/components/Contacts.tsx`**: This is the contacts component file, its the component that renders the contacts, specifying the details needed from the backend object.
  - **`frontend/src/components/About.tsx`**: This is the about component file, its the content that goes in the about section of the application. The about section is basically the part of a page where you give out some info about yourself.
  - **`frontend/src/components/EditModal.tsx`**: This is the editmodal component file, its the modal that allows the user to edit the desired user. A model is a popup window that displays some desired content.
  - **`frontend/src/components/Filler.tsx`**: This is the filler component file, its basically a file that allow the app to do some viewport calculations and define a certain scroll behavior. Its a framer-motion library tie-in file.
  - **`frontend/src/components/Home.tsx`**: This is the home component file. It contains the necessary tags for the home section i've defined on my page.
  - **`frontend/src/components/Text.tsx`**: This is the text component file. It has some text for a certain section of the page.
  - **`frontend/src/components/Title.tsx`**: This is the title component file. It has the title of the page.
- **`frontend/src/layout`**: This is the layout directory, it contains various React components used in the layout of the application.
  - **`frontend/src/layout/Footer.tsx`**: This is a layout component. Its a little building block that will constitute the layout of the page. This component renders the footer of the application.
  - **`frontend/src/layout/Navbar.tsx`**: This is a layout component. Its a little building block that will constitute the layout of the page. This component renders the navbar navigation, basically the typical navigation bar you see atop almost every page.
- **`frontend/src/pages`**: This is the pages directory, it contains the different pages of the application.
  - **`frontend/src/pages/Home.tsx`**: This is the home page file, its the home page of the application. Its the larger file that unites all needed components.
  - **`frontend/src/pages/ContactList.tsx`**: This is the contact list page file, it displays the list of contacts that are brought via request from the backend and subsequently rendered in a readable way.
  - **`frontend/src/pages/AddContact.tsx`**: This is the add contact page file. This page allows for an user to add a specific contact.
- **`frontend/src/assets`**: Contains static assets like fonts and images.
  - **`frontend/src/assets/fonts`**: The fonts used in the project.
- **`frontend/src/index.css`**: This is the index CSS file, it contains the global CSS styles.
- **`frontend/src/main.tsx`**: This is the main file, its the entry point for the React application.
- **`frontend/vite.config.ts`**: This is a config gile, its a configuration file for Vite.
- **`frontend/.gitignore`**: This is the gitignore file, it specifies files and directories to be ignored by Git.

[^1]: Most components and pages here are accompanied by their own styles css file.

## Contact Information
For further questions, please contact [alejandro](mailto:alexredd95@gmail.com).