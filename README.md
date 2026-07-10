# Task Management System Backend API

A RESTful Task Management System built using **Node.js**, **Express.js**, and **MongoDB**. The application provides JWT-based authentication and allows authenticated users to securely manage their own tasks.

---

## Project Objective

This project was developed as a backend assignment to demonstrate:

- REST API design
- JWT Authentication & Authorization
- Secure password hashing with bcrypt
- MongoDB database integration
- CRUD operations
- Filtering, searching and pagination
- Input validation
- Global error handling
- Modular project architecture

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
- JWT (jsonwebtoken)
- bcrypt
- dotenv
- express-validator

---

## Project Structure

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
├── .env.example
└── README.md
```

---

## Installation & Setup

### Clone the repository

```bash
git clone https://github.com/komal0a/Task-Management-System.git
cd Task-Management-System
```

### Install dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the project root using `.env.example`.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
BCRYPT_SALT_ROUNDS=10
```

### Run the application

Development

```bash
npm run dev
```

Production

```bash
npm start
```

---

# API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/auth/register` | Register a new user |
| POST | `/api/v1/auth/login` | Login user |

### Register Request

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "12345678"
}
```

### Login Request

```json
{
  "email": "john@example.com",
  "password": "12345678"
}
```

---

## Task APIs

> All task endpoints require a valid JWT Bearer Token.

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/tasks` | Create Task |
| GET | `/api/v1/tasks` | Get All Tasks |
| GET | `/api/v1/tasks/:id` | Get Task By ID |
| PUT | `/api/v1/tasks/:id` | Update Task |
| DELETE | `/api/v1/tasks/:id` | Delete Task |

### Create Task Request

```json
{
  "title": "Complete Assignment",
  "description": "Finish backend project",
  "status": "pending",
  "priority": "high",
  "due_date": "2026-07-20"
}
```

---

## Filtering & Pagination

Supported query parameters:

```http
GET /api/v1/tasks?status=pending

GET /api/v1/tasks?priority=high

GET /api/v1/tasks?search=assignment

GET /api/v1/tasks?page=1&limit=10
```

These filters can also be combined.

---

## Response Format

### Success Response

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
```

### Error Response

```json
{
  "success": false,
  "message": "Error message"
}
```

---

## Common HTTP Status Codes

| Status Code | Meaning |
|-------------|---------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Internal Server Error |

---

## Assumptions

- Each task belongs to exactly one authenticated user.
- Users can only access and manage their own tasks.
- Passwords are securely hashed using bcrypt before storage.
- JWT Bearer Token authentication is required for all task-related APIs.

---

## Future Improvements

- Swagger / OpenAPI Documentation
- Docker Support
- Refresh Token Authentication
- Unit & Integration Tests
- Soft Delete for Tasks
- Task Statistics Endpoint
- Role-Based Access Control (RBAC)

---

## Author

**Komal**

Backend Assignment – Task Management System