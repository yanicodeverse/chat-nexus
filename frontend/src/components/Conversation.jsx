import React from "react";
import { ListGroup, Card } from "react-bootstrap";
import { useActiveContact } from "./context/ActiveContactProvider";

export default function Conversation() {
	const { activeContacts } = useActiveContact();
	return (
		<>
			<Card className="mt-3 p-2">
				<h3>Active</h3>
				<ListGroup>
					{activeContacts.map((contact) => {
						const { id, name, isActive } = contact;
						return (
							<ListGroup.Item
								key={id}
								className="d-flex justify-content-between align-items-center"
								style={{ fontSize: "1.2rem" }}
							>
								{name}
								{isActive ? (
									<span className="fs-2 d-flex justify-content-center text-success">
										•
									</span>
								) : (
									<span className="fs-2 d-flex justify-content-center text-secondary">
										•
									</span>
								)}
							</ListGroup.Item>
						);
					})}
				</ListGroup>
			</Card>
		</>
	);
}
