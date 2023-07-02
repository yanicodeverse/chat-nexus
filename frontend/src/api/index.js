import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import path from "path";

dotenv.config({debug: true, path: path.resolve(process.cwd(), ".env.local")});

const socket = new Server(http.createServer(), {
	cors: {
		origin: `${process.env.CLIENT_URL}:${process.env.CLIENT_PORT}`,
	},
});

console.log(process.env.API_PORT)

socket.listen(process.env.API_PORT);
