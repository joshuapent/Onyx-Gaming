import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      if (credentials.email === '') setError('Log In Failed - Try Again');
    } catch (err) {
      console.log(err)
      setError('Your email and password did not match - Try Again');
    }
  }

  return (
    <div className='box'>
      <div className="form-container">
        <form className='authform' autoComplete="off" onSubmit={handleSubmit}>
          <label className='authlbl'>Email</label>
          <br />
          <input className='authinput' type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <br />
          <label className='authlbl'>Password</label>
          <br />
          <input className='authinputpw' type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button className='signin' type="submit">LOGIN</button>
        </form>
        <div className="no-account">
        <p className='no-account-msg'>Don't have an account?</p>
        <button className='no-account-btn'>SIGN UP!</button>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </div>
    </div>
  );
}