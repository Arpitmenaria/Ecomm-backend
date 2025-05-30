const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.header("Authorization");

    if (!authHeader) {
        return res.status(401).json({ message: "Access denied, no token provided" });
    }

    const token = authHeader.split(" ")[1]; // Extract the token part after 'Bearer'

    if (!token) {
        return res.status(401).json({ message: "Invalid token format" });
    }

    try {
        const verified = jwt.verify(token, "your_jwt_secret"); // Ensure the secret matches your loginController
        req.user = verified;
        next();
    } catch (error) {
        return res.status(400).json({ message: "Invalid token" });
    }
};

module.exports = authMiddleware;
