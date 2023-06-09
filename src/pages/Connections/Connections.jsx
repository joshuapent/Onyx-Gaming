import ChatPage from "../../components/ChatPage/ChatPage";
import { Routes, Route, Link } from "react-router-dom";
import "./Connections.css";
import Invitations from "../../components/Invitations/Invitations";
import ChatListPage from "../../components/ChatListPage/ChatListPage";
import React, { useState, useEffect } from "react";
import { myChats } from "../../utilities/chat-api";
import ConnectBg from "../../components/ConnectBg/ConnectBg";

export default function Connections({ user }) {
  const [chatOpen, setChatOpen] = useState(false);

  const [chats, setChats] = useState(null);

  const [chatID, setChatID] = useState(null);

  function handleChat(chatID) {
    chatOpen ? setChatOpen(false) : setChatOpen(true);
    setChatID(chatID);
  }

  useEffect(
    function () {
      async function effectFunction() {
        const chats = await myChats(user._id);
        setChats(chats);
      }
      effectFunction();
    },
    [user._id]
  );

  return (
    <section>
      <main className="chatcont">
        <div className="connections">
          <div className="connections-links">
            <Link className="connections-link" to="chat/">
              Chats
            </Link>
            &nbsp; | &nbsp;
            <Link className="connections-link" to="invitations/">
              Invitations
            </Link>
          </div>
          <div className="connections-routes">
            <div className="connections-page">
              <Routes>
                {!chatOpen ? (
                  <Route
                    path="/chat"
                    element={
                      <ChatListPage
                        chats={chats}
                        user={user}
                        handleChat={handleChat}
                      />
                    }
                  ></Route>
                ) : (
                  <Route
                    path="/chat"
                    element={
                      <ChatPage
                        chatID={chatID}
                        user={user}
                        handleChat={handleChat}
                      />
                    }
                  ></Route>
                )}
                <Route
                  path="/invitations"
                  element={<Invitations user={user} />}
                ></Route>
              </Routes>
            </div>
          </div>
        </div>
      </main>
      <ConnectBg className="bg" />
    </section>
  );
}
