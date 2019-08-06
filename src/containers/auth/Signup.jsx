import React, { Component, Fragment } from 'react';
import Header from '@components/commons/Header';
import Footer from '@components/commons/Footer';
import SignModal from '@components/commons/SignModal';

class Signup extends Component {
  constructor() {
    super();
    this.state={}
  }
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

export default Signup;
