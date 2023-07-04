import { createContext } from "react";
import io from "socket.io-client"

export const context = createContext({ server: null });

export const contextProps = {
	server: io("ws://localhost:8000"),
};
