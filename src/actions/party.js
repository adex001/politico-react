import axios from 'axios';
import { toast } from "react-toastify";
import { FETCH_PARTIES, FETCH_SINGLE_PARTY, UPDATE_SINGLE_PARTY, CLEAR_PARTIES } from './types';

export const fetchParties = () => async dispatch => {
  try {
    const response = await axios.get('/parties');
    dispatch(setParties(response.data.data));
    toast.success('Parties retrieved!');
  } catch (err) {
    toast.error('Cannot fetch parties!');
  }
}

export const setParties = parties => {
  return {
    type: FETCH_PARTIES,
    payload: parties
  }
}

export const setParty = party => {
  return {
    type: FETCH_SINGLE_PARTY,
    payload: party
  }
}

export const updateParty = party => {
  return {
    type: UPDATE_SINGLE_PARTY,
    payload: party
  }
}

export const clearParty = () => dispatch => {
  dispatch({
    type: CLEAR_PARTIES
  })
}

export const deleteParty = (id) => async dispatch => {
  try {
    await axios.delete(`/parties/${id}`);
    const response = await axios.get('/parties');
    dispatch(setParties(response.data.data));
  } catch (err) {
    toast.error(err.response.message);
  }
}

export const createParty = payload => async dispatch  => {
  try {
    const response = await axios.post('/parties', payload);
    dispatch(setParty(response.data.data));
    toast.success('Party added!');
  } catch (err) {
    toast.error('Cannot create party!');
  }
}

export const modifyParty = (id, payload) => async dispatch => {
  try {
    await axios.patch(`/parties/${id}`, payload);
    const response = await axios.get('/parties');
    dispatch(setParties(response.data.data));
    toast.success('Party updated successfully!');
  } catch (err) {
    toast.error(err.response.error);
  }
}
export const getParty = id => async dispatch => {
  try {
    const response = await axios.get(`/parties/${id}`);
    dispatch(setParty(response.data.data[0]));
    toast.success('Party retrieved!');
  } catch (err) {
    toast.error(err.response.error);
  }
}
