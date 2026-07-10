const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const validateRequest = require('../middleware/validateRequest');
const { createTaskValidator, updateTaskValidator } = require('../validators/taskValidator');
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

const router = express.Router();

router.use(authMiddleware);

router.post('/', createTaskValidator, validateRequest, createTask);
router.get('/', getTasks);
router.get('/:id', getTaskById);
router.put('/:id', updateTaskValidator, validateRequest, updateTask);
router.delete('/:id', deleteTask);

module.exports = router;