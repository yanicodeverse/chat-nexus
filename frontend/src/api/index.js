import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv"

dotenv.config()

const app = express();
const socket = new Server(http.createServer(), {
	cors: {
		origin: "http://localhost:3000"
	}
});

socket.listen(8000)