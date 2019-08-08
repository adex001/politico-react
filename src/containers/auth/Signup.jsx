import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { signup } from "@actions/auth";
import { withRouter } from 'react-router-dom';
import Header from '@components/commons/Header';
import Footer from '@components/commons/Footer';
import images from '@images';

const { logo } = images;

class Signup extends Component {
  constructor() {
    super();
    this.state={
      user: {
        email: '',
        password: '',
        password2: '',
        firstname: '',
        lastname: ''
      }
    }
  }

  handleChange = (e) => {
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [e.target.name]: e.target.value
      }
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { user } = this.state;
    const { email, password, firstname, lastname } = user
    const { signup, history } = this.props;
    const signupObject = {
      email, password, firstname, lastname
    }
    signup(signupObject, history);

  }
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <div className="container">
            <div className="form signup">
              <img src={logo} alt="Politico Logo" />
              <h2>SIGN UP</h2>
              <form method="POST" id="signupform" action="#" onSubmit={this.handleSubmit}>
                <input type="email" className="form-field" id="email" name="email" placeholder="Email" onChange={this.handleChange} required />
                <input type="text" className="form-field" name="firstname" id="firstname" placeholder="Firstname" onChange={this.handleChange} required />
                <input type="text" className="form-field" id="lastname" name="lastname" placeholder="Lastname" onChange={this.handleChange} required />
                <input type="password" className="form-field" placeholder="Password" name="password" id="p1" onChange={this.handleChange} required />
                <input type="password" className="form-field" placeholder="Re-enter Password" name="password2" id="p2" onChange={this.handleChange} required />
                <span className="remember-me" />
                <input type="submit" value="Sign up" className="form-submit-button" id="signup-button" />
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </Fragment>
    )
  }
}

Signup.propTypes = {
  signup: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,

};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: (state.auth.user.isAdmin == null) ? false : state.auth.user.isAdmin
});

export default connect(
  mapStateToProps,
  { signup }
)(withRouter(Signup));
