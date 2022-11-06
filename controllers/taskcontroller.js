const asyncHandler = require("express-async-handler");
//@desc Set Goals
//@route GET /api/goals
//@access private
const getTasks = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Tasks" });
});

//@desc Set Goals
//@route POST /api/goals
//@access private
const addTask = asyncHandler(async (req, res) => {
  if (!req.body.tittle) {
    res.status(400);
    throw new Error("Please add task tittle");
  }
  res.status(200).json({ message: "ADD Tasks" });
});

//@desc Set Goals
//@route PUT /api/goals/:id
//@access private
const updateTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "PUT Tasks" });
});

//@desc Set Goals
//@route DELETE /api/goals/:id
//@access private
const deleteTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "DELETE Tasks" });
});

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
};
