const Log = require("../models/Log");

module.exports = (action) => {
  return async (req, res, next) => {
    res.on("finish", async () => {
      if (res.statusCode >= 400) return;

      try {
        await Log.create({
          userId: req.user.id,
          action,
          todoId: req.params.id || null,
        });
      } catch (err) {
        console.error("Log error:", err.message);
      }
    });

    next();
  };
};
