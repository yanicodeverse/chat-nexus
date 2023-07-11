import mongoose, { SchemaTypes } from "mongoose"

const ContactSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true, minLength: 3, maxLength: 60 },
    contactID: { type: String, unique: true, required: true },
})

// const UserSchema = {
//     user_id: String,
//     username: String,
//     created_at: Date,
// }

// const ConversationsSchema = {
//     create_at: SchemaTypes
// }

// const ParticipantSchema = {
//     user_id: {type: SchemaTypes.ObjectId, ref: "User"},
//     conversation_id: {type: mongoose.SchemaTypes.ObjectId, ref: "Conversation"},
//     joined_at: Date
// }

// const MessageSchema = {
//     conversation_id: {type:SchemaTypes.ObjectId, ref: "Conversation"},
//     sender_id: {type: SchemaTypes.ObjectId, ref: "User"},
//     content: String,
//     sent_at: Date
// }

export const Contact = mongoose.model('Contact', ContactSchema)
