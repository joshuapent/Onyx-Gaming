import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import flo from '../../assets/flo.mp4'



export default function AuthPage({setUser}) {
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