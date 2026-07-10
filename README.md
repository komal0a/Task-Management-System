# Task Management System

Backend API for a Task Management System built with Node.js, Express, and MongoDB.

## Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd task-management-system
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory using `.env.example` as a reference
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your own values (MongoDB URI, JWT secret, etc.)

5. Start the development server
   ```bash
   npm run dev
   ```

   Or start it in production mode
   ```bash
   npm start
   ```

6. The server should now be running at `http://localhost:5000` (or the `PORT` you configured).