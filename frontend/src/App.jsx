import RoomVerification from "./components/RoomVerification.jsx";
import RoomSetting from "./components/RoomSetting.jsx";
import useLocalStorage from "./custom-hooks/useLocalStorage.js";
import { Container } from "react-bootstrap";
import Conversation from "./components/Conversation.jsx";
import ContactsProvider from "./components/context/ContactsProvider.jsx";
import ConversationProvider from "./components/context/ConversationProvider.jsx";
import SocketProvider from "./components/context/SocketProvider.jsx";
function App() {
	const [id, setID] = useLocalStorage("id");

	return (
		<SocketProvider>
			<ContactsProvider>
				<ConversationProvider>
					<Container className="d-flex gap-4 p-3">
						<div className="flex-grow-1 flex-shrink-0">
							<RoomSetting id={id} />
						</div>
						<div>
							<RoomVerification setID={setID} />
							<Conversation />
						</div>
					</Container>
				</ConversationProvider>
			</ContactsProvider>
		</SocketProvider>
	);
}

export default App;
