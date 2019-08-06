import React, { Component, Fragment } from 'react';
import Header from '@components/commons/Header';
import Footer from '@components/commons/Footer';
import images from '@images';

const { logo } = images;

class Login extends Component {
  constructor(){
    super();
    this.state = {
      
    }
  }
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <div className="container">
            <div className="form signup">
              <img src={logo} alt="Politico Logo" />
              <h2>LOG IN</h2>
              <form action="#">
                <input type="email" className="form-field" placeholder="Email" id="email" required />
                <input type="password" className="form-field" placeholder="Password" id="password" required />
                <span className="remember-me">
                  <input type="checkbox" value="Remember" /> 
                  Remember me
                </span>
                <input type="submit" value="Log in" className="form-submit-button" id="login-button" />
                <span className="remember-me" />
                <a href="./password-reset.html" className="forgot-password">forgot password?</a>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </Fragment>
    )
  }
}

export default Login;
