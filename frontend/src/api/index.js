import { Server } from "socket.io";
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import router from "./routes.js";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

console.log("Environment", process.env.NODE_ENV);

/* global  process */
const io = new Server(process.env.API_PORT, {
  cors: { origin: process.env.FRONT_END_URI },
});

console.log({ port: process.env.API_PORT });

io.on("connection", (socket) => {
  const id = socket.handshake.query.id;
  socket.join(id);

  socket.on("connect", () => console.log(`A client is connected ${id}`));

  socket.on("send-message", ({ recipients, text }) => {
    console.log(recipients, text);
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

  socket.on("error", (error) => console.log(`Socket error: ${error}`));

  socket.on("end", () => {
    socket.disconnect();
    console.log("connection closed");
  });
});

const app = express();
mongoose.connect(process.env.MONGO_URI);

app.use(express.json());

app.use(router);

app.listen(8001);
