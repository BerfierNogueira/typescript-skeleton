import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        email: String,
        firstName: String,
        lastName: String
    },
    {
        timestamps: true
    }
)

export default model(`model`, userSchema)