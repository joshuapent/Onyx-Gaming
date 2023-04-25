import { Link } from 'react-router-dom';
import * as userService from "../../utilities/users-service"

export default function NavBar({ user, setUser }) {
  function handleLogout() {
    userService.logOut()
    setUser(null);
  }

  return (
    <nav>
      <Link style={{color:"white"}} to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link style={{color:"white"}} to="/connect">Connect</Link>
      &nbsp; | &nbsp;
      <Link style={{color:"white"}} to="/connections">Connections</Link>
      &nbsp; | &nbsp;
      <Link style={{color:"white"}} to="/account">{user && user.name}</Link>
      &nbsp; | &nbsp;
      <Link style={{color:"white"}} to="" onClick={handleLogout}>Log Out</Link>
    </nav>
  );
}