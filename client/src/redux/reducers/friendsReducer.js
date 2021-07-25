import { FRIENDS } from "../constants/action-types";

const initialState = {
    friends: [],
};
const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FRIENDS:
            return Object.assign({}, state, {
                friends: action.payload,
            });
        default:
            return state;
    }
};

export default friendsReducer;
