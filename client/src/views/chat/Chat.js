import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
const Chat = ({ location }) => {
  const [name, setname] = useState("");
  const [room, setroom] = useState("");

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:5000";

  let socket;

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setname(name);
    setroom(room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(e);
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);

  return (
    <div className="outterContainer">
      <div className="container">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={e => e.key === 'Enter' ? sendMessage(e) :null}
        ></input>
      </div>
    </div>
  );
};

export default Chat;
