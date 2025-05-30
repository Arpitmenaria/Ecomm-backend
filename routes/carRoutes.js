const express = require("express");
const authMiddleware = require("../Middleware/authMiddleware");

const router = express.Router();

router.post("/checkout", authMiddleware, (req, res) => {
    res.json({ message: "Checkout successful" });
});

module.exports = router;