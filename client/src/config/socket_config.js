import { io } from "socket.io-client";
import Cookies from "js-cookie";

const connestSid = () => {
    if (Cookies.get("connect.sid")) {
        return Cookies.get("connect.sid").replace("s:", "").split(".")[0];
    }
};
const URL = "http://localhost:8000";
const socket = io(URL, {
    query: `session_id=${connestSid()}`,
    autoConnect: false,
    transports: ["websocket"],
    withCredentials: true,
});

export default socket;
