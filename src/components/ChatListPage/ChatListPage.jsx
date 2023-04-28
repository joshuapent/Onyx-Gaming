import React, { useState, useEffect, useRef } from "react";


function ChatListPage({ chats, user, handleChat}) {
  return (
    <div className="user-chat">
        {chats &&
            chats.map((chat, idx) => {
                return (
                    <div key={chat + idx} className="individual-chat">
                        <div className="chat-users">
                            {chat.users.map((user, idx) => {
                                return (
                                    <h1 key={user + idx}>{user.name}</h1>
                                )
                            })
                            }
                        </div>
                        <button onClick={() => handleChat(chat._id)}>Open</button>
                    </div>
                )
            })
        }
    </div>
  );
}

export default ChatListPage;
