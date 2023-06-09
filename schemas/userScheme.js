import mongoose from 'mongoose'

import jwt from "jsonwebtoken";

// user schema
const userSchema = new mongoose.Schema(
    {
        name: { type: "string" },
        email: { type: "string" },
        password: { type: "string" },
        cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PRODUCTS' }],
        orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ORDER' }],
        tokens: [
            {
                token: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    {
        timestamps: true
    }
)

userSchema.methods.generateAuthToken = async function () {
    try {
        // console.log(this._id);
        let token = jwt.sign({ _id: this._id.toString() }, process.env.JWT_KEY, { expiresIn: '1d' });
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        // console.log(token)
        return token;
    } catch (err) {
        console.log(err);
    }
};

const newUser = mongoose.model("User", userSchema)

export default newUser