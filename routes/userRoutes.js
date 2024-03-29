import dotenv from "dotenv";
import express from 'express'
import newUser from '../schemas/userScheme.js'
import adminUser from "../schemas/adminSchema.js";

const userRouter = express.Router()

userRouter.post("/signup", async (req, res) => {
    const { name, email, password } = req.body

    try {
        const userExit = await newUser.findOne({ email: email });

        if (userExit) {
            return res.status(409).json({ message: "user already exits" });
        }
        const user = new newUser({ name, email, password });
        const new_created_User = await user.save();
        if (new_created_User) {
            return res.status(201).json({ success: "user successfully created" });
        }
    } catch (err) {
        return res.status(422).json({ message: "error" });
    }

})

userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const userAvailable = await newUser.findOne({
            email: email,
            password: password,
        });
        const adminAvailable = await adminUser.findOne({
            email: email,
            password: password,
        });
        if (userAvailable) {
            if (
                password === userAvailable.password &&
                email === userAvailable.email
            ) {
                const token = await userAvailable.generateAuthToken();

                // const token = jwt.sign(
                //   { _id: userAvailable._id },
                //   process.env.JWT_KEY,
                //   { expiresIn: "1h" }
                // );

                // res.cookie("jwtoken", token, {
                //     expires: new Date(Date.now() + 2592000000),
                //     httpOnly: true,
                // });
                res.status(200).json({
                    message: "success",
                    userAvailable: {
                        name: userAvailable.name,
                        email: userAvailable.email,
                        _id: userAvailable._id
                    },
                    token,
                    userId: userAvailable._id
                });
            }
            else {
                res.status(401).json({ message: "email or password incorrect" });
            }

        }
        else if (adminAvailable) {
            if (
                password === adminAvailable.password &&
                email === adminAvailable.email
            ) {
                res.status(200).json({
                    message: "success",
                    adminAvailable: {
                        type: adminAvailable.type,

                        email: adminAvailable.email,
                        _id: adminAvailable._id
                    },
                });
            } else {
                res.status(401).json({ message: "email or password incorrect" });
            }
        }
        else {
            res.status(404).json({ message: "user not found" });
        }


    } catch (err) {
        res.send({ message: err });
    }
});


userRouter.get('/all-users', async (req, res) => {
    try {
        const user = await newUser.find({}).populate('orders')
        if (user) {
            res.status(200).json(user)
        }
        else {
            res.status(404).json({ message: "we could not get users" })
        }
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

userRouter.get("/:id", async (req, res) => {
    try {
        const customer = await newUser.findOne({ _id: req.params.id }).populate("orders");
        if (customer) {
            res.send(customer);
        } else {
            res.status(404).send({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ error })
    }
});
// admin signup 
// userRouter.post("/admin/signup", async (req, res) => {
//     const { email, password } = req.body
//     try {
//         const userExit = await adminUser.findOne({ email: email });

//         if (userExit) {
//             return res.status(409).json({ message: "user already exits" });
//         }
//         if (!email || !password) {
//             return res.status(403).json({ message: "field is empty" })
//         }
//         const user = new adminUser({ email, password, type: "admin" });
//         const new_created_User = await user.save();
//         if (new_created_User) {
//             return res.status(201).json({ success: " successfully created admin" });
//         }
//     } catch (err) {
//         return res.status(500).json({ message: "error" });
//     }
// })

export default userRouter