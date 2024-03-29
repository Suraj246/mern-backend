import express from 'express'
import Order from '../schemas/orderSchema.js'
import newUser from '../schemas/userScheme.js'
const orderRouter = express.Router()
import path from 'path'

// save order in database
orderRouter.post('/order', async (req, res) => {
    const { cart, userAddress, payment, totalAmount } = req.body
    try {
        if (cart.length === 0) {
            res.status(404).json({ message: 'order not placed because cart is empty' })
        }
        else {
            const order = new Order({
                orderItems: cart,
                payment: payment,
                totalAmount: totalAmount,
                shippingAddress: userAddress
            })
            const saveOrder = await order.save()
            res.status(200).json({ message: "order cart is created", saveOrder })
        }
    } catch (error) {
        res.status(500).json({ message: "server error", error: error })
    }
})

// save order to individual user
orderRouter.post("/get-order", async (req, res) => {

    try {
        const product = await newUser.updateOne({ _id: req.body.userId.userId }, { $addToSet: { orders: req.body.userId.orderId } });

        if (product) {
            res.status(200).send({ message: "order successfully added", product });
        } else {
            res.status(404).send({ message: "order id not found" });
        }
    }
    // console.log("productId post", product)
    catch (error) {
        res.status(500).send({ message: "server error", error });
    }
});

orderRouter.post('/get-user-orders', async (req, res) => {
    const userId = req.body.userId
    const data = await newUser.findOne({ _id: userId }).populate("orders")
    if (data) {
        res.status(201).send({ message: "get product successful", data: data });
    } else {
        res.status(404).send({ message: "failed to get orders" });
    }
})

orderRouter.get("/all-orders", async (req, res) => {
    try {
        const orders = await Order.find({});
        if (orders) {
            res.status(200).json({ success: "all orders found", orders });
        }
        else {
            res.status(404).json({ success: "orders not found", orders });

        }
    }
    catch (err) {
        res.status(500).json({ error: "server error", err });

    }
});

orderRouter.post('/update-order/isPaid', async (req, res) => {
    const { orderId, isPaid } = req.body
    try {
        const orders = await Order.findByIdAndUpdate({ _id: orderId }, { isPaid });
        if (orders) {
            const orders = await Order.find({});
            res.status(200).json({ success: "order updated", orders });
        }
        else {
            res.status(404).json({ success: "orders not found", orders });
        }
    }
    catch (err) {
        res.status(500).json({ error: "server error", err });
    }
})

orderRouter.post('/update-order/isDelivered', async (req, res) => {
    const { orderId, isDelivered } = req.body
    try {
        const orders = await Order.findByIdAndUpdate({ _id: orderId }, { isDelivered });
        if (orders) {
            const orders = await Order.find({});
            res.status(200).json({ success: "order updated", orders });
        }
        else {
            res.status(404).json({ success: "orders not found", orders });
        }
    }
    catch (err) {
        res.status(500).json({ error: "server error", err });
    }
})


export default orderRouter