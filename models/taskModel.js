const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    tittle: {
      type: String,
      required: [true, "Please add task tittle"],
    },
    description: {
      type: String,
      required: [true, "Please add task description"],
    },
  },
  {
    timestampes: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);
