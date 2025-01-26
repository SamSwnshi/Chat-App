# Chat App

Chat App is a real-time messaging application built with a focus on efficiency, scalability, and a clean architecture. The project follows a full-stack MERN (MongoDB, Express, React, Node.js) architecture and is divided into separate frontend and backend directories.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Directory Structure](#directory-structure)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Installation](#installation)
- [Usage](#usage)
- [Backend Overview](#backend-overview)
- [Frontend Overview](#frontend-overview)
- [License](#license)

---

## Features

- **Real-time messaging** with Socket.IO
- **Authentication:** Signup, login, and token-based authentication (JWT)
- **Chat management:** Conversations and message threads
- **Responsive design:** Mobile-friendly UI built with Tailwind CSS
- **Sound notifications** for messages
- **Custom hooks** for managing state and interactions
- **Secure routes** protected by middleware

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS

### Backend
- Node.js
- Express

### Database
- MongoDB

### Real-time Communication
- Socket.IO

### Authentication
- JSON Web Tokens (JWT)

---

## Directory Structure

### Backend

```
backend/ 
├── server.js # Entry point for the backend server 
├── controllers/  # Logic for handling API endpoints 
│ ├── auth.controller.js 
│ ├── sendMessage.controller.js 
│ └── user.controller.js 
├── db/ 
│ └── config.js # MongoDB configuration 
├── middleware/ 
│ └── protectRouter.middleware.js # Middleware for route protection 
├── models/ # Mongoose models 
│ ├── conversation.models.js 
│ ├── message.models.js 
│ └── user.model.js 
├── routes/ # API routes 
│ ├── auth.routes.js 
│ ├── message.routes.js 
│ └── user.routes.js 
├── socket/ 
│ └── socket.js # Socket.IO logic for real-time messaging 
└── utils/ 
└── generateJwttoken.js # Utility for JWT generation
```

### Frontend

```
frontend/ 
├── README.md # Documentation for the frontend 
├── index.html # Main HTML file 
├── package.json 
├── vite.config.js # Vite configuration file 
├── tailwind.config.js # Tailwind CSS configuration 
├── src/ # React source code 
│ ├── App.jsx # Main application component 
│ ├── main.jsx # React entry point 
│ ├── context/ # Context API for state management 
│ │ ├── AuthContext.jsx 
│ │ └── SocketContext.jsx 
│ ├── hooks/ # Custom hooks 
│ │ ├── useGetConversations.js 
│ │ ├── useListenMessage.js 
│ │ ├── useLogin.js 
│ │ ├── useLogout.js 
│ │ ├── useMessage.js 
│ │ ├── useSendMessage.js 
│ │ └── useSignup.js 
│ ├── pages/ # Page components 
│ │ ├── Conversation/ 
│ │ │ ├── Conversation.jsx 
│ │ │ └── SideConversation.jsx 
│ │ ├── Home/ 
│ │ │ └── Home.jsx 
│ │ ├── Login/ 
│ │ │ └── Login.jsx 
│ │ ├── Logout/ 
│ │ │ └── Logout.jsx 
│ │ ├── MessageContainer/ 
│ │ │ ├── Message.jsx 
│ │ │ ├── MessageContainer.jsx 
│ │ │ ├── MessageInput.jsx 
│ │ │ └── MessageInside.jsx 
│ │ ├── SearchInput/ 
│ │ │ └── SearchInput.jsx 
│ │ ├── Sidebar/ 
│ │ │ └── Sidebar.jsx 
│ │ ├── SignUp/ 
│ │ │ ├── Gender.jsx 
│ │ │ └── Signup.jsx 
│ │ └── Skeletons/ 
│ │ └── MessageSkeletons.jsx 
│ ├── store/ # State management hooks 
│ │ └── useConversation.js 
│ └── utils/ # Utility functions 
│ ├── emojis.js 
│ └── extractTime.js
```



## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB instance running

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/samswnshi-chat-app.git
   cd samswnshi-chat-app
2. Install dependencies for both frontend and backend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install


## Usage

```javascript
Access the application at: http://localhost:5173
Test the API endpoints at: http://localhost:5000
```

## Backend Overview
- [Authentication](#Authentication): Handles signup, login, and JWT token generation using auth.controller.js and auth.routes.js.
- [Real-time Messaging](#Real-time-Messaging): Enabled via Socket.IO, implemented in socket.js.
- [Database Models](#Database-Models): Mongoose schemas are used to structure data for users, messages, and conversations.

## Frontend Overview
- [Responsive UI](#Responsive-UI): Tailwind CSS ensures modern and mobile-friendly design.
- [Custom Hooks](#Custom-Hooks): Improve state management and API calls.
- [Reusable Components:](#Reusable-Components)  Organized under the pages/ directory for maintainability and scalability.

## License
This project is licensed under the MIT License. See the LICENSE file for more details. Feel free to contribute and use this project for your own purposes.


This README.md is now clean, professional, and ready to be used as documentation for your project. Let me know if you'd like further adjustments or additional sections! 😊
