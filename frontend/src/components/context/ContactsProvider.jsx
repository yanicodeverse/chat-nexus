import React, { createContext, useContext } from "react";
import useLocalStorage from "../../custom-hooks/useLocalStorage";

const CreateContext = createContext();

export function useContact() {
	return useContext(CreateContext);
}
export default function ContactsProvider({ children }) {
	
	const [contacts, setContacts] = useLocalStorage("contact", []);
	
	function createContact(id, name) {
		setContacts((prev) => {
			if(!prev) prev = []
			return [...prev, { id, name }];
		});
	}
	return (
		<CreateContext.Provider value={{ contacts, createContact }}>
			{children}
		</CreateContext.Provider>
	);
}
