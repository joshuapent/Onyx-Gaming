import React, { useState, useEffect, useRef } from "react";

function ConnectCard({user}) {

  return (
    <>
        <div className="connect-card-nameplate">
            <h1>{user.name}</h1>
        </div>
        <div className="connect-card-body">
            <h1>user.description</h1>
        </div>
        <div className="connect-card-footer">
            <h1>(footer Options)</h1>
        </div>
    </>
  );
}

export default ConnectCard;
