import express from 'express'
import multer from "multer";
import Product from '../schemas/productSchema.js';
const upload = multer({ dest: "uploads/" })
import mongoose from 'mongoose'

const productRouter = express.Router()

productRouter.post('/create-product', upload.single("image"), async (req, res) => {
    const { name, slug, description, category, price, rating, brand, inStock, instruction } = req.body
    const image = req.file ? req.file.filename : 'no image'

    try {
        if (!name || !slug || !description || !price || !rating || !brand || !inStock || !instruction) {
            return res.status(403).json({ message: "post field is empty" })
        }
        const create_new_post = new Product({ name, slug, img: image, category, description, price, ratings: rating, brand, inStock, instruction, quantity: 1 });
        const newPost = await create_new_post.save();
        if (newPost) {
            return res.status(201).json({ success: "new product created", newPost });
        }
        else {
            return res.status(404).json({ success: "failed to create product" });
        }
    } catch (error) {
        // console.log(error);
        res.status(500).json({ error: error })
    }

})

productRouter.delete('/delete-product/:id', async (req, res) => {

    try {
        const products = await Product.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({ products })
    } catch (error) {
        res.status(500).json({ error: error })
    }

})

productRouter.put('/update-product/:id', async (req, res) => {

    const { name, slug, description, price, brand, instruction, rating, inStock, } = req.body
    try {
        const products = await Product.findByIdAndUpdate({ _id: req.params.id }, { name: name, slug: slug, description: description, price: price, brand: brand, instruction: instruction, rating: rating, inStock: inStock });
        res.status(200).json({ products })
    } catch (error) {
        res.status(500).json({ error: error })
    }

})

export default productRouter