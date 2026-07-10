require('dotenv').config();
const connectDB = require('./config/db');
const app = require('./app');
const fetch = global.fetch || require('node-fetch');

const start = async () => {
  await connectDB();
  const server = app.listen(5004, async () => {
    try {
      const email = 'debug' + Date.now() + '@example.com';
      const password = 'Password123!';
      const registerRes = await fetch('http://localhost:5004/api/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Debug User', email, password }),
      });
      console.log('register status', registerRes.status);
      console.log('register body', await registerRes.text());
      const loginRes = await fetch('http://localhost:5004/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      console.log('login status', loginRes.status);
      const loginBody = await loginRes.json();
      console.log('login body', loginBody);
      const token = loginBody.data?.token;
      if (!token) return;
      const tasksRes = await fetch('http://localhost:5004/api/v1/tasks', {
        method: 'GET',
        headers: { Authorization: 'Bearer ' + token },
      });
      console.log('tasks status', tasksRes.status);
      console.log('tasks body', await tasksRes.text());
    } catch (err) {
      console.error(err);
    } finally {
      server.close();
    }
  });
};
start();
