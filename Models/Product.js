const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  discountPrice: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  sizes: { type: [String], required: true },
  sale: { type: Boolean, default: false },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
