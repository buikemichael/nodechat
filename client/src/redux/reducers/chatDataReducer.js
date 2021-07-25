import { CHAT_DATA } from "../constants/action-types";

const initialState = {
    chatData: [],
};
const chatDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHAT_DATA:
            return Object.assign({}, state, {
                chatData: action.payload,
            });
        default:
            return state;
    }
};

export default chatDataReducer;
