import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';

class IsAuthenticated extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    const { isAuthenticated, history } = this.props;
    if(!isAuthenticated) {
      history.push('/login');
    }
  }

  render() {
    return (
      <div />
    )
  }
}

IsAuthenticated.propTypes = {
  history: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired

};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  null
)(withRouter(IsAuthenticated));
