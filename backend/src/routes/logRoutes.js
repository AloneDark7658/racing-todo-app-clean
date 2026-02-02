const express = require("express");
const router = express.Router();
const { getLogs } = require("../controllers/logController");

const auth = require("../middlewares/authMiddleware");
const admin = require("../middlewares/adminMiddleware");

router.get("/", auth, admin, getLogs);

module.exports = router;
