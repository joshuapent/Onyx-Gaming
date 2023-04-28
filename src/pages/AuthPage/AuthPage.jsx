import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import flo from '../../assets/flo.mp4'



export default function AuthPage({setUser}) {
  return (
    <main className='auth'>
      <video className='videobg' src={flo} autoPlay loop muted />
      <div className='authstuff'>
      <h1>Onyx Gaming</h1>
      <div>
      <SignUpForm setUser={setUser}/>
      </div>
      <div className='loginbx'>
      <LoginForm setUser={setUser}/>
      </div>
      </div>
    </main>
  );
}