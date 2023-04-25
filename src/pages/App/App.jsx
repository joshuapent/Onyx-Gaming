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

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <div className='wrapper'>
        <div className='top-panel'></div>
        <div className='bottom-panel'></div>
      </div>
      { user ?
          <>
            <NavBar user= {user} setUser={setUser}/>
            <Routes>
              <Route path="/" element={< Home />}></Route>
              <Route path="/connect" element={< Connect />}></Route>
              <Route path="/connections" element={< Connections user={user}/>}></Route>
              <Route path="/account" element={< Account user={user}/>}></Route>
            </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
