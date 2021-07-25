import { SHOW_MESSAGES } from "../constants/action-types";
import { CHAT_DATA } from "../constants/action-types";
import { USER_DATA } from "../constants/action-types";
import { ADD_MESSAGE } from "../constants/action-types";
import { FRIENDS } from "../constants/action-types";
import { OPENCHAT } from "../constants/action-types";
import { ONLINEUSERS } from "../constants/action-types";
import { MARKOFFLINE } from "../constants/action-types";
import { TYPINGUSERS } from "../constants/action-types";
import { MARKTYPINGSTOP } from "../constants/action-types";

export function showMessages(payload) {
    return { type: SHOW_MESSAGES, payload };
}

export function chatData(payload) {
    return { type: CHAT_DATA, payload };
}

export function userData(payload) {
    return { type: USER_DATA, payload };
}

export function addMessage(payload) {
    return { type: ADD_MESSAGE, payload };
}

export function friends(payload) {
    return { type: FRIENDS, payload };
}
export function openChat(payload) {
    return { type: OPENCHAT, payload };
}
export function onlineUsers(payload) {
    return { type: ONLINEUSERS, payload };
}
export function markOffline(payload) {
    return { type: MARKOFFLINE, payload };
}
export function typingUsers(payload) {
    return { type: TYPINGUSERS, payload };
}
export function markTypingStop(payload) {
    return { type: MARKTYPINGSTOP, payload };
}
