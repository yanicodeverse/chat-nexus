import { useState, useEffect } from "react";
import { MgsContainer, IdAndDisplayName } from "./exports/export.js";
import "./App.css";
import { io } from "socket.io-client";

function App() {
	const [disabled, setIsDisabled] = useState(true);
	const [myID, setID] = useState("");
	const [displayName, setDisplayName] = useState("");
	const [message, setMessage] = useState("");
	const [connection, setConnection] = useState(null);
	const [data, setData] = useState("");

	useEffect(() => {
		const socket = io("ws://localhost:8000");
		setConnection(socket);
		socket.on("reply", text => {
			setMessage(text)
		})
		return () => socket.close();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		setData(message);
		if (connection) {
			const formData = new FormData(e.target);
			connection.emit("message", formData.get("msg"));
		}
		setMessage("");
	};
	return (
		<>
			<MgsContainer
				disabled={disabled}
				handleSubmit={handleSubmit}
				message={message}
				setMessage={setMessage}
				data={data}
			/>
			<IdAndDisplayName
				setIsDisabled={setIsDisabled}
				setID={setID}
				myID={myID}
				displayName={displayName}
				setDisplayName={setDisplayName}
			/>
		</>
	);
}

export default App;
