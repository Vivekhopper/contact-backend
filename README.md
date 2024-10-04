Contact Manager Pro (MERN Stack)
Contact Manager Pro is a secure and user-friendly web application built using the MERN Stack (MongoDB, Express.js, React, Node.js). It allows users to manage their personal and professional contacts effortlessly, providing robust authentication, responsive design, and a clean interface for seamless contact management.

Key Features
🔑 JWT Authentication: Securely log in and manage your contacts, ensuring only you have access.
📇 Comprehensive Contact Management: Add, update, delete, and view contact details, including name, email, and phone number.
📱 Responsive Design: Built using React and Tailwind CSS for a seamless experience across all devices.
🔄 Efficient and Intuitive UI: Simple and clean user interface for better usability.
💡 Secure Data: All sensitive data is handled with the utmost care using JWT and MongoDB for data storage.
Tech Stack
Frontend: React.js, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT (JSON Web Tokens)
Installation & Setup
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/contact-manager-pro.git
cd contact-manager-pro
Install dependencies:

bash
Copy code
npm install
Configure environment variables: Create a .env file in the root of your project with the following:

plaintext
Copy code
PORT=5050
URI=mongodb://localhost:27017/Contact
JWT_SECRET_KEY=your_secret_key
Run the application:

bash
Copy code
npm start
Access the application: Open your browser and navigate to http://localhost:5050.

API Endpoints
POST /login: Logs in the user and returns a JWT token.
GET /contacts: Fetches all stored contacts for the authenticated user.
POST /contacts: Adds a new contact.
PUT /contacts/
: Updates a contact by ID.
DELETE /contacts/
: Deletes a contact by ID.
Contribution
Feel free to contribute to this project by submitting a pull request or reporting issues. Any suggestions for improving the features and functionality are highly appreciated.
