import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

function Chat() {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState([]);
    useEffect(() => {
        const socket = io("ws://127.0.0.1:3005");
        socket.on("chat message", function (data) {
            setResponse([...response, data]);
        });
    }, [response]);

    const submitForm = (e) => {
        e.preventDefault();
        const socket = io("http://127.0.0.1:3005");
        socket.emit("chat message", message);
        setMessage("");
    };
    const allmsg = response.map((res, key) => <li key={key}>{res}</li>);
    return (
        <>
            <form id="form">
                <input
                    id="input"
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                    value={message}
                    autoComplete="off"
                />
                <button onClick={submitForm}>Send</button>
            </form>
            <ul id="messages">{allmsg}</ul>
        </>
    );
}

export default Chat;
