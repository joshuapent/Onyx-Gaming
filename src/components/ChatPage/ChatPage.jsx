import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { aChat } from "../../utilities/chat-api";
import { getUser } from "../../utilities/users-api";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SendIcon from '@mui/icons-material/Send';
import { findMessages, newMessage } from "../../utilities/messages-api";

function ChatPage({ user, handleChat, chatID }) {
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState([]);
  const [chatRoom, setchatRoom] = useState(null);
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    async function setRoom() {
      const newRoom = await aChat(chatID);
      setchatRoom(newRoom);
      // const chatUsers = await findUsers(newRoom.users)
    }
    setRoom();
  }, [chatID]);

  useEffect(() => {
    async function chatUsers() {
      if (chatRoom.users[0] !== user._id) {
        const friend = await getUser(chatRoom.users[0]);
        setFriend(friend);
      } else {
        const friend = await getUser(chatRoom.users[1]);
        setFriend(friend);
      }
    }
    chatRoom && chatUsers();
  }, [chatRoom]);

  const socketRef = useRef();

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io({
        autoConnect: false,
      });
    }
    const socket = socketRef.current;

    socket.connect();

    chatRoom && socket.emit("enter_convo", chatRoom._id);

    socket.on("newMsg", (msg) => {
      setMsgs((msgs) => [...msgs, msg]);
    });

    return () => {
      socket.off("newMsg");
      socket.disconnect();
    };
  }, [chatRoom]);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = { msg: input, user: user.gamertag, id: user._id };
    try {
      // await newMessage({sender_id: user._id, text: input, chatID: chatRoom._id})
      setMsgs((msgs) => [...msgs, data]);
      console.log(chatRoom._id);
      socketRef.current.emit("sendMsg", data, chatRoom._id);
      setInput("");
    }
    catch (err) {
      console.log(err)
    }
  }

  function handleChange(e) {
    setInput(e.target.value);
  }
  return (
    <div className="ChatPage">
      <div className="chattp">
        <h1 className="chatwith">Chat with {friend && friend.gamertag}</h1>
        <button className="exit" onClick={handleChat}><ExitToAppIcon fontSize="large" /><span>Exit Chat</span> </button>
      </div>
      <div className="chat-box">
        <ul className="chat-items">
          {msgs.map((data, idx) => {
            return (
              <li className={data.id === user._id ? 'homeClass' : 'guestClass'} key={data + idx}>
                {data.id === user._id ? 
                  <p className="user-message" ><span className="user-message-text">{data.msg}</span> {data.user}</p>
                  :
                  <p className="user-message" >{data.user} <span className="user-message-text">{data.msg}</span></p>
                  }
              </li>
            );
          })}
        </ul>
      </div>
      <div className="chat-wrapper">
        <form className="msgbx" onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={handleChange} />
          <button className="sendbtn" type="submit"><SendIcon  fontSize="large"/><span>Send</span></button>
        </form>
      </div>
    </div>
  );
}

export default ChatPage;
