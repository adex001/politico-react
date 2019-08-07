import {
FETCH_PARTIES, FETCH_SINGLE_PARTY
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
        parties: state.parties.concat(action.payload),
        party: action.payload
      }
    
      default:
        return state;
  }
}

export default partyReducer;
