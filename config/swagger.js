const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Management System API',
      version: '1.0.0',
      description: 'API documentation for the Task Management System backend.',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Local development server',
      },
    ],
    tags: [
      {
        name: 'Authentication',
        description: 'User authentication endpoints',
      },
      {
        name: 'Tasks',
        description: 'Task management endpoints',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./config/swagger.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec,
};

/**
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Create a new account with a name, email, and password.
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, password]
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john@example.com
 *               password:
 *                 type: string
 *                 minLength: 8
 *                 example: password123
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: User registered successfully
 *               data:
 *                 id: 507f1f77bcf86cd799439011
 *                 name: John Doe
 *                 email: john@example.com
 *                 createdAt: 2026-07-11T10:00:00.000Z
 *       400:
 *         description: Missing fields or validation failure
 */

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: Log in an existing user
 *     description: Authenticate a user and return a JWT token.
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Login successful
 *               data:
 *                 token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *                 user:
 *                   id: 507f1f77bcf86cd799439011
 *                   name: John Doe
 *                   email: john@example.com
 *       401:
 *         description: Invalid email or password
 */

/**
 * @openapi
 * /api/v1/tasks:
 *   post:
 *     summary: Create a task
 *     description: Create a new task for the authenticated user.
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title]
 *             properties:
 *               title:
 *                 type: string
 *                 example: Complete project documentation
 *               description:
 *                 type: string
 *                 example: Prepare API documentation and deployment notes
 *               status:
 *                 type: string
 *                 enum: [pending, in_progress, completed]
 *                 example: pending
 *               priority:
 *                 type: string
 *                 enum: [low, medium, high]
 *                 example: high
 *               due_date:
 *                 type: string
 *                 format: date-time
 *                 example: 2026-07-15T12:00:00.000Z
 *     responses:
 *       201:
 *         description: Task created successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Task created successfully
 *               data:
 *                 _id: 507f1f77bcf86cd799439011
 *                 title: Complete project documentation
 *                 description: Prepare API documentation and deployment notes
 *                 status: pending
 *                 priority: high
 *                 due_date: 2026-07-15T12:00:00.000Z
 *                 created_by: 507f1f77bcf86cd799439011
 *                 createdAt: 2026-07-11T10:00:00.000Z
 *                 updatedAt: 2026-07-11T10:00:00.000Z
 *       400:
 *         description: Title is required or validation error
 *       401:
 *         description: Unauthorized
 *   get:
 *     summary: Get all tasks
 *     description: Retrieve all tasks belonging to the authenticated user. Deleted tasks are not returned by this endpoint.
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Tasks fetched successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Tasks fetched successfully
 *               data:
 *                 - _id: 507f1f77bcf86cd799439011
 *                   title: Complete project documentation
 *                   status: pending
 *                   priority: high
 *       401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * /api/v1/tasks/stats:
 *   get:
 *     summary: Get task statistics
 *     description: Get task counts for the authenticated user, including overdue tasks. Deleted tasks are not counted.
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Task statistics fetched successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Task statistics fetched successfully
 *               data:
 *                 totalTasks: 5
 *                 completedTasks: 2
 *                 pendingTasks: 2
 *                 inProgressTasks: 1
 *                 overdueTasks: 1
 *       401:
 *         description: Unauthorized
 */

/**
 * @openapi
 * /api/v1/tasks/{id}:
 *   get:
 *     summary: Get a task by ID
 *     description: Retrieve a single task by its ID for the authenticated user. Deleted tasks are not returned by this endpoint.
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Task ID
 *     responses:
 *       200:
 *         description: Task fetched successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Task fetched successfully
 *               data:
 *                 _id: 507f1f77bcf86cd799439011
 *                 title: Complete project documentation
 *                 status: pending
 *                 priority: high
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Task not found
 *   put:
 *     summary: Update a task
 *     description: Update the details of an existing task for the authenticated user. Deleted tasks cannot be updated.
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Task ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Complete project documentation
 *               description:
 *                 type: string
 *                 example: Updated description
 *               status:
 *                 type: string
 *                 enum: [pending, in_progress, completed]
 *                 example: in_progress
 *               priority:
 *                 type: string
 *                 enum: [low, medium, high]
 *                 example: high
 *               due_date:
 *                 type: string
 *                 format: date-time
 *                 example: 2026-07-15T12:00:00.000Z
 *     responses:
 *       200:
 *         description: Task updated successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Task updated successfully
 *               data:
 *                 _id: 507f1f77bcf86cd799439011
 *                 title: Complete project documentation
 *                 status: in_progress
 *                 priority: high
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Task not found
 *   delete:
 *     summary: Delete a task
 *     description: Soft delete a task by ID for the authenticated user. The task is marked as deleted and will no longer be returned by normal task queries.
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Task ID
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Task deleted successfully
 *               data: null
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Task not found
 */
