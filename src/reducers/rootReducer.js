import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './authReducer';
import party from './partyReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  blacklist: ['errors']
};

const appReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  party,

});

export default appReducer;
