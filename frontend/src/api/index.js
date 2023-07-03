import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ debug: true, path: path.resolve(process.cwd(), ".env.local") });
const server = http.createServer()
const socket = new Server(server, {
	cors: {
		origin: `${process.env.CLIENT_URL}`,
	},
});

socket.on("connection", (socket) => {
	socket.on("message", (message) => { //custom event
		console.log(message);
	});
	socket.emit("reply", "hello from server")
});

server.listen(process.env.API_PORT, () => {console.log(`Started listening on port ${process.env.API_PORT}`)});
