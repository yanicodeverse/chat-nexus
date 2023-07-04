import { useRef } from "react";
import { v4 } from "uuid";
import { Container, Form, Button } from "react-bootstrap";
const RoomVerification = ({ setID }) => {
	const idRef = useRef();
	function handleSubmit(e) {
		e.preventDefault();
		setID(idRef.current.value);
	}
	function createNewID() {
		setID(v4());
	}
	return (
		<div className="flex-size-200">
		<Form className="w-100" onSubmit={handleSubmit}>
			<Form.Group className="mb-2">
				<Form.Label>Enter your id</Form.Label>
				<Form.Control type="text" ref={idRef} />
			</Form.Group>
			<Button type="submit" style={{ marginRight: "10px" }}>
				Join
			</Button>
			<Button variant="secondary" onClick={createNewID}>
				Create a new ID
			</Button>
		</Form>
		</div>
	);
};

export default RoomVerification;
