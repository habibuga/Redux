// Zadanie z wykładowcą

import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import reducer from './reducer';

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware()
  )
);

export default store;
