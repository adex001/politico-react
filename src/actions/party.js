import axios from 'axios';
import { toast } from "react-toastify";
import { FETCH_PARTIES, FETCH_SINGLE_PARTY } from './types';

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

export const createParty = payload => async dispatch  => {
  try {
    const response = await axios.post('/parties', payload);
    dispatch(setParty(response.data.data));
    toast.success('Party added!');
  } catch (err) {
    toast.error('Cannot create party!');
  }
}
export const getParty = id => async dispatch => {
  try {
    const response = await axios.get(`/parties/${id}`);
    dispatch(setParty(response.data.data));
    toast.success('Party retrieved!');
  } catch (err) {
    toast.error('Cannot fetch party!');
  }
}
