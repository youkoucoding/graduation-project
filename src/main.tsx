import * as React from "react";
import * as ReactDOM from "react-dom";
import GlobalStyles from "./styles/GlobalStyles";
import App from "./App";
import { Provider } from "react-redux";
import store from "./core/store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
