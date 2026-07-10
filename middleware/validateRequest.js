const { validationResult } = require('express-validator');

/**
 * Runs after a set of express-validator validation chains.
 * If any validation errors are present, responds with a standardized
 * 400 error payload. Otherwise, passes control to the next handler.
 */
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map((err) => ({
        field: err.path,
        message: err.msg,
      })),
    });
  }

  next();
};

module.exports = validateRequest;