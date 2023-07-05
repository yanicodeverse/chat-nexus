import React, { useState } from "react";
import { useConversation } from "./context/ConversationProvider";
import { InputGroup, Form, Button } from "react-bootstrap";

export default function ChatRoom() {
	const { selectedConversation, sendMessage } = useConversation();
	const [text, setText] = useState("");
	function handleSubmit(e) {
		e.preventDefault();
		sendMessage(
			selectedConversation.recipient.map((r) => r.id),
			text
		);
		setText("");
	}
	return (
		<div className="d-flex flex-column">
			<div className="flex-grow-1 overflow-auto">
				{/* <div className="d-flex flex-column align-items-start justify-content-end px-3">
					{selectedConversation.messages.map((message, index) => {
						return (
							<div key={index} className="">
								<div>{message?.text}</div>
								<div>{message?.formMe ? "You" : message?.senderName}</div>
							</div>
						);
					})}
				</div> */}
			</div>
			<Form onSubmit={handleSubmit} className="m-2">
				<Form.Group>
					<InputGroup>
						<Form.Control
							as="textarea"
							required
							value={text}
							onChange={(e) => setText(e.target.value)}
							style={{ height: "75px", resize: "none" }}
						/>
						<Button type="submit">Send</Button>
					</InputGroup>
				</Form.Group>
			</Form>
		</div>
	);
}
