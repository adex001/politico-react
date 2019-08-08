import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import PropTypes from "prop-types";
import { createParty } from "@actions/party";

const instance = axios.create({
  headers: {}
});

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
            <input type="text" className="create-group" id="c-party-name" placeholder="Party Name" name="name" onChange={this.handleChange} required />
            <input type="text" className="create-group" id="c-party-address" placeholder="Party Address" name="address" onChange={this.handleChange} required />
            <input type="file" accept="image/*" className="create-group" id="c-party-logo" name="logoUrl" onChange={this.handleImage} />
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
