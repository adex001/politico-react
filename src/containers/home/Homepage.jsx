import React, { Component, Fragment } from 'react'
import Header from '@components/commons/Header';
import Footer from '@components/commons/Footer';
import images from '@images';
import './index.css';

const { home } = images;

class Homepage extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <div className="container">
            <img className="logo-img" src={home} alt="Vote Carton" />
            <h2>Vote Wisely..</h2>
            <a href="./html/signup.html">
              <button type="button" id="vote-submit">Get Started</button>
            </a>
          </div>
        </main>
        <Footer />
      </Fragment>
    )
  }
}

export default Homepage;
