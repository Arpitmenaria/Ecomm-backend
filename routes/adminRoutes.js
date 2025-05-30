// adminRoutes.js
const express = require("express");
const { adminLogin, getDashboardData } = require("../Controllers/AdminController");

const router = express.Router();

router.post("/login", adminLogin);
router.get("/dashboard", getDashboardData);

module.exports = router;
