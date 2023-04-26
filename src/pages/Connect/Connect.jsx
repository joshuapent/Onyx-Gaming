import ConnectCard from '../../components/ConnectCard/ConnectCard';
import './Connect.css'
import { getUsers } from '../../utilities/users-api';
import { useState, useEffect } from 'react';


export default function Connect({user}) {  

  const [users, setUsers] = useState([]);

  useEffect(function() {
    async function allUsers() {
      const users = await getUsers()
      setUsers(users)
    }
    allUsers();
  }, []);

  

  return (
    <div className="connect">
      <div className="connect-header">
        <h1>Connect</h1>
      </div>
      {console.log(users)}
      {console.log(user)}
      {users.map((user, idx) => (
        <div className="connect-card">
          <ConnectCard user={user} index={idx}/>
        </div>
      ))}

      <div className='wrapper'>
      <div className='top-panel'></div>
      <div className='bottom-panel'></div>
    </div>
    </div>
  );
}