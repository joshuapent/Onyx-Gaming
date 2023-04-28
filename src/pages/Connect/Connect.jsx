import ConnectCard from '../../components/ConnectCard/ConnectCard';
import './Connect.css'
import { getUsers } from '../../utilities/users-api';
import { useState, useEffect } from 'react';



export default function Connect({user}) {  

  const [users, setUsers] = useState(getUsers);
  const [idx, setIdx] = useState(0);

  useEffect(function() {
    async function allUsers() {
      const users = await getUsers()
      setUsers(users)
    }
    allUsers();
  }, []);

  function handleIdxChange() {
    setIdx(idx + 1)
    return idx
  }


  return (
    <div className="connect">
      <div className="connect-header">
        <h1>Connect</h1>
      </div>
      <div className="connect-card">
        <ConnectCard users={users} idx={idx} handleIdxChange={handleIdxChange} user={user}/>
      </div>
      <div className='wrapper'>
      <div className='top-panel'></div>
      <div className='bottom-panel'></div>
    </div>
    </div>
  );
}