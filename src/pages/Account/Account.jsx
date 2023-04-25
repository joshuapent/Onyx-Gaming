import React from 'react';
import './Account.css';

// const Account = () => {
//   return (
//     <div className='card' >
//       <div className='profile-header'>
//         <img className='profile-picture' src="https://i.redd.it/s0u1qmhwg6c21.jpg" alt="Profile" />
//         <h1 className='gamertag'>GamerTag</h1>
//         <p className='kd'>Kill/Death Ratio: 3.25</p>
//         </div>
//     </div>
//   )
// }
// const info = () => {
//   <div className='profile-body'>
//     <h2 className='profile-heading'>Favorite Games</h2>
//       <ul className='favorite-games'>
//         <li>Apex Legends</li>
//         <li>Call of Duty</li>
//         <li>Fortnite</li>
//       </ul>
//     <h2 className='profile-heading'>Bio</h2>
//     <p className='bio'>Oh baby a Triple</p>
//   </div>
// }

function Account(props) {
  const { kdRatio, favoriteGames, profilePicture, gamerTag, personalBio } = props;

  return (
    <div className="profile-page">
      <div className="profile-picture">
        <img src={profilePicture} alt="Profile Picture" className="profile-picture" />
      </div>
      <h1 className="gamer-tag">{gamerTag}</h1>
      <div className="profile-details">
        <p><strong>K/D Ratio:</strong> {kdRatio}</p>
        <p><strong>Favorite Games:</strong> {favoriteGames}</p>
        <p><strong>Personal Bio:</strong> {personalBio}</p>
      </div>
      <button className="update-profile-btn">Update</button>      
    </div>
  );
}


export default Account;