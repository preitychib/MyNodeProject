const asyncHandler = require("express-async-handler");

const Task = require("../models/taskModel");

//@desc Set Goals
//@route GET /api/goals
//@access private
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
});

//@desc Set Goals
//@route POST /api/goals
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
  });
  res.status(200).json(task);
});

//@desc Set Goals
//@route PUT /api/goals/:id
//@access private
const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(400);
    throw new Error("Task not found");
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedTask);
});

//@desc Set Goals
//@route DELETE /api/goals/:id
//@access private
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(400);
    throw new Error("Task not found");
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
