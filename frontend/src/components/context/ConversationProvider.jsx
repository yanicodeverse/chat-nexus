import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import useLocalStorage from "../../custom-hooks/useLocalStorage";
import { useContact } from "./ContactsProvider";
import { useSocket } from "./SocketProvider";

const ConversationContext = createContext();

export const useConversation = () => useContext(ConversationContext);

export default function ConversationProvider({ id, children }) {
	const { contacts } = useContact();
	const socket = useSocket();
	const [conversations, setConversations] = useLocalStorage(
		"conversations",
		[]
	);
	const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);

	function createConversation(recipients) {
		setConversations((prevConversation) => {
			return [...prevConversation, { recipients, messages: [] }];
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
							messages: [...conversation.messages, newMessage],
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

	useEffect(() => {
		if (socket == null) return;
		socket.on("receive-message", addMessageToConversation);
	}, [socket, addMessageToConversation]);

	function sendMessage(recipients, text) {
		socket.emit("send-message", { recipients, text });
		addMessageToConversation({ recipients, text, sender: id });
	}

	const formattedConversations = conversations.map((conversation, index) => {
		const recipients = conversation.recipient.map((recipientID) => {
			const contact = contacts.find((contact) => {
				return contact.id === recipientID; // by  this we can get the contact name corresponding recipient id.
			});
			const name = (contact && contact.name) || recipientID;
			return { id: recipientID, name };
		});
		const messages = conversation.messages.map(message => {
			const contact = contacts.find(contact => {
				return contact.id === message.sender
			})
			const name  = (contact && contact.name) || message.sender
			const fromMe  = id === message.sender
			return {...message, senderName: name, fromMe}
		})
		const selected = index === selectedConversationIndex;
		return {...conversation,  messages, selected, recipients,};
	});

	const value = {
		conversations: formattedConversations,
		createConversation,
		selectedConversation: formattedConversations[selectedConversationIndex],
		selectedConversationIndex: setSelectedConversationIndex,
		sendMessage,
	};
	return (
		<ConversationContext.Provider value={value}>
			{children}
		</ConversationContext.Provider>
	);
}

function arrayEquality(a, b) {
	if (a.length !== b.length) return false;
	a.sort();
	b.sort();

	return a.every((element, index) => {
		return element === b[index];
	});
}
