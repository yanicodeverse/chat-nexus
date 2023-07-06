import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversation } from "./context/ConversationProvider";

export default function Conversations() {
	const { conversations, selectedConversationIndex } = useConversation();
	return (
		<ListGroup variant="flush">
			{conversations.map((conversation, index) => (
				<ListGroup.Item
					key={index}
					action
					active={conversation.selected}
					onClick={() => selectedConversationIndex(index)}
				>
					{conversation.recipients.map((r) => r.name).join(", ")}
				</ListGroup.Item>
			))}
		</ListGroup>
	);
}
