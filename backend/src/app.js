const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");
const logRoutes = require("./routes/logRoutes");

app.use("/auth", authRoutes);
app.use("/todos", todoRoutes);
app.use("/logs", logRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = app;
