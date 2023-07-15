import { Server } from "socket.io";
import dotenv from "dotenv";

dotenv.config();

/* global  process */
const io = new Server(process.env.API_PORT, {
  cors: { origin: process.env.FRONT_END_URI },
});

console.log({ port: process.env.API_PORT });

io.on("connection", (socket) => {
  const id = socket.handshake.query.id;
  socket.join(id);

  console.log(`new connection ${id}`)
  
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
