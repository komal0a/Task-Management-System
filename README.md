# Task Management System Backend API

A RESTful Task Management System built using **Node.js**, **Express.js**, and **MongoDB**. The application provides secure JWT-based authentication and allows authenticated users to manage their personal tasks with filtering, search, pagination, task statistics, soft delete, and interactive API documentation.

---

# Project Objective

This project was developed as a backend assignment to demonstrate:

- REST API Design
- JWT Authentication & Authorization
- Secure Password Hashing using bcrypt
- MongoDB Database Integration
- CRUD Operations
- Filtering, Search & Pagination
- Request Validation
- Global Error Handling
- Modular Project Architecture
- API Documentation using Swagger

---

# Features

## Authentication
- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcrypt

## Task Management
- Create Task
- Get All Tasks
- Get Task by ID
- Update Task
- Soft Delete Task

## Task Utilities
- Filter Tasks by Status
- Filter Tasks by Priority
- Search Tasks by Title
- Pagination
- Task Statistics Endpoint

## API Quality
- Protected Task APIs
- Request Validation
- Global Error Handling
- User-specific Task Authorization

## Documentation & Tooling
- Swagger API Documentation
- Postman Collection
- Docker Support

---

# Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcrypt
- dotenv
- express-validator
- Swagger (swagger-jsdoc, swagger-ui-express)
- Docker & Docker Compose

---

# Project Structure

```text
task-management-system
│
├── config
│   ├── db.js
│   └── swagger.js
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
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── package.json
├── package-lock.json
├── .env.example
├── Task Management System API.postman_collection.json
└── README.md
```

---

# Installation & Setup

## Clone the Repository

```bash
git clone https://github.com/komal0a/Task-Management-System.git
cd Task-Management-System
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file using `.env.example`

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

JWT_EXPIRES_IN=7d

BCRYPT_SALT_ROUNDS=10
```

---

## Run the Application

Development

```bash
npm run dev
```

Production

```bash
npm start
```

---

# Docker

## Build Docker Image

```bash
docker compose build
```

## Run the Application

```bash
docker compose up
```

## Stop the Application

```bash
docker compose down
```

> **Note:** This project uses **MongoDB Atlas**, so Docker is configured only for the backend application.

---

# Swagger API Documentation

After starting the server, open:

```text
http://localhost:5000/api-docs
```

Swagger UI provides interactive documentation for all available endpoints.

---

# Postman Collection

A ready-to-use Postman collection is included in the repository.

```
Task Management System API.postman_collection.json
```

Import the collection into Postman to test all APIs.

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
| GET | `/api/v1/tasks/:id` | Get Task by ID |
| PUT | `/api/v1/tasks/:id` | Update Task |
| DELETE | `/api/v1/tasks/:id` | Soft Delete Task |
| GET | `/api/v1/tasks/stats` | Get Task Statistics |

### Create Task Request

```json
{
  "title": "Complete Backend Assignment",
  "description": "Finish Task Management Backend",
  "status": "pending",
  "priority": "high",
  "due_date": "2026-07-20"
}
```

---

# Filtering, Search & Pagination

Supported Query Parameters

```http
GET /api/v1/tasks?status=pending

GET /api/v1/tasks?priority=high

GET /api/v1/tasks?search=assignment

GET /api/v1/tasks?page=1&limit=10
```

Filters can be combined.

Example:

```http
GET /api/v1/tasks?status=pending&priority=high&page=1&limit=5
```

---

# Task Statistics

Endpoint

```http
GET /api/v1/tasks/stats
```

Sample Response

```json
{
  "success": true,
  "data": {
    "totalTasks": 15,
    "completedTasks": 8,
    "pendingTasks": 4,
    "inProgressTasks": 2,
    "overdueTasks": 1
  }
}
```

---

# Response Format

## Success Response

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
```

## Error Response

```json
{
  "success": false,
  "message": "Error message"
}
```

---

# Common HTTP Status Codes

| Status Code | Description |
|-------------|-------------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Resource Not Found |
| 500 | Internal Server Error |

---

# Assumptions

- Each task belongs to exactly one authenticated user.
- Users can only access and manage their own tasks.
- Passwords are securely hashed before storage.
- JWT Bearer Token authentication is required for all task-related APIs.
- Tasks are **soft deleted** and excluded from normal queries and statistics.

---

# Future Improvements

- Refresh Token Authentication
- Unit & Integration Tests
- Role-Based Access Control (RBAC)
- Rate Limiting
- CI/CD Pipeline
- Email Notifications

---

# Author

**Komal**

Backend Assignment – Task Management System