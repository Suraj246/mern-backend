import mongoose from 'mongoose'


// product schema
const productSchema = new mongoose.Schema(
    {
        name: { type: String },
        slug: { type: String },
        img: { type: String },
        category: { type: String },
        description: { type: String },
        price: { type: Number },
        ratings: { type: Number },
        brand: { type: String },
        inStock: { type: Number },
        instruction: { type: String },
        quantity: { type: Number }
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("PRODUCTS", productSchema);
export default Product;