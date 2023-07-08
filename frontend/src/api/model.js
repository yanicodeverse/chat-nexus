import mongoose, { SchemaTypes } from "mongoose"

const ContactSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true, minLength: 3, maxLength: 60 },
    contactID: { type: String, unique: true, required: true },
})

const UserSchema = new mongoose.Schema({
    user_id: String,
    username: String,
    created_at: Date,
})

const ConversationsSchema = new mongoose.Schema({
    create_at: SchemaTypes
})

const ParticipantSchema = new mongoose.Schema({
    user_id: { type: SchemaTypes.ObjectId, ref: "User" },
    conversation_id: { type: mongoose.SchemaTypes.ObjectId, ref: "Conversation" },
    joined_at: Date
})

const MessageSchema = new mongoose.Schema({
    conversation_id: { type: SchemaTypes.ObjectId, ref: "Conversation" },
    sender_id: { type: SchemaTypes.ObjectId, ref: "User" },
    content: String,
    sent_at: Date
})

export const Contact = mongoose.model('Contact', ContactSchema)
export const User = mongoose.model('User', UserSchema)
export const Conversation = mongoose.model('Conversation', ConversationsSchema)
export const Participant = mongoose.model('Participant', ParticipantSchema)
export const Message = mongoose.model('Message', MessageSchema)
