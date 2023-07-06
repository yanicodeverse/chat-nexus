import { Server } from "socket.io";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ debug: true, path: path.resolve(process.cwd(), ".env.local") });

const io = new Server(process.env.API_PORT, {cors: {origin: "http://localhost:3000"}});
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
});
