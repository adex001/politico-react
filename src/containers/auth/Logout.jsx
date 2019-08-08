import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { logout } from "@actions/auth";

function Logout(props) {
  const { logout, history } = props;
  logout();
  history.push('/');
  return (
    <div />
  )
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: (state.auth.user.isAdmin == null) ? false : state.auth.user.isAdmin
});

export default connect(
  mapStateToProps,
  { logout, history }
)(withRouter(Logout));
