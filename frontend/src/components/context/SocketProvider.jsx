import React, { useContext, createContext, useEffect, useState } from "react";
import proptypes from "prop-types";
import io from "socket.io-client";

const SocketContext = createContext();

SocketProvider.propTypes = {
  id: proptypes.string.isRequired,
  children: proptypes.instanceOf(React.Component)
};

export function useSocket() {
  return useContext(SocketContext);
}

export default function SocketProvider({ id, children }) {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
				const newSocket = io(import.meta.env.VITE_SOCKET_API_URI, { query: { id } });
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
