import { ADDONLINEUSERS } from "../constants/action-types";
import { ONLINEUSERS } from "../constants/action-types";
import { MARKOFFLINE } from "../constants/action-types";

const initialState = {
    onlineUsers: [],
};
const onlineUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ONLINEUSERS:
            return {
                onlineUsers: action.payload,
            };
        case ADDONLINEUSERS:
            if (!state.onlineUsers.includes(action.payload)) {
                return {
                    ...state,
                    onlineUsers: [...state.onlineUsers, action.payload],
                };
            }
            return state;
        case MARKOFFLINE:
            if (!state.onlineUsers.includes(action.payload)) {
                return state.onlineUsers.filter(
                    (onlineUser) => onlineUser !== action.payload
                );
            }
            return state;
        default:
            return state;
    }
};

export default onlineUsersReducer;
