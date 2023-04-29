import React, { useState } from "react";
import "./Account.css";
import { removeUser, updateBio, updateRating } from "../../utilities/users-api";

function Account({user, games}) {
  const [account, setAccount] = useState(user)
  console.log(account)


  return (
    <div className="profile-page">
      <h1 className="gamer-tag">Gamer-Tag</h1>
      <div className="profile-details">
        <form action="">

        </form>
      </div>
      <button className="update-profile-btn">Update</button>
    </div>
  );
}

export default Account;
