import dotenv from "dotenv";
import express from 'express'
import colors from 'colors'
const port = process.env.PORT || 5000
import mongoose from 'mongoose'
import products from './data.js'
import cors from 'cors'
dotenv.config({ path: "./config.env" });

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE)
    .then((res) => console.log('> Database Connected...'.bgCyan))
    .catch(err => console.log(`> Error while connecting to mongoDB : ${err.message}`.underline.bgRed))

const productSchema = new mongoose.Schema(
    {
        name: { type: String, unique: true },
        slug: { type: String, unique: true },
        img: { type: String },
        categary: { type: String },
        description: { type: String },
        price: { type: Number },
        ratings: { type: Number },
        brand: { type: String },
        inStock: { type: Number },
        material: { type: String },
        instruction: { type: String },
        origin: { type: String },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("PRODUCTS", productSchema);

// storing product api in database
app.get("/api/products", async (req, res) => {
    await Product.remove({}); //removing previous data 
    const createdProducts = await Product.insertMany(products);
    res.send({ createdProducts });
    // console.log(createdProducts)
});

// get all products from the database
app.get("/", async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

app.get("/:slug", async (req, res) => {
    const product = await Product.findOne({ slug: req.params.slug });
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: "Product not found" });
    }
});

app.get("/product/:id", async (req, res) => {
    console.log("req " + req.params.id)
    const product = await Product.findById(req.params.id);
    console.log("product " + product)
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: "Product id not found" });
    }
});

app.listen(port, () => console.log(`> Server is up and running on port : http://localhost:${port}`.underline.bgMagenta))