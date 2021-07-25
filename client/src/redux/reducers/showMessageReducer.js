import { SHOW_MESSAGES } from "../constants/action-types";
import { ADD_MESSAGE } from "../constants/action-types";

const initialState = {
    messages: [],
};
const showMessagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MESSAGES:
            return Object.assign({}, state, {
                messages: action.payload,
            });
        case ADD_MESSAGE:
            return { ...state, messages: [...state.messages, action.payload] };
        default:
            return state;
    }
};

export default showMessagesReducer;
