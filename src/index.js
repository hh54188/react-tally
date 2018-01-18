import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector("#app")
  );
};

renderApp();

if (module.hot) {
  module.hot.accept("./App", function() {
    renderApp();
  });
}
