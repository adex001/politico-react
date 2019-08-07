import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createParty } from "@actions/party";

class CreateParty extends Component {
  constructor(props){
    super(props);
    this.state = {
      party: {
        name: '',
        address: '',
        logoUrl: '',
      }
    }
  }

  handleChange = e => {
    const { party } = this.state;
    this.setState({
      party: {
        ...party,
        [e.target.name]: e.target.value
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { party } = this.state;
    const {createParty} = this.props;
    createParty(party);
  }
  render() {
    const { close } = this.props;
    return (
      <div id="" className="center-items make-flex-column">
        <div className="create make-flex-column">
          <span
            className="close"
            onClick={close} 
            onKeyDown={close} 
            role='presentation'
            id="pty"
          >
&times;

          </span>
          <h2>Create Poltical Party</h2>
          <form method="POST" action="#" onSubmit={this.handleSubmit}>
            <input type="text" className="create-group" id="c-party-name" placeholder="Party Name" name="name" onChange={this.handleChange} />
            <input type="text" className="create-group" id="c-party-address" placeholder="Party Address" name="address" onChange={this.handleChange} />
            <input type="text" className="create-group" id="c-party-logo" placeholder="Icon URL" name="logoUrl" onChange={this.handleChange} />
            <input type="submit" className="submit-button" value="Create" id="c-submit-party" />
          </form>
        </div>
      </div>
    )
  }
}

CreateParty.propTypes = {
  createParty: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired

};

export default connect(
  null,
  { createParty }
)(CreateParty);
