import ChatPage from "../../components/ChatPage/ChatPage";
import { Routes, Route, Link } from 'react-router-dom';
import './Connections.css';
import Invitations from "../../components/Invitations/Invitations";


export default function Connections({user}) {  
    return (
      <div className="connections">
        <h1>Connections</h1>
        <div className="connections-links">
            <Link className="connections-link" to="chat/">Chat</Link>
            &nbsp; | &nbsp;
            <Link className="connections-link" to="invitations/">Invitations</Link>
        </div>
        <div className="connections-routes">
            <Routes>
                <Route path="/chat" element={< ChatPage user={user}/>}></Route>
                <Route path="/invitations" element={< Invitations user={user} />}></Route>
            </Routes>
        </div>
      </div>
    );
  }