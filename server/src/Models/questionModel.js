import mongoose from "mongoose";

const { Schema } = mongoose

const querySchema = new Schema({
    question: { type: String, unique: true, required: true },
    answer: { type: String, required: true },
})

export const Query = mongoose.model('CarQuestion', querySchema)