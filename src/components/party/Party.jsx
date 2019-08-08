import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchParties, clearParty } from "@actions/party";
import CreateParty from '@components/modals/CreateParty';
import ModifyParty from '../modals/ModifyParty';

class Party extends Component {
  constructor() {
    super();
    this.state = {
      showCreatePartyModal: false,
      showModifyPartyModal: false,
      id: 0
    }
  }
  
  componentDidMount(){
    const { fetchParties, } = this.props;
    fetchParties();
  }
  
  
  componentWillReceiveProps() {
    this.closeModal();
  }
  
  componentWillUnmount(){
    const { clearParty } = this.props;
    clearParty();
  }
  openCreateModal = () => {
    this.setState({
      showCreatePartyModal: true
    });
  }
  openModifyModal = (e) => {
    const id = e.target.attributes.getNamedItem('data').value;
    this.setState({
      id,
      showModifyPartyModal: true
    });
  }
  closeModal = () => {
    this.setState({
      showCreatePartyModal: false,
      showModifyPartyModal: false
    });
  }
  
  displayParties = (parties) => {
    if(parties.length === 0 ) return <p>Parties Empty. Check back later! </p>

    return parties.map((party, index) => {
      return (
        <li key={party.partyid} className="make-flex-row center-items pdisp">
          <span className="sn">{index+1}</span>
          <span className="plogo"><img src={party.logo} alt="logo" /></span>
          <span className="pname">{party.name}</span>
          <span className="paddress">{party.address}</span>
          <span className="action">
            <button className="warning modify" type="button" onClick={this.openModifyModal} data={party.partyid}>modify</button>
            <button className="danger delete-party" type="button">delete</button>
          </span>
        </li>
      )
    })
  }
  render() {
    const { parties } = this.props;
    const { showCreatePartyModal, showModifyPartyModal, id } = this.state;
    return (
      <Fragment>
        <button type="button" onClick={this.openCreateModal}>Add Party </button>
        <ul>
          <li className="make-flex-row center-items pdisp make-bold">
            <span className="sn">s/n</span>
            <span className="plogo">Party Logo</span>
            <span className="pname">Party Name</span>
            <span className="paddress">Party Address</span>
          </li>
          {this.displayParties(parties)}
        </ul>
        {showCreatePartyModal ? <CreateParty close={this.closeModal} /> : '' }
        {showModifyPartyModal ? <ModifyParty close={this.closeModal} id={id} /> : '' }
      </Fragment>
    )
  }
}

Party.defaultProps = {
  parties: []
}

Party.propTypes = {
  fetchParties: PropTypes.func.isRequired,
  parties: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      address: PropTypes.string,
      logo: PropTypes.string,
      partyid: PropTypes.number
    })
  ),
  clearParty: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.auth.user.isAdmin,
  parties: state.party.parties
});

export default connect(
  mapStateToProps,
  { fetchParties, clearParty }
)(Party);
