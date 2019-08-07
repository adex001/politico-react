import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { setToken } from '@actions/auth';
import App from "./components/App";
import { store } from "./store/configureStore";

const token = localStorage.getItem('token');
setToken(token);

const renderApp = () => {
  return render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("app")
  );
};

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./components/App", renderApp);
}

renderApp();