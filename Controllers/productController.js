const mongoose = require("mongoose");
const Product = require("../Models/Product");



// Get All Products (Filtered by Category)
const getProducts = async (req, res) => {
  try {
    const { category } = req.query;
    let query = {};
    if (category) {
      query.category = category;
    }

    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};
















// ✅ Add New Product
const addProduct = async (req, res) => {
  try {
    console.log("Recieved Data:", req.body);

    const newProduct = new Product(req.body);
    await newProduct.save();

    console.log("Saved Product:", newProduct);
    res.status(201).json(
      { message: "Product Added", product: newProduct }
    );
  } catch (error) {
    res.status(500).json(
      { message: "Error adding product", error }
    );
  }
};

// Delete Product
const deleteProduct = async (req, res)=>{
  try{
      const user = await Product.findByIdAndDelete(req.params.id);
      if (!user) {
          return res.send('Product not found');
      }
      res.send('Product deleted')
  } catch(error) {
      console.log(error)
      res.send('error in deleting')
  }
};




module.exports = { getProducts, addProduct, deleteProduct };
