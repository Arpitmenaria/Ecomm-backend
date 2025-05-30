const express = require("express");
const { placeOrder } = require("../Controllers/checkoutController");  // Correct Import
const authMiddleware = require("../Middleware/authMiddleware");    // Ensure Middleware is Imported
const upload = require("../Middleware/multerConfig");

const router = express.Router();

router.post("/checkout", authMiddleware, placeOrder);  // Correct Syntax
router.post("/upload", upload.single("file"), (req, res) => {
    res.json({ message: "File uploaded successfully", file: req.file });
});

module.exports = router;
