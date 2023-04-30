import React, { useState } from "react";
import "./Account.css";
import { removeUser, updateBio, updateRating } from "../../utilities/users-api";
import scanlines from "../../assets/scanlines.png";
import bezel from "../../assets/bezel.png";
import TerminalIcon from '@mui/icons-material/Terminal';

function Account({ user, games }) {
  const [account, setAccount] = useState(user);
  console.log(account);

  return (
    <div className="profile-page">
      <img src={scanlines} alt="" id="scan" className="noselect" />
      <img src={bezel} alt="" className="bezel" />
      <div className="profile">
        <h1 className="terminal">WELCOME, {user.gamertag.toUpperCase()} TO YOUR TERMINAL <TerminalIcon fontSize="large"/></h1>
        <div className="staticParent"><div className="static">Update your Account information here!</div></div>
        <h1 className="gamer-tag">Gamer-Tag:</h1>
        <div className="profile-details">
          <form>
          <button className="update-profile-btn">Update</button>
          </form>
          <form>
          <button className="update-profile-btn">Update</button>
          </form>
        </div>
        <div className="typewrtie">
          
        </div>
      </div>
    </div>
  );
}

export default Account;
