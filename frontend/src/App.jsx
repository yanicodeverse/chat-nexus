import RoomVerification from "./components/RoomVerification.jsx";
import RoomSetting from "./components/RoomSetting.jsx";
import {
	context as socket,
	contextProps,
} from "./custom-hooks/socket-reducer.js";
import { useState } from "react";
import useLocalStorage from "./custom-hooks/useLocalStorage.js";
import { Container } from "react-bootstrap";
import Conversation from "./components/Conversation.jsx";
function App() {
	const [id, setID] = useLocalStorage("id");

	return (
		<Container className="d-flex gap-4 p-3">
			<div className="flex-grow-1 flex-shrink-0">
				<RoomSetting id={id} />
			</div>
			<div>
			<RoomVerification setID={setID} />
			<Conversation />			
			</div>
		</Container>
	);
}

export default App;
