import React, { useContext, createContext, useEffect, useState } from "react";
import proptypes from "prop-types";
import io from "socket.io-client";

const SocketContext = createContext();

SocketProvider.propTypes = {
  id: proptypes.string,
  children: proptypes.any,
};

export function useSocket() {
  return useContext(SocketContext);
}

export default function SocketProvider({ id, children }) {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const newSocket = io(import.meta.env.VITE_SOCKET_API_URI, {
      query: { id },
    });
    setSocket(newSocket);
    return () => socket?.close();
  }, [id]);
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
