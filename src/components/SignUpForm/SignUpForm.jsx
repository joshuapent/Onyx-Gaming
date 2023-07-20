import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    gamertag: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSwap = (evt) => {
    this.props.setAuthState(true)
  }


  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {name, gamertag, email, password} = this.state;
      const formData = {name, gamertag, email, password};
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      // Baby step!
      this.props.setUser(user);
    } catch (err) {
      console.log(err)
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className='box1'>
        <div className="form-container">
          <form className='authform' autoComplete="off" onSubmit={this.handleSubmit}>
            <label className='authlbl'>Name</label>
            
            <input className='authinput' type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <br />
            <label className='authlbl'>Gamer Tag</label>
            
            <input className='authinput' type="text" name="gamertag" value={this.state.gamertag} onChange={this.handleChange} required />
            <br />
            <label className='authlbl'>Email</label>
            
            <input className='authinput' type="text" name="email" value={this.state.email} onChange={this.handleChange} required />
            <br />
            <label className='authlbl'>Password</label>
            
            <input className='authinputpw' type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <br />
            <label className='authlbl'>Confirm</label>
            
            <input className='authinputpw' type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button className='signup' type="submit" disabled={disable}>SIGN UP</button>
          </form>
          <div className="no-account">
            <p className='no-account-msg'>Already have an account?</p>
            <button onClick={this.handleSwap} className='no-account-btn'>LOGIN!</button>
          </div>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}