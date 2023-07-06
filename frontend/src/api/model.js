import mongoose from "mongoose"

const ContactSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: true, minLength: 3, maxLength: 60},
    contactID: {type: String, unique: true, required: true},
})

export const Contact = mongoose.model('Contact', ContactSchema)
