import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  RESET_USER,
  LOGOUT_USER
} from '@actions/types';

const initialState = {
  user: {},
  isAuthenticated: false,
  error: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: {}
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload
      }
    case RESET_USER:
    case LOGOUT_USER:
      return {
        ...state,
        user: {},
        isAuthenticated: false,
        error: {}
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: {}
      }

    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false
      }
    
    default:
      return state;
  }
};

export default authReducer;
