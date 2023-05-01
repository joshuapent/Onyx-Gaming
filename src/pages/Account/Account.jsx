import React, { useState } from "react";
import "./Account.css";
import { removeUser, updateBio, updateRating } from "../../utilities/users-api";
import scanlines from "../../assets/scanlines.png";
import bezel from "../../assets/bezel.png";
import TerminalIcon from '@mui/icons-material/Terminal';
import { getUser, logOut} from '../../utilities/users-service';

function Account({ user, setUser}) {
  const [account, setAccount] = useState(getUser());
  const [num, setNum] = useState('');
  const [text, setText] = useState('');
  const [deleteForm, setDeleteForm] = useState(false)

  function handleKd(evt) {
    setNum(evt.target.value);
  }

  function handleBio(evt) {
    setText(evt.target.value);
  }

  function removeMyAccount() {
    logOut()
    setUser(null)
    deleteAccount()
  }

  async function deleteAccount() {
    try {
      await removeUser({id: user._id})
    } catch(err) {
      console.log(err)
    }
  }

  async function submitBio(evt) {
    evt.preventDefault();
    const bio = {bio: text};
    console.log(bio, user._id)
    setText('');
    try {
      await updateBio(user._id, bio)
    } catch (err) {
      console.log(err)
    }
  }

  async function submitKD(e) {
    e.preventDefault()
    const KD = {rating: num};
    setNum('');
    try {
      await updateRating(user._id, KD)
    } catch (err) {
      console.log(err)
    }
  }

  function toggleDeleteForm() {
    if (!deleteForm) {
      setDeleteForm(true)
    } else {
      setDeleteForm(false)
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
          <form onSubmit={submitBio} className="bio-form">
            <label htmlFor="Bio">Tell us about you!</label>
            <input type="text" name="Bio" onChange={handleBio} value={text} placeholder={user.bio}/>
            <button type="Submit" className="update-profile-btn">Update</button>
          </form>
          <form onSubmit={submitKD} className="kd-form">
            <label htmlFor="K/D">What's Your K/D</label>
            <input type="number" step=".01" name="K/D" placeholder={user.rating} value={num} onChange={handleKd}/>
            <button type="Submit" className="update-profile-btn">Update</button>
          </form>
          {!deleteForm ? 
            <div>
              <button onClick={toggleDeleteForm}>Delete Account</button>
            </div>
            :
            <div>
              <label htmlFor="deleteformbutton">Are you sure you want to delete your account?</label>
              <button name="deleteformbutton" onClick={removeMyAccount}>Yes!</button>
              <button name="changedmymind" onClick={toggleDeleteForm}>No I've changed my mind</button>
            </div>
          }
        </div>
        <div className="typewrtie">
          
        </div>
      </div>
    </div>
  );
}

export default Account;
