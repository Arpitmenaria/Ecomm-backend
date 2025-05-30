const Razorpay = require("razorpay");

const razorpay = new Razorpay({
    key_id: "rzp_test_M4iRM6fthLXpHX",      // ✅ Updated Key ID
    key_secret: "mlClAJ3mLI2S2ZcXhUkiVJ7i"  // ✅ Updated Key Secret
});

exports.createOrder = async (req, res) => {
    const { amount, currency } = req.body;

    if (!amount || !currency) {
        return res.status(400).json({ message: "Amount and currency are required" });
    }

    try {
        const options = {
            amount: amount * 100,  // Razorpay expects amount in paisa
            currency: currency,
            receipt: `receipt_${Date.now()}`
        };

        const order = await razorpay.orders.create(options);

        console.log("Razorpay Order Created:", order); // ✅ Debugging log

        res.status(201).json({ success: true, order });
    } catch (error) {
        console.error("Razorpay Error:", error);  // ✅ For Debugging
        res.status(500).json({ success: false, message: "Error creating Razorpay order" });
    }
};
