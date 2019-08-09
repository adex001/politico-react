/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import Header from '@components/commons/Header';
import Footer from '@components/commons/Footer';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { login } from "@actions/auth";
import images from '@images';

const { logo } = images;

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {
        email: '',
        password: ''
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { user } = this.state;
    const { email, password } = user;
    const { login, history, isAdmin, isAuthenticated } = this.props;
    const loginObject = {
      email,
      password
    }
    login(loginObject, history);
  }

  handleChange = (e) => {
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <div className="container">
            <div className="form signup">
              <img src={logo} alt="Politico Logo" />
              <h2>LOG IN</h2>
              <form method="POST" action="#" onSubmit={this.handleSubmit}>
                <input type="email" className="form-field" id="email" name="email" placeholder="Email" onChange={this.handleChange} required />
                <input type="password" className="form-field" placeholder="Password" name="password" id="p1" onChange={this.handleChange} required />
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

Login.defaultProps = {
  isAdmin: false,
  isAuthenticated: false
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool,
  isAuthenticated: PropTypes.bool

};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: (state.auth.user.isAdmin == null) ? false : state.auth.user.isAdmin
});

export default connect(
  mapStateToProps,
  { login }
)(withRouter(Login));
