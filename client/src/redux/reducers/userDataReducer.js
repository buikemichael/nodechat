import { USER_DATA } from "../constants/action-types";

const initialState = {
    userData: [],
};
const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DATA:
            console.log(action.payload)
            return Object.assign({}, state, {
                userData: action.payload,
            });
        default:
            return state;
    }
};

export default userDataReducer;