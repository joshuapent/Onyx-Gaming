import React, { useState } from "react";
import "./Account.css";
import { removeUser, updateBio, updateRating } from "../../utilities/users-api";
import scanlines from "../../assets/scanlines.png";
import bezel from "../../assets/bezel.png";
import TerminalIcon from '@mui/icons-material/Terminal';

function Account({ user, setUser}) {
  const [account, setAccount] = useState(user);
  const [input, setInput] = useState('');

  function handleChange(e) {
    setInput(e.target.value);
  }

  async function submitBio(e) {
    e.preventDefault()
    const bio = {bio: input};
    console.log(bio, user._id)
    setInput('');
    try {
      await updateBio(user._id, bio)
    } catch (err) {
      console.log(err)
    }
  }

  async function submitKD(e) {
    e.preventDefault()
    const KD = {rating: input};
    setInput('');
    setUser(...user, KD)
    try {
      await updateRating(user._id, KD)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="profile-page">
      <img src={scanlines} alt="" id="scan" className="noselect" />
      <img src={bezel} alt="" className="bezel" />
      <div className="profile">
        <h1 className="terminal">WELCOME, {user.gamertag.toUpperCase()} TO YOUR TERMINAL <TerminalIcon fontSize="large"/></h1>
        <div className="staticParent"><div className="static">Update your Account information here!</div></div>
        <div className="profile-details">
          <form onSubmit={submitBio}>
            <label htmlFor="Bio">Tell us about you!</label>
            <input type="text" name="Bio" onChange={handleChange} placeholder={user.bio}/>
            <button type="Submit" className="update-profile-btn">Update</button>
          </form>
          <form onSubmit={submitKD}>
            <label htmlFor="K/D">What's Your K/D</label>
            <input type="number" name="K/D" placeholder={user.rating} onChange={handleChange}/>
            <button type="Submit" className="update-profile-btn">Update</button>
          </form>
        </div>
        <div className="typewrtie">
          
        </div>
      </div>
    </div>
  );
}

export default Account;
