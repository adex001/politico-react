import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import instance from '@helpers/axioshelp';
import { modifyParty, getParty } from "@actions/party";
import images from '@images';

const { camera } = images;

class ModifyParty extends Component {
  constructor(props){
    super(props);
    this.state = {
      party: {
        name: '',
        address: '',
        logoUrl: '',
      },
      useState: false
    }
  }

  static getDerivedStateFromProps({ partyFrom }, { useState }) {
    if (!useState) {
      return {
        party: {
          name: partyFrom.name,
          address: partyFrom.address,
          logoUrl: partyFrom.logo
         },
        useState: true
      }
    }
    return null;
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
  handleImage = async (e) => {
    const CLOUDINARY_URL= 'https://api.cloudinary.com/v1_1/adex001/image/upload';
    const CLOUDINARY_UPLOAD_PRESET='hv1qo6wl';
    
    const { party } = this.state;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    const response = await instance.post(CLOUDINARY_URL, formData);
      if (response.data.secure_url !== '') {
        const logoUrl = response.data.secure_url;
        this.setState({
          party: {
            ...party,
            logoUrl,
          }
        });
      }
  }
  render() {
    const { close } = this.props;
    const { party } = this.state;

    return (
      <div className="modal">
        <div>
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
          <form method="POST" action="#" onSubmit={this.handleSubmit} className="myform">
            <div className="relative">
              <img src={party.logoUrl} alt="avatar" className="logourl" />
              <input type="file" className="hide" id="file" accept="image/*" />
              <span className="camera-avatar" id="camera-avatar">
                <img
                  src={camera}
                  alt="camera"
                  className="camera"
                  role='presentation'
                  onClick={this.handleImage}
                  onKeyDown={()=>{}}
                />
              </span>
            </div>
            <input type="text" className="create-group" id="c-party-name" value={party.name} placeholder="Party Name" name="name" onChange={this.handleChange} />
            <input type="text" className="create-group" id="c-party-address" placeholder="Party Address" name="address" onChange={this.handleChange} value={party.address} />
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