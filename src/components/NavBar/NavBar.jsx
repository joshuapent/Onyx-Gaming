import { Link } from 'react-router-dom';
import * as userService from "../../utilities/users-service"
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogout() {
    userService.logOut()
    setUser(null);
  }

  return (
    <nav className='Nav'>
      <img className='onyxlogo' src="../../../Logo.png" alt="" srcset="" />
      <ul>
        <li><Link style={{color:"white"}} to="/">Home</Link></li>
        <li><Link style={{color:"white"}} to="/connect">Connect</Link></li>
        <li><Link style={{color:"white"}} to="/connections">Connections</Link></li>
        <li><Link style={{color:"white"}} to="/account">{user && user.name}</Link></li>
      </ul>
        <h3><Link style={{color:"white"}} to="" onClick={handleLogout}>Log Out</Link></h3>
    </nav>
  );
}