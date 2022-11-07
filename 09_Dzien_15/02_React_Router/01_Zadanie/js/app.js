import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./redux/store";

import {
  BrowserRouter as Router,
  Link,
  Switch, // v6 Routes
  Route,
} from 'react-router-dom';

// import Todo from './containers/Todo'; // for Redux containers & router v5
import Todo from './components/Todo'; // for Redux hooks & router v6

const App = () => (
  <Provider store={store}>
    <Router>
      <nav>
        <ul>
          <li><Link to="/all">wszystkie</Link></li>
          <li><Link to="/done">zrobione</Link></li>
          <li><Link to="/undone">nie zrobione</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/:status?" component={Todo} />

        {/* <Route path="/">
          <Route path="/" element={<Todo />} />
          <Route path="/:status" element={<Todo />} />
        </Route> */}

      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<App/>, document.getElementById("app"));
