import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactsProvider from "./components/context/ContactsProvider.jsx";
import ConversationProvider from "./components/context/ConversationProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContactsProvider>
			<ConversationProvider>
				<App />
			</ConversationProvider>
		</ContactsProvider>
	</React.StrictMode>
);
