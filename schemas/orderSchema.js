import mongoose from 'mongoose'


const orderSchema = new mongoose.Schema(
    {
        orderItems: [
            {
                name: { type: String },
                image: { type: String },
                price: { type: Number },
                quantity: { type: Number },
                brand: { type: String },
            },
        ],
        payment: { type: String },
        totalAmount: { type: Number },
        isPaid: { type: Boolean, default: false },
        paidAt: { type: Date },
        isDelivered: { type: Boolean, default: false },
        deliveredAt: { type: Date },
        shippingAddress: {
            name: { type: String },
            phone: { type: Number },
            address: { type: String },
        }
    },
    {
        timestamps: true
    }
)
const Order = mongoose.model('ORDER', orderSchema)

export default Order