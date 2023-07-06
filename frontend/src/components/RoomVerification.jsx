import { useRef, useState } from "react";
import { v4 } from "uuid";
import { Form, Button, Toast, ToastContainer } from "react-bootstrap";
const RoomVerification = ({ setID, id }) => {
	const idRef = useRef();
	const [toastShow, setToastShow] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		setID(idRef.current.value);
		setToastShow(true)
	}

	function createNewID() {
		setID(v4());
	}

	return (
		<div className="flex-size-200">
			<Form className="w-100" onSubmit={handleSubmit}>
				<Form.Group className="mb-2">
					<Form.Label>Enter your id</Form.Label>
					<Form.Control type="text" ref={idRef}/>
				</Form.Group>
				<Button type="submit" style={{ marginRight: "10px" }}  >
					Join
				</Button>
				<Button variant="secondary" onClick={createNewID} style={{ marginRight: "10px" }}>
					Create a new ID
				</Button>
				<Button variant="danger" onClick={() => localStorage.removeItem("chat-app-id")}>Close chat</Button>
			</Form>
			<ToastContainer
				position="top-start"
				className="p-3"
				style={{ zIndex: 1 }}
			>
				<Toast
					className="d-inline-block m-1"
					show={toastShow}
					onClose={() => setToastShow(false)}
					delay={3000}
					autohide
					bg={"success"}
				>
					<Toast.Header>
						<strong className="me-auto">Message</strong>
					</Toast.Header>
					<Toast.Body className="text-white">
						You have joined chat nexus. Thank you!!
					</Toast.Body>
				</Toast>
			</ToastContainer>
		</div>
	);
};

export default RoomVerification;
