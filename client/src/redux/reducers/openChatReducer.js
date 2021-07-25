import { OPENCHAT } from "../constants/action-types";

const initialState = {
    openChat: false,
};
const openChatReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPENCHAT:
            return Object.assign({}, state, {
                openChat: action.payload,
            });
        default:
            return state;
    }
};

export default openChatReducer;
