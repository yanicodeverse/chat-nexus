import mongoose from "mongoose"
const ContactSchema = new mongoose.Schema({
    name: String,
    contactID: String,
})

export const Contact = mongoose.model('Contact', ContactSchema)
