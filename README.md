Joca's House
Joca's House is a web application that allows users to register their pets for grooming, training, and health check services. Users can view the list of registered pets, edit their details, and delete entries. The application also displays the total number of registered pets and the latest registered pet.

Features
Register pets with details like name, age, gender, breed, species, and service.
Display the list of registered pets in a table format.
Edit and delete pet entries.
Show the total number of registered pets.
Display details of the latest registered pet.
Technologies Used
HTML
CSS (Bootstrap for styling)
JavaScript
Project Structure
arduino
Copy code
.
├── index.html
├── register.html
├── styles
│   └── mystyle.css
├── scripts
│   ├── index.js
│   ├── register.js
│   └── display.js
└── img
    ├── jocashouse.png
    ├── fBird.png
    ├── fCat.png
    ├── fDog.png
    ├── mBird.png
    ├── mDog.png
    ├── nCat.png
    └── other.png
Setup Instructions
Clone the repository:

bash
Copy code
git clone <repository-url>
Open index.html and register.html in a browser:

Open index.html to view the homepage.
Open register.html to register pets.
File Descriptions
index.html
The homepage of Joca's House, displaying a welcome message, total number of registered pets, the latest registered pet, and a link to the registration page.

register.html
The pet registration page where users can fill out a form to add new pets. It also displays a table of registered pets with options to edit and delete entries.

styles/mystyle.css
Custom CSS file for styling the application. It includes styles for the header, footer, forms, buttons, and tables.

scripts/index.js
JavaScript file for the homepage. It initializes the total number of pets and updates the details of the latest registered pet.

scripts/register.js
JavaScript file for the registration page. It handles the registration, validation, editing, and deletion of pet entries.

scripts/display.js
JavaScript file to dynamically generate and update the rows in the pets table based on the registered pets.

How It Works
Homepage (index.html)
Header: Contains the Joca's House logo and navigation links to the home and registration pages.
Main Section:
Welcome Message: Displays a welcome message for Joca's House.
Total Animals Registered: Shows the total number of registered pets.
Latest Registered Animal: Displays details of the most recently registered pet in a card format.
Footer: Contains contact information for Joca's House.
Registration Page (register.html)
Header: Contains the Joca's House logo and navigation links to the home and registration pages.
Main Section:
Registration Form: A form to register new pets with fields for name, age, gender, breed, species, and service.
Pets Table: A table displaying the list of registered pets with options to edit and delete entries.
Footer: Contains contact information for Joca's House.
Scripts
index.js: Initializes and updates the total number of pets and details of the latest registered pet.
register.js: Manages pet registration, validation, editing, and deletion.
display.js: Generates and updates the rows in the pets table dynamically.
Screenshots
Homepage

Registration Page

Future Enhancements
Add a backend to persist pet data.
Integrate image generation for pets.
Implement user authentication.
Add search functionality for pets.
