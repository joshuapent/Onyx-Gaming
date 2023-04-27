import ChatPage from "../../components/ChatPage/ChatPage";
import { Routes, Route, Link } from 'react-router-dom';
import './Connections.css';
import Invitations from "../../components/Invitations/Invitations";
import ChatListPage from "../../components/ChatListPage/ChatListPage";
import React, { useState, useEffect, useRef } from "react";


export default function Connections({user}) {  
    const [chatOpen, setChatOpen] = useState(false)

    function handleChat() {
      chatOpen ?
        setChatOpen(false)
        :
        setChatOpen(true)
    }

    return (
      <div className="connections">
        <h1>Connections</h1>
        <div className="connections-links">
            <Link className="connections-link" to="chat/">Chat</Link>
            &nbsp; | &nbsp;
            <Link className="connections-link" to="invitations/">Invitations</Link>
        </div>
        <div className="connections-routes">
          <div className="connections-page">
            <Routes>
              {!chatOpen ?
                <Route path="/chat" element={< ChatListPage user={user} handleChat={handleChat}/>}></Route>
                :
                <Route path="/chat" element={< ChatPage user={user} handleChat={handleChat}/>}></Route>
              }
              <Route path="/invitations" element={< Invitations user={user} />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    );
  }