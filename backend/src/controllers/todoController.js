const Todo = require("../models/Todo");

// CREATE
exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create({
      title: req.body.title,
      description: req.body.description,
      userId: req.user.id,
    });

    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET USER TODOS
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user.id });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );

    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });

    res.json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

