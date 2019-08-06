import React, { Component } from 'react';
import images from '@images';
const { logo } = images;

export default class SignModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: true,
    }
  }
  render() {
    const {signup} = this.state;
    return (
      <main>
        <div className="container">
          <div className="form signup">
            <img src={logo} alt="Politico Logo" />
            <h2>{signup ? 'SIGN UP' : 'SIGN IN' }</h2>
            <form method="POST" id="signupform" action="./dashboard.html">
              <input type="email" className="form-field" id="email" placeholder="Email" value = "" required />
              <input type="text" className="form-field" id="firstname" placeholder="Firstname" value = "" required />
              <input type="text" className="form-field" id="lastname" placeholder="Lastname" value = "" required />
              <input type="password" className="form-field" placeholder="Password" id="p1" value = "" required />
              <input type="password" className="form-field" placeholder="Re-enter Password" id="p2" value = "" required />
              <span className="remember-me"></span>
              <input type="submit" value="Sign up" className="form-submit-button" id="signup-button" />
            </form>
          </div>
        </div>
      </main>
    )
  }
}
