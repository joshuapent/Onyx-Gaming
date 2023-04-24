import { Link } from 'react-router-dom';
import * as userService from "../../utilities/users-service"

export default function NavBar({ user, setUser }) {
  function handleLogout() {
    userService.logOut()
    setUser(null);
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/connect">Connect</Link>
      &nbsp; | &nbsp;
      <Link to="/connections">Connections</Link>
      &nbsp; | &nbsp;
      <Link to="/account">{user && user.name}</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogout}>Log Out</Link>
    </nav>
  );
}