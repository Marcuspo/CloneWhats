import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Firebase from "../src/utils/Firebase";

import Routes from "./Routes";
import reducers from "./reducers/index.js";

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
