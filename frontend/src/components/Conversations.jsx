import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversation } from "./context/ConversationProvider";

export default function Conversations() {
	const { conversations, selectedConversationIndex } = useConversation();
	return (
		<ListGroup variant="flush">
			{conversations.length ? conversations.map((conversation, index) => (
				<ListGroup.Item
					key={index}
					action
					active={conversation.selected}
					onClick={() => selectedConversationIndex(index)}
				>
					{conversation.recipients.map((r) => r.name).join(", ")}
				</ListGroup.Item>
			)) : <p className="text-muted p-2">Start chatting with your friends by creating a conversation.</p>}
		</ListGroup>
	);
}
