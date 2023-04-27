import React, { useState, useEffect, useRef } from "react";

function ChatListPage({ user, handleChat}) {


  return (
    <div className="user-chat">
        <button onClick={handleChat}>Chat</button>
    </div>
  );
}

export default ChatListPage;
