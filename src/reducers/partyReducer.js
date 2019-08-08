import {
FETCH_PARTIES, FETCH_SINGLE_PARTY, UPDATE_SINGLE_PARTY, CLEAR_PARTIES
} from '@actions/types';

const initialState = {
  parties: [],
  party: {},
  errors: {}
};

const partyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PARTIES:
      return {
        ...state,
        parties: action.payload
      }

    case FETCH_SINGLE_PARTY:
      return {
        ...state,
        party: action.payload
      }
    case UPDATE_SINGLE_PARTY:
      return {
        ...state,
        parties: action.payload
      }
    case CLEAR_PARTIES:
      return {
        parties: [],
        party: {},
        errors: {}
      }
    
      default:
        return state;
  }
}

export default partyReducer;
