import ChatPage from "../../components/ChatPage/ChatPage";

export default function Connections({user}) {  
    return (
      <div className="connections">
        <h1>Connections</h1>
        <div>
            <ChatPage user={user}/>
        </div>
      </div>
    );
  }