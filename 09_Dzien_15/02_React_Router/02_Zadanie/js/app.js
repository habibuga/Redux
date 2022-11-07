import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./redux/store";

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from 'react-router-dom';

import Cart from './containers/Cart';

const App = () => (
  <Provider store={store}>
    <Router>
      <nav>
        <ul>
          <li><Link to="/all">wszystkie</Link></li>
          <li><Link to="/10">do 10zł</Link></li>
          <li><Link to="/50">do 50zł</Link></li>
          <li><Link to="/100">do 100zł</Link></li>
        </ul>
      </nav>
      <Switch>

        <Route path="/:limit?" component={Cart} />

      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<App/>, document.getElementById("app"));
