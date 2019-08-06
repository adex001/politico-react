import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import {} from 'redux-persist'
import { persistor } from '../../store/configureStore';
import Routes from './Routes';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <Fragment>
      <ToastContainer hideProgressBar />
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Fragment>
  );
}
