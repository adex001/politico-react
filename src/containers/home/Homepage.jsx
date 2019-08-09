import React, { Fragment } from 'react'
import Header from '@components/commons/Header';
import Footer from '@components/commons/Footer';
import images from '@images';

const { home } = images;

export default function Homepage() {
  return (
    <Fragment>
      <Header />
      <main>
        <div className="container">
          <img className="logo-img" src={home} alt="Vote Carton" />
          <h2>Vote Wisely..</h2>
          <a href="/signup">
            <button type="button" id="started">Get Started</button>
          </a>
        </div>
      </main>
      <Footer />
    </Fragment>
  )
}
