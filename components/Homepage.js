import React, { Component, Fragment } from 'react'
import { Header, Footer } from '../common/index';

class Homepage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="main">
          <div className="container">
            <img className="logo-img" src="./images//home.jpg" alt="Vote Carton" />
            <h2>Vote Wisely..</h2>
            <a href="./html/signup.html">
              <button id="vote-submit">Get Started</button>
            </a>
          </div>
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default Homepage;
