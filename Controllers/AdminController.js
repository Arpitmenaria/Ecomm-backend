// AdminController.js
const jwt = require("jsonwebtoken");
const Admin = require("../Models/Admin");
const bcrypt = require("bcryptjs");

// Admin Login Controller
exports.adminLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        // Ensure the role is "admin"
        if (admin.role !== "admin") {
            return res.status(403).json({ message: "Unauthorized access" });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ adminId: admin._id }, "admin_jwt_secret", { expiresIn: "1h" });
        res.status(200).json({ success: true, token });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Admin Dashboard Data Controller
exports.getDashboardData = async (req, res) => {
    try {
        const totalOrders = 100; // Sample data
        const totalUsers = 50;   // Sample data
        const totalSales = 20000; // Sample data

        res.status(200).json({
            success: true,
            data: {
                totalOrders,
                totalUsers,
                totalSales
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
