import React, { useState, useEffect, useRef } from "react";

function ConnectCard({user}) {

  return (
    <>
        <div className="connect-card-nameplate">
            <h1>{user.gamertag}</h1>
        </div>
        <div className="connect-card-body">
            <h1>{user.bio}</h1>
        </div>
        <div className="connect-card-footer">
            <h1>Games: {user.games}</h1> 
            <h1>Rating: {user.rating}</h1>
        </div>
    </>
  );
}

export default ConnectCard;
