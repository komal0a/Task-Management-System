const Task = require('../models/Task');


const createTask = async (req, res) => {
  try {
    const { title, description, status, priority, due_date } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: 'Title is required',
      });
    }

    const task = await Task.create({
      title,
      description,
      status,
      priority,
      due_date,
      created_by: req.user._id,
    });

    return res.status(201).json({
      success: true,
      message: 'Task created successfully',
      data: task,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong while creating the task',
    });
  }
};


const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ created_by: req.user._id }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: 'Tasks fetched successfully',
      data: tasks,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong while fetching tasks',
    });
  }
};


const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, created_by: req.user._id });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Task fetched successfully',
      data: task,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong while fetching the task',
    });
  }
};


const updateTask = async (req, res) => {
  try {
    const { title, description, status, priority, due_date } = req.body;

    const task = await Task.findOne({ _id: req.params.id, created_by: req.user._id });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found',
      });
    }

    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (status !== undefined) task.status = status;
    if (priority !== undefined) task.priority = priority;
    if (due_date !== undefined) task.due_date = due_date;

    await task.save();

    return res.status(200).json({
      success: true,
      message: 'Task updated successfully',
      data: task,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong while updating the task',
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, created_by: req.user._id });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Task deleted successfully',
      data: null,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong while deleting the task',
    });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};