const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ecom_user:ecom_pass123@ecommerce.olcrkir.mongodb.net/ecommerce?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = connectDB;
