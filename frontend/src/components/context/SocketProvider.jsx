import React, { useContext, createContext, useEffect, useState } from "react";
import io from "socket.io-client";

const SocketContext = createContext();

export function useSocket() {
	return useContext(SocketContext);
}

export default function SocketProvider({ id, children }) {
	const [socket, setSocket] = useState(null);

	useEffect(() => {
		new Promise((resolve, reject) => {
			setTimeout(() => {
				const newSocket = io("https://chat-nexus-api.onrender.com", { query: { id } });
				if (newSocket.connected){
					return resolve(newSocket)
				}else{
					newSocket.disconnect()
					return reject(newSocket)
				}
			}, 3000);
		}).then(res => {
			setSocket(res);
		}).catch(error => {
			console.log(error)
		})
		return () => socket?.close();
	}, [id]);
	return (
		<SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
	);
}
