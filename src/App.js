import React from "React";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Routes from "./Routes";
import reducers from "./reducers/index.js";

export default props => (
  <Provider store={createStore(reducers)}>
    <Routes />
  </Provider>
);
