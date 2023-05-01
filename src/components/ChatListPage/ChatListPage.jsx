 function ChatListPage({ chats, user, handleChat}) {
  return (
    <div className="user-chat">
        {chats &&
            chats.map((chat, idx) => {
                return (
                    <div key={chat + idx} className="individual-chat">
                        <div className="chat-users">
                            {chat.users.map((usermap, idx) => {
                                if (usermap._id !== user._id) return (
                                    <h3 key={usermap + idx}>{usermap.gamertag}</h3>
                                )
                            })
                            }
                        </div>
                        <button className="chat-users-open" onClick={() => handleChat(chat._id)}>Chat</button>
                    </div>
                )
            })
        }
    </div>
  );
}

export default ChatListPage;
