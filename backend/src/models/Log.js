const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  action: {
    type: String,
    enum: ["CREATE", "UPDATE", "DELETE"],
    required: true,
  },
  todoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Todo",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Log", logSchema);
