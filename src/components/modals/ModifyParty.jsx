import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { modifyParty, getParty } from "@actions/party";

class ModifyParty extends Component {
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

  componentDidMount(){
    const { getParty, id } = this.props;
    getParty(id);
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
    const {modifyParty, id} = this.props;
    modifyParty(id, party);
  }
  clear = () => {
    this.setState({
      party: {
        name: '',
        address: '',
        logoUrl: '',
      }
    })
  }

  render() {
    const { close } = this.props;

    const { party } = this.state;
    
    return (
      <div className="center-items make-flex-column">
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
          <h2>Modify Political Party</h2>
          <form method="POST" action="#" onSubmit={this.handleSubmit}>
            <input type="text" className="create-group" id="c-party-name" value={party.name} placeholder="Party Name" name="name" onChange={this.handleChange} />
            <input type="text" className="create-group" id="c-party-address" placeholder="Party Address" name="address" onChange={this.handleChange} value={party.address} />
            <input type="text" className="create-group" id="c-party-logo" placeholder="Icon URL" name="logoUrl" onChange={this.handleChange} value={party.logoUrl} />
            <input type="submit" className="submit-button" value="Modify" id="m-submit-party" />
            <input type="button" className="submit-button" value="Clear" id="m-clear-party" onClick={this.clear} />
          </form>
        </div>
      </div>
    )
  }
}

ModifyParty.propTypes = {
  modifyParty: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  getParty: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  party: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    logo: PropTypes.string,
    partyid: PropTypes.number
  }).isRequired,
};

const mapStateToProps = state => ({
  party: state.party.party
});

export default connect(
  mapStateToProps,
  { modifyParty, getParty }
)(ModifyParty);