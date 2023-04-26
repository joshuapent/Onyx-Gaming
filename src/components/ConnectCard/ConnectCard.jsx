import React, { useState, useEffect, useRef } from "react";

function ConnectCard({user}) {


  return (
    <>
        <div className="connect-card-nameplate">
            <h1>{user.gamertag}</h1>
        </div>
        <div className="connect-card-body">
            {user.bio ? 
                    <p>{user.bio}</p> : 
                    <p>This user has not yet set up a bio</p>
            }           </div>
        <div className="connect-card-footer">
            {user.games ? 
                <h3>Games: {user.games}</h3> : 
                <h3>Games: N/A</h3>
            }   
                &nbsp; <h3>|</h3> &nbsp; 
            {user.rating ?
                <h3>Rating: {user.rating}</h3> :
                <h3>Rating: N/A</h3>
            }
        </div>
    </>
  );
}

export default ConnectCard;
