import React from "react";

import Counter from '../containers/Counter';
import List from '../containers/List';

import { Provider } from "react-redux";

import store from '../redux/store';

import { BrowserRouter as Router, Route } from "react-router-dom";

const Main = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/:init?" component={Counter} />
      </Router>
      <List />
    </Provider>
  )
}

export default Main;
