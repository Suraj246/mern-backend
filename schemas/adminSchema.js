import mongoose from 'mongoose'


// admin schema
const adminSchema = new mongoose.Schema(
    {
        email: { type: "string" },
        password: { type: "string" },
        type: { type: "string" }
    }
)

const adminUser = mongoose.model("ADMIN", adminSchema)

export default adminUser