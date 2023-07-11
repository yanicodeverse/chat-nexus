import React, { useContext, createContext, useEffect, useState } from "react";
import io from "socket.io-client";

const SocketContext = createContext();

export function useSocket() {
	return useContext(SocketContext);
}

export default function SocketProvider({ id, children }) {
	const [socket, setSocket] = useState(null);

	useEffect(() => {
		const newSocket = io("https://chat-nexus-api.onrender.com", { query: { id } });
		setSocket(newSocket);
		return () => newSocket.close();
	}, [id]);
	return (
		<SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
	);
}
