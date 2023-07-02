import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";

dotenv.config();

const socket = new Server(http.createServer(), {
	cors: {
		origin: `${process.env.CLIENT_URL}:${process.env.CLIENT_PORT}`,
	},
});

socket.listen(process.env.API_PORT);
