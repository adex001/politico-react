import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from '@components/App/Routes';
import { store } from './src/store/configureStore';

const renderApp = () => {
  render(
    <Provider store={store}>
      <Routes />
    </Provider>,
    document.getElementById('app')
  );
}

renderApp();
