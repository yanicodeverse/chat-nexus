import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ debug: true, path: path.resolve(process.cwd(), ".env.local") });

const app = express();
const server = http.createServer(app);
const socket = new Server(server, {
	cors: {
		origin: `${process.env.CLIENT_URL}`,
	},
});

socket.on("connection", (socket) => {
	console.log("New connection")
	socket.emit("onJoin", "You have joined the chat");
	socket.broadcast.emit("onChat", "chatting")
});

server.listen(process.env.API_PORT, () => {
	console.log(`Started listening on port ${process.env.API_PORT}`);
});