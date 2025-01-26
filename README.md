Chat App is a real-time messaging application built with a focus on efficiency, scalability, and a clean architecture. The project is divided into frontend and backend directories, implementing a full-stack MERN architecture. Below, you'll find the detailed structure and features of the app.
Table of Contents

Features

Tech Stack

Directory Structure

Installation

Usage

Backend Overview

Frontend Overview

License

Features

Real-time messaging with Socket.IO

Authentication: Signup, login, and token-based authentication (JWT)

Chat management: Conversations and message threads

Responsive design: Mobile-friendly UI built with Tailwind CSS

Sound notifications for messages

Custom hooks for managing state and interactions

Secure routes protected by middleware

Tech Stack

Frontend: React, Vite, Tailwind CSS

Backend: Node.js, Express

Database: MongoDB

Real-time Communication: Socket.IO

Authentication: JWT

Directory Structure

Root Directory

├── samswnshi-chat-app/
    ├── package.json
    ├── backend/
    └── frontend/

Backend

backend/
├── server.js                     # Entry point for the backend server
├── controllers/                  # Logic for handling API endpoints
│   ├── auth.controller.js
│   ├── sendMessage.controller.js
│   └── user.controller.js
├── db/
│   └── config.js                 # MongoDB configuration
├── middleware/
│   └── protectRouter.middleware.js  # Middleware for route protection
├── models/                       # Mongoose models
│   ├── conversation.models.js
│   ├── message.models.js
│   └── user.model.js
├── routes/                       # API routes
│   ├── auth.routes.js
│   ├── message.routes.js
│   └── user.routes.js
├── socket/
│   └── socket.js                 # Socket.IO logic for real-time messaging
└── utils/
    └── generateJwttoken.js       # Utility for JWT generation

Frontend

frontend/
├── README.md                     # Documentation for the frontend
├── index.html                    # Main HTML file
├── package.json
├── vite.config.js                # Vite configuration file
├── tailwind.config.js            # Tailwind CSS configuration
├── src/                          # React source code
│   ├── App.jsx                   # Main application component
│   ├── main.jsx                  # React entry point
│   ├── context/                  # Context API for state management
│   │   ├── AuthContext.jsx
│   │   └── SocketContext.jsx
│   ├── hooks/                    # Custom hooks
│   │   ├── useGetConversations.js
│   │   ├── useListenMessage.js
│   │   ├── useLogin.js
│   │   ├── useLogout.js
│   │   ├── useMessage.js
│   │   ├── useSendMessage.js
│   │   └── useSignup.js
│   ├── pages/                    # Page components
│   │   ├── Conversation/
│   │   │   ├── Conversation.jsx
│   │   │   └── SideConversation.jsx
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   ├── Login/
│   │   │   └── Login.jsx
│   │   ├── Logout/
│   │   │   └── Logout.jsx
│   │   ├── MessageContainer/
│   │   │   ├── Message.jsx
│   │   │   ├── MessageContainer.jsx
│   │   │   ├── MessageInput.jsx
│   │   │   └── MessageInside.jsx
│   │   ├── SearchInput/
│   │   │   └── SearchInput.jsx
│   │   ├── Sidebar/
│   │   │   └── Sidebar.jsx
│   │   ├── SignUp/
│   │   │   ├── Gender.jsx
│   │   │   └── Signup.jsx
│   │   └── Skeletons/
│   │       └── MessageSkeletons.jsx
│   ├── store/                    # State management hooks
│   │   └── useConversation.js
│   └── utils/                    # Utility functions
│       ├── emojis.js
│       └── extractTime.js

Installation

Prerequisites

Node.js and npm installed

MongoDB instance running

Steps

Clone the repository:

git clone https://github.com/samswnshi-chat-app.git
cd samswnshi-chat-app

Install dependencies for both frontend and backend:

cd backend
npm install
cd ../frontend
npm install

Configure environment variables:

Backend: Create a .env file in the backend directory with the following:

PORT=5000
MONGO_URI=<Your MongoDB Connection String>
JWT_SECRET=<Your JWT Secret>

Start the backend server:

cd backend
npm start

Start the frontend server:

cd frontend
npm run dev

Usage

Access the application at http://localhost:5173

Test the API endpoints at http://localhost:5000

Backend Overview

Authentication: The auth.controller.js and auth.routes.js handle signup, login, and token generation.

Real-time Messaging: Implemented using Socket.IO in the socket.js file.

Database Models: Mongoose schemas for users, messages, and conversations.

Frontend Overview

Responsive UI: Built with Tailwind CSS for modern styling.

Custom Hooks: Simplifies state management and API calls.

Components: Reusable components organized under the pages directory for modular development.

License

This project is licensed under the MIT License. Feel free to contribute and use it for your own projects.

