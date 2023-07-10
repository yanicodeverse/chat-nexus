import React, { useContext, createContext, useEffect, useState } from "react";
import io from "socket.io-client";

const SocketContext = createContext();

export function useSocket() {
	return useContext(SocketContext);
}

export default function SocketProvider({ id, children }) {
	const [socket, setSocket] = useState(null);

	useEffect(() => {
		const newSocket = io("https://64abd37ace8f653ab0a28392--chat-nexus-v1.netlify.app/", { query: { id } });
		setSocket(newSocket);
		return () => newSocket.close();
	}, [id]);
	return (
		<SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
	);
}
