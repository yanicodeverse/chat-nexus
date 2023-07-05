import React, {
	Children,
	createContext,
	useCallback,
	useContext,
	useState,
} from "react";
import useLocalStorage from "../../custom-hooks/useLocalStorage";
import { useContact } from "./ContactsProvider";

const ConversationContext = createContext();

export const useConversation = () => useContext(ConversationContext);

export default function ConversationProvider({ children }) {
	const { contacts } = useContact();
	const [conversations, setConversations] = useLocalStorage(
		"conversations",
		[]
	);
	const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);

	function createConversation(recipient) {
		setConversations((prevConversation) => {
			return [...prevConversation, { recipient, messages: [] }];
		});
	}

	const addMessageToConversation = useCallback(
		({ recipients, text, sender }) => {
			setConversations((prevConversations) => {
				let madeChange = false;
				const newMessage = { sender, text };
				const newConversations = prevConversations.map((conversation) => {
					if (arrayEquality(conversation.recipient, recipients)) {
						madeChange = true;
						return {
							...conversation,
							message: [...conversation.message, newMessage],
						};
					}
					return conversation;
				});
				if (madeChange) {
					return newConversations;
				} else {
					return [
						...prevConversations,
						{
							recipients,
							message: [newMessage],
						},
					];
				}
			});
		},
		[setConversations]
	);

	const formattedConversations = conversations.map((conversation, index) => {
		const recipient = conversation.recipient.map((recipient) => {
			const contact = contacts.find((contact) => {
				return contact.id === recipient; // by  this we can get the contact name corresponding recipient id.
			});
			const name = (contact && contact.name) || recipient;
			return { id: recipient, name };
		});
		const selected = index === selectedConversationIndex;
		return { ...conversation, recipient, selected };
	});

	const value = {
		conversations: formattedConversations,
		createConversation,
		selectedConversation: formattedConversations[selectedConversationIndex],
		selectedConversationIndex: setSelectedConversationIndex,
	};
	return (
		<ConversationContext.Provider value={value}>
			{children}
		</ConversationContext.Provider>
	);
}
