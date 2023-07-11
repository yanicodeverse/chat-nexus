import { Server } from "socket.io";
import dotenv from "dotenv";
// import path from "path";
import mongoose from 'mongoose'
import express from 'express'
import router from "./routes.js";

dotenv.config();

const io = new Server(process.env.API_PORT, { cors: { origin: "https://chat-nexus.vercel.app" } });
io.on("connection", (socket) => {
	const id = socket.handshake.query.id;
	console.log("new connection created: ", id)
	socket.join(id);

	socket.on("send-message", ({ recipients, text }) => {
		console.log(recipients, text)
		recipients.forEach((recipient) => {
			const newRecipients = recipients.filter((r) => r !== recipient);
			newRecipients.push(id);
			socket.broadcast.to(recipient).emit("receive-message", {
				recipients: newRecipients,
				sender: id,
				text,
			});
		});
	});
	socket.on("end", () => {
		socket.disconnect()
		console.log("connection closed");
	})
});

const app = express()
mongoose.connect(process.env.MONGO_URL)

app.use(express.json())

app.use(router)

app.listen(8001)
