const express = require('express');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();

// Core middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is healthy' });
});

app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/tasks', require('./routes/taskRoutes'));

app.use(notFound);
app.use(errorHandler);

module.exports = app;