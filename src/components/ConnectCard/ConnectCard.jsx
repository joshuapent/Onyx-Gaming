import React, { useState, useEffect, useRef } from "react";
import { connectUsers } from "../../utilities/chat-api";

function ConnectCard({users, handleIdxChange, idx, user}) {
    console.log(users)
    let userView = users[idx]

    const [userData, setUserData] = useState();

    useEffect(() => {
        if (userData) {
            connectUsers(userData)
        }
    }, [userData]) 

    async function handleButton() {
        try {
          setUserData({users: [userView, user]})
        } catch(err) {
          console.log(err)
        }
    }

    function callFunctions() {
        handleButton()
        handleIdxChange()
    }

  return (
    <>
        <div className="connect-card-nameplate">
            <h1>{userView && userView.name}</h1>
        </div>
         <div className="connect-card-body">
            {userView && userView.bio ? 
                    <p>{userView.bio}</p> : 
                    <p>This user has not yet set up a bio</p>
            }           </div>
        <div className="connect-card-footer">
            <div className="stats">
            {userView && userView.games ? 
                <h3>Games: {userView.games}</h3> : 
                <h3>Games: N/A</h3>
            }   
                &nbsp; <h3>|</h3> &nbsp; 
            {userView && userView.rating ?
                <h3>Rating: {userView && userView.rating}</h3> :
                <h3>Rating: N/A</h3>
            }
            </div>
            <div className="choice">
                <button onClick={handleIdxChange}>Not Interested</button>
                <button onClick={callFunctions}>Connect!</button>
            </div>
        </div>
    </>
  );
}

export default ConnectCard;
