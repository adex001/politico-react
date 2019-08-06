import React, { Component, Fragment } from 'react';
import Header from '@components/commons/Header';
import Footer from '@components/commons/Footer';
import SignModal from '@components/commons/SignModal';
import images from '@images';
const { home } = images;

export default class Signup extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <SignModal />
        <Footer />
      </Fragment>
    )
  }
}
