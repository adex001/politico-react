import axios from 'axios';
import { toast } from 'react-toastify';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  RESET_USER,
  LOGOUT_USER
} from '@actions/types';

axios.defaults.baseURL = 'https://politico2019.herokuapp.com/api/v1';

const setToken =  token => {
  token ? axios.defaults.headers.common['token'] = token : delete axios.defaults.headers.common['token'];   
}

export const signup = signupObject => async dispatch => {
  try {
    dispatch(resetUser());
    const response = await axios.post('/auth/signup', signupObject);
    setToken(response.data.data[0].token);
    localStorage.setItem('token', response.data.data[0].token);
    dispatch(registerSuccess(response.data.data[0].user));
    toast.success('Registration successful');
  } catch (err) {
    dispatch(resetUser());
    dispatch(registerError(err.response));
    return false;
  }
  
}

export const login = loginObject => async dispatch => {
  try {
    dispatch(resetUser());
    const response = await axios.post('/auth/login', loginObject);
    setToken(response.data.data[0].token);
    localStorage.setItem('token', response.data.data[0].token);
    dispatch(loginSuccess(response.data.data[0].user));
    toast.success('Login successful');
  } catch (err) {
    dispatch(resetUser());
    dispatch(loginError(err.response));
    toast.error('Something went wrong');
    return false;
  }
}

export const logout = () => dispatch => {
  localStorage.removeItem('token');
  setToken(false);
  dispatch({
    type: LOGOUT_USER
  });
  window.location.href = '/';
}

const loginError = error => {
  return {
    type: LOGIN_FAILURE,
    payload: error
  }
}

  const loginSuccess = payload => {
    return {
      type: LOGIN_SUCCESS,
      payload,
    }
  };

const registerSuccess = payload => {
  return {
    type: REGISTER_SUCCESS,
    payload,
  }
};

const resetUser = () => {
    return {
      type: RESET_USER
    }
};

const registerError = errors => {
  return {
    type: REGISTER_FAILURE,
    payload: errors
  }
}
