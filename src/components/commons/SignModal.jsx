import React, { Component } from 'react';
import images from '@images';

const { logo } = images;

export default class SignModal extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <main>
        <div className="container">
          <div className="form signup">
            <img src={logo} alt="Politico Logo" />
            <h2>SIGN UP</h2>
            <form method="POST" id="signupform" action="./dashboard.html">
              <input type="email" className="form-field" id="email" placeholder="Email" required />
              <input type="text" className="form-field" id="firstname" placeholder="Firstname" required />
              <input type="text" className="form-field" id="lastname" placeholder="Lastname" required />
              <input type="password" className="form-field" placeholder="Password" id="p1" required />
              <input type="password" className="form-field" placeholder="Re-enter Password" id="p2" required />
              <span className="remember-me" />
              <input type="submit" value="Sign up" className="form-submit-button" id="signup-button" />
            </form>
          </div>
        </div>
      </main>
    )
  }
}
