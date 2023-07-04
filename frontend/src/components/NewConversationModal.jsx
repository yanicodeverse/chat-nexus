import React, { useRef, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContact } from "./context/ContactsProvider";
import { userConversation } from "./context/ConversationProvider";

export default function NewConversationModal({ closeModal }) {
	const { createConversation } = userConversation();
	const [selectedContactIds, setSelectedContactIds] = useState([]);
	const { contacts } = useContact();
	function handleSubmit(e) {
		e.preventDefault();
		createConversation(selectedContactIds);
		closeModal();
	}
	function handleCheckboxChange(id) {
		setSelectedContactIds((prevContactSelectedIds) => {
			if (prevContactSelectedIds.includes(id)) {
				return prevContactSelectedIds.filter((prevId) => {
					return id != prevId;
				});
			} else {
				return [...prevContactSelectedIds, id];
			}
		});
	}
	return (
		<>
			<Modal.Header closeButton>Add Contact</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					{contacts.map((contact) => {
						return (
							<Form.Group controlId={contact.id} key={contact.id}>
								<Form.Check
									type="checkbox"
									value={selectedContactIds.includes(contact.id)}
									label={contact.name}
									onChange={() => handleCheckboxChange(contact.id)}
								/>
							</Form.Group>
						);
					})}
                    <Button onClick={handleSubmit}>Create</Button>
				</Form>
			</Modal.Body>
		</>
	);
}
