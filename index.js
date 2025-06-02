const express = require("express");
const connectDB = require("./Connections/connection");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const checkoutRoutes = require("./routes/checkoutRoutes");
const PaymentRoutes = require("./routes/PaymentRoutes")
const adminRoutes = require("./routes/adminRoutes")

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://ecommerce-frontend-eight-umber.vercel.app/" // replace with actual deployed frontend URL
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Routes
app.use("/api", productRoutes);
app.use("/api", authRoutes);
app.use("/api", checkoutRoutes);
app.use("/api/payment", PaymentRoutes);
app.use("/api/admin", adminRoutes);

app.use("/images", express.static("public/images"));



const PORT = 5000;

// Connect to Database and Start Server
connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
