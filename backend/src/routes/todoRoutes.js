const express = require("express");
const router = express.Router();
const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

const auth = require("../middlewares/authMiddleware");
const log = require("../middlewares/logMiddleware");

router.get("/", auth, getTodos);
router.post("/", auth, log("CREATE"), createTodo);
router.put("/:id", auth, log("UPDATE"), updateTodo);
router.delete("/:id", auth, log("DELETE"), deleteTodo);

module.exports = router;
