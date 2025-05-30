const express = require("express");
const { createOrder } = require("../Controllers/Paymentcontroller");

const router = express.Router();

router.post("/create-order", createOrder);

module.exports = router;
