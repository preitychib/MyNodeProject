const express = require("express");
const router = express.Router();
const {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskcontroller");

const { protect } = require("../middleware/authMiddleware");
router.route("/").get(protect, getTasks).post(protect, addTask);
router.route("/:id").put(protect, updateTask).delete(protect, deleteTask);

module.exports = router;
