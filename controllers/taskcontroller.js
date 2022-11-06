const asyncHandler = require("express-async-handler");

const Task = require("../models/taskModel");
const User = require("../models/userModel");

//@desc Set Tasks
//@route GET /api/tasks
//@access private
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.status(200).json(tasks);
});

//@desc Set Tasks
//@route POST /api/tasks
//@access private
const addTask = asyncHandler(async (req, res) => {
  if (!req.body.tittle) {
    res.status(400);
    throw new Error("Please add task tittle");
  }
  if (!req.body.description) {
    res.status(400);
    throw new Error("Please add task description");
  }
  const task = await Task.create({
    tittle: req.body.tittle,
    description: req.body.description,
    user: req.user.id,
  });
  res.status(200).json(task);
});

//@desc Set Tasks
//@route PUT /api/tasks/:id
//@access private
const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(400);
    throw new Error("Task not found");
  }
    
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (task.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedTask);
});

//@desc Set Tasks
//@route DELETE /api/tasks/:id
//@access private
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(400);
    throw new Error("Task not found");
  }
  
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (task.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  await task.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
};
