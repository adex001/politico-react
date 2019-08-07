import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchParties } from "@actions/party";
import CreateParty from '@components/modals/CreateParty';

class Party extends Component {
  constructor() {
    super();
    this.state = {
      showCreatePartyModal: false
    }
  }

  componentDidMount(){
    const { fetchParties, } = this.props;
    fetchParties();
  }

  componentWillReceiveProps() {
    this.closeModal();
  }

  openCreateModal = () => {
    this.setState({
      showCreatePartyModal: true
    });
  }
  closeModal = () => {
    this.setState({
      showCreatePartyModal: false
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
        </li>
      )
    })
  }
  render() {
    const { parties } = this.props;
    const { showCreatePartyModal } = this.state;
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
  )
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.auth.user.isAdmin,
  parties: state.party.parties
});

export default connect(
  mapStateToProps,
  { fetchParties }
)(Party);
