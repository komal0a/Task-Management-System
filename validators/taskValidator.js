const { body } = require('express-validator');

const STATUS_VALUES = ['pending', 'in_progress', 'completed'];
const PRIORITY_VALUES = ['low', 'medium', 'high'];

const createTaskValidator = [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('status')
    .optional()
    .isIn(STATUS_VALUES)
    .withMessage(`Status must be one of: ${STATUS_VALUES.join(', ')}`),
  body('priority')
    .optional()
    .isIn(PRIORITY_VALUES)
    .withMessage(`Priority must be one of: ${PRIORITY_VALUES.join(', ')}`),
];

const updateTaskValidator = [
  body('title').optional().trim().notEmpty().withMessage('Title cannot be empty'),
  body('status')
    .optional()
    .isIn(STATUS_VALUES)
    .withMessage(`Status must be one of: ${STATUS_VALUES.join(', ')}`),
  body('priority')
    .optional()
    .isIn(PRIORITY_VALUES)
    .withMessage(`Priority must be one of: ${PRIORITY_VALUES.join(', ')}`),
];

module.exports = {
  createTaskValidator,
  updateTaskValidator,
};