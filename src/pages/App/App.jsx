import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import Home from '../Home/Home';
import Connect from '../Connect/Connect';
import Account from '../Account/Account';
import Connections from '../Connections/Connections';
import { getUsers } from '../../utilities/users-api';


export default function App() {
  const [user, setUser] = useState(getUser());

  async function users() {
    const users = await getUsers()
    return users;
  }


  return (
    <main className="App">
      { user ?
          <>
            <NavBar user= {user} setUser={setUser}/>
            <Routes>
              <Route path="/" element={< Home />}></Route>
              <Route path="/connect/*" element={< Connect user={user}/>}></Route>
              <Route path="/connections/*" element={< Connections user={user} users={users}/>}></Route>
              <Route path="/account/*" element={< Account user={user}/>}></Route>
            </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
