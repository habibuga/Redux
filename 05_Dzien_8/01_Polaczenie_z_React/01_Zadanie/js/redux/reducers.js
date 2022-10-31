import { combineReducers } from "redux";

import { ADD_ARTICLE, ADD_USER, REMOVE_ARTICLE } from "./actions";

const initialUsersState = {
  jan: 0,
  gosia: 0
};

const users = (state = initialUsersState, { type, payload }) => {
  console.log(type, payload);
  switch(type) {
    case ADD_USER: {
      return {
        ...state,
        [payload]: 0,
      }
    }
    case ADD_ARTICLE: {
      const articlesCounter = state[payload.userId] + 1;

      return {
        ...state,
        [payload.userId]: articlesCounter,
      }
    }
    default: {
      return state;
    }
  }
}

const articles = (state = [], { type, payload }) => {
  console.log(type, payload);
  switch(type) {
    case ADD_ARTICLE: {
      return [...state, payload.title];
    }
    case REMOVE_ARTICLE: {
      return state.filter((element, index) => index !== payload);
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  users,
  articles
});
