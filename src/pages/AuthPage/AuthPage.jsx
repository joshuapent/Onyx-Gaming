import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import "../AuthPage/float.mp4";


export default function AuthPage({setUser}) {
  return (
    <main className='auth'>
      <video autoPlay loop muted playsInline type="video/mp4">
        <source src='../Authpage/float.mp4' type='video/mp4'/>
      </video>
      <h1>Onyx Gaming</h1>
      <div>
      <SignUpForm setUser={setUser}/>
      </div>
      <div className='loginbx'>
      <LoginForm setUser={setUser}/>
      </div>
    </main>
  );
}