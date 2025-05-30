const jwt = require("jsonwebtoken");

const adminAuthMiddleware = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Access denied, no token provided" });
    }

    try {
        const verified = jwt.verify(token.split(" ")[1], "admin_jwt_secret");  // Admin Token
        req.admin = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token" });
    }
};

module.exports = adminAuthMiddleware;
