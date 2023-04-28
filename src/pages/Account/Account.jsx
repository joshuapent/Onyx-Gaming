import React, {useState, useEffect} from 'react';
import './Account.css';
import { connectUsers } from "../../utilities/chat-api";

function Account({user}) {

  return (
    <div className="profile-page">
      <h1 className="gamer-tag">Gamer-Tag</h1>
      <div className="profile-details">
        <p><strong>K/D Ratio:</strong></p>
        <p><strong>Favorite Games:</strong></p>
        <p><strong>Personal Bio:</strong> </p>
      </div>
      <button className="update-profile-btn">Update</button>      
    </div>
  );
}


export default Account;