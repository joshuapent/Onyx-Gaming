import React, { useState, useEffect, useRef } from "react";
import "./Invitations.css";

function Invitations({ user }) {
    const invites = [{name: 'john'}]

  return (
    <div className="Invitations">
      <h1>Invitations (number)</h1>
      <ul>
          {invites.map((invite) => {
            return (
              <li>
                <span>{invite.name}: </span>
                <button>Accept</button>
              </li>
            );
          })}
        </ul>
    </div>
  );
}

export default Invitations;
