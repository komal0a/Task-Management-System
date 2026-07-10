const express = require('express');

const app = express();

// Core middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is healthy' });
});

app.use('/api/v1/auth', require('./routes/authRoutes'));

module.exports = app;