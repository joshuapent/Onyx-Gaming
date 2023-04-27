import React, { useState, useEffect, useRef } from "react";

function ConnectCard({users, handleIdxChange, idx}) {
    console.log(users)
    let user = users[idx]
  return (
    <>
        <div className="connect-card-nameplate">
            <h1>{user && user.name}</h1>
        </div>
         <div className="connect-card-body">
            {user && user.bio ? 
                    <p>{user.bio}</p> : 
                    <p>This user has not yet set up a bio</p>
            }           </div>
        <div className="connect-card-footer">
            {user && user.games ? 
                <h3>Games: {user.games}</h3> : 
                <h3>Games: N/A</h3>
            }   
                &nbsp; <h3>|</h3> &nbsp; 
            {user && user.rating ?
                <h3>Rating: {user && user.rating}</h3> :
                <h3>Rating: N/A</h3>
            }
            <button onClick={handleIdxChange}>Connect!</button>
            <button onClick={handleIdxChange}>Not Interested</button>
        </div>
    </>
  );
}

export default ConnectCard;
