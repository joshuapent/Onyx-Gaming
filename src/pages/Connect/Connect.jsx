import ConnectCard from '../../components/ConnectCard/ConnectCard';
import './Connect.css'

export default function Connect({user, users}) {  
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