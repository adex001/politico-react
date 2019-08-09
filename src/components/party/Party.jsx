import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchParties, clearParty, deleteParty } from "@actions/party";
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
  openModifyModal = (partyid) => {
    this.setState({
      id: partyid,
      showModifyPartyModal: true
    });
  }
  deleteParty = e => {
    const { deleteParty } = this.props;
    const id = e.target.attributes.getNamedItem('data').value;
    deleteParty(id);

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
            <button className="warning modify" type="button" onClick={() => this.openModifyModal(party.partyid)} data={party.partyid}>modify</button>
            <button className="danger delete-party" type="button" onClick={this.deleteParty} data={party.partyid}>delete</button>
          </span>
        </li>
      )
    })
  }
  render() {
    const { parties } = this.props;
    const { showCreatePartyModal, showModifyPartyModal, id } = this.state;
    return (
      <div className="makerelative">
        <button type="button" onClick={this.openCreateModal} className="make-button">Add Party </button>
        <ul className="make-flex-column">
          <li className="make-flex-row center-items bold first-row">
            <span className="sn">s/n</span>
            <span className="plogo">Party Logo</span>
            <span className="pname">Party Name</span>
            <span className="paddress">Party Address</span>
            <span className="action"> Action </span>  
          </li>
          {this.displayParties(parties)}
        </ul>
        
        {showCreatePartyModal ? <CreateParty close={this.closeModal} handleImage={this.handleImage} /> : '' }
        {showModifyPartyModal ? <ModifyParty partyFrom={parties.find(party => party.partyid === id)} close={this.closeModal} id={id} handleImage={this.handleImage} /> : '' }
      </div>
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
  clearParty: PropTypes.func.isRequired,
  deleteParty: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.auth.user.isAdmin,
  parties: state.party.parties
});

export default connect(
  mapStateToProps,
  { fetchParties, clearParty, deleteParty }
)(Party);
