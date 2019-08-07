import React, { Component, Fragment } from 'react';
import Header from '@components/commons/Header';
import Footer from '@components/commons/Footer';
import Party from '@components/party/Party';
import '../index.css';

class AdminDashboard extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <Fragment>
        <Header />
        <Party />
        <Footer />
      </Fragment>
    )
  }
}

export default AdminDashboard;
