import React, { Component, Fragment } from 'react';
import images from '@images';
const { logo, hamburger } = images;

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="logo">
            <a href="./index.html">
              <img src={logo} alt="Politico Logo" />
              <span>Politico</span>
            </a>
          </div>
          <span className="togglebar" id="toggler"> 
            <img src={hamburger} alt="Image" />
          </span>
          <ul id="js-nav">
            <li><a href="./html/signup.html">Signup</a></li>
            <li><a href="./html/signin.html">Signin</a></li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header;
