# Task Management System Backend API

A RESTful Task Management Backend built with **Node.js**, **Express.js**, and **MongoDB**. It provides JWT-based authentication and allows authenticated users to manage their own tasks securely.

---

## Features

- User Registration
- User Login
- JWT Authentication
- Protected Task APIs
- Create, Read, Update and Delete Tasks
- Filter Tasks by Status
- Filter Tasks by Priority
- Search Tasks by Title
- Pagination
- Request Validation
- Global Error Handling

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt
- dotenv
- express-validator

---

## Folder Structure

```
task-management-system
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   └── taskController.js
│
├── middleware
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│   └── validate.js
│
├── models
│   ├── User.js
│   └── Task.js
│
├── routes
│   ├── authRoutes.js
│   └── taskRoutes.js
│
├── utils
│   └── generateToken.js
│
├── validations
│   ├── authValidation.js
│   └── taskValidation.js
│
├── app.js
├── server.js
├── package.json
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/komal0a/Task-Management-System.git
```

Move into the project

```bash
cd Task-Management-System
```

Install dependencies

```bash
npm install
```

Create a `.env` file using `.env.example`

Run the server

```bash
npm run dev
```

---

## Environment Variables

Create a `.env` file and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
BCRYPT_SALT_ROUNDS=10
```

---

## API Endpoints

### Authentication

#### Register

```
POST /api/v1/auth/register
```

Body

```json
{
    "name":"John Doe",
    "email":"john@example.com",
    "password":"12345678"
}
```

---

#### Login

```
POST /api/v1/auth/login
```

Body

```json
{
    "email":"john@example.com",
    "password":"12345678"
}
```

---

### Tasks

#### Create Task

```
POST /api/v1/tasks
```

Authorization

```
Bearer Token
```

Body

```json
{
    "title":"Complete Assignment",
    "description":"Finish backend project",
    "status":"pending",
    "priority":"high",
    "due_date":"2026-07-20"
}
```

---

#### Get All Tasks

```
GET /api/v1/tasks
```

Supports

```
?page=1

?limit=10

?status=pending

?priority=high

?search=assignment
```

---

#### Get Task

```
GET /api/v1/tasks/:id
```

---

#### Update Task

```
PUT /api/v1/tasks/:id
```

---

#### Delete Task

```
DELETE /api/v1/tasks/:id
```

---

## Response Format

### Success

```json
{
    "success": true,
    "message": "Success",
    "data": {}
}
```

### Error

```json
{
    "success": false,
    "message": "Error message"
}
```

---

## Assumptions

- Each task belongs to a single authenticated user.
- Users can only access and manage their own tasks.
- Passwords are securely hashed using bcrypt.
- JWT tokens are required for all task-related endpoints.

---

## Future Improvements

- Swagger Documentation
- Docker Support
- Refresh Tokens
- Unit Tests
- Integration Tests
- Soft Delete
- Task Statistics