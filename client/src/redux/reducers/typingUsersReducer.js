import { TYPINGUSERS } from "../constants/action-types";
import { MARKTYPINGSTOP } from "../constants/action-types";

const initialState = {
    typingUsers: [],
};
const typingUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPINGUSERS:
            if (!state.typingUsers.includes(action.payload)) {
                return {
                    ...state,
                    typingUsers: [...state.typingUsers, action.payload],
                };
            }
            return state;
        case MARKTYPINGSTOP:
            if (state.typingUsers.includes(action.payload)) {
                return {
                    typingUsers: state.typingUsers.filter(
                        (typingUsers) => typingUsers != action.payload
                    ),
                };
            }
            return state;
        default:
            return state;
    }
};

export default typingUsersReducer;
