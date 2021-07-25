import { combineReducers } from "redux";
import showMessagesReducer from "./showMessageReducer";
import chatDataReducer from "./chatDataReducer";
import userDataReducer from "./userDataReducer";
import friendsReducer from "./friendsReducer";
import openChatReducer from "./openChatReducer";
import onlineUsersReducer from "./onlineUsersReducer";
import typingUsersReducer from "./typingUsersReducer";

const rootReducer = combineReducers({
    messages: showMessagesReducer,
    chatData: chatDataReducer,
    userData: userDataReducer,
    friends: friendsReducer,
    openChat: openChatReducer,
    onlineUsers: onlineUsersReducer,
    typingUsers: typingUsersReducer,
});

export default rootReducer;
