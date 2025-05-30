const express = require("express");
const { register, login } = require("../Controllers/authController");
const authMiddleware = require("../Middleware/authMiddleware");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Example of a protected route
router.get("/cart", authMiddleware, (req, res) => {
    res.json({ message: "This is a protected cart route", user: req.user });
});

module.exports = router;