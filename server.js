import dotenv from "dotenv";
import express from 'express'
import colors from 'colors'
const port = process.env.PORT || 5000
import mongoose from 'mongoose'
import products from './data.js'
import cors from 'cors'
import twilio from 'twilio'
// import jwt from "jsonwebtoken";
import newUser from './schemas/userScheme.js'
import Product from './schemas/productSchema.js'
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import productRouter from "./routes/productRoutes.js";

dotenv.config({ path: "./config.env" });

const app = express()
app.use('/uploads', express.static('uploads'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE)
    .then((res) => console.log('> Database Connected...'.bgCyan))
    .catch(err => console.log(`> Error while connecting to mongoDB : ${err.message}`.underline.bgRed))


app.use('/api/users', userRouter)
app.use('/api/order', orderRouter)
app.use('/api/product', productRouter)



// storing product api in database
app.get("/api/products", async (req, res) => {
    await Product.remove({}); //removing previous data 
    try {
        const createdProducts = await Product.insertMany(products);
        res.send({ createdProducts });
    }
    catch (err) {
        res.send(err)
    }
});

// get all products from the database
app.get("/", async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

app.get("/:id", async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id });
        if (product) {
            res.send(product);
        } else {
            res.status(404).send({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ error })
    }
});

app.post("/product", async (req, res) => {
    const quantity = req.body.quantity
    const product = await newUser.updateOne({ _id: req.body.userId }, { $addToSet: { cart: req.body.productId } });

    if (product) {
        res.status(200).send({ message: "successfully added", product, quantity });
    } else {
        res.status(404).send({ message: "Product id not found" });
    }

});

// app.get("/product/:id", async (req, res) => {
//     const product = await Product.findById(req.params.id);
//     // console.log("product put", product)


//     if (product) {
//         res.status(200).send({ product });
//     } else {
//         res.status(404).send({ message: "Product id not found" });
//     }
// });

app.post('/get-products', async (req, res) => {
    const userId = req.body.userId
    const data = await newUser.findOne({ _id: userId }).populate("cart")
    if (data) {
        res.status(201).send({ message: "get product successful", data: data });
    } else {
        res.status(404).send({ message: "Product failed" });
    }
})

// const obj = require("mongodb").ObjectID second method to delete product 
// app.delete('/:id/:product_index', async (req, res) => {
//     const { id, product_index } = req.params
//     console.log(req.params)
//     newUser.findOne({ _id: mongoose.Types.ObjectId(id) }, (err, result) => {
//         if (err) {
//             res.status(404).send({ message: "cannot get user", err }).end();
//         }
//         else {
//             const book = result.cart[product_index]
//             newUser.findOneAndUpdate(
//                 { _id: mongoose.Types.ObjectId(id) },
//                 {
//                     $pull: {
//                         cart: book
//                     }
//                 },
//                 { new: true },
//                 (err, result) => {
//                     if (err) {
//                         res.status(404).send({ message: "cannot get user", err }).end();
//                     }
//                     else {
//                         const data = newUser.findOne({ _id: id }).populate("cart")
//                         res.json({ message: "success", data })
//                     }
//                 }
//             )
//         }
//     })
// })

app.delete('/:id/:product_index', async (req, res) => {
    const { id, product_index } = req.params;
    try {
        const user = await newUser.findOne({ _id: mongoose.Types.ObjectId(id) });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const removedItem = user.cart.splice(product_index, 1);
        await user.save();
        const data = await newUser.findOne({ _id: id }).populate("cart")
        res.json({ message: 'Item removed from cart', removedItem, data });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});



// deleting all products from the cart after creating a new order
app.delete('/:id', async (req, res) => {
    const { id } = req.params
    newUser.updateOne({ _id: mongoose.Types.ObjectId(id) }, { $set: { cart: [] } }, { new: true })
        .then((res) => {
            res.send(res)
        })
        .catch((err) => {
            res.send(err)
        })
})


// app.post('/bill', (req, res) => {
//     const { address1, address2, number, total, cart } = req.body
//     // console.log(cart);
//     console.log(address1, address2, number, total);
//     res.send({ PRODUCT_ORDERED: req.body })
//     const productName = cart.map((item) => { return item.data.name })
//     const client = new twilio(process.env.TWILIO_ID, process.env.TWILIO_AUTH_TOKEN)

//     return client.messages
//         .create({
//             body: `From Shopping Cart, Your ordered product details 
//             product name : ${productName}, 
//             total pay: ${total},

//             Receiving Details-
//             Address1 : ${address1},
//             Address2 : ${address2},
//             Contact Number : ${number}
//             `,
//             from: process.env.PHONE,
//             mediaUrl: ['https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg'],
//             to: '+918767689702'
//         })
//         .then(message => console.log(message))
//         .catch((err) => { console.log(err) })

// })



app.listen(port, () => console.log(`> Server is up and running on port : http://localhost:${port}`.underline.bgMagenta))
