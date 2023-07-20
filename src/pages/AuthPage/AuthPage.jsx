import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import flo from '../../assets/flo.mp4'
import { useState } from 'react';



export default function AuthPage({setUser}) {

  const [authState, setAuthState] = useState(true)

  return (
    <main className='auth'>
      <video className='videobg' src={flo} autoPlay loop muted />
      <div className='authstuff'>
      <div className='titletext'>
        <span>O</span>
        <span>N</span>
        <span>Y</span>
        <span>X</span>
        <span>G</span>
        <span>A</span>
        <span>M</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>

      {authState ? <div>
      <LoginForm setUser={setUser} setAuthState={setAuthState}/>
      </div>
      : <div className='loginbx'>
      <SignUpForm setUser={setUser} setAuthState={setAuthState}/>
      </div>}
      </div>
    </main>
  );
}