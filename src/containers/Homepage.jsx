import React, { Component, Fragment } from 'react'
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';
import images from '@images';
const { home } = images;
import './index.css';

class Homepage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <div className="container">
            <img className="logo-img" src={home} alt="Vote Carton" />
            <h2>Vote Wisely..</h2>
            <a href="./html/signup.html">
              <button id="vote-submit">Get Started</button>
            </a>
          </div>
        </main>
        <Footer />
      </Fragment>
    )
  }
}

export default Homepage;
