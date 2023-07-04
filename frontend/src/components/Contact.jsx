import React from "react";
import { useContact } from "./context/ContactsProvider";
import { ListGroup } from "react-bootstrap";

export default function Contact() {
	const { contacts } = useContact();
	return (
		<ListGroup variant="flush">
			{contacts.map((contact) => {
				return <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>;
			})}
		</ListGroup>
	);
}
