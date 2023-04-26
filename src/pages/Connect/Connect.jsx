import ConnectCard from '../../components/ConnectCard/ConnectCard';
import './Connect.css'

export default function Connect({user}) {  
    return (
      <div className="connect">
        <div className="connect-header">
          <h1>Connect</h1>
        </div>

        <div className="connect-card">
          <ConnectCard user={user}/>
        </div>

        <div className='wrapper'>
        <div className='top-panel'></div>
        <div className='bottom-panel'></div>
      </div>
      </div>
    );
  }