import { Server } from "socket.io";
import dotenv from "dotenv";
import path from "path";
import mongoose from 'mongoose'
import express from 'express'
import router from "./routes.js";

dotenv.config({ debug: true, path: path.resolve(process.cwd(), ".env.local") });

const io = new Server(process.env.API_PORT, { cors: { origin: "http://localhost:3000" } });
io.on("connection", (socket) => {
	const id = socket.handshake.query.id;
	socket.join(id);

	socket.on("send-message", ({ recipients, text }) => {
		recipients.forEach((recipient) => {
			const newRecipients = recipients.filter((r) => r !== recipient);
			newRecipients.push(id);
			socket.broadcast.to(recipient).emit("receive-message", {
				recipient: newRecipients,
				sender: id,
				text,
			});
		});
	});
});

const app = express()
mongoose.connect('mongodb://localhost:27017/chat-nexus')

app.use(express.json())

app.use(router)

app.listen(8001)
