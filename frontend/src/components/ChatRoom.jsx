import React, { useCallback, useState } from "react";
import { useConversation } from "./context/ConversationProvider";
import { InputGroup, Form, Button } from "react-bootstrap";

export default function ChatRoom() {
	const [text, setText] = useState("");

	const setRef = useCallback(() => {
		// console.log(node)
		// if (node) {
		// 	node.scrollIntoView({ smooth: true });
		// }
	}, []);

	const { selectedConversation, sendMessage } = useConversation();

	function handleSubmit(e) {
		e.preventDefault();
		sendMessage(
			selectedConversation.recipients.map((r) => r.id),
			text
		);
		setText("");
	}
	return (
		<div className="d-flex flex-column">
			<div className="flex-grow-1 overflow-auto" style={{ height: "50vh" }}>
				<div className="d-flex flex-column align-items-start justify-content-end px-3">
					{selectedConversation.messages.map((message, index) => {
						const lastMessage =
							selectedConversation.message.length - 1 === index;
						return (
							<div
								ref={lastMessage ? setRef : null}
								key={index}
								className={`my-1 d-flex flex-column ${
									message.fromMe
										? "align-self-end align-items-end"
										: "align-items-start"
								}`}
							>
								<div
									className={`rounded px-2 py-1 ${
										message.fromMe ? "bg-primary text-white" : "border"
									}`}
								>
									{message.text}
								</div>
								<div
									className={`text-muted small ${
										message.fromMe ? "text-right" : ""
									}`}
								>
									{message.fromMe ? "You" : message.senderName}
								</div>
							</div>
						);
					})}
				</div>
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
