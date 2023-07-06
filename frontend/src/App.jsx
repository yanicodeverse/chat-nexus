import RoomVerification from "./components/RoomVerification.jsx";
import RoomSetting from "./components/RoomSetting.jsx";
import useLocalStorage from "./custom-hooks/useLocalStorage.js";
import { Container } from "react-bootstrap";
import Conversation from "./components/Conversation.jsx";
import ContactsProvider from "./components/context/ContactsProvider.jsx";
import ConversationProvider from "./components/context/ConversationProvider.jsx";
import SocketProvider from "./components/context/SocketProvider.jsx";
import ActiveContactProvider from "./components/context/ActiveContactProvider.jsx";
function App() {
	const [id, setID] = useLocalStorage("id");

	return (
		<SocketProvider id={id}>
			<ContactsProvider>
				<ConversationProvider id={id}>
					<Container className="d-flex gap-4 p-3">
						<div className="flex-grow-1">
							<RoomSetting id={id} />
						</div>
						<div>
							<RoomVerification setID={setID} id={id}/>
							<ActiveContactProvider>
								<Conversation />
							</ActiveContactProvider>
						</div>
					</Container>
				</ConversationProvider>
			</ContactsProvider>
		</SocketProvider>
	);
}

export default App;
