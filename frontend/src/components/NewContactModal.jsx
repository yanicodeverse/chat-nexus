import React, { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContact } from "./context/ContactsProvider";

export default function NewContactModal({ closeModal }) {
	const idRef = useRef();
	const nameRef = useRef();
	const { createContact } = useContact();
	function handleSubmit(e) {
		e.preventDefault();
		createContact(idRef.current.value, nameRef.current.value);
		closeModal();
	}
	return (
		<>
			<Modal.Header closeButton>Add Contact</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label>ID</Form.Label>
						<Form.Control type="text" ref={idRef} required></Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" ref={nameRef} required></Form.Control>
					</Form.Group>
					<Button type="submit" className="mt-4">
						Create
					</Button>
				</Form>
			</Modal.Body>
		</>
	);
}
