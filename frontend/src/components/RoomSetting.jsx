import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import ChatRoom from "./ChatRoom";
import Contact from "./Contact";

const CONTACT_KEY = "contact";
const CHAT_ROOM_KEY = "chat-room";

const RoomSetting = ({ id }) => {
	const [activeKey, setActiveKey] = useState(CONTACT_KEY);
	return (
		<div style={{ height: "80vh" }} className="d-flex flex-column">
			<Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
				<Nav variant="tabs" className="justify-content-center">
					<Nav.Item>
						<Nav.Link eventKey={CONTACT_KEY}>Contact</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey={CHAT_ROOM_KEY}>Chat Room</Nav.Link>
					</Nav.Item>
				</Nav>
				<Tab.Content className="border-bottom border-right overflow-auto flex-grow-1">
					<Tab.Pane eventKey={CONTACT_KEY}>
						<Contact />
					</Tab.Pane>
					<Tab.Pane eventKey={CHAT_ROOM_KEY}>
						<ChatRoom />
					</Tab.Pane>
				</Tab.Content>
				<div className="text-muted">Your id is: {id}</div>
			</Tab.Container>
		</div>
	);
};

export default RoomSetting;
