import React, { Children, createContext, useContext } from "react";
import useLocalStorage from "../../custom-hooks/useLocalStorage";
import { useContact } from "./ContactsProvider";

const ConverSationContext = createContext();

export const userConversation = () => useContext(ConverSationContext);

export default function ConversationProvider({ children }) {
	const { contacts } = useContact();
	const [conversations, setConversations] = useLocalStorage(
		"conversations",
		[]
	);

	function createConversation(recipient) {
		setConversations((prevConversation) => {
			return [...prevConversation, { recipient, messages: [] }];
		});
	}

	const formattedConversation = conversations.map((conversation, index) => {
		const recipients = conversation.recipients.map((recipient) => {
			const contact = contacts.find((contact) => contact.id == recipient);
            const name = (contact && contact.name) || recipient
            return  {id: recipient, name}
		});
	});
	return (
		<ConverSationContext.Provider value={{ conversations, createConversation }}>
			{children}
		</ConverSationContext.Provider>
	);
}
