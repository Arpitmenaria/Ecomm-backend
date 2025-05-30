const Address = require("../Models/Address"); // Correct model
const User = require("../Models/User");       // To fetch user details if needed

const placeOrder = async (req, res) => {
    const { address, products } = req.body;
    const userId = req.user.userId; // Extracted from token

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const newAddress = new Address({
            user: userId,
            userName: user.name,
            address,
            products, // Assuming products array is sent in the request
        });

        await newAddress.save();
        res.status(201).json({ message: "Order placed successfully!", order: newAddress });
    } catch (error) {
        res.status(500).json({ message: "Failed to place order", error });
    }
};

module.exports = { placeOrder };
