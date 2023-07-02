import { useState } from "react";
import { MgsContainer, IdAndDisplayName } from "./exports/export.js";
import "./App.css";

function App() {
	const [disabled, setIsDisabled] = useState(true);
	const [myID, setID] = useState("");
	const [displayName, setDisplayName] = useState("");

	return (
		<>
			<MgsContainer disabled={disabled} />
			<IdAndDisplayName
				setIsDisabled={setIsDisabled}
				setID={setID}
				myID={myID}
				displayName={displayName}
				setDisplayName={setDisplayName}
			/>
		</>
	);
}

export default App;
