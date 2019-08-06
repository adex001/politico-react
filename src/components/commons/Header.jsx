import React, { Component } from 'react';
import images from '@images';

const { logo, hamburger } = images;

class Header extends Component {
  constructor(){
    super();

    this.state = {}
  }
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
            <img src={hamburger} alt="Toggle" />
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
