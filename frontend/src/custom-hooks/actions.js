import { useReducer } from "react";

const initialState = {
	communications: [],
};

function reducer(state, action) {
	switch (action.type) {
		case "chatText":
			console.log(action, state);
			state.communications.push(action.payload);
			return state;
        case "getChats":
            return state
		default:
			throw new Error("Unknown action!!");
	}
}

export const chatController = () => useReducer(reducer, initialState);
