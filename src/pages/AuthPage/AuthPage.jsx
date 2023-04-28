import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';


export default function AuthPage({setUser}) {
  return (
    <main className='auth'>
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