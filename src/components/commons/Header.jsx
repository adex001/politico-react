import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import images from '@images';

const { logo, hamburger } = images;

class Header extends Component {
  constructor(props){
    super(props);

    this.state = {}
  }
  render() {
    const { isAuthenticated } = this.props;
    return (
      <header>
        <div className="container">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Politico Logo" />
              <span>Politico</span>
            </a>
          </div>
          <span className="togglebar" id="toggler"> 
            <img src={hamburger} alt="Toggle" />
          </span>
          {!isAuthenticated ? (          
            <ul id="js-nav">
              <li><a href="/signup">Signup</a></li>
              <li><a href="/login">Signin</a></li>
            </ul>
): <a href="/logout">Logout</a> }

        </div>
      </header>
    )
  }
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  null
)(Header);
