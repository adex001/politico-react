import axios from 'axios';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_USER
} from '@actions/types';

axios.defaults.baseURL = 'https://politico2019.herokuapp.com/api/v1';

const setToken =  token => {
  token ? axios.defaults.headers.common['x-auth-token'] = token : delete axios.defaults.headers.common['x-auth-token'];   
}

export const signup = signupObject => async dispatch => {
  try {
    const response = await axios.post('/auth/signup', signupObject);
    setToken(response.data.token);
    console.log(response);
    dispatch(registerSuccess(response.data));
  } catch (err) {
    dispatch(registerError(err.response));
  }
  
}

export const signin = signinObject => async dispatch => {
  
}

const registerSuccess = payload => {
  return {
    type: REGISTER_SUCCESS,
    payload,
  }
}

const registerError = errors => {
  return {
    type: REGISTER_FAILURE,
    payload: errors
  }
}

