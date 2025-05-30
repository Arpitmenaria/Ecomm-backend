const express = require("express");
const { getProducts, addProduct, deleteProduct } = require("../Controllers/productController");

const router = express.Router();

router.get("/products", getProducts);     // Get all products
router.post("/products", addProduct);     // Add new product
router.delete("/products/:id", deleteProduct); // Delete product

module.exports = router;
