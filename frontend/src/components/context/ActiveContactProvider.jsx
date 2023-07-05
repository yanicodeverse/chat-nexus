import React, { createContext, useCallback, useContext } from "react";
import { useContact } from "./ContactsProvider";

const ActiveContactContext = createContext();

export function useActiveContact() {
	return useContext(ActiveContactContext);
}

export default function ActiveContactProvider({ children }) {
	const { contacts } = useContact();
	const activeContacts = contacts.map((contact) => {
		return { ...contact, isActive: false };
	});
	return (
		<ActiveContactContext.Provider value={{ activeContacts }}>
			{children}
		</ActiveContactContext.Provider>
	);
}
