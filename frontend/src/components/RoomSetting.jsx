import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import ChatRoom from "./ChatRoom";
import Contact from "./Contact";
import NewContactModal from "./NewContactModal";
import NewConversationModal from "./NewConversationModal";

const CONTACT_KEY = "contact";
const CHAT_ROOM_KEY = "chat-room";

const RoomSetting = ({ id }) => {
	const [activeKey, setActiveKey] = useState(CONTACT_KEY);
	const conversationOpen = activeKey == CONTACT_KEY;
	const [modalOpen, setModalOpen] = useState(false);
	function closeModal() {
		setModalOpen(false);
	}
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
				<Tab.Content
					className="overflow-auto flex-grow-1"
					style={{
						borderRight: "1px solid var(--bs-gray-200)",
						borderBottom: "1px solid var(--bs-gray-200",
						borderLeft: "1px solid var(--bs-gray-200",
					}}
				>
					<Tab.Pane eventKey={CONTACT_KEY}>
						<Contact />
					</Tab.Pane>
					<Tab.Pane eventKey={CHAT_ROOM_KEY}>
						<ChatRoom />
					</Tab.Pane>
				</Tab.Content>
				<div className="text-muted p-2" style={{ fontSize: ".8rem" }}>
					Your id is: {id}
				</div>
				<Button onClick={() => setModalOpen(true)}>New {conversationOpen ? CONTACT_KEY : "Conversation"}</Button>
			</Tab.Container>
			<Modal show={modalOpen} onHide={closeModal}>
			{conversationOpen ?
				<NewContactModal closeModal={closeModal}/>: <NewConversationModal closeModal={closeModal}/>}
			</Modal>
		</div>
	);
};

export default RoomSetting;
